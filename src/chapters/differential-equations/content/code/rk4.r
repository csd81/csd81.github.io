# Classical fourth-order Runge-Kutta for y' = f(t, y).
rk4 <- function(f, t0, y0, h, n) {
  t <- t0
  y <- y0
  for (i in 1:n) {
    k1 <- f(t, y)
    k2 <- f(t + h / 2, y + h / 2 * k1)
    k3 <- f(t + h / 2, y + h / 2 * k2)
    k4 <- f(t + h, y + h * k3)
    y <- y + h * (k1 + 2 * k2 + 2 * k3 + k4) / 6
    t <- t + h
  }
  list(t = t, y = y)
}

f <- function(t, y) 2 * y - 10 * t^2 + 2 * t
cat("y(1) =", rk4(f, 0.0, 1.0, 0.1, 10)$y, "\n")
