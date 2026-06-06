// Financial Toolbox — computable closed-form subset: cashflow analysis (npv/irr/pv/fv),
// annuities (pvfix/fvfix/payper/annuity), rate conversions (effrr/nomrr), and Black-Scholes
// option pricing + Greeks. All validatable by hand / closed form. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, scalar, colVec, rowVec, toArray, asScalar, toMat as m, isMat, isStr, MatError, mat,
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

// ══ calendar subset (days360/daysdif/busdate/busdays/datewrkdy) ══════════════════════
// All dates are MATLAB serial date numbers (serial 719529 = 1970-01-01). Inputs accept
// numeric serial datenums (numeric Mats) or char date strings. Holiday handling is
// weekends-only (validated vs live R2026a called with an out-of-range holiday vector).
const DAY_MS = 86400000;
const EPOCH = 719529; // serial datenum at 1970-01-01

function fromString(s: string): number {
  const d = new Date(s.trim());
  if (Number.isNaN(+d)) throw new MatError(`finance: could not parse date "${s}"`);
  return Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()) / DAY_MS + EPOCH;
}

/** Coerce one argument (char-Mat date string, string scalar, or numeric Mat) to serial datenums. */
function asSerials(v: Value, ctx: string): number[] {
  if (isStr(v)) return v.items.map(fromString);
  if (!isMat(v)) throw new MatError(`${ctx}: expected a date`);
  if (v.isChar) {
    let str = '';
    for (let c = 0; c < v.cols; c++) str += String.fromCharCode(v.data[c]);
    return [fromString(str)];
  }
  return Array.from(v.data);
}

function asScalarSerial(v: Value, ctx: string): number {
  const a = asSerials(v, ctx);
  if (a.length !== 1) throw new MatError(`${ctx}: expected a scalar date`);
  return a[0];
}

/** Calendar [year, month(1-12), day] for a serial datenum (UTC). */
function ymd(n: number): [number, number, number] {
  const dt = new Date(Math.round((n - EPOCH) * DAY_MS));
  return [dt.getUTCFullYear(), dt.getUTCMonth() + 1, dt.getUTCDate()];
}

/** MATLAB weekday: 1=Sunday … 7=Saturday. */
function weekday(n: number): number {
  return new Date(Math.round((n - EPOCH) * DAY_MS)).getUTCDay() + 1;
}

/** Business day = not Saturday (7) and not Sunday (1). Weekends-only convention. */
function isBusday(n: number): boolean {
  const w = weekday(n);
  return w !== 1 && w !== 7;
}

// days360 — SIA-compliant 30/360 day count (faithful port of days360.m).
function days360one(d1: number, d2: number): number {
  let [y1, m1, dd1] = ymd(d1);
  let [y2, m2, dd2] = ymd(d2);
  const leap1 = y1 % 4 === 0;
  const leap2 = y2 % 4 === 0;
  const febEnd1 = m1 === 2 && ((!leap1 && dd1 === 28) || (leap1 && dd1 === 29));
  const febEnd2 = m2 === 2 && ((!leap2 && dd2 === 28) || (leap2 && dd2 === 29));
  if (febEnd1 && febEnd2) dd2 = 30;
  if (febEnd1) dd1 = 30;
  if (dd2 === 31 && (dd1 === 30 || dd1 === 31)) dd2 = 30;
  if (dd1 === 31) dd1 = 30;
  return 360 * (y2 - y1) + 30 * (m2 - m1) + (dd2 - dd1);
}

