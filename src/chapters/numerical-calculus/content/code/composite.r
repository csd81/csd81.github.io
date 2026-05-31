# Composite trapezoidal and Simpson rules on [a, b] with n subintervals.
composite <- function(f, a, b, n = 10) {
  if (n %% 2 == 1) n <- n + 1            # Simpson needs even n
  h <- (b - a) / n
  x <- seq(a, b, length.out = n + 1)
  y <- f(x)
  odd <- seq(2, n, by = 2)               # interior odd-position points (1-indexed)
  even <- seq(3, n - 1, by = 2)
  T <- h * (y[1] / 2 + sum(y[2:n]) + y[n + 1] / 2)
  S <- h / 3 * (y[1] + y[n + 1] + 4 * sum(y[odd]) + 2 * sum(y[even]))
  c(trapezoid = T, simpson = S)
}

r <- composite(exp, 0, 1, 10)
cat("trapezoid ~", r["trapezoid"], "\n")
cat("Simpson   ~", r["simpson"], "\n")
# -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
