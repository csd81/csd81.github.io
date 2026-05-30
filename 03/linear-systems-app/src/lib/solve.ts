import { toPlain, type Frac } from './fraction';
import { cloneMatrix } from './matrix';
import type { FracMatrix, SolveResult, Step } from './types';
import { runElimination, determinantFromRun, type RunOptions } from './gauss';
import { backSubstitute } from './backsub';

/** Build an augmented matrix (A | b) from a coefficient matrix and a RHS vector. */
export function buildAugmented(A: FracMatrix, b: Frac[]): FracMatrix {
  return A.map((row, i) => row.concat([b[i]]));
}

/**
 * Solve a square linear system A x = b, recording all steps (elimination,
 * normalisation/back-substitution, and the final read-off) for visualisation.
 */
export function solveSystem(
  A: FracMatrix,
  b: Frac[],
  opts: RunOptions,
): SolveResult {
  const coeffCols = A[0].length;
  const aug = buildAugmented(A, b);
  const run = runElimination(aug, coeffCols, opts);
  const determinant = determinantFromRun(run);

  if (run.singular) {
    return { steps: run.steps, solution: null, singular: true, determinant };
  }

  let steps: Step[] = run.steps;
  let solution: Frac[];

  if (opts.method === 'gauss') {
    const bs = backSubstitute(run);
    steps = steps.concat(bs.steps);
    solution = bs.solution!;
  } else {
    // gauss-jordan: solution is the (normalised) RHS column, reordered.
    const rhsCol = coeffCols;
    solution = new Array(coeffCols);
    for (let k = 0; k < coeffCols; k++) {
      solution[run.varOrder[k]] = run.matrix[k][rhsCol];
    }
  }

  const sol = solution
    .map((x, i) => `x${i + 1} = ${toPlain(x)}`)
    .join(',  ');
  steps = steps.concat([
    {
      kind: 'done',
      matrix: cloneMatrix(run.matrix),
      coeffCols,
      varOrder: run.varOrder.slice(),
      caption: {
        en: `Solution: ${sol}.`,
        hu: `Megoldás: ${sol}.`,
      },
    },
  ]);

  return { steps, solution, singular: false, determinant };
}
