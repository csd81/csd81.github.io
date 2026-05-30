import { describe, it, expect } from 'vitest';
import {
  forwardDiff,
  backwardDiff,
  centralDiff,
  secondDerivative,
  fivePointCentral,
  trapezoidComposite,
  simpsonComposite,
  gauss,
  referenceIntegral,
} from './numerics';

// f(x) = e^{x^2 + x}; f'(0) = 1, f''(0) = 3 (Examples 7.1, 7.2, 7.4).
const f1 = (x: number) => Math.exp(x * x + x);
// g(x) = x^2 e^x on [0,1]; exact integral = e - 2 (Examples 7.7, 7.8).
const g = (x: number) => x * x * Math.exp(x);
// h(x) = e^x on [-1,1]; exact integral = e - 1/e (Example 7.11, transformed).
const ex = (x: number) => Math.exp(x);

describe('differentiation formulas (f = e^{x^2+x})', () => {
  it('forward/backward first-order, h = 0.1 (Table 7.1)', () => {
    expect(forwardDiff(f1, 0, 0.1)).toBeCloseTo(1.1627807, 5);
    expect(backwardDiff(f1, 0, 0.1)).toBeCloseTo(0.8606881, 5);
  });

  it('central second-order, h = 0.1 (Table 7.2)', () => {
    expect(centralDiff(f1, 0, 0.1)).toBeCloseTo(1.0117344, 5);
  });

  it('five-point central, h = 0.1 (Table 7.3)', () => {
    expect(fivePointCentral(f1, 0, 0.1)).toBeCloseTo(0.9997248, 5);
  });

  it("second derivative, h = 0.1 -> f''(0) ≈ 3.0209256 (Table 7.4)", () => {
    expect(secondDerivative(f1, 0, 0.1)).toBeCloseTo(3.0209256, 5);
  });
});

describe('integration of x^2 e^x on [0,1] (exact = e - 2 = 0.7182818)', () => {
  it('basic trapezoid (n = 1) ≈ 1.3591409 (Example 7.7)', () => {
    expect(trapezoidComposite(g, 0, 1, 1)).toBeCloseTo(1.3591409, 5);
  });

  it('composite trapezoid (h = 0.5, n = 2) ≈ 0.8856606', () => {
    expect(trapezoidComposite(g, 0, 1, 2)).toBeCloseTo(0.8856606, 5);
  });

  it('composite trapezoid (h = 0.25, n = 4) ≈ 0.7605963', () => {
    expect(trapezoidComposite(g, 0, 1, 4)).toBeCloseTo(0.7605963, 5);
  });

  it('basic Simpson (n = 2) ≈ 0.7278339 (Example 7.8)', () => {
    expect(simpsonComposite(g, 0, 1, 2)).toBeCloseTo(0.7278339, 5);
  });

  it('composite Simpson (n = 4) ≈ 0.7189082', () => {
    expect(simpsonComposite(g, 0, 1, 4)).toBeCloseTo(0.7189082, 5);
  });

  it('reference integral matches exact e - 2', () => {
    expect(referenceIntegral(g, 0, 1)).toBeCloseTo(Math.E - 2, 6);
  });
});

describe('Gaussian quadrature', () => {
  it('2-point Gauss of e^x on [-1,1] ≈ 2.3426961 (Example 7.11)', () => {
    expect(gauss(ex, -1, 1, 2)).toBeCloseTo(2.3426961, 5);
  });

  it('2-point Gauss of x^2 e^x on [0,1] ≈ 0.7119418 (Example 7.15)', () => {
    expect(gauss(g, 0, 1, 2)).toBeCloseTo(0.7119418, 5);
  });

  it('5-point Gauss of e^x on [-1,1] matches exact e - 1/e', () => {
    expect(gauss(ex, -1, 1, 5)).toBeCloseTo(Math.E - 1 / Math.E, 7);
  });
});
