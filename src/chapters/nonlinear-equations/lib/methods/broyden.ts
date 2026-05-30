/**
 * Broyden's method in 2D — §2.12.
 *
 * Starts with A_0 ≈ J(p_0) (estimated by finite differences with step h, eq. (2.33)).
 * Maintains A^(-1) and updates it directly via the Sherman–Morrison form (eq. (2.40)).
 * Locally superlinear: ||p^(k+1) - p|| / ||p^(k) - p|| → 0.
 */
import { type Mat2, type Vec2, m2, v2 } from './vec'

export interface BroydenStep {
  k: number
  p: Vec2
  f: Vec2
  errInf: number
  /** linear convergence-rate ratio ||p^(k) - p*||∞ / ||p^(k-1) - p*||∞ (NaN at k=0) */
  ratio: number
}

export interface BroydenOptions {
  p0: Vec2
  h: number
  tol: number
  maxIter: number
  /** optional reference for the error column */
  pStar?: Vec2
}

export interface BroydenResult {
  trace: BroydenStep[]
  converged: boolean
  reason: 'tol' | 'maxiter' | 'singular' | 'overflow'
}

function fdJacobian(f: (p: Vec2) => Vec2, p: Vec2, h: number): Mat2 {
  const fp = f(p)
  const fpx = f([p[0] + h, p[1]])
  const fpy = f([p[0], p[1] + h])
  return [
    [(fpx[0] - fp[0]) / h, (fpy[0] - fp[0]) / h],
    [(fpx[1] - fp[1]) / h, (fpy[1] - fp[1]) / h],
  ]
}

export function broyden(
  f: (p: Vec2) => Vec2,
  opts: BroydenOptions,
): BroydenResult {
  const { p0, h, tol, maxIter, pStar } = opts
  const trace: BroydenStep[] = []

  // initial A_0 via finite differences, then maintain its inverse
  const A0 = fdJacobian(f, p0, h)
  let Ainv = m2.inv(A0)
  if (!Ainv) return { trace, converged: false, reason: 'singular' }

  let p: Vec2 = [p0[0], p0[1]]
  let prevErr = pStar ? v2.normInf(v2.sub(p, pStar)) : Number.NaN

  for (let k = 0; k <= maxIter; k++) {
    const fp = f(p)
    if (!Number.isFinite(fp[0]) || !Number.isFinite(fp[1])) {
      return { trace, converged: false, reason: 'overflow' }
    }
    const errInf = pStar ? v2.normInf(v2.sub(p, pStar)) : v2.normInf(fp)
    const ratio = k === 0 || prevErr === 0 ? Number.NaN : errInf / prevErr
    trace.push({ k, p, f: fp, errInf, ratio })

    // s = -Ainv · fp
    const s = v2.scale(-1, m2.vmul(Ainv, fp))
    if (v2.normInf(s) < tol) {
      return { trace, converged: true, reason: 'tol' }
    }
    const pNext: Vec2 = v2.add(p, s)
    const yk: Vec2 = v2.sub(f(pNext), fp)

    // Sherman–Morrison inverse update (eq. (2.40)):
    //   Ainv ← Ainv - ((Ainv·y - s)·s^T·Ainv) / (s^T·Ainv·y)
    const AinvY = m2.vmul(Ainv, yk)
    const denom = v2.dot(s, AinvY)
    if (denom === 0) {
      return { trace, converged: false, reason: 'singular' }
    }
    const num = m2.outer(v2.sub(AinvY, s), m2.vmul(transposed(Ainv), s))
    Ainv = m2.sub(Ainv, m2.scale(1 / denom, num))

    p = pNext
    prevErr = errInf
  }
  return { trace, converged: false, reason: 'maxiter' }
}

function transposed(M: Mat2): Mat2 {
  return [
    [M[0][0], M[1][0]],
    [M[0][1], M[1][1]],
  ]
}
