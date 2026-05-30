# Numerical Analysis

## 3. Linear Systems

**Ferenc Hartung**

University of Pannonia
Department of Mathematics
Veszprém, Hungary

2025

---

## 3.1. Triangular Systems

### Example

Solve the linear system

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

Solving the fourth equation for $x_4$ we get $x_4 = 4$. Substituting it to the third equation we get

$$x_3 = (-2 + x_4)/2 = 1.$$

Then the second equation yields

$$x_2 = (13 + x_3 - 2x_4)/3 = 2.$$

Finally, from the first equation we have

$$x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1.$$

---

We can generalize the method used in the previous example to solve the upper triangular $n$-dimensional linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$, i.e., a linear system of the form

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n
\end{array} \tag{1}$$

We formulate the method of *backward substitution* in the following algorithm.

---

**Algorithm: Backward substitution to solve a triangular system**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

The method of backward substitution can be performed if an only if

$$a_{ii} \neq 0 \qquad \text{for all } i = 1, \ldots, n.$$

Since

$$\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$$

for a triangular matrix, the backward substitution works if and only if the system (1) has a unique solution, i.e.,

$$\det(\mathbf{A}) \neq 0.$$

The *time complexity* of the algorithm is

$$1 + 2 + \cdots + n = n(n+1)/2 = n^2/2 + \mathcal{O}(n)$$

multiplications and divisions, and

$$1 + 2 + \cdots + n - 1 = (n-1)n/2 = n^2/2 + \mathcal{O}(n)$$

additions and subtractions. The notation $\mathcal{O}(n^k)$ denotes any polynomial with degree at most $k$.

---

## 3.2. Gaussian Elimination, Pivoting Strategies

### Example

Consider the linear system

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
2x_1 & - & x_2 & + & 2x_3 & + & 4x_4 & = & -8 \\
-x_1 & + & 2x_2 & + & 3x_3 & - & 4x_4 & = & 27 \\
2x_1 & + & x_2 & + & 4x_3 & - & 2x_4 & = & 28
\end{array} \tag{2}$$

With the help of the first equation, the variable $x_1$ can be eliminated from the second, third and fourth equations. We multiply the first equation by 2, $-1$ and 2, respectively, and subtract it from the second, third and fourth equations, respectively:

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\
& & & & x_3 & - & 6x_4 & = & 16 \\
& - & 3x_2 & & & - & 6x_4 & = & 6
\end{array} \tag{3}$$

The resulting system is equivalent to (2).

### Example cont.

We associate the following $4 \times 5$ dimensional matrix to the system (2):

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix}$$

The elimination process is written shortly as

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 0 & 38 & -76 \end{pmatrix}$$

(The row operations use multipliers $2, -1, 2$ in the first step, $-1$ in the second, and $6$ in the third, e.g. $2 - 2\cdot 1 = 0$, $-1 - 2\cdot(-2) = 3$, $2 - 2\cdot(-2) = 6$, $4 - 2\cdot(-2) = 8$, $-8 - 2\cdot(-11) = 14$, etc.)

Using backward substitution we get: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$, $x_4 = -2$.

---

Using the above method for the general $n$-dimensional linear system

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n
\end{array} \tag{4}$$

we get the *Gaussian elimination with backward substitution*. We put the coefficients and the right hand sides to the *augmented matrix*:

$$\tilde{\mathbf{A}}^{(0)} = (\mathbf{A}, \mathbf{b}) = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ a_{21} & a_{22} & \ldots & a_{2n} & a_{2,n+1} \\ \vdots & \vdots & & \vdots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} & a_{n,n+1} \end{pmatrix},$$

where $a_{i,n+1} := b_i$, $(i = 1, \ldots, n)$.

Starting from the matrix $\tilde{\mathbf{A}}^{(0)}$ we obtain the sequence of matrices $\tilde{\mathbf{A}}^{(1)}, \tilde{\mathbf{A}}^{(2)}, \ldots, \tilde{\mathbf{A}}^{(n-1)}$ describing equivalent linear systems in the following way. Let

$$\tilde{\mathbf{A}}^{(1)} = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ 0 & a_{22}^{(1)} & \ldots & a_{2n}^{(1)} & a_{2,n+1}^{(1)} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & a_{n2}^{(1)} & \ldots & a_{nn}^{(1)} & a_{n,n+1}^{(1)} \end{pmatrix},$$

where

$$a_{ij}^{(1)} := a_{ij} - l_{i1}a_{1j}, \quad l_{i1} := \frac{a_{i1}}{a_{11}}, \quad i = 2, \ldots, n, \quad j = 2, \ldots, n+1,$$

