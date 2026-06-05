// Signal Processing Toolbox — computable subset: window functions, dB conversions, and a few
// filters/generators. Window math validated against Octave core (hamming/hanning/blackman/
// bartlett/sinc) and closed-form definitions. See plan §7 and tb/signal.VALIDATION.md.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, isStr, scalar, colVec, rowVec, toArray, map,
  asString, asScalar, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
/** Reduce a vector to a scalar, or a matrix column-wise to a row vector (MATLAB dim convention). */
function reduceCols(M: Mat, f: (x: number[]) => number): Value {
  if (M.rows === 1 || M.cols === 1) return scalar(f(toArray(M)));
  const out: number[] = [];
  for (let c = 0; c < M.cols; c++) { const col: number[] = []; for (let r = 0; r < M.rows; r++) col.push(M.data[r + c * M.rows]); out.push(f(col)); }
  return rowVec(out);
}
// ── pulse-metric engine (shared/measure): histogram state levels + mid-reference crossings ──
/** Two-state levels by histogram mode method (signal.internal.getLevelsByHistogram). */
function stateLevelsOf(x: number[]): [number, number] {
  const nbins = 100, ymin = Math.min(...x), ymax = Math.max(...x), dy = (ymax - ymin) / nbins;
  if (!(dy > 0)) return [ymin, ymax];
  const hist = new Array(nbins).fill(0);
  for (const xi of x) { let b = Math.floor((xi - ymin) / dy); if (b < 0) b = 0; if (b >= nbins) b = nbins - 1; hist[b]++; }
  let iLow = hist.findIndex((h) => h > 0), iHigh = nbins - 1; while (iHigh >= 0 && hist[iHigh] === 0) iHigh--;
  if (iLow < 0) return [NaN, NaN];
  const iLow1 = iLow + 1, iHigh1 = iHigh + 1;                       // MATLAB 1-indexed bins
  const lLow = iLow1, lHigh = iLow1 + Math.floor((iHigh1 - iLow1) / 2), uLow = lHigh, uHigh = iHigh1;
  let iMax = 1, mx = -1; for (let i = lLow; i <= lHigh; i++) if (hist[i - 1] > mx) { mx = hist[i - 1]; iMax = i - lLow + 1; }
  let iMin = 1, mn = -1; for (let i = uLow; i <= uHigh; i++) if (hist[i - 1] > mn) { mn = hist[i - 1]; iMin = i - uLow + 1; }
  return [ymin + dy * (lLow + iMax - 1.5), ymin + dy * (uLow + iMin - 1.5)];
}
/** Mid-reference crossings with linear interpolation (signal.internal.getMidCross). */
function midCrossings(x: number[], t: number[]): { tm: number[]; pol: number[] } {
  const [L, U] = stateLevelsOf(x), amp = (U - L) / 100, lwr = L + 2 * amp, upr = L + 98 * amp, midRef = L + 50 * amp;
  const iState: number[] = []; for (let i = 0; i < x.length; i++) if (x[i] < lwr || x[i] > upr) iState.push(i);
  const tm: number[] = [], pol: number[] = [];
  for (let k = 0; k + 1 < iState.length; k++) {
    const iA = iState[k], iB = iState[k + 1];
    if (!((x[iA] < lwr && x[iB] > upr) || (x[iA] > upr && x[iB] < lwr))) continue;
    const p = x[iA] < lwr ? 1 : -1; let iX = -1;
    for (let i = iA; i < iB; i++) if (p > 0 ? (x[i] <= midRef && midRef < x[i + 1]) : (x[i] >= midRef && midRef > x[i + 1])) { iX = i; break; }
    if (iX < 0) continue;
    tm.push(t[iX] + (t[iX + 1] - t[iX]) * (midRef - x[iX]) / (x[iX + 1] - x[iX])); pol.push(p);
  }
  return { tm, pol };
}
/** Per-transition rise/fall metrics (signal.internal.getTransitions): 10%/90% reference crossings. */
function transitions(x: number[], t: number[]): { p: number; dur: number; slew: number }[] {
  const [L, U] = stateLevelsOf(x), amp = (U - L) / 100;
  const lwr = L + 2 * amp, upr = L + 98 * amp, loRef = L + 10 * amp, upRef = L + 90 * amp, mid = L + 50 * amp;
  const iState: number[] = []; for (let i = 0; i < x.length; i++) if (x[i] < lwr || x[i] > upr) iState.push(i);
  const out: { p: number; dur: number; slew: number }[] = [];
  for (let k = 0; k + 1 < iState.length; k++) {
    const iA = iState[k], iB = iState[k + 1];
    if (!((x[iA] < lwr && x[iB] > upr) || (x[iA] > upr && x[iB] < lwr))) continue;
    const p = x[iA] < lwr ? 1 : -1, preRef = p > 0 ? loRef : upRef, postRef = p > 0 ? upRef : loRef;
    let iRMid = -1; for (let i = iA; i < iB; i++) if (p > 0 ? (x[i] <= mid && mid < x[i + 1]) : (x[i] >= mid && mid > x[i + 1])) { iRMid = i; break; }
    if (iRMid < 0) continue;
    let iRPre = -1; for (let i = iA; i <= iRMid; i++) if (p > 0 ? x[i] < preRef : x[i] > preRef) iRPre = i;
    let iRPost = -1; for (let i = iRMid; i < iB; i++) if (p > 0 ? x[i + 1] > postRef : x[i + 1] < postRef) { iRPost = i; break; }
    if (iRPre < 0 || iRPost < 0 || iRPre + 1 >= x.length || iRPost + 1 >= x.length) continue;
    const tPre = t[iRPre] + (t[iRPre + 1] - t[iRPre]) * (preRef - x[iRPre]) / (x[iRPre + 1] - x[iRPre]);
    const tPost = t[iRPost] + (t[iRPost + 1] - t[iRPost]) * (postRef - x[iRPost]) / (x[iRPost + 1] - x[iRPost]);
    const dur = tPost - tPre; out.push({ p, dur, slew: (postRef - preRef) / dur });
  }
  return out;
}
/** Post-transition over/undershoot (signal.internal.getPostshoots): peak/dip in a 3·Duration seek
 *  window after each transition, as % of amplitude relative to the post-transition state level. */
