fixed_point_nd <- function(G, x0, tol = 1e-12, max_iter = 200) {
  # Vector fixed-point iteration x_{k+1} = G(x_k).
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    xn <- as.numeric(G(x))
    if (max(abs(xn - x)) < tol) return(list(root = xn, iters = k))
    x <- xn
  }
  list(root = x, iters = max_iter)
}

# x = (cos y, sin x) has a fixed point near (0.768, 0.695)
G <- function(v) c(cos(v[2]), sin(v[1]))
res <- fixed_point_nd(G, c(0.0, 0.0))
cat(sprintf("(array([%.8f, %.8f]), %d)\n", res$root[1], res$root[2], res$iters))
