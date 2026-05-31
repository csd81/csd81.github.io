# Composite Simpson's rule (n forced even) on [a, b].
simpson <- function(f, a, b, n = 100) {
  if (n %% 2 == 1) n <- n + 1
  x <- seq(a, b, length.out = n + 1)
  y <- f(x)
  h <- (b - a) / n
  odd <- seq(2, n, by = 2)      # interior odd-position points (1-indexed)
  even <- seq(3, n - 1, by = 2)
  h / 3 * (y[1] + y[n + 1] + 4 * sum(y[odd]) + 2 * sum(y[even]))
}

cat("int_0^1 e^x dx ~", simpson(exp, 0, 1, 100), " exact =", exp(1) - 1, "\n")
