// Curve Fitting Toolbox — Splines (B-form engine).
//
// Ported from the MATLAB R2026a Spline Toolbox `.m` sources
// (/usr/local/MATLAB/R2026a/toolbox/curvefit/splines). The sandbox already
// has a piecewise-polynomial (pp) form in base MATLAB (mkpp/spline/fnval/…);
// this module adds the **B-form** (B-spline) representation and its companion
// functions: construction (spmak), evaluation (spval), knot utilities
// (augknt/aveknt/brk2knt/knt2brk/knt2mlt/aptknt), the collocation matrix
// (spcol), interpolation (spapi) and conversion to pp-form (sp2pp — so the
// base fnval/fnder/fnint then work on it).
//
// Univariate, scalar-valued splines (the common case). All validated
// oracle-exact against live MATLAB.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type StructV, isMat, isStruct, rowVec, scalar, zeros, mat,
  str, toArray, asString, asScalar, toMat as m, MatError,
} from '../values';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

// ── B-form struct ───────────────────────────────────────────────────────────
/** Build the MATLAB B-form struct (univariate scalar): form 'B-', knots, coefs, number, order, dim. */
function makeBform(knots: number[], coefs: number[]): StructV {
  const k = knots.length - coefs.length;
  if (k < 1) throw new MatError(`spmak: there should be more knots than coefficients (got ${knots.length} knots, ${coefs.length} coefs)`);
  const fields = new Map<string, Value[]>([
    ['form', [str('B-')]], ['knots', [rowVec(knots)]], ['coefs', [rowVec(coefs)]],
    ['number', [scalar(coefs.length)]], ['order', [scalar(k)]], ['dim', [scalar(1)]],
  ]);
  return { kind: 'struct', rows: 1, cols: 1, fields };
}
/** Read a B-form struct back into plain data. */
function readBform(v: Value): { t: number[]; a: number[]; n: number; k: number } {
  if (!isStruct(v) || asString(v.fields.get('form')?.[0] ?? str('')) !== 'B-') throw new MatError('expected a B-form spline struct (from spmak/spapi)');
  const t = toArray(m(v.fields.get('knots')![0])), a = toArray(m(v.fields.get('coefs')![0]));
  return { t, a, n: a.length, k: t.length - a.length };
}

// ── core B-spline math ──────────────────────────────────────────────────────
/** Cox–de Boor: values of all n = (t.length−k) order-k B-splines at x. */
function bsplineValues(t: number[], k: number, x: number): number[] {
  const m1 = t.length - 1;                      // number of order-1 indicator intervals
  let B = new Array<number>(m1).fill(0);
  for (let i = 0; i < m1; i++) if (t[i] <= x && x < t[i + 1]) B[i] = 1;
  // right-endpoint closure: if x sits at the last distinct knot, light the last nonempty interval
  if (x >= t[m1]) { for (let i = m1 - 1; i >= 0; i--) if (t[i] < t[i + 1] && t[i] <= x) { B[i] = 1; break; } }
  for (let r = 2; r <= k; r++) {
    const nb = t.length - r; const Br = new Array<number>(nb).fill(0);
    for (let i = 0; i < nb; i++) {
      const d1 = t[i + r - 1] - t[i], d2 = t[i + r] - t[i + 1];
      const a1 = d1 > 0 ? (x - t[i]) / d1 : 0, a2 = d2 > 0 ? (t[i + r] - x) / d2 : 0;
      Br[i] = a1 * B[i] + a2 * B[i + 1];
    }
    B = Br;
  }
  return B;                                      // length n
}
/** B-form derivative: order k → k−1, coefs Δ-weighted, dropping the outer knots. */
function bsplineDeriv(t: number[], a: number[], k: number): { t: number[]; a: number[]; k: number } {
  const n = a.length;
  if (k <= 1) return { t: t.slice(1, t.length - 1), a: new Array<number>(Math.max(n - 1, 0)).fill(0), k: 0 };
  const ap = new Array<number>(n - 1);
  for (let j = 0; j < n - 1; j++) { const den = t[j + k] - t[j + 1]; ap[j] = den > 0 ? (k - 1) * (a[j + 1] - a[j]) / den : 0; }
  return { t: t.slice(1, t.length - 1), a: ap, k: k - 1 };
}
/** Evaluate a univariate B-form spline at x (Σ a_j B_{j,k}(x)). */
function spvalAt(t: number[], a: number[], k: number, x: number): number {
  const B = bsplineValues(t, k, x); let s = 0; for (let j = 0; j < a.length; j++) s += a[j] * B[j]; return s;
}

