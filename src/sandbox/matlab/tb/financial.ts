// Financial Toolbox — computable closed-form subset: cashflow analysis (npv/irr/pv/fv),
// annuities (pvfix/fvfix/payper/annuity), rate conversions (effrr/nomrr), and Black-Scholes
// option pricing + Greeks. All validatable by hand / closed form. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, scalar, rowVec, toArray, asScalar, toMat as m, isMat,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const arg = (a: Value[], i: number, d: number) => (a.length > i && isMat(a[i]) && a[i].kind === 'num' && (a[i] as { rows: number }).rows ? asScalar(a[i]) : d);

// Standard normal CDF via Abramowitz-Stegun 7.1.26 erf (≈1.5e-7, ample for option prices).
function erf(x: number): number {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}
const normcdf = (x: number) => 0.5 * (1 + erf(x / Math.SQRT2));

/** Net present value: CF(1) at t=0 (undiscounted), CF(k) at t=k-1. */
function npv(rate: number, cf: number[]): number { return cf.reduce((s, c, t) => s + c / (1 + rate) ** t, 0); }

export const FINANCIAL: ToolboxModule = {
  id: 'finance',
  name: 'Financial Toolbox',
  docBase: 'https://www.mathworks.com/help/finance/',
  builtins: {
    // ── cashflow analysis ──
    npv: (a) => ret(scalar(npv(asScalar(a[0]), toArray(m(a[1]))))),
    pvvar: (a) => ret(scalar(npv(arg(a, 1, 0), toArray(m(a[0]))))),     // pvvar(cf, rate) — present value of varying cashflow
    fvvar: (a) => { const cf = toArray(m(a[0])); const r = arg(a, 1, 0); const n = cf.length - 1; return ret(scalar(cf.reduce((s, c, t) => s + c * (1 + r) ** (n - t), 0))); },
    irr: (a) => {
      const cf = toArray(m(a[0]));
      const f = (r: number) => npv(r, cf);
      // bisection on [-0.9999, 10]; fall back to NaN if no sign change
      let lo = -0.9999, hi = 10; const flo = f(lo), fhi = f(hi);
      if (flo * fhi > 0) return ret(scalar(NaN));
      for (let i = 0; i < 200; i++) { const mid = (lo + hi) / 2; const fm = f(mid); if (Math.abs(fm) < 1e-12) { lo = hi = mid; break; } if (flo * fm < 0) hi = mid; else lo = mid; }
      return ret(scalar((lo + hi) / 2));
    },

    // ── annuities (rate r per period, n periods, payment pmt) ──
    /** pvfix(rate,nper,pmt[,extra][,due]) — present value of a fixed annuity. */
    pvfix: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])), pmt = asScalar(a[2]); const extra = arg(a, 3, 0), due = arg(a, 4, 0); const f = r === 0 ? n : (1 - (1 + r) ** -n) / r; return ret(scalar(pmt * f * (1 + r * due) + extra * (1 + r) ** -n)); },
    /** fvfix(rate,nper,pmt[,pv][,due]) — future value of a fixed annuity. */
    fvfix: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])), pmt = asScalar(a[2]); const pv = arg(a, 3, 0), due = arg(a, 4, 0); const f = r === 0 ? n : ((1 + r) ** n - 1) / r; return ret(scalar(pmt * f * (1 + r * due) + pv * (1 + r) ** n)); },
    /** payper(rate,nper,pv[,fv][,due]) — periodic payment of a loan/annuity. */
    payper: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])), pv = asScalar(a[2]); const fv = arg(a, 3, 0), due = arg(a, 4, 0); if (r === 0) return ret(scalar(-(pv + fv) / n)); const pmt = -(pv * (1 + r) ** n + fv) * r / (((1 + r) ** n - 1) * (1 + r * due)); return ret(scalar(pmt)); },
    /** annuity(rate,nper) — present value factor of a unit annuity. */
    annuity: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])); return ret(scalar(r === 0 ? n : (1 - (1 + r) ** -n) / r)); },

    // ── rate conversions ──
    effrr: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])); return ret(scalar((1 + r / n) ** n - 1)); },
    nomrr: (a) => { const r = asScalar(a[0]), n = Math.round(asScalar(a[1])); return ret(scalar(n * ((1 + r) ** (1 / n) - 1))); },

    // ── Black-Scholes option pricing ──
    /** blsprice(S,K,r,T,sigma[,q]) → [Call, Put]. */
    blsprice: (a, nargout) => {
      const S = asScalar(a[0]), K = asScalar(a[1]), r = asScalar(a[2]), T = asScalar(a[3]), v = asScalar(a[4]), q = arg(a, 5, 0);
      const d1 = (Math.log(S / K) + (r - q + v * v / 2) * T) / (v * Math.sqrt(T)); const d2 = d1 - v * Math.sqrt(T);
      const call = S * Math.exp(-q * T) * normcdf(d1) - K * Math.exp(-r * T) * normcdf(d2);
      const put = K * Math.exp(-r * T) * normcdf(-d2) - S * Math.exp(-q * T) * normcdf(-d1);
      return nargout >= 2 ? Promise.resolve([scalar(call), scalar(put)]) : ret(scalar(call));
    },
    /** blsdelta(S,K,r,T,sigma[,q]) → [CallDelta, PutDelta]. */
    blsdelta: (a, nargout) => {
      const S = asScalar(a[0]), K = asScalar(a[1]), r = asScalar(a[2]), T = asScalar(a[3]), v = asScalar(a[4]), q = arg(a, 5, 0);
      const d1 = (Math.log(S / K) + (r - q + v * v / 2) * T) / (v * Math.sqrt(T));
      const cd = Math.exp(-q * T) * normcdf(d1); const pd = Math.exp(-q * T) * (normcdf(d1) - 1);
      return nargout >= 2 ? Promise.resolve([scalar(cd), scalar(pd)]) : ret(scalar(cd));
    },
  },
  help: {
    npv: 'Net present value of a cash flow', pvvar: 'Present value of varying cash flow', fvvar: 'Future value of varying cash flow',
    irr: 'Internal rate of return', pvfix: 'Present value of fixed periodic payments', fvfix: 'Future value of fixed periodic payments',
    payper: 'Periodic payment of a loan or annuity', annuity: 'Present value factor of an annuity',
    effrr: 'Effective rate of return', nomrr: 'Nominal rate of return',
    blsprice: 'Black-Scholes option prices (call and put)', blsdelta: 'Black-Scholes option delta',
  },
};
