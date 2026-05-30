import { Matrix, inverse } from 'ml-matrix';

/** A matrix as a plain 2D array (row-major) — the shape used across the UI. */
export type Mat = number[][];
export type Vec = number[];

export function toMatrix(a: Mat): Matrix {
  return new Matrix(a);
}

export function fromMatrix(m: Matrix): Mat {
  return m.to2DArray();
}

export function zeros(rows: number, cols: number): Mat {
  return Array.from({ length: rows }, () => Array.from({ length: cols }, () => 0));
}

export function identity(n: number): Mat {
  const m = zeros(n, n);
  for (let i = 0; i < n; i++) m[i][i] = 1;
  return m;
}

export function isSquare(a: Mat): boolean {
  return a.length > 0 && a.every((row) => row.length === a.length);
}

/** Decompose A = L + D + U (strict lower, diagonal, strict upper). */
export function decompose(a: Mat): { L: Mat; D: Mat; U: Mat } {
  const n = a.length;
  const L = zeros(n, n);
  const D = zeros(n, n);
  const U = zeros(n, n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i > j) L[i][j] = a[i][j];
      else if (i === j) D[i][j] = a[i][j];
      else U[i][j] = a[i][j];
    }
  }
  return { L, D, U };
}

/** True if every diagonal entry is non-zero (Jacobi/GS require this). */
export function hasNonZeroDiagonal(a: Mat): boolean {
  return a.every((row, i) => Math.abs(row[i]) > 1e-15);
}

/**
 * Jacobi iteration matrix T_J = -D^{-1}(L+U) and constant c_J = D^{-1} b.
 * Returns null if the diagonal has a zero entry.
 */
export function jacobiT(a: Mat, b?: Vec): { T: Mat; c: Vec | null } | null {
  if (!hasNonZeroDiagonal(a)) return null;
  const n = a.length;
  const T = zeros(n, n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      T[i][j] = i === j ? 0 : -a[i][j] / a[i][i];
    }
  }
  const c = b ? b.map((bi, i) => bi / a[i][i]) : null;
  return { T, c };
}

/**
 * Gauss–Seidel iteration matrix T_G = -(D+L)^{-1} U and c_G = (D+L)^{-1} b.
 * Returns null if (D+L) is singular (zero on diagonal).
 */
export function gaussSeidelT(a: Mat, b?: Vec): { T: Mat; c: Vec | null } | null {
  if (!hasNonZeroDiagonal(a)) return null;
  const { L, D, U } = decompose(a);
  const DL = new Matrix(D).add(new Matrix(L)); // D + L (mutates the fresh copy of D)
  let DLinv: Matrix;
  try {
    DLinv = inverse(DL);
  } catch {
    return null;
  }
  const T = DLinv.mmul(new Matrix(U)).mul(-1);
  const c = b ? DLinv.mmul(Matrix.columnVector(b)).getColumn(0) : null;
  return { T: T.to2DArray(), c };
}

/** Hilbert matrix H_n with entries 1/(i+j-1). */
export function hilbert(n: number): Mat {
  const m = zeros(n, n);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      m[i][j] = 1 / (i + j + 1);
    }
  }
  return m;
}

/** A·x for a matrix and vector. */
export function matVec(a: Mat, x: Vec): Vec {
  return a.map((row) => row.reduce((s, aij, j) => s + aij * x[j], 0));
}

/** Solve A x = b exactly (via inverse) for reference / "true solution". */
export function solve(a: Mat, b: Vec): Vec | null {
  try {
    const x = inverse(new Matrix(a)).mmul(Matrix.columnVector(b));
    return x.getColumn(0);
  } catch {
    return null;
  }
}
