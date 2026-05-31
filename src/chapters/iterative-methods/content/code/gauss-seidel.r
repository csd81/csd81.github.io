# Solve A x = b by Gauss-Seidel iteration. Returns list(x, iterations).
gauss_seidel <- function(A, b, x0 = NULL, tol = 1e-10, max_iter = 200) {
  A <- as.matrix(A)
  b <- as.numeric(b)
  n <- length(b)
  x <- if (is.null(x0)) rep(0, n) else as.numeric(x0)
  for (k in 1:max_iter) {
    x_old <- x
    for (i in 1:n) {
      s <- b[i]
      if (i > 1) s <- s - sum(A[i, 1:(i - 1)] * x[1:(i - 1)])
      if (i < n) s <- s - sum(A[i, (i + 1):n] * x[(i + 1):n])
      x[i] <- s / A[i, i]
    }
    if (max(abs(x - x_old)) <= tol) {
      return(list(x = x, iterations = k))
    }
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  A <- rbind(c(4, 2, -1), c(5, -10, 2), c(-2, 3, -7))
  b <- c(9, 8, 3)
  res <- gauss_seidel(A, b)
  cat("x =", res$x, " iterations =", res$iterations, "\n")
}
