// Image Processing Toolbox — computable, validatable subset: type conversion (im2double/
// im2uint8/im2uint16/mat2gray), point ops (imcomplement/imadjust), thresholding (graythresh
// Otsu, imbinarize), and YCbCr conversion. (rgb2gray/im2gray are already base.) See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, scalar, colVec, zeros, toArray, asScalar, asString, toMat as m, applyClass,
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
    /** im2single(I) — convert image to single precision (scales integer classes to [0,1]). */
    im2single: (a) => { const A = m(a[0]); const d = A.itype === 'single' ? toArray(A) : toUnit(A); return ret(applyClass(likeShape(A, d), 'single')); },
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

    // ── spatial filtering ──
    /** fspecial(type,…) — predefined 2-D filter kernels. */
    fspecial: (a) => ret(fromRows(fspecial(asString(a[0]).toLowerCase(), a.slice(1)))),
    /** imfilter(A,h[,boundary][,'conv'|'corr'][,'same'|'full']) — 2-D filtering (default corr, 0-pad, same). */
    imfilter: (a) => {
      const A = matToRows(m(a[0])), h = matToRows(m(a[1]));
      let conv = false; let boundary: number | string = 0;
      for (const arg of a.slice(2)) { if (isMat(arg) && (arg as Mat).isChar) { const o = asString(arg).toLowerCase(); if (o === 'conv') conv = true; else if (o === 'corr' || o === 'same' || o === 'full') { /* corr/shape */ } else boundary = o; } else if (isMat(arg)) boundary = asScalar(arg); }
      return ret(fromRows(filter2d(A, h, conv, boundary)));
    },
    /** imgaussfilt(A[,sigma]) — Gaussian smoothing (default sigma 0.5), replicate padding. */
    imgaussfilt: (a) => { const sigma = a.length >= 2 && isMat(a[1]) ? asScalar(a[1]) : 0.5; const sz = 2 * Math.ceil(2 * sigma) + 1; return ret(fromRows(filter2d(matToRows(m(a[0])), fspecial('gaussian', [{ kind: 'num', rows: 1, cols: 2, data: Float64Array.of(sz, sz) } as Mat, scalar(sigma)]), false, 'replicate'))); },
    /** adaptthresh(I[,sensitivity][,Name,Value]) — locally adaptive threshold (Bradley's method).
     *  Statistic: 'mean'(default)|'median'|'gaussian'; ForegroundPolarity: 'bright'(default)|'dark';
     *  NeighborhoodSize default 2*floor(size/16)+1. Returns a double threshold image in [0,1]. */
    adaptthresh: (a) => ret(adaptthresh(a)),
    /** stretchlim(I[,tol]) — [low;high] contrast-stretch limits (256-bin CDF, default 1% saturation). */
    stretchlim: (a) => {
      const u = toUnit(m(a[0])); let lo = 0.01, hi = 0.99;
      if (a.length >= 2 && isMat(a[1])) { const t = toArray(m(a[1])); if (t.length >= 2) { lo = t[0]; hi = t[1]; } else { lo = t[0]; hi = 1 - t[0]; } }
      const nb = 256, hist = new Array(nb).fill(0); for (const v of u) hist[Math.min(nb - 1, Math.max(0, Math.round(v * (nb - 1))))]++;
      const total = u.length; let cum = 0, loB = 0, hiB = nb - 1;
      cum = 0; for (let i = 0; i < nb; i++) { cum += hist[i]; if (cum / total > lo) { loB = i; break; } }
      cum = 0; for (let i = 0; i < nb; i++) { cum += hist[i]; if (cum / total >= hi) { hiB = i; break; } }
      if (loB >= hiB) { loB = 0; hiB = nb - 1; }
      return ret(colVec([loB / (nb - 1), hiB / (nb - 1)]));
    },
    /** rgb2lin(rgb) / lin2rgb(rgb) — sRGB EOTF / inverse-EOTF (gamma decode/encode), double in [0,1]. */
    rgb2lin: (a) => ret(likeShape(m(a[0]), toArray(m(a[0])).map((c) => (c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4)))),
    lin2rgb: (a) => ret(likeShape(m(a[0]), toArray(m(a[0])).map((c) => (c <= 0.0031308 ? 12.92 * c : 1.055 * c ** (1 / 2.4) - 0.055)))),
    /** imresize(A,scale|[r c][,method]) — resize via u=i/scale+0.5(1−1/scale); 'nearest' or 'bilinear' (no antialiasing). */
    imresize: (a) => {
      const A = matToRows(m(a[0])); const R = A.length, C = A[0]?.length ?? 0;
      let method = 'bilinear', szArg: Mat | null = null;
      for (const arg of a.slice(1)) { if (isMat(arg) && (arg as Mat).isChar) method = asString(arg).toLowerCase(); else if (isMat(arg) && !szArg) szArg = arg as Mat; }
      let outR = R, outC = C; if (szArg) { const s = toArray(szArg); if (s.length >= 2) { outR = Math.round(s[0]); outC = Math.round(s[1]); } else { outR = Math.round(R * s[0]); outC = Math.round(C * s[0]); } }
      const sr = outR / R, sc = outC / C; const out: number[][] = [];
      const samp = (ur: number, uc: number) => {
        ur = Math.max(1, Math.min(R, ur)); uc = Math.max(1, Math.min(C, uc));
        if (method === 'nearest') return A[Math.round(ur) - 1][Math.round(uc) - 1];
        const ri = Math.max(0, Math.min(R - 2, Math.floor(ur) - 1)), ci = Math.max(0, Math.min(C - 2, Math.floor(uc) - 1));
        const fr = ur - 1 - ri, fc = uc - 1 - ci;
        return (1 - fr) * (1 - fc) * A[ri][ci] + (1 - fr) * fc * A[ri][ci + 1] + fr * (1 - fc) * A[ri + 1][ci] + fr * fc * A[ri + 1][ci + 1];
      };
      for (let i = 0; i < outR; i++) { out[i] = []; const ur = (i + 1) / sr + 0.5 * (1 - 1 / sr); for (let j = 0; j < outC; j++) out[i][j] = samp(ur, (j + 1) / sc + 0.5 * (1 - 1 / sc)); }
      return ret(fromRows(out));
    },
  },
  help: {
    im2double: 'Convert image to double precision [0,1]', im2uint8: 'Convert image to uint8', im2uint16: 'Convert image to uint16',
    mat2gray: 'Scale matrix values to grayscale [0,1]', imcomplement: 'Complement (negative) of an image', imadjust: 'Adjust image intensity values',
    graythresh: 'Global image threshold (Otsu method)', imbinarize: 'Binarize image by thresholding',
    rgb2ycbcr: 'Convert RGB to YCbCr', ycbcr2rgb: 'Convert YCbCr to RGB',
    fspecial: 'Create a predefined 2-D filter kernel', imfilter: 'N-D filtering of images', imgaussfilt: '2-D Gaussian smoothing filtering',
    stretchlim: 'Find limits to contrast-stretch an image', rgb2lin: 'Apply gamma decoding (sRGB to linear)', lin2rgb: 'Apply gamma encoding (linear to sRGB)', imresize: 'Resize an image',
    im2single: 'Convert image to single precision', adaptthresh: 'Adaptive image threshold using local first-order statistics',
  },
};

