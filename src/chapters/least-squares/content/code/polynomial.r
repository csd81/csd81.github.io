# Least-squares polynomial fit; returns coefficients (low -> high).
poly_fit <- function(t, y, degree = 2) {
  A <- outer(t, 0:degree, `^`)        # columns 1, t, t^2, ...
  as.vector(qr.solve(A, y))           # minimizes ||A c - y||
}

t <- c(0, 1, 2, 3, 4)
y <- c(1.0, 1.8, 3.3, 4.5, 6.3)
cat("coeffs (low->high):", poly_fit(t, y, 2), "\n")
