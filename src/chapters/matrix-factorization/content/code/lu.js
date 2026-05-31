// Doolittle factorization A = L U (L unit-lower, U upper).
function luDoolittle(A) {
  const n = A.length;
  const L = Array.from({ length: n }, (_, i) =>
    Array.from({ length: n }, (_, j) => (i === j ? 1 : 0)));
  const U = Array.from({ length: n }, () => new Array(n).fill(0));
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      let s = A[i][j];
      for (let k = 0; k < i; k++) s -= L[i][k] * U[k][j];
      U[i][j] = s;
    }
    for (let j = i + 1; j < n; j++) {
      let s = A[j][i];
      for (let k = 0; k < i; k++) s -= L[j][k] * U[k][i];
      L[j][i] = s / U[i][i];
    }
  }
  return [L, U];
}

const A = [[1, -2, -2, -2], [2, -1, 2, 4], [-1, 2, 3, -4], [-2, 1, 4, -2]];
const [L, U] = luDoolittle(A);
console.log(L);
console.log(U);
