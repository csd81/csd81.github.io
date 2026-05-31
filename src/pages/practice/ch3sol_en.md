# Chapter 3

# Linear Systems

In this chapter we discuss solution techniques of linear algebraic systems using direct methods and related problems of linear algebra. We introduce the Gaussian and Gauss-Jordan eliminations and their variants, and its application for the matrix inversion.

## 3.1. Review of Linear Algebra

In this section we review some notations, notions and statements of linear algebra. In the sequel, if we do not say otherwise, $\mathbf{A} = (a_{ij})$ is an $n \times n$ matrix, $\mathbf{x}$ is an $n$-dimensional column vector. The set of all real $n \times n$ dimensional matrices is denoted by $\mathbb{R}^{n \times n}$. Similarly, $\mathbb{C}^{n \times n}$ is the set of all $n \times n$ matrices with complex entries. The determinant of the matrix $\mathbf{A}$ is denoted by $\det(\mathbf{A})$, the $n \times n$ dimensional identity matrix is $\mathbf{I}$. The transpose of a matrix $\mathbf{A}$ or a vector $\mathbf{x}$ is denoted by $\mathbf{A}^T$ and $\mathbf{x}^T$, respectively. The diagonal matrix with elements $a_1, a_2, \ldots, a_n$ in the main diagonal is denoted by $\mathrm{diag}(a_1, a_2, \ldots, a_n)$.

The $n \times n$ matrix $\mathbf{A}^{-1}$ is called the *inverse* of the $n \times n$ matrix $\mathbf{A}$ if $\mathbf{A}\mathbf{A}^{-1} = \mathbf{A}^{-1}\mathbf{A} = \mathbf{I}$. A square matrix is *invertible* or *nonsingular* if its inverse exists. A square matrix $\mathbf{A}$ is called *singular* if it has no inverse.

The next theorem summarizes the basic properties of the determinant.

**Theorem 3.1.** *Let $\mathbf{A}, \mathbf{B}$ be $n \times n$ matrices. Then*

1. $\det(\mathbf{A}) = 0$ *if each element of a row (or column) in $\mathbf{A}$ is equal to 0;*

2. $\det(\mathbf{A}) = 0$ *if two rows (columns) of $\mathbf{A}$ are equal;*

3. $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})$;

4. $\det(\mathbf{A}^T) = \det(\mathbf{A})$.

5. *If $\mathbf{A}$ is invertible, then $\det(\mathbf{A}^{-1}) = 1/\det(\mathbf{A})$.*

6. *If $\mathbf{B}$ is obtained from $\mathbf{A}$ by multiplying one of its row (column) by a constant $c$, then $\det(\mathbf{B}) = c\det(\mathbf{A})$.*

7. *If $\mathbf{B}$ is obtained from $\mathbf{A}$ by swapping two rows (columns), then $\det(\mathbf{B}) = -\det(\mathbf{A})$.*

8. *If $\mathbf{B}$ is obtained from $\mathbf{A}$ by multiplying one of its row (column) by a constant $c$, and adding the result to another row (column), then $\det(\mathbf{B}) = \det(\mathbf{A})$.*

9. *Let $\mathbf{A}_{ij}$ denote the $(n-1) \times (n-1)$ matrix which we get from $\mathbf{A}$ by omitting its $i$th row and $j$th column. Then we have*

$$\det(\mathbf{A}) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \det(\mathbf{A}_{ij}),$$

*and*

$$\det(\mathbf{A}) = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} \det(\mathbf{A}_{ij}).$$

**Theorem 3.2.** *Let $\mathbf{A} \in \mathbb{R}^{n \times n}$, $\mathbf{b} \in \mathbb{R}^n$. The following statements are equivalent:*

1. $\det(\mathbf{A}) \neq 0$,

2. *the matrix $\mathbf{A}$ is invertible,*

3. *the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ has a unique solution for any vector $\mathbf{b}$.*

**Theorem 3.3.** *The linear system $\mathbf{A}\mathbf{x} = \mathbf{0}$ has nontrivial (nonzero) solution if and only if $\mathbf{A}$ is singular, i.e., $\det(\mathbf{A}) = 0$.*

**Theorem 3.4.** *If $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ are both invertible, then $\mathbf{A}\mathbf{B}$ is also invertible, and $(\mathbf{A}\mathbf{B})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$.*

The square matrix $\mathbf{A}$ is *upper (lower) triangular* if $a_{ij} = 0$ for all $i > j$ ($i < j$), i.e., all elements below (above) the main diagonal are 0.

