/** Built-in functions for the MATLAB subset. */
import {
  type Value, type Mat, type Handle, MatError, isMat, isHandle,
  mat, zeros, scalar, cscalar, bool, str, rowVec, colVec, fromRows, numel, isScalar, isEmpty,
  asScalar, asString, map, elementwise, matmul, transpose, horzcat, vertcat, toArray, truthy,
  isComplex, cmap, cmapReal, conj as conjFn, realPart, imagPart, csqrt, cexp, clog, ewPow, finishComplex,
  ewAdd, ewSub, ewMul, ewRDiv, ewLDiv, ewEq, cmatmul, ctranspose as ctransposeFn, cmul, cdiv,
  type Cell, type StructV, isCell, isStruct, makeCell, dimsOf, numelOf,
  type Sparse, isSparse, sparseToDense, denseToSparse, sparseFromTriplets, sparseFromMap,
  makeND, ndSize, ndimsOf,
  type Str, isStr, makeStr, makeStrArr,
  type Graph, isGraph, makeGraph,
} from './values';
import {
  det, inv, mldivide, diag, norm, eye,
  qr as qrDecomp, chol as cholFn, luOutputs, jacobiEigSym, svd as svdReal,
  rankOf, cond as condFn, pinv as pinvFn, orth as orthFn, nullspace, rref as rrefFn, vecnorm as vecnormFn, isSymmetric, cDet,
  generalEig, durandKerner, hess as hessFn, schur as schurFn, expm as expmFn, logm as logmFn, sqrtm as sqrtmFn, ldl as ldlFn, lsqnonneg as lsqnonnegFn,
  balance as balanceFn, rsf2csf as rsf2csfFn, qz as qzFn, ordschur as ordschurFn, schurEig as schurEigFn,
} from './linalg';
import { dispValue, sprintf } from './format';
import type { Graphics } from './graphics';

/** Services the interpreter exposes to builtins. */
export interface Env {
  output(text: string): void;
  requestInput(prompt: string): Promise<string>;
  evalInput(text: string): Promise<Value>;
  graphics: Graphics;
  callHandle(h: Handle, args: Value[], nargout: number): Promise<Value[]>;
  makeHandle(name: string): Handle;
  help(name: string): string;
  clearWorkspace(names: string[]): void;
  workspaceVars(): { name: string; size: string; klass: string }[];
  clearConsole(): void;
}

export type Builtin = (args: Value[], nargout: number, env: Env) => Promise<Value[]>;

function m(v: Value, name = 'argument'): Mat {
  if (isSparse(v)) return sparseToDense(v);   // sparse densifies for generic numeric builtins
  if (!isMat(v)) throw new MatError(`${name}: expected a numeric value`);
  return v;
}
const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const ew = (f: (x: number) => number): Builtin => async (a) => ret(map(m(a[0]), f));

function reduce(a: Mat, dim: number | undefined, init: number, f: (acc: number, x: number) => number, fin: (acc: number, count: number) => number = (x) => x): Mat {
  const vector = a.rows === 1 || a.cols === 1;
  if (dim === undefined && vector) {
    let acc = init; for (let i = 0; i < a.data.length; i++) acc = f(acc, a.data[i]);
    return scalar(fin(acc, numel(a)));
  }
  const d = dim ?? 1;
  if (d === 1) {
    const out = zeros(1, a.cols);
    for (let c = 0; c < a.cols; c++) { let acc = init; for (let r = 0; r < a.rows; r++) acc = f(acc, a.data[r + c * a.rows]); out.data[c] = fin(acc, a.rows); }
    return out;
  }
  const out = zeros(a.rows, 1);
  for (let r = 0; r < a.rows; r++) { let acc = init; for (let c = 0; c < a.cols; c++) acc = f(acc, a.data[r + c * a.rows]); out.data[r] = fin(acc, a.cols); }
  return out;
}

function minmax(args: Value[], nargout: number, pick: (a: number, b: number) => boolean): Value[] {
  const A = m(args[0]);
  if (args.length >= 2 && isMat(args[1]) && numel(args[1]) > 0) {
    // element-wise max/min of two arrays
    return [elementwise(A, args[1] as Mat, (x, y) => (pick(x, y) ? x : y))];
  }
  const reduceVec = (vals: number[]): [number, number] => {
    let bi = 0; for (let i = 1; i < vals.length; i++) if (pick(vals[i], vals[bi])) bi = i;
    return [vals[bi], bi + 1];
  };
  if (A.rows === 1 || A.cols === 1) {
    if (numel(A) === 0) return [zeros(0, 0), zeros(0, 0)];
    const [v, idx] = reduceVec(toArray(A));
    return nargout >= 2 ? [scalar(v), scalar(idx)] : [scalar(v)];
  }
  const vals = zeros(1, A.cols), idxs = zeros(1, A.cols);
  for (let c = 0; c < A.cols; c++) {
    const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]);
    const [v, idx] = reduceVec(col); vals.data[c] = v; idxs.data[c] = idx;
  }
  return nargout >= 2 ? [vals, idxs] : [vals];
}

function dimArg(args: Value[], i: number): number | undefined {
  return args.length > i && isMat(args[i]) ? asScalar(args[i]) : undefined;
}

function sizeOf(args: Value[], nargout: number): Value[] {
  const v = args[0];
  const dims = isMat(v) && v.nd ? v.nd.slice() : dimsOf(v);
  if (args.length >= 2) { const d = Math.round(asScalar(args[1])); return [scalar(dims[d - 1] ?? 1)]; }
  if (nargout >= 2) {
    // [a,b,c]=size(A): last requested output absorbs the product of remaining dims.
    const out: Value[] = [];
    for (let i = 0; i < nargout; i++) out.push(scalar(i === nargout - 1 ? dims.slice(i).reduce((p, x) => p * x, 1) || (i < dims.length ? 0 : 1) : (dims[i] ?? 1)));
    return out;
  }
  return [rowVec(dims)];
}
/** zeros/ones/rand argument handling extended to N-D: (), (n), (r,c,...), ([d1 d2 ...]). */
function dimsN(args: Value[]): number[] {
  if (args.length === 0) return [1, 1];
  if (args.length === 1) { const a = m(args[0]); if (numel(a) >= 2) return toArray(a).map((x) => Math.round(x)); const n = Math.round(asScalar(a)); return [n, n]; }
  return args.map((x) => Math.round(asScalar(x)));
}
/** Coerce char/string/cellstr/numeric to a string-array view (dims + items). */
function asStrArr(v: Value): { rows: number; cols: number; items: string[] } {
  if (isStr(v)) return { rows: v.rows, cols: v.cols, items: v.items };
  if (isCell(v)) return { rows: v.rows, cols: v.cols, items: v.items.map((x) => asString(x)) };
  if (isMat(v) && v.isChar) return { rows: 1, cols: 1, items: [asString(v)] };
  if (isMat(v)) return { rows: v.rows, cols: v.cols, items: Array.from(v.data, (x) => String(x)) };
  return { rows: 1, cols: 1, items: [asString(v)] };
}
const mapStrArr = (v: Value, f: (s: string) => string): Str => { const s = asStrArr(v); return makeStrArr(s.rows, s.cols, s.items.map(f)); };
const prodA = (a: number[]): number => a.reduce((p, x) => p * x, 1);
/** Concatenate N-D arrays along `dim` (1-based). */
function catND(dim: number, parts: Mat[]): Mat {
  const d = dim - 1;
  const outDims = ndSize(parts[0]).slice(); while (outDims.length <= d) outDims.push(1);
  outDims[d] = parts.reduce((s, p) => { const pd = ndSize(p); return s + (pd[d] ?? 1); }, 0);
  const ostride = [1]; for (let i = 1; i < outDims.length; i++) ostride[i] = ostride[i - 1] * outDims[i - 1];
  const data = new Float64Array(prodA(outDims)); let offset = 0;
  for (const p of parts) {
    const PD = ndSize(p).slice(); while (PD.length < outDims.length) PD.push(1);
    const pstride = [1]; for (let i = 1; i < PD.length; i++) pstride[i] = pstride[i - 1] * PD[i - 1];
    const ptot = numel(p);
    for (let o = 0; o < ptot; o++) { let lin = 0; for (let k = 0; k < PD.length; k++) { const idx = Math.floor(o / pstride[k]) % PD[k]; lin += (k === d ? idx + offset : idx) * ostride[k]; } data[lin] = p.data[o]; }
    offset += PD[d];
  }
  return makeND(outDims, data, { isChar: parts[0].isChar });
}
/** Permute the dimensions of an array (1-based order). */
function permuteND(A: Mat, order: number[]): Mat {
  const D = ndSize(A).slice(); while (D.length < order.length) D.push(1);
  const outDims = order.map((o) => D[o - 1]);
  const istride = [1]; for (let i = 1; i < D.length; i++) istride[i] = istride[i - 1] * D[i - 1];
  const ostride = [1]; for (let i = 1; i < outDims.length; i++) ostride[i] = ostride[i - 1] * outDims[i - 1];
  const total = prodA(D); const data = new Float64Array(total); const im = A.idata ? new Float64Array(total) : null;
  for (let o = 0; o < total; o++) { let lin = 0; for (let k = 0; k < outDims.length; k++) { const oi = Math.floor(o / ostride[k]) % outDims[k]; lin += oi * istride[order[k] - 1]; } data[o] = A.data[lin]; if (im) im[o] = A.idata![lin]; }
  return makeND(outDims, data, { idata: im, isChar: A.isChar });
}

function dims2(args: Value[], def = 0): [number, number] {
  // zeros/ones/eye argument handling: (), (n), (r,c), ([r c])
  if (args.length === 0) return [1, 1];
  if (args.length === 1) {
    const a = m(args[0]);
    if (numel(a) >= 2) return [a.data[0], a.data[1]];
    const n = asScalar(a); return [n, n];
  }
  return [asScalar(args[0]), asScalar(args[1])];
}

function nthroot(x: number, n: number): number {
  if (x < 0) { if (Math.round(n) % 2 !== 0) return -Math.pow(-x, 1 / n); return NaN; }
  return Math.pow(x, 1 / n);
}

export const BUILTINS: Record<string, Builtin> = {
  // elementwise math
  sin: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => [Math.sin(re) * Math.cosh(im), Math.cos(re) * Math.sinh(im)]) : map(A, Math.sin)); },
  cos: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => [Math.cos(re) * Math.cosh(im), -Math.sin(re) * Math.sinh(im)]) : map(A, Math.cos)); },
  tan: async (a) => { const A = m(a[0]); if (!isComplex(A)) return ret(map(A, Math.tan)); return ret(cmap(A, (re, im) => { const sr = Math.sin(re) * Math.cosh(im), si = Math.cos(re) * Math.sinh(im); const cr = Math.cos(re) * Math.cosh(im), ci = -Math.sin(re) * Math.sinh(im); const d = cr * cr + ci * ci; return [(sr * cr + si * ci) / d, (si * cr - sr * ci) / d]; })); },
  asin: ew(Math.asin), acos: ew(Math.acos), atan: ew(Math.atan),
  sinh: ew(Math.sinh), cosh: ew(Math.cosh), tanh: ew(Math.tanh),
  cot: ew((x) => 1 / Math.tan(x)),
  exp: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => cexp(re, im)) : map(A, Math.exp)); },
  log: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => clog(re, im)) : map(A, Math.log)); },
  log10: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => { const [lr, li] = clog(re, im); return [lr / Math.LN10, li / Math.LN10]; }) : map(A, Math.log10)); },
  log2: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => { const [lr, li] = clog(re, im); return [lr / Math.LN2, li / Math.LN2]; }) : map(A, Math.log2)); },
  sqrt: async (a) => { const A = m(a[0]); return ret(isComplex(A) || toArray(A).some((x) => x < 0) ? cmap(A, (re, im) => csqrt(re, im)) : map(A, Math.sqrt)); },
  abs: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmapReal(A, (re, im) => Math.hypot(re, im)) : map(A, Math.abs)); },
  sign: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => { const mg = Math.hypot(re, im); return mg === 0 ? [0, 0] : [re / mg, im / mg]; }) : map(A, Math.sign)); },
  conj: async (a) => ret(conjFn(m(a[0]))),
  real: async (a) => ret(realPart(m(a[0]))),
  imag: async (a) => ret(imagPart(m(a[0]))),
  angle: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmapReal(A, (re, im) => Math.atan2(im, re)) : map(A, (x) => (x < 0 ? Math.PI : 0))); },
  complex: async (a) => { const A = m(a[0]); const B = a.length >= 2 ? m(a[1]) : zeros(A.rows, A.cols); const re = new Float64Array(A.data); const im = new Float64Array(A.data.length); for (let i = 0; i < im.length; i++) im[i] = B.data.length === 1 ? B.data[0] : B.data[i]; return ret({ kind: 'num', rows: A.rows, cols: A.cols, data: re, idata: im }); },
  iscomplex: async (a) => ret(bool(isComplex(m(a[0])))),
  floor: ew(Math.floor), ceil: ew(Math.ceil), round: ew((x) => Math.round(x)),
  fix: ew(Math.trunc),
  atan2: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.atan2)),
  mod: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (y === 0 ? x : ((x % y) + y) % y))),
  rem: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (y === 0 ? NaN : x % y))),
  power: async (a) => ret(ewPow(m(a[0]), m(a[1]))),
  nthroot: async (a) => ret(elementwise(m(a[0]), m(a[1]), nthroot)),
  hypot: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.hypot)),

  // trig / hyperbolic completion (radians)
  sec: ew((x) => 1 / Math.cos(x)), csc: ew((x) => 1 / Math.sin(x)),
  coth: ew((x) => 1 / Math.tanh(x)), sech: ew((x) => 1 / Math.cosh(x)), csch: ew((x) => 1 / Math.sinh(x)),
  acot: ew((x) => Math.atan(1 / x)), asec: ew((x) => Math.acos(1 / x)), acsc: ew((x) => Math.asin(1 / x)),
  asinh: ew(Math.asinh), acosh: ew(Math.acosh), atanh: ew(Math.atanh),
  acoth: ew((x) => Math.atanh(1 / x)), asech: ew((x) => Math.acosh(1 / x)), acsch: ew((x) => Math.asinh(1 / x)),
  // degree-valued trig
  sind: ew((x) => Math.sin(x * DEG)), cosd: ew((x) => Math.cos(x * DEG)), tand: ew((x) => Math.tan(x * DEG)),
  cotd: ew((x) => 1 / Math.tan(x * DEG)), secd: ew((x) => 1 / Math.cos(x * DEG)), cscd: ew((x) => 1 / Math.sin(x * DEG)),
  asind: ew((x) => Math.asin(x) / DEG), acosd: ew((x) => Math.acos(x) / DEG), atand: ew((x) => Math.atan(x) / DEG),
  acotd: ew((x) => Math.atan(1 / x) / DEG),
  atan2d: async (a) => ret(elementwise(m(a[0]), m(a[1]), (y, x) => Math.atan2(y, x) / DEG)),
  deg2rad: ew((x) => x * DEG), rad2deg: ew((x) => x / DEG),
  // elementary extras
  cumprod: async (a) => {
    const A = m(a[0]); const o = zeros(A.rows, A.cols);
    if (A.rows === 1 || A.cols === 1) { let p = 1; for (let i = 0; i < A.data.length; i++) { p *= A.data[i]; o.data[i] = p; } }
    else for (let c = 0; c < A.cols; c++) { let p = 1; for (let r = 0; r < A.rows; r++) { p *= A.data[r + c * A.rows]; o.data[r + c * A.rows] = p; } }
    return ret(o);
  },
  expm1: ew(Math.expm1), log1p: ew(Math.log1p),
  sinpi: ew((x) => Math.sin(Math.PI * x)), cospi: ew((x) => Math.cos(Math.PI * x)),
  pow2: ew((x) => Math.pow(2, x)),
  nextpow2: ew((x) => { const a = Math.abs(x); return a === 0 ? 0 : Math.ceil(Math.log2(a)); }),
  realsqrt: ew((x) => { if (x < 0) throw new MatError('realsqrt: argument must be nonnegative'); return Math.sqrt(x); }),
  reallog: ew((x) => { if (x < 0) throw new MatError('reallog: argument must be nonnegative'); return Math.log(x); }),
  realpow: async (a) => ret(elementwise(m(a[0]), m(a[1]), Math.pow)),
  // value queries
  isreal: async (a) => ret(bool(!isComplex(m(a[0])))),
  allfinite: async (a) => ret(bool(toArray(m(a[0])).every(Number.isFinite))),
  anynan: async (a) => ret(bool(toArray(m(a[0])).some(Number.isNaN))),
  // number theory
  gcd: async (a) => ret(elementwise(m(a[0]), m(a[1]), gcd2)),
  lcm: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => (x === 0 || y === 0 ? 0 : Math.abs(x * y) / gcd2(x, y)))),
  factorial: ew((x) => factorialN(Math.round(x))),
  nchoosek: async (a) => {
    const n = Math.round(asScalar(a[0])); const k = Math.round(asScalar(a[1]));
    if (k < 0 || k > n) return ret(scalar(0));
    let r = 1; for (let i = 1; i <= k; i++) r = (r * (n - k + i)) / i;
    return ret(scalar(Math.round(r)));
  },
  primes: async (a) => {
    const n = Math.floor(asScalar(a[0])); if (n < 2) return ret(zeros(1, 0));
    const sieve = new Array(n + 1).fill(true); sieve[0] = sieve[1] = false;
    for (let i = 2; i * i <= n; i++) if (sieve[i]) for (let j = i * i; j <= n; j += i) sieve[j] = false;
    const out: number[] = []; for (let i = 2; i <= n; i++) if (sieve[i]) out.push(i);
    return ret(rowVec(out));
  },
  isprime: async (a) => {
    const r = map(m(a[0]), (x) => { const v = Math.round(x); if (v < 2) return 0; for (let i = 2; i * i <= v; i++) if (v % i === 0) return 0; return 1; });
    r.isBool = true; return [r];
  },
  factor: async (a) => {
    let n = Math.round(asScalar(a[0])); const orig = n; const out: number[] = [];
    for (let d = 2; d * d <= n; d++) while (n % d === 0) { out.push(d); n /= d; }
    if (n > 1) out.push(n);
    return ret(rowVec(out.length ? out : [orig]));
  },
  // special functions
  gamma: ew(gammaFn), gammaln: ew(logGamma),
  erf: ew(erfFn), erfc: ew((x) => 1 - erfFn(x)),
  beta: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => gammaFn(x) * gammaFn(y) / gammaFn(x + y))),
  betaln: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => logGamma(x) + logGamma(y) - logGamma(x + y))),
  psi: ew(digamma),
  expint: ew(expintE1),
  sinint: ew((x) => cisi(x)[0]),
  cosint: ew((x) => cisi(x)[1]),
  legendre: async (a) => {
    const n = Math.round(asScalar(a[0])); const X = toArray(m(a[1]));
    const out = zeros(n + 1, X.length);
    for (let j = 0; j < X.length; j++) for (let mm = 0; mm <= n; mm++) out.data[mm + j * (n + 1)] = plgndr(n, mm, X[j]);
    return ret(out);
  },
  besselj: async (a) => ret(bzip(a, besseljFn)),
  bessely: async (a) => ret(bzip(a, besselyFn)),
  besseli: async (a) => ret(bzip(a, besseliFn)),
  besselk: async (a) => ret(bzip(a, besselkFn)),
  besselh: async (a) => {
    const nu = asScalar(a[0]); const k = a.length >= 3 ? Math.round(asScalar(a[1])) : 1; const X = m(a[a.length >= 3 ? 2 : 1]);
    const re = new Float64Array(X.data.length), im = new Float64Array(X.data.length);
    for (let i = 0; i < X.data.length; i++) { re[i] = besseljFn(nu, X.data[i]); im[i] = (k === 2 ? -1 : 1) * besselyFn(nu, X.data[i]); }
    return ret(finishComplex(X.rows, X.cols, re, im));
  },
  airy: async (a) => { const hasK = a.length >= 2; const kind = hasK ? Math.round(asScalar(a[0])) : 0; const X = m(a[hasK ? 1 : 0]); return ret(map(X, (x) => airyFn(kind, x))); },
  ellipke: async (a, n) => { const M = m(a[0]); const K = zeros(M.rows, M.cols), E = zeros(M.rows, M.cols); for (let i = 0; i < M.data.length; i++) { const [k, e] = ellipkeFn(M.data[i]); K.data[i] = k; E.data[i] = e; } return n >= 2 ? [K, E] : [K]; },
  ellipj: async (a, n) => { const U = m(a[0]); const mm = asScalar(a[1]); const SN = zeros(U.rows, U.cols), CN = zeros(U.rows, U.cols), DN = zeros(U.rows, U.cols); for (let i = 0; i < U.data.length; i++) { const [sn, cn, dn] = sncndn(U.data[i], 1 - mm); SN.data[i] = sn; CN.data[i] = cn; DN.data[i] = dn; } return n >= 2 ? [SN, CN, DN] : [SN]; },
  // special matrices
  magic: async (a) => ret(magicFn(Math.round(asScalar(a[0])))),
  hilb: async (a) => { const n = Math.round(asScalar(a[0])); const o = zeros(n, n); for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) o.data[r + c * n] = 1 / (r + c + 1); return ret(o); },
  vander: async (a) => { const v = toArray(m(a[0])); const n = v.length; const o = zeros(n, n); for (let r = 0; r < n; r++) for (let j = 0; j < n; j++) o.data[r + j * n] = Math.pow(v[r], n - 1 - j); return ret(o); },
  pascal: async (a) => {
    const n = Math.round(asScalar(a[0])); const o = zeros(n, n);
    for (let i = 0; i < n; i++) { o.data[i] = 1; o.data[i * n] = 1; }
    for (let i = 1; i < n; i++) for (let j = 1; j < n; j++) o.data[i + j * n] = o.data[(i - 1) + j * n] + o.data[i + (j - 1) * n];
    return ret(o);
  },
  toeplitz: async (a) => {
    const c = toArray(m(a[0])); const r = a.length >= 2 ? toArray(m(a[1])) : c;
    const o = zeros(c.length, r.length);
    for (let i = 0; i < c.length; i++) for (let j = 0; j < r.length; j++) o.data[i + j * c.length] = i >= j ? c[i - j] : r[j - i];
    return ret(o);
  },
  // polynomials
  polyval: async (a) => { const p = toArray(m(a[0])); return ret(map(m(a[1]), (x) => { let s = 0; for (const cf of p) s = s * x + cf; return s; })); },
  polyfit: async (a) => {
    const x = toArray(m(a[0])); const yv = toArray(m(a[1])); const deg = Math.round(asScalar(a[2]));
    const M = x.length; const A = zeros(M, deg + 1);
    for (let i = 0; i < M; i++) for (let j = 0; j <= deg; j++) A.data[i + j * M] = Math.pow(x[i], deg - j);
    return ret(transpose(mldivide(A, colVec(yv))));
  },
  conv: async (a) => { const u = toArray(m(a[0])); const v = toArray(m(a[1])); const w = new Array(Math.max(0, u.length + v.length - 1)).fill(0); for (let i = 0; i < u.length; i++) for (let j = 0; j < v.length; j++) w[i + j] += u[i] * v[j]; return ret(rowVec(w)); },
  polyder: async (a) => { const p = toArray(m(a[0])); const n = p.length - 1; if (n <= 0) return ret(scalar(0)); const d: number[] = []; for (let i = 0; i < n; i++) d.push(p[i] * (n - i)); return ret(rowVec(d)); },
  polyint: async (a) => { const p = toArray(m(a[0])); const k = a.length >= 2 ? asScalar(a[1]) : 0; const n = p.length; const out: number[] = []; for (let i = 0; i < n; i++) out.push(p[i] / (n - i)); out.push(k); return ret(rowVec(out)); },

  // reductions
  sum: async (a) => {
    const A = m(a[0]); const dim = dimArg(a, 1);
    if (!isComplex(A)) return ret(reduce(A, dim, 0, (s, x) => s + x));
    const re = reduce(A, dim, 0, (s, x) => s + x);
    const im = reduce({ kind: 'num', rows: A.rows, cols: A.cols, data: A.idata! }, dim, 0, (s, x) => s + x);
    return ret({ kind: 'num', rows: re.rows, cols: re.cols, data: re.data, idata: im.data });
  },
  prod: async (a) => ret(reduce(m(a[0]), dimArg(a, 1), 1, (s, x) => s * x)),
  mean: async (a) => ret(reduce(m(a[0]), dimArg(a, 1), 0, (s, x) => s + x, (s, n) => s / n)),
  cumsum: async (a) => {
    const A = m(a[0]); const out = zeros(A.rows, A.cols);
    if (A.rows === 1 || A.cols === 1) { let s = 0; for (let i = 0; i < A.data.length; i++) { s += A.data[i]; out.data[i] = s; } }
    else for (let c = 0; c < A.cols; c++) { let s = 0; for (let r = 0; r < A.rows; r++) { s += A.data[r + c * A.rows]; out.data[r + c * A.rows] = s; } }
    return ret(out);
  },
  max: async (a, n) => minmax(a, n, (x, y) => x > y || Number.isNaN(y)),
  min: async (a, n) => minmax(a, n, (x, y) => x < y || Number.isNaN(y)),
  norm: async (a) => {
    const p = a.length >= 2 ? (isMat(a[1]) && (a[1] as Mat).isChar ? 'fro' : asScalar(a[1])) : 2;
    const pp = p === Infinity ? 'inf' : p;
    return ret(scalar(norm(m(a[0]), pp as number | 'inf' | 'fro')));
  },

  // shape / construction
  size: async (a, n) => sizeOf(a, n),
  numel: async (a) => ret(scalar(numelOf(a[0]))),
  length: async (a) => { const [r, c] = dimsOf(a[0]); return ret(scalar(r === 0 || c === 0 ? 0 : Math.max(r, c))); },
  ndims: async (a) => ret(scalar(isMat(a[0]) ? ndimsOf(a[0]) : 2)),
  isempty: async (a) => ret(bool(numelOf(a[0]) === 0)),
  isscalar: async (a) => ret(bool(numelOf(a[0]) === 1)),
  zeros: async (a) => { const d = dimsN(a); return ret(makeND(d, new Float64Array(d.reduce((p, x) => p * x, 1)))); },
  ones: async (a) => { const d = dimsN(a); const data = new Float64Array(d.reduce((p, x) => p * x, 1)); data.fill(1); return ret(makeND(d, data)); },
  eye: async (a) => { const [r, c] = dims2(a); return ret(eye(r, c)); },
  rand: async (a) => { const d = dimsN(a); const data = new Float64Array(d.reduce((p, x) => p * x, 1)); for (let i = 0; i < data.length; i++) data[i] = Math.random(); return ret(makeND(d, data)); },
  linspace: async (a) => {
    const lo = asScalar(a[0]), hi = asScalar(a[1]); const n = a.length >= 3 ? Math.round(asScalar(a[2])) : 100;
    if (n < 2) return ret(rowVec([hi]));
    const out: number[] = []; for (let i = 0; i < n; i++) out.push(lo + (hi - lo) * i / (n - 1));
    return ret(rowVec(out));
  },
  repmat: async (a) => {
    const A = m(a[0]); const mr = asScalar(a[1]); const nc = a.length >= 3 ? asScalar(a[2]) : mr;
    const out = zeros(A.rows * mr, A.cols * nc);
    for (let br = 0; br < mr; br++) for (let bc = 0; bc < nc; bc++)
      for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++)
        out.data[(br * A.rows + r) + (bc * A.cols + c) * out.rows] = A.data[r + c * A.rows];
    return ret(out);
  },
  reshape: async (a) => {
    const A = m(a[0]);
    // reshape(A, d1, d2, ...) or reshape(A, [d1 d2 ...]); one [] dim is inferred.
    let dims: number[];
    if (a.length === 2 && numelOf(a[1]) >= 2) dims = toArray(m(a[1])).map((x) => Math.round(x));
    else dims = a.slice(1).map((v) => (isMat(v) && numel(v) === 0 ? NaN : Math.round(asScalar(v))));
    const known = dims.filter((d) => !Number.isNaN(d)).reduce((p, x) => p * x, 1);
    dims = dims.map((d) => (Number.isNaN(d) ? numel(A) / (known || 1) : d));
    if (dims.reduce((p, x) => p * x, 1) !== numel(A)) throw new MatError('reshape: element count must not change');
    return ret(makeND(dims, Float64Array.from(A.data), { idata: A.idata ? Float64Array.from(A.idata) : null, isChar: A.isChar }));
  },
  diff: async (a) => {
    const A = m(a[0]);
    if (A.rows === 1 || A.cols === 1) { const v = toArray(A); const out: number[] = []; for (let i = 1; i < v.length; i++) out.push(v[i] - v[i - 1]); return ret(A.cols === 1 ? colVec(out) : rowVec(out)); }
    const out = zeros(A.rows - 1, A.cols);
    for (let c = 0; c < A.cols; c++) for (let r = 1; r < A.rows; r++) out.data[(r - 1) + c * out.rows] = A.data[r + c * A.rows] - A.data[(r - 1) + c * A.rows];
    return ret(out);
  },
  sort: async (a, n) => {
    const A = m(a[0]); const vals = toArray(A).map((v, i) => [v, i + 1] as [number, number]);
    vals.sort((x, y) => x[0] - y[0]);
    const sorted = A.cols === 1 ? colVec(vals.map((v) => v[0])) : rowVec(vals.map((v) => v[0]));
    return n >= 2 ? [sorted, A.cols === 1 ? colVec(vals.map((v) => v[1])) : rowVec(vals.map((v) => v[1]))] : [sorted];
  },
  find: async (a, n) => {
    const A = m(a[0]);
    const all: number[] = [];
    for (let i = 0; i < A.data.length; i++) if (A.data[i] !== 0) all.push(i); // 0-based linear
    const k = a.length >= 2 ? Math.round(asScalar(a[1])) : all.length;
    const sel = all.slice(0, Math.max(0, k));
    const orient = (arr: number[]) => (A.rows === 1 ? rowVec(arr) : colVec(arr));
    if (n >= 2) {
      const rows = sel.map((i) => (i % A.rows) + 1);
      const cols = sel.map((i) => Math.floor(i / A.rows) + 1);
      if (n >= 3) return [orient(rows), orient(cols), orient(sel.map((i) => A.data[i]))];
      return [orient(rows), orient(cols)];
    }
    return [orient(sel.map((i) => i + 1))];
  },
  isequal: async (a) => {
    const eq = (x: Value, y: Value): boolean => {
      if (!isMat(x) || !isMat(y)) return x === y;
      if (x.rows !== y.rows || x.cols !== y.cols) return false;
      for (let i = 0; i < x.data.length; i++) if (x.data[i] !== y.data[i]) return false;
      return true;
    };
    for (let i = 1; i < a.length; i++) if (!eq(a[0], a[i])) return ret(bool(false));
    return ret(bool(true));
  },
  unique: async (a) => {
    const A = m(a[0]); const seen = new Set<number>(); const vals: number[] = [];
    for (const v of toArray(A)) if (!seen.has(v)) { seen.add(v); vals.push(v); }
    vals.sort((x, y) => x - y);
    return ret(A.rows === 1 ? rowVec(vals) : colVec(vals));
  },
  ismember: async (a, n) => {
    const A = m(a[0]); const bArr = toArray(m(a[1]));
    const tf = zeros(A.rows, A.cols); const loc = zeros(A.rows, A.cols);
    for (let i = 0; i < A.data.length; i++) { const j = bArr.lastIndexOf(A.data[i]); if (j >= 0) { tf.data[i] = 1; loc.data[i] = j + 1; } }
    tf.isBool = true;
    return n >= 2 ? [tf, loc] : [tf];
  },
  logical: async (a) => ret({ ...map(m(a[0]), (x) => (x !== 0 ? 1 : 0)), isBool: true }),
  fliplr: async (a) => {
    const A = m(a[0]); const o = zeros(A.rows, A.cols);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) o.data[r + (A.cols - 1 - c) * A.rows] = A.data[r + c * A.rows];
    o.isChar = A.isChar; return ret(o);
  },
  flipud: async (a) => {
    const A = m(a[0]); const o = zeros(A.rows, A.cols);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) o.data[(A.rows - 1 - r) + c * A.rows] = A.data[r + c * A.rows];
    o.isChar = A.isChar; return ret(o);
  },
  flip: async (a) => {
    const A = m(a[0]); const dim = a.length >= 2 ? Math.round(asScalar(a[1])) : (A.rows > 1 ? 1 : 2);
    const o = zeros(A.rows, A.cols);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) {
      const rr = dim === 1 ? A.rows - 1 - r : r; const cc = dim === 2 ? A.cols - 1 - c : c;
      o.data[rr + cc * A.rows] = A.data[r + c * A.rows];
    }
    o.isChar = A.isChar; return ret(o);
  },
  cat: async (a) => {
    const dim = Math.round(asScalar(a[0])); const parts = a.slice(1).map((v) => m(v));
    if (dim <= 2 && !parts.some((p) => p.nd)) return ret(dim === 1 ? vertcat(parts) : horzcat(parts));
    return ret(catND(dim, parts));
  },
  isvector: async (a) => { const [r, c] = dimsOf(a[0]); return ret(bool(r === 1 || c === 1)); },
  isrow: async (a) => ret(bool(dimsOf(a[0])[0] === 1)),
  iscolumn: async (a) => ret(bool(dimsOf(a[0])[1] === 1)),
  ismatrix: async () => ret(bool(true)),

  // linear algebra
  det: async (a) => { const A = m(a[0]); if (isComplex(A)) { const [re, im] = cDet(A); return ret(cscalar(re, im)); } return ret(scalar(det(A))); },
  inv: async (a) => ret(inv(m(a[0]))),
  mldivide: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  diag: async (a) => ret(diag(m(a[0]))),
  trace: async (a) => { const A = m(a[0]); let s = 0; const n = Math.min(A.rows, A.cols); for (let i = 0; i < n; i++) s += A.data[i + i * A.rows]; return ret(scalar(s)); },
  transpose: async (a) => ret(transpose(m(a[0]))),
  dot: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); let s = 0; for (let i = 0; i < x.length; i++) s += x[i] * y[i]; return ret(scalar(s)); },
  cross: async (a) => {
    const x = toArray(m(a[0])), y = toArray(m(a[1]));
    if (x.length !== 3 || y.length !== 3) throw new MatError('cross: inputs must be 3-element vectors');
    const out = [x[1] * y[2] - x[2] * y[1], x[2] * y[0] - x[0] * y[2], x[0] * y[1] - x[1] * y[0]];
    return ret(m(a[0]).cols === 1 ? colVec(out) : rowVec(out));
  },
  kron: async (a) => {
    const A = m(a[0]), B = m(a[1]); const o = zeros(A.rows * B.rows, A.cols * B.cols);
    for (let ar = 0; ar < A.rows; ar++) for (let ac = 0; ac < A.cols; ac++) { const av = A.data[ar + ac * A.rows]; for (let br = 0; br < B.rows; br++) for (let bc = 0; bc < B.cols; bc++) o.data[(ar * B.rows + br) + (ac * B.cols + bc) * o.rows] = av * B.data[br + bc * B.rows]; }
    return ret(o);
  },
  tril: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 0; const o = zeros(A.rows, A.cols); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (c - r <= k) o.data[r + c * A.rows] = A.data[r + c * A.rows]; o.isChar = A.isChar; return ret(o); },
  triu: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 0; const o = zeros(A.rows, A.cols); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (c - r >= k) o.data[r + c * A.rows] = A.data[r + c * A.rows]; o.isChar = A.isChar; return ret(o); },
  linsolve: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  mrdivide: async (a) => ret(transpose(mldivide(transpose(m(a[1])), transpose(m(a[0]))))),
  pinv: async (a) => ret(pinvFn(m(a[0]))),
  rank: async (a) => ret(scalar(rankOf(m(a[0]), a.length >= 2 ? asScalar(a[1]) : undefined))),
  rref: async (a) => ret(rrefFn(m(a[0]))),
  cond: async (a) => ret(scalar(condFn(m(a[0])))),
  rcond: async (a) => { const c = condFn(m(a[0])); return ret(scalar(c === Infinity ? 0 : 1 / c)); },
  orth: async (a) => ret(orthFn(m(a[0]))),
  null: async (a) => ret(nullspace(m(a[0]))),
  vecnorm: async (a) => {
    const p = a.length >= 2 ? asScalar(a[1]) : 2; const dim = a.length >= 3 ? Math.round(asScalar(a[2])) : 1;
    return ret(vecnormFn(m(a[0]), p === Infinity ? 'inf' : p, dim));
  },
  chol: async (a) => ret(cholFn(m(a[0]))),
  qr: async (a, n) => { const { Q, R } = qrDecomp(m(a[0])); return n >= 2 ? [Q, R] : [R]; },
  lu: async (a, n) => {
    const { L, U, P } = luOutputs(m(a[0]));
    if (n >= 3) return [L, U, P];
    return [matmul(transpose(P), L), U]; // [L,U] with A = L*U (psychologically-lower L)
  },
  svd: async (a, n) => {
    const A = m(a[0]); const { U, s, V } = svdReal(A);
    if (n >= 3) { const S = zeros(A.rows, A.cols); for (let i = 0; i < Math.min(A.rows, A.cols); i++) S.data[i + i * A.rows] = s[i] ?? 0; return [U, S, V]; }
    return [colVec(s)];
  },
  eig: async (a, n) => {
    let A = m(a[0]);
    // Generalized problem eig(A,B): eigenvalues of B⁻¹A (B given as a non-char matrix).
    if (a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar && numel(a[1]) > 1) A = mldivide(m(a[1]), A);
    // Symmetric real → Jacobi (accurate, ascending). Otherwise charpoly + Durand-Kerner.
    if (isSymmetric(A) && !isComplex(A)) {
      const { values, V } = jacobiEigSym(A);
      const order = values.map((_, i) => i).sort((i, j) => values[i] - values[j]);
      const ev = order.map((i) => values[i]);
      if (n >= 2) {
        const Vs = zeros(A.rows, A.rows); order.forEach((src, dst) => { for (let r = 0; r < A.rows; r++) Vs.data[r + dst * A.rows] = V.data[r + src * A.rows]; });
        const D = zeros(A.rows, A.rows); ev.forEach((v, i) => { D.data[i + i * A.rows] = v; });
        return [Vs, D];
      }
      return [colVec(ev)];
    }
    const N = A.rows; const { D, V } = generalEig(A, n >= 2);
    if (n >= 2) {
      const Dre = new Float64Array(N * N), Dim = new Float64Array(N * N);
      for (let i = 0; i < N; i++) { Dre[i + i * N] = D.re[i]; Dim[i + i * N] = D.im[i]; }
      return [V!, finishComplex(N, N, Dre, Dim)];
    }
    return [finishComplex(N, 1, Float64Array.from(D.re), Float64Array.from(D.im))];
  },
  // structure predicates
  issymmetric: async (a) => ret(bool(isSymmetric(m(a[0])))),
  ishermitian: async (a) => ret(bool(isSymmetric(m(a[0])))),
  isdiag: async (a) => { const A = m(a[0]); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (r !== c && A.data[r + c * A.rows] !== 0) return ret(bool(false)); return ret(bool(true)); },
  istriu: async (a) => { const A = m(a[0]); for (let c = 0; c < A.cols; c++) for (let r = c + 1; r < A.rows; r++) if (A.data[r + c * A.rows] !== 0) return ret(bool(false)); return ret(bool(true)); },
  istril: async (a) => { const A = m(a[0]); for (let r = 0; r < A.rows; r++) for (let c = r + 1; c < A.cols; c++) if (A.data[r + c * A.rows] !== 0) return ret(bool(false)); return ret(bool(true)); },
  bandwidth: async (a, n) => {
    const A = m(a[0]); let lower = 0, upper = 0;
    for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (A.data[r + c * A.rows] !== 0) { if (r > c) lower = Math.max(lower, r - c); else if (c > r) upper = Math.max(upper, c - r); }
    return n >= 2 ? [scalar(lower), scalar(upper)] : [scalar(lower)];
  },
  isbanded: async (a) => {
    const A = m(a[0]); const lo = Math.round(asScalar(a[1])); const up = Math.round(asScalar(a[2]));
    for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) if (A.data[r + c * A.rows] !== 0 && (r - c > lo || c - r > up)) return ret(bool(false));
    return ret(bool(true));
  },
  // ── more decompositions / matrix functions ──
  expm: async (a) => ret(expmFn(m(a[0]))),
  logm: async (a) => ret(logmFn(m(a[0]))),
  sqrtm: async (a) => ret(sqrtmFn(m(a[0]))),
  hess: async (a, n) => { const { P, H } = hessFn(m(a[0])); return n >= 2 ? [P, H] : [H]; },
  schur: async (a, n) => {
    const A = m(a[0]);
    const wantComplex = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar && asString(a[1]).toLowerCase().startsWith('c');
    if (!wantComplex && isSymmetric(A) && !isComplex(A)) { const { values, V } = jacobiEigSym(A); const D = zeros(A.rows, A.rows); values.forEach((v, i) => { D.data[i + i * A.rows] = v; }); return n >= 2 ? [V, D] : [D]; }
    let { U, T } = schurFn(A);
    if (wantComplex) { const r = rsf2csfFn(U, T); U = r.U; T = r.T; }
    return n >= 2 ? [U, T] : [T];
  },
  rsf2csf: async (a, n) => { const { U, T } = rsf2csfFn(m(a[0]), m(a[1])); return n >= 2 ? [U, T] : [T]; },
  balance: async (a, n) => {
    const { D, B } = balanceFn(m(a[0])); const nn = D.length; const Tm = zeros(nn, nn); for (let i = 0; i < nn; i++) Tm.data[i + i * nn] = D[i];
    return n >= 2 ? [Tm, B] : [B];
  },
  qz: async (a, n) => { const { AA, BB, Q, Z } = qzFn(m(a[0]), m(a[1])); return n >= 4 ? [AA, BB, Q, Z] : n >= 2 ? [AA, BB] : [AA]; },
  ordschur: async (a, n) => {
    const U = m(a[0]), T = m(a[1]); const sel = toArray(m(a[2])).map((x) => x !== 0);
    const { U: U2, T: T2 } = ordschurFn(U, T, sel); return n >= 2 ? [U2, T2] : [U2];
  },
  ldl: async (a, n) => { const { L, D } = ldlFn(m(a[0])); return n >= 2 ? [L, D] : [L]; },
  lsqnonneg: async (a) => ret(lsqnonnegFn(m(a[0]), m(a[1]))),
  condest: async (a) => { const A = m(a[0]); return ret(scalar(norm(A, 1) * norm(inv(A), 1))); },
  lscov: async (a) => { const A = m(a[0]), b = m(a[1]); if (a.length >= 3) { const W = inv(m(a[2])); const At = transpose(A); return ret(mldivide(matmul(At, matmul(W, A)), matmul(At, matmul(W, b)))); } return ret(mldivide(A, b)); },
  subspace: async (a) => {
    let Qa = orthFn(m(a[0])), Qb = orthFn(m(a[1])); if (Qa.cols < Qb.cols) { const t = Qa; Qa = Qb; Qb = t; }
    const proj = matmul(Qa, matmul(transpose(Qa), Qb)); const diff = zeros(Qb.rows, Qb.cols); for (let i = 0; i < diff.data.length; i++) diff.data[i] = Qb.data[i] - proj.data[i];
    return ret(scalar(Math.asin(Math.min(1, norm(diff, 2)))));
  },
  eigs: async (a) => {
    const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : Math.min(A.rows, 6);
    let re: number[], im: number[];
    if (isSymmetric(A) && !isComplex(A)) { re = jacobiEigSym(A).values; im = re.map(() => 0); } else { const { D } = generalEig(A, false); re = D.re; im = D.im; }
    const idx = re.map((_, i) => i).sort((i, j) => Math.hypot(re[j], im[j]) - Math.hypot(re[i], im[i])).slice(0, k);
    return ret(finishComplex(idx.length, 1, Float64Array.from(idx.map((i) => re[i])), Float64Array.from(idx.map((i) => im[i]))));
  },
  svds: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : Math.min(A.rows, A.cols, 6); const { s } = svdReal(A); return ret(colVec(s.slice(0, k))); },
  // ── digital filtering & signal math ──
  filter: async (a) => {
    const b = toArray(m(a[0])), aa = toArray(m(a[1])), x = m(a[2]); const xs = toArray(x); const a0 = aa[0]; const y = new Array(xs.length).fill(0);
    for (let n = 0; n < xs.length; n++) { let acc = 0; for (let k = 0; k < b.length; k++) if (n - k >= 0) acc += b[k] * xs[n - k]; for (let k = 1; k < aa.length; k++) if (n - k >= 0) acc -= aa[k] * y[n - k]; y[n] = acc / a0; }
    return ret(x.cols === 1 ? colVec(y) : rowVec(y));
  },
  conv2: async (a) => { const shape = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : 'full'; return ret(conv2Shape(m(a[0]), m(a[1]), shape)); },
  filter2: async (a) => { const shape = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : 'same'; return ret(conv2Shape(m(a[1]), rot90n(m(a[0]), 2), shape)); },
  xcorr: async (a) => { const x = toArray(m(a[0])); const y = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? toArray(m(a[1])) : x; return ret(rowVec(xcorrFn(x, y))); },
  xcov: async (a) => { const x = toArray(m(a[0])); const y = a.length >= 2 ? toArray(m(a[1])) : x; const mx = x.reduce((s, v) => s + v, 0) / x.length, my = y.reduce((s, v) => s + v, 0) / y.length; return ret(rowVec(xcorrFn(x.map((v) => v - mx), y.map((v) => v - my)))); },
  detrend: async (a) => { const type = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'linear'; return ret(colMap(m(a[0]), (c) => detrendVec(c, type))); },
  fftn: async (a) => { const A = m(a[0]); return ret(A.rows === 1 || A.cols === 1 ? fftApply(A, -1) : transpose(fftApply(transpose(fftApply(A, -1)), -1))); },
  ifftn: async (a) => { const A = m(a[0]); return ret(A.rows === 1 || A.cols === 1 ? fftApply(A, 1) : transpose(fftApply(transpose(fftApply(A, 1)), 1))); },
  // ── data preprocessing & smoothing ──
  smoothdata: async (a) => { const A = m(a[0]); const win = a.find((v, i) => i > 0 && isMat(v) && !(v as Mat).isChar); const k = win ? Math.round(asScalar(win)) : Math.max(3, Math.round((A.rows === 1 || A.cols === 1 ? numel(A) : A.rows) * 0.1)); const method = a.find((v) => isMat(v) && (v as Mat).isChar); const med = !!(method && asString(method as Mat) === 'movmedian'); return ret(colMap(A, (c) => movVec(c, k, med))); },
  smoothdata2: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 3; return ret(smooth2(A, k)); },
  normalize: async (a) => { const method = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'zscore'; return ret(colMap(m(a[0]), (c) => normalizeVec(c, method))); },
  rescale: async (a) => { const A = m(a[0]); const lo = a.length >= 2 ? asScalar(a[1]) : 0, hi = a.length >= 3 ? asScalar(a[2]) : 1; const mn = Math.min(...toArray(A)), mx = Math.max(...toArray(A)); const d = mx - mn || 1; return ret(map(A, (x) => lo + (hi - lo) * (x - mn) / d)); },
  clip: async (a) => { const lo = asScalar(a[1]), hi = asScalar(a[2]); return ret(map(m(a[0]), (x) => Math.min(hi, Math.max(lo, x)))); },
  isoutlier: async (a) => { const A = m(a[0]); const r = colMap(A, (c) => outlierMask(c)); r.isBool = true; return [r]; },
  filloutliers: async (a) => { const A = m(a[0]); const fillNum = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? asScalar(a[1]) : null; return ret(colMap(A, (c) => fillOutliersVec(c, fillNum))); },
  rmoutliers: async (a) => { const c = toArray(m(a[0])); const mask = outlierMask(c); const kept = c.filter((_, i) => mask[i] === 0); return ret(m(a[0]).cols === 1 ? colVec(kept) : rowVec(kept)); },
  islocalmax: async (a) => { const A = m(a[0]); const v = toArray(A); const o = v.map((_, i) => (i > 0 && i < v.length - 1 && v[i] > v[i - 1] && v[i] > v[i + 1] ? 1 : 0)); const out = A.cols === 1 ? colVec(o) : rowVec(o); out.isBool = true; return [out]; },
  islocalmin: async (a) => { const A = m(a[0]); const v = toArray(A); const o = v.map((_, i) => (i > 0 && i < v.length - 1 && v[i] < v[i - 1] && v[i] < v[i + 1] ? 1 : 0)); const out = A.cols === 1 ? colVec(o) : rowVec(o); out.isBool = true; return [out]; },
  isapprox: async (a) => { const tol = a.length >= 3 ? asScalar(a[2]) : 1e-6; const r = elementwise(m(a[0]), m(a[1]), (x, y) => (Math.abs(x - y) <= tol + tol * Math.max(Math.abs(x), Math.abs(y)) ? 1 : 0)); return ret({ ...r, isBool: true }); },
  erfinv: async (a) => ret(map(m(a[0]), erfinvFn)),
  // ── set operations ──
  intersect: async (a) => { const A = m(a[0]); const sb = new Set(toArray(m(a[1]))); const r = setUniq(toArray(A).filter((x) => sb.has(x))); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  union: async (a) => { const A = m(a[0]); const r = setUniq([...toArray(A), ...toArray(m(a[1]))]); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  setdiff: async (a) => { const A = m(a[0]); const sb = new Set(toArray(m(a[1]))); const r = setUniq(toArray(A).filter((x) => !sb.has(x))); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  setxor: async (a) => { const A = m(a[0]), B = m(a[1]); const sa = new Set(toArray(A)), sb = new Set(toArray(B)); const r = setUniq([...toArray(A).filter((x) => !sb.has(x)), ...toArray(B).filter((x) => !sa.has(x))]); return ret(A.rows === 1 ? rowVec(r) : colVec(r)); },
  // ── more statistics ──
  histcounts: async (a, n) => {
    const x = toArray(m(a[0])); let edges: number[];
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) > 1) edges = toArray(m(a[1]));
    else { const nb = a.length >= 2 ? Math.round(asScalar(a[1])) : 10; const mn = Math.min(...x), mx = Math.max(...x); const w = (mx - mn) / nb || 1; edges = Array.from({ length: nb + 1 }, (_, i) => mn + i * w); }
    const counts = new Array(edges.length - 1).fill(0);
    for (const v of x) { for (let b = 0; b < counts.length; b++) { if (v >= edges[b] && (v < edges[b + 1] || (b === counts.length - 1 && v <= edges[b + 1]))) { counts[b]++; break; } } }
    return n >= 2 ? [rowVec(counts), rowVec(edges)] : [rowVec(counts)];
  },
  randperm: async (a) => { const nn = Math.round(asScalar(a[0])); const p = Array.from({ length: nn }, (_, i) => i + 1); for (let i = nn - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [p[i], p[j]] = [p[j], p[i]]; } const k = a.length >= 2 ? Math.round(asScalar(a[1])) : nn; return ret(rowVec(p.slice(0, k))); },
  mad: async (a) => { const flag = a.length >= 2 ? asScalar(a[1]) : 0; return ret(colReduce(m(a[0]), (c) => { if (flag === 1) { const s = [...c].sort((x, y) => x - y); const md = s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2; const d = c.map((x) => Math.abs(x - md)).sort((x, y) => x - y); return d.length % 2 ? d[(d.length - 1) / 2] : (d[d.length / 2 - 1] + d[d.length / 2]) / 2; } const mu = c.reduce((s2, x) => s2 + x, 0) / c.length; return c.reduce((s2, x) => s2 + Math.abs(x - mu), 0) / c.length; })); },
  poly: async (a) => { const A = m(a[0]); if (A.rows > 1 && A.cols > 1) return ret(rowVec(charpolyC(A))); let c = [1]; for (const r of toArray(A)) { const nc = new Array(c.length + 1).fill(0); for (let i = 0; i < c.length; i++) { nc[i] += c[i]; nc[i + 1] -= c[i] * r; } c = nc; } return ret(rowVec(c)); },
  // ── type tests / conversions ──
  isnumeric: async (a) => ret(bool(isMat(a[0]) && !(a[0] as Mat).isChar)),
  ischar: async (a) => ret(bool(isMat(a[0]) && !!(a[0] as Mat).isChar)),
  isfloat: async (a) => ret(bool(isMat(a[0]) && !(a[0] as Mat).isChar)),
  double: async (a) => { const A = m(a[0]); return ret({ kind: 'num', rows: A.rows, cols: A.cols, data: Float64Array.from(A.data), idata: A.idata ? Float64Array.from(A.idata) : undefined }); },
  single: async (a) => { const A = m(a[0]); return ret(mat(A.rows, A.cols, Float64Array.from(A.data))); },
  char: async (a) => { const A = m(a[0]); if (A.isChar) return ret(A); return ret(str(toArray(A).map((x) => String.fromCharCode(Math.round(x))).join(''))); },
  int8: async (a) => ret(intCast(m(a[0]), 'int8')), uint8: async (a) => ret(intCast(m(a[0]), 'uint8')),
  int16: async (a) => ret(intCast(m(a[0]), 'int16')), uint16: async (a) => ret(intCast(m(a[0]), 'uint16')),
  int32: async (a) => ret(intCast(m(a[0]), 'int32')), uint32: async (a) => ret(intCast(m(a[0]), 'uint32')),
  int64: async (a) => ret(intCast(m(a[0]), 'int64')), uint64: async (a) => ret(intCast(m(a[0]), 'uint64')),
  cast: async (a) => { const A = m(a[0]); const ty = asString(a[1]); if (ty in INT_LIMITS) return ret(intCast(A, ty)); if (ty === 'char') return ret(A.isChar ? A : str(toArray(A).map((x) => String.fromCharCode(Math.round(x))).join(''))); return ret(mat(A.rows, A.cols, Float64Array.from(A.data))); },
  // ── special matrices / index conversion ──
  invhilb: async (a) => { const n = Math.round(asScalar(a[0])); const H = zeros(n, n); for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) H.data[r + c * n] = 1 / (r + c + 1); return ret(map(inv(H), (x) => Math.round(x))); },
  hadamard: async (a) => { let n = Math.round(asScalar(a[0])); let H = mat(1, 1, Float64Array.of(1)); while (H.rows < n) { const k = H.rows; const o = zeros(2 * k, 2 * k); for (let r = 0; r < k; r++) for (let c = 0; c < k; c++) { const v = H.data[r + c * k]; o.data[r + c * 2 * k] = v; o.data[r + (c + k) * 2 * k] = v; o.data[(r + k) + c * 2 * k] = v; o.data[(r + k) + (c + k) * 2 * k] = -v; } H = o; } return ret(H); },
  hankel: async (a) => { const c = toArray(m(a[0])); const r = a.length >= 2 ? toArray(m(a[1])) : c.map((_, i) => (i === 0 ? c[c.length - 1] : 0)); const nr = c.length, nc = r.length; const o = zeros(nr, nc); for (let i = 0; i < nr; i++) for (let j = 0; j < nc; j++) { const k = i + j; o.data[i + j * nr] = k < nr ? c[k] : (k - nr + 1 < nc ? r[k - nr + 1] : 0); } return ret(o); },
  compan: async (a) => { const p = toArray(m(a[0])); const n = p.length - 1; if (n < 1) return ret(zeros(0, 0)); const o = zeros(n, n); for (let j = 0; j < n; j++) o.data[0 + j * n] = -p[j + 1] / p[0]; for (let i = 1; i < n; i++) o.data[i + (i - 1) * n] = 1; return ret(o); },
  sub2ind: async (a) => { const sz = toArray(m(a[0])); const rows = sz[0]; const R = m(a[1]), C = a.length >= 3 ? m(a[2]) : null; return ret(C ? elementwise(R, C, (r, c) => (c - 1) * rows + r) : R); },
  ind2sub: async (a, n) => { const sz = toArray(m(a[0])); const rows = sz[0]; const I = m(a[1]); const rr = map(I, (k) => ((k - 1) % rows) + 1); const cc = map(I, (k) => Math.floor((k - 1) / rows) + 1); return n >= 2 ? [rr, cc] : [rr]; },
  rats: async (a) => { const [n2, d] = ratApprox(asScalar(a[0])); return ret(str(d === 1 ? `${n2}` : `${n2}/${d}`)); },
  acscd: ew((x) => Math.asin(1 / x) / DEG), asecd: ew((x) => Math.acos(1 / x) / DEG),
  cummax: async (a) => { const A = m(a[0]); const o = zeros(A.rows, A.cols); if (A.rows === 1 || A.cols === 1) { let mx = -Infinity; for (let i = 0; i < A.data.length; i++) { mx = Math.max(mx, A.data[i]); o.data[i] = mx; } } else for (let c = 0; c < A.cols; c++) { let mx = -Infinity; for (let r = 0; r < A.rows; r++) { mx = Math.max(mx, A.data[r + c * A.rows]); o.data[r + c * A.rows] = mx; } } return ret(o); },
  cummin: async (a) => { const A = m(a[0]); const o = zeros(A.rows, A.cols); if (A.rows === 1 || A.cols === 1) { let mn = Infinity; for (let i = 0; i < A.data.length; i++) { mn = Math.min(mn, A.data[i]); o.data[i] = mn; } } else for (let c = 0; c < A.cols; c++) { let mn = Infinity; for (let r = 0; r < A.rows; r++) { mn = Math.min(mn, A.data[r + c * A.rows]); o.data[r + c * A.rows] = mn; } } return ret(o); },
  // ── matrix algebra extras ──
  polyvalm: async (a) => { const p = toArray(m(a[0])); const A = m(a[1]); const n = A.rows; let R = zeros(n, n); for (const c of p) { R = matmul(A, R); R.data[0] += 0; for (let i = 0; i < n; i++) R.data[i + i * n] += c; } return ret(R); },
  isposdef: async (a) => { const A = m(a[0]); if (!isSymmetric(A)) return ret(bool(false)); const { values } = jacobiEigSym(A); return ret(bool(values.every((v) => v > 1e-12))); },
  planerot: async (a, n) => { const v = toArray(m(a[0])); const [x, y] = v; const r = Math.hypot(x, y); const c = r === 0 ? 1 : x / r, s = r === 0 ? 0 : y / r; const G = fromRows([[c, s], [-s, c]]); return n >= 2 ? [G, colVec([r, 0])] : [G]; },
  house: async (a, n) => { const x = toArray(m(a[0])); const nrm = Math.hypot(...x); const alpha = -Math.sign(x[0] || 1) * nrm; const v = x.slice(); v[0] -= alpha; let vn = 0; for (const e of v) vn += e * e; const beta = vn === 0 ? 0 : 2 / vn; return n >= 2 ? [colVec(v), scalar(beta)] : [colVec(v)]; },
  funm: async (a, _n, env) => {
    const A = m(a[0]); const f = handle(a[1], 'funm'); const { D, V } = generalEig(A, true); const nn = A.rows;
    const Dre = new Float64Array(nn * nn), Dim = new Float64Array(nn * nn);
    for (let i = 0; i < nn; i++) { const r = await env.callHandle(f, [D.im[i] === 0 ? scalar(D.re[i]) : finishComplex(1, 1, Float64Array.of(D.re[i]), Float64Array.of(D.im[i]))], 1); const z = m(r[0]); Dre[i + i * nn] = z.data[0]; Dim[i + i * nn] = z.idata ? z.idata[0] : 0; }
    return ret(cmatmul(cmatmul(V!, finishComplex(nn, nn, Dre, Dim)), inv(V!)));
  },
  // ── quadrature aliases / ODE alias ──
  quad: async (a, n, env) => BUILTINS.integral(a, n, env),
  quadl: async (a, n, env) => BUILTINS.integral(a, n, env),
  quadgk: async (a, n, env) => BUILTINS.integral(a, n, env),
  odeset: async (a) => {
    const fields = new Map<string, Value[]>();
    if (a.length && isStruct(a[0])) for (const [k, v] of a[0].fields) fields.set(k, v.slice());
    const start = a.length && isStruct(a[0]) ? 1 : 0;
    for (let i = start; i + 1 < a.length; i += 2) fields.set(asString(a[i]), [a[i + 1]]);
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },
  odeget: async () => ret(zeros(0, 0)),
  // ── special functions ──
  erfcx: async (a) => ret(map(m(a[0]), (x) => Math.exp(x * x) * (1 - erfFn(x)))),
  erfcinv: async (a) => ret(map(m(a[0]), (y) => erfinvFn(1 - y))),
  gammainc: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, p) => gammainc(x, p))),
  betainc: async (a) => { const X = m(a[0]); const A2 = asScalar(a[1]), B2 = asScalar(a[2]); return ret(map(X, (x) => betainc(x, A2, B2))); },
  // ── coordinate transforms ──
  cart2pol: async (a, n) => { const X = m(a[0]), Y = m(a[1]); const th = elementwise(Y, X, (y, x) => Math.atan2(y, x)); const r = elementwise(X, Y, (x, y) => Math.hypot(x, y)); return n >= 2 ? [th, r] : [th]; },
  pol2cart: async (a, n) => { const TH = m(a[0]), R = m(a[1]); const x = elementwise(R, TH, (r, t) => r * Math.cos(t)); const y = elementwise(R, TH, (r, t) => r * Math.sin(t)); return n >= 2 ? [x, y] : [x]; },
  cart2sph: async (a, n) => { const X = m(a[0]), Y = m(a[1]), Z = m(a[2]); const az = elementwise(Y, X, (y, x) => Math.atan2(y, x)); const el = zeros(X.rows, X.cols), r = zeros(X.rows, X.cols); for (let i = 0; i < el.data.length; i++) { el.data[i] = Math.atan2(Z.data[i], Math.hypot(X.data[i], Y.data[i])); r.data[i] = Math.sqrt(X.data[i] ** 2 + Y.data[i] ** 2 + Z.data[i] ** 2); } return n >= 3 ? [az, el, r] : n >= 2 ? [az, el] : [az]; },
  sph2cart: async (a, n) => { const AZ = m(a[0]), EL = m(a[1]), R = m(a[2]); const x = zeros(AZ.rows, AZ.cols), y = zeros(AZ.rows, AZ.cols), z = zeros(AZ.rows, AZ.cols); for (let i = 0; i < x.data.length; i++) { const az = AZ.data[i], el = EL.data[i], r = R.data[i]; x.data[i] = r * Math.cos(el) * Math.cos(az); y.data[i] = r * Math.cos(el) * Math.sin(az); z.data[i] = r * Math.sin(el); } return n >= 3 ? [x, y, z] : n >= 2 ? [x, y] : [x]; },
  // ── geometry ──
  polyarea: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); let s = 0; const n = x.length; for (let i = 0; i < n; i++) { const j = (i + 1) % n; s += x[i] * y[j] - x[j] * y[i]; } return ret(scalar(Math.abs(s) / 2)); },
  inpolygon: async (a) => { const xq = m(a[0]), yq = m(a[1]); const xv = toArray(m(a[2])), yv = toArray(m(a[3])); const o = zeros(xq.rows, xq.cols); for (let k = 0; k < xq.data.length; k++) o.data[k] = pointInPoly(xq.data[k], yq.data[k], xv, yv) ? 1 : 0; o.isBool = true; return [o]; },
  convhull: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); return ret(colVec(convHull2D(x, y))); },
  rectint: async (a) => { const A = m(a[0]), B = m(a[1]); const o = zeros(A.rows, B.rows); for (let i = 0; i < A.rows; i++) for (let j = 0; j < B.rows; j++) { const ax = A.data[i], ay = A.data[i + A.rows], aw = A.data[i + 2 * A.rows], ah = A.data[i + 3 * A.rows]; const bx = B.data[j], by = B.data[j + B.rows], bw = B.data[j + 2 * B.rows], bh = B.data[j + 3 * B.rows]; const ix = Math.max(0, Math.min(ax + aw, bx + bw) - Math.max(ax, bx)); const iy = Math.max(0, Math.min(ay + ah, by + bh) - Math.max(ay, by)); o.data[i + j * A.rows] = ix * iy; } return ret(o); },
  // ── distances ──
  pdist: async (a) => { const X = m(a[0]); const out: number[] = []; for (let i = 0; i < X.rows; i++) for (let j = i + 1; j < X.rows; j++) { let s = 0; for (let c = 0; c < X.cols; c++) s += (X.data[i + c * X.rows] - X.data[j + c * X.rows]) ** 2; out.push(Math.sqrt(s)); } return ret(rowVec(out)); },
  pdist2: async (a) => { const X = m(a[0]), Y = m(a[1]); const o = zeros(X.rows, Y.rows); for (let i = 0; i < X.rows; i++) for (let j = 0; j < Y.rows; j++) { let s = 0; for (let c = 0; c < X.cols; c++) s += (X.data[i + c * X.rows] - Y.data[j + c * Y.rows]) ** 2; o.data[i + j * X.rows] = Math.sqrt(s); } return ret(o); },
  squareform: async (a) => { const V = m(a[0]); if (V.rows === 1 || V.cols === 1) { const v = toArray(V); const n = Math.round((1 + Math.sqrt(1 + 8 * v.length)) / 2); const o = zeros(n, n); let k = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { o.data[i + j * n] = v[k]; o.data[j + i * n] = v[k]; k++; } return ret(o); } const n = V.rows; const out: number[] = []; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) out.push(V.data[i + j * n]); return ret(rowVec(out)); },
  // ── residue ──
  residue: async (a, n) => {
    const b = toArray(m(a[0])), aa = toArray(m(a[1]));
    const { re, im } = durandKerner(aa);
    const dp = aa.slice(0, -1).map((c, i) => c * (aa.length - 1 - i)); // a'(s)
    const pevC = (coef: number[], xr: number, xi: number) => { let sr = coef[0], si = 0; for (let k = 1; k < coef.length; k++) { const [tr, ti] = cmul(sr, si, xr, xi); sr = tr + coef[k]; si = ti; } return [sr, si]; };
    const rr = new Float64Array(re.length), ri = new Float64Array(re.length);
    for (let k = 0; k < re.length; k++) { const [nbr, nbi] = pevC(b, re[k], im[k]); const [dar, dai] = pevC(dp, re[k], im[k]); const [qr, qi] = cdiv(nbr, nbi, dar, dai); rr[k] = qr; ri[k] = qi; }
    const R = finishComplex(re.length, 1, rr, ri); const P = finishComplex(re.length, 1, Float64Array.from(re), Float64Array.from(im));
    return n >= 2 ? [R, P, zeros(0, 0)] : [R];
  },
  // ── dense equivalents of sparse routines ──
  sparse: async (a) => {
    if (a.length === 1) return ret(isSparse(a[0]) ? a[0] : denseToSparse(m(a[0])));
    if (a.length === 2) return ret(sparseFromMap(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])), new Map())); // all-zero m×n
    const ii = toArray(m(a[0])).map((x) => Math.round(x)), jj = toArray(m(a[1])).map((x) => Math.round(x)), vv = toArray(m(a[2]));
    const rows = a.length >= 4 ? Math.round(asScalar(a[3])) : Math.max(...ii), cols = a.length >= 5 ? Math.round(asScalar(a[4])) : Math.max(...jj);
    return ret(sparseFromTriplets(rows, cols, ii, jj, vv));
  },
  full: async (a) => ret(m(a[0])),
  issparse: async (a) => ret(bool(isSparse(a[0]))),
  speye: async (a) => { const [r, c] = dims2(a); const acc = new Map<number, number>(); for (let i = 0; i < Math.min(r, c); i++) acc.set(i * r + i, 1); return ret(sparseFromMap(r, c, acc)); },
  spalloc: async (a) => ret(sparseFromMap(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])), new Map())),
  nzmax: async (a) => ret(scalar(isSparse(a[0]) ? a[0].values.length : toArray(m(a[0])).filter((x) => x !== 0).length)),
  sprand: async (a) => ret(sprandGen(a, false)),
  sprandn: async (a) => ret(sprandGen(a, true)),
  sprandsym: async (a) => {
    const n = Math.round(asScalar(a[0])); const dens = a.length >= 2 ? asScalar(a[1]) : 0.2;
    const acc = new Map<number, number>(); const k = Math.round(dens * n * n / 2);
    for (let t = 0; t < k; t++) { const i = Math.floor(Math.random() * n), j = Math.floor(Math.random() * n); const v = Math.random() * 2 - 1; acc.set(j * n + i, v); acc.set(i * n + j, v); }
    for (let i = 0; i < n; i++) acc.set(i * n + i, n); // diagonally dominant
    return ret(sparseFromMap(n, n, acc));
  },
  spdiags: async (a) => { const B = m(a[0]); const d = toArray(m(a[1])).map((x) => Math.round(x)); const mm = Math.round(asScalar(a[2])), nn = Math.round(asScalar(a[3])); const acc = new Map<number, number>(); for (let di = 0; di < d.length; di++) { const diag = d[di]; for (let r = 0; r < mm; r++) { const c = r + diag; if (c >= 0 && c < nn) { const v = B.data[Math.min(r, B.rows - 1) + di * B.rows]; if (v !== 0) acc.set(c * mm + r, v); } } } return ret(sparseFromMap(mm, nn, acc)); },
  spones: async (a) => isSparse(a[0]) ? ret(sparseFromMap(a[0].rows, a[0].cols, new Map([...sparseEntries(a[0])].map(([k]) => [k, 1])))) : ret(map(m(a[0]), (x) => (x !== 0 ? 1 : 0))),
  spy: async (a, _n, env) => { const S = asSparse(a[0]); const xs: number[] = [], ys: number[] = []; for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { xs.push(j + 1); ys.push(S.rows - S.rowind[p]); } env.graphics.addSeries(xs, ys, 'o'); return []; },
  etree: async (a) => ret(rowVec(etreeOf(asSparse(a[0])))),
  symrcm: async (a) => ret(rowVec(symrcmOf(asSparse(a[0])))),
  amd: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  symamd: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  colamd: async (a) => ret(rowVec(minDegreeOrder(colAdjacency(asSparse(a[0]))))),
  ichol: async (a) => ret(ichol0(asSparse(a[0]))),
  ilu: async (a, n) => { const { L, U } = ilu0(asSparse(a[0])); return n >= 2 ? [L, U] : [U]; },
  // deprecated orderings/factorizations → modern equivalents (Gilbert–Moler–Schreiber compatibility)
  colmmd: async (a) => ret(rowVec(minDegreeOrder(colAdjacency(asSparse(a[0]))))),
  symmmd: async (a) => ret(rowVec(minDegreeOrder(symAdjacency(asSparse(a[0]))))),
  luinc: async (a, n) => { const { L, U } = ilu0(asSparse(a[0])); return n >= 2 ? [L, U] : [U]; },
  cholinc: async (a) => ret(ichol0(asSparse(a[0]))),
  // sparse utilities
  spconvert: async (a) => { const D = m(a[0]); const r = D.rows, c = D.cols; const ii: number[] = [], jj: number[] = [], vv: number[] = []; for (let k = 0; k < r; k++) { ii.push(D.data[k]); jj.push(D.data[k + r]); vv.push(c >= 3 ? D.data[k + 2 * r] : 1); } const mm = ii.length ? Math.max(...ii) : 0, nn = jj.length ? Math.max(...jj) : 0; return ret(sparseFromTriplets(mm, nn, ii, jj, vv)); },
  spaugment: async (a) => { const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]); const mm = A.rows, nn = A.cols; const c = a.length >= 2 ? asScalar(a[1]) : Math.max(...toArray(A).map(Math.abs)) || 1; const S = zeros(mm + nn, mm + nn); for (let i = 0; i < mm; i++) S.data[i + i * (mm + nn)] = c; for (let i = 0; i < mm; i++) for (let j = 0; j < nn; j++) { const v = A.data[i + j * mm]; S.data[i + (mm + j) * (mm + nn)] = v; S.data[(mm + j) + i * (mm + nn)] = v; } return ret(denseToSparse(S)); },
  spparms: async () => [],   // sparse algorithm tuning params: accept and ignore (use defaults)
  dmperm: async (a, n) => {
    const S = asSparse(a[0]); const match = bipartiteMatch(S);   // match[col] = matched row, or -1
    // single output: the maximum matching p(j)=row matched to column j (0 if unmatched) → zero-free diagonal
    if (n < 2) return ret(rowVec(match.map((r) => r + 1)));
    // [p,q]: row & column permutations placing the matched structure in the leading block
    const matchedRow = new Array(S.rows).fill(false); const p: number[] = [], q: number[] = [];
    for (let j = 0; j < S.cols; j++) if (match[j] >= 0) { p.push(match[j] + 1); matchedRow[match[j]] = true; q.push(j + 1); }
    for (let i = 0; i < S.rows; i++) if (!matchedRow[i]) p.push(i + 1);
    for (let j = 0; j < S.cols; j++) if (match[j] < 0) q.push(j + 1);
    return [rowVec(p), rowVec(q)];
  },
  gplot: async (a, _n, env) => {
    const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]); const XY = m(a[1]); const nn = A.rows;
    const xs: number[] = [], ys: number[] = [];
    for (let i = 0; i < nn; i++) for (let j = 0; j < nn; j++) if (A.data[i + j * nn] !== 0) { xs.push(XY.data[i], XY.data[j], NaN); ys.push(XY.data[i + nn], XY.data[j + nn], NaN); }
    env.graphics.addSeries(xs, ys); return [];
  },
  // ── more scalar math / reductions ──
  cbrt: ew(Math.cbrt),
  sinc: ew((x) => (x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x))),
  sumsq: async (a) => ret(colReduce(m(a[0]), (c) => c.reduce((s, x) => s + x * x, 0))),
  range: async (a) => ret(colReduce(m(a[0]), (c) => Math.max(...c) - Math.min(...c))),
  zscore: async (a) => ret(colMap(m(a[0]), (c) => normalizeVec(c, 'zscore'))),
  center: async (a) => ret(colMap(m(a[0]), (c) => normalizeVec(c, 'center'))),
  meansq: async (a) => ret(colReduce(m(a[0]), (c) => c.reduce((s, x) => s + x * x, 0) / c.length)),
  issorted: async (a) => { const v = toArray(m(a[0])); let ok = true; for (let i = 1; i < v.length; i++) if (v[i] < v[i - 1]) { ok = false; break; } return ret(bool(ok)); },
  normest: async (a) => ret(scalar(norm(m(a[0]), 2))),
  // ── type predicates ──
  islogical: async (a) => ret(bool(isMat(a[0]) && !!(a[0] as Mat).isBool)),
  isinteger: async () => ret(bool(false)),
  issquare: async (a) => { const A = m(a[0]); return ret(bool(A.rows === A.cols)); },
  // ── nonlinear system + iterative solvers (dense direct fallback) ──
  fsolve: async (a, _n, env) => {
    const f = handle(a[0], 'fsolve'); let x = toArray(m(a[1])); const n = x.length;
    const F = async (v: number[]) => { const r = await env.callHandle(f, [m(a[1]).rows === 1 ? rowVec(v) : colVec(v)], 1); return toArray(m(r[0])); };
    for (let it = 0; it < 100; it++) {
      const fx = await F(x); if (Math.hypot(...fx) < 1e-12) break;
      const J = zeros(n, n); const h = 1e-7;
      for (let j = 0; j < n; j++) { const xj = x.slice(); xj[j] += h; const fj = await F(xj); for (let i = 0; i < n; i++) J.data[i + j * n] = (fj[i] - fx[i]) / h; }
      const dx = mldivide(J, colVec(fx)); for (let i = 0; i < n; i++) x[i] -= dx.data[i];
    }
    return ret(m(a[1]).rows === 1 ? rowVec(x) : colVec(x));
  },
  bicg: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  bicgstab: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  cgs: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  gmres: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  pcg: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  // ── string functions (operate on char arrays) ──
  lower: async (a) => ret(str(asString(a[0]).toLowerCase())),
  upper: async (a) => ret(str(asString(a[0]).toUpperCase())),
  strtrim: async (a) => ret(str(asString(a[0]).trim())),
  deblank: async (a) => ret(str(asString(a[0]).replace(/\s+$/, ''))),
  strcmp: async (a) => ret(bool(getStr(a[0]) !== null && getStr(a[0]) === getStr(a[1]))),
  strcmpi: async (a) => { const x = getStr(a[0]), y = getStr(a[1]); return ret(bool(x !== null && y !== null && x.toLowerCase() === y.toLowerCase())); },
  strncmp: async (a) => { const x = getStr(a[0]), y = getStr(a[1]); const k = Math.round(asScalar(a[2])); return ret(bool(x !== null && y !== null && x.slice(0, k) === y.slice(0, k) && x.length >= k && y.length >= k)); },
  strncmpi: async (a) => { const x = getStr(a[0]), y = getStr(a[1]); const k = Math.round(asScalar(a[2])); return ret(bool(x !== null && y !== null && x.slice(0, k).toLowerCase() === y.slice(0, k).toLowerCase() && x.length >= k && y.length >= k)); },
  strrep: async (a) => ret(str(asString(a[0]).split(asString(a[1])).join(asString(a[2])))),
  strcat: async (a) => ret(str(a.map((v) => (isMat(v) && (v as Mat).isChar ? asString(v).replace(/\s+$/, '') : asString(v))).join(''))),
  strfind: async (a) => { const s = asString(a[0]), p = asString(a[1]); const out: number[] = []; if (p.length) { let i = s.indexOf(p); while (i >= 0) { out.push(i + 1); i = s.indexOf(p, i + 1); } } return ret(rowVec(out)); },
  strtok: async (a, n) => { const s = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' \t\n'; let i = 0; while (i < s.length && delim.includes(s[i])) i++; let j = i; while (j < s.length && !delim.includes(s[j])) j++; return n >= 2 ? [str(s.slice(i, j)), str(s.slice(j))] : [str(s.slice(i, j))]; },
  regexprep: async (a) => { try { return ret(str(asString(a[0]).replace(new RegExp(asString(a[1]), 'g'), asString(a[2]).replace(/\$(\d)/g, '$$$1')))); } catch { return ret(a[0]); } },
  // ── base conversions ──
  dec2bin: async (a) => { const d = Math.round(asScalar(a[0])); let s2 = (d >>> 0).toString(2); if (a.length >= 2) s2 = s2.padStart(Math.round(asScalar(a[1])), '0'); return ret(str(s2)); },
  bin2dec: async (a) => ret(scalar(parseInt(asString(a[0]).replace(/\s/g, ''), 2))),
  dec2hex: async (a) => { const d = Math.round(asScalar(a[0])); let s2 = d.toString(16).toUpperCase(); if (a.length >= 2) s2 = s2.padStart(Math.round(asScalar(a[1])), '0'); return ret(str(s2)); },
  hex2dec: async (a) => ret(scalar(parseInt(asString(a[0]).replace(/\s/g, ''), 16))),
  dec2base: async (a) => { const d = Math.round(asScalar(a[0])); const b = Math.round(asScalar(a[1])); let s2 = d.toString(b).toUpperCase(); if (a.length >= 3) s2 = s2.padStart(Math.round(asScalar(a[2])), '0'); return ret(str(s2)); },
  base2dec: async (a) => ret(scalar(parseInt(asString(a[0]).replace(/\s/g, ''), Math.round(asScalar(a[1]))))),
  // ── class / regexp / sscanf ──
  class: async (a) => { const v = a[0]; if (isHandle(v)) return ret(str('function_handle')); if (v.kind === 'gobj') return ret(str(v.gtype)); if (isStr(v)) return ret(str('string')); if (isCell(v)) return ret(str('cell')); if (isStruct(v)) return ret(str('struct')); if ((v as Mat).isChar) return ret(str('char')); if ((v as Mat).isBool) return ret(str('logical')); return ret(str('double')); },
  isa: async (a) => { const v = a[0]; const ty = asString(a[1]); const cls = isHandle(v) ? 'function_handle' : (v as Mat).isChar ? 'char' : (v as Mat).isBool ? 'logical' : 'double'; if (ty === cls) return ret(bool(true)); if ((ty === 'numeric' || ty === 'float') && cls === 'double') return ret(bool(true)); return ret(bool(false)); },
  regexp: async (a, n) => { const s = asString(a[0]); const opt = a.length >= 3 ? asString(a[2]) : ''; const re = new RegExp(asString(a[1]), opt === 'once' ? '' : 'g'); const idx: number[] = []; let mt: RegExpExecArray | null; if (opt === 'once') { const mm = re.exec(s); return ret(mm ? scalar(mm.index + 1) : zeros(1, 0)); } while ((mt = re.exec(s)) !== null) { idx.push(mt.index + 1); if (mt.index === re.lastIndex) re.lastIndex++; } void n; return ret(rowVec(idx)); },
  regexpi: async (a) => { const s = asString(a[0]); const re = new RegExp(asString(a[1]), 'gi'); const idx: number[] = []; let mt: RegExpExecArray | null; while ((mt = re.exec(s)) !== null) { idx.push(mt.index + 1); if (mt.index === re.lastIndex) re.lastIndex++; } return ret(rowVec(idx)); },
  sscanf: async (a) => { const s = asString(a[0]); const nums = (s.match(/-?\d+\.?\d*(e[+-]?\d+)?/gi) ?? []).map(Number); return ret(colVec(nums)); },
  // ── cell arrays ──
  cell: async (a) => { const [r, c] = dims2(a); const items: Value[] = []; for (let i = 0; i < r * c; i++) items.push(zeros(0, 0)); return ret(makeCell(r, c, items)); },
  iscell: async (a) => ret(bool(isCell(a[0]))),
  iscellstr: async (a) => ret(bool(isCell(a[0]) && (a[0] as Cell).items.every((it) => isMat(it) && !!(it as Mat).isChar))),
  num2cell: async (a) => { const A = m(a[0]); const items: Value[] = []; for (let i = 0; i < A.data.length; i++) items.push(A.idata ? finishComplex(1, 1, Float64Array.of(A.data[i]), Float64Array.of(A.idata[i])) : scalar(A.data[i])); return ret(makeCell(A.rows, A.cols, items)); },
  cell2mat: async (a) => {
    const C = a[0]; if (!isCell(C)) return ret(m(a[0]));
    const rowMats: Mat[] = [];
    for (let r = 0; r < C.rows; r++) { const parts: Mat[] = []; for (let c = 0; c < C.cols; c++) parts.push(m(C.items[r + c * C.rows])); rowMats.push(parts.length === 1 ? parts[0] : horzcat(parts)); }
    return ret(rowMats.length === 1 ? rowMats[0] : vertcat(rowMats));
  },
  celldisp: async (a, _n, env) => { const C = a[0]; if (!isCell(C)) return []; for (let i = 0; i < C.items.length; i++) env.output(`{${i + 1}} = ${dispValue(C.items[i])}\n`); return []; },
  cellfun: async (a, _n, env) => {
    const f = handle(a[0], 'cellfun'); const C = a[1]; if (!isCell(C)) throw new MatError('cellfun: second argument must be a cell array');
    let uniform = true; for (let i = 2; i + 1 < a.length; i += 2) if (isMat(a[i]) && (a[i] as Mat).isChar && asString(a[i]).toLowerCase() === 'uniformoutput') uniform = truthyArg(a[i + 1]);
    const results: Value[] = [];
    for (let i = 0; i < C.items.length; i++) { const r = await env.callHandle(f, [C.items[i]], 1); results.push(r[0] ?? zeros(0, 0)); }
    if (uniform) { const o = zeros(C.rows, C.cols); for (let i = 0; i < results.length; i++) o.data[i] = asScalar(results[i]); return ret(o); }
    return ret(makeCell(C.rows, C.cols, results));
  },
  strsplit: async (a) => {
    const s = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' ';
    const parts = a.length >= 2 ? s.split(delim) : s.split(/\s+/).filter((x) => x.length);
    return ret(makeCell(1, parts.length, parts.map((p) => str(p))));
  },
  strjoin: async (a) => { const C = a[0]; if (!isCell(C)) throw new MatError('strjoin: first argument must be a cell array of strings'); const delim = a.length >= 2 ? asString(a[1]) : ' '; return ret(str(C.items.map((it) => asString(it)).join(delim))); },

  // ── Structs ──
  struct: async (a) => {
    const fields = new Map<string, Value[]>();
    for (let i = 0; i + 1 < a.length; i += 2) {
      const name = asString(a[i]); const v = a[i + 1];
      // struct('f', {…}) would build a struct array; we support scalar structs (cell value → first element)
      fields.set(name, [isCell(v) ? (v.items[0] ?? zeros(0, 0)) : v]);
    }
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },
  isstruct: async (a) => ret(bool(isStruct(a[0]))),
  isfield: async (a) => {
    const S = a[0]; if (!isStruct(S)) return ret(bool(false));
    if (isCell(a[1])) return ret(makeCell(a[1].rows, a[1].cols, a[1].items.map((it) => bool(S.fields.has(asString(it))))));
    return ret(bool(S.fields.has(asString(a[1]))));
  },
  fieldnames: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('fieldnames: argument must be a struct'); const names = [...S.fields.keys()]; return ret(makeCell(names.length, 1, names.map((nm) => str(nm)))); },
  numfields: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('numfields: argument must be a struct'); return ret(scalar(S.fields.size)); },
  rmfield: async (a) => {
    const S = a[0]; if (!isStruct(S)) throw new MatError('rmfield: first argument must be a struct');
    const fields = new Map(S.fields); const names = isCell(a[1]) ? a[1].items.map((it) => asString(it)) : [asString(a[1])];
    for (const nm of names) { if (!fields.has(nm)) throw new MatError(`rmfield: field '${nm}' not found`); fields.delete(nm); }
    return ret({ kind: 'struct', rows: S.rows, cols: S.cols, fields } as StructV);
  },
  setfield: async (a) => {
    const S = isStruct(a[0]) ? a[0] : ({ kind: 'struct', rows: 1, cols: 1, fields: new Map<string, Value[]>() } as StructV);
    const fields = new Map(S.fields); fields.set(asString(a[1]), [a[2]]);
    return ret({ kind: 'struct', rows: S.rows, cols: S.cols, fields } as StructV);
  },
  getfield: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('getfield: first argument must be a struct'); const nm = asString(a[1]); const v = S.fields.get(nm); if (!v) throw new MatError(`getfield: field '${nm}' not found`); return ret(v[0] ?? zeros(0, 0)); },
  orderfields: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('orderfields: argument must be a struct'); const fields = new Map<string, Value[]>(); for (const k of [...S.fields.keys()].sort()) fields.set(k, S.fields.get(k)!); return ret({ kind: 'struct', rows: S.rows, cols: S.cols, fields } as StructV); },
  struct2cell: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('struct2cell: argument must be a struct'); const vals = [...S.fields.values()].map((v) => v[0] ?? zeros(0, 0)); return ret(makeCell(vals.length, 1, vals)); },
  cell2struct: async (a) => {
    const C = a[0]; const F = a[1]; if (!isCell(C) || !isCell(F)) throw new MatError('cell2struct: arguments must be cell arrays');
    const names = F.items.map((it) => asString(it)); const fields = new Map<string, Value[]>();
    for (let i = 0; i < names.length; i++) fields.set(names[i], [C.items[i] ?? zeros(0, 0)]);
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },
  structfun: async (a, n, env) => {
    const f = handle(a[0], 'structfun'); const S = a[1]; if (!isStruct(S)) throw new MatError('structfun: second argument must be a struct');
    let uniform = true; for (let i = 2; i + 1 < a.length; i += 2) if (isMat(a[i]) && (a[i] as Mat).isChar && asString(a[i]).toLowerCase() === 'uniformoutput') uniform = truthyArg(a[i + 1]);
    const keys = [...S.fields.keys()]; const results: Value[] = [];
    for (const k of keys) { const r = await env.callHandle(f, [S.fields.get(k)![0] ?? zeros(0, 0)], 1); results.push(r[0] ?? zeros(0, 0)); }
    if (uniform) { const o = zeros(keys.length, 1); for (let i = 0; i < results.length; i++) o.data[i] = asScalar(results[i]); return ret(o); }
    const fields = new Map<string, Value[]>(); keys.forEach((k, i) => fields.set(k, [results[i]])); void n;
    return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
  },

  // ── Concatenation / equality / misc (batch A) ──
  horzcat: async (a) => ret(horzcat(a.map((v) => m(v)))),
  vertcat: async (a) => ret(vertcat(a.map((v) => m(v)))),
  isequaln: async (a) => {
    const eq = (x: Value, y: Value): boolean => {
      if (!isMat(x) || !isMat(y)) return x === y;
      if (x.rows !== y.rows || x.cols !== y.cols) return false;
      for (let i = 0; i < x.data.length; i++) { const u = x.data[i], v = y.data[i]; if (u !== v && !(Number.isNaN(u) && Number.isNaN(v))) return false; }
      return true;
    };
    for (let i = 1; i < a.length; i++) if (!eq(a[0], a[i])) return ret(bool(false));
    return ret(bool(true));
  },
  size_equal: async (a) => {
    if (!a.length) return ret(bool(true));
    const [r, c] = dimsOf(a[0]);
    for (let i = 1; i < a.length; i++) { const [ri, ci] = dimsOf(a[i]); if (ri !== r || ci !== c) return ret(bool(false)); }
    return ret(bool(true));
  },
  corr: async (a) => {
    let X = m(a[0]); if (a.length >= 2) X = horzcat([colvecOf(X), colvecOf(m(a[1]))]);
    const C = covMatrix(X); const p = C.rows; const R = zeros(p, p);
    for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) R.data[i + j * p] = C.data[i + j * p] / Math.sqrt(C.data[i + i * p] * C.data[j + j * p]);
    return ret(R);
  },
  qmr: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  condest1: async (a) => { const A = m(a[0]); return ret(scalar(norm(A, 1) * norm(inv(A), 1))); },
  wilkinson: async (a) => {
    const n = Math.round(asScalar(a[0])); const W = zeros(n, n); const mid = (n - 1) / 2;
    for (let i = 0; i < n; i++) { W.data[i + i * n] = Math.abs(mid - i); if (i + 1 < n) { W.data[i + (i + 1) * n] = 1; W.data[(i + 1) + i * n] = 1; } }
    return ret(W);
  },
  gallery: async (a) => {
    if (!a.length || !(isMat(a[0]) && (a[0] as Mat).isChar)) throw new MatError("gallery: first argument must be a name, e.g. gallery('minij',5)");
    return ret(galleryMatrix(asString(a[0]).toLowerCase(), a.slice(1)));
  },
  nonzeros: async (a) => { if (isSparse(a[0])) return ret(colVec(Array.from(a[0].values))); return ret(colVec(toArray(m(a[0])).filter((x) => x !== 0))); },
  // Window functions (column vectors, like MATLAB).
  bartlett: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 1 - Math.abs((n - (N - 1) / 2) / ((N - 1) / 2))); return ret(colVec(w)); },
  blackman: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.42 - 0.5 * Math.cos((2 * Math.PI * n) / (N - 1)) + 0.08 * Math.cos((4 * Math.PI * n) / (N - 1))); return ret(colVec(w)); },
  hamming: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.54 - 0.46 * Math.cos((2 * Math.PI * n) / (N - 1))); return ret(colVec(w)); },
  hanning: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 1; n <= N; n++) w.push(0.5 * (1 - Math.cos((2 * Math.PI * n) / (N + 1)))); return ret(colVec(w)); },
  hann: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.5 * (1 - Math.cos((2 * Math.PI * n) / (N - 1)))); return ret(colVec(w)); },
  // Bit-reinterpretation: source storage is IEEE double (the only class this engine tracks).
  typecast: async (a) => { const A = m(a[0]); const buf = new Float64Array(A.data).buffer; return ret(rowVec(readAs(buf, asString(a[1])))); },
  swapbytes: async (a) => { const A = m(a[0]); const u = new Uint8Array(new Float64Array(A.data).buffer); for (let i = 0; i < u.length; i += 8) u.subarray(i, i + 8).reverse(); return ret(mat(A.rows, A.cols, new Float64Array(u.buffer))); },

  // ── String class ("…") ──
  string: async (a) => { const v = a[0]; if (isStr(v)) return ret(v); if (isCell(v)) return ret(makeStrArr(v.rows, v.cols, v.items.map((x) => asString(x)))); if (isMat(v) && v.isChar) return ret(makeStr(asString(v))); if (isMat(v)) { const f = (x: number) => (Number.isInteger(x) ? String(x) : String(+x.toPrecision(5))); return ret(makeStrArr(v.rows, v.cols, Array.from(v.data, f))); } return ret(makeStr(String(v))); },
  strings: async (a) => { const [r, c] = dims2(a); return ret(makeStrArr(r, c, new Array(r * c).fill(''))); },
  isstring: async (a) => ret(bool(isStr(a[0]))),
  isStringScalar: async (a) => ret(bool(isStr(a[0]) && a[0].rows * a[0].cols === 1)),
  strlength: async (a) => { const s = asStrArr(a[0]); const o = zeros(s.rows, s.cols); s.items.forEach((x, i) => { o.data[i] = x.length; }); return ret(o); },
  contains: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x.includes(p) ? 1 : 0; }); return [o]; },
  startsWith: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x.startsWith(p) ? 1 : 0; }); return [o]; },
  endsWith: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x.endsWith(p) ? 1 : 0; }); return [o]; },
  count: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); s.items.forEach((x, i) => { o.data[i] = p ? x.split(p).length - 1 : 0; }); return ret(o); },
  erase: async (a) => ret(mapStrArr(a[0], (x) => x.split(asString(a[1])).join(''))),
  replace: async (a) => ret(mapStrArr(a[0], (x) => x.split(asString(a[1])).join(asString(a[2])))),
  strip: async (a) => { const side = a.length >= 2 ? asString(a[1]).toLowerCase() : 'both'; return ret(mapStrArr(a[0], (x) => (side === 'left' ? x.replace(/^\s+/, '') : side === 'right' ? x.replace(/\s+$/, '') : x.trim()))); },
  reverse: async (a) => ret(mapStrArr(a[0], (x) => [...x].reverse().join(''))),
  pad: async (a) => { const n = Math.round(asScalar(a[1])); const side = a.length >= 3 ? asString(a[2]).toLowerCase() : 'right'; return ret(mapStrArr(a[0], (x) => (side === 'left' ? x.padStart(n) : side === 'both' ? x.padStart(Math.floor((n + x.length) / 2)).padEnd(n) : x.padEnd(n)))); },
  split: async (a) => { const str = asString(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' '; const parts = a.length >= 2 ? str.split(delim) : str.split(/\s+/).filter((x) => x.length); return ret(makeStrArr(parts.length, 1, parts)); },
  splitlines: async (a) => { const parts = asString(a[0]).split(/\r\n|\r|\n/); return ret(makeStrArr(parts.length, 1, parts)); },
  join: async (a) => { const s = asStrArr(a[0]); const delim = a.length >= 2 ? asString(a[1]) : ' '; return ret(makeStr(s.items.join(delim))); },
  append: async (a) => ret(makeStr(a.map((v) => asString(v)).join(''))),
  extractBefore: async (a) => ret(mapStrArr(a[0], (x) => { const i = x.indexOf(asString(a[1])); return i < 0 ? '' : x.slice(0, i); })),
  extractAfter: async (a) => ret(mapStrArr(a[0], (x) => { const p = asString(a[1]); const i = x.indexOf(p); return i < 0 ? '' : x.slice(i + p.length); })),
  extractBetween: async (a) => { const str = asString(a[0]); const l = asString(a[1]), r = asString(a[2]); const i = str.indexOf(l); if (i < 0) return ret(makeStr('')); const j = str.indexOf(r, i + l.length); return ret(makeStr(j < 0 ? '' : str.slice(i + l.length, j))); },
  matches: async (a) => { const s = asStrArr(a[0]); const p = asString(a[1]); const o = zeros(s.rows, s.cols); o.isBool = true; s.items.forEach((x, i) => { o.data[i] = x === p ? 1 : 0; }); return [o]; },

  // ── Batch H: bitwise + legacy string/data (MATLAB v6 reference) ──
  bitand: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => Number(BigInt(Math.round(x)) & BigInt(Math.round(y))))),
  bitor: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => Number(BigInt(Math.round(x)) | BigInt(Math.round(y))))),
  bitxor: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, y) => Number(BigInt(Math.round(x)) ^ BigInt(Math.round(y))))),
  bitshift: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, k) => { const b = BigInt(Math.round(x)), kk = Math.round(k); return Number(kk >= 0 ? b << BigInt(kk) : b >> BigInt(-kk)); })),
  bitget: async (a) => ret(elementwise(m(a[0]), m(a[1]), (x, p) => Number((BigInt(Math.round(x)) >> BigInt(Math.round(p) - 1)) & 1n))),
  bitset: async (a) => { const val = a.length >= 3 ? Math.round(asScalar(a[2])) : 1; return ret(elementwise(m(a[0]), m(a[1]), (x, p) => { const b = BigInt(Math.round(x)), bit = 1n << BigInt(Math.round(p) - 1); return Number(val ? (b | bit) : (b & ~bit)); })); },
  bitcmp: async (a) => { const ty = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'uint64'; const bits = { uint8: 8, int8: 8, uint16: 16, int16: 16, uint32: 32, int32: 32, uint64: 64, int64: 64 }[ty] ?? 64; const mask = (1n << BigInt(bits)) - 1n; return ret(map(m(a[0]), (x) => Number((~BigInt(Math.round(x))) & mask))); },
  blanks: async (a) => ret(str(' '.repeat(Math.max(0, Math.round(asScalar(a[0])))))),
  findstr: async (a) => { const s1 = asString(a[0]), s2 = asString(a[1]); const [hay, ndl] = s1.length >= s2.length ? [s1, s2] : [s2, s1]; const out: number[] = []; if (ndl.length) { let i = hay.indexOf(ndl); while (i >= 0) { out.push(i + 1); i = hay.indexOf(ndl, i + 1); } } return ret(rowVec(out)); },
  strjust: async (a) => { const s = asString(a[0]); const mode = a.length >= 2 ? asString(a[1]).toLowerCase() : 'right'; const t = s.trim(); const pad = s.length - t.length; if (pad <= 0) return ret(str(t)); if (mode === 'left') return ret(str(t + ' '.repeat(pad))); if (mode === 'center') { const l = Math.floor(pad / 2); return ret(str(' '.repeat(l) + t + ' '.repeat(pad - l))); } return ret(str(' '.repeat(pad) + t)); },
  strvcat: async (a) => { const ss = a.filter((v) => isMat(v) && (v as Mat).isChar).map((v) => asString(v)).filter((s) => s.length > 0); const w = ss.reduce((mx, s) => Math.max(mx, s.length), 0); const rows = ss.length; const M = zeros(rows, w); M.isChar = true; ss.forEach((s, r) => { for (let c = 0; c < w; c++) M.data[r + c * rows] = c < s.length ? s.charCodeAt(c) : 32; }); return ret(M); },
  hist: async (a, n, env) => {
    const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v)); const nb = a.length >= 2 && isMat(a[1]) && numel(a[1]) === 1 ? Math.round(asScalar(a[1])) : 10;
    let lo = Math.min(...x), hi = Math.max(...x); if (!Number.isFinite(lo) || lo === hi) { lo = (lo || 0) - 0.5; hi = (hi || 0) + 0.5; }
    const w = (hi - lo) / nb; const centers: number[] = [], counts = new Array(nb).fill(0);
    for (let i = 0; i < nb; i++) centers.push(lo + w * (i + 0.5));
    for (const v of x) { let b = Math.floor((v - lo) / w); if (b < 0) b = 0; if (b >= nb) b = nb - 1; counts[b]++; }
    if (n >= 1) return n >= 2 ? [rowVec(counts), rowVec(centers)] : [rowVec(counts)];
    env.graphics.chart2d([rowVec(centers), rowVec(counts)], 'bar'); return [];
  },
  histc: async (a) => { const x = toArray(m(a[0])); const e = toArray(m(a[1])); const counts = new Array(e.length).fill(0); for (const v of x) { for (let i = 0; i < e.length - 1; i++) if (v >= e[i] && v < e[i + 1]) { counts[i]++; break; } if (v === e[e.length - 1]) counts[e.length - 1]++; } return ret(rowVec(counts)); },
  exist: async (a, _n, env) => { const nm = asString(a[0]); if (env.workspaceVars().some((v) => v.name === nm)) return ret(scalar(1)); if (nm in BUILTINS || nm in CONSTANTS) return ret(scalar(5)); return ret(scalar(0)); },
  // Error/exception helpers (work with try/catch).
  MException: async (a) => { const id = a.length ? asString(a[0]) : ''; const msg = a.length >= 2 ? sprintf(asString(a[1]), a.slice(2)) : ''; const fields = new Map<string, Value[]>([['identifier', [str(id)]], ['message', [str(msg)]], ['stack', [zeros(0, 0)]]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },
  rethrow: async (a) => { const e = a[0]; const msg = isStruct(e) && e.fields.get('message')?.[0] && isMat(e.fields.get('message')![0]) ? asString(e.fields.get('message')![0]) : 'rethrow: not an error struct'; throw new MatError(msg); },
  throw: async (a) => { const e = a[0]; const msg = isStruct(e) && e.fields.get('message')?.[0] && isMat(e.fields.get('message')![0]) ? asString(e.fields.get('message')![0]) : String(e); throw new MatError(msg); },
  lasterr: async () => ret(str('')),
  lasterror: async () => { const fields = new Map<string, Value[]>([['identifier', [str('')]], ['message', [str('')]]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },

  // ── Batch J: language fundamentals (array/char/page/string) ──
  repelem: async (a) => {
    const A = m(a[0]);
    if (a.length === 2 && (A.rows === 1 || A.cols === 1)) {
      const reps = m(a[1]); const v = toArray(A); const out: number[] = [];
      for (let i = 0; i < v.length; i++) { const k = reps.data.length === 1 ? reps.data[0] : reps.data[i]; for (let j = 0; j < k; j++) out.push(v[i]); }
      return ret(A.cols === 1 ? colVec(out) : rowVec(out));
    }
    const rr = Math.round(asScalar(a[1])), cc = a.length >= 3 ? Math.round(asScalar(a[2])) : 1;
    const o = zeros(A.rows * rr, A.cols * cc);
    for (let c = 0; c < A.cols; c++) for (let r = 0; r < A.rows; r++) { const v = A.data[r + c * A.rows]; for (let dc = 0; dc < cc; dc++) for (let dr = 0; dr < rr; dr++) o.data[(r * rr + dr) + (c * cc + dc) * o.rows] = v; }
    return ret(o);
  },
  topkrows: async (a, n) => {
    const A = m(a[0]); const k = Math.round(asScalar(a[1])); const idx = [...Array(A.rows).keys()];
    idx.sort((p, q) => { for (let c = 0; c < A.cols; c++) { const d = A.data[q + c * A.rows] - A.data[p + c * A.rows]; if (d) return d; } return 0; });
    const sel = idx.slice(0, k); const B = zeros(sel.length, A.cols);
    sel.forEach((src, d) => { for (let c = 0; c < A.cols; c++) B.data[d + c * sel.length] = A.data[src + c * A.rows]; });
    return n >= 2 ? [B, colVec(sel.map((x) => x + 1))] : [B];
  },
  mat2cell: async (a) => {
    const A = m(a[0]); const rs = toArray(m(a[1])).map((x) => Math.round(x)); const cs = a.length >= 3 ? toArray(m(a[2])).map((x) => Math.round(x)) : [A.cols];
    const grid: Mat[][] = []; let r0 = 0;
    for (const rb of rs) { const rowBlocks: Mat[] = []; let c0 = 0; for (const cb of cs) { const blk = zeros(rb, cb); for (let c = 0; c < cb; c++) for (let r = 0; r < rb; r++) blk.data[r + c * rb] = A.data[(r0 + r) + (c0 + c) * A.rows]; rowBlocks.push(blk); c0 += cb; } grid.push(rowBlocks); r0 += rb; }
    const out: Value[] = []; for (let c = 0; c < cs.length; c++) for (let r = 0; r < rs.length; r++) out.push(grid[r][c]);
    return ret(makeCell(rs.length, cs.length, out));
  },
  isletter: async (a) => charPred(a[0], (ch) => /[A-Za-z]/.test(ch)),
  isspace: async (a) => charPred(a[0], (ch) => /\s/.test(ch)),
  isstrprop: async (a) => { const p = asString(a[1]).toLowerCase(); const re: Record<string, RegExp> = { alpha: /[A-Za-z]/, digit: /[0-9]/, alphanum: /[A-Za-z0-9]/, wspace: /\s/, upper: /[A-Z]/, lower: /[a-z]/, punct: /[!-/:-@[-`{-~]/, xdigit: /[0-9A-Fa-f]/ }; const r = re[p] ?? /$^/; return charPred(a[0], (ch) => r.test(ch)); },
  hex2num: async (a) => { const h = asString(a[0]).replace(/\s/g, '').padEnd(16, '0').slice(0, 16); const dv = new DataView(new ArrayBuffer(8)); dv.setBigUint64(0, BigInt('0x' + h)); return ret(scalar(dv.getFloat64(0))); },
  num2hex: async (a) => { const dv = new DataView(new ArrayBuffer(8)); dv.setFloat64(0, asScalar(a[0])); return ret(str(dv.getBigUint64(0).toString(16).padStart(16, '0'))); },
  native2unicode: async (a) => ret(str(toArray(m(a[0])).map((x) => String.fromCharCode(Math.round(x))).join(''))),
  unicode2native: async (a) => ret(rowVec(asString(a[0]).split('').map((c) => c.charCodeAt(0)))),
  // type predicates / introspection
  isobject: async () => ret(bool(false)),
  isjava: async () => ret(bool(false)),
  isenum: async () => ret(bool(false)),
  istabular: async () => ret(bool(false)),
  isgraphics: async (a) => ret(bool(!isMat(a[0]) && (a[0] as { kind?: string }).kind === 'gobj')),
  underlyingType: async (a, n, env) => BUILTINS.class(a, n, env),
  isUnderlyingType: async (a, _n, env) => { const c = await BUILTINS.class([a[0]], 1, env); return ret(bool(asString(c[0]) === asString(a[1]))); },
  function_handle: async (a) => ret(a[0]),
  functions: async (a) => { const h = handle(a[0], 'functions'); const fields = new Map<string, Value[]>([['function', [str(h.name ?? 'anonymous')]], ['type', [str(h.name === 'anonymous' ? 'anonymous' : 'simple')]], ['file', [str('')]]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },
  // page-wise ops (each 2-D page of an N-D array)
  pagetranspose: async (a) => ret(pageTranspose(m(a[0]), false)),
  pagectranspose: async (a) => ret(pageTranspose(m(a[0]), true)),
  pagemtimes: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => matmul(X, Y))),
  pagemldivide: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => mldivide(X, Y))),
  pagemrdivide: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => transpose(mldivide(transpose(Y), transpose(X))))),
  pagesvd: async (a) => {
    const A = m(a[0]); const dims = ndSize(A); const d0 = dims[0], d1 = dims[1], psz = d0 * d1; const np = A.data.length / psz; const k = Math.min(d0, d1);
    const out = new Float64Array(k * np);
    for (let p = 0; p < np; p++) { const { s } = svdReal(mat(d0, d1, A.data.slice(p * psz, p * psz + psz))); for (let i = 0; i < k; i++) out[p * k + i] = s[i]; }
    const rest = dims.slice(2);
    return ret(rest.length ? makeND([k, 1, ...rest], out) : mat(k, 1, out));
  },
  pageinv: async (a) => ret(pageUnary(m(a[0]), (X) => inv(X))),
  pagepinv: async (a) => ret(pageUnary(m(a[0]), (X) => pinvFn(X))),
  pagenorm: async (a) => { const p = a.length >= 2 ? (isMat(a[1]) ? asScalar(a[1]) : (asString(a[1]) === 'fro' ? 'fro' : 2)) : 2; return ret(pageUnary(m(a[0]), (X) => mat(1, 1, new Float64Array([norm(X, p as number | 'fro')])))); },
  pagelsqminnorm: async (a) => ret(pageBinary(m(a[0]), m(a[1]), (X, Y) => matmul(pinvFn(X), Y))),
  linkaxes: async () => [], alpha: async () => [], alphamap: async () => [],
  // string edits
  insertAfter: async (a) => ret(mapStrArr(a[0], (x) => { const p = asString(a[1]); const i = x.indexOf(p); return i < 0 ? x : x.slice(0, i + p.length) + asString(a[2]) + x.slice(i + p.length); })),
  insertBefore: async (a) => ret(mapStrArr(a[0], (x) => { const i = x.indexOf(asString(a[1])); return i < 0 ? x : x.slice(0, i) + asString(a[2]) + x.slice(i); })),
  eraseBetween: async (a) => ret(mapStrArr(a[0], (x) => { const l = asString(a[1]), r = asString(a[2]); const i = x.indexOf(l); if (i < 0) return x; const j = x.indexOf(r, i + l.length); return j < 0 ? x : x.slice(0, i + l.length) + x.slice(j); })),
  replaceBetween: async (a) => ret(mapStrArr(a[0], (x) => { const l = asString(a[1]), r = asString(a[2]); const i = x.indexOf(l); if (i < 0) return x; const j = x.indexOf(r, i + l.length); return j < 0 ? x : x.slice(0, i + l.length) + asString(a[3]) + x.slice(j); })),
  compose: async (a) => ret(makeStr(sprintf(asString(a[0]), a.slice(1)))),
  convertStringsToChars: async (a) => ret(isStr(a[0]) ? str(asString(a[0])) : a[0]),
  convertCharsToStrings: async (a) => ret(isMat(a[0]) && (a[0] as Mat).isChar ? makeStr(asString(a[0])) : a[0]),

  // ── Batch I: language utilities (MATLAB v7 reference) ──
  deal: async (a, n) => { const k = Math.max(1, n); if (a.length === 1) return new Array(k).fill(a[0]); return a.slice(0, k); },
  func2str: async (a) => { const h = handle(a[0], 'func2str'); return ret(str(h.name && h.name !== 'anonymous' ? h.name : '@anonymous')); },
  str2func: async (a, _n, env) => ret(env.makeHandle(asString(a[0]).replace(/^@/, ''))),
  assert: async (a) => { if (!truthy(a[0])) throw new MatError(a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : 'assert: condition failed'); return []; },
  narginchk: async () => [], nargoutchk: async () => [], nargchk: async () => ret(str('')),
  validateattributes: async () => [],
  inputname: async () => ret(str('')),
  isvarname: async (a) => { const s = isMat(a[0]) && (a[0] as Mat).isChar ? asString(a[0]) : ''; const KW = new Set(['for', 'while', 'if', 'else', 'elseif', 'end', 'switch', 'case', 'otherwise', 'function', 'return', 'break', 'continue', 'global', 'persistent', 'try', 'catch']); return ret(bool(/^[A-Za-z][A-Za-z0-9_]*$/.test(s) && s.length <= 63 && !KW.has(s))); },
  genvarname: async (a) => { let s = asString(a[0]).replace(/[^A-Za-z0-9_]/g, '_'); if (!/^[A-Za-z]/.test(s)) s = 'x' + s; return ret(str(s || 'x')); },
  colon: async (a) => { const from = asScalar(a[0]); const step = a.length >= 3 ? asScalar(a[1]) : 1; const to = a.length >= 3 ? asScalar(a[2]) : asScalar(a[1]); const out: number[] = []; if (step > 0) for (let v = from; v <= to + 1e-12; v += step) out.push(v); else if (step < 0) for (let v = from; v >= to - 1e-12; v += step) out.push(v); return ret(rowVec(out)); },
  flipdim: async (a) => { const A = m(a[0]); const dim = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const o = zeros(A.rows, A.cols); for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) o.data[r + c * A.rows] = dim === 1 ? A.data[(A.rows - 1 - r) + c * A.rows] : A.data[r + (A.cols - 1 - c) * A.rows]; if (A.isChar) o.isChar = true; return ret(o); },
  condeig: async (a) => {
    const A = m(a[0]); const N = A.rows; const { D, V } = generalEig(A, true); const Vm = V!;
    // normalize eigenvector columns, then c_i = ||row i of inv(V)||
    const Vn = mat(N, N, Float64Array.from(Vm.data)); if (Vm.idata) Vn.idata = Float64Array.from(Vm.idata);
    for (let c = 0; c < N; c++) { let nr = 0; for (let r = 0; r < N; r++) nr += Vn.data[r + c * N] ** 2 + (Vn.idata ? Vn.idata[r + c * N] ** 2 : 0); nr = Math.sqrt(nr) || 1; for (let r = 0; r < N; r++) { Vn.data[r + c * N] /= nr; if (Vn.idata) Vn.idata[r + c * N] /= nr; } }
    const W = inv(Vn); const s = zeros(N, 1);
    for (let i = 0; i < N; i++) { let nr = 0; for (let j = 0; j < N; j++) nr += W.data[i + j * N] ** 2 + (W.idata ? W.idata[i + j * N] ** 2 : 0); s.data[i] = Math.sqrt(nr); }
    void D; return ret(s);
  },
  polyeig: async (a, n) => {
    // (A0 + λ A1 + ... + λ^p Ap) x = 0 via block-companion linearization → generalized eig.
    const mats = a.map((v) => m(v)); const p = mats.length - 1; const N = mats[0].rows;
    if (p === 0) throw new MatError('polyeig: need at least two coefficient matrices');
    const Ap = mats[p]; const np = N * p;
    const Acomp = zeros(np, np), Bcomp = zeros(np, np);
    // First block row: [-A0 -A1 ... -A_{p-1}]; identity sub-diagonal blocks.
    for (let j = 0; j < p; j++) for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) Acomp.data[r + (j * N + c) * np] = -mats[p - 1 - j].data[r + c * N];
    for (let b = 1; b < p; b++) for (let r = 0; r < N; r++) Acomp.data[(b * N + r) + ((b - 1) * N + r) * np] = 1;
    // B: top-left block = Ap; identity on the lower diagonal blocks.
    for (let r = 0; r < N; r++) for (let c = 0; c < N; c++) Bcomp.data[r + c * np] = Ap.data[r + c * N];
    for (let b = 1; b < p; b++) for (let r = 0; r < N; r++) Bcomp.data[(b * N + r) + (b * N + r) * np] = 1;
    const C = mldivide(Bcomp, Acomp); const { D } = generalEig(C, false);
    void n; return ret(finishComplex(np, 1, Float64Array.from(D.re), Float64Array.from(D.im)));
  },

  // ── Batch G: stats / preprocessing / misc numeric ──
  rms: async (a) => ret(colReduce(m(a[0]), (c) => Math.sqrt(c.reduce((s, x) => s + x * x, 0) / c.length))),
  geomean: async (a) => ret(colReduce(m(a[0]), (c) => Math.exp(c.reduce((s, x) => s + Math.log(x), 0) / c.length))),
  harmmean: async (a) => ret(colReduce(m(a[0]), (c) => c.length / c.reduce((s, x) => s + 1 / x, 0))),
  movmad: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => { const med = medianOf(w); return medianOf(w.map((x) => Math.abs(x - med))); })),
  movprod: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => w.reduce((s, x) => s * x, 1))),
  movstd: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => Math.sqrt(variance(w)))),
  movvar: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), variance)),
  mape: async (a) => { const F = toArray(m(a[0])), A = toArray(m(a[1])); let s = 0; for (let i = 0; i < F.length; i++) s += Math.abs((F[i] - A[i]) / A[i]); return ret(scalar(100 * s / F.length)); },
  rmse: async (a) => { const F = toArray(m(a[0])), A = toArray(m(a[1])); let s = 0; for (let i = 0; i < F.length; i++) s += (F[i] - A[i]) ** 2; return ret(scalar(Math.sqrt(s / F.length))); },

  // missing-value handling (NaN convention)
  ismissing: async (a) => { const A = m(a[0]); return [{ ...map(A, (x) => (Number.isNaN(x) ? 1 : 0)), isBool: true }]; },
  anymissing: async (a) => ret(bool(toArray(m(a[0])).some((x) => Number.isNaN(x)))),
  standardizeMissing: async (a) => { const A = m(a[0]); const vals = new Set(toArray(m(a[1]))); return ret(map(A, (x) => (vals.has(x) ? NaN : x))); },
  rmmissing: async (a) => {
    const A = m(a[0]);
    if (A.rows === 1 || A.cols === 1) return ret(A.rows === 1 ? rowVec(toArray(A).filter((x) => !Number.isNaN(x))) : colVec(toArray(A).filter((x) => !Number.isNaN(x))));
    const keep: number[] = []; for (let r = 0; r < A.rows; r++) { let ok = true; for (let c = 0; c < A.cols; c++) if (Number.isNaN(A.data[r + c * A.rows])) { ok = false; break; } if (ok) keep.push(r); }
    const o = zeros(keep.length, A.cols); keep.forEach((r, i) => { for (let c = 0; c < A.cols; c++) o.data[i + c * keep.length] = A.data[r + c * A.rows]; }); return ret(o);
  },
  fillmissing: async (a) => {
    const A = m(a[0]); const method = isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]).toLowerCase() : 'constant';
    const fill = method === 'constant' ? asScalar(a[a.length - 1]) : 0;
    return ret(colMap(A, (c) => fillVec(c, method, fill)));
  },
  isbetween: async (a) => { const A = m(a[0]); const lo = asScalar(a[1]), hi = asScalar(a[2]); return [{ ...map(A, (x) => (x >= lo && x <= hi ? 1 : 0)), isBool: true }]; },
  isuniform: async (a, n) => { const v = toArray(m(a[0])); if (v.length < 2) return n >= 2 ? [bool(true), scalar(0)] : [bool(true)]; const step = v[1] - v[0]; let ok = true; for (let i = 2; i < v.length; i++) if (Math.abs((v[i] - v[i - 1]) - step) > 1e-12 * (1 + Math.abs(step))) { ok = false; break; } return n >= 2 ? [bool(ok), scalar(ok ? step : NaN)] : [bool(ok)]; },
  allunique: async (a) => { const v = toArray(m(a[0])); return ret(bool(new Set(v).size === v.length)); },
  numunique: async (a) => ret(scalar(new Set(toArray(m(a[0]))).size)),
  uniquetol: async (a) => {
    const v = [...toArray(m(a[0]))].sort((x, y) => x - y); const tol = a.length >= 2 ? asScalar(a[1]) : 1e-6;
    const scale = Math.max(1, ...v.map(Math.abs)); const out: number[] = [];
    for (const x of v) if (!out.length || Math.abs(x - out[out.length - 1]) > tol * scale) out.push(x);
    return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out));
  },
  ismembertol: async (a) => { const A = m(a[0]); const B = toArray(m(a[1])); const tol = a.length >= 3 ? asScalar(a[2]) : 1e-6; const scale = Math.max(1, ...B.map(Math.abs), ...toArray(A).map(Math.abs)); return [{ ...map(A, (x) => (B.some((b) => Math.abs(x - b) <= tol * scale) ? 1 : 0)), isBool: true }]; },
  issortedrows: async (a) => { const A = m(a[0]); for (let r = 1; r < A.rows; r++) { for (let c = 0; c < A.cols; c++) { const prev = A.data[(r - 1) + c * A.rows], cur = A.data[r + c * A.rows]; if (cur > prev) break; if (cur < prev) return ret(bool(false)); } } return ret(bool(true)); },
  paddata: async (a) => { const v = toArray(m(a[0])); const nn = Math.round(asScalar(a[1])); const out = v.slice(); while (out.length < nn) out.push(0); return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out)); },
  trimdata: async (a) => { const v = toArray(m(a[0])); const nn = Math.round(asScalar(a[1])); return ret(m(a[0]).rows === 1 ? rowVec(v.slice(0, nn)) : colVec(v.slice(0, nn))); },
  resize: async (a) => { const v = toArray(m(a[0])); const nn = Math.round(asScalar(a[1])); const out = v.slice(0, nn); while (out.length < nn) out.push(0); return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out)); },
  discretize: async (a) => { const A = m(a[0]); const edges = toArray(m(a[1])); return ret(map(A, (x) => { if (x < edges[0] || x > edges[edges.length - 1]) return NaN; for (let i = 0; i < edges.length - 1; i++) if (x >= edges[i] && (x < edges[i + 1] || (i === edges.length - 2 && x === edges[i + 1]))) return i + 1; return NaN; })); },

  // linear algebra / math additions
  sylvester: async (a) => ret(sylvesterSolve(m(a[0]), m(a[1]), m(a[2]))),
  lsqminnorm: async (a) => ret(matmul(pinvFn(m(a[0])), m(a[1]))),
  expmv: async (a) => ret(matmul(expmFn(m(a[0])), m(a[1]))),
  idivide: async (a) => { const op = a.length >= 3 ? asString(a[2]).toLowerCase() : 'fix'; const rnd = op === 'floor' ? Math.floor : op === 'ceil' ? Math.ceil : op === 'round' ? Math.round : Math.trunc; return ret(elementwise(m(a[0]), m(a[1]), (x, y) => rnd(x / y))); },
  polydiv: async (a, n) => { const [q, r] = polyDivide(toArray(m(a[0])), toArray(m(a[1]))); return n >= 2 ? [rowVec(q), rowVec(r)] : [rowVec(q)]; },
  ordeig: async (a) => { const e = schurEigFn(m(a[0])); return ret(finishComplex(e.re.length, 1, Float64Array.from(e.re), Float64Array.from(e.im))); },
  betaincinv: async (a) => { const p = asScalar(a[0]), aa = asScalar(a[1]), bb = asScalar(a[2]); return ret(scalar(invMonotone((x) => betainc(x, aa, bb), p, 0, 1))); },
  gammaincinv: async (a) => { const p = asScalar(a[0]), aa = asScalar(a[1]); return ret(scalar(invMonotone((x) => gammainc(x, aa), p, 0, aa + 10 * Math.sqrt(aa) + 20))); },
  rosser: async () => ret(rosserMat()),
  rng: async () => [],
  convn: async (a) => { const A = m(a[0]), B = m(a[1]); if ((A.rows === 1 || A.cols === 1) && (B.rows === 1 || B.cols === 1)) { const u = toArray(A), v = toArray(B); const w = new Array(Math.max(0, u.length + v.length - 1)).fill(0); for (let i = 0; i < u.length; i++) for (let j = 0; j < v.length; j++) w[i + j] += u[i] * v[j]; return ret(A.cols === 1 ? colVec(w) : rowVec(w)); } return ret(conv2Shape(A, B, 'full')); },
  optimset: async (a) => { const fields = new Map<string, Value[]>(); const start = a.length && isStruct(a[0]) ? 1 : 0; if (start) for (const [k, v] of (a[0] as StructV).fields) fields.set(k, v.slice()); for (let i = start; i + 1 < a.length; i += 2) fields.set(asString(a[i]), [a[i + 1]]); return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV); },
  optimget: async (a) => { const S = a[0]; if (!isStruct(S)) throw new MatError('optimget: first argument must be an options struct'); const v = S.fields.get(asString(a[1])); return ret(v && v.length ? v[0] : zeros(0, 0)); },
  quad2d: async (a, _n, env) => BUILTINS.integral2(a, 1, env),

  // sparse / iterative aliases
  lsqr: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  minres: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  tfqmr: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  bicgstabl: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  symmlq: async (a) => ret(mldivide(m(a[0]), m(a[1]))),
  spfun: async (a, _n, env) => { const f = handle(a[0], 'spfun'); const S = asSparse(a[1]); const out = new Float64Array(S.values.length); for (let i = 0; i < S.values.length; i++) { const r = await env.callHandle(f, [scalar(S.values[i])], 1); out[i] = asScalar(r[0]); } return ret({ kind: 'sparse', rows: S.rows, cols: S.cols, colptr: S.colptr.slice(), rowind: S.rowind.slice(), values: out } as Sparse); },
  sprank: async (a) => ret(scalar(rankOf(sparseToDense(asSparse(a[0]))))),
  colperm: async (a) => { const S = asSparse(a[0]); const cnt = Array.from({ length: S.cols }, (_, j) => ({ j, n: S.colptr[j + 1] - S.colptr[j] })); cnt.sort((x, y) => x.n - y.n); return ret(rowVec(cnt.map((c) => c.j + 1))); },

  // ── Numerical methods (real-valued) ──
  trapz: async (a) => {
    let x: number[], y: number[];
    if (a.length >= 2) { x = toArray(m(a[0])); y = toArray(m(a[1])); } else { y = toArray(m(a[0])); x = y.map((_, i) => i + 1); }
    let s = 0; for (let i = 1; i < y.length; i++) s += (x[i] - x[i - 1]) * (y[i] + y[i - 1]) / 2;
    return ret(scalar(s));
  },
  gradient: async (a) => {
    const y = toArray(m(a[0])); const h = a.length >= 2 ? asScalar(a[1]) : 1; const n = y.length; const g: number[] = [];
    for (let i = 0; i < n; i++) { if (i === 0) g.push((y[1] - y[0]) / h); else if (i === n - 1) g.push((y[n - 1] - y[n - 2]) / h); else g.push((y[i + 1] - y[i - 1]) / (2 * h)); }
    return ret(m(a[0]).cols === 1 ? colVec(g) : rowVec(g));
  },
  integral: async (a, _n, env) => {
    const f = handle(a[0], 'integral'); const lo = asScalar(a[1]), hi = asScalar(a[2]);
    const F = async (x: number) => callScalar(env, f, x);
    const simpson = async (x0: number, x2: number, f0: number, f1: number, f2: number, whole: number, depth: number): Promise<number> => {
      const x1 = (x0 + x2) / 2; const xa = (x0 + x1) / 2, xb = (x1 + x2) / 2;
      const fa = await F(xa), fb = await F(xb);
      const left = (x1 - x0) / 6 * (f0 + 4 * fa + f1), right = (x2 - x1) / 6 * (f1 + 4 * fb + f2);
      if (depth <= 0 || Math.abs(left + right - whole) < 1e-10) return left + right + (left + right - whole) / 15;
      return (await simpson(x0, x1, f0, fa, f1, left, depth - 1)) + (await simpson(x1, x2, f1, fb, f2, right, depth - 1));
    };
    const f0 = await F(lo), f2 = await F(hi), fm = await F((lo + hi) / 2);
    const whole = (hi - lo) / 6 * (f0 + 4 * fm + f2);
    return ret(scalar(await simpson(lo, hi, f0, fm, f2, whole, 50)));
  },
  fzero: async (a, _n, env) => {
    const f = handle(a[0], 'fzero'); const F = (x: number) => callScalar(env, f, x);
    let alo: number, ahi: number;
    const x0 = m(a[1]);
    if (numel(x0) >= 2) { alo = x0.data[0]; ahi = x0.data[1]; }
    else { const x = x0.data[0]; const f0 = await F(x); if (f0 === 0) return ret(scalar(x)); let dx = Math.abs(x) * 0.02 || 0.02; alo = x; ahi = x; let found = false; for (let i = 0; i < 60; i++) { dx *= 1.6; if (await F(x - dx) * f0 < 0) { alo = x - dx; ahi = x; found = true; break; } if (await F(x + dx) * f0 < 0) { alo = x; ahi = x + dx; found = true; break; } } if (!found) throw new MatError('fzero: could not bracket a sign change'); }
    let flo = await F(alo), fhi = await F(ahi);
    if (flo * fhi > 0) throw new MatError('fzero: function values at interval endpoints must differ in sign');
    for (let i = 0; i < 200; i++) { const mid = (alo + ahi) / 2; const fm = await F(mid); if (Math.abs(fm) < 1e-14 || (ahi - alo) / 2 < 1e-14) return ret(scalar(mid)); if (flo * fm < 0) { ahi = mid; fhi = fm; } else { alo = mid; flo = fm; } }
    return ret(scalar((alo + ahi) / 2));
  },
  fminbnd: async (a, _n, env) => {
    const f = handle(a[0], 'fminbnd'); const F = (x: number) => callScalar(env, f, x);
    let lo = asScalar(a[1]), hi = asScalar(a[2]); const gr = (Math.sqrt(5) - 1) / 2;
    let x1 = hi - gr * (hi - lo), x2 = lo + gr * (hi - lo); let f1 = await F(x1), f2 = await F(x2);
    for (let i = 0; i < 200 && hi - lo > 1e-10; i++) { if (f1 < f2) { hi = x2; x2 = x1; f2 = f1; x1 = hi - gr * (hi - lo); f1 = await F(x1); } else { lo = x1; x1 = x2; f1 = f2; x2 = lo + gr * (hi - lo); f2 = await F(x2); } }
    return ret(scalar((lo + hi) / 2));
  },
  fminsearch: async (a, _n, env) => {
    const f = handle(a[0], 'fminsearch'); const x0 = toArray(m(a[1])); const n = x0.length;
    const F = async (v: number[]) => { const r = await env.callHandle(f, [colVec(v)], 1); return r.length && isMat(r[0]) ? asScalar(r[0]) : NaN; };
    const simplex: number[][] = [x0.slice()]; for (let i = 0; i < n; i++) { const p = x0.slice(); p[i] += (p[i] !== 0 ? 0.05 * p[i] : 0.00025); simplex.push(p); }
    let fv = await Promise.all(simplex.map(F));
    const add = (p: number[], q: number[], s: number) => p.map((v, i) => v + s * q[i]);
    const sub = (p: number[], q: number[]) => p.map((v, i) => v - q[i]);
    for (let iter = 0; iter < 200 * n; iter++) {
      const ord = fv.map((_, i) => i).sort((i, j) => fv[i] - fv[j]);
      const s2 = ord.map((i) => simplex[i]); const fv2 = ord.map((i) => fv[i]);
      for (let i = 0; i <= n; i++) { simplex[i] = s2[i]; fv[i] = fv2[i]; }
      if (Math.abs(fv[n] - fv[0]) < 1e-10) break;
      const cen = new Array(n).fill(0); for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) cen[j] += simplex[i][j] / n;
      const xr = add(cen, sub(cen, simplex[n]), 1); const fr = await F(xr);
      if (fr < fv[0]) { const xe = add(cen, sub(cen, simplex[n]), 2); const fe = await F(xe); if (fe < fr) { simplex[n] = xe; fv[n] = fe; } else { simplex[n] = xr; fv[n] = fr; } }
      else if (fr < fv[n - 1]) { simplex[n] = xr; fv[n] = fr; }
      else { const xc = add(cen, sub(simplex[n], cen), 0.5); const fc = await F(xc); if (fc < fv[n]) { simplex[n] = xc; fv[n] = fc; } else { for (let i = 1; i <= n; i++) { simplex[i] = add(simplex[0], sub(simplex[i], simplex[0]), 0.5); fv[i] = await F(simplex[i]); } } }
    }
    let bi = 0; for (let i = 1; i <= n; i++) if (fv[i] < fv[bi]) bi = i;
    return ret(m(a[1]).rows === 1 ? rowVec(simplex[bi]) : colVec(simplex[bi]));
  },
  interp1: async (a) => {
    const x = toArray(m(a[0])), v = toArray(m(a[1])), xq = m(a[2]); const method = a.length >= 4 ? asString(a[3]) : 'linear';
    const interp = (q: number) => {
      if (q <= x[0]) return method === 'nearest' ? v[0] : v[0] + (v[1] - v[0]) * (q - x[0]) / (x[1] - x[0]);
      let i = 0; while (i < x.length - 2 && q > x[i + 1]) i++;
      if (method === 'nearest') return Math.abs(q - x[i]) <= Math.abs(q - x[i + 1]) ? v[i] : v[i + 1];
      return v[i] + (v[i + 1] - v[i]) * (q - x[i]) / (x[i + 1] - x[i]);
    };
    return ret(map(xq, interp));
  },
  spline: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); if (a.length < 3) return ret(makePP(x, splineCoefs(x, y))); const xq = m(a[2]); return ret(map(xq, (q) => splineEval(x, y, q))); },
  roots: async (a) => { const { re, im } = durandKerner(toArray(m(a[0]))); return ret(finishComplex(re.length, 1, Float64Array.from(re), Float64Array.from(im))); },
  ode45: async (a, n, env) => odeSolve(a, n, env),
  ode78: async (a, n, env) => odeSolve(a, n, env),
  ode89: async (a, n, env) => odeSolve(a, n, env),
  ode113: async (a, n, env) => odeSolve(a, n, env),
  ode23: async (a, n, env) => odeSolveBS23(a, n, env),
  ode15s: async (a, n, env) => odeSolveNDF(a, n, env),
  ode23s: async (a, n, env) => odeSolveRos23(a, n, env),
  ode23t: async (a, n, env) => odeSolveNDF(a, n, env),
  ode23tb: async (a, n, env) => odeSolveRos23(a, n, env),
  cumtrapz: async (a) => {
    let x: number[], y: number[];
    if (a.length >= 2) { x = toArray(m(a[0])); y = toArray(m(a[1])); } else { y = toArray(m(a[0])); x = y.map((_, i) => i + 1); }
    const out = [0]; for (let i = 1; i < y.length; i++) out.push(out[i - 1] + (x[i] - x[i - 1]) * (y[i] + y[i - 1]) / 2);
    return ret(m(a[0]).cols === 1 && a.length < 2 ? colVec(out) : (m(a.length >= 2 ? a[1] : a[0]).cols === 1 ? colVec(out) : rowVec(out)));
  },
  del2: async (a) => {
    const U = m(a[0]);
    if (U.rows === 1 || U.cols === 1) { const v = toArray(U); const n = v.length; const o = new Array(n).fill(0); for (let i = 1; i < n - 1; i++) o[i] = (v[i + 1] - 2 * v[i] + v[i - 1]) / 4 * 2; for (let i = 1; i < n - 1; i++) o[i] = (v[i - 1] - 2 * v[i] + v[i + 1]) / 4; o[0] = o[1]; o[n - 1] = o[n - 2]; return ret(U.cols === 1 ? colVec(o) : rowVec(o)); }
    const R = U.rows, C = U.cols; const o = zeros(R, C); const at = (r: number, c: number) => U.data[r + c * R];
    for (let r = 1; r < R - 1; r++) for (let c = 1; c < C - 1; c++) o.data[r + c * R] = (at(r - 1, c) + at(r + 1, c) + at(r, c - 1) + at(r, c + 1) - 4 * at(r, c)) / 4;
    for (let r = 0; r < R; r++) { o.data[r + 0 * R] = o.data[r + 1 * R]; o.data[r + (C - 1) * R] = o.data[r + (C - 2) * R]; }
    for (let c = 0; c < C; c++) { o.data[0 + c * R] = o.data[1 + c * R]; o.data[(R - 1) + c * R] = o.data[(R - 2) + c * R]; }
    return ret(o);
  },
  deconv: async (a, n) => {
    const b = toArray(m(a[0])), aa = toArray(m(a[1]));
    const nq = b.length - aa.length + 1;
    if (nq <= 0) return n >= 2 ? [rowVec([0]), m(a[0])] : [rowVec([0])];
    const r = b.slice(); const q = new Array(nq).fill(0);
    for (let i = 0; i < nq; i++) { q[i] = r[i] / aa[0]; for (let j = 0; j < aa.length; j++) r[i + j] -= q[i] * aa[j]; }
    return n >= 2 ? [rowVec(q), rowVec(r)] : [rowVec(q)];
  },
  interp2: async (a) => {
    // interp2(V,Xq,Yq) or interp2(X,Y,V,Xq,Yq)
    let V: Mat, xq: Mat, yq: Mat, xv: number[], yv: number[];
    if (a.length >= 5) { const X = m(a[0]), Y = m(a[1]); V = m(a[2]); xq = m(a[3]); yq = m(a[4]); xv = []; for (let c = 0; c < X.cols; c++) xv.push(X.data[0 + c * X.rows]); yv = []; for (let r = 0; r < Y.rows; r++) yv.push(Y.data[r]); }
    else { V = m(a[0]); xq = m(a[1]); yq = m(a[2]); xv = Array.from({ length: V.cols }, (_, i) => i + 1); yv = Array.from({ length: V.rows }, (_, i) => i + 1); }
    const bilerp = (X: number, Y: number) => {
      let i = 0; while (i < xv.length - 2 && X > xv[i + 1]) i++; let j = 0; while (j < yv.length - 2 && Y > yv[j + 1]) j++;
      const tx = (X - xv[i]) / (xv[i + 1] - xv[i]), ty = (Y - yv[j]) / (yv[j + 1] - yv[j]);
      const v00 = V.data[j + i * V.rows], v01 = V.data[j + (i + 1) * V.rows], v10 = V.data[(j + 1) + i * V.rows], v11 = V.data[(j + 1) + (i + 1) * V.rows];
      return v00 * (1 - tx) * (1 - ty) + v01 * tx * (1 - ty) + v10 * (1 - tx) * ty + v11 * tx * ty;
    };
    const out = zeros(xq.rows, xq.cols); for (let k = 0; k < out.data.length; k++) out.data[k] = bilerp(xq.data[k], yq.data[k]); return ret(out);
  },
  delaunay: async (a) => {
    const xs = toArray(m(a[0])), ys = toArray(m(a[1]));
    const tris = delaunayTri(xs, ys);
    const T = zeros(tris.length, 3);
    for (let i = 0; i < tris.length; i++) for (let j = 0; j < 3; j++) T.data[i + j * tris.length] = tris[i][j] + 1;
    return ret(T);
  },
  griddata: async (a) => {
    // griddata(x,y,v,xq,yq[,method]) — scattered linear (default) or nearest interpolation.
    const xs = toArray(m(a[0])), ys = toArray(m(a[1])), vs = toArray(m(a[2]));
    const XQ = m(a[3]), YQ = m(a[4]);
    const method = a.length >= 6 && isMat(a[5]) && (a[5] as Mat).isChar ? asString(a[5]).toLowerCase() : 'linear';
    const out = zeros(XQ.rows, XQ.cols);
    if (method === 'nearest') {
      for (let k = 0; k < out.data.length; k++) { const qx = XQ.data[k], qy = YQ.data[k]; let best = 0, bd = Infinity; for (let i = 0; i < xs.length; i++) { const d = (xs[i] - qx) ** 2 + (ys[i] - qy) ** 2; if (d < bd) { bd = d; best = i; } } out.data[k] = vs[best]; }
      return ret(out);
    }
    const tris = delaunayTri(xs, ys);
    for (let k = 0; k < out.data.length; k++) {
      const qx = XQ.data[k], qy = YQ.data[k]; let val = NaN;
      for (const t of tris) {
        const [l1, l2, l3] = bary(xs[t[0]], ys[t[0]], xs[t[1]], ys[t[1]], xs[t[2]], ys[t[2]], qx, qy);
        if (l1 >= -1e-9 && l2 >= -1e-9 && l3 >= -1e-9) { val = l1 * vs[t[0]] + l2 * vs[t[1]] + l3 * vs[t[2]]; break; }
      }
      out.data[k] = val;
    }
    return ret(out);
  },
  boundary: async (a, n) => {
    const xs = toArray(m(a[0])), ys = toArray(m(a[1])); const k = convHull2D(xs, ys);
    if (n >= 2) { const px = k.map((i) => xs[i - 1]), py = k.map((i) => ys[i - 1]); let s = 0; for (let i = 0; i < px.length; i++) { const j = (i + 1) % px.length; s += px[i] * py[j] - px[j] * py[i]; } return [colVec(k), scalar(Math.abs(s) / 2)]; }
    return ret(colVec(k));
  },
  voronoi: async (a, n, env) => {
    const xs = toArray(m(a[0])), ys = toArray(m(a[1])); const tris = delaunayTri(xs, ys);
    const cc = tris.map((t) => circumcenter(xs[t[0]], ys[t[0]], xs[t[1]], ys[t[1]], xs[t[2]], ys[t[2]]));
    const edgeMap = new Map<string, number[]>();
    tris.forEach((t, ti) => { for (const [u, v] of [[t[0], t[1]], [t[1], t[2]], [t[2], t[0]]]) { const key = u < v ? `${u}_${v}` : `${v}_${u}`; (edgeMap.get(key) ?? edgeMap.set(key, []).get(key)!).push(ti); } });
    const segs: [number, number, number, number][] = [];
    for (const tl of edgeMap.values()) if (tl.length === 2) segs.push([cc[tl[0]][0], cc[tl[0]][1], cc[tl[1]][0], cc[tl[1]][1]]);
    if (n >= 1) { const VX = zeros(2, segs.length), VY = zeros(2, segs.length); segs.forEach((s, j) => { VX.data[0 + j * 2] = s[0]; VX.data[1 + j * 2] = s[2]; VY.data[0 + j * 2] = s[1]; VY.data[1 + j * 2] = s[3]; }); return [VX, VY]; }
    const px: number[] = [], py: number[] = []; for (const s of segs) { px.push(s[0], s[2], NaN); py.push(s[1], s[3], NaN); }
    env.graphics.addSeries(px, py); return [];
  },
  convhulln: async (a, n) => {
    const P = m(a[0]); const pts = matRows(P); const facets = convhullnd(pts); const d = pts[0]?.length ?? 0;
    const K = zeros(facets.length, d);
    facets.forEach((f, i) => f.verts.forEach((v, j) => { K.data[i + j * facets.length] = v + 1; }));
    if (n >= 2) { // hull volume: sum over facet simplices from an interior point
      const c = pts[0].map((_, j) => pts.reduce((s, p) => s + p[j], 0) / pts.length);
      let vol = 0; const fac = factorialN(d);
      for (const f of facets) { const rows = f.verts.map((v) => pts[v].map((x, j) => x - c[j])); vol += Math.abs(detRows(rows)) / fac; }
      return [K, scalar(vol)];
    }
    return ret(K);
  },
  delaunayn: async (a) => {
    const P = m(a[0]); const pts = matRows(P); const simplices = delaunaynd(pts); const d = pts[0]?.length ?? 0;
    const T = zeros(simplices.length, d + 1);
    simplices.forEach((s, i) => s.forEach((v, j) => { T.data[i + j * simplices.length] = v + 1; }));
    return ret(T);
  },
  voronoin: async (a, n) => {
    const P = m(a[0]); const pts = matRows(P); const d = pts[0]?.length ?? 0; const simplices = delaunaynd(pts);
    // Voronoi vertices = circumcenters of the Delaunay simplices; index 1 is the point at infinity.
    const cc = simplices.map((s) => circumcenterND(s.map((v) => pts[v])));
    const V = zeros(cc.length + 1, d); for (let j = 0; j < d; j++) V.data[0 + j * (cc.length + 1)] = Infinity;
    cc.forEach((c, i) => c.forEach((x, j) => { V.data[(i + 1) + j * (cc.length + 1)] = x; }));
    // C{i}: circumcenters of simplices incident to point i (+ the ∞ vertex for hull points).
    const onHull = new Set<number>(); for (const f of convhullnd(pts)) f.verts.forEach((v) => onHull.add(v));
    const cells: Value[] = [];
    for (let i = 0; i < pts.length; i++) {
      const inc: number[] = []; simplices.forEach((s, si) => { if (s.includes(i)) inc.push(si + 2); });
      const list = onHull.has(i) ? [1, ...inc] : inc;
      cells.push(rowVec(list));
    }
    return n >= 2 ? [V, makeCell(pts.length, 1, cells)] : [V];
  },
  tsearchn: async (a, n) => {
    // tsearchn(P,T,PQ): index (into T) of the simplex enclosing each query point, + barycentric coords.
    const pts = matRows(m(a[0])); const T = matRows(m(a[1])).map((r) => r.map((v) => Math.round(v) - 1)); const Q = matRows(m(a[2]));
    const d = pts[0].length; const idx = zeros(Q.length, 1); const BC = zeros(Q.length, d + 1);
    Q.forEach((q, qi) => {
      let found = NaN, bc: number[] | null = null;
      for (let ti = 0; ti < T.length; ti++) { const w = barycentricND(T[ti].map((v) => pts[v]), q); if (w.every((x) => x >= -1e-9)) { found = ti + 1; bc = w; break; } }
      idx.data[qi] = found;
      if (bc) bc.forEach((x, j) => { BC.data[qi + j * Q.length] = x; });
      else for (let j = 0; j <= d; j++) BC.data[qi + j * Q.length] = NaN;
    });
    return n >= 2 ? [idx, BC] : [idx];
  },
  griddatan: async (a) => {
    // griddatan(P,v,PQ[,method]): scattered N-D interpolation (linear default, or nearest).
    const pts = matRows(m(a[0])); const vs = toArray(m(a[1])); const Q = matRows(m(a[2]));
    const method = a.length >= 4 && isMat(a[3]) && (a[3] as Mat).isChar ? asString(a[3]).toLowerCase() : 'linear';
    const out = zeros(m(a[2]).rows, 1);
    if (method === 'nearest') {
      Q.forEach((q, qi) => { let best = 0, bd = Infinity; pts.forEach((p, i) => { const dd = p.reduce((s, x, j) => s + (x - q[j]) ** 2, 0); if (dd < bd) { bd = dd; best = i; } }); out.data[qi] = vs[best]; });
      return ret(out);
    }
    const T = delaunaynd(pts);
    Q.forEach((q, qi) => {
      let val = NaN;
      for (const s of T) { const w = barycentricND(s.map((v) => pts[v]), q); if (w.every((x) => x >= -1e-9)) { val = w.reduce((acc, x, j) => acc + x * vs[s[j]], 0); break; } }
      out.data[qi] = val;
    });
    return ret(out);
  },

  // ── Graph / network ──
  graph: async (a) => ret(buildGraph(false, a)),
  digraph: async (a) => ret(buildGraph(true, a)),
  numnodes: async (a) => ret(scalar(gArg(a[0]).n)),
  numedges: async (a) => ret(scalar(gArg(a[0]).edges.length)),
  addnode: async (a) => { const g = gArg(a[0]); const names = g.names ? g.names.slice() : undefined; let add = 0; if (isMat(a[1]) && !(a[1] as Mat).isChar) add = Math.round(asScalar(a[1])); else { const nn = nodeNameList(a[1]); add = nn.length; if (names) names.push(...nn); } return ret(makeGraph(g.directed, g.n + add, g.edges.map((e) => ({ ...e })), names)); },
  rmnode: async (a) => {
    const g = gArg(a[0]); const rm = new Set(nodeIds(g, a[1])); const keep: number[] = []; for (let i = 0; i < g.n; i++) if (!rm.has(i)) keep.push(i);
    const remap = new Map(keep.map((old, ni) => [old, ni]));
    const edges = g.edges.filter((e) => !rm.has(e.s) && !rm.has(e.t)).map((e) => ({ s: remap.get(e.s)!, t: remap.get(e.t)!, w: e.w }));
    return ret(makeGraph(g.directed, keep.length, edges, g.names ? keep.map((i) => g.names![i]) : undefined));
  },
  addedge: async (a) => { const g = gArg(a[0]); const s = nodeIds(g, a[1]), t = nodeIds(g, a[2]); const wv = a.length >= 4 ? toArray(m(a[3])) : null; const ne = s.map((si, i) => ({ s: si, t: t[i], w: wv ? (wv.length === 1 ? wv[0] : wv[i]) : 1 })); const n = Math.max(g.n, ...s, ...t) + (s.length ? 0 : 0); return ret(makeGraph(g.directed, Math.max(g.n, ...s.map((x) => x + 1), ...t.map((x) => x + 1)), [...g.edges, ...ne], g.names)); void n; },
  rmedge: async (a) => { const g = gArg(a[0]); const s = nodeIds(g, a[1]), t = nodeIds(g, a[2]); const drop = new Set(s.map((si, i) => `${Math.min(si, t[i])}_${Math.max(si, t[i])}`)); const edges = g.edges.filter((e) => !drop.has(`${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`)); return ret(makeGraph(g.directed, g.n, edges, g.names)); },
  neighbors: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const ns = [...new Set(adjList(g, 'out')[i].map((x) => x.to))].sort((x, y) => x - y); return ret(colVec(ns.map((x) => x + 1))); },
  successors: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const ns = [...new Set(adjList(g, 'out')[i].map((x) => x.to))].sort((x, y) => x - y); return ret(colVec(ns.map((x) => x + 1))); },
  predecessors: async (a) => { const g = gArg(a[0]); const i = nodeIds(g, a[1])[0]; const ns = [...new Set(adjList(g, 'in')[i].map((x) => x.to))].sort((x, y) => x - y); return ret(colVec(ns.map((x) => x + 1))); },
  degree: async (a) => { const g = gArg(a[0]); const adj = adjList(g, 'all'); const sel = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); return ret(colVec(sel.map((i) => adj[i].length))); },
  outdegree: async (a) => { const g = gArg(a[0]); const adj = adjList(g, 'out'); const sel = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); return ret(colVec(sel.map((i) => adj[i].length))); },
  indegree: async (a) => { const g = gArg(a[0]); const adj = adjList(g, 'in'); const sel = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); return ret(colVec(sel.map((i) => adj[i].length))); },
  findnode: async (a) => { const g = gArg(a[0]); return ret(colVec(nodeIds(g, a[1]).map((i) => i + 1))); },
  findedge: async (a, n) => {
    const g = gArg(a[0]);
    if (a.length === 1) { const m2 = g.edges.length; const S = zeros(m2, 1), T = zeros(m2, 1); g.edges.forEach((e, i) => { S.data[i] = e.s + 1; T.data[i] = e.t + 1; }); return n >= 2 ? [S, T] : [S]; }
    const s = nodeIds(g, a[1]), t = nodeIds(g, a[2]); const out = s.map((si, i) => { const ti = t[i]; const idx = g.edges.findIndex((e) => (e.s === si && e.t === ti) || (!g.directed && e.s === ti && e.t === si)); return idx + 1; }); return ret(colVec(out));
  },
  adjacency: async (a) => ret(denseToSparse(adjacencyMat(gArg(a[0])))),
  incidence: async (a) => { const g = gArg(a[0]); const I = zeros(g.n, g.edges.length); g.edges.forEach((e, j) => { I.data[e.s + j * g.n] += -1; I.data[e.t + j * g.n] += 1; }); return ret(denseToSparse(I)); },
  laplacian: async (a) => { const g = gArg(a[0]); const A = adjacencyMat(g); const L = zeros(g.n, g.n); for (let i = 0; i < g.n; i++) { let d = 0; for (let j = 0; j < g.n; j++) { d += A.data[i + j * g.n]; L.data[i + j * g.n] = -A.data[i + j * g.n]; } L.data[i + i * g.n] = d - A.data[i + i * g.n]; } return ret(denseToSparse(L)); },
  shortestpath: async (a, n) => {
    const g = gArg(a[0]); const src = nodeIds(g, a[1])[0], dst = nodeIds(g, a[2])[0]; const { dist, prev } = dijkstra(g, src);
    if (!isFinite(dist[dst])) return n >= 2 ? [zeros(1, 0), scalar(Infinity)] : [zeros(1, 0)];
    const path: number[] = []; for (let u = dst; u >= 0; u = prev[u]) { path.unshift(u + 1); if (u === src) break; }
    return n >= 2 ? [rowVec(path), scalar(dist[dst])] : [rowVec(path)];
  },
  distances: async (a) => {
    const g = gArg(a[0]); const srcs = a.length >= 2 ? nodeIds(g, a[1]) : Array.from({ length: g.n }, (_, i) => i); const dsts = a.length >= 3 ? nodeIds(g, a[2]) : Array.from({ length: g.n }, (_, i) => i);
    const D = zeros(srcs.length, dsts.length); srcs.forEach((s, i) => { const { dist } = dijkstra(g, s); dsts.forEach((t, j) => { D.data[i + j * srcs.length] = dist[t]; }); }); return ret(D);
  },
  bfsearch: async (a) => ret(colVec(bfsOrder(gArg(a[0]), nodeIds(gArg(a[0]), a[1])[0]).map((x) => x + 1))),
  dfsearch: async (a) => ret(colVec(dfsOrder(gArg(a[0]), nodeIds(gArg(a[0]), a[1])[0]).map((x) => x + 1))),
  conncomp: async (a) => ret(rowVec(connComp(gArg(a[0])))),
  toposort: async (a) => { const o = topoSort(gArg(a[0])); if (!o) throw new MatError('toposort: graph is not acyclic'); return ret(rowVec(o.map((x) => x + 1))); },
  isdag: async (a) => ret(bool(gArg(a[0]).directed && topoSort(gArg(a[0])) !== null)),
  ismultigraph: async (a) => { const g = gArg(a[0]); const seen = new Set<string>(); for (const e of g.edges) { const k = g.directed ? `${e.s}_${e.t}` : `${Math.min(e.s, e.t)}_${Math.max(e.s, e.t)}`; if (seen.has(k)) return ret(bool(true)); seen.add(k); } return ret(bool(false)); },
  minspantree: async (a) => { const g = gArg(a[0]); const tree = primMST(g); return ret(makeGraph(false, g.n, tree, g.names)); },
  maxflow: async (a) => { const g = gArg(a[0]); return ret(scalar(maxFlow(g, nodeIds(g, a[1])[0], nodeIds(g, a[2])[0]))); },
  subgraph: async (a) => {
    const g = gArg(a[0]); const keep = nodeIds(g, a[1]); const remap = new Map(keep.map((old, ni) => [old, ni]));
    const edges = g.edges.filter((e) => remap.has(e.s) && remap.has(e.t)).map((e) => ({ s: remap.get(e.s)!, t: remap.get(e.t)!, w: e.w }));
    return ret(makeGraph(g.directed, keep.length, edges, g.names ? keep.map((i) => g.names![i]) : undefined));
  },
  reordernodes: async (a) => {
    const g = gArg(a[0]); const order = nodeIds(g, a[1]); const pos = new Map(order.map((old, ni) => [old, ni]));
    const edges = g.edges.map((e) => ({ s: pos.get(e.s)!, t: pos.get(e.t)!, w: e.w }));
    return ret(makeGraph(g.directed, g.n, edges, g.names ? order.map((i) => g.names![i]) : undefined));
  },
  centrality: async (a) => {
    const g = gArg(a[0]); const type = (a.length >= 2 ? asString(a[1]) : 'degree').toLowerCase();
    if (type === 'degree') return ret(colVec(adjList(g, 'all').map((l) => l.length)));
    if (type === 'outdegree') return ret(colVec(adjList(g, 'out').map((l) => l.length)));
    if (type === 'indegree') return ret(colVec(adjList(g, 'in').map((l) => l.length)));
    if (type === 'closeness') return ret(colVec(Array.from({ length: g.n }, (_, i) => { const { dist } = dijkstra(g, i); const reach = dist.filter((d) => isFinite(d) && d > 0); const sum = reach.reduce((s, d) => s + d, 0); return sum > 0 ? reach.length / sum * (reach.length / Math.max(1, g.n - 1)) : 0; })));
    if (type === 'betweenness') return ret(colVec(betweenness(g)));
    if (type === 'pagerank') return ret(colVec(pagerank(g)));
    throw new MatError(`centrality: unsupported type '${type}'`);
  },
  interp3: async (a) => {
    // interp3(V,Xq,Yq,Zq) or interp3(X,Y,Z,V,Xq,Yq,Zq) — trilinear on a regular grid.
    let V: Mat, Xq: Mat, Yq: Mat, Zq: Mat, xv: number[], yv: number[], zv: number[];
    const gridVec = (M: Mat, axis: 1 | 2 | 3, d: number[]): number[] => {
      if (M.nd || M.rows > 1 && M.cols > 1) { const dd = ndSize(M); const r = dd[0], rc = r * (dd[1] ?? 1); if (axis === 1) return Array.from({ length: dd[0] }, (_, i) => M.data[i]); if (axis === 2) return Array.from({ length: dd[1] ?? 1 }, (_, j) => M.data[j * r]); return Array.from({ length: dd[2] ?? 1 }, (_, k) => M.data[k * rc]); }
      return toArray(M); void d;
    };
    if (a.length >= 7) { const X = m(a[0]), Y = m(a[1]), Z = m(a[2]); V = m(a[3]); Xq = m(a[4]); Yq = m(a[5]); Zq = m(a[6]); const d = ndSize(V); xv = gridVec(X, 2, d); yv = gridVec(Y, 1, d); zv = gridVec(Z, 3, d); }
    else { V = m(a[0]); Xq = m(a[1]); Yq = m(a[2]); Zq = m(a[3]); const d = ndSize(V); xv = Array.from({ length: d[1] ?? 1 }, (_, i) => i + 1); yv = Array.from({ length: d[0] }, (_, i) => i + 1); zv = Array.from({ length: d[2] ?? 1 }, (_, i) => i + 1); }
    const d = ndSize(V); const d0 = d[0], d1 = d[1] ?? 1;
    const at = (i: number, j: number, k: number) => V.data[i + j * d0 + k * d0 * d1];
    const loc = (g: number[], q: number): [number, number] => { let i = 0; while (i < g.length - 2 && q > g[i + 1]) i++; const t = (g[i + 1] === g[i]) ? 0 : (q - g[i]) / (g[i + 1] - g[i]); return [i, t]; };
    const out = makeND(ndSize(Xq), new Float64Array(numel(Xq)), { isChar: false });
    for (let p = 0; p < numel(Xq); p++) {
      const [i, ty] = loc(yv, Yq.data[p]), [j, tx] = loc(xv, Xq.data[p]), [k, tz] = loc(zv, Zq.data[p]);
      const c000 = at(i, j, k), c100 = at(i + 1, j, k), c010 = at(i, j + 1, k), c110 = at(i + 1, j + 1, k);
      const c001 = at(i, j, k + 1), c101 = at(i + 1, j, k + 1), c011 = at(i, j + 1, k + 1), c111 = at(i + 1, j + 1, k + 1);
      const c00 = c000 * (1 - ty) + c100 * ty, c10 = c010 * (1 - ty) + c110 * ty, c01 = c001 * (1 - ty) + c101 * ty, c11 = c011 * (1 - ty) + c111 * ty;
      const c0 = c00 * (1 - tx) + c10 * tx, c1 = c01 * (1 - tx) + c11 * tx;
      out.data[p] = c0 * (1 - tz) + c1 * tz;
    }
    if (Xq.nd) out.nd = Xq.nd.slice();
    return ret(out);
  },
  interpn: async (a, n, env) => {
    // Simple form interpn(V, q1, q2, ...): the number of queries gives the dimensionality.
    const V = m(a[0]); const nq = a.length - 1;
    if (nq === 1) return BUILTINS.interp1([rowVec(Array.from({ length: numel(V) }, (_, i) => i + 1)), V, a[1]], n, env);
    if (nq === 2) return BUILTINS.interp2(a, n, env);
    if (nq === 3) return BUILTINS.interp3(a, n, env);
    throw new MatError('interpn: only 1-D, 2-D and 3-D gridded interpolation are supported');
  },
  pchip: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); const d = pchipSlopes(x, y); if (a.length < 3) return ret(makePP(x, hermiteCoefs(x, y, d))); return ret(map(m(a[2]), (q) => hermiteEval(x, y, d, q))); },
  makima: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); const d = akimaSlopes(x, y); if (a.length < 3) return ret(makePP(x, hermiteCoefs(x, y, d))); return ret(map(m(a[2]), (q) => hermiteEval(x, y, d, q))); },
  mkpp: async (a) => { const breaks = toArray(m(a[0])); const coefs = m(a[1]); return ret(makePP(breaks, coefs)); },
  unmkpp: async (a, n) => { const { breaks, coefs, L, k } = readPP(a[0]); const out: Value[] = [rowVec(breaks), coefs, scalar(L), scalar(k), scalar(1)]; return out.slice(0, Math.max(1, n)); },
  ppval: async (a) => { const pp = readPP(a[0]); const xq = m(a[1]); return ret(map(xq, (q) => ppEval(pp, q))); },
  interpft: async (a) => {
    // FFT resample x to length ny: insert zero high-frequencies, inverse transform.
    const x = toArray(m(a[0])); const ny = Math.round(asScalar(a[1])); const nx = x.length;
    const F = fftVec(x, new Array(nx).fill(0), -1);
    const Re = new Array(ny).fill(0), Im = new Array(ny).fill(0);
    const half = Math.floor(nx / 2);
    for (let k = 0; k <= half; k++) { Re[k] = F.re[k]; Im[k] = F.im[k]; }
    for (let k = 1; k < nx - half; k++) { Re[ny - k] = F.re[nx - k]; Im[ny - k] = F.im[nx - k]; }
    const inv = fftVec(Re, Im, 1);          // unscaled inverse
    const res = inv.re.map((v) => v / nx);  // = (inv/ny)*(ny/nx)
    return ret(m(a[0]).cols === 1 ? colVec(res) : rowVec(res));
  },
  integral2: async (a, _n, env) => {
    const f = handle(a[0], 'integral2'); const ax = asScalar(a[1]), bx = asScalar(a[2]), ay = asScalar(a[3]), by = asScalar(a[4]);
    const F = async (x: number, y: number) => { const r = await env.callHandle(f, [scalar(x), scalar(y)], 1); return isMat(r[0]) ? asScalar(r[0]) : NaN; };
    return ret(scalar(await simpson2(F, ax, bx, ay, by, 48)));
  },
  integral3: async (a, _n, env) => {
    const f = handle(a[0], 'integral3'); const v = a.slice(1).map((x) => asScalar(x));
    const F = async (x: number, y: number, z: number) => { const r = await env.callHandle(f, [scalar(x), scalar(y), scalar(z)], 1); return isMat(r[0]) ? asScalar(r[0]) : NaN; };
    return ret(scalar(await simpson3(F, v[0], v[1], v[2], v[3], v[4], v[5], 16)));
  },

  // ── supporting array constructors ──
  logspace: async (a) => { const lo = asScalar(a[0]), hi = asScalar(a[1]); const k = a.length >= 3 ? Math.round(asScalar(a[2])) : 50; const out: number[] = []; for (let i = 0; i < k; i++) out.push(Math.pow(10, lo + (hi - lo) * i / (k - 1))); return ret(rowVec(out)); },
  meshgrid: async (a, n) => {
    const x = toArray(m(a[0])); const y = a.length >= 2 ? toArray(m(a[1])) : x;
    const X = zeros(y.length, x.length), Y = zeros(y.length, x.length);
    for (let r = 0; r < y.length; r++) for (let c = 0; c < x.length; c++) { X.data[r + c * y.length] = x[c]; Y.data[r + c * y.length] = y[r]; }
    return n >= 2 ? [X, Y] : [X];
  },
  randn: async (a) => { const d = dimsN(a); const data = new Float64Array(d.reduce((p, x) => p * x, 1)); for (let i = 0; i < data.length; i++) { const u = Math.random() || 1e-12, w = Math.random(); data[i] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * w); } return ret(makeND(d, data)); },
  randi: async (a) => { const hi = Math.round(asScalar(a[0])); const r = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const c = a.length >= 3 ? Math.round(asScalar(a[2])) : r; const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) o.data[i] = 1 + Math.floor(Math.random() * hi); return ret(o); },
  nnz: async (a) => ret(scalar(isSparse(a[0]) ? a[0].values.length : toArray(m(a[0])).filter((x) => x !== 0).length)),
  // ── array rearrangement ──
  blkdiag: async (a) => {
    const ps = a.map((v) => m(v)); const R = ps.reduce((s, p) => s + p.rows, 0), C = ps.reduce((s, p) => s + p.cols, 0);
    const o = zeros(R, C); let ro = 0, co = 0;
    for (const p of ps) { for (let c = 0; c < p.cols; c++) for (let r = 0; r < p.rows; r++) o.data[(ro + r) + (co + c) * R] = p.data[r + c * p.rows]; ro += p.rows; co += p.cols; }
    return ret(o);
  },
  ndgrid: async (a, n) => {
    const x = toArray(m(a[0])); const y = a.length >= 2 ? toArray(m(a[1])) : x;
    const X = zeros(x.length, y.length), Y = zeros(x.length, y.length);
    for (let r = 0; r < x.length; r++) for (let c = 0; c < y.length; c++) { X.data[r + c * x.length] = x[r]; Y.data[r + c * x.length] = y[c]; }
    return n >= 2 ? [X, Y] : [X];
  },
  permute: async (a) => ret(permuteND(m(a[0]), toArray(m(a[1])).map((x) => Math.round(x)))),
  ipermute: async (a) => { const ord = toArray(m(a[1])).map((x) => Math.round(x)); const inv = new Array(ord.length); ord.forEach((p, i) => { inv[p - 1] = i + 1; }); return ret(permuteND(m(a[0]), inv)); },
  shiftdim: async (a) => { const A = m(a[0]); const n = a.length >= 2 ? Math.round(asScalar(a[1])) : (A.rows === 1 ? 1 : 0); return ret(n % 2 !== 0 ? transpose(A) : A); },
  rot90: async (a) => { const A = m(a[0]); const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; return ret(rot90n(A, k)); },
  circshift: async (a) => {
    const A = m(a[0]); const k = m(a[1]); const isVec = A.rows === 1 || A.cols === 1;
    let sr = 0, sc = 0;
    if (numel(k) >= 2) { sr = Math.round(k.data[0]); sc = Math.round(k.data[1]); }
    else if (isVec && A.rows === 1) sc = Math.round(k.data[0]); else sr = Math.round(k.data[0]);
    const o = zeros(A.rows, A.cols); o.isChar = A.isChar; const im = A.idata ? new Float64Array(A.rows * A.cols) : null;
    const mod = (x: number, n: number) => ((x % n) + n) % n;
    for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) { const nr = mod(r + sr, A.rows), nc = mod(c + sc, A.cols); o.data[nr + nc * A.rows] = A.data[r + c * A.rows]; if (im) im[nr + nc * A.rows] = A.idata![r + c * A.rows]; }
    if (im) o.idata = im; return ret(o);
  },
  bsxfun: async (a, _n, env) => { const f = handle(a[0], 'bsxfun'); return env.callHandle(f, [a[1], a[2]], 1); },
  // ── operator functions (named forms, for feval/arrayfun/bsxfun) ──
  plus: async (a) => ret(ewAdd(m(a[0]), m(a[1]))),
  minus: async (a) => ret(ewSub(m(a[0]), m(a[1]))),
  uminus: async (a) => { const A = m(a[0]); return ret(isComplex(A) ? cmap(A, (re, im) => [-re, -im]) : map(A, (x) => -x)); },
  uplus: async (a) => ret(m(a[0])),
  times: async (a) => ret(ewMul(m(a[0]), m(a[1]))),
  mtimes: async (a) => ret(cmatmul(m(a[0]), m(a[1]))),
  rdivide: async (a) => ret(ewRDiv(m(a[0]), m(a[1]))),
  ldivide: async (a) => ret(ewLDiv(m(a[0]), m(a[1]))),
  mpower: async (a) => { const A = m(a[0]), B = m(a[1]); if (isScalar(A) && isScalar(B)) return ret(ewPow(A, B)); throw new MatError('mpower: matrix power only via the ^ operator'); },
  ctranspose: async (a) => ret(ctransposeFn(m(a[0]))),
  eq: async (a) => ret(ewEq(m(a[0]), m(a[1]), true)),
  ne: async (a) => ret(ewEq(m(a[0]), m(a[1]), false)),
  lt: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x < y ? 1 : 0)), isBool: true }),
  gt: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x > y ? 1 : 0)), isBool: true }),
  le: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x <= y ? 1 : 0)), isBool: true }),
  ge: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x >= y ? 1 : 0)), isBool: true }),
  and: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x !== 0 && y !== 0 ? 1 : 0)), isBool: true }),
  or: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => (x !== 0 || y !== 0 ? 1 : 0)), isBool: true }),
  not: async (a) => ret({ ...map(m(a[0]), (x) => (x === 0 ? 1 : 0)), isBool: true }),
  xor: async (a) => ret({ ...elementwise(m(a[0]), m(a[1]), (x, y) => ((x !== 0) !== (y !== 0) ? 1 : 0)), isBool: true }),
  // ── descriptive statistics ──
  median: async (a) => ret(colReduce(m(a[0]), (c) => { const s = [...c].sort((x, y) => x - y); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; })),
  std: async (a) => ret(colReduce(m(a[0]), (c) => Math.sqrt(variance(c)))),
  var: async (a) => ret(colReduce(m(a[0]), variance)),
  mode: async (a) => ret(colReduce(m(a[0]), modeOf)),
  iqr: async (a) => ret(colReduce(m(a[0]), (c) => { const s = [...c].sort((x, y) => x - y); return pctile(s, 75) - pctile(s, 25); })),
  bounds: async (a, n) => { const A = m(a[0]); const lo = colReduce(A, (c) => Math.min(...c)); const hi = colReduce(A, (c) => Math.max(...c)); return n >= 2 ? [lo, hi] : [lo]; },
  mink: async (a) => { const A = m(a[0]); const k = Math.round(asScalar(a[1])); const s = toArray(A).sort((x, y) => x - y).slice(0, k); return ret(A.rows === 1 ? rowVec(s) : colVec(s)); },
  maxk: async (a) => { const A = m(a[0]); const k = Math.round(asScalar(a[1])); const s = toArray(A).sort((x, y) => y - x).slice(0, k); return ret(A.rows === 1 ? rowVec(s) : colVec(s)); },
  prctile: async (a) => { const A = m(a[0]); const s = toArray(A).sort((x, y) => x - y); const P = m(a[1]); const out = map(P, (p) => pctile(s, p)); return ret(out); },
  quantile: async (a) => { const A = m(a[0]); const s = toArray(A).sort((x, y) => x - y); const Q = m(a[1]); const out = map(Q, (q) => pctile(s, q * 100)); return ret(out); },
  cov: async (a) => { let X = m(a[0]); if (a.length >= 2) X = horzcat([colvecOf(X), colvecOf(m(a[1]))]); else if (X.rows === 1 || X.cols === 1) return ret(scalar(variance(toArray(X)))); return ret(covMatrix(X)); },
  corrcoef: async (a) => { let X = m(a[0]); if (a.length >= 2) X = horzcat([colvecOf(X), colvecOf(m(a[1]))]); const C = covMatrix(X); const p = C.rows; const R = zeros(p, p); for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) R.data[i + j * p] = C.data[i + j * p] / Math.sqrt(C.data[i + i * p] * C.data[j + j * p]); return ret(R); },
  corrcov: async (a) => { const C = m(a[0]); const p = C.rows; const sd = Array.from({ length: p }, (_, i) => Math.sqrt(C.data[i + i * p])); const R = zeros(p, p); for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) R.data[i + j * p] = C.data[i + j * p] / (sd[i] * sd[j]); return ret(R); },
  humps: async (a) => { const x = a.length ? toArray(m(a[0])) : Array.from({ length: 101 }, (_, i) => i / 100); return ret(rowVec(x.map((t) => 1 / ((t - 0.3) ** 2 + 0.01) + 1 / ((t - 0.9) ** 2 + 0.04) - 6))); },
  normpdf: async (a) => { const x = m(a[0]); const mu = a.length >= 2 ? asScalar(a[1]) : 0, sg = a.length >= 3 ? asScalar(a[2]) : 1; return ret(map(x, (t) => Math.exp(-((t - mu) ** 2) / (2 * sg * sg)) / (sg * Math.sqrt(2 * Math.PI)))); },
  normcdf: async (a) => { const x = m(a[0]); const mu = a.length >= 2 ? asScalar(a[1]) : 0, sg = a.length >= 3 ? asScalar(a[2]) : 1; return ret(map(x, (t) => 0.5 * (1 + erfFn((t - mu) / (sg * Math.SQRT2))))); },
  randsample: async (a) => {
    const first = m(a[0]); const pop = numel(first) === 1 ? Array.from({ length: Math.round(first.data[0]) }, (_, i) => i + 1) : toArray(first);
    const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const replace = a.length >= 3 && truthy(a[2]);
    const out: number[] = [];
    if (replace) { for (let i = 0; i < k; i++) out.push(pop[Math.floor(Math.random() * pop.length)]); }
    else { const idx = pop.map((_, i) => i); for (let i = idx.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [idx[i], idx[j]] = [idx[j], idx[i]]; } for (let i = 0; i < k; i++) out.push(pop[idx[i]]); }
    return ret(numel(first) === 1 || first.rows === 1 ? rowVec(out) : colVec(out));
  },
  timeit: async (a, _n, env) => {
    const f = handle(a[0], 'timeit'); const t0 = performance.now(); await env.callHandle(f, [], a.length >= 2 ? Math.round(asScalar(a[1])) : 0);
    const warm = performance.now() - t0; const reps = warm > 50 ? 3 : warm > 1 ? 20 : 100;
    const times: number[] = [];
    for (let i = 0; i < reps; i++) { const s = performance.now(); await env.callHandle(f, [], a.length >= 2 ? Math.round(asScalar(a[1])) : 0); times.push((performance.now() - s) / 1000); }
    times.sort((x, y) => x - y); return ret(scalar(times[Math.floor(times.length / 2)]));
  },
  jsonencode: async (a) => ret(str(jsonEncode(a[0]))),
  jsondecode: async (a) => ret(jsonDecode(JSON.parse(asString(a[0])))),
  movsum: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => w.reduce((s, x) => s + x, 0))),
  movmean: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => w.reduce((s, x) => s + x, 0) / w.length)),
  movmedian: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => { const s = [...w].sort((x, y) => x - y); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; })),
  movmax: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => Math.max(...w))),
  movmin: async (a) => ret(movWindow(m(a[0]), Math.round(asScalar(a[1])), (w) => Math.min(...w))),
  accumarray: async (a) => { const subs = toArray(m(a[0])).map((x) => Math.round(x)); const vals = m(a[1]); const n = subs.length ? Math.max(...subs) : 0; const o = zeros(n, 1); for (let i = 0; i < subs.length; i++) o.data[subs[i] - 1] += vals.data.length === 1 ? vals.data[0] : vals.data[i]; return ret(o); },
  // ── discrete maths / float limits ──
  perms: async (a) => {
    const v = toArray(m(a[0])); const acc: number[][] = [];
    const rec = (cur: number[], rest: number[]) => { if (!rest.length) { acc.push(cur); return; } for (let i = 0; i < rest.length; i++) rec([...cur, rest[i]], [...rest.slice(0, i), ...rest.slice(i + 1)]); };
    rec([], v); acc.sort((x, y) => { for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return y[i] - x[i]; return 0; });
    return ret(fromRows(acc));
  },
  rat: async (a) => { const [n, d] = ratApprox(asScalar(a[0])); return ret(str(d === 1 ? `${n}` : `${n}/${d}`)); },
  flintmax: async () => ret(scalar(2 ** 53)),
  intmax: async (a) => ret(scalar(INT_LIMITS[a.length ? asString(a[0]) : 'int32']?.[1] ?? 2147483647)),
  intmin: async (a) => ret(scalar(INT_LIMITS[a.length ? asString(a[0]) : 'int32']?.[0] ?? -2147483648)),
  // ── transforms ──
  fft: async (a) => ret(fftApply(m(a[0]), -1)),
  ifft: async (a) => ret(fftApply(m(a[0]), 1)),
  fft2: async (a) => ret(transpose(fftApply(transpose(fftApply(m(a[0]), -1)), -1))),
  ifft2: async (a) => ret(transpose(fftApply(transpose(fftApply(m(a[0]), 1)), 1))),
  fftshift: async (a) => ret(fftShift(m(a[0]), false)),
  ifftshift: async (a) => ret(fftShift(m(a[0]), true)),
  unwrap: async (a) => { const A = m(a[0]); const v = toArray(A); const out = [v[0] ?? 0]; let off = 0; for (let i = 1; i < v.length; i++) { off += -2 * Math.PI * Math.round((v[i] - v[i - 1]) / (2 * Math.PI)); out.push(v[i] + off); } return ret(A.cols === 1 ? colVec(out) : rowVec(out)); },
  cplxpair: async (a) => {
    const A = m(a[0]); const n = numel(A); const tol = 1e-6;
    const items = Array.from({ length: n }, (_, i) => ({ re: A.data[i], im: A.idata ? A.idata[i] : 0 }));
    const reals = items.filter((z) => Math.abs(z.im) <= tol * (1 + Math.abs(z.re))).sort((x, y) => x.re - y.re);
    const cplx = items.filter((z) => Math.abs(z.im) > tol * (1 + Math.abs(z.re))).sort((x, y) => x.re - y.re || x.im - y.im);
    const ordered = [...cplx, ...reals];
    return ret(finishComplex(A.rows === 1 ? 1 : n, A.rows === 1 ? n : 1, Float64Array.from(ordered.map((z) => z.re)), Float64Array.from(ordered.map((z) => z.im))));
  },
  squeeze: async (a) => { const A = m(a[0]); if (!A.nd) return ret(A); const d = A.nd.filter((x) => x !== 1); while (d.length < 2) d.push(1); return ret(makeND(d, Float64Array.from(A.data), { idata: A.idata ? Float64Array.from(A.idata) : null, isChar: A.isChar })); },
  sortrows: async (a, n) => {
    const A = m(a[0]); const rows: number[][] = [];
    for (let r = 0; r < A.rows; r++) { const row: number[] = []; for (let c = 0; c < A.cols; c++) row.push(A.data[r + c * A.rows]); rows.push(row); }
    const idx = rows.map((_, i) => i).sort((i, j) => { for (let c = 0; c < A.cols; c++) { if (rows[i][c] !== rows[j][c]) return rows[i][c] - rows[j][c]; } return 0; });
    const o = zeros(A.rows, A.cols); idx.forEach((src, dst) => { for (let c = 0; c < A.cols; c++) o.data[dst + c * A.rows] = rows[src][c]; });
    return n >= 2 ? [o, colVec(idx.map((i) => i + 1))] : [o];
  },

  // strings / conversion
  num2str: async (a) => ret(str(isScalar(m(a[0])) ? trimNum(asScalar(a[0])) : matToStr(m(a[0])))),
  int2str: async (a) => ret(str(String(Math.round(asScalar(a[0]))))),
  mat2str: async (a) => ret(str(matToStr(m(a[0])))),
  str2num: async (a, _n, env) => ret(await env.evalInput(asString(a[0]))),
  str2double: async (a) => ret(scalar(parseFloat(asString(a[0])))),

  // logical helpers
  isnan: async (a) => ret(map(m(a[0]), (x) => (Number.isNaN(x) ? 1 : 0))),
  isinf: async (a) => ret(map(m(a[0]), (x) => (!Number.isFinite(x) && !Number.isNaN(x) ? 1 : 0))),
  isfinite: async (a) => ret(map(m(a[0]), (x) => (Number.isFinite(x) ? 1 : 0))),
  any: async (a) => { const A = m(a[0]); if (A.rows === 1 || A.cols === 1) return ret(scalar(toArray(A).some((x) => x !== 0) ? 1 : 0)); return ret(reduce(A, 1, 0, (s, x) => (s || x !== 0 ? 1 : 0))); },
  all: async (a) => { const A = m(a[0]); if (A.rows === 1 || A.cols === 1) return ret(scalar(toArray(A).every((x) => x !== 0) ? 1 : 0)); return ret(reduce(A, 1, 1, (s, x) => (s && x !== 0 ? 1 : 0))); },

  // I/O
  disp: async (a, _n, env) => { env.output(dispValue(a[0]) + '\n'); return []; },
  display: async (a, _n, env) => { env.output(dispValue(a[0]) + '\n'); return []; },
  fprintf: async (a, _n, env) => {
    let fmtIdx = 0;
    if (isMat(a[0]) && !(a[0] as Mat).isChar) fmtIdx = 1; // leading fid (1=stdout, 2=stderr)
    const text = sprintf(asString(a[fmtIdx]), a.slice(fmtIdx + 1));
    env.output(text);
    return [];
  },
  printf: async (a, _n, env) => { env.output(sprintf(asString(a[0]), a.slice(1))); return []; },
  sprintf: async (a) => ret(str(sprintf(asString(a[0]), a.slice(1)))),
  error: async (a) => { throw new MatError(a.length ? sprintf(asString(a[0]), a.slice(1)) : 'error'); },
  warning: async (a, _n, env) => { if (a.length && isMat(a[0]) && (a[0] as Mat).isChar) env.output('Warning: ' + sprintf(asString(a[0]), a.slice(1)) + '\n'); return []; },
  abort: async () => { throw new MatError('aborted'); },
  input: async (a, _n, env) => {
    const prompt = a.length ? asString(a[0]) : '';
    const asStr = a.length >= 2 && asString(a[1]) === 's';
    const text = await env.requestInput(prompt);
    if (asStr) return ret(str(text));
    if (text.trim() === '') return ret(zeros(0, 0));
    return ret(await env.evalInput(text));
  },

  // functional
  feval: async (a, n, env) => {
    const f = a[0];
    if (isHandle(f)) return env.callHandle(f, a.slice(1), n);
    throw new MatError('feval: first argument must be a function handle');
  },
  arrayfun: async (a, n, env) => {
    const f = a[0];
    if (!isHandle(f)) throw new MatError('arrayfun: first argument must be a function handle');
    const arrays = a.slice(1).map((v) => m(v));
    const A0 = arrays[0];
    const out = zeros(A0.rows, A0.cols);
    for (let i = 0; i < A0.data.length; i++) {
      const callArgs = arrays.map((arr) => scalar(arr.data[i]));
      const r = await env.callHandle(f, callArgs, 1);
      out.data[i] = r.length ? asScalar(r[0]) : NaN;
    }
    return ret(out);
  },

  // graphics
  plot: async (a, _n, env) => { if (a.length && isGraph(a[0])) { plotGraph(env, a[0]); return []; } env.graphics.plot(a); return []; },
  fplot: async (a, _n, env) => {
    const f = a[0];
    if (!isHandle(f)) throw new MatError('fplot: expected a function handle');
    let lo = -5, hi = 5;
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) >= 2) { const rg = toArray(a[1] as Mat); lo = rg[0]; hi = rg[1]; }
    const N = 400; const xs: number[] = []; const ys: number[] = [];
    for (let i = 0; i < N; i++) {
      const x = lo + (hi - lo) * i / (N - 1);
      const r = await env.callHandle(f, [scalar(x)], 1);
      xs.push(x); ys.push(r.length && isMat(r[0]) ? asScalar(r[0]) : NaN);
    }
    env.graphics.addSeries(xs, ys);
    return [];
  },
  hold: async (a, _n, env) => { env.graphics.command('hold', a); return []; },
  grid: async (a, _n, env) => { env.graphics.command('grid', a); return []; },
  title: async (a, _n, env) => { env.graphics.command('title', a); return []; },
  xlabel: async (a, _n, env) => { env.graphics.command('xlabel', a); return []; },
  ylabel: async (a, _n, env) => { env.graphics.command('ylabel', a); return []; },
  legend: async (a, _n, env) => { env.graphics.command('legend', a); return []; },
  axis: async (a, _n, env) => { env.graphics.command('axis', a); return []; },
  xlim: async (a, _n, env) => {
    if (!a.length) return ret(rowVec(env.graphics.getXLim()));
    if (isMat(a[0]) && (a[0] as Mat).isChar) { if (asString(a[0]).toLowerCase() === 'auto') env.graphics.setXLim(undefined); return []; }
    const v = toArray(m(a[0])); env.graphics.setXLim([v[0], v[1]]); return [];
  },
  ylim: async (a, _n, env) => {
    if (!a.length) return ret(rowVec(env.graphics.getYLim()));
    if (isMat(a[0]) && (a[0] as Mat).isChar) { if (asString(a[0]).toLowerCase() === 'auto') env.graphics.setYLim(undefined); return []; }
    const v = toArray(m(a[0])); env.graphics.setYLim([v[0], v[1]]); return [];
  },
  zlabel: async (a, _n, env) => { env.graphics.command('zlabel', a); return []; },
  subtitle: async (a, _n, env) => { env.graphics.command('subtitle', a); return []; },
  sgtitle: async (a, _n, env) => { if (a.length && isMat(a[0]) && (a[0] as Mat).isChar) env.graphics.sgtitle(asString(a[0])); return []; },
  subplot: async (a, _n, env) => {
    // subplot(m,n,p) or subplot(mnp) e.g. subplot(221)
    if (a.length === 1) { const v = Math.round(asScalar(a[0])); env.graphics.subplot(Math.floor(v / 100), Math.floor((v % 100) / 10), v % 10); }
    else env.graphics.subplot(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])), Math.round(asScalar(a[2])));
    return [{ kind: 'gobj', gtype: 'axes' }];
  },
  tiledlayout: async (a, _n, env) => { const m = a.length >= 1 ? Math.round(asScalar(a[0])) : 1; const n = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; env.graphics.tiledlayout(m, n); return []; },
  nexttile: async (a, _n, env) => { env.graphics.nexttile(a.length && isMat(a[0]) ? Math.round(asScalar(a[0])) : undefined); return [{ kind: 'gobj', gtype: 'axes' }]; },
  bar: async (a, _n, env) => { env.graphics.chart2d(a, 'bar'); return []; },
  barh: async (a, _n, env) => { env.graphics.chart2d(a, 'barh'); return []; },
  area: async (a, _n, env) => { env.graphics.chart2d(a, 'area'); return []; },
  stem: async (a, _n, env) => { env.graphics.chart2d(a, 'stem'); return []; },
  stairs: async (a, _n, env) => { env.graphics.chart2d(a, 'stairs'); return []; },
  scatter: async (a, _n, env) => { env.graphics.scatter(a); return []; },
  errorbar: async (a, _n, env) => { env.graphics.errorbar(a); return []; },
  pie: async (a, _n, env) => { env.graphics.pie(a); return []; },
  plot3: async (a, _n, env) => { env.graphics.line3(a, 'lines'); return []; },
  scatter3: async (a, _n, env) => { env.graphics.line3(a, 'markers'); return []; },
  stem3: async (a, _n, env) => { env.graphics.line3(a, 'markers'); return []; },
  loglog: async (a, _n, env) => { env.graphics.plot(a); env.graphics.setScale('x', 'log'); env.graphics.setScale('y', 'log'); return []; },
  semilogx: async (a, _n, env) => { env.graphics.plot(a); env.graphics.setScale('x', 'log'); return []; },
  semilogy: async (a, _n, env) => { env.graphics.plot(a); env.graphics.setScale('y', 'log'); return []; },
  histogram: async (a, _n, env) => {
    const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v));
    let edges: number[];
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) > 1) edges = toArray(m(a[1]));
    else { const nb = a.length >= 2 && isMat(a[1]) && numel(a[1]) === 1 ? Math.round(asScalar(a[1])) : Math.max(1, Math.ceil(Math.sqrt(x.length))); let lo = Math.min(...x), hi = Math.max(...x); if (!Number.isFinite(lo) || lo === hi) { lo = (lo || 0) - 0.5; hi = (hi || 0) + 0.5; } edges = []; for (let i = 0; i <= nb; i++) edges.push(lo + (hi - lo) * i / nb); }
    const N = new Array(edges.length - 1).fill(0); const last = edges.length - 1;
    for (const v of x) { if (v < edges[0] || v > edges[last]) continue; let b = last - 1; for (let i = 0; i < last; i++) if (v < edges[i + 1]) { b = i; break; } N[b]++; }
    const centers = N.map((_, i) => (edges[i] + edges[i + 1]) / 2);
    env.graphics.chart2d([rowVec(centers), rowVec(N)], 'bar'); return [];
  },
  zlim: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.command('zlim', a); return []; },
  xticks: async () => [],
  yticks: async () => [],
  zticks: async () => [],
  text: async () => [],
  xline: async (a, _n, env) => { const vals = toArray(m(a[0])); const spec = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : undefined; const label = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : undefined; env.graphics.refline('x', vals, spec, label); return []; },
  yline: async (a, _n, env) => { const vals = toArray(m(a[0])); const spec = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).isChar ? asString(a[1]) : undefined; const label = a.length >= 3 && isMat(a[2]) && (a[2] as Mat).isChar ? asString(a[2]) : undefined; env.graphics.refline('y', vals, spec, label); return []; },
  peaks: async (a, nargout, env) => {
    // peaks(n) → the classic n×n sample surface; with no output, plots it.
    const n = a.length && isMat(a[0]) && numel(a[0]) === 1 ? Math.round(asScalar(a[0])) : 49;
    const lin = (k: number) => Array.from({ length: k }, (_, i) => -3 + (6 * i) / (k - 1));
    const xs = lin(n); const Z = zeros(n, n), X = zeros(n, n), Y = zeros(n, n);
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) {
      const x = xs[c], y = xs[r];
      const z = 3 * (1 - x) ** 2 * Math.exp(-(x ** 2) - (y + 1) ** 2)
        - 10 * (x / 5 - x ** 3 - y ** 5) * Math.exp(-(x ** 2) - y ** 2)
        - (1 / 3) * Math.exp(-((x + 1) ** 2) - y ** 2);
      Z.data[r + c * n] = z; X.data[r + c * n] = x; Y.data[r + c * n] = y;
    }
    if (nargout >= 1) return nargout >= 3 ? [X, Y, Z] : nargout >= 2 ? [X, Z] : [Z];
    env.graphics.surface([X, Y, Z], 'surf'); return [];
  },
  sphere: async (a, n, env) => { const N = a.length && isMat(a[0]) && numel(a[0]) === 1 ? Math.round(asScalar(a[0])) : 20; const { X, Y, Z } = sphereCoords(N); if (n >= 1) return [X, Y, Z].slice(0, Math.max(1, n)); env.graphics.surface([X, Y, Z], 'surf'); return []; },
  cylinder: async (a, n, env) => { const r = a.length && isMat(a[0]) && numel(a[0]) > 1 ? toArray(m(a[0])) : a.length && isMat(a[0]) && numel(a[0]) === 1 && a.length === 1 ? [asScalar(a[0]), asScalar(a[0])] : [1, 1]; const N = a.length >= 2 ? Math.round(asScalar(a[1])) : 20; const { X, Y, Z } = cylinderCoords(r, N); if (n >= 1) return [X, Y, Z].slice(0, Math.max(1, n)); env.graphics.surface([X, Y, Z], 'surf'); return []; },
  ellipsoid: async (a, n, env) => { const [xc, yc, zc, xr, yr, zr] = [0, 1, 2, 3, 4, 5].map((i) => asScalar(a[i])); const N = a.length >= 7 ? Math.round(asScalar(a[6])) : 20; const { X, Y, Z } = sphereCoords(N); const sx = map(X, (v) => v * xr + xc), sy = map(Y, (v) => v * yr + yc), sz = map(Z, (v) => v * zr + zc); if (n >= 1) return [sx, sy, sz].slice(0, Math.max(1, n)); env.graphics.surface([sx, sy, sz], 'surf'); return []; },
  fsurf: async (a, _n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'surf'); return []; },
  fmesh: async (a, _n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'mesh'); return []; },
  fcontour: async (a, _n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'contour'); return []; },
  contour3: async (a, _n, env) => { env.graphics.surface(a, 'contour3'); return []; },
  quiver: async (a, _n, env) => {
    let xs: number[], ys: number[], us: number[], vs: number[];
    if (a.length >= 4) { xs = toArray(m(a[0])); ys = toArray(m(a[1])); us = toArray(m(a[2])); vs = toArray(m(a[3])); }
    else { us = toArray(m(a[0])); vs = toArray(m(a[1])); xs = us.map((_, i) => i + 1); ys = us.map(() => 0); }
    env.graphics.quiver(xs, ys, us, vs); return [];
  },
  surf: async (a, _n, env) => { env.graphics.surface(a, 'surf'); return []; },
  surfc: async (a, _n, env) => { env.graphics.surface(a, 'surf'); return []; },
  surfl: async (a, _n, env) => { env.graphics.surface(a, 'surf'); return []; },
  mesh: async (a, _n, env) => { env.graphics.surface(a, 'mesh'); return []; },
  bar3: async (a, _n, env) => { env.graphics.bar3(matToGrid(m(a[a.length - 1])), false); return []; },
  bar3h: async (a, _n, env) => { env.graphics.bar3(matToGrid(m(a[a.length - 1])), true); return []; },
  quiver3: async (a, _n, env) => {
    const ms = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar).map((x) => toArray(x));
    if (ms.length >= 6) env.graphics.quiver3(ms[0], ms[1], ms[2], ms[3], ms[4], ms[5]);
    else env.graphics.quiver3(ms[0].map((_, i) => i + 1), ms[0].map(() => 0), ms[0].map(() => 0), ms[0], ms[1] ?? ms[0].map(() => 0), ms[2] ?? ms[0].map(() => 0));
    return [];
  },
  histogram2: async (a, _n, env) => { const x = toArray(m(a[0])), y = toArray(m(a[1])); const nb = a.length >= 3 && isMat(a[2]) ? toArray(m(a[2])) : [10, 10]; env.graphics.histogram2(x, y, nb[0], nb[1] ?? nb[0]); return []; },
  plotmatrix: async (a, _n, env) => {
    const X = m(a[0]); const Y = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? m(a[1]) : X;
    const col = (M: Mat, j: number) => Array.from({ length: M.rows }, (_, r) => M.data[r + j * M.rows]);
    const px = X.cols, py = Y.cols;
    for (let i = 0; i < py; i++) for (let j = 0; j < px; j++) {
      env.graphics.subplot(py, px, i * px + j + 1);
      if (X === Y && i === j) { const v = col(X, j); const nb = 10; const lo = Math.min(...v), hi = Math.max(...v); const d = (hi - lo) / nb || 1; const cnt = new Array(nb).fill(0); for (const t of v) cnt[Math.min(nb - 1, Math.floor((t - lo) / d))]++; env.graphics.chart2d([rowVec(cnt.map((_, k) => lo + (k + 0.5) * d)), rowVec(cnt)], 'bar'); }
      else env.graphics.scatter([colVec(col(X, j)), colVec(col(Y, i))]);
    }
    return [];
  },
  contourc: async (a) => {
    const mats = a.filter((x): x is Mat => isMat(x) && !(x as Mat).isChar);
    let Z: Mat, xv: number[], yv: number[]; let levelArg: Mat | null = null;
    if (mats.length >= 3) { xv = toArray(mats[0]); yv = toArray(mats[1]); Z = mats[2]; levelArg = mats[3] ?? null; }
    else { Z = mats[0]; xv = Array.from({ length: Z.cols }, (_, i) => i + 1); yv = Array.from({ length: Z.rows }, (_, i) => i + 1); levelArg = mats[1] ?? null; }
    const grid = matToGrid(Z);
    let levels: number[] | null = null;
    if (levelArg) {
      if (numel(levelArg) === 1) { const n = Math.round(levelArg.data[0]); let lo = Infinity, hi = -Infinity; for (const row of grid) for (const v of row) { if (v < lo) lo = v; if (v > hi) hi = v; } levels = Array.from({ length: n }, (_, i) => lo + (i + 1) * (hi - lo) / (n + 1)); }
      else levels = toArray(levelArg);
    }
    return ret(marchingSquares(xv, yv, grid, levels));
  },
  // polar plots
  polarplot: async (a, _n, env) => { env.graphics.polar(a, 'lines'); return []; },
  polarscatter: async (a, _n, env) => { env.graphics.polar(a, 'markers'); return []; },
  polarhistogram: async (a, _n, env) => { env.graphics.polar(a, 'bar'); return []; },
  polaraxes: async (_a, _n, env) => { env.graphics.setPolarProp('rticks', []); return []; },
  compass: async (a, _n, env) => { let us: number[], vs: number[]; if (a.length >= 2) { us = toArray(m(a[0])); vs = toArray(m(a[1])); } else { const z = m(a[0]); us = z.idata ? toArray(z) : toArray(z); vs = z.idata ? Array.from(z.idata) : us.map(() => 0); } env.graphics.compass(us, vs); return []; },
  rlim: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('rlim', toArray(m(a[0]))); return []; },
  thetalim: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('thetalim', toArray(m(a[0])).map((d) => d * Math.PI / 180)); return []; },
  rticks: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('rticks', toArray(m(a[0]))); return []; },
  thetaticks: async (a, _n, env) => { if (a.length && isMat(a[0]) && !(a[0] as Mat).isChar) env.graphics.setPolarProp('thetaticks', toArray(m(a[0])).map((d) => d * Math.PI / 180)); return []; },
  rticklabels: async () => [], thetaticklabels: async () => [], rtickangle: async () => [],
  meshc: async (a, _n, env) => { env.graphics.surface(a, 'mesh'); return []; },
  surface: async (a, _n, env) => { env.graphics.surface(a, 'surf'); return []; },
  contour: async (a, _n, env) => { env.graphics.surface(a, 'contour'); return []; },
  contourf: async (a, _n, env) => { env.graphics.surface(a, 'contour'); return []; },
  pcolor: async (a, _n, env) => { env.graphics.surface(a, 'contour'); return []; },
  shading: async (a, _n, env) => { env.graphics.command('shading', a); return []; },
  colorbar: async (a, _n, env) => { env.graphics.command('colorbar', a); return []; },
  colormap: async (a, _n, env) => { env.graphics.command('colormap', a); return []; },
  // Colormap array generators (n×3 RGB).
  parula: async (a) => ret(cmapGen(a, (t) => lerpAnchors(PARULA, t))),
  turbo: async (a) => ret(cmapGen(a, (t) => lerpAnchors(TURBO, t))),
  jet: async (a) => ret(cmapGen(a, jetColor)),
  hot: async (a) => ret(cmapGen(a, hotColor)),
  gray: async (a) => ret(cmapGen(a, (t) => [t, t, t])),
  bone: async (a) => ret(cmapGen(a, (t) => [(7 * t) / 8 + clamp01((t - 0.75) / 0.25) / 8, (7 * t) / 8 + clamp01((t - 0.375) / 0.375) / 8, (7 * t) / 8 + clamp01(t / 0.375) / 8])),
  copper: async (a) => ret(cmapGen(a, (t) => [clamp01(1.25 * t), 0.7812 * t, 0.4975 * t])),
  pink: async (a) => ret(cmapGen(a, (t) => { const h = hotColor(t); return [Math.sqrt((2 * t + h[0]) / 3), Math.sqrt((2 * t + h[1]) / 3), Math.sqrt((2 * t + h[2]) / 3)]; })),
  cool: async (a) => ret(cmapGen(a, (t) => [t, 1 - t, 1])),
  spring: async (a) => ret(cmapGen(a, (t) => [1, t, 1 - t])),
  summer: async (a) => ret(cmapGen(a, (t) => [t, 0.5 + 0.5 * t, 0.4])),
  autumn: async (a) => ret(cmapGen(a, (t) => [1, t, 0])),
  winter: async (a) => ret(cmapGen(a, (t) => [0, t, 1 - 0.5 * t])),
  hsv: async (a) => ret(cmapGen(a, (t) => hsv2rgb(t, 1, 1))),
  lines: async (a) => ret(cmapGen(a, (_t, i) => LINES7[i % 7] as [number, number, number])),
  colorcube: async (a) => ret(cmapGen(a, (t) => hsv2rgb(t, 1, 0.6 + 0.4 * (t % 0.25) * 4))),
  flag: async (a) => ret(cmapGen(a, (_t, i) => ([[1, 0, 0], [1, 1, 1], [0, 0, 1], [0, 0, 0]] as [number, number, number][])[i % 4])),
  prism: async (a) => ret(cmapGen(a, (_t, i) => ([[1, 0, 0], [1, 0.5, 0], [1, 1, 0], [0, 1, 0], [0, 0, 1], [0.667, 0, 1]] as [number, number, number][])[i % 6])),
  sky: async (a) => ret(cmapGen(a, (t) => lerpAnchors([[0.07, 0.04, 0.2], [0.2, 0.5, 0.85], [0.7, 0.9, 0.98]], t))),
  abyss: async (a) => ret(cmapGen(a, (t) => lerpAnchors([[0, 0, 0], [0.0, 0.1, 0.4], [0.0, 0.45, 0.7], [0.85, 0.95, 1]], t))),
  nebula: async (a) => ret(cmapGen(a, (t) => lerpAnchors([[0.02, 0.05, 0.2], [0.4, 0.1, 0.5], [0.9, 0.4, 0.5], [1, 0.9, 0.7]], t))),
  // colour-space conversions
  hsv2rgb: async (a) => { const M = m(a[0]); const o = zeros(M.rows, M.cols); for (let r = 0; r < M.rows; r++) { const [R, G, B] = hsv2rgb(M.data[r], M.data[r + M.rows], M.data[r + 2 * M.rows]); o.data[r] = R; o.data[r + M.rows] = G; o.data[r + 2 * M.rows] = B; } return ret(o); },
  rgb2hsv: async (a) => { const M = m(a[0]); const o = zeros(M.rows, M.cols); for (let r = 0; r < M.rows; r++) { const [H, S, V] = rgb2hsvFn(M.data[r], M.data[r + M.rows], M.data[r + 2 * M.rows]); o.data[r] = H; o.data[r + M.rows] = S; o.data[r + 2 * M.rows] = V; } return ret(o); },
  rgb2gray: async (a) => { const M = m(a[0]); const o = zeros(M.rows, M.cols); for (let r = 0; r < M.rows; r++) { const g = 0.2989 * M.data[r] + 0.587 * M.data[r + M.rows] + 0.114 * M.data[r + 2 * M.rows]; o.data[r] = g; o.data[r + M.rows] = g; o.data[r + 2 * M.rows] = g; } return ret(o); },
  cmap2gray: async (a, n, env) => BUILTINS.rgb2gray(a, n, env),
  im2gray: async (a, n, env) => BUILTINS.rgb2gray(a, n, env),
  hex2rgb: async (a) => { const h = asString(a[0]).replace(/^#/, ''); return ret(rowVec([parseInt(h.slice(0, 2), 16) / 255, parseInt(h.slice(2, 4), 16) / 255, parseInt(h.slice(4, 6), 16) / 255])); },
  rgb2hex: async (a) => { const v = toArray(m(a[0])); return ret(str('#' + v.slice(0, 3).map((x) => Math.round(Math.max(0, Math.min(1, x)) * 255).toString(16).padStart(2, '0')).join(''))); },
  // axis scale + tick/aspect settings
  xscale: async (a, _n, env) => { env.graphics.setScale('x', a.length && asString(a[0]).toLowerCase().startsWith('log') ? 'log' : 'linear'); return []; },
  yscale: async (a, _n, env) => { env.graphics.setScale('y', a.length && asString(a[0]).toLowerCase().startsWith('log') ? 'log' : 'linear'); return []; },
  zscale: async () => [],
  yyaxis: async () => [],
  caxis: async () => [], clim: async () => [], colororder: async () => [], daspect: async () => [], pbaspect: async () => [],
  xtickangle: async () => [], ytickangle: async () => [], ztickangle: async () => [],
  xtickformat: async () => [], ytickformat: async () => [], ztickformat: async () => [],
  xticklabels: async () => [], yticklabels: async () => [], zticklabels: async () => [],
  fontname: async () => [], fontsize: async () => [], gtext: async () => [], annotation: async () => [], line: async () => [], rectangle: async () => [],
  // renderable plot variants
  imagesc: async (a, _n, env) => { env.graphics.surface([m(a[a.length - 1])], 'contour'); env.graphics.command('colorbar', []); return []; },
  image: async (a, _n, env) => { env.graphics.surface([m(a[a.length - 1])], 'contour'); return []; },
  pie3: async (a, _n, env) => { env.graphics.pie(a); return []; },
  piechart: async (a, _n, env) => { env.graphics.pie(a); return []; },
  donutchart: async (a, _n, env) => { env.graphics.pie(a); return []; },
  pareto: async (a, _n, env) => { const v = toArray(m(a[0])).slice().sort((x, y) => y - x); env.graphics.chart2d([rowVec(v.map((_, i) => i + 1)), rowVec(v)], 'bar'); return []; },
  fimplicit: async (a, _n, env) => { const { X, Y, Z } = await sampleFn2(a, env); env.graphics.surface([X, Y, Z], 'contour'); return []; },
  fplot3: async (a, _n, env) => {
    const fx = handle(a[0], 'fplot3'), fy = handle(a[1], 'fplot3'), fz = handle(a[2], 'fplot3');
    let lo = 0, hi = 2 * Math.PI; if (a.length >= 4 && isMat(a[3])) { const r = toArray(a[3] as Mat); lo = r[0]; hi = r[1]; }
    const N = 200; const xs: number[] = [], ys: number[] = [], zs: number[] = [];
    for (let i = 0; i < N; i++) { const t = lo + (hi - lo) * i / (N - 1); const ex = await env.callHandle(fx, [scalar(t)], 1), ey = await env.callHandle(fy, [scalar(t)], 1), ez = await env.callHandle(fz, [scalar(t)], 1); xs.push(asScalar(ex[0])); ys.push(asScalar(ey[0])); zs.push(asScalar(ez[0])); }
    env.graphics.line3([rowVec(xs), rowVec(ys), rowVec(zs)], 'lines'); return [];
  },
  brighten: async (a) => {
    // brighten(map, beta): map.^gamma, gamma = 1-beta (beta>0 brighter).
    const M = m(a[0]); const beta = a.length >= 2 ? asScalar(a[1]) : asScalar(a[0]);
    if (numel(M) === 1) return []; // brighten(beta) on current map — no current-map state here
    const gamma = beta > 0 ? 1 - beta : 1 / (1 + beta);
    return ret(map(M, (x) => Math.pow(Math.max(0, Math.min(1, x)), gamma)));
  },
  cellstr: async (a) => {
    const v = a[0];
    if (isCell(v)) return ret(v);
    const A = m(v);
    if (A.rows <= 1) return ret(makeCell(1, 1, [str(asString(A).replace(/\s+$/, ''))]));
    const items: Value[] = [];
    for (let r = 0; r < A.rows; r++) { let s = ''; for (let c = 0; c < A.cols; c++) s += String.fromCharCode(A.data[r + c * A.rows]); items.push(str(s.replace(/\s+$/, ''))); }
    return ret(makeCell(A.rows, 1, items));
  },
  dsearchn: async (a) => {
    // dsearchn(P, PQ) or dsearchn(P, T, PQ): nearest point in P to each query row.
    const P = m(a[0]); const PQ = m(a[a.length >= 3 ? 2 : 1]); const dcols = P.cols;
    const idx = new Float64Array(PQ.rows);
    for (let q = 0; q < PQ.rows; q++) { let best = 0, bd = Infinity; for (let p = 0; p < P.rows; p++) { let d = 0; for (let c = 0; c < dcols; c++) { const diff = PQ.data[q + c * PQ.rows] - P.data[p + c * P.rows]; d += diff * diff; } if (d < bd) { bd = d; best = p; } } idx[q] = best + 1; }
    return ret(mat(PQ.rows, 1, idx));
  },
  box: async () => [],
  view: async (a, _n, env) => { env.graphics.command('view', a); return []; },
  clf: async (_a, _n, env) => { env.graphics.command('clf', []); return []; },
  cla: async (_a, _n, env) => { env.graphics.command('cla', []); return []; },
  close: async (_a, _n, env) => { env.graphics.command('close', []); return []; },
  figure: async (_a, _n, env) => { env.graphics.command('figure', []); return [{ kind: 'gobj', gtype: 'figure' }]; },
  gca: async () => ret({ kind: 'gobj', gtype: 'axes' }),
  gcf: async () => ret({ kind: 'gobj', gtype: 'figure' }),
  set: async (a, _n, env) => {
    // set(handle, 'Prop', val, ...) — apply to current axes.
    for (let i = 1; i + 1 < a.length; i += 2) env.graphics.setAxesProp(asString(a[i]), a[i + 1]);
    return [];
  },
  drawnow: async () => [],
  pause: async () => [],
  clc: async (_a, _n, env) => { env.clearConsole(); return []; },
  tic: async () => [],
  toc: async () => ret(scalar(0)),

  // help / workspace
  help: async (a, _n, env) => { env.output((a.length ? env.help(asString(a[0])) : GENERAL_HELP) + '\n'); return []; },
  doc: async (a, _n, env) => { env.output((a.length ? env.help(asString(a[0])) : GENERAL_HELP) + '\n'); return []; },
  lookfor: async (a, _n, env) => { env.output(a.length ? env.help(asString(a[0])) + '\n' : GENERAL_HELP + '\n'); return []; },
  clear: async (a, _n, env) => { env.clearWorkspace(a.map((v) => asString(v))); return []; },
  who: async (_a, _n, env) => {
    const names = env.workspaceVars().map((v) => v.name);
    env.output(names.length ? 'Your variables are:\n\n' + names.join('   ') + '\n' : '');
    return [];
  },
  whos: async (_a, _n, env) => {
    const vars = env.workspaceVars();
    if (!vars.length) return [];
    const rows = vars.map((v) => `  ${v.name.padEnd(14)}${v.size.padEnd(12)}${v.klass}`);
    env.output('  Name          Size        Class\n' + rows.join('\n') + '\n');
    return [];
  },
};

const GENERAL_HELP =
  'MATLAB sandbox — a browser MATLAB/Octave runner.\n' +
  '  help <name>   description of a function (e.g. help plot)\n' +
  '  who / whos    list workspace variables\n' +
  '  clear [name]  clear all or named variables\n' +
  'Pick a file on the left and press Run, or type commands here.';

interface HelpEntry { summary: string; syntax: string[]; seealso?: string[] }

/** Structured help for common built-ins (rendered MATLAB-style by `help`). */
const HELP: Record<string, HelpEntry> = {
  sin: { summary: 'Sine of argument in radians', syntax: ['Y = sin(X)'], seealso: ['cos', 'tan', 'asin', 'sinh'] },
  cos: { summary: 'Cosine of argument in radians', syntax: ['Y = cos(X)'], seealso: ['sin', 'tan', 'acos', 'cosh'] },
  tan: { summary: 'Tangent of argument in radians', syntax: ['Y = tan(X)'], seealso: ['sin', 'cos', 'atan'] },
  atan: { summary: 'Inverse tangent in radians', syntax: ['Y = atan(X)'], seealso: ['atan2', 'tan', 'asin'] },
  atan2: { summary: 'Four-quadrant inverse tangent', syntax: ['P = atan2(Y,X)'], seealso: ['atan', 'tan'] },
  exp: { summary: 'Exponential e.^X (element-wise)', syntax: ['Y = exp(X)'], seealso: ['log', 'log10', 'sqrt'] },
  log: { summary: 'Natural logarithm (element-wise)', syntax: ['Y = log(X)'], seealso: ['log10', 'log2', 'exp'] },
  log10: { summary: 'Base-10 logarithm (element-wise)', syntax: ['Y = log10(X)'], seealso: ['log', 'log2'] },
  log2: { summary: 'Base-2 logarithm (element-wise)', syntax: ['Y = log2(X)'], seealso: ['log', 'log10'] },
  sqrt: { summary: 'Square root (element-wise)', syntax: ['Y = sqrt(X)'], seealso: ['nthroot', 'power', 'exp'] },
  abs: { summary: 'Absolute value (element-wise)', syntax: ['Y = abs(X)'], seealso: ['sign', 'norm'] },
  sign: { summary: 'Sign function (-1, 0, or 1)', syntax: ['Y = sign(X)'], seealso: ['abs'] },
  nthroot: { summary: 'Real n-th root of X (handles negative X for odd N)', syntax: ['Y = nthroot(X,N)'], seealso: ['sqrt', 'power'] },
  power: { summary: 'Element-wise power, X.^Y', syntax: ['Z = power(X,Y)', 'Z = X.^Y'], seealso: ['sqrt', 'nthroot'] },
  mod: { summary: 'Remainder after division (sign of divisor)', syntax: ['R = mod(A,B)'], seealso: ['rem', 'floor'] },
  rem: { summary: 'Remainder after division (sign of dividend)', syntax: ['R = rem(A,B)'], seealso: ['mod', 'fix'] },
  round: { summary: 'Round to nearest integer', syntax: ['Y = round(X)'], seealso: ['floor', 'ceil', 'fix'] },
  floor: { summary: 'Round toward negative infinity', syntax: ['Y = floor(X)'], seealso: ['ceil', 'round', 'fix'] },
  ceil: { summary: 'Round toward positive infinity', syntax: ['Y = ceil(X)'], seealso: ['floor', 'round'] },
  fix: { summary: 'Round toward zero', syntax: ['Y = fix(X)'], seealso: ['floor', 'ceil', 'round'] },
  sum: { summary: 'Sum of elements', syntax: ['S = sum(X)', 'S = sum(X,DIM)'], seealso: ['prod', 'mean', 'cumsum'] },
  prod: { summary: 'Product of elements', syntax: ['P = prod(X)', 'P = prod(X,DIM)'], seealso: ['sum', 'cumsum'] },
  mean: { summary: 'Average of elements', syntax: ['M = mean(X)', 'M = mean(X,DIM)'], seealso: ['sum', 'max', 'min'] },
  cumsum: { summary: 'Cumulative sum', syntax: ['Y = cumsum(X)'], seealso: ['sum', 'diff'] },
  max: { summary: 'Largest element(s)', syntax: ['M = max(X)', '[M,I] = max(X)', 'M = max(A,B)'], seealso: ['min', 'sort', 'sum'] },
  min: { summary: 'Smallest element(s)', syntax: ['M = min(X)', '[M,I] = min(X)', 'M = min(A,B)'], seealso: ['max', 'sort'] },
  sort: { summary: 'Sort in ascending order', syntax: ['B = sort(X)', '[B,I] = sort(X)'], seealso: ['max', 'min'] },
  zeros: { summary: 'Create an array of all zeros', syntax: ['X = zeros(N)', 'X = zeros(R,C)'], seealso: ['ones', 'eye', 'rand'] },
  ones: { summary: 'Create an array of all ones', syntax: ['X = ones(N)', 'X = ones(R,C)'], seealso: ['zeros', 'eye'] },
  eye: { summary: 'Identity matrix', syntax: ['I = eye(N)', 'I = eye(R,C)'], seealso: ['zeros', 'ones', 'diag'] },
  rand: { summary: 'Uniformly distributed random numbers in (0,1)', syntax: ['X = rand(N)', 'X = rand(R,C)'], seealso: ['zeros', 'ones'] },
  linspace: { summary: 'Linearly spaced vector', syntax: ['Y = linspace(A,B)', 'Y = linspace(A,B,N)'], seealso: ['colon', 'logspace'] },
  repmat: { summary: 'Repeat copies of an array', syntax: ['B = repmat(A,M,N)'], seealso: ['reshape', 'ones'] },
  reshape: { summary: 'Reshape array', syntax: ['B = reshape(A,R,C)'], seealso: ['repmat', 'size'] },
  size: { summary: 'Array dimensions', syntax: ['[R,C] = size(X)', 'D = size(X,DIM)'], seealso: ['length', 'numel', 'ndims'] },
  length: { summary: 'Length of largest array dimension', syntax: ['L = length(X)'], seealso: ['size', 'numel'] },
  numel: { summary: 'Number of array elements', syntax: ['N = numel(X)'], seealso: ['size', 'length'] },
  diff: { summary: 'Differences between adjacent elements', syntax: ['Y = diff(X)'], seealso: ['sum', 'cumsum'] },
  diag: { summary: 'Diagonal matrices and diagonals of a matrix', syntax: ['D = diag(V)', 'V = diag(A)'], seealso: ['eye', 'trace'] },
  inv: { summary: 'Inverse of a square matrix', syntax: ['Y = inv(A)'], seealso: ['det', 'mldivide', 'eye'] },
  det: { summary: 'Matrix determinant', syntax: ['D = det(A)'], seealso: ['inv', 'trace'] },
  trace: { summary: 'Sum of diagonal elements', syntax: ['t = trace(A)'], seealso: ['diag', 'det'] },
  norm: { summary: 'Vector and matrix norms', syntax: ['n = norm(X)', 'n = norm(X,P)'], seealso: ['abs', 'dot'] },
  dot: { summary: 'Dot product of two vectors', syntax: ['c = dot(A,B)'], seealso: ['norm'] },
  transpose: { summary: "Transpose (also written X')", syntax: ['B = transpose(A)', "B = A'"], seealso: ['reshape'] },
  mldivide: { summary: 'Solve linear systems A\\B (least squares if non-square)', syntax: ['X = mldivide(A,B)', 'X = A\\B'], seealso: ['inv', 'det'] },
  plot: { summary: '2-D line plot', syntax: ['plot(X,Y)', "plot(X,Y,LineSpec)", 'plot(X1,Y1,X2,Y2,...)'], seealso: ['fplot', 'hold', 'gca'] },
  fplot: { summary: 'Plot a function handle over a range', syntax: ['fplot(@f)', 'fplot(@f,[xmin xmax])'], seealso: ['plot', 'hold'] },
  hold: { summary: 'Retain or clear plots in the current axes', syntax: ['hold on', 'hold off'], seealso: ['plot', 'cla', 'gca'] },
  gca: { summary: 'Handle to the current axes', syntax: ['ax = gca'], seealso: ['gcf', 'plot', 'set'] },
  xlim: { summary: 'Set or query x-axis limits', syntax: ['xlim([xmin xmax])', "xlim('auto')", 'l = xlim'], seealso: ['ylim', 'axis', 'set'] },
  ylim: { summary: 'Set or query y-axis limits', syntax: ['ylim([ymin ymax])', "ylim('auto')", 'l = ylim'], seealso: ['xlim', 'axis', 'set'] },
  axis: { summary: 'Set axis limits/mode: axis([xmin xmax ymin ymax]), axis auto/equal/tight', syntax: ['axis([xmin xmax ymin ymax])', 'axis auto'], seealso: ['xlim', 'ylim', 'set'] },
  set: { summary: "Set graphics object properties, e.g. set(gca,'XAxisLocation','origin','XLim',[a b])", syntax: ["set(gca,'Prop',val,...)"], seealso: ['gca', 'gcf', 'xlim', 'ylim'] },
  surf: { summary: '3-D shaded surface plot', syntax: ['surf(Z)', 'surf(X,Y,Z)'], seealso: ['mesh', 'contour', 'shading', 'colorbar', 'meshgrid'] },
  mesh: { summary: '3-D wireframe mesh plot', syntax: ['mesh(Z)', 'mesh(X,Y,Z)'], seealso: ['surf', 'contour', 'meshgrid'] },
  contour: { summary: '2-D contour plot of a surface', syntax: ['contour(Z)', 'contour(X,Y,Z)'], seealso: ['surf', 'mesh', 'colorbar'] },
  shading: { summary: 'Surface shading mode (faceted/flat/interp)', syntax: ['shading interp', 'shading flat'], seealso: ['surf', 'colormap'] },
  colorbar: { summary: 'Show a colour scale next to the plot', syntax: ['colorbar', 'colorbar off'], seealso: ['surf', 'colormap'] },
  colormap: { summary: 'Set the colour map (parula/jet/hot/cool/gray/…)', syntax: ['colormap jet', "colormap('parula')", 'colormap(jet(64))'], seealso: ['surf', 'colorbar', 'jet', 'parula'] },
  jet: { summary: 'Jet colormap (n×3 RGB)', syntax: ['c = jet(n)'], seealso: ['parula', 'hot', 'colormap'] },
  parula: { summary: 'Parula colormap (n×3 RGB)', syntax: ['c = parula(n)'], seealso: ['jet', 'turbo', 'colormap'] },
  hsv: { summary: 'HSV colormap (n×3 RGB)', syntax: ['c = hsv(n)'], seealso: ['jet', 'colormap'] },
  gray: { summary: 'Grayscale colormap (n×3 RGB)', syntax: ['c = gray(n)'], seealso: ['bone', 'colormap'] },
  cellstr: { summary: 'Convert a char matrix to a cell array of strings', syntax: ['c = cellstr(S)'], seealso: ['char', 'iscellstr', 'strsplit'] },
  dsearchn: { summary: 'Nearest point search', syntax: ['k = dsearchn(P,PQ)'], seealso: ['delaunay', 'griddata'] },
  brighten: { summary: 'Brighten or darken a colormap', syntax: ['m2 = brighten(map,beta)'], seealso: ['colormap'] },
  box: { summary: 'Display or hide the axes outline', syntax: ['box on', 'box off'], seealso: ['axis', 'grid'] },
  hsv2rgb: { summary: 'Convert HSV colors to RGB', syntax: ['rgb = hsv2rgb(hsv)'], seealso: ['rgb2hsv', 'colormap'] },
  rgb2hsv: { summary: 'Convert RGB colors to HSV', syntax: ['hsv = rgb2hsv(rgb)'], seealso: ['hsv2rgb'] },
  rgb2gray: { summary: 'Convert RGB to grayscale', syntax: ['g = rgb2gray(rgb)'], seealso: ['rgb2hsv', 'cmap2gray'] },
  hex2rgb: { summary: 'Convert a hex color code to an RGB triplet', syntax: ["c = hex2rgb('#ff8800')"], seealso: ['rgb2hex'] },
  rgb2hex: { summary: 'Convert an RGB triplet to a hex color code', syntax: ['h = rgb2hex([r g b])'], seealso: ['hex2rgb'] },
  xscale: { summary: 'Set x-axis scale (linear/log)', syntax: ["xscale('log')"], seealso: ['yscale', 'loglog', 'semilogx'] },
  yscale: { summary: 'Set y-axis scale (linear/log)', syntax: ["yscale('log')"], seealso: ['xscale', 'semilogy'] },
  imagesc: { summary: 'Display a matrix as a scaled-color image', syntax: ['imagesc(C)'], seealso: ['image', 'pcolor', 'contourf'] },
  fimplicit: { summary: 'Plot an implicit function f(x,y)=0', syntax: ['fimplicit(@(x,y) ...)'], seealso: ['fcontour', 'fplot'] },
  fplot3: { summary: 'Plot a 3-D parametric curve', syntax: ['fplot3(@(t)x,@(t)y,@(t)z,[t0 t1])'], seealso: ['plot3', 'fplot'] },
  pareto: { summary: 'Pareto chart (sorted bars)', syntax: ['pareto(y)'], seealso: ['bar', 'histogram'] },
  repelem: { summary: 'Repeat copies of array elements', syntax: ['repelem(v,n)', 'repelem(A,r,c)'], seealso: ['repmat', 'kron'] },
  topkrows: { summary: 'Top k sorted rows of a matrix', syntax: ['B = topkrows(A,k)', '[B,I] = topkrows(A,k)'], seealso: ['sortrows', 'maxk'] },
  mat2cell: { summary: 'Partition a matrix into a cell array of blocks', syntax: ['C = mat2cell(A,rowsizes,colsizes)'], seealso: ['cell2mat', 'num2cell'] },
  isletter: { summary: 'Determine which characters are letters', syntax: ['tf = isletter(s)'], seealso: ['isspace', 'isstrprop'] },
  isspace: { summary: 'Determine which characters are whitespace', syntax: ['tf = isspace(s)'], seealso: ['isletter', 'isstrprop'] },
  isstrprop: { summary: 'Determine which characters are of a category', syntax: ["tf = isstrprop(s,'digit')"], seealso: ['isletter', 'isspace'] },
  hex2num: { summary: 'Convert an IEEE hex string to a double', syntax: ['x = hex2num(h)'], seealso: ['num2hex', 'hex2dec'] },
  num2hex: { summary: 'Convert a double to its IEEE hex representation', syntax: ['h = num2hex(x)'], seealso: ['hex2num', 'dec2hex'] },
  pagetranspose: { summary: 'Transpose each page of an N-D array', syntax: ['B = pagetranspose(A)'], seealso: ['pagectranspose', 'pagemtimes'] },
  pagemtimes: { summary: 'Page-wise matrix multiplication', syntax: ['C = pagemtimes(A,B)'], seealso: ['pagetranspose', 'mtimes'] },
  pagesvd: { summary: 'Page-wise singular values of an N-D array', syntax: ['S = pagesvd(A)'], seealso: ['svd', 'pagemtimes'] },
  pageinv: { summary: 'Page-wise matrix inverse', syntax: ['B = pageinv(A)'], seealso: ['inv', 'pagemtimes'] },
  pagepinv: { summary: 'Page-wise Moore–Penrose pseudoinverse', syntax: ['B = pagepinv(A)'], seealso: ['pinv', 'pageinv'] },
  pagenorm: { summary: 'Page-wise matrix norm', syntax: ['n = pagenorm(A)', "pagenorm(A,'fro')"], seealso: ['norm', 'pagesvd'] },
  pagelsqminnorm: { summary: 'Page-wise minimum-norm least-squares solution', syntax: ['X = pagelsqminnorm(A,B)'], seealso: ['lsqminnorm', 'pagemldivide'] },
  insertAfter: { summary: 'Insert text after a substring', syntax: ['insertAfter(str,pat,text)'], seealso: ['insertBefore', 'replace'] },
  insertBefore: { summary: 'Insert text before a substring', syntax: ['insertBefore(str,pat,text)'], seealso: ['insertAfter', 'replace'] },
  eraseBetween: { summary: 'Delete text between two delimiters', syntax: ['eraseBetween(str,l,r)'], seealso: ['replaceBetween', 'extractBetween'] },
  replaceBetween: { summary: 'Replace text between two delimiters', syntax: ['replaceBetween(str,l,r,new)'], seealso: ['eraseBetween', 'replace'] },
  compose: { summary: 'Format data into a string array', syntax: ['compose(fmt,A)'], seealso: ['sprintf', 'string'] },
  zlabel: { summary: 'Label the z-axis', syntax: ["zlabel('text')"], seealso: ['xlabel', 'ylabel', 'surf'] },
  peaks: { summary: 'Sample function of two variables (classic test surface)', syntax: ['Z = peaks(n)', 'peaks(n)'], seealso: ['surf', 'mesh', 'meshgrid'] },
  sphere: { summary: 'Generate/plot a unit sphere surface', syntax: ['[X,Y,Z] = sphere(n)', 'sphere(n)'], seealso: ['cylinder', 'ellipsoid', 'surf'] },
  cylinder: { summary: 'Generate/plot a cylinder surface from a radius profile', syntax: ['[X,Y,Z] = cylinder(r,n)', 'cylinder(r)'], seealso: ['sphere', 'ellipsoid', 'surf'] },
  ellipsoid: { summary: 'Generate/plot an ellipsoid surface', syntax: ['[X,Y,Z] = ellipsoid(xc,yc,zc,xr,yr,zr,n)'], seealso: ['sphere', 'cylinder', 'surf'] },
  fsurf: { summary: 'Plot a 3-D surface from a function f(x,y)', syntax: ['fsurf(@(x,y) ...)', 'fsurf(f,[a b])'], seealso: ['surf', 'fmesh', 'fcontour', 'fplot'] },
  fmesh: { summary: 'Plot a 3-D mesh from a function f(x,y)', syntax: ['fmesh(@(x,y) ...)'], seealso: ['mesh', 'fsurf'] },
  fcontour: { summary: 'Contour plot of a function f(x,y)', syntax: ['fcontour(@(x,y) ...)'], seealso: ['contour', 'fsurf'] },
  contour3: { summary: '3-D contour plot of a surface', syntax: ['contour3(X,Y,Z)'], seealso: ['contour', 'surf', 'mesh'] },
  quiver: { summary: '2-D vector field (arrows)', syntax: ['quiver(X,Y,U,V)', 'quiver(U,V)'], seealso: ['plot', 'streamline'] },
  bar: { summary: 'Bar graph', syntax: ['bar(y)', 'bar(x,y)'], seealso: ['barh', 'histogram', 'stem'] },
  barh: { summary: 'Horizontal bar graph', syntax: ['barh(y)'], seealso: ['bar'] },
  area: { summary: 'Filled area 2-D plot', syntax: ['area(y)', 'area(x,y)'], seealso: ['plot', 'bar'] },
  stem: { summary: 'Plot discrete sequence data (stems)', syntax: ['stem(y)', 'stem(x,y)'], seealso: ['plot', 'bar', 'stairs'] },
  stairs: { summary: 'Stairstep graph', syntax: ['stairs(y)', 'stairs(x,y)'], seealso: ['plot', 'stem'] },
  scatter: { summary: '2-D scatter plot (optional marker sizes)', syntax: ['scatter(x,y)', 'scatter(x,y,sz)'], seealso: ['plot', 'scatter3', 'bubblechart'] },
  scatter3: { summary: '3-D scatter plot', syntax: ['scatter3(x,y,z)'], seealso: ['scatter', 'plot3'] },
  polarplot: { summary: 'Plot lines in polar coordinates', syntax: ['polarplot(theta,r)'], seealso: ['polarscatter', 'polarhistogram', 'compass'] },
  polarscatter: { summary: 'Scatter plot in polar coordinates', syntax: ['polarscatter(theta,r)'], seealso: ['polarplot', 'scatter'] },
  polarhistogram: { summary: 'Histogram in polar coordinates', syntax: ['polarhistogram(theta)', 'polarhistogram(theta,nbins)'], seealso: ['polarplot', 'histogram'] },
  compass: { summary: 'Arrows emanating from the origin (polar)', syntax: ['compass(u,v)', 'compass(z)'], seealso: ['polarplot', 'quiver'] },
  rlim: { summary: 'Set polar radial-axis limits', syntax: ['rlim([rmin rmax])'], seealso: ['thetalim', 'polarplot'] },
  thetalim: { summary: 'Set polar angular-axis limits (degrees)', syntax: ['thetalim([tmin tmax])'], seealso: ['rlim', 'polarplot'] },
  rticks: { summary: 'Set polar radial tick values', syntax: ['rticks(v)'], seealso: ['thetaticks', 'rlim'] },
  thetaticks: { summary: 'Set polar angular tick values (degrees)', syntax: ['thetaticks(v)'], seealso: ['rticks', 'thetalim'] },
  surfl: { summary: '3-D surface with lighting (rendered as surf)', syntax: ['surfl(X,Y,Z)'], seealso: ['surf', 'mesh'] },
  bar3: { summary: '3-D bar chart', syntax: ['bar3(Z)'], seealso: ['bar', 'bar3h', 'surf'] },
  bar3h: { summary: 'Horizontal 3-D bar chart', syntax: ['bar3h(Z)'], seealso: ['bar3', 'barh'] },
  quiver3: { summary: '3-D vector field (arrows)', syntax: ['quiver3(X,Y,Z,U,V,W)'], seealso: ['quiver', 'streamline'] },
  histogram2: { summary: 'Bivariate histogram (rendered as a heatmap)', syntax: ['histogram2(x,y)', 'histogram2(x,y,nbins)'], seealso: ['histogram', 'histcounts2'] },
  plotmatrix: { summary: 'Scatter-plot matrix of column pairs (histograms on the diagonal)', syntax: ['plotmatrix(X)', 'plotmatrix(X,Y)'], seealso: ['scatter', 'subplot'] },
  contourc: { summary: 'Compute contour-line data (contour matrix)', syntax: ['C = contourc(Z)', 'C = contourc(x,y,Z,levels)'], seealso: ['contour', 'contourf'] },
  plot3: { summary: '3-D line plot', syntax: ['plot3(x,y,z)', "plot3(x,y,z,'-r')"], seealso: ['plot', 'scatter3'] },
  errorbar: { summary: 'Line plot with error bars', syntax: ['errorbar(x,y,e)', 'errorbar(y,e)'], seealso: ['plot'] },
  pie: { summary: 'Pie chart', syntax: ['pie(x)'], seealso: ['bar', 'histogram'] },
  histogram: { summary: 'Histogram plot (bars of bin counts)', syntax: ['histogram(x)', 'histogram(x,nbins)', 'histogram(x,edges)'], seealso: ['histcounts', 'bar'] },
  loglog: { summary: 'Log-log scale plot', syntax: ['loglog(x,y)'], seealso: ['plot', 'semilogx', 'semilogy'] },
  semilogx: { summary: 'Semilog plot (log x-axis)', syntax: ['semilogx(x,y)'], seealso: ['loglog', 'semilogy'] },
  semilogy: { summary: 'Semilog plot (log y-axis)', syntax: ['semilogy(x,y)'], seealso: ['loglog', 'semilogx'] },
  subtitle: { summary: 'Add a subtitle below the title', syntax: ["subtitle('text')"], seealso: ['title', 'sgtitle'] },
  subplot: { summary: 'Create/select axes in an m×n grid', syntax: ['subplot(m,n,p)'], seealso: ['tiledlayout', 'nexttile', 'figure'] },
  tiledlayout: { summary: 'Set up a tiled chart layout', syntax: ['tiledlayout(m,n)'], seealso: ['nexttile', 'subplot'] },
  nexttile: { summary: 'Advance to / select the next tile', syntax: ['nexttile', 'nexttile(p)'], seealso: ['tiledlayout', 'subplot'] },
  sgtitle: { summary: 'Add a title spanning all subplots/tiles', syntax: ["sgtitle('text')"], seealso: ['title', 'subplot'] },
  string: { summary: 'Create a string array (the "…" string class)', syntax: ['s = string(x)'], seealso: ['char', 'isstring', 'strings'] },
  strings: { summary: 'Create an array of empty strings', syntax: ['s = strings(n)', 's = strings(r,c)'], seealso: ['string', 'blanks'] },
  isstring: { summary: 'Determine whether input is a string array', syntax: ['tf = isstring(s)'], seealso: ['ischar', 'iscellstr', 'isStringScalar'] },
  isStringScalar: { summary: 'Determine whether input is a 1×1 string', syntax: ['tf = isStringScalar(s)'], seealso: ['isstring'] },
  strlength: { summary: 'Length of each string', syntax: ['n = strlength(s)'], seealso: ['length', 'numel'] },
  contains: { summary: 'Determine if a pattern occurs in strings', syntax: ['tf = contains(s,pat)'], seealso: ['startsWith', 'endsWith', 'strfind'] },
  startsWith: { summary: 'Determine if strings start with a pattern', syntax: ['tf = startsWith(s,pat)'], seealso: ['endsWith', 'contains'] },
  endsWith: { summary: 'Determine if strings end with a pattern', syntax: ['tf = endsWith(s,pat)'], seealso: ['startsWith', 'contains'] },
  count: { summary: 'Count occurrences of a pattern', syntax: ['n = count(s,pat)'], seealso: ['contains', 'strfind'] },
  erase: { summary: 'Delete a substring from strings', syntax: ['s = erase(s,pat)'], seealso: ['replace', 'strrep'] },
  replace: { summary: 'Find and replace substrings', syntax: ['s = replace(s,old,new)'], seealso: ['strrep', 'erase'] },
  split: { summary: 'Split strings at a delimiter into a string array', syntax: ['c = split(s,delim)'], seealso: ['join', 'strsplit', 'splitlines'] },
  splitlines: { summary: 'Split a string at newline characters', syntax: ['c = splitlines(s)'], seealso: ['split'] },
  join: { summary: 'Join a string array into one string', syntax: ['s = join(c,delim)'], seealso: ['split', 'strjoin'] },
  strip: { summary: 'Remove leading/trailing whitespace', syntax: ["s = strip(s)", "s = strip(s,'left')"], seealso: ['strtrim', 'pad'] },
  pad: { summary: 'Pad strings to a length', syntax: ['s = pad(s,n)', "s = pad(s,n,'left')"], seealso: ['blanks', 'strip'] },
  reverse: { summary: 'Reverse the characters of strings', syntax: ['s = reverse(s)'], seealso: ['fliplr'] },
  append: { summary: 'Concatenate strings', syntax: ['s = append(s1,s2,...)'], seealso: ['strcat', 'join'] },
  extractBefore: { summary: 'Substring before a position/pattern', syntax: ['s = extractBefore(str,pat)'], seealso: ['extractAfter', 'extractBetween'] },
  extractAfter: { summary: 'Substring after a position/pattern', syntax: ['s = extractAfter(str,pat)'], seealso: ['extractBefore'] },
  extractBetween: { summary: 'Substring between two delimiters', syntax: ['s = extractBetween(str,a,b)'], seealso: ['extractBefore', 'extractAfter'] },
  bitand: { summary: 'Bit-wise AND', syntax: ['c = bitand(a,b)'], seealso: ['bitor', 'bitxor', 'bitshift'] },
  bitor: { summary: 'Bit-wise OR', syntax: ['c = bitor(a,b)'], seealso: ['bitand', 'bitxor'] },
  bitxor: { summary: 'Bit-wise XOR', syntax: ['c = bitxor(a,b)'], seealso: ['bitand', 'bitor'] },
  bitshift: { summary: 'Shift bits (left if k>0, right if k<0)', syntax: ['c = bitshift(a,k)'], seealso: ['bitand', 'pow2'] },
  bitget: { summary: 'Get bit at a position (1 = least significant)', syntax: ['b = bitget(a,pos)'], seealso: ['bitset'] },
  bitset: { summary: 'Set bit at a position', syntax: ['c = bitset(a,pos)', 'c = bitset(a,pos,val)'], seealso: ['bitget'] },
  bitcmp: { summary: 'Bit-wise complement within an integer class width', syntax: ["c = bitcmp(a,'uint8')"], seealso: ['bitand'] },
  blanks: { summary: 'Create a string of spaces', syntax: ['s = blanks(n)'], seealso: ['repmat', 'strjust'] },
  findstr: { summary: 'Find one string within another (legacy; use strfind)', syntax: ['k = findstr(s1,s2)'], seealso: ['strfind', 'strrep'] },
  strjust: { summary: 'Justify a character string (left/right/center)', syntax: ["s = strjust(str,'right')"], seealso: ['strtrim', 'blanks'] },
  strvcat: { summary: 'Vertically concatenate strings into a char matrix (space-padded)', syntax: ['S = strvcat(s1,s2,...)'], seealso: ['char', 'strcat', 'vertcat'] },
  hist: { summary: 'Histogram counts/plot (legacy; use histogram/histcounts)', syntax: ['[n,c] = hist(x)', 'hist(x,nbins)'], seealso: ['histogram', 'histcounts', 'histc'] },
  histc: { summary: 'Histogram bin counts at specified edges (legacy)', syntax: ['n = histc(x,edges)'], seealso: ['histcounts', 'discretize'] },
  exist: { summary: 'Check if a name is a variable (1) or built-in (5)', syntax: ["e = exist('name')"], seealso: ['isvarname', 'who'] },
  MException: { summary: 'Construct an exception object (struct with identifier/message)', syntax: ["ME = MException('comp:id','msg %d',v)"], seealso: ['error', 'throw', 'rethrow', 'try'] },
  rethrow: { summary: 'Re-throw a caught exception', syntax: ['rethrow(err)'], seealso: ['error', 'try', 'MException'] },
  throw: { summary: 'Throw an exception object', syntax: ['throw(ME)'], seealso: ['error', 'rethrow', 'MException'] },
  lasterr: { summary: 'Last error message', syntax: ['s = lasterr'], seealso: ['error', 'try'] },
  deal: { summary: 'Distribute inputs to outputs', syntax: ['[a,b,...] = deal(x)', '[a,b] = deal(x,y)'], seealso: ['nargin', 'nargout'] },
  func2str: { summary: 'Convert a function handle to a string', syntax: ['s = func2str(@f)'], seealso: ['str2func'] },
  str2func: { summary: 'Construct a function handle from a name', syntax: ["h = str2func('sin')"], seealso: ['func2str', 'feval'] },
  assert: { summary: 'Throw an error if a condition is false', syntax: ['assert(cond)', "assert(cond,msg)"], seealso: ['error'] },
  isvarname: { summary: 'Determine whether a string is a valid variable name', syntax: ["tf = isvarname('x')"], seealso: ['genvarname'] },
  genvarname: { summary: 'Construct a valid variable name from a string', syntax: ["s = genvarname('a b')"], seealso: ['isvarname'] },
  colon: { summary: 'Create a vector (a:d:b) via function form', syntax: ['v = colon(a,b)', 'v = colon(a,d,b)'], seealso: ['linspace'] },
  flipdim: { summary: 'Flip array along a dimension (legacy; use flip)', syntax: ['B = flipdim(A,dim)'], seealso: ['flip', 'fliplr', 'flipud'] },
  condeig: { summary: 'Condition numbers of the eigenvalues', syntax: ['c = condeig(A)'], seealso: ['eig', 'cond'] },
  polyeig: { summary: 'Polynomial eigenvalue problem (A0+λA1+…+λ^p Ap)x=0', syntax: ['e = polyeig(A0,A1,...,Ap)'], seealso: ['eig', 'roots'] },
  rms: { summary: 'Root-mean-square value', syntax: ['y = rms(X)'], seealso: ['mean', 'std', 'rmse'] },
  geomean: { summary: 'Geometric mean', syntax: ['m = geomean(X)'], seealso: ['mean', 'harmmean'] },
  harmmean: { summary: 'Harmonic mean', syntax: ['m = harmmean(X)'], seealso: ['mean', 'geomean'] },
  rmse: { summary: 'Root-mean-squared error between arrays', syntax: ['e = rmse(F,A)'], seealso: ['mape', 'rms'] },
  mape: { summary: 'Mean absolute percentage error', syntax: ['e = mape(F,A)'], seealso: ['rmse'] },
  sylvester: { summary: 'Solve the Sylvester equation A*X + X*B = C', syntax: ['X = sylvester(A,B,C)'], seealso: ['lyap', 'mldivide'] },
  lsqminnorm: { summary: 'Minimum-norm least-squares solution', syntax: ['x = lsqminnorm(A,b)'], seealso: ['pinv', 'mldivide', 'lsqnonneg'] },
  ordeig: { summary: 'Eigenvalues of a (quasi)triangular matrix in diagonal order', syntax: ['e = ordeig(T)'], seealso: ['eig', 'schur', 'ordschur'] },
  fillmissing: { summary: 'Fill missing (NaN) entries: constant/previous/next/nearest/linear', syntax: ["y = fillmissing(x,'linear')", "y = fillmissing(x,'constant',v)"], seealso: ['ismissing', 'rmmissing', 'standardizeMissing'] },
  rmmissing: { summary: 'Remove missing (NaN) entries or rows', syntax: ['y = rmmissing(x)'], seealso: ['fillmissing', 'ismissing'] },
  ismissing: { summary: 'Logical mask of missing (NaN) values', syntax: ['tf = ismissing(x)'], seealso: ['anymissing', 'rmmissing'] },
  discretize: { summary: 'Group data into bins given edges', syntax: ['bin = discretize(x,edges)'], seealso: ['histcounts', 'accumarray'] },
  uniquetol: { summary: 'Unique values within a tolerance', syntax: ['C = uniquetol(A,tol)'], seealso: ['unique', 'ismembertol'] },
  idivide: { summary: 'Integer division with rounding option (fix/floor/ceil/round)', syntax: ["q = idivide(a,b,'floor')"], seealso: ['mod', 'rem', 'fix'] },
  polydiv: { summary: 'Polynomial long division → [quotient, remainder]', syntax: ['[q,r] = polydiv(u,v)'], seealso: ['deconv', 'conv'] },
  rosser: { summary: 'Classic 8×8 symmetric eigenvalue test matrix', syntax: ['A = rosser'], seealso: ['gallery', 'wilkinson', 'eig'] },
  xline: { summary: 'Vertical reference line(s) at constant x', syntax: ['xline(x)', "xline(x,'--r')", "xline(x,'-','label')"], seealso: ['yline', 'plot', 'line'] },
  yline: { summary: 'Horizontal reference line(s) at constant y', syntax: ['yline(y)', "yline(y,'--r')", "yline(y,'-','label')"], seealso: ['xline', 'plot', 'line'] },
  disp: { summary: 'Display value without its variable name', syntax: ['disp(X)'], seealso: ['fprintf', 'sprintf'] },
  fprintf: { summary: 'Write formatted data to the command window', syntax: ['fprintf(FORMAT,A,...)'], seealso: ['sprintf', 'disp'] },
  sprintf: { summary: 'Format data into a string', syntax: ['str = sprintf(FORMAT,A,...)'], seealso: ['fprintf', 'num2str'] },
  num2str: { summary: 'Convert numbers to a character array', syntax: ['s = num2str(X)'], seealso: ['str2num', 'sprintf'] },
  input: { summary: 'Request user input in the command window', syntax: ['x = input(PROMPT)', "str = input(PROMPT,'s')"], seealso: ['disp', 'fprintf'] },
  error: { summary: 'Throw an error and stop execution', syntax: ['error(MSG)', 'error(FORMAT,A,...)'], seealso: ['warning'] },
  arrayfun: { summary: 'Apply a function to each element of an array', syntax: ['B = arrayfun(@f,A)'], seealso: ['feval'] },
  feval: { summary: 'Evaluate a function handle', syntax: ['[y,...] = feval(@f,x,...)'], seealso: ['arrayfun'] },
  find: { summary: 'Find indices of nonzero elements', syntax: ['k = find(X)', 'k = find(X,n)', '[r,c] = find(X)'], seealso: ['any', 'sort', 'ismember'] },
  isequal: { summary: 'Determine array equality', syntax: ['tf = isequal(A,B,...)'], seealso: ['unique', 'ismember'] },
  unique: { summary: 'Sorted unique values of an array', syntax: ['C = unique(A)'], seealso: ['sort', 'ismember', 'find'] },
  ismember: { summary: 'Test membership of A in B (element-wise)', syntax: ['tf = ismember(A,B)', '[tf,loc] = ismember(A,B)'], seealso: ['unique', 'find'] },
  logical: { summary: 'Convert numeric values to logical (0/1)', syntax: ['L = logical(X)'], seealso: ['true', 'false', 'find'] },
  flip: { summary: 'Flip order of elements', syntax: ['B = flip(A)', 'B = flip(A,dim)'], seealso: ['fliplr', 'flipud', 'sort'] },
  fliplr: { summary: 'Flip array left to right', syntax: ['B = fliplr(A)'], seealso: ['flipud', 'flip'] },
  flipud: { summary: 'Flip array up to down', syntax: ['B = flipud(A)'], seealso: ['fliplr', 'flip'] },
  cat: { summary: 'Concatenate arrays along a dimension', syntax: ['C = cat(dim,A,B,...)'], seealso: ['horzcat', 'vertcat', 'repmat'] },
  isvector: { summary: 'Determine whether input is a vector', syntax: ['tf = isvector(X)'], seealso: ['isrow', 'iscolumn', 'isscalar'] },
  isrow: { summary: 'Determine if input is a row vector', syntax: ['tf = isrow(X)'], seealso: ['iscolumn', 'isvector'] },
  iscolumn: { summary: 'Determine if input is a column vector', syntax: ['tf = iscolumn(X)'], seealso: ['isrow', 'isvector'] },
  linsolve: { summary: 'Solve the linear system A*X = B', syntax: ['X = linsolve(A,B)'], seealso: ['mldivide', 'inv', 'lu'] },
  mrdivide: { summary: 'Solve x*A = B (right division)', syntax: ['X = mrdivide(B,A)', 'X = B/A'], seealso: ['mldivide', 'inv'] },
  pinv: { summary: 'Moore-Penrose pseudoinverse', syntax: ['B = pinv(A)'], seealso: ['inv', 'svd', 'mldivide'] },
  kron: { summary: 'Kronecker tensor product', syntax: ['K = kron(A,B)'], seealso: ['repmat'] },
  cross: { summary: 'Cross product of two 3-vectors', syntax: ['c = cross(a,b)'], seealso: ['dot'] },
  tril: { summary: 'Lower triangular part of a matrix', syntax: ['L = tril(A)', 'L = tril(A,k)'], seealso: ['triu', 'diag'] },
  triu: { summary: 'Upper triangular part of a matrix', syntax: ['U = triu(A)', 'U = triu(A,k)'], seealso: ['tril', 'diag'] },
  rank: { summary: 'Rank of a matrix', syntax: ['r = rank(A)', 'r = rank(A,tol)'], seealso: ['svd', 'rref', 'null'] },
  rref: { summary: 'Reduced row echelon form (Gauss-Jordan)', syntax: ['R = rref(A)'], seealso: ['rank', 'mldivide'] },
  cond: { summary: 'Condition number (2-norm)', syntax: ['c = cond(A)'], seealso: ['norm', 'svd', 'rcond'] },
  vecnorm: { summary: 'Vector-wise norm of a matrix', syntax: ['n = vecnorm(A)', 'n = vecnorm(A,p,dim)'], seealso: ['norm'] },
  null: { summary: 'Orthonormal basis for the null space', syntax: ['Z = null(A)'], seealso: ['orth', 'rank', 'svd'] },
  orth: { summary: 'Orthonormal basis for the range', syntax: ['Q = orth(A)'], seealso: ['null', 'qr', 'svd'] },
  chol: { summary: 'Cholesky factorization (RᵀR = A)', syntax: ['R = chol(A)'], seealso: ['lu', 'qr'] },
  qr: { summary: 'QR decomposition', syntax: ['[Q,R] = qr(A)', 'R = qr(A)'], seealso: ['lu', 'chol', 'svd'] },
  lu: { summary: 'LU factorization with pivoting', syntax: ['[L,U] = lu(A)', '[L,U,P] = lu(A)'], seealso: ['qr', 'chol', 'inv'] },
  svd: { summary: 'Singular value decomposition', syntax: ['s = svd(A)', '[U,S,V] = svd(A)'], seealso: ['eig', 'pinv', 'rank'] },
  eig: { summary: 'Eigenvalues and eigenvectors', syntax: ['e = eig(A)', '[V,D] = eig(A)'], seealso: ['svd', 'det', 'trace', 'roots'] },
  issymmetric: { summary: 'Determine if a matrix is symmetric', syntax: ['tf = issymmetric(A)'], seealso: ['istriu', 'istril', 'isdiag'] },
  isdiag: { summary: 'Determine if a matrix is diagonal', syntax: ['tf = isdiag(A)'], seealso: ['diag', 'istriu', 'istril'] },
  bandwidth: { summary: 'Lower and upper matrix bandwidth', syntax: ['[lo,up] = bandwidth(A)'], seealso: ['isbanded', 'tril', 'triu'] },
  fzero: { summary: 'Root of a nonlinear function', syntax: ['x = fzero(@f,x0)', 'x = fzero(@f,[a b])'], seealso: ['roots', 'fminbnd', 'fminsearch'] },
  fminbnd: { summary: 'Minimum of a function on an interval', syntax: ['x = fminbnd(@f,a,b)'], seealso: ['fminsearch', 'fzero'] },
  fminsearch: { summary: 'Unconstrained minimum (Nelder-Mead)', syntax: ['x = fminsearch(@f,x0)'], seealso: ['fminbnd', 'fzero'] },
  integral: { summary: 'Numerical integration (adaptive Simpson)', syntax: ['q = integral(@f,a,b)'], seealso: ['trapz', 'diff'] },
  trapz: { summary: 'Trapezoidal numerical integration', syntax: ['q = trapz(y)', 'q = trapz(x,y)'], seealso: ['integral', 'cumsum'] },
  gradient: { summary: 'Numerical gradient', syntax: ['g = gradient(y)', 'g = gradient(y,h)'], seealso: ['diff'] },
  interp1: { summary: '1-D interpolation', syntax: ["yq = interp1(x,v,xq)", "yq = interp1(x,v,xq,'nearest')"], seealso: ['spline', 'polyfit'] },
  spline: { summary: 'Cubic spline interpolation', syntax: ['yq = spline(x,v,xq)'], seealso: ['interp1', 'polyfit'] },
  roots: { summary: 'Polynomial roots (real or complex)', syntax: ['r = roots(p)'], seealso: ['polyval', 'polyfit', 'fzero'] },
  ode45: { summary: 'Solve nonstiff ODEs (adaptive Dormand-Prince RK45)', syntax: ['[t,y] = ode45(@f,tspan,y0)', '[t,y] = ode45(@f,tspan,y0,opts)'], seealso: ['ode23', 'ode15s', 'ode23s', 'odeset'] },
  ode23: { summary: 'Solve nonstiff ODEs (adaptive Bogacki-Shampine 2,3)', syntax: ['[t,y] = ode23(@f,tspan,y0)'], seealso: ['ode45', 'ode23s', 'odeset'] },
  ode15s: { summary: 'Solve stiff ODEs (variable-order 1–5 NDF/BDF)', syntax: ['[t,y] = ode15s(@f,tspan,y0)', "opts=odeset('MaxOrder',2)"], seealso: ['ode23s', 'ode45', 'odeset'] },
  ode23s: { summary: 'Solve stiff ODEs (modified Rosenbrock 2,3; L-stable, numeric Jacobian)', syntax: ['[t,y] = ode23s(@f,tspan,y0)'], seealso: ['ode15s', 'ode45', 'odeset'] },
  odeset: { summary: 'Create/modify an ODE options struct (RelTol, AbsTol, InitialStep, MaxStep)', syntax: ["opts = odeset('RelTol',1e-6,'AbsTol',1e-8)"], seealso: ['ode45', 'ode15s'] },
  logspace: { summary: 'Logarithmically spaced vector', syntax: ['y = logspace(a,b)', 'y = logspace(a,b,n)'], seealso: ['linspace'] },
  meshgrid: { summary: '2-D grid coordinates', syntax: ['[X,Y] = meshgrid(x,y)'], seealso: ['linspace'] },
  sortrows: { summary: 'Sort rows in ascending order', syntax: ['B = sortrows(A)', '[B,i] = sortrows(A)'], seealso: ['sort', 'unique'] },
  nnz: { summary: 'Number of nonzero elements', syntax: ['n = nnz(A)'], seealso: ['find', 'any'] },
  cell: { summary: 'Create a cell array of empty matrices', syntax: ['C = cell(n)', 'C = cell(r,c)'], seealso: ['iscell', 'num2cell', 'cell2mat', 'struct'] },
  iscell: { summary: 'Determine whether input is a cell array', syntax: ['tf = iscell(C)'], seealso: ['cell', 'iscellstr', 'isstruct'] },
  iscellstr: { summary: 'Determine if input is a cell array of character vectors', syntax: ['tf = iscellstr(C)'], seealso: ['iscell', 'ischar'] },
  num2cell: { summary: 'Convert array to a cell array (one element per cell)', syntax: ['C = num2cell(A)'], seealso: ['cell2mat', 'cell', 'mat2cell'] },
  cell2mat: { summary: 'Convert a cell array of matrices into a single matrix', syntax: ['A = cell2mat(C)'], seealso: ['num2cell', 'cell'] },
  celldisp: { summary: 'Display the contents of a cell array', syntax: ['celldisp(C)'], seealso: ['disp', 'cell'] },
  cellfun: { summary: 'Apply a function to each cell of a cell array', syntax: ['A = cellfun(@f,C)', "A = cellfun(@f,C,'UniformOutput',false)"], seealso: ['arrayfun', 'structfun'] },
  strsplit: { summary: 'Split string at delimiters into a cell array', syntax: ['C = strsplit(str)', 'C = strsplit(str,delim)'], seealso: ['strjoin', 'strtok', 'regexp'] },
  strjoin: { summary: 'Join a cell array of strings into one string', syntax: ['s = strjoin(C)', 's = strjoin(C,delim)'], seealso: ['strsplit', 'strcat'] },
  struct: { summary: 'Create a structure with the given fields', syntax: ["s = struct('f1',v1,'f2',v2,...)"], seealso: ['fieldnames', 'isfield', 'setfield', 'cell2struct'] },
  isstruct: { summary: 'Determine whether input is a structure', syntax: ['tf = isstruct(s)'], seealso: ['struct', 'isfield', 'iscell'] },
  isfield: { summary: 'Determine whether a field exists in a structure', syntax: ['tf = isfield(s,field)'], seealso: ['fieldnames', 'rmfield', 'struct'] },
  fieldnames: { summary: 'Field names of a structure', syntax: ['c = fieldnames(s)'], seealso: ['isfield', 'numfields', 'orderfields'] },
  numfields: { summary: 'Number of fields in a structure', syntax: ['n = numfields(s)'], seealso: ['fieldnames', 'isfield'] },
  rmfield: { summary: 'Remove one or more fields from a structure', syntax: ['s = rmfield(s,field)'], seealso: ['setfield', 'fieldnames', 'isfield'] },
  setfield: { summary: 'Set the value of a structure field', syntax: ['s = setfield(s,field,value)'], seealso: ['getfield', 'rmfield', 'struct'] },
  getfield: { summary: 'Get the value of a structure field', syntax: ['v = getfield(s,field)'], seealso: ['setfield', 'fieldnames'] },
  orderfields: { summary: 'Order the fields of a structure alphabetically', syntax: ['s = orderfields(s)'], seealso: ['fieldnames', 'struct'] },
  struct2cell: { summary: 'Convert a structure to a cell array', syntax: ['c = struct2cell(s)'], seealso: ['cell2struct', 'fieldnames'] },
  cell2struct: { summary: 'Convert a cell array to a structure', syntax: ['s = cell2struct(c,fields)'], seealso: ['struct2cell', 'struct'] },
  structfun: { summary: 'Apply a function to each field of a scalar structure', syntax: ['A = structfun(@f,s)', "A = structfun(@f,s,'UniformOutput',false)"], seealso: ['cellfun', 'arrayfun'] },
  horzcat: { summary: 'Horizontal concatenation [A B] (dimension 2)', syntax: ['C = horzcat(A,B,...)'], seealso: ['vertcat', 'cat'] },
  vertcat: { summary: 'Vertical concatenation [A; B] (dimension 1)', syntax: ['C = vertcat(A,B,...)'], seealso: ['horzcat', 'cat'] },
  isequaln: { summary: 'Array equality treating NaN values as equal', syntax: ['tf = isequaln(A,B,...)'], seealso: ['isequal'] },
  size_equal: { summary: 'True if all arguments share identical dimensions', syntax: ['tf = size_equal(A,B,...)'], seealso: ['size', 'isequal'] },
  corr: { summary: 'Linear correlation coefficient(s)', syntax: ['R = corr(x,y)', 'R = corr(X)'], seealso: ['corrcoef', 'cov'] },
  qmr: { summary: 'Quasi-minimal residual solver (here: direct solve A\\b)', syntax: ['x = qmr(A,b)'], seealso: ['gmres', 'bicg', 'pcg'] },
  condest1: { summary: '1-norm condition number estimate', syntax: ['c = condest1(A)'], seealso: ['condest', 'cond', 'rcond'] },
  wilkinson: { summary: "Wilkinson's eigenvalue test matrix (symmetric tridiagonal)", syntax: ['W = wilkinson(n)'], seealso: ['gallery', 'eig'] },
  gallery: { summary: "Famous test matrices. Supported: minij, moler, lehmer, frank, cauchy, clement, kms, parter, fiedler, gcdmat, grcar, tridiag, riemann, chebspec, wilk, toeppen", syntax: ["A = gallery('minij',n)", "A = gallery('kms',n,rho)"], seealso: ['magic', 'hilb', 'pascal', 'wilkinson', 'toeplitz'] },
  bartlett: { summary: 'Bartlett (triangular) window', syntax: ['w = bartlett(N)'], seealso: ['hamming', 'hann', 'blackman'] },
  blackman: { summary: 'Blackman window', syntax: ['w = blackman(N)'], seealso: ['hamming', 'hann', 'bartlett'] },
  hamming: { summary: 'Hamming window', syntax: ['w = hamming(N)'], seealso: ['hann', 'blackman', 'bartlett'] },
  hanning: { summary: 'Hanning window (denominator N+1)', syntax: ['w = hanning(N)'], seealso: ['hann', 'hamming'] },
  hann: { summary: 'Hann window (denominator N-1)', syntax: ['w = hann(N)'], seealso: ['hanning', 'hamming'] },
  typecast: { summary: 'Reinterpret the bytes of a value as another class. NOTE: this engine stores all numbers as double, so the source is treated as double — useful for inspecting IEEE-754 bytes, but it will not round-trip through integer classes.', syntax: ["y = typecast(x,'uint8')"], seealso: ['cast', 'swapbytes', 'double'] },
  swapbytes: { summary: 'Reverse byte order of each element (assumes 8-byte double storage)', syntax: ['y = swapbytes(x)'], seealso: ['typecast', 'cast'] },
  mkpp: { summary: 'Make a piecewise-polynomial (pp) structure', syntax: ['pp = mkpp(breaks,coefs)'], seealso: ['ppval', 'unmkpp', 'spline', 'pchip'] },
  unmkpp: { summary: 'Extract the pieces of a pp structure', syntax: ['[breaks,coefs,L,k,d] = unmkpp(pp)'], seealso: ['mkpp', 'ppval'] },
  ppval: { summary: 'Evaluate a piecewise polynomial', syntax: ['v = ppval(pp,xq)'], seealso: ['mkpp', 'unmkpp', 'spline', 'pchip'] },
  psi: { summary: 'Digamma function ψ(x) = Γ′(x)/Γ(x)', syntax: ['y = psi(x)'], seealso: ['gamma', 'gammaln'] },
  expint: { summary: 'Exponential integral E₁(x) for x>0', syntax: ['y = expint(x)'], seealso: ['sinint', 'cosint', 'gammainc'] },
  sinint: { summary: 'Sine integral Si(x)', syntax: ['y = sinint(x)'], seealso: ['cosint', 'expint'] },
  cosint: { summary: 'Cosine integral Ci(x)', syntax: ['y = cosint(x)'], seealso: ['sinint', 'expint'] },
  legendre: { summary: 'Associated Legendre functions P_n^m(x), m=0..n', syntax: ['P = legendre(n,X)'], seealso: ['gamma'] },
  besselj: { summary: 'Bessel function of the first kind J_ν(x)', syntax: ['J = besselj(nu,X)'], seealso: ['bessely', 'besseli', 'besselk', 'besselh'] },
  bessely: { summary: 'Bessel function of the second kind Y_ν(x)', syntax: ['Y = bessely(nu,X)'], seealso: ['besselj', 'besselk'] },
  besseli: { summary: 'Modified Bessel function of the first kind I_ν(x)', syntax: ['I = besseli(nu,X)'], seealso: ['besselk', 'besselj'] },
  besselk: { summary: 'Modified Bessel function of the second kind K_ν(x)', syntax: ['K = besselk(nu,X)'], seealso: ['besseli', 'bessely'] },
  besselh: { summary: 'Bessel function of the third kind (Hankel) H_ν^(k)(x) = J ± iY', syntax: ['H = besselh(nu,X)', 'H = besselh(nu,k,X)'], seealso: ['besselj', 'bessely'] },
  airy: { summary: 'Airy functions (0=Ai,1=Ai′,2=Bi,3=Bi′)', syntax: ['y = airy(X)', 'y = airy(k,X)'], seealso: ['besselk', 'besselj'] },
  ellipke: { summary: 'Complete elliptic integrals K(m) and E(m)', syntax: ['[K,E] = ellipke(m)'], seealso: ['ellipj'] },
  ellipj: { summary: 'Jacobi elliptic functions sn, cn, dn', syntax: ['[sn,cn,dn] = ellipj(u,m)'], seealso: ['ellipke'] },
  delaunay: { summary: '2-D Delaunay triangulation (vertex-index triples)', syntax: ['T = delaunay(x,y)'], seealso: ['griddata', 'convhull', 'voronoi'] },
  boundary: { summary: 'Boundary polygon around a set of 2-D points (convex hull here)', syntax: ['k = boundary(x,y)', '[k,a] = boundary(x,y)'], seealso: ['convhull', 'polyarea'] },
  voronoi: { summary: 'Voronoi diagram (line segments, or plot)', syntax: ['voronoi(x,y)', '[vx,vy] = voronoi(x,y)'], seealso: ['delaunay', 'convhull'] },
  convhulln: { summary: 'N-D convex hull (facet vertex indices, + volume)', syntax: ['K = convhulln(P)', '[K,V] = convhulln(P)'], seealso: ['convhull', 'delaunayn', 'voronoin'] },
  delaunayn: { summary: 'N-D Delaunay triangulation (simplex vertex indices)', syntax: ['T = delaunayn(P)'], seealso: ['delaunay', 'convhulln', 'voronoin', 'griddatan'] },
  voronoin: { summary: 'N-D Voronoi diagram (vertices V and cell index lists C)', syntax: ['[V,C] = voronoin(P)'], seealso: ['voronoi', 'delaunayn', 'convhulln'] },
  tsearchn: { summary: 'N-D enclosing-simplex search (index + barycentric coords)', syntax: ['t = tsearchn(P,T,PQ)', '[t,bc] = tsearchn(P,T,PQ)'], seealso: ['delaunayn', 'griddatan', 'dsearchn'] },
  griddatan: { summary: 'Interpolate scattered N-D data (linear or nearest)', syntax: ['vq = griddatan(P,v,PQ)', "vq = griddatan(P,v,PQ,'nearest')"], seealso: ['griddata', 'delaunayn', 'tsearchn'] },
  graph: { summary: 'Create an undirected graph', syntax: ['G = graph(s,t)', 'G = graph(s,t,w)', 'G = graph(A)'], seealso: ['digraph', 'adjacency', 'shortestpath', 'plot'] },
  digraph: { summary: 'Create a directed graph', syntax: ['G = digraph(s,t)', 'G = digraph(s,t,w)', 'G = digraph(A)'], seealso: ['graph', 'toposort', 'maxflow'] },
  numnodes: { summary: 'Number of nodes in a graph', syntax: ['n = numnodes(G)'], seealso: ['numedges', 'graph'] },
  numedges: { summary: 'Number of edges in a graph', syntax: ['m = numedges(G)'], seealso: ['numnodes', 'graph'] },
  addnode: { summary: 'Add nodes to a graph', syntax: ['H = addnode(G,N)', 'H = addnode(G,names)'], seealso: ['rmnode', 'addedge'] },
  rmnode: { summary: 'Remove nodes (and incident edges) from a graph', syntax: ['H = rmnode(G,nodes)'], seealso: ['addnode', 'rmedge'] },
  addedge: { summary: 'Add edges to a graph', syntax: ['H = addedge(G,s,t)', 'H = addedge(G,s,t,w)'], seealso: ['rmedge', 'addnode'] },
  rmedge: { summary: 'Remove edges from a graph', syntax: ['H = rmedge(G,s,t)'], seealso: ['addedge', 'rmnode'] },
  neighbors: { summary: 'Neighbors of a node', syntax: ['N = neighbors(G,node)'], seealso: ['successors', 'predecessors', 'degree'] },
  successors: { summary: 'Successor nodes in a digraph', syntax: ['N = successors(G,node)'], seealso: ['predecessors', 'neighbors'] },
  predecessors: { summary: 'Predecessor nodes in a digraph', syntax: ['N = predecessors(G,node)'], seealso: ['successors', 'neighbors'] },
  degree: { summary: 'Degree of graph nodes', syntax: ['d = degree(G)', 'd = degree(G,nodes)'], seealso: ['indegree', 'outdegree'] },
  indegree: { summary: 'In-degree of digraph nodes', syntax: ['d = indegree(G)'], seealso: ['outdegree', 'degree'] },
  outdegree: { summary: 'Out-degree of digraph nodes', syntax: ['d = outdegree(G)'], seealso: ['indegree', 'degree'] },
  findnode: { summary: 'Locate a node by name or index', syntax: ['i = findnode(G,name)'], seealso: ['findedge'] },
  findedge: { summary: 'Locate edges between nodes', syntax: ['idx = findedge(G,s,t)', '[s,t] = findedge(G)'], seealso: ['findnode'] },
  adjacency: { summary: 'Adjacency matrix of a graph (sparse)', syntax: ['A = adjacency(G)'], seealso: ['incidence', 'laplacian'] },
  incidence: { summary: 'Incidence matrix of a graph (sparse, signed)', syntax: ['I = incidence(G)'], seealso: ['adjacency', 'laplacian'] },
  laplacian: { summary: 'Graph Laplacian (sparse, D−A)', syntax: ['L = laplacian(G)'], seealso: ['adjacency', 'incidence'] },
  shortestpath: { summary: 'Shortest path between two nodes (Dijkstra)', syntax: ['P = shortestpath(G,s,t)', '[P,d] = shortestpath(G,s,t)'], seealso: ['distances', 'bfsearch'] },
  distances: { summary: 'Shortest-path distances between node sets', syntax: ['D = distances(G)', 'D = distances(G,s,t)'], seealso: ['shortestpath'] },
  bfsearch: { summary: 'Breadth-first search order from a node', syntax: ['v = bfsearch(G,s)'], seealso: ['dfsearch', 'shortestpath'] },
  dfsearch: { summary: 'Depth-first search order from a node', syntax: ['v = dfsearch(G,s)'], seealso: ['bfsearch'] },
  conncomp: { summary: 'Connected components of a graph', syntax: ['bins = conncomp(G)'], seealso: ['subgraph'] },
  toposort: { summary: 'Topological order of a DAG', syntax: ['order = toposort(G)'], seealso: ['isdag', 'digraph'] },
  isdag: { summary: 'True if a digraph is acyclic', syntax: ['tf = isdag(G)'], seealso: ['toposort'] },
  ismultigraph: { summary: 'True if a graph has parallel edges', syntax: ['tf = ismultigraph(G)'], seealso: ['graph'] },
  minspantree: { summary: 'Minimum spanning tree (Prim)', syntax: ['T = minspantree(G)'], seealso: ['graph', 'conncomp'] },
  maxflow: { summary: 'Maximum flow between two nodes (Edmonds–Karp)', syntax: ['mf = maxflow(G,s,t)'], seealso: ['shortestpath'] },
  subgraph: { summary: 'Extract a subgraph on a node subset', syntax: ['H = subgraph(G,nodes)'], seealso: ['rmnode', 'reordernodes'] },
  reordernodes: { summary: 'Reorder graph nodes', syntax: ['H = reordernodes(G,order)'], seealso: ['subgraph'] },
  centrality: { summary: 'Node centrality (degree/closeness/betweenness/pagerank)', syntax: ["c = centrality(G,'pagerank')"], seealso: ['degree', 'distances'] },
  humps: { summary: 'The classic MATLAB demo function (two peaks)', syntax: ['y = humps(x)'], seealso: ['fzero', 'integral'] },
  corrcov: { summary: 'Convert a covariance matrix to a correlation matrix', syntax: ['R = corrcov(C)'], seealso: ['cov', 'corrcoef'] },
  normpdf: { summary: 'Normal probability density function', syntax: ['y = normpdf(x,mu,sigma)'], seealso: ['normcdf', 'randn'] },
  normcdf: { summary: 'Normal cumulative distribution function', syntax: ['p = normcdf(x,mu,sigma)'], seealso: ['normpdf', 'erf'] },
  randsample: { summary: 'Random sample from a population', syntax: ['y = randsample(n,k)', 'y = randsample(pop,k,replace)'], seealso: ['randperm', 'datasample'] },
  timeit: { summary: 'Time a function handle (median of repeated calls)', syntax: ['t = timeit(f)'], seealso: ['tic', 'toc'] },
  jsonencode: { summary: 'Encode a value as JSON text', syntax: ['s = jsonencode(v)'], seealso: ['jsondecode'] },
  jsondecode: { summary: 'Decode JSON text into a value', syntax: ['v = jsondecode(s)'], seealso: ['jsonencode'] },
  griddata: { summary: 'Interpolate scattered 2-D data onto query points (linear or nearest)', syntax: ['vq = griddata(x,y,v,xq,yq)', "vq = griddata(x,y,v,xq,yq,'nearest')"], seealso: ['delaunay', 'interp2', 'scatteredInterpolant'] },
  interp3: { summary: 'Trilinear interpolation on a 3-D grid', syntax: ['Vq = interp3(V,Xq,Yq,Zq)', 'Vq = interp3(X,Y,Z,V,Xq,Yq,Zq)'], seealso: ['interp2', 'interp1', 'griddata'] },
  interpn: { summary: 'Gridded interpolation (1-D/2-D/3-D)', syntax: ['Vq = interpn(...)'], seealso: ['interp3', 'interp2', 'interp1'] },
  ndims: { summary: 'Number of array dimensions', syntax: ['n = ndims(A)'], seealso: ['size', 'numel'] },
  squeeze: { summary: 'Remove singleton dimensions of an N-D array', syntax: ['B = squeeze(A)'], seealso: ['reshape', 'permute'] },
  permute: { summary: 'Permute array dimensions', syntax: ['B = permute(A,order)'], seealso: ['ipermute', 'reshape', 'transpose'] },
  schur: { summary: 'Schur decomposition (real quasi-triangular, or complex with second arg)', syntax: ['T = schur(A)', '[U,T] = schur(A)', "[U,T] = schur(A,'complex')"], seealso: ['eig', 'rsf2csf', 'qz', 'hess'] },
  rsf2csf: { summary: 'Convert real Schur form to complex Schur form', syntax: ['[U,T] = rsf2csf(U,T)'], seealso: ['schur'] },
  balance: { summary: 'Diagonal scaling to improve eigenvalue conditioning', syntax: ['B = balance(A)', '[T,B] = balance(A)'], seealso: ['eig', 'schur'] },
  qz: { summary: 'Generalized (QZ) Schur decomposition of the pair (A,B); nonsingular B', syntax: ['[AA,BB,Q,Z] = qz(A,B)'], seealso: ['eig', 'schur'] },
  ordschur: { summary: 'Reorder eigenvalues in a Schur factorization', syntax: ['[US,TS] = ordschur(U,T,select)'], seealso: ['schur'] },
  sparse: { summary: 'Create a sparse matrix (CSC)', syntax: ['S = sparse(A)', 'S = sparse(i,j,v)', 'S = sparse(i,j,v,m,n)', 'S = sparse(m,n)'], seealso: ['full', 'spdiags', 'speye', 'issparse'] },
  full: { summary: 'Convert a sparse matrix to dense storage', syntax: ['A = full(S)'], seealso: ['sparse'] },
  issparse: { summary: 'Determine whether a matrix is stored sparse', syntax: ['tf = issparse(S)'], seealso: ['sparse', 'full'] },
  spones: { summary: 'Replace nonzero entries with 1 (preserving sparsity)', syntax: ['R = spones(S)'], seealso: ['nnz', 'nonzeros', 'spfun'] },
  nonzeros: { summary: 'Nonzero matrix elements as a column vector (column-major)', syntax: ['v = nonzeros(S)'], seealso: ['nnz', 'find'] },
  nzmax: { summary: 'Storage allocated for nonzero entries', syntax: ['n = nzmax(S)'], seealso: ['nnz'] },
  spdiags: { summary: 'Extract or build sparse band/diagonal matrices', syntax: ['S = spdiags(B,d,m,n)'], seealso: ['diag', 'sparse'] },
  speye: { summary: 'Sparse identity matrix', syntax: ['S = speye(n)', 'S = speye(m,n)'], seealso: ['eye', 'sparse'] },
  spalloc: { summary: 'Allocate an all-zero sparse matrix', syntax: ['S = spalloc(m,n,nzmax)'], seealso: ['sparse'] },
  sprand: { summary: 'Uniform random sparse matrix of given density', syntax: ['S = sprand(m,n,density)', 'S = sprand(A)'], seealso: ['sprandn', 'sprandsym', 'rand'] },
  sprandn: { summary: 'Normal random sparse matrix of given density', syntax: ['S = sprandn(m,n,density)'], seealso: ['sprand', 'sprandsym'] },
  sprandsym: { summary: 'Symmetric random sparse matrix (diagonally dominant)', syntax: ['S = sprandsym(n,density)'], seealso: ['sprand', 'sprandn'] },
  spy: { summary: 'Plot the sparsity pattern of a matrix', syntax: ['spy(S)'], seealso: ['sparse', 'nnz'] },
  etree: { summary: 'Elimination tree (parent vector; 0 = root)', syntax: ['p = etree(S)'], seealso: ['symrcm', 'amd', 'chol'] },
  symrcm: { summary: 'Symmetric reverse Cuthill–McKee ordering', syntax: ['p = symrcm(S)'], seealso: ['amd', 'symamd', 'etree'] },
  amd: { summary: 'Approximate (here exact greedy) minimum-degree ordering', syntax: ['p = amd(S)'], seealso: ['symamd', 'colamd', 'symrcm'] },
  symamd: { summary: 'Symmetric minimum-degree ordering', syntax: ['p = symamd(S)'], seealso: ['amd', 'colamd'] },
  colamd: { summary: 'Column minimum-degree ordering (AᵀA pattern)', syntax: ['p = colamd(S)'], seealso: ['amd', 'symamd'] },
  ichol: { summary: 'Incomplete Cholesky IC(0) on the pattern of A', syntax: ['L = ichol(A)'], seealso: ['chol', 'ilu', 'pcg'] },
  ilu: { summary: 'Incomplete LU ILU(0) on the pattern of A', syntax: ['[L,U] = ilu(A)'], seealso: ['lu', 'ichol', 'gmres'] },
  spconvert: { summary: 'Build a sparse matrix from a triplet ([i j v]) matrix', syntax: ['S = spconvert(D)'], seealso: ['sparse', 'find'] },
  spaugment: { summary: 'Augmented system [cI A; Aᵀ 0]', syntax: ['S = spaugment(A,c)'], seealso: ['sparse', 'mldivide'] },
  spparms: { summary: 'Sparse solver tuning parameters (accepted, defaults used)', syntax: ["spparms('default')"], seealso: ['sparse'] },
  dmperm: { summary: 'Dulmage–Mendelsohn permutation / maximum matching', syntax: ['p = dmperm(A)', '[p,q] = dmperm(A)'], seealso: ['sprank', 'symrcm'] },
  gplot: { summary: 'Plot a graph from an adjacency matrix and node coordinates', syntax: ['gplot(A,xy)'], seealso: ['graph', 'spy'] },
  colmmd: { summary: 'Column min-degree ordering (deprecated → colamd)', syntax: ['p = colmmd(S)'], seealso: ['colamd', 'symamd'] },
  symmmd: { summary: 'Symmetric min-degree ordering (deprecated → symamd)', syntax: ['p = symmmd(S)'], seealso: ['symamd', 'amd'] },
  luinc: { summary: 'Incomplete LU (deprecated → ilu)', syntax: ['[L,U] = luinc(A)'], seealso: ['ilu', 'lu'] },
  cholinc: { summary: 'Incomplete Cholesky (deprecated → ichol)', syntax: ['L = cholinc(A)'], seealso: ['ichol', 'chol'] },
};

/** Base-MATLAB functions whose reference page is at /help/matlab/ref/<name>.html.
 *  Anything not listed (toolbox functions, internal aliases) falls back to search. */
const BASE_REF = new Set<string>((
  'zeros ones eye diag blkdiag cat horzcat vertcat linspace logspace meshgrid ndgrid size length numel ndims ' +
  'isempty isvector ismatrix isscalar isnumeric reshape squeeze permute ipermute shiftdim flip fliplr flipud rot90 circshift ' +
  'tril triu sort sortrows abs sign sqrt nthroot ceil floor round fix mod rem hypot sum prod cumsum cumprod diff ' +
  'movsum movmean movmedian movmax movmin cummax cummin accumarray sin sind cos cosd tan tand asin asind acos acosd atan atand atan2 atan2d ' +
  'sinh cosh tanh asinh acosh atanh sec csc cot exp expm1 log log10 log2 log1p pow2 reallog realpow realsqrt ' +
  'inv pinv linsolve lscov det norm rank rref null orth trace cond condest rcond subspace eig eigs svd svds lu qr chol ldl schur hess ' +
  'expm logm sqrtm fzero fminbnd fminsearch lsqnonneg roots polyfit polyval conv deconv polyder polyint interp1 interp2 spline pchip makima interpft ' +
  'integral integral2 integral3 trapz cumtrapz gradient del2 ode45 ode23 ode78 ode89 ode113 ode15s ode23s ode23t ode23tb odeset quadgk quad2d ' +
  'mean median mode std var min max bounds mink maxk corrcoef cov factor factorial gcd lcm nchoosek perms primes isprime rat ' +
  'eps flintmax realmax realmin intmax intmin real imag conj angle unwrap fft ifft fft2 ifft2 fftn ifftn fftshift ifftshift ' +
  'isnan isinf isfinite isreal isfloat plus minus times rdivide ldivide mtimes mrdivide mldivide power mpower uminus uplus transpose ctranspose ' +
  'eq ne lt gt le ge and or not xor isequal isequaln isapprox unique ismember logical find nnz any all ' +
  'disp fprintf sprintf num2str str2num str2double mat2str int2str error warning input feval arrayfun bsxfun kron cross vecnorm ' +
  'isdiag issymmetric ishermitian istriu istril isbanded bandwidth gamma gammaln erf erfc erfinv beta filter filter2 conv2 detrend ' +
  'normalize rescale clip smoothdata isoutlier filloutliers rmoutliers islocalmax islocalmin sinpi cospi pi ' +
  'plot fplot hold title xlabel ylabel zlabel legend grid axis xlim ylim set gca gcf figure clf cla close clc format who whos clear help doc ans dot repmat ' +
  'surf surfc surfl mesh meshc surface contour contourf contour3 pcolor shading colorbar colormap view peaks xline yline ' +
  'polarplot polarscatter polarhistogram polaraxes compass rlim thetalim rticks thetaticks rticklabels thetaticklabels rtickangle ' +
  'bar3 bar3h quiver3 histogram2 plotmatrix contourc ' +
  'sphere cylinder ellipsoid fsurf fmesh fcontour quiver ' +
  'bar barh area stem stairs scatter scatter3 plot3 stem3 errorbar pie histogram loglog semilogx semilogy subtitle sgtitle zlim xticks yticks zticks text box ' +
  'jet parula turbo hot cool gray bone copper pink spring summer autumn winter hsv lines colorcube cellstr dsearchn brighten ' +
  'subplot tiledlayout nexttile sgtitle ' +
  'flag prism sky abyss nebula hsv2rgb rgb2hsv rgb2gray cmap2gray im2gray hex2rgb rgb2hex xscale yscale zscale yyaxis clim caxis colororder daspect pbaspect ' +
  'xtickangle ytickangle ztickangle xtickformat ytickformat ztickformat xticklabels yticklabels zticklabels fontname fontsize gtext annotation line rectangle ' +
  'imagesc image pie3 piechart donutchart pareto fimplicit fplot3 ' +
  'repelem topkrows mat2cell isletter isspace isstrprop hex2num num2hex native2unicode unicode2native newline ' +
  'isobject isjava isenum istabular isgraphics underlyingType isUnderlyingType function_handle functions ' +
  'pagetranspose pagectranspose pagemtimes pagemldivide pagemrdivide pagesvd pageinv pagepinv pagenorm pagelsqminnorm linkaxes alpha alphamap ' +
  'insertAfter insertBefore eraseBetween replaceBetween compose convertStringsToChars convertCharsToStrings ' +
  'cell iscell iscellstr num2cell cell2mat celldisp cellfun strsplit strjoin ' +
  'struct isstruct isfield fieldnames numfields rmfield setfield getfield orderfields struct2cell cell2struct structfun ' +
  'horzcat vertcat isequaln corr qmr condest wilkinson spones nonzeros bartlett blackman hamming hann typecast swapbytes ' +
  'mkpp unmkpp ppval ' +
  'psi expint sinint cosint legendre besselj bessely besseli besselk besselh airy ellipke ellipj ' +
  'delaunay griddata interp3 interpn boundary voronoi convhulln delaunayn voronoin tsearchn griddatan ' +
  'graph digraph numnodes numedges addnode rmnode addedge rmedge neighbors successors predecessors degree indegree outdegree ' +
  'findnode findedge adjacency incidence laplacian shortestpath distances bfsearch dfsearch conncomp toposort isdag ismultigraph ' +
  'minspantree maxflow subgraph reordernodes centrality ' +
  'humps corrcov normpdf normcdf randsample timeit jsonencode jsondecode ' +
  'rsf2csf balance qz ordschur ordeig sylvester lsqminnorm expmv ' +
  'rms geomean harmmean movmad movprod movstd movvar mape rmse idivide polydiv betaincinv gammaincinv rosser rng convn optimset optimget quad2d ' +
  'ismissing anymissing standardizeMissing rmmissing fillmissing isbetween isuniform allunique numunique uniquetol ismembertol issortedrows paddata trimdata resize discretize ' +
  'lsqr minres tfqmr bicgstabl symmlq spfun sprank colperm ' +
  'bitand bitor bitxor bitshift bitget bitset bitcmp blanks findstr strjust strvcat hist histc exist ' +
  'string strings isstring isStringScalar strlength contains startsWith endsWith count erase replace split splitlines join strip pad reverse append extractBefore extractAfter extractBetween matches ' +
  'deal func2str str2func assert narginchk nargoutchk nargchk validateattributes inputname isvarname genvarname colon flipdim condeig polyeig ' +
  'MException rethrow throw lasterr lasterror ' +
  'sparse full issparse spones nonzeros nzmax spdiags speye spalloc sprand sprandn sprandsym spy etree symrcm amd symamd colamd ichol ilu ' +
  'spconvert spaugment spparms dmperm gplot colmmd symmmd luinc cholinc ' +
  'gallery'
).split(/\s+/));

/** Functions documented under the numeric-class method page ref/double.<name>.html
 *  (the plain ref/<name>.html 404s for these). */
const DOUBLE_REF = new Set<string>('min max mink maxk'.split(/\s+/));

export function docUrl(name: string): string {
  const low = name.toLowerCase();
  // Direct reference page for base functions; doc-search for toolbox/aliases
  // (prctile/quantile/iqr → Statistics; xcorr/xcov → Signal; etc. would 404 under ref/).
  if (DOUBLE_REF.has(low)) return `https://www.mathworks.com/help/matlab/ref/double.${low}.html`;
  return BASE_REF.has(name)
    ? `https://www.mathworks.com/help/matlab/ref/${low}.html`
    : `https://www.mathworks.com/help/search.html?qdoc=${encodeURIComponent(name)}`;
}

/** MATLAB-style help block for a built-in, or null if unknown. */
export function builtinHelp(name: string): string | null {
  const e = HELP[name];
  if (!e) return null;
  let s = ` ${name} - ${e.summary}\n\n    Syntax\n` + e.syntax.map((x) => '      ' + x).join('\n');
  if (e.seealso?.length) s += `\n\n    See also ${e.seealso.join(', ')}`;
  s += `\n\n    Documentation for ${name}\n      ${docUrl(name)}`;
  return s;
}

function trimNum(x: number): string {
  if (Number.isInteger(x)) return String(x);
  return parseFloat(x.toPrecision(5)).toString();
}
function matToStr(A: Mat): string {
  if (A.rows === 1 && A.cols === 1) return trimNum(A.data[0]);   // scalar → no brackets
  const rows: string[] = [];
  for (let r = 0; r < A.rows; r++) { const row: string[] = []; for (let c = 0; c < A.cols; c++) row.push(trimNum(A.data[r + c * A.rows])); rows.push(row.join(' ')); }
  return `[${rows.join(';')}]`;   // MATLAB brackets vectors/matrices
}

/** Encode a Value as a JSON string (jsonencode). */
function jsonEncode(v: Value): string {
  if (isStr(v)) return v.rows * v.cols === 1 ? JSON.stringify(v.items[0]) : JSON.stringify(v.items);
  if (isCell(v)) return '[' + v.items.map((x) => jsonEncode(x)).join(',') + ']';
  if (isStruct(v)) { const o: string[] = []; for (const [k, vals] of v.fields) o.push(JSON.stringify(k) + ':' + jsonEncode(vals[0])); return '{' + o.join(',') + '}'; }
  const A = m(v);
  if (A.isChar) return JSON.stringify(asString(A));
  if (numel(A) === 1) return jsonNum(A.data[0]);
  if (A.rows === 1 || A.cols === 1) return '[' + toArray(A).map(jsonNum).join(',') + ']';
  const rows: string[] = []; for (let r = 0; r < A.rows; r++) { const row: string[] = []; for (let c = 0; c < A.cols; c++) row.push(jsonNum(A.data[r + c * A.rows])); rows.push('[' + row.join(',') + ']'); }
  return '[' + rows.join(',') + ']';
}
const jsonNum = (x: number) => (Number.isFinite(x) ? String(x) : 'null');
/** Decode a parsed JSON value into a MATLAB Value (jsondecode). */
function jsonDecode(j: unknown): Value {
  if (typeof j === 'number') return scalar(j);
  if (typeof j === 'boolean') return bool(j);
  if (j === null) return scalar(NaN);
  if (typeof j === 'string') return makeStr(j);
  if (Array.isArray(j)) {
    if (j.every((x) => typeof x === 'number')) return colVec(j as number[]);            // numeric array → column vector
    if (j.length && j.every((x) => Array.isArray(x) && (x as unknown[]).every((y) => typeof y === 'number') && (x as unknown[]).length === (j[0] as unknown[]).length))
      return fromRows(j as number[][]);                                                  // rectangular numeric → matrix
    return makeCell(j.length, 1, j.map((x) => jsonDecode(x)));                            // otherwise → cell column
  }
  const o = j as Record<string, unknown>; const fields = new Map<string, Value[]>();
  for (const k of Object.keys(o)) fields.set(k, [jsonDecode(o[k])]);
  return { kind: 'struct', rows: 1, cols: 1, fields };
}

// ── Math helpers for the elementary-math builtins ─────────────────────────
const DEG = Math.PI / 180;
function gcd2(a: number, b: number): number { a = Math.abs(Math.round(a)); b = Math.abs(Math.round(b)); while (b) { [a, b] = [b, a % b]; } return a; }
function factorialN(n: number): number { if (n < 0) return NaN; if (n > 170) return Infinity; let r = 1; for (let i = 2; i <= n; i++) r *= i; return r; }

/** Lanczos approximation of the gamma function. */
/** Reinterpret a raw byte buffer as the named numeric class (for typecast). */
function readAs(buf: ArrayBuffer, ty: string): number[] {
  switch (ty) {
    case 'double': return Array.from(new Float64Array(buf));
    case 'single': return Array.from(new Float32Array(buf));
    case 'int8': return Array.from(new Int8Array(buf));
    case 'uint8': return Array.from(new Uint8Array(buf));
    case 'int16': return Array.from(new Int16Array(buf));
    case 'uint16': return Array.from(new Uint16Array(buf));
    case 'int32': return Array.from(new Int32Array(buf));
    case 'uint32': return Array.from(new Uint32Array(buf));
    case 'int64': return Array.from(new BigInt64Array(buf), (b) => Number(b));
    case 'uint64': return Array.from(new BigUint64Array(buf), (b) => Number(b));
    default: throw new MatError(`typecast: unsupported class '${ty}'`);
  }
}

function gammaFn(x: number): number {
  const g = 7;
  const c = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
    -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
  if (x < 0.5) return Math.PI / (Math.sin(Math.PI * x) * gammaFn(1 - x));
  x -= 1; let a = c[0]; const t = x + g + 0.5;
  for (let i = 1; i < g + 2; i++) a += c[i] / (x + i);
  return Math.sqrt(2 * Math.PI) * Math.pow(t, x + 0.5) * Math.exp(-t) * a;
}
function logGamma(x: number): number { return Math.log(Math.abs(gammaFn(x))); }

/** Error function (Abramowitz & Stegun 7.1.26). */
function erfFn(x: number): number {
  const s = x < 0 ? -1 : 1; x = Math.abs(x);
  const t = 1 / (1 + 0.3275911 * x);
  const y = 1 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * Math.exp(-x * x);
  return s * y;
}

const EULER_GAMMA = 0.5772156649015328606;

/** Digamma ψ(x) = Γ'(x)/Γ(x): recurrence up to x≥6 then asymptotic series. */
function digamma(x: number): number {
  if (x <= 0 && x === Math.floor(x)) return NaN; // poles at non-positive integers
  if (x < 0) return digamma(1 - x) - Math.PI / Math.tan(Math.PI * x); // reflection
  let r = 0;
  while (x < 6) { r -= 1 / x; x += 1; }
  const f = 1 / (x * x);
  r += Math.log(x) - 1 / (2 * x) - f * (1 / 12 - f * (1 / 120 - f * (1 / 252 - f / 240)));
  return r;
}

/** Exponential integral E₁(x) for x>0 (series for x≤1, continued fraction for x>1). */
function expintE1(x: number): number {
  if (x <= 0) return x === 0 ? Infinity : NaN;
  if (x > 1) {
    let b = x + 1, c = 1e300, d = 1 / b, h = d;
    for (let i = 1; i <= 200; i++) { const a = -i * i; b += 2; d = 1 / (a * d + b); c = b + a / c; const del = c * d; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
    return h * Math.exp(-x);
  }
  let sum = -EULER_GAMMA - Math.log(x), xk = 1, kfact = 1;
  for (let k = 1; k <= 200; k++) { xk *= x; kfact *= k; const term = (k % 2 ? 1 : -1) * xk / (k * kfact); sum += term; if (Math.abs(term) < 1e-16 * Math.abs(sum)) break; }
  return sum;
}

/** Sine and cosine integrals [Si(x), Ci(x)] (Numerical Recipes cisi). */
function cisi(x: number): [number, number] {
  const t = Math.abs(x);
  if (t === 0) return [0, -Infinity];
  let si: number, ci: number;
  if (t > 2) {
    // Complex continued fraction (Lentz) for the auxiliary integral.
    let br = 1, bi = t, cr = 1e300, cii = 0, dr = 0, di = 0, hr = 0, hi = 0;
    { const den = br * br + bi * bi; dr = br / den; di = -bi / den; } hr = dr; hi = di;
    for (let i = 2; i <= 200; i++) {
      const a = -(i - 1) * (i - 1); br += 2;
      // d = 1/(a*d + b)
      let tr = a * dr + br, ti = a * di + bi; let den = tr * tr + ti * ti; dr = tr / den; di = -ti / den;
      // c = b + a/c
      den = cr * cr + cii * cii; cr = br + a * cr / den; cii = bi - a * cii / den;
      // del = c*d ; h *= del
      const delr = cr * dr - cii * di, deli = cr * di + cii * dr;
      const nhr = hr * delr - hi * deli, nhi = hr * deli + hi * delr; hr = nhr; hi = nhi;
      if (Math.abs(delr - 1) + Math.abs(deli) < 1e-14) break;
    }
    // h *= (cos t - i sin t)
    const ct = Math.cos(t), st = Math.sin(t);
    const fr = hr * ct + hi * st, fi = -hr * st + hi * ct;
    ci = -fr; si = Math.PI / 2 + fi;
  } else {
    let sum = 0, sums = 0, sumc = 0, sign = 1, fact = 1, odd = true;
    for (let k = 1; k <= 200; k++) {
      fact *= t / k; const term = fact / k; sum += sign * term;
      if (odd) { sign = -sign; sums = sum; sum = sumc; } else { sumc = sum; sum = sums; }
      if (term < 1e-16 * Math.abs(sum || 1) && k > 1) break; odd = !odd;
    }
    si = sums; ci = sumc + Math.log(t) + EULER_GAMMA;
  }
  if (x < 0) si = -si;
  return [si, ci];
}

/** Associated Legendre function P_l^m(x), 0≤m≤l, |x|≤1 (with Condon–Shortley phase). */
function plgndr(l: number, mm: number, x: number): number {
  let pmm = 1;
  if (mm > 0) { const somx2 = Math.sqrt((1 - x) * (1 + x)); let fact = 1; for (let i = 1; i <= mm; i++) { pmm *= -fact * somx2; fact += 2; } }
  if (l === mm) return pmm;
  let pmmp1 = x * (2 * mm + 1) * pmm;
  if (l === mm + 1) return pmmp1;
  let pll = 0;
  for (let ll = mm + 2; ll <= l; ll++) { pll = (x * (2 * ll - 1) * pmmp1 - (ll + mm - 1) * pmm) / (ll - mm); pmm = pmmp1; pmmp1 = pll; }
  return pll;
}

/** J_ν / I_ν power series (good for moderate x≥0): Σ (∓1)^k/(k! Γ(ν+k+1)) (x/2)^{2k+ν}. */
function besselSeries(nu: number, x: number, alt: boolean): number {
  if (x === 0) return nu === 0 ? 1 : 0;
  const hx = x / 2; let term = Math.pow(hx, nu) / gammaFn(nu + 1); let sum = term;
  for (let k = 1; k <= 400; k++) { term *= (alt ? -1 : 1) * (hx * hx) / (k * (nu + k)); sum += term; if (Math.abs(term) < 1e-17 * Math.abs(sum)) break; }
  return sum;
}
const besseljFn = (nu: number, x: number) => besselSeries(nu, x, true);
const besseliFn = (nu: number, x: number) => besselSeries(nu, x, false);
/** Bessel arg broadcasting: bessel(nu, X) — scalar nu over array X, or elementwise same-size. */
function bzip(a: Value[], fn: (nu: number, x: number) => number): Mat {
  const NU = m(a[0]), X = m(a[1]);
  if (numel(NU) === 1) return map(X, (x) => fn(NU.data[0], x));
  if (numel(X) === 1) return map(NU, (nu) => fn(nu, X.data[0]));
  return elementwise(NU, X, (nu, x) => fn(nu, x));
}
/** Y_ν via reflection; integer order uses a tiny offset (limit). */
function besselyFn(nu: number, x: number): number {
  if (nu === Math.floor(nu)) nu += 1e-8;
  return (besseljFn(nu, x) * Math.cos(nu * Math.PI) - besseljFn(-nu, x)) / Math.sin(nu * Math.PI);
}
/** K_ν via reflection; integer order uses a tiny offset (limit). */
function besselkFn(nu: number, x: number): number {
  if (nu === Math.floor(nu)) nu += 1e-8;
  return (Math.PI / 2) * (besseliFn(-nu, x) - besseliFn(nu, x)) / Math.sin(nu * Math.PI);
}
/** Airy functions via Bessel relations. kind: 0=Ai,1=Ai',2=Bi,3=Bi'. */
function airyFn(kind: number, x: number): number {
  const r3 = Math.sqrt(3);
  if (x === 0) {
    const g13 = gammaFn(1 / 3), g23 = gammaFn(2 / 3);
    if (kind === 0) return 1 / (Math.pow(3, 2 / 3) * g23);
    if (kind === 1) return -1 / (Math.pow(3, 1 / 3) * g13);
    if (kind === 2) return 1 / (Math.pow(3, 1 / 6) * g23);
    return Math.pow(3, 1 / 6) / g13;
  }
  if (x > 0) {
    const z = (2 / 3) * Math.pow(x, 1.5);
    if (kind === 0) return (1 / Math.PI) * Math.sqrt(x / 3) * besselkFn(1 / 3, z);
    if (kind === 1) return -(x / (Math.PI * r3)) * besselkFn(2 / 3, z);
    if (kind === 2) return Math.sqrt(x / 3) * (besseliFn(-1 / 3, z) + besseliFn(1 / 3, z));
    return (x / r3) * (besseliFn(-2 / 3, z) + besseliFn(2 / 3, z));
  }
  const ax = -x, z = (2 / 3) * Math.pow(ax, 1.5);
  if (kind === 0) return (Math.sqrt(ax) / 3) * (besseljFn(1 / 3, z) + besseljFn(-1 / 3, z));
  if (kind === 1) return (ax / 3) * (besseljFn(2 / 3, z) - besseljFn(-2 / 3, z));
  if (kind === 2) return Math.sqrt(ax / 3) * (besseljFn(-1 / 3, z) - besseljFn(1 / 3, z));
  return (ax / r3) * (besseljFn(-2 / 3, z) + besseljFn(2 / 3, z));
}
/** Complete elliptic integrals [K(m), E(m)] via the AGM. */
function ellipkeFn(mm: number): [number, number] {
  if (mm === 1) return [Infinity, 1];
  let a = 1, b = Math.sqrt(1 - mm), c = Math.sqrt(mm);
  let sum = 0.5 * c * c, pw = 1;
  for (let i = 0; i < 60 && Math.abs(c) > 1e-15; i++) { const an = (a + b) / 2, bn = Math.sqrt(a * b); c = (a - b) / 2; a = an; b = bn; sum += pw * c * c; pw *= 2; }
  const K = Math.PI / (2 * a);
  return [K, K * (1 - sum)];
}
/** Jacobi elliptic functions [sn, cn, dn] (Numerical Recipes sncndn); emmc = 1−m. */
function sncndn(uu: number, emmc: number): [number, number, number] {
  const CA = 1e-12; let emc = emmc, u = uu, sn: number, cn = 0, dn = 1;
  if (emc !== 0) {
    let bo = emc < 0, d = 1;
    if (bo) { d = 1 - emc; emc = -emc / d; d = Math.sqrt(d); u = d * u; }
    let a = 1, c = 0, l = 0; const em: number[] = [], en: number[] = [];
    for (let i = 0; i < 14; i++) { l = i; em[i] = a; emc = Math.sqrt(emc); en[i] = emc; c = (a + emc) / 2; if (Math.abs(a - emc) <= CA * a) break; emc = a * emc; a = c; }
    u = c * u; sn = Math.sin(u); cn = Math.cos(u);
    if (sn !== 0) {
      a = cn / sn; c = a * c;
      for (let ii = l; ii >= 0; ii--) { const b = em[ii]; a = c * a; c = dn * c; dn = (en[ii] + a) / (b + a); a = c / b; }
      a = 1 / Math.sqrt(c * c + 1); sn = sn >= 0 ? a : -a; cn = c * sn;
    }
    if (bo) { a = dn; dn = cn; cn = a; sn = sn / d; }
  } else { cn = 1 / Math.cosh(u); dn = cn; sn = Math.tanh(u); }
  return [sn, cn, dn];
}

/** Magic square (Siamese for odd, doubly-even rule, Strachey for singly-even). */
/** Unit-sphere surface coordinates, (n+1)×(n+1). */
function sphereCoords(n: number): { X: Mat; Y: Mat; Z: Mat } {
  const m1 = n + 1; const X = zeros(m1, m1), Y = zeros(m1, m1), Z = zeros(m1, m1);
  for (let i = 0; i <= n; i++) { const phi = -Math.PI / 2 + Math.PI * i / n; for (let j = 0; j <= n; j++) { const th = -Math.PI + 2 * Math.PI * j / n; X.data[i + j * m1] = Math.cos(phi) * Math.cos(th); Y.data[i + j * m1] = Math.cos(phi) * Math.sin(th); Z.data[i + j * m1] = Math.sin(phi); } }
  return { X, Y, Z };
}
/** Cylinder surface coordinates from a radius profile r (length m) and n facets. */
function cylinderCoords(r: number[], n: number): { X: Mat; Y: Mat; Z: Mat } {
  const mm = r.length, X = zeros(mm, n + 1), Y = zeros(mm, n + 1), Z = zeros(mm, n + 1);
  for (let i = 0; i < mm; i++) for (let j = 0; j <= n; j++) { const th = 2 * Math.PI * j / n; X.data[i + j * mm] = r[i] * Math.cos(th); Y.data[i + j * mm] = r[i] * Math.sin(th); Z.data[i + j * mm] = mm > 1 ? i / (mm - 1) : 0; }
  return { X, Y, Z };
}
/** Sample f(x,y) over a grid (fsurf/fmesh/fcontour). Default domain [-5,5]². */
async function sampleFn2(a: Value[], env: Env): Promise<{ X: Mat; Y: Mat; Z: Mat }> {
  const f = handle(a[0], 'fsurf');
  let ax = -5, bx = 5, ay = -5, by = 5;
  if (a.length >= 2 && isMat(a[1])) { const v = toArray(a[1] as Mat); if (v.length === 2) { ax = v[0]; bx = v[1]; ay = v[0]; by = v[1]; } else if (v.length >= 4) { ax = v[0]; bx = v[1]; ay = v[2]; by = v[3]; } }
  const np = 41; const m1 = np;
  const X = zeros(m1, m1), Y = zeros(m1, m1);
  for (let i = 0; i < np; i++) for (let j = 0; j < np; j++) { X.data[i + j * m1] = ax + (bx - ax) * j / (np - 1); Y.data[i + j * m1] = ay + (by - ay) * i / (np - 1); }
  const r = await env.callHandle(f, [X, Y], 1);
  const Z = isMat(r[0]) && numel(r[0]) === m1 * m1 ? (r[0] as Mat) : zeros(m1, m1);
  return { X, Y, Z };
}

// ── Colormap generators (return an n×3 RGB matrix) ───────────────────────
const clamp01 = (x: number) => Math.max(0, Math.min(1, x));
function cmapGen(args: Value[], f: (t: number, i: number, n: number) => [number, number, number]): Mat {
  const n = args.length && isMat(args[0]) ? Math.round(asScalar(args[0])) : 256;
  const M = zeros(n, 3);
  for (let i = 0; i < n; i++) { const t = n > 1 ? i / (n - 1) : 0; const [r, g, b] = f(t, i, n); M.data[i] = r; M.data[i + n] = g; M.data[i + 2 * n] = b; }
  return M;
}
const jetColor = (t: number): [number, number, number] => [clamp01(1.5 - Math.abs(4 * t - 3)), clamp01(1.5 - Math.abs(4 * t - 2)), clamp01(1.5 - Math.abs(4 * t - 1))];
const hotColor = (t: number): [number, number, number] => [clamp01(t / 0.375), clamp01((t - 0.375) / 0.375), clamp01((t - 0.75) / 0.25)];
function hsv2rgb(h: number, s: number, v: number): [number, number, number] {
  const i = Math.floor(h * 6), f = h * 6 - i, p = v * (1 - s), q = v * (1 - f * s), u = v * (1 - (1 - f) * s);
  switch (((i % 6) + 6) % 6) { case 0: return [v, u, p]; case 1: return [q, v, p]; case 2: return [p, v, u]; case 3: return [p, q, v]; case 4: return [u, p, v]; default: return [v, p, q]; }
}
function charPred(v: Value, test: (ch: string) => boolean): Value[] {
  const s = asString(v); const o = zeros(1, s.length); o.isBool = true;
  for (let i = 0; i < s.length; i++) o.data[i] = test(s[i]) ? 1 : 0;
  return [o];
}
/** Transpose every 2-D page of an N-D array (dims ≥3 preserved after the first two). */
function pageTranspose(A: Mat, conj: boolean): Mat {
  const dims = ndSize(A); const d0 = dims[0], d1 = dims[1]; const psz = d0 * d1; const npage = A.data.length / psz;
  const out = new Float64Array(A.data.length); const oi = A.idata ? new Float64Array(A.data.length) : null;
  for (let p = 0; p < npage; p++) for (let i = 0; i < d0; i++) for (let j = 0; j < d1; j++) {
    const src = p * psz + i + j * d0, dst = p * psz + j + i * d1;
    out[dst] = A.data[src]; if (oi && A.idata) oi[dst] = (conj ? -1 : 1) * A.idata[src];
  }
  const ndims = dims.slice(); ndims[0] = d1; ndims[1] = d0;
  if (ndims.length > 2) return makeND(ndims, out, { idata: oi });
  const r = mat(d1, d0, out); if (oi) r.idata = oi; return r;
}
/** Apply a 2-D op to each page of an N-D array, stacking the (uniformly-sized) results. */
function pageUnary(A: Mat, op: (X: Mat) => Mat): Mat {
  const dims = ndSize(A); const d0 = dims[0], d1 = dims[1], psz = d0 * d1; const np = A.data.length / psz;
  const pages: Mat[] = [];
  for (let p = 0; p < np; p++) pages.push(op(mat(d0, d1, A.data.slice(p * psz, p * psz + psz))));
  const r = pages[0].rows, c = pages[0].cols; const out = new Float64Array(r * c * np);
  pages.forEach((pg, p) => out.set(pg.data, p * r * c));
  const rest = dims.slice(2);
  return rest.length ? makeND([r, c, ...rest], out) : mat(r, c, out);
}
/** Apply a 2-D matrix op page-by-page across two N-D arrays (broadcasting a single page). */
function pageBinary(A: Mat, B: Mat, op: (X: Mat, Y: Mat) => Mat): Mat {
  const da = ndSize(A), db = ndSize(B);
  const ap = da[0] * da[1], bp = db[0] * db[1];
  const na = A.data.length / ap, nb = B.data.length / bp; const np = Math.max(na, nb);
  const pages: Mat[] = [];
  for (let p = 0; p < np; p++) {
    const X = mat(da[0], da[1], A.data.slice((p % na) * ap, (p % na) * ap + ap));
    const Y = mat(db[0], db[1], B.data.slice((p % nb) * bp, (p % nb) * bp + bp));
    pages.push(op(X, Y));
  }
  const r = pages[0].rows, c = pages[0].cols; const out = new Float64Array(r * c * np);
  pages.forEach((pg, p) => out.set(pg.data, p * r * c));
  const rest = (na >= nb ? da : db).slice(2);
  return rest.length ? makeND([r, c, ...rest], out) : mat(r, c, out);
}
function rgb2hsvFn(r: number, g: number, b: number): [number, number, number] {
  const mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
  let h = 0; if (d !== 0) { if (mx === r) h = ((g - b) / d) % 6; else if (mx === g) h = (b - r) / d + 2; else h = (r - g) / d + 4; h /= 6; if (h < 0) h += 1; }
  return [h, mx === 0 ? 0 : d / mx, mx];
}
function lerpAnchors(A: number[][], t: number): [number, number, number] {
  const pos = clamp01(t) * (A.length - 1); const i = Math.min(A.length - 2, Math.floor(pos)); const f = pos - i;
  return [A[i][0] + f * (A[i + 1][0] - A[i][0]), A[i][1] + f * (A[i + 1][1] - A[i][1]), A[i][2] + f * (A[i + 1][2] - A[i][2])];
}
const PARULA = [[0.2081, 0.1663, 0.5292], [0.0779, 0.5040, 0.8384], [0.0265, 0.6137, 0.8135], [0.4668, 0.6753, 0.5226], [0.9856, 0.7572, 0.2347], [0.9763, 0.9831, 0.0538]];
const TURBO = [[0.19, 0.07, 0.23], [0.27, 0.48, 0.99], [0.11, 0.92, 0.62], [0.86, 0.99, 0.10], [0.99, 0.45, 0.05], [0.48, 0.01, 0.01]];
const LINES7 = [[0, 0.447, 0.741], [0.85, 0.325, 0.098], [0.929, 0.694, 0.125], [0.494, 0.184, 0.556], [0.466, 0.674, 0.188], [0.301, 0.745, 0.933], [0.635, 0.078, 0.184]];

/** Chebyshev spectral differentiation matrix (Trefethen), n×n with N=n-1 points. */
function chebspecMat(n: number): Mat {
  const N = n - 1; const D = zeros(n, n); if (N < 1) return D;
  const x: number[] = [], c: number[] = [];
  for (let k = 0; k <= N; k++) { x.push(Math.cos(Math.PI * k / N)); c.push((k === 0 || k === N ? 2 : 1) * (k % 2 ? -1 : 1)); }
  for (let i = 0; i < n; i++) { let sum = 0; for (let j = 0; j < n; j++) if (i !== j) { const v = c[i] / c[j] / (x[i] - x[j]); D.data[i + j * n] = v; sum += v; } D.data[i + i * n] = -sum; }
  return D;
}
/** Wilkinson test matrices wilk(n) for n = 3, 4, 21 (Higham). */
function wilkMat(n: number): Mat {
  if (n === 21) { const W = zeros(21, 21); for (let i = 0; i < 21; i++) { W.data[i + i * 21] = Math.abs(10 - i); if (i + 1 < 21) { W.data[i + (i + 1) * 21] = 1; W.data[(i + 1) + i * 21] = 1; } } return W; }
  if (n === 3) return mat(3, 3, Float64Array.of(1e-10, 0, 0, 0.9, 0.9, 0, -0.4, -0.4, 1e-10));
  if (n === 4) return mat(4, 4, Float64Array.of(0.9143e-4, 0.8762, 0.7943, 0.8017, 0, 0.7156e-4, 0.8143, 0.6123, 0, 0, 0.9504e-4, 0.7165, 0, 0, 0, 0.7123e-4));
  throw new MatError("gallery('wilk',n): only n = 3, 4, 21 are defined");
}
/** Famous test matrices: gallery(name, n, ...). */
function galleryMatrix(name: string, a: Value[]): Value {
  const n = a.length ? Math.round(asScalar(a[0])) : 0;
  const gb = (f: (I: number, J: number) => number): Mat => { const A = zeros(n, n); for (let j = 0; j < n; j++) for (let i = 0; i < n; i++) A.data[i + j * n] = f(i + 1, j + 1); return A; };
  switch (name) {
    case 'minij': return gb((I, J) => Math.min(I, J));
    case 'moler': return gb((I, J) => (I === J ? I : Math.min(I, J) - 2));
    case 'lehmer': return gb((I, J) => Math.min(I, J) / Math.max(I, J));
    case 'frank': return gb((I, J) => (I <= J ? n + 1 - J : (I === J + 1 ? n - J : 0)));
    case 'cauchy': return gb((I, J) => 1 / (I + J));
    case 'clement': return gb((I, J) => (I === J + 1 ? n - J : (J === I + 1 ? I : 0)));
    case 'kms': { const rho = a.length >= 2 ? asScalar(a[1]) : 0.5; return gb((I, J) => Math.pow(rho, Math.abs(I - J))); }
    case 'parter': return gb((I, J) => 1 / (I - J + 0.5));
    case 'fiedler': return gb((I, J) => Math.abs(I - J));
    case 'gcdmat': return gb((I, J) => gcd2(I, J));
    case 'grcar': { const k = a.length >= 2 ? Math.round(asScalar(a[1])) : 3; return gb((I, J) => (I === J + 1 ? -1 : (J >= I && J <= I + k ? 1 : 0))); }
    case 'tridiag': return gb((I, J) => (I === J ? 2 : (Math.abs(I - J) === 1 ? -1 : 0)));
    case 'riemann': return gb((I, J) => ((J + 1) % (I + 1) === 0 ? I : -1));
    case 'chebspec': return chebspecMat(n);
    case 'wilk': return wilkMat(n);
    case 'toeppen': {
      const d = [a.length >= 2 ? asScalar(a[1]) : 1, a.length >= 3 ? asScalar(a[2]) : -10, a.length >= 4 ? asScalar(a[3]) : 0, a.length >= 5 ? asScalar(a[4]) : 10, a.length >= 6 ? asScalar(a[5]) : 1];
      const offs = [-2, -1, 0, 1, 2]; const acc = new Map<number, number>();
      for (let o = 0; o < 5; o++) { if (d[o] === 0) continue; for (let I = 1; I <= n; I++) { const J = I + offs[o]; if (J >= 1 && J <= n) acc.set((J - 1) * n + (I - 1), d[o]); } }
      return sparseFromMap(n, n, acc);
    }
    default: throw new MatError(`gallery: matrix type '${name}' is not implemented in this build`);
  }
}

function magicFn(n: number): Mat {
  const M = zeros(n, n); const at = (r: number, c: number) => M.data[r + c * n]; const set = (r: number, c: number, v: number) => { M.data[r + c * n] = v; };
  if (n < 1) return M;
  if (n % 2 === 1) {
    let i = 0, j = (n - 1) / 2;
    for (let k = 1; k <= n * n; k++) { set(i, j, k); const ni = (i - 1 + n) % n, nj = (j + 1) % n; if (at(ni, nj) !== 0) i = (i + 1) % n; else { i = ni; j = nj; } }
  } else if (n % 4 === 0) {
    for (let r = 0; r < n; r++) for (let c = 0; c < n; c++) { const v = r * n + c + 1; set(r, c, (r % 4 === c % 4) || ((r % 4 + c % 4) === 3) ? n * n + 1 - v : v); }
  } else {
    const h = n / 2; const sub = magicFn(h); const f = h * h;
    for (let r = 0; r < h; r++) for (let c = 0; c < h; c++) {
      const a = sub.data[r + c * h];
      set(r, c, a); set(r + h, c + h, a + f); set(r, c + h, a + 2 * f); set(r + h, c, a + 3 * f);
    }
    const k = (n - 2) / 4; const center = (h - 1) / 2;
    for (let r = 0; r < h; r++) {
      for (let c = 0; c < k; c++) { const col = r === center ? c + 1 : c; const t = at(r, col); set(r, col, at(r + h, col)); set(r + h, col, t); }
      for (let c = 0; c < k - 1; c++) { const col = n - 1 - c; const t = at(r, col); set(r, col, at(r + h, col)); set(r + h, col, t); }
    }
  }
  return M;
}

// ── Discrete / transform helpers ──────────────────────────────────────────
const INT_LIMITS: Record<string, [number, number]> = {
  int8: [-128, 127], int16: [-32768, 32767], int32: [-2147483648, 2147483647], int64: [-9223372036854775808, 9223372036854775807],
  uint8: [0, 255], uint16: [0, 65535], uint32: [0, 4294967295], uint64: [0, 18446744073709551615],
};
function ratApprox(x: number): [number, number] {
  if (Number.isInteger(x)) return [x, 1];
  const sgn = x < 0 ? -1 : 1; x = Math.abs(x);
  let h1 = 1, h0 = 0, k1 = 0, k0 = 1, b = x;
  for (let i = 0; i < 20; i++) { const aa = Math.floor(b); const h2 = aa * h1 + h0, k2 = aa * k1 + k0; h0 = h1; h1 = h2; k0 = k1; k1 = k2; if (Math.abs(x - h1 / k1) < 1e-6 * x || b === aa) break; b = 1 / (b - aa); }
  return [sgn * h1, k1];
}
/** Unscaled DFT (radix-2 when n is a power of two, else O(n²)). sign=-1 forward, +1 inverse. */
function fftVec(re: number[], im: number[], sign: number): { re: number[]; im: number[] } {
  const n = re.length; if (n <= 1) return { re: re.slice(), im: im.slice() };
  if ((n & (n - 1)) === 0) {
    const er: number[] = [], ei: number[] = [], or2: number[] = [], oi: number[] = [];
    for (let i = 0; i < n; i += 2) { er.push(re[i]); ei.push(im[i]); or2.push(re[i + 1]); oi.push(im[i + 1]); }
    const E = fftVec(er, ei, sign), O = fftVec(or2, oi, sign);
    const R = new Array(n), I = new Array(n);
    for (let k = 0; k < n / 2; k++) { const ang = sign * 2 * Math.PI * k / n; const c = Math.cos(ang), s = Math.sin(ang); const tr = c * O.re[k] - s * O.im[k], ti = c * O.im[k] + s * O.re[k]; R[k] = E.re[k] + tr; I[k] = E.im[k] + ti; R[k + n / 2] = E.re[k] - tr; I[k + n / 2] = E.im[k] - ti; }
    return { re: R, im: I };
  }
  const R = new Array(n).fill(0), I = new Array(n).fill(0);
  for (let k = 0; k < n; k++) { let sr = 0, si = 0; for (let t = 0; t < n; t++) { const ang = sign * 2 * Math.PI * k * t / n; const c = Math.cos(ang), s = Math.sin(ang); sr += re[t] * c - im[t] * s; si += re[t] * s + im[t] * c; } R[k] = sr; I[k] = si; }
  return { re: R, im: I };
}
/** Apply 1-D FFT to a vector (whole) or each column of a matrix. sign=-1 fft, +1 ifft. */
function fftApply(A: Mat, sign: number): Mat {
  const inv = sign > 0;
  if (A.rows === 1 || A.cols === 1) {
    const n = numel(A); const re = Array.from(A.data); const im = A.idata ? Array.from(A.idata) : new Array(n).fill(0);
    const R = fftVec(re, im, sign); if (inv) for (let i = 0; i < n; i++) { R.re[i] /= n; R.im[i] /= n; }
    const Re = Float64Array.from(R.re), Im = Float64Array.from(R.im);
    return A.rows === 1 ? finishComplex(1, n, Re, Im) : finishComplex(n, 1, Re, Im);
  }
  const rows = A.rows, cols = A.cols; const Re = new Float64Array(rows * cols), Im = new Float64Array(rows * cols);
  for (let c = 0; c < cols; c++) { const re: number[] = [], im: number[] = []; for (let r = 0; r < rows; r++) { re.push(A.data[r + c * rows]); im.push(A.idata ? A.idata[r + c * rows] : 0); } const R = fftVec(re, im, sign); if (inv) for (let i = 0; i < rows; i++) { R.re[i] /= rows; R.im[i] /= rows; } for (let r = 0; r < rows; r++) { Re[r + c * rows] = R.re[r]; Im[r + c * rows] = R.im[r]; } }
  return finishComplex(rows, cols, Re, Im);
}
function fftShift(A: Mat, inverse: boolean): Mat {
  const shift = (len: number) => (inverse ? Math.floor(len / 2) : Math.ceil(len / 2));
  const o = zeros(A.rows, A.cols); const im = A.idata ? new Float64Array(A.data.length) : null;
  const sr = A.rows === 1 ? 0 : shift(A.rows), sc = A.cols === 1 ? 0 : (A.rows === 1 ? shift(A.cols) : shift(A.cols));
  const scol = A.rows === 1 ? shift(A.cols) : sc;
  for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) { const nr = (r + sr) % A.rows, nc = (c + scol) % A.cols; o.data[nr + nc * A.rows] = A.data[r + c * A.rows]; if (im) im[nr + nc * A.rows] = A.idata![r + c * A.rows]; }
  if (im) o.idata = im; return o;
}

// ── Geometry / special-function helpers ───────────────────────────────────
function pointInPoly(px: number, py: number, xv: number[], yv: number[]): boolean {
  let inside = false; const n = xv.length;
  for (let i = 0, j = n - 1; i < n; j = i++) {
    if (((yv[i] > py) !== (yv[j] > py)) && (px < (xv[j] - xv[i]) * (py - yv[i]) / (yv[j] - yv[i] || 1e-300) + xv[i])) inside = !inside;
  }
  return inside;
}
/** 2-D convex hull (monotonic chain); returns 1-based vertex indices, closed. */
function convHull2D(x: number[], y: number[]): number[] {
  const idx = x.map((_, i) => i).sort((a, b) => x[a] - x[b] || y[a] - y[b]);
  const cross = (o: number, a: number, b: number) => (x[a] - x[o]) * (y[b] - y[o]) - (y[a] - y[o]) * (x[b] - x[o]);
  const lower: number[] = []; for (const p of idx) { while (lower.length >= 2 && cross(lower[lower.length - 2], lower[lower.length - 1], p) <= 0) lower.pop(); lower.push(p); }
  const upper: number[] = []; for (let i = idx.length - 1; i >= 0; i--) { const p = idx[i]; while (upper.length >= 2 && cross(upper[upper.length - 2], upper[upper.length - 1], p) <= 0) upper.pop(); upper.push(p); }
  const hull = [...lower.slice(0, -1), ...upper.slice(0, -1)];
  return [...hull, hull[0]].map((i) => i + 1);
}
/** Regularised lower incomplete gamma P(a,x) (Numerical Recipes gammp). */
function medianOf(w: number[]): number { const s = [...w].sort((a, b) => a - b); const n = s.length; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }
/** Fill NaNs in a column by the named method. */
function fillVec(c: number[], method: string, fill: number): number[] {
  const out = c.slice(); const n = out.length;
  const prevFill = () => { let last = NaN; for (let i = 0; i < n; i++) { if (Number.isNaN(out[i])) out[i] = last; else last = out[i]; } };
  const nextFill = () => { let nxt = NaN; for (let i = n - 1; i >= 0; i--) { if (Number.isNaN(out[i])) out[i] = nxt; else nxt = out[i]; } };
  if (method === 'previous') prevFill();
  else if (method === 'next') nextFill();
  else if (method === 'nearest') { prevFill(); const back = c.slice(); let nxt = NaN; for (let i = n - 1; i >= 0; i--) { if (Number.isNaN(back[i])) back[i] = nxt; else nxt = back[i]; } for (let i = 0; i < n; i++) if (Number.isNaN(out[i])) out[i] = back[i]; }
  else if (method === 'linear') { for (let i = 0; i < n; i++) if (Number.isNaN(out[i])) { let lo = i - 1; while (lo >= 0 && Number.isNaN(out[lo])) lo--; let hi = i + 1; while (hi < n && Number.isNaN(c[hi])) hi++; if (lo >= 0 && hi < n) out[i] = out[lo] + (c[hi] - out[lo]) * (i - lo) / (hi - lo); } }
  else for (let i = 0; i < n; i++) if (Number.isNaN(out[i])) out[i] = fill; // constant
  return out;
}
/** Polynomial long division u/v → [quotient, remainder] (high→low coefficients). */
function polyDivide(u: number[], v: number[]): [number[], number[]] {
  const r = u.slice(); const nq = u.length - v.length + 1;
  if (nq <= 0) return [[0], u.slice()];
  const q = new Array(nq).fill(0);
  for (let k = 0; k < nq; k++) { const c = r[k] / v[0]; q[k] = c; for (let j = 0; j < v.length; j++) r[k + j] -= c * v[j]; }
  return [q, r.slice(nq)];
}
/** Solve the Sylvester equation A X + X B = C via the Kronecker system. */
function sylvesterSolve(A: Mat, B: Mat, C: Mat): Mat {
  const p = A.rows, q = B.cols, pq = p * q;
  const K = zeros(pq, pq); const rhs = zeros(pq, 1);
  for (let k = 0; k < q; k++) for (let i = 0; i < p; i++) {
    const row = i + k * p; rhs.data[row] = C.data[i + k * p];
    for (let ii = 0; ii < p; ii++) K.data[row + (ii + k * p) * pq] += A.data[i + ii * p];      // (I⊗A)
    for (let kk = 0; kk < q; kk++) K.data[row + (i + kk * p) * pq] += B.data[kk + k * q];       // (Bᵀ⊗I)
  }
  const x = mldivide(K, rhs); const X = zeros(p, q);
  for (let k = 0; k < q; k++) for (let i = 0; i < p; i++) X.data[i + k * p] = x.data[i + k * p];
  return X;
}
/** Invert a monotone-increasing function on [lo,hi] to value p (bisection). */
function invMonotone(f: (x: number) => number, p: number, lo: number, hi: number): number {
  for (let it = 0; it < 200; it++) { const mid = (lo + hi) / 2; if (f(mid) < p) lo = mid; else hi = mid; if (hi - lo < 1e-14 * (1 + Math.abs(hi))) break; }
  return (lo + hi) / 2;
}
/** The 8×8 Rosser symmetric eigenvalue test matrix. */
function rosserMat(): Mat {
  const rows = [
    [611, 196, -192, 407, -8, -52, -49, 29],
    [196, 899, 113, -192, -71, -43, -8, -44],
    [-192, 113, 899, 196, 61, 49, 8, 52],
    [407, -192, 196, 611, 8, 44, 59, -23],
    [-8, -71, 61, 8, 411, -599, 208, 208],
    [-52, -43, 49, 44, -599, 411, 208, 208],
    [-49, -8, 8, 59, 208, 208, 99, -911],
    [29, -44, 52, -23, 208, 208, -911, 99],
  ];
  return fromRows(rows);
}

function gammainc(x: number, a: number): number {
  if (x < 0 || a <= 0) return NaN; if (x === 0) return 0;
  const gln = logGamma(a);
  if (x < a + 1) { let ap = a, sum = 1 / a, del = sum; for (let i = 0; i < 200; i++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-14) break; } return sum * Math.exp(-x + a * Math.log(x) - gln); }
  let b = x + 1 - a, c = 1e300, d = 1 / b, h = d;
  for (let i = 1; i < 200; i++) { const an = -i * (i - a); b += 2; d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300; c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
  return 1 - Math.exp(-x + a * Math.log(x) - gln) * h;
}
/** Regularised incomplete beta I_x(a,b) (continued fraction). */
function betainc(x: number, a: number, b: number): number {
  if (x <= 0) return 0; if (x >= 1) return 1;
  const bt = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  const cf = (xx: number, aa: number, bb: number) => {
    let c = 1, d = 1 - (aa + bb) * xx / (aa + 1); if (Math.abs(d) < 1e-300) d = 1e-300; d = 1 / d; let h = d;
    for (let mI = 1; mI < 200; mI++) { const m2 = 2 * mI; let aa2 = mI * (bb - mI) * xx / ((aa + m2 - 1) * (aa + m2)); d = 1 + aa2 * d; if (Math.abs(d) < 1e-300) d = 1e-300; c = 1 + aa2 / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; h *= d * c; aa2 = -(aa + mI) * (aa + bb + mI) * xx / ((aa + m2) * (aa + m2 + 1)); d = 1 + aa2 * d; if (Math.abs(d) < 1e-300) d = 1e-300; c = 1 + aa2 / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-14) break; }
    return h;
  };
  return x < (a + 1) / (a + b + 2) ? bt * cf(x, a, b) / a : 1 - bt * cf(1 - x, b, a) / b;
}

// ── String helper ─────────────────────────────────────────────────────────
function getStr(v: Value): string | null { if (isMat(v) && v.isChar) return asString(v); if (isMat(v) && numel(v) === 0) return ''; return null; }
function truthyArg(v: Value): boolean { if (isMat(v) && v.isChar) { const s = asString(v).toLowerCase(); return s !== 'false' && s !== '0' && s !== ''; } return isMat(v) ? v.data[0] !== 0 : true; }

// ── Set / conversion helpers ──────────────────────────────────────────────
function setUniq(arr: number[]): number[] { const s = new Set<number>(); const o: number[] = []; for (const x of arr) if (!s.has(x)) { s.add(x); o.push(x); } return o.sort((a, b) => a - b); }
function intCast(A: Mat, ty: string): Mat { const [lo, hi] = INT_LIMITS[ty]; const o = zeros(A.rows, A.cols); for (let i = 0; i < A.data.length; i++) o.data[i] = Math.min(hi, Math.max(lo, Math.round(A.data[i]))); return o; }
/** Characteristic polynomial coefficients (monic, high→low) for poly(matrix). */
function charpolyC(A: Mat): number[] {
  const n = A.rows; const c = [1]; let M = zeros(n, n); for (let i = 0; i < n; i++) M.data[i + i * n] = 1;
  for (let k = 1; k <= n; k++) { const AM = matmul(A, M); let tr = 0; for (let i = 0; i < n; i++) tr += AM.data[i + i * n]; const ck = -tr / k; c.push(ck); M = mat(n, n, Float64Array.from(AM.data)); for (let i = 0; i < n; i++) M.data[i + i * n] += ck; }
  return c;
}

// ── Signal / preprocessing helpers ────────────────────────────────────────
function conv2Full(A: Mat, B: Mat): Mat {
  const r = A.rows + B.rows - 1, c = A.cols + B.cols - 1; const o = zeros(r, c);
  for (let ac = 0; ac < A.cols; ac++) for (let ar = 0; ar < A.rows; ar++) { const av = A.data[ar + ac * A.rows]; if (av === 0) continue; for (let bc = 0; bc < B.cols; bc++) for (let br = 0; br < B.rows; br++) o.data[(ar + br) + (ac + bc) * r] += av * B.data[br + bc * B.rows]; }
  return o;
}
function conv2Shape(A: Mat, B: Mat, shape: string): Mat {
  const full = conv2Full(A, B);
  if (shape === 'full') return full;
  if (shape === 'valid') { const r = Math.max(0, A.rows - B.rows + 1), c = Math.max(0, A.cols - B.cols + 1); const o = zeros(r, c); const sr = B.rows - 1, sc = B.cols - 1; for (let cc = 0; cc < c; cc++) for (let rr = 0; rr < r; rr++) o.data[rr + cc * r] = full.data[(rr + sr) + (cc + sc) * full.rows]; return o; }
  // 'same' — centred A-sized window
  const sr = Math.floor(B.rows / 2), sc = Math.floor(B.cols / 2); const o = zeros(A.rows, A.cols);
  for (let cc = 0; cc < A.cols; cc++) for (let rr = 0; rr < A.rows; rr++) o.data[rr + cc * A.rows] = full.data[(rr + sr) + (cc + sc) * full.rows];
  return o;
}
function xcorrFn(x: number[], y: number[]): number[] {
  const N = Math.max(x.length, y.length); const xp = [...x, ...new Array(N - x.length).fill(0)]; const yp = [...y, ...new Array(N - y.length).fill(0)];
  const out: number[] = []; for (let lag = -(N - 1); lag <= N - 1; lag++) { let s = 0; for (let n = 0; n < N; n++) { const mm = n - lag; if (mm >= 0 && mm < N) s += xp[n] * yp[mm]; } out.push(s); } return out;
}
function detrendVec(c: number[], type: string): number[] {
  const n = c.length; if (type === 'constant' || type === '0') { const mu = c.reduce((s, x) => s + x, 0) / n; return c.map((x) => x - mu); }
  let sx = 0, sy = 0, sxx = 0, sxy = 0; for (let i = 0; i < n; i++) { sx += i; sy += c[i]; sxx += i * i; sxy += i * c[i]; }
  const slope = (n * sxy - sx * sy) / (n * sxx - sx * sx || 1); const intercept = (sy - slope * sx) / n;
  return c.map((x, i) => x - (slope * i + intercept));
}
/** Apply a vector→vector transform to a vector, or per column of a matrix. */
function colMap(A: Mat, f: (col: number[]) => number[]): Mat {
  if (A.rows === 1 || A.cols === 1) { const r = f(toArray(A)); return A.cols === 1 ? colVec(r) : rowVec(r); }
  const o = zeros(A.rows, A.cols); for (let c = 0; c < A.cols; c++) { const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]); const rr = f(col); for (let r = 0; r < A.rows; r++) o.data[r + c * A.rows] = rr[r]; } return o;
}
function movVec(v: number[], k: number, median: boolean): number[] {
  const n = v.length; const before = Math.floor((k - 1) / 2); const out: number[] = [];
  for (let i = 0; i < n; i++) { const w = v.slice(Math.max(0, i - before), Math.min(n, i - before + k)); if (median) { const s = [...w].sort((a, b) => a - b); out.push(s.length % 2 ? s[(s.length - 1) / 2] : (s[s.length / 2 - 1] + s[s.length / 2]) / 2); } else out.push(w.reduce((a, b) => a + b, 0) / w.length); }
  return out;
}
function smooth2(A: Mat, k: number): Mat {
  const b = Math.floor((k - 1) / 2); const o = zeros(A.rows, A.cols);
  for (let r = 0; r < A.rows; r++) for (let c = 0; c < A.cols; c++) { let s = 0, cnt = 0; for (let dr = -b; dr <= k - 1 - b; dr++) for (let dc = -b; dc <= k - 1 - b; dc++) { const rr = r + dr, cc = c + dc; if (rr >= 0 && rr < A.rows && cc >= 0 && cc < A.cols) { s += A.data[rr + cc * A.rows]; cnt++; } } o.data[r + c * A.rows] = s / cnt; }
  return o;
}
function normalizeVec(c: number[], method: string): number[] {
  const n = c.length; const mu = c.reduce((s, x) => s + x, 0) / n;
  if (method === 'center') return c.map((x) => x - mu);
  if (method === 'range') { const mn = Math.min(...c), mx = Math.max(...c); const d = mx - mn || 1; return c.map((x) => (x - mn) / d); }
  if (method === 'norm') { const nr = Math.hypot(...c) || 1; return c.map((x) => x / nr); }
  if (method === 'scale') { const sd = Math.sqrt(c.reduce((s, x) => s + (x - mu) ** 2, 0) / (n - 1 || 1)) || 1; return c.map((x) => x / sd); }
  const sd = Math.sqrt(c.reduce((s, x) => s + (x - mu) ** 2, 0) / (n - 1 || 1)) || 1; return c.map((x) => (x - mu) / sd); // zscore
}
function outlierMask(c: number[]): number[] {
  const s = [...c].sort((a, b) => a - b); const n = s.length; const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
  const dev = c.map((x) => Math.abs(x - med)).sort((a, b) => a - b); const mad = dev.length % 2 ? dev[(dev.length - 1) / 2] : (dev[dev.length / 2 - 1] + dev[dev.length / 2]) / 2;
  const thr = 3 * 1.4826 * mad; return c.map((x) => (Math.abs(x - med) > thr && thr > 0 ? 1 : 0));
}
function fillOutliersVec(c: number[], fillNum: number | null): number[] {
  const mask = outlierMask(c); const s = [...c].sort((a, b) => a - b); const n = s.length; const med = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
  return c.map((x, i) => (mask[i] ? (fillNum ?? med) : x));
}
/** Inverse error function (Winitzki approximation + one Newton step). */
function erfinvFn(y: number): number {
  if (y <= -1) return -Infinity; if (y >= 1) return Infinity; if (y === 0) return 0;
  const a = 0.147; const ln = Math.log(1 - y * y); const t1 = 2 / (Math.PI * a) + ln / 2;
  let x = Math.sign(y) * Math.sqrt(Math.sqrt(t1 * t1 - ln / a) - t1);
  x -= (erfFn(x) - y) / (2 / Math.sqrt(Math.PI) * Math.exp(-x * x)); // Newton refine
  return x;
}

// ── Statistics helpers ────────────────────────────────────────────────────
/** Apply f to a vector, or per-column (→ row vector) for a matrix. */
function colReduce(A: Mat, f: (col: number[]) => number): Mat {
  if (A.rows === 1 || A.cols === 1) return scalar(f(toArray(A)));
  const out = zeros(1, A.cols);
  for (let c = 0; c < A.cols; c++) { const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]); out.data[c] = f(col); }
  return out;
}
function variance(c: number[]): number { const n = c.length; if (n < 2) return 0; const mu = c.reduce((s, x) => s + x, 0) / n; return c.reduce((s, x) => s + (x - mu) ** 2, 0) / (n - 1); }
function modeOf(c: number[]): number { const m = new Map<number, number>(); for (const x of c) m.set(x, (m.get(x) ?? 0) + 1); let best = NaN, bc = -1; for (const [v, k] of [...m].sort((a, b) => a[0] - b[0])) if (k > bc) { bc = k; best = v; } return best; }
/** MATLAB-style percentile (positions at (k-0.5)/n, linear interpolation). */
function pctile(sorted: number[], p: number): number { const n = sorted.length; if (n === 0) return NaN; if (n === 1) return sorted[0]; const pos = (p / 100) * n - 0.5; if (pos <= 0) return sorted[0]; if (pos >= n - 1) return sorted[n - 1]; const lo = Math.floor(pos), fr = pos - lo; return sorted[lo] * (1 - fr) + sorted[lo + 1] * fr; }
const colvecOf = (A: Mat): Mat => (A.cols === 1 ? A : (A.rows === 1 ? transpose(A) : A));
/** Covariance matrix with columns as variables (normalised by n-1). */
function covMatrix(X: Mat): Mat {
  const n = X.rows, p = X.cols; const mu = new Float64Array(p);
  for (let c = 0; c < p; c++) { let s = 0; for (let r = 0; r < n; r++) s += X.data[r + c * n]; mu[c] = s / n; }
  const C = zeros(p, p);
  for (let i = 0; i < p; i++) for (let j = 0; j < p; j++) { let s = 0; for (let r = 0; r < n; r++) s += (X.data[r + i * n] - mu[i]) * (X.data[r + j * n] - mu[j]); C.data[i + j * p] = s / (n - 1); }
  return C;
}
/** Centred truncated moving window of length k over a vector. */
function movWindow(A: Mat, k: number, f: (w: number[]) => number): Mat {
  const v = toArray(A); const n = v.length; const before = Math.floor((k - 1) / 2); const out: number[] = [];
  for (let i = 0; i < n; i++) { const lo = Math.max(0, i - before), hi = Math.min(n - 1, i - before + k - 1); out.push(f(v.slice(lo, hi + 1))); }
  return A.cols === 1 ? colVec(out) : rowVec(out);
}

/** Rotate a matrix 90° counter-clockwise k times. */
function rot90n(A: Mat, kk: number): Mat {
  let R = A; const k = ((kk % 4) + 4) % 4;
  for (let t = 0; t < k; t++) { const T = transpose(R); const o = zeros(T.rows, T.cols); o.isChar = T.isChar; const im = T.idata ? new Float64Array(T.data.length) : null; for (let c = 0; c < T.cols; c++) for (let r = 0; r < T.rows; r++) { o.data[(T.rows - 1 - r) + c * T.rows] = T.data[r + c * T.rows]; if (im) im[(T.rows - 1 - r) + c * T.rows] = T.idata![r + c * T.rows]; } if (im) o.idata = im; R = o; }
  return R;
}

// ── Numerical-methods helpers ─────────────────────────────────────────────
function handle(v: Value, name: string): Handle { if (!isHandle(v)) throw new MatError(`${name}: first argument must be a function handle`); return v; }
async function callScalar(env: Env, f: Handle, x: number): Promise<number> { const r = await env.callHandle(f, [scalar(x)], 1); return r.length && isMat(r[0]) ? asScalar(r[0] as Mat) : NaN; }

/** Natural cubic spline value at q (recomputes second derivatives per call). */
function splineEval(x: number[], y: number[], q: number): number {
  const n = x.length; if (n < 2) return y[0] ?? NaN;
  const h: number[] = []; for (let i = 0; i < n - 1; i++) h.push(x[i + 1] - x[i]);
  const M = new Array(n).fill(0);
  if (n > 2) {
    const lo: number[] = [], di: number[] = [], up: number[] = [], rhs: number[] = [];
    for (let i = 1; i < n - 1; i++) { lo.push(h[i - 1]); di.push(2 * (h[i - 1] + h[i])); up.push(h[i]); rhs.push(6 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])); }
    // Thomas algorithm
    const k = di.length; const cp = [...up], dp = [...rhs];
    cp[0] /= di[0]; dp[0] /= di[0];
    for (let i = 1; i < k; i++) { const den = di[i] - lo[i] * cp[i - 1]; cp[i] = up[i] / den; dp[i] = (rhs[i] - lo[i] * dp[i - 1]) / den; }
    const mm = new Array(k); mm[k - 1] = dp[k - 1]; for (let i = k - 2; i >= 0; i--) mm[i] = dp[i] - cp[i] * mm[i + 1];
    for (let i = 1; i < n - 1; i++) M[i] = mm[i - 1];
  }
  let i = 0; while (i < n - 2 && q > x[i + 1]) i++;
  const dx = q - x[i], hi = h[i];
  const aa = y[i], bb = (y[i + 1] - y[i]) / hi - hi * (2 * M[i] + M[i + 1]) / 6, cc = M[i] / 2, dd = (M[i + 1] - M[i]) / (6 * hi);
  return aa + bb * dx + cc * dx * dx + dd * dx * dx * dx;
}

// ── Sparse (CSC) helpers + structural algorithms ─────────────────────────
const asSparse = (v: Value): Sparse => (isSparse(v) ? v : denseToSparse(m(v)));
/** Iterate (linearKey, value) of a CSC matrix (column-major key = j*rows+i). */
function* sparseEntries(S: Sparse): Generator<[number, number]> {
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) yield [j * S.rows + S.rowind[p], S.values[p]];
}
/** sprand/sprandn(m,n,density) or sprand(A): random sparse pattern. */
function sprandGen(a: Value[], normal: boolean): Sparse {
  const rnd = () => (normal ? Math.sqrt(-2 * Math.log(Math.random() || 1e-12)) * Math.cos(2 * Math.PI * Math.random()) : Math.random());
  if (a.length === 1) { const S = asSparse(a[0]); const acc = new Map<number, number>(); for (const [k] of sparseEntries(S)) acc.set(k, rnd()); return sparseFromMap(S.rows, S.cols, acc); }
  const r = Math.round(asScalar(a[0])), c = Math.round(asScalar(a[1])), dens = a.length >= 3 ? asScalar(a[2]) : 0.1;
  const acc = new Map<number, number>(); const k = Math.round(dens * r * c);
  for (let t = 0; t < k; t++) acc.set(Math.floor(Math.random() * c) * r + Math.floor(Math.random() * r), rnd());
  return sparseFromMap(r, c, acc);
}
/** Symmetric adjacency list of the nonzero pattern of A+Aᵀ (no self-loops). */
function symAdjacency(S: Sparse): Set<number>[] {
  const n = S.rows; const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { const i = S.rowind[p]; if (i !== j) { adj[i].add(j); adj[j].add(i); } }
  return adj;
}
/** Maximum bipartite matching (columns→rows) on a sparse pattern, via augmenting paths.
 *  Returns match[col] = matched row index, or -1 (basis of dmperm / structural rank). */
function bipartiteMatch(S: Sparse): number[] {
  const matchCol = new Array(S.cols).fill(-1);   // col → row
  const matchRow = new Array(S.rows).fill(-1);   // row → col
  const colRows: number[][] = Array.from({ length: S.cols }, (_, j) => { const rs: number[] = []; for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) rs.push(S.rowind[p]); return rs; });
  const tryAug = (j: number, seen: boolean[]): boolean => {
    for (const i of colRows[j]) if (!seen[i]) { seen[i] = true; if (matchRow[i] < 0 || tryAug(matchRow[i], seen)) { matchRow[i] = j; matchCol[j] = i; return true; } }
    return false;
  };
  for (let j = 0; j < S.cols; j++) tryAug(j, new Array(S.rows).fill(false));
  return matchCol;
}
/** Column-intersection adjacency (pattern of AᵀA) for colamd. */
function colAdjacency(S: Sparse): Set<number>[] {
  const n = S.cols; const adj: Set<number>[] = Array.from({ length: n }, () => new Set<number>());
  const rowCols = new Map<number, number[]>();
  for (let j = 0; j < S.cols; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) { const i = S.rowind[p]; (rowCols.get(i) ?? rowCols.set(i, []).get(i)!).push(j); }
  for (const cols of rowCols.values()) for (let x = 0; x < cols.length; x++) for (let y = x + 1; y < cols.length; y++) { adj[cols[x]].add(cols[y]); adj[cols[y]].add(cols[x]); }
  return adj;
}
/** Greedy minimum-degree elimination ordering (1-based permutation). */
function minDegreeOrder(adj0: Set<number>[]): number[] {
  const n = adj0.length; const adj = adj0.map((s) => new Set(s)); const elim = new Array(n).fill(false); const order: number[] = [];
  for (let step = 0; step < n; step++) {
    let v = -1; for (let i = 0; i < n; i++) if (!elim[i] && (v < 0 || adj[i].size < adj[v].size)) v = i;
    order.push(v + 1); elim[v] = true;
    const nb = [...adj[v]].filter((u) => !elim[u]);
    for (const x of nb) { adj[x].delete(v); for (const y of nb) if (x !== y) adj[x].add(y); }
  }
  return order;
}
/** Reverse Cuthill–McKee ordering (1-based permutation). */
function symrcmOf(S: Sparse): number[] {
  const n = S.rows; const adj = symAdjacency(S).map((s) => [...s]); const deg = adj.map((a) => a.length);
  const visited = new Array(n).fill(false); const order: number[] = [];
  while (order.length < n) {
    let start = -1; for (let i = 0; i < n; i++) if (!visited[i] && (start < 0 || deg[i] < deg[start])) start = i;
    const queue = [start]; visited[start] = true;
    while (queue.length) { const v = queue.shift()!; order.push(v); const nb = adj[v].filter((u) => !visited[u]).sort((x, y) => deg[x] - deg[y]); for (const u of nb) { visited[u] = true; queue.push(u); } }
  }
  order.reverse();
  return order.map((i) => i + 1);
}
/** Elimination tree parent vector (1-based; 0 = root), from the upper structure. */
function etreeOf(S: Sparse): number[] {
  const n = S.cols; const parent = new Array(n).fill(-1); const ancestor = new Array(n).fill(-1);
  for (let j = 0; j < n; j++) for (let p = S.colptr[j]; p < S.colptr[j + 1]; p++) {
    let i = S.rowind[p];
    while (i !== -1 && i < j) { const next = ancestor[i]; ancestor[i] = j; if (next === -1) parent[i] = j; i = next; }
  }
  return parent.map((x) => x + 1);
}
/** Incomplete Cholesky IC(0): lower factor on the pattern of A (A assumed SPD). */
function ichol0(S: Sparse): Sparse {
  const n = S.rows; const A = sparseToDense(S); const inP = (i: number, j: number) => A.data[i + j * n] !== 0;
  const L = zeros(n, n);
  for (let k = 0; k < n; k++) {
    let d = A.data[k + k * n]; for (let j = 0; j < k; j++) if (inP(k, j)) d -= L.data[k + j * n] ** 2;
    L.data[k + k * n] = Math.sqrt(Math.max(d, 0));
    for (let i = k + 1; i < n; i++) if (inP(i, k)) { let s = A.data[i + k * n]; for (let j = 0; j < k; j++) if (inP(i, j) && inP(k, j)) s -= L.data[i + j * n] * L.data[k + j * n]; L.data[i + k * n] = L.data[k + k * n] ? s / L.data[k + k * n] : 0; }
  }
  return denseToSparse(L);
}
/** Incomplete LU ILU(0): unit-lower L and upper U on the pattern of A (IKJ variant). */
function ilu0(S: Sparse): { L: Sparse; U: Sparse } {
  const n = S.rows; const A = sparseToDense(S); const inP = (i: number, j: number) => A.data[i + j * n] !== 0;
  const w = Float64Array.from(A.data);
  for (let i = 0; i < n; i++) {
    for (let k = 0; k < i; k++) if (inP(i, k)) { w[i + k * n] /= w[k + k * n]; const lik = w[i + k * n]; for (let j = k + 1; j < n; j++) if (inP(i, j)) w[i + j * n] -= lik * w[k + j * n]; }
  }
  const L = zeros(n, n), U = zeros(n, n);
  for (let i = 0; i < n; i++) { L.data[i + i * n] = 1; for (let j = 0; j < n; j++) if (inP(i, j)) { if (j < i) L.data[i + j * n] = w[i + j * n]; else U.data[i + j * n] = w[i + j * n]; } }
  return { L: denseToSparse(L), U: denseToSparse(U) };
}

// ── 2-D Delaunay triangulation (Bowyer–Watson) + scattered interpolation ──
function orient2(ax: number, ay: number, bx: number, by: number, cx: number, cy: number): number {
  return (bx - ax) * (cy - ay) - (by - ay) * (cx - ax);
}
/** True if (px,py) lies strictly inside the circumcircle of triangle a,b,c. */
function inCircle(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, px: number, py: number): boolean {
  if (orient2(ax, ay, bx, by, cx, cy) < 0) { const tx = bx, ty = by; bx = cx; by = cy; cx = tx; cy = ty; }
  const adx = ax - px, ady = ay - py, bdx = bx - px, bdy = by - py, cdx = cx - px, cdy = cy - py;
  const a2 = adx * adx + ady * ady, b2 = bdx * bdx + bdy * bdy, c2 = cdx * cdx + cdy * cdy;
  const det = adx * (bdy * c2 - b2 * cdy) - ady * (bdx * c2 - b2 * cdx) + a2 * (bdx * cdy - bdy * cdx);
  return det > 1e-12;
}
/** Delaunay triangulation of 2-D points; returns 0-based vertex-index triples. */
function delaunayTri(xs: number[], ys: number[]): number[][] {
  const n = xs.length; if (n < 3) return [];
  let minx = Infinity, miny = Infinity, maxx = -Infinity, maxy = -Infinity;
  for (let i = 0; i < n; i++) { minx = Math.min(minx, xs[i]); miny = Math.min(miny, ys[i]); maxx = Math.max(maxx, xs[i]); maxy = Math.max(maxy, ys[i]); }
  const dmax = Math.max(maxx - minx, maxy - miny) || 1, midx = (minx + maxx) / 2, midy = (miny + maxy) / 2;
  const px = [...xs, midx - 20 * dmax, midx, midx + 20 * dmax];
  const py = [...ys, midy - dmax, midy + 20 * dmax, midy - dmax];
  let tris: number[][] = [[n, n + 1, n + 2]];
  for (let i = 0; i < n; i++) {
    const bad: number[][] = [], good: number[][] = [];
    for (const t of tris) (inCircle(px[t[0]], py[t[0]], px[t[1]], py[t[1]], px[t[2]], py[t[2]], px[i], py[i]) ? bad : good).push(t);
    const edges: number[][] = [];
    for (const t of bad) edges.push([t[0], t[1]], [t[1], t[2]], [t[2], t[0]]);
    tris = good;
    for (let a = 0; a < edges.length; a++) {
      let shared = false;
      for (let b = 0; b < edges.length; b++) if (a !== b && ((edges[a][0] === edges[b][0] && edges[a][1] === edges[b][1]) || (edges[a][0] === edges[b][1] && edges[a][1] === edges[b][0]))) { shared = true; break; }
      if (!shared) tris.push([edges[a][0], edges[a][1], i]);
    }
  }
  return tris.filter((t) => t.every((v) => v < n));
}
/** Circumcenter of a triangle (Voronoi vertex). */
function circumcenter(ax: number, ay: number, bx: number, by: number, cx: number, cy: number): [number, number] {
  const d = 2 * (ax * (by - cy) + bx * (cy - ay) + cx * (ay - by));
  if (Math.abs(d) < 1e-300) return [(ax + bx + cx) / 3, (ay + by + cy) / 3];
  const a2 = ax * ax + ay * ay, b2 = bx * bx + by * by, c2 = cx * cx + cy * cy;
  return [(a2 * (by - cy) + b2 * (cy - ay) + c2 * (ay - by)) / d, (a2 * (cx - bx) + b2 * (ax - cx) + c2 * (bx - ax)) / d];
}
/** Barycentric coordinates of (px,py) in triangle a,b,c. */
function bary(ax: number, ay: number, bx: number, by: number, cx: number, cy: number, px: number, py: number): [number, number, number] {
  const d = (by - cy) * (ax - cx) + (cx - bx) * (ay - cy);
  const l1 = ((by - cy) * (px - cx) + (cx - bx) * (py - cy)) / d;
  const l2 = ((cy - ay) * (px - cx) + (ax - cx) * (py - cy)) / d;
  return [l1, l2, 1 - l1 - l2];
}

/** Column-major Mat → row-major number[][] grid (z[r][c]). */
function matToGrid(Z: Mat): number[][] {
  const g: number[][] = []; for (let r = 0; r < Z.rows; r++) { const row: number[] = []; for (let c = 0; c < Z.cols; c++) row.push(Z.data[r + c * Z.rows]); g.push(row); }
  return g;
}
/** Marching-squares contour segments packed into MATLAB's contour-matrix format. */
function marchingSquares(xv: number[], yv: number[], z: number[][], levels: number[] | null): Mat {
  const nr = z.length, nc = z[0]?.length ?? 0;
  let zmin = Infinity, zmax = -Infinity; for (const row of z) for (const v of row) { if (v < zmin) zmin = v; if (v > zmax) zmax = v; }
  const lv = levels ?? Array.from({ length: 6 }, (_, i) => zmin + (i + 1) * (zmax - zmin) / 7);
  const cols: number[][] = [];   // each entry is a 2-element column [x;y] for the contour matrix
  const interp = (lo: number, hi: number, t: number, a: number, b: number) => a + (b - a) * (t - lo) / (hi - lo || 1);
  for (const L of lv) {
    for (let r = 0; r < nr - 1; r++) for (let c = 0; c < nc - 1; c++) {
      const tl = z[r][c], tr = z[r][c + 1], br = z[r + 1][c + 1], bl = z[r + 1][c];
      const pts: [number, number][] = [];
      const edge = (va: number, vb: number, xa: number, ya: number, xb: number, yb: number) => { if ((va < L) !== (vb < L)) pts.push([interp(va, vb, L, xa, xb), interp(va, vb, L, ya, yb)]); };
      edge(tl, tr, xv[c], yv[r], xv[c + 1], yv[r]);          // top
      edge(tr, br, xv[c + 1], yv[r], xv[c + 1], yv[r + 1]);  // right
      edge(br, bl, xv[c + 1], yv[r + 1], xv[c], yv[r + 1]);  // bottom
      edge(bl, tl, xv[c], yv[r + 1], xv[c], yv[r]);          // left
      for (let k = 0; k + 1 < pts.length; k += 2) {
        cols.push([L, 2]);                                    // header: level, #points
        cols.push([pts[k][0], pts[k][1]], [pts[k + 1][0], pts[k + 1][1]]);
      }
    }
  }
  const out = zeros(2, cols.length); cols.forEach((cc, j) => { out.data[0 + j * 2] = cc[0]; out.data[1 + j * 2] = cc[1]; });
  return out;
}

// ── General n-dimensional geometry (convhulln / delaunayn / voronoin) ──────
/** A column-major m×n Mat → array of m row-vectors. */
function matRows(P: Mat): number[][] {
  const rows: number[][] = [];
  for (let i = 0; i < P.rows; i++) { const r: number[] = []; for (let j = 0; j < P.cols; j++) r.push(P.data[i + j * P.rows]); rows.push(r); }
  return rows;
}
/** Determinant of a square matrix given as rows (Gaussian elimination). */
function detRows(rows: number[][]): number {
  const n = rows.length; const M = rows.map((r) => r.slice()); let det = 1;
  for (let c = 0; c < n; c++) {
    let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (Math.abs(M[piv][c]) < 1e-300) return 0;
    if (piv !== c) { [M[c], M[piv]] = [M[piv], M[c]]; det = -det; }
    det *= M[c][c];
    for (let r = c + 1; r < n; r++) { const f = M[r][c] / M[c][c]; for (let k = c; k < n; k++) M[r][k] -= f * M[c][k]; }
  }
  return det;
}
/** Solve the n×n system Ax=b by Gaussian elimination with partial pivoting. Returns null if singular. */
function solveLin(A: number[][], b: number[]): number[] | null {
  const n = b.length; const M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < n; c++) {
    let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (Math.abs(M[piv][c]) < 1e-12) return null;
    [M[c], M[piv]] = [M[piv], M[c]];
    for (let r = 0; r < n; r++) if (r !== c) { const f = M[r][c] / M[c][c]; for (let k = c; k <= n; k++) M[r][k] -= f * M[c][k]; }
  }
  return M.map((r, i) => r[n] / r[i]);
}
/** Outward-oriented (d-1)-simplex facet of a d-dimensional hull. */
interface Facet { verts: number[]; normal: number[]; offset: number }
/** Hyperplane through d points (P[idx]); orient its normal so `interior` is on the negative side. */
function makeFacet(P: number[][], idx: number[], interior: number[]): Facet | null {
  const d = P[0].length; const base = P[idx[0]];
  // normal ⟂ all edge vectors (idx[k]-idx[0]); solve the (d-1) constraints + a normalisation.
  const A: number[][] = []; const rhs: number[] = [];
  for (let k = 1; k < d; k++) { A.push(P[idx[k]].map((v, j) => v - base[j])); rhs.push(0); }
  A.push(P[idx[0]].slice()); rhs.push(1); // arbitrary scaling row to avoid the trivial solution
  let nrm = solveLin(A, rhs);
  if (!nrm) { A[d - 1] = A[d - 1].map(() => Math.random()); nrm = solveLin(A, rhs); if (!nrm) return null; }
  let offset = nrm.reduce((s, v, j) => s + v * base[j], 0);
  if (nrm.reduce((s, v, j) => s + v * interior[j], 0) - offset > 0) { nrm = nrm.map((v) => -v); offset = -offset; }
  return { verts: idx.slice(), normal: nrm, offset };
}
/** Incremental (beneath–beyond) convex hull of m points in d dimensions → facets of (d-1)-simplices. */
function convhullnd(P: number[][]): Facet[] {
  const m = P.length, d = P[0].length;
  // Seed: find d+1 affinely-independent points.
  const seed = [0]; const interiorPts: number[][] = [P[0]];
  for (let i = 1; i < m && seed.length <= d; i++) {
    const cand = [...seed, i];
    if (cand.length === 1) { seed.push(i); continue; }
    // rank check: edge vectors from cand[0] must be independent
    const edges = cand.slice(1).map((idx) => P[idx].map((v, j) => v - P[cand[0]][j]));
    if (matRank(edges) === edges.length) { seed.push(i); interiorPts.push(P[i]); }
  }
  if (seed.length < d + 1) return []; // degenerate (points lie in a lower-dim flat)
  const interior = P[0].map((_, j) => seed.reduce((s, idx) => s + P[idx][j], 0) / seed.length);
  let facets: Facet[] = [];
  for (let omit = 0; omit < seed.length; omit++) { const f = makeFacet(P, seed.filter((_, k) => k !== omit), interior); if (f) facets.push(f); }
  const inHull = new Set(seed);
  for (let p = 0; p < m; p++) {
    if (inHull.has(p)) continue;
    const visible = facets.filter((f) => f.normal.reduce((s, v, j) => s + v * P[p][j], 0) - f.offset > 1e-9);
    if (!visible.length) continue;
    // Horizon: ridges (d-1 verts) shared by exactly one visible facet.
    const ridgeCount = new Map<string, { verts: number[]; n: number }>();
    for (const f of visible) for (let k = 0; k < d; k++) { const r = f.verts.filter((_, q) => q !== k); const key = r.slice().sort((a, b) => a - b).join(','); const e = ridgeCount.get(key); if (e) e.n++; else ridgeCount.set(key, { verts: r, n: 1 }); }
    const vis = new Set(visible); facets = facets.filter((f) => !vis.has(f));
    for (const { verts, n } of ridgeCount.values()) if (n === 1) { const f = makeFacet(P, [...verts, p], interior); if (f) facets.push(f); }
    inHull.add(p);
  }
  return facets;
}
/** Rank of a small matrix (rows of equal length) by Gaussian elimination. */
function matRank(rows: number[][]): number {
  const R = rows.map((r) => r.slice()); const m = R.length, n = R[0]?.length ?? 0; let rank = 0;
  for (let c = 0; c < n && rank < m; c++) {
    let piv = -1; for (let r = rank; r < m; r++) if (Math.abs(R[r][c]) > 1e-10) { piv = r; break; }
    if (piv < 0) continue;
    [R[rank], R[piv]] = [R[piv], R[rank]];
    for (let r = 0; r < m; r++) if (r !== rank) { const f = R[r][c] / R[rank][c]; for (let k = c; k < n; k++) R[r][k] -= f * R[rank][k]; }
    rank++;
  }
  return rank;
}
/** Delaunay simplices of m points in d-D, via the lower convex hull of the paraboloid lift.
 *  A tiny deterministic joggle breaks exact cocircular/cospherical degeneracies (cf. Qhull 'QJ'). */
function delaunaynd(P: number[][]): number[][] {
  const d = P[0].length;
  const jit = (i: number, j: number) => 1e-9 * ((((i + 1) * 2654435761 + (j + 1) * 40503) >>> 0) / 2 ** 32 - 0.5);
  const lifted = P.map((pt, i) => { const q = pt.map((v, j) => v + jit(i, j)); return [...q, q.reduce((s, v) => s + v * v, 0)]; });
  const facets = convhullnd(lifted);
  // Lower facets: outward normal points "down" in the lift dimension (negative last component).
  return facets.filter((f) => f.normal[d] < -1e-12).map((f) => f.verts.slice());
}
/** Barycentric weights of q within the d-simplex `pts` (d+1 points in d-D); w0 first. */
function barycentricND(pts: number[][], q: number[]): number[] {
  const d = q.length; const v0 = pts[0];
  const A: number[][] = []; const b: number[] = [];
  for (let i = 0; i < d; i++) { A.push(pts.slice(1).map((p) => p[i] - v0[i])); b.push(q[i] - v0[i]); }
  const w = solveLin(A, b); if (!w) return new Array(d + 1).fill(NaN);
  return [1 - w.reduce((s, x) => s + x, 0), ...w];
}
/** Circumcenter of a d-simplex (d+1 points in d-D). */
function circumcenterND(pts: number[][]): number[] {
  const d = pts[0].length; const v0 = pts[0];
  const A: number[][] = []; const b: number[] = [];
  for (let i = 1; i <= d; i++) { A.push(pts[i].map((v, j) => 2 * (v - v0[j]))); b.push(pts[i].reduce((s, v) => s + v * v, 0) - v0.reduce((s, v) => s + v * v, 0)); }
  return solveLin(A, b) ?? v0.map((_, j) => pts.reduce((s, p) => s + p[j], 0) / pts.length);
}

// ── Graph / network ────────────────────────────────────────────────────
function gArg(v: Value, name = 'G'): Graph { if (!isGraph(v)) throw new MatError(`${name}: expected a graph or digraph`); return v; }
/** Resolve a node selector (numeric indices, a name, or a cellstr/string array) to 0-based indices. */
function nodeIds(g: Graph, v: Value): number[] {
  if (isStr(v)) return v.items.map((nm) => resolveName(g, nm));
  if (isMat(v) && v.isChar) return [resolveName(g, asString(v))];
  if (isCell(v)) return v.items.map((it) => resolveName(g, asString(it)));
  return toArray(m(v)).map((x) => Math.round(x) - 1);
}
function resolveName(g: Graph, nm: string): number { const i = (g.names ?? []).indexOf(nm); if (i < 0) throw new MatError(`node '${nm}' not found`); return i; }
/** Adjacency list. For digraphs, `mode` selects out-edges, in-edges, or both. */
function adjList(g: Graph, mode: 'out' | 'in' | 'all'): { to: number; w: number; e: number }[][] {
  const adj: { to: number; w: number; e: number }[][] = Array.from({ length: g.n }, () => []);
  g.edges.forEach((e, ei) => {
    if (!g.directed) { adj[e.s].push({ to: e.t, w: e.w, e: ei }); if (e.s !== e.t) adj[e.t].push({ to: e.s, w: e.w, e: ei }); return; }
    if (mode === 'out' || mode === 'all') adj[e.s].push({ to: e.t, w: e.w, e: ei });
    if (mode === 'in' || mode === 'all') adj[e.t].push({ to: e.s, w: e.w, e: ei });
  });
  return adj;
}
/** Build a graph/digraph from graph(A) | graph(s,t[,w[,n|names]]). */
function buildGraph(directed: boolean, a: Value[]): Graph {
  // graph(A) or graph(A, names): square (weighted) adjacency matrix.
  if (a.length >= 1 && (isMat(a[0]) || isSparse(a[0])) && !(isMat(a[0]) && (a[0] as Mat).isChar)) {
    const A = isSparse(a[0]) ? sparseToDense(a[0]) : m(a[0]);
    if (A.rows === A.cols && (A.rows > 1 || a.length >= 2)) {
      const n = A.rows; const edges: { s: number; t: number; w: number }[] = [];
      for (let i = 0; i < n; i++) for (let j = directed ? 0 : i; j < n; j++) { const w = A.data[i + j * n]; if (w !== 0 && (directed || j >= i)) edges.push({ s: i, t: j, w }); }
      const names = a.length >= 2 ? nodeNameList(a[1]) : undefined;
      return makeGraph(directed, n, edges, names);
    }
  }
  // edge-list form: graph(s, t [, w [, n | nodenames]])
  let names: string[] | undefined;
  const resolveEnd = (v: Value): number[] => {
    if (isStr(v) || (isMat(v) && (v as Mat).isChar) || isCell(v)) { const list = nodeNameList(v); names = names ?? []; return list.map((nm) => { let k = names!.indexOf(nm); if (k < 0) { k = names!.length; names!.push(nm); } return k; }); }
    return toArray(m(v)).map((x) => Math.round(x) - 1);
  };
  const s = resolveEnd(a[0]), t = resolveEnd(a[1]);
  const wv = a.length >= 3 && isMat(a[2]) && !(a[2] as Mat).isChar ? toArray(a[2] as Mat) : null;
  const edges = s.map((si, i) => ({ s: si, t: t[i], w: wv ? (wv.length === 1 ? wv[0] : wv[i]) : 1 }));
  let n = Math.max(0, ...s, ...t) + 1;
  if (a.length >= 4) { if (isMat(a[3]) && !(a[3] as Mat).isChar) n = Math.max(n, Math.round(asScalar(a[3]))); else { names = nodeNameList(a[3]); n = names.length; } }
  if (names && names.length > n) n = names.length;
  return makeGraph(directed, n, edges, names);
}
function nodeNameList(v: Value): string[] {
  if (isStr(v)) return v.items.slice();
  if (isCell(v)) return v.items.map((it) => asString(it));
  if (isMat(v) && v.isChar) return [asString(v)];
  // numeric scalar = node count → default names
  const n = Math.round(asScalar(v as Mat)); return Array.from({ length: n }, (_, i) => String(i + 1));
}
function adjacencyMat(g: Graph): Mat {
  const A = zeros(g.n, g.n);
  for (const e of g.edges) { A.data[e.s + e.t * g.n] += e.w; if (!g.directed && e.s !== e.t) A.data[e.t + e.s * g.n] += e.w; }
  return A;
}
function dijkstra(g: Graph, src: number): { dist: number[]; prev: number[] } {
  const adj = adjList(g, 'out'); const dist = new Array(g.n).fill(Infinity); const prev = new Array(g.n).fill(-1); const done = new Array(g.n).fill(false);
  dist[src] = 0;
  for (let it = 0; it < g.n; it++) {
    let u = -1, bd = Infinity; for (let i = 0; i < g.n; i++) if (!done[i] && dist[i] < bd) { bd = dist[i]; u = i; }
    if (u < 0) break; done[u] = true;
    for (const { to, w } of adj[u]) { const nd = dist[u] + (w === 0 ? 0 : w); if (nd < dist[to]) { dist[to] = nd; prev[to] = u; } }
  }
  return { dist, prev };
}
function bfsOrder(g: Graph, src: number): number[] {
  const adj = adjList(g, 'out'); const seen = new Array(g.n).fill(false); const order: number[] = []; const q = [src]; seen[src] = true;
  while (q.length) { const u = q.shift()!; order.push(u); for (const { to } of adj[u].slice().sort((x, y) => x.to - y.to)) if (!seen[to]) { seen[to] = true; q.push(to); } }
  return order;
}
function dfsOrder(g: Graph, src: number): number[] {
  const adj = adjList(g, 'out'); const seen = new Array(g.n).fill(false); const order: number[] = [];
  const stack = [src];
  const visit = (u: number) => { seen[u] = true; order.push(u); for (const { to } of adj[u].slice().sort((x, y) => x.to - y.to)) if (!seen[to]) visit(to); };
  visit(src); void stack;
  return order;
}
/** Weakly-connected components (treat edges as undirected); returns 1-based component label per node. */
function connComp(g: Graph): number[] {
  const par = Array.from({ length: g.n }, (_, i) => i);
  const find = (x: number): number => { while (par[x] !== x) { par[x] = par[par[x]]; x = par[x]; } return x; };
  for (const e of g.edges) { par[find(e.s)] = find(e.t); }
  const label = new Array(g.n).fill(0); let next = 0; const seen = new Map<number, number>();
  for (let i = 0; i < g.n; i++) { const r = find(i); if (!seen.has(r)) seen.set(r, ++next); label[i] = seen.get(r)!; }
  return label;
}
/** Kahn topological order (digraph); returns null if a cycle exists. */
function topoSort(g: Graph): number[] | null {
  const indeg = new Array(g.n).fill(0); const adj = adjList(g, 'out');
  for (const e of g.edges) indeg[e.t]++;
  const q: number[] = []; for (let i = 0; i < g.n; i++) if (indeg[i] === 0) q.push(i); q.sort((x, y) => x - y);
  const order: number[] = [];
  while (q.length) { const u = q.shift()!; order.push(u); for (const { to } of adj[u]) if (--indeg[to] === 0) { q.push(to); q.sort((x, y) => x - y); } }
  return order.length === g.n ? order : null;
}
/** Prim minimum spanning tree (undirected, connected component of node 0); returns the tree edges. */
function primMST(g: Graph): { s: number; t: number; w: number }[] {
  const adj = adjList(g, 'all'); const inT = new Array(g.n).fill(false); const tree: { s: number; t: number; w: number }[] = [];
  if (!g.n) return tree; inT[0] = true; let cnt = 1;
  while (cnt < g.n) {
    let be: { s: number; t: number; w: number } | null = null;
    for (let u = 0; u < g.n; u++) if (inT[u]) for (const { to, w } of adj[u]) if (!inT[to] && (!be || w < be.w)) be = { s: u, t: to, w };
    if (!be) break; inT[be.t] = true; tree.push(be); cnt++;
  }
  return tree;
}
/** Edmonds–Karp max flow from src to sink. */
function maxFlow(g: Graph, src: number, sink: number): number {
  const cap: number[][] = Array.from({ length: g.n }, () => new Array(g.n).fill(0));
  for (const e of g.edges) { cap[e.s][e.t] += e.w; if (!g.directed) cap[e.t][e.s] += e.w; }
  let flow = 0;
  for (;;) {
    const prev = new Array(g.n).fill(-1); prev[src] = src; const q = [src];
    while (q.length) { const u = q.shift()!; for (let v = 0; v < g.n; v++) if (prev[v] < 0 && cap[u][v] > 1e-12) { prev[v] = u; q.push(v); } }
    if (prev[sink] < 0) break;
    let aug = Infinity; for (let v = sink; v !== src; v = prev[v]) aug = Math.min(aug, cap[prev[v]][v]);
    for (let v = sink; v !== src; v = prev[v]) { cap[prev[v]][v] -= aug; cap[v][prev[v]] += aug; }
    flow += aug;
  }
  return flow;
}
/** Brandes betweenness centrality (unweighted, BFS-based). */
function betweenness(g: Graph): number[] {
  const adj = adjList(g, 'out'); const CB = new Array(g.n).fill(0);
  for (let s = 0; s < g.n; s++) {
    const stack: number[] = []; const pred: number[][] = Array.from({ length: g.n }, () => []);
    const sigma = new Array(g.n).fill(0); sigma[s] = 1; const dist = new Array(g.n).fill(-1); dist[s] = 0; const q = [s];
    while (q.length) { const v = q.shift()!; stack.push(v); for (const { to: w } of adj[v]) { if (dist[w] < 0) { dist[w] = dist[v] + 1; q.push(w); } if (dist[w] === dist[v] + 1) { sigma[w] += sigma[v]; pred[w].push(v); } } }
    const delta = new Array(g.n).fill(0);
    while (stack.length) { const w = stack.pop()!; for (const v of pred[w]) delta[v] += (sigma[v] / sigma[w]) * (1 + delta[w]); if (w !== s) CB[w] += delta[w]; }
  }
  if (!g.directed) for (let i = 0; i < g.n; i++) CB[i] /= 2;
  return CB;
}
/** PageRank via power iteration. */
function pagerank(g: Graph, damp = 0.85): number[] {
  const adj = adjList(g, 'out'); const out = adj.map((l) => l.length); let pr = new Array(g.n).fill(1 / g.n);
  for (let it = 0; it < 200; it++) {
    const next = new Array(g.n).fill((1 - damp) / g.n);
    let dangling = 0; for (let i = 0; i < g.n; i++) if (out[i] === 0) dangling += damp * pr[i] / g.n;
    for (let u = 0; u < g.n; u++) if (out[u]) for (const { to } of adj[u]) next[to] += damp * pr[u] / out[u];
    for (let i = 0; i < g.n; i++) next[i] += dangling;
    let diff = 0; for (let i = 0; i < g.n; i++) diff += Math.abs(next[i] - pr[i]); pr = next; if (diff < 1e-12) break;
  }
  return pr;
}

/** Draw a graph with a simple circular layout: edges as line segments, nodes as markers. */
function plotGraph(env: Env, g: Graph): void {
  const pos = Array.from({ length: g.n }, (_, i) => { const th = 2 * Math.PI * i / Math.max(1, g.n) - Math.PI / 2; return [Math.cos(th), Math.sin(th)] as [number, number]; });
  const ex: number[] = [], ey: number[] = [];
  for (const e of g.edges) { ex.push(pos[e.s][0], pos[e.t][0], NaN); ey.push(pos[e.s][1], pos[e.t][1], NaN); }
  env.graphics.addSeries(ex, ey);
  env.graphics.hold(true);
  env.graphics.scatter([rowVec(pos.map((p) => p[0])), rowVec(pos.map((p) => p[1]))]);
  env.graphics.hold(false);
}

// ── Piecewise-polynomial (pp) form ───────────────────────────────────────
interface PP { breaks: number[]; coefs: Mat; L: number; k: number }
/** Build a MATLAB pp struct from breaks (length L+1) and an L×k coefficient matrix. */
function makePP(breaks: number[], coefs: Mat): StructV {
  const L = coefs.rows, k = coefs.cols;
  const fields = new Map<string, Value[]>([
    ['form', [str('pp')]], ['breaks', [rowVec(breaks)]], ['coefs', [coefs]],
    ['pieces', [scalar(L)]], ['order', [scalar(k)]], ['dim', [scalar(1)]],
  ]);
  return { kind: 'struct', rows: 1, cols: 1, fields };
}
/** Read a pp struct back into plain data. */
function readPP(v: Value): PP {
  if (!isStruct(v) || asString(v.fields.get('form')?.[0] ?? str('')) !== 'pp') throw new MatError('expected a piecewise-polynomial (pp) struct from mkpp/spline/pchip');
  const breaks = toArray(m(v.fields.get('breaks')![0]));
  const coefs = m(v.fields.get('coefs')![0]);
  return { breaks, coefs, L: coefs.rows, k: coefs.cols };
}
/** Evaluate a pp at q: locate the piece, then Horner in the local variable (q - breaks[i]). */
function ppEval(pp: PP, q: number): number {
  let i = 0; while (i < pp.L - 1 && q >= pp.breaks[i + 1]) i++;
  const t = q - pp.breaks[i]; let v = 0;
  for (let j = 0; j < pp.k; j++) v = v * t + pp.coefs.data[i + j * pp.L];
  return v;
}
/** Natural cubic-spline pp coefficients (L×4, highest power first). */
function splineCoefs(x: number[], y: number[]): Mat {
  const n = x.length, L = n - 1;
  const h: number[] = []; for (let i = 0; i < L; i++) h.push(x[i + 1] - x[i]);
  const M = new Array(n).fill(0);
  if (n > 2) {
    const lo: number[] = [], di: number[] = [], up: number[] = [], rhs: number[] = [];
    for (let i = 1; i < n - 1; i++) { lo.push(h[i - 1]); di.push(2 * (h[i - 1] + h[i])); up.push(h[i]); rhs.push(6 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])); }
    const kk = di.length; const cp = [...up], dp = [...rhs];
    cp[0] /= di[0]; dp[0] /= di[0];
    for (let i = 1; i < kk; i++) { const den = di[i] - lo[i] * cp[i - 1]; cp[i] = up[i] / den; dp[i] = (rhs[i] - lo[i] * dp[i - 1]) / den; }
    const mm = new Array(kk); mm[kk - 1] = dp[kk - 1]; for (let i = kk - 2; i >= 0; i--) mm[i] = dp[i] - cp[i] * mm[i + 1];
    for (let i = 1; i < n - 1; i++) M[i] = mm[i - 1];
  }
  const C = zeros(L, 4);
  for (let i = 0; i < L; i++) {
    const hi = h[i];
    const a = y[i], b = (y[i + 1] - y[i]) / hi - hi * (2 * M[i] + M[i + 1]) / 6, c = M[i] / 2, d = (M[i + 1] - M[i]) / (6 * hi);
    C.data[i + 0 * L] = d; C.data[i + 1 * L] = c; C.data[i + 2 * L] = b; C.data[i + 3 * L] = a;
  }
  return C;
}
/** Cubic-Hermite pp coefficients (L×4) from node slopes d. */
function hermiteCoefs(x: number[], y: number[], d: number[]): Mat {
  const L = x.length - 1; const C = zeros(L, 4);
  for (let i = 0; i < L; i++) {
    const h = x[i + 1] - x[i], y0 = y[i], y1 = y[i + 1], m0 = d[i], m1 = d[i + 1];
    const c0 = y0, c1 = m0, c2 = (3 * (y1 - y0) / h - 2 * m0 - m1) / h, c3 = (m0 + m1 - 2 * (y1 - y0) / h) / (h * h);
    C.data[i + 0 * L] = c3; C.data[i + 1 * L] = c2; C.data[i + 2 * L] = c1; C.data[i + 3 * L] = c0;
  }
  return C;
}

// ── Interpolation / quadrature helpers ───────────────────────────────────
/** Evaluate a piecewise cubic Hermite with given node slopes d at q. */
function hermiteEval(x: number[], y: number[], d: number[], q: number): number {
  const n = x.length; let i = 0; while (i < n - 2 && q > x[i + 1]) i++;
  const h = x[i + 1] - x[i], t = (q - x[i]) / h;
  const h00 = 2 * t ** 3 - 3 * t ** 2 + 1, h10 = t ** 3 - 2 * t ** 2 + t, h01 = -2 * t ** 3 + 3 * t ** 2, h11 = t ** 3 - t ** 2;
  return h00 * y[i] + h10 * h * d[i] + h01 * y[i + 1] + h11 * h * d[i + 1];
}
/** Fritsch–Carlson monotone (pchip) slopes. */
function pchipSlopes(x: number[], y: number[]): number[] {
  const n = x.length; const h: number[] = [], del: number[] = [];
  for (let i = 0; i < n - 1; i++) { h.push(x[i + 1] - x[i]); del.push((y[i + 1] - y[i]) / (x[i + 1] - x[i])); }
  const d = new Array(n).fill(0);
  for (let i = 1; i < n - 1; i++) { if (del[i - 1] * del[i] > 0) { const w1 = 2 * h[i] + h[i - 1], w2 = h[i] + 2 * h[i - 1]; d[i] = (w1 + w2) / (w1 / del[i - 1] + w2 / del[i]); } }
  d[0] = del[0]; d[n - 1] = del[n - 2];
  return d;
}
/** Modified Akima (makima) slopes. */
function akimaSlopes(x: number[], y: number[]): number[] {
  const n = x.length; const del: number[] = []; for (let i = 0; i < n - 1; i++) del.push((y[i + 1] - y[i]) / (x[i + 1] - x[i]));
  const s = new Array(n + 3).fill(0); for (let k = 0; k < n - 1; k++) s[k + 2] = del[k];
  s[1] = 2 * s[2] - s[3]; s[0] = 2 * s[1] - s[2]; s[n + 1] = 2 * s[n] - s[n - 1]; s[n + 2] = 2 * s[n + 1] - s[n];
  const d = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    const w1 = Math.abs(s[i + 3] - s[i + 2]) + Math.abs(s[i + 3] + s[i + 2]) / 2;
    const w2 = Math.abs(s[i + 1] - s[i]) + Math.abs(s[i + 1] + s[i]) / 2;
    d[i] = (w1 + w2) === 0 ? 0 : (w1 * s[i + 1] + w2 * s[i + 2]) / (w1 + w2);
  }
  return d;
}
/** Composite Simpson over a rectangle (n even per axis). */
async function simpson2(F: (x: number, y: number) => Promise<number>, ax: number, bx: number, ay: number, by: number, nn: number): Promise<number> {
  const n = nn % 2 ? nn + 1 : nn; const hx = (bx - ax) / n, hy = (by - ay) / n; const w = (i: number) => (i === 0 || i === n ? 1 : (i % 2 ? 4 : 2));
  let s = 0; for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) s += w(i) * w(j) * await F(ax + i * hx, ay + j * hy);
  return s * hx * hy / 9;
}
async function simpson3(F: (x: number, y: number, z: number) => Promise<number>, ax: number, bx: number, ay: number, by: number, az: number, bz: number, nn: number): Promise<number> {
  const n = nn % 2 ? nn + 1 : nn; const hx = (bx - ax) / n, hy = (by - ay) / n, hz = (bz - az) / n; const w = (i: number) => (i === 0 || i === n ? 1 : (i % 2 ? 4 : 2));
  let s = 0; for (let i = 0; i <= n; i++) for (let j = 0; j <= n; j++) for (let k = 0; k <= n; k++) s += w(i) * w(j) * w(k) * await F(ax + i * hx, ay + j * hy, az + k * hz);
  return s * hx * hy * hz / 27;
}

/** Real roots of a polynomial (coeffs high→low). Complex roots are omitted. */
function realRoots(coef: number[]): number[] {
  const p = coef.slice(); while (p.length > 1 && Math.abs(p[0]) < 1e-14) p.shift();
  const n = p.length - 1;
  if (n <= 0) return [];
  if (n === 1) return [-p[1] / p[0]];
  if (n === 2) { const [a, b, c] = p; const d = b * b - 4 * a * c; if (d < 0) return []; const sq = Math.sqrt(d); return [(-b + sq) / (2 * a), (-b - sq) / (2 * a)].sort((x, y) => y - x); }
  const pv = (x: number) => { let s = 0; for (const c of p) s = s * x + c; return s; };
  const R = 1 + Math.max(...p.slice(1).map((c) => Math.abs(c / p[0])));
  const steps = 4000; let prev = pv(-R), prevx = -R; const roots: number[] = [];
  for (let i = 1; i <= steps; i++) {
    const x = -R + 2 * R * i / steps; const f = pv(x);
    if (prev === 0) roots.push(prevx);
    else if (prev * f < 0) { let lo = prevx, hi = x, flo = prev; for (let k = 0; k < 80; k++) { const mid = (lo + hi) / 2, fm = pv(mid); if (Math.abs(fm) < 1e-13) { lo = hi = mid; break; } if (flo * fm < 0) hi = mid; else { lo = mid; flo = fm; } } roots.push((lo + hi) / 2); }
    prev = f; prevx = x;
  }
  roots.sort((a, b) => b - a); const out: number[] = [];
  for (const r of roots) if (!out.some((o) => Math.abs(o - r) < 1e-6)) out.push(r);
  return out;
}

// Dormand–Prince 5(4) Butcher tableau (the method behind MATLAB's ode45).
const DP_C = [0, 1 / 5, 3 / 10, 4 / 5, 8 / 9, 1, 1];
const DP_A: number[][] = [
  [],
  [1 / 5],
  [3 / 40, 9 / 40],
  [44 / 45, -56 / 15, 32 / 9],
  [19372 / 6561, -25360 / 2187, 64448 / 6561, -212 / 729],
  [9017 / 3168, -355 / 33, 46732 / 5247, 49 / 176, -5103 / 18656],
  [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84],
];
// 5th-order solution weights (== DP_A[6] by FSAL) and 4th-order error-estimate weights.
const DP_B5 = [35 / 384, 0, 500 / 1113, 125 / 192, -2187 / 6784, 11 / 84, 0];
const DP_B4 = [5179 / 57600, 0, 7571 / 16695, 393 / 640, -92097 / 339200, 187 / 2100, 1 / 40];
// Dense-output coefficients (MATLAB's ntrp45 4th-order interpolant): 7 stages × powers s..s⁴.
const DP_BI: number[][] = [
  [1, -183 / 64, 37 / 12, -145 / 128],
  [0, 0, 0, 0],
  [0, 1500 / 371, -1000 / 159, 1000 / 371],
  [0, -125 / 32, 125 / 12, -375 / 64],
  [0, 9477 / 3392, -729 / 106, 25515 / 6784],
  [0, -11 / 7, 11 / 3, -55 / 28],
  [0, 3 / 2, -4, 5 / 2],
];

/** Read RelTol/AbsTol/InitialStep/MaxStep from an odeset struct argument (if any). */
function odeOpts(opt: Value | undefined): { relTol: number; absTol: number; h0: number; hMax: number } {
  let relTol = 1e-3, absTol = 1e-6, h0 = 0, hMax = Infinity;
  if (opt && isStruct(opt)) {
    const get = (k: string) => { const v = opt.fields.get(k); return v && v.length && isMat(v[0]) ? asScalar(v[0]) : undefined; };
    relTol = get('RelTol') ?? relTol; absTol = get('AbsTol') ?? absTol;
    h0 = get('InitialStep') ?? h0; hMax = get('MaxStep') ?? hMax;
  }
  return { relTol, absTol, h0, hMax };
}

/**
 * Adaptive Dormand–Prince RK45 ODE integrator backing ode45 (and aliases).
 * Embedded 5(4) error estimate drives PI-free step-size control; cubic-Hermite
 * dense output evaluates the solution at user-requested tspan points.
 * Returns [t, y] (or just y) — y is one row per output time.
 */
async function odeSolve(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode45'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const evalF = async (t: number, y: number[]): Promise<number[]> => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const axpy = (y: number[], terms: Array<[number, number[]]>) => y.map((v, j) => v + terms.reduce((s, [c, k]) => s + c * k[j], 0));

  const t0 = tspan[0], tEnd = tspan[tspan.length - 1];
  const dir = tEnd >= t0 ? 1 : -1;
  // Output points: explicit tspan list (>2 points) → those; otherwise the solver's own steps.
  const wantPoints = tspan.length > 2 ? tspan.slice() : null;
  const T: number[] = [t0]; const Y: number[][] = [y0.slice()];
  let nextWant = 1; // index into wantPoints for the next point to emit

  let t = t0; let y = y0.slice();
  let f0 = await evalF(t, y);
  // Initial step guess (Hairer): based on scaled norms of y and f.
  let h: number;
  if (h0 > 0) h = h0 * dir;
  else {
    const sc = y.map((yi) => absTol + relTol * Math.abs(yi));
    const d0 = Math.hypot(...y.map((yi, j) => yi / sc[j])) / Math.sqrt(neq || 1);
    const d1 = Math.hypot(...f0.map((fi, j) => fi / sc[j])) / Math.sqrt(neq || 1);
    h = (d0 < 1e-5 || d1 < 1e-5 ? 1e-6 : 0.01 * (d0 / d1)) * dir;
  }
  const span = Math.abs(tEnd - t0);
  h = dir * Math.min(Math.abs(h), hMax, span);

  const SAFETY = 0.9, MINFAC = 0.2, MAXFAC = 5, EXP = 1 / 5;
  let steps = 0; const MAXSTEPS = 1e6;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > MAXSTEPS) throw new MatError('ode45: too many steps (RelTol too small or integration failed)');
    if (dir * (t + h - tEnd) > 0) h = tEnd - t; // don't overshoot the endpoint
    // Seven RK stages (FSAL: stage 1 reuses the previous accepted derivative).
    const k: number[][] = new Array(7);
    k[0] = f0;
    for (let s = 1; s < 7; s++) {
      const terms: Array<[number, number[]]> = DP_A[s].map((c, j) => [h * c, k[j]] as [number, number[]]);
      k[s] = await evalF(t + DP_C[s] * h, axpy(y, terms));
    }
    const y5 = axpy(y, DP_B5.map((b, s) => [h * b, k[s]] as [number, number[]]));
    // Error = (b5 - b4)·k, scaled by atol + rtol·max(|y|,|y5|).
    let errNorm = 0;
    for (let j = 0; j < neq; j++) {
      let e = 0; for (let s = 0; s < 7; s++) e += (DP_B5[s] - DP_B4[s]) * k[s][j];
      const sc = absTol + relTol * Math.max(Math.abs(y[j]), Math.abs(y5[j]));
      const r = (h * e) / sc; errNorm += r * r;
    }
    errNorm = Math.sqrt(errNorm / (neq || 1));

    if (errNorm <= 1) {
      // Accept. Record dense-output endpoints for cubic-Hermite interpolation.
      const tNew = t + h; const fNew = k[6]; // FSAL: derivative at t+h
      if (wantPoints) {
        while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) {
          const tq = wantPoints[nextWant]; const s = (tq - t) / h;
          const sp = [s, s * s, s * s * s, s * s * s * s];
          const coeff = DP_BI.map((bi) => bi[0] * sp[0] + bi[1] * sp[1] + bi[2] * sp[2] + bi[3] * sp[3]);
          Y.push(y.map((yi, j) => yi + h * coeff.reduce((acc, c, st) => acc + c * k[st][j], 0)));
          T.push(tq); nextWant++;
        }
      } else { T.push(tNew); Y.push(y5.slice()); }
      t = tNew; y = y5; f0 = fNew; // advance (FSAL reuse)
    }
    // Step-size update (used after both accept and reject).
    const fac = errNorm === 0 ? MAXFAC : Math.min(MAXFAC, Math.max(MINFAC, SAFETY * errNorm ** -EXP));
    h = dir * Math.min(Math.abs(h * fac), hMax, span);
    if (Math.abs(h) < 1e-14 * Math.max(1, Math.abs(t))) throw new MatError('ode45: step size underflow (problem may be stiff — try ode15s)');
  }

  const Ymat = zeros(T.length, neq); for (let r = 0; r < T.length; r++) for (let c = 0; c < neq; c++) Ymat.data[r + c * T.length] = Y[r][c];
  return nargout >= 2 ? [colVec(T), Ymat] : [Ymat];
}

// ── Shared ODE helpers (Shampine–Reichelt "The MATLAB ODE Suite") ──
/** Assemble the [t,y] (or y) output from collected times/states. */
function odeOut(T: number[], Y: number[][], neq: number, nargout: number): Value[] {
  const Ymat = zeros(T.length, neq); for (let r = 0; r < T.length; r++) for (let c = 0; c < neq; c++) Ymat.data[r + c * T.length] = Y[r][c];
  return nargout >= 2 ? [colVec(T), Ymat] : [Ymat];
}
/** Numerical Jacobian ∂f/∂y by forward differences. */
async function numJac(evalF: (t: number, y: number[]) => Promise<number[]>, t: number, y: number[], f0: number[], neq: number): Promise<Mat> {
  const J = zeros(neq, neq);
  for (let j = 0; j < neq; j++) {
    const dy = Math.sqrt(2.220446049250313e-16) * Math.max(Math.abs(y[j]), 1e-3);
    const yp = y.slice(); yp[j] += dy;
    const fp = await evalF(t, yp);
    for (let i = 0; i < neq; i++) J.data[i + j * neq] = (fp[i] - f0[i]) / dy;
  }
  return J;
}
const vsolve = (W: Mat, rhs: number[]): number[] => toArray(mldivide(W, colVec(rhs)));

/** ode23 — Bogacki–Shampine (2,3) explicit RK pair (FSAL), nonstiff. */
async function odeSolveBS23(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode23'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const evalF = async (t: number, y: number[]) => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const t0 = tspan[0], tEnd = tspan[tspan.length - 1]; const dir = tEnd >= t0 ? 1 : -1;
  const wantPoints = tspan.length > 2 ? tspan.slice() : null; let nextWant = 1;
  const T = [t0]; const Y = [y0.slice()];
  let t = t0, y = y0.slice(); let k1 = await evalF(t, y);
  const span = Math.abs(tEnd - t0);
  let h = h0 > 0 ? h0 * dir : initStep(y, k1, relTol, absTol, neq, dir, hMax, span);
  const SAFE = 0.9, EXP = 1 / 3; let steps = 0;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > 1e6) throw new MatError('ode23: too many steps');
    if (dir * (t + h - tEnd) > 0) h = tEnd - t;
    const k2 = await evalF(t + 0.5 * h, y.map((v, i) => v + 0.5 * h * k1[i]));
    const k3 = await evalF(t + 0.75 * h, y.map((v, i) => v + 0.75 * h * k2[i]));
    const ynew = y.map((v, i) => v + h * (2 / 9 * k1[i] + 1 / 3 * k2[i] + 4 / 9 * k3[i]));
    const k4 = await evalF(t + h, ynew);
    let err = 0;
    for (let i = 0; i < neq; i++) { const e = h * (-5 / 72 * k1[i] + 1 / 12 * k2[i] + 1 / 9 * k3[i] - 1 / 8 * k4[i]); const sc = absTol + relTol * Math.max(Math.abs(y[i]), Math.abs(ynew[i])); err += (e / sc) ** 2; }
    err = Math.sqrt(err / (neq || 1));
    if (err <= 1) {
      const tNew = t + h;
      if (wantPoints) while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) { const s = (wantPoints[nextWant] - t) / h; Y.push(hermiteStep(y, ynew, k1, k4, h, s)); T.push(wantPoints[nextWant]); nextWant++; }
      else { T.push(tNew); Y.push(ynew.slice()); }
      t = tNew; y = ynew; k1 = k4; // FSAL
    }
    const fac = err === 0 ? 5 : Math.min(5, Math.max(0.2, SAFE * err ** -EXP));
    h = dir * Math.min(Math.abs(h * fac), hMax, span);
    if (Math.abs(h) < 1e-14 * Math.max(1, Math.abs(t))) throw new MatError('ode23: step size underflow (problem may be stiff — try ode15s/ode23s)');
  }
  return odeOut(T, Y, neq, nargout);
}

/** ode23s — modified Rosenbrock (2,3) pair, L-stable, for stiff problems. */
async function odeSolveRos23(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode23s'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const evalF = async (t: number, y: number[]) => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const d = 1 / (2 + Math.SQRT2), e32 = 6 + Math.SQRT2;
  const t0 = tspan[0], tEnd = tspan[tspan.length - 1]; const dir = tEnd >= t0 ? 1 : -1;
  const wantPoints = tspan.length > 2 ? tspan.slice() : null; let nextWant = 1;
  const T = [t0]; const Y = [y0.slice()];
  let t = t0, y = y0.slice(); let F0 = await evalF(t, y);
  const span = Math.abs(tEnd - t0);
  let h = h0 > 0 ? h0 * dir : initStep(y, F0, relTol, absTol, neq, dir, hMax, span);
  let steps = 0; const SAFE = 0.9, EXP = 1 / 3;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > 1e6) throw new MatError('ode23s: too many steps');
    if (dir * (t + h - tEnd) > 0) h = tEnd - t;
    const J = await numJac(evalF, t, y, F0, neq);
    const dt = Math.sqrt(2.220446049250313e-16) * (Math.abs(t) + 1) * dir;
    const Ft = await evalF(t + dt, y); const Tt = F0.map((v, i) => (Ft[i] - v) / dt); // ∂f/∂t
    const W = zeros(neq, neq); for (let c = 0; c < neq; c++) for (let r = 0; r < neq; r++) W.data[r + c * neq] = (r === c ? 1 : 0) - h * d * J.data[r + c * neq];
    const k1 = vsolve(W, F0.map((v, i) => v + h * d * Tt[i]));
    const F1 = await evalF(t + 0.5 * h, y.map((v, i) => v + 0.5 * h * k1[i]));
    const k2raw = vsolve(W, F1.map((v, i) => v - k1[i])); const k2 = k2raw.map((v, i) => v + k1[i]);
    const ynew = y.map((v, i) => v + h * k2[i]);
    const F2 = await evalF(t + h, ynew);
    const k3 = vsolve(W, F2.map((v, i) => v - e32 * (k2[i] - F1[i]) - 2 * (k1[i] - F0[i]) + h * d * Tt[i]));
    let err = 0;
    for (let i = 0; i < neq; i++) { const e = (h / 6) * (k1[i] - 2 * k2[i] + k3[i]); const sc = absTol + relTol * Math.max(Math.abs(y[i]), Math.abs(ynew[i])); err += (e / sc) ** 2; }
    err = Math.sqrt(err / (neq || 1));
    if (err <= 1) {
      const tNew = t + h;
      if (wantPoints) while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) { const s = (wantPoints[nextWant] - t) / h; Y.push(y.map((yi, i) => yi + h * (s * (1 - s) / (1 - 2 * d) * k1[i] + s * (s - 2 * d) / (1 - 2 * d) * k2[i]))); T.push(wantPoints[nextWant]); nextWant++; }
      else { T.push(tNew); Y.push(ynew.slice()); }
      t = tNew; y = ynew; F0 = F2; // FSAL
    }
    const fac = err === 0 ? 5 : Math.min(5, Math.max(0.2, SAFE * err ** -EXP));
    h = dir * Math.min(Math.abs(h * fac), hMax, span);
    if (Math.abs(h) < 1e-14 * Math.max(1, Math.abs(t))) throw new MatError('ode23s: step size underflow');
  }
  return odeOut(T, Y, neq, nargout);
}

const NDF_KAPPA = [0, -0.1850, -1 / 9, -0.0823, -0.0415, 0];
/** ode15s — variable-order (1–5) NDF stiff solver in backward-difference form. */
async function odeSolveNDF(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode15s'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const { relTol, absTol, h0, hMax } = odeOpts(a[3]);
  const maxk = Math.min(5, (a[3] && isStruct(a[3]) && a[3].fields.get('MaxOrder')?.[0] && isMat(a[3].fields.get('MaxOrder')![0]) ? Math.round(asScalar(a[3].fields.get('MaxOrder')![0])) : 5));
  const evalF = async (t: number, y: number[]) => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : new Array(neq).fill(0); };
  const G = [0, 1, 1.5, 1 + 1 / 2 + 1 / 3, 0, 0]; G[4] = G[3] + 1 / 4; G[5] = G[4] + 1 / 5; // γ_k
  const t0 = tspan[0], tEnd = tspan[tspan.length - 1]; const dir = tEnd >= t0 ? 1 : -1;
  const wantPoints = tspan.length > 2 ? tspan.slice() : null; let nextWant = 1;
  const T = [t0]; const Y = [y0.slice()];
  let t = t0, y = y0.slice(); let f0 = await evalF(t, y);
  const span = Math.abs(tEnd - t0);
  let h = h0 > 0 ? h0 * dir : initStep(y, f0, relTol, absTol, neq, dir, hMax, span);
  let k = 1;
  // dif[j] = ∇^j y (j = 1..k+1); seed first difference ≈ h·y'.
  const dif: number[][] = Array.from({ length: maxk + 2 }, () => new Array(neq).fill(0));
  dif[1] = f0.map((v) => v * h);
  let J = await numJac(evalF, t, y, f0, neq);
  let steps = 0, nReject = 0, nAccept = 0;
  while (dir * (tEnd - t) > 1e-14 * Math.max(1, Math.abs(tEnd))) {
    if (++steps > 2e6) throw new MatError('ode15s: too many steps');
    let hStep = h; if (dir * (t + hStep - tEnd) > 0) hStep = tEnd - t;
    if (hStep !== h) { rescaleDif(dif, k, hStep / h, neq); h = hStep; }
    const alpha = (1 - NDF_KAPPA[k]) * G[k];
    const c = h / alpha;
    // predictor y^(0) = Σ_{m=0}^k ∇^m y_n ; Ψ = (1/alpha) Σ γ_m ∇^m
    const ypred = y.slice(); const psi = new Array(neq).fill(0);
    for (let j = 1; j <= k; j++) for (let i = 0; i < neq; i++) { ypred[i] += dif[j][i]; psi[i] += G[j] * dif[j][i] / alpha; }
    // Iteration matrix M = I - c J
    const M = zeros(neq, neq); for (let cc = 0; cc < neq; cc++) for (let rr = 0; rr < neq; rr++) M.data[rr + cc * neq] = (rr === cc ? 1 : 0) - c * J.data[rr + cc * neq];
    // Simplified Newton for ynew; d accumulates ∇^{k+1} y_{n+1}
    let ynew = ypred.slice(); const dacc = new Array(neq).fill(0); let converged = false, prevNorm = Infinity;
    for (let it = 0; it < 12; it++) {
      const Fv = await evalF(t + h, ynew);
      const rhs = new Array(neq); for (let i = 0; i < neq; i++) rhs[i] = c * Fv[i] - psi[i] - (ynew[i] - ypred[i]);
      const delta = vsolve(M, rhs);
      let dn = 0; for (let i = 0; i < neq; i++) { ynew[i] += delta[i]; dacc[i] += delta[i]; const sc = absTol + relTol * Math.abs(ynew[i]); dn += (delta[i] / sc) ** 2; }
      dn = Math.sqrt(dn / (neq || 1));
      if (dn < 1e-3) { converged = true; break; }
      if (it > 0 && dn > prevNorm) break; // diverging
      prevNorm = dn;
    }
    if (!converged) { nAccept = 0; if (k > 1) k--; rescaleDif(dif, k, 0.5, neq); h *= 0.5; if (Math.abs(h) < 1e-13 * Math.max(1, Math.abs(t))) throw new MatError('ode15s: step size underflow'); continue; }
    // Local error ∝ (κγ_k + 1/(k+1)) ∇^{k+1}y
    const errc = NDF_KAPPA[k] * G[k] + 1 / (k + 1);
    let err = 0; for (let i = 0; i < neq; i++) { const sc = absTol + relTol * Math.max(Math.abs(y[i]), Math.abs(ynew[i])); err += (errc * dacc[i] / sc) ** 2; } err = Math.sqrt(err / (neq || 1));
    if (err <= 1) {
      const tNew = t + h;
      // commit difference table: ∇^{k+1}=dacc, then ∇^j += ∇^{j+1}
      dif[k + 1] = dacc.slice(); for (let j = k; j >= 1; j--) for (let i = 0; i < neq; i++) dif[j][i] += dif[j + 1][i];
      if (wantPoints) while (nextWant < wantPoints.length && dir * (wantPoints[nextWant] - tNew) <= 1e-14) {
        // Newton backward-difference interpolant about t_{n+1}: y(t_{n+1}+sh)=Σ C(s) ∇^j y_{n+1}.
        const s = (wantPoints[nextWant] - tNew) / h; const yi = ynew.slice(); let coef = 1;
        for (let j = 1; j <= k; j++) { coef *= (s + j - 1) / j; for (let i = 0; i < neq; i++) yi[i] += coef * dif[j][i]; }
        Y.push(yi); T.push(wantPoints[nextWant]); nextWant++;
      } else { T.push(tNew); Y.push(ynew.slice()); }
      t = tNew; y = ynew; f0 = await evalF(t, y);
      nReject = 0; nAccept++;
      // Step growth from the order-(k) error estimate.
      const fac = err === 0 ? 10 : Math.min(10, Math.max(0.2, 0.9 * err ** (-1 / (k + 1))));
      // Ramp the order up to maxk on smooth progress (cold-start ramp); rejects pull it back.
      if (k < maxk && nAccept >= 1) k++;
      const hNew = dir * Math.min(Math.abs(h * fac), hMax, span);
      rescaleDif(dif, k, hNew / h, neq); // differences must follow every step-size change (D*=D·R·U)
      h = hNew;
      J = await numJac(evalF, t, y, f0, neq); // ode15s here refreshes the Jacobian each step
    } else {
      nReject++; nAccept = 0; const fac = Math.max(0.25, 0.9 * err ** (-1 / (k + 1)));
      if (nReject >= 2 && k > 1) { k--; }
      rescaleDif(dif, k, fac, neq); h = dir * Math.min(Math.abs(h * fac), hMax, span);
      if (Math.abs(h) < 1e-13 * Math.max(1, Math.abs(t))) throw new MatError('ode15s: step size underflow');
    }
  }
  return odeOut(T, Y, neq, nargout);
}
/** Rescale the backward-difference table for a step-size ratio rho = hnew/h (D* = D·R·U). */
function rescaleDif(dif: number[][], k: number, rho: number, neq: number): void {
  if (rho === 1 || k < 1) return;
  // U: U[m][r] = (-1)? integer matrix with U²=I; R[m][r] from products. Build (k×k) M = R·U.
  const R = mat2d(k, k), U = mat2d(k, k);
  for (let r = 1; r <= k; r++) { let pr = 1, pu = 1; for (let j = 1; j <= k; j++) { pr *= (j - 1 - r * rho); pu *= (j - 1 - r); R[j - 1][r - 1] = pr / fact(j); U[j - 1][r - 1] = pu / fact(j); } }
  // RU[j][r] = Σ_m R[j][m] U[m][r]
  const RU = mat2d(k, k); for (let j = 0; j < k; j++) for (let r = 0; r < k; r++) { let s = 0; for (let mm = 0; mm < k; mm++) s += R[j][mm] * U[mm][r]; RU[j][r] = s; }
  const old = dif.map((col) => col.slice());
  for (let r = 1; r <= k; r++) for (let i = 0; i < neq; i++) { let s = 0; for (let j = 1; j <= k; j++) s += old[j][i] * RU[j - 1][r - 1]; dif[r][i] = s; }
}
const mat2d = (r: number, c: number): number[][] => Array.from({ length: r }, () => new Array(c).fill(0));
const fact = (n: number): number => { let p = 1; for (let i = 2; i <= n; i++) p *= i; return p; };
/** Hairer initial-step heuristic (shared by the new solvers). */
function initStep(y: number[], f0: number[], relTol: number, absTol: number, neq: number, dir: number, hMax: number, span: number): number {
  const sc = y.map((yi) => absTol + relTol * Math.abs(yi));
  const d0 = Math.hypot(...y.map((yi, j) => yi / sc[j])) / Math.sqrt(neq || 1);
  const d1 = Math.hypot(...f0.map((fi, j) => fi / sc[j])) / Math.sqrt(neq || 1);
  const h = (d0 < 1e-5 || d1 < 1e-5 ? 1e-6 : 0.01 * (d0 / d1)) * dir;
  return dir * Math.min(Math.abs(h), hMax, span);
}
/** Cubic-Hermite value at fraction s using endpoint values/slopes (for BS23 dense output). */
function hermiteStep(y0: number[], y1: number[], f0: number[], f1: number[], h: number, s: number): number[] {
  const h00 = 2 * s ** 3 - 3 * s ** 2 + 1, h10 = s ** 3 - 2 * s ** 2 + s, h01 = -2 * s ** 3 + 3 * s ** 2, h11 = s ** 3 - s ** 2;
  return y0.map((_, i) => h00 * y0[i] + h10 * h * f0[i] + h01 * y1[i] + h11 * h * f1[i]);
}

/** Numeric constants exposed as bare identifiers. */
export const CONSTANTS: Record<string, () => Value> = {
  pi: () => scalar(Math.PI),
  e: () => scalar(Math.E),
  eps: () => scalar(Number.EPSILON),
  Inf: () => scalar(Infinity), inf: () => scalar(Infinity),
  NaN: () => scalar(NaN), nan: () => scalar(NaN),
  true: () => bool(true), false: () => bool(false),
  realmax: () => scalar(Number.MAX_VALUE), realmin: () => scalar(Number.MIN_VALUE),
  i: () => cscalar(0, 1), j: () => cscalar(0, 1),
  newline: () => str('\n'),
};
