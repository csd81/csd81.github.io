def back_substitution(U, b):
    """Solve an upper-triangular system U x = b."""
    n = len(b)
    x = [0.0] * n
    for i in range(n - 1, -1, -1):
        s = b[i] - sum(U[i][j] * x[j] for j in range(i + 1, n))
        x[i] = s / U[i][i]
    return x


if __name__ == "__main__":
    U = [[2, 1, -1], [0, 1, 2], [0, 0, 3]]
    b = [1, 8, 9]
    print(back_substitution(U, b))   # [1, 2, 3]
