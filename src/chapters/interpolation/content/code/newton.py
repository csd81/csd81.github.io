import numpy as np


def divided_differences(x, y):
    """Newton coefficients a_i = f[x_0, ..., x_i] (in place)."""
    x = np.asarray(x, float)
    a = np.asarray(y, float).copy()
    n = len(x)
    for j in range(1, n):
        for i in range(n - 1, j - 1, -1):
            a[i] = (a[i] - a[i - 1]) / (x[i] - x[i - j])
    return a


def newton_eval(x, a, t):
    """Evaluate the Newton form by Horner's scheme."""
    p = a[-1]
    for k in range(len(a) - 2, -1, -1):
        p = p * (t - x[k]) + a[k]
    return p


if __name__ == "__main__":
    x = [-1, 1, 2, 3]
    y = [-3, 1, 3, 29]
    a = divided_differences(x, y)
    print("divided differences:", a)
    print("p(0) =", newton_eval(x, a, 0.0))
