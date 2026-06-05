// Image Processing Toolbox — computable, validatable subset: type conversion (im2double/
// im2uint8/im2uint16/mat2gray), point ops (imcomplement/imadjust), thresholding (graythresh
// Otsu, imbinarize), and YCbCr conversion. (rgb2gray/im2gray are already base.) See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, scalar, zeros, toArray, asScalar, toMat as m, applyClass,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);
const clamp01 = (x: number) => (x < 0 ? 0 : x > 1 ? 1 : x);
/** Scale of an integer image type (max representable value). */
const typeMax = (t?: string) => (t === 'uint8' ? 255 : t === 'uint16' ? 65535 : t === 'int16' ? 32767 : 1);
/** Read an image Mat to double-in-[0,1] (honoring its integer class), for internal computation. */
function toUnit(M: Mat): number[] {
  const d = toArray(M);
  if (M.itype === 'uint8') return d.map((x) => x / 255);
  if (M.itype === 'uint16') return d.map((x) => x / 65535);
  if (M.itype === 'int16') return d.map((x) => (x + 32768) / 65535);
  if (M.isBool) return d.map((x) => (x ? 1 : 0));
  return d;   // already double in [0,1]
}
function likeShape(M: Mat, data: number[]): Mat { const o = zeros(M.rows, M.cols); o.data.set(data); return o; }

/** Otsu's threshold on a unit-scaled grayscale image (returns level in [0,1]).
 *  Matches MATLAB graythresh's tie-break: average the bin indices of all maxima. */
function otsu(unit: number[]): number {
  const nb = 256; const hist = new Array(nb).fill(0);
  for (const v of unit) hist[Math.min(nb - 1, Math.max(0, Math.round(v * (nb - 1))))]++;
  const total = unit.length; let sum = 0; for (let i = 0; i < nb; i++) sum += i * hist[i];
  const between = new Array(nb).fill(-1); let sumB = 0, wB = 0;
  for (let i = 0; i < nb; i++) {
    wB += hist[i]; const wF = total - wB; if (wB === 0 || wF === 0) continue;
    sumB += i * hist[i]; const mB = sumB / wB, mF = (sum - sumB) / wF; between[i] = wB * wF * (mB - mF) ** 2;
  }
  const mx = Math.max(...between); if (mx <= 0) return 0;
  const idxs: number[] = []; for (let i = 0; i < nb; i++) if (between[i] >= mx * (1 - 1e-9)) idxs.push(i);
  return (idxs.reduce((s, x) => s + x, 0) / idxs.length) / (nb - 1);
}

