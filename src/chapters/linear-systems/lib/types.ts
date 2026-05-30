import type { Frac } from './fraction';

export type Lang = 'en' | 'hu';

export interface Bilingual {
  en: string;
  hu: string;
}

/** A grid of exact rationals. */
export type FracMatrix = Frac[][];

/** [row, col] zero-based coordinate. */
export type Cell = [number, number];

export type StepKind =
  | 'init'
  | 'pivot-select'
  | 'row-swap'
  | 'col-swap'
  | 'eliminate'
  | 'normalize'
  | 'back-sub'
  | 'done';

/**
 * One animatable step of an algorithm run. `matrix` is the snapshot AFTER the
 * step's operation has been applied, so a UI can simply render `steps[i].matrix`.
 */
export interface Step {
  kind: StepKind;
  /** Snapshot of the working (augmented) matrix after this operation. */
  matrix: FracMatrix;
  /** Number of leading columns that form the coefficient block (rest is RHS). */
  coeffCols: number;
  caption: Bilingual;
  /** Pivot cell to emphasise. */
  pivot?: Cell;
  /** Cells modified by this step. */
  changed?: Cell[];
  /** Rows exchanged by a row swap. */
  swapRows?: [number, number];
  /** Columns exchanged by a column swap (complete pivoting). */
  swapCols?: [number, number];
  /** Multiplier l_ik used to eliminate. */
  multiplier?: Frac;
  /** Column -> variable index mapping (identity unless complete pivoting). */
  varOrder: number[];
}

export type PivotStrategy = 'none' | 'partial' | 'complete' | 'scaled';

export type Method = 'gauss' | 'gauss-jordan';

export interface SolveResult {
  steps: Step[];
  /** Final solution in natural variable order (x_1..x_n), or null if singular. */
  solution: Frac[] | null;
  singular: boolean;
  /** Determinant of the coefficient matrix (square systems), or null. */
  determinant: Frac | null;
}
