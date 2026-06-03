A = [ 6 -1 -3
     -1  5  2
      2 -1  1]
[X L] = eig(A)
pkg load symbolic
A = sym(A)
[X J] = jordan(A)
