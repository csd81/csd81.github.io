/**
 * Tiny 2D vector / matrix utilities for the multidimensional methods.
 * Pure data, no class instances — works well across the TS/React boundary.
 */
export type Vec2 = readonly [number, number]
/** 2×2 matrix stored row-major: [[a, b], [c, d]] */
export type Mat2 = readonly [readonly [number, number], readonly [number, number]]

export const v2 = {
  add: (a: Vec2, b: Vec2): Vec2 => [a[0] + b[0], a[1] + b[1]],
  sub: (a: Vec2, b: Vec2): Vec2 => [a[0] - b[0], a[1] - b[1]],
  scale: (s: number, a: Vec2): Vec2 => [s * a[0], s * a[1]],
  dot: (a: Vec2, b: Vec2): number => a[0] * b[0] + a[1] * b[1],
  norm2: (a: Vec2): number => Math.hypot(a[0], a[1]),
  normInf: (a: Vec2): number => Math.max(Math.abs(a[0]), Math.abs(a[1])),
  norm1: (a: Vec2): number => Math.abs(a[0]) + Math.abs(a[1]),
  equal: (a: Vec2, b: Vec2): boolean => a[0] === b[0] && a[1] === b[1],
}

export const m2 = {
  det: (M: Mat2): number => M[0][0] * M[1][1] - M[0][1] * M[1][0],
  /** Solves M · x = b. Returns null if singular. */
  solve(M: Mat2, b: Vec2): Vec2 | null {
    const d = m2.det(M)
    if (d === 0) return null
    const x = (M[1][1] * b[0] - M[0][1] * b[1]) / d
    const y = (M[0][0] * b[1] - M[1][0] * b[0]) / d
    return [x, y]
  },
  /** Returns M^(-1) or null if singular. */
  inv(M: Mat2): Mat2 | null {
    const d = m2.det(M)
    if (d === 0) return null
    return [
      [M[1][1] / d, -M[0][1] / d],
      [-M[1][0] / d, M[0][0] / d],
    ]
  },
  mul(A: Mat2, B: Mat2): Mat2 {
    return [
      [A[0][0] * B[0][0] + A[0][1] * B[1][0], A[0][0] * B[0][1] + A[0][1] * B[1][1]],
      [A[1][0] * B[0][0] + A[1][1] * B[1][0], A[1][0] * B[0][1] + A[1][1] * B[1][1]],
    ]
  },
  vmul(M: Mat2, v: Vec2): Vec2 {
    return [M[0][0] * v[0] + M[0][1] * v[1], M[1][0] * v[0] + M[1][1] * v[1]]
  },
  add(A: Mat2, B: Mat2): Mat2 {
    return [
      [A[0][0] + B[0][0], A[0][1] + B[0][1]],
      [A[1][0] + B[1][0], A[1][1] + B[1][1]],
    ]
  },
  sub(A: Mat2, B: Mat2): Mat2 {
    return [
      [A[0][0] - B[0][0], A[0][1] - B[0][1]],
      [A[1][0] - B[1][0], A[1][1] - B[1][1]],
    ]
  },
  /** Outer product u v^T (rank-1 matrix). */
  outer(u: Vec2, v: Vec2): Mat2 {
    return [
      [u[0] * v[0], u[0] * v[1]],
      [u[1] * v[0], u[1] * v[1]],
    ]
  },
  scale(s: number, M: Mat2): Mat2 {
    return [
      [s * M[0][0], s * M[0][1]],
      [s * M[1][0], s * M[1][1]],
    ]
  },
}
