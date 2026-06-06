// Image Processing Toolbox — computable, validatable subset: type conversion (im2double/
// im2uint8/im2uint16/mat2gray), point ops (imcomplement/imadjust), thresholding (graythresh
// Otsu, imbinarize), and YCbCr conversion. (rgb2gray/im2gray are already base.) See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type StructV, isMat, scalar, colVec, zeros, toArray, asScalar, asString, toMat as m, applyClass,
  ndSize, makeND,
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
    /** ind2rgb(X,MAP) — indexed image + colormap → M×N×3 double RGB. Mirrors ind2rgb.m. */
    ind2rgb: (a) => {
      const A = m(a[0]), cm = m(a[1]);
      const isInt = !!A.itype && A.itype !== 'single';      // integer classes are 0-based indices
      const idx = toArray(A).map((v) => (isInt ? v + 1 : v));
      const ncol = cm.rows, R = A.rows, C = A.cols, total = R * C;
      const out = new Float64Array(total * 3);
      for (let p = 0; p < total; p++) {
        let i = Math.round(idx[p]);
        if (i < 1) i = 1; else if (i > ncol) i = ncol;      // clamp to [1, size(MAP,1)]
        for (let ch = 0; ch < 3; ch++) out[p + ch * total] = cm.data[(i - 1) + ch * ncol];
      }
      return ret(makeND([R, C, 3], out));
    },
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
        const ri1 = Math.min(ri + 1, R - 1), ci1 = Math.min(ci + 1, C - 1); // clamp neighbor for 1-D images (R==1 or C==1)
        const fr = ur - 1 - ri, fc = uc - 1 - ci;
        return (1 - fr) * (1 - fc) * A[ri][ci] + (1 - fr) * fc * A[ri][ci1] + fr * (1 - fc) * A[ri1][ci] + fr * fc * A[ri1][ci1];
      };
      for (let i = 0; i < outR; i++) { out[i] = []; const ur = (i + 1) / sr + 0.5 * (1 - 1 / sr); for (let j = 0; j < outC; j++) out[i][j] = samp(ur, (j + 1) / sc + 0.5 * (1 - 1 / sc)); }
      return ret(fromRows(out));
    },
    /** padarray(A,padsize[,padval|method][,direction]) — pad a 2-D array (constant/circular/replicate/symmetric). */
    padarray: (a) => ret(padarray(a)),
    integralImage: (a) => integralImage(a),
    integralImage3: (a) => integralImage3(a),
    integralBoxFilter: (a) => integralBoxFilter(a),
    integralBoxFilter3: (a) => integralBoxFilter3(a),
    /** regionprops(BW[,props...]) — measure properties of connected components (8-conn). */
    regionprops: (a) => ret(regionprops(a)),
    /** bwlabel(BW[,conn]) — label connected components; [L,num]. conn=8 (default) or 4. */
    bwlabel: (a, nargout) => {
      const BWm = m(a[0]); const R = BWm.rows, C = BWm.cols; const d = toArray(BWm);
      const BW: number[][] = [];
      for (let r = 0; r < R; r++) { BW[r] = []; for (let c = 0; c < C; c++) BW[r][c] = d[r + c * R] ? 1 : 0; }
      const conn = a.length >= 2 && isMat(a[1]) ? Math.round(asScalar(a[1])) : 8;
      const regions = bwLabelConn(BW, R, C, conn === 4 ? 4 : 8);
      const o = zeros(R, C);
      for (let lab = 0; lab < regions.length; lab++) for (const li of regions[lab]) o.data[li] = lab + 1;
      return Promise.resolve(nargout >= 2 ? [o, scalar(regions.length)] : [o]);
    },
    /** imerode(BW,SE) — binary erosion (out-of-border treated as foreground → 1-padding). */
    imerode: (a) => ret(morph(m(a[0]), seNeighborhood(a[1]), 'erode')),
    /** imdilate(BW,SE) — binary dilation (out-of-border treated as background → 0-padding). */
    imdilate: (a) => ret(morph(m(a[0]), seNeighborhood(a[1]), 'dilate')),
    /** imopen(BW,SE) — erosion followed by dilation. */
    imopen: (a) => ret(openClose(m(a[0]), seNeighborhood(a[1]), 'open')),
    /** imclose(BW,SE) — dilation followed by erosion. */
    imclose: (a) => ret(openClose(m(a[0]), seNeighborhood(a[1]), 'close')),
  },
  help: {
    ind2rgb: 'Convert indexed image to RGB image',
    im2double: 'Convert image to double precision [0,1]', im2uint8: 'Convert image to uint8', im2uint16: 'Convert image to uint16',
    mat2gray: 'Scale matrix values to grayscale [0,1]', imcomplement: 'Complement (negative) of an image', imadjust: 'Adjust image intensity values',
    graythresh: 'Global image threshold (Otsu method)', imbinarize: 'Binarize image by thresholding',
    rgb2ycbcr: 'Convert RGB to YCbCr', ycbcr2rgb: 'Convert YCbCr to RGB',
    fspecial: 'Create a predefined 2-D filter kernel', imfilter: 'N-D filtering of images', imgaussfilt: '2-D Gaussian smoothing filtering',
    stretchlim: 'Find limits to contrast-stretch an image', rgb2lin: 'Apply gamma decoding (sRGB to linear)', lin2rgb: 'Apply gamma encoding (linear to sRGB)', imresize: 'Resize an image',
    im2single: 'Convert image to single precision', adaptthresh: 'Adaptive image threshold using local first-order statistics',
    integralImage: 'Compute upright or rotated integral image', integralImage3: 'Compute 3-D integral image',
    integralBoxFilter: '2-D box filtering of integral images', integralBoxFilter3: '3-D box filtering of 3-D integral images',
    padarray: 'Pad array (constant, circular, replicate, or symmetric)',
    regionprops: 'Measure properties of image regions (connected components)',
    bwlabel: 'Label connected components in a 2-D binary image',
    imerode: 'Erode a binary image with a structuring element',
    imdilate: 'Dilate a binary image with a structuring element',
    imopen: 'Morphologically open a binary image (erode then dilate)',
    imclose: 'Morphologically close a binary image (dilate then erode)',
  },
};

