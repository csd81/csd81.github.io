# Steepest descent with backtracking (Armijo) line search.
steepest_descent <- function(f, grad, x0, tol = 1e-8, max_iter = 1000) {
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    g <- as.numeric(grad(x))
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- -g
    t <- 1.0
    while (f(x + t * d) > f(x) + 1e-4 * t * sum(g * d)) {   # Armijo condition
      t <- t * 0.5
    }
    x <- x + t * d
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- steepest_descent(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\n")   # -> (1, 2)
}
