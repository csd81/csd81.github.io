# Central-difference first derivative D(h), error O(h^2).
central <- function(f, x, h) {
  (f(x + h) - f(x - h)) / (2 * h)
}

# Richardson-extrapolate D(h) and D(h/2) to error O(h^4).
richardson <- function(f, x, h) {
  d1 <- central(f, x, h)
  d2 <- central(f, x, h / 2)
  list(d1 = d1, d2 = d2, ext = (4 * d2 - d1) / 3)
}

r <- richardson(sin, 1, 0.1)
cat("D(h)         =", r$d1, "\n")
cat("D(h/2)       =", r$d2, "\n")
cat("extrapolated =", r$ext, " exact cos(1) =", cos(1), "\n")
