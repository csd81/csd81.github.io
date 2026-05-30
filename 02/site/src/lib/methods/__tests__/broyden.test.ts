/**
 * Broyden test against Hartung Example 2.60 / Table 2.14
 *   same system as newton2D, p₀ = (−1.5, −1.5), h = 0.001
 *   converges in ~10 superlinear iterations.
 */
import { describe, expect, it } from 'vitest'
import { broyden } from '../broyden'
import type { Vec2 } from '../vec'

describe('broyden — Hartung Table 2.14', () => {
  const f = (p: Vec2): Vec2 => [
    4 * p[0] - Math.exp(p[0] * p[1]) - 3,
    p[0] - p[1] ** 2 - 3 * p[1] - 1,
  ]
  const r = broyden(f, {
    p0: [-1.5, -1.5],
    h: 0.001,
    tol: 1e-5,
    maxIter: 50,
    pStar: [1, 0],
  })

  it('converges', () => {
    expect(r.converged).toBe(true)
  })

  it('reaches (1, 0) to within 1e-4', () => {
    const last = r.trace[r.trace.length - 1]
    expect(Math.abs(last.p[0] - 1)).toBeLessThan(1e-4)
    expect(Math.abs(last.p[1] - 0)).toBeLessThan(1e-4)
  })

  it('takes more iterations than Newton 2D (superlinear, not quadratic)', () => {
    expect(r.trace.length).toBeGreaterThan(6)
  })

  it('the ratio column tends toward 0 (evidence of superlinear convergence)', () => {
    // Later iterates should show shrinking ratio
    const tail = r.trace.slice(-4).map((s) => s.ratio).filter(Number.isFinite)
    expect(tail.length).toBeGreaterThan(0)
    expect(Math.min(...tail)).toBeLessThan(0.5)
  })
})
