const nrm = (v) => Math.sqrt(v.reduce((s, x) => s + x * x, 0));
const dot = (a, b) => a.reduce((s, x, i) => s + x * b[i], 0);
const matvec = (M, v) => M.map((row) => dot(row, v));

// DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
function dfp(f, grad, x0, tol = 1e-8, maxIter = 200) {
  const n = x0.length;
  const eye = () => Array.from({ length: n }, (_, i) => Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  let x = [...x0];
  let H = eye();                                       // inverse-Hessian estimate
  let g = grad(x);
  for (let k = 0; k < maxIter; k++) {
    if (nrm(g) < tol) break;
    let d = matvec(H, g).map((v) => -v);              // d = -H g
    if (dot(g, d) >= 0) { H = eye(); d = g.map((v) => -v); }   // safeguard: descent direction
    const fx = f(x), gd = dot(g, d);
    const step = (t) => x.map((xi, i) => xi + t * d[i]);
    let t = 1;
    while (f(step(t)) > fx + 1e-4 * t * gd) t /= 2;
    const s = d.map((di) => t * di);
    const xNew = step(t);
    const gNew = grad(xNew);
    const y = gNew.map((gi, i) => gi - g[i]);
    const sy = dot(s, y);
    if (sy > 1e-12) {                                  // DFP inverse update
      const Hy = matvec(H, y), yHy = dot(y, Hy);
      H = H.map((row, i) => row.map((hij, j) => hij + (s[i] * s[j]) / sy - (Hy[i] * Hy[j]) / yHy));
    }
    x = xNew; g = gNew;
  }
  return x;
}

const f = (v) => (v[0] - 1) ** 2 + 5 * (v[1] - 2) ** 2;
const g = (v) => [2 * (v[0] - 1), 10 * (v[1] - 2)];
console.log(dfp(f, g, [0, 0]));                        // -> [1, 2]