/** Connected-component labeling with 4- or 8-connectivity, in MATLAB column-major
 *  scan order (increasing linear index). Returns per region the sorted 0-based
 *  column-major linear pixel indices. */
function bwLabelConn(BW: number[][], R: number, C: number, conn: 4 | 8): number[][] {
  const label = new Int32Array(R * C).fill(0);
  const regions: number[][] = [];
  const idx = (r: number, c: number) => r + c * R;
  const offs4: Array<[number, number]> = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  const offs8: Array<[number, number]> = [];
  for (let dr = -1; dr <= 1; dr++) for (let dc = -1; dc <= 1; dc++) if (dr || dc) offs8.push([dr, dc]);
  const offs = conn === 4 ? offs4 : offs8;
  for (let c = 0; c < C; c++) {
    for (let r = 0; r < R; r++) {
      if (!BW[r][c] || label[idx(r, c)] !== 0) continue;
      const lab = regions.length + 1; const pix: number[] = [];
      const stack: Array<[number, number]> = [[r, c]]; label[idx(r, c)] = lab;
      while (stack.length) {
        const [pr, pc] = stack.pop()!; pix.push(idx(pr, pc));
        for (const [dr, dc] of offs) {
          const nr = pr + dr, nc = pc + dc;
          if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
          if (BW[nr][nc] && label[idx(nr, nc)] === 0) { label[idx(nr, nc)] = lab; stack.push([nr, nc]); }
        }
      }
      pix.sort((x, y) => x - y); regions.push(pix);
    }
  }
  return regions;
}

/** Offsets (row,col) of a structuring element's set elements relative to its
 *  origin (center = floor(size/2)). Accepts a numeric/logical neighborhood
 *  matrix (nonzeros are the SE) or a strel-style object exposing a Neighborhood. */
function seNeighborhood(v: Value): Array<[number, number]> {
  let M: Mat | null = null;
  if (isMat(v)) M = m(v);
  else if (v && typeof v === 'object' && (v as StructV).kind === 'struct') {
    const f = (v as StructV).fields;
    const nb = f.get('Neighborhood')?.[0] ?? f.get('neighborhood')?.[0];
    if (nb && isMat(nb)) M = m(nb);
  }
  if (!M) M = scalar(1);
  const R = M.rows, C = M.cols; const cy = Math.floor(R / 2), cx = Math.floor(C / 2);
  const off: Array<[number, number]> = [];
  for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (M.data[r + c * R]) off.push([r - cy, c - cx]);
  return off;
}

/** Binary erosion/dilation with a structuring element given as origin-relative
 *  offsets. Erosion treats out-of-border pixels as foreground (value-1 padding,
 *  matching MATLAB); dilation treats them as background. Returns a logical Mat. */
