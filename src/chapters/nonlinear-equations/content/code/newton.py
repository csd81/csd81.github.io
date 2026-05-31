def newton(f, df, x0, tol=1e-12, max_iter=100):
    """Newton's method using the derivative df."""
    x = x0
    for k in range(1, max_iter + 1):
        fx = f(x)
        if abs(fx) < tol:
            return x, k
        x -= fx / df(x)
    return x, max_iter


if __name__ == "__main__":
    print(newton(lambda x: x * x - 2, lambda x: 2 * x, 1.0))   # sqrt(2)
