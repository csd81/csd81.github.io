# Second-order Taylor method. df is the total derivative f'(t,y) = f_t + f_y f.
taylor2 <- function(f, df, t0, y0, h, n) {
  t <- t0
  y <- y0
  for (i in 1:n) {
    y <- y + h * f(t, y) + h^2 / 2 * df(t, y)
    t <- t + h
  }
  list(t = t, y = y)
}

# y' = 2y - 10t^2 + 2t  ->  f' = 4y - 20t^2 - 16t + 2
f <- function(t, y) 2 * y - 10 * t^2 + 2 * t
df <- function(t, y) 4 * y - 20 * t^2 - 16 * t + 2
cat("y(1) =", taylor2(f, df, 0.0, 1.0, 0.1, 10)$y, "\n")
