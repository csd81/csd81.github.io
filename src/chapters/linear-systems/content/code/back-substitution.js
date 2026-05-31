function backSubstitution(U, b) {
  const n = b.length;
  const x = new Array(n).fill(0);
  for (let i = n - 1; i >= 0; i--) {
    let s = b[i];
    for (let j = i + 1; j < n; j++) s -= U[i][j] * x[j];
    x[i] = s / U[i][i];
  }
  return x;
}

const U = [[2, 1, -1], [0, 1, 2], [0, 0, 3]];
const b = [1, 8, 9];
console.log(backSubstitution(U, b)); // [1, 2, 3]
