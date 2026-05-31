def newton_eval(x, a, t):
    """Evaluate the Newton form  a_0 + a_1(t-x_0) + a_2(t-x_0)(t-x_1) + ...
    by nested (Horner-like) multiplication."""
    p = a[-1]
    for k in range(len(a) - 2, -1, -1):
        p = p * (t - x[k]) + a[k]
    return p


if __name__ == "__main__":
    x = [-1, 1, 2, 3]
    a = [-3, 2, 0, 3]          # divided differences of the demo data
    print(newton_eval(x, a, 0))   # 5
