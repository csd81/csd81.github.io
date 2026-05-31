gauss_partial_pivot <- function(A, b) {
  # Solve A x = b by Gaussian elimination with partial (row) pivoting.
  A <- matrix(as.numeric(A), nrow = nrow(A))
  b <- as.numeric(b)
  n <- length(b)
  for (k in 1:n) {
    p <- k - 1 + which.max(abs(A[k:n, k]))   # largest |pivot| in column k
    if (p != k) {
      A[c(k, p), ] <- A[c(p, k), ]
      b[c(k, p)] <- b[c(p, k)]
    }
    if (k < n) {
      for (i in (k + 1):n) {
        f <- A[i, k] / A[k, k]
        A[i, k:n] <- A[i, k:n] - f * A[k, k:n]
        b[i] <- b[i] - f * b[k]
      }
    }
  }
  x <- numeric(n)                            # back substitution
  for (i in n:1) {
    s <- b[i]
    if (i < n) s <- s - sum(A[i, (i + 1):n] * x[(i + 1):n])
    x[i] <- s / A[i, i]
  }
  x
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
cat("x =", gauss_partial_pivot(A, b), "\n")   # [2, 3, -1]
