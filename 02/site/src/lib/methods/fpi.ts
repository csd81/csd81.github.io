/**
 * Fixed-point iteration for a scalar function g: R → R.
 *
 * Generates the sequence p_{k+1} = g(p_k), starting from p_0, until either
 *  - |p_{k+1} - p_k| < tol (stopping criterion (i) from §2.2), or
 *  - the iteration count exceeds maxIter, or
 *  - the value becomes non-finite (overflow).
 *
 * Returns the full trace so a UI can step through one iterate at a time.
 */
export interface FpiStep {
  /** iteration index (0 for the initial value) */
  k: number
  /** value of p_k */
  p: number
  /** value of g(p_k) — i.e. p_{k+1} */
  gp: number
}

export interface FpiOptions {
  p0: number
  tol: number
  maxIter: number
}

export interface FpiResult {
  trace: FpiStep[]
  /** true iff the iteration terminated due to tol */
  converged: boolean
  /** terminal reason: 'tol' | 'maxiter' | 'overflow' */
  reason: 'tol' | 'maxiter' | 'overflow'
}

export function fpi(g: (x: number) => number, opts: FpiOptions): FpiResult {
  const { p0, tol, maxIter } = opts
  const trace: FpiStep[] = []
  let p = p0
  let gp = g(p)
  trace.push({ k: 0, p, gp })

  for (let k = 1; k <= maxIter; k++) {
    const next = gp
    if (!Number.isFinite(next)) {
      return { trace, converged: false, reason: 'overflow' }
    }
    const gpNext = g(next)
    trace.push({ k, p: next, gp: gpNext })
    if (Math.abs(next - p) < tol) {
      return { trace, converged: true, reason: 'tol' }
    }
    p = next
    gp = gpNext
  }
  return { trace, converged: false, reason: 'maxiter' }
}