function days360impl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('days360: requires StartDate and EndDate');
  const a = asSerials(args[0], 'days360');
  const b = asSerials(args[1], 'days360');
  const n = Math.max(a.length, b.length);
  if (a.length !== 1 && b.length !== 1 && a.length !== b.length)
    throw new MatError('days360: date vectors must be the same length');
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(days360one(a[a.length === 1 ? 0 : i], b[b.length === 1 ? 0 : i]));
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// daysdif — days between dates for a day-count basis (0 default = actual; 1 = 30/360 SIA; 6/11 = European).
function daysdifOne(d1: number, d2: number, basis: number): number {
  switch (basis) {
    case 0: case 2: case 3: case 8: case 9: case 10: case 12:
      return Math.round(d2 - d1);
    case 1:
      return days360one(d1, d2);
    case 6: case 11: {
      let [y1, m1, dd1] = ymd(d1);
      let [y2, m2, dd2] = ymd(d2);
      if (dd1 === 31) dd1 = 30;
      if (dd2 === 31) dd2 = 30;
      return 360 * (y2 - y1) + 30 * (m2 - m1) + (dd2 - dd1);
    }
    default:
      throw new MatError(`daysdif: basis ${basis} not supported in this port (only 0,1,2,3,6,8,9,10,11,12)`);
  }
}

function daysdifImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('daysdif: requires D1 and D2');
  const a = asSerials(args[0], 'daysdif');
  const b = asSerials(args[1], 'daysdif');
  const basisArr = args[2] != null ? asSerials(args[2], 'daysdif') : [0];
  const n = Math.max(a.length, b.length, basisArr.length);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(daysdifOne(
      a[a.length === 1 ? 0 : i],
      b[b.length === 1 ? 0 : i],
      Math.round(basisArr[basisArr.length === 1 ? 0 : i]),
    ));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// busdate — next (DIREC=1, default) or previous (DIREC=-1) business day. Weekends-only.
function direcOf(v: Value | undefined): 1 | -1 {
  if (v == null) return 1;
  if (isStr(v) || (isMat(v) && v.isChar)) {
    const s = (isStr(v) ? (v.items[0] ?? '') : (() => {
      let str = ''; for (let c = 0; c < v.cols; c++) str += String.fromCharCode(v.data[c]); return str;
    })()).toLowerCase();
    if (s === 'follow' || s === 'modifiedfollow') return 1;
    if (s === 'previous' || s === 'modifiedprevious') return -1;
    throw new MatError(`busdate: invalid direction "${s}"`);
  }
  const d = isMat(v) ? v.data[0] : NaN;
  if (d === 1) return 1;
  if (d === -1) return -1;
  throw new MatError('busdate: direction must be 1 or -1');
}

function busdateOne(d: number, step: 1 | -1): number {
  let bd = d + step;
  while (!isBusday(bd)) bd += step;
  return bd;
}

function busdateImpl(args: Value[]): Value {
  if (args.length < 1) throw new MatError('busdate: requires a date');
  const ds = asSerials(args[0], 'busdate');
  const step = direcOf(args[1]);
  const out = ds.map((d) => busdateOne(d, step));
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// busdays — column vector of business days (daily) in [SDATE, EDATE] inclusive. Weekends-only.
function busdaysImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('busdays: requires SDATE and EDATE');
  const s = asScalarSerial(args[0], 'busdays');
  const e = asScalarSerial(args[1], 'busdays');
  const out: number[] = [];
  for (let d = s; d <= e; d++) if (isBusday(d)) out.push(d);
  return colVec(out);
}

// datewrkdy — date a number of work days into the future/past (faithful port of datewrkdy.m).
function datewrkdyOne(start: number, numWD: number, numHol: number): number {
  if (Math.abs(numHol) > Math.abs(numWD)) throw new MatError('datewrkdy: too many holidays');
  if (numWD === 0 && numHol === 0) return start;
  const sign = numWD > 0 ? 1 : -1;
  const last = start + numWD * 3 + numHol;
  const days: number[] = [];
  if (sign === 1) { for (let d = start; d <= last; d++) days.push(d); }
  else { for (let d = start; d >= last; d--) days.push(d); }
  const weekdays = days.filter((d) => { const w = weekday(d); return w !== 1 && w !== 7; });
  const idx = Math.abs(numWD) + Math.abs(numHol);
  if (weekdays.length === 0) return start;
  if (idx < 1 || idx > weekdays.length)
    throw new MatError('datewrkdy: requested workday is out of computed range');
  return weekdays[idx - 1];
}

function datewrkdyImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('datewrkdy: requires StartDate and NumberWorkDays');
  const starts = asSerials(args[0], 'datewrkdy');
  const wd = args[1] != null ? asSerials(args[1], 'datewrkdy') : [0];
  const hol = args[2] != null ? asSerials(args[2], 'datewrkdy') : [0];
  const n = Math.max(starts.length, wd.length, hol.length);
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(datewrkdyOne(
      starts[starts.length === 1 ? 0 : i],
      Math.round(wd[wd.length === 1 ? 0 : i]),
      Math.round(hol[hol.length === 1 ? 0 : i]),
    ));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// days252bus — number of business days between two dates (faithful port of days252bus.m).
// Algorithm: numdays = max(0, #busdays in [lo,hi] inclusive); if the *upper* date is itself
// a business day, subtract 1 (half-open count). Sign tracks direction (negative if d1>d2).
// NOTE: this port uses the file's weekends-only business-day convention (no fixed holidays),
// so results differ from live MATLAB only on dates that MATLAB treats as fixed holidays.
function days252busOne(d1: number, d2: number): number {
  if (d1 === d2) return 0;
  const lo = Math.min(d1, d2);
  const hi = Math.max(d1, d2);
  let count = 0;
  for (let d = lo; d <= hi; d++) if (isBusday(d)) count++;
  count = Math.max(0, count);
  if (isBusday(hi)) count -= 1;
  return d1 < d2 ? count : -count;
}

