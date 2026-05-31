import math


def composite(f, a, b, n=10):
    """Composite trapezoidal and Simpson rules on [a, b] with n subintervals."""
    if n % 2:
        n += 1                                   # Simpson needs even n
    h = (b - a) / n
    x = [a + i * h for i in range(n + 1)]
    y = [f(xi) for xi in x]
    trap = h * (y[0] / 2 + sum(y[1:-1]) + y[-1] / 2)
    simp = h / 3 * (y[0] + y[-1] + 4 * sum(y[1:-1:2]) + 2 * sum(y[2:-1:2]))
    return trap, simp


if __name__ == "__main__":
    T, S = composite(math.exp, 0, 1, 10)
    print("trapezoid ~", T)
    print("Simpson   ~", S)
    print("exact e-1 =", math.e - 1)
# -> trapezoid ~ 1.7197135, Simpson ~ 1.7182828; exact e-1 = 1.7182818
