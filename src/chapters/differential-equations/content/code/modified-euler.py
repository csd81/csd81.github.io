def modified_euler(f, t0, y0, h, n):
    """Modified Euler (midpoint RK2, predictor-corrector)."""
    t, y = t0, y0
    for _ in range(n):
        k1 = f(t, y)
        k2 = f(t + h / 2, y + h / 2 * k1)   # slope at the midpoint
        y += h * k2
        t += h
    return t, y


if __name__ == "__main__":
    f = lambda t, y: 2 * y - 10 * t ** 2 + 2 * t
    print("y(1) =", modified_euler(f, 0.0, 1.0, 0.1, 10)[1])