function days252busImpl(args: Value[]): Value {
  if (args.length < 2) throw new MatError('days252bus: requires StartDate and EndDate');
  const a = asSerials(args[0], 'days252bus');
  const b = asSerials(args[1], 'days252bus');
  if (a.length !== 1 && b.length !== 1 && a.length !== b.length)
    throw new MatError('days252bus: date vectors must be the same length');
  const n = Math.max(a.length, b.length);
  const out: number[] = [];
  for (let i = 0; i < n; i++) out.push(days252busOne(a[a.length === 1 ? 0 : i], b[b.length === 1 ? 0 : i]));
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// payadv — periodic payment given a number of advance payments (faithful port of payadv.m).
function payadvOne(rate: number, nper: number, pv: number, fv: number, adv: number): number {
  if (rate < 0) throw new MatError('payadv: rate must be non-negative');
  const s = 1e-10;
  if (Math.abs(rate) < s) return (fv + pv) / nper;
  const c = 1 + rate;
  return (pv + fv * c ** -nper) / ((1 - c ** (adv - nper)) / rate + adv);
}

function payadvImpl(args: Value[]): Value {
  if (args.length < 5) throw new MatError('payadv: requires RATE, NPER, PV, FV, ADV');
  const cols = args.map((v, k) => asSerials(v, `payadv arg ${k + 1}`));
  const n = Math.max(...cols.map((cc) => cc.length));
  const pick = (cc: number[], i: number) => cc[cc.length === 1 ? 0 : i];
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(payadvOne(pick(cols[0], i), pick(cols[1], i), pick(cols[2], i), pick(cols[3], i), pick(cols[4], i)));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// tbillyield2disc — convert T-Bill yields to discount rates (faithful port).
// Type 1 = Money-Market Yield (actual/360), Type 2 = Bond-Equivalent Yield (actual/365).
// Short bills (DSM<=182) and long bills (DSM>182) use different formulas. DSM is actual days.
function tbillyield2discOne(yield_: number, settle: number, maturity: number, type: number): number {
  if (settle > maturity) throw new MatError('tbillyield2disc: Settle must be on or before Maturity');
  if (type !== 1 && type !== 2) throw new MatError('tbillyield2disc: Type must be 1 or 2');
  const A = type === 1 ? 360 : 365;
  const DSM = Math.round(maturity - settle); // daysact: actual days
  if (DSM <= 182) {
    return 360 / DSM * (1 - 1 / (1 + yield_ * DSM / A));
  }
  return 360 / DSM * (1 - 1 / ((1 + yield_ / 2) * (1 + (2 * DSM / A - 1) * yield_ / 2)));
}

function tbillyield2discImpl(args: Value[]): Value {
  if (args.length < 3 || args.length > 4) throw new MatError('tbillyield2disc: requires Yield, Settle, Maturity[, Type]');
  const y = toArray(m(args[0]));
  const settle = asSerials(args[1], 'tbillyield2disc');
  const maturity = asSerials(args[2], 'tbillyield2disc');
  const type = args[3] != null ? toArray(m(args[3])) : [1];
  const n = Math.max(y.length, settle.length, maturity.length, type.length);
  const pick = (cc: number[], i: number) => cc[cc.length === 1 ? 0 : i];
  const out: number[] = [];
  for (let i = 0; i < n; i++) {
    out.push(tbillyield2discOne(pick(y, i), pick(settle, i), pick(maturity, i), Math.round(pick(type, i))));
  }
  return out.length === 1 ? scalar(out[0]) : colVec(out);
}

// abs2active / active2abs — portfolio constraint conversions between absolute and active
// (index-relative) weight formats. ConSet = [A b], NCONSTRAINTS x (NASSETS+1). Faithful port:
// abs→active sets b' = b - A*Index, active→abs sets b' = b + A*Index. A is left unchanged.
function convertConSet(conSetV: Value, indexV: Value, ctx: string, sign: 1 | -1): Value {
  const conSet = m(conSetV);
  const index = toArray(m(indexV));
  const nAssets = index.length;
  const rows = conSet.rows;
  const cols = conSet.cols;
  if (cols - 1 !== nAssets) throw new MatError(`${ctx}: inconsistent dimensions (ConSet has ${cols} cols, Index has ${nAssets} assets)`);
  const out = mat(rows, cols, conSet.data.slice());
  for (let r = 0; r < rows; r++) {
    let dot = 0;
    for (let c = 0; c < nAssets; c++) dot += conSet.data[r + c * rows] * index[c];
    // last column (b) at column index cols-1
    out.data[r + (cols - 1) * rows] = conSet.data[r + (cols - 1) * rows] + sign * dot;
  }
  return out;
}

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

    // ── calendar / day-count ──
    days360:   (a) => ret(days360impl(a)),
    daysdif:   (a) => ret(daysdifImpl(a)),
    busdate:   (a) => ret(busdateImpl(a)),
    busdays:   (a) => ret(busdaysImpl(a)),
    datewrkdy: (a) => ret(datewrkdyImpl(a)),
    days252bus: (a) => ret(days252busImpl(a)),

    // ── more cashflow / fixed-income ──
    payadv: (a) => ret(payadvImpl(a)),
    tbillyield2disc: (a) => ret(tbillyield2discImpl(a)),

    // ── portfolio constraint conversions ──
    abs2active: (a) => ret(convertConSet(a[0], a[1], 'abs2active', -1)),
    active2abs: (a) => ret(convertConSet(a[0], a[1], 'active2abs', 1)),
  },
  help: {
    npv: 'Net present value of a cash flow', pvvar: 'Present value of varying cash flow', fvvar: 'Future value of varying cash flow',
    irr: 'Internal rate of return', pvfix: 'Present value of fixed periodic payments', fvfix: 'Future value of fixed periodic payments',
    payper: 'Periodic payment of a loan or annuity', annuity: 'Present value factor of an annuity',
    effrr: 'Effective rate of return', nomrr: 'Nominal rate of return',
    blsprice: 'Black-Scholes option prices (call and put)', blsdelta: 'Black-Scholes option delta',
    days360: 'Days between dates on a 30/360 (SIA) basis', daysdif: 'Days between dates for a day-count basis',
    busdate: 'Next or previous business day', busdays: 'Business days (daily) between two dates',
    datewrkdy: 'Date a number of work days into the future/past',
    days252bus: 'Number of business days between dates',
    payadv: 'Periodic payment given number of advance payments',
    tbillyield2disc: 'Discount rates of T-bills from yields',
    abs2active: 'Convert constraints from absolute to active format',
    active2abs: 'Convert constraints from active to absolute format',
  },
};