function morph(BWm: Mat, off: Array<[number, number]>, op: 'erode' | 'dilate'): Mat {
  const R = BWm.rows, C = BWm.cols; const d = toArray(BWm);
  const get = (r: number, c: number) => (d[r + c * R] ? 1 : 0);
  const o = zeros(R, C);
  for (let c = 0; c < C; c++) {
    for (let r = 0; r < R; r++) {
      let val: number;
      if (op === 'erode') {
        val = 1;
        for (const [dr, dc] of off) {
          const nr = r + dr, nc = c + dc;
          const px = (nr < 0 || nr >= R || nc < 0 || nc >= C) ? 1 : get(nr, nc); // 1-pad
          if (!px) { val = 0; break; }
        }
      } else {
        // dilation: reflect SE about origin; out-of-border = 0.
        val = 0;
        for (const [dr, dc] of off) {
          const nr = r - dr, nc = c - dc;
          if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue; // 0-pad
          if (get(nr, nc)) { val = 1; break; }
        }
      }
      o.data[r + c * R] = val;
    }
  }
  o.isBool = true;
  return o;
}

/** imopen/imclose. MATLAB pads the image (with 0) by the SE's reach before the
 *  two morphology passes and crops back, so the border does not artificially
 *  preserve foreground during the internal erosion. Validated vs MATLAB R2026a. */
function openClose(BWm: Mat, off: Array<[number, number]>, op: 'open' | 'close'): Mat {
  const R = BWm.rows, C = BWm.cols; const d = toArray(BWm);
  // SE reach in each direction.
  let up = 0, down = 0, left = 0, right = 0;
  for (const [dr, dc] of off) { up = Math.max(up, -dr); down = Math.max(down, dr); left = Math.max(left, -dc); right = Math.max(right, dc); }
  const pT = up, pB = down, pL = left, pR = right;
  const pR_ = R + pT + pB, pC_ = C + pL + pR;
  const padded = zeros(pR_, pC_);
  for (let c = 0; c < C; c++) for (let r = 0; r < R; r++) padded.data[(r + pT) + (c + pL) * pR_] = d[r + c * R] ? 1 : 0;
  const seq: Array<'erode' | 'dilate'> = op === 'open' ? ['erode', 'dilate'] : ['dilate', 'erode'];
  let cur = padded;
  for (const step of seq) cur = morph(cur, off, step);
  const o = zeros(R, C);
  for (let c = 0; c < C; c++) for (let r = 0; r < R; r++) o.data[r + c * R] = cur.data[(r + pT) + (c + pL) * pR_];
  o.isBool = true;
  return o;
}

/** Apply a per-row 3→3 map to an N×3 matrix (rows of [c1 c2 c3]). */
function mapRows3(M: Mat, f: (a: number, b: number, c: number) => number[]): Mat {
  const N = M.rows; const o = zeros(N, 3);
  for (let r = 0; r < N; r++) { const out = f(M.data[r], M.data[r + N], M.data[r + 2 * N]); for (let c = 0; c < 3; c++) o.data[r + c * N] = out[c]; }
  return o;
}
/** Rows of a column-major Mat as number[][]. */
function matToRows(M: Mat): number[][] { const o: number[][] = []; for (let r = 0; r < M.rows; r++) { const row: number[] = []; for (let c = 0; c < M.cols; c++) row.push(M.data[r + c * M.rows]); o.push(row); } return o; }

/** Map a padded index `i` (range −pre … n−1+post) back into 0…n−1 per padding method. */
function padIndex(i: number, n: number, method: string): number {
  if (i >= 0 && i < n) return i;
  if (method === 'circular') return ((i % n) + n) % n;
  if (method === 'replicate') return i < 0 ? 0 : n - 1;
  if (method === 'symmetric') {
    // reflect with the border element repeated (period 2n)
    const p = ((i % (2 * n)) + 2 * n) % (2 * n);
    return p < n ? p : 2 * n - 1 - p;
  }
  return -1; // constant padding sentinel
}
/** padarray(A,padsize[,padval|method][,direction]). 2-D. Preserves class/logical. */
function padarray(args: Value[]): Mat {
  const A = m(args[0]);
  const ps = toArray(m(args[1]));
  // scalar padsize pads dim-1 only (padSize(ndims)=0); [r c] pads both dims.
  const pr = ps.length >= 1 ? Math.round(ps[0]) : 0;
  const pc = ps.length >= 2 ? Math.round(ps[1]) : 0;
  let method = 'constant';
  let padVal = 0;
  let direction = 'both';
  // args 3 and 4 are METHOD/DIRECTION/PADVAL, interchangeable for 3-4 (PADVAL only as 3rd, numeric).
  let first = 2;
  if (args.length > 2 && isMat(args[2]) && !(args[2] as Mat).isChar) { padVal = asScalar(args[2]); first = 3; }
  for (let k = first; k < args.length; k++) {
    const s = isMat(args[k]) ? asString(args[k]).toLowerCase() : '';
    if (s === 'circular' || s === 'replicate' || s === 'symmetric') method = s;
    else if (s === 'pre' || s === 'post' || s === 'both') direction = s;
  }
  const rPre = direction === 'post' ? 0 : pr, rPost = direction === 'pre' ? 0 : pr;
  const cPre = direction === 'post' ? 0 : pc, cPost = direction === 'pre' ? 0 : pc;
  const R = A.rows, C = A.cols;
  const outR = R + rPre + rPost, outC = C + cPre + cPost;
  const out = matToRows(A);
  const res: number[][] = [];
  for (let i = 0; i < outR; i++) {
    res[i] = [];
    const si = padIndex(i - rPre, R, method);
    for (let j = 0; j < outC; j++) {
      const sj = padIndex(j - cPre, C, method);
      res[i][j] = (si < 0 || sj < 0) ? padVal : out[si][sj];
    }
  }
  const o = fromRows(res);
  if (A.isBool) o.isBool = true;
  return A.itype ? applyClass(o, A.itype) : o;
}
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