(assuming $a_{11} \neq 0$). If the matrices $\tilde{\mathbf{A}}^{(1)}, \ldots, \tilde{\mathbf{A}}^{(k-1)}$ are defined for some $k \leq n-1$, then let

$$\tilde{\mathbf{A}}^{(k)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k} & a_{1,k+1} & \cdots & a_{1,n} & a_{1,n+1} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2,n}^{(1)} & a_{2,n+1}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k,k}^{(k-1)} & a_{k,k+1}^{(k-1)} & \cdots & a_{k,n}^{(k-1)} & a_{k,n+1}^{(k-1)} \\
0 & 0 & \cdots & 0 & a_{k+1,k+1}^{(k)} & \cdots & a_{k+1,n}^{(k)} & a_{k+1,n+1}^{(k)} \\
\vdots & \vdots & & \vdots & \vdots & & \vdots & \vdots \\
0 & 0 & \cdots & 0 & a_{n,k+1}^{(k)} & \cdots & a_{n,n}^{(k)} & a_{n,n+1}^{(k)}
\end{pmatrix},$$

where

$$a_{ij}^{(k)} := a_{ij}^{(k-1)} - l_{ik}a_{kj}^{(k-1)}, \quad l_{ik} := \frac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}, \quad i = k+1, \ldots, n, \quad j = k+1, \ldots, n+1.$$

We perform these *elimination steps* for $k = 1, \ldots, n-1$.

Finally, we solve the triangular system corresponding to the matrix $\tilde{\mathbf{A}}^{(n-1)}$ using the backward substitution method. The elements

$$a_{11}, a_{22}^{(1)}, \ldots, a_{nn}^{(n-1)}$$

in the main diagonal of the last matrix of the Gaussian elimination are called *pivot elements*. Clearly, we can perform the Gaussian elimination if and only if all the pivot elements are nonzero. If we perform the steps of the Gaussian elimination only on the coefficient matrix, the resulting matrices will be denoted by

$$\mathbf{A}^{(0)} := \mathbf{A}, \mathbf{A}^{(1)}, \ldots, \mathbf{A}^{(n-1)}.$$

---

**Algorithm: Gaussian elimination**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$ - augmented matrix
OUTPUT: $x_1, \ldots, x_n$

*(elimination:)*
**for** $k = 1, \ldots, n-1$ **do**
$\qquad$**for** $i = k+1, \ldots, n$ **do**
$\qquad\qquad l_{ik} \leftarrow a_{ik}/a_{kk}$
$\qquad\qquad$**for** $j = k+1, \ldots, n+1$ **do**
$\qquad\qquad\qquad a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$
$\qquad\qquad$**end do**
$\qquad$**end do**
**end do**
*(backward substitution:)*
$x_n \leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(a_{i,n+1} - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

The total number of multiplications and divisions needed for the elimination steps is

$$n^3/3 + n^2/2 - 5n/6,$$

and the number of additions and subtractions is

$$(n^3 - n)/3.$$

Together with the backward substitution,

$$n^3/3 + n^2/2 - 5n/6 + n^2/2 + n/2 = n^3/3 + n^2 - n/3 = n^3/3 + \mathcal{O}(n^2)$$

number of multiplications and divisions, and

$$(n^3 - n)/3 + n^2/2 - n/2 = n^3/3 + n^2/2 - 5n/6 = n^3/3 + \mathcal{O}(n^2)$$

number of additions and subtractions are needed to perform the Gaussian elimination. Shortly we say that the *time complexity* of the Gaussian elimination is

$$n^3/3$$

number of operations.

### Example

Solve the system

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & & & - & 3x_4 & = & 8 \\
2x_1 & - & x_2 & + & x_3 & + & 5x_4 & = & 2 \\
-3x_1 & + & x_2 & + & x_3 & - & 2x_4 & = & -5 \\
2x_1 & + & 4x_2 & & & - & x_4 & = & 21
\end{array}$$

by Gaussian elimination. After performing the first step of the elimination we get

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix}.$$

Since the pivot element of the second row is 0, the Gaussian elimination cannot be continued. On the other hand, the system has a unique solution: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$.

### Example cont.

But if we change the second and third rows of the previous augmented matrix, the corresponding linear system is the same, and the elimination can be continued:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 10 & -63 & 83 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -\frac{1}{2} & 1 & -\frac{13}{2} & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 0 & -143 & 143 \end{pmatrix},$$

