import math


def golden_section(f, a, b, tol=1e-8):
    """Golden-section search for the minimum of a unimodal f on [a, b]."""
    g = (math.sqrt(5) - 1) / 2
    c, d = b - g * (b - a), a + g * (b - a)
    fc, fd = f(c), f(d)
    while b - a > tol:
        if fc < fd:
            b, d, fd = d, c, fc
            c = b - g * (b - a); fc = f(c)
        else:
            a, c, fc = c, d, fd
            d = a + g * (b - a); fd = f(d)
    return (a + b) / 2


if __name__ == "__main__":
    print(golden_section(lambda x: (x - 2) ** 2 + 1, 0, 5))   # -> 2
