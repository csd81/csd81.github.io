import numpy as np


def poly_fit(t, y, degree=2):
    """Least-squares polynomial fit; returns coefficients (low -> high)."""
    t = np.asarray(t, float)
    y = np.asarray(y, float)
    A = np.vander(t, degree + 1, increasing=True)    # columns 1, t, t^2, ...
    coeffs, *_ = np.linalg.lstsq(A, y, rcond=None)    # minimizes ||A c - y||
    return coeffs


if __name__ == "__main__":
    t = [0, 1, 2, 3, 4]
    y = [1.0, 1.8, 3.3, 4.5, 6.3]
    print("coeffs (low->high):", poly_fit(t, y, 2))