/** Apply a per-row 3→3 map to an N×3 matrix (rows of [c1 c2 c3]). */
function mapRows3(M: Mat, f: (a: number, b: number, c: number) => number[]): Mat {
  const N = M.rows; const o = zeros(N, 3);
  for (let r = 0; r < N; r++) { const out = f(M.data[r], M.data[r + N], M.data[r + 2 * N]); for (let c = 0; c < 3; c++) o.data[r + c * N] = out[c]; }
  return o;
}
/** Rows of a column-major Mat as number[][]. */
function matToRows(M: Mat): number[][] { const o: number[][] = []; for (let r = 0; r < M.rows; r++) { const row: number[] = []; for (let c = 0; c < M.cols; c++) row.push(M.data[r + c * M.rows]); o.push(row); } return o; }
/** Build a column-major Mat from number[][]. */
function fromRows(rows: number[][]): Mat { const R = rows.length, C = R ? Math.max(...rows.map((r) => r.length)) : 0; const o = zeros(R, C); for (let r = 0; r < R; r++) for (let c = 0; c < (rows[r]?.length ?? 0); c++) o.data[r + c * R] = rows[r][c]; return o; }

/** adaptthresh(I[,sensitivity][,'Name',Value,...]) — locally adaptive threshold (Bradley).
 *  Mirrors MATLAB's adaptthresh: convert image to double in [0,1], compute a local
 *  first-order statistic over a neighborhood, scale by a sensitivity-derived factor,
 *  and saturate to [0,1]. Verified vs MATLAB R2026a for mean/median/gaussian & both polarities. */
