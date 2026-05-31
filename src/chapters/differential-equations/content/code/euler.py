def euler(f, t0, y0, h, n):
    """Forward Euler for y' = f(t, y). Returns trajectories (t, y)."""
    t, y = [t0], [y0]
    for i in range(n):
        y.append(y[-1] + h * f(t[-1], y[-1]))   # z_{i+1} = z_i + h f(t_i, z_i)
        t.append(t0 + (i + 1) * h)
    return t, y


if __name__ == "__main__":
    f = lambda t, y: 2 * y - 10 * t ** 2 + 2 * t      # y(0)=1 on [0,1]
    t, y = euler(f, 0.0, 1.0, 0.1, 10)
    print("y(1) =", y[-1])
