# Nelder-Mead downhill simplex minimization.
nelder_mead <- function(f, x0, step = 0.5, tol = 1e-10, max_iter = 400) {
  x0 <- as.numeric(x0)
  n <- length(x0)
  pts <- vector("list", n + 1)
  pts[[1]] <- x0
  for (i in 1:n) {
    e <- rep(0, n); e[i] <- step
    pts[[i + 1]] <- x0 + e
  }
  fv <- sapply(pts, f)
  for (iter in 1:max_iter) {
    idx <- order(fv)
    pts <- pts[idx]
    fv <- fv[idx]
    if (abs(fv[n + 1] - fv[1]) < tol) break
    c <- Reduce(`+`, pts[1:n]) / n                # centroid of best n points
    worst <- pts[[n + 1]]
    xr <- c + (c - worst); fr <- f(xr)            # reflect
    if (fr < fv[1]) {
      xe <- c + 2 * (c - worst); fe <- f(xe)      # expand
      if (fe < fr) { pts[[n + 1]] <- xe; fv[n + 1] <- fe }
      else { pts[[n + 1]] <- xr; fv[n + 1] <- fr }
    } else if (fr < fv[n]) {
      pts[[n + 1]] <- xr; fv[n + 1] <- fr
    } else {
      xc <- c + 0.5 * (worst - c); fc <- f(xc)    # contract
      if (fc < fv[n + 1]) {
        pts[[n + 1]] <- xc; fv[n + 1] <- fc
      } else {                                    # shrink toward best
        for (i in 2:(n + 1)) {
          pts[[i]] <- pts[[1]] + 0.5 * (pts[[i]] - pts[[1]])
          fv[i] <- f(pts[[i]])
        }
      }
    }
  }
  pts[[1]]
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + (v[2] - 2)^2
  print(nelder_mead(f, c(0, 0)))                  # -> (1, 2)
}
