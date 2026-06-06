// Signal Processing Toolbox — computable subset: window functions, dB conversions, and a few
// filters/generators. Window math validated against Octave core (hamming/hanning/blackman/
// bartlett/sinc) and closed-form definitions. See plan §7 and tb/signal.VALIDATION.md.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type Cell, isMat, isStr, isCell, scalar, colVec, rowVec, toArray, map, zeros, mat,
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
// ── spectral-measure engine (signal.internal.specfreqwidth + nfft=N periodogram) ──
/** Frequency-bin widths (signal.internal.specfreqwidth): uniform one-sided grid → all df. */
function specWidth(F: number[]): number[] {
  const N = F.length, d: number[] = []; for (let i = 1; i < N; i++) d.push(F[i] - F[i - 1]);
  const mw = (F[N - 1] - F[0]) / (N - 1); return F[0] === 0 ? [...d, mw] : [mw, ...d];
}
/** Windowed one-sided periodogram with nfft = N (the measure functions' convention). */
function psdWin(x: number[], w: number[], fs?: number): { Pxx: number[]; f: number[] } {
  const N = x.length, nfft = N, half = Math.floor(nfft / 2), Fs = fs ?? 2 * Math.PI;
  const sw2 = w.reduce((s, v) => s + v * v, 0), Pxx: number[] = [], f: number[] = [];
  for (let k = 0; k <= half; k++) {
    let re = 0, im = 0;
    for (let n = 0; n < N; n++) { const ang = -2 * Math.PI * k * n / nfft, xw = x[n] * w[n]; re += xw * Math.cos(ang); im += xw * Math.sin(ang); }
    let p = (re * re + im * im) / (Fs * sw2); if (k > 0 && k < half) p *= 2;
    Pxx.push(p); f.push(fs ? k * fs / nfft : k * 2 * Math.PI / nfft);
  }
  return { Pxx, f };
}
const hammingWin = (N: number): number[] => (N === 1 ? [1] : Array.from({ length: N }, (_, n) => 0.54 - 0.46 * Math.cos(2 * Math.PI * n / (N - 1))));
/** Natural-order Walsh-Hadamard transform (unnormalized, in-place butterfly). */
function whtNat(v: number[]): number[] {
  const N = v.length, a = v.slice();
  for (let len = 1; len < N; len <<= 1) for (let i = 0; i < N; i += len << 1) for (let j = i; j < i + len; j++) { const x = a[j], y = a[j + len]; a[j] = x + y; a[j + len] = x - y; }
  return a;
}
const bitrev = (x: number, L: number): number => { let r = 0; for (let i = 0; i < L; i++) { r = (r << 1) | (x & 1); x >>= 1; } return r; };
const nextPow2Pad = (x: number[]): number[] => { const N2 = 2 ** Math.ceil(Math.log2(Math.max(1, x.length))); const o = x.slice(); while (o.length < N2) o.push(0); return o; };
// ── short-time Fourier transform helpers (stft / istft / spectrogram) ──
/** Length-N DFT of a complex column (re,im) — Σ x[n]·e^{-2πj kn/N}, k=0..N-1. Naive O(N²); N small. */
function dftCol(re: number[], im: number[], N: number): { re: number[]; im: number[] } {
  // datawrap when the segment is longer than N (computeDFT wraps to nfft)
  let xr = re, xi = im;
  if (re.length > N) { xr = new Array(N).fill(0); xi = new Array(N).fill(0); for (let n = 0; n < re.length; n++) { xr[n % N] += re[n]; xi[n % N] += im[n]; } }
  else if (re.length < N) { xr = re.concat(new Array(N - re.length).fill(0)); xi = im.concat(new Array(N - im.length).fill(0)); }
  const or: number[] = new Array(N), oi: number[] = new Array(N);
  for (let k = 0; k < N; k++) { let sr = 0, si = 0; for (let n = 0; n < N; n++) { const ang = -2 * Math.PI * k * n / N, c = Math.cos(ang), s = Math.sin(ang); sr += xr[n] * c - xi[n] * s; si += xr[n] * s + xi[n] * c; } or[k] = sr; oi[k] = si; }
  return { re: or, im: oi };
}
/** Length-N inverse DFT — (1/N)·Σ X[k]·e^{+2πj kn/N}. */
function idftCol(re: number[], im: number[], N: number): { re: number[]; im: number[] } {
  const or: number[] = new Array(N), oi: number[] = new Array(N);
  for (let n = 0; n < N; n++) { let sr = 0, si = 0; for (let k = 0; k < N; k++) { const ang = 2 * Math.PI * k * n / N, c = Math.cos(ang), s = Math.sin(ang); sr += re[k] * c - im[k] * s; si += re[k] * s + im[k] * c; } or[n] = sr / N; oi[n] = si / N; }
  return { re: or, im: oi };
}
/** psdfreqvec: full two-sided frequency vector of length nfft over [0, Fs). */
function psdfreqvecFull(nfft: number, Fs: number): number[] { const f: number[] = []; for (let k = 0; k < nfft; k++) f.push(k * Fs / nfft); return f; }
/** centerfreq: shift frequency vector so DC is centered. */
function centerFreqVec(f: number[], _Fs: number): number[] { const n = f.length, ref = n % 2 === 0 ? f[n / 2 - 1] : f[(n - 1) / 2]; return f.map((v) => v - ref); }
/** centerest column index permutation: circshift (even) / fftshift (odd). Returns new→old index map. */
function centerPerm(n: number): number[] {
  const idx: number[] = [];
  if (n % 2 === 0) { const sh = n / 2 - 1; for (let i = 0; i < n; i++) idx.push(((i - sh) % n + n) % n); }   // circshift down by sh
  else { const half = (n + 1) / 2; for (let i = 0; i < n; i++) idx.push((i + half) % n); }                    // fftshift
  return idx;
}
/** Build a complex Mat (rows×cols) column-major from per-column [re,im] arrays. */
function complexMat(cols: { re: number[]; im: number[] }[], rows: number): Mat {
  const data = new Float64Array(rows * cols.length), idata = new Float64Array(rows * cols.length);
  let any = false;
  for (let c = 0; c < cols.length; c++) for (let r = 0; r < rows; r++) { data[r + c * rows] = cols[c].re[r]; const iv = cols[c].im[r]; idata[r + c * rows] = iv; if (iv !== 0) any = true; }
  const out = mat(rows, Math.max(0, cols.length), data); if (any) out.idata = idata; return out;
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

/** Build an r×c real Mat (column-major) from an array of equal-length rows. */
function rowsToMat(rows: number[][]): Mat {
  const r = rows.length, c = r ? rows[0].length : 0, d = new Float64Array(r * c);
  for (let i = 0; i < r; i++) for (let j = 0; j < c; j++) d[i + j * r] = rows[i][j];
  return mat(r, c, d);
}
/** kaiserBeta(atten): Kaiser β for a stopband attenuation atten (dB) — signal.internal.kaiserBeta. */
function kaiserBeta(atten: number): number {
  return 0.1102 * (atten - 8.7) * (atten > 50 ? 1 : 0)
    + (0.5842 * Math.pow(atten - 21, 0.4) + 0.07886 * (atten - 21)) * (atten >= 21 && atten <= 50 ? 1 : 0);
}
/** kaislpord: FIR lowpass length estimate L and Kaiser β from band edges (normalized) + deviations. */
function kaislpord(freq1: number, freq2: number, delta1: number, delta2: number): { L: number; bta: number } {
  const delta = Math.min(delta1, delta2), atten = -20 * Math.log10(delta);
  const D = (atten - 7.95) / (2 * Math.PI * 2.285), df = Math.abs(freq2 - freq1);
  return { L: D / df + 1, bta: kaiserBeta(atten) };
}

// ── IIR filter design helpers (complex arithmetic on [re,im] pairs) ──
type Cx = [number, number];
const cAdd = (a: Cx, b: Cx): Cx => [a[0] + b[0], a[1] + b[1]];
const cSub = (a: Cx, b: Cx): Cx => [a[0] - b[0], a[1] - b[1]];
const cMul = (a: Cx, b: Cx): Cx => [a[0] * b[0] - a[1] * b[1], a[0] * b[1] + a[1] * b[0]];
const cDiv = (a: Cx, b: Cx): Cx => { const d = b[0] * b[0] + b[1] * b[1]; return [(a[0] * b[0] + a[1] * b[1]) / d, (a[1] * b[0] - a[0] * b[1]) / d]; };
/** poly(roots) → real(-ish) polynomial coefficients (descending powers), complex-aware. */
function polyFromRoots(roots: Cx[]): Cx[] {
  let c: Cx[] = [[1, 0]];
  for (const r of roots) {
    const nc: Cx[] = c.map((v) => [v[0], v[1]]); nc.push([0, 0]);
    for (let j = 0; j < c.length; j++) { const t = cMul(c[j], r); nc[j + 1] = cSub(nc[j + 1], t); }
    c = nc;
  }
  return c;
}
/** N-th order Butterworth analog lowpass prototype zeros/poles/gain (buttap). */
function buttap(n: number): { z: Cx[]; p: Cx[]; k: number } {
  const p: Cx[] = [];
  for (let i = 1; i <= n - 1; i += 2) { const th = (Math.PI * i) / (2 * n) + Math.PI / 2; p.push([Math.cos(th), Math.sin(th)]); p.push([Math.cos(th), -Math.sin(th)]); }
  if (n % 2) p.push([-1, 0]);
  // k = real(prod(-p))
  let k: Cx = [1, 0]; for (const pi of p) k = cMul(k, [-pi[0], -pi[1]]);
  return { z: [], p, k: k[0] };
}
/** N-th order Chebyshev Type I analog lowpass prototype zeros/poles/gain (cheb1ap), Rp dB ripple. */
function cheb1ap(n: number, rp: number): { z: Cx[]; p: Cx[]; k: number } {
  const epsilon = Math.sqrt(10 ** (0.1 * rp) - 1);
  const mu = Math.asinh(1 / epsilon) / n;
  // raw poles on the unit circle: exp(1i*(pi*(1:2:2n-1)/(2n) + pi/2))
  const raw: Cx[] = [];
  for (let i = 1; i <= 2 * n - 1; i += 2) { const th = (Math.PI * i) / (2 * n) + Math.PI / 2; raw.push([Math.cos(th), Math.sin(th)]); }
  // symmetrize real (mean with flip) and imag (half-difference with flip), like the .m source
  const N = raw.length, sh = Math.sinh(mu), ch = Math.cosh(mu);
  const p: Cx[] = [];
  for (let i = 0; i < N; i++) { const re = (raw[i][0] + raw[N - 1 - i][0]) / 2, im = (raw[i][1] - raw[N - 1 - i][1]) / 2; p.push([sh * re, ch * im]); }
  let k: Cx = [1, 0]; for (const pi of p) k = cMul(k, [-pi[0], -pi[1]]);
  let kr = k[0];
  if (n % 2 === 0) kr = kr / Math.sqrt(1 + epsilon * epsilon);   // even-order gain patch
  return { z: [], p, k: kr };
}
/** lp2lp on zpk: s → s/Wo. Scales zeros/poles by Wo and gain by Wo^(np-nz). */
function lp2lpZpk(z: Cx[], p: Cx[], k: number, wo: number): { z: Cx[]; p: Cx[]; k: number } {
  const zn = z.map((v): Cx => [v[0] * wo, v[1] * wo]);
  const pn = p.map((v): Cx => [v[0] * wo, v[1] * wo]);
  return { z: zn, p: pn, k: k * wo ** (p.length - z.length) };
}
/** lp2hp on zpk: s → Wo/s. New zeros Wo./z (+ zeros at origin to match), poles Wo./p,
 *  gain k·real(prod(-z)/prod(-p)). */
function lp2hpZpk(z: Cx[], p: Cx[], k: number, wo: number): { z: Cx[]; p: Cx[]; k: number } {
  let pz: Cx = [1, 0]; for (const zi of z) pz = cMul(pz, [-zi[0], -zi[1]]);
  let pp: Cx = [1, 0]; for (const pi of p) pp = cMul(pp, [-pi[0], -pi[1]]);
  const kgain = k * cDiv(pz, pp)[0];
  const zn = z.map((v): Cx => cDiv([wo, 0], v));
  const pn = p.map((v): Cx => cDiv([wo, 0], v));
  while (zn.length < pn.length) zn.push([0, 0]);   // append zeros at origin
  return { z: zn, p: pn, k: kgain };
}
/** bilinear on zpk (Fs prewarped externally): s-plane → z-plane (signal/bilinear.m zpk branch). */
function bilinearZpk(z: Cx[], p: Cx[], k: number, fs: number): { z: Cx[]; p: Cx[]; k: number } {
  const sf = 2 * fs;
  let prodz: Cx = [1, 0]; const zd: Cx[] = [];
  if (z.length) { for (const zi of z) { prodz = cMul(prodz, cSub([sf, 0], zi)); zd.push(cDiv(cAdd([1, 0], [zi[0] / sf, zi[1] / sf]), cSub([1, 0], [zi[0] / sf, zi[1] / sf]))); } }
  let prodp: Cx = [1, 0]; const pd: Cx[] = [];
  if (p.length) { for (const pi of p) { prodp = cMul(prodp, cSub([sf, 0], pi)); pd.push(cDiv(cAdd([1, 0], [pi[0] / sf, pi[1] / sf]), cSub([1, 0], [pi[0] / sf, pi[1] / sf]))); } }
  const kd = cDiv([k * prodz[0], k * prodz[1]], prodp)[0];
  while (zd.length < pd.length) zd.push([-1, 0]);   // pad with z = -1 (Nyquist)
  return { z: zd, p: pd, k: kd };
}
/** zpk → [b,a] transfer-function (descending powers), taking the real part. */
function zpk2tf(z: Cx[], p: Cx[], k: number): { b: number[]; a: number[] } {
  const a = polyFromRoots(p).map((c) => c[0]);
  const bz = polyFromRoots(z).map((c) => c[0] * k);
  const b = new Array(p.length - z.length).fill(0).concat(bz);   // left-pad to match a
  return { b, a };
}

/** One-dimensional digital filter (Direct Form II Transposed); returns y and final states zf. */
function filterDf2t(b: number[], a: number[], x: number[], zi?: number[]): { y: number[]; zf: number[] } {
  const a0 = a[0];
  const bn = b.map((v) => v / a0), an = a.map((v) => v / a0);
  const nb = bn.length, na = an.length, n = Math.max(nb, na);
  const bb = bn.slice(); while (bb.length < n) bb.push(0);
  const aa = an.slice(); while (aa.length < n) aa.push(0);
  const z = new Array(n - 1).fill(0); if (zi) for (let i = 0; i < z.length && i < zi.length; i++) z[i] = zi[i];
  const y = new Array(x.length);
  for (let m2 = 0; m2 < x.length; m2++) {
    const xm = x[m2];
    const ym = bb[0] * xm + (z[0] ?? 0);
    for (let i = 1; i < n - 1; i++) z[i - 1] = bb[i] * xm + z[i] - aa[i] * ym;
    if (n - 1 >= 1) z[n - 2] = bb[n - 1] * xm - aa[n - 1] * ym;
    y[m2] = ym;
  }
  return { y, zf: z };
}
/** filtfilt initial-state vector zi (steady state) for a single-section b/a (signal/filtfilt.m). */
function filtfiltZi(b: number[], a: number[]): number[] {
  const a0 = a[0]; const B = b.map((v) => v / a0), A = a.map((v) => v / a0);
  const M = Math.max(B.length, A.length);
  while (B.length < M) B.push(0); while (A.length < M) A.push(0);
  if (M <= 1) return [];
  // Solve (eye(M-1) - [-a, [eye(M-2); zeros(1,M-2)]]) zi = B(2:M) - B(1)*A(2:M)
  // a = A(2:M) as a column; the bracketed matrix is (M-1)x(M-1): col0 = -a,
  // cols 1..M-2 = eye(M-2) stacked over a zero row.
  const mm = M - 1;
  const mtx: number[][] = []; const rhs: number[] = [];
  for (let i = 0; i < mm; i++) { mtx.push(new Array(mm).fill(0)); rhs.push(B[i + 1] - B[0] * A[i + 1]); }
  for (let i = 0; i < mm; i++) {
    for (let j = 0; j < mm; j++) {
      const eyeM1 = i === j ? 1 : 0;
      let block = 0;
      if (j === 0) block = -A[i + 1];          // first column = -a
      else if (i === j - 1) block = 1;          // eye(M-2) in rows 0..M-3, cols 1..M-2
      mtx[i][j] = eyeM1 - block;
    }
  }
  // Gaussian elimination
  for (let col = 0; col < mm; col++) {
    let piv = col; for (let r = col + 1; r < mm; r++) if (Math.abs(mtx[r][col]) > Math.abs(mtx[piv][col])) piv = r;
    [mtx[col], mtx[piv]] = [mtx[piv], mtx[col]]; [rhs[col], rhs[piv]] = [rhs[piv], rhs[col]];
    const d = mtx[col][col];
    for (let r = 0; r < mm; r++) { if (r === col) continue; const f = mtx[r][col] / d; for (let c = col; c < mm; c++) mtx[r][c] -= f * mtx[col][c]; rhs[r] -= f * rhs[col]; }
  }
  return rhs.map((v, i) => v / mtx[i][i]);
}
/** Effective filter length: index of last nonzero coefficient (after normalization). */
function effLen(c: number[]): number { const mx = Math.max(...c.map(Math.abs)); if (mx === 0) return 0; let L = 0; for (let i = 0; i < c.length; i++) if (Math.abs(c[i] / mx) !== 0) L = i + 1; return L; }

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

/** frexp: x = f·2^e with f ∈ [0.5,1). Matches MATLAB [f,e] = log2(x). */
function frexp(x: number): [number, number] {
  if (x === 0) return [0, 0];
  let e = Math.floor(Math.log2(Math.abs(x))) + 1;
  let f = x / 2 ** e;
  if (Math.abs(f) >= 1) { f /= 2; e += 1; }            // guard log2 rounding at powers of two
  else if (Math.abs(f) < 0.5) { f *= 2; e -= 1; }
  return [f, e];
}
// lin2mu — linear (−1..1) → mu-law flint (0..255). Transcribed from lin2mu.m.
function lin2muOne(yv: number): number {
  const SCALE = 32768, BIAS = 132, CLIP = 32635, OFFSET = 335;
  const ys = SCALE * yv;
  const sig = Math.sign(ys) + (ys === 0 ? 1 : 0);
  const y = Math.min(Math.abs(ys), CLIP);
  const [f, e] = frexp(y + BIAS);
  return 64 * sig - 16 * e - Math.trunc(32 * f) + OFFSET;
}
// mu2lin — mu-law flint (0..255) → linear. Transcribed from mu2lin.m.
const MU2LIN_ETAB = [0, 132, 396, 924, 1980, 4092, 8316, 16764];
function mu2linOne(muv: number): number {
  const SCALE = 1 / 32768;
  const mu = 255 - muv;
  const sig = mu > 127 ? 1 : 0;
  const e = Math.trunc(mu / 16) - 8 * sig + 1;
  const f = ((mu % 16) + 16) % 16;
  const y = f * 2 ** (e + 2);
  return SCALE * (1 - 2 * sig) * (MU2LIN_ETAB[e - 1] + y);
}

export const SIGNAL: ToolboxModule = {
  id: 'signal',
  name: 'Signal Processing Toolbox',
  docBase: 'https://www.mathworks.com/help/signal/',
  builtins: {
    lin2mu: (a) => ret(map(m(a[0]), lin2muOne)),
    mu2lin: (a) => ret(map(m(a[0]), mu2linOne)),
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
    // ── periodogram PSD: periodogram(x[,window][,nfft][,fs]) → [Pxx,f], one-sided for real x ──
    periodogram: (a, nargout) => {
      const x = toArray(m(a[0])), N = x.length;
      const hasArg = (i: number) => a.length > i && isMat(a[i]) && m(a[i]).rows * m(a[i]).cols > 0;
      const w = hasArg(1) ? toArray(m(a[1])) : new Array(N).fill(1);
      const nfft = hasArg(2) ? Math.round(asScalar(a[2])) : Math.max(256, 2 ** Math.ceil(Math.log2(N)));
      const fs = hasArg(3) ? asScalar(a[3]) : null, Fs = fs ?? 2 * Math.PI;
      const half = Math.floor(nfft / 2), sumw2 = w.reduce((s, v) => s + v * v, 0);
      const Pxx: number[] = [], f: number[] = [];
      for (let k = 0; k <= half; k++) {
        let re = 0, im = 0;
        for (let n = 0; n < N; n++) { const ang = -2 * Math.PI * k * n / nfft, xw = x[n] * w[n]; re += xw * Math.cos(ang); im += xw * Math.sin(ang); }
        let p = (re * re + im * im) / (Fs * sumw2); if (k > 0 && k < half) p *= 2;
        Pxx.push(p); f.push(fs ? k * fs / nfft : k * 2 * Math.PI / nfft);
      }
      return Promise.resolve(nargout >= 2 ? [colVec(Pxx), colVec(f)] : [colVec(Pxx)]);
    },
    // ── short-time Fourier transform: stft(x[,fs],Name,Value) → [S,F,T] ──
    stft: (a, nargout) => {
      const x = toArray(m(a[0])), xIm0 = m(a[0]).idata, xIm = xIm0 ? Array.from(xIm0) : null, nx = x.length;
      // optional positional fs (numeric scalar before any Name/Value pair)
      let argStart = 1, fs: number | null = null;
      if (a.length > 1 && isMat(a[1]) && !(a[1] as Mat).isChar && m(a[1]).rows * m(a[1]).cols === 1) { fs = asScalar(a[1]); argStart = 2; }
      const opt = (name: string): Value | undefined => { for (let i = argStart; i + 1 < a.length; i += 2) if ((isStr(a[i]) || (isMat(a[i]) && (a[i] as Mat).isChar)) && asString(a[i]).toLowerCase() === name) return a[i + 1]; return undefined; };
      const winArg = opt('window');
      const win = winArg !== undefined ? toArray(m(winArg)) : Array.from({ length: 128 }, (_, n) => 0.5 - 0.5 * Math.cos(2 * Math.PI * n / 128));  // hann(128,'periodic')
      const nwin = win.length;
      const ovArg = opt('overlaplength'), noverlap = ovArg !== undefined ? Math.round(asScalar(ovArg)) : Math.floor(nwin * 0.75);
      const nfArg = opt('fftlength'), nfft = nfArg !== undefined ? Math.round(asScalar(nfArg)) : nwin;
      const isNorm = fs === null; const Fs = isNorm ? 2 : fs!;
      const frArg = opt('frequencyrange'), centeredArg = opt('centered');
      let range = 'centered';
      if (frArg !== undefined) range = asString(frArg).toLowerCase();
      else if (centeredArg !== undefined) range = asScalar(centeredArg) ? 'centered' : 'twosided';
      const hop = nwin - noverlap, nCol = Math.floor((nx - noverlap) / hop);
      const cols: { re: number[]; im: number[] }[] = [], offs: number[] = [];
      for (let c = 0; c < nCol; c++) { const off = c * hop; offs.push(off); const re: number[] = [], im: number[] = []; for (let i = 0; i < nwin; i++) { re.push(x[off + i] * win[i]); im.push((xIm ? xIm[off + i] : 0) * win[i]); } cols.push(dftCol(re, im, nfft)); }
      let full = psdfreqvecFull(nfft, Fs), fOut = full, nFreq = nfft;
      let outCols = cols;
      if (range === 'onesided') { nFreq = nfft % 2 === 0 ? nfft / 2 + 1 : (nfft + 1) / 2; fOut = full.slice(0, nFreq); outCols = cols.map((c) => ({ re: c.re.slice(0, nFreq), im: c.im.slice(0, nFreq) })); }
      else if (range === 'centered') { const perm = centerPerm(nfft); fOut = centerFreqVec(full, Fs); outCols = cols.map((c) => ({ re: perm.map((p) => c.re[p]), im: perm.map((p) => c.im[p]) })); }
      const S = complexMat(outCols, nFreq);
      if (nargout < 2) return ret(S);
      const Fcol = isNorm ? colVec(fOut.map((v) => v * Math.PI)) : colVec(fOut);   // rad/sample when normalized
      if (nargout < 3) return Promise.resolve([S, Fcol]);
      const tVals = offs.map((o) => (o + nwin / 2) / Fs * (isNorm ? Fs : 1));      // samples when normalized, else seconds
      return Promise.resolve([S, Fcol, colVec(tVals)]);
    },
    // ── inverse STFT (WOLA / OLA) → reconstructed signal ──
    istft: (a, nargout) => {
      const S = m(a[0]), nFreqRows = S.rows, nseg = S.cols;
      const Sre = toArray(S), Sim = S.idata ? Array.from(S.idata) : new Array(Sre.length).fill(0);
      let argStart = 1, fs: number | null = null;
      if (a.length > 1 && isMat(a[1]) && !(a[1] as Mat).isChar && m(a[1]).rows * m(a[1]).cols === 1) { fs = asScalar(a[1]); argStart = 2; }
      const opt = (name: string): Value | undefined => { for (let i = argStart; i + 1 < a.length; i += 2) if ((isStr(a[i]) || (isMat(a[i]) && (a[i] as Mat).isChar)) && asString(a[i]).toLowerCase() === name) return a[i + 1]; return undefined; };
      const winArg = opt('window');
      const win = winArg !== undefined ? toArray(m(winArg)) : Array.from({ length: 128 }, (_, n) => 0.5 - 0.5 * Math.cos(2 * Math.PI * n / 128));
      const nwin = win.length;
      const ovArg = opt('overlaplength'), noverlap = ovArg !== undefined ? Math.round(asScalar(ovArg)) : Math.floor(nwin * 0.75);
      const nfArg = opt('fftlength'), nfft = nfArg !== undefined ? Math.round(asScalar(nfArg)) : nwin;
      const isNorm = fs === null; const Fs = isNorm ? 2 : fs!;
      const frArg = opt('frequencyrange'), centeredArg = opt('centered');
      let range = 'centered';
      if (frArg !== undefined) range = asString(frArg).toLowerCase();
      else if (centeredArg !== undefined) range = asScalar(centeredArg) ? 'centered' : 'twosided';
      const conjSym = (() => { const c = opt('conjugatesymmetric'); return c !== undefined ? !!asScalar(c) : false; })();
      const methodArg = opt('method'), method = methodArg !== undefined ? asString(methodArg).toLowerCase() : 'wola';
      const numFreqSamples = nfft % 2 === 0 ? nfft / 2 + 1 : (nfft + 1) / 2;
      // formatISTFTInput → reconstruct full two-sided spectra (per segment)
      const segs: { re: number[]; im: number[] }[] = [];
      for (let c = 0; c < nseg; c++) {
        const cr: number[] = [], ci: number[] = [];
        for (let r = 0; r < nFreqRows; r++) { cr.push(Sre[r + c * nFreqRows]); ci.push(Sim[r + c * nFreqRows]); }
        let fr: number[], fi: number[];
        if (range === 'twosided') { fr = cr; fi = ci; }
        else if (range === 'centered') {
          fr = new Array(nfft); fi = new Array(nfft);
          // even: circshift(s,-(n/2-1)) ⇒ fr[i]=cr[(i+n/2-1) mod n]; odd: ifftshift ⇒ fr[i]=cr[(i+(n-1)/2) mod n]
          const sh = nfft % 2 === 0 ? nfft / 2 - 1 : (nfft - 1) / 2;
          for (let i = 0; i < nfft; i++) { const src = (i + sh) % nfft; fr[i] = cr[src]; fi[i] = ci[src]; }
        } else { // onesided → mirror conjugate
          fr = new Array(nfft).fill(0); fi = new Array(nfft).fill(0);
          for (let r = 0; r < numFreqSamples; r++) { fr[r] = cr[r]; fi[r] = ci[r]; }
          const lastMirror = nfft % 2 === 0 ? numFreqSamples - 1 : numFreqSamples;
          for (let r = 2; r <= lastMirror; r++) { fr[nfft - r + 1] = cr[r - 1]; fi[nfft - r + 1] = -ci[r - 1]; }
        }
        let inv = idftCol(fr, fi, nfft);
        if (conjSym) inv = { re: inv.re, im: inv.re.map(() => 0) };  // 'symmetric' → real output
        segs.push({ re: inv.re.slice(0, Math.min(nwin, nfft)), im: inv.im.slice(0, Math.min(nwin, nfft)) });
      }
      const hop = nwin - noverlap, xlen = nwin + (nseg - 1) * hop, aPow = method === 'ola' ? 0 : 1;
      const xr = new Array(xlen).fill(0), xi = new Array(xlen).fill(0), normVal = new Array(xlen).fill(0);
      const wNum = win.map((w) => Math.pow(w, aPow)), wDen = win.map((w) => Math.pow(w, aPow + 1));
      for (let ii = 0; ii < nseg; ii++) for (let i = 0; i < nwin; i++) { const idx = ii * hop + i; xr[idx] += segs[ii].re[i] * wNum[i]; xi[idx] += segs[ii].im[i] * wNum[i]; normVal[idx] += wDen[i]; }
      const EPS = 2.220446049250313e-16;
      for (let i = 0; i < xlen; i++) if (normVal[i] < nseg * EPS) normVal[i] = 1;
      const reOut = xr.map((v, i) => v / normVal[i]), imOut = xi.map((v, i) => v / normVal[i]);
      const anyImag = imOut.some((v) => v !== 0);
      const X = colVec(reOut); if (anyImag) X.idata = Float64Array.from(imOut);
      if (nargout < 2) return ret(X);
      const T = colVec(Array.from({ length: xlen }, (_, i) => i / Fs * (isNorm ? Fs : 1)));
      return Promise.resolve([X, T]);
    },
    // ── legacy spectrogram(x,window,noverlap,nfft[,fs]) → [S,F,T,P] (one-sided for real x) ──
    spectrogram: (a, nargout) => {
      const x = toArray(m(a[0])), xIm0 = m(a[0]).idata, xIm = xIm0 ? Array.from(xIm0) : null, nx = x.length;
      const isRealX = !xIm0;
      const winArg = a.length > 1 && isMat(a[1]) && m(a[1]).rows * m(a[1]).cols > 1 ? a[1] : undefined;
      const nwinDefault = Math.max(2, Math.floor(nx / 4.5));
      const win = winArg !== undefined ? toArray(m(winArg)) : hammingWin(nwinDefault);
      const nwin = win.length;
      const ovGiven = a.length > 2 && isMat(a[2]) && m(a[2]).rows * m(a[2]).cols >= 1;
      const noverlap = ovGiven ? Math.round(asScalar(a[2])) : Math.round(nwin / 2);
      const nfGiven = a.length > 3 && isMat(a[3]) && m(a[3]).rows * m(a[3]).cols >= 1;
      const nfft = nfGiven ? Math.round(asScalar(a[3])) : Math.max(256, 2 ** Math.ceil(Math.log2(nwin)));
      const fs = a.length > 4 && isMat(a[4]) ? asScalar(a[4]) : null;
      const Fs = fs ?? 2 * Math.PI;
      const range = isRealX ? 'onesided' : 'twosided';
      const hop = nwin - noverlap, nCol = Math.floor((nx - noverlap) / hop);
      const cols: { re: number[]; im: number[] }[] = [], offs: number[] = [];
      for (let c = 0; c < nCol; c++) { const off = c * hop; offs.push(off); const re: number[] = [], im: number[] = []; for (let i = 0; i < nwin; i++) { re.push(x[off + i] * win[i]); im.push((xIm ? xIm[off + i] : 0) * win[i]); } cols.push(dftCol(re, im, nfft)); }
      const full = psdfreqvecFull(nfft, Fs);
      let nFreq = nfft, fOut = full, outCols = cols;
      if (range === 'onesided') { nFreq = nfft % 2 === 0 ? nfft / 2 + 1 : (nfft + 1) / 2; fOut = full.slice(0, nFreq); outCols = cols.map((c) => ({ re: c.re.slice(0, nFreq), im: c.im.slice(0, nFreq) })); }
      const S = complexMat(outCols, nFreq);
      const Fcol = colVec(fOut), Tcol = colVec(offs.map((o) => (o + nwin / 2) / Fs));
      if (nargout < 4) {
        if (nargout < 2) return ret(S);
        if (nargout < 3) return Promise.resolve([S, Fcol]);
        return Promise.resolve([S, Fcol, Tcol]);
      }
      // P (PSD): Sxx = |y|^2/U, onesided doubling (not DC/Nyquist), Pxx = Sxx/Fs
      const U = win.reduce((s, w) => s + w * w, 0);
      const pCols: number[][] = [];
      for (let c = 0; c < nCol; c++) {
        const yr = cols[c].re, yi = cols[c].im, sxx = full.map((_, k) => (yr[k] * yr[k] + yi[k] * yi[k]) / U);
        let pcol: number[];
        if (range === 'onesided') {
          const sel = sxx.slice(0, nFreq);
          if (nfft % 2 === 0) { for (let r = 1; r < nFreq - 1; r++) sel[r] *= 2; } else { for (let r = 1; r < nFreq; r++) sel[r] *= 2; }
          pcol = sel.map((v) => v / Fs);
        } else pcol = sxx.map((v) => v / Fs);
        pCols.push(pcol);
      }
      const Pdata = new Float64Array(nFreq * nCol);
      for (let c = 0; c < nCol; c++) for (let r = 0; r < nFreq; r++) Pdata[r + c * nFreq] = pCols[c][r];
      return Promise.resolve([S, Fcol, Tcol, mat(nFreq, nCol, Pdata)]);
    },
    // ── spectral measures (rectangular/kaiser0 window, nfft=N, specfreqwidth width-method) ──
    meanfreq: (a) => {
      const x = toArray(m(a[0])), fs = a.length > 1 && isMat(a[1]) ? asScalar(a[1]) : undefined;
      const { Pxx, f } = psdWin(x, new Array(x.length).fill(1), fs), w = specWidth(f);
      let num = 0, den = 0; for (let k = 0; k < f.length; k++) { num += w[k] * f[k] * Pxx[k]; den += w[k] * Pxx[k]; }
      return ret(scalar(num / den));
    },
    medfreq: (a) => {
      const x = toArray(m(a[0])), fs = a.length > 1 && isMat(a[1]) ? asScalar(a[1]) : undefined;
      const { Pxx, f } = psdWin(x, new Array(x.length).fill(1), fs), w = specWidth(f);
      let tot = 0; for (let k = 0; k < f.length; k++) tot += w[k] * Pxx[k];
      let c = 0; for (let k = 0; k < f.length; k++) { const seg = w[k] * Pxx[k]; if (c + seg >= tot / 2) return ret(scalar(f[k] - w[k] / 2 + (tot / 2 - c) / seg * w[k])); c += seg; }
      return ret(scalar(f[f.length - 1]));
    },
    // bandpower(x): mean square; bandpower(x,fs,[f1 f2]): hamming-window nfft=N PSD over the band
    bandpower: (a) => {
      const x = toArray(m(a[0]));
      if (!(a.length > 2 && isMat(a[2]))) return ret(scalar(x.reduce((s, v) => s + v * v, 0) / x.length));
      const fs = isMat(a[1]) ? asScalar(a[1]) : undefined, range = toArray(m(a[2]));
      const { Pxx, f } = psdWin(x, hammingWin(x.length), fs), w = specWidth(f), lo = range[0], hi = range[1];
      let i1 = 0; for (let k = 0; k < f.length; k++) if (f[k] <= lo) i1 = k;
      let i2 = f.length - 1; for (let k = 0; k < f.length; k++) if (f[k] >= hi) { i2 = k; break; }
      let s = 0; for (let k = i1; k <= i2; k++) s += w[k] * Pxx[k]; return ret(scalar(s));
    },
    // powerbw: half-power (-3 dB) bandwidth around the spectral peak, log-power-interpolated edges
    powerbw: (a) => {
      const x = toArray(m(a[0])), fs = a.length > 1 && isMat(a[1]) ? asScalar(a[1]) : undefined;
      const { Pxx, f } = psdWin(x, new Array(x.length).fill(1), fs);
      const peak = Math.max(...Pxx), iC = Pxx.indexOf(peak), ref = peak * 0.5;
      const L10 = (v: number) => Math.log10(Math.max(v, Number.MIN_VALUE));
      const lint = (yp: number, yq: number, xp: number, xq: number, xx: number) => yp + (yq - yp) * (xx - xp) / (xq - xp);
      let iL = -1; for (let k = 0; k <= iC; k++) if (Pxx[k] <= ref) iL = k;
      let iR = -1; for (let k = iC; k < f.length; k++) if (Pxx[k] <= ref) { iR = k; break; }
      const fLo = iL < 0 ? f[0] : lint(f[iL], f[iL + 1], L10(Pxx[iL]), L10(Pxx[iL + 1]), L10(ref));
      const fHi = iR < 0 ? f[f.length - 1] : lint(f[iR], f[iR - 1], L10(Pxx[iR]), L10(Pxx[iR - 1]), L10(ref));
      return ret(scalar(fHi - fLo));
    },
    // obw: 99%-occupied bandwidth via cumulative power (0.5% excluded each side), freq-interpolated
    obw: (a) => {
      const x = toArray(m(a[0])), fs = a.length > 1 && isMat(a[1]) ? asScalar(a[1]) : undefined;
      const { Pxx, f } = psdWin(x, new Array(x.length).fill(1), fs), wd = specWidth(f), N = f.length;
      const cumPwr = [0]; for (let k = 0; k < N; k++) cumPwr.push(cumPwr[k] + Pxx[k] * wd[k]);
      const cumF = [f[0]]; for (let k = 1; k < N; k++) cumF.push((f[k - 1] + f[k]) / 2); cumF.push(f[N - 1]);
      const tot = cumPwr[N], ploLim = tot / 200, phiLim = 199 * tot / 200;
      const interpFreq = (thr: number) => { let i1 = cumPwr.findIndex((c) => c >= thr); if (i1 <= 0) i1 = 1; return cumF[i1 - 1] + (cumF[i1] - cumF[i1 - 1]) * (thr - cumPwr[i1 - 1]) / (cumPwr[i1] - cumPwr[i1 - 1]); };
      return ret(scalar(interpFreq(phiLim) - interpFreq(ploLim)));
    },
    // ── DCT-II matrix: dctmtx(n) — row 0 = sqrt(1/n); row i>0 = sqrt(2/n)·cos(π(2j+1)i/2n) ──
    dctmtx: (a) => {
      const n = Math.round(asScalar(a[0])), d = new Float64Array(n * n);
      for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) d[i + j * n] = i === 0 ? Math.sqrt(1 / n) : Math.sqrt(2 / n) * Math.cos(Math.PI * (2 * j + 1) * i / (2 * n));
      return ret(mat(n, n, d));
    },
    // ── Welch PSD: pwelch(x[,window][,noverlap][,nfft][,fs]) — default 8 segments, 50% overlap, hamming ──
    pwelch: (a, nargout) => {
      const x = toArray(m(a[0])), N = x.length;
      const wa = a.length > 1 && isMat(a[1]) && m(a[1]).rows * m(a[1]).cols > 0 ? m(a[1]) : null;
      let L: number, w: number[];
      if (wa && wa.rows * wa.cols > 1) { w = toArray(wa); L = w.length; }
      else if (wa) { L = Math.round(asScalar(a[1])); w = hammingWin(L); }
      else { L = Math.floor(N / 4.5); w = hammingWin(L); }
      const has = (i: number) => a.length > i && isMat(a[i]) && m(a[i]).rows * m(a[i]).cols > 0;
      const nov = has(2) ? Math.round(asScalar(a[2])) : Math.floor(L / 2);
      const nfft = has(3) ? Math.round(asScalar(a[3])) : Math.max(256, 2 ** Math.ceil(Math.log2(L)));
      const fs = has(4) ? asScalar(a[4]) : null, Fs = fs ?? 2 * Math.PI, half = Math.floor(nfft / 2);
      const sw2 = w.reduce((s, v) => s + v * v, 0), step = L - nov, Pxx = new Array(half + 1).fill(0);
      let nseg = 0;
      for (let start = 0; start + L <= N; start += step) {
        nseg++;
        for (let k = 0; k <= half; k++) {
          let re = 0, im = 0;
          for (let nn = 0; nn < L; nn++) { const ang = -2 * Math.PI * k * nn / nfft, xv = x[start + nn] * w[nn]; re += xv * Math.cos(ang); im += xv * Math.sin(ang); }
          let p = (re * re + im * im) / (Fs * sw2); if (k > 0 && k < half) p *= 2; Pxx[k] += p;
        }
      }
      const P = Pxx.map((v) => v / Math.max(1, nseg)), f = P.map((_, k) => (fs ? k * fs / nfft : k * 2 * Math.PI / nfft));
      return Promise.resolve(nargout >= 2 ? [colVec(P), colVec(f)] : [colVec(P)]);
    },
    // ── pulse/waveform generators ──
    rectpuls: (a) => { const w = a.length > 1 ? asScalar(a[1]) : 1; return ret(map(m(a[0]), (t) => (t >= -w / 2 && t < w / 2 ? 1 : 0))); },
    tripuls: (a) => {
      const w = a.length > 1 && isMat(a[1]) ? asScalar(a[1]) : 1, s = a.length > 2 ? asScalar(a[2]) : 0, tp = w * s / 2;
      return ret(map(m(a[0]), (t) => { if (t < -w / 2 || t > w / 2) return 0; return t <= tp ? (tp + w / 2 === 0 ? 0 : (t + w / 2) / (tp + w / 2)) : (w / 2 - tp === 0 ? 0 : (w / 2 - t) / (w / 2 - tp)); }));
    },
    sawtooth: (a) => { const width = a.length > 1 ? asScalar(a[1]) : 1; return ret(map(m(a[0]), (t) => { const ph = (((t % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI)) / (2 * Math.PI); return ph < width ? 2 * ph / width - 1 : 2 * (1 - ph) / (1 - width) - 1; })); },
    gauspuls: (a) => {
      const fc = a.length > 1 ? asScalar(a[1]) : 1000, bw = a.length > 2 ? asScalar(a[2]) : 0.5;
      const lr = Math.log(10 ** (-6 / 20)), av = -((Math.PI * fc * bw) ** 2) / (4 * lr);   // bwr = -6 dB
      return ret(map(m(a[0]), (t) => Math.exp(-av * t * t) * Math.cos(2 * Math.PI * fc * t)));
    },
    // ── Walsh-Hadamard transform: fwht/ifwht (sequency default; also hadamard/dyadic ordering) ──
    fwht: (a) => {
      const M = m(a[0]), x = nextPow2Pad(toArray(M)), N = x.length, L = Math.round(Math.log2(N));
      const order = a.length > 2 ? asString(a[2]).toLowerCase() : 'sequency', t = whtNat(x).map((v) => v / N);
      const out = new Array(N);
      for (let i = 0; i < N; i++) out[i] = order === 'hadamard' ? t[i] : order === 'dyadic' ? t[bitrev(i, L)] : t[bitrev(i ^ (i >> 1), L)];
      return ret(M.rows === 1 ? rowVec(out) : colVec(out));
    },
    ifwht: (a) => {
      const M = m(a[0]), y = nextPow2Pad(toArray(M)), N = y.length, L = Math.round(Math.log2(N));
      const order = a.length > 2 ? asString(a[2]).toLowerCase() : 'sequency', ynat = new Array(N);
      for (let i = 0; i < N; i++) ynat[order === 'hadamard' ? i : order === 'dyadic' ? bitrev(i, L) : bitrev(i ^ (i >> 1), L)] = y[i];
      const out = whtNat(ynat);
      return ret(M.rows === 1 ? rowVec(out) : colVec(out));
    },
    // ── hilbert(x): analytic signal x + i·H{x} via the one-sided spectrum ──
    hilbert: (a) => {
      const M = m(a[0]), x = toArray(M), N = x.length, Hr = new Array(N), Hi = new Array(N);
      for (let k = 0; k < N; k++) { let re = 0, im = 0; for (let n = 0; n < N; n++) { const ang = -2 * Math.PI * k * n / N; re += x[n] * Math.cos(ang); im += x[n] * Math.sin(ang); } const mult = k === 0 || (N % 2 === 0 && k === N / 2) ? 1 : k < N / 2 ? 2 : 0; Hr[k] = re * mult; Hi[k] = im * mult; }
      const yr = new Float64Array(N), yi = new Float64Array(N);
      for (let n = 0; n < N; n++) { let re = 0, im = 0; for (let k = 0; k < N; k++) { const ang = 2 * Math.PI * k * n / N, c = Math.cos(ang), s = Math.sin(ang); re += Hr[k] * c - Hi[k] * s; im += Hr[k] * s + Hi[k] * c; } yr[n] = re / N; yi[n] = im / N; }
      const col = M.rows !== 1;
      return ret({ kind: 'num', rows: col ? N : 1, cols: col ? 1 : N, data: yr, idata: yi } as Mat);
    },
    // ── real cepstrum: rceps(x) = real(ifft(log|fft(x)|)) ──
    rceps: (a) => {
      const M = m(a[0]), x = toArray(M), N = x.length, logmag = new Array(N);
      for (let k = 0; k < N; k++) { let re = 0, im = 0; for (let n = 0; n < N; n++) { const ang = -2 * Math.PI * k * n / N; re += x[n] * Math.cos(ang); im += x[n] * Math.sin(ang); } logmag[k] = Math.log(Math.hypot(re, im)); }
      const c = new Array(N); for (let n = 0; n < N; n++) { let re = 0; for (let k = 0; k < N; k++) re += logmag[k] * Math.cos(2 * Math.PI * k * n / N); c[n] = re / N; }
      return ret(M.rows === 1 ? rowVec(c) : colVec(c));
    },
    // ── complex cepstrum: cceps(x) = real(ifft(log|H| + i·rcunwrap(angle(H)))) ──
    cceps: (a) => {
      const M = m(a[0]), x = toArray(M), N = x.length, Hr = new Array(N), Hi = new Array(N);
      for (let k = 0; k < N; k++) { let re = 0, im = 0; for (let n = 0; n < N; n++) { const ang = -2 * Math.PI * k * n / N; re += x[n] * Math.cos(ang); im += x[n] * Math.sin(ang); } Hr[k] = re; Hi[k] = im; }
      const ph = new Array(N); ph[0] = Math.atan2(Hi[0], Hr[0]);
      for (let k = 1; k < N; k++) { let d = Math.atan2(Hi[k], Hr[k]) - Math.atan2(Hi[k - 1], Hr[k - 1]); d -= 2 * Math.PI * Math.round(d / (2 * Math.PI)); ph[k] = ph[k - 1] + d; }
      const nh = Math.floor((N + 1) / 2), nd = Math.round(ph[nh] / Math.PI);
      for (let k = 0; k < N; k++) ph[k] -= Math.PI * nd * k / nh;
      const c = new Array(N); for (let n = 0; n < N; n++) { let re = 0; for (let k = 0; k < N; k++) { const ang = 2 * Math.PI * k * n / N; re += Math.log(Math.hypot(Hr[k], Hi[k])) * Math.cos(ang) - ph[k] * Math.sin(ang); } c[n] = re / N; }
      return ret(M.rows === 1 ? rowVec(c) : colVec(c));
    },
    // ── DFT matrix: dftmtx(n)[j][k] = exp(-2πi·jk/n) ──
    dftmtx: (a) => {
      const n = Math.round(asScalar(a[0])), re = new Float64Array(n * n), im = new Float64Array(n * n);
      for (let j = 0; j < n; j++) for (let k = 0; k < n; k++) { const ang = -2 * Math.PI * j * k / n; re[j + k * n] = Math.cos(ang); im[j + k * n] = Math.sin(ang); }
      return ret({ kind: 'num', rows: n, cols: n, data: re, idata: im } as Mat);
    },
    // ── multirate: upsample/downsample/intdump/upfirdn ──
    upsample: (a) => {
      const M = m(a[0]), x = toArray(M), n = Math.round(asScalar(a[1])), ph = a.length > 2 ? Math.round(asScalar(a[2])) : 0;
      const out = new Array(n * x.length).fill(0); for (let i = 0; i < x.length; i++) out[i * n + ph] = x[i];
      return ret(M.rows === 1 ? rowVec(out) : colVec(out));
    },
    downsample: (a) => {
      const M = m(a[0]), x = toArray(M), n = Math.round(asScalar(a[1])), ph = a.length > 2 ? Math.round(asScalar(a[2])) : 0;
      const out: number[] = []; for (let j = ph; j < x.length; j += n) out.push(x[j]);
      return ret(M.rows === 1 ? rowVec(out) : colVec(out));
    },
    intdump: (a) => {
      const M = m(a[0]), x = toArray(M), ns = Math.round(asScalar(a[1])), out: number[] = [];
      for (let i = 0; i + ns <= x.length; i += ns) { let s = 0; for (let j = 0; j < ns; j++) s += x[i + j]; out.push(s / ns); }
      return ret(M.rows === 1 ? rowVec(out) : colVec(out));
    },
    upfirdn: (a) => {
      const M = m(a[0]), x = toArray(M), h = toArray(m(a[1])), p = a.length > 2 ? Math.round(asScalar(a[2])) : 1, q = a.length > 3 ? Math.round(asScalar(a[3])) : 1;
      const upLen = (x.length - 1) * p + 1, up = new Array(upLen).fill(0); for (let i = 0; i < x.length; i++) up[i * p] = x[i];
      const y = new Array(upLen + h.length - 1).fill(0); for (let i = 0; i < upLen; i++) for (let k = 0; k < h.length; k++) y[i + k] += up[i] * h[k];
      const out: number[] = []; for (let j = 0; j < y.length; j += q) out.push(y[j]);
      return ret(M.rows === 1 ? rowVec(out) : colVec(out));
    },
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
    db: (a) => ret(map(m(a[0]), (x) => 20 * Math.log10(Math.abs(x)))),
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
    /** goertzel(x[,freqIndices][,dim]) — DFT of x at 1-based bin indices (default all → fft(x)). */
    goertzel: (a) => {
      const X = m(a[0]); const isCol = X.cols === 1 && X.rows !== 1;
      const xre = toArray(X), xim = X.idata ? Array.from(X.idata) : new Array(xre.length).fill(0);
      const N = xre.length;
      let idx: number[];
      if (a.length >= 2 && isMat(a[1]) && (a[1] as Mat).rows * (a[1] as Mat).cols > 0) idx = toArray(m(a[1])).map((v) => Math.round(v));
      else { idx = []; for (let k = 1; k <= N; k++) idx.push(k); }
      const re = new Float64Array(idx.length), im = new Float64Array(idx.length);
      idx.forEach((ix, j) => { const k = ix - 1; let sr = 0, si = 0; for (let n = 0; n < N; n++) { const th = (-2 * Math.PI * k * n) / N, c = Math.cos(th), s = Math.sin(th); sr += xre[n] * c - xim[n] * s; si += xre[n] * s + xim[n] * c; } re[j] = sr; im[j] = si; });
      const out = (isCol ? colVec(Array.from(re)) : rowVec(Array.from(re))); out.idata = im; return ret(out);
    },
    /** czt(x[,m][,w][,a]) — chirp-Z transform; defaults m=N, w=exp(-2πi/m), a=1 → fft(x). */
    czt: (a) => {
      const X = m(a[0]); const isCol = X.cols === 1 && X.rows !== 1;
      const xre = toArray(X), xim = X.idata ? Array.from(X.idata) : new Array(xre.length).fill(0);
      const N = xre.length;
      const M = a.length >= 2 && isMat(a[1]) && (a[1] as Mat).rows * (a[1] as Mat).cols > 0 ? Math.round(asScalar(a[1])) : N;
      const cs = (v: Value): [number, number] => { const W = m(v); return [W.data[0], W.idata ? W.idata[0] : 0]; };
      const [wr, wi] = a.length >= 3 && isMat(a[2]) ? cs(a[2]) : [Math.cos(-2 * Math.PI / M), Math.sin(-2 * Math.PI / M)];
      const [ar, ai] = a.length >= 4 && isMat(a[3]) ? cs(a[3]) : [1, 0];
      const cpow = (re: number, ie: number, p: number): [number, number] => { const r = Math.hypot(re, ie), ph = Math.atan2(ie, re); const rp = r ** p, pp = ph * p; return [rp * Math.cos(pp), rp * Math.sin(pp)]; };
      const re = new Float64Array(M), im = new Float64Array(M);
      for (let k = 0; k < M; k++) {
        let sr = 0, si = 0;
        for (let n = 0; n < N; n++) {
          const [anr, ani] = cpow(ar, ai, -n);        // a^(-n)
          const [wnr, wni] = cpow(wr, wi, n * k);      // w^(n*k)
          let tr = xre[n] * anr - xim[n] * ani, ti = xre[n] * ani + xim[n] * anr;
          const ntr = tr * wnr - ti * wni, nti = tr * wni + ti * wnr; tr = ntr; ti = nti;
          sr += tr; si += ti;
        }
        re[k] = sr; im[k] = si;
      }
      const out = (isCol ? colVec(Array.from(re)) : rowVec(Array.from(re))); out.idata = im; return ret(out);
    },
    /** fir1(n,Wn) — windowed-sinc lowpass FIR (length n+1, Hamming window, unity DC gain). */
    fir1: (a) => {
      const n = Math.round(asScalar(a[0])); const Wn = asScalar(a[1]); const M = n / 2;
      const h = new Array(n + 1); for (let k = 0; k <= n; k++) { const x = k - M; h[k] = (x === 0 ? Wn : Math.sin(Wn * Math.PI * x) / (Math.PI * x)) * (0.54 - 0.46 * Math.cos((2 * Math.PI * k) / n)); }
      const s = h.reduce((p, q) => p + q, 0); return ret(rowVec(h.map((v) => v / s)));
    },
    /** filternorm(b,a[,pnorm]) — Lp norm of a digital filter (FIR/stable IIR). pnorm = 2 (def) or Inf. */
    filternorm: (a) => {
      const b = toArray(m(a[0])), den = a.length >= 2 && isMat(a[1]) && m(a[1]).rows * m(a[1]).cols ? toArray(m(a[1])) : [1];
      const pnorm = a.length >= 3 && isMat(a[2]) ? asScalar(a[2]) : 2;
      const tol = a.length >= 4 && isMat(a[3]) ? asScalar(a[3]) : 1e-8;
      const isFIR = den.length === 1 || den.slice(1).every((v) => v === 0);
      if (!isFinite(pnorm)) {
        // inf-norm = max magnitude of freqz over 1024 points on [0,π)
        const N = 1024; let mx = 0;
        for (let k = 0; k < N; k++) { const w = k * Math.PI / N, nz = cpoly(b, w), dz = cpoly(den, w); const dn = dz[0] * dz[0] + dz[1] * dz[1]; const hr = (nz[0] * dz[0] + nz[1] * dz[1]) / dn, hi = (nz[1] * dz[0] - nz[0] * dz[1]) / dn; const mag = Math.hypot(hr, hi); if (mag > mx) mx = mag; }
        return ret(scalar(mx));
      }
      // pnorm = 2
      if (isFIR) return ret(scalar(Math.sqrt(b.reduce((s, v) => s + v * v, 0))));
      // IIR: sum-of-squares of a finite impulse-response approximation (impz, length via tol)
      const a0 = den[0], bn = b.map((v) => v / a0), an = den.map((v) => v / a0);
      // impulse response via direct-form recursion; run until tail energy negligible
      let acc = 0, maxLen = 200000, h: number[] = [], stableTail = 0;
      for (let nIdx = 0; nIdx < maxLen; nIdx++) {
        let y = nIdx < bn.length ? bn[nIdx] : 0;
        for (let i = 1; i < an.length; i++) if (nIdx - i >= 0) y -= an[i] * h[nIdx - i];
        h.push(y); acc += y * y;
        if (nIdx > bn.length && Math.abs(y) < tol * Math.sqrt(Math.max(acc, 1e-300))) { stableTail++; if (stableTail > an.length + 5) break; } else stableTail = 0;
      }
      return ret(scalar(Math.sqrt(acc)));
    },
    /** [s,g] = cell2sos(c) — cell array of {b,a} sections → L×6 second-order-section matrix. */
    cell2sos: (a, nargout) => {
      const C = a[0]; if (!isCell(C)) return ret(zeros(0, 6));
      let items = (C as Cell).items.slice(); let g = 1;
      if (nargout >= 2) {
        const c1 = items[0]; if (isCell(c1)) { const inner = (c1 as Cell).items; const bb = m(inner[0]), aa = m(inner[1]); if (bb.rows * bb.cols === 1 && aa.rows * aa.cols === 1) { g = asScalar(inner[0]) / asScalar(inner[1]); items = items.slice(1); } }
      }
      const rows: number[][] = [];
      for (const it of items) { if (!isCell(it)) continue; const inner = (it as Cell).items; const b = toArray(m(inner[0])).slice(0, 3), av = toArray(m(inner[1])).slice(0, 3); while (b.length < 3) b.push(0); while (av.length < 3) av.push(0); rows.push([...b, ...av]); }
      const s = rowsToMat(rows);
      return Promise.resolve(nargout >= 2 ? [s, scalar(g)] : [s]);
    },
    /** [b,a] = sos2ctf(sos[,g]) — second-order sections → cascaded transfer-function numerators/denominators. */
    sos2ctf: (a, nargout) => {
      const S = m(a[0]), K = S.rows;
      const bU: number[][] = [], aRows: number[][] = [];
      for (let i = 0; i < K; i++) { bU.push([S.data[i], S.data[i + K], S.data[i + 2 * K]]); aRows.push([S.data[i + 3 * K], S.data[i + 4 * K], S.data[i + 5 * K]]); }
      let b = bU;
      if (a.length >= 2 && isMat(a[1])) {
        const sv = toArray(m(a[1]));
        if (!sv.every((v) => v === 1)) {
          const p = K;
          if (sv.length === 1) {
            const s0 = sv[0], f = Math.pow(Math.abs(s0), 1 / p);
            b = bU.map((row) => row.map((v) => v * f));
            const sgn = Math.sign(s0); b[K - 1] = b[K - 1].map((v) => v * sgn);
          } else {
            const last = sv[K], fl = Math.pow(Math.abs(last), 1 / p);
            b = bU.map((row, i) => row.map((v) => fl * sv[i] * v));
            const sgn = Math.sign(last); b[K - 1] = b[K - 1].map((v) => v * sgn);
          }
        }
      }
      return Promise.resolve(nargout >= 2 ? [rowsToMat(b), rowsToMat(aRows)] : [rowsToMat(b)]);
    },
    /** [N,Wn,beta,ftype] = kaiserord(fcuts,mags,devs[,fs]) — Kaiser-window FIR order estimate. */
    kaiserord: (a, nargout) => {
      const fcuts = toArray(m(a[0])), mags = toArray(m(a[1])), devs0 = toArray(m(a[2]));
      const fsamp = a.length >= 4 && isMat(a[3]) ? asScalar(a[3]) : 2;
      const fc = fcuts.map((v) => v / fsamp);                 // normalize
      const mf = fc.length, nbands = mags.length;
      const stop = mags.map((v) => (v === 0 ? 1 : 0));
      const devs = devs0.map((d, i) => d / (stop[i] + mags[i]));
      const f1: number[] = [], f2: number[] = [];
      for (let i = 0; i < mf - 1; i += 2) f1.push(fc[i]);
      for (let i = 1; i < mf; i += 2) f2.push(fc[i]);
      let L = 0, bta = 0;
      if (nbands === 2) { const r = kaislpord(f1[0], f2[0], devs[0], devs[1]); L = r.L; bta = r.bta; }
      else {
        for (let i = 1; i < nbands - 1; i++) {
          const r1 = kaislpord(f1[i - 1], f2[i - 1], devs[i], devs[i - 1]);
          const r2 = kaislpord(f1[i], f2[i], devs[i], devs[i + 1]);
          if (r1.L > L) { bta = r1.bta; L = r1.L; }
          if (r2.L > L) { bta = r2.bta; L = r2.L; }
        }
      }
      let N = Math.ceil(L) - 1;
      const Wn = f1.map((v, i) => 2 * (v + f2[i]) / 2);
      let ftype = 'low';
      if (nbands === 2 && mags[0] === 0) ftype = 'high';
      else if (nbands === 3 && mags[1] === 0) ftype = 'stop';
      else if (nbands >= 3 && mags[0] === 0) ftype = 'DC-0';
      else if (nbands >= 3 && mags[0] === 1) ftype = 'DC-1';
      if (N % 2 === 1 && mags[mags.length - 1] !== 0) N += 1;
      const WnV = Wn.length === 1 ? scalar(Wn[0]) : rowVec(Wn);
      const ft: Value = { kind: 'num', rows: 1, cols: ftype.length, data: Float64Array.from([...ftype].map((c) => c.charCodeAt(0))), isChar: true };
      return Promise.resolve(nargout >= 4 ? [scalar(N), WnV, scalar(bta), ft] : nargout >= 3 ? [scalar(N), WnV, scalar(bta)] : nargout >= 2 ? [scalar(N), WnV] : [scalar(N)]);
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
    /** [k,R0] = ac2rc(R) — autocorrelation → reflection coefficients (via levinson) and R0. */
    ac2rc: (a, nargout) => { const R = toArray(m(a[0])); const { k } = levinsonDurbin(R, R.length - 1); return Promise.resolve(nargout >= 2 ? [colVec(k), scalar(R[0])] : [colVec(k)]); },
    /** rc2is(k) — reflection coefficients → inverse sine parameters: (2/π)·asin(k). */
    rc2is: (a) => ret(map(m(a[0]), (k) => (2 / Math.PI) * Math.asin(k))),

    // ── IIR design / zero-phase filtering / peak finding ──
    /** [z,p,k] = buttap(n) — Butterworth analog lowpass prototype. */
    buttap: (a, nargout) => {
      const n = Math.round(asScalar(a[0])); const { z, p, k } = buttap(n);
      const pCol = colVec(p.map((c) => c[0])); pCol.idata = Float64Array.from(p.map((c) => c[1]));
      return Promise.resolve(nargout >= 3 ? [zeros(0, 1), pCol, scalar(k)] : nargout >= 2 ? [zeros(0, 1), pCol] : [zeros(0, 1)]);
    },
    /** [b,a] = butter(n,Wn[,ftype]) — Butterworth IIR filter design (lowpass/highpass, digital). */
    butter: (a, nargout) => {
      const n = Math.round(asScalar(a[0])); const Wn = asScalar(a[1]);
      const ftype = a.length >= 3 && (isStr(a[2]) || (isMat(a[2]) && (a[2] as Mat).isChar)) ? asString(a[2]).toLowerCase() : '';
      const high = ftype.startsWith('high');
      // step 1: prewarp (fs = 2)
      const fs = 2; const u = 2 * fs * Math.tan((Math.PI * Wn) / fs);
      // step 2: analog prototype
      let { z, p, k } = buttap(n);
      // step 3: transform to lowpass/highpass of cutoff u
      ({ z, p, k } = high ? lp2hpZpk(z, p, k, u) : lp2lpZpk(z, p, k, u));
      // step 4: bilinear → digital
      ({ z, p, k } = bilinearZpk(z, p, k, fs));
      const { b, a: den } = zpk2tf(z, p, k);
      return Promise.resolve(nargout >= 2 ? [rowVec(b), rowVec(den)] : [rowVec(b)]);
    },
    /** y = filtfilt(b,a,x) — zero-phase forward-reverse IIR filtering (edge-reflection + steady-state zi). */
    filtfilt: (a) => {
      const b = toArray(m(a[0])), den = toArray(m(a[1])); const X = m(a[2]); const isRow = X.rows === 1;
      const x = toArray(X);
      const ord = Math.max(effLen(b), effLen(den)) - 1;
      const nfact = Math.max(1, 3 * ord);
      if (x.length <= nfact) return ret(isRow ? rowVec(x.slice()) : colVec(x.slice()));
      const zi = filtfiltZi(b, den);
      // reflect: 2*x(1)-x(nfact+1:-1:2) ... x ... 2*x(end)-x(end-1:-1:end-nfact)
      const ext: number[] = [];
      for (let i = nfact; i >= 1; i--) ext.push(2 * x[0] - x[i]);
      for (const v of x) ext.push(v);
      for (let i = 1; i <= nfact; i++) ext.push(2 * x[x.length - 1] - x[x.length - 1 - i]);
      // forward
      const ziF = zi.map((v) => v * ext[0]);
      let yt = filterDf2t(b, den, ext, ziF).y;
      // reverse
      yt.reverse();
      const ziR = zi.map((v) => v * yt[0]);
      yt = filterDf2t(b, den, yt, ziR).y;
      yt.reverse();
      const y = yt.slice(nfact, nfact + x.length);
      return ret(isRow ? rowVec(y) : colVec(y));
    },
    /** [pks,locs] = findpeaks(y[,x]) — local maxima with MinPeakHeight/Prominence/Distance, NPeaks, SortStr. */
    findpeaks: (a, nargout) => {
      const Y = m(a[0]); const yIsRow = Y.rows === 1; const y = toArray(Y);
      // optional x / Fs as the first positional arg (numeric, non-string)
      let argStart = 1; let x: number[] = y.map((_, i) => i + 1);
      if (a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar) {
        const xv = toArray(m(a[1]));
        x = xv.length === 1 ? y.map((_, i) => i / xv[0]) : xv;   // scalar ⇒ Fs
        argStart = 2;
      }
      // name/value options
      let minH = -Infinity, minP = 0, minD = 0, maxN = Infinity, sortStr = 'none';
      for (let i = argStart; i + 1 < a.length; i += 2) {
        const name = asString(a[i]).toLowerCase(); const val = a[i + 1];
        if (name === 'minpeakheight') minH = asScalar(val);
        else if (name === 'minpeakprominence') minP = asScalar(val);
        else if (name === 'minpeakdistance') minD = asScalar(val);
        else if (name === 'npeaks') maxN = Math.round(asScalar(val));
        else if (name === 'sortstr') sortStr = asString(val).toLowerCase();
      }
      // all local maxima (first index of plateaus); bookend by NaN (signal/findpeaks.m findLocalMaxima)
      let iPk: number[] = [];
      const yb = [NaN, ...y, NaN];                       // 1..length(yb) map to iTemp
      // keep first of any adjacent-equal pair (including NaN==NaN) where at least one is finite
      const iTemp: number[] = [0];
      for (let i = 1; i < yb.length; i++) {
        const fin = !Number.isNaN(yb[i - 1]) || !Number.isNaN(yb[i]);
        if (yb[i - 1] !== yb[i] && fin) iTemp.push(i);
      }
      // s = sign(diff(yTemp(iTemp))); NaN stays NaN so transitions to NaN are not falling
      const s = iTemp.slice(1).map((idx, k) => Math.sign(yb[idx] - yb[iTemp[k]]));
      // iMax: positions where diff(s) < 0 (NaN comparisons are false)
      for (let i = 1; i < s.length; i++) if (s[i] - s[i - 1] < 0) iPk.push(iTemp[i] - 1);   // -1 removes NaN bookend
      // MinPeakHeight: strictly greater than threshold
      iPk = iPk.filter((j) => y[j] > minH);
      // MinPeakProminence
      if (minP > 0) {
        iPk = iPk.filter((j) => {
          let leftMin = y[j]; for (let i = j - 1; i >= 0; i--) { if (y[i] > y[j]) break; if (y[i] < leftMin) leftMin = y[i]; }
          let rightMin = y[j]; for (let i = j + 1; i < y.length; i++) { if (y[i] > y[j]) break; if (y[i] < rightMin) rightMin = y[i]; }
          return y[j] - Math.max(leftMin, rightMin) >= minP;
        });
      }
      // MinPeakDistance: greedily keep larger peaks, suppress neighbors within Pd (in x-units)
      if (minD > 0 && iPk.length) {
        const order = iPk.map((p2, i) => i).sort((p2, q) => y[iPk[q]] - y[iPk[p2]]);  // descending by height
        const locs = iPk.map((p2) => x[p2]);
        const del = new Array(iPk.length).fill(false);
        for (const i of order) {
          if (del[i]) continue;
          for (let jj = 0; jj < iPk.length; jj++) if (jj !== i && locs[jj] >= locs[i] - minD && locs[jj] <= locs[i] + minD) del[jj] = true;
        }
        iPk = iPk.filter((_, i) => !del[i]);
      }
      // SortStr
      if (sortStr.startsWith('a')) iPk.sort((p2, q) => y[p2] - y[q]);
      else if (sortStr.startsWith('d')) iPk.sort((p2, q) => y[q] - y[p2]);
      // NPeaks (after sort; for default 'none', take first maxN in index order)
      if (iPk.length > maxN) iPk = iPk.slice(0, maxN);
      const pks = iPk.map((j) => y[j]); const locs = iPk.map((j) => x[j]);
      const mk = (v: number[]) => (yIsRow ? rowVec(v) : colVec(v));
      return Promise.resolve(nargout >= 2 ? [mk(pks), mk(locs)] : [mk(pks)]);
    },

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

    // ── cconv(a,b[,n]) — modulo-n circular convolution (n defaults to la+lb-1, i.e. linear conv) ──
    cconv: (a) => {
      const A = m(a[0]), B = m(a[1]), av = toArray(A), bv = toArray(B);
      const la = av.length, lb = bv.length;
      const n = a.length >= 3 && isMat(a[2]) ? Math.round(asScalar(a[2])) : la + lb - 1;
      const out = new Array(Math.max(0, n)).fill(0);
      for (let i = 0; i < la; i++) for (let j = 0; j < lb; j++) out[(i + j) % n] += av[i] * bv[j];
      // orientation: row unless either operand is a (non-scalar) column vector
      const col = (A.cols === 1 && A.rows > 1) || (B.cols === 1 && B.rows > 1);
      return ret(col ? colVec(out) : rowVec(out));
    },

    // ── envelope(x) analytic: [yupper,ylower] = mean(x) ± |hilbert(x-mean(x))| ──
    envelope: (a, nargout) => {
      const X = m(a[0]), x = toArray(X), N = x.length, isRow = X.rows === 1;
      // method string (last char arg); only 'analytic' single-arg path is validated here
      const method = a.length >= 3 && (isStr(a[2]) || (isMat(a[2]) && (a[2] as Mat).isChar)) ? asString(a[2]).toLowerCase() : 'analytic';
      if (!method.startsWith('a')) throw new Error("cconv/envelope: only the analytic (single-argument) envelope method is supported");
      if (a.length >= 2 && isMat(a[1])) throw new Error("envelope: the FIR-length analytic envelope (envelope(x,n)) is not supported");
      const xmean = x.reduce((s, v) => s + v, 0) / N;
      const xc = x.map((v) => v - xmean);
      // analytic signal via the one-sided spectrum (same scheme as the hilbert builtin)
      const Hr = new Array(N), Hi = new Array(N);
      for (let k = 0; k < N; k++) { let re = 0, im = 0; for (let nn = 0; nn < N; nn++) { const ang = -2 * Math.PI * k * nn / N; re += xc[nn] * Math.cos(ang); im += xc[nn] * Math.sin(ang); } const mult = k === 0 || (N % 2 === 0 && k === N / 2) ? 1 : k < N / 2 ? 2 : 0; Hr[k] = re * mult; Hi[k] = im * mult; }
      const amp = new Array(N);
      for (let nn = 0; nn < N; nn++) { let re = 0, im = 0; for (let k = 0; k < N; k++) { const ang = 2 * Math.PI * k * nn / N, c = Math.cos(ang), s = Math.sin(ang); re += Hr[k] * c - Hi[k] * s; im += Hr[k] * s + Hi[k] * c; } amp[nn] = Math.hypot(re / N, im / N); }
      const yu = amp.map((v) => xmean + v), yl = amp.map((v) => xmean - v);
      const mk = (v: number[]): Value => (isRow ? rowVec(v) : colVec(v));
      return Promise.resolve(nargout >= 2 ? [mk(yu), mk(yl)] : [mk(yu)]);
    },

    // ── [b,a] = cheby1(n,Rp,Wp[,ftype]) — Chebyshev Type I IIR (lowpass/highpass, digital) ──
    cheby1: (a, nargout) => {
      const n = Math.round(asScalar(a[0])); const Rp = asScalar(a[1]); const Wp = asScalar(a[2]);
      const ftype = a.length >= 4 && (isStr(a[3]) || (isMat(a[3]) && (a[3] as Mat).isChar)) ? asString(a[3]).toLowerCase() : '';
      const high = ftype.startsWith('high');
      const fs = 2; const u = 2 * fs * Math.tan((Math.PI * Wp) / fs);   // prewarp
      let { z, p, k } = cheb1ap(n, Rp);                                  // analog prototype
      ({ z, p, k } = high ? lp2hpZpk(z, p, k, u) : lp2lpZpk(z, p, k, u));
      ({ z, p, k } = bilinearZpk(z, p, k, fs));                          // → digital
      const { b, a: den } = zpk2tf(z, p, k);
      return Promise.resolve(nargout >= 2 ? [rowVec(b), rowVec(den)] : [rowVec(b)]);
    },
  },
  help: {
    lin2mu: 'Convert linear audio signal to mu-law encoding', mu2lin: 'Convert mu-law encoding to linear signal',
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
    periodogram: 'Periodogram power spectral density estimate', dctmtx: 'Discrete cosine transform matrix', pwelch: "Welch's power spectral density estimate",
    stft: 'Short-time Fourier transform', istft: 'Inverse short-time Fourier transform', spectrogram: 'Spectrogram using short-time Fourier transform',
    rectpuls: 'Sampled aperiodic rectangle', tripuls: 'Sampled aperiodic triangle', sawtooth: 'Sawtooth or triangle wave', gauspuls: 'Gaussian-modulated sinusoidal RF pulse',
    upsample: 'Increase sample rate by integer factor', downsample: 'Decrease sample rate by integer factor', intdump: 'Integrate and dump', upfirdn: 'Upsample, FIR filter, downsample',
    fwht: 'Fast Walsh-Hadamard transform', ifwht: 'Inverse fast Walsh-Hadamard transform', hilbert: 'Discrete-time analytic signal via Hilbert transform',
    rceps: 'Real cepstrum and minimum-phase reconstruction', cceps: 'Complex cepstrum', dftmtx: 'Discrete Fourier transform matrix',
    meanfreq: 'Mean frequency of power spectrum', medfreq: 'Median frequency of power spectrum', bandpower: 'Band power of signal',
    powerbw: 'Power bandwidth (3 dB)', obw: 'Occupied bandwidth (99% power)',
    mag2db: 'Convert magnitude to decibels', db2mag: 'Convert decibels to magnitude', pow2db: 'Convert power to decibels', db2pow: 'Convert decibels to power',
    sinc: 'Normalized sinc function', chirp: 'Swept-frequency cosine', medfilt1: '1-D median filtering',
    freqz: 'Digital filter frequency response', freqs: 'Analog filter frequency response', fir1: 'Window-based FIR filter design',
    goertzel: 'Discrete Fourier transform with second-order Goertzel algorithm', czt: 'Chirp Z-transform',
    levinson: 'Levinson-Durbin recursion', ac2poly: 'Autocorrelation to prediction polynomial', poly2ac: 'Prediction polynomial to autocorrelation',
    poly2rc: 'Prediction polynomial to reflection coefficients', rc2poly: 'Reflection coefficients to prediction polynomial',
    ac2rc: 'Autocorrelation sequence to reflection coefficients', rc2is: 'Reflection coefficients to inverse sine parameters',
    db: 'Convert energy or power measurements to decibels', filternorm: '2-norm or infinity-norm of a digital filter',
    cell2sos: 'Convert second-order-sections cell array to matrix', sos2ctf: 'Convert second-order sections to cascaded transfer functions',
    kaiserord: 'Kaiser window FIR filter design estimation parameters',
    sgolay: 'Savitzky-Golay FIR smoothing matrix', sgolayfilt: 'Savitzky-Golay filtering',
    buttap: 'Butterworth analog lowpass filter prototype', butter: 'Butterworth IIR filter design',
    filtfilt: 'Zero-phase forward and reverse digital IIR filtering', findpeaks: 'Find local maxima',
    cconv: 'Modulo-n circular convolution', envelope: 'Signal envelope', cheby1: 'Chebyshev Type I IIR filter design',
  },
};
