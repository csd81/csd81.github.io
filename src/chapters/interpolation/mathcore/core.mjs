// InterPlay math core — pure functions for Chapter 6 interpolation methods.
// Canonical implementation (plain ESM JS so node:test can import it directly).
// The React app imports this through index.ts (which adds TypeScript types).

const EPS = 1e-12;

/** Lagrange basis polynomial l_k evaluated at x (formula 6.2). */
export function lagrangeBasis(xs, k, x) {
  let num = 1;
  let den = 1;
  for (let i = 0; i < xs.length; i++) {
    if (i === k) continue;
    num *= x - xs[i];
    den *= xs[k] - xs[i];
  }
  return den === 0 ? NaN : num / den;
}

/** Lagrange interpolating polynomial L_n evaluated at x (Theorem 6.1 / formula 6.3). */
export function lagrangeEval(points, x) {
  const xs = points.map((p) => p.x);
  let sum = 0;
  for (let k = 0; k < points.length; k++) {
    sum += points[k].y * lagrangeBasis(xs, k, x);
  }
  return sum;
}

/**
 * Full divided-difference table (Table 6.1).
 * table[i][j] = j-th order divided difference starting at row i.
 * Newton coefficients are the top row: table[0][j] = f[x_0,...,x_j].
 */
export function dividedDifferenceTable(xs, ys) {
  const n = xs.length;
  const table = Array.from({ length: n }, () => []);
  for (let i = 0; i < n; i++) table[i][0] = ys[i];
  for (let j = 1; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      const denom = xs[i + j] - xs[i];
      table[i][j] =
        Math.abs(denom) < EPS ? NaN : (table[i + 1][j - 1] - table[i][j - 1]) / denom;
    }
  }
  return table;
}

/** Newton coefficients a_i = f[x_0,...,x_i] (Algorithm 6.13) — the top row of the table. */
export function newtonCoefficients(xs, ys) {
  return dividedDifferenceTable(xs, ys)[0];
}

/** Evaluate a Newton polynomial via Horner's method (Algorithm 6.14). */
export function newtonEval(xs, coeffs, x) {
  let y = coeffs[coeffs.length - 1];
  for (let i = coeffs.length - 2; i >= 0; i--) {
    y = y * (x - xs[i]) + coeffs[i];
  }
  return y;
}

/**
 * Hermite interpolation table (Table 6.2 / formula 6.7).
 * Each node x_i is doubled; first divided difference of a repeated node is dy_i.
 * Returns { z, table, coeffs }.
 */
export function hermiteTable(xs, ys, dys) {
  const m = xs.length;
  const n = 2 * m;
  const z = new Array(n);
  const table = Array.from({ length: n }, () => new Array(n).fill(NaN));

  for (let i = 0; i < m; i++) {
    z[2 * i] = xs[i];
    z[2 * i + 1] = xs[i];
    table[2 * i][0] = ys[i];
    table[2 * i + 1][0] = ys[i];
  }
  for (let i = 0; i < n - 1; i++) {
    if (z[i + 1] === z[i]) {
      table[i][1] = dys[Math.floor(i / 2)];
    } else {
      table[i][1] = (table[i + 1][0] - table[i][0]) / (z[i + 1] - z[i]);
    }
  }
  for (let j = 2; j < n; j++) {
    for (let i = 0; i < n - j; i++) {
      const denom = z[i + j] - z[i];
      table[i][j] =
        Math.abs(denom) < EPS ? NaN : (table[i + 1][j - 1] - table[i][j - 1]) / denom;
    }
  }
  const coeffs = table[0]; // top row = Hermite coefficients f[x_0], f[x_0,x_0], ...
  return { z, table, coeffs };
}

/** Evaluate the Hermite polynomial (Newton form over doubled nodes). */
export function hermiteEval(h, x) {
  const { z, coeffs } = h;
  let y = coeffs[coeffs.length - 1];
  for (let i = coeffs.length - 2; i >= 0; i--) {
    y = y * (x - z[i]) + coeffs[i];
  }
  return y;
}

/**
 * Natural cubic spline (Section 6.5, eq. 6.15–6.22).
 * S_i(x) = a + b(x-x_i) + c(x-x_i)^2 + d(x-x_i)^3 on [x_i, x_{i+1}].
 * Boundary: S''(x_0) = S''(x_n) = 0  →  c_0 = c_n = 0.
 * Returns an array of segments { x, a, b, c, d }.
 */
export function naturalCubicSpline(xs, ys) {
  const n = xs.length - 1;
  if (n < 1) return [];
  const h = new Array(n);
  for (let i = 0; i < n; i++) h[i] = xs[i + 1] - xs[i];

  const A = Array.from({ length: n + 1 }, () => new Array(n + 1).fill(0));
  const rhs = new Array(n + 1).fill(0);
  A[0][0] = 1;
  A[n][n] = 1;
  for (let i = 1; i < n; i++) {
    A[i][i - 1] = h[i - 1];
    A[i][i] = 2 * (h[i - 1] + h[i]);
    A[i][i + 1] = h[i];
    rhs[i] = (3 / h[i]) * (ys[i + 1] - ys[i]) - (3 / h[i - 1]) * (ys[i] - ys[i - 1]);
  }
  const c = solveTridiagonal(A, rhs);

  const segs = [];
  for (let i = 0; i < n; i++) {
    const a = ys[i];
    const b = (ys[i + 1] - ys[i]) / h[i] - (h[i] * (2 * c[i] + c[i + 1])) / 3;
    const d = (c[i + 1] - c[i]) / (3 * h[i]);
    segs.push({ x: xs[i], a, b, c: c[i], d });
  }
  return segs;
}

function solveTridiagonal(A, rhs) {
  const n = A.length;
  const a = A.map((row) => row.slice());
  const b = rhs.slice();
  for (let i = 1; i < n; i++) {
    if (Math.abs(a[i][i - 1]) < EPS) continue;
    const f = a[i][i - 1] / a[i - 1][i - 1];
    for (let j = 0; j < n; j++) a[i][j] -= f * a[i - 1][j];
    b[i] -= f * b[i - 1];
  }
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = b[i];
    for (let j = i + 1; j < n; j++) s -= a[i][j] * x[j];
    x[i] = a[i][i] === 0 ? 0 : s / a[i][i];
  }
  return x;
}

export function splineEval(segs, xs, x) {
  if (segs.length === 0) return NaN;
  let i = 0;
  for (let k = 0; k < segs.length; k++) {
    if (x >= segs[k].x) i = k;
  }
  const s = segs[i];
  const t = x - s.x;
  return s.a + s.b * t + s.c * t * t + s.d * t * t * t;
}

/** Build an evaluator for the chosen method from the current points. */
export function makeEvaluator(method, points, derivatives) {
  const xs = points.map((p) => p.x);
  const ys = points.map((p) => p.y);
  switch (method) {
    case "lagrange":
      return (x) => lagrangeEval(points, x);
    case "newton": {
      const coeffs = newtonCoefficients(xs, ys);
      return (x) => newtonEval(xs, coeffs, x);
    }
    case "hermite": {
      const dys = derivatives ?? ys.map(() => 0);
      const h = hermiteTable(xs, ys, dys);
      return (x) => hermiteEval(h, x);
    }
    case "spline": {
      const segs = naturalCubicSpline(xs, ys);
      return (x) => splineEval(segs, xs, x);
    }
    default:
      return () => NaN;
  }
}
