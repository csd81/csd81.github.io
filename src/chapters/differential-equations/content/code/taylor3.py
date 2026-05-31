def taylor3(f, df, d2f, t0, y0, h, n):
    """Third-order Taylor method (uses the first two total derivatives of f)."""
    t, y = t0, y0
    for _ in range(n):
        y += h * f(t, y) + h ** 2 / 2 * df(t, y) + h ** 3 / 6 * d2f(t, y)
        t += h
    return t, y


if __name__ == "__main__":
    f = lambda t, y: 2 * y - 10 * t ** 2 + 2 * t
    df = lambda t, y: 4 * y - 20 * t ** 2 - 16 * t + 2
    d2f = lambda t, y: 8 * y - 40 * t ** 2 - 32 * t - 16
    print("y(1) =", taylor3(f, df, d2f, 0.0, 1.0, 0.1, 10)[1])
