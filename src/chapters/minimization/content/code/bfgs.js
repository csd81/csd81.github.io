const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);

// BFGS quasi-Newton minimization with backtracking (Armijo) line search.
function bfgs(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  let x = [...x0];
  let H = Array.from({ length: n }, (_, i) =>          // inverse-Hessian estimate
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    const d = H.map((row) => -dot(row, g));            // d = -H g
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const sy = dot(s, y);
    if (sy > 1e-12) {                                  // H = (I - rho s y^T) H (I - rho y s^T) + rho s s^T
      const rho = 1 / sy;
      const A = H.map((_, i) => H.map((__, j) => (i === j ? 1 : 0) - rho * s[i] * y[j]));
      const B = H.map((_, i) => H.map((__, j) => (i === j ? 1 : 0) - rho * y[i] * s[j]));
      const AH = A.map((_, i) => H.map((__, j) => A[i].reduce((acc, a, l) => acc + a * H[l][j], 0)));
      H = AH.map((_, i) => B.map((__, j) => AH[i].reduce((acc, a, l) => acc + a * B[l][j], 0))
        .map((v, j) => v + rho * s[i] * s[j]));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(bfgs(f, g, [0, 0]));                       // -> [1, 2]