**Theorem 3.5.** *For a triangular matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ it follows $\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$.*

**Theorem 3.6.** *The product of lower (upper) triangular matrices is lower (upper) triangular. The inverse of a lower (upper) triangular matrix is lower (upper) triangular.*

A square matrix $P$ is called *permutation matrix* if it is obtained from the identity matrix by interchanging its rows (or columns). Other words, in a permutation matrix each row and column contains exactly one 1, all the other elements are 0. The next theorem claims that the multiplication by a permutation matrix is equivalent to interchanging rows or columns of a matrix.

**Theorem 3.7.** *Let $k_1, \ldots, k_n$ be a permutation of the integers $1, \ldots, n$, and let $\mathbf{P} \in \mathbb{R}^{n \times n}$ be the permutation matrix which we get from the identity matrix by moving its 1st row to the $k_1$-th row, $\ldots$, the $n$th row to its $k_n$-th row. Let $\mathbf{A} \in \mathbb{R}^{n \times n}$. Then the matrix $\mathbf{P}\mathbf{A}$ ($\mathbf{A}\mathbf{P}$) can be obtained from $\mathbf{A}$ so that its 1st row (columns) is moved to the $k_1$-th row (column), $\ldots$, its $n$th row (columns) is moved to the $k_n$-th row (column).*

A square matrix $A \in \mathbb{R}^{n \times n}$ is called *row diagonally dominant* or simply *diagonally dominant* if

$$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|, \qquad i = 1, \ldots, n.$$

Similarly, the matrix $\mathbf{A}$ is called *column diagonally dominant* if $\mathbf{A}^T$ is diagonally dominant, i.e.,

$$|a_{jj}| > \sum_{\substack{i=1 \\ i \neq j}}^{n} |a_{ij}|, \qquad j = 1, \ldots, n.$$

**Theorem 3.8.** *If $\mathbf{A} \in \mathbb{R}^{n \times n}$ is diagonally dominant, then $\mathbf{A}$ is invertible.*

**Proof.** Suppose that $\mathbf{A}$ is not invertible. Then the linear system $\mathbf{A}\mathbf{x} = \mathbf{0}$ has a nontrivial solution $\mathbf{x} \neq \mathbf{0}$. Let $k$ be such that $|x_k| = \max\{|x_i| : i = 1, \ldots, n\}$. Then $x_k \neq 0$. Since $\sum_{j=1}^{n} a_{ij}x_j = 0$ for all $i = 1, \ldots, n$, we get $a_{kk}x_k = -\sum_{j=1, j\neq k}^{n} a_{kj}x_j$. Then the triangle-inequality yields $|a_{kk}x_k| \leq \sum_{j=1, j\neq k}^{n} |a_{kj}x_j|$, and so

$$|a_{kk}| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}| \frac{|x_j|}{|x_k|} \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}|,$$

which is a contradiction. $\qquad\square$

The square matrix $\mathbf{A}$ is called *positive definite* (*negative definite*) if $\mathbf{A}$ is symmetric and $\mathbf{x}^T\mathbf{A}\mathbf{x} > 0$ ($\mathbf{x}^T\mathbf{A}\mathbf{x} < 0$, respectively) for all $\mathbf{x} \neq \mathbf{0}$. The matrix $\mathbf{A}$ is called *positive semi-definite* (*negative semi-definite*) if $\mathbf{A}$ is symmetric and $\mathbf{x}^T\mathbf{A}\mathbf{x} \geq 0$ ($\mathbf{x}^T\mathbf{A}\mathbf{x} \leq 0$, respectively) for all $\mathbf{x}$.

**Theorem 3.9.** *If the square matrix $\mathbf{A}$ is positive definite, then*

1. $\mathbf{A}$ *is invertible,*

2. $a_{ii} > 0$ *for $i = 1, \ldots, n$.*

**Theorem 3.10.** *The symmetric matrix $\mathbf{A}$ is positive definite if and only if all of its upper left minors, the so-called principal minors are positive, i.e.,*

$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n.$$

A square matrix $\mathbf{A}$ is *orthogonal* if $\mathbf{A}\mathbf{A}^T = \mathbf{A}^T\mathbf{A} = \mathbf{I}$, i.e., $\mathbf{A}$ is invertible and $\mathbf{A}^{-1} = \mathbf{A}^T$.

**Theorem 3.11.** *The product of orthogonal matrices is orthogonal.*

The complex number $\lambda \in \mathbb{C}$ is an *eigenvalue* of the square matrix $\mathbf{A}$ if the linear system

$$\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$$

