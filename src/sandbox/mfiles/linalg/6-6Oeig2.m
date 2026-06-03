a = 4*eye(3) + diag([1 1], 1)
[c l] = eig(a)
null(a - 4*eye(3))
