// Statistics and Machine Learning Toolbox — first reference implementation of a ToolboxModule.
// Self-contained special-function helpers (logGamma/gammainc/betainc/erf) keep the module
// independent of builtins.ts internals. Distribution pdf/cdf/inv functions, descriptive stats,
// and pdist/squareform/linkage/kmeans. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, isObject, makeObject, str, scalar, zeros, rowVec, colVec, toArray, map, numel,
  asString, asScalar, toMat as m, MatError, mat, fromRows, isCell, isStr,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
/** Rows of a matrix as number[][] (local copy of the builtins.ts helper, kept self-contained). */
function matRows(P: Mat): number[][] { const out: number[][] = []; for (let r = 0; r < P.rows; r++) { const row: number[] = []; for (let c = 0; c < P.cols; c++) row.push(P.data[r + c * P.rows]); out.push(row); } return out; }

// ─────────────────────────── special functions ───────────────────────────
const LN2PI = Math.log(2 * Math.PI);
const G7 = [0.99999999999980993, 676.5203681218851, -1259.1392167224028, 771.32342877765313,
  -176.61502916214059, 12.507343278686905, -0.13857109526572012, 9.9843695780195716e-6, 1.5056327351493116e-7];
/** Natural log of the gamma function (Lanczos approximation, ~1e-13). */
function logGamma(x: number): number {
  if (x < 0.5) return Math.log(Math.PI / Math.sin(Math.PI * x)) - logGamma(1 - x);
  x -= 1; let a = G7[0]; const t = x + 7.5;
  for (let i = 1; i < 9; i++) a += G7[i] / (x + i);
  return 0.5 * LN2PI + (x + 0.5) * Math.log(t) - t + Math.log(a);
}
/** Digamma ψ(x) (recurrence to x≥6 + asymptotic series). */
function digamma(x: number): number {
  let r = 0; while (x < 6) { r -= 1 / x; x++; }
  const f = 1 / (x * x);
  return r + Math.log(x) - 0.5 / x + f * (-1 / 12 + f * (1 / 120 + f * (-1 / 252 + f * (1 / 240 - f * (1 / 132)))));
}
/** Trigamma ψ'(x) (recurrence to x≥6 + asymptotic series). */
function trigamma(x: number): number {
  let r = 0; while (x < 6) { r += 1 / (x * x); x++; }
  const z = 1 / x;
  return r + z + 0.5 * z * z + z * z * z * (1 / 6 - z * z * (1 / 30 - z * z * (1 / 42)));
}
/** Regularized lower incomplete gamma P(a,x) = γ(a,x)/Γ(a). */
function gammainc(x: number, a: number): number {
  if (x <= 0 || a <= 0) return 0;
  if (x < a + 1) {                                   // series expansion
    let ap = a, sum = 1 / a, del = sum;
    for (let n = 0; n < 300; n++) { ap++; del *= x / ap; sum += del; if (Math.abs(del) < Math.abs(sum) * 1e-15) break; }
    return sum * Math.exp(-x + a * Math.log(x) - logGamma(a));
  }
  let b = x + 1 - a, c = 1e300, d = 1 / b, h = d;     // continued fraction for Q, return 1-Q
  for (let i = 1; i <= 300; i++) {
    const an = -i * (i - a); b += 2; d = an * d + b; if (Math.abs(d) < 1e-300) d = 1e-300;
    c = b + an / c; if (Math.abs(c) < 1e-300) c = 1e-300; d = 1 / d; const del = d * c; h *= del;
    if (Math.abs(del - 1) < 1e-15) break;
  }
  return 1 - Math.exp(-x + a * Math.log(x) - logGamma(a)) * h;
}
/** Continued fraction for the regularized incomplete beta (Lentz). */
function betacf(x: number, a: number, b: number): number {
  const FPMIN = 1e-300; const qab = a + b, qap = a + 1, qam = a - 1;
  let c = 1, d = 1 - qab * x / qap; if (Math.abs(d) < FPMIN) d = FPMIN; d = 1 / d; let h = d;
  for (let mm = 1; mm <= 300; mm++) {
    const m2 = 2 * mm;
    let aa = mm * (b - mm) * x / ((qam + m2) * (a + m2));
    d = 1 + aa * d; if (Math.abs(d) < FPMIN) d = FPMIN; c = 1 + aa / c; if (Math.abs(c) < FPMIN) c = FPMIN; d = 1 / d; h *= d * c;
    aa = -(a + mm) * (qab + mm) * x / ((a + m2) * (qap + m2));
    d = 1 + aa * d; if (Math.abs(d) < FPMIN) d = FPMIN; c = 1 + aa / c; if (Math.abs(c) < FPMIN) c = FPMIN; d = 1 / d;
    const del = d * c; h *= del; if (Math.abs(del - 1) < 1e-15) break;
  }
  return h;
}
/** Regularized incomplete beta I_x(a,b). */
function betainc(x: number, a: number, b: number): number {
  if (x <= 0) return 0; if (x >= 1) return 1;
  const bt = Math.exp(logGamma(a + b) - logGamma(a) - logGamma(b) + a * Math.log(x) + b * Math.log(1 - x));
  return x < (a + 1) / (a + b + 2) ? bt * betacf(x, a, b) / a : 1 - bt * betacf(1 - x, b, a) / b;
}
function erf(x: number): number { return x < 0 ? -gammainc(x * x, 0.5) : gammainc(x * x, 0.5); }
function erfc(x: number): number { return 1 - erf(x); }
function nCk(n: number, k: number): number { if (k < 0 || k > n) return 0; return Math.exp(logGamma(n + 1) - logGamma(k + 1) - logGamma(n - k + 1)); }
/** log of n-choose-k (log-domain, safe for large populations). */
function lchoose(n: number, k: number): number { return logGamma(n + 1) - logGamma(k + 1) - logGamma(n - k + 1); }
const logBeta = (p: number, q: number) => logGamma(p) + logGamma(q) - logGamma(p + q);
/** log of Poisson(j; λ) weight = -λ + j·ln λ - ln(j!). */
const poisLogW = (j: number, lam: number) => -lam + j * Math.log(lam <= 0 ? 1e-300 : lam) - logGamma(j + 1);
/** Noncentral χ² cdf = Poisson(λ=δ/2)-mixture of central χ² cdfs. */
function ncx2cdfS(x: number, v: number, d: number): number {
  if (x <= 0) return 0; let s = 0; const lh = d / 2;
  for (let j = 0; j < 500; j++) { const w = Math.exp(poisLogW(j, lh)); s += w * gammainc(x / 2, v / 2 + j); if (j > lh && w < 1e-15) break; }
  return Math.min(1, s);
}
/** Noncentral F cdf = Poisson(λ=δ/2)-mixture of regularized incomplete betas. */
function ncfcdfS(x: number, v1: number, v2: number, d: number): number {
  if (x <= 0) return 0; let s = 0; const lh = d / 2, arg = v1 * x / (v1 * x + v2);
  for (let j = 0; j < 500; j++) { const w = Math.exp(poisLogW(j, lh)); s += w * betainc(arg, v1 / 2 + j, v2 / 2); if (j > lh && w < 1e-15) break; }
  return Math.min(1, s);
}
/** Noncentral t cdf via the Lenth (1989) Poisson-series; reflect for x<0. */
function nctcdfS(x: number, v: number, d: number): number {
  if (x < 0) return 1 - nctcdfS(-x, v, -d);
  const y = (x * x) / (x * x + v), lh = d * d / 2, phi = 0.5 * (1 + erf(-d / Math.SQRT2));
  let s = 0;
  for (let j = 0; j < 500; j++) {
    const lj = -lh + j * Math.log(lh <= 0 ? 1e-300 : lh);
    const pj = Math.exp(lj - logGamma(j + 1)), qj = Math.exp(lj - logGamma(j + 1.5)) * d / Math.SQRT2;
    s += pj * betainc(y, j + 0.5, v / 2) + qj * betainc(y, j + 1, v / 2);
    if (j > lh && pj < 1e-15 && Math.abs(qj) < 1e-15) break;
  }
  return phi + 0.5 * s;
}
/** Noncentral t pdf via the cdf recurrence f(t)=(v/t)(F_{v+2}(t√((v+2)/v))−F_v(t)). */
function nctpdfS(x: number, v: number, d: number): number {
  if (x === 0) return Math.exp(logGamma((v + 1) / 2) - 0.5 * Math.log(Math.PI * v) - logGamma(v / 2) - d * d / 2);
  const f = Math.sqrt((v + 2) / v);
  return x < 0 ? (v / x) * (nctcdfS(x * f, v + 2, d) - nctcdfS(x, v, d))
               : (-v / x) * (nctcdfS(-x * f, v + 2, -d) - nctcdfS(-x, v, -d));
}
/** Standard-normal inverse CDF (Acklam) + one Halley refinement. */
function norminvStd(p: number): number {
  if (p <= 0) return -Infinity; if (p >= 1) return Infinity;
  const a = [-3.969683028665376e+01, 2.209460984245205e+02, -2.759285104469687e+02, 1.383577518672690e+02, -3.066479806614716e+01, 2.506628277459239e+00];
  const b = [-5.447609879822406e+01, 1.615858368580409e+02, -1.556989798598866e+02, 6.680131188771972e+01, -1.328068155288572e+01];
  const c = [-7.784894002430293e-03, -3.223964580411365e-01, -2.400758277161838e+00, -2.549732539343734e+00, 4.374664141464968e+00, 2.938163982698783e+00];
  const d = [7.784695709041462e-03, 3.224671290700398e-01, 2.445134137142996e+00, 3.754408661907416e+00];
  const plow = 0.02425, phigh = 1 - plow; let q: number, r: number, x: number;
  if (p < plow) { q = Math.sqrt(-2 * Math.log(p)); x = (((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
  else if (p <= phigh) { q = p - 0.5; r = q * q; x = (((((a[0] * r + a[1]) * r + a[2]) * r + a[3]) * r + a[4]) * r + a[5]) * q / (((((b[0] * r + b[1]) * r + b[2]) * r + b[3]) * r + b[4]) * r + 1); }
  else { q = Math.sqrt(-2 * Math.log(1 - p)); x = -(((((c[0] * q + c[1]) * q + c[2]) * q + c[3]) * q + c[4]) * q + c[5]) / ((((d[0] * q + d[1]) * q + d[2]) * q + d[3]) * q + 1); }
  const e = 0.5 * erfc(-x / Math.SQRT2) - p; const u = e * Math.sqrt(2 * Math.PI) * Math.exp(x * x / 2); return x - u / (1 + x * u / 2);
}
/** Bisection inverse of a monotone-increasing CDF on [lo,hi] (expanding for unbounded support). */
function invCdf(target: number, cdf: (x: number) => number, lo: number, hi: number): number {
  if (target <= 0) return lo; if (target >= 1) return hi;
  let a = lo, b = hi;
  if (!Number.isFinite(a)) { a = -1; while (cdf(a) > target) a *= 2; }
  if (!Number.isFinite(b)) { b = 1; while (cdf(b) < target) b *= 2; }
  for (let i = 0; i < 200; i++) { const mid = (a + b) / 2; if (cdf(mid) < target) a = mid; else b = mid; if (b - a < 1e-13 * (Math.abs(b) + 1)) break; }
  return (a + b) / 2;
}

// ─────────────────────── distribution dispatch helper ───────────────────────
/** Map a per-element function f(x, ...params) over the first arg; later args are scalar params
 *  (with defaults filled in when omitted). Covers the common `fn(X)` / `fn(X,p1,p2)` forms. */
/** Return [M] or [M,V] for a distribution *stat function depending on nargout. */
function statRet(n: number, mean: number, variance: number): Promise<Value[]> { return n >= 2 ? Promise.resolve([scalar(mean), scalar(variance)]) : Promise.resolve([scalar(mean)]); }
function dist(a: Value[], defs: number[], f: (x: number, ...p: number[]) => number): Promise<Value[]> {
  const X = m(a[0]);
  const p = defs.map((dft, i) => (a.length > i + 1 && isMat(a[i + 1]) && numel(m(a[i + 1])) > 0 ? asScalar(a[i + 1]) : dft));
  return ret(map(X, (x) => f(x, ...p)));
}

// ──────────────────────────── descriptive helpers ────────────────────────────
/** Apply a vector reducer column-wise (MATLAB convention: along dim 1, row vector → scalar). */
function colReduceNan(A: Mat, f: (c: number[]) => number): Mat {
  if (A.rows === 1) return scalar(f(toArray(A)));
  const out = new Float64Array(A.cols);
  for (let c = 0; c < A.cols; c++) { const col: number[] = []; for (let r = 0; r < A.rows; r++) col.push(A.data[r + c * A.rows]); out[c] = f(col); }
  return rowVec(Array.from(out));
}
const noNan = (c: number[]) => c.filter((x) => !Number.isNaN(x));
const mean_ = (c: number[]) => c.reduce((s, x) => s + x, 0) / (c.length || 1);
function var_(c: number[], pop = false): number { const mu = mean_(c); const ss = c.reduce((s, x) => s + (x - mu) ** 2, 0); return ss / Math.max(1, c.length - (pop ? 0 : 1)); }
function median_(c: number[]): number { const s = c.slice().sort((x, y) => x - y); const n = s.length; if (!n) return NaN; return n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; }

// ──────────────────────────── distance / clustering ────────────────────────────
const METRICS: Record<string, (u: number[], v: number[], p?: number) => number> = {
  euclidean: (u, v) => Math.sqrt(u.reduce((s, x, i) => s + (x - v[i]) ** 2, 0)),
  squaredeuclidean: (u, v) => u.reduce((s, x, i) => s + (x - v[i]) ** 2, 0),
  cityblock: (u, v) => u.reduce((s, x, i) => s + Math.abs(x - v[i]), 0),
  chebychev: (u, v) => u.reduce((s, x, i) => Math.max(s, Math.abs(x - v[i])), 0),
  minkowski: (u, v, p = 2) => u.reduce((s, x, i) => s + Math.abs(x - v[i]) ** p, 0) ** (1 / p),
  hamming: (u, v) => u.reduce((s, x, i) => s + (x !== v[i] ? 1 : 0), 0) / u.length,
  cosine: (u, v) => 1 - dot(u, v) / (Math.hypot(...u) * Math.hypot(...v)),
};
function dot(u: number[], v: number[]): number { return u.reduce((s, x, i) => s + x * v[i], 0); }

// ─────────────────── distribution objects (makedist / pdf / cdf / icdf) ───────────────────
interface DistSpec { display: string; params: string[]; defaults: number[]; pdf: (x: number, ...p: number[]) => number; cdf: (x: number, ...p: number[]) => number; inv: (p: number, ...q: number[]) => number; }
const DISTS: Record<string, DistSpec> = {
  normal: { display: 'Normal', params: ['mu', 'sigma'], defaults: [0, 1], pdf: (x, mu, s) => Math.exp(-0.5 * ((x - mu) / s) ** 2) / (s * Math.sqrt(2 * Math.PI)), cdf: (x, mu, s) => 0.5 * erfc(-(x - mu) / (s * Math.SQRT2)), inv: (p, mu, s) => mu + s * norminvStd(p) },
  exponential: { display: 'Exponential', params: ['mu'], defaults: [1], pdf: (x, mu) => x < 0 ? 0 : Math.exp(-x / mu) / mu, cdf: (x, mu) => x < 0 ? 0 : 1 - Math.exp(-x / mu), inv: (p, mu) => -mu * Math.log(1 - p) },
  poisson: { display: 'Poisson', params: ['lambda'], defaults: [1], pdf: (k, lam) => { k = Math.round(k); return k < 0 ? 0 : Math.exp(k * Math.log(lam) - lam - logGamma(k + 1)); }, cdf: (k, lam) => { k = Math.floor(k); return k < 0 ? 0 : 1 - gammainc(lam, k + 1); }, inv: (pr, lam) => { let c = 0, k = 0; for (; k < 1e6; k++) { c += Math.exp(k * Math.log(lam) - lam - logGamma(k + 1)); if (c >= pr - 1e-12) return k; } return k; } },
  uniform: { display: 'Uniform', params: ['lower', 'upper'], defaults: [0, 1], pdf: (x, lo, hi) => x >= lo && x <= hi ? 1 / (hi - lo) : 0, cdf: (x, lo, hi) => x < lo ? 0 : x > hi ? 1 : (x - lo) / (hi - lo), inv: (p, lo, hi) => lo + p * (hi - lo) },
  gamma: { display: 'Gamma', params: ['a', 'b'], defaults: [1, 1], pdf: (x, k, th) => x < 0 ? 0 : Math.exp((k - 1) * Math.log(x) - x / th - k * Math.log(th) - logGamma(k)), cdf: (x, k, th) => gammainc(x / th, k), inv: (p, k, th) => invCdf(p, (x) => gammainc(x / th, k), 0, Infinity) },
  lognormal: { display: 'Lognormal', params: ['mu', 'sigma'], defaults: [0, 1], pdf: (x, mu, s) => x <= 0 ? 0 : Math.exp(-0.5 * ((Math.log(x) - mu) / s) ** 2) / (x * s * Math.sqrt(2 * Math.PI)), cdf: (x, mu, s) => x <= 0 ? 0 : 0.5 * erfc(-(Math.log(x) - mu) / (s * Math.SQRT2)), inv: (p, mu, s) => Math.exp(mu + s * norminvStd(p)) },
};
const normDistName = (s: string) => s.toLowerCase().replace(/\s+|distribution$/g, '');
/** Resolve (spec, paramValues) from either a distribution object or a name string + trailing params. */
function resolveDist(a: Value[]): { spec: DistSpec; vals: number[]; rest: Value[] } {
  if (isObject(a[0])) {
    const o = a[0]; const spec = DISTS[normDistName(o.className.replace(/^prob\./, ''))];
    if (!spec) throw new MatError(`unknown distribution object '${o.className}'`);
    const vals = spec.params.map((p, i) => { const v = o.props.get(p); return v ? asScalar(v) : spec.defaults[i]; });
    return { spec, vals, rest: a.slice(1) };
  }
  const spec = DISTS[normDistName(asString(a[0]))];
  if (!spec) throw new MatError(`unknown distribution '${asString(a[0])}'`);
  const vals = spec.defaults.map((d, i) => (a.length > i + 2 && isMat(a[i + 2]) ? asScalar(a[i + 2]) : d));
  return { spec, vals, rest: a.slice(1, 2) };
}

// ── hypothesis-test helpers ──────────────────────────────────────────────────
const normcdfL = (z: number) => 0.5 * erfc(-z / Math.SQRT2);
function tcdfL(x: number, v: number): number { const ib = betainc(v / (v + x * x), v / 2, 0.5); return x >= 0 ? 1 - 0.5 * ib : 0.5 * ib; }
function tinvL(p: number, v: number): number { if (p <= 0) return -Infinity; if (p >= 1) return Infinity; return invCdf(p, (x) => tcdfL(x, v), -1e6, 1e6); }
const sd_ = (c: number[]) => Math.sqrt(var_(c));
/** Build a 1×1 struct from [name, value] pairs (drops undefined entries). */
function mkStruct(pairs: [string, Value | undefined][]): Value {
  const fields = new Map<string, Value[]>(); for (const [k, v] of pairs) if (v !== undefined) fields.set(k, [v]);
  return { kind: 'struct', rows: 1, cols: 1, fields } as Value;
}
/** Parse the trailing 'tail' option → -1 (left) | 0 (both) | 1 (right). */
function tailCode(v: Value | undefined): number {
  if (v === undefined) return 0; if (isMat(v) && !(v as Mat).isChar) { const t = asScalar(v); return t === -1 || t === 0 || t === 1 ? t : 0; }
  const s = asString(v).toLowerCase(); return s.startsWith('l') ? -1 : s.startsWith('r') ? 1 : 0;
}
/** Average ranks with tie handling; tieadj = Σ(t³−t)/2 over tie groups. */
function tiedrank(x: number[]): { ranks: number[]; tieadj: number } {
  const n = x.length, idx = x.map((_, i) => i).sort((i, j) => x[i] - x[j]);
  const ranks = new Array<number>(n); let tieadj = 0;
  for (let i = 0; i < n;) { let j = i; while (j + 1 < n && x[idx[j + 1]] === x[idx[i]]) j++; const avg = (i + j) / 2 + 1; const t = j - i + 1; for (let k = i; k <= j; k++) ranks[idx[k]] = avg; tieadj += (t * t * t - t) / 2; i = j + 1; }
  return { ranks, tieadj };
}
/** Exact signed-rank null distribution: counts[k] = #{sign subsets with positive-rank-sum k},
 *  ranks scaled to integers (×2 if half-integer ties). Returns {counts, scale, total}. */
function signedRankDist(ranks: number[]): { counts: number[]; scale: number; total: number } {
  const scale = ranks.some((r) => r !== Math.floor(r)) ? 2 : 1;
  const r = ranks.map((v) => Math.round(v * scale)); const maxS = r.reduce((s, v) => s + v, 0);
  const counts = new Array<number>(maxS + 1).fill(0); counts[0] = 1;
  for (const ri of r) for (let s = maxS; s >= ri; s--) counts[s] += counts[s - ri];
  return { counts, scale, total: 2 ** ranks.length };
}
/** Exact rank-sum (Mann-Whitney) distribution: ways to choose exactly `ns` of the combined
 *  ranks summing to s. Returns counts indexed by scaled sum, scale, and total C(n,ns). */
function rankSumDist(ranks: number[], ns: number): { counts: number[]; scale: number; total: number } {
  const scale = ranks.some((r) => r !== Math.floor(r)) ? 2 : 1;
  const r = ranks.map((v) => Math.round(v * scale)); const maxS = r.reduce((s, v) => s + v, 0);
  const dp = Array.from({ length: ns + 1 }, () => new Array<number>(maxS + 1).fill(0)); dp[0][0] = 1;
  for (const ri of r) for (let j = ns; j >= 1; j--) for (let s = maxS; s >= ri; s--) dp[j][s] += dp[j - 1][s - ri];
  let total = 0; for (const c of dp[ns]) total += c;
  return { counts: dp[ns], scale, total };
}

// ── Anderson-Darling distribution (Marsaglia 2004) ───────────────────────────
/** Anderson-Darling statistic A²ₙ from sorted CDF values z (length n). */
function computeADStat(z: number[]): number {
  const n = z.length; const s = z.slice().sort((a, b) => a - b);
  let acc = 0;
  for (let i = 0; i < n; i++) acc += (2 * (i + 1) - 1) * (Math.log(s[i]) + Math.log(1 - s[n - 1 - i]));
  return -acc / n - n;
}
/** Quick adinf(z): the simplified A∞ CDF from Marsaglia's paper (~7 digits). */
function adinfShort(ad: number): number {
  if (ad < 2) {
    return ad ** (-0.5) * Math.exp(-1.2337 / ad) * (2.00012 + (0.247105 - (0.0649821 - (0.0347962 - (0.0116720 - 0.00168691 * ad) * ad) * ad) * ad) * ad);
  }
  return Math.exp(-Math.exp(1.0776 - (2.30695 - (0.43424 - (0.082433 - (0.008056 - 0.0003146 * ad) * ad) * ad) * ad) * ad));
}
/** Finite-sample correction errfix(n,x) from Marsaglia's paper. */
function adErrFix(n: number, x: number): number {
  const c = 0.01265 + 0.1757 / n;
  if (x < c) { const xc = x / c; const g1 = Math.sqrt(xc) * (1 - xc) * (49 * xc - 102); return (0.0037 / n ** 3 + 0.00078 / n ** 2 + 0.00006 / n) * g1; }
  if (x < 0.8) { const xc = (x - c) / (0.8 - c); const g2 = -0.00022633 + (6.54034 - (14.6538 - (14.458 - (8.259 - 1.91864 * xc) * xc) * xc) * xc) * xc; return (0.04213 / n + 0.01365 / n ** 2) * g2; }
  const xc = x; return (1 / n) * (-130.2137 + (745.2337 - (1705.091 - (1950.646 - (1116.360 - 255.7844 * xc) * xc) * xc) * xc) * xc) * xc;
}
/** Pr(Aₙ < ad) for finite n (simple-hypothesis p-value path). */
function adn(n: number, ad: number): number { const x = adinfShort(ad); return x + adErrFix(n, x); }
/** Tabulated significance levels for composite-test critical values. */
const AD_ALPHAS = [0.0005, 0.001, 0.0015, 0.002, 0.005, 0.01, 0.025, 0.05, 0.1, 0.15, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5, 0.55, 0.6, 0.65, 0.7, 0.75, 0.8, 0.85, 0.9, 0.95, 0.99];
/** Composite-normal critical values: Aₙ = A∞(1 + b₀/n + b₁/n²) per-alpha coefficients. */
function adCVsNorm(n: number): number[] {
  const a0 = [1.5649, 1.4407, 1.3699, 1.3187, 1.1556, 1.0339, 0.8733, 0.7519, 0.6308, 0.5598, 0.5092, 0.4694, 0.4366, 0.4084, 0.3835, 0.3611, 0.3405, 0.3212, 0.3029, 0.2852, 0.2679, 0.2506, 0.2330, 0.2144, 0.1935, 0.1673, 0.1296];
  const a1 = [-0.9362, -0.9029, -0.8906, -0.8865, -0.8375, -0.7835, -0.6746, -0.5835, -0.4775, -0.4094, -0.3679, -0.3327, -0.3099, -0.2969, -0.2795, -0.2623, -0.2464, -0.2325, -0.2164, -0.1994, -0.1784, -0.1569, -0.1377, -0.1201, -0.0989, -0.0800, -0.0598];
  const a2 = [-8.3249, -6.6022, -5.6461, -4.9685, -3.2208, -2.1647, -1.2460, -0.7803, -0.4627, -0.3672, -0.2833, -0.2349, -0.1442, -0.0229, 0.0377, 0.0817, 0.1150, 0.1583, 0.1801, 0.1887, 0.1695, 0.1513, 0.1533, 0.1724, 0.2027, 0.3158, 0.6431];
  return a0.map((v, i) => v + a1[i] / n + a2[i] / (n * n));
}
/** Composite-exponential critical values: Aₙ = A∞(1 + b₀/n) per-alpha coefficients. */
function adCVsExp(n: number): number[] {
  const a0 = [3.2371, 2.9303, 2.7541, 2.6307, 2.2454, 1.9621, 1.5928, 1.3223, 1.0621, 0.9153, 0.8134, 0.7355, 0.6725, 0.6194, 0.5734, 0.5326, 0.4957, 0.4617, 0.4301, 0.4001, 0.3712, 0.3428, 0.3144, 0.2849, 0.2527, 0.2131, 0.1581];
  const a1 = [1.6146, 0.8716, 0.4715, 0.2066, -0.4682, -0.7691, -0.7388, -0.5758, -0.4036, -0.3142, -0.2564, -0.2152, -0.1845, -0.1607, -0.1409, -0.1239, -0.1084, -0.0942, -0.0807, -0.0674, -0.0537, -0.0401, -0.0261, -0.0116, 0.0047, 0.0275, 0.0780];
  return a0.map((v, i) => v + a1[i] / n);
}
/** Piecewise-cubic Hermite (pchip) interpolation, matching MATLAB's monotone slopes. */
function pchip(xs: number[], ys: number[], xq: number): number {
  const n = xs.length;
  if (n === 1) return ys[0];
  const h: number[] = [], del: number[] = [];
  for (let i = 0; i < n - 1; i++) { h.push(xs[i + 1] - xs[i]); del.push((ys[i + 1] - ys[i]) / (xs[i + 1] - xs[i])); }
  const d = new Array<number>(n).fill(0);
  for (let k = 1; k < n - 1; k++) {
    if (del[k - 1] * del[k] > 0) { const w1 = 2 * h[k] + h[k - 1], w2 = h[k] + 2 * h[k - 1]; d[k] = (w1 + w2) / (w1 / del[k - 1] + w2 / del[k]); }
  }
  // endpoint slopes (non-centered, shape-preserving)
  const endSlope = (hA: number, hB: number, dA: number, dB: number) => {
    let s = ((2 * hA + hB) * dA - hA * dB) / (hA + hB);
    if (Math.sign(s) !== Math.sign(dA)) s = 0; else if (Math.sign(dA) !== Math.sign(dB) && Math.abs(s) > 3 * Math.abs(dA)) s = 3 * dA;
    return s;
  };
  d[0] = n > 2 ? endSlope(h[0], h[1], del[0], del[1]) : del[0];
  d[n - 1] = n > 2 ? endSlope(h[n - 2], h[n - 3], del[n - 2], del[n - 3]) : del[n - 2];
  // locate interval
  let k = 0; while (k < n - 2 && xq > xs[k + 1]) k++;
  const t = xq - xs[k], hk = h[k];
  const c2 = (3 * del[k] - 2 * d[k] - d[k + 1]) / hk;
  const c3 = (d[k] + d[k + 1] - 2 * del[k]) / (hk * hk);
  return ys[k] + t * (d[k] + t * (c2 + t * c3));
}
/** Solve A·y = b for a small dense system (Gaussian elimination, partial pivoting). */
function solveLin(A: number[][], b: number[]): number[] {
  const n = b.length; const M = A.map((r, i) => [...r, b[i]]);
  for (let col = 0; col < n; col++) {
    let piv = col; for (let r = col + 1; r < n; r++) if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
    [M[col], M[piv]] = [M[piv], M[col]];
    const d = M[col][col]; if (d === 0) continue;
    for (let r = 0; r < n; r++) { if (r === col) continue; const f = M[r][col] / d; for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c]; }
  }
  return M.map((row, i) => (M[i][i] === 0 ? 0 : row[n] / M[i][i]));
}
/** Upper-tail of the F distribution = fpval(x,df1,df2); df2=Inf → chi²(df1) scaling. */
function fUpperTail(x: number, df1: number, df2: number): number {
  if (!(x > 0)) return 1;
  if (!Number.isFinite(df2)) return 1 - gammainc(df1 * x / 2, df1 / 2);
  return 1 - betainc(df1 * x / (df1 * x + df2), df1 / 2, df2 / 2);
}

// ── scalar distribution helpers (reused by sampsizepwr / ansaribradley / knntest) ──
const chi2cdfS = (x: number, v: number) => gammainc(x / 2, v / 2);
const chi2invS = (p: number, v: number) => invCdf(p, (x) => gammainc(x / 2, v / 2), 0, Infinity);
const norminvS = (p: number, mu = 0, s = 1) => mu + s * norminvStd(p);
const normcdfS = (x: number, mu = 0, s = 1) => 0.5 * erfc(-(x - mu) / (s * Math.SQRT2));
/** Binomial cdf P(X<=k) and pdf using the incomplete-beta / log-domain forms. */
function binopdfS(k: number, n: number, p: number): number { if (k < 0 || k > n) return 0; return Math.exp(lchoose(n, k) + k * Math.log(p) + (n - k) * Math.log(1 - p)); }
function binocdfS(k: number, n: number, p: number): number { k = Math.floor(k); if (k < 0) return 0; if (k >= n) return 1; return betainc(1 - p, n - k, k + 1); }
/** Binomial inverse: smallest k with cdf(k) >= pr. */
function binoinvS(pr: number, n: number, p: number): number { for (let k = 0; k <= n; k++) if (binocdfS(k, n, p) >= pr - 1e-12) return k; return n; }
/** Brent's method root-finder on a bracket [a,b] with f(a)·f(b)<0. */
function brent(f: (x: number) => number, a: number, b: number, tol = 1e-9): number {
  let fa = f(a), fb = f(b);
  if (fa === 0) return a; if (fb === 0) return b;
  if (fa * fb > 0) return NaN;
  let c = a, fc = fa, d = b - a, e = d;
  for (let it = 0; it < 200; it++) {
    if (fb * fc > 0) { c = a; fc = fa; d = b - a; e = d; }
    if (Math.abs(fc) < Math.abs(fb)) { a = b; b = c; c = a; fa = fb; fb = fc; fc = fa; }
    const tol1 = 2 * Number.EPSILON * Math.abs(b) + 0.5 * tol, xm = 0.5 * (c - b);
    if (Math.abs(xm) <= tol1 || fb === 0) return b;
    if (Math.abs(e) >= tol1 && Math.abs(fa) > Math.abs(fb)) {
      const s = fb / fa; let p: number, q: number;
      if (a === c) { p = 2 * xm * s; q = 1 - s; }
      else { const qq = fa / fc, r = fb / fc; p = s * (2 * xm * qq * (qq - r) - (b - a) * (r - 1)); q = (qq - 1) * (r - 1) * (s - 1); }
      if (p > 0) q = -q; p = Math.abs(p);
      if (2 * p < Math.min(3 * xm * q - Math.abs(tol1 * q), Math.abs(e * q))) { e = d; d = p / q; }
      else { d = xm; e = d; }
    } else { d = xm; e = d; }
    a = b; fa = fb;
    b += Math.abs(d) > tol1 ? d : (xm > 0 ? tol1 : -tol1);
    fb = f(b);
  }
  return b;
}
/** Jacobi eigensolver for a real symmetric matrix; returns eigenvalues d and eigenvectors V (columns). */
function symEig(Ain: number[][]): { d: number[]; V: number[][] } {
  const n = Ain.length; const A = Ain.map((r) => r.slice());
  const V: number[][] = Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  for (let sweep = 0; sweep < 100; sweep++) {
    let off = 0; for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) off += A[p][q] * A[p][q];
    if (off < 1e-30) break;
    for (let p = 0; p < n; p++) for (let q = p + 1; q < n; q++) {
      if (Math.abs(A[p][q]) < 1e-300) continue;
      const theta = (A[q][q] - A[p][p]) / (2 * A[p][q]);
      const t = Math.sign(theta || 1) / (Math.abs(theta) + Math.sqrt(theta * theta + 1));
      const c = 1 / Math.sqrt(t * t + 1), s = t * c;
      for (let k = 0; k < n; k++) { const akp = A[k][p], akq = A[k][q]; A[k][p] = c * akp - s * akq; A[k][q] = s * akp + c * akq; }
      for (let k = 0; k < n; k++) { const apk = A[p][k], aqk = A[q][k]; A[p][k] = c * apk - s * aqk; A[q][k] = s * apk + c * aqk; }
      for (let k = 0; k < n; k++) { const vkp = V[k][p], vkq = V[k][q]; V[k][p] = c * vkp - s * vkq; V[k][q] = s * vkp + c * vkq; }
    }
  }
  return { d: A.map((_, i) => A[i][i]), V };
}
const froNorm = (M: number[][]) => Math.sqrt(M.reduce((s, r) => s + r.reduce((t, x) => t + x * x, 0), 0));
/** Project a symmetric matrix onto the PSD cone (clip negative eigenvalues to 0). */
function projPSD(M: number[][]): number[][] {
  const n = M.length; const { d, V } = symEig(M);
  const out: number[][] = Array.from({ length: n }, () => new Array<number>(n).fill(0));
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) { let s = 0; for (let k = 0; k < n; k++) if (d[k] > 0) s += V[i][k] * d[k] * V[j][k]; out[i][j] = s; }
  return out;
}
/** Ansari-Bradley positional scores for a sorted vector z: min(i,N+1−i) averaged over ties. */
function abScores(z: number[]): number[] {
  const N = z.length, raw = z.map((_, i) => Math.min(i + 1, N - i)), out = new Array<number>(N);
  for (let i = 0; i < N;) { let j = i; while (j + 1 < N && z[j + 1] === z[i]) j++; let s = 0; for (let k = i; k <= j; k++) s += raw[k]; const avg = s / (j - i + 1); for (let k = i; k <= j; k++) out[k] = avg; i = j + 1; }
  return out;
}

export const STATS: ToolboxModule = {
  id: 'stats',
  name: 'Statistics and Machine Learning Toolbox',
  docBase: 'https://www.mathworks.com/help/stats/',
  builtins: {
    // ── hypothesis tests ──
    /** [h,p,ci,stats]=ttest(x[,m][,'Alpha',a][,'Tail',t]) — one-sample/paired t-test. */
    ttest: (a, nargout) => {
      let x = toArray(m(a[0])).filter((v) => !Number.isNaN(v)); let mu0 = 0; const opts = a.slice(1);
      // second positional arg: scalar mean, or a paired vector (same length → x-m)
      let oi = 0;
      if (opts.length && isMat(opts[0]) && !(opts[0] as Mat).isChar) { const M = m(opts[0]); if (numel(M) === 1) mu0 = asScalar(M); else { const mm = toArray(M); x = toArray(m(a[0])).map((v, i) => v - mm[i]).filter((v) => !Number.isNaN(v)); } oi = 1; }
      let alpha = 0.05, tail = 0;
      for (let i = oi; i < opts.length; i++) { const s = isMat(opts[i]) && (opts[i] as Mat).isChar ? asString(opts[i]).toLowerCase() : ''; if (s === 'alpha') alpha = asScalar(opts[++i]); else if (s === 'tail') tail = tailCode(opts[++i]); else if (i === oi && isMat(opts[i]) && !(opts[i] as Mat).isChar) { alpha = asScalar(opts[i]); if (opts[i + 1] !== undefined) tail = tailCode(opts[++i]); } }
      const n = x.length, df = Math.max(n - 1, 0), xbar = mean_(x), sd = sd_(x), ser = sd / Math.sqrt(n), tval = (xbar - mu0) / ser;
      let p: number, ci: [number, number];
      if (tail === 0) { p = 2 * tcdfL(-Math.abs(tval), df); const c = tinvL(1 - alpha / 2, df) * ser; ci = [xbar - c, xbar + c]; }
      else if (tail === 1) { p = tcdfL(-tval, df); ci = [xbar - tinvL(1 - alpha, df) * ser, Infinity]; }
      else { p = tcdfL(tval, df); ci = [-Infinity, xbar + tinvL(1 - alpha, df) * ser]; }
      const h = p <= alpha ? 1 : 0;
      const stats = mkStruct([['tstat', scalar(tval)], ['df', scalar(df)], ['sd', scalar(sd)]]);
      return Promise.resolve([scalar(h), scalar(p), rowVec(ci), stats].slice(0, Math.max(1, nargout)));
    },
    /** [h,p,ci,stats]=ttest2(x,y[,'Alpha',a][,'Tail',t][,'Vartype',v]) — two-sample t-test. */
    ttest2: (a, nargout) => {
      const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v)), y = toArray(m(a[1])).filter((v) => !Number.isNaN(v));
      let alpha = 0.05, tail = 0, vartype = 1; const opts = a.slice(2);
      for (let i = 0; i < opts.length; i++) { const s = isMat(opts[i]) && (opts[i] as Mat).isChar ? asString(opts[i]).toLowerCase() : ''; if (s === 'alpha') alpha = asScalar(opts[++i]); else if (s === 'tail') tail = tailCode(opts[++i]); else if (s === 'vartype') vartype = asString(opts[++i]).toLowerCase().startsWith('un') ? 2 : 1; else if (i === 0 && isMat(opts[i]) && !(opts[i] as Mat).isChar) { alpha = asScalar(opts[i]); if (opts[i + 1] !== undefined) tail = tailCode(opts[++i]); } }
      const nx = x.length, ny = y.length, s2x = var_(x), s2y = var_(y), diff = mean_(x) - mean_(y);
      let dfe: number, se: number;
      if (vartype === 1) { dfe = nx + ny - 2; const sp = Math.sqrt(((nx - 1) * s2x + (ny - 1) * s2y) / dfe); se = sp * Math.sqrt(1 / nx + 1 / ny); }
      else { const ax = s2x / nx, ay = s2y / ny; dfe = (ax + ay) ** 2 / (ax * ax / (nx - 1) + ay * ay / (ny - 1)); se = Math.sqrt(ax + ay); }
      const ratio = diff / se;
      let p: number, ci: [number, number];
      if (tail === 0) { p = 2 * tcdfL(-Math.abs(ratio), dfe); const c = tinvL(1 - alpha / 2, dfe) * se; ci = [diff - c, diff + c]; }
      else if (tail === 1) { p = tcdfL(-ratio, dfe); ci = [diff - tinvL(1 - alpha, dfe) * se, Infinity]; }
      else { p = tcdfL(ratio, dfe); ci = [-Infinity, diff + tinvL(1 - alpha, dfe) * se]; }
      const h = p <= alpha ? 1 : 0;
      const stats = mkStruct([['tstat', scalar(ratio)], ['df', scalar(dfe)], ['sd', scalar(se)]]);
      return Promise.resolve([scalar(h), scalar(p), rowVec(ci), stats].slice(0, Math.max(1, nargout)));
    },
    /** [p,h,stats]=ranksum(x,y[,'Alpha',a][,'Tail',t][,'Method',m]) — Wilcoxon rank-sum test. */
    ranksum: (a, nargout) => {
      const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v)), y = toArray(m(a[1])).filter((v) => !Number.isNaN(v));
      let alpha = 0.05, tail = 0, method = ''; const opts = a.slice(2);
      for (let i = 0; i < opts.length; i++) { const s = isMat(opts[i]) && (opts[i] as Mat).isChar ? asString(opts[i]).toLowerCase() : ''; if (s === 'alpha') alpha = asScalar(opts[++i]); else if (s === 'tail') tail = tailCode(opts[++i]); else if (s === 'method') method = asString(opts[++i]).toLowerCase(); else if (i === 0 && isMat(opts[i]) && !(opts[i] as Mat).isChar) alpha = asScalar(opts[i]); }
      const nx = x.length, ny = y.length, ns = Math.min(nx, ny), n = nx + ny;
      const sameOrder = nx <= ny; const sm = sameOrder ? x : y, lg = sameOrder ? y : x;
      const { ranks, tieadj } = tiedrank([...sm, ...lg]); const w = ranks.slice(0, ns).reduce((s, r) => s + r, 0);
      if (!method) method = (ns < 10 && n < 20) ? 'exact' : 'approximate';
      let p: number, z = NaN;
      if (method === 'exact') {
        const { counts, scale, total } = rankSumDist(ranks, ns); const ws = Math.round(w * scale);
        const pLE = counts.slice(0, ws + 1).reduce((s, c) => s + c, 0) / total, pGE = counts.slice(ws).reduce((s, c) => s + c, 0) / total;
        if (tail === 0) p = Math.min(1, 2 * Math.min(pLE, pGE)); else if (tail === 1) p = sameOrder ? pGE : pLE; else p = sameOrder ? pLE : pGE;
      } else {
        const wmean = ns * (n + 1) / 2, tiescor = 2 * tieadj / (n * (n - 1)), wvar = nx * ny * ((n + 1) - tiescor) / 12, wc = w - wmean;
        if (tail === 0) { z = (wc - 0.5 * Math.sign(wc)) / Math.sqrt(wvar); if (!sameOrder) z = -z; p = 2 * normcdfL(-Math.abs(z)); }
        else if (tail === 1) { z = sameOrder ? (wc - 0.5) / Math.sqrt(wvar) : -(wc + 0.5) / Math.sqrt(wvar); p = normcdfL(-z); }
        else { z = sameOrder ? (wc + 0.5) / Math.sqrt(wvar) : -(wc - 0.5) / Math.sqrt(wvar); p = normcdfL(z); }
      }
      const h = p <= alpha ? 1 : 0; const ranksumStat = sameOrder ? w : ranks.slice(ns).reduce((s, r) => s + r, 0);
      const stats = mkStruct([['ranksum', scalar(ranksumStat)], ['zval', Number.isNaN(z) ? undefined : scalar(z)]]);
      return Promise.resolve([scalar(p), scalar(h), stats].slice(0, Math.max(1, nargout)));
    },
    /** [p,h,stats]=signrank(x[,y][,'Alpha',a][,'Tail',t][,'Method',m]) — Wilcoxon signed-rank test. */
    signrank: (a, nargout) => {
      const x = toArray(m(a[0]));
      let yArg: number[] | null = null; const opts: Value[] = [];
      if (a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar) { const M = m(a[1]); yArg = numel(M) === 1 ? x.map(() => asScalar(M)) : toArray(M); for (let i = 2; i < a.length; i++) opts.push(a[i]); }
      else for (let i = 1; i < a.length; i++) opts.push(a[i]);
      const onesample = yArg === null; const yv = yArg ?? x.map(() => 0);
      let diff = x.map((v, i) => v - yv[i]).filter((v) => !Number.isNaN(v));
      const epsd = (v: number) => (onesample ? 0 : 2 * Number.EPSILON * Math.max(1, Math.abs(v)));
      diff = diff.filter((d) => Math.abs(d) > epsd(d));
      let alpha = 0.05, tail = 0, method = '';
      for (let i = 0; i < opts.length; i++) { const s = isMat(opts[i]) && (opts[i] as Mat).isChar ? asString(opts[i]).toLowerCase() : ''; if (s === 'alpha') alpha = asScalar(opts[++i]); else if (s === 'tail') tail = tailCode(opts[++i]); else if (s === 'method') method = asString(opts[++i]).toLowerCase(); else if (i === 0 && isMat(opts[i]) && !(opts[i] as Mat).isChar) alpha = asScalar(opts[i]); }
      const n = diff.length;
      if (n === 0) return Promise.resolve([scalar(1), scalar(0), mkStruct([['signedrank', scalar(0)]])].slice(0, Math.max(1, nargout)));
      if (!method) method = n <= 15 ? 'exact' : 'approximate';
      const { ranks, tieadj } = tiedrank(diff.map(Math.abs)); const w = ranks.filter((_, i) => diff[i] > 0).reduce((s, r) => s + r, 0);
      let p: number, z = NaN;
      if (method === 'exact') {
        const { counts, scale, total } = signedRankDist(ranks); const ws = Math.round(w * scale);
        const pLE = counts.slice(0, ws + 1).reduce((s, c) => s + c, 0) / total, pGE = counts.slice(ws).reduce((s, c) => s + c, 0) / total;
        if (tail === 0) p = Math.min(1, 2 * Math.min(pLE, pGE)); else if (tail === 1) p = pGE; else p = pLE;
      } else {
        const mu = n * (n + 1) / 4, sig = Math.sqrt((n * (n + 1) * (2 * n + 1) - tieadj) / 24);
        if (tail === 0) { z = (w - mu) / sig; p = 2 * normcdfL(-Math.abs(z)); }
        else if (tail === 1) { z = (w - mu - 0.5) / sig; p = normcdfL(-z); }
        else { z = (w - mu + 0.5) / sig; p = normcdfL(z); }
      }
      const h = p <= alpha ? 1 : 0;
      const stats = mkStruct([['signedrank', scalar(w)], ['zval', Number.isNaN(z) ? undefined : scalar(z)]]);
      return Promise.resolve([scalar(p), scalar(h), stats].slice(0, Math.max(1, nargout)));
    },
    /** [h,p,stats]=ansaribradley(x,y[,'Alpha',a][,'Tail',t][,'Method',m]) — Ansari-Bradley
     *  dispersion test. Exact conditional null distribution (enumerated by DP) when N≤25 or
     *  'exact' requested, otherwise the W* normal approximation. */
    ansaribradley: (a, nargout) => {
      const xv = toArray(m(a[0])).filter((v) => !Number.isNaN(v));
      const yv = toArray(m(a[1])).filter((v) => !Number.isNaN(v));
      let alpha = 0.05, tail = 0, doexact: boolean | null = null; const opts = a.slice(2);
      for (let i = 0; i < opts.length; i++) {
        const s = isMat(opts[i]) && (opts[i] as Mat).isChar ? asString(opts[i]).toLowerCase() : '';
        if (s === 'alpha') alpha = asScalar(opts[++i]);
        else if (s === 'tail') tail = tailCode(opts[++i]);
        else if (s === 'method') { const mm = asString(opts[++i]).toLowerCase(); doexact = mm.startsWith('on') || mm.startsWith('e'); }
        else if (i === 0 && isMat(opts[i]) && !(opts[i] as Mat).isChar) { alpha = asScalar(opts[i]); if (opts[i + 1] !== undefined) tail = tailCode(opts[++i]); }
      }
      const nxv = xv.length, nyv = yv.length, N = nxv + nyv;
      if (doexact === null) doexact = N <= 25;
      // sort combined sample, track group membership, compute AB scores
      const z = [...xv.map((v) => [v, 1] as [number, number]), ...yv.map((v) => [v, 2] as [number, number])];
      z.sort((p1, p2) => p1[0] - p2[0]);
      const scores = abScores(z.map((p1) => p1[0]));
      const W = z.reduce((s, p1, i) => s + (p1[1] === 1 ? scores[i] : 0), 0);
      // W* normal statistic
      const mm = nxv, nn = nyv, sumsq = scores.reduce((s, r) => s + r * r, 0);
      let meanW: number, stdW: number;
      if (N % 2 === 0) { meanW = mm * (N + 2) / 4; stdW = Math.sqrt(mm * nn * (16 * sumsq - N * (N + 2) ** 2) / (16 * N * (N - 1))); }
      else { meanW = mm * (N + 1) ** 2 / (4 * N); stdW = Math.sqrt(mm * nn * (16 * N * sumsq - (N + 1) ** 4) / (16 * N * N * (N - 1))); }
      const Wstar = stdW > 0 ? (W - meanW) / stdW : (W === meanW ? NaN : Math.sign(W - meanW) * Infinity);
      // conditional p-values [P(W<obs), P(W=obs), P(W>obs)]
      let pl: number, pe: number, pg: number;
      if (mm === 0 || nn === 0) { pl = pe = pg = NaN; }
      else if (doexact) {
        const scale = scores.some((r) => r !== Math.round(r)) ? 2 : 1;
        const r = scores.map((v) => Math.round(v * scale)); const maxS = r.reduce((s, v) => s + v, 0);
        const dp = Array.from({ length: mm + 1 }, () => new Float64Array(maxS + 1)); dp[0][0] = 1;
        for (const ri of r) for (let j = mm; j >= 1; j--) for (let su = maxS; su >= ri; su--) dp[j][su] += dp[j - 1][su - ri];
        let total = 0; for (const c of dp[mm]) total += c;
        const Ws = Math.round(W * scale);
        let less = 0, eq = 0, gr = 0;
        for (let su = 0; su <= maxS; su++) { if (su < Ws) less += dp[mm][su]; else if (su === Ws) eq += dp[mm][su]; else gr += dp[mm][su]; }
        pl = less / total; pe = eq / total; pg = gr / total;
      } else { const pn = normcdfL(-Math.abs(Wstar)); pe = 0; if (Wstar < 0) { pl = pn; pg = 1 - pn; } else { pl = 1 - pn; pg = pn; } }
      let p: number;
      if (tail === 0) p = Math.min(1, 2 * (pe + Math.min(pl, pg)));
      else if (tail === 1) p = pe + pl;
      else p = pe + pg;
      const h = Number.isNaN(p) ? NaN : (p <= alpha ? 1 : 0);
      const stats = mkStruct([['W', scalar(W)], ['Wstar', scalar(Wstar)]]);
      return Promise.resolve([scalar(h), scalar(p), stats].slice(0, Math.max(1, nargout)));
    },
    /** Y=nearcorr(A[,'Method',m][,'Tolerance',t][,'MaxIterations',k][,'Weights',w]) — nearest
     *  correlation matrix by Frobenius distance via Higham's alternating projections (Dykstra
     *  correction). Newton method is not ported; default here uses the projection algorithm. */
    nearcorr: (a) => {
      const A0 = m(a[0]); const N = A0.rows; let A = matRows(A0);
      A = A.map((r, i) => r.map((v, j) => (v + A[j][i]) / 2)); // symmetrize
      let tol = 1e-6, maxIter = 200; let weight: number[] | null = null;
      for (let i = 1; i < a.length; i++) {
        const s = isMat(a[i]) && (a[i] as Mat).isChar ? asString(a[i]).toLowerCase() : '';
        if (s === 'tolerance') tol = asScalar(a[++i]);
        else if (s === 'maxiterations') maxIter = asScalar(a[++i]);
        else if (s === 'weights') { const wM = m(a[++i]); weight = numel(wM) ? toArray(wM) : null; }
        else if (s === 'method') i++; // projection is the only supported method
      }
      // diagonal W-form weighting → element-wise sqrt(w_i*w_j) multiplier
      const wmat: number[][] = Array.from({ length: N }, (_, i) => Array.from({ length: N }, (_, j) => (weight ? Math.sqrt(weight[i] * weight[j]) : 1)));
      let dS: number[][] = Array.from({ length: N }, () => new Array<number>(N).fill(0));
      let Yold = A.map((r) => r.slice()), Xold = A.map((r) => r.slice());
      let X = Yold, Y = Yold;
      for (let iter = 0; iter <= maxIter; iter++) {
        const R = Yold.map((r, i) => r.map((v, j) => v - dS[i][j]));
        const WR = R.map((r, i) => r.map((v, j) => v * wmat[i][j]));
        const P = projPSD(WR);
        X = P.map((r, i) => r.map((v, j) => v / wmat[i][j]));
        X = X.map((r, i) => r.map((v, j) => (v + X[j][i]) / 2));
        dS = X.map((r, i) => r.map((v, j) => v - R[i][j]));
        Y = X.map((r) => r.slice());
        for (let i = 0; i < N; i++) Y[i][i] = 1;
        const diff = (M: number[][], Q: number[][]) => froNorm(M.map((r, i) => r.map((v, j) => v - Q[i][j])));
        const normY = froNorm(Y);
        const c1 = diff(Y, Yold) / normY, c2 = diff(X, Xold) / froNorm(X), c3 = diff(Y, X) / normY;
        if (Math.max(c1, c2, c3) <= tol) break;
        Yold = Y.map((r) => r.slice()); Xold = X.map((r) => r.slice());
      }
      // restore unit diagonal by rescaling X
      const sc = X.map((_, i) => Math.sqrt(X[i][i]));
      Y = X.map((r, i) => r.map((v, j) => v / (sc[i] * sc[j])));
      Y = Y.map((r, i) => r.map((v, j) => (v + Y[j][i]) / 2));
      // handle tiny negative eigenvalues from rounding
      let minE = Math.min(...symEig(Y).d);
      if (minE < 0) { Y = Y.map((r) => r.map((v) => v / (1 - minE + Number.EPSILON))); for (let i = 0; i < N; i++) Y[i][i] = 1; let nn = 10; minE = Math.min(...symEig(Y).d); while (minE < 0) { Y = Y.map((r) => r.map((v) => v / (1 + nn * Number.EPSILON))); for (let i = 0; i < N; i++) Y[i][i] = 1; minE = Math.min(...symEig(Y).d); nn *= 10; } }
      return ret(fromRows(Y));
    },
    /** out=sampsizepwr(testtype,params,p1,power[,n][,'Alpha',a][,'Tail',t][,'Ratio',r]) —
     *  sample size, power, or detectable alternative for Z/t/t2/Variance/P tests. Scalar inputs. */
    sampsizepwr: (a, nargout) => {
      const ttRaw = asString(a[0]).toLowerCase();
      const params = toArray(m(a[1]));
      const p0 = params[0]; const sig = params[1];
      const hasP1 = a[2] !== undefined && isMat(a[2]) && numel(m(a[2])) > 0;
      const p1 = hasP1 ? asScalar(a[2]) : NaN;
      const hasPow = a[3] !== undefined && isMat(a[3]) && numel(m(a[3])) > 0;
      let power = hasPow ? asScalar(a[3]) : NaN;
      const hasN = a[4] !== undefined && isMat(a[4]) && numel(m(a[4])) > 0;
      const n = hasN ? asScalar(a[4]) : NaN;
      let alpha = 0.05, tail = 0, ratio = 1;
      for (let i = 5; i < a.length; i++) { const s = asString(a[i]).toLowerCase(); if (s === 'alpha') alpha = asScalar(a[++i]); else if (s === 'tail') tail = tailCode(a[++i]); else if (s === 'ratio') ratio = asScalar(a[++i]); }
      if (a.length === 3) power = 0.9;
      const tt = ttRaw.startsWith('z') ? 'Z' : ttRaw === 't2' ? 't2' : ttRaw.startsWith('t') ? 't' : ttRaw.startsWith('v') ? 'Variance' : 'P';
      // power functions
      const powN = (mu1: number, nn: number) => { const S = sig / Math.sqrt(nn); if (tail === 0) { const cL = norminvS(alpha / 2, p0, S), cU = p0 + (p0 - cL); return normcdfS(cL, mu1, S) + normcdfS(-cU, -mu1, S); } if (tail === 1) { const cr = p0 + (p0 - norminvS(alpha, p0, S)); return normcdfS(-cr, -mu1, S); } const cr = norminvS(alpha, p0, S); return normcdfS(cr, mu1, S); };
      const powT = (mu1: number, nn: number) => { const S = sig / Math.sqrt(nn), ncp = (mu1 - p0) / S; if (tail === 0) { const cL = tinvL(alpha / 2, nn - 1); return nctcdfS(cL, nn - 1, ncp) + nctcdfS(cL, nn - 1, -ncp); } if (tail === 1) { const cr = tinvL(1 - alpha, nn - 1); return nctcdfS(-cr, nn - 1, -ncp); } const cr = tinvL(alpha, nn - 1); return nctcdfS(cr, nn - 1, ncp); };
      const powT2 = (mu1: number, nn: number) => { const df = nn + ratio * nn - 2, ncp = (mu1 - p0) / (sig * Math.sqrt(1 / nn + 1 / (ratio * nn))); if (tail === 0) { const cL = tinvL(alpha / 2, df); return nctcdfS(cL, df, ncp) + nctcdfS(cL, df, -ncp); } if (tail === 1) { const cr = tinvL(1 - alpha, df); return nctcdfS(-cr, df, -ncp); } const cr = tinvL(alpha, df); return nctcdfS(cr, df, ncp); };
      const powV = (v1: number, nn: number) => { if (tail === 0) { const cU = p0 * chi2invS(1 - alpha / 2, nn - 1), cL = p0 * chi2invS(alpha / 2, nn - 1); return chi2cdfS(cL / v1, nn - 1) + (1 - chi2cdfS(cU / v1, nn - 1)); } if (tail === 1) { const cr = p0 * chi2invS(1 - alpha, nn - 1); return 1 - chi2cdfS(cr / v1, nn - 1); } const cr = p0 * chi2invS(alpha, nn - 1); return chi2cdfS(cr / v1, nn - 1); };
      const getcritP = (nn: number): [number, number] => { let Alo = tail === 0 ? alpha / 2 : (tail < 0 ? alpha : 0); let critU = nn, critL = 0; if (tail <= 0) { critL = binoinvS(Alo, nn, p0); Alo = binocdfS(critL, nn, p0); if (critL < nn && Alo <= alpha / 2) { critL += 1; } else { Alo -= binopdfS(critL, nn, p0); } } if (tail >= 0) { const Aup = Math.max(0, alpha - Alo); critU = binoinvS(1 - Aup, nn, p0); } return [critL, critU]; };
      const powP = (pp1: number, nn: number) => { const [cL, cU] = getcritP(nn); if (tail === 0) return binocdfS(cL - 1, nn, pp1) + 1 - binocdfS(cU, nn, pp1); if (tail === 1) return 1 - binocdfS(cU, nn, pp1); return binocdfS(cL - 1, nn, pp1); };
      const powerfun = (mu1: number, nn: number) => tt === 'Z' ? powN(mu1, nn) : tt === 't' ? powT(mu1, nn) : tt === 't2' ? powT2(mu1, nn) : tt === 'Variance' ? powV(mu1, nn) : powP(mu1, nn);
      // ── compute power given n ──
      if (!hasPow) return ret(scalar(powerfun(p1, n)));
      // ── compute n given power ──
      if (!hasN) {
        if (tt === 'Z' || tt === 't') {
          const al = tail === 0 ? alpha / 2 : alpha;
          const z1 = -norminvStd(al), z2 = norminvStd(1 - power), mudiff = Math.abs(p0 - p1) / sig;
          let nv = Math.ceil(((z1 - z2) / mudiff) ** 2);
          if (tt === 't' || tail === 0) { if (tt === 't') nv = Math.max(nv, 2); while (powerfun(p1, nv) < power) nv++; }
          return ret(scalar(nv));
        }
        if (tt === 't2') {
          const al = tail === 0 ? alpha / 2 : alpha; const z1 = -norminvStd(al), z2 = norminvStd(1 - power);
          let n0 = Math.ceil((z1 - z2) ** 2 * (sig / Math.abs(p0 - p1)) ** 2 * 2); if (n0 <= 1) n0 = 2;
          const F = (nn: number) => powT2(p1, nn) - power; // powT2 already sums both tails for tail==0
          const minN = ratio >= 2 ? 1 : 2;
          let nReal: number;
          if (F(minN) > 0) nReal = minN; else { let n0u = n0 === minN ? n0 + 1 : n0; nReal = F(n0u) > 0 ? brent(F, minN, n0u, 1e-6) : (() => { let hi = n0u; while (F(hi) < 0) hi *= 2; return brent(F, n0u, hi, 1e-6); })(); }
          const N1 = Math.ceil(nReal), N2 = Math.ceil(ratio * nReal);
          return Promise.resolve([scalar(N1), scalar(N2)].slice(0, Math.max(1, nargout)));
        }
        // Variance / P: binary search
        const lo0 = tt === 'P' ? 0 : 1; let nlo = lo0, nhi = 100;
        while (powerfun(p1, nhi) < power) nhi *= 2;
        while (nhi > nlo + 1) { const nm = Math.floor((nhi + nlo) / 2); if (powerfun(p1, nm) > power) nhi = nm; else nlo = nm; }
        let nv = nhi;
        if (tt === 'P' && nv <= 200) { for (let kk = 1; kk <= nv; kk++) if (powP(p1, kk) >= power) { nv = kk; break; } }
        return ret(scalar(nv));
      }
      // ── compute detectable p1 given power and n ──
      const a2 = tail === 0 ? alpha / 2 : alpha;
      if (tt === 'Z') {
        const S = sig / Math.sqrt(n); const alZ = tail === 0 ? alpha / 2 : alpha;
        let z1: number, z2: number;
        if (tail === -1) { z1 = norminvStd(alZ); z2 = norminvStd(power); } else { z1 = norminvStd(1 - alZ); z2 = norminvStd(1 - power); }
        let mu1 = p0 + S * (z1 - z2);
        if (tail === 0) { const desiredbeta = 1 - power; let betahi = desiredbeta; for (let it = 0; it < 100; it++) { const betalo = normcdfS(-z1 + (p0 - mu1) / S); if (Math.abs((betahi - betalo) - desiredbeta) <= 1e-6 * desiredbeta) break; betahi = desiredbeta + betalo; mu1 = p0 + S * (z1 - norminvStd(betahi)); } }
        return ret(scalar(mu1));
      }
      if (tt === 't' || tt === 't2') {
        const isT2 = tt === 't2', df = isT2 ? n + ratio * n - 2 : n - 1;
        const seFac = isT2 ? Math.sqrt(1 / n + 1 / (ratio * n)) : 1 / Math.sqrt(n);
        let z1: number, z2: number;
        if (tail === -1) { z1 = norminvStd(alpha); z2 = norminvStd(power); } else { z1 = norminvStd(1 - a2); z2 = norminvStd(1 - power); }
        const pf = isT2 ? powT2 : powT;
        let mu1 = isT2 ? p0 + sig * (tinvL(tail === -1 ? alpha : 1 - a2, df) - tinvL(tail === -1 ? power : 1 - power, df)) * seFac
                       : p0 + sig * (z1 - z2) * seFac;
        const F0 = (mu1arg: number) => (mu1 > p0 ? pf(Math.max(p0, mu1arg), n) - power : power - pf(Math.min(p0, mu1arg), n));
        // refine with a local bracket around the explicit estimate
        const lo = mu1 > p0 ? p0 : p0 - 10 * Math.abs(mu1 - p0) - 1, hi = mu1 > p0 ? p0 + 10 * Math.abs(mu1 - p0) + 1 : p0;
        const r = brent(F0, lo, hi, 1e-9); if (Number.isFinite(r)) mu1 = r;
        return ret(scalar(mu1));
      }
      if (tt === 'Variance') {
        const Finv = (pr: number, p1v: number) => p1v * chi2invS(pr, n - 1) / (n - 1);
        const Fc = (xx: number, p1v: number) => chi2cdfS(xx * (n - 1) / p1v, n - 1);
        const al = tail === 0 ? alpha / 2 : alpha; const desiredbeta = 1 - power;
        let critU = NaN, critL = NaN, p1v = NaN;
        if (tail >= 0) { critU = Finv(1 - al, p0); p1v = 1 / Finv(desiredbeta, 1 / critU); }
        if (tail <= 0) critL = Finv(al, p0);
        if (tail < 0) p1v = 1 / Finv(power, 1 / critL);
        if (tail === 0) { let betahi = desiredbeta; for (let it = 0; it < 100; it++) { const betalo = Fc(critL, p1v); if (Math.abs((betahi - betalo) - desiredbeta) <= 1e-6 * desiredbeta) break; betahi = desiredbeta + betalo; p1v = 1 / Finv(betahi, 1 / critU); } }
        return ret(scalar(p1v));
      }
      // P (binomial): normal-approx start, then refine with brent
      {
        const [cL, cU] = getcritP(n); const sigma = Math.sqrt(p0 * (1 - p0) / n);
        // normal-approx p1
        const S = sigma; let z1: number, z2: number;
        if (tail === -1) { z1 = norminvStd(alpha); z2 = norminvStd(power); } else { z1 = norminvStd(1 - a2); z2 = norminvStd(1 - power); }
        let p1v = p0 + S * (z1 - z2);
        if (p1v <= 0) p1v = p0 / 2; if (p1v >= 1) p1v = 1 - p0 / 2;
        const F0 = (arg: number) => (p1v > p0 ? powP(Math.max(p0, Math.min(1, arg)), n) - power : power - powP(Math.max(0, Math.min(p0, arg)), n));
        void cL; void cU;
        const lo = p1v > p0 ? p0 : 1e-6, hi = p1v > p0 ? 1 - 1e-6 : p0;
        const r = brent(F0, lo, hi, 1e-9); if (Number.isFinite(r)) p1v = r;
        return ret(scalar(p1v));
      }
    },
    /** [nnstat,p,h]=knntest(X,Y[,'NumNeighbors',k][,'Distance',d][,'Alpha',a]) — k-nearest-
     *  neighbor two-sample test (Schilling/Henze). Continuous numeric data; supported metrics:
     *  euclidean, cityblock, chebychev, cosine, minkowski, correlation. */
    knntest: (a, nargout) => {
      const X = matRows(m(a[0])), Y = matRows(m(a[1]));
      let alpha = 0.05, k = 10, distance = 'euclidean';
      for (let i = 2; i < a.length; i++) { const s = asString(a[i]).toLowerCase(); if (s === 'alpha') alpha = asScalar(a[++i]); else if (s === 'numneighbors') k = asScalar(a[++i]); else if (s === 'distance') distance = asString(a[++i]).toLowerCase(); }
      const Nx = X.length, Ny = Y.length, N = Nx + Ny;
      const pooled = [...X, ...Y];
      const correlationDist = (u: number[], v: number[]) => { const mu = u.reduce((s, x) => s + x, 0) / u.length, mv = v.reduce((s, x) => s + x, 0) / v.length; const cu = u.map((x) => x - mu), cv = v.map((x) => x - mv); const den = Math.hypot(...cu) * Math.hypot(...cv); return den === 0 ? 1 : 1 - dot(cu, cv) / den; };
      const metric = distance === 'correlation' ? correlationDist : (METRICS[distance] ?? METRICS.euclidean);
      // for each point, k nearest neighbors excluding self
      let inGroup = 0; const totalEntries = N * k;
      for (let i = 0; i < N; i++) {
        const dists: [number, number][] = [];
        for (let j = 0; j < N; j++) { if (j === i) continue; dists.push([metric(pooled[i], pooled[j]), j]); }
        dists.sort((p1, p2) => p1[0] - p2[0]);
        const iIsX = i < Nx;
        for (let t = 0; t < k && t < dists.length; t++) { const nbX = dists[t][1] < Nx; if (nbX === iIsX) inGroup++; }
      }
      const T = inGroup / totalEntries;
      const mu = (Nx * (Nx - 1) + Ny * (Ny - 1)) / (N * (N - 1));
      const l1 = Nx / N, l2 = Ny / N;
      const variance = (1 / (k * N)) * (l1 * l2 + 4 * l1 * l1 * l2 * l2);
      const sigma = Math.sqrt(variance);
      const p = normcdfL(-(T - mu) / sigma); // upper-tail P(Z > (T-mu)/sigma)
      const h = p <= alpha ? 1 : 0;
      return Promise.resolve([scalar(T), scalar(p), scalar(h)].slice(0, Math.max(1, nargout)));
    },
    /** [h,p,adstat,cv]=adtest(x[,'Distribution',d][,'Alpha',a]) — Anderson-Darling test.
     *  Composite (parameters estimated) for 'normal'/'exponential'; simple test against a
     *  fully-specified makedist object. 'ev'/'weibull'/MonteCarlo/Asymptotic are omitted. */
    adtest: (a, nargout) => {
      let x = toArray(m(a[0])).filter((v) => !Number.isNaN(v));
      let distr: Value | string = 'normal'; let alpha = 0.05;
      for (let i = 1; i < a.length; i++) {
        const s = isMat(a[i]) && (a[i] as Mat).isChar ? asString(a[i]).toLowerCase() : '';
        if (s === 'distribution') { const v = a[++i]; distr = isObject(v) ? v : asString(v).toLowerCase(); }
        else if (s === 'alpha') alpha = asScalar(a[++i]);
        else throw new MatError(`adtest: unsupported option '${asString(a[i])}'`);
      }
      const n = x.length;
      // Simple hypothesis: fully-specified distribution object.
      if (typeof distr !== 'string') {
        const { spec, vals } = resolveDist([distr]);
        const z = x.map((xi) => spec.cdf(xi, ...vals));
        const ad = computeADStat(z);
        let p: number;
        if (n === 1) p = 1 - Math.sqrt(1 - 4 * Math.exp(-1 - ad));
        else p = 1 - adn(n, ad);
        p = Math.min(1, Math.max(0, p));
        const h = p < alpha ? 1 : 0;
        return Promise.resolve([scalar(h), scalar(p), scalar(ad)].slice(0, Math.max(1, nargout)));
      }
      // Composite hypothesis (parameters estimated from data).
      let name = distr;
      if (name.startsWith('exp')) name = 'exponential'; else if (name.startsWith('norm')) name = 'normal';
      if (name !== 'normal' && name !== 'exponential') throw new MatError(`adtest: distribution '${distr}' not supported (only normal, exponential, or a distribution object)`);
      if (n < 4) throw new MatError('adtest: at least 4 non-missing observations are required for a composite test');
      let z: number[];
      if (name === 'normal') { const mu = mean_(x), sd = sd_(x); z = x.map((xi) => 0.5 * erfc(-(xi - mu) / (sd * Math.SQRT2))); }
      else { const mu = mean_(x); z = x.map((xi) => (xi < 0 ? 0 : 1 - Math.exp(-xi / mu))); }
      const ad = computeADStat(z);
      const CVs = name === 'normal' ? adCVsNorm(n) : adCVsExp(n);
      const logAlphas = AD_ALPHAS.map((al) => Math.log(al));
      // critical value by pchip on (log alpha, CV); clamp outside the table.
      let cv: number;
      if (alpha < AD_ALPHAS[0]) cv = CVs[0]; else if (alpha > AD_ALPHAS[AD_ALPHAS.length - 1]) cv = CVs[CVs.length - 1];
      else cv = pchip(logAlphas, CVs, Math.log(alpha));
      // p-value by inverse interpolation of the same pchip in CV.
      let p: number, h: number;
      if (ad > CVs[0]) { p = AD_ALPHAS[0]; }
      else if (ad < CVs[CVs.length - 1]) { p = AD_ALPHAS[AD_ALPHAS.length - 1]; }
      else {
        // CVs are decreasing in alpha; find bracketing interval and bisect on log(alpha).
        let i = 0; while (i < CVs.length - 1 && !(ad > CVs[i + 1])) i++;
        let lo = logAlphas[i], hi = logAlphas[i + 1];
        for (let k = 0; k < 200; k++) { const mid = (lo + hi) / 2; if (pchip(logAlphas, CVs, mid) > ad) lo = mid; else hi = mid; if (Math.abs(hi - lo) < 1e-14) break; }
        p = Math.exp((lo + hi) / 2);
      }
      if (alpha < AD_ALPHAS[0] || alpha > AD_ALPHAS[AD_ALPHAS.length - 1]) h = p < alpha ? 1 : 0;
      else h = ad > cv ? 1 : 0;
      return Promise.resolve([scalar(h), scalar(p), scalar(ad), scalar(cv)].slice(0, Math.max(1, nargout)));
    },
    /** [TR,EM]=hmmestimate(seq,states[,'Symbols',s][,'Statenames',sn][,'Pseudoemissions',PE][,'Pseudotransitions',PT])
     *  Maximum-likelihood HMM parameter estimate from an observed sequence and its state path. */
    hmmestimate: (a, nargout) => {
      // Resolve a sequence value to integer codes; numeric → as-is, string/cell → unique mapping.
      const toCodes = (v: Value): { codes: number[]; uniq: number; numeric: boolean; labels?: string[] } => {
        if (isMat(v) && !(v as Mat).isChar) { const arr = toArray(m(v)); return { codes: arr, uniq: Math.max(...arr), numeric: true }; }
        let items: string[];
        if (isCell(v)) items = v.items.map((it) => asString(it));
        else if (isStr(v)) items = v.items.slice();
        else if (isMat(v) && (v as Mat).isChar) items = asString(v).split('');
        else items = [asString(v)];
        const labels = Array.from(new Set(items)).sort();
        const idx = new Map(labels.map((l, i) => [l, i + 1]));
        return { codes: items.map((it) => idx.get(it)!), uniq: labels.length, numeric: false, labels };
      };
      const S = toCodes(a[0]); const St = toCodes(a[1]);
      let seq = S.codes.slice(); let states = St.codes.slice();
      if (seq.length !== states.length) throw new MatError('hmmestimate: seq and states must have the same length');
      let numSymbols = S.numeric ? S.uniq : S.labels!.length;
      let numStates = St.numeric ? St.uniq : St.labels!.length;
      // String items of a value: cell→element strings, string array→items, char row→characters, numeric→string codes.
      const labelsOf = (v: Value): string[] => isCell(v) ? v.items.map((it) => asString(it)) : isStr(v) ? v.items.slice() : (isMat(v) && (v as Mat).isChar ? asString(v).split('') : toArray(m(v)).map(String));
      let pseudoE: number[][] | null = null, pseudoTR: number[][] | null = null;
      for (let i = 2; i < a.length; i++) {
        const s = isMat(a[i]) && (a[i] as Mat).isChar ? asString(a[i]).toLowerCase() : '';
        if (s === 'symbols') { const labels = labelsOf(a[++i]); numSymbols = labels.length; const idx = new Map(labels.map((l, k) => [l, k + 1])); seq = labelsOf(a[0]).map((it) => { const c = idx.get(it); if (!c) throw new MatError('hmmestimate: symbol not in Symbols'); return c; }); }
        else if (s === 'statenames') { const labels = labelsOf(a[++i]); numStates = labels.length; const idx = new Map(labels.map((l, k) => [l, k + 1])); states = labelsOf(a[1]).map((it) => { const c = idx.get(it); if (!c) throw new MatError('hmmestimate: state not in Statenames'); return c; }); }
        else if (s === 'pseudoemissions') { pseudoE = matRows(m(a[++i])); numStates = Math.max(numStates, pseudoE.length); numSymbols = Math.max(numSymbols, pseudoE[0]?.length ?? 0); }
        else if (s === 'pseudotransitions') { pseudoTR = matRows(m(a[++i])); if (pseudoTR.length !== (pseudoTR[0]?.length ?? 0)) throw new MatError('hmmestimate: Pseudotransitions must be square'); numStates = Math.max(numStates, pseudoTR.length); }
        else throw new MatError(`hmmestimate: unsupported option '${asString(a[i])}'`);
      }
      const TR = Array.from({ length: numStates }, () => new Array<number>(numStates).fill(0));
      const EM = Array.from({ length: numStates }, () => new Array<number>(numSymbols).fill(0));
      for (let c = 0; c < seq.length - 1; c++) TR[states[c] - 1][states[c + 1] - 1]++;
      for (let c = 0; c < seq.length; c++) EM[states[c] - 1][seq[c] - 1]++;
      if (pseudoE) for (let r = 0; r < numStates; r++) for (let cc = 0; cc < numSymbols; cc++) EM[r][cc] += pseudoE[r]?.[cc] ?? 0;
      if (pseudoTR) for (let r = 0; r < numStates; r++) for (let cc = 0; cc < numStates; cc++) TR[r][cc] += pseudoTR[r]?.[cc] ?? 0;
      const norm = (M: number[][]) => M.map((row) => { const sum = row.reduce((s, v) => s + v, 0); return sum === 0 ? row.map(() => 0) : row.map((v) => v / sum); });
      return Promise.resolve([fromRows(norm(TR)), fromRows(norm(EM))].slice(0, Math.max(1, nargout)));
    },
    /** [p,t,rankH]=linhyptest(mu,Sigma,C,H,dfe) — linear hypothesis test H*mu = C. */
    linhyptest: (a, nargout) => {
      const mu = toArray(m(a[0])); const k = mu.length;
      const Sigma = a.length > 1 && isMat(a[1]) && numel(m(a[1])) > 0 ? matRows(m(a[1])) : Array.from({ length: k }, (_, i) => Array.from({ length: k }, (_, j) => (i === j ? 1 : 0)));
      let C = a.length > 2 && isMat(a[2]) && numel(m(a[2])) > 0 ? toArray(m(a[2])) : new Array<number>(k).fill(0);
      let H = a.length > 3 && isMat(a[3]) && numel(m(a[3])) > 0 ? matRows(m(a[3])) : Array.from({ length: k }, (_, i) => Array.from({ length: k }, (_, j) => (i === j ? 1 : 0)));
      const dfe = a.length > 4 && isMat(a[4]) && numel(m(a[4])) > 0 ? asScalar(a[4]) : Infinity;
      const nC = H.length;
      if (C.length === 1 && nC > 1) C = new Array<number>(nC).fill(C[0]);
      // rank of H via Gaussian elimination with partial pivoting (rows of H).
      const A = H.map((r) => r.slice()); const nrm = Math.sqrt(H.reduce((s, r) => s + r.reduce((t, v) => t + v * v, 0), 0));
      const tol = Math.max(nC, k) * (nrm > 0 ? nrm : 1) * 2.220446049250313e-16;
      const pivotRows: number[] = []; const used = new Array<boolean>(nC).fill(false);
      const work = A.map((r) => r.slice());
      for (let col = 0; col < k; col++) {
        let piv = -1, best = tol;
        for (let r = 0; r < nC; r++) if (!used[r] && Math.abs(work[r][col]) > best) { best = Math.abs(work[r][col]); piv = r; }
        if (piv < 0) continue;
        used[piv] = true; pivotRows.push(piv);
        for (let r = 0; r < nC; r++) if (r !== piv && !used[r]) { const f = work[r][col] / work[piv][col]; for (let cc = 0; cc < k; cc++) work[r][cc] -= f * work[piv][cc]; }
      }
      const rankH = pivotRows.length;
      // Use a full-rank subset of the hypothesis rows.
      const Hs = pivotRows.map((r) => H[r]); const Cs = pivotRows.map((r) => C[r]);
      const c0 = Hs.map((row) => row.reduce((s, v, j) => s + v * mu[j], 0));
      // v0 = Hs * Sigma * Hs'
      const SHt = Hs.map((row) => Sigma.map((srow) => srow.reduce((s, v, j) => s + v * row[j], 0)));
      const v0 = Hs.map((rowI, i) => Hs.map((_rowJ, j) => rowI.reduce((s, v, kk) => s + v * SHt[j][kk], 0)));
      const r = c0.map((v, i) => v - Cs[i]);
      // t = (r' * inv(v0) * r) / rankH ; solve v0 * y = r via Gaussian elimination.
      const sol = solveLin(v0, r);
      const t = r.reduce((s, v, i) => s + v * sol[i], 0) / rankH;
      const p = fUpperTail(t, rankH, dfe);
      return Promise.resolve([scalar(p), scalar(t), scalar(rankH)].slice(0, Math.max(1, nargout)));
    },

    // ── Normal ──
    normpdf: (a) => dist(a, [0, 1], (x, mu, s) => Math.exp(-0.5 * ((x - mu) / s) ** 2) / (s * Math.sqrt(2 * Math.PI))),
    normcdf: (a) => dist(a, [0, 1], (x, mu, s) => 0.5 * erfc(-(x - mu) / (s * Math.SQRT2))),
    norminv: (a) => dist(a, [0, 1], (p, mu, s) => mu + s * norminvStd(p)),
    // ── Student's t ──
    tpdf: (a) => dist(a, [1], (x, v) => Math.exp(logGamma((v + 1) / 2) - logGamma(v / 2)) / Math.sqrt(v * Math.PI) * (1 + x * x / v) ** (-(v + 1) / 2)),
    tcdf: (a) => dist(a, [1], (x, v) => { const ib = betainc(v / (v + x * x), v / 2, 0.5); return x >= 0 ? 1 - 0.5 * ib : 0.5 * ib; }),
    tinv: (a) => dist(a, [1], (p, v) => invCdf(p, (x) => { const ib = betainc(v / (v + x * x), v / 2, 0.5); return x >= 0 ? 1 - 0.5 * ib : 0.5 * ib; }, -Infinity, Infinity)),
    // ── Chi-square ──
    chi2pdf: (a) => dist(a, [1], (x, k) => x < 0 ? 0 : Math.exp((k / 2 - 1) * Math.log(x) - x / 2 - (k / 2) * Math.LN2 - logGamma(k / 2))),
    chi2cdf: (a) => dist(a, [1], (x, k) => gammainc(x / 2, k / 2)),
    chi2inv: (a) => dist(a, [1], (p, k) => invCdf(p, (x) => gammainc(x / 2, k / 2), 0, Infinity)),
    // ── Gamma (shape a, scale b) ──
    gampdf: (a) => dist(a, [1, 1], (x, k, th) => x < 0 ? 0 : Math.exp((k - 1) * Math.log(x) - x / th - k * Math.log(th) - logGamma(k))),
    gamcdf: (a) => dist(a, [1, 1], (x, k, th) => gammainc(x / th, k)),
    gaminv: (a) => dist(a, [1, 1], (p, k, th) => invCdf(p, (x) => gammainc(x / th, k), 0, Infinity)),
    // ── Exponential (mean mu) ──
    exppdf: (a) => dist(a, [1], (x, mu) => x < 0 ? 0 : Math.exp(-x / mu) / mu),
    expcdf: (a) => dist(a, [1], (x, mu) => x < 0 ? 0 : 1 - Math.exp(-x / mu)),
    expinv: (a) => dist(a, [1], (p, mu) => -mu * Math.log(1 - p)),
    // ── Beta ──
    betapdf: (a) => dist(a, [1, 1], (x, p, q) => x < 0 || x > 1 ? 0 : Math.exp((p - 1) * Math.log(x) + (q - 1) * Math.log(1 - x) - (logGamma(p) + logGamma(q) - logGamma(p + q)))),
    betacdf: (a) => dist(a, [1, 1], (x, p, q) => betainc(x, p, q)),
    betainv: (a) => dist(a, [1, 1], (pr, p, q) => invCdf(pr, (x) => betainc(x, p, q), 0, 1)),
    // ── F ──
    fpdf: (a) => dist(a, [1, 1], (x, d1, d2) => x < 0 ? 0 : Math.exp(0.5 * (d1 * Math.log(d1 * x) + d2 * Math.log(d2) - (d1 + d2) * Math.log(d1 * x + d2)) - Math.log(x) - (logGamma(d1 / 2) + logGamma(d2 / 2) - logGamma((d1 + d2) / 2)))),
    fcdf: (a) => dist(a, [1, 1], (x, d1, d2) => x <= 0 ? 0 : betainc(d1 * x / (d1 * x + d2), d1 / 2, d2 / 2)),
    finv: (a) => dist(a, [1, 1], (p, d1, d2) => invCdf(p, (x) => x <= 0 ? 0 : betainc(d1 * x / (d1 * x + d2), d1 / 2, d2 / 2), 0, Infinity)),
    // ── Uniform ──
    unifpdf: (a) => dist(a, [0, 1], (x, lo, hi) => x >= lo && x <= hi ? 1 / (hi - lo) : 0),
    unifcdf: (a) => dist(a, [0, 1], (x, lo, hi) => x < lo ? 0 : x > hi ? 1 : (x - lo) / (hi - lo)),
    unifinv: (a) => dist(a, [0, 1], (p, lo, hi) => lo + p * (hi - lo)),
    // ── Lognormal ──
    lognpdf: (a) => dist(a, [0, 1], (x, mu, s) => x <= 0 ? 0 : Math.exp(-0.5 * ((Math.log(x) - mu) / s) ** 2) / (x * s * Math.sqrt(2 * Math.PI))),
    logncdf: (a) => dist(a, [0, 1], (x, mu, s) => x <= 0 ? 0 : 0.5 * erfc(-(Math.log(x) - mu) / (s * Math.SQRT2))),
    logninv: (a) => dist(a, [0, 1], (p, mu, s) => Math.exp(mu + s * norminvStd(p))),
    // ── Binomial ──
    binopdf: (a) => dist(a, [1, 0.5], (k, n, p) => { k = Math.round(k); if (k < 0 || k > n) return 0; return nCk(n, k) * p ** k * (1 - p) ** (n - k); }),
    binocdf: (a) => dist(a, [1, 0.5], (k, n, p) => { k = Math.floor(k); if (k < 0) return 0; if (k >= n) return 1; return 1 - betainc(p, k + 1, n - k); }),
    binoinv: (a) => dist(a, [1, 0.5], (pr, n, p) => { let c = 0; for (let k = 0; k <= n; k++) { c += nCk(n, k) * p ** k * (1 - p) ** (n - k); if (c >= pr - 1e-12) return k; } return n; }),
    // ── Poisson ──
    poisspdf: (a) => dist(a, [1], (k, lam) => { k = Math.round(k); if (k < 0) return 0; return Math.exp(k * Math.log(lam) - lam - logGamma(k + 1)); }),
    poisscdf: (a) => dist(a, [1], (k, lam) => { k = Math.floor(k); return k < 0 ? 0 : 1 - gammainc(lam, k + 1); }),
    poissinv: (a) => dist(a, [1], (pr, lam) => { let c = 0, k = 0; for (; k < 1e6; k++) { c += Math.exp(k * Math.log(lam) - lam - logGamma(k + 1)); if (c >= pr - 1e-12) return k; } return k; }),
    // ── Geometric (# failures before first success) ──
    geopdf: (a) => dist(a, [0.5], (k, p) => { k = Math.round(k); return k < 0 ? 0 : p * (1 - p) ** k; }),
    geocdf: (a) => dist(a, [0.5], (k, p) => { k = Math.floor(k); return k < 0 ? 0 : 1 - (1 - p) ** (k + 1); }),
    // ── Weibull (scale a, shape b) ──
    wblpdf: (a) => dist(a, [1, 1], (x, A, B) => x < 0 ? 0 : (B / A) * (x / A) ** (B - 1) * Math.exp(-((x / A) ** B))),
    wblcdf: (a) => dist(a, [1, 1], (x, A, B) => x < 0 ? 0 : 1 - Math.exp(-((x / A) ** B))),
    wblinv: (a) => dist(a, [1, 1], (p, A, B) => A * (-Math.log(1 - p)) ** (1 / B)),
    // ── Rayleigh (scale b) ──
    raylpdf: (a) => dist(a, [1], (x, b) => x < 0 ? 0 : (x / (b * b)) * Math.exp(-(x * x) / (2 * b * b))),
    raylcdf: (a) => dist(a, [1], (x, b) => x < 0 ? 0 : 1 - Math.exp(-(x * x) / (2 * b * b))),
    raylinv: (a) => dist(a, [1], (p, b) => b * Math.sqrt(-2 * Math.log(1 - p))),

    // ── distribution statistics [M,V] = *stat(params) ──
    normstat: (a, n) => statRet(n, asScalar(a[0]), (a.length >= 2 ? asScalar(a[1]) : 1) ** 2),
    expstat: (a, n) => { const mu = asScalar(a[0]); return statRet(n, mu, mu * mu); },
    poisstat: (a, n) => { const l = asScalar(a[0]); return statRet(n, l, l); },
    binostat: (a, n) => { const N = asScalar(a[0]), p = asScalar(a[1]); return statRet(n, N * p, N * p * (1 - p)); },
    unifstat: (a, n) => { const lo = asScalar(a[0]), hi = asScalar(a[1]); return statRet(n, (lo + hi) / 2, (hi - lo) ** 2 / 12); },
    gamstat: (a, n) => { const k = asScalar(a[0]), th = a.length >= 2 ? asScalar(a[1]) : 1; return statRet(n, k * th, k * th * th); },
    betastat: (a, n) => { const p = asScalar(a[0]), q = asScalar(a[1]); return statRet(n, p / (p + q), (p * q) / ((p + q) ** 2 * (p + q + 1))); },
    chi2stat: (a, n) => { const k = asScalar(a[0]); return statRet(n, k, 2 * k); },
    tstat: (a, n) => { const v = asScalar(a[0]); return statRet(n, 0, v > 2 ? v / (v - 2) : NaN); },
    fstat: (a, n) => { const d1 = asScalar(a[0]), d2 = asScalar(a[1]); return statRet(n, d2 > 2 ? d2 / (d2 - 2) : NaN, d2 > 4 ? (2 * d2 * d2 * (d1 + d2 - 2)) / (d1 * (d2 - 2) ** 2 * (d2 - 4)) : NaN); },
    lognstat: (a, n) => { const mu = asScalar(a[0]), s = a.length >= 2 ? asScalar(a[1]) : 1; return statRet(n, Math.exp(mu + s * s / 2), (Math.exp(s * s) - 1) * Math.exp(2 * mu + s * s)); },
    geostat: (a, n) => { const p = asScalar(a[0]); return statRet(n, (1 - p) / p, (1 - p) / (p * p)); },
    raylstat: (a, n) => { const b = asScalar(a[0]); return statRet(n, b * Math.sqrt(Math.PI / 2), (4 - Math.PI) / 2 * b * b); },
    wblstat: (a, n) => { const A = asScalar(a[0]), B = asScalar(a[1]); const g1 = Math.exp(logGamma(1 + 1 / B)), g2 = Math.exp(logGamma(1 + 2 / B)); return statRet(n, A * g1, A * A * (g2 - g1 * g1)); },

    // ── Type-1 extreme value (Gumbel, minima): evpdf(x,mu,sigma) — z=(x-mu)/sigma ──
    evpdf: (a) => dist(a, [0, 1], (x, mu, s) => (s <= 0 ? NaN : (() => { const z = (x - mu) / s; return Math.exp(z - Math.exp(z)) / s; })())),
    evcdf: (a) => dist(a, [0, 1], (x, mu, s) => (s <= 0 ? NaN : -Math.expm1(-Math.exp((x - mu) / s)))),
    evinv: (a) => dist(a, [0, 1], (p, mu, s) => mu + s * Math.log(-Math.log(1 - p))),
    evstat: (a, n) => { const mu = asScalar(a[0]), s = asScalar(a[1]); return statRet(n, mu - 0.5772156649015329 * s, (Math.PI * s) ** 2 / 6); },

    // ── generalized extreme value: gevpdf(x,k,sigma,mu) — note param order (k,sigma,mu) ──
    gevpdf: (a) => dist(a, [0, 1, 0], (x, k, s, mu) => {
      if (s <= 0) return NaN; const z = (x - mu) / s;
      if (k === 0) return Math.exp(-Math.exp(-z) - z) / s;
      const t = k * z; if (1 + t <= 0) return 0; const lt = Math.log1p(t);
      return Math.exp(-Math.exp(-(1 / k) * lt) - (1 + 1 / k) * lt) / s;
    }),
    gevcdf: (a) => dist(a, [0, 1, 0], (x, k, s, mu) => {
      if (s <= 0) return NaN; const z = (x - mu) / s;
      if (k === 0) return Math.exp(-Math.exp(-z));
      const t = k * z; if (1 + t <= 0) return k > 0 ? 0 : 1;
      return Math.exp(-Math.exp(-(1 / k) * Math.log1p(t)));
    }),
    gevinv: (a) => dist(a, [0, 1, 0], (p, k, s, mu) => {
      if (s <= 0) return NaN;
      const z = k === 0 ? -Math.log(-Math.log(p)) : Math.expm1(-k * Math.log(-Math.log(p))) / k;
      return mu + s * z;
    }),
    gevstat: (a, n) => {
      const k = asScalar(a[0]), s = asScalar(a[1]), mu = asScalar(a[2]);
      const mm = Math.abs(k) < 1e-8 ? 0.5772156649015329 : (k < 1 ? Math.expm1(logGamma(1 - k)) / k : Infinity);
      const vv = Math.abs(k) < 5e-6 ? Math.PI ** 2 / 6 : (k < 0.5 ? (Math.expm1(logGamma(1 - 2 * k)) - Math.expm1(2 * logGamma(1 - k))) / (k * k) : Infinity);
      return statRet(n, mu + s * mm, s * s * vv);
    },

    // ── generalized Pareto: gppdf(x,k,sigma,theta) — param order (k,sigma,theta) ──
    gppdf: (a) => dist(a, [0, 1, 0], (x, k, s, th) => {
      if (s <= 0) return NaN; const z = (x - th) / s; if (z < 0) return 0;
      if (k === 0) return Math.exp(-z) / s;
      const t = k * z; if (1 + t <= 0) return 0;
      return Math.exp((-1 - 1 / k) * Math.log1p(t)) / s;
    }),
    gpcdf: (a) => dist(a, [0, 1, 0], (x, k, s, th) => {
      if (s <= 0) return NaN; const z = (x - th) / s; if (z < 0) return 0;
      if (k === 0) return -Math.expm1(-z);
      const t = k * z; if (1 + t <= 0) return 1;
      return -Math.expm1((-1 / k) * Math.log1p(t));
    }),
    gpinv: (a) => dist(a, [0, 1, 0], (p, k, s, th) => {
      if (s <= 0) return NaN;
      const z = k === 0 ? -Math.log1p(-p) : Math.expm1(-k * Math.log1p(-p)) / k;
      return th + s * z;
    }),
    gpstat: (a, n) => {
      const k = asScalar(a[0]), s = asScalar(a[1]), th = asScalar(a[2]);
      return statRet(n, th + s * (k < 1 ? 1 / (1 - k) : Infinity), s * s * (k < 0.5 ? 1 / ((1 - k) ** 2 * (1 - 2 * k)) : Infinity));
    },

    // ── negative binomial: nbinpdf(x,r,p) ──
    nbinpdf: (a) => dist(a, [1, 0.5], (x, r, p) => (x < 0 || x !== Math.round(x) ? 0 : Math.exp(logGamma(r + x) - logGamma(r) - logGamma(x + 1) + r * Math.log(p) + x * Math.log1p(-p)))),
    nbincdf: (a) => dist(a, [1, 0.5], (x, r, p) => { x = Math.floor(x); return x < 0 ? 0 : betainc(p, r, x + 1); }),
    nbininv: (a) => dist(a, [1, 0.5], (pr, r, p) => { if (pr <= 0) return 0; if (pr >= 1) return Infinity; let x = 0; while (betainc(p, r, x + 1) < pr - 1e-12 && x < 1e7) x++; return x; }),
    nbinstat: (a, n) => { const r = asScalar(a[0]), p = asScalar(a[1]); return statRet(n, r * (1 - p) / p, r * (1 - p) / (p * p)); },

    // ── hypergeometric: hygepdf(x,M,K,N) — M pop, K successes, N draws ──
    hygepdf: (a) => dist(a, [10, 5, 5], (x, M, K, N) => { x = Math.round(x); if (x < Math.max(0, N - (M - K)) || x > Math.min(K, N)) return 0; return Math.exp(lchoose(K, x) + lchoose(M - K, N - x) - lchoose(M, N)); }),
    hygecdf: (a) => dist(a, [10, 5, 5], (x, M, K, N) => { x = Math.floor(x); const lo = Math.max(0, N - (M - K)), hi = Math.min(K, N); if (x < lo) return 0; if (x >= hi) return 1; let s = 0; for (let i = lo; i <= x; i++) s += Math.exp(lchoose(K, i) + lchoose(M - K, N - i) - lchoose(M, N)); return Math.min(1, s); }),
    hygeinv: (a) => dist(a, [10, 5, 5], (pr, M, K, N) => { const lo = Math.max(0, N - (M - K)), hi = Math.min(K, N); if (pr <= 0) return lo; let s = 0; for (let x = lo; x <= hi; x++) { s += Math.exp(lchoose(K, x) + lchoose(M - K, N - x) - lchoose(M, N)); if (s >= pr - 1e-12) return x; } return hi; }),
    hygestat: (a, n) => { const M = asScalar(a[0]), K = asScalar(a[1]), N = asScalar(a[2]); return statRet(n, N * K / M, N * (K / M) * ((M - K) / M) * ((M - N) / (M - 1))); },

    // ── noncentral chi-square: ncx2pdf(x,v,delta) — Poisson(delta/2)-mixture of central chi2 ──
    ncx2pdf: (a) => dist(a, [1, 0], (x, v, d) => {
      if (x < 0) return 0; let s = 0; const lh = d / 2;
      for (let j = 0; j < 500; j++) { const w = Math.exp(poisLogW(j, lh)); const k = v + 2 * j; s += w * Math.exp((k / 2 - 1) * Math.log(x) - x / 2 - (k / 2) * Math.LN2 - logGamma(k / 2)); if (j > lh && w < 1e-15) break; }
      return s;
    }),
    ncx2cdf: (a) => dist(a, [1, 0], (x, v, d) => ncx2cdfS(x, v, d)),
    ncx2inv: (a) => dist(a, [1, 0], (p, v, d) => invCdf(p, (x) => ncx2cdfS(x, v, d), 0, Infinity)),
    ncx2stat: (a, n) => { const v = asScalar(a[0]), d = asScalar(a[1]); return statRet(n, v + d, 2 * (v + 2 * d)); },

    // ── noncentral F: ncfpdf(x,v1,v2,delta) — Poisson(delta/2)-mixture of central F ──
    ncfpdf: (a) => dist(a, [1, 1, 0], (x, v1, v2, d) => {
      if (x <= 0) return 0; let s = 0; const lh = d / 2;
      for (let j = 0; j < 500; j++) { const w = Math.exp(poisLogW(j, lh)); const a1 = v1 + 2 * j, y = x * v1 / a1; s += w * (v1 / a1) * Math.exp((a1 / 2) * Math.log(a1 / v2) + (a1 / 2 - 1) * Math.log(y) - ((a1 + v2) / 2) * Math.log(1 + a1 * y / v2) - logBeta(a1 / 2, v2 / 2)); if (j > lh && w < 1e-15) break; }
      return s;
    }),
    ncfcdf: (a) => dist(a, [1, 1, 0], (x, v1, v2, d) => ncfcdfS(x, v1, v2, d)),
    ncfinv: (a) => dist(a, [1, 1, 0], (p, v1, v2, d) => invCdf(p, (x) => ncfcdfS(x, v1, v2, d), 0, Infinity)),
    ncfstat: (a, n) => {
      const v1 = asScalar(a[0]), v2 = asScalar(a[1]), d = asScalar(a[2]);
      const mean = v2 > 2 ? v2 * (v1 + d) / (v1 * (v2 - 2)) : NaN;
      const varr = v2 > 4 ? 2 * ((v1 + d) ** 2 + (v1 + 2 * d) * (v2 - 2)) / ((v2 - 2) ** 2 * (v2 - 4)) * (v2 / v1) ** 2 : NaN;
      return statRet(n, mean, varr);
    },

    // ── noncentral t: nctpdf(x,v,delta) — Lenth Poisson-series ──
    nctpdf: (a) => dist(a, [1, 0], (x, v, d) => nctpdfS(x, v, d)),
    nctcdf: (a) => dist(a, [1, 0], (x, v, d) => nctcdfS(x, v, d)),
    nctinv: (a) => dist(a, [1, 0], (p, v, d) => invCdf(p, (x) => nctcdfS(x, v, d), -Infinity, Infinity)),
    nctstat: (a, n) => {
      const v = asScalar(a[0]), d = asScalar(a[1]);
      const mean = v > 1 ? d * Math.sqrt(v / 2) * Math.exp(logGamma((v - 1) / 2) - logGamma(v / 2)) : NaN;
      const varr = v > 2 ? v * (1 + d * d) / (v - 2) - mean * mean : NaN;
      return statRet(n, mean, varr);
    },

    // ── MLE distribution fits (closed-form) ──
    expfit: (a) => { const x = toArray(m(a[0])); return ret(scalar(x.reduce((s, v) => s + v, 0) / x.length)); },
    poissfit: (a) => { const x = toArray(m(a[0])); return ret(scalar(x.reduce((s, v) => s + v, 0) / x.length)); },
    raylfit: (a) => { const x = toArray(m(a[0])); return ret(scalar(Math.sqrt(x.reduce((s, v) => s + v * v, 0) / (2 * x.length)))); },
    normfit: (a, n) => { const x = toArray(m(a[0])), N = x.length, mu = x.reduce((s, v) => s + v, 0) / N; const sd = Math.sqrt(x.reduce((s, v) => s + (v - mu) ** 2, 0) / (N - 1)); return n >= 2 ? Promise.resolve([scalar(mu), scalar(sd)]) : ret(scalar(mu)); },
    unifit: (a, n) => { const x = toArray(m(a[0])), lo = Math.min(...x), hi = Math.max(...x); return n >= 2 ? Promise.resolve([scalar(lo), scalar(hi)]) : ret(scalar(lo)); },
    binofit: (a) => { const M = m(a[0]), xa = toArray(M), na = toArray(m(a[1])); const out = xa.map((v, i) => v / (na.length === 1 ? na[0] : na[i])); return ret(out.length === 1 ? scalar(out[0]) : (M.rows === 1 ? rowVec(out) : colVec(out))); },
    wblfit: (a) => {
      const x = toArray(m(a[0])), N = x.length, meanlnx = x.reduce((s, v) => s + Math.log(v), 0) / N;
      let b = 1;
      for (let it = 0; it < 200; it++) {
        let s0 = 0, s1 = 0, s2 = 0; for (const v of x) { const xb = v ** b, lv = Math.log(v); s0 += xb; s1 += xb * lv; s2 += xb * lv * lv; }
        const f = s1 / s0 - 1 / b - meanlnx, df = (s2 * s0 - s1 * s1) / (s0 * s0) + 1 / (b * b), bn = b - f / df;
        if (Math.abs(bn - b) < 1e-12) { b = bn; break; } b = bn;
      }
      const aPar = (x.reduce((s, v) => s + v ** b, 0) / N) ** (1 / b);
      return ret(rowVec([aPar, b]));
    },
    lognfit: (a) => { const lx = toArray(m(a[0])).map(Math.log), N = lx.length, mu = lx.reduce((s, v) => s + v, 0) / N; return ret(rowVec([mu, Math.sqrt(lx.reduce((s, v) => s + (v - mu) ** 2, 0) / (N - 1))])); },
    gamfit: (a) => {
      const x = toArray(m(a[0])), N = x.length, meanx = x.reduce((s, v) => s + v, 0) / N, s = Math.log(meanx) - x.reduce((sm, v) => sm + Math.log(v), 0) / N;
      let ah = (3 - s + Math.sqrt((s - 3) ** 2 + 24 * s)) / (12 * s);
      for (let it = 0; it < 100; it++) { const f = Math.log(ah) - digamma(ah) - s, df = 1 / ah - trigamma(ah), an = ah - f / df; if (Math.abs(an - ah) < 1e-13) { ah = an; break; } ah = an; }
      return ret(rowVec([ah, meanx / ah]));
    },
    // ── multivariate normal pdf via Cholesky: (2π)^(-d/2)|Σ|^(-1/2) exp(-½(x-μ)Σ⁻¹(x-μ)ᵀ) ──
    mvnpdf: (a) => {
      const Xm = m(a[0]), d = Xm.cols, rowsX = matRows(Xm);
      const mu = a.length > 1 && isMat(a[1]) && m(a[1]).rows * m(a[1]).cols > 0 ? toArray(m(a[1])) : new Array(d).fill(0);
      let S: number[][];
      if (a.length > 2 && isMat(a[2]) && m(a[2]).rows * m(a[2]).cols > 0) { const Sm = m(a[2]); if (Sm.rows === 1 || Sm.cols === 1) { const dv = toArray(Sm); S = Array.from({ length: d }, (_, i) => Array.from({ length: d }, (_, j) => (i === j ? dv[i] : 0))); } else S = matRows(Sm); }
      else S = Array.from({ length: d }, (_, i) => Array.from({ length: d }, (_, j) => (i === j ? 1 : 0)));
      const L = Array.from({ length: d }, () => new Array(d).fill(0)); let logdet = 0;
      for (let i = 0; i < d; i++) for (let j = 0; j <= i; j++) { let s = S[i][j]; for (let k = 0; k < j; k++) s -= L[i][k] * L[j][k]; if (i === j) { L[i][j] = Math.sqrt(s); logdet += 2 * Math.log(L[i][j]); } else L[i][j] = s / L[j][j]; }
      const c = -0.5 * d * Math.log(2 * Math.PI) - 0.5 * logdet;
      const out = rowsX.map((x) => { const dx = x.map((v, i) => v - mu[i]), y = new Array(d); for (let i = 0; i < d; i++) { let s = dx[i]; for (let k = 0; k < i; k++) s -= L[i][k] * y[k]; y[i] = s / L[i][i]; } return Math.exp(c - 0.5 * y.reduce((acc, v) => acc + v * v, 0)); });
      return ret(out.length === 1 ? scalar(out[0]) : colVec(out));
    },
    // ── copulastat: rank correlation of a copula (Kendall default; Spearman via 'type') ──
    copulastat: (a) => {
      const rho = asScalar(a[1]); let type = 'kendall';
      for (let i = 2; i + 1 < a.length; i++) if (isMat(a[i]) && (a[i] as Mat).isChar && asString(a[i]).toLowerCase() === 'type') type = asString(a[i + 1]).toLowerCase();
      return ret(scalar(type === 'spearman' ? (6 / Math.PI) * Math.asin(rho / 2) : (2 / Math.PI) * Math.asin(rho)));
    },
    // ── ecdf: empirical (Kaplan-Meier) CDF, no censoring. Returns [f,x] with f(1)=0, x(1)=x(2). ──
    ecdf: (a) => {
      const x = toArray(m(a[0])).slice().sort((p, q) => p - q), N = x.length;
      const fv: number[] = [0], xv: number[] = [x[0]];
      for (let i = 0; i < N; i++) { if (i > 0 && x[i] === x[i - 1]) continue; xv.push(x[i]); let cnt = 0; for (let j = 0; j < N; j++) if (x[j] <= x[i]) cnt++; fv.push(cnt / N); }
      return Promise.resolve([colVec(fv), colVec(xv)]);
    },
    // ── betafit: MLE of Beta(a,b). Solve ψ(a)-ψ(a+b)=mean(log x), ψ(b)-ψ(a+b)=mean(log(1-x)). ──
    betafit: (a) => {
      const x = toArray(m(a[0])), N = x.length;
      const L1 = x.reduce((s, v) => s + Math.log(v), 0) / N, L2 = x.reduce((s, v) => s + Math.log(1 - v), 0) / N;
      const mu = x.reduce((s, v) => s + v, 0) / N, vr = x.reduce((s, v) => s + (v - mu) ** 2, 0) / N, t = mu * (1 - mu) / vr - 1;
      let ah = Math.max(mu * t, 1e-3), bh = Math.max((1 - mu) * t, 1e-3);
      for (let it = 0; it < 200; it++) {
        const psiab = digamma(ah + bh), trab = trigamma(ah + bh);
        const g1 = digamma(ah) - psiab - L1, g2 = digamma(bh) - psiab - L2;
        const j11 = trigamma(ah) - trab, j12 = -trab, j22 = trigamma(bh) - trab;
        const det = j11 * j22 - j12 * j12, da = (j22 * g1 - j12 * g2) / det, db = (j11 * g2 - j12 * g1) / det;
        ah = Math.max(ah - da, 1e-6); bh = Math.max(bh - db, 1e-6);
        if (Math.abs(da) + Math.abs(db) < 1e-12) break;
      }
      return ret(rowVec([ah, bh]));
    },
    // ── nbinfit: MLE of negative binomial NB(r,p). Profile p=r/(r+x̄); Newton on dispersion r. ──
    nbinfit: (a) => {
      const x = toArray(m(a[0])), N = x.length, xbar = x.reduce((s, v) => s + v, 0) / N;
      const vr = x.reduce((s, v) => s + (v - xbar) ** 2, 0) / N;
      let r = vr > xbar ? xbar * xbar / (vr - xbar) : 100;
      for (let it = 0; it < 200; it++) {
        let g = N * Math.log(r / (r + xbar)), gp = N * xbar / (r * (r + xbar));
        for (const xi of x) { g += digamma(r + xi) - digamma(r); gp += trigamma(r + xi) - trigamma(r); }
        const rn = r - g / gp; if (!isFinite(rn) || rn <= 0) { r = r / 2; continue; }
        if (Math.abs(rn - r) < 1e-10) { r = rn; break; } r = rn;
      }
      return ret(rowVec([r, r / (r + xbar)]));
    },
    // ── descriptive: skewness/kurtosis (population, flag=1 default; flag=0 bias-corrected) ──
    skewness: (a) => {
      const x = toArray(m(a[0])), flag = a.length > 1 && isMat(a[1]) && m(a[1]).rows * m(a[1]).cols > 0 ? asScalar(a[1]) : 1, N = x.length;
      const mu = x.reduce((s, v) => s + v, 0) / N, m2 = x.reduce((s, v) => s + (v - mu) ** 2, 0) / N, m3 = x.reduce((s, v) => s + (v - mu) ** 3, 0) / N;
      let g = m3 / m2 ** 1.5; if (flag === 0) g = Math.sqrt(N * (N - 1)) / (N - 2) * g;
      return ret(scalar(g));
    },
    kurtosis: (a) => {
      const x = toArray(m(a[0])), flag = a.length > 1 && isMat(a[1]) && m(a[1]).rows * m(a[1]).cols > 0 ? asScalar(a[1]) : 1, N = x.length;
      const mu = x.reduce((s, v) => s + v, 0) / N, m2 = x.reduce((s, v) => s + (v - mu) ** 2, 0) / N, m4 = x.reduce((s, v) => s + (v - mu) ** 4, 0) / N;
      let k = m4 / m2 ** 2; if (flag === 0) k = ((N + 1) * k - 3 * (N - 1)) * (N - 1) / ((N - 2) * (N - 3)) + 3;
      return ret(scalar(k));
    },

    // ── moments ──
    /** moment(X,order) — central moment of the given order (along columns / vector). */
    moment: (a) => ret(colReduceNan(m(a[0]), (c) => { const k = Math.round(asScalar(a[1])); const mu = mean_(c); return c.reduce((s, x) => s + (x - mu) ** k, 0) / c.length; })),
    /** trimmean(X,percent) — mean after trimming percent/2 % from each tail. */
    trimmean: (a) => ret(colReduceNan(m(a[0]), (c) => { const p = asScalar(a[1]) / 100; const s = c.slice().sort((x, y) => x - y); const k = Math.floor((s.length * p) / 2); const t = s.slice(k, s.length - k); return t.reduce((q, x) => q + x, 0) / t.length; })),

    // ── descriptive (NaN-aware + extras) ──
    nanmean: (a) => ret(colReduceNan(m(a[0]), (c) => mean_(noNan(c)))),
    nansum: (a) => ret(colReduceNan(m(a[0]), (c) => noNan(c).reduce((s, x) => s + x, 0))),
    nanstd: (a) => ret(colReduceNan(m(a[0]), (c) => Math.sqrt(var_(noNan(c))))),
    nanvar: (a) => ret(colReduceNan(m(a[0]), (c) => var_(noNan(c)))),
    nanmedian: (a) => ret(colReduceNan(m(a[0]), (c) => median_(noNan(c)))),
    nanmax: (a) => ret(colReduceNan(m(a[0]), (c) => Math.max(...noNan(c)))),
    nanmin: (a) => ret(colReduceNan(m(a[0]), (c) => Math.min(...noNan(c)))),
    range: (a) => ret(colReduceNan(m(a[0]), (c) => { const n = noNan(c); return Math.max(...n) - Math.min(...n); })),
    /** tabulate(x) → [value count percent] matrix (numeric output form). */
    tabulate: (a) => {
      const x = toArray(m(a[0])).map((v) => Math.round(v));
      const counts = new Map<number, number>(); for (const v of x) counts.set(v, (counts.get(v) ?? 0) + 1);
      const vals = [...counts.keys()].sort((p, q) => p - q); const n = x.length;
      const out = zeros(vals.length, 3);
      vals.forEach((v, i) => { out.data[i] = v; out.data[i + vals.length] = counts.get(v)!; out.data[i + 2 * vals.length] = 100 * counts.get(v)! / n; });
      return ret(out);
    },

    // ── distances / clustering ──
    /** pdist(X[,metric]) → 1×(m choose 2) row of pairwise distances (i<j, column-major upper). */
    pdist: (a) => {
      const X = matRows(m(a[0])); const name = a.length >= 2 ? asString(a[1]).toLowerCase() : 'euclidean';
      const f = METRICS[name] ?? METRICS.euclidean; const p = a.length >= 3 ? asScalar(a[2]) : 2;
      const out: number[] = [];
      for (let i = 0; i < X.length; i++) for (let j = i + 1; j < X.length; j++) out.push(f(X[i], X[j], p));
      return ret(rowVec(out));
    },
    /** squareform: vector↔symmetric distance matrix. */
    squareform: (a) => {
      const A = m(a[0]);
      if (A.rows === 1 || A.cols === 1) {
        const v = toArray(A); const n = Math.round((1 + Math.sqrt(1 + 8 * v.length)) / 2); const D = zeros(n, n); let k = 0;
        for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { D.data[i + j * n] = v[k]; D.data[j + i * n] = v[k]; k++; }
        return ret(D);
      }
      const M = matRows(A); const out: number[] = [];
      for (let i = 0; i < M.length; i++) for (let j = i + 1; j < M.length; j++) out.push(M[i][j]);
      return ret(rowVec(out));
    },
    /** linkage(Y[,method]) → (m-1)×3 agglomerative linkage matrix (single/complete/average). */
    linkage: (a) => {
      const A = m(a[0]); let n: number, D: number[][];
      if (A.rows === 1 || A.cols === 1) { const v = toArray(A); n = Math.round((1 + Math.sqrt(1 + 8 * v.length)) / 2); D = Array.from({ length: n }, () => new Array(n).fill(0)); let k = 0; for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { D[i][j] = v[k]; D[j][i] = v[k]; k++; } }
      else { const X = matRows(A); n = X.length; D = Array.from({ length: n }, () => new Array(n).fill(0)); for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) { const d = METRICS.euclidean(X[i], X[j]); D[i][j] = d; D[j][i] = d; } }
      const method = a.length >= 2 ? asString(a[1]).toLowerCase() : 'single';
      const id = Array.from({ length: n }, (_, i) => i); const size = new Array(n).fill(1);
      const active = new Set(id); const dist2: Map<string, number> = new Map();
      const key = (i: number, j: number) => i < j ? `${i},${j}` : `${j},${i}`;
      for (let i = 0; i < n; i++) for (let j = i + 1; j < n; j++) dist2.set(key(i, j), D[i][j]);
      const Z: number[][] = []; let next = n;
      while (active.size > 1) {
        let best = Infinity, bi = -1, bj = -1; const arr = [...active];
        for (let x = 0; x < arr.length; x++) for (let y = x + 1; y < arr.length; y++) { const d = dist2.get(key(arr[x], arr[y]))!; if (d < best) { best = d; bi = arr[x]; bj = arr[y]; } }
        Z.push([Math.min(bi, bj), Math.max(bi, bj), best]);   // 0-based cluster ids (caller +1s for MATLAB)
        active.delete(bi); active.delete(bj);
        for (const k of active) {
          const dik = dist2.get(key(bi, k))!, djk = dist2.get(key(bj, k))!;
          const d = method === 'complete' ? Math.max(dik, djk) : method === 'average' ? (dik * size[bi] + djk * size[bj]) / (size[bi] + size[bj]) : Math.min(dik, djk);
          dist2.set(key(next, k), d);
        }
        size[next] = size[bi] + size[bj]; active.add(next); next++;
      }
      const out = zeros(Z.length, 3); Z.forEach((r, i) => { out.data[i] = r[0] + 1; out.data[i + Z.length] = r[1] + 1; out.data[i + 2 * Z.length] = r[2]; });
      return ret(out);
    },
    /** kmeans(X,k) → [idx, C, sumd]. Lloyd's algorithm, k-means++ init (labels may permute vs MATLAB; sizes match). */
    kmeans: (a, nargout) => {
      const X = matRows(m(a[0])); const k = Math.round(asScalar(a[1])); const n = X.length, dim = X[0]?.length ?? 0;
      const cen: number[][] = []; cen.push(X[Math.floor(rand() * n)].slice());
      while (cen.length < k) { const d2 = X.map((p) => Math.min(...cen.map((c) => METRICS.squaredeuclidean(p, c)))); const tot = d2.reduce((s, x) => s + x, 0); let r = rand() * tot, idx = 0; while (idx < n - 1 && (r -= d2[idx]) > 0) idx++; cen.push(X[idx].slice()); }
      const idx = new Array(n).fill(0);
      for (let it = 0; it < 100; it++) {
        let moved = false;
        for (let i = 0; i < n; i++) { let bj = 0, bd = Infinity; for (let j = 0; j < k; j++) { const d = METRICS.squaredeuclidean(X[i], cen[j]); if (d < bd) { bd = d; bj = j; } } if (idx[i] !== bj) { idx[i] = bj; moved = true; } }
        for (let j = 0; j < k; j++) { const pts = X.filter((_, i) => idx[i] === j); if (!pts.length) continue; for (let d = 0; d < dim; d++) cen[j][d] = pts.reduce((s, p) => s + p[d], 0) / pts.length; }
        if (!moved) break;
      }
      const idxOut = colVec(idx.map((j) => j + 1));
      if (nargout < 2) return ret(idxOut);
      const C = zeros(k, dim); for (let j = 0; j < k; j++) for (let d = 0; d < dim; d++) C.data[j + d * k] = cen[j][d];
      if (nargout < 3) return Promise.resolve([idxOut, C]);
      const sumd = colVec(Array.from({ length: k }, (_, j) => X.reduce((s, p, i) => s + (idx[i] === j ? METRICS.squaredeuclidean(p, cen[j]) : 0), 0)));
      return Promise.resolve([idxOut, C, sumd]);
    },
    // ── distribution objects (exercise the generic ClassV object type) ──
    /** makedist('Normal','mu',0,'sigma',1) → a prob.<Name>Distribution object. */
    makedist: (a) => {
      const spec = DISTS[normDistName(asString(a[0]))];
      if (!spec) throw new MatError(`makedist: unsupported distribution '${asString(a[0])}'`);
      const props = new Map<string, Value>([['DistributionName', str(`${spec.display}Distribution`)]]);
      spec.params.forEach((p, i) => props.set(p, scalar(spec.defaults[i])));
      for (let i = 1; i + 1 < a.length; i += 2) { const k = asString(a[i]); if (spec.params.includes(k)) props.set(k, scalar(asScalar(a[i + 1]))); }
      return ret(makeObject(`prob.${spec.display}Distribution`, props));
    },
    /** pdf(pd,x) or pdf('Name',x,p1,p2) — probability density. */
    pdf: (a) => { const { spec, vals, rest } = resolveDist(a); return ret(map(m(rest[0]), (x) => spec.pdf(x, ...vals))); },
    /** cdf(pd,x) or cdf('Name',x,p1,p2) — cumulative probability. */
    cdf: (a) => { const { spec, vals, rest } = resolveDist(a); return ret(map(m(rest[0]), (x) => spec.cdf(x, ...vals))); },
    /** icdf(pd,p) or icdf('Name',p,p1,p2) — inverse cumulative (quantile). */
    icdf: (a) => { const { spec, vals, rest } = resolveDist(a); return ret(map(m(rest[0]), (p) => spec.inv(p, ...vals))); },
  },
  help: {
    ttest: 'One-sample and paired-sample t-test', ttest2: 'Two-sample t-test',
    ranksum: 'Wilcoxon rank-sum (Mann-Whitney U) test', signrank: 'Wilcoxon signed-rank test',
    adtest: 'Anderson-Darling goodness-of-fit test', hmmestimate: 'Hidden Markov model parameter estimates from state path', linhyptest: 'Linear hypothesis test',
    ansaribradley: 'Ansari-Bradley test for equal dispersions', nearcorr: 'Nearest correlation matrix by Frobenius distance',
    sampsizepwr: 'Sample size and power of test', knntest: 'k-nearest-neighbor two-sample test',
    normpdf: 'Normal probability density function', normcdf: 'Normal cumulative distribution function', norminv: 'Normal inverse cumulative distribution function',
    tpdf: "Student's t probability density function", tcdf: "Student's t cumulative distribution function", tinv: "Student's t inverse cumulative distribution function",
    chi2pdf: 'Chi-square probability density function', chi2cdf: 'Chi-square cumulative distribution function', chi2inv: 'Chi-square inverse cumulative distribution function',
    gampdf: 'Gamma probability density function', gamcdf: 'Gamma cumulative distribution function', gaminv: 'Gamma inverse cumulative distribution function',
    exppdf: 'Exponential probability density function', expcdf: 'Exponential cumulative distribution function', expinv: 'Exponential inverse cumulative distribution function',
    betapdf: 'Beta probability density function', betacdf: 'Beta cumulative distribution function', betainv: 'Beta inverse cumulative distribution function',
    fpdf: 'F probability density function', fcdf: 'F cumulative distribution function', finv: 'F inverse cumulative distribution function',
    unifpdf: 'Continuous uniform probability density function', unifcdf: 'Continuous uniform cumulative distribution function', unifinv: 'Continuous uniform inverse cumulative distribution function',
    lognpdf: 'Lognormal probability density function', logncdf: 'Lognormal cumulative distribution function', logninv: 'Lognormal inverse cumulative distribution function',
    binopdf: 'Binomial probability density function', binocdf: 'Binomial cumulative distribution function', binoinv: 'Binomial inverse cumulative distribution function',
    poisspdf: 'Poisson probability density function', poisscdf: 'Poisson cumulative distribution function', poissinv: 'Poisson inverse cumulative distribution function',
    geopdf: 'Geometric probability density function', geocdf: 'Geometric cumulative distribution function',
    wblpdf: 'Weibull probability density function', wblcdf: 'Weibull cumulative distribution function', wblinv: 'Weibull inverse cumulative distribution function',
    raylpdf: 'Rayleigh probability density function', raylcdf: 'Rayleigh cumulative distribution function', raylinv: 'Rayleigh inverse cumulative distribution function',
    normstat: 'Normal mean and variance', expstat: 'Exponential mean and variance', poisstat: 'Poisson mean and variance', binostat: 'Binomial mean and variance',
    unifstat: 'Uniform mean and variance', gamstat: 'Gamma mean and variance', betastat: 'Beta mean and variance', chi2stat: 'Chi-square mean and variance',
    tstat: "Student's t mean and variance", fstat: 'F mean and variance', lognstat: 'Lognormal mean and variance', geostat: 'Geometric mean and variance',
    raylstat: 'Rayleigh mean and variance', wblstat: 'Weibull mean and variance', moment: 'Central moment of a sample', trimmean: 'Trimmed mean',
    evpdf: 'Extreme value probability density function', evcdf: 'Extreme value cumulative distribution function', evinv: 'Extreme value inverse cumulative distribution function', evstat: 'Extreme value mean and variance',
    gevpdf: 'Generalized extreme value probability density function', gevcdf: 'Generalized extreme value cumulative distribution function', gevinv: 'Generalized extreme value inverse cumulative distribution function', gevstat: 'Generalized extreme value mean and variance',
    gppdf: 'Generalized Pareto probability density function', gpcdf: 'Generalized Pareto cumulative distribution function', gpinv: 'Generalized Pareto inverse cumulative distribution function', gpstat: 'Generalized Pareto mean and variance',
    nbinpdf: 'Negative binomial probability density function', nbincdf: 'Negative binomial cumulative distribution function', nbininv: 'Negative binomial inverse cumulative distribution function', nbinstat: 'Negative binomial mean and variance',
    hygepdf: 'Hypergeometric probability density function', hygecdf: 'Hypergeometric cumulative distribution function', hygeinv: 'Hypergeometric inverse cumulative distribution function', hygestat: 'Hypergeometric mean and variance',
    ncx2pdf: 'Noncentral chi-square probability density function', ncx2cdf: 'Noncentral chi-square cumulative distribution function', ncx2inv: 'Noncentral chi-square inverse cumulative distribution function', ncx2stat: 'Noncentral chi-square mean and variance',
    ncfpdf: 'Noncentral F probability density function', ncfcdf: 'Noncentral F cumulative distribution function', ncfinv: 'Noncentral F inverse cumulative distribution function', ncfstat: 'Noncentral F mean and variance',
    nctpdf: 'Noncentral t probability density function', nctcdf: 'Noncentral t cumulative distribution function', nctinv: 'Noncentral t inverse cumulative distribution function', nctstat: 'Noncentral t mean and variance',
    expfit: 'Exponential parameter estimate (MLE)', poissfit: 'Poisson parameter estimate (MLE)', raylfit: 'Rayleigh parameter estimate (MLE)', normfit: 'Normal parameter estimates (mean, std)', unifit: 'Uniform parameter estimates (min, max)',
    binofit: 'Binomial proportion estimate', wblfit: 'Weibull parameter estimates (MLE)', skewness: 'Sample skewness', kurtosis: 'Sample kurtosis',
    lognfit: 'Lognormal parameter estimates (MLE)', gamfit: 'Gamma parameter estimates (MLE)',
    mvnpdf: 'Multivariate normal probability density function', copulastat: 'Copula rank correlation',
    ecdf: 'Empirical cumulative distribution function',
    betafit: 'Beta distribution parameter estimates (MLE)', nbinfit: 'Negative binomial parameter estimates (MLE)',
    nanmean: 'Mean, ignoring NaN values', nansum: 'Sum, ignoring NaN values', nanstd: 'Standard deviation, ignoring NaN values', nanvar: 'Variance, ignoring NaN values',
    nanmedian: 'Median, ignoring NaN values', nanmax: 'Maximum, ignoring NaN values', nanmin: 'Minimum, ignoring NaN values',
    range: 'Range of values (max − min)', tabulate: 'Frequency table',
    pdist: 'Pairwise distance between observations', squareform: 'Format distance matrix', linkage: 'Agglomerative hierarchical cluster tree', kmeans: 'k-means clustering',
    makedist: 'Create a probability distribution object', pdf: 'Probability density function', cdf: 'Cumulative distribution function', icdf: 'Inverse cumulative distribution function',
  },
};

// Deterministic-but-seedable PRNG so kmeans is reproducible within a session (xorshift32).
let _seed = 0x2545f491;
function rand(): number { _seed ^= _seed << 13; _seed ^= _seed >>> 17; _seed ^= _seed << 5; return ((_seed >>> 0) % 1e9) / 1e9; }
