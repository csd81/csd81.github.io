// Least-squares line y = a + b x via the 2x2 normal equations.
function lineFit(x, y) {
  const n = x.length;
  const Sx = x.reduce((s, xi) => s + xi, 0);
  const Sy = y.reduce((s, yi) => s + yi, 0);
  const Sxx = x.reduce((s, xi) => s + xi * xi, 0);
  const Sxy = x.reduce((s, xi, i) => s + xi * y[i], 0);
  const b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx); // slope
  const a = (Sy - b * Sx) / n; // intercept
  return { a, b };
}

const x = [0, 1, 2, 3, 4];
const y = [1, 3, 2, 5, 4];
const { a, b } = lineFit(x, y);
console.log("slope b =", b, ", intercept a =", a);
// -> slope b = 0.8, intercept a = 1.4
