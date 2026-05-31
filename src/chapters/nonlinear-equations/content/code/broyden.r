broyden <- function(F, x0, tol = 1e-12, max_iter = 100) {
  # Broyden's (good) method for F(x) = 0; approximates the Jacobian.
  x <- as.numeric(x0)
  n <- length(x)
  B <- diag(n)                          # initial Jacobian approximation
  Fx <- as.numeric(F(x))
  for (k in 1:max_iter) {
    if (max(abs(Fx)) < tol) return(list(root = x, iters = k))
    dx <- as.numeric(solve(B, -Fx))
    x <- x + dx
    Fx_new <- as.numeric(F(x))
    dF <- Fx_new - Fx
    B <- B + outer(dF - as.numeric(B %*% dx), dx) / sum(dx * dx)   # rank-1 update
    Fx <- Fx_new
  }
  list(root = x, iters = max_iter)
}

F <- function(v) c(v[1]^2 + v[2]^2 - 4, v[1] * v[2] - 1)
res <- broyden(F, c(2.0, 0.5))
cat(sprintf("(array([%.8f, %.8f]), %d)\n", res$root[1], res$root[2], res$iters))
