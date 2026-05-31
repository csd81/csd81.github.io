import math


def deriv1(f, x, h=0.01):
    """Central-difference first derivative, error O(h^2)."""
    return (f(x + h) - f(x - h)) / (2 * h)


def deriv2(f, x, h=0.01):
    """Central-difference second derivative, error O(h^2)."""
    return (f(x + h) - 2 * f(x) + f(x - h)) / h ** 2


if __name__ == "__main__":
    print("f'(1)  ~", deriv1(math.sin, 1, 0.01), " exact cos(1)  =", math.cos(1))
    print("f''(1) ~", deriv2(math.sin, 1, 0.01), " exact -sin(1) =", -math.sin(1))
