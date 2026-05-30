import { F, ZERO, ONE, isZero, toPlain, type Frac } from './fraction';
import { cloneMatrix, cols } from './matrix';
import type {
  FracMatrix,
  Method,
  PivotStrategy,
  Step,
  Bilingual,
} from './types';

export interface RunOptions {
  method: Method;
  pivoting: PivotStrategy;
}

export interface RunResult {
  steps: Step[];
  /** Final working matrix (upper-triangular for gauss, reduced for gauss-jordan). */
  matrix: FracMatrix;
  coeffCols: number;
  /** Column -> original variable index. */
  varOrder: number[];
  /** Diagonal pivot values in pivot order (pre-normalisation). */
  pivots: Frac[];
  rowSwaps: number;
  colSwaps: number;
  singular: boolean;
}

function n1(i: number): number {
  return i + 1; // 1-based index for captions
}

/**
 * Forward elimination (and, for gauss-jordan, full reduction) of an augmented
 * matrix, recording every operation as a Step. The coefficient block is the
 * first `coeffCols` columns; remaining columns are right-hand side(s).
 */
export function runElimination(
  augIn: FracMatrix,
  coeffCols: number,
  opts: RunOptions,
): RunResult {
  const m = cloneMatrix(augIn);
  const n = m.length;
  const totalCols = cols(m);
  const varOrder = Array.from({ length: coeffCols }, (_, i) => i);
  const pivots: Frac[] = [];
  const steps: Step[] = [];
  let rowSwaps = 0;
  let colSwaps = 0;
  let singular = false;

  const snapshot = (): FracMatrix => cloneMatrix(m);

  steps.push({
    kind: 'init',
    matrix: snapshot(),
    coeffCols,
    varOrder: varOrder.slice(),
    caption: {
      en: 'Initial augmented matrix.',
      hu: 'Kiindulási kibővített mátrix.',
    },
  });

  // Scale factor for scaled partial pivoting: max |a_ij| over coefficient columns.
  const scaleOf = (r: number): Frac => {
    let s = ZERO;
    for (let j = 0; j < coeffCols; j++) {
      const a = m[r][j].abs();
      if (a.compare(s) > 0) s = a;
    }
    return s;
  };

  const pivotCount = Math.min(n, coeffCols);

  for (let k = 0; k < pivotCount; k++) {
    // ---- pivot selection ----
    if (opts.pivoting === 'partial') {
      let best = k;
      for (let i = k + 1; i < n; i++) {
        if (m[i][k].abs().compare(m[best][k].abs()) > 0) best = i;
      }
      if (!isZero(m[best][k]) && best !== k) {
        [m[k], m[best]] = [m[best], m[k]];
        rowSwaps++;
        steps.push({
          kind: 'row-swap',
          matrix: snapshot(),
          coeffCols,
          varOrder: varOrder.slice(),
          swapRows: [k, best],
          caption: {
            en: `Partial pivoting: swap rows ${n1(k)} and ${n1(best)} (largest |entry| in column ${n1(k)}).`,
            hu: `Részleges főelemkiválasztás: ${n1(k)}. és ${n1(best)}. sor cseréje (legnagyobb |elem| a(z) ${n1(k)}. oszlopban).`,
          },
        });
      }
    } else if (opts.pivoting === 'scaled') {
      let best = k;
      let bestRatio: Frac | null = null;
      for (let i = k; i < n; i++) {
        const s = scaleOf(i);
        const ratio = isZero(s) ? ZERO : m[i][k].abs().div(s);
        if (bestRatio === null || ratio.compare(bestRatio) > 0) {
          bestRatio = ratio;
          best = i;
        }
      }
      if (!isZero(m[best][k]) && best !== k) {
        [m[k], m[best]] = [m[best], m[k]];
        rowSwaps++;
        steps.push({
          kind: 'row-swap',
          matrix: snapshot(),
          coeffCols,
          varOrder: varOrder.slice(),
          swapRows: [k, best],
          caption: {
            en: `Scaled partial pivoting: swap rows ${n1(k)} and ${n1(best)} (largest scaled ratio).`,
            hu: `Skálázott főelemkiválasztás: ${n1(k)}. és ${n1(best)}. sor cseréje (legnagyobb skálázott hányados).`,
          },
        });
      }
    } else if (opts.pivoting === 'complete') {
      let bi = k;
      let bj = k;
      for (let i = k; i < n; i++) {
        for (let j = k; j < coeffCols; j++) {
          if (m[i][j].abs().compare(m[bi][bj].abs()) > 0) {
            bi = i;
            bj = j;
          }
        }
      }
      if (!isZero(m[bi][bj])) {
        if (bi !== k) {
          [m[k], m[bi]] = [m[bi], m[k]];
          rowSwaps++;
          steps.push({
            kind: 'row-swap',
            matrix: snapshot(),
            coeffCols,
            varOrder: varOrder.slice(),
            swapRows: [k, bi],
            caption: {
              en: `Complete pivoting: swap rows ${n1(k)} and ${n1(bi)}.`,
              hu: `Teljes főelemkiválasztás: ${n1(k)}. és ${n1(bi)}. sor cseréje.`,
            },
          });
        }
        if (bj !== k) {
          for (let r = 0; r < n; r++) {
            [m[r][k], m[r][bj]] = [m[r][bj], m[r][k]];
          }
          [varOrder[k], varOrder[bj]] = [varOrder[bj], varOrder[k]];
          colSwaps++;
          steps.push({
            kind: 'col-swap',
            matrix: snapshot(),
            coeffCols,
            varOrder: varOrder.slice(),
            swapCols: [k, bj],
            caption: {
              en: `Complete pivoting: swap columns ${n1(k)} and ${n1(bj)} (track variable order).`,
              hu: `Teljes főelemkiválasztás: ${n1(k)}. és ${n1(bj)}. oszlop cseréje (a változók sorrendjét követjük).`,
            },
          });
        }
      }
    }

    const pivot = m[k][k];
    pivots.push(pivot);

    if (isZero(pivot)) {
      singular = true;
      steps.push({
        kind: 'pivot-select',
        matrix: snapshot(),
        coeffCols,
        varOrder: varOrder.slice(),
        pivot: [k, k],
        caption: {
          en: `Pivot a_{${n1(k)}${n1(k)}} = 0 and no nonzero entry is available — the elimination stops (matrix is singular${opts.pivoting === 'none' ? ' for this strategy' : ''}).`,
          hu: `A főelem a_{${n1(k)}${n1(k)}} = 0, és nincs nemnulla elem — az elimináció megáll (a mátrix szinguláris${opts.pivoting === 'none' ? ' ennél a stratégiánál' : ''}).`,
        },
      });
      break;
    }

    steps.push({
      kind: 'pivot-select',
      matrix: snapshot(),
      coeffCols,
      varOrder: varOrder.slice(),
      pivot: [k, k],
      caption: {
        en: `Pivot a_{${n1(k)}${n1(k)}} = ${toPlain(pivot)}.`,
        hu: `Főelem a_{${n1(k)}${n1(k)}} = ${toPlain(pivot)}.`,
      },
    });

    // ---- elimination ----
    const start = opts.method === 'gauss-jordan' ? 0 : k + 1;
    for (let i = start; i < n; i++) {
      if (i === k) continue;
      if (isZero(m[i][k])) continue;
      const l = m[i][k].div(pivot);
      const changed: [number, number][] = [];
      for (let j = k; j < totalCols; j++) {
        const before = m[i][j];
        m[i][j] = m[i][j].sub(l.mul(m[k][j]));
        if (!m[i][j].equals(before)) changed.push([i, j]);
      }
      steps.push({
        kind: 'eliminate',
        matrix: snapshot(),
        coeffCols,
        varOrder: varOrder.slice(),
        pivot: [k, k],
        multiplier: l,
        changed,
        caption: {
          en: `Eliminate: R${n1(i)} ← R${n1(i)} − (${toPlain(l)})·R${n1(k)}.`,
          hu: `Kiküszöbölés: S${n1(i)} ← S${n1(i)} − (${toPlain(l)})·S${n1(k)}.`,
        },
      });
    }
  }

  // ---- Gauss–Jordan: normalise each pivot row to a leading 1 ----
  if (opts.method === 'gauss-jordan' && !singular) {
    for (let k = 0; k < pivotCount; k++) {
      const p = m[k][k];
      if (isZero(p) || p.equals(ONE)) continue;
      const changed: [number, number][] = [];
      for (let j = 0; j < totalCols; j++) {
        m[k][j] = m[k][j].div(p);
        changed.push([k, j]);
      }
      steps.push({
        kind: 'normalize',
        matrix: snapshot(),
        coeffCols,
        varOrder: varOrder.slice(),
        pivot: [k, k],
        changed,
        caption: {
          en: `Normalise: R${n1(k)} ← R${n1(k)} / (${toPlain(p)}).`,
          hu: `Normálás: S${n1(k)} ← S${n1(k)} / (${toPlain(p)}).`,
        },
      });
    }
  }

  return { steps, matrix: m, coeffCols, varOrder, pivots, rowSwaps, colSwaps, singular };
}

/** Determinant of a square coefficient block from a finished run. */
export function determinantFromRun(run: RunResult): Frac | null {
  if (run.coeffCols !== run.matrix.length) return null;
  if (run.singular) return ZERO;
  let det = ONE;
  for (const p of run.pivots) det = det.mul(p);
  if ((run.rowSwaps + run.colSwaps) % 2 === 1) det = det.neg();
  return det;
}

export const doneCaption: Bilingual = {
  en: 'Done — the system is in solved form.',
  hu: 'Kész — a rendszer megoldott alakban van.',
};

export { F };
