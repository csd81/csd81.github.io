// Central-difference first derivative, error O(h^2).
function deriv1(f, x, h = 0.01) {
  return (f(x + h) - f(x - h)) / (2 * h);
}

// Central-difference second derivative, error O(h^2).
function deriv2(f, x, h = 0.01) {
  return (f(x + h) - 2 * f(x) + f(x - h)) / (h * h);
}

console.log("f'(1)  ~", deriv1(Math.sin, 1, 0.01), " exact cos(1)  =", Math.cos(1));
console.log("f''(1) ~", deriv2(Math.sin, 1, 0.01), " exact -sin(1) =", -Math.sin(1));
