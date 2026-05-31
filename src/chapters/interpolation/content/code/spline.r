# Natural cubic spline. Returns per-interval (a, b, c, d) with
# S_i(t) = a_i + b_i (t - x_i) + c_i (t - x_i)^2 + d_i (t - x_i)^3.
natural_cubic_spline <- function(x, y) {
  n <- length(x)
  h <- diff(x)
  A <- matrix(0, n, n)
  rhs <- numeric(n)
  A[1, 1] <- 1.0                        # natural: c_0 = c_{n-1} = 0
  A[n, n] <- 1.0
  for (i in 2:(n - 1)) {
    A[i, i - 1] <- h[i - 1]
    A[i, i]     <- 2 * (h[i - 1] + h[i])
    A[i, i + 1] <- h[i]
    rhs[i] <- 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])
  }
  c <- solve(A, rhs)
  a <- y[-n]
  b <- (y[-1] - y[-n]) / h - h * (2 * c[-n] + c[-1]) / 3
  d <- (c[-1] - c[-n]) / (3 * h)
  list(a = a, b = b, c = c[-n], d = d)
}

x <- c(0, 1, 2, 3)
y <- c(0, 1, 0, 1)
res <- natural_cubic_spline(x, y)
cat("a =", res$a, "\n")
cat("b =", res$b, "\n")
cat("c =", res$c, "\n")
cat("d =", res$d, "\n")
