// Thomas algorithm for a tridiagonal system (a sub-, b diag, c super-, d rhs).
function thomas(a, b, c, d) {
  const n = d.length;
  const cc = [...c], dd = [...d];
  cc[0] /= b[0]; dd[0] /= b[0];
  for (let i = 1; i < n; i++) {
    const m = b[i] - a[i] * cc[i - 1];
    if (i < n - 1) cc[i] /= m;
    dd[i] = (dd[i] - a[i] * dd[i - 1]) / m;
  }
  const x = new Array(n).fill(0);
  x[n - 1] = dd[n - 1];
  for (let i = n - 2; i >= 0; i--) x[i] = dd[i] - cc[i] * x[i + 1];
  return x;
}
console.log(thomas([0, -1, -1, -1], [4, 4, 4, 4], [-1, -1, -1, 0], [2, 4, 6, 13]));
