/** Built-in functions for the MATLAB subset. */
import {
  type Value, type Mat, type Handle, MatError, isMat, isHandle,
  mat, zeros, scalar, cscalar, bool, str, rowVec, colVec, fromRows, numel, isScalar, isEmpty,
  asScalar, asString, map, elementwise, matmul, transpose, horzcat, vertcat, toArray,
  isComplex, cmap, cmapReal, conj as conjFn, realPart, imagPart, csqrt, cexp, clog, ewPow, finishComplex,
  ewAdd, ewSub, ewMul, ewRDiv, ewLDiv, ewEq, cmatmul, ctranspose as ctransposeFn, cmul, cdiv,
  type Cell, type StructV, isCell, isStruct, makeCell, dimsOf, numelOf,
} from './values';
import {
  det, inv, mldivide, diag, norm, eye,
  qr as qrDecomp, chol as cholFn, luOutputs, jacobiEigSym, svd as svdReal,
  rankOf, cond as condFn, pinv as pinvFn, orth as orthFn, nullspace, rref as rrefFn, vecnorm as vecnormFn, isSymmetric, cDet,
  generalEig, durandKerner, hess as hessFn, schur as schurFn, expm as expmFn, logm as logmFn, sqrtm as sqrtmFn, ldl as ldlFn, lsqnonneg as lsqnonnegFn,
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
  help(name: string): string;
  clearWorkspace(names: string[]): void;
  workspaceVars(): { name: string; size: string; klass: string }[];
  clearConsole(): void;
}

export type Builtin = (args: Value[], nargout: number, env: Env) => Promise<Value[]>;

