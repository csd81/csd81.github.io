# Evaluate the Newton form  a_0 + a_1(t-x_0) + a_2(t-x_0)(t-x_1) + ...
# by nested (Horner-like) multiplication.
newton_eval <- function(x, a, t) {
  p <- a[length(a)]
  for (k in (length(a) - 1):1) {
    p <- p * (t - x[k]) + a[k]
  }
  p
}

x <- c(-1, 1, 2, 3)
a <- c(-3, 2, 0, 3)        # divided differences of the demo data
cat(newton_eval(x, a, 0), "\n")   # 5
