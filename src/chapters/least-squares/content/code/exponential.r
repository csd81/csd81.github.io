# Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b).
exp_fit <- function(t, y) {
  ly <- log(y)
  A <- cbind(t, 1)                    # ln y = a*t + ln b
  sol <- qr.solve(A, ly)
  list(a = sol[1], b = exp(sol[2]))
}

t <- c(0, 1, 2, 3)
y <- c(2.0, 4.1, 8.2, 15.9)
res <- exp_fit(t, y)
cat(sprintf("a = %.4f, b = %.4f\n", res$a, res$b))
