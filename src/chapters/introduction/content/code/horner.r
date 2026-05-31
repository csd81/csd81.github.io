# Evaluate a polynomial given coefficients c(a_n, ..., a_0) (high -> low).
horner <- function(coeffs, x) {
  y <- coeffs[1]
  for (a in coeffs[-1]) {
    y <- y * x + a
  }
  y
}

if (sys.nframe() == 0) {
  # p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
  print(horner(c(5, -8, 2, 4, -10), 2))   # 22
}