function postShoots(x: number[], t: number[]): { os: number; us: number }[] {
  const [L, U] = stateLevelsOf(x), amp = U - L, a = (U - L) / 100;
  const lwr = L + 2 * a, upr = L + 98 * a, loRef = L + 10 * a, upRef = L + 90 * a, mid = L + 50 * a;
  const iState: number[] = []; for (let i = 0; i < x.length; i++) if (x[i] < lwr || x[i] > upr) iState.push(i);
  const trans: { p: number; iPost: number; tPost: number; dur: number; iA: number }[] = [];
  for (let k = 0; k + 1 < iState.length; k++) {
    const iA = iState[k], iB = iState[k + 1];
    if (!((x[iA] < lwr && x[iB] > upr) || (x[iA] > upr && x[iB] < lwr))) continue;
    const p = x[iA] < lwr ? 1 : -1, preRef = p > 0 ? loRef : upRef, postRef = p > 0 ? upRef : loRef;
    let iRMid = -1; for (let i = iA; i < iB; i++) if (p > 0 ? (x[i] <= mid && mid < x[i + 1]) : (x[i] >= mid && mid > x[i + 1])) { iRMid = i; break; }
    if (iRMid < 0) continue;
    let iRPre = -1; for (let i = iA; i <= iRMid; i++) if (p > 0 ? x[i] < preRef : x[i] > preRef) iRPre = i;
    let iRPost = -1; for (let i = iRMid; i < iB; i++) if (p > 0 ? x[i + 1] > postRef : x[i + 1] < postRef) { iRPost = i; break; }
    if (iRPre < 0 || iRPost < 0) continue;
    const tPre = t[iRPre] + (t[iRPre + 1] - t[iRPre]) * (preRef - x[iRPre]) / (x[iRPre + 1] - x[iRPre]);
    const tPost90 = t[iRPost] + (t[iRPost + 1] - t[iRPost]) * (postRef - x[iRPost]) / (x[iRPost + 1] - x[iRPost]);
    const postBound = p > 0 ? upr : lwr;                          // seek starts at the 98% state-bound entry (iB)
    const tPostB = t[iB - 1] + (t[iB] - t[iB - 1]) * (postBound - x[iB - 1]) / (x[iB] - x[iB - 1]);
    trans.push({ p, iPost: iB, tPost: tPostB, dur: tPost90 - tPre, iA });
  }
  const out: { os: number; us: number }[] = [];
  for (let i = 0; i < trans.length; i++) {
    const tr = trans[i], tSeek = tr.tPost + 3 * tr.dur;
    let iStop = x.length - 1; for (let j = tr.iPost; j < x.length; j++) if (t[j] > tSeek) { iStop = j; break; }
    if (i + 1 < trans.length && iStop > trans[i + 1].iA) iStop = trans[i + 1].iA;
    if (iStop > tr.iPost) iStop -= 1;
    let above = -Infinity, below = Infinity;
    for (let j = tr.iPost; j <= iStop; j++) { if (x[j] > above) above = x[j]; if (x[j] < below) below = x[j]; }
    const postState = tr.p > 0 ? U : L;
    out.push({ os: (above - postState) / amp * 100, us: (postState - below) / amp * 100 });
  }
  return out;
}
/** Settling time per transition (signal.internal.getSettling): time from the 50% crossing until
 *  the signal last exits the ±Tolerance·amplitude band around the final state, within seek dur d. */
