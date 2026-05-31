def horner(coeffs, x):
    """Evaluate a polynomial given coefficients [a_n, ..., a_0] (high -> low)."""
    y = coeffs[0]
    for a in coeffs[1:]:
        y = y * x + a
    return y


if __name__ == "__main__":
    # p(x) = 5x^4 - 8x^3 + 2x^2 + 4x - 10
    print(horner([5, -8, 2, 4, -10], 2))   # 22
