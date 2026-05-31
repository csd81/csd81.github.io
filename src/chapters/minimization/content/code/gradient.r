# Gradient descent with constant step size alpha.
gradient_descent <- function(grad, x0, alpha = 0.1, tol = 1e-8, max_iter = 100000) {
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    g <- as.numeric(grad(x))
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    x <- x - alpha * g
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  grad <- function(v) c(2 * (v[1] - 1), 2 * (v[2] - 2))
  res <- gradient_descent(grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\n")   # -> (1, 2)
}
