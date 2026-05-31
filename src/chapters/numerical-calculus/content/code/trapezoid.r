# Composite trapezoidal rule for the integral of f on [a, b].
trapezoid <- function(f, a, b, n = 100) {
  x <- seq(a, b, length.out = n + 1)
  y <- f(x)
  h <- (b - a) / n
  h * (y[1] / 2 + sum(y[2:n]) + y[n + 1] / 2)
}

cat("int_0^1 e^x dx ~", trapezoid(exp, 0, 1, 100), " exact =", exp(1) - 1, "\n")
