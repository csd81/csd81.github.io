# Forward Euler for y' = f(t, y). Returns trajectories (t, y).
euler <- function(f, t0, y0, h, n) {
  t <- numeric(n + 1)
  y <- numeric(n + 1)
  t[1] <- t0
  y[1] <- y0
  for (i in 1:n) {
    y[i + 1] <- y[i] + h * f(t[i], y[i])   # z_{i+1} = z_i + h f(t_i, z_i)
    t[i + 1] <- t0 + i * h
  }
  list(t = t, y = y)
}

f <- function(t, y) 2 * y - 10 * t^2 + 2 * t     # y(0)=1 on [0,1]
res <- euler(f, 0.0, 1.0, 0.1, 10)
cat("y(1) =", res$y[length(res$y)], "\n")
