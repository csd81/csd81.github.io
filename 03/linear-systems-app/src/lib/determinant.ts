import type { Frac } from './fraction';
import type { FracMatrix, PivotStrategy, Step } from './types';
import { runElimination, determinantFromRun } from './gauss';

export interface DeterminantResult {
  steps: Step[];
  determinant: Frac | null;
}

/**
 * Determinant of a square matrix as the signed product of the Gaussian
 * elimination pivots: det(A) = (-1)^(row+col swaps) · ∏ pivots.
 */
export function determinant(
  A: FracMatrix,
  pivoting: PivotStrategy = 'partial',
): DeterminantResult {
  const n = A.length;
  const run = runElimination(A.map((r) => r.slice()), n, {
    method: 'gauss',
    pivoting,
  });
  const det = determinantFromRun(run);
  const steps: Step[] = run.steps;
  return { steps, determinant: det };
}
