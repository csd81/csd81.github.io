## 3.3. Gaussian Elimination, Pivoting Strategies

**Example 3.22.** Consider the linear system

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
2x_1 & - & x_2 & + & 2x_3 & + & 4x_4 & = & -8 \\
-x_1 & + & 2x_2 & + & 3x_3 & - & 4x_4 & = & 27 \\
-2x_1 & + & x_2 & + & 4x_3 & - & 2x_4 & = & 28
\end{array} \tag{3.3}$$

With the help of the first equation, the variable $x_1$ can be eliminated from the second, third and fourth equations. We multiply the first equation by 2, $-1$ and $-2$, respectively, and subtract it from the second, third and fourth equations, respectively:

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\
& & & & x_3 & - & 6x_4 & = & 16 \\
& - & 3x_2 & & & - & 6x_4 & = & 6
\end{array} \tag{3.4}$$

The resulting system is equivalent to (3.3).

We associate the $4 \times 5$ dimensional matrix

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \tag{3.5}$$

to the system (3.3). Here we augmented the $4 \times 4$ coefficient matrix with a fifth column which contains the elements from the right hand side of the system. We will call this matrix as the *augmented matrix*. In the augmented matrix we can do the above elimination by multiplying the first row by 2, $-1$ and $-2$, respectively, and we subtract it from the second, third and fourth row, respectively. Then we get

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix}. \tag{3.6}$$

The variable $x_2$ is missing in the equation representing the third row, and we eliminate $x_2$ from the fourth row too with the help of the second row. We multiply the second row by $-1$, and subtract the result from the fourth row:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix}. \tag{3.7}$$

Finally, we multiply the third row by 6, and subtract it from the third row:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 0 & 38 & -76 \end{pmatrix}. \tag{3.8}$$

This augmented matrix describes the triangular system

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\
& & & & x_3 & - & 6x_4 & = & 16 \\
& & & & & & 38x_4 & = & -76
\end{array}$$

Solving it with the backward substitution we get $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$. The above elimination process is written shortly as

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 0 & 38 & -76 \end{pmatrix}. \qquad\square$$

Using the above method for the general $n$-dimensional linear system

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n
\end{array} \tag{3.9}$$

we get the *Gaussian elimination with backward substitution.* We put the coefficients and the right hand sides to the *augmented matrix*:

$$\tilde{\mathbf{A}}^{(0)} = (\mathbf{A}, \mathbf{b}) = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ a_{21} & a_{22} & \ldots & a_{2n} & a_{2,n+1} \\ \vdots & \vdots & & \vdots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} & a_{n,n+1} \end{pmatrix},$$

where $a_{i,n+1} := b_i$, $(i = 1, \ldots, n)$. Starting from the matrix $\tilde{\mathbf{A}}^{(0)}$ we obtain the sequence of matrices $\tilde{\mathbf{A}}^{(1)}, \tilde{\mathbf{A}}^{(2)}, \ldots, \tilde{\mathbf{A}}^{(n-1)}$ describing equivalent linear systems in the following way. Let

$$\tilde{\mathbf{A}}^{(1)} = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ 0 & a_{22}^{(1)} & \ldots & a_{2n}^{(1)} & a_{2,n+1}^{(1)} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & a_{n2}^{(1)} & \ldots & a_{nn}^{(1)} & a_{n,n+1}^{(1)} \end{pmatrix},$$

where $a_{ij}^{(1)} := a_{ij} - l_{i1}a_{1j}$, $l_{i1} := \dfrac{a_{i1}}{a_{11}}$, $i = 2, \ldots, n$, $j = 2, \ldots, n+1$, (assuming $a_{11} \neq 0$). If the matrices $\tilde{\mathbf{A}}^{(1)}, \ldots, \tilde{\mathbf{A}}^{(k-1)}$ are defined for some $k \leq n-1$, then let

$$\tilde{\mathbf{A}}^{(k)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k} & a_{1,k+1} & \cdots & a_{1,n} & a_{1,n+1} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2,n}^{(1)} & a_{2,n+1}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k,k}^{(k-1)} & a_{k,k+1}^{(k-1)} & \cdots & a_{k,n}^{(k-1)} & a_{k,n+1}^{(k-1)} \\
0 & 0 & \cdots & 0 & a_{k+1,k+1}^{(k)} & \cdots & a_{k+1,n}^{(k)} & a_{k+1,n+1}^{(k)} \\
\vdots & \vdots & & \vdots & \vdots & & \vdots & \vdots \\
0 & 0 & \cdots & 0 & a_{n,k+1}^{(k)} & \cdots & a_{n,n}^{(k)} & a_{n,n+1}^{(k)}
\end{pmatrix},$$

