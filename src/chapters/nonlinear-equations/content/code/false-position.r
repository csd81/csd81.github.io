false_position <- function(f, a, b, tol = 1e-12, max_iter = 200) {
  # Regula falsi: like bisection but uses the secant intercept.
  fa <- f(a)
  fb <- f(b)
  c <- a
  for (k in 1:max_iter) {
    c <- (a * fb - b * fa) / (fb - fa)
    fc <- f(c)
    if (abs(fc) < tol) return(list(root = c, iters = k))
    if (fa * fc < 0) {
      b <- c; fb <- fc
    } else {
      a <- c; fa <- fc
    }
  }
  list(root = c, iters = max_iter)
}

res <- false_position(function(x) x * x - 2, 1.0, 2.0)   # sqrt(2)
cat(sprintf("(%.16g, %d)\n", res$root, res$iters))
