newton_system <- function(F, J, x0, tol = 1e-12, max_iter = 100) {
  # Newton's method for F(x) = 0 with Jacobian J(x).
  x <- as.numeric(x0)
  for (k in 1:max_iter) {
    Fx <- as.numeric(F(x))
    if (max(abs(Fx)) < tol) return(list(root = x, iters = k))
    x <- x - solve(J(x), Fx)
  }
  list(root = x, iters = max_iter)
}

F <- function(v) c(v[1]^2 + v[2]^2 - 4, v[1] * v[2] - 1)
J <- function(v) matrix(c(2 * v[1], v[2], 2 * v[2], v[1]), nrow = 2)
res <- newton_system(F, J, c(2.0, 0.5))
cat(sprintf("(array([%.8f, %.8f]), %d)\n", res$root[1], res$root[2], res$iters))
