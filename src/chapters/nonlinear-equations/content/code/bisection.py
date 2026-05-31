def bisection(f, a, b, tol=1e-12, max_iter=200):
    """Bisection root of f on [a, b] (requires f(a)*f(b) < 0)."""
    fa = f(a)
    for k in range(1, max_iter + 1):
        c = (a + b) / 2
        fc = f(c)
        if fc == 0 or (b - a) / 2 < tol:
            return c, k
        if fa * fc < 0:
            b = c
        else:
            a, fa = c, fc
    return (a + b) / 2, max_iter


if __name__ == "__main__":
    f = lambda x: x * x - 2
    print(bisection(f, 1, 2))           # -> sqrt(2)
