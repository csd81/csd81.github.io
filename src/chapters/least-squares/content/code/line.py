def line_fit(x, y):
    """Least-squares line y = a + b x via the 2x2 normal equations."""
    n = len(x)
    Sx = sum(x)
    Sy = sum(y)
    Sxx = sum(xi * xi for xi in x)
    Sxy = sum(xi * yi for xi, yi in zip(x, y))
    b = (n * Sxy - Sx * Sy) / (n * Sxx - Sx * Sx)   # slope
    a = (Sy - b * Sx) / n                            # intercept
    return a, b


if __name__ == "__main__":
    x = [0, 1, 2, 3, 4]
    y = [1, 3, 2, 5, 4]
    a, b = line_fit(x, y)
    print("slope b =", b, ", intercept a =", a)
# -> slope b = 0.8, intercept a = 1.4
