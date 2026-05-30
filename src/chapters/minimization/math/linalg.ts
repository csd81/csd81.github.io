// Small, dependency-free linear-algebra helpers for 2D/3D (and general n).

export type Vec = number[];
export type Mat = number[][];

export const add = (a: Vec, b: Vec): Vec => a.map((x, i) => x + b[i]);
export const sub = (a: Vec, b: Vec): Vec => a.map((x, i) => x - b[i]);
export const scale = (a: Vec, s: number): Vec => a.map((x) => x * s);
export const dot = (a: Vec, b: Vec): number =>
  a.reduce((s, x, i) => s + x * b[i], 0);
export const norm = (a: Vec): number => Math.sqrt(dot(a, a));
export const dist = (a: Vec, b: Vec): number => norm(sub(a, b));

export function matVec(A: Mat, x: Vec): Vec {
  return A.map((row) => dot(row, x));
}

/** xᵀ A x */
export function quadForm(A: Mat, x: Vec): number {
  return dot(x, matVec(A, x));
}

export function transpose(A: Mat): Mat {
  const m = A.length,
    n = A[0].length;
  const T: Mat = Array.from({ length: n }, () => new Array(m).fill(0));
  for (let i = 0; i < m; i++)
    for (let j = 0; j < n; j++) T[j][i] = A[i][j];
  return T;
}

/** Solve A x = b for small symmetric-or-general systems via Gaussian elimination
 *  with partial pivoting. Returns null if singular. */
export function solve(A: Mat, b: Vec): Vec | null {
  const n = A.length;
  const M = A.map((row, i) => [...row, b[i]]);
  for (let col = 0; col < n; col++) {
    let piv = col;
    for (let r = col + 1; r < n; r++)
      if (Math.abs(M[r][col]) > Math.abs(M[piv][col])) piv = r;
    if (Math.abs(M[piv][col]) < 1e-14) return null;
    [M[col], M[piv]] = [M[piv], M[col]];
    for (let r = 0; r < n; r++) {
      if (r === col) continue;
      const f = M[r][col] / M[col][col];
      for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c];
    }
  }
  return M.map((row, i) => row[n] / row[i]);
}

/** 2x2 determinant-based classification of a symmetric Hessian. */
export function classify2x2(H: Mat): "min" | "max" | "saddle" | "degenerate" {
  const a = H[0][0],
    d = H[1][1],
    det = a * d - H[0][1] * H[1][0];
  if (Math.abs(det) < 1e-9) return "degenerate";
  if (det < 0) return "saddle";
  return a > 0 ? "min" : "max";
}

/** Is a symmetric matrix positive definite? (leading-minor / Sylvester test) */
export function isPositiveDefinite(A: Mat): boolean {
  const n = A.length;
  // Cholesky attempt: succeeds iff SPD.
  const L: Mat = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
      let s = A[i][j];
      for (let k = 0; k < j; k++) s -= L[i][k] * L[j][k];
      if (i === j) {
        if (s <= 1e-12) return false;
        L[i][j] = Math.sqrt(s);
      } else {
        L[i][j] = s / L[j][j];
      }
    }
  }
  return true;
}

export const fmt = (x: number, d = 4): string =>
  Number.isFinite(x) ? x.toFixed(d) : "—";
