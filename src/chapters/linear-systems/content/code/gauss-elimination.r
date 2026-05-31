gauss_elimination <- function(A, b) {
  # Naive Gaussian elimination (no pivoting) + back-substitution.
  n <- length(b)
  M <- cbind(A, b)                       # augmented [A | b]
  for (k in 1:n) {
    if (k < n) {
      for (i in (k + 1):n) {
        f <- M[i, k] / M[k, k]
        M[i, k:(n + 1)] <- M[i, k:(n + 1)] - f * M[k, k:(n + 1)]
      }
    }
  }
  x <- numeric(n)
  for (i in n:1) {
    s <- M[i, n + 1]
    if (i < n) s <- s - sum(M[i, (i + 1):n] * x[(i + 1):n])
    x[i] <- s / M[i, i]
  }
  x
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
print(gauss_elimination(A, b))    # [2, 3, -1]
