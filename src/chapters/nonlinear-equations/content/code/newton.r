newton <- function(f, df, x0, tol = 1e-12, max_iter = 100) {
  # Newton's method using the derivative df.
  x <- x0
  for (k in 1:max_iter) {
    fx <- f(x)
    if (abs(fx) < tol) return(list(root = x, iters = k))
    x <- x - fx / df(x)
  }
  list(root = x, iters = max_iter)
}

res <- newton(function(x) x * x - 2, function(x) 2 * x, 1.0)   # sqrt(2)
cat(sprintf("(%.16g, %d)\n", res$root, res$iters))