where $a_{ij}^{(k)} := a_{ij}^{(k-1)} - l_{ik}a_{kj}^{(k-1)}$, $l_{ik} := \dfrac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$, $i = k+1, \ldots, n$, $j = k+1, \ldots, n+1$. We perform these *elimination steps* for $k = 1, \ldots, n-1$. Finally, we solve the triangular system corresponding to the matrix $\tilde{\mathbf{A}}^{(n-1)}$ using the backward substitution method. The elements $a_{11}, a_{22}^{(1)}, \ldots, a_{nn}^{(n-1)}$ in the main diagonal of the last matrix of the Gaussian elimination are called *pivot elements.* Clearly, we can perform the Gaussian elimination if and only if all the pivot elements are nonzero.

If we perform the steps of the Gaussian elimination only on the coefficient matrix, the resulting matrices will be denoted by $\mathbf{A}^{(0)} := \mathbf{A}, \mathbf{A}^{(1)}, \ldots, \mathbf{A}^{(n-1)}$.

---

**Algorithm 3.23. Gaussian elimination**

---

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

The above algorithm is formulated so that in each step the new value of an element overwrites the same element of the previous matrix. We note that the zeros in the matrix are not computed and even they are not stored. Therefore, after the last elimination steps the elements under the main diagonal have no meaning. They can be filled by zero directly if the whole matrix is needed.

Next we compute the number of arithmetic operations of the Gaussian elimination:

| | multiplication/division | addition/subtraction |
|---|---|---|
| step 1 | $(n-1)(n+1)$ | $(n-1)n$ |
| step 2 | $(n-2)n$ | $(n-2)(n-1)$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| step $n-1$ | $1 \cdot 3$ | $1 \cdot 2$ |
| total: | $\sum_{i=1}^{n-1} i(i+2)$ | $\sum_{i=1}^{n-1} i(i+1)$ |

Using the identity $1^2 + 2^2 + \cdots + n^2 = \frac{1}{6}n(n+1)(2n+1)$ we can easily check that the total number of multiplications and divisions needed for the elimination steps is $n^3/3 + n^2/2 - 5n/6$, and the number of additions and subtractions is $(n^3 - n)/3$. Together with the backward substitution, $n^3/3 + n^2/2 - 5n/6 + n^2/2 + n/2 = n^3/3 + n^2 - n/3 = n^3/3 + \mathcal{O}(n^2)$ number of multiplications and divisions, and $(n^3 - n)/3 + n^2/2 - n/2 = n^3/3 + n^2/2 - 5n/6 = n^3/3 + \mathcal{O}(n^2)$ number of additions and subtractions are needed to perform the Gaussian elimination. Shortly we say that the time complexity of the Gaussian elimination is $n^3/3$ number of operations.

**Example 3.24.** Solve the system

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & & & - & 3x_4 & = & 8 \\
2x_1 & - & x_2 & + & x_3 & + & 5x_4 & = & 2 \\
-3x_1 & + & x_2 & + & x_3 & - & 2x_4 & = & -5 \\
2x_1 & + & 4x_2 & & & - & x_4 & = & 21
\end{array}$$

by Gaussian elimination. After performing the first step of the elimination we get

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix}.$$

Since the pivot element of the second row is 0, the Algorithm 3.23 cannot be continued. On the other hand, the system has a unique solution: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$. But if we change the second and third rows of the previous augmented matrix, the corresponding linear system is the same, and the elimination can be continued:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 10 & -63 & 83 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 0 & -143 & 143 \end{pmatrix},$$

which yields the solution. $\qquad\square$

**Example 3.25.** Solve the linear system

$$\begin{array}{rcrcr}
0.0002x_1 & - & 30.5x_2 & = & -60.99 \\
5.060x_1 & - & 1.05x_2 & = & 250.9
\end{array}$$

