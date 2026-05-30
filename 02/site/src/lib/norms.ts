/**
 * Vector and matrix p-norms — §2.9.
 * Used by the NormBall widget and informational output in other widgets.
 */
export function vecNorm(x: readonly number[], p: number | 'inf'): number {
  if (p === 'inf') return Math.max(...x.map((xi) => Math.abs(xi)))
  if (p === 1) return x.reduce((s, xi) => s + Math.abs(xi), 0)
  if (p === 2) return Math.hypot(...x)
  return x.reduce((s, xi) => s + Math.abs(xi) ** p, 0) ** (1 / p)
}

/** Matrix 1-norm: max absolute column sum. */
export function matNorm1(A: number[][]): number {
  if (A.length === 0) return 0
  const n = A[0].length
  let max = 0
  for (let j = 0; j < n; j++) {
    let col = 0
    for (let i = 0; i < A.length; i++) col += Math.abs(A[i][j])
    if (col > max) max = col
  }
  return max
}

/** Matrix ∞-norm: max absolute row sum. */
export function matNormInf(A: number[][]): number {
  let max = 0
  for (const row of A) {
    let s = 0
    for (const a of row) s += Math.abs(a)
    if (s > max) max = s
  }
  return max
}

/**
 * Parametric point on the unit p-norm ball in R².
 * Uses (cos θ, sin θ) normalized by its own p-norm, so the curve is symmetric
 * about both axes.  Returns NaN for p outside [1, ∞).
 */
export function unitBallPoint(theta: number, p: number): [number, number] {
  const cx = Math.cos(theta)
  const cy = Math.sin(theta)
  if (p === Number.POSITIVE_INFINITY) {
    // {x: max(|x|,|y|) = 1} — square — handle separately
    const m = Math.max(Math.abs(cx), Math.abs(cy))
    return [cx / m, cy / m]
  }
  const r = (Math.abs(cx) ** p + Math.abs(cy) ** p) ** (1 / p)
  return [cx / r, cy / r]
}
