// Evaluate the Newton form by nested (Horner-like) multiplication.
function newtonEval(x, a, t) {
  let p = a[a.length - 1];
  for (let k = a.length - 2; k >= 0; k--) p = p * (t - x[k]) + a[k];
  return p;
}
console.log(newtonEval([-1, 1, 2, 3], [-3, 2, 0, 3], 0)); // 5
