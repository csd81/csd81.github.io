# Central-difference first derivative, error O(h^2).
deriv1 <- function(f, x, h = 0.01) {
  (f(x + h) - f(x - h)) / (2 * h)
}

# Central-difference second derivative, error O(h^2).
deriv2 <- function(f, x, h = 0.01) {
  (f(x + h) - 2 * f(x) + f(x - h)) / h^2
}

cat("f'(1)  ~", deriv1(sin, 1, 0.01), " exact cos(1)  =", cos(1), "\n")
cat("f''(1) ~", deriv2(sin, 1, 0.01), " exact -sin(1) =", -sin(1), "\n")