using Gaussian elimination and 4-digit arithmetic. Following Algorithm 3.23, first we compute the factor $l_{21} = 5.060/0.0002 = 25300$ (rounding to 4 significant digits). Then by multiplying the first equation by $l_{21}$ and subtracting it from the second row we get

$$\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 5.06 & -1.05 & 250.9 \end{pmatrix} \sim \begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 0 & 771700 & 1543000 \end{pmatrix}.$$

We note that we do not compute the first element of the second row by Algorithm 3.23, it will be 0 without any calculation.) Solving it we get the numerical solutions $\tilde{x}_1 = -100.0$ and $\tilde{x}_2 = 1.999$. We can check that the exact solution of the system is $x_1 = 50$ and $x_2 = 2$. Therefore, the relative errors of the numerical solutions are 300% and 0.05%, respectively. Note that the relative error of the first variable is huge.

Repeat the calculation for the system where we interchange the two equations:

$$\begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0.0002 & -30.5 & -60.99 \end{pmatrix} \sim \begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0 & -30.5 & -61.0 \end{pmatrix}.$$

This gives the numerical values $x_1 = 50.00$ and $x_2 = 2.000$, which are identical to the exact solutions.

What is the difference in between the two computations? In the first case, in order to compute $l_{21}$ we needed to divide by a small number (0.0002), which gave us the increase of the rounding error. In the second case we performed the division by 5.06 in the computation of $l_{21}$, and we did not observe any error in the final result. $\qquad\square$

### Partial Pivoting

The last two examples show that sometimes it is necessary, and in many cases it is useful to modify Algorithm 3.23. One of the most popular modification is the Gaussian elimination with *partial pivoting* (or *maximal column pivoting*). Here, before the $k$th step of the elimination, we select the element with the largest magnitude in the $k$th column in and under the main diagonal, i.e., let

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}.$$

(An element with the largest magnitude is in the $l$th row. If there are several elements with the same largest magnitude, then $l$ denotes the first possible row index.) We interchange the $k$th and $l$th rows, and then continue with the elimination. This will get around the problems of Examples 3.24 and 3.25. Indeed, if $a_{kk}^{(k-1)} = 0$, then after the row change a nonzero element is moved into this position (if there is a nonzero element below $a_{kk}^{(k-1)}$). Furthermore, the row change guarantees that the division will be performed by the element with a largest magnitude which helps to reduce the rounding error in the computation.

**Theorem 3.26.** *The next statements are equivalent:*

(i) *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ can be solved by Gaussian elimination with partial pivoting,*

(ii) $\det(\mathbf{A}) \neq 0$,

(iii) *the matrix $\mathbf{A}$ is invertible,*

(iv) *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ has a unique solution for all $\mathbf{b}$.*

**Proof.** It is known from linear algebra that statements (ii), (iii) and (iv) are equivalent (see Theorem 3.2). Now we show that (i) and (ii) are equivalent.

Suppose first that (i) holds. Let $\mathbf{A}^{(0)} := \mathbf{A}$, and let $\mathbf{A}^{(k)}$ be the coefficient matrix in the Gaussian elimination after the $k$th step. The properties of the determinants yield that $\det(\mathbf{A}^{(k)}) = \det(\mathbf{A}^{(k-1)})$ if there was no row change in the $k$th step, and $\det(\mathbf{A}^{(k)}) = -\det(\mathbf{A}^{(k-1)})$ if there was a row change. Since the Gaussian elimination can be performed by the assumption, the triangular system corresponding to the coefficient matrix $\mathbf{A}^{(n-1)}$ of the last step is solvable, therefore, $\det(\mathbf{A}^{(n-1)}) \neq 0$. But this implies $\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(n-1)}) \neq 0$.

We show that if the Gaussian elimination with partial pivoting terminates before the $k$th step, then $\det(\mathbf{A}) = 0$. The $k$th step cannot be performed if and only if $a_{ik}^{(k-1)} = 0$ for all $i = k, \ldots, n$, i.e.,

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

$$\det(\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\cdots a_{k-1,k-1}^{(k-2)}\det\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\ \vdots & \vdots & & \vdots \\ 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)} \end{pmatrix} = 0,$$

and so $\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(k-1)}) = 0$. $\qquad\square$

