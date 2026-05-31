# Newton's method for unconstrained minimization (solves H p = grad).
newton_min <- function(grad, hess, x0, tol = 1e-10, max_iter = 100) {
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    g <- as.numeric(grad(x))
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    H <- as.matrix(hess(x))
    x <- x - solve(H, g)
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  grad <- function(v) c(2 * (v[1] - 1), 2 * (v[2] - 2))
  hess <- function(v) rbind(c(2, 0), c(0, 2))
  res <- newton_min(grad, hess, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\n")   # -> (1, 2)
}
