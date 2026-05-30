/**
 * Newton–Raphson method — §2.5.
 *   p_{k+1} = p_k - f(p_k) / f'(p_k)
 * Locally quadratic at simple roots; linear at multiple roots.
 */
export interface NewtonStep {
  k: number
  p: number
  fp: number
  fpp: number
}

export interface NewtonOptions {
  p0: number
  tol: number
  maxIter: number
}

export interface NewtonResult {
  trace: NewtonStep[]
  converged: boolean
  reason: 'tol' | 'maxiter' | 'zero-derivative' | 'overflow'
}

export function newton(
  f: (x: number) => number,
  fprime: (x: number) => number,
  opts: NewtonOptions,
): NewtonResult {
  const { p0, tol, maxIter } = opts
  const trace: NewtonStep[] = []
  let p = p0

  for (let k = 0; k <= maxIter; k++) {
    const fp = f(p)
    const fpp = fprime(p)
    trace.push({ k, p, fp, fpp })

    if (!Number.isFinite(p) || !Number.isFinite(fp) || !Number.isFinite(fpp)) {
      return { trace, converged: false, reason: 'overflow' }
    }
    if (fpp === 0) {
      return { trace, converged: false, reason: 'zero-derivative' }
    }
    const next = p - fp / fpp
    if (Math.abs(next - p) < tol) {
      trace.push({ k: k + 1, p: next, fp: f(next), fpp: fprime(next) })
      return { trace, converged: true, reason: 'tol' }
    }
    p = next
  }
  return { trace, converged: false, reason: 'maxiter' }
}
