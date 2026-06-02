## 3.7. Matrix Inversion and Determinants

The inverse matrix $\mathbf{A}^{-1}$ of a nonsingular square matrix $\mathbf{A}$ satisfies the matrix equation $\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$, so $\mathbf{A}^{-1}$ is the solution of the simultaneous linear system $\mathbf{A}\mathbf{X} = \mathbf{I}$. It can be shown that if such matrix $\mathbf{X}$ exists, then $\mathbf{X}\mathbf{A} = \mathbf{I}$ holds too, hence $\mathbf{X}$ is the inverse matrix of $\mathbf{A}$. We can use the Gauss-Jordan elimination to solve the simultaneous linear system. It can be checked that the number of operations needed to compute the matrix inverse with the Gauss–Jordan elimination is $\frac{3}{2}n^3 + \mathcal{O}(n^2)$ number of multiplications and divisions and $\frac{3}{2}n^3 + \mathcal{O}(n^2)$ number of additions and subtractions.

**Example 3.38.** Compute the inverse of the matrix

$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}.$$

We use the Gauss–Jordan elimination:

$$\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \end{pmatrix}.$$

Hence

$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}. \qquad\square$$

Certainly, we can use pivoting techniques together with the Gauss-Jordan elimination for computing the inverse matrix if we wanted to reduce the rounding errors or to avoid division by zero.

According to Theorem 3.26 the Gaussian elimination with pivoting can be performed if and only if $\det(\mathbf{A}) \neq 0$. In the proof of the theorem we can see that $\det(\mathbf{A}) = (-1)^s\det(\mathbf{A}^{(n-1)})$, where $s$ denotes the number of row changes. Therefore, the determinant is equal to the product of the pivot elements with an appropriate sign: $\det(\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\cdots a_{nn}^{(n-1)}$.

**Example 3.39.** Consider the coefficient matrix of Example 3.22, i.e., let

$$\mathbf{A} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 2 & -1 & 2 & 4 \\ -1 & 2 & 3 & -4 \\ -2 & 1 & 4 & -2 \end{pmatrix}.$$

Compute the determinant of $\mathbf{A}$. In Example 3.22 we performed the Gaussian elimination on $\mathbf{A}$ and got

$$\mathbf{A}^{(3)} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 0 & 3 & 6 & 8 \\ 0 & 0 & 1 & -6 \\ 0 & 0 & 0 & 38 \end{pmatrix}.$$

Therefore, $\det(\mathbf{A}) = \det(\mathbf{A}^{(3)}) = 1 \cdot 3 \cdot 1 \cdot 38 = 114$. $\qquad\square$

### Exercises

1. Compute the inverse of the matrices:

   (a)
   $$\begin{pmatrix} -1 & 1 & 2 \\ -2 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix}$$

   (b)
   $$\begin{pmatrix} -3 & 1 & 2 \\ 0 & 3 & 1 \\ -2 & -1 & 1 \end{pmatrix}$$

   (c)
   $$\begin{pmatrix} 1 & -1 & 0 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 0 & -1 & 0 \\ 1 & 2 & 2 & -1 \end{pmatrix}$$

2. Prove that the matrix inversion using Gauss–Jordan elimination requires $3n^3/2 - n/2$ number of multiplications and divisions.

3. Formulate an algorithm for matrix inversion using Gauss–Jordan elimination taking into account that in the problem $\mathbf{A}\mathbf{X} = \mathbf{I}$ the matrix $\mathbf{I}$ has a special form, so multiplication by 0 should not be computed. Show that the resulting algorithm requires $n^3$ multiplications and divisions and $n^3 - 2n^2 + n$ additions and subtractions.

4. Compute the determinants of the matrices given in Exercise 1 using the Gaussian elimination.
