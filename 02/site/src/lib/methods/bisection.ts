/**
 * Bisection method to find a root of f on [a, b] with f(a)·f(b) < 0.
 * §2.3 in Hartung. Error bound after k bisections: |p_k - p| ≤ (b - a) / 2^(k+1).
 */
export interface BisectionStep {
  k: number
  a: number
  b: number
  p: number
  fp: number
}

export interface BisectionOptions {
  a: number
  b: number
  tol: number
  maxIter: number
}

export interface BisectionResult {
  trace: BisectionStep[]
  converged: boolean
  reason: 'tol' | 'exact' | 'maxiter' | 'invalid'
}

export function bisect(
  f: (x: number) => number,
  opts: BisectionOptions,
): BisectionResult {
  let { a, b } = opts
  const { tol, maxIter } = opts
  const trace: BisectionStep[] = []

  let fa = f(a)
  let fb = f(b)
  if (!(fa * fb < 0)) {
    return { trace, converged: false, reason: 'invalid' }
  }

  for (let k = 0; k <= maxIter; k++) {
    const p = (a + b) / 2
    const fp = f(p)
    trace.push({ k, a, b, p, fp })

    if (fp === 0) {
      return { trace, converged: true, reason: 'exact' }
    }
    if ((b - a) / 2 < tol) {
      return { trace, converged: true, reason: 'tol' }
    }

    if (fa * fp < 0) {
      b = p
      fb = fp
    } else {
      a = p
      fa = fp
    }
  }
  return { trace, converged: false, reason: 'maxiter' }
}
