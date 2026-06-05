// Curve Fitting Toolbox — computable additions (fit/fittype/polyfit/spline are
// already base). smooth, datastats, polyfit-wrapper, splinefit, rsquared. See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type StructV, isMat, rowVec, colVec, scalar, toArray, asString, asScalar, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';
import { SPLINE_BUILTINS, SPLINE_HELP } from './splines';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

/** Moving-average smoothing with MATLAB's shrinking-window edge rule (window halves at the ends). */
function movingSmooth(y: number[], span: number): number[] {
  if (span % 2 === 0) span -= 1;             // MATLAB forces an odd span
  const h = (span - 1) / 2, n = y.length;
  return y.map((_, i) => { const w = Math.min(h, i, n - 1 - i); let s = 0; for (let k = i - w; k <= i + w; k++) s += y[k]; return s / (2 * w + 1); });
}

/** Savitzky-Golay smoothing: polynomial degree p over window width w. */
function sgSmooth(y: number[], w: number, p: number): number[] {
  if (w % 2 === 0) w += 1;
  const h = (w - 1) / 2;
  const n = y.length;
  const out = new Array(n);
  for (let i = 0; i < n; i++) {
    const lo = Math.max(0, i - h), hi = Math.min(n - 1, i + h);
    const seg = y.slice(lo, hi + 1);
    // Simple least-squares polynomial fit on segment (up to degree p)
    const deg = Math.min(p, seg.length - 1);
    // Evaluate via Vandermonde fit at the centre
    const cx = seg.map((_, j) => lo + j - i);
    // For deg=0 just mean; deg=1 linear; we stop at deg≤3 for speed
    if (deg === 0) { out[i] = seg.reduce((s, v) => s + v, 0) / seg.length; }
    else { out[i] = seg.reduce((s, v) => s + v, 0) / seg.length; } // placeholder
  }
  return out;
}

/** Fit a polynomial of degree n to (x,y) data. Returns coefficients high→low. */
function polyFit(x: number[], y: number[], n: number): number[] {
  // Build Vandermonde matrix A (rows=points, cols=n+1)
  const m = x.length;
  const A: number[][] = x.map(xi => Array.from({ length: n + 1 }, (_, j) => Math.pow(xi, n - j)));
  // Normal equations: (A^T A) c = A^T y
  const ATA: number[][] = Array.from({ length: n + 1 }, (_, r) =>
    Array.from({ length: n + 1 }, (__, c) => A.reduce((s, row) => s + row[r] * row[c], 0)));
  const ATy: number[] = Array.from({ length: n + 1 }, (_, r) =>
    A.reduce((s, row, i) => s + row[r] * y[i], 0));
  // Gaussian elimination
  const aug = ATA.map((row, i) => [...row, ATy[i]]);
  for (let col = 0; col <= n; col++) {
    const pivot = aug[col][col];
    if (Math.abs(pivot) < 1e-14) continue;
    for (let row = 0; row <= n; row++) {
      if (row === col) continue;
      const f = aug[row][col] / pivot;
      for (let k = 0; k <= n + 1; k++) aug[row][k] -= f * aug[col][k];
    }
  }
  return aug.map((row, i) => row[n + 1] / row[i]);
}

/** Evaluate polynomial coefficients (high→low) at x. */
function polyVal(c: number[], x: number): number {
  return c.reduce((acc, ci) => acc * x + ci, 0);
}

/** R² goodness-of-fit between y and y_fit. */
function rSquared(y: number[], yFit: number[]): number {
  const mean = y.reduce((s, v) => s + v, 0) / y.length;
  const ssTot = y.reduce((s, v) => s + (v - mean) ** 2, 0);
  const ssRes = y.reduce((s, v, i) => s + (v - yFit[i]) ** 2, 0);
  return ssTot < 1e-14 ? 1 : 1 - ssRes / ssTot;
}

export const CURVEFIT: ToolboxModule = {
  id: 'curvefit',
  name: 'Curve Fitting Toolbox',
  docBase: 'https://www.mathworks.com/help/curvefit/',
  builtins: {
    ...SPLINE_BUILTINS,
    /** smooth(y[,span][,method]) — 'moving' (default). y stays the same orientation. */
    smooth: (a) => {
      const src = m(a[0]); const y = toArray(src);
      let span = 5; let method = 'moving';
      for (const arg of a.slice(1)) { if (isMat(arg) && !(arg as Mat).isChar) span = Math.round(asScalar(arg)); else method = asString(arg).toLowerCase(); }
      if (method !== 'moving') throw new Error(`smooth: method '${method}' not yet implemented (only 'moving')`);
      const out = movingSmooth(y, Math.max(1, span));
      return ret(src.rows === 1 ? rowVec(out) : colVec(out));
    },
    /** datastats(x) — summary statistics struct (num/max/min/mean/median/range/std). */
    datastats: (a) => {
      const x = toArray(m(a[0])).filter((v) => !Number.isNaN(v)); const n = x.length; const s = x.slice().sort((p, q) => p - q);
      const mean = x.reduce((p, q) => p + q, 0) / n; const variance = x.reduce((p, q) => p + (q - mean) ** 2, 0) / Math.max(1, n - 1);
      const median = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2; const mn = Math.min(...x), mx = Math.max(...x);
      const fields = new Map<string, Value[]>([['num', [scalar(n)]], ['max', [scalar(mx)]], ['min', [scalar(mn)]], ['mean', [scalar(mean)]], ['median', [scalar(median)]], ['range', [scalar(mx - mn)]], ['std', [scalar(Math.sqrt(variance))]]]);
      return ret({ kind: 'struct', rows: 1, cols: 1, fields } as StructV);
    },
    /** polyfit2(x, y, n) — least-squares polynomial fit; returns coefficients high→low. */
    polyfit2: (a) => {
      const x = toArray(m(a[0])); const y = toArray(m(a[1]));
      const n = Math.round(asScalar(m(a[2])));
      return ret(rowVec(polyFit(x, y, n)));
    },
    /** polyval2(c, x) — evaluate polynomial with coefficients c at each x. */
    polyval2: (a) => {
      const c = toArray(m(a[0])); const src = m(a[1]); const xv = toArray(src);
      const out = xv.map(xi => polyVal(c, xi));
      return ret(src.rows === 1 ? rowVec(out) : colVec(out));
    },
    /** rsquared(y, yfit) — R² goodness-of-fit statistic (1 = perfect fit). */
    rsquared: (a) => {
      const y = toArray(m(a[0])); const yfit = toArray(m(a[1]));
      return ret(scalar(rSquared(y, yfit)));
    },
  },
  help: {
    ...SPLINE_HELP,
    smooth:    'Smooth response data using moving average.',
    datastats: 'Summary statistics (mean/median/std/min/max/range/num) of a data vector.',
    polyfit2:  'Least-squares polynomial fit of degree n; returns coefficients high→low.',
    polyval2:  'Evaluate a polynomial (coefficients high→low) at each element of x.',
    rsquared:  'R² goodness-of-fit between observed y and fitted y_fit values.',
  },
};
