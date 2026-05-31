secant <- function(f, x0, x1, tol = 1e-12, max_iter = 100) {
  # Secant method (derivative-free, uses two previous iterates).
  f0 <- f(x0)
  f1 <- f(x1)
  for (k in 1:max_iter) {
    x2 <- x1 - f1 * (x1 - x0) / (f1 - f0)
    if (abs(x2 - x1) < tol) return(list(root = x2, iters = k))
    x0 <- x1; f0 <- f1
    x1 <- x2; f1 <- f(x2)
  }
  list(root = x1, iters = max_iter)
}

res <- secant(function(x) x * x - 2, 1.0, 2.0)   # sqrt(2)
cat(sprintf("(%.16g, %d)\n", res$root, res$iters))
