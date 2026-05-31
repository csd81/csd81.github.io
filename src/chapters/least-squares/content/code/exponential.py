import numpy as np


def exp_fit(t, y):
    """Fit y ~ b*exp(a*t) by linear least squares on ln(y). Returns (a, b)."""
    t = np.asarray(t, float)
    ly = np.log(np.asarray(y, float))
    A = np.column_stack([t, np.ones_like(t)])         # ln y = a*t + ln b
    (a, lnb), *_ = np.linalg.lstsq(A, ly, rcond=None)
    return a, np.exp(lnb)


if __name__ == "__main__":
    t = [0, 1, 2, 3]
    y = [2.0, 4.1, 8.2, 15.9]
    a, b = exp_fit(t, y)
    print(f"a = {a:.4f}, b = {b:.4f}")
