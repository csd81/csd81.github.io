/** Built-in functions for the MATLAB subset. */
import {
  type Value, type Mat, type Handle, MatError, isMat, isHandle,
  mat, zeros, scalar, cscalar, bool, str, rowVec, colVec, fromRows, numel, isScalar, isEmpty,
  asScalar, asString, map, elementwise, matmul, transpose, horzcat, vertcat, toArray,
  isComplex, cmap, cmapReal, conj as conjFn, realPart, imagPart, csqrt, cexp, clog, ewPow, finishComplex,
} from './values';
import {
  det, inv, mldivide, diag, norm, eye,
  qr as qrDecomp, chol as cholFn, luOutputs, jacobiEigSym, svd as svdReal,
  rankOf, cond as condFn, pinv as pinvFn, orth as orthFn, nullspace, rref as rrefFn, vecnorm as vecnormFn, isSymmetric, cDet,
  generalEig, durandKerner,
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
  const A = m(args[0]);
  if (args.length >= 2) { const d = asScalar(args[1]); return [scalar(d === 1 ? A.rows : d === 2 ? A.cols : 1)]; }
  if (nargout >= 2) return [scalar(A.rows), scalar(A.cols)];
  return [rowVec([A.rows, A.cols])];
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
  numel: async (a) => ret(scalar(numel(m(a[0])))),
  length: async (a) => { const A = m(a[0]); return ret(scalar(isEmpty(A) ? 0 : Math.max(A.rows, A.cols))); },
  ndims: async () => ret(scalar(2)),
  isempty: async (a) => ret(scalar(isEmpty(m(a[0])) ? 1 : 0)),
  isscalar: async (a) => ret(scalar(isScalar(m(a[0])) ? 1 : 0)),
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
  isvector: async (a) => { const A = m(a[0]); return ret(bool(A.rows === 1 || A.cols === 1)); },
  isrow: async (a) => ret(bool(m(a[0]).rows === 1)),
  iscolumn: async (a) => ret(bool(m(a[0]).cols === 1)),
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
  mod2: async () => ret(scalar(0)),

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
  ode45: { summary: 'Solve nonstiff ODEs (RK4)', syntax: ['[t,y] = ode45(@f,tspan,y0)'], seealso: ['ode15s'] },
  ode15s: { summary: 'Solve ODEs (aliased to ode45 here)', syntax: ['[t,y] = ode15s(@f,tspan,y0)'], seealso: ['ode45'] },
  logspace: { summary: 'Logarithmically spaced vector', syntax: ['y = logspace(a,b)', 'y = logspace(a,b,n)'], seealso: ['linspace'] },
  meshgrid: { summary: '2-D grid coordinates', syntax: ['[X,Y] = meshgrid(x,y)'], seealso: ['linspace'] },
  sortrows: { summary: 'Sort rows in ascending order', syntax: ['B = sortrows(A)', '[B,i] = sortrows(A)'], seealso: ['sort', 'unique'] },
  nnz: { summary: 'Number of nonzero elements', syntax: ['n = nnz(A)'], seealso: ['find', 'any'] },
};

export function docUrl(name: string): string {
  return `https://www.mathworks.com/help/matlab/ref/${name.toLowerCase()}.html`;
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

/** RK4 ODE integrator backing ode45/ode15s. Returns [t, y] (or just y). */
async function odeSolve(a: Value[], nargout: number, env: Env): Promise<Value[]> {
  const f = handle(a[0], 'ode45'); const tspan = toArray(m(a[1])); const y0 = toArray(m(a[2])); const neq = y0.length;
  const evalF = async (t: number, y: number[]): Promise<number[]> => { const r = await env.callHandle(f, [scalar(t), colVec(y)], 1); return isMat(r[0]) ? toArray(r[0] as Mat) : []; };
  const addv = (y: number[], k: number[], s: number) => y.map((v, j) => v + s * k[j]);
  const T: number[] = []; const Y: number[][] = [];
  let y = y0.slice();
  const step = async (t: number, h: number) => {
    const k1 = await evalF(t, y); const k2 = await evalF(t + h / 2, addv(y, k1, h / 2));
    const k3 = await evalF(t + h / 2, addv(y, k2, h / 2)); const k4 = await evalF(t + h, addv(y, k3, h));
    y = y.map((v, j) => v + h * (k1[j] + 2 * k2[j] + 2 * k3[j] + k4[j]) / 6);
  };
  if (tspan.length > 2) {
    T.push(tspan[0]); Y.push(y.slice());
    for (let i = 0; i < tspan.length - 1; i++) { const sub = 20; const hh = (tspan[i + 1] - tspan[i]) / sub; for (let sN = 0; sN < sub; sN++) await step(tspan[i] + sN * hh, hh); T.push(tspan[i + 1]); Y.push(y.slice()); }
  } else {
    const t0 = tspan[0], tf = tspan[tspan.length - 1]; const Nstep = 200; const h = (tf - t0) / Nstep;
    T.push(t0); Y.push(y.slice());
    for (let i = 0; i < Nstep; i++) { await step(t0 + i * h, h); T.push(t0 + (i + 1) * h); Y.push(y.slice()); }
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