**Example 3.27.** Consider again the system examined in Example 3.24, and solve it using Gaussian elimination with partial pivoting. We get the following sequence of the augmented matrices:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 2 & -1 & 1 & 5 & 2 \\ 2 & -1 & 0 & -3 & 8 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 5/7 & -9/2 & 83/14 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \\ 0 & 0 & 5/7 & -9/2 & 83/14 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \\ 0 & 0 & 0 & -143/24 & 143/24 \end{pmatrix}.$$

We can observe that there was a row change before the first and third elimination steps. The solution of the triangular system is $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ and $x_4 = -1$. $\qquad\square$

Suppose we perform the Gaussian elimination with partial pivoting on the coefficient matrix $\mathbf{A}$, and we collect the row changes performed during this algorithm. It is easy to see that if we perform all these row changes first on the matrix $\mathbf{A}$ without the elimination steps, then the Gaussian elimination can be performed on this matrix, and the numerical result will be the same as for the Gaussian elimination with partial pivoting performed for the original system. According to Theorem 3.7 the row change can be performed by multiplying the matrix $\mathbf{A}$ by a permutation matrix $\mathbf{P}$ from the left. Therefore, Theorem 3.26 has the following consequence.

**Theorem 3.28.** *If $\det(\mathbf{A}) \neq 0$, then there exists a permutation matrix $\mathbf{P}$ such that the linear system $\mathbf{P}\mathbf{A}\mathbf{x} = \mathbf{P}\mathbf{b}$ can be solved by Gaussian elimination (without row changes) for all vector $\mathbf{b}$.*

### Complete Pivoting

To further reduce the effect of rounding we can use the following modification of the partial pivoting, which is called *complete pivoting* or *maximal pivoting*: before the $k$th step of the elimination we find the first row index $l$ and column index $m$ such that

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n,\ j = k, \ldots, n\}.$$

(That is the element with largest magnitude is located in the $l$th row and in the $m$th column.) Then we interchange the $k$th and $l$th rows and the $k$th and $m$th columns. We have to note that the first $n$ columns of the augmented matrix of the system contains coefficients of the variables. At the beginning of the algorithm the first column contains the coefficients of $x_1$, the second one contains those of $x_2$, and so on, the $n$th column contains the coefficients of $x_n$. Therefore, when we interchange columns, we have to record the changes in the order of the variables too. Then we continue with the elimination step, as in the Gaussian elimination.

The disadvantage of this method is that it requires more comparisons than the partial pivoting, so it slows down the running of the algorithm.

**Example 3.29.** Consider again the system examined in Example 3.22, and here we solve it using Gaussian elimination with complete pivoting:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ -2 & -2 & 2 & 1 & -11 \\ -4 & 2 & 3 & -1 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & -5/2 & 1 & 2 & -15 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & 1/2 & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & -5/2 & 1 & 2 & -15 \\ 0 & 1/2 & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & -1 & -5/2 & 2 & -15 \\ 0 & 5 & 1/2 & -1 & 24 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -23/10 & 11/5 & -56/5 \\ 0 & 0 & -1/2 & -2 & 5 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -23/10 & 11/5 & -56/5 \\ 0 & 0 & 0 & -57/23 & 171/23 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix}.$$

In order to follow the effect of the column changes, we augmented the matrices with an extra row where we record the variable whose coefficients are listed in that particular column. Here before the first elimination step, we interchanged the first and second row and the first and fourth columns, since 4 was the element with the largest magnitude in the coefficients. (Another option would be to interchange the first and third rows and then the first and fourth columns; or to interchange the first and fourth rows and the first and third columns.) Before the second elimination step, we interchanged the second and third rows and the second and third columns. And before the third elimination step there were no row or column changes. Finally, we solved the triangular system. The fourth equation gave us the value of the variable $x_1$, and the third equation can be solved for $x_2$, the second equation implied the value of $x_3$, and finally, from the first equation we got the solution for $x_4$. The result is again $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ and $x_4 = -2$.

We comment that the advantage of the partial and complete pivoting appears when we do the computations using floating point arithmetic. $\qquad\square$

### Scaled Partial Pivoting