export const IMAGES: ToolboxModule = {
  id: 'images',
  name: 'Image Processing Toolbox',
  docBase: 'https://www.mathworks.com/help/images/',
  builtins: {
    /** im2double(I) — convert image to double in [0,1] (scales integer classes). */
    im2double: (a) => ret(likeShape(m(a[0]), toUnit(m(a[0])))),
    /** im2uint8(I) — convert to uint8 [0,255]. */
    im2uint8: (a) => ret(applyClass(likeShape(m(a[0]), toUnit(m(a[0])).map((x) => Math.round(clamp01(x) * 255))), 'uint8')),
    /** im2uint16(I) — convert to uint16 [0,65535]. */
    im2uint16: (a) => ret(applyClass(likeShape(m(a[0]), toUnit(m(a[0])).map((x) => Math.round(clamp01(x) * 65535))), 'uint16')),
    /** mat2gray(A[,[lo hi]]) — linearly scale to [0,1] (default lo/hi = min/max). */
    mat2gray: (a) => {
      const A = m(a[0]); const d = toArray(A);
      let lo: number, hi: number;
      if (a.length >= 2 && isMat(a[1])) { const lim = toArray(m(a[1])); lo = lim[0]; hi = lim[1]; } else { lo = Math.min(...d); hi = Math.max(...d); }
      const den = hi - lo || 1;
      return ret(likeShape(A, d.map((x) => clamp01((x - lo) / den))));
    },
    /** imcomplement(I) — negative image (class-aware). */
    imcomplement: (a) => { const A = m(a[0]); const mx = A.isBool ? 1 : typeMax(A.itype); const o = likeShape(A, toArray(A).map((x) => mx - x)); if (A.isBool) o.isBool = true; return ret(A.itype ? applyClass(o, A.itype) : o); },
    /** imadjust(I,[lin hin],[lout hout],gamma) — intensity remap (defaults [0 1],[0 1],1). */
    imadjust: (a) => {
      const A = m(a[0]); const u = toUnit(A);
      const li = a.length >= 2 && isMat(a[1]) && (m(a[1]).rows * m(a[1]).cols) >= 2 ? toArray(m(a[1])) : [0, 1];
      const lo = a.length >= 3 && isMat(a[2]) && (m(a[2]).rows * m(a[2]).cols) >= 2 ? toArray(m(a[2])) : [0, 1];
      const g = a.length >= 4 && isMat(a[3]) ? asScalar(a[3]) : 1;
      const [lin, hin] = li, [lout, hout] = lo; const den = hin - lin || 1;
      return ret(likeShape(A, u.map((x) => lout + (hout - lout) * clamp01((x - lin) / den) ** g)));
    },
    /** graythresh(I) — Otsu global threshold level in [0,1]. */
    graythresh: (a) => ret(scalar(otsu(toUnit(m(a[0]))))),
    /** imbinarize(I[,level]) — threshold to logical (default Otsu). */
    imbinarize: (a) => { const A = m(a[0]); const u = toUnit(A); const lvl = a.length >= 2 && isMat(a[1]) ? asScalar(a[1]) : otsu(u); const o = likeShape(A, u.map((x) => (x > lvl ? 1 : 0))); o.isBool = true; return ret(o); },
    /** rgb2ycbcr / ycbcr2rgb on an N×3 colormap-style matrix (BT.601, double in [0,1]). */
    rgb2ycbcr: (a) => ret(mapRows3(m(a[0]), (r, gg, b) => [16 / 255 + (65.481 * r + 128.553 * gg + 24.966 * b) / 255, 128 / 255 + (-37.797 * r - 74.203 * gg + 112.0 * b) / 255, 128 / 255 + (112.0 * r - 93.786 * gg - 18.214 * b) / 255])),
    ycbcr2rgb: (a) => ret(mapRows3(m(a[0]), (y, cb, cr) => { const Y = y * 255 - 16, Cb = cb * 255 - 128, Cr = cr * 255 - 128; return [(1.164 * Y + 1.596 * Cr) / 255, (1.164 * Y - 0.392 * Cb - 0.813 * Cr) / 255, (1.164 * Y + 2.017 * Cb) / 255]; })),
  },
  help: {
    im2double: 'Convert image to double precision [0,1]', im2uint8: 'Convert image to uint8', im2uint16: 'Convert image to uint16',
    mat2gray: 'Scale matrix values to grayscale [0,1]', imcomplement: 'Complement (negative) of an image', imadjust: 'Adjust image intensity values',
    graythresh: 'Global image threshold (Otsu method)', imbinarize: 'Binarize image by thresholding',
    rgb2ycbcr: 'Convert RGB to YCbCr', ycbcr2rgb: 'Convert YCbCr to RGB',
  },
};

/** Apply a per-row 3→3 map to an N×3 matrix (rows of [c1 c2 c3]). */
function mapRows3(M: Mat, f: (a: number, b: number, c: number) => number[]): Mat {
  const N = M.rows; const o = zeros(N, 3);
  for (let r = 0; r < N; r++) { const out = f(M.data[r], M.data[r + N], M.data[r + 2 * N]); for (let c = 0; c < 3; c++) o.data[r + c * N] = out[c]; }
  return o;
}
