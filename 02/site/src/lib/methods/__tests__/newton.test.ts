/**
 * Newton method tests against Hartung Tables 2.5, 2.10, 2.11.
 */
import { describe, expect, it } from 'vitest'
import { newton } from '../newton'

describe('newton — Hartung Table 2.5, f = e^x − 2·cos(x), p₀ = 0.1', () => {
  const f = (x: number) => Math.exp(x) - 2 * Math.cos(x)
  const fp = (x: number) => Math.exp(x) + 2 * Math.sin(x)
  const r = newton(f, fp, { p0: 0.1, tol: 1e-5, maxIter: 50 })

  it('converges', () => {
    expect(r.converged).toBe(true)
  })

  it('iterates match book values to 4 digits', () => {
    // book: 0.1, 0.7781206411, 0.5678850726, 0.5402639121, 0.5397853041, 0.5397851608
    const expected = [0.1, 0.7781206, 0.5678851, 0.5402639, 0.5397853, 0.5397852]
    for (let i = 0; i < expected.length; i++) {
      expect(r.trace[i].p).toBeCloseTo(expected[i], 4)
    }
  })

  it('converges in ~5 iterations', () => {
    expect(r.trace.length).toBeLessThanOrEqual(7)
  })
})

describe('newton on double root: f = x³ + x² − 8x − 12, p₀ = 0 (Table 2.10)', () => {
  const f = (x: number) => x ** 3 + x ** 2 - 8 * x - 12
  const fp = (x: number) => 3 * x ** 2 + 2 * x - 8
  const r = newton(f, fp, { p0: 0, tol: 1e-8, maxIter: 200 })

  it('converges to the double root −2 (linearly, so it needs many steps)', () => {
    expect(r.converged).toBe(true)
    const last = r.trace[r.trace.length - 1].p
    expect(Math.abs(last + 2)).toBeLessThan(1e-5)
  })

  it('linear-convergence ratio is approximately 1/2 (rate 1 − 1/m = 1/2 for m=2)', () => {
    // Look at later iterates where the asymptotic ratio dominates
    const k = r.trace.length - 5
    const e1 = r.trace[k].p + 2
    const e2 = r.trace[k + 1].p + 2
    expect(Math.abs(e2 / e1)).toBeCloseTo(0.5, 2)
  })
})

describe('newton on simple root: f = x³ + x² − 8x − 12, p₀ = 2 (Table 2.11)', () => {
  const f = (x: number) => x ** 3 + x ** 2 - 8 * x - 12
  const fp = (x: number) => 3 * x ** 2 + 2 * x - 8
  const r = newton(f, fp, { p0: 2, tol: 1e-10, maxIter: 30 })

  it('converges to the simple root 3 quadratically', () => {
    expect(r.converged).toBe(true)
    expect(r.trace.length).toBeLessThanOrEqual(10)
    const last = r.trace[r.trace.length - 1].p
    expect(Math.abs(last - 3)).toBeLessThan(1e-8)
  })
})