function m(v: Value, name = 'argument'): Mat {
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
  const [rows, cols] = dimsOf(args[0]);
  if (args.length >= 2) { const d = asScalar(args[1]); return [scalar(d === 1 ? rows : d === 2 ? cols : 1)]; }
  if (nargout >= 2) return [scalar(rows), scalar(cols)];
  return [rowVec([rows, cols])];
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
  ndims: async () => ret(scalar(2)),
  isempty: async (a) => ret(bool(numelOf(a[0]) === 0)),
  isscalar: async (a) => ret(bool(numelOf(a[0]) === 1)),
  zeros: async (a) => { const [r, c] = dims2(a); return ret(zeros(r, c)); },
  ones: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); o.data.fill(1); return ret(o); },
  eye: async (a) => { const [r, c] = dims2(a); return ret(eye(r, c)); },
  rand: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) o.data[i] = Math.random(); return ret(o); },
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
    const A = m(a[0]); let r = asScalar(a[1]); let c = a.length >= 3 ? asScalar(a[2]) : 0;
    if (!c) c = numel(A) / r; if (!r) r = numel(A) / c;
    if (r * c !== numel(A)) throw new MatError('reshape: element count must not change');
    const out = mat(r, c, Float64Array.from(A.data)); out.isChar = A.isChar; return ret(out);
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
  cat: async (a) => { const dim = Math.round(asScalar(a[0])); const parts = a.slice(1).map((v) => m(v)); return ret(dim === 1 ? vertcat(parts) : horzcat(parts)); },
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
    const A = m(a[0]);
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
    if (isSymmetric(A) && !isComplex(A)) { const { values, V } = jacobiEigSym(A); const D = zeros(A.rows, A.rows); values.forEach((v, i) => { D.data[i + i * A.rows] = v; }); return n >= 2 ? [V, D] : [D]; }
    const { U, T } = schurFn(A); return n >= 2 ? [U, T] : [T];
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
  ode23tb: async (a, n, env) => odeSolve(a, n, env),
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
  sparse: async (a) => { if (a.length <= 1) return ret(m(a[0])); const ii = toArray(m(a[0])).map((x) => Math.round(x)), jj = toArray(m(a[1])).map((x) => Math.round(x)), vv = m(a[2]); const rows = a.length >= 4 ? Math.round(asScalar(a[3])) : Math.max(...ii), cols = a.length >= 5 ? Math.round(asScalar(a[4])) : Math.max(...jj); const o = zeros(rows, cols); for (let k = 0; k < ii.length; k++) o.data[(ii[k] - 1) + (jj[k] - 1) * rows] += vv.data.length === 1 ? vv.data[0] : vv.data[k]; return ret(o); },
  full: async (a) => ret(m(a[0])),
  issparse: async () => ret(bool(false)),
  speye: async (a) => { const [r, c] = dims2(a); return ret(eye(r, c)); },
  spalloc: async (a) => ret(zeros(Math.round(asScalar(a[0])), Math.round(asScalar(a[1])))),
  nzmax: async (a) => ret(scalar(toArray(m(a[0])).filter((x) => x !== 0).length)),
  sprand: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) o.data[i] = Math.random(); return ret(o); },
  sprandn: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) { const u = Math.random() || 1e-12; o.data[i] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * Math.random()); } return ret(o); },
  spdiags: async (a) => { const B = m(a[0]); const d = toArray(m(a[1])).map((x) => Math.round(x)); const mm = Math.round(asScalar(a[2])), nn = Math.round(asScalar(a[3])); const o = zeros(mm, nn); for (let di = 0; di < d.length; di++) { const diag = d[di]; for (let r = 0; r < mm; r++) { const c = r + diag; if (c >= 0 && c < nn) o.data[r + c * mm] = B.data[Math.min(r, B.rows - 1) + di * B.rows]; } } return ret(o); },
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
  class: async (a) => { const v = a[0]; if (isHandle(v)) return ret(str('function_handle')); if (v.kind === 'gobj') return ret(str(v.gtype)); if ((v as Mat).isChar) return ret(str('char')); if ((v as Mat).isBool) return ret(str('logical')); return ret(str('double')); },
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
  spones: async (a) => ret(map(m(a[0]), (x) => (x !== 0 ? 1 : 0))),
  nonzeros: async (a) => ret(colVec(toArray(m(a[0])).filter((x) => x !== 0))),
  // Window functions (column vectors, like MATLAB).
  bartlett: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 1 - Math.abs((n - (N - 1) / 2) / ((N - 1) / 2))); return ret(colVec(w)); },
  blackman: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.42 - 0.5 * Math.cos((2 * Math.PI * n) / (N - 1)) + 0.08 * Math.cos((4 * Math.PI * n) / (N - 1))); return ret(colVec(w)); },
  hamming: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.54 - 0.46 * Math.cos((2 * Math.PI * n) / (N - 1))); return ret(colVec(w)); },
  hanning: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 1; n <= N; n++) w.push(0.5 * (1 - Math.cos((2 * Math.PI * n) / (N + 1)))); return ret(colVec(w)); },
  hann: async (a) => { const N = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 0; n < N; n++) w.push(N === 1 ? 1 : 0.5 * (1 - Math.cos((2 * Math.PI * n) / (N - 1)))); return ret(colVec(w)); },
  // Bit-reinterpretation: source storage is IEEE double (the only class this engine tracks).
  typecast: async (a) => { const A = m(a[0]); const buf = new Float64Array(A.data).buffer; return ret(rowVec(readAs(buf, asString(a[1])))); },
  swapbytes: async (a) => { const A = m(a[0]); const u = new Uint8Array(new Float64Array(A.data).buffer); for (let i = 0; i < u.length; i += 8) u.subarray(i, i + 8).reverse(); return ret(mat(A.rows, A.cols, new Float64Array(u.buffer))); },

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
  spline: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])), xq = m(a[2]); return ret(map(xq, (q) => splineEval(x, y, q))); },
  roots: async (a) => { const { re, im } = durandKerner(toArray(m(a[0]))); return ret(finishComplex(re.length, 1, Float64Array.from(re), Float64Array.from(im))); },
  ode45: async (a, n, env) => odeSolve(a, n, env),
  ode15s: async (a, n, env) => odeSolve(a, n, env),
  ode23: async (a, n, env) => odeSolve(a, n, env),
  ode113: async (a, n, env) => odeSolve(a, n, env),
  ode23s: async (a, n, env) => odeSolve(a, n, env),
  ode23t: async (a, n, env) => odeSolve(a, n, env),
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
  pchip: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])), xq = m(a[2]); const d = pchipSlopes(x, y); return ret(map(xq, (q) => hermiteEval(x, y, d, q))); },
  makima: async (a) => { const x = toArray(m(a[0])), y = toArray(m(a[1])), xq = m(a[2]); const d = akimaSlopes(x, y); return ret(map(xq, (q) => hermiteEval(x, y, d, q))); },
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
  randn: async (a) => { const [r, c] = dims2(a); const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) { const u = Math.random() || 1e-12, w = Math.random(); o.data[i] = Math.sqrt(-2 * Math.log(u)) * Math.cos(2 * Math.PI * w); } return ret(o); },
  randi: async (a) => { const hi = Math.round(asScalar(a[0])); const r = a.length >= 2 ? Math.round(asScalar(a[1])) : 1; const c = a.length >= 3 ? Math.round(asScalar(a[2])) : r; const o = zeros(r, c); for (let i = 0; i < o.data.length; i++) o.data[i] = 1 + Math.floor(Math.random() * hi); return ret(o); },
  nnz: async (a) => ret(scalar(toArray(m(a[0])).filter((x) => x !== 0).length)),
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
  permute: async (a) => { const A = m(a[0]); const o = toArray(m(a[1])).map((x) => Math.round(x)); if (o.length === 2 && o[0] === 2 && o[1] === 1) return ret(transpose(A)); if (o.length === 2 && o[0] === 1 && o[1] === 2) return ret(A); throw new MatError('permute: only 2-D permutations are supported'); },
  ipermute: async (a) => { const A = m(a[0]); const o = toArray(m(a[1])).map((x) => Math.round(x)); return ret(o.length === 2 && o[0] === 2 && o[1] === 1 ? transpose(A) : A); },
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
  squeeze: async (a) => ret(m(a[0])),
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
  plot: async (a, _n, env) => { env.graphics.plot(a); return []; },
  fplot: async (a, _n, env) => {
    const f = a[0];
    if (!isHandle(f)) throw new MatError('fplot: expected a function handle');
    let lo = -5, hi = 5;
    if (a.length >= 2 && isMat(a[1]) && numel(a[1]) >= 2) { const rg = toArray(a[1] as Mat); lo = rg[0]; hi = rg[1]; }
    else if (env.graphics.fig.xRange) { [lo, hi] = env.graphics.fig.xRange; }
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
  ode45: { summary: 'Solve nonstiff ODEs (adaptive Dormand-Prince RK45)', syntax: ['[t,y] = ode45(@f,tspan,y0)', '[t,y] = ode45(@f,tspan,y0,opts)'], seealso: ['ode15s', 'odeset'] },
  ode15s: { summary: 'Solve ODEs (aliased to the RK45 solver here; nonstiff only)', syntax: ['[t,y] = ode15s(@f,tspan,y0)'], seealso: ['ode45', 'odeset'] },
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
  spones: { summary: 'Replace nonzero entries with 1', syntax: ['R = spones(S)'], seealso: ['nnz', 'nonzeros', 'sparse'] },
  nonzeros: { summary: 'Nonzero matrix elements as a column vector (column-major)', syntax: ['v = nonzeros(A)'], seealso: ['nnz', 'find', 'spones'] },
  bartlett: { summary: 'Bartlett (triangular) window', syntax: ['w = bartlett(N)'], seealso: ['hamming', 'hann', 'blackman'] },
  blackman: { summary: 'Blackman window', syntax: ['w = blackman(N)'], seealso: ['hamming', 'hann', 'bartlett'] },
  hamming: { summary: 'Hamming window', syntax: ['w = hamming(N)'], seealso: ['hann', 'blackman', 'bartlett'] },
  hanning: { summary: 'Hanning window (denominator N+1)', syntax: ['w = hanning(N)'], seealso: ['hann', 'hamming'] },
  hann: { summary: 'Hann window (denominator N-1)', syntax: ['w = hann(N)'], seealso: ['hanning', 'hamming'] },
  typecast: { summary: 'Reinterpret the bytes of a value as another class. NOTE: this engine stores all numbers as double, so the source is treated as double — useful for inspecting IEEE-754 bytes, but it will not round-trip through integer classes.', syntax: ["y = typecast(x,'uint8')"], seealso: ['cast', 'swapbytes', 'double'] },
  swapbytes: { summary: 'Reverse byte order of each element (assumes 8-byte double storage)', syntax: ['y = swapbytes(x)'], seealso: ['typecast', 'cast'] },
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
  'integral integral2 integral3 trapz cumtrapz gradient del2 ode45 ode23 ode113 ode15s ode23s ode23t odeset ' +
  'mean median mode std var min max bounds mink maxk corrcoef cov factor factorial gcd lcm nchoosek perms primes isprime rat ' +
  'eps flintmax realmax realmin intmax intmin real imag conj angle unwrap fft ifft fft2 ifft2 fftn ifftn fftshift ifftshift ' +
  'isnan isinf isfinite isreal isfloat plus minus times rdivide ldivide mtimes mrdivide mldivide power mpower uminus uplus transpose ctranspose ' +
  'eq ne lt gt le ge and or not xor isequal isequaln isapprox unique ismember logical find nnz any all ' +
  'disp fprintf sprintf num2str str2num str2double mat2str int2str error warning input feval arrayfun bsxfun kron cross vecnorm ' +
  'isdiag issymmetric ishermitian istriu istril isbanded bandwidth gamma gammaln erf erfc erfinv beta filter filter2 conv2 detrend ' +
  'normalize rescale clip smoothdata isoutlier filloutliers rmoutliers islocalmax islocalmin sinpi cospi pi ' +
  'plot fplot hold title xlabel ylabel legend grid axis gca gcf figure clf cla close clc format who whos clear help doc ans dot repmat ' +
  'cell iscell iscellstr num2cell cell2mat celldisp cellfun strsplit strjoin ' +
  'struct isstruct isfield fieldnames numfields rmfield setfield getfield orderfields struct2cell cell2struct structfun ' +
  'horzcat vertcat isequaln corr qmr condest wilkinson spones nonzeros bartlett blackman hamming hann typecast swapbytes'
).split(/\s+/));

export function docUrl(name: string): string {
  // Direct reference page for base functions; doc-search for toolbox/aliases
  // (prctile/quantile/iqr → Statistics; xcorr/xcov → Signal; etc. would 404 under ref/).
  return BASE_REF.has(name)
    ? `https://www.mathworks.com/help/matlab/ref/${name.toLowerCase()}.html`
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
  const rows: string[] = [];
  for (let r = 0; r < A.rows; r++) { const row: string[] = []; for (let c = 0; c < A.cols; c++) row.push(trimNum(A.data[r + c * A.rows])); rows.push(row.join(' ')); }
  return rows.join('; ');
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

/** Magic square (Siamese for odd, doubly-even rule, Strachey for singly-even). */
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
};
