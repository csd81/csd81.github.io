def lu_doolittle(A):
    """Doolittle factorization A = L U (L unit-lower, U upper)."""
    n = len(A)
    L = [[1.0 if i == j else 0.0 for j in range(n)] for i in range(n)]
    U = [[0.0] * n for _ in range(n)]
    for i in range(n):
        for j in range(i, n):
            U[i][j] = A[i][j] - sum(L[i][k] * U[k][j] for k in range(i))
        for j in range(i + 1, n):
            L[j][i] = (A[j][i] - sum(L[j][k] * U[k][i] for k in range(i))) / U[i][i]
    return L, U


if __name__ == "__main__":
    A = [[1, -2, -2, -2], [2, -1, 2, 4], [-1, 2, 3, -4], [-2, 1, 4, -2]]
    L, U = lu_doolittle(A)
    for row in L:
        print([round(v, 4) for v in row])
    for row in U:
        print([round(v, 4) for v in row])