function adaptthresh(a: Value[]): Mat {
  const A = m(a[0]);
  const R = A.rows, C = A.cols;
  // ---- parse options ----
  let sensitivity = 0.5;
  let statistic = 'mean';
  let polarityBright = true;
  // default NeighborhoodSize = 2*floor(size/16)+1 (per dimension)
  let nhr = 2 * Math.floor(R / 16) + 1;
  let nhc = 2 * Math.floor(C / 16) + 1;
  const rest = a.slice(1);
  let i = 0;
  if (rest.length && isMat(rest[0]) && !(rest[0] as Mat).isChar) { sensitivity = asScalar(rest[0]); i = 1; }
  for (; i + 1 < rest.length; i += 2) {
    const name = asString(rest[i]).toLowerCase();
    const val = rest[i + 1];
    if ('statistic'.startsWith(name)) statistic = asString(val).toLowerCase();
    else if ('foregroundpolarity'.startsWith(name)) polarityBright = asString(val).toLowerCase() === 'bright';
    else if ('neighborhoodsize'.startsWith(name)) {
      const sz = toArray(m(val));
      if (sz.length >= 2) { nhr = Math.round(sz[0]); nhc = Math.round(sz[1]); } else { nhr = nhc = Math.round(sz[0]); }
    }
  }
  // sensitivity -> scale factor
  const scaleFactor = polarityBright ? 0.6 + (1 - sensitivity) : 0.4 + sensitivity;
  // image to double in [0,1]
  const unit = toUnit(A);
  const I: number[][] = [];
  for (let r = 0; r < R; r++) { I[r] = []; for (let c = 0; c < C; c++) I[r][c] = unit[r + c * R]; }

  let T: number[][];
  if (statistic === 'mean') {
    // local mean over nhr×nhc with 'replicate' padding, then × scaleFactor.
    const kr = nhr, kc = nhc; const ker = Array.from({ length: kr }, () => new Array(kc).fill(1 / (kr * kc)));
    T = filter2d(I, ker, false, 'replicate').map((row) => row.map((v) => v * scaleFactor));
  } else if (statistic === 'median') {
    // local median over nhr×nhc with 'symmetric' padding, then × scaleFactor.
    T = localMedian(I, nhr, nhc).map((row) => row.map((v) => v * scaleFactor));
  } else { // gaussian: imgaussfilt(I, nhoodSize) — nhood used as sigma, replicate padding.
    const sigma = nhr; const sz = 2 * Math.ceil(2 * sigma) + 1;
    const ker = fspecial('gaussian', [{ kind: 'num', rows: 1, cols: 2, data: Float64Array.of(sz, sz) } as Mat, scalar(sigma)]);
    T = filter2d(I, ker, false, 'replicate').map((row) => row.map((v) => v * scaleFactor));
  }
  // saturate to [0,1]
  return fromRows(T.map((row) => row.map((v) => (v < 0 ? 0 : v > 1 ? 1 : v))));
}

/** Local median filter over an nhr×nhc neighborhood with 'symmetric' boundary (medfilt2). */
function localMedian(A: number[][], nhr: number, nhc: number): number[][] {
  const R = A.length, C = A[0]?.length ?? 0; const cy = Math.floor(nhr / 2), cx = Math.floor(nhc / 2);
  const rf = (k: number, n: number) => { k = ((k % (2 * n)) + 2 * n) % (2 * n); return k < n ? k : 2 * n - 1 - k; };
  const out: number[][] = [];
  for (let r = 0; r < R; r++) {
    out[r] = [];
    for (let c = 0; c < C; c++) {
      const win: number[] = [];
      for (let di = 0; di < nhr; di++) for (let dj = 0; dj < nhc; dj++) win.push(A[rf(r + di - cy, R)][rf(c + dj - cx, C)]);
      win.sort((x, y) => x - y);
      const n = win.length; out[r][c] = n % 2 ? win[(n - 1) / 2] : (win[n / 2 - 1] + win[n / 2]) / 2;
    }
  }
  return out;
}

