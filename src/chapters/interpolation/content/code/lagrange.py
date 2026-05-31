import numpy as np


def lagrange_coeffs(x, y):
    """Polynomial coefficients a (low->high) of the degree n-1 interpolant
    through (x_i, y_i), via the Vandermonde system V a = y."""
    x = np.asarray(x, float)
    y = np.asarray(y, float)
    V = np.vander(x, increasing=True)   # V[i, j] = x_i ** j
    return np.linalg.solve(V, y)


if __name__ == "__main__":
    x = [-1, 1, 2, 3]
    y = [-3, 1, 3, 29]
    print("coefficients (low->high):", lagrange_coeffs(x, y))
