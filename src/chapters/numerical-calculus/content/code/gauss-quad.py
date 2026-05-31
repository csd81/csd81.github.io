import math


def gauss_quad(f, a, b, n=2):
    """2- or 3-point Gauss-Legendre quadrature on [a, b]."""
    if n == 3:
        t = [-math.sqrt(3 / 5), 0.0, math.sqrt(3 / 5)]
        w = [5 / 9, 8 / 9, 5 / 9]
    else:
        t = [-1 / math.sqrt(3), 1 / math.sqrt(3)]
        w = [1.0, 1.0]
    hm = (b - a) / 2                       # map [-1, 1] -> [a, b]
    mid = (a + b) / 2
    return hm * sum(wi * f(mid + hm * ti) for ti, wi in zip(t, w))


if __name__ == "__main__":
    print("int_0^1 e^x dx ~", gauss_quad(math.exp, 0, 1, 2), "(2-pt)")
    print("int_0^1 e^x dx ~", gauss_quad(math.exp, 0, 1, 3), "(3-pt)")
    print("exact e-1 =", math.e - 1)
# -> 1.7178964 (2-pt), 1.7182810 (3-pt); exact e-1 = 1.7182818
