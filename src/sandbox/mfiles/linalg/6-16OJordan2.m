pkg load symbolic
A = [2 -3  2
     4 10 -4
     4  6  0]
A = sym(A)
[X L] = eig(A)
[X J] = jordan(A)
