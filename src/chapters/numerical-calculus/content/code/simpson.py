import numpy as np


def simpson(f, a, b, n=100):
    """Composite Simpson's rule (n forced even) on [a, b]."""
    if n % 2:
        n += 1
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h / 3 * (y[0] + y[-1] + 4 * y[1:-1:2].sum() + 2 * y[2:-1:2].sum())


if __name__ == "__main__":
    import math
    print("int_0^1 e^x dx ~", simpson(np.exp, 0, 1, 100), " exact =", math.e - 1)
