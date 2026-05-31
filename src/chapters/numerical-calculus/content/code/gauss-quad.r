# 2- or 3-point Gauss-Legendre quadrature on [a, b].
gauss_quad <- function(f, a, b, n = 2) {
  if (n == 3) {
    t <- c(-sqrt(3 / 5), 0, sqrt(3 / 5)); w <- c(5 / 9, 8 / 9, 5 / 9)
  } else {
    t <- c(-1 / sqrt(3), 1 / sqrt(3)); w <- c(1, 1)
  }
  hm <- (b - a) / 2                 # map [-1,1] -> [a,b]
  mid <- (a + b) / 2
  hm * sum(w * f(mid + hm * t))
}

cat("int_0^1 e^x dx ~", gauss_quad(exp, 0, 1, 2), "(2-pt)\n")
cat("int_0^1 e^x dx ~", gauss_quad(exp, 0, 1, 3), "(3-pt)\n")
# -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
