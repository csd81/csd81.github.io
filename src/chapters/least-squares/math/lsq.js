// Numeric core for least-squares fitting.
// Pure functions, reused by interactive demos and unit tests.

/**
 * Solve a linear system A x = b by Gaussian elimination with partial pivoting.
 * @param {number[][]} A  square matrix (n x n), not mutated
 * @param {number[]}   b  right-hand side (length n), not mutated
 * @returns {number[]} solution x
 */
export function solveLinearSystem(A, b) {
  const n = b.length;
  // Build an augmented copy so the inputs stay intact.
  const M = A.map((row, i) => [...row, b[i]]);

  for (let col = 0; col < n; col++) {
    // Partial pivot: largest magnitude in this column.
    let pivot = col;
    for (let r = col + 1; r < n; r++) {
      if (Math.abs(M[r][col]) > Math.abs(M[pivot][col])) pivot = r;
    }
    if (Math.abs(M[pivot][col]) < 1e-15) {
      throw new Error('Singular matrix in solveLinearSystem');
    }
    [M[col], M[pivot]] = [M[pivot], M[col]];

    // Eliminate below.
    for (let r = col + 1; r < n; r++) {
      const f = M[r][col] / M[col][col];
      if (f === 0) continue;
      for (let c = col; c <= n; c++) M[r][c] -= f * M[col][c];
    }
  }

  // Back substitution.
  const x = new Array(n).fill(0);
  for (let r = n - 1; r >= 0; r--) {
    let s = M[r][n];
    for (let c = r + 1; c < n; c++) s -= M[r][c] * x[c];
    x[r] = s / M[r][r];
  }
  return x;
}

/**
 * Fit a line y = a x + b via the Gaussian normal equations (eq. 3 in the book).
 * @returns {{a:number, b:number}}
 */
export function fitLine(xs, ys) {
  const n = xs.length;
  let Sx = 0, Sy = 0, Sxx = 0, Sxy = 0;
  for (let i = 0; i < n; i++) {
    Sx += xs[i];
    Sy += ys[i];
    Sxx += xs[i] * xs[i];
    Sxy += xs[i] * ys[i];
  }
  // [ Sxx Sx ] [a]   [Sxy]
  // [ Sx  n  ] [b] = [Sy ]
  const [a, b] = solveLinearSystem(
    [
      [Sxx, Sx],
      [Sx, n],
    ],
    [Sxy, Sy]
  );
  return { a, b };
}

/**
 * Fit a polynomial of degree m via the normal equations (eq. 4 in the book).
 * @returns {number[]} coefficients [a0, a1, ..., am] (ascending powers).
 */
export function fitPolynomial(xs, ys, m) {
  const n = xs.length;
  const size = m + 1;
  // Power sums S[k] = sum x_i^k for k = 0..2m.
  const S = new Array(2 * m + 1).fill(0);
  for (let i = 0; i < n; i++) {
    let p = 1;
    for (let k = 0; k <= 2 * m; k++) {
      S[k] += p;
      p *= xs[i];
    }
  }
  // Moment sums T[j] = sum x_i^j y_i for j = 0..m.
  const T = new Array(size).fill(0);
  for (let i = 0; i < n; i++) {
    let p = 1;
    for (let j = 0; j < size; j++) {
      T[j] += p * ys[i];
      p *= xs[i];
    }
  }
  const A = [];
  for (let j = 0; j < size; j++) {
    const row = [];
    for (let k = 0; k < size; k++) row.push(S[j + k]);
    A.push(row);
  }
  // Returns ascending coefficients [a0, a1, ..., am].
  return solveLinearSystem(A, T);
}

/**
 * Fit y = b e^{a x} by linearizing to ln y = ln b + a x (book §9.3).
 * @returns {{a:number, b:number}}
 */
export function fitExpLinearized(xs, ys) {
  const lnY = ys.map((y) => Math.log(y));
  const { a, b } = fitLine(xs, lnY); // a = slope (A), b = intercept (B)
  return { a, b: Math.exp(b) };
}

/**
 * Fit y = b x^a by linearizing to ln y = a ln x + ln b (book §9.3).
 * @returns {{a:number, b:number}}
 */
export function fitPowerLinearized(xs, ys) {
  const lnX = xs.map((x) => Math.log(x));
  const lnY = ys.map((y) => Math.log(y));
  const { a, b } = fitLine(lnX, lnY);
  return { a, b: Math.exp(b) };
}

/**
 * Sum of squared errors of a prediction function against data.
 * @param {(x:number)=>number} predFn
 */
export function sse(predFn, xs, ys) {
  let s = 0;
  for (let i = 0; i < xs.length; i++) {
    const d = predFn(xs[i]) - ys[i];
    s += d * d;
  }
  return s;
}

/** Evaluate an ascending-coefficient polynomial at x (Horner). */
export function evalPoly(coeffs, x) {
  let v = 0;
  for (let k = coeffs.length - 1; k >= 0; k--) v = v * x + coeffs[k];
  return v;
}
