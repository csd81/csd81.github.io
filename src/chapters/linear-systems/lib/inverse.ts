import type { Frac } from './fraction';
import { augment, identity, colSlice, cloneMatrix } from './matrix';
import type { FracMatrix, PivotStrategy, Step } from './types';
import { runElimination } from './gauss';

export interface InverseResult {
  steps: Step[];
  inverse: FracMatrix | null;
  singular: boolean;
}

/**
 * Compute A^{-1} via Gauss–Jordan elimination on the simultaneous system
 * (A | I) -> (I | A^{-1}). Only 'none' or 'partial' pivoting is supported
 * (column swaps would scramble the meaning of the inverse columns).
 */
export function invertMatrix(
  A: FracMatrix,
  pivoting: Exclude<PivotStrategy, 'complete' | 'scaled'> = 'none',
): InverseResult {
  const n = A.length;
  const aug = augment(A, identity(n));
  const run = runElimination(aug, n, { method: 'gauss-jordan', pivoting });

  if (run.singular) {
    return { steps: run.steps, inverse: null, singular: true };
  }

  const inverse = colSlice(run.matrix, n, 2 * n);
  const steps = run.steps.concat([
    {
      kind: 'done',
      matrix: cloneMatrix(run.matrix),
      coeffCols: n,
      varOrder: run.varOrder.slice(),
      caption: {
        en: 'The right block is A⁻¹.',
        hu: 'A jobb oldali blokk az A⁻¹.',
      },
    },
  ]);

  return { steps, inverse, singular: false };
}

export type { Frac };