/** Predefined 2-D filter kernels (subset of MATLAB fspecial). */
function fspecial(type: string, args: Value[]): number[][] {
  const a0 = args[0] && isMat(args[0]) ? toArray(m(args[0])) : null;
  switch (type) {
    case 'sobel': return [[1, 2, 1], [0, 0, 0], [-1, -2, -1]];
    case 'prewitt': return [[1, 1, 1], [0, 0, 0], [-1, -1, -1]];
    case 'average': { let r = 3, c = 3; if (a0) { if (a0.length >= 2) { r = a0[0]; c = a0[1]; } else r = c = Math.round(a0[0]); } const v = 1 / (r * c); return Array.from({ length: r }, () => new Array(c).fill(v)); }
    case 'laplacian': { const al = a0 ? a0[0] : 0.2; const h1 = al / (al + 1), h2 = (1 - al) / (al + 1), h3 = -4 / (al + 1); return [[h1, h2, h1], [h2, h3, h2], [h1, h2, h1]]; }
    case 'gaussian': { let r = 3, c = 3; if (a0) { if (a0.length >= 2) { r = a0[0]; c = a0[1]; } else r = c = Math.round(a0[0]); } const sig = args[1] && isMat(args[1]) ? asScalar(args[1]) : 0.5; const cy = (r - 1) / 2, cx = (c - 1) / 2; const g: number[][] = []; let sum = 0; for (let i = 0; i < r; i++) { g[i] = []; for (let j = 0; j < c; j++) { const v = Math.exp(-(((i - cy) ** 2) + ((j - cx) ** 2)) / (2 * sig * sig)); g[i][j] = v; sum += v; } } return g.map((row) => row.map((v) => v / sum)); }
    case 'disk': { const rad = a0 ? Math.round(a0[0]) : 5; const n = 2 * rad + 1; const k: number[][] = []; let sum = 0; for (let i = 0; i < n; i++) { k[i] = []; for (let j = 0; j < n; j++) { const inside = (i - rad) ** 2 + (j - rad) ** 2 <= rad * rad ? 1 : 0; k[i][j] = inside; sum += inside; } } return k.map((row) => row.map((v) => v / sum)); }
    default: throw new Error(`fspecial: type '${type}' not supported`);
  }
}
/** 2-D correlation/convolution; boundary 0 (default), 'replicate', 'circular', or 'symmetric'. */
function filter2d(A: number[][], h: number[][], conv: boolean, boundary: number | string): number[][] {
  const R = A.length, C = A[0]?.length ?? 0, hr = h.length, hc = h[0]?.length ?? 0;
  const cy = Math.floor(hr / 2), cx = Math.floor(hc / 2);
  const ker = conv ? h.map((row) => [...row].reverse()).reverse() : h;
  const get = (i: number, j: number): number => {
    if (i >= 0 && i < R && j >= 0 && j < C) return A[i][j];
    if (typeof boundary === 'number') return boundary;
    if (boundary === 'replicate') return A[Math.max(0, Math.min(R - 1, i))][Math.max(0, Math.min(C - 1, j))];
    if (boundary === 'circular') return A[((i % R) + R) % R][((j % C) + C) % C];
    const rf = (k: number, n: number) => { k = ((k % (2 * n)) + 2 * n) % (2 * n); return k < n ? k : 2 * n - 1 - k; };
    return A[rf(i, R)][rf(j, C)];   // symmetric
  };
  const out: number[][] = [];
  for (let i = 0; i < R; i++) { out[i] = []; for (let j = 0; j < C; j++) { let s = 0; for (let di = 0; di < hr; di++) for (let dj = 0; dj < hc; dj++) s += ker[di][dj] * get(i + di - cy, j + dj - cx); out[i][j] = s; } }
  return out;
}