which yields the solution $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$.

### Example

Solve the linear system

$$\begin{array}{rcrcr}
0.0002x_1 & - & 30.5x_2 & = & -60.99 \\
5.060x_1 & - & 1.05x_2 & = & 250.9
\end{array}$$

using Gaussian elimination and 4-digit arithmetic. First we compute the factor $l_{21} = 5.060/0.0002 = 25300$ (rounding to 4 significant digits). Then by multiplying the first equation by $l_{21}$ and subtracting it from the second row we get

$$\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 5.06 & -1.05 & 250.9 \end{pmatrix} \sim \begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 0 & 771700 & 1543000 \end{pmatrix}.$$

We note that we do not compute the first element of the second row by the Algorithm of the Gaussian elimination. Solving it we get the numerical solutions $\tilde{x}_1 = -100.0$ and $\tilde{x}_2 = 1.999$. We can check that the exact solution of the system is $x_1 = 50$ and $x_2 = 2$. Therefore, the relative errors of the numerical solutions are 300% and 0.05%, respectively.

### Example cont.

Repeat the calculation for the system where we interchange the two equations:

$$\begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0.0002 & -30.5 & -60.99 \end{pmatrix} \sim \begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0 & -30.5 & -61.0 \end{pmatrix}.$$

This gives the numerical values $x_1 = 50.00$ and $x_2 = 2.000$, which are identical to the exact solutions.

What is the difference in between the two computations? In the first case, in order to compute $l_{21}$ we needed to divide by a small number (0.0002), which gave us the increase of the rounding error. In the second case we performed the division by 5.06 in the computation of $l_{21}$, and we did not observe any error in the final result.

---

### 3.2. Gaussian Elimination, Pivoting Strategies — Partial Pivoting

*Partial pivoting* (or *maximal column pivoting*): before the $k$th step of the elimination, we select the element with the largest magnitude in the $k$th column in and under the main diagonal, i.e., let

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}.$$

(The largest element is in the $l$th row.)

$$\begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{1,k+1} & \cdots & a_{1n} \\
0 & a_{22} & \cdots & a_{2,k-1} & a_{2k} & a_{2,k+1} & \cdots & a_{2n} \\
\vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & a_{k-1,k-1} & a_{k-1,k} & a_{k-1,k+1} & \cdots & a_{k-1,n} \\
0 & 0 & \cdots & 0 & \boxed{a_{kk}} & a_{k,k+1} & \cdots & a_{kn} \\
\vdots & & & & \boxed{a_{lk}} & & & \vdots \\
0 & 0 & \cdots & 0 & a_{nk} & a_{n,k+1} & \cdots & a_{nn}
\end{pmatrix}$$

We interchange the $k$th and $l$th rows, and then continue with the elimination.

### Theorem

*The next statements are equivalent:*

(i) *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ can be solved by Gaussian elimination with partial pivoting,*

(ii) $\det(\mathbf{A}) \neq 0$,

(iii) *the matrix $\mathbf{A}$ is invertible,*

(iv) *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ has a unique solution for all $\mathbf{b}$.*

**Proof.** We show that (i) and (ii) are equivalent. Suppose first that (i) holds. Let $\mathbf{A}^{(0)} := \mathbf{A}$, and let $\mathbf{A}^{(k)}$ be the coefficient matrix in the Gaussian elimination after the $k$th step. The properties of the determinants yield that

$$\det(\mathbf{A}^{(k)}) = \det(\mathbf{A}^{(k-1)})$$

if there was no row change in the $k$th step, and

$$\det(\mathbf{A}^{(k)}) = -\det(\mathbf{A}^{(k-1)})$$

if there was a row change. Since the Gaussian elimination can be performed by the assumption, the triangular system corresponding to the coefficient matrix $\mathbf{A}^{(n-1)}$ of the last step is solvable, therefore

$$\det(\mathbf{A}^{(n-1)}) \neq 0.$$

But this implies

$$\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(n-1)}) \neq 0.$$

Suppose now that the Gaussian elimination with partial pivoting terminates before the $k$th step. Then $a_{ik}^{(k-1)} = 0$ for all $i = k, \ldots, n$, i.e.,

$$\mathbf{A}^{(k-1)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{k,k+1} & \cdots & a_{1n} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2n}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \cdots & a_{k-1,n}^{(k-2)} \\
0 & 0 & \cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\
\vdots & \vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)}
\end{pmatrix}.$$

Hence

