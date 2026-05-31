# Third-order Taylor method (uses the first two total derivatives of f).
taylor3 <- function(f, df, d2f, t0, y0, h, n) {
  t <- t0
  y <- y0
  for (i in 1:n) {
    y <- y + h * f(t, y) + h^2 / 2 * df(t, y) + h^3 / 6 * d2f(t, y)
    t <- t + h
  }
  list(t = t, y = y)
}

f <- function(t, y) 2 * y - 10 * t^2 + 2 * t
df <- function(t, y) 4 * y - 20 * t^2 - 16 * t + 2
d2f <- function(t, y) 8 * y - 40 * t^2 - 32 * t - 16
cat("y(1) =", taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10)$y, "\n")