function settling(x: number[], t: number[], d: number, tol = 2): number[] {
  const [L, U] = stateLevelsOf(x), amp = U - L, band = amp * tol / 100, a = (U - L) / 100;
  const lwr = L + 2 * a, upr = L + 98 * a, mid = L + 50 * a;
  const iState: number[] = []; for (let i = 0; i < x.length; i++) if (x[i] < lwr || x[i] > upr) iState.push(i);
  const trans: { p: number; iA: number; iB: number; tMid: number }[] = [];
  for (let k = 0; k + 1 < iState.length; k++) {
    const iA = iState[k], iB = iState[k + 1];
    if (!((x[iA] < lwr && x[iB] > upr) || (x[iA] > upr && x[iB] < lwr))) continue;
    const p = x[iA] < lwr ? 1 : -1;
    let iRMid = -1; for (let i = iA; i < iB; i++) if (p > 0 ? (x[i] <= mid && mid < x[i + 1]) : (x[i] >= mid && mid > x[i + 1])) { iRMid = i; break; }
    if (iRMid < 0) continue;
    trans.push({ p, iA, iB, tMid: t[iRMid] + (t[iRMid + 1] - t[iRMid]) * (mid - x[iRMid]) / (x[iRMid + 1] - x[iRMid]) });
  }
  const out: number[] = [];
  for (let ti = 0; ti < trans.length; ti++) {
    const tr = trans[ti], postRef = tr.p > 0 ? U : L, tFinal = tr.tMid + d;
    let iStop = -1; for (let j = tr.iB; j < x.length; j++) if (t[j] > tFinal) { iStop = j; break; }
    if (iStop < 0 || (ti + 1 < trans.length && iStop > trans[ti + 1].iA) || tFinal < t[tr.iB]) { out.push(NaN); continue; }
    let iLast = -1; for (let i = tr.iA; i <= iStop; i++) if (Math.abs(x[i] - postRef) > band) iLast = i;
    if (iLast < 0 || iLast === iStop || iLast + 1 >= x.length) { out.push(NaN); continue; }
    const intercept = Math.sign(x[iLast] - postRef) * band, yp = x[iLast] - postRef, yq = x[iLast + 1] - postRef;
    out.push(t[iLast] + (t[iLast + 1] - t[iLast]) * (intercept - yp) / (yq - yp) - tr.tMid);
  }
  return out;
}
/** Resolve the time base: t-vector, scalar Fs, or default sample numbers 1..n. */
function timeBase(a: Value[], n: number): number[] {
  if (a.length > 1 && isMat(a[1])) { const M = m(a[1]); if (M.rows * M.cols === 1) { const Fs = asScalar(a[1]); return Array.from({ length: n }, (_, i) => i / Fs); } return toArray(M); }
  return Array.from({ length: n }, (_, i) => i + 1);
}
/** Σ bₙ·e^{-jnw} (digital, ascending powers) → [re, im]. */
function cpoly(b: number[], w: number): [number, number] { let re = 0, im = 0; for (let n = 0; n < b.length; n++) { re += b[n] * Math.cos(n * w); im -= b[n] * Math.sin(n * w); } return [re, im]; }
/** Σ c[i]·(jw)^(L-1-i) (analog, descending powers) → [re, im]. */
function cpolyS(c: number[], w: number): [number, number] { let re = 0, im = 0; const L = c.length; for (let i = 0; i < L; i++) { const p = L - 1 - i, mag = c[i] * w ** p; switch (((p % 4) + 4) % 4) { case 0: re += mag; break; case 1: im += mag; break; case 2: re -= mag; break; default: im -= mag; } } return [re, im]; }

// ── LPC helpers (Levinson-Durbin + step-down/step-up) ──
/** Levinson-Durbin: autocorrelation r → AR poly a (a[0]=1), final error e, reflection coeffs k. */
function levinsonDurbin(r: number[], p: number): { a: number[]; e: number; k: number[] } {
  const a = [1]; let e = r[0]; const ks: number[] = [];
  for (let i = 1; i <= p; i++) { let acc = r[i]; for (let j = 1; j < i; j++) acc += a[j] * r[i - j]; const k = -acc / e; ks.push(k); const na = a.slice(); for (let j = 1; j < i; j++) na[j] = a[j] + k * a[i - j]; na[i] = k; a.length = 0; a.push(...na); e *= 1 - k * k; }
  return { a, e, k: ks };
}
/** Step-down recursion: AR poly a → reflection coeffs k[] and the order-i polynomials. */
function stepDown(a: number[]): { k: number[]; polys: number[][] } {
  const p = a.length - 1; let cur = a.slice(); const k = new Array(p); const polys: number[][] = new Array(p + 1); polys[p] = a.slice();
  for (let i = p; i >= 1; i--) { const ki = cur[i]; k[i - 1] = ki; const prev = new Array(i); prev[0] = 1; for (let j = 1; j < i; j++) prev[j] = (cur[j] - ki * cur[i - j]) / (1 - ki * ki); polys[i - 1] = prev; cur = prev; }
  return { k, polys };
}
/** Step-up: reflection coeffs k → AR poly a. */
function stepUp(k: number[]): number[] { let a = [1]; for (let i = 0; i < k.length; i++) { const ki = k[i]; const na = a.slice(); na.push(0); for (let j = 1; j <= i; j++) na[j] = a[j] + ki * a[i + 1 - j]; na[i + 1] = ki; a = na; } return a; }
/** AR poly a + final error → autocorrelation sequence. */
function poly2acSeq(a: number[], eFinal: number): number[] {
  const { k, polys } = stepDown(a); const p = a.length - 1; const e = new Array(p + 1); e[p] = eFinal;
  for (let i = p; i >= 1; i--) e[i - 1] = e[i] / (1 - k[i - 1] * k[i - 1]);
  const r = new Array(p + 1); r[0] = e[0];
  for (let i = 1; i <= p; i++) { let s = 0; const ap = polys[i - 1]; for (let j = 1; j < i; j++) s += ap[j] * r[i - j]; r[i] = -k[i - 1] * e[i - 1] - s; }
  return r;
}
/** Invert a small n×n matrix (Gauss-Jordan). */
function matInv(M: number[][]): number[][] {
  const n = M.length; const A = M.map((row, i) => [...row, ...Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))]);
  for (let c = 0; c < n; c++) { let piv = c; for (let r = c + 1; r < n; r++) if (Math.abs(A[r][c]) > Math.abs(A[piv][c])) piv = r; [A[c], A[piv]] = [A[piv], A[c]]; const d = A[c][c]; for (let j = 0; j < 2 * n; j++) A[c][j] /= d; for (let r = 0; r < n; r++) if (r !== c) { const f = A[r][c]; for (let j = 0; j < 2 * n; j++) A[r][j] -= f * A[c][j]; } }
  return A.map((row) => row.slice(n));
}
/** Savitzky-Golay projection matrix B (F×F); B[mid] is the smoothing weights. */
function sgolayMat(order: number, F: number): number[][] {
  const mid = (F - 1) / 2; const V: number[][] = []; for (let i = 0; i < F; i++) { V[i] = []; for (let j = 0; j <= order; j++) V[i][j] = (i - mid) ** j; }
  const VtV: number[][] = []; for (let a = 0; a <= order; a++) { VtV[a] = []; for (let b = 0; b <= order; b++) { let s = 0; for (let i = 0; i < F; i++) s += V[i][a] * V[i][b]; VtV[a][b] = s; } }
  const G = matInv(VtV); const B: number[][] = [];
  for (let i = 0; i < F; i++) { B[i] = []; for (let l = 0; l < F; l++) { let s = 0; for (let a = 0; a <= order; a++) for (let b = 0; b <= order; b++) s += V[i][a] * G[a][b] * V[l][b]; B[i][l] = s; } }
  return B;
}

