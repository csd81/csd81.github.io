# Polynomial coefficients a (low->high) of the degree n-1 interpolant
# through (x_i, y_i), via the Vandermonde system V a = y.
lagrange_coeffs <- function(x, y) {
  n <- length(x)
  V <- outer(x, 0:(n - 1), `^`)   # V[i, j] = x_i^j
  as.vector(solve(V, y))
}

x <- c(-1, 1, 2, 3)
y <- c(-3, 1, 3, 29)
cat("coefficients (low->high):", lagrange_coeffs(x, y), "\n")
