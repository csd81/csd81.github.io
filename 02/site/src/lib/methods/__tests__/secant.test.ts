/**
 * Secant method test against Hartung Table 2.7.
 *   f(x) = e^x − 2·cos(x), p₀ = 0, p₁ = 1
 */
import { describe, expect, it } from 'vitest'
import { secant } from '../secant'

describe('secant — Hartung Table 2.7', () => {
  const f = (x: number) => Math.exp(x) - 2 * Math.cos(x)
  const r = secant(f, { p0: 0, p1: 1, tol: 1e-5, maxIter: 50 })

  it('converges in ~7 iterations', () => {
    expect(r.converged).toBe(true)
    expect(r.trace.length).toBeLessThanOrEqual(10)
  })

  it('matches book iterates to 4 digits', () => {
    // 0, 1, 0.3791214458, 0.5002604213, 0.5442561500, 0.5396724494, 0.5397848464, 0.5397851608
    const expected = [
      0, 1, 0.3791214, 0.5002604, 0.5442562, 0.5396724, 0.5397848, 0.5397852,
    ]
    for (let i = 0; i < expected.length; i++) {
      expect(r.trace[i].p).toBeCloseTo(expected[i], 4)
    }
  })
})
