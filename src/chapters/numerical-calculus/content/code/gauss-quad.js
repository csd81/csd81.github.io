// 2- or 3-point Gauss-Legendre quadrature on [a, b].
function gaussQuad(f, a, b, n = 2) {
  const [t, w] =
    n === 3
      ? [[-Math.sqrt(3 / 5), 0, Math.sqrt(3 / 5)], [5 / 9, 8 / 9, 5 / 9]]
      : [[-1 / Math.sqrt(3), 1 / Math.sqrt(3)], [1, 1]];
  const hm = (b - a) / 2; // map [-1,1] -> [a,b]
  const mid = (a + b) / 2;
  return hm * t.reduce((s, ti, i) => s + w[i] * f(mid + hm * ti), 0);
}

console.log("int_0^1 e^x dx ~", gaussQuad(Math.exp, 0, 1, 2), "(2-pt)");
console.log("int_0^1 e^x dx ~", gaussQuad(Math.exp, 0, 1, 3), "(3-pt)");
// -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
