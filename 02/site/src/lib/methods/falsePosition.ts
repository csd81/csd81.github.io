/**
 * Method of False Position (Regula Falsi) — §2.4.
 * Like bisection, but uses the secant intercept p_k = a_k - f(a_k) · (a_k - b_k)/(f(a_k) - f(b_k))
 * instead of the midpoint.
 */
export interface FalsePosStep {
  k: number
  a: number
  b: number
  p: number
  fp: number
}

export interface FalsePosOptions {
  a: number
  b: number
  tol: number
  maxIter: number
}

export interface FalsePosResult {
  trace: FalsePosStep[]
  converged: boolean
  reason: 'tol' | 'exact' | 'maxiter' | 'invalid'
}

export function falsePosition(
  f: (x: number) => number,
  opts: FalsePosOptions,
): FalsePosResult {
  let { a, b } = opts
  const { tol, maxIter } = opts
  const trace: FalsePosStep[] = []

  let fa = f(a)
  let fb = f(b)
  if (!(fa * fb < 0)) {
    return { trace, converged: false, reason: 'invalid' }
  }

  let prevP = Number.NaN
  for (let k = 0; k <= maxIter; k++) {
    const p = a - (fa * (a - b)) / (fa - fb)
    const fp = f(p)
    trace.push({ k, a, b, p, fp })

    if (fp === 0) {
      return { trace, converged: true, reason: 'exact' }
    }
    if (k > 0 && Math.abs(p - prevP) < tol) {
      return { trace, converged: true, reason: 'tol' }
    }

    if (fa * fp < 0) {
      b = p
      fb = fp
    } else {
      a = p
      fa = fp
    }
    prevP = p
  }
  return { trace, converged: false, reason: 'maxiter' }
}
