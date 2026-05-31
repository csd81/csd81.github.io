import numpy as np


def natural_cubic_spline(x, y):
    """Natural cubic spline. Returns per-interval (a, b, c, d) with
    S_i(t) = a_i + b_i (t - x_i) + c_i (t - x_i)^2 + d_i (t - x_i)^3."""
    x = np.asarray(x, float)
    y = np.asarray(y, float)
    n = len(x)
    h = np.diff(x)
    A = np.zeros((n, n))
    rhs = np.zeros(n)
    A[0, 0] = A[-1, -1] = 1.0                          # natural: c_0 = c_{n-1} = 0
    for i in range(1, n - 1):
        A[i, i - 1] = h[i - 1]
        A[i, i] = 2 * (h[i - 1] + h[i])
        A[i, i + 1] = h[i]
        rhs[i] = 3 * ((y[i + 1] - y[i]) / h[i] - (y[i] - y[i - 1]) / h[i - 1])
    c = np.linalg.solve(A, rhs)
    a = y[:-1]
    b = (y[1:] - y[:-1]) / h - h * (2 * c[:-1] + c[1:]) / 3
    d = (c[1:] - c[:-1]) / (3 * h)
    return a, b, c[:-1], d


if __name__ == "__main__":
    x = [0, 1, 2, 3]
    y = [0, 1, 0, 1]
    a, b, c, d = natural_cubic_spline(x, y)
    print("a =", a)
    print("b =", b)
    print("c =", c)
    print("d =", d)
