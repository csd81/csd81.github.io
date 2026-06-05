// Statistics and Machine Learning Toolbox — first reference implementation of a ToolboxModule.
// Self-contained special-function helpers (logGamma/gammainc/betainc/erf) keep the module
// independent of builtins.ts internals. Distribution pdf/cdf/inv functions, descriptive stats,
// and pdist/squareform/linkage/kmeans. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, isObject, makeObject, str, scalar, zeros, rowVec, colVec, toArray, map, numel,
  asString, asScalar, toMat as m, MatError,
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

export const STATS: ToolboxModule = {
  id: 'stats',
  name: 'Statistics and Machine Learning Toolbox',
  docBase: 'https://www.mathworks.com/help/stats/',
  builtins: {
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
