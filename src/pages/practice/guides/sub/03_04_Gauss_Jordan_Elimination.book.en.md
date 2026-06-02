## 3.4. Gauss–Jordan Elimination

A version of the Gaussian elimination is the *Gauss–Jordan elimination*, where we use the elimination steps of the Gaussian elimination to transform the coefficient matrix part of the augmented matrix to the identity matrix, i.e., the matrix $(\mathbf{A}, \mathbf{b})$ is converted to the form $(\mathbf{I}, \mathbf{b}^{(n-1)})$. Then the solution of the linear system is $\mathbf{x} = \mathbf{b}^{(n-1)}$.

---

**Algorithm 3.34. Gauss–Jordan elimination**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$ - augmented coefficient matrix
OUTPUT: $x_1, \ldots, x_n$

*(converting the coefficients to a diagonal form:)*
**for** $k = 1, \ldots, n$ **do**
$\qquad$**for** $i = 1, \ldots, n$ **do**
$\qquad\qquad$**if** $i \neq k$ **do**
$\qquad\qquad\qquad l_{ik} \leftarrow a_{ik}/a_{kk}$
$\qquad\qquad\qquad$**for** $j = k+1, \ldots, n+1$ **do**
$\qquad\qquad\qquad\qquad a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$
$\qquad\qquad\qquad$**end do**
$\qquad\qquad$**end do**
$\qquad$**end do**
**end do**
**for** $i = 1, \ldots, n$ **do**
$\qquad x_i \leftarrow a_{i,n+1}/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

It can be checked that the operation count of the Gauss-Jordan elimination is $n^3/2 + \mathcal{O}(n^2)$ number of multiplications and divisions and $n^3/2 + \mathcal{O}(n^2)$ number of additions and subtractions.

**Example 3.35.** We apply the Gauss–Jordan elimination to the linear system examined in Example 3.22.

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & -3 & -4 & 3 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & 10/3 & -5/3 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 14/15 & -73/15 \\ 0 & 3 & 0 & 4/5 & 22/5 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 0 & -26/5 & 52/5 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 3 & 0 & 0 & 6 \\ 0 & 0 & -5 & 0 & -20 \\ 0 & 0 & 0 & -26/5 & 52/5 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}.$$

The last column gives us the solution: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$. $\qquad\square$

We can combine pivoting strategies together with the Gauss–Jordan elimination.

**Example 3.36.** Here we apply the Gauss–Jordan elimination with partial pivoting to the linear system examined in Example 3.22:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 0 & -3/2 & -3 & -4 & -7 \\ 0 & 3/2 & 4 & -2 & 23 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\ 0 & -3/2 & -3 & -4 & -7 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\ 0 & -3/2 & -3 & -4 & -7 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 1 & -6 & 16 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 0 & 16/3 & -50/3 \\ 0 & -3/2 & 0 & -3 & 3 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 0 & -19/3 & 38/3 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & 0 & 0 & 0 & -6 \\ 0 & -3/2 & 0 & 0 & -3 \\ 0 & 0 & 6 & 0 & 24 \\ 0 & 0 & 0 & -19/3 & 38/3 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}.$$

Therefore, the solution is $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$. $\qquad\square$

### Exercises

1. Solve the linear systems given in Exercises 1 and 2 of Section 3.3 with Gauss–Jordan elimination.

2. Prove that the number of arithmetic operation needed for the Gauss-Jordan elimination is $n^3/2 + n^2 - n/2$ multiplication and divisions.