$$\det(\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\cdots a_{k-1,k-1}^{(k-2)}\det\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\ \vdots & \vdots & & \vdots \\ 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)} \end{pmatrix} = 0 = \det(\mathbf{A}). \qquad\square$$

### Example

Solve the previous system using Gaussian elimination with partial pivoting:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 2 & -1 & 1 & 5 & 2 \\ 2 & -1 & 0 & -3 & 8 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & -\frac{1}{3} & \frac{5}{3} & \frac{11}{3} & -\frac{4}{3} \\ 0 & -\frac{1}{3} & \frac{2}{3} & -\frac{13}{3} & \frac{14}{3} \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & -\frac{1}{3} & \frac{2}{3} & -\frac{13}{3} & \frac{14}{3} \\ 0 & -\frac{1}{3} & \frac{5}{3} & \frac{11}{3} & -\frac{4}{3} \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{5}{7} & -\frac{9}{2} & \frac{83}{14} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \\ 0 & 0 & \frac{5}{7} & -\frac{9}{2} & \frac{83}{14} \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & \frac{14}{3} & \frac{2}{3} & -\frac{7}{3} & \frac{53}{3} \\ 0 & 0 & \frac{12}{7} & \frac{7}{2} & -\frac{1}{14} \\ 0 & 0 & 0 & -\frac{143}{24} & \frac{143}{24} \end{pmatrix}.$$

The solution is $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$.

---

### 3.2. Gaussian Elimination, Pivoting Strategies — Complete Pivoting

*Complete pivoting* or *maximal pivoting*: before the $k$th step of the elimination we find the first row index $l$ and column index $m$ such that

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n,\ j = k, \ldots, n\}.$$

(The largest element is located in the $l$th row and in the $m$th column.) Then we interchange the $k$th and $l$th rows and the $k$th and $m$th columns, and we continue with the elimination step.

### Example

Consider again the system examined in earlier examples, and here we solve it using Gaussian elimination with complete pivoting (the variable associated with each column is recorded below it):

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ -2 & -2 & 2 & 1 & -11 \\ -4 & 2 & 3 & -1 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & -\frac{5}{2} & 1 & 2 & -15 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & \frac{1}{2} & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & -\frac{5}{2} & 1 & 2 & -15 \\ 0 & \frac{1}{2} & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & -1 & -\frac{5}{2} & 2 & -15 \\ 0 & 5 & \frac{1}{2} & -1 & 24 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim$$

### Example cont.

$$\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -\frac{23}{10} & \frac{11}{5} & -\frac{56}{5} \\ 0 & 0 & -\frac{1}{2} & -2 & 5 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -\frac{23}{10} & \frac{11}{5} & -\frac{56}{5} \\ 0 & 0 & 0 & -\frac{57}{23} & \frac{171}{23} \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix}$$

The corresponding triangular system is

$$\begin{array}{rcrcrcrcr}
4x_4 & + & 2x_3 & - & x_2 & + & 2x_1 & = & -8 \\
& & 5x_3 & + & x_2 & + & x_1 & = & 19 \\
& & & - & \frac{23}{10}x_2 & + & \frac{11}{5}x_1 & = & -\frac{56}{5} \\
& & & & & - & \frac{57}{23}x_1 & = & \frac{171}{23}
\end{array}$$

The result is again $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$.

---

A square matrix $A \in \mathbb{R}^{n \times n}$ is called *row diagonally dominant* or simply *diagonally dominant* if

$$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|, \qquad i = 1, \ldots, n.$$

### Example

The matrix

$$\begin{pmatrix} 5 & -1 & 2 \\ 2 & -10 & 1 \\ -2 & 0 & 3 \end{pmatrix}$$

is diagonally dominant, since

$$5 > 1 + 2$$
$$10 > 2 + 1$$
$$3 > 2 + 0.$$

### Theorem

*If $\mathbf{A} \in \mathbb{R}^{n \times n}$ is diagonally dominant, then $\mathbf{A}$ is invertible.*

**Proof.** Suppose that $\mathbf{A}$ is not invertible. Then the linear system $\mathbf{A}\mathbf{x} = \mathbf{0}$ has a nontrivial solution $\mathbf{x} \neq \mathbf{0}$. Let $k$ be such that

$$|x_k| = \max\{|x_i| : i = 1, \ldots, n\}.$$

Then $x_k \neq 0$. Since $\sum_{j=1}^{n} a_{ij}x_j = 0$ for all $i = 1, \ldots, n$, we get $a_{kk}x_k = -\sum_{j=1, j\neq k}^{n} a_{kj}x_j$. Then the triangle-inequality yields