// ---- integral images (Image Processing Toolbox) ----
// Ported from integralImage.m / integralImage3.m / integralBoxFilter.m /
// integralBoxFilter3.m (R2026a). The actual filtering builtin is compiled, but
// the semantics are the standard summed-area-table inclusion-exclusion.

/** integralImage(I[,'upright']) — upright summed-area table, zero-padded top & left.
 *  size(J) = size(I)+1; J(r,c) = sum of I(1:r-1, 1:c-1). Output class is double. */
function integralImage(a: Value[]): Promise<Value[]> {
  const I = m(a[0]);
  const R = I.rows, C = I.cols;
  const src = toArray(I);                       // honor integer/logical class numerically
  const oR = R + 1, oC = C + 1;
  const out = new Float64Array(oR * oC);
  for (let c = 1; c <= C; c++) {
    for (let r = 1; r <= R; r++) {
      // J(r+1,c+1) = I(r,c) + J(r,c+1) + J(r+1,c) - J(r,c)
      out[r + c * oR] = src[(r - 1) + (c - 1) * R]
        + out[(r - 1) + c * oR] + out[r + (c - 1) * oR] - out[(r - 1) + (c - 1) * oR];
    }
  }
  return ret({ kind: 'num', rows: oR, cols: oC, data: out } as Mat);
}

/** integralImage3(I) — 3-D integral image: size(J)=size(I)+1, zero-padded on the
 *  low side of every dimension; J = cumulative sum of I over all three dims. */
function integralImage3(a: Value[]): Promise<Value[]> {
  const I = m(a[0]);
  const dims = ndSize(I);
  const R = dims[0] ?? 0, C = dims[1] ?? 1, P = dims[2] ?? 1;
  const src = toArray(I);
  const oR = R + 1, oC = C + 1, oP = P + 1;
  const out = new Float64Array(oR * oC * oP);
  const sP = oR * oC;                            // page stride of the output
  for (let k = 1; k <= P; k++) {
    for (let c = 1; c <= C; c++) {
      for (let r = 1; r <= R; r++) {
        const v = src[(r - 1) + (c - 1) * R + (k - 1) * R * C];
        // 3-D inclusion-exclusion recurrence on the zero-padded table.
        const i = (i0: number, c0: number, k0: number) => out[i0 + c0 * oR + k0 * sP];
        out[r + c * oR + k * sP] = v
          + i(r - 1, c, k) + i(r, c - 1, k) + i(r, c, k - 1)
          - i(r - 1, c - 1, k) - i(r - 1, c, k - 1) - i(r, c - 1, k - 1)
          + i(r - 1, c - 1, k - 1);
      }
    }
  }
  return ret(makeND([oR, oC, oP], out));
}

/** Parse a 2- or 3-element filter size (scalar => isotropic). */
function parseFilterSize(v: Value | undefined, ndim: number, def: number): number[] {
  if (v === undefined || !isMat(v)) return new Array(ndim).fill(def);
  const d = toArray(m(v));
  if (d.length === 1) return new Array(ndim).fill(Math.round(d[0]));
  return d.slice(0, ndim).map((x) => Math.round(x));
}

/** Read the optional NormalizationFactor name/value (default: 1/prod(filterSize)). */
function normFactorFrom(a: Value[], start: number, def: number): number {
  for (let i = start; i + 1 < a.length; i++) {
    if (isMat(a[i]) && (a[i] as Mat).isChar) {
      const name = asString(a[i]).toLowerCase();
      if ('normalizationfactor'.startsWith(name)) return asScalar(a[i + 1]);
    }
  }
  return def;
}

