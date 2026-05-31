# Least-squares line y = a + b x via the 2x2 normal equations.
line_fit <- function(x, y) {
  n <- length(x)
  Sx <- sum(x); Sy <- sum(y)
  Sxx <- sum(x^2); Sxy <- sum(x * y)
  b <- (n * Sxy - Sx * Sy) / (n * Sxx - Sx^2)   # slope
  a <- (Sy - b * Sx) / n                          # intercept
  c(a = a, b = b)
}

x <- c(0, 1, 2, 3, 4)
y <- c(1, 3, 2, 5, 4)
fit <- line_fit(x, y)
cat("slope b =", fit["b"], ", intercept a =", fit["a"], "\n")
# -> slope b = 0.8, intercept a = 1.4