$$|a_{kk}x_k| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}x_j|,$$

and so

$$|a_{kk}| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}| \frac{|x_j|}{|x_k|} \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}|,$$

which is a contradiction. $\qquad\square$

### Theorem

*If the matrix $\mathbf{A}$ is diagonally dominant, then the Gaussian elimination can be performed on the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ without pivoting, and the method is stable with respect to the rounding errors.*

---

The square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ is called *positive definite* (*negative definite*) if $\mathbf{A}$ is symmetric and

$$\mathbf{x}^T\mathbf{A}\mathbf{x} = \sum_{i=1}^{n}\sum_{j=1}^{n} a_{ij}x_i x_j > 0, \qquad \mathbf{x} \neq \mathbf{0},$$

($\mathbf{x}^T\mathbf{A}\mathbf{x} < 0$, respectively, for all $\mathbf{x} \neq \mathbf{0}$). The matrix $\mathbf{A}$ is called *positive semi-definite* (*negative semi-definite*) if $\mathbf{A}$ is symmetric and $\mathbf{x}^T\mathbf{A}\mathbf{x} \geq 0$ ($\mathbf{x}^T\mathbf{A}\mathbf{x} \leq 0$, respectively) for all $\mathbf{x}$.

### Example

The matrix

$$\mathbf{A} = \begin{pmatrix} 4 & -1 \\ -1 & 2 \end{pmatrix}$$

is positive definite since it is symmetric, and for $\mathbf{x} \neq \mathbf{0}$

$$\mathbf{x}^T\mathbf{A}\mathbf{x} = \begin{pmatrix} x_1 & x_2 \end{pmatrix}\begin{pmatrix} 4 & -1 \\ -1 & 2 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} x_1 & x_2 \end{pmatrix}\begin{pmatrix} 4x_1 - x_2 \\ -x_1 + 2x_2 \end{pmatrix}$$
$$= 4x_1^2 - 2x_1 x_2 + 2x_2^2 = 3x_1^2 + (x_1 - x_2)^2 + x_2^2 > 0.$$

### Theorem

*The symmetric matrix $\mathbf{A}$ is positive definite if and only if all of its upper left minors, the so-called principal minors are positive, i.e.,*

$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n.$$

$$\begin{pmatrix} a_{11} & a_{12} & a_{13} & a_{14} & a_{15} \\ a_{21} & a_{22} & a_{23} & a_{24} & a_{25} \\ a_{31} & a_{32} & a_{33} & a_{34} & a_{35} \\ a_{41} & a_{42} & a_{43} & a_{44} & a_{45} \\ a_{51} & a_{52} & a_{53} & a_{54} & a_{55} \end{pmatrix}$$

### Theorem

*Let $\mathbf{A}$ be a symmetric $n \times n$ matrix, $\mathbf{b} \in \mathbb{R}^n$. Then $\mathbf{A}$ is positive definite if and only if the Gaussian elimination can be performed for the system $\mathbf{A}\mathbf{x} = \mathbf{b}$ without pivoting, and the pivot elements are all positive. Moreover, the method is stable with respect to the rounding errors.*

---

## 3.3. Gauss–Jordan Elimination

A version of the Gaussian elimination is the *Gauss–Jordan elimination*, where we use the elimination steps of the Gaussian elimination to transform the coefficient matrix part of the augmented matrix to the identity matrix, i.e., the matrix

$$(\mathbf{A}, \mathbf{b})$$

is converted to the form

$$(\mathbf{I}, \mathbf{b}^{(n-1)}).$$

Then the solution of the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ is

$$\mathbf{x} = \mathbf{b}^{(n-1)}.$$

---

**Algorithm: Gauss–Jordan elimination**

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$
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

It can be checked that the *time complexity* of the Gauss-Jordan elimination is

$$n^3/2 + \mathcal{O}(n^2)$$

number of multiplications and divisions.

### Example

We apply the Gauss–Jordan elimination to the system examined before:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & -3 & -4 & 3 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & \frac{10}{3} & -\frac{5}{3} \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & \frac{14}{15} & -\frac{73}{15} \\ 0 & 3 & 0 & \frac{4}{5} & \frac{22}{5} \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 0 & -\frac{26}{5} & \frac{52}{5} \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 3 & 0 & 0 & 6 \\ 0 & 0 & -5 & 0 & -20 \\ 0 & 0 & 0 & -\frac{26}{5} & \frac{52}{5} \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}$$

The last column gives $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$.