has a nontrivial ($\mathbf{x} \neq \mathbf{0}$) solution. Its nontrivial solution $\mathbf{x}$ is called the *eigenvector* of the matrix $\mathbf{A}$ corresponding to the eigenvalue $\lambda$.

**Theorem 3.12.** *The $n \times n$ matrix $\mathbf{A}$ has $n$ eigenvalues, which are solutions of the $n$th-degree algebraic equation*

$$\det(\mathbf{A} - \lambda\mathbf{I}) = 0,$$

*the so-called* characteristic equation.

**Theorem 3.13.** *Let $\lambda_1, \lambda_2, \ldots, \lambda_n$ be the eigenvalues of the $n \times n$ matrix $\mathbf{A}$. Then*

1. $\det(\mathbf{A}) = \lambda_1\lambda_2\cdots\lambda_n$;

2. $\mathbf{A}$ *is invertible if and only if $\lambda_i \neq 0$ for all $i = 1, 2, \ldots, n$;*

3. *if $\mathbf{A}$ is invertible, then the eigenvalues of $\mathbf{A}^{-1}$ are $1/\lambda_1, 1/\lambda_2, \ldots, 1/\lambda_n$;*

4. *the eigenvalues of the matrix $\mathbf{A}^k$ are the numbers $\lambda_1^k, \lambda_2^k, \ldots, \lambda_n^k$.*

**Theorem 3.14.** *The eigenvalues of a triangular matrix $\mathbf{A}$ are the diagonal elements $a_{11}, a_{22}, \ldots, a_{nn}$.*

Let $\mathbf{A}$ and $\mathbf{B}$ be square matrices of the same dimension. We say that $\mathbf{A}$ and $\mathbf{B}$ are *similar* if there exists an invertible matrix $\mathbf{P}$ such that $\mathbf{A} = \mathbf{P}^{-1}\mathbf{B}\mathbf{P}$. We comment that then $\mathbf{B} = \mathbf{P}\mathbf{A}\mathbf{P}^{-1}$, so the similarity is a symmetric property. The linear map defined by $\mathbf{A} \mapsto \mathbf{P}^{-1}\mathbf{A}\mathbf{P}$ is called *similarity transformation.*

**Theorem 3.15.** *Eigenvalues of similar matrices are identical.*

**Proof.** Let $\mathbf{A} = \mathbf{P}^{-1}\mathbf{B}\mathbf{P}$. Then the properties of the determinant yield

$$\det(\mathbf{A} - \lambda\mathbf{I}) = \det(\mathbf{P}^{-1}\mathbf{B}\mathbf{P} - \lambda\mathbf{I}) = \det(\mathbf{P}^{-1})\det(\mathbf{B} - \lambda\mathbf{I})\det(\mathbf{P}) = \det(\mathbf{B} - \lambda\mathbf{I}),$$

which implies the statement. $\qquad\square$

The number $\rho(\mathbf{A}) := \max\{|\lambda| : \lambda \text{ is an eigenvalue of } \mathbf{A}\}$ is called the *spectral radius* of $\mathbf{A}$.

**Theorem 3.16.** *Let $k$ be a positive integer, and let $\|\cdot\|$ be a matrix norm. Then*

1. $\rho(\mathbf{A}^k) = (\rho(\mathbf{A}))^k$,

2. $\rho(\mathbf{A}) \leq \|\mathbf{A}\|$.

**Theorem 3.17.** *For every square matrix $\mathbf{A}$ and a positive real $\varepsilon > 0$ there exists a matrix norm $\|\cdot\|$ such that $\|\mathbf{A}\| \leq \rho(\mathbf{A}) + \varepsilon$.*

**Theorem 3.18.** *For any square matrix $\mathbf{A}$ it follows $\|\mathbf{A}\|_2 = \sqrt{\rho(\mathbf{A}^T\mathbf{A})}$. If $\mathbf{A}$ is symmetric, then $\|\mathbf{A}\|_2 = \rho(\mathbf{A})$.*

Let $a_1, \ldots, a_n$ be complex numbers. The determinant

$$\det\begin{pmatrix} 1 & a_1 & a_1^2 & \cdots & a_1^{n-1} \\ 1 & a_2 & a_2^2 & \cdots & a_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & a_n & a_n^2 & \cdots & a_n^{n-1} \end{pmatrix} \tag{3.1}$$

is called *Vandermonde determinant.*

**Theorem 3.19.** *The Vandermonde determinant (3.1) is nonzero if and only if the numbers $a_1, \ldots, a_n$ are pairwise distinct.*

