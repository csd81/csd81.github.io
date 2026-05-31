def secant(f, x0, x1, tol=1e-12, max_iter=100):
    """Secant method (derivative-free, uses two previous iterates)."""
    f0, f1 = f(x0), f(x1)
    for k in range(1, max_iter + 1):
        x2 = x1 - f1 * (x1 - x0) / (f1 - f0)
        if abs(x2 - x1) < tol:
            return x2, k
        x0, f0, x1, f1 = x1, f1, x2, f(x2)
    return x1, max_iter


if __name__ == "__main__":
    print(secant(lambda x: x * x - 2, 1.0, 2.0))   # sqrt(2)