// ── knot utilities ──────────────────────────────────────────────────────────
function brk2kntArr(breaks: number[], mults: number[]): number[] {
  const out: number[] = [];
  for (let i = 0; i < breaks.length; i++) { const mlt = mults.length === breaks.length ? mults[i] : mults[0]; for (let r = 0; r < mlt; r++) out.push(breaks[i]); }
  return out;
}
function distinctSorted(t: number[]): { xi: number[]; mult: number[] } {
  const s = t.slice().sort((p, q) => p - q); const xi: number[] = [], mult: number[] = [];
  for (const v of s) { if (xi.length && v === xi[xi.length - 1]) mult[mult.length - 1]++; else { xi.push(v); mult.push(1); } }
  return { xi, mult };
}
function augkntArr(knots: number[], k: number, mults: number[]): number[] {
  const { xi } = distinctSorted(knots);
  if (xi.length < 2) throw new MatError('augknt: need at least two distinct knots');
  const interior = xi.slice(1, xi.length - 1);
  const im = interior.map((_, i) => (mults.length === interior.length ? mults[i] : mults[0]));
  return brk2kntArr([xi[0], ...interior, xi[xi.length - 1]], [k, ...im, k]);
}
/** Greville sites tstar_i = mean(t[i+1..i+k-1]) (the k−1 interior knots), i=1..n. */
function avekntArr(t: number[], k: number): number[] {
  const n = t.length - k; if (k < 2) throw new MatError('aveknt: order k must be ≥ 2'); if (n < 0) throw new MatError('aveknt: too few knots');
  const out = new Array<number>(n);
  for (let i = 0; i < n; i++) { let s = 0; for (let j = 1; j <= k - 1; j++) s += t[i + j]; out[i] = s / (k - 1); }
  return out;
}
function aptkntArr(tau: number[], k: number): { knots: number[]; k: number } {
  const n = tau.length; if (n < 2) throw new MatError('aptknt: need at least two sites');
  k = Math.max(1, Math.min(k, n));
  if (k === 1) { const knots = [tau[0]]; for (let i = 0; i < n - 1; i++) knots.push(tau[i] + (tau[i + 1] - tau[i]) / 2); knots.push(tau[n - 1]); return { knots, k }; }
  return { knots: augkntArr([tau[0], ...avekntArr(tau, k), tau[n - 1]], k, [1]), k };
}
/** Cumulative within-run multiplicities m(i)=#{j<i: t(j)=t(i)} for sorted t. */
function knt2mltArr(t: number[]): number[] {
  const s = t.slice().sort((p, q) => p - q); const out = new Array<number>(s.length);
  for (let i = 0; i < s.length; i++) out[i] = i > 0 && s[i] === s[i - 1] ? out[i - 1] + 1 : 0;
  return out;
}

