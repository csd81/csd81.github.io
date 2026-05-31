# Golden-section search for the minimum of a unimodal f on [a, b].
golden_section <- function(f, a, b, tol = 1e-8) {
  g <- (sqrt(5) - 1) / 2
  c <- b - g * (b - a)
  d <- a + g * (b - a)
  fc <- f(c)
  fd <- f(d)
  while (b - a > tol) {
    if (fc < fd) {
      b <- d; d <- c; fd <- fc
      c <- b - g * (b - a); fc <- f(c)
    } else {
      a <- c; c <- d; fc <- fd
      d <- a + g * (b - a); fd <- f(d)
    }
  }
  (a + b) / 2
}

if (sys.nframe() == 0) {
  print(golden_section(function(x) (x - 2)^2 + 1, 0, 5))   # -> 2
}
