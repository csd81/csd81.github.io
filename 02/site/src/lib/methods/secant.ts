/**
 * Secant method — §2.6.
 *   p_{k+1} = p_k - f(p_k) · (p_k - p_{k-1}) / (f(p_k) - f(p_{k-1}))
 * Order of convergence φ = (1 + √5)/2 ≈ 1.618 at simple roots.
 */
export interface SecantStep {
  k: number
  p: number
  fp: number
}

export interface SecantOptions {
  p0: number
  p1: number
  tol: number
  maxIter: number
}

export interface SecantResult {
  trace: SecantStep[]
  converged: boolean
  reason: 'tol' | 'maxiter' | 'flat' | 'overflow'
}

export function secant(
  f: (x: number) => number,
  opts: SecantOptions,
): SecantResult {
  const { p0, p1, tol, maxIter } = opts
  const trace: SecantStep[] = []
  let pPrev = p0
  let fPrev = f(p0)
  let p = p1
  let fp = f(p1)
  trace.push({ k: 0, p: pPrev, fp: fPrev })
  trace.push({ k: 1, p, fp })

  for (let k = 2; k <= maxIter + 1; k++) {
    if (fp === fPrev) {
      return { trace, converged: false, reason: 'flat' }
    }
    const next = p - (fp * (p - pPrev)) / (fp - fPrev)
    if (!Number.isFinite(next)) {
      return { trace, converged: false, reason: 'overflow' }
    }
    const fNext = f(next)
    trace.push({ k, p: next, fp: fNext })
    if (Math.abs(next - p) < tol) {
      return { trace, converged: true, reason: 'tol' }
    }
    pPrev = p
    fPrev = fp
    p = next
    fp = fNext
  }
  return { trace, converged: false, reason: 'maxiter' }
}
