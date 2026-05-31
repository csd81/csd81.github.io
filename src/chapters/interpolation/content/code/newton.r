# Newton divided differences and Horner evaluation of the Newton form.
divided_differences <- function(x, y) {
  a <- as.numeric(y)
  n <- length(x)
  for (j in 1:(n - 1)) {
    for (i in n:(j + 1)) {
      a[i] <- (a[i] - a[i - 1]) / (x[i] - x[i - j])
    }
  }
  a
}

newton_eval <- function(x, a, t) {
  p <- a[length(a)]
  for (k in (length(a) - 1):1) {
    p <- p * (t - x[k]) + a[k]
  }
  p
}

x <- c(-1, 1, 2, 3)
y <- c(-3, 1, 3, 29)
a <- divided_differences(x, y)
cat("divided differences:", a, "\n")
cat("p(0) =", newton_eval(x, a, 0.0), "\n")
