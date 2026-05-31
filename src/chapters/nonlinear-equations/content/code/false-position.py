def false_position(f, a, b, tol=1e-12, max_iter=200):
    """Regula falsi: like bisection but uses the secant intercept."""
    fa, fb = f(a), f(b)
    c = a
    for k in range(1, max_iter + 1):
        c = (a * fb - b * fa) / (fb - fa)
        fc = f(c)
        if abs(fc) < tol:
            return c, k
        if fa * fc < 0:
            b, fb = c, fc
        else:
            a, fa = c, fc
    return c, max_iter


if __name__ == "__main__":
    print(false_position(lambda x: x * x - 2, 1.0, 2.0))   # sqrt(2)
