// Aerospace Toolbox — computable numeric subset: unit conversions (conv*), quaternion algebra
// (scalar-first [w x y z] convention), rotation representations (DCM / Euler / Rodrigues), and the
// 1976 standard atmosphere. All conventions validated against live MATLAB R2026a — in particular
// MATLAB's quaternion-to-DCM map is the coordinate-transformation (transposed) form, quatnorm is
// the SUM of squares (not its root), and quatdivide(q,r) = r⁻¹⊗q. See aerospace.VALIDATION.md.
import type { Builtin } from '../builtins';
import { type Value, type Mat, mat, map, toMat as m, asScalar, asString, scalar, colVec, makeND, fromRows } from '../values';
import type { ToolboxModule } from './types';
import { HELP_AEROSPACE } from './help-aerospace';

const ret = (v: Value | Value[]): Promise<Value[]> => Promise.resolve(Array.isArray(v) ? v : [v]);
const D2R = Math.PI / 180;

/** Element-wise over three operands with scalar expansion; shape follows the first length-n input. */
function ew3(A: Mat, B: Mat, C: Mat, f: (a: number, b: number, c: number) => number): Value {
  const a = Array.from(A.data), b = Array.from(B.data), c = Array.from(C.data);
  const n = Math.max(a.length, b.length, c.length);
  const g = (arr: number[], i: number) => (arr.length === 1 ? arr[0] : arr[i]);
  const out = new Float64Array(n);
  for (let i = 0; i < n; i++) out[i] = f(g(a, i), g(b, i), g(c, i));
  if (n === 1) return scalar(out[0]);
  const src = a.length === n ? A : b.length === n ? B : C;
  return mat(src.rows, src.cols, out);
}

// ---- small matrix helpers ----------------------------------------------------------------------
function rowsOf(M: Mat): number[][] {
  const out: number[][] = [];
  for (let i = 0; i < M.rows; i++) { const r: number[] = []; for (let j = 0; j < M.cols; j++) r.push(M.data[i + j * M.rows]); out.push(r); }
  return out;
}
/** 3×3 row-major number[][] → column-major Mat. */
function mat3(C: number[][]): Mat {
  const d = new Float64Array(9);
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) d[r + c * 3] = C[r][c];
  return mat(3, 3, d);
}
/** column-major 3×3 Mat → row-major number[][]. */
function read3(M: Mat): number[][] {
  const C: number[][] = [[0, 0, 0], [0, 0, 0], [0, 0, 0]];
  for (let r = 0; r < 3; r++) for (let c = 0; c < 3; c++) C[r][c] = M.data[r + c * 3];
  return C;
}

// ---- quaternion core (operate on number[4] = [w x y z]) ----------------------------------------
const qn2 = (q: number[]) => q[0] * q[0] + q[1] * q[1] + q[2] * q[2] + q[3] * q[3];
const qnorm = (q: number[]) => { const n = Math.sqrt(qn2(q)); return [q[0] / n, q[1] / n, q[2] / n, q[3] / n]; };
const qconj = (q: number[]) => [q[0], -q[1], -q[2], -q[3]];
const qinv = (q: number[]) => { const n = qn2(q); return [q[0] / n, -q[1] / n, -q[2] / n, -q[3] / n]; };
/** Hamilton product (scalar-first). */
const qmul = (a: number[], b: number[]) => [
  a[0] * b[0] - a[1] * b[1] - a[2] * b[2] - a[3] * b[3],
  a[0] * b[1] + a[1] * b[0] + a[2] * b[3] - a[3] * b[2],
  a[0] * b[2] - a[1] * b[3] + a[2] * b[0] + a[3] * b[1],
  a[0] * b[3] + a[1] * b[2] - a[2] * b[1] + a[3] * b[0],
];
/** MATLAB quat2dcm — standard rotation-matrix convention, e.g. DCM(1,2)=2(xy+wz). */
function q2dcm(qin: number[]): number[][] {
  const [w, x, y, z] = qnorm(qin);
  return [
    [w * w + x * x - y * y - z * z, 2 * (x * y + w * z), 2 * (x * z - w * y)],
    [2 * (x * y - w * z), w * w - x * x + y * y - z * z, 2 * (y * z + w * x)],
    [2 * (x * z + w * y), 2 * (y * z - w * x), w * w - x * x - y * y + z * z],
  ];
}
/** DCM → quaternion (q0≥0), inverse of q2dcm. Shepperd pivoting for robustness. */
function dcm2q(C: number[][]): number[] {
  const tr = C[0][0] + C[1][1] + C[2][2];
  let q: number[];
  if (tr > 0) { const s = 2 * Math.sqrt(1 + tr); q = [s / 4, (C[1][2] - C[2][1]) / s, (C[2][0] - C[0][2]) / s, (C[0][1] - C[1][0]) / s]; }
  else if (C[0][0] > C[1][1] && C[0][0] > C[2][2]) { const s = 2 * Math.sqrt(1 + C[0][0] - C[1][1] - C[2][2]); q = [(C[1][2] - C[2][1]) / s, s / 4, (C[0][1] + C[1][0]) / s, (C[0][2] + C[2][0]) / s]; }
  else if (C[1][1] > C[2][2]) { const s = 2 * Math.sqrt(1 - C[0][0] + C[1][1] - C[2][2]); q = [(C[2][0] - C[0][2]) / s, (C[0][1] + C[1][0]) / s, s / 4, (C[1][2] + C[2][1]) / s]; }
  else { const s = 2 * Math.sqrt(1 - C[0][0] - C[1][1] + C[2][2]); q = [(C[0][1] - C[1][0]) / s, (C[0][2] + C[2][0]) / s, (C[1][2] + C[2][1]) / s, s / 4]; }
  return q[0] < 0 ? q.map((v) => -v) : q;
}
/** Elementary quaternion for a single-axis rotation. */
function qaxis(axis: string, ang: number): number[] {
  const c = Math.cos(ang / 2), s = Math.sin(ang / 2);
  if (axis === 'X') return [c, s, 0, 0];
  if (axis === 'Y') return [c, 0, s, 0];
  return [c, 0, 0, s]; // Z
}
function ang2q(r1: number, r2: number, r3: number, seq: string): number[] {
  return qmul(qmul(qaxis(seq[0], r1), qaxis(seq[1], r2)), qaxis(seq[2], r3));
}
/** DCM → Euler angles for the given sequence. Full support for 'ZYX' (MATLAB default); other
 *  Tait-Bryan sequences handled via the same first-row/last-column extraction. */
