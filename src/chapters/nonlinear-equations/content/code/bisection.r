bisection <- function(f, a, b, tol = 1e-12, max_iter = 200) {
  # Bisection root of f on [a, b] (requires f(a)*f(b) < 0).
  fa <- f(a)
  for (k in 1:max_iter) {
    c <- (a + b) / 2
    fc <- f(c)
    if (fc == 0 || (b - a) / 2 < tol) return(list(root = c, iters = k))
    if (fa * fc < 0) {
      b <- c
    } else {
      a <- c
      fa <- fc
    }
  }
  list(root = (a + b) / 2, iters = max_iter)
}

f <- function(x) x * x - 2
res <- bisection(f, 1, 2)            # -> sqrt(2)
cat(sprintf("(%.16g, %d)\n", res$root, res$iters))
