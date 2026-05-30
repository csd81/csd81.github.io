import { describe, it, expect } from 'vitest';
import {
  fitLine,
  fitPolynomial,
  fitExpLinearized,
  fitPowerLinearized,
  sse,
  evalPoly,
} from '../src/math/lsq.js';

// Reference values from the textbook (Chapter 9, Examples 9.2, 9.4, 9.5, 9.6).

describe('fitLine — Example 9.2', () => {
  const xs = [-1.0, 1.0, 2.5, 3.0, 4.0, 4.5, 6.0];
  const ys = [0.0, 1.2, 1.9, 2.5, 3.1, 3.2, 4.5];

  it('reproduces the published coefficients and error', () => {
    const { a, b } = fitLine(xs, ys);
    expect(a).toBeCloseTo(0.630243, 5);
    expect(b).toBeCloseTo(0.542163, 5);
    const err = sse((x) => a * x + b, xs, ys);
    expect(err).toBeCloseTo(0.124691, 5);
  });
});

describe('fitPolynomial (m=2) — Example 9.4', () => {
  const xs = [-1.0, -0.5, 0.0, 1.0, 2.0, 3.0, 3.5];
  const ys = [1.6, 1.7, 1.9, 1.5, 0.6, -0.1, -1.0];

  it('reproduces parabola coefficients and error', () => {
    const c = fitPolynomial(xs, ys, 2); // [a0, a1, a2]
    expect(c[2]).toBeCloseTo(-0.196021, 5); // a
    expect(c[1]).toBeCloseTo(-0.084748, 5); // b
    expect(c[0]).toBeCloseTo(1.752653, 5); // c
    const err = sse((x) => evalPoly(c, x), xs, ys);
    expect(err).toBeCloseTo(0.0964456, 5);
  });
});

describe('fitExpLinearized — Example 9.5', () => {
  const xs = [0.0, 1.0, 1.5, 2.0, 3.0, 4.0];
  const ys = [0.3, 0.7, 0.9, 1.2, 1.8, 2.7];

  it('reproduces A, B and the nonlinear error', () => {
    const { a, b } = fitExpLinearized(xs, ys);
    expect(a).toBeCloseTo(0.528951, 5); // A
    expect(Math.log(b)).toBeCloseTo(-0.997597, 5); // B
    expect(b).toBeCloseTo(0.368765, 5);
    const err = sse((x) => b * Math.exp(a * x), xs, ys);
    expect(err).toBeCloseTo(0.165543, 5);
  });
});

describe('fitPowerLinearized — Example 9.6', () => {
  const xs = [0.5, 1.0, 1.5, 2.5, 3.0];
  const ys = [0.7, 1.1, 1.6, 2.1, 2.3];

  it('reproduces a, b and the nonlinear error', () => {
    const { a, b } = fitPowerLinearized(xs, ys);
    expect(a).toBeCloseTo(0.676257, 5);
    expect(b).toBeCloseTo(1.130984, 5);
    const err = sse((x) => b * Math.pow(x, a), xs, ys);
    expect(err).toBeCloseTo(0.019616, 5);
  });
});
