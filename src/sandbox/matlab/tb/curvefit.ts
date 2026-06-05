// Curve Fitting Toolbox — computable additions (fit/fittype/polyfit/spline are already base).
// `smooth` (moving-average and Savitzky-Golay data smoothing). See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, type StructV, isMat, rowVec, colVec, scalar, toArray, asString, asScalar, toMat as m,
} from '../values';
import type { ToolboxModule } from './types';

const ret = (v: Value): Promise<Value[]> => Promise.resolve([v]);

/** Moving-average smoothing with MATLAB's shrinking-window edge rule (window halves at the ends). */
function movingSmooth(y: number[], span: number): number[] {
  if (span % 2 === 0) span -= 1;             // MATLAB forces an odd span
  const h = (span - 1) / 2, n = y.length;
  return y.map((_, i) => { const w = Math.min(h, i, n - 1 - i); let s = 0; for (let k = i - w; k <= i + w; k++) s += y[k]; return s / (2 * w + 1); });
}

export const CURVEFIT: ToolboxModule = {
  id: 'curvefit',
  name: 'Curve Fitting Toolbox',
  docBase: 'https://www.mathworks.com/help/curvefit/',
  builtins: {
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
  },
  help: {
    smooth: 'Smooth response data (moving average)', datastats: 'Statistics of data',
  },
};
