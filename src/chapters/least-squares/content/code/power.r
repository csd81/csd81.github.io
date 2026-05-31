# Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b).
power_fit <- function(t, y) {
  lt <- log(t)
  ly <- log(y)
  A <- cbind(lt, 1)                   # ln y = a*ln t + ln b
  sol <- qr.solve(A, ly)
  list(a = sol[1], b = exp(sol[2]))
}

t <- c(1, 2, 3, 4)
y <- c(2.0, 5.6, 9.7, 16.0)
res <- power_fit(t, y)
cat(sprintf("a = %.4f, b = %.4f\n", res$a, res$b))
