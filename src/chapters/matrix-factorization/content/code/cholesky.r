# Cholesky factorization A = L L^T of a symmetric positive-definite A.
cholesky <- function(A) {
  n <- nrow(A)
  L <- matrix(0, n, n)
  for (j in 1:n) {
    s <- if (j > 1) sum(L[j, 1:(j - 1)]^2) else 0
    L[j, j] <- sqrt(A[j, j] - s)
    if (j < n) {
      for (i in (j + 1):n) {
        s <- if (j > 1) sum(L[i, 1:(j - 1)] * L[j, 1:(j - 1)]) else 0
        L[i, j] <- (A[i, j] - s) / L[j, j]
      }
    }
  }
  L
}

A <- matrix(c(4, 2, -2, 2, 10, 2, -2, 2, 5), nrow = 3, byrow = TRUE)
L <- cholesky(A)
for (i in 1:nrow(L)) {
  print(round(L[i, ], 4))
}