function dcm2ang(C: number[][], seq: string): [number, number, number] {
  if (seq === 'ZYX') return [Math.atan2(C[0][1], C[0][0]), Math.asin(-C[0][2]), Math.atan2(C[1][2], C[2][2])];
  if (seq === 'ZXY') return [Math.atan2(-C[1][0], C[1][1]), Math.asin(C[1][2]), Math.atan2(-C[0][2], C[2][2])];
  if (seq === 'YXZ') return [Math.atan2(C[2][0], C[2][2]), Math.asin(-C[2][1]), Math.atan2(C[0][1], C[1][1])];
  if (seq === 'YZX') return [Math.atan2(-C[0][2], C[0][0]), Math.asin(C[0][1]), Math.atan2(-C[2][1], C[1][1])];
  if (seq === 'XYZ') return [Math.atan2(-C[2][1], C[2][2]), Math.asin(C[2][0]), Math.atan2(-C[1][0], C[0][0])];
  if (seq === 'XZY') return [Math.atan2(C[1][2], C[1][1]), Math.asin(-C[1][0]), Math.atan2(C[2][0], C[0][0])];
  return [Math.atan2(C[0][1], C[0][0]), Math.asin(-C[0][2]), Math.atan2(C[1][2], C[2][2])];
}
const seqArg = (a: Value[], i: number) => (a[i] !== undefined ? asString(a[i]).toUpperCase() : 'ZYX');

// ---- conversions: SI factor tables (factors validated against live convX) -----------------------
const F_LEN: Record<string, number> = { 'ft': 0.3048, 'in': 0.0254, 'km': 1000, 'm': 1, 'mi': 1609.344, 'naut mi': 1852 };
const F_VEL: Record<string, number> = { 'ft/min': 0.00508, 'ft/s': 0.3048, 'in/s': 0.0254, 'km/h': 1000 / 3600, 'km/s': 1000, 'kts': 1852 / 3600, 'mph': 0.44704, 'm/s': 1 };
const F_MASS: Record<string, number> = { 'kg': 1, 'lbm': 0.45359237, 'slug': 14.593902937206364 };
const F_FORCE: Record<string, number> = { 'lbf': 4.4482216152605, 'N': 1 };
const F_PRES: Record<string, number> = { 'atm': 101325, 'Pa': 1, 'psf': 47.880258980335840, 'psi': 6894.757293168361 };
const F_DENS: Record<string, number> = { 'kg/m^3': 1, 'lbm/ft^3': 16.018463373960140, 'lbm/in^3': 27679.904710203125, 'slug/ft^3': 515.378818393196 };
const F_ACC: Record<string, number> = { 'ft/s^2': 0.3048, 'in/s^2': 0.0254, 'km/h-s': 1000 / 3600, 'km/s^2': 1000, 'mph/s': 0.44704, 'm/s^2': 1 };
const F_ANG: Record<string, number> = { 'deg': D2R, 'rad': 1, 'rev': 2 * Math.PI };
const F_ANGVEL: Record<string, number> = { 'deg/s': D2R, 'rad/s': 1, 'rpm': (2 * Math.PI) / 60 };
const F_ANGACC: Record<string, number> = { 'deg/s^2': D2R, 'rad/s^2': 1, 'rpm/s': (2 * Math.PI) / 60 };

