// Vector fixed-point iteration x_{k+1} = G(x_k).
function fixedPointND(G, x0, tol = 1e-12, maxIter = 200) {
  let x = [...x0];
  for (let k = 0; k < maxIter; k++) {
    const xn = G(x);
    if (Math.max(...xn.map((v, i) => Math.abs(v - x[i]))) < tol) return xn;
    x = xn;
  }
  return x;
}
console.log(fixedPointND((v) => [Math.cos(v[1]), Math.sin(v[0])], [0, 0]));
