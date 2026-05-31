const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
// Steepest descent with backtracking (Armijo) line search.
function steepestDescent(f, grad, x0, tol = 1e-8, maxIter = 1000) {
  const n = x0.length;
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const g = grad(x);
    if (nrm(g) < tol) break;
    const d = g.map((v) => -v);
    const fx = f(x), gd = g.reduce((s, v, i) => s + v * d[i], 0);
    let t = 1;
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    x = step(t);
  }
  return x;
}
const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(steepestDescent(f, g, [0, 0]));
