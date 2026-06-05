// Control System Toolbox — LTI models as generic ClassV objects (tf/ss/zpk) plus algebraic
// analysis (pole/zero/dcgain/isstable) and model conversions (tf2zp/zp2tf). Validated against
// the live Control System Toolbox. See plan §1 (ClassV) / §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isObject, makeObject, scalar, bool, colVec, rowVec, toArray, asScalar, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

/** Roots of a real-coefficient polynomial (descending coeffs) via Durand-Kerner. */
function polyRoots(coeffs: number[]): { re: number[]; im: number[] } {
  let c = coeffs.slice(); while (c.length > 1 && Math.abs(c[0]) < 1e-300) c.shift();
  let trail = 0; while (c.length > 1 && Math.abs(c[c.length - 1]) < 1e-300) { c.pop(); trail++; }
  const n = c.length - 1; const re: number[] = [], im: number[] = [];
  if (n >= 1) {
    const a = c.map((v) => v / c[0]); const pr = new Array(n), pi = new Array(n);
    for (let k = 0; k < n; k++) { const ang = (2 * Math.PI * k) / n + 0.4; pr[k] = 1.2 * Math.cos(ang); pi[k] = 1.2 * Math.sin(ang); }
    for (let it = 0; it < 600; it++) {
      let maxd = 0;
      for (let k = 0; k < n; k++) {
        let vr = a[0], vi = 0; for (let j = 1; j <= n; j++) { const nr = vr * pr[k] - vi * pi[k] + a[j]; vi = vr * pi[k] + vi * pr[k]; vr = nr; }
        let dr = 1, di = 0; for (let j = 0; j < n; j++) if (j !== k) { const er = pr[k] - pr[j], ei = pi[k] - pi[j]; const nr = dr * er - di * ei; di = dr * ei + di * er; dr = nr; }
        const dd = dr * dr + di * di || 1e-300; const qr = (vr * dr + vi * di) / dd, qi = (vi * dr - vr * di) / dd;
        pr[k] -= qr; pi[k] -= qi; maxd = Math.max(maxd, Math.hypot(qr, qi));
      }
      if (maxd < 1e-14) break;
    }
    for (let k = 0; k < n; k++) { re.push(Math.abs(pr[k]) < 1e-9 ? 0 : pr[k]); im.push(Math.abs(pi[k]) < 1e-9 ? 0 : pi[k]); }
  }
  for (let z = 0; z < trail; z++) { re.push(0); im.push(0); }
  return { re, im };
}
/** Expand Π(s − rₖ) → real polynomial coefficients (descending). */
function polyFromRoots(rr: number[], ri: number[]): number[] {
  let cr = [1], ci = [0];
  for (let k = 0; k < rr.length; k++) { const nr = new Array(cr.length + 1).fill(0), ni = new Array(cr.length + 1).fill(0); for (let j = 0; j < cr.length; j++) { nr[j] += cr[j]; ni[j] += ci[j]; nr[j + 1] -= cr[j] * rr[k] - ci[j] * ri[k]; ni[j + 1] -= cr[j] * ri[k] + ci[j] * rr[k]; } cr = nr; ci = ni; }
  return cr.map((v) => (Math.abs(v) < 1e-12 ? 0 : v));
}
/** Sort roots ascending by real part then imaginary (MATLAB pole/zero order). */
function sortRoots(r: { re: number[]; im: number[] }): { re: number[]; im: number[] } {
  const idx = r.re.map((_, i) => i).sort((a, b) => r.re[a] - r.re[b] || r.im[a] - r.im[b]);
  return { re: idx.map((i) => r.re[i]), im: idx.map((i) => r.im[i]) };
}
const getNumDen = (v: Value): { num: number[]; den: number[] } => {
  if (isObject(v) && v.className === 'tf') return { num: toArray(v.props.get('num') as Mat), den: toArray(v.props.get('den') as Mat) };
  throw new Error('expected a tf model');
};
function rootsValue(r: { re: number[]; im: number[] }): Value { const c = colVec(r.re); if (r.im.some((x) => x !== 0)) c.idata = Float64Array.from(r.im); return c; }

export const CONTROL: ToolboxModule = {
  id: 'control',
  name: 'Control System Toolbox',
  docBase: 'https://www.mathworks.com/help/control/ref/',
  builtins: {
    /** tf(num,den) — transfer-function model. */
    tf: (a) => ret(makeObject('tf', { num: rowVec(toArray(m(a[0]))), den: rowVec(toArray(m(a[1]))) })),
    /** ss(A,B,C,D) — state-space model. */
    ss: (a) => ret(makeObject('ss', { A: m(a[0]), B: m(a[1]), C: m(a[2]), D: a.length >= 4 ? m(a[3]) : scalar(0) })),
    /** zpk(z,p,k) — zero-pole-gain model. */
    zpk: (a) => ret(makeObject('zpk', { z: colVec(toArray(m(a[0]))), p: colVec(toArray(m(a[1]))), k: scalar(asScalar(a[2])) })),
    /** pole(sys) — system poles (roots of the denominator). */
    pole: (a) => ret(rootsValue(sortRoots(polyRoots(getNumDen(a[0]).den)))),
    /** zero(sys) — system (transmission) zeros (roots of the numerator). */
    zero: (a) => ret(rootsValue(sortRoots(polyRoots(getNumDen(a[0]).num)))),
    /** dcgain(sys) — steady-state (s=0) gain. */
    dcgain: (a) => { const { num, den } = getNumDen(a[0]); return ret(scalar(num[num.length - 1] / den[den.length - 1])); },
    /** isstable(sys) — true if all poles have negative real part (continuous). */
    isstable: (a) => { const r = polyRoots(getNumDen(a[0]).den); return ret(bool(r.re.every((x) => x < 0))); },
    /** [z,p,k] = tf2zp(num,den) — transfer function to zero-pole-gain. */
    tf2zp: (a, n) => {
      const num = toArray(m(a[0])), den = toArray(m(a[1])); const z = sortRoots(polyRoots(num)), p = sortRoots(polyRoots(den));
      let i0 = 0; while (i0 < num.length && num[i0] === 0) i0++; let j0 = 0; while (j0 < den.length && den[j0] === 0) j0++;
      const k = (num[i0] ?? 0) / (den[j0] ?? 1);
      return n >= 3 ? Promise.resolve([rootsValue(z), rootsValue(p), scalar(k)]) : n >= 2 ? Promise.resolve([rootsValue(z), rootsValue(p)]) : ret(rootsValue(z));
    },
    /** [num,den] = zp2tf(z,p,k) — zero-pole-gain to transfer function. */
    zp2tf: (a, n) => {
      const z = toArray(m(a[0])), p = toArray(m(a[1])), k = asScalar(a[2]);
      const num = polyFromRoots(z, z.map(() => 0)).map((v) => v * k); const den = polyFromRoots(p, p.map(() => 0));
      while (num.length < den.length) num.unshift(0);   // pad numerator to denominator length
      return n >= 2 ? Promise.resolve([rowVec(num), rowVec(den)]) : ret(rowVec(num));
    },
  },
  help: {
    tf: 'Create a transfer-function model', ss: 'Create a state-space model', zpk: 'Create a zero-pole-gain model',
    pole: 'Poles of a dynamic system', zero: 'Zeros of a dynamic system', dcgain: 'Low-frequency (DC) gain', isstable: 'Determine if a system is stable',
    tf2zp: 'Transfer function to zero-pole-gain', zp2tf: 'Zero-pole-gain to transfer function',
  },
};

