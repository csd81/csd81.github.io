import numpy as np


def gauss_jordan(A, b):
    """Solve A x = b by Gauss-Jordan elimination (reduced row echelon form)."""
    A = np.array(A, float)
    M = np.hstack([A, np.array(b, float).reshape(-1, 1)])
    n = len(b)
    for k in range(n):
        p = k + np.argmax(np.abs(M[k:, k]))       # partial pivot
        M[[k, p]] = M[[p, k]]
        M[k] /= M[k, k]                           # normalize pivot row
        for i in range(n):
            if i != k:
                M[i] -= M[i, k] * M[k]            # eliminate above and below
    return M[:, -1]


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print("x =", gauss_jordan(A, b))
