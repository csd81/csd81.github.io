import { toPlain, type Frac } from './fraction';
import { cloneMatrix } from './matrix';
import type { Step } from './types';
import type { RunResult } from './gauss';

/**
 * Backward substitution on a finished Gaussian-elimination run with a single
 * right-hand side column. Returns the per-variable steps and the solution
 * mapped back to natural variable order (x_1..x_n).
 */
export function backSubstitute(run: RunResult): {
  steps: Step[];
  solution: Frac[] | null;
} {
  const { matrix: m, coeffCols, varOrder, singular } = run;
  if (singular) return { steps: [], solution: null };

  const rhsCol = coeffCols; // single RHS
  const y: Frac[] = new Array(coeffCols); // value sitting in each column position
  const steps: Step[] = [];

  for (let i = coeffCols - 1; i >= 0; i--) {
    let acc = m[i][rhsCol];
    for (let j = i + 1; j < coeffCols; j++) {
      acc = acc.sub(m[i][j].mul(y[j]));
    }
    y[i] = acc.div(m[i][i]);
    const variable = varOrder[i] + 1;
    steps.push({
      kind: 'back-sub',
      matrix: cloneMatrix(m),
      coeffCols,
      varOrder: varOrder.slice(),
      pivot: [i, i],
      caption: {
        en: `Back-substitution: x${variable} = ${toPlain(y[i])}.`,
        hu: `Visszahelyettesítés: x${variable} = ${toPlain(y[i])}.`,
      },
    });
  }

  const solution: Frac[] = new Array(coeffCols);
  for (let j = 0; j < coeffCols; j++) solution[varOrder[j]] = y[j];
  return { steps, solution };
}
