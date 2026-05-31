# Modified Euler (midpoint RK2, predictor-corrector).
modified_euler <- function(f, t0, y0, h, n) {
  t <- t0
  y <- y0
  for (i in 1:n) {
    k1 <- f(t, y)
    k2 <- f(t + h / 2, y + h / 2 * k1)   # slope at the midpoint
    y <- y + h * k2
    t <- t + h
  }
  list(t = t, y = y)
}

f <- function(t, y) 2 * y - 10 * t^2 + 2 * t
cat("y(1) =", modified_euler(f, 0.0, 1.0, 0.1, 10)$y, "\n")
