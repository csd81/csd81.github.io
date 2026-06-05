// Signal Processing Toolbox — computable subset: window functions, dB conversions, and a few
// filters/generators. Window math validated against Octave core (hamming/hanning/blackman/
// bartlett/sinc) and closed-form definitions. See plan §7 and tb/signal.VALIDATION.md.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, isStr, colVec, rowVec, toArray, map,
  asString, asScalar, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
/** Σ bₙ·e^{-jnw} (digital, ascending powers) → [re, im]. */
function cpoly(b: number[], w: number): [number, number] { let re = 0, im = 0; for (let n = 0; n < b.length; n++) { re += b[n] * Math.cos(n * w); im -= b[n] * Math.sin(n * w); } return [re, im]; }
/** Σ c[i]·(jw)^(L-1-i) (analog, descending powers) → [re, im]. */
function cpolyS(c: number[], w: number): [number, number] { let re = 0, im = 0; const L = c.length; for (let i = 0; i < L; i++) { const p = L - 1 - i, mag = c[i] * w ** p; switch (((p % 4) + 4) % 4) { case 0: re += mag; break; case 1: im += mag; break; case 2: re -= mag; break; default: im -= mag; } } return [re, im]; }

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
  },
  help: {
    rectwin: 'Rectangular window', hann: 'Hann (Hanning) window', hanning: 'Hann window (symmetric)', hamming: 'Hamming window',
    blackman: 'Blackman window', blackmanharris: 'Minimum 4-term Blackman-Harris window', nuttallwin: 'Nuttall-defined 4-term Blackman-Harris window',
    flattopwin: 'Flat top weighted window', bartlett: 'Bartlett (triangular, zero endpoints) window', triang: 'Triangular window', barthannwin: 'Modified Bartlett-Hann window',
    gausswin: 'Gaussian window', kaiser: 'Kaiser window', tukeywin: 'Tukey (tapered cosine) window',
    mag2db: 'Convert magnitude to decibels', db2mag: 'Convert decibels to magnitude', pow2db: 'Convert power to decibels', db2pow: 'Convert decibels to power',
    sinc: 'Normalized sinc function', chirp: 'Swept-frequency cosine', medfilt1: '1-D median filtering',
    freqz: 'Digital filter frequency response', freqs: 'Analog filter frequency response', fir1: 'Window-based FIR filter design',
  },
};
