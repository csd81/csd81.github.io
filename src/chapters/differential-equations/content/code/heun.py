def heun(f, t0, y0, h, n):
    """Heun's method (RK2, explicit trapezoidal rule)."""
    t, y = t0, y0
    for _ in range(n):
        k1 = f(t, y)
        k2 = f(t + h, y + h * k1)
        y += h * (k1 + k2) / 2
        t += h
    return t, y


if __name__ == "__main__":
    f = lambda t, y: 2 * y - 10 * t ** 2 + 2 * t
    print("y(1) =", heun(f, 0.0, 1.0, 0.1, 10)[1])
