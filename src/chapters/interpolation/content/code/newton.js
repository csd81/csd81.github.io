// Newton divided-difference coefficients a_i = f[x_0, ..., x_i].
function dividedDifferences(x, y) {
  const n = x.length;
  const a = [...y];
  for (let j = 1; j < n; j++)
    for (let i = n - 1; i >= j; i--) a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j]);
  return a;
}
console.log(dividedDifferences([-1, 1, 2, 3], [-3, 1, 3, 29])); // [-3, 2, 0, 3]