/** integralBoxFilter(intA[,filterSize][,'NormalizationFactor',v]) — 2-D box filter
 *  via a summed-area table. Output size = size(intA) - filterSize. */
function integralBoxFilter(a: Value[]): Promise<Value[]> {
  const J = m(a[0]);
  const oR = J.rows, oC = J.cols;
  const jd = J.data;
  const fsArg = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? a[1] : undefined;
  const fs = parseFilterSize(fsArg, 2, 3);
  const fm = fs[0], fn = fs[1];
  const norm = normFactorFrom(a, fsArg ? 2 : 1, 1 / (fm * fn));
  const bR = oR - fm, bC = oC - fn;
  const out = new Float64Array(bR * bC);
  for (let c = 0; c < bC; c++) {
    for (let r = 0; r < bR; r++) {
      // sum over intA[r..r+fm, c..c+fn] (the SAT corners), then normalize.
      const s = jd[(r + fm) + (c + fn) * oR] - jd[(r + fm) + c * oR]
        - jd[r + (c + fn) * oR] + jd[r + c * oR];
      out[r + c * bR] = s * norm;
    }
  }
  return ret({ kind: 'num', rows: bR, cols: bC, data: out } as Mat);
}

/** integralBoxFilter3(intA[,filterSize][,'NormalizationFactor',v]) — 3-D box filter
 *  via a 3-D summed-area table (8-corner inclusion-exclusion). Output size =
 *  size(intA) - filterSize. Default filterSize=[3 3 3], normFactor=1/prod(fs). */
function integralBoxFilter3(a: Value[]): Promise<Value[]> {
  const J = m(a[0]);
  const dims = ndSize(J);
  const oR = dims[0] ?? 0, oC = dims[1] ?? 1, oP = dims[2] ?? 1;
  const jd = J.data;
  const sP = oR * oC;
  const fsArg = a.length >= 2 && isMat(a[1]) && !(a[1] as Mat).isChar ? a[1] : undefined;
  const fs = parseFilterSize(fsArg, 3, 3);
  const fm = fs[0], fn = fs[1], fp = fs[2];
  const norm = normFactorFrom(a, fsArg ? 2 : 1, 1 / (fm * fn * fp));
  const bR = oR - fm, bC = oC - fn, bP = oP - fp;
  const out = new Float64Array(bR * bC * bP);
  const obP = bR * bC;
  const J3 = (r: number, c: number, k: number) => jd[r + c * oR + k * sP];
  for (let k = 0; k < bP; k++) {
    for (let c = 0; c < bC; c++) {
      for (let r = 0; r < bR; r++) {
        const r1 = r + fm, c1 = c + fn, k1 = k + fp;
        const s = J3(r1, c1, k1) - J3(r, c1, k1) - J3(r1, c, k1) - J3(r1, c1, k)
          + J3(r, c, k1) + J3(r, c1, k) + J3(r1, c, k) - J3(r, c, k);
        out[r + c * bR + k * obP] = s * norm;
      }
    }
  }
  return ret(makeND([bR, bC, bP], out));
}

// ---- regionprops (Image Processing Toolbox) ----
// Ported from regionprops.m (R2026a). 2-D, 8-connectivity (the bwconncomp
// default). Regions are labeled in MATLAB column-major scan order (increasing
// linear pixel index). Coordinates are 1-based with the MATLAB pixel-center
// convention: pixel (row r, col c) has center (x=c, y=r). Validated vs live
// MATLAB R2026a (Area, Centroid, BoundingBox, Extent, FilledArea, Perimeter,
// MajorAxisLength, MinorAxisLength, Orientation, Eccentricity, EquivDiameter).

/** All deterministic shape properties this implementation supports. */
const RP_PROPS = [
  'Area', 'Centroid', 'BoundingBox', 'PixelIdxList', 'PixelList', 'Extent',
  'FilledArea', 'Perimeter', 'MajorAxisLength', 'MinorAxisLength',
  'Orientation', 'Eccentricity', 'EquivDiameter',
] as const;
type RPProp = typeof RP_PROPS[number];

/** Label connected components of a binary image with 8-connectivity, in
 *  MATLAB column-major (increasing linear index) labeling order. Returns, per
 *  region, the sorted list of linear (column-major, 0-based) pixel indices. */
