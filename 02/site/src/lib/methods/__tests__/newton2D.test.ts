/**
 * Newton 2D test against Hartung Table 2.13 (the example system (2.26),
 * p₀ = (−1.5, −1.5), converges to (1, 0) in ~4 steps).
 */
import { describe, expect, it } from 'vitest'
import { newton2D } from '../newton2D'
import type { Vec2, Mat2 } from '../vec'

describe('newton2D — Hartung Example 2.57 / Table 2.13', () => {
  const f = (p: Vec2): Vec2 => [
    4 * p[0] - Math.exp(p[0] * p[1]) - 3,
    p[0] - p[1] ** 2 - 3 * p[1] - 1,
  ]
  const jac = (p: Vec2): Mat2 => {
    const e = Math.exp(p[0] * p[1])
    return [
      [4 - p[1] * e, -p[0] * e],
      [1, -2 * p[1] - 3],
    ]
  }
  const r = newton2D(f, jac, {
    p0: [-1.5, -1.5],
    tol: 1e-8,
    maxIter: 30,
    pStar: [1, 0],
  })

  it('converges to (1, 0)', () => {
    expect(r.converged).toBe(true)
    const last = r.trace[r.trace.length - 1]
    expect(Math.abs(last.p[0] - 1)).toBeLessThan(1e-5)
    expect(Math.abs(last.p[1] - 0)).toBeLessThan(1e-5)
  })

  it('converges in roughly 4–6 iterations (quadratic)', () => {
    expect(r.trace.length).toBeLessThanOrEqual(8)
  })
})
