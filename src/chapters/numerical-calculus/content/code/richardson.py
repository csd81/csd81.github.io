import math


def central(f, x, h):
    """Central-difference first derivative D(h), error O(h^2)."""
    return (f(x + h) - f(x - h)) / (2 * h)


def richardson(f, x, h):
    """Richardson-extrapolate D(h) and D(h/2) to error O(h^4)."""
    d1 = central(f, x, h)
    d2 = central(f, x, h / 2)
    return d1, d2, (4 * d2 - d1) / 3


if __name__ == "__main__":
    d1, d2, ext = richardson(math.sin, 1, 0.1)
    print("D(h)         =", d1)
    print("D(h/2)       =", d2)
    print("extrapolated =", ext, " exact cos(1) =", math.cos(1))
