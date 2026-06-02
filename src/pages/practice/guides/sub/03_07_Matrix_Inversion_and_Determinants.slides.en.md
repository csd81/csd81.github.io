## 3.6. Matrix Inversion and Determinants

The inverse $\mathbf{A}^{-1}$ of a nonsingular square matrix $\mathbf{A}$ satisfies the matrix equation

$$\mathbf{A}\mathbf{A}^{-1} = \mathbf{I},$$

so the matrix inversion is equivalent to solving the simultaneous linear system

$$\mathbf{A}\mathbf{X} = \mathbf{I}.$$

We can use the Gauss-Jordan elimination to solve this problem. It can be checked that the number of operations needed to compute the matrix inverse with the Gauss–Jordan elimination is

$$\frac{3}{2}n^3 + \mathcal{O}(n^2)$$

number of multiplications and divisions.

### Example

Compute the inverse of the matrix

$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}.$$

We use the Gauss–Jordan elimination:

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{array}\right) \sim \left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right) \sim$$

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right) \sim \left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -\frac{1}{3} & 0 & -\frac{2}{3} \\ 0 & 1 & 0 & -\frac{1}{3} & 1 & -\frac{2}{3} \\ 0 & 0 & 3 & 2 & 0 & 1 \end{array}\right) \sim$$

$$\left(\begin{array}{ccc|ccc} 1 & 0 & 0 & -\frac{1}{3} & 0 & -\frac{2}{3} \\ 0 & 1 & 0 & -\frac{1}{3} & 1 & -\frac{2}{3} \\ 0 & 0 & 1 & \frac{2}{3} & 0 & \frac{1}{3} \end{array}\right)$$

### Example cont.

Hence

$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}.$$

---

Certainly, we can use pivoting techniques together with the Gauss-Jordan elimination for computing the inverse matrix if we would like to reduce the rounding errors or to avoid division by zero.

The Gaussian elimination with pivoting can be performed if and only if $\det(\mathbf{A}) \neq 0$. We have seen that

$$\det(\mathbf{A}) = (-1)^s\det(\mathbf{A}^{(n-1)}),$$

where $s$ denotes the number of row changes. Therefore, the determinant is equal to the product of the pivot elements with an appropriate sign:

$$\det(\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\cdots a_{nn}^{(n-1)}.$$

### Example

Consider the coefficient matrix of a previous example:

$$\mathbf{A} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 2 & -1 & 2 & 4 \\ -1 & 2 & 3 & -4 \\ -2 & 1 & 4 & -2 \end{pmatrix}.$$

Compute the determinant of $\mathbf{A}$. We have performed the Gaussian elimination on $\mathbf{A}$ and got

$$\mathbf{A}^{(3)} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 0 & 3 & 6 & 8 \\ 0 & 0 & 1 & -6 \\ 0 & 0 & 0 & 38 \end{pmatrix}.$$

Therefore, $\det(\mathbf{A}) = \det(\mathbf{A}^{(3)}) = 1 \cdot 3 \cdot 1 \cdot 38 = 114$.
