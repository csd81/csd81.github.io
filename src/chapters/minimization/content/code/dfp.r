# DFP (Davidon-Fletcher-Powell) quasi-Newton minimization (inverse-Hessian form).
dfp <- function(f, grad, x0, tol = 1e-8, max_iter = 200) {
  x <- as.numeric(x0)
  n <- length(x)
  H <- diag(n)                                    # inverse-Hessian estimate
  g <- as.numeric(grad(x))
  for (k in 1:max_iter) {
    if (sqrt(sum(g^2)) < tol) {
      return(list(x = x, iterations = k))
    }
    d <- as.numeric(-H %*% g)
    if (sum(g * d) >= 0) {                        # safeguard: descent direction
      H <- diag(n); d <- -g
    }
    t <- 1.0
    fx <- f(x); gd <- sum(g * d)
    while (f(x + t * d) > fx + 1e-4 * t * gd) {
      t <- t * 0.5
    }
    s <- t * d
    x_new <- x + s
    g_new <- as.numeric(grad(x_new))
    y <- g_new - g
    sy <- sum(s * y)
    if (sy > 1e-12) {                             # DFP inverse update
      Hy <- as.numeric(H %*% y)
      H <- H + outer(s, s) / sy - outer(Hy, Hy) / sum(y * Hy)
    }
    x <- x_new
    g <- g_new
  }
  list(x = x, iterations = max_iter)
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + 5 * (v[2] - 2)^2
  grad <- function(v) c(2 * (v[1] - 1), 10 * (v[2] - 2))
  res <- dfp(f, grad, c(0, 0))
  cat("x =", res$x, " iterations =", res$iterations, "\n")   # -> (1, 2)
}
