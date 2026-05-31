# Hermite interpolation via divided differences with doubled nodes.
# Returns list(z, coeffs): coeffs are the Newton coefficients on nodes z.
hermite_coeffs <- function(x, y, dy) {
  n <- length(x)
  m <- 2 * n
  z <- numeric(m)
  Q <- matrix(0, m, m)
  for (i in 1:n) {
    z[2 * i - 1] <- x[i]
    z[2 * i]     <- x[i]
    Q[2 * i - 1, 1] <- y[i]
    Q[2 * i, 1]     <- y[i]
    Q[2 * i, 2]     <- dy[i]              # f'[x_i] at the repeated node
    if (i > 1) {
      Q[2 * i - 1, 2] <- (Q[2 * i - 1, 1] - Q[2 * i - 2, 1]) /
        (z[2 * i - 1] - z[2 * i - 2])
    }
  }
  for (j in 3:m) {
    for (i in j:m) {
      Q[i, j] <- (Q[i, j - 1] - Q[i - 1, j - 1]) / (z[i] - z[i - j + 1])
    }
  }
  list(z = z, coeffs = diag(Q))
}

hermite_eval <- function(z, a, t) {
  p <- a[length(a)]
  for (k in (length(a) - 1):1) {
    p <- p * (t - z[k]) + a[k]
  }
  p
}

x <- c(0, 1)
y <- c(1, 0)
dy <- c(0, 0)                 # p(0)=1,p'(0)=0,p(1)=0,p'(1)=0 -> 2x^3-3x^2+1
res <- hermite_coeffs(x, y, dy)
cat("coeffs:", res$coeffs, "\n")
cat("p(0.5) =", hermite_eval(res$z, res$coeffs, 0.5), "\n")
