A = [1 2 2; 2 1 2; 3 3 2];
[C L] = eig(A);
C
pkg load symbolic
A = sym(A)
[C L] = eig(A)
