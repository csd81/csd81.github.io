import numpy as np


def gauss_partial_pivot(A, b):
    """Solve A x = b by Gaussian elimination with partial (row) pivoting."""
    A = np.array(A, float)
    b = np.array(b, float)
    n = len(b)
    for k in range(n):
        p = k + np.argmax(np.abs(A[k:, k]))      # largest |pivot| in column k
        A[[k, p]] = A[[p, k]]
        b[[k, p]] = b[[p, k]]
        for i in range(k + 1, n):
            f = A[i, k] / A[k, k]
            A[i, k:] -= f * A[k, k:]
            b[i] -= f * b[k]
    x = np.zeros(n)                               # back substitution
    for i in range(n - 1, -1, -1):
        x[i] = (b[i] - A[i, i + 1:] @ x[i + 1:]) / A[i, i]
    return x


if __name__ == "__main__":
    A = [[2, 1, -1], [-3, -1, 2], [-2, 1, 2]]
    b = [8, -11, -3]
    print("x =", gauss_partial_pivot(A, b))      # [2, 3, -1]