### Exercises

1. Determine the possible values of the parameters $\alpha$ and $\beta$ so that the matrix

   $$\mathbf{A} = \begin{pmatrix} \alpha & 1 & 0 \\ \beta & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$$

   be

   (a) singular,

   (b) diagonally dominant,

   (c) symmetric,

   (d) positive definite.

2. Prove that if $\mathbf{A}$ and $\mathbf{B}$ are $n \times n$ positive definite matrices, then

   (a) $\mathbf{A}^T$,

   (b) $\mathbf{A} + \mathbf{B}$,

   (c) $\mathbf{A}^2$

   are also positive definite.

3. Prove Theorem 3.6.

4. Prove Theorem 3.7.

5. Prove Theorem 3.9.

6. Prove Theorem 3.11.

7. Prove Theorem 3.12.

8. Prove Theorem 3.14.

9. Prove Theorem 3.19. (Hint: In the determinant (3.1) substitute $a_1$ by $x$. Show that the resulting determinant is a polynomial of degree $n-1$ of $x$. Find $n-1$ distinct roots of this polynomial.)

10. Show that the value of the Vandermonde determinant (3.1) is

    $$\prod_{i>j}(a_i - a_j).$$

    (hint: Consider the proof of the previous problem.)

## 3.2. Triangular Systems

**Example 3.20.** Solve the linear system

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

Solving the fourth equation for $x_4$ we get $x_4 = 4$. Substituting it to the third equation we get $x_3 = (-2 + x_4)/2 = 1$. Then the second equation yields $x_2 = (13 + x_3 - 2x_4)/3 = 2$. Finally, from the first equation we have $x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1$. $\qquad\square$

We can generalize the method used in the previous example to solve the upper triangular $n$-dimensional linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$, i.e., a linear system of the form

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n.
\end{array} \tag{3.2}$$

We formulate the method of *backward substitution* in the following algorithm.

---

**Algorithm 3.21. Backward substitution to solve a triangular system**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

The method of backward substitution can be performed if an only if $a_{ii} \neq 0$ for all $i = 1, \ldots, n$. Since $\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$, it follows that it can be performed if and only if the system (3.2) has a unique solution, i.e., $\det(\mathbf{A}) \neq 0$.

In order to determine the time complexity of the algorithm we count the number of arithmetic operations:

| | multiplication/division | addition/subtraction |
|---|---|---|
| step 1: | 1 | 0 |
| step 2: | 2 | 1 |
| $\vdots$ | $\vdots$ | $\vdots$ |
| step $n$: | $n$ | $n-1$ |

Therefore, $1 + 2 + \cdots + n = n(n+1)/2$ multiplications and divisions, and $1 + 2 + \cdots + n - 1 = (n-1)n/2$ additions and subtractions are needed to perform the algorithm. We introduce the notation $\mathcal{O}(n^k)$ for a polynomial of order at most $k$. With this notation we have that the number of multiplications/divisions is $n^2/2 + \mathcal{O}(n)$, and similarly, the number of additions/subtractions are needed for the algorithm is $n^2/2 + \mathcal{O}(n)$. This notation "hides" the lower order terms, which is useful, since the leading term determines the magnitude of the formula for large $n$.

### Exercises

1. Solve the following triangular systems:

   (a)
   $$\begin{array}{rcrcrcrcr}
   3x_1 & + & x_2 & - & x_3 & + & 2x_4 & = & -4 \\
   & & 4x_2 & - & 2x_3 & + & x_4 & = & 5 \\
   & & & & 6x_3 & - & 2x_4 & = & -7 \\
   & & & & & & 2x_4 & = & 4
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcrcrcr}
   1.2x_1 & + & 2.1x_2 & - & 3.2x_3 & + & 2.0x_4 & + & 1.4x_5 & = & 81.5 \\
   & & 2.5x_2 & - & 1.1x_3 & + & 6.1x_4 & - & 3.0x_5 & = & 159.7 \\
   & & & & 2.6x_3 & - & 1.1x_4 & & & = & 12.8 \\
   & & & & & & 2.2x_4 & + & 4.1x_5 & = & 46.9 \\
   & & & & & & & & 1.3x_5 & = & 6.5
   \end{array}$$

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

## 3.5. Tridiagonal Linear Systems

We say that a square matrix $(a_{ij})$ is *tridiagonal* if $a_{ij} = 0$ for all $|i - j| > 1$, i.e., nonzero numbers can appear only in the main diagonal and in the next diagonal above and under it. Tridiagonal linear systems (i.e., a linear system with a tridiagonal coefficient matrix) appear frequently in applications, so it is an important class of linear systems. We will use the following notations:

