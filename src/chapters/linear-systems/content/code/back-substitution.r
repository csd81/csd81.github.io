back_substitution <- function(U, b) {
  # Solve an upper-triangular system U x = b.
  n <- length(b)
  x <- numeric(n)
  for (i in n:1) {
    s <- b[i]
    if (i < n) s <- s - sum(U[i, (i + 1):n] * x[(i + 1):n])
    x[i] <- s / U[i, i]
  }
  x
}

U <- matrix(c(2, 1, -1,
              0, 1,  2,
              0, 0,  3), nrow = 3, byrow = TRUE)
b <- c(1, 8, 9)
print(back_substitution(U, b))    # [1, 2, 3]
