import type { Mat, Vec } from '../compute';

/** Resize a square matrix to n×n, keeping overlapping entries (new cells = 0). */
export function resize(a: Mat, n: number): Mat {
  return Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => a[i]?.[j] ?? 0),
  );
}

/** Resize a vector to length n, keeping overlapping entries. */
export function resizeVec(v: Vec, n: number): Vec {
  return Array.from({ length: n }, (_, i) => v[i] ?? 0);
}
