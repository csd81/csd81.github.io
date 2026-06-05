// Curve Fitting Toolbox — computable additions (fit/fittype/polyfit/spline are already base).
// `smooth` (moving-average and Savitzky-Golay data smoothing). See plan §7.
import type { Builtin } from '../builtins';
import {
  type Value, type Mat, isMat, rowVec, colVec, toArray, asString, asScalar, toMat as m,
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
  },
  help: {
    smooth: 'Smooth response data (moving average)',
  },
};
