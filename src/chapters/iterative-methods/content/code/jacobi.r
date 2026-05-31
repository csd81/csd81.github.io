# Solve A x = b by Jacobi iteration. Returns list(x, iterations).
jacobi <- function(A, b, x0 = NULL, tol = 1e-10, max_iter = 200) {
  A <- as.matrix(A)
  b <- as.numeric(b)
  n <- length(b)
  x <- if (is.null(x0)) rep(0, n) else as.numeric(x0)
  D <- diag(A)                 # diagonal entries
  R <- A - diag(D, n, n)       # off-diagonal part
  for (k in 1:max_iter) {
    x_new <- (b - R %*% x) / D
    x_new <- as.numeric(x_new)
    if (max(abs(x_new - x)) <= tol) {
      return(list(x = x_new, iterations = k))
    }
    x <- x_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  A <- rbind(c(4, 2, -1), c(5, -10, 2), c(-2, 3, -7))
  b <- c(9, 8, 3)
  res <- jacobi(A, b)
  cat("x =", res$x, " iterations =", res$iterations, "\n")
}
