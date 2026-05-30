// Verifies the math core against the worked examples in Chapter 6.
// Run with:  npm test    (node --test)
import test from "node:test";
import assert from "node:assert/strict";
import {
  lagrangeEval,
  newtonCoefficients,
  newtonEval,
  hermiteTable,
  hermiteEval,
  naturalCubicSpline,
  splineEval,
} from "./core.mjs";

const approx = (a, b, tol = 1e-9) => assert.ok(Math.abs(a - b) <= tol, `${a} ≈ ${b}`);

test("Lagrange — Example 6.2 (EN chapter): L_3(x)=3x^3-6x^2-x+5", () => {
  const pts = [
    { x: -1, y: -3 },
    { x: 1, y: 1 },
    { x: 2, y: 3 },
    { x: 3, y: 29 },
  ];
  const f = (x) => 3 * x ** 3 - 6 * x ** 2 - x + 5;
  for (const x of [-1, 0, 0.5, 1, 2, 3, 4]) approx(lagrangeEval(pts, x), f(x));
});

test("Newton — slides example: L_3(x)=x^3-3x^2+2 with top row [-2,1,-1,1]", () => {
  const xs = [-1, 1, 2, 3];
  const ys = [-2, 0, -2, 2];
  const coeffs = newtonCoefficients(xs, ys);
  approx(coeffs[0], -2);
  approx(coeffs[1], 1);
  approx(coeffs[2], -1);
  approx(coeffs[3], 1);
  const f = (x) => x ** 3 - 3 * x ** 2 + 2;
  for (const x of [-1, 0, 1, 2, 3]) approx(newtonEval(xs, coeffs, x), f(x));
});

test("Hermite — Example 6.21: H_5(x)=2x^4-x^3-6x^2+2x+7", () => {
  const xs = [-1, 1, 2];
  const ys = [2, 4, 11];
  const dys = [3, -5, 30];
  const h = hermiteTable(xs, ys, dys);
  const f = (x) => 2 * x ** 4 - x ** 3 - 6 * x ** 2 + 2 * x + 7;
  const df = (x) => 8 * x ** 3 - 3 * x ** 2 - 12 * x + 2;
  for (const x of [-1, 0, 1, 1.5, 2]) approx(hermiteEval(h, x), f(x), 1e-7);
  for (let i = 0; i < xs.length; i++) {
    approx(hermiteEval(h, xs[i]), ys[i], 1e-7);
    const eps = 1e-6;
    const nd = (hermiteEval(h, xs[i] + eps) - hermiteEval(h, xs[i] - eps)) / (2 * eps);
    approx(nd, df(xs[i]), 1e-3);
  }
});

test("Natural cubic spline — interpolates data, natural ends (c_0 = 0)", () => {
  const xs = [0, 1, 1.5, 2, 3, 4];
  const ys = [0.5, 0.1, 2.5, -1.0, -0.5, 0.0];
  const segs = naturalCubicSpline(xs, ys);
  for (let i = 0; i < xs.length; i++) approx(splineEval(segs, xs, xs[i]), ys[i], 1e-9);
  approx(segs[0].c, 0, 1e-9);
});
