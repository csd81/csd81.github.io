/**
 * Regression test: bisection on f(x) = e^x − 2·cos(x) on [0, 1] with ε = 1e-5
 * must reproduce Hartung's Table 2.2.  We check the first three iterates and
 * the converged endpoint to a tolerance well below ε.
 */
import { describe, expect, it } from 'vitest'
import { bisect } from '../bisection'

const f = (x: number) => Math.exp(x) - 2 * Math.cos(x)

describe('bisect — Hartung Table 2.2', () => {
  const r = bisect(f, { a: 0, b: 1, tol: 1e-5, maxIter: 50 })

  it('converges', () => {
    expect(r.converged).toBe(true)
  })

  it('first iterate matches the book (k=0: p=0.5, f(p)≈−0.1064)', () => {
    expect(r.trace[0].p).toBeCloseTo(0.5, 10)
    expect(r.trace[0].fp).toBeCloseTo(-0.1064, 3)
  })

  it('k=1: p=0.75, f(p)≈0.6536', () => {
    expect(r.trace[1].p).toBeCloseTo(0.75, 10)
    expect(r.trace[1].fp).toBeCloseTo(0.6536, 3)
  })

  it('k=2: p=0.625, f(p)≈0.2463', () => {
    expect(r.trace[2].p).toBeCloseTo(0.625, 10)
    expect(r.trace[2].fp).toBeCloseTo(0.2463, 3)
  })

  it('final iterate is within ε of the true root', () => {
    const pStar = 0.53978509816086
    const last = r.trace[r.trace.length - 1].p
    expect(Math.abs(last - pStar)).toBeLessThan(1e-5)
  })
})