/** Modified Bessel function I0(x) (series), for the Kaiser window. */
function besselI0(x: number): number { let s = 1, t = 1; for (let k = 1; k < 60; k++) { t *= (x / (2 * k)) ** 2; s += t; if (t < s * 1e-16) break; } return s; }

/** Build a length-L window column from a sample function g(n, N) where N is the symmetric span.
 *  'periodic'/'symmetric' (default) selects N = L (periodic) or L-1 (symmetric). */
function window(a: Value[], optIdx: number, g: (n: number, N: number) => number): Promise<Value[]> {
  const L = Math.round(asScalar(a[0]));
  if (L <= 0) return ret(colVec([]));
  if (L === 1) return ret(colVec([1]));
  const periodic = a.length > optIdx && (isStr(a[optIdx]) || (isMat(a[optIdx]) && (a[optIdx] as Mat).isChar)) && asString(a[optIdx]).toLowerCase().startsWith('p');
  const N = periodic ? L : L - 1;
  const w: number[] = []; for (let n = 0; n < L; n++) w.push(g(n, N));
  return ret(colVec(w));
}

export const SIGNAL: ToolboxModule = {
  id: 'signal',
  name: 'Signal Processing Toolbox',
  docBase: 'https://www.mathworks.com/help/signal/',
  builtins: {
    // ── window functions (return L×1 columns, MATLAB convention) ──
    rectwin: (a) => ret(colVec(new Array(Math.max(0, Math.round(asScalar(a[0])))).fill(1))),
    hann: (a) => window(a, 1, (n, N) => 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / N)),
    hanning: (a) => window(a, 1, (n, N) => 0.5 - 0.5 * Math.cos((2 * Math.PI * n) / N)),
    hamming: (a) => window(a, 1, (n, N) => 0.54 - 0.46 * Math.cos((2 * Math.PI * n) / N)),
    blackman: (a) => window(a, 1, (n, N) => 0.42 - 0.5 * Math.cos((2 * Math.PI * n) / N) + 0.08 * Math.cos((4 * Math.PI * n) / N)),
    blackmanharris: (a) => window(a, 1, (n, N) => { const x = (2 * Math.PI * n) / N; return 0.35875 - 0.48829 * Math.cos(x) + 0.14128 * Math.cos(2 * x) - 0.01168 * Math.cos(3 * x); }),
    nuttallwin: (a) => window(a, 1, (n, N) => { const x = (2 * Math.PI * n) / N; return 0.3635819 - 0.4891775 * Math.cos(x) + 0.1365995 * Math.cos(2 * x) - 0.0106411 * Math.cos(3 * x); }),
    flattopwin: (a) => window(a, 1, (n, N) => { const x = (2 * Math.PI * n) / N; return 0.21557895 - 0.41663158 * Math.cos(x) + 0.277263158 * Math.cos(2 * x) - 0.083578947 * Math.cos(3 * x) + 0.006947368 * Math.cos(4 * x); }),
    bartlett: (a) => window(a, 1, (n, N) => 1 - Math.abs((n - N / 2) / (N / 2))),
    triang: (a) => { const L = Math.round(asScalar(a[0])); const w: number[] = []; for (let n = 1; n <= L; n++) w.push(L % 2 ? 1 - Math.abs((2 * n - L - 1) / (L + 1)) : 1 - Math.abs((2 * n - L - 1) / L)); return ret(colVec(w)); },
    // ── windows ported from the pure .m sources (parzen/bohman/taylor) ──
    parzenwin: (a) => {
      const L = Math.round(asScalar(a[0])); if (L <= 0) return ret(zeros(0, 1)); if (L === 1) return ret(colVec([1]));
      const w: number[] = [], h = (L - 1) / 2, q = (L - 1) / 4;
      for (let k = 0; k < L; k++) { const t = Math.abs(k - h) / L; w.push(Math.abs(k - h) <= q ? 1 - 24 * t * t + 48 * t * t * t : 2 * (1 - 2 * t) ** 3); }
      return ret(colVec(w));
    },
    bohmanwin: (a) => {
      const L = Math.round(asScalar(a[0])); if (L <= 0) return ret(zeros(0, 1)); if (L === 1) return ret(colVec([1]));
      const w: number[] = [];
      for (let k = 0; k < L; k++) { if (k === 0 || k === L - 1) { w.push(0); continue; } const ax = Math.abs(-1 + (2 * k) / (L - 1)); w.push((1 - ax) * Math.cos(Math.PI * ax) + Math.sin(Math.PI * ax) / Math.PI); }
      return ret(colVec(w));
    },
    taylorwin: (a) => {
      const L = Math.round(asScalar(a[0])); if (L <= 0) return ret(zeros(0, 1)); if (L === 1) return ret(colVec([1]));
      const nbar = a.length > 1 && isMat(a[1]) ? Math.round(asScalar(a[1])) : 4;
      const sll = a.length > 2 && isMat(a[2]) ? asScalar(a[2]) : -30;
      const A = Math.acosh(Math.pow(10, -sll / 20)) / Math.PI, A2 = A * A;
      const sp2 = (nbar * nbar) / (A2 + (nbar - 0.5) ** 2);
      const Fm: number[] = [0];
      for (let mm = 1; mm <= nbar - 1; mm++) {
        let num = 1; for (let i = 1; i <= nbar - 1; i++) num *= 1 - (mm * mm / sp2) / (A2 + (i - 0.5) ** 2);
        let den = 1; for (let j = 1; j <= nbar - 1; j++) if (j !== mm) den *= 1 - (mm * mm) / (j * j);
        Fm[mm] = ((mm % 2 === 1 ? 1 : -1) * num) / den;
      }
      const w: number[] = [];
      for (let k = 0; k < L; k++) { const twoX = (2 * k - L + 1) / L; let s = 1; for (let mm = 1; mm <= nbar - 1; mm++) s += Fm[mm] * Math.cos(Math.PI * mm * twoX); w.push(s); }
      return ret(colVec(w));
    },
    // ── Dolph-Chebyshev window (MEX chebwinx → documented algorithm; at = sidelobe dB, default 100) ──
    chebwin: (a) => {
      const N = Math.round(asScalar(a[0])); if (N <= 0) return ret(zeros(0, 1)); if (N === 1) return ret(colVec([1]));
      const at = a.length > 1 && isMat(a[1]) ? Math.abs(asScalar(a[1])) : 100;
      const order = N - 1, beta = Math.cosh(Math.acosh(Math.pow(10, at / 20)) / order);
      const pre: number[] = [], pim: number[] = [];
      for (let k = 0; k < N; k++) { const x = beta * Math.cos((Math.PI * k) / N); pim.push(0); pre.push(x > 1 ? Math.cosh(order * Math.acosh(x)) : x < -1 ? (2 * (N % 2) - 1) * Math.cosh(order * Math.acosh(-x)) : Math.cos(order * Math.acos(x))); }
      const reFft = (re: number[], im: number[]) => { const out: number[] = []; for (let n = 0; n < N; n++) { let s = 0; for (let k = 0; k < N; k++) { const ang = (2 * Math.PI * k * n) / N; s += re[k] * Math.cos(ang) + im[k] * Math.sin(ang); } out.push(s); } return out; };
      let w: number[];
      if (N % 2 === 1) { const fr = reFft(pre, pim), n = (N + 1) >> 1, half = fr.slice(0, n); w = [...half.slice(1, n).reverse(), ...half]; }
      else { const re: number[] = [], im: number[] = []; for (let k = 0; k < N; k++) { const ph = (Math.PI / N) * k; re.push(pre[k] * Math.cos(ph)); im.push(pre[k] * Math.sin(ph)); } const fr = reFft(re, im), n = (N >> 1) + 1; w = [...fr.slice(1, n).reverse(), ...fr.slice(1, n)]; }
      const mx = Math.max(...w); return ret(colVec(w.map((v) => v / mx)));
    },
    // ── distances (MEX dtwmex/edrmex → documented dynamic-programming algorithms) ──
    dtw: (a) => {
      const x = toArray(m(a[0])), y = toArray(m(a[1])), nx = x.length, ny = y.length;
      const D = Array.from({ length: nx + 1 }, () => new Array(ny + 1).fill(Infinity)); D[0][0] = 0;
      for (let i = 1; i <= nx; i++) for (let j = 1; j <= ny; j++) D[i][j] = Math.abs(x[i - 1] - y[j - 1]) + Math.min(D[i - 1][j], D[i][j - 1], D[i - 1][j - 1]);
      return ret(scalar(D[nx][ny]));
    },
    edr: (a) => {
      const x = toArray(m(a[0])), y = toArray(m(a[1])), tol = a.length > 2 ? asScalar(a[2]) : 0, nx = x.length, ny = y.length;
      const D = Array.from({ length: nx + 1 }, () => new Array(ny + 1).fill(0));
      for (let i = 0; i <= nx; i++) D[i][0] = i; for (let j = 0; j <= ny; j++) D[0][j] = j;
      for (let i = 1; i <= nx; i++) for (let j = 1; j <= ny; j++) { const sub = Math.abs(x[i - 1] - y[j - 1]) <= tol ? 0 : 1; D[i][j] = Math.min(D[i - 1][j - 1] + sub, D[i - 1][j] + 1, D[i][j - 1] + 1); }
      return ret(scalar(D[nx][ny]));
    },
    // ── signal measures (pure .m), column-wise like MATLAB ──
    peak2peak: (a) => ret(reduceCols(m(a[0]), (x) => Math.max(...x) - Math.min(...x))),
    peak2rms: (a) => ret(reduceCols(m(a[0]), (x) => Math.max(...x.map(Math.abs)) / Math.sqrt(x.reduce((s, v) => s + v * v, 0) / x.length))),
    rssq: (a) => ret(reduceCols(m(a[0]), (x) => Math.sqrt(x.reduce((s, v) => s + v * v, 0)))),
    // ── equivalent noise bandwidth of a window: enbw(w)=N*Σw²/(Σw)²; enbw(w,fs)=fs*Σw²/(Σw)² ──
    enbw: (a) => {
      const w = toArray(m(a[0])), sw = w.reduce((s, v) => s + v, 0), sw2 = w.reduce((s, v) => s + v * v, 0);
      const scale = a.length > 1 && isMat(a[1]) ? asScalar(a[1]) : w.length;
      return ret(scalar(scale * sw2 / (sw * sw)));
    },
    // ── pulse metrics (shared/measure engine: histogram state levels + 50% crossings) ──
    statelevels: (a) => { const [L, U] = stateLevelsOf(toArray(m(a[0]))); return ret(rowVec([L, U])); },
    midcross: (a) => { const x = toArray(m(a[0])); const { tm } = midCrossings(x, timeBase(a, x.length)); return ret(colVec(tm)); },
    pulsewidth: (a) => {
      const x = toArray(m(a[0])); const { tm, pol } = midCrossings(x, timeBase(a, x.length));
      const w: number[] = []; for (let i = 0; i + 1 < pol.length; i++) if (pol[i] > 0 && pol[i + 1] < 0) w.push(tm[i + 1] - tm[i]);
      return ret(colVec(w));
    },
    pulseperiod: (a) => {
      const x = toArray(m(a[0])); const { tm, pol } = midCrossings(x, timeBase(a, x.length));
      const pos = tm.filter((_, i) => pol[i] > 0); const p: number[] = []; for (let i = 1; i < pos.length; i++) p.push(pos[i] - pos[i - 1]);
      return ret(colVec(p));
    },
    dutycycle: (a) => {
      const x = toArray(m(a[0])); const { tm, pol } = midCrossings(x, timeBase(a, x.length));
      const w: number[] = [], pos: number[] = [];
      for (let i = 0; i < pol.length; i++) { if (pol[i] > 0) pos.push(tm[i]); if (i + 1 < pol.length && pol[i] > 0 && pol[i + 1] < 0) w.push(tm[i + 1] - tm[i]); }
      const d: number[] = []; for (let i = 0; i < w.length && i + 1 < pos.length; i++) d.push(w[i] / (pos[i + 1] - pos[i]));
      return ret(colVec(d));
    },
    // ── transition metrics (signal.internal.getTransitions: 10%→90% reference crossings) ──
    risetime: (a) => { const x = toArray(m(a[0])); return ret(colVec(transitions(x, timeBase(a, x.length)).filter((d) => d.p > 0).map((d) => d.dur))); },
    falltime: (a) => { const x = toArray(m(a[0])); return ret(colVec(transitions(x, timeBase(a, x.length)).filter((d) => d.p < 0).map((d) => d.dur))); },
    slewrate: (a) => { const x = toArray(m(a[0])); return ret(colVec(transitions(x, timeBase(a, x.length)).map((d) => d.slew))); },
    overshoot: (a) => { const x = toArray(m(a[0])); return ret(colVec(postShoots(x, timeBase(a, x.length)).map((s) => s.os))); },
    undershoot: (a) => { const x = toArray(m(a[0])); return ret(colVec(postShoots(x, timeBase(a, x.length)).map((s) => s.us))); },
    settlingtime: (a) => {
      const x = toArray(m(a[0]));
      const t = a.length >= 3 ? timeBase(a, x.length) : Array.from({ length: x.length }, (_, i) => i + 1);
      const d = asScalar(a[a.length >= 3 ? 2 : 1]);
      return ret(colVec(settling(x, t, d)));
    },
    barthannwin: (a) => window(a, 1, (n, N) => { const r = n / N - 0.5; return 0.62 - 0.48 * Math.abs(r) + 0.38 * Math.cos(2 * Math.PI * r); }),
    gausswin: (a) => { const L = Math.round(asScalar(a[0])); const alpha = a.length >= 2 ? asScalar(a[1]) : 2.5; const N = L - 1; const w: number[] = []; for (let n = 0; n < L; n++) { const x = (n - N / 2) / (N / 2); w.push(Math.exp(-0.5 * (alpha * x) ** 2)); } return ret(colVec(L === 1 ? [1] : w)); },
    kaiser: (a) => { const L = Math.round(asScalar(a[0])); const beta = a.length >= 2 ? asScalar(a[1]) : 0.5; const N = L - 1; const i0b = besselI0(beta); const w: number[] = []; for (let n = 0; n < L; n++) { const r = (2 * n) / N - 1; w.push(besselI0(beta * Math.sqrt(1 - r * r)) / i0b); } return ret(colVec(L === 1 ? [1] : w)); },
    tukeywin: (a) => { const L = Math.round(asScalar(a[0])); const r = a.length >= 2 ? asScalar(a[1]) : 0.5; const N = L - 1; const w: number[] = []; for (let n = 0; n < L; n++) { const x = n / N; if (x < r / 2) w.push(0.5 * (1 + Math.cos(Math.PI * (2 * x / r - 1)))); else if (x <= 1 - r / 2) w.push(1); else w.push(0.5 * (1 + Math.cos(Math.PI * (2 * x / r - 2 / r + 1)))); } return ret(colVec(L === 1 ? [1] : r <= 0 ? new Array(L).fill(1) : w)); },

    // ── dB / magnitude / power conversions ──
    mag2db: (a) => ret(map(m(a[0]), (x) => 20 * Math.log10(x))),
    db2mag: (a) => ret(map(m(a[0]), (x) => 10 ** (x / 20))),
    pow2db: (a) => ret(map(m(a[0]), (x) => 10 * Math.log10(x))),
    db2pow: (a) => ret(map(m(a[0]), (x) => 10 ** (x / 10))),

    // ── generators / misc ──
    sinc: (a) => ret(map(m(a[0]), (x) => (x === 0 ? 1 : Math.sin(Math.PI * x) / (Math.PI * x)))),
    /** chirp(t,f0,t1,f1) — linear swept-frequency cosine, phase 0. */
    chirp: (a) => { const t = m(a[0]); const f0 = a.length >= 2 ? asScalar(a[1]) : 0; const t1 = a.length >= 3 ? asScalar(a[2]) : 1; const f1 = a.length >= 4 ? asScalar(a[3]) : 100; const beta = (f1 - f0) / t1; return ret(map(t, (x) => Math.cos(2 * Math.PI * (f0 * x + 0.5 * beta * x * x)))); },
    /** medfilt1(x[,n]) — 1-D order-n median filter (zero-padded, centered). */
    medfilt1: (a) => {
      const x = toArray(m(a[0])); const n = a.length >= 2 ? Math.round(asScalar(a[1])) : 3; const half = Math.floor(n / 2);
      const out = x.map((_, i) => { const w: number[] = []; for (let k = -half; k <= n - 1 - half; k++) { const j = i + k; w.push(j >= 0 && j < x.length ? x[j] : 0); } w.sort((p, q) => p - q); const mid = w.length / 2; return w.length % 2 ? w[(w.length - 1) / 2] : (w[mid - 1] + w[mid]) / 2; });
      return ret(m(a[0]).rows === 1 ? rowVec(out) : colVec(out));
    },

    // ── filter design & analysis ──
    /** [h,w] = freqz(b[,a][,n]) — digital filter frequency response over w∈[0,π), n points (def 512). */
    freqz: (a, nargout) => {
      const b = toArray(m(a[0])); const den = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).rows * (a[1] as Mat).cols ? toArray(m(a[1])) : [1];
      const N = a.length >= 3 ? Math.round(asScalar(a[2])) : 512;
      const hre = new Float64Array(N), him = new Float64Array(N), w = new Array(N);
      for (let k = 0; k < N; k++) { const wk = (k * Math.PI) / N; w[k] = wk; const nz = cpoly(b, wk), dz = cpoly(den, wk); const dn = dz[0] * dz[0] + dz[1] * dz[1]; hre[k] = (nz[0] * dz[0] + nz[1] * dz[1]) / dn; him[k] = (nz[1] * dz[0] - nz[0] * dz[1]) / dn; }
      const h = colVec(Array.from(hre)); h.idata = him;
      return nargout >= 2 ? Promise.resolve([h, colVec(w)]) : ret(h);
    },
    /** h = freqs(b,a,w) — analog filter frequency response H(jw) (b,a in descending powers). */
    freqs: (a) => {
      const b = toArray(m(a[0])), den = toArray(m(a[1])), w = toArray(m(a[2]));
      const hre = new Float64Array(w.length), him = new Float64Array(w.length);
      w.forEach((wk, k) => { const nz = cpolyS(b, wk), dz = cpolyS(den, wk); const dn = dz[0] * dz[0] + dz[1] * dz[1]; hre[k] = (nz[0] * dz[0] + nz[1] * dz[1]) / dn; him[k] = (nz[1] * dz[0] - nz[0] * dz[1]) / dn; });
      const h = (m(a[2]).rows === 1 ? rowVec(Array.from(hre)) : colVec(Array.from(hre))); h.idata = him; return ret(h);
    },
    /** fir1(n,Wn) — windowed-sinc lowpass FIR (length n+1, Hamming window, unity DC gain). */
    fir1: (a) => {
      const n = Math.round(asScalar(a[0])); const Wn = asScalar(a[1]); const M = n / 2;
      const h = new Array(n + 1); for (let k = 0; k <= n; k++) { const x = k - M; h[k] = (x === 0 ? Wn : Math.sin(Wn * Math.PI * x) / (Math.PI * x)) * (0.54 - 0.46 * Math.cos((2 * Math.PI * k) / n)); }
      const s = h.reduce((p, q) => p + q, 0); return ret(rowVec(h.map((v) => v / s)));
    },

    // ── linear prediction (LPC) ──
    /** [a,e,k] = levinson(r[,p]) — Levinson-Durbin solution of the normal equations. */
    levinson: (a, nargout) => { const r = toArray(m(a[0])); const p = a.length >= 2 && isMat(a[1]) ? Math.round(asScalar(a[1])) : r.length - 1; const res = levinsonDurbin(r, p); return nargout >= 3 ? Promise.resolve([rowVec(res.a), scalar(res.e), colVec(res.k)]) : nargout >= 2 ? Promise.resolve([rowVec(res.a), scalar(res.e)]) : ret(rowVec(res.a)); },
    /** [a,efinal] = ac2poly(r) — autocorrelation → prediction polynomial. */
    ac2poly: (a, nargout) => { const r = toArray(m(a[0])); const res = levinsonDurbin(r, r.length - 1); return nargout >= 2 ? Promise.resolve([rowVec(res.a), scalar(res.e)]) : ret(rowVec(res.a)); },
    /** r = poly2ac(a,efinal) — prediction polynomial + final error → autocorrelation. */
    poly2ac: (a) => ret(colVec(poly2acSeq(toArray(m(a[0])), a.length >= 2 && isMat(a[1]) ? asScalar(a[1]) : 1))),
    /** k = poly2rc(a) — prediction polynomial → reflection coefficients (step-down). */
    poly2rc: (a) => ret(colVec(stepDown(toArray(m(a[0]))).k)),
    /** a = rc2poly(k) — reflection coefficients → prediction polynomial (step-up). */
    rc2poly: (a) => ret(rowVec(stepUp(toArray(m(a[0]))))),

    // ── Savitzky-Golay ──
    /** B = sgolay(order,framelen) — Savitzky-Golay FIR projection matrix. */
    sgolay: (a) => { const order = Math.round(asScalar(a[0])), F = Math.round(asScalar(a[1])); const B = sgolayMat(order, F); const o = { kind: 'num' as const, rows: F, cols: F, data: new Float64Array(F * F) } as Mat; for (let i = 0; i < F; i++) for (let j = 0; j < F; j++) o.data[i + j * F] = B[i][j]; return ret(o); },
    /** sgolayfilt(x,order,framelen) — Savitzky-Golay smoothing (steady-state center row + edge rows). */
    sgolayfilt: (a) => {
      const x = toArray(m(a[0])); const order = Math.round(asScalar(a[1])), F = Math.round(asScalar(a[2])); const mid = (F - 1) / 2; const B = sgolayMat(order, F); const n = x.length; const y = new Array(n).fill(0);
      for (let i = mid; i < n - mid; i++) { let s = 0; for (let j = 0; j < F; j++) s += B[mid][j] * x[i - mid + j]; y[i] = s; }
      for (let i = 0; i < mid; i++) { let s = 0; for (let j = 0; j < F; j++) s += B[i][j] * x[j]; y[i] = s; }
      for (let i = n - mid; i < n; i++) { const rrow = i - n + F; let s = 0; for (let j = 0; j < F; j++) s += B[rrow][j] * x[n - F + j]; y[i] = s; }
      return ret(m(a[0]).rows === 1 ? rowVec(y) : colVec(y));
    },
  },
  help: {
    rectwin: 'Rectangular window', hann: 'Hann (Hanning) window', hanning: 'Hann window (symmetric)', hamming: 'Hamming window',
    blackman: 'Blackman window', blackmanharris: 'Minimum 4-term Blackman-Harris window', nuttallwin: 'Nuttall-defined 4-term Blackman-Harris window',
    flattopwin: 'Flat top weighted window', bartlett: 'Bartlett (triangular, zero endpoints) window', triang: 'Triangular window', barthannwin: 'Modified Bartlett-Hann window',
    gausswin: 'Gaussian window', kaiser: 'Kaiser window', tukeywin: 'Tukey (tapered cosine) window',
    parzenwin: 'Parzen (de la Vallée Poussin) window', bohmanwin: 'Bohman window', taylorwin: 'Taylor window',
    chebwin: 'Chebyshev (Dolph-Chebyshev) window', dtw: 'Distance between signals using dynamic time warping',
    edr: 'Edit distance on real signals', peak2peak: 'Maximum-to-minimum difference', peak2rms: 'Peak-magnitude-to-RMS ratio', rssq: 'Root-sum-of-squares level',
    statelevels: 'Estimate state-level histogram of bilevel waveform', midcross: 'Mid-reference level crossing of bilevel waveform',
    pulsewidth: 'Bilevel waveform pulse width', pulseperiod: 'Bilevel waveform pulse period', dutycycle: 'Duty cycle of pulse waveform',
    risetime: 'Rise time of positive-going bilevel waveform transitions', falltime: 'Fall time of negative-going bilevel waveform transitions', slewrate: 'Slew rate of bilevel waveform transitions',
    overshoot: 'Overshoot metrics of bilevel waveform transitions', undershoot: 'Undershoot metrics of bilevel waveform transitions',
    settlingtime: 'Settling time for bilevel waveform transitions', enbw: 'Equivalent noise bandwidth of a window',
    mag2db: 'Convert magnitude to decibels', db2mag: 'Convert decibels to magnitude', pow2db: 'Convert power to decibels', db2pow: 'Convert decibels to power',
    sinc: 'Normalized sinc function', chirp: 'Swept-frequency cosine', medfilt1: '1-D median filtering',
    freqz: 'Digital filter frequency response', freqs: 'Analog filter frequency response', fir1: 'Window-based FIR filter design',
    levinson: 'Levinson-Durbin recursion', ac2poly: 'Autocorrelation to prediction polynomial', poly2ac: 'Prediction polynomial to autocorrelation',
    poly2rc: 'Prediction polynomial to reflection coefficients', rc2poly: 'Reflection coefficients to prediction polynomial',
    sgolay: 'Savitzky-Golay FIR smoothing matrix', sgolayfilt: 'Savitzky-Golay filtering',
  },
};
