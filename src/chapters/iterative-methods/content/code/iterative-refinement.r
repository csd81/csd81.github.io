# Improve the solution of A x = b by refining on the residual r = b - A x.
iterative_refinement <- function(A, b, tol = 1e-12, max_iter = 20) {
  A <- as.matrix(A)
  b <- as.numeric(b)
  x <- solve(A, b)
  for (k in 1:max_iter) {
    r <- b - A %*% x                # residual
    d <- solve(A, r)                # correction
    x <- x + d
    if (max(abs(d)) < tol) {
      return(list(x = as.numeric(x), iterations = k))
    }
  }
  list(x = as.numeric(x), iterations = max_iter)
}

if (sys.nframe() == 0) {
  A <- rbind(c(2, 1, -1), c(-3, -1, 2), c(-2, 1, 2))
  b <- c(8, -11, -3)
  res <- iterative_refinement(A, b)
  cat("x =", res$x, " iterations =", res$iterations, "\n")   # [2, 3, -1]
}
