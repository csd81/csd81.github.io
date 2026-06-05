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

// ── small dense-matrix + polynomial helpers ──
function matRows(M: Mat): number[][] { const o: number[][] = []; for (let r = 0; r < M.rows; r++) { const row: number[] = []; for (let c = 0; c < M.cols; c++) row.push(M.data[r + c * M.rows]); o.push(row); } return o; }
function fromRows(rows: number[][]): Mat { const R = rows.length, C = R ? rows[0].length : 0; const o = { kind: 'num' as const, rows: R, cols: C, data: new Float64Array(R * C) } as Mat; for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) o.data[r + c * R] = rows[r][c]; return o; }
const mmul = (A: number[][], B: number[][]): number[][] => { const n = A.length, m = B[0].length, p = B.length; const C: number[][] = []; for (let i = 0; i < n; i++) { C[i] = []; for (let j = 0; j < m; j++) { let s = 0; for (let k = 0; k < p; k++) s += A[i][k] * B[k][j]; C[i][j] = s; } } return C; };
const eye = (n: number): number[][] => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
const traceM = (A: number[][]) => A.reduce((s, row, i) => s + row[i], 0);
function polyConv(a: number[], b: number[]): number[] { const o = new Array(a.length + b.length - 1).fill(0); for (let i = 0; i < a.length; i++) for (let j = 0; j < b.length; j++) o[i + j] += a[i] * b[j]; return o; }
function polyAdd(a: number[], b: number[]): number[] { const n = Math.max(a.length, b.length); const o = new Array(n).fill(0); for (let i = 0; i < a.length; i++) o[n - a.length + i] += a[i]; for (let i = 0; i < b.length; i++) o[n - b.length + i] += b[i]; return o; }
const tfModel = (num: number[], den: number[]): Value => makeObject('tf', { num: rowVec(num), den: rowVec(den) });

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
    /** [A,B,C,D] = tf2ss(num,den) — controllable canonical state-space realization. */
    tf2ss: (a, n) => {
      let num = toArray(m(a[0])); const den0 = toArray(m(a[1])); const g = den0[0] || 1; const den = den0.map((v) => v / g); num = num.map((v) => v / g);
      while (num.length < den.length) num.unshift(0); const no = den.length - 1;
      const A: number[][] = []; for (let i = 0; i < no; i++) { A[i] = []; for (let j = 0; j < no; j++) A[i][j] = i === 0 ? -den[j + 1] : (i - 1 === j ? 1 : 0); }
      const B = Array.from({ length: no }, (_, i) => [i === 0 ? 1 : 0]); const D = num[0];
      const C = [Array.from({ length: no }, (_, j) => num[j + 1] - D * den[j + 1])];
      if (n < 2) return ret(fromRows(A.length ? A : [[0]]));
      return Promise.resolve([fromRows(A), fromRows(B), fromRows(C), scalar(D)]);
    },
    /** [num,den] = ss2tf(A,B,C,D) — state-space to transfer function (Faddeev-LeVerrier). */
    ss2tf: (a, n) => {
      const A = matRows(m(a[0])), B = matRows(m(a[1])), C = matRows(m(a[2])); const D = a.length >= 4 ? asScalar(a[3]) : 0; const N = A.length;
      const p = [1]; let M = eye(N); const Ms = [eye(N)];
      for (let k = 1; k <= N; k++) { const AM = mmul(A, M); p[k] = -traceM(AM) / k; M = AM.map((row, i) => row.map((v, j) => v + (i === j ? p[k] : 0))); if (k < N) Ms.push(M); }
      const den = p; const numAdj = new Array(N).fill(0);
      for (let k = 0; k < N; k++) { const CMk = mmul(mmul(C, Ms[k]), B); numAdj[k] = CMk[0][0]; }
      const num = polyAdd(numAdj, den.map((v) => v * D));
      return n >= 2 ? Promise.resolve([rowVec(num), rowVec(den)]) : ret(rowVec(num));
    },
    /** [wn,zeta] = damp(sys) — natural frequencies and damping ratios of the poles. */
    damp: (a, n) => {
      const r = polyRoots(getNumDen(a[0]).den); const wn = r.re.map((re, i) => Math.hypot(re, r.im[i])); const zeta = r.re.map((re, i) => (wn[i] > 0 ? -re / wn[i] : 0));
      const order = wn.map((_, i) => i).sort((x, y) => wn[x] - wn[y]);
      return n >= 2 ? Promise.resolve([colVec(order.map((i) => wn[i])), colVec(order.map((i) => zeta[i]))]) : ret(colVec(order.map((i) => wn[i])));
    },
    /** ctrb(A,B) — controllability matrix [B AB A²B …]. */
    ctrb: (a) => { const A = matRows(m(a[0])), B = matRows(m(a[1])); const N = A.length; const cols: number[][] = B.map((r) => r.slice()); let cur = B; for (let i = 1; i < N; i++) { cur = mmul(A, cur); for (let r = 0; r < N; r++) cols[r].push(...cur[r]); } return ret(fromRows(cols)); },
    /** obsv(A,C) — observability matrix [C; CA; CA²; …]. */
    obsv: (a) => { const A = matRows(m(a[0])), C = matRows(m(a[1])); const N = A.length; const rows: number[][] = C.map((r) => r.slice()); let cur = C; for (let i = 1; i < N; i++) { cur = mmul(cur, A); rows.push(...cur.map((r) => r.slice())); } return ret(fromRows(rows)); },
    /** dsort(p) — sort discrete-time poles by descending magnitude. */
    dsort: (a) => ret(colVec(toArray(m(a[0])).slice().sort((x, y) => Math.abs(y) - Math.abs(x)))),
    /** esort(p) — sort continuous-time poles by descending real part. */
    esort: (a) => ret(colVec(toArray(m(a[0])).slice().sort((x, y) => y - x))),
    // `series` is registered as a CLASS METHOD (below) rather than a global builtin, because the
    // name collides with Symbolic's `series`. OOP dispatch routes series(tf,…) here, series(sym,…)
    // to Symbolic — matching MATLAB.
    /** parallel(sys1,sys2) — parallel connection sys1+sys2. */
    parallel: (a) => { const g1 = getNumDen(a[0]), g2 = getNumDen(a[1]); return ret(tfModel(polyAdd(polyConv(g1.num, g2.den), polyConv(g2.num, g1.den)), polyConv(g1.den, g2.den))); },
    /** feedback(sys1,sys2) — negative-feedback closed loop sys1/(1+sys1·sys2). */
    feedback: (a) => { const g1 = getNumDen(a[0]); const g2 = a.length >= 2 && isObject(a[1]) ? getNumDen(a[1]) : { num: [asScalar(a[1] ?? scalar(1))], den: [1] }; return ret(tfModel(polyConv(g1.num, g2.den), polyAdd(polyConv(g1.den, g2.den), polyConv(g1.num, g2.num)))); },
    /** order(sys) — number of states (denominator degree). */
    order: (a) => ret(scalar(getNumDen(a[0]).den.length - 1)),
  },
  help: {
    tf: 'Create a transfer-function model', ss: 'Create a state-space model', zpk: 'Create a zero-pole-gain model',
    pole: 'Poles of a dynamic system', zero: 'Zeros of a dynamic system', dcgain: 'Low-frequency (DC) gain', isstable: 'Determine if a system is stable',
    tf2zp: 'Transfer function to zero-pole-gain', zp2tf: 'Zero-pole-gain to transfer function',
    tf2ss: 'Transfer function to state-space', ss2tf: 'State-space to transfer function', damp: 'Natural frequency and damping of poles',
    ctrb: 'Controllability matrix', obsv: 'Observability matrix', dsort: 'Sort discrete-time poles', esort: 'Sort continuous-time poles',
    parallel: 'Parallel connection', feedback: 'Feedback connection', order: 'Order (number of states)',
    series: 'Series (cascade) connection',
  },
  // OOP method dispatch (see tb/types.ts): series(tf,…) routes here; series(sym,…) → Symbolic.
  methods: {
    tf: { series: (a) => { const g1 = getNumDen(a[0]), g2 = getNumDen(a[1]); return ret(tfModel(polyConv(g1.num, g2.num), polyConv(g1.den, g2.den))); } },
  },
};

