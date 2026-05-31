import numpy as np


def hermite_coeffs(x, y, dy):
    """Hermite interpolation via divided differences with doubled nodes.
    Returns (z, coeffs): coeffs are the Newton coefficients on nodes z."""
    x, y, dy = map(lambda v: np.asarray(v, float), (x, y, dy))
    n = len(x)
    m = 2 * n
    z = np.zeros(m)
    Q = np.zeros((m, m))
    for i in range(n):
        z[2 * i] = z[2 * i + 1] = x[i]
        Q[2 * i, 0] = Q[2 * i + 1, 0] = y[i]
        Q[2 * i + 1, 1] = dy[i]                       # f'[x_i] at the repeated node
        if i > 0:
            Q[2 * i, 1] = (Q[2 * i, 0] - Q[2 * i - 1, 0]) / (z[2 * i] - z[2 * i - 1])
    for j in range(2, m):
        for i in range(j, m):
            Q[i, j] = (Q[i, j - 1] - Q[i - 1, j - 1]) / (z[i] - z[i - j])
    return z, np.diag(Q).copy()


def hermite_eval(z, a, t):
    p = a[-1]
    for k in range(len(a) - 2, -1, -1):
        p = p * (t - z[k]) + a[k]
    return p


if __name__ == "__main__":
    x = [0, 1]
    y = [1, 0]
    dy = [0, 0]                       # p(0)=1,p'(0)=0,p(1)=0,p'(1)=0 -> 2x^3-3x^2+1
    z, a = hermite_coeffs(x, y, dy)
    print("coeffs:", a)
    print("p(0.5) =", hermite_eval(z, a, 0.5))
