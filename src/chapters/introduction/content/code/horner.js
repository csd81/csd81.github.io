function horner(a, x) {
  let y = a[0];
  for (let i = 1; i < a.length; i++) {
    y = y * x + a[i];
  }
  return y;
}

// p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
console.log(horner([5, -8, 2, 4, -10], 2));   // 22
