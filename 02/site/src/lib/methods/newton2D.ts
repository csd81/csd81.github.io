/**
 * Newton's method in 2 dimensions — §2.11.
 *   p^(k+1) = p^(k) - [J(p^(k))]^(-1) · f(p^(k))
 * Locally quadratic at simple zeros where J is invertible.
 */
import { type Mat2, type Vec2, m2, v2 } from './vec'

export interface Newton2DStep {
  k: number
  p: Vec2
  f: Vec2
  errInf: number
}

export interface Newton2DOptions {
  p0: Vec2
  tol: number
  maxIter: number
  /** optional reference solution to compute error column; defaults to ||f(p)||∞ as a proxy */
  pStar?: Vec2
}

export interface Newton2DResult {
  trace: Newton2DStep[]
  converged: boolean
  reason: 'tol' | 'maxiter' | 'singular' | 'overflow'
}

/**
 * @param f       vector function R² → R²
 * @param jac     Jacobian J: R² → R^{2x2}
 */
export function newton2D(
  f: (p: Vec2) => Vec2,
  jac: (p: Vec2) => Mat2,
  opts: Newton2DOptions,
): Newton2DResult {
  const { p0, tol, maxIter, pStar } = opts
  const trace: Newton2DStep[] = []
  let p: Vec2 = [p0[0], p0[1]]

  for (let k = 0; k <= maxIter; k++) {
    const fp = f(p)
    if (!Number.isFinite(fp[0]) || !Number.isFinite(fp[1])) {
      return { trace, converged: false, reason: 'overflow' }
    }
    const errInf = pStar ? v2.normInf(v2.sub(p, pStar)) : v2.normInf(fp)
    trace.push({ k, p, f: fp, errInf })

    const J = jac(p)
    // Solve J·s = -f(p)
    const s = m2.solve(J, [-fp[0], -fp[1]])
    if (!s) {
      return { trace, converged: false, reason: 'singular' }
    }
    if (v2.normInf(s) < tol) {
      return { trace, converged: true, reason: 'tol' }
    }
    p = v2.add(p, s)
  }
  return { trace, converged: false, reason: 'maxiter' }
}
