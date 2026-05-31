forward_substitution <- function(L, b) {
  # Solve a lower-triangular system L y = b.
  n <- length(b)
  y <- numeric(n)
  for (i in 1:n) {
    s <- b[i]
    if (i > 1) s <- s - sum(L[i, 1:(i - 1)] * y[1:(i - 1)])
    y[i] <- s / L[i, i]
  }
  y
}

L <- matrix(c(2,  0, 0,
              1,  3, 0,
              -1, 1, 2), nrow = 3, byrow = TRUE)
b <- c(4, 5, -1)
print(forward_substitution(L, b))    # [2, 1, 0]
