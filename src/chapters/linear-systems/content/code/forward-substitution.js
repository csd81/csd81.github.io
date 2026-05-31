function forwardSubstitution(L, b) {
  const n = b.length;
  const y = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    let s = b[i];
    for (let j = 0; j < i; j++) s -= L[i][j] * y[j];
    y[i] = s / L[i][i];
  }
  return y;
}

const L = [[2, 0, 0], [1, 3, 0], [-1, 1, 2]];
const b = [4, 5, -1];
console.log(forwardSubstitution(L, b)); // [2, 1, 0]
