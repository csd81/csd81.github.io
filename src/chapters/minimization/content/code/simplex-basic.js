const dist = (a, b) => Math.sqrt(a.reduce((s, x, i) => s + (x - b[i]) ** 2, 0));

// Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
function simplexBasic(f, x0, step = 1, tol = 1e-8, maxIter = 500) {
  const n = x0.length;
  const P = [x0.slice(), ...Array.from({ length: n }, (_, i) => { const v = x0.slice(); v[i] += step; return v; })];
  const fv = P.map(f);
  for (let it = 0; it < maxIter; it++) {
    let iw = 0, ib = 0;
    for (let i = 1; i <= n; i++) { if (fv[i] > fv[iw]) iw = i; if (fv[i] < fv[ib]) ib = i; }
    let sz = 0;
    for (let i = 0; i <= n; i++) sz = Math.max(sz, dist(P[i], P[ib]));
    if (sz < tol) break;
    const c = Array(n).fill(0);                                  // centroid of all but the worst
    for (let i = 0; i <= n; i++) if (i !== iw) for (let j = 0; j < n; j++) c[j] += P[i][j] / n;
    const xr = c.map((cj, j) => cj + (cj - P[iw][j]));           // reflect the worst vertex
    const fr = f(xr);
    if (fr < fv[iw]) { P[iw] = xr; fv[iw] = fr; }
    else {                                                       // shrink toward the best
      const best = P[ib].slice();
      for (let i = 0; i <= n; i++) if (i !== ib) {
        P[i] = P[i].map((pij, j) => best[j] + 0.5 * (pij - best[j]));
        fv[i] = f(P[i]);
      }
    }
  }
  let ib = 0;
  for (let i = 1; i <= n; i++) if (fv[i] < fv[ib]) ib = i;
  return P[ib];
}

const f = (v) => (v[0] - 1) ** 2 + (v[1] - 2) ** 2;
console.log(simplexBasic(f, [0, 0]));                            // -> [1, 2]
