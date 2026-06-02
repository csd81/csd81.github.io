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