// ── pp conversion ───────────────────────────────────────────────────────────
/** sp2pp: B-form → pp-form (breaks = distinct knots in the basic interval, L×k Taylor coefs). */
function sp2ppStruct(t: number[], a: number[], k: number): StructV {
  const n = a.length; const lo = t[k - 1], hi = t[n];                 // basic interval [t(k), t(n+1)]
  const { xi } = distinctSorted(t);
  const breaks = xi.filter((v) => v >= lo - 1e-300 && v <= hi + 1e-300);
  const L = breaks.length - 1; const coefs = zeros(L, k);             // L×k, MATLAB power order (high→low)
  for (let i = 0; i < L; i++) {
    const xL = breaks[i];
    let dt = t.slice(), da = a.slice(), dk = k, fac = 1;
    for (let p = 0; p < k; p++) {                                     // p-th derivative → power p coefficient
      const val = dk >= 1 ? spvalAt(dt, da, dk, xL) : 0;
      coefs.data[i + (k - 1 - p) * L] = val / fac;                    // column (k-1-p) holds power p
      fac *= (p + 1);
      ({ t: dt, a: da, k: dk } = bsplineDeriv(dt, da, dk));
    }
  }
  const fields = new Map<string, Value[]>([
    ['form', [str('pp')]], ['breaks', [rowVec(breaks)]], ['coefs', [coefs]],
    ['pieces', [scalar(L)]], ['order', [scalar(k)]], ['dim', [scalar(1)]],
  ]);
  return { kind: 'struct', rows: 1, cols: 1, fields };
}

// ── small dense linear solve (Gaussian elimination with partial pivoting) ────
function solveDense(A: number[][], b: number[]): number[] {
  const n = b.length; const M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    [M[c], M[piv]] = [M[piv], M[c]];
    const d = M[c][c] || 1e-300;
    for (let r = 0; r < n; r++) if (r !== c) { const f = M[r][c] / d; for (let cc = c; cc <= n; cc++) M[r][cc] -= f * M[c][cc]; }
  }
  return M.map((r, i) => r[n] / (M[i][i] || 1e-300));
}

