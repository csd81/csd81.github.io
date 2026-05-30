import { Matrix, inverse, SingularValueDecomposition } from 'ml-matrix';
import type { Mat, Vec } from './matrix';

export type NormType = 'inf' | '1' | '2';

/** Infinity norm: max absolute row sum. */
export function normInf(a: Mat): number {
  return a.reduce(
    (max, row) => Math.max(max, row.reduce((s, v) => s + Math.abs(v), 0)),
    0,
  );
}

/** 1-norm: max absolute column sum. */
export function norm1(a: Mat): number {
  const n = a.length;
  const cols = a[0]?.length ?? 0;
  let max = 0;
  for (let j = 0; j < cols; j++) {
    let s = 0;
    for (let i = 0; i < n; i++) s += Math.abs(a[i][j]);
    max = Math.max(max, s);
  }
  return max;
}

/** 2-norm (spectral norm): largest singular value. */
export function norm2(a: Mat): number {
  const svd = new SingularValueDecomposition(new Matrix(a));
  return Math.max(...svd.diagonal);
}

export function matrixNorm(a: Mat, p: NormType): number {
  if (p === 'inf') return normInf(a);
  if (p === '1') return norm1(a);
  return norm2(a);
}

/** Vector p-norm (inf, 1, 2). */
export function vectorNorm(x: Vec, p: NormType): number {
  if (p === 'inf') return x.reduce((m, v) => Math.max(m, Math.abs(v)), 0);
  if (p === '1') return x.reduce((s, v) => s + Math.abs(v), 0);
  return Math.hypot(...x);
}

/** Condition number cond_p(A) = ||A||_p * ||A^{-1}||_p. Infinity if singular. */
export function conditionNumber(a: Mat, p: NormType): number {
  try {
    const inv = inverse(new Matrix(a)).to2DArray();
    return matrixNorm(a, p) * matrixNorm(inv, p);
  } catch {
    return Infinity;
  }
}