function bwLabel8(BW: number[][], R: number, C: number): number[][] {
  const label = new Int32Array(R * C).fill(0);
  const regions: number[][] = [];
  const idx = (r: number, c: number) => r + c * R;        // 0-based column-major
  // Scan in column-major order so region labels follow MATLAB convention.
  for (let c = 0; c < C; c++) {
    for (let r = 0; r < R; r++) {
      if (!BW[r][c] || label[idx(r, c)] !== 0) continue;
      const lab = regions.length + 1;
      const pix: number[] = [];
      const stack: Array<[number, number]> = [[r, c]];
      label[idx(r, c)] = lab;
      while (stack.length) {
        const [pr, pc] = stack.pop()!;
        pix.push(idx(pr, pc));
        for (let dr = -1; dr <= 1; dr++) {
          for (let dc = -1; dc <= 1; dc++) {
            if (dr === 0 && dc === 0) continue;
            const nr = pr + dr, nc = pc + dc;
            if (nr < 0 || nr >= R || nc < 0 || nc >= C) continue;
            if (BW[nr][nc] && label[idx(nr, nc)] === 0) { label[idx(nr, nc)] = lab; stack.push([nr, nc]); }
          }
        }
      }
      pix.sort((x, y) => x - y);                            // sorted linear indices
      regions.push(pix);
    }
  }
  return regions;
}

/** Moore-neighbor boundary trace (8-connected, clockwise) of a single region's
 *  cropped binary image `im` (1-based pixel grid), matching MATLAB
 *  bwboundaries/regionboundaries: start at the first foreground pixel in
 *  column-major order, return an N×2 closed list of [row,col] (start repeated). */
function traceBoundary(im: boolean[][], R: number, C: number): Array<[number, number]> {
  // Find start: first foreground pixel in column-major order.
  let sr = -1, sc = -1;
  outer: for (let c = 0; c < C; c++) for (let r = 0; r < R; r++) if (im[r][c]) { sr = r; sc = c; break outer; }
  if (sr < 0) return [];
  // single pixel
  let count = 0; for (let r = 0; r < R; r++) for (let c = 0; c < C; c++) if (im[r][c]) count++;
  if (count === 1) return [[sr + 1, sc + 1]];
  // 8-neighborhood offsets, clockwise starting from West (matches MATLAB trace order).
  const d8: Array<[number, number]> = [
    [0, -1], [-1, -1], [-1, 0], [-1, 1], [0, 1], [1, 1], [1, 0], [1, -1],
  ];
  const inb = (r: number, c: number) => r >= 0 && r < R && c >= 0 && c < C && im[r][c];
  const boundary: Array<[number, number]> = [];
  // backtrack direction: came into start from the left (West neighbor is empty here by scan).
  let cr = sr, cc = sc, bdir = 0;                          // previous-explore direction index
  // Initial backtrack points to where we "came from": west of start.
  let prevR = sr, prevC = sc - 1;
  let first = true;
  const maxSteps = 8 * R * C + 16;
  let steps = 0;
  while (steps++ < maxSteps) {
    boundary.push([cr + 1, cc + 1]);
    // direction from current pixel back to the backtrack (previous) pixel
    let start = -1;
    for (let i = 0; i < 8; i++) if (cr + d8[i][0] === prevR && cc + d8[i][1] === prevC) { start = i; break; }
    if (start < 0) start = 0;
    let found = false;
    for (let k = 1; k <= 8; k++) {
      const i = (start + k) % 8;
      const nr = cr + d8[i][0], nc = cc + d8[i][1];
      if (inb(nr, nc)) {
        prevR = cr; prevC = cc; cr = nr; cc = nc; bdir = i; found = true; break;
      }
    }
    if (!found) break;                                     // isolated pixel (shouldn't happen here)
    // Stop when we return to the start pixel arriving from the same first step.
    if (!first && cr === sr && cc === sc) {
      // Reached start again; the Jacob stopping criterion: re-enter start. Close it.
      boundary.push([sr + 1, sc + 1]);
      break;
    }
    first = false;
    void bdir;
  }
  return boundary;
}

/** Perimeter from a closed boundary list (computePerimeterFromBoundary). */
function perimeterFromBoundary(B: Array<[number, number]>): number {
  if (B.length <= 2) return 0;
  const delta: Array<[number, number]> = [];
  for (let i = 1; i < B.length; i++) delta.push([(B[i][0] - B[i - 1][0]) ** 2, (B[i][1] - B[i - 1][1]) ** 2]);
  if (delta.length <= 1) return 0;
  const ext = [...delta, delta[0]];
  let nCorner = 0, nEven = 0, nOdd = 0;
  for (let i = 1; i < ext.length; i++) if (ext[i][0] - ext[i - 1][0] !== 0 || ext[i][1] - ext[i - 1][1] !== 0) nCorner++;
  for (const d of delta) { const even = d[0] === 0 || d[1] === 0; if (even) nEven++; else nOdd++; }
  return nEven * 0.980 + nOdd * 1.406 - nCorner * 0.091;
}