Numerical observations indicate that if the order of magnitude of the elements in the coefficient matrix is significantly different, then the effect of rounding can be large (see Example 3.25). Therefore, it is usual to multiply the rows of the system with a nonzero real to equalize the magnitude of the coefficients. If we combine it with the partial pivoting, we get a technique called *scaled partial pivoting*: We are looking for positive factors $d_1, \ldots, d_n > 0$ so that the elements of the matrix $\mathbf{B} := \mathbf{D}\mathbf{A}$ be of the same magnitude, where $\mathbf{D} = \mathrm{diag}(d_1, \ldots, d_n)$. Then, instead of solving the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$, we solve the equivalent linear system $\mathbf{D}\mathbf{A}\mathbf{x} = \mathbf{D}\mathbf{b}$ numerically. One simple strategy is to select $\mathbf{D}$ so that $\max\{|b_{ij}| : 1 \leq j \leq n\} \approx 1$ be satisfied for all $i = 1, \ldots, n$. We can define $d_i := 1/s_i$ where $s_i := \max\{|a_{ij}| : 1 \leq j \leq n\}$. The problem here is that the division may introduce further rounding error in the calculation. Let $\beta$ be the base of the number representation on the computer, and let $r_i$ be the smallest integer so that $\beta^{r_i} \geq s_i$, and define $b_{ij} := a_{ij}/\beta^{r_i}$ $(i, j = 1, \ldots, n)$. Then the division will not contain rounding error, and $1/\beta < \max_{1 \leq j \leq n} |b_{ij}| \leq 1$ holds for all $i = 1, \ldots, n$.

The following result can be proved.

**Theorem 3.30.** *Suppose we perform a scaled partial pivoting on the coefficient matrix $\mathbf{A}$ with the matrix $\mathbf{D} = \mathrm{diag}(d_1, \ldots, d_n)$ which do not introduce rounding errors (e.g., using $\beta$ powers). Then if partial or complete pivoting on the matrix $\mathbf{D}\mathbf{A}$ yields the same row (and column) changes as the same pivoting on the matrix $\mathbf{A}$, then the numerical solutions of the systems $\mathbf{A}\mathbf{x} = \mathbf{b}$ and $\mathbf{D}\mathbf{A}\mathbf{x} = \mathbf{D}\mathbf{b}$ with Gaussian elimination using pivoting will be identical.*

The previous result shows that the scaling of the equations effects only the selection of the pivot elements, not the numerical result. So it is popular to use the scaling to select the pivot elements, but we do not perform the the scaling of the rows. This variant of the scaled pivoting is called *partial pivoting with implicit scaling.* The result is one of the most popular algorithms to solve linear systems.

---

**Algorithm 3.31. Gaussian elimination with partial pivoting and implicit scaling**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$ - augmented matrix
OUTPUT: $x_1, \ldots, x_n$

*(computation of the scale factors:)*
**for** $i = 1, \ldots, n$ **do**
$\qquad s_i \leftarrow \max\limits_{1 \leq j \leq n} |a_{ij}|$
**end do**
*(elimination:)*
**for** $k = 1, \ldots, n-1$ **do**
$\qquad$let $l$ be the smallest row index for which $\dfrac{|a_{lk}|}{s_l} = \max\limits_{k \leq i \leq n} \dfrac{|a_{ik}|}{s_i}$
$\qquad$interchange the $k$th and $l$th rows of the matrix $\mathbf{A}$
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

We note that in our methods many times we needed to interchange two rows of a matrix $\mathbf{A} = (a_{ij})$. This requires a lot of operation, therefore, instead of it we can do the following trick in programming: We store the elements of the matrix in a two-dimensional array $a[i, j]$. We define an array $m[i]$ with initial values $m[i] = i$, $(i = 1, \ldots, n)$. If we interchange the $k$th and $l$th rows, we swap the $k$th and $l$th elements of the array $m[\cdot]$. When we have to refer to an element $a_{ij}$ of the matrix $\mathbf{A}$, we can use the value $a[m[i], j]$.

**Theorem 3.32.** *If the matrix $\mathbf{A}$ is diagonally dominant, then the Gaussian elimination can be performed on the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ without pivoting, and the method is stable with respect to the rounding errors.*

**Proof.** First we note that if the matrix $\mathbf{A}$ is diagonally dominant, then Theorem 3.8 implies that the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ has a unique solution.

