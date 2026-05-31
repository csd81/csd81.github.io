fixed_point <- function(g, x0, tol = 1e-12, max_iter = 200) {
  # Fixed-point iteration x_{k+1} = g(x_k).
  x <- x0
  for (k in 1:max_iter) {
    xn <- g(x)
    if (abs(xn - x) < tol) return(list(root = xn, iters = k))
    x <- xn
  }
  list(root = x, iters = max_iter)
}

res <- fixed_point(cos, 1.0)        # Dottie number ~0.739085
cat(sprintf("(%.16g, %d)\n", res$root, res$iters))
