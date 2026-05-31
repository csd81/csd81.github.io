# Doolittle factorization A = L U (L unit-lower, U upper).
lu_doolittle <- function(A) {
  n <- nrow(A)
  L <- diag(n)
  U <- matrix(0, n, n)
  for (i in 1:n) {
    for (j in i:n) {
      s <- if (i > 1) sum(L[i, 1:(i - 1)] * U[1:(i - 1), j]) else 0
      U[i, j] <- A[i, j] - s
    }
    if (i < n) {
      for (j in (i + 1):n) {
        s <- if (i > 1) sum(L[j, 1:(i - 1)] * U[1:(i - 1), i]) else 0
        L[j, i] <- (A[j, i] - s) / U[i, i]
      }
    }
  }
  list(L = L, U = U)
}

A <- matrix(c(1, -2, -2, -2,
              2, -1,  2,  4,
              -1, 2,  3, -4,
              -2, 1,  4, -2), nrow = 4, byrow = TRUE)
res <- lu_doolittle(A)
for (i in 1:nrow(res$L)) print(res$L[i, ])
for (i in 1:nrow(res$U)) print(res$U[i, ])