/** regionprops(BW[,props...]) — N×1 struct array, one element per region. */
function regionprops(args: Value[]): StructV {
  const BWm = m(args[0]);
  const R = BWm.rows, C = BWm.cols;
  const bwData = toArray(BWm);
  const BW: number[][] = [];
  for (let r = 0; r < R; r++) { BW[r] = []; for (let c = 0; c < C; c++) BW[r][c] = bwData[r + c * R] ? 1 : 0; }

  // ---- parse requested properties ----
  let req: RPProp[] = [];
  let listed = false;
  for (const arg of args.slice(1)) {
    if (!isMat(arg) || !(arg as Mat).isChar) continue;     // ignore label matrices / grayscale image / 'struct'
    const s = asString(arg);
    const sl = s.toLowerCase();
    if (sl === 'struct' || sl === 'table') continue;
    listed = true;
    if (sl === 'basic') { req.push('Area', 'Centroid', 'BoundingBox'); continue; }
    const match = RP_PROPS.find((p) => p.toLowerCase() === sl);
    if (match) req.push(match);
    else throw new Error(`regionprops: property '${s}' is not supported`);
  }
  if (!listed) req = ['Area', 'Centroid', 'BoundingBox'];

  const regions = bwLabel8(BW, R, C);
  const N = regions.length;

  // Build each field as a per-region Value[].
  const fields = new Map<string, Value[]>();
  const ensure = (name: string) => { if (!fields.has(name)) fields.set(name, []); return fields.get(name)!; };

  for (let k = 0; k < N; k++) {
    const pix = regions[k];                                // 0-based column-major linear indices
    const area = pix.length;
    // Per-pixel rows/cols (1-based) and bounding box.
    let minR = Infinity, maxR = -Infinity, minC = Infinity, maxC = -Infinity;
    let sumR = 0, sumC = 0;
    const rows: number[] = [], cols: number[] = [];
    for (const li of pix) {
      const r = li % R, c = Math.floor(li / R);            // 0-based
      rows.push(r); cols.push(c);
      if (r < minR) minR = r; if (r > maxR) maxR = r;
      if (c < minC) minC = c; if (c > maxC) maxC = c;
      sumR += r; sumC += c;
    }
    const bh = maxR - minR + 1, bw = maxC - minC + 1;

    for (const p of req) {
      switch (p) {
        case 'Area': ensure('Area').push(scalar(area)); break;
        case 'Centroid': {
          // [x y], 1-based: x = mean(col)+1, y = mean(row)+1 (0-based means +1 → 1-based center)
          const cx = sumC / area + 1, cy = sumR / area + 1;
          ensure('Centroid').push(rowVec2(cx, cy));
          break;
        }
        case 'BoundingBox': {
          // [x y w h]; x,y are the top-left corner: (minCol+1)-0.5, (minRow+1)-0.5.
          ensure('BoundingBox').push(rowVec4(minC + 0.5, minR + 0.5, bw, bh));
          break;
        }
        case 'PixelIdxList': {
          // 1-based linear indices, column n.
          ensure('PixelIdxList').push(colVec(pix.map((li) => li + 1)));
          break;
        }
        case 'PixelList': {
          // N×2 [x y] = [col+1 row+1]; ordered by increasing linear index.
          const M = zeros(area, 2);
          for (let i = 0; i < area; i++) { M.data[i] = cols[i] + 1; M.data[i + area] = rows[i] + 1; }
          ensure('PixelList').push(M);
          break;
        }
        case 'Extent': ensure('Extent').push(scalar(area / (bw * bh))); break;
        case 'FilledArea':
          // No holes are filled for an 8-connected foreground region without
          // explicit hole computation; for solid regions FilledArea == Area.
          ensure('FilledArea').push(scalar(filledArea(rows, cols, minR, minC, bh, bw)));
          break;
        case 'Perimeter': {
          const im = cropImage(rows, cols, minR, minC, bh, bw);
          ensure('Perimeter').push(scalar(perimeterFromBoundary(traceBoundary(im, bh, bw))));
          break;
        }
        case 'MajorAxisLength': case 'MinorAxisLength': case 'Orientation': case 'Eccentricity': {
          const e = ellipseParams(rows, cols, sumR / area, sumC / area, area);
          if (p === 'MajorAxisLength') ensure('MajorAxisLength').push(scalar(e.major));
          else if (p === 'MinorAxisLength') ensure('MinorAxisLength').push(scalar(e.minor));
          else if (p === 'Orientation') ensure('Orientation').push(scalar(e.orient));
          else ensure('Eccentricity').push(scalar(e.ecc));
          break;
        }
        case 'EquivDiameter': ensure('EquivDiameter').push(scalar((2 / Math.sqrt(Math.PI)) * Math.sqrt(area))); break;
      }
    }
  }
  // Preserve requested-property order in the field map (already insertion-ordered).
  // Ensure each requested field exists even when N === 0.
  for (const p of req) ensure(p);
  return { kind: 'struct', rows: N, cols: N ? 1 : 0, fields } as StructV;
}

