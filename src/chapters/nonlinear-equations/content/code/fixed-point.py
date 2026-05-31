def fixed_point(g, x0, tol=1e-12, max_iter=200):
    """Fixed-point iteration x_{k+1} = g(x_k)."""
    x = x0
    for k in range(1, max_iter + 1):
        xn = g(x)
        if abs(xn - x) < tol:
            return xn, k
        x = xn
    return x, max_iter


if __name__ == "__main__":
    import math
    print(fixed_point(math.cos, 1.0))   # Dottie number ~0.739085