function makeConv(table: Record<string, number>, label: string): Builtin {
  return (a) => {
    const from = asString(a[1]), to = asString(a[2]);
    if (!(from in table)) throw new Error(`Unknown ${label} conversion input unit, ${from}`);
    if (!(to in table)) throw new Error(`Unknown ${label} conversion output unit, ${to}`);
    const f = table[from] / table[to];
    return ret(map(m(a[0]), (x) => x * f));
  };
}
// temperature is affine: convert through Kelvin
const toK: Record<string, (v: number) => number> = { K: (v) => v, C: (v) => v + 273.15, F: (v) => (v - 32) * 5 / 9 + 273.15, R: (v) => v * 5 / 9 };
const fromK: Record<string, (k: number) => number> = { K: (k) => k, C: (k) => k - 273.15, F: (k) => (k - 273.15) * 9 / 5 + 32, R: (k) => k * 9 / 5 };

// ---- 1976 standard atmosphere ------------------------------------------------------------------
const G0 = 9.80665, RAIR = 287.0528, GAMMA = 1.4;
const HB = [0, 11000, 20000, 32000, 47000, 51000, 71000];
const LB = [-0.0065, 0, 0.001, 0.0028, 0, -0.0028, -0.002];
const TB: number[] = [288.15]; const PB: number[] = [101325];
for (let i = 1; i < HB.length; i++) {
  const dh = HB[i] - HB[i - 1];
  TB[i] = TB[i - 1] + LB[i - 1] * dh;
  PB[i] = LB[i - 1] === 0 ? PB[i - 1] * Math.exp(-G0 * dh / (RAIR * TB[i - 1])) : PB[i - 1] * (TB[i - 1] / TB[i]) ** (G0 / (RAIR * LB[i - 1]));
}
function isa1976(h: number): [number, number, number, number] {
  let i = 0; while (i < HB.length - 1 && h >= HB[i + 1]) i++;
  const T = TB[i] + LB[i] * (h - HB[i]);
  const P = LB[i] === 0 ? PB[i] * Math.exp(-G0 * (h - HB[i]) / (RAIR * TB[i])) : PB[i] * (TB[i] / T) ** (G0 / (RAIR * LB[i]));
  return [T, Math.sqrt(GAMMA * RAIR * T), P, P / (RAIR * T)];
}
/** Spread a 4-tuple-per-element atmosphere result into [T,a,P,rho] outputs sliced to nargout. */
function atmosOut(M: Mat, f: (h: number) => number[], nargout: number): Value[] {
  const hs = Array.from(M.data); const cols: number[][] = [[], [], [], []];
  for (const h of hs) { const r = f(h); for (let k = 0; k < 4; k++) cols[k].push(r[k]); }
  const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : colVec(c));
  return cols.slice(0, Math.max(1, nargout)).map(wrap);
}

// ---- isentropic flow (NACA 1135 / James Gas Dynamics) ------------------------------------------
/** Isentropic ratios from Mach: returns [T, P, rho, A] (static/stagnation + sonic area ratio). */
function isentropicRatios(g: number, mach: number): [number, number, number, number] {
  const f = 1 + (g - 1) / 2 * mach * mach;
  const T = 1 / f;
  const P = 1 / Math.pow(f, g / (g - 1));
  const rho = Math.pow(f, -1 / (g - 1));
  const b = (g + 1) / (2 * (1 - g));
  let A: number;
  if (!isFinite(mach)) {
    // rearranged form for mach==inf (avoids NaN)
    A = Math.pow((g + 1) / 2, b) * Math.pow(Math.pow(mach, -2) + (g - 1) / 2, -b) * Math.pow(mach, -2 * b - 1);
  } else {
    A = Math.pow((g + 1) / 2, b) / (mach * Math.pow(f, b));
  }
  return [T, P, rho, A];
}
/** Area-ratio → Mach via Brent/bisection on A(mach)=areaRatio; branch chosen by subsonic/supersonic. */
function machFromArea(g: number, areaRatio: number, supersonic: boolean): number {
  if (!isFinite(areaRatio)) return supersonic ? Infinity : 0;
  const areaOf = (mach: number): number => {
    const f = 1 + (g - 1) / 2 * mach * mach;
    const b = (g + 1) / (2 * (1 - g));
    return Math.pow((g + 1) / 2, b) / (mach * Math.pow(f, b));
  };
  // f(mach) = areaRatio - areaOf(mach); root-find on chosen branch
  const fn = (mach: number) => areaRatio - areaOf(mach);
  let lo: number, hi: number;
  if (!supersonic) { lo = 1e-12; hi = 1; }      // subsonic branch in (0,1)
  else { lo = 1; hi = 1e6; }                     // supersonic branch in (1,inf)
  // areaOf(1)=1; for areaRatio>=1 the sign of fn at the sonic end is <=0
  let flo = fn(lo), fhi = fn(hi);
  if (flo === 0) return lo;
  if (fhi === 0) return hi;
  // expand supersonic upper bound until bracketed
  let guard = 0;
  while (flo * fhi > 0 && supersonic && guard < 60) { hi *= 4; fhi = fn(hi); guard++; }
  // bisection
  for (let it = 0; it < 200; it++) {
    const mid = 0.5 * (lo + hi);
    const fm = fn(mid);
    if (fm === 0 || (hi - lo) < 1e-15 * Math.max(1, mid)) return mid;
    if (flo * fm < 0) { hi = mid; fhi = fm; } else { lo = mid; flo = fm; }
  }
  return 0.5 * (lo + hi);
}

