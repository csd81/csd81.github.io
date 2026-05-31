gauss_jordan <- function(A, b) {
  # Solve A x = b by Gauss-Jordan elimination (reduced row echelon form).
  A <- matrix(as.numeric(A), nrow = nrow(A))
  n <- length(b)
  M <- cbind(A, as.numeric(b))
  for (k in 1:n) {
    p <- k - 1 + which.max(abs(M[k:n, k]))   # partial pivot
    if (p != k) M[c(k, p), ] <- M[c(p, k), ]
    M[k, ] <- M[k, ] / M[k, k]               # normalize pivot row
    for (i in 1:n) {
      if (i != k) M[i, ] <- M[i, ] - M[i, k] * M[k, ]   # eliminate
    }
  }
  M[, n + 1]
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
cat("x =", gauss_jordan(A, b), "\n")
