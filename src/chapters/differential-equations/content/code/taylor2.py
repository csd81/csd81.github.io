def taylor2(f, df, t0, y0, h, n):
    """Second-order Taylor method.  df is the total derivative
    f'(t,y) = f_t + f_y f."""
    t, y = t0, y0
    for _ in range(n):
        y += h * f(t, y) + h ** 2 / 2 * df(t, y)
        t += h
    return t, y


if __name__ == "__main__":
    # y' = 2y - 10t^2 + 2t  ->  f' = 4y - 20t^2 - 16t + 2
    f = lambda t, y: 2 * y - 10 * t ** 2 + 2 * t
    df = lambda t, y: 4 * y - 20 * t ** 2 - 16 * t + 2
    print("y(1) =", taylor2(f, df, 0.0, 1.0, 0.1, 10)[1])
