import math


def cholesky(A):
    """Cholesky factorization A = L Lᵀ of a symmetric positive-definite A."""
    n = len(A)
    L = [[0.0] * n for _ in range(n)]
    for j in range(n):
        L[j][j] = math.sqrt(A[j][j] - sum(L[j][k] ** 2 for k in range(j)))
        for i in range(j + 1, n):
            L[i][j] = (A[i][j] - sum(L[i][k] * L[j][k] for k in range(j))) / L[j][j]
    return L


if __name__ == "__main__":
    A = [[4, 2, -2], [2, 10, 2], [-2, 2, 5]]
    for row in cholesky(A):
        print([round(v, 4) for v in row])
