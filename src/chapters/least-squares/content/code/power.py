import numpy as np


def power_fit(t, y):
    """Fit y ~ b*t^a by linear least squares on log-log data. Returns (a, b)."""
    lt = np.log(np.asarray(t, float))
    ly = np.log(np.asarray(y, float))
    A = np.column_stack([lt, np.ones_like(lt)])       # ln y = a*ln t + ln b
    (a, lnb), *_ = np.linalg.lstsq(A, ly, rcond=None)
    return a, np.exp(lnb)


if __name__ == "__main__":
    t = [1, 2, 3, 4]
    y = [2.0, 5.6, 9.7, 16.0]
    a, b = power_fit(t, y)
    print(f"a = {a:.4f}, b = {b:.4f}")
