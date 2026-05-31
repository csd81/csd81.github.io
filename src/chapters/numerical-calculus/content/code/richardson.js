// Central-difference first derivative D(h), error O(h^2).
function central(f, x, h) {
  return (f(x + h) - f(x - h)) / (2 * h);
}

// Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
function richardson(f, x, h) {
  const d1 = central(f, x, h);
  const d2 = central(f, x, h / 2);
  return [d1, d2, (4 * d2 - d1) / 3];
}

const [d1, d2, ext] = richardson(Math.sin, 1, 0.1);
console.log("D(h)         =", d1);
console.log("D(h/2)       =", d2);
console.log("extrapolated =", ext, " exact cos(1) =", Math.cos(1));
