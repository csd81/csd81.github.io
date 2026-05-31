// Nelder-Mead downhill simplex minimization.
function nelderMead(f, x0, step = 0.5, tol = 1e-10, maxIter = 400) {
  const n = x0.length;
  let pts = [[...x0]];
  for (let i = 0; i < n; i++) {
    const p = [...x0]; p[i] += step; pts.push(p);
  }
  let fv = pts.map((p) => f(p));
  for (let it = 0; it < maxIter; it++) {
    const ord = [...Array(n + 1).keys()].sort((a, b) => fv[a] - fv[b]);
    pts = ord.map((i) => pts[i]);
    fv = ord.map((i) => fv[i]);
    if (Math.abs(fv[n] - fv[0]) < tol) break;
    const c = Array(n).fill(0);                         // centroid of best n points
    for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) c[j] += pts[i][j] / n;
    const xr = c.map((cj, j) => cj + (cj - pts[n][j]));  // reflect
    const fr = f(xr);
    if (fr < fv[0]) {
      const xe = c.map((cj, j) => cj + 2 * (cj - pts[n][j]));  // expand
      const fe = f(xe);
      if (fe < fr) { pts[n] = xe; fv[n] = fe; } else { pts[n] = xr; fv[n] = fr; }
    } else if (fr < fv[n - 1]) {
      pts[n] = xr; fv[n] = fr;
    } else {
      const xc = c.map((cj, j) => cj + 0.5 * (pts[n][j] - cj));  // contract
      const fc = f(xc);
      if (fc < fv[n]) { pts[n] = xc; fv[n] = fc; }
      else {                                            // shrink toward best
        for (let i = 1; i <= n; i++) {
          pts[i] = pts[i].map((pij, j) => pts[0][j] + 0.5 * (pij - pts[0][j]));
          fv[i] = f(pts[i]);
        }
      }
    }
  }
  return pts[0];
}

const f = (v) => (v[0] - 1) ** 2 + (v[1] - 2) ** 2;
console.log(nelderMead(f, [0, 0]));                     // -> [1, 2]
