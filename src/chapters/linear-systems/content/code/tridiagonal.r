thomas <- function(a, b, c, d) {
  # Thomas algorithm for a tridiagonal system.
  # a: sub-diagonal (a[1] unused), b: diagonal, c: super-diagonal, d: rhs.
  n <- length(d)
  c2 <- c
  d2 <- d
  c2[1] <- c2[1] / b[1]
  d2[1] <- d2[1] / b[1]
  for (i in 2:n) {
    m <- b[i] - a[i] * c2[i - 1]
    c2[i] <- if (i < n) c[i] / m else 0.0
    d2[i] <- (d[i] - a[i] * d2[i - 1]) / m
  }
  x <- numeric(n)
  x[n] <- d2[n]
  for (i in (n - 1):1) {
    x[i] <- d2[i] - c2[i] * x[i + 1]
  }
  x
}

# diagonal 4, off-diagonals -1; solution [1, 2, 3, 4]
a <- c(0, -1, -1, -1)
b <- c(4, 4, 4, 4)
c <- c(-1, -1, -1, 0)
d <- c(2, 4, 6, 13)
print(thomas(a, b, c, d))
