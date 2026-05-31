def rk4(f, t0, y0, h, n):
    """Classical fourth-order Runge-Kutta for y' = f(t, y)."""
    t, y = t0, y0
    for _ in range(n):
        k1 = f(t, y)
        k2 = f(t + h / 2, y + h / 2 * k1)
        k3 = f(t + h / 2, y + h / 2 * k2)
        k4 = f(t + h, y + h * k3)
        y += h * (k1 + 2 * k2 + 2 * k3 + k4) / 6
        t += h
    return t, y


if __name__ == "__main__":
    f = lambda t, y: 2 * y - 10 * t ** 2 + 2 * t
    print("y(1) =", rk4(f, 0.0, 1.0, 0.1, 10)[1])