// ════════════════════════════════════════════════════════════════════════════
//  Builtins
// ════════════════════════════════════════════════════════════════════════════
export const SPLINE_BUILTINS: Record<string, Builtin> = {
  /** sp=spmak(knots,coefs) — assemble a B-form spline from a knot sequence and coefficients. */
  spmak: async (a) => ret(makeBform(toArray(m(a[0])), toArray(m(a[1])))),

  /** [t,c,n,k,d]=spbrk(sp) | out=spbrk(sp,part) — break a B-form into parts. */
  spbrk: async (a, nargout) => {
    const { t, a: co, n, k } = readBform(a[0]);
    if (a.length >= 2 && (isMat(a[1]) ? (a[1] as Mat).isChar : true)) {
      switch (asString(a[1])[0]) {
        case 'k': case 't': return ret(rowVec(t));
        case 'c': return ret(rowVec(co));
        case 'n': return ret(scalar(n));
        case 'o': return ret(scalar(k));
        case 'd': return ret(scalar(1));
        case 'i': return ret(rowVec([t[0], t[t.length - 1]]));
        case 'b': { const { xi } = distinctSorted(t); return ret(rowVec(xi)); }
        default: throw new MatError(`spbrk: unknown part '${asString(a[1])}'`);
      }
    }
    const outs: Value[] = [rowVec(t), rowVec(co), scalar(n), scalar(k), scalar(1)];
    return outs.slice(0, Math.max(1, nargout));
  },

  /** v=spval(sp,x) — evaluate a B-form spline at the points x (same shape as x). */
  spval: async (a) => {
    const { t, a: co, k } = readBform(a[0]); const X = m(a[1]);
    const out = zeros(X.rows, X.cols); for (let i = 0; i < X.data.length; i++) out.data[i] = spvalAt(t, co, k, X.data[i]);
    return ret(out);
  },

  /** pp=sp2pp(sp) — convert a B-form spline to pp-form (then base fnval/fnder/fnint apply). */
  sp2pp: async (a) => { const { t, a: co, k } = readBform(a[0]); return ret(sp2ppStruct(t, co, k)); },

  /** t=augknt(knots,k[,mults]) — knot sequence with end knots of multiplicity k. */
  augknt: async (a, nargout) => {
    const knots = toArray(m(a[0])), k = Math.round(asScalar(a[1])); const mults = a.length >= 3 ? toArray(m(a[2])) : [1];
    const out = augkntArr(knots, k, mults);
    const { xi } = distinctSorted(knots); void xi;
    return nargout >= 2 ? [rowVec(out), scalar(k - 1)] : [rowVec(out)];
  },

  /** tstar=aveknt(t,k) — knot averages (Greville sites). */
  aveknt: async (a) => ret(rowVec(avekntArr(toArray(m(a[0])), Math.round(asScalar(a[1]))))),

  /** t=brk2knt(breaks,mults) — knot sequence from breaks with given multiplicities. */
  brk2knt: async (a) => ret(rowVec(brk2kntArr(toArray(m(a[0])), toArray(m(a[1])).map((v) => Math.round(v))))),

  /** [xi,m]=knt2brk(t) — distinct knots and their multiplicities. */
  knt2brk: async (a, nargout) => { const { xi, mult } = distinctSorted(toArray(m(a[0]))); return nargout >= 2 ? [rowVec(xi), rowVec(mult)] : [rowVec(xi)]; },

  /** [m,t]=knt2mlt(t) — cumulative knot multiplicities m(i)=#{j<i:t(j)=t(i)}. */
  knt2mlt: async (a, nargout) => { const t = toArray(m(a[0])); const mm = knt2mltArr(t); const ts = t.slice().sort((p, q) => p - q); return nargout >= 2 ? [rowVec(mm), rowVec(ts)] : [rowVec(mm)]; },

  /** [knots,k]=aptknt(tau,k) — knots from data sites making spapi interpolation well-posed. */
  aptknt: async (a, nargout) => { const r = aptkntArr(toArray(m(a[0])), Math.round(asScalar(a[1]))); return nargout >= 2 ? [rowVec(r.knots), scalar(r.k)] : [rowVec(r.knots)]; },

  /** colloc=spcol(knots,k,tau) — B-spline collocation matrix [B_j(tau_i)] (distinct sites). */
  spcol: async (a) => {
    const knots = toArray(m(a[0])), k = Math.round(asScalar(a[1])), tau = toArray(m(a[2]));
    if (knt2mltArr(tau).some((v) => v > 0)) throw new MatError('spcol: repeated sites (derivative collocation) are not supported in the sandbox');
    const n = knots.length - k; const C = zeros(tau.length, n);
    for (let i = 0; i < tau.length; i++) { const B = bsplineValues(knots, k, tau[i]); for (let j = 0; j < n; j++) C.data[i + j * tau.length] = B[j]; }
    return ret(C);
  },

  /** sp=spapi(knots|k,x,y) — interpolating spline (B-form). First arg scalar → order, else knots. */
  spapi: async (a) => {
    const x = toArray(m(a[1])), y = toArray(m(a[2]));
    let knots: number[], k: number;
    const arg0 = m(a[0]);
    if (arg0.rows * arg0.cols === 1) { k = Math.round(arg0.data[0]); ({ knots } = aptkntArr(x, k)); }
    else { knots = toArray(arg0); k = knots.length - x.length; if (k < 1) throw new MatError('spapi: knots and sites are incompatible (need length(knots) > length(x))'); }
    const n = knots.length - k;
    if (n !== x.length) throw new MatError(`spapi: collocation matrix must be square (got ${x.length} sites, ${n} B-splines)`);
    const C: number[][] = []; for (let i = 0; i < x.length; i++) C.push(bsplineValues(knots, k, x[i]));
    const coefs = solveDense(C, y);
    return ret(makeBform(knots, coefs));
  },
};

export const SPLINE_HELP: Record<string, string> = {
  spmak: 'Put together a spline in B-form',
  spbrk: 'Extract parts of a B-form spline',
  spval: 'Evaluate a spline in B-form',
  sp2pp: 'Convert a spline from B-form to piecewise-polynomial form',
  augknt: 'Augment a knot sequence (end knots of multiplicity k)',
  aveknt: 'Knot averages (Greville sites)',
  brk2knt: 'Knot sequence from breaks and multiplicities',
  knt2brk: 'Breaks and multiplicities from a knot sequence',
  knt2mlt: 'Knot multiplicities',
  aptknt: 'Acceptable knot sequence for interpolation',
  spcol: 'B-spline collocation matrix',
  spapi: 'Spline interpolation, B-form',
};