/** 1×2 row vector [a b]. */
function rowVec2(a: number, b: number): Mat { const o = zeros(1, 2); o.data[0] = a; o.data[1] = b; return o; }
/** 1×4 row vector [a b c d]. */
function rowVec4(a: number, b: number, c: number, d: number): Mat { const o = zeros(1, 4); o.data[0] = a; o.data[1] = b; o.data[2] = c; o.data[3] = d; return o; }

/** Cropped boolean image of a region (bh×bw), rows/cols are 0-based pixel coords. */
function cropImage(rows: number[], cols: number[], minR: number, minC: number, bh: number, bw: number): boolean[][] {
  const im: boolean[][] = Array.from({ length: bh }, () => new Array(bw).fill(false));
  for (let i = 0; i < rows.length; i++) im[rows[i] - minR][cols[i] - minC] = true;
  return im;
}

/** FilledArea = area + number of background holes inside the cropped region
 *  (4-connected background not reachable from the crop border). */
function filledArea(rows: number[], cols: number[], minR: number, minC: number, bh: number, bw: number): number {
  const im = cropImage(rows, cols, minR, minC, bh, bw);
  // Flood-fill background (4-connected) from the border; anything not reached is a hole.
  const seen: boolean[][] = Array.from({ length: bh }, () => new Array(bw).fill(false));
  const stack: Array<[number, number]> = [];
  const push = (r: number, c: number) => { if (r >= 0 && r < bh && c >= 0 && c < bw && !im[r][c] && !seen[r][c]) { seen[r][c] = true; stack.push([r, c]); } };
  for (let c = 0; c < bw; c++) { push(0, c); push(bh - 1, c); }
  for (let r = 0; r < bh; r++) { push(r, 0); push(r, bw - 1); }
  while (stack.length) { const [r, c] = stack.pop()!; push(r - 1, c); push(r + 1, c); push(r, c - 1); push(r, c + 1); }
  let holes = 0;
  for (let r = 0; r < bh; r++) for (let c = 0; c < bw; c++) if (!im[r][c] && !seen[r][c]) holes++;
  return rows.length + holes;
}

/** Second-moment ellipse parameters (Haralick & Shapiro). rows/cols are 0-based;
 *  meanR/meanC are 0-based pixel-coordinate means. Lengths/angle match MATLAB. */
function ellipseParams(rows: number[], cols: number[], meanR: number, meanC: number, N: number): { major: number; minor: number; orient: number; ecc: number } {
  if (N === 0) return { major: 0, minor: 0, orient: 0, ecc: 0 };
  // x = col - xbar (1-based equivalent cancels), y = -(row - ybar).
  let sxx = 0, syy = 0, sxy = 0;
  for (let i = 0; i < N; i++) {
    const x = cols[i] - meanC;
    const y = -(rows[i] - meanR);
    sxx += x * x; syy += y * y; sxy += x * y;
  }
  const uxx = sxx / N + 1 / 12;
  const uyy = syy / N + 1 / 12;
  const uxy = sxy / N;
  const common = Math.sqrt((uxx - uyy) ** 2 + 4 * uxy ** 2);
  const major = 2 * Math.SQRT2 * Math.sqrt(uxx + uyy + common);
  const minor = 2 * Math.SQRT2 * Math.sqrt(uxx + uyy - common);
  const ecc = major === 0 ? 0 : 2 * Math.sqrt((major / 2) ** 2 - (minor / 2) ** 2) / major;
  let num: number, den: number;
  if (uyy > uxx) { num = uyy - uxx + Math.sqrt((uyy - uxx) ** 2 + 4 * uxy ** 2); den = 2 * uxy; }
  else { num = 2 * uxy; den = uxx - uyy + Math.sqrt((uxx - uyy) ** 2 + 4 * uxy ** 2); }
  const orient = (num === 0 && den === 0) ? 0 : (180 / Math.PI) * Math.atan(num / den);
  return { major, minor, orient, ecc };
}
