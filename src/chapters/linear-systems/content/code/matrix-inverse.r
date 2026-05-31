inverse <- function(A) {
  # Matrix inverse via Gauss-Jordan on the augmented system [A | I].
  A <- matrix(as.numeric(A), nrow = nrow(A))
  n <- nrow(A)
  M <- cbind(A, diag(n))
  for (k in 1:n) {
    p <- k - 1 + which.max(abs(M[k:n, k]))
    if (p != k) M[c(k, p), ] <- M[c(p, k), ]
    M[k, ] <- M[k, ] / M[k, k]
    for (i in 1:n) {
      if (i != k) M[i, ] <- M[i, ] - M[i, k] * M[k, ]
    }
  }
  M[, (n + 1):(2 * n)]                        # right half is A^{-1}
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
Ainv <- inverse(A)
cat("A^-1 =\n")
print(Ainv)
cat("check A %*% A^-1 =\n")
print(round(A %*% Ainv, 10))