We show that each of the coefficient matrices $\mathbf{A}^{(1)}, \mathbf{A}^{(2)}, \ldots, \mathbf{A}^{(n-1)}$ of the elimination steps is also diagonally dominant. Since $\mathbf{A}^{(0)} = \mathbf{A}$ is diagonally dominant, it follows $|a_{11}| > \sum_{j=2}^{n} |a_{1j}|$, and hence $a_{11} \neq 0$. Therefore, the matrix $\mathbf{A}^{(1)}$ is well-defined. We show that $\mathbf{A}^{(1)}$ is diagonally dominant. Since the first row of $\mathbf{A}^{(1)}$ is identical to that of $\mathbf{A}$, it is diagonally dominant. Let $1 < i \leq n$. Using $a_{ij}^{(1)} = a_{ij} - \frac{a_{i1}}{a_{11}}a_{1j}$, $(j = 2, \ldots, n)$, and $a_{i1}^{(1)} = 0$, we get

$$\sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{ij}^{(1)}| = \sum_{\substack{j=2 \\ j \neq i}}^{n} \left|a_{ij} - \frac{a_{i1}}{a_{11}}a_{1j}\right| \leq \sum_{\substack{j=2 \\ j \neq i}}^{n} \left(|a_{ij}| + \frac{|a_{i1}|}{|a_{11}|}|a_{1j}|\right) = \sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{ij}| + \frac{|a_{i1}|}{|a_{11}|}\sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{1j}|.$$

Since the $i$th row of $\mathbf{A}$ is also diagonally dominant, it follows

$$\begin{aligned}
\sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{ij}^{(1)}| &< |a_{ii}| - |a_{i1}| + \frac{|a_{i1}|}{|a_{11}|}(|a_{11}| - |a_{1i}|) \\
&= |a_{ii}| - \frac{|a_{i1}|}{|a_{11}|}|a_{1i}| \\
&\leq \left|a_{ii} - \frac{a_{i1}}{a_{11}}a_{1i}\right| \\
&= |a_{ii}^{(1)}|.
\end{aligned}$$

This shows that all the rows of $\mathbf{A}^{(1)}$ are diagonally dominant, hence the matrix is diagonally dominant.

Similar argument shows that all matrices $\mathbf{A}^{(2)}, \ldots, \mathbf{A}^{(n-1)}$ are diagonally dominant. The numerical stability is not shown here. $\qquad\square$

We present the next result without its proof.

**Theorem 3.33.** *Let $\mathbf{A}$ be a symmetric $n \times n$ matrix, $\mathbf{b} \in \mathbb{R}^n$. Then $\mathbf{A}$ is positive definite if and only if the Gaussian elimination can be performed for the system $\mathbf{A}\mathbf{x} = \mathbf{b}$ without pivoting, and the pivot elements are all positive. Moreover, in this case the method is stable with respect to the rounding errors.*

### Exercises

1. Solve the following linear systems using Gaussian elimination

   (i) without pivoting,

   (ii) with partial pivoting,

   (iii) with complete pivoting,

   (iv) with scaled partial pivoting:

   (a)
   $$\begin{array}{rcrcrcr}
   2x_1 & + & 2x_2 & - & 2x_3 & = & -4 \\
   -x_1 & + & 3x_2 & & & = & -11 \\
   4x_1 & + & 2x_2 & - & 3x_3 & = & -1
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcrcr}
   -x_1 & - & 3x_2 & & & + & 2x_4 & = & 10 \\
   -2x_1 & + & 3x_2 & & & + & x_4 & = & 8 \\
   4x_1 & + & x_2 & - & x_3 & - & 3x_4 & = & -21 \\
   2x_1 & + & x_2 & - & x_3 & + & 3x_4 & = & 7
   \end{array}$$

2. Use 4-digit arithmetic in the calculations, and apply the question of the previous exercise for the following systems:

   (a)
   $$\begin{array}{rcrcrcr}
   1.03x_1 & - & 1.1x_2 & + & 8x_3 & = & -9.06 \\
   -4.1x_1 & + & 10.1x_2 & - & 6x_3 & = & 106.2 \\
   2.11x_1 & - & 4.2x_2 & + & 12x_3 & = & -40.22
   \end{array}$$
   (exact solution: $(-2, 10, 0.5)$),

   (b)
   $$\begin{array}{rcrcrcr}
   x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 20 \\
   \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 14 \\
   \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 11
   \end{array}$$
   (exact solution: $(6, -12, 60)$).

3. Prove Theorem 3.30.

4. Prove Theorem 3.33 (except the statement related to the stability).