$$\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\
0 & a_2 & d_3 & c_3 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & \\
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\
0 & 0 & \cdots & 0 & a_{n-1} & d_n
\end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}. \tag{3.10}$$

It is practical to store the elements of a tridiagonal matrix in three vectors $(a_i)$, $(d_i)$ and $(c_i)$, as it is used above. In this case only $3n - 2$ storage area is needed for the coefficients.

It is clear that applying the Gaussian elimination to the system (3.10) the elements $a_i$ below the main diagonal will become 0, and the numbers $c_i$ will not be changed during the elimination steps. We have to compute the new values of the variables $d_i$ and $b_i$ during the elimination. In the next algorithm we override the old values of the vectors $(d_i)$ and $(b_i)$ with the actual new ones.

---

**Algorithm 3.37. Gaussian elimination for tridiagonal linear systems**

---

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

We can check that the method above requires $5n - 4$ number of multiplications and divisions. If we compare it with the number of operations of the Algorithm 3.23, which is $n^3/3$ multiplications and divisions, then we can see that for a tridiagonal system this special algorithm should be applied.

It follows from Theorem 3.32 that if the tridiagonal matrix $\mathbf{A}$ is also diagonally dominant, then Algorithm 3.37 can be performed (without pivoting).

### Exercises

1. Solve the following tridiagonal linear systems:

   $$\begin{array}{rcrcrcrcrcrcr}
   x_1 & - & 0.5x_2 & & & & & & & & & = & 1.5 \\
   0.5x_1 & + & 4x_2 & - & 0.5x_3 & & & & & & & = & -4.0 \\
   & & 0.5x_2 & + & 2x_3 & - & 0.5x_4 & & & & & = & 2.0 \\
   & & & & 0.5x_3 & + & 4x_4 & - & 0.5x_5 & & & = & -4.0 \\
   & & & & & & 0.5x_4 & + & 2x_5 & - & 0.5x_6 & = & 2.0 \\
   & & & & & & & & 0.5x_5 & + & x_6 & = & -0.5
   \end{array}$$

2. Show that Algorithm 3.37 requires $5n - 4$ number of multiplications and divisions.

3. Formulate an algorithm similar to Algorithm 3.37 for a *band matrix* where the nonzero elements appear only in the main diagonal and in the next 2 diagonals above and below it, i.e., when $a_{ij} = 0$ for $|i - j| > 2$.

## 3.6. Simultaneous Linear Systems

Frequently we would like to solve so-called *simultaneous linear systems*, i.e., systems of the form $\mathbf{A}\mathbf{x} = \mathbf{b}^{(i)}$ for $i = 1, \ldots, m$, where the coefficient matrices are identical, but the right-hand-sides of the equations are different. We can shortly write the above system as $\mathbf{A}\mathbf{X} = \mathbf{B}$, where the $i$th columns of the $n \times m$ dimensional matrix $\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$ is $\mathbf{b}^{(i)}$, and the $i$th column of the $n \times m$ dimensional matrix $\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$ is $\mathbf{x}^{(i)}$, i.e., the solution of the system $\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$. Since pivoting in the Gaussian or Gauss–Jordan elimination depends only on the coefficient matrix, it can be performed on the $n \times (n+m)$ dimensional augmented matrix. For example, if we perform the Gauss-Jordan elimination on the augmented matrix $(\mathbf{A}, \mathbf{B})$ we get a matrix of the form $(\mathbf{I}, \mathbf{X})$. Then the solution of the simultaneous linear system $\mathbf{X}$ appears in the last $m$ columns of the augmented matrix.

### Exercises

1. Show that the operation count of the Gaussian elimination on the augmented matrix $(\mathbf{A}, \mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$ is $n^3/3 + mn^2 - n/3$ number of multiplications and divisions.

2. Prove that the operation count of the Gauss–Jordan elimination on the augmented matrix $(\mathbf{A}, \mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$ is $n^3/2 + mn^2 - n/2$ number of multiplications and divisions.

3. Reformulate Algorithm 3.37 for solving simultaneous tridiagonal linear systems.

4. Prove that the system of linear systems $\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$, $i = 1, 2, \ldots, m$ is equivalent to the matrix equation $\mathbf{A}\mathbf{X} = \mathbf{B}$, where $\mathbf{X} = (\mathbf{x}^{(1)}, \ldots, \mathbf{x}^{(m)})$ and $\mathbf{B} = (\mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$.

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
