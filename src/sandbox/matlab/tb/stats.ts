// Statistics and Machine Learning Toolbox — first reference implementation of a ToolboxModule.
// Self-contained special-function helpers (logGamma/gammainc/betainc/erf) keep the module
// independent of builtins.ts internals. Distribution pdf/cdf/inv functions, descriptive stats,
// and pdist/squareform/linkage/kmeans. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, scalar, zeros, rowVec, colVec, toArray, map, numel,
  asString, asScalar, toMat as m,
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
    /** zscore is base MATLAB; provide normalize-by-population option here is unnecessary. */
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
    nanmean: 'Mean, ignoring NaN values', nansum: 'Sum, ignoring NaN values', nanstd: 'Standard deviation, ignoring NaN values', nanvar: 'Variance, ignoring NaN values',
    nanmedian: 'Median, ignoring NaN values', nanmax: 'Maximum, ignoring NaN values', nanmin: 'Minimum, ignoring NaN values',
    range: 'Range of values (max − min)', tabulate: 'Frequency table',
    pdist: 'Pairwise distance between observations', squareform: 'Format distance matrix', linkage: 'Agglomerative hierarchical cluster tree', kmeans: 'k-means clustering',
  },
};

// Deterministic-but-seedable PRNG so kmeans is reproducible within a session (xorshift32).
let _seed = 0x2545f491;
function rand(): number { _seed ^= _seed << 13; _seed ^= _seed >>> 17; _seed ^= _seed << 5; return ((_seed >>> 0) % 1e9) / 1e9; }
