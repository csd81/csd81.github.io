// Wavelet Toolbox — computable subset: DCT-II (orthonormal, MATLAB-compatible) and the discrete
// wavelet transform (Haar + Daubechies db2/db4) with periodic extension, single- and multi-level.
// dct/idct match MATLAB exactly; the DWT pair is orthonormal so perfect reconstruction holds and
// Haar matches hand calculation. See plan §7 and tb/wavelet.VALIDATION.md.
import type { Builtin } from '../builtins';
import {
  type Value, rowVec, colVec, scalar, toArray, asString, asScalar, toMat as m, type Mat, isMat, isCell, makeCell,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const asRow = (src: Mat, xs: number[]) => (src.rows === 1 ? rowVec(xs) : colVec(xs));

// ── DCT-II / III (orthonormal, matches MATLAB dct/idct) ──
function dctII(x: number[]): number[] {
  const N = x.length, y = new Array(N).fill(0);
  for (let k = 0; k < N; k++) { let s = 0; for (let n = 0; n < N; n++) s += x[n] * Math.cos((Math.PI * (2 * n + 1) * k) / (2 * N)); y[k] = (k === 0 ? Math.sqrt(1 / N) : Math.sqrt(2 / N)) * s; }
  return y;
}
function idctII(y: number[]): number[] {
  const N = y.length, x = new Array(N).fill(0);
  for (let n = 0; n < N; n++) { let s = 0; for (let k = 0; k < N; k++) { const w = k === 0 ? Math.sqrt(1 / N) : Math.sqrt(2 / N); s += w * y[k] * Math.cos((Math.PI * (2 * n + 1) * k) / (2 * N)); } x[n] = s; }
  return x;
}

// ── DWT filter banks (orthonormal analysis low-pass; high-pass via QMF) ──
const SQRT2 = Math.SQRT2;
const WAVELETS: Record<string, number[]> = {
  haar: [1 / SQRT2, 1 / SQRT2],
  db1: [1 / SQRT2, 1 / SQRT2],
  db2: [(1 + Math.sqrt(3)) / (4 * SQRT2), (3 + Math.sqrt(3)) / (4 * SQRT2), (3 - Math.sqrt(3)) / (4 * SQRT2), (1 - Math.sqrt(3)) / (4 * SQRT2)],
};
/** QMF high-pass analysis filter from the low-pass: g[k] = (-1)^k · h[L-1-k]. */
function qmf(lo: number[]): number[] { const L = lo.length; return lo.map((_, k) => (k % 2 === 0 ? 1 : -1) * lo[L - 1 - k]); }
const wfilters = (name: string) => { const lo = WAVELETS[name.toLowerCase()]; if (!lo) throw new Error(`unsupported wavelet '${name}'`); return { lo, hi: qmf(lo) }; };

/** Single-level DWT with periodic ('per') extension → {cA, cD}, each length ceil(N/2).
 *  cA[k] = Σ_j lo[j]·x[(2k+j) mod N]; Haar then gives the standard (x₂ₖ,x₂ₖ₊₁) pairing. */
function dwt1(x: number[], lo: number[], hi: number[]): { cA: number[]; cD: number[] } {
  const N = x.length, L = lo.length, half = Math.ceil(N / 2);
  const cA = new Array(half).fill(0), cD = new Array(half).fill(0);
  for (let k = 0; k < half; k++) for (let j = 0; j < L; j++) { const idx = (2 * k + j) % N; cA[k] += lo[j] * x[idx]; cD[k] += hi[j] * x[idx]; }
  return { cA, cD };
}
/** Single-level inverse DWT (periodic) = transpose of the orthonormal analysis → length 2·len(cA). */
function idwt1(cA: number[], cD: number[], lo: number[], hi: number[]): number[] {
  const half = cA.length, N = 2 * half, L = lo.length, x = new Array(N).fill(0);
  for (let k = 0; k < half; k++) for (let j = 0; j < L; j++) { const idx = (2 * k + j) % N; x[idx] += lo[j] * cA[k] + hi[j] * cD[k]; }
  return x;
}
/** Normalized Haar analysis/synthesis steps (for haart/ihaart). */
function haarStep(x: number[]): { cA: number[]; cD: number[] } { const h = Math.floor(x.length / 2), cA: number[] = [], cD: number[] = []; for (let k = 0; k < h; k++) { cA.push((x[2 * k] + x[2 * k + 1]) / SQRT2); cD.push((x[2 * k] - x[2 * k + 1]) / SQRT2); } return { cA, cD }; }
function invHaarStep(cA: number[], cD: number[]): number[] { const x = new Array(cA.length * 2); for (let k = 0; k < cA.length; k++) { x[2 * k] = (cA[k] + cD[k]) / SQRT2; x[2 * k + 1] = (cA[k] - cD[k]) / SQRT2; } return x; }

export const WAVELET: ToolboxModule = {
  id: 'wavelet',
  name: 'Wavelet Toolbox',
  docBase: 'https://www.mathworks.com/help/wavelet/',
  builtins: {
    dct: (a) => { const x = m(a[0]); return ret(asRow(x, dctII(toArray(x)))); },
    idct: (a) => { const y = m(a[0]); return ret(asRow(y, idctII(toArray(y)))); },
    dwt: (a, nargout) => { const x = m(a[0]); const { lo, hi } = wfilters(a.length >= 2 ? asString(a[1]) : 'haar'); const { cA, cD } = dwt1(toArray(x), lo, hi); return nargout >= 2 ? Promise.resolve([asRow(x, cA), asRow(x, cD)]) : ret(asRow(x, cA.concat(cD))); },
    idwt: (a) => { const cA = toArray(m(a[0])), cD = toArray(m(a[1])); const { lo, hi } = wfilters(a.length >= 3 ? asString(a[2]) : 'haar'); return ret(asRow(m(a[0]), idwt1(cA, cD, lo, hi))); },
    /** [C,L] = wavedec(x,n,wname) — multilevel decomposition (C = [cA_n cD_n … cD_1], L = lengths). */
    wavedec: (a, nargout) => {
      const x = toArray(m(a[0])); const n = Math.round(asScalar(a[1])); const { lo, hi } = wfilters(a.length >= 3 ? asString(a[2]) : 'haar');
      let cur = x; const dets: number[][] = []; const lens: number[] = [];
      for (let i = 0; i < n; i++) { const { cA, cD } = dwt1(cur, lo, hi); dets.unshift(cD); cur = cA; }
      const C = cur.concat(...dets); const L = [cur.length, ...dets.map((d) => d.length), x.length];
      lens.push(...L);
      return nargout >= 2 ? Promise.resolve([rowVec(C), rowVec(lens)]) : ret(rowVec(C));
    },
    /** waverec(C,L,wname) — inverse of wavedec. */
    waverec: (a) => {
      const C = toArray(m(a[0])); const L = toArray(m(a[1])).map((v) => Math.round(v)); const { lo, hi } = wfilters(a.length >= 3 ? asString(a[2]) : 'haar');
      const n = L.length - 2; let off = L[0]; let cur = C.slice(0, off);
      for (let i = 0; i < n; i++) { const dl = L[i + 1]; const cD = C.slice(off, off + dl); off += dl; cur = idwt1(cur, cD, lo, hi); }
      return ret(rowVec(cur));
    },
    /** [a,d] = haart(x[,level]) — Haar wavelet transform. a = approximation; d = detail (cell if multilevel). */
    haart: (a, nargout) => {
      const x = toArray(m(a[0])); const maxL = Math.floor(Math.log2(x.length));
      const level = a.length >= 2 && isMat(a[1]) ? Math.round(asScalar(a[1])) : maxL;
      let cur = x; const dets: number[][] = [];
      for (let i = 0; i < level; i++) { const { cA, cD } = haarStep(cur); dets.push(cD); cur = cA; }
      const aVal = cur.length === 1 ? scalar(cur[0]) : rowVec(cur);
      if (nargout < 2) return ret(aVal);
      const d = dets.length === 1 ? rowVec(dets[0]) : makeCell(1, dets.length, dets.map((dd) => (dd.length === 1 ? scalar(dd[0]) : rowVec(dd))));
      return Promise.resolve([aVal, d]);
    },
    /** ihaart(a,d) — inverse Haar wavelet transform. */
    ihaart: (a) => {
      const aVal = toArray(m(a[0])); const dArg = a[1];
      const dets = isCell(dArg) ? dArg.items.map((it) => toArray(m(it))) : [toArray(m(dArg))];
      let cur = aVal;
      for (let i = dets.length - 1; i >= 0; i--) cur = invHaarStep(cur, dets[i]);
      return ret(rowVec(cur));
    },
  },
  help: {
    dct: 'Discrete cosine transform (DCT-II, orthonormal)', idct: 'Inverse discrete cosine transform',
    dwt: 'Single-level discrete 1-D wavelet transform', idwt: 'Single-level inverse discrete 1-D wavelet transform',
    wavedec: 'Multilevel 1-D wavelet decomposition', waverec: 'Multilevel 1-D wavelet reconstruction',
    haart: 'Haar 1-D wavelet transform', ihaart: 'Inverse Haar 1-D wavelet transform',
  },
};

