# Basic fixed-shape simplex method (reflect worst through centroid, else shrink to best).
simplex_basic <- function(f, x0, step = 1, tol = 1e-8, max_iter = 500) {
  x0 <- as.numeric(x0)
  n <- length(x0)
  P <- rbind(x0, t(sapply(1:n, function(i) { v <- x0; v[i] <- v[i] + step; v })))
  fv <- apply(P, 1, f)
  for (it in 1:max_iter) {
    iw <- which.max(fv); ib <- which.min(fv)
    sz <- max(sapply(1:(n + 1), function(i) sqrt(sum((P[i, ] - P[ib, ])^2))))
    if (sz < tol) break
    cen <- (colSums(P) - P[iw, ]) / n              # centroid of all but the worst
    xr <- cen + (cen - P[iw, ]); fr <- f(xr)       # reflect the worst vertex
    if (fr < fv[iw]) {
      P[iw, ] <- xr; fv[iw] <- fr
    } else {                                       # shrink toward the best
      best <- P[ib, ]
      for (i in 1:(n + 1)) if (i != ib) { P[i, ] <- best + 0.5 * (P[i, ] - best); fv[i] <- f(P[i, ]) }
    }
  }
  as.numeric(P[which.min(fv), ])
}

if (sys.nframe() == 0) {
  f <- function(v) (v[1] - 1)^2 + (v[2] - 2)^2
  cat(simplex_basic(f, c(0, 0)), "\n")            # -> 1 2
}
