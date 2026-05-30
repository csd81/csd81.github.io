import { F, type Frac } from './fraction';
import type { FracMatrix } from './types';

/** Deep-clone a fraction matrix (fractions are immutable, rows are copied). */
export function cloneMatrix(m: FracMatrix): FracMatrix {
  return m.map((row) => row.slice());
}

/** Build a fraction matrix from numbers or "a/b" strings. */
export function mat(rows: Array<Array<number | string>>): FracMatrix {
  return rows.map((row) => row.map((x) => F(x)));
}

/** n x n identity as a fraction matrix. */
export function identity(n: number): FracMatrix {
  const I: FracMatrix = [];
  for (let i = 0; i < n; i++) {
    I.push(Array.from({ length: n }, (_, j) => F(i === j ? 1 : 0)));
  }
  return I;
}

/** Horizontally concatenate two matrices with the same number of rows. */
export function augment(a: FracMatrix, b: FracMatrix): FracMatrix {
  return a.map((row, i) => row.concat(b[i]));
}

/** Number of rows / columns. */
export const rows = (m: FracMatrix): number => m.length;
export const cols = (m: FracMatrix): number => (m.length ? m[0].length : 0);

/** Extract a sub-block of columns [start, end). */
export function colSlice(m: FracMatrix, start: number, end: number): FracMatrix {
  return m.map((row) => row.slice(start, end));
}

/** Compare two fraction matrices for exact equality. */
export function matrixEquals(a: FracMatrix, b: FracMatrix): boolean {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i].length !== b[i].length) return false;
    for (let j = 0; j < a[i].length; j++) {
      if (!a[i][j].equals(b[i][j])) return false;
    }
  }
  return true;
}

/** Convenience: compare a fraction matrix against plain numbers/strings. */
export function matrixEqualsPlain(a: FracMatrix, plain: Array<Array<number | string>>): boolean {
  return matrixEquals(a, plain.map((row) => row.map((x) => F(x))));
}

/** A flat array of fractions from numbers/strings (e.g. a solution vector). */
export function vec(xs: Array<number | string>): Frac[] {
  return xs.map((x) => F(x));
}