---

We can combine pivoting strategies together with the Gauss–Jordan elimination.

### Example

Here we apply the Gauss–Jordan elimination with partial pivoting:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 0 & -\frac{3}{2} & -3 & -4 & -7 \\ 0 & \frac{3}{2} & 4 & -2 & 23 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 4 & \frac{20}{3} & -\frac{10}{3} \\ 0 & -\frac{3}{2} & -3 & -4 & -7 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim$$

### Example cont.

$$\begin{pmatrix} 2 & 0 & 4 & \frac{20}{3} & -\frac{10}{3} \\ 0 & -\frac{3}{2} & -3 & -4 & -7 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 1 & -6 & 16 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 0 & \frac{16}{3} & -\frac{50}{3} \\ 0 & -\frac{3}{2} & 0 & -3 & 3 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 0 & -\frac{19}{3} & \frac{38}{3} \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & 0 & 0 & 0 & -6 \\ 0 & -\frac{3}{2} & 0 & 0 & -3 \\ 0 & 0 & 6 & 0 & 24 \\ 0 & 0 & 0 & -\frac{19}{3} & \frac{38}{3} \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}$$

Therefore, the solution is $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$.

---

## 3.4. Tridiagonal Linear Systems

We say that a square matrix $(a_{ij})$ is *tridiagonal* if

$$a_{ij} = 0 \qquad \text{for all } |i - j| > 1,$$

i.e., nonzero numbers can appear only in the main diagonal and in the next diagonal above and under it. We will use the following notations:

$$\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\
0 & a_2 & d_3 & c_3 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & \\
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\
0 & 0 & \cdots & 0 & a_{n-1} & d_n
\end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}. \tag{5}$$

It is practical to store the elements of a tridiagonal matrix in three vectors $(a_i)$, $(d_i)$ and $(c_i)$, as it is used above. In this case only

$$3n - 2$$

storage area is needed for the coefficients. It is clear that applying the Gaussian elimination to the system (5) the elements $a_i$ below the main diagonal will become 0, and the numbers $c_i$ will not be changed during the elimination steps. We have to compute the new values of the variables $d_i$ and $b_i$ during the elimination. In the next algorithm we override the old values of the vectors $(d_i)$ and $(b_i)$ with the actual new ones.

---

**Algorithm: Gaussian elimination for tridiagonal linear systems**

INPUT: $a_i, c_i$ $(i = 1, \ldots, n-1)$, $d_i, b_i$ $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

*(elimination:)*
**for** $i = 2, \ldots, n$ **do**
$\qquad temp \leftarrow a_{i-1}/d_{i-1}$
$\qquad d_i \leftarrow d_i - temp \cdot c_{i-1}$
$\qquad b_i \leftarrow b_i - temp \cdot b_{i-1}$
**end do**
*(backward substitution:)*
$x_n \leftarrow b_n/d_n$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow (b_i - c_i x_{i+1})/d_i$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

We can check that the above method requires

$$5n - 4$$

number of multiplications and divisions. If we compare it with the number of operations of the Gaussian elimination, which is $n^3/3$ multiplications and divisions, then we can see that for a tridiagonal system this special algorithm should be applied. We know that if the tridiagonal matrix $\mathbf{A}$ is also diagonally dominant, then the above algorithm can be performed (without pivoting).

---

## 3.5. Simultaneous Linear Systems

Frequently we would like to solve so-called *simultaneous linear systems*, i.e., systems of the form

$$\mathbf{A}\mathbf{x} = \mathbf{b}^{(i)}, \qquad \text{for } i = 1, \ldots, m.$$

We can shortly write the above system as

$$\mathbf{A}\mathbf{X} = \mathbf{B},$$

where the $i$th columns of the $n \times m$ dimensional matrix

$$\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$$

is $\mathbf{b}^{(i)}$, and the $i$th column of the $n \times m$ dimensional matrix

$$\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$$

is $\mathbf{x}^{(i)}$, i.e., the solution of the system

$$\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}.$$

Since pivoting in the Gaussian or Gauss–Jordan elimination depends only on the coefficient matrix, it can be performed on the $n \times (n+m)$ dimensional augmented matrix. For example, if we perform the Gauss-Jordan elimination on the augmented matrix

$$(\mathbf{A}, \mathbf{B})$$

we get a matrix of the form

$$(\mathbf{I}, \mathbf{X}).$$

Then the solution of the simultaneous linear system $\mathbf{X}$ appears in the last $m$ columns of the augmented matrix.

---

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
