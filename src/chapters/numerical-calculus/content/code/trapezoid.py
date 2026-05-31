import numpy as np


def trapezoid(f, a, b, n=100):
    """Composite trapezoidal rule for the integral of f on [a, b]."""
    x = np.linspace(a, b, n + 1)
    y = f(x)
    h = (b - a) / n
    return h * (y[0] / 2 + y[1:-1].sum() + y[-1] / 2)


if __name__ == "__main__":
    import math
    print("int_0^1 e^x dx ~", trapezoid(np.exp, 0, 1, 100), " exact =", math.e - 1)