// ---- quaternion builtin helpers ----------------------------------------------------------------
const qElem = (fn: (q: number[]) => number[]): Builtin => (a) => ret(fromRows(rowsOf(m(a[0])).map(fn)));
const qScalarCol = (fn: (q: number[]) => number): Builtin => (a) => { const v = rowsOf(m(a[0])).map(fn); return ret(v.length === 1 ? scalar(v[0]) : colVec(v)); };
function qBinary(op: (q: number[], p: number[]) => number[]): Builtin {
  return (a) => {
    let A = rowsOf(m(a[0])), B = rowsOf(m(a[1]));
    const n = Math.max(A.length, B.length);
    if (A.length === 1 && n > 1) A = Array.from({ length: n }, () => A[0]);
    if (B.length === 1 && n > 1) B = Array.from({ length: n }, () => B[0]);
    return ret(fromRows(A.map((q, i) => op(q, B[i]))));
  };
}

export const AEROSPACE: ToolboxModule = {
  id: 'aero',
  name: 'Aerospace Toolbox',
  docBase: 'https://www.mathworks.com/help/aerotbx/ug/',
  builtins: {
    // geocradius(latGeocentric_deg): radius of WGS-84 ellipsoid at a geocentric latitude.
    geocradius: (a) => { const R = 6378137, f = 1 / 298.257223563, k = 1 / ((1 - f) * (1 - f)) - 1; return ret(map(m(a[0]), (lat) => { const s = Math.sin(lat * D2R); return Math.sqrt(R * R / (1 + k * s * s)); })); },
    // dcmbody2stability(alpha): body→stability DCM (rotation about y by alpha, radians).
    dcmbody2stability: (a) => {
      const al = Array.from(m(a[0]).data), N = al.length;
      const make = (ang: number) => { const c = Math.cos(ang), s = Math.sin(ang); return new Float64Array([c, 0, -s, 0, 1, 0, s, 0, c]); };
      if (N === 1) return ret(mat(3, 3, make(al[0])));
      const data = new Float64Array(9 * N); for (let i = 0; i < N; i++) data.set(make(al[i]), i * 9); return ret(makeND([3, 3, N], data));
    },
    // --- unit conversions ---
    convlength: makeConv(F_LEN, 'length'), convvel: makeConv(F_VEL, 'velocity'),
    convmass: makeConv(F_MASS, 'mass'), convforce: makeConv(F_FORCE, 'force'),
    convpres: makeConv(F_PRES, 'pressure'), convdensity: makeConv(F_DENS, 'density'),
    convacc: makeConv(F_ACC, 'acceleration'), convang: makeConv(F_ANG, 'angle'),
    convangvel: makeConv(F_ANGVEL, 'angular velocity'), convangacc: makeConv(F_ANGACC, 'angular acceleration'),
    convtemp: (a) => {
      const from = asString(a[1]), to = asString(a[2]);
      if (!(from in toK)) throw new Error(`Unknown temperature conversion input unit, ${from}`);
      if (!(to in fromK)) throw new Error(`Unknown temperature conversion output unit, ${to}`);
      return ret(map(m(a[0]), (x) => fromK[to](toK[from](x))));
    },
    // --- quaternion algebra ---
    quatconj: qElem(qconj),
    quatinv: qElem(qinv),
    quatnormalize: qElem(qnorm),
    quatmod: qScalarCol((q) => Math.sqrt(qn2(q))),
    quatnorm: qScalarCol(qn2),               // MATLAB: sum of squares (NOT its root)
    quatmultiply: qBinary(qmul),
    quatdivide: qBinary((q, p) => qmul(qinv(p), q)),
    quatrotate: (a) => {
      const Q = rowsOf(m(a[0])), V = rowsOf(m(a[1]));
      const n = Math.max(Q.length, V.length);
      const out: number[][] = [];
      for (let i = 0; i < n; i++) {
        const C = q2dcm(Q[Q.length === 1 ? 0 : i]); const v = V[V.length === 1 ? 0 : i];
        out.push([0, 1, 2].map((i2) => C[i2][0] * v[0] + C[i2][1] * v[1] + C[i2][2] * v[2]));
      }
      return ret(fromRows(out));
    },
    quat2dcm: (a) => ret(mat3(q2dcm(rowsOf(m(a[0]))[0]))),
    dcm2quat: (a) => ret(fromRows([dcm2q(read3(m(a[0])))])),
    quat2rod: qElem((q) => { const n = qnorm(q); return [n[1] / n[0], n[2] / n[0], n[3] / n[0]]; }),
    rod2quat: qElem((b) => { const s = Math.sqrt(1 + b[0] * b[0] + b[1] * b[1] + b[2] * b[2]); return [1 / s, b[0] / s, b[1] / s, b[2] / s]; }),
    quatexp: qElem((q) => {
      const w = q[0], nv = Math.hypot(q[1], q[2], q[3]), ew = Math.exp(w);
      if (nv < 1e-12) return [ew, 0, 0, 0];
      const s = ew * Math.sin(nv) / nv; return [ew * Math.cos(nv), s * q[1], s * q[2], s * q[3]];
    }),
    quatlog: qElem((q) => {
      const nq = Math.sqrt(qn2(q)), nv = Math.hypot(q[1], q[2], q[3]);
      if (nv < 1e-12) return [Math.log(nq), 0, 0, 0];
      const th = Math.atan2(nv, q[0]) / nv; return [Math.log(nq), th * q[1], th * q[2], th * q[3]];
    }),
    quatpower: (a) => {
      const n = asScalar(a[1]);
      const pow = (q: number[]) => {
        const nq = Math.sqrt(qn2(q)), nv = Math.hypot(q[1], q[2], q[3]);
        const lg = nv < 1e-12 ? [Math.log(nq), 0, 0, 0] : (() => { const th = Math.atan2(nv, q[0]) / nv; return [Math.log(nq), th * q[1], th * q[2], th * q[3]]; })();
        const e = lg.map((x) => x * n);
        const ew = Math.exp(e[0]), ev = Math.hypot(e[1], e[2], e[3]);
        if (ev < 1e-12) return [ew, 0, 0, 0];
        const s = ew * Math.sin(ev) / ev; return [ew * Math.cos(ev), s * e[1], s * e[2], s * e[3]];
      };
      return ret(fromRows(rowsOf(m(a[0])).map(pow)));
    },
    quatinterp: (a) => {
      const p = rowsOf(m(a[0]))[0], q0 = rowsOf(m(a[1]))[0], f = asScalar(a[2]);
      const method = a[3] !== undefined ? asString(a[3]).toLowerCase() : 'slerp';
      let q = q0.slice(); let dot = p[0] * q[0] + p[1] * q[1] + p[2] * q[2] + p[3] * q[3];
      if (dot < 0) { q = q.map((x) => -x); dot = -dot; }
      let r: number[];
      if (method === 'slerp' && dot < 0.9999995) {
        const th = Math.acos(dot), s = Math.sin(th), c0 = Math.sin((1 - f) * th) / s, c1 = Math.sin(f * th) / s;
        r = [0, 1, 2, 3].map((i) => c0 * p[i] + c1 * q[i]);
      } else { r = [0, 1, 2, 3].map((i) => (1 - f) * p[i] + f * q[i]); }
      return ret(fromRows([qnorm(r)]));
    },
    // --- rotation representations (multi-output angle extractors) ---
    angle2quat: (a) => {
      const seq = seqArg(a, 3);
      const r1 = Array.from(m(a[0]).data), r2 = Array.from(m(a[1]).data), r3 = Array.from(m(a[2]).data);
      return ret(fromRows(r1.map((_, i) => ang2q(r1[i], r2[i], r3[i], seq))));
    },
    quat2angle: (a) => {
      const seq = seqArg(a, 1); const angs = rowsOf(m(a[0])).map((q) => dcm2ang(q2dcm(q), seq));
      return ret(spreadAngles(angs));
    },
    angle2dcm: (a) => ret(mat3(q2dcm(ang2q(asScalar(a[0]), asScalar(a[1]), asScalar(a[2]), seqArg(a, 3))))),
    dcm2angle: (a) => ret(spreadAngles([dcm2ang(read3(m(a[0])), seqArg(a, 1))])),
    angle2rod: (a) => {
      const seq = seqArg(a, 3);
      const r1 = Array.from(m(a[0]).data), r2 = Array.from(m(a[1]).data), r3 = Array.from(m(a[2]).data);
      return ret(fromRows(r1.map((_, i) => { const n = qnorm(ang2q(r1[i], r2[i], r3[i], seq)); return [n[1] / n[0], n[2] / n[0], n[3] / n[0]]; })));
    },
    rod2angle: (a) => {
      const seq = seqArg(a, 1);
      const angs = rowsOf(m(a[0])).map((b) => { const s = Math.sqrt(1 + b[0] * b[0] + b[1] * b[1] + b[2] * b[2]); return dcm2ang(q2dcm([1 / s, b[0] / s, b[1] / s, b[2] / s]), seq); });
      return ret(spreadAngles(angs));
    },
    rod2dcm: (a) => { const b = rowsOf(m(a[0]))[0]; const s = Math.sqrt(1 + b[0] * b[0] + b[1] * b[1] + b[2] * b[2]); return ret(mat3(q2dcm([1 / s, b[0] / s, b[1] / s, b[2] / s]))); },
    dcm2rod: (a) => { const n = dcm2q(read3(m(a[0]))); return ret(fromRows([[n[1] / n[0], n[2] / n[0], n[3] / n[0]]])); },
    // --- atmosphere ---
    atmosisa: (a, nargout) => ret(atmosOut(m(a[0]), isa1976, nargout)),
    atmoscoesa: (a, nargout) => ret(atmosOut(m(a[0]), isa1976, nargout)),
    atmospalt: (a) => ret(map(m(a[0]), (P) => (288.15 / 0.0065) * (1 - (P / 101325) ** (0.0065 * RAIR / G0)))),
    // --- flight parameters ---
    airspeed: (a) => {
      const v = rowsOf(m(a[0])).map((r) => Math.hypot(r[0], r[1], r[2]));
      return ret(v.length === 1 ? scalar(v[0]) : colVec(v));
    },
    // [alpha,beta] = alphabeta(vel): alpha=atan2(vz,vx); beta=asin(vy/airspeed)
    alphabeta: (a) => {
      const rows = rowsOf(m(a[0]));
      const alpha: number[] = [], beta: number[] = [];
      for (const r of rows) {
        const sp = Math.hypot(r[0], r[1], r[2]);
        alpha.push(Math.atan2(r[2], r[0]));
        beta.push(sp > Number.EPSILON ? Math.asin(r[1] / sp) : 0);
      }
      const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : colVec(c));
      return ret([wrap(alpha), wrap(beta)]);
    },
    // [alpha,beta] = dcm2alphabeta(dcm): beta=asin(dcm(1,2)); alpha=asin(-dcm(3,1))
    dcm2alphabeta: (a) => {
      const C = read3(m(a[0]));
      return ret([scalar(Math.asin(-C[2][0])), scalar(Math.asin(C[0][1]))]);
    },
    // q = dpressure(vel,rho) = 0.5*rho.*airspeed(vel)^2
    dpressure: (a) => {
      const v = rowsOf(m(a[0])).map((r) => Math.hypot(r[0], r[1], r[2]));
      const rhoData = Array.from(m(a[1]).data);
      const n = Math.max(v.length, rhoData.length);
      const out: number[] = [];
      for (let i = 0; i < n; i++) {
        const rho = rhoData.length === 1 ? rhoData[0] : rhoData[i];
        const vv = v.length === 1 ? v[0] : v[i];
        out.push(0.5 * rho * vv * vv);
      }
      return ret(out.length === 1 ? scalar(out[0]) : colVec(out));
    },
    // [mach,T,P,rho,A] = flowisentropic(gamma, var, mtype)
    flowisentropic: (a, nargout) => {
      const gMat = m(a[0]);
      const vMat = m(a[1]);
      const gArr = Array.from(gMat.data);
      const vArr = Array.from(vMat.data);
      if (gArr.some((g) => g <= 1)) throw new Error('aero:flowisentropic: gamma must be greater than 1');
      let mtype = 'mach';
      if (a[2] !== undefined) {
        const s = asString(a[2]).toLowerCase();
        if (s === 'mach') mtype = 'mach';
        else if (s.startsWith('temp')) mtype = 'tempratio';
        else if (s.startsWith('pres')) mtype = 'pressratio';
        else if (s.startsWith('dens')) mtype = 'densityratio';
        else if (s.startsWith('sub')) mtype = 'subsonicarearatio';
        else if (s.startsWith('sup')) mtype = 'supersonicarearatio';
        else throw new Error('aero:flowisentropic:paramSelectWrongInput');
      }
      // broadcast gamma & var
      const n = Math.max(gArr.length, vArr.length);
      const gAt = (i: number) => (gArr.length === 1 ? gArr[0] : gArr[i]);
      const vAt = (i: number) => (vArr.length === 1 ? vArr[0] : vArr[i]);
      // determine output shape: same as the array input (var preferred, else gamma)
      const shapeMat = vArr.length >= gArr.length ? vMat : gMat;
      const machArr: number[] = [], TArr: number[] = [], PArr: number[] = [], rhoArr: number[] = [], AArr: number[] = [];
      for (let i = 0; i < n; i++) {
        const g = gAt(i), v = vAt(i);
        let mach: number;
        switch (mtype) {
          case 'mach': mach = v; break;
          case 'tempratio': mach = Math.sqrt(2 / (g - 1) * (1 / v - 1)); break;
          case 'pressratio': mach = Math.sqrt(2 / (g - 1) * (Math.pow(v, (1 - g) / g) - 1)); break;
          case 'densityratio': mach = Math.sqrt(2 / (g - 1) * (Math.pow(v, 1 - g) - 1)); break;
          case 'subsonicarearatio': mach = machFromArea(g, v, false); break;
          case 'supersonicarearatio': mach = machFromArea(g, v, true); break;
          default: mach = v;
        }
        const [T, P, rho, A] = isentropicRatios(g, mach);
        machArr.push(mach); TArr.push(T); PArr.push(P); rhoArr.push(rho); AArr.push(A);
      }
      // overwrite the user-supplied quantity with the exact input (MATLAB does this)
      if (mtype === 'mach') for (let i = 0; i < n; i++) machArr[i] = vAt(i);
      if (mtype === 'tempratio') for (let i = 0; i < n; i++) TArr[i] = vAt(i);
      if (mtype === 'pressratio') for (let i = 0; i < n; i++) PArr[i] = vAt(i);
      if (mtype === 'densityratio') for (let i = 0; i < n; i++) rhoArr[i] = vAt(i);
      if (mtype === 'subsonicarearatio' || mtype === 'supersonicarearatio') for (let i = 0; i < n; i++) AArr[i] = vAt(i);
      const wrap = (c: number[]): Value =>
        c.length === 1 ? scalar(c[0]) : mat(shapeMat.rows, shapeMat.cols, Float64Array.from(c));
      const outs = [machArr, TArr, PArr, rhoArr, AArr].map(wrap);
      return ret(outs.slice(0, Math.max(1, nargout)));
    },
    // flowprandtlmeyer(gamma,mach[,'mach']) → [mach, nu(deg), mu(deg)] (forward/mach mode).
    flowprandtlmeyer: (a, nargout) => {
      const gArr = Array.from(m(a[0]).data), vMat = m(a[1]), vArr = Array.from(vMat.data);
      if (a[2] !== undefined && asString(a[2]).toLowerCase() !== 'mach') throw new Error('aero:flowprandtlmeyer: only mach mode supported');
      const n = Math.max(gArr.length, vArr.length);
      const gAt = (i: number) => (gArr.length === 1 ? gArr[0] : gArr[i]); const vAt = (i: number) => (vArr.length === 1 ? vArr[0] : vArr[i]);
      const machA: number[] = [], nuA: number[] = [], muA: number[] = [];
      for (let i = 0; i < n; i++) {
        const g = gAt(i), M = vAt(i);
        const nu = (Math.sqrt((g + 1) / (g - 1)) * Math.atan(Math.sqrt((g - 1) / (g + 1) * (M * M - 1))) - Math.atan(Math.sqrt(M * M - 1))) * 180 / Math.PI;
        machA.push(M); nuA.push(nu); muA.push(Math.asin(1 / M) * 180 / Math.PI);
      }
      const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : mat(vMat.rows, vMat.cols, Float64Array.from(c)));
      return ret([machA, nuA, muA].map(wrap).slice(0, Math.max(1, nargout)));
    },
    // flownormalshock(gamma,mach[,'mach']) → [M, T, P, rho, M2, P0, P1] (forward/mach mode).
    flownormalshock: (a, nargout) => {
      const gArr = Array.from(m(a[0]).data), vMat = m(a[1]), vArr = Array.from(vMat.data);
      if (a[2] !== undefined && asString(a[2]).toLowerCase() !== 'mach') throw new Error('aero:flownormalshock: only mach mode supported');
      const n = Math.max(gArr.length, vArr.length);
      const gAt = (i: number) => (gArr.length === 1 ? gArr[0] : gArr[i]); const vAt = (i: number) => (vArr.length === 1 ? vArr[0] : vArr[i]);
      const M_: number[] = [], T_: number[] = [], P_: number[] = [], rho_: number[] = [], M2_: number[] = [], P0_: number[] = [], P1_: number[] = [];
      for (let i = 0; i < n; i++) {
        const g = gAt(i), M = vAt(i), M2 = M * M;
        const T = (2 + (g - 1) * M2) * (2 * g * M2 - (g - 1)) / ((g + 1) * (g + 1) * M2);
        const P = (2 * g * M2 - (g - 1)) / (g + 1);
        const rho = (g + 1) * M2 / ((g - 1) * M2 + 2);
        const Md = Math.sqrt((M2 + 2 / (g - 1)) / (2 * g / (g - 1) * M2 - 1));
        const P0 = ((g + 1) * M2 / ((g - 1) * M2 + 2)) ** (g / (g - 1)) * ((g + 1) / (2 * g * M2 - (g - 1))) ** (1 / (g - 1));
        const P1 = (1 + (g - 1) / 2 * M2) ** (-g / (g - 1)) / P0;
        M_.push(M); T_.push(T); P_.push(P); rho_.push(rho); M2_.push(Md); P0_.push(P0); P1_.push(P1);
      }
      const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : mat(vMat.rows, vMat.cols, Float64Array.from(c)));
      return ret([M_, T_, P_, rho_, M2_, P0_, P1_].map(wrap).slice(0, Math.max(1, nargout)));
    },
    // flowfanno(gamma,mach[,'mach']) → [mach, T, P, rho, V, P0, fanno] (forward/mach mode).
    flowfanno: (a, nargout) => {
      const gArr = Array.from(m(a[0]).data), vMat = m(a[1]), vArr = Array.from(vMat.data);
      if (a[2] !== undefined && asString(a[2]).toLowerCase() !== 'mach') throw new Error('aero:flowfanno: only mach mode supported');
      const n = Math.max(gArr.length, vArr.length);
      const gAt = (i: number) => (gArr.length === 1 ? gArr[0] : gArr[i]); const vAt = (i: number) => (vArr.length === 1 ? vArr[0] : vArr[i]);
      const cols: number[][] = [[], [], [], [], [], [], []];
      for (let i = 0; i < n; i++) {
        const g = gAt(i), M = vAt(i), M2 = M * M, denom = 2 + (g - 1) * M2;
        cols[0].push(M);
        cols[1].push((g + 1) / denom);                                          // T/T*
        cols[2].push((1 / M) * Math.sqrt((g + 1) / denom));                      // P/P*
        cols[3].push((1 / M) * Math.sqrt(denom / (g + 1)));                      // rho/rho*
        cols[4].push(M * Math.sqrt((g + 1) / denom));                           // V/V*
        cols[5].push((1 / M) * (denom / (g + 1)) ** ((g + 1) / (2 * (g - 1)))); // P0/P0*
        cols[6].push((1 - M2) / (g * M2) + (g + 1) / (2 * g) * Math.log((g + 1) * M2 / denom)); // 4fL*/D
      }
      const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : mat(vMat.rows, vMat.cols, Float64Array.from(c)));
      return ret(cols.map(wrap).slice(0, Math.max(1, nargout)));
    },
    // flowrayleigh(gamma,mach[,'mach']) → [mach, T, P, rho, V, P0, T0] (forward/mach mode).
    flowrayleigh: (a, nargout) => {
      const gArr = Array.from(m(a[0]).data), vMat = m(a[1]), vArr = Array.from(vMat.data);
      if (a[2] !== undefined && asString(a[2]).toLowerCase() !== 'mach') throw new Error('aero:flowrayleigh: only mach mode supported');
      const n = Math.max(gArr.length, vArr.length);
      const gAt = (i: number) => (gArr.length === 1 ? gArr[0] : gArr[i]); const vAt = (i: number) => (vArr.length === 1 ? vArr[0] : vArr[i]);
      const cols: number[][] = [[], [], [], [], [], [], []];
      for (let i = 0; i < n; i++) {
        const g = gAt(i), M = vAt(i), M2 = M * M, gm = 1 + g * M2;
        cols[0].push(M);
        cols[1].push(M2 * (g + 1) * (g + 1) / (gm * gm));                       // T/T*
        cols[2].push((g + 1) / gm);                                             // P/P*
        cols[3].push(gm / ((g + 1) * M2));                                      // rho/rho*
        cols[4].push((g + 1) * M2 / gm);                                        // V/V*
        cols[5].push((g + 1) * M2 * (2 + (g - 1) * M2) / (gm * gm));            // (MATLAB 6th output)
        cols[6].push((g + 1) / gm * ((2 + (g - 1) * M2) / (g + 1)) ** (g / (g - 1))); // (MATLAB 7th output)
      }
      const wrap = (c: number[]): Value => (c.length === 1 ? scalar(c[0]) : mat(vMat.rows, vMat.cols, Float64Array.from(c)));
      return ret(cols.map(wrap).slice(0, Math.max(1, nargout)));
    },
    // mach = machnumber(vel,a) = airspeed(vel)./a (vel rows are velocity vectors)
    machnumber: (a) => {
      const v = rowsOf(m(a[0])).map((r) => Math.hypot(r[0], r[1], r[2]));
      const av = Array.from(m(a[1]).data);
      const n = Math.max(v.length, av.length);
      const out: number[] = [];
      for (let i = 0; i < n; i++) out.push((v.length === 1 ? v[0] : v[i]) / (av.length === 1 ? av[0] : av[i]));
      return ret(out.length === 1 ? scalar(out[0]) : colVec(out));
    },
    // Isentropic relative ratios vs ISA sea level (101325 Pa, 288.15 K, 1.225 kg/m³).
    rrdelta: (a) => ret(ew3(m(a[0]), m(a[1]), m(a[2]), (p, M, g) => (p / 101325) * (1 + 0.5 * (g - 1) * M * M) ** (g / (g - 1)))),
    rrtheta: (a) => ret(ew3(m(a[0]), m(a[1]), m(a[2]), (t, M, g) => (1 + 0.5 * (g - 1) * M * M) * (t / 288.15))),
    rrsigma: (a) => ret(ew3(m(a[0]), m(a[1]), m(a[2]), (r, M, g) => (r / 1.225) * (1 + 0.5 * (g - 1) * M * M) ** (1 / (g - 1)))),
  },
  help: HELP_AEROSPACE,
};

/** Spread per-row [r1,r2,r3] Euler angles into three outputs (scalar for a single row). */
function spreadAngles(angs: [number, number, number][]): Value[] {
  const one = angs.length === 1;
  return [0, 1, 2].map((k) => (one ? scalar(angs[0][k]) : colVec(angs.map((r) => r[k]))));
}
