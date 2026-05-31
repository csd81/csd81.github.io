gauss_complete_pivot <- function(A, b) {
  # Gaussian elimination with complete (row+column) pivoting.
  # Returns x (column swaps are undone before returning).
  A <- matrix(as.numeric(A), nrow = nrow(A))
  b <- as.numeric(b)
  n <- length(b)
  col <- 1:n                                 # tracks column permutation
  for (k in 1:n) {
    sub <- abs(A[k:n, k:n, drop = FALSE])
    idx <- which.max(sub)                    # column-major linear index
    i <- ((idx - 1) %% nrow(sub)) + k
    j <- ((idx - 1) %/% nrow(sub)) + k
    A[c(k, i), ] <- A[c(i, k), ]; b[c(k, i)] <- b[c(i, k)]
    A[, c(k, j)] <- A[, c(j, k)]; col[c(k, j)] <- col[c(j, k)]
    if (k < n) {
      for (r in (k + 1):n) {
        f <- A[r, k] / A[k, k]
        A[r, k:n] <- A[r, k:n] - f * A[k, k:n]
        b[r] <- b[r] - f * b[k]
      }
    }
  }
  y <- numeric(n)
  for (i in n:1) {
    s <- b[i]
    if (i < n) s <- s - sum(A[i, (i + 1):n] * y[(i + 1):n])
    y[i] <- s / A[i, i]
  }
  x <- numeric(n)
  x[col] <- y                                # undo column permutation
  x
}

A <- matrix(c( 2,  1, -1,
              -3, -1,  2,
              -2,  1,  2), nrow = 3, byrow = TRUE)
b <- c(8, -11, -3)
cat("x =", gauss_complete_pivot(A, b), "\n")
