## 5.1. LU Factorization

Let $\mathbf{A}$ be an $n \times n$ matrix. The product $\mathbf{A} = \mathbf{LU}$ is called *LU factorization* of $\mathbf{A}$ or *Doolittle's method* if $\mathbf{L}$ is lower triangular with all entries 1 in the main diagonal, and $\mathbf{U}$ is upper triangular.

**Theorem 5.1.** *Let $\mathbf{A}$ be a nonsingular square matrix. If the LU factorization of $\mathbf{A}$ exists, then its is unique.*

**Proof.** Suppose $\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2$ are two LU factorizations of the matrix $\mathbf{A}$. Since $\det(\mathbf{A}) = \det(\mathbf{L}_1)\det(\mathbf{U}_1) = \det(\mathbf{L}_2)\det(\mathbf{U}_2) \neq 0$, therefore, $\mathbf{L}_1$, $\mathbf{L}_2$, $\mathbf{U}_1$ and $\mathbf{U}_2$ are nonsingular matrices. Hence $\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1}$. Using Theorem 3.6, the matrix $\mathbf{L}_2^{-1}\mathbf{L}_1$ is lower triangular, and the matrix $\mathbf{U}_2\mathbf{U}_1^{-1}$ is upper triangular. Therefore, both matrices are diagonal. It is easy to see that the main diagonal of $\mathbf{L}_2^{-1}\mathbf{L}_1$ consists of only 1 entry, hence $\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1} = \mathbf{I}$, which implies that $\mathbf{L}_1 = \mathbf{L}_2$ and $\mathbf{U}_1 = \mathbf{U}_2$. $\quad\square$

Consider the definition of the Gaussian elimination introduced in Section 3.3. Let $l_{i1} = a_{i1}/a_{11}$, $i = 2, 3, \ldots, n$, as in Section 3.3, and define the lower triangular matrix

$$
\mathbf{L}_1 :=
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
-l_{n1} & & & & 1
\end{pmatrix},
$$

where the missing elements are all equal to 0. It is easy to check whether the product $\mathbf{L}_1\mathbf{A}$ gives the matrix $\mathbf{A}^{(1)}$, the matrix obtained performing the first elimination step of the Gaussian elimination on the coefficient matrix: $\mathbf{A}^{(1)} = \mathbf{L}_1\mathbf{A}$. Similarly, let $l_{i2} = a_{i2}^{(1)}/a_{22}^{(1)}$, $i = 3, 4, \ldots, n$, and define the matrix

$$
\mathbf{L}_2 :=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& -l_{32} & 1 & & \\
& \vdots & & \ddots & \\
& -l_{n2} & & & 1
\end{pmatrix},
$$

where all elements in the main diagonal are 1, in the second column the elements under the diagonal are $-l_{32}, -l_{42}, \ldots, -l_{n2}$, and all the other elements are 0. Then $\mathbf{A}^{(2)} = \mathbf{L}_2\mathbf{A}^{(1)}$ holds. We define the lower triangular matrices $\mathbf{L}_3, \ldots, \mathbf{L}_{n-1}$ in a similar manner. Simple computation shows

$$
\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1 =
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & -l_{32} & 1 & & \\
\vdots & \vdots & & \ddots & \\
-l_{n1} & -l_{n2} & \cdots & -l_{n,n-1} & 1
\end{pmatrix},
\tag{5.1}
$$

and

$$
\begin{aligned}
\mathbf{L} &:= (\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1)^{-1} \\
&= \mathbf{L}_1^{-1}\cdots\mathbf{L}_{n-2}^{-1}\mathbf{L}_{n-1}^{-1} \\
&=
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & 0 & 1 & & \\
\vdots & 0 & \ddots & \ddots & \\
l_{n1} & 0 & \cdots & 0 & 1
\end{pmatrix}
\cdots
\begin{pmatrix}
1 & & & & \\
0 & 1 & & & \\
0 & 0 & 1 & & \\
0 & \vdots & \ddots & \ddots & \\
0 & 0 & \cdots & l_{n,n-1} & 1
\end{pmatrix} \\
&=
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & l_{32} & 1 & & \\
\vdots & \vdots & & \ddots & \\
l_{n1} & l_{n2} & \cdots & l_{n,n-1} & 1
\end{pmatrix}.
\end{aligned}
\tag{5.2}
$$

Let $\mathbf{U} := \mathbf{A}^{(n-1)}$, i.e., the upper triangular matrix which is the result of the Gaussian elimination. Then $\mathbf{U} = \mathbf{L}_{n-1}\cdots\mathbf{L}_1\mathbf{A}$, which gives $\mathbf{A} = \mathbf{LU}$. We have proved the following result.

**Theorem 5.2.** *If the Gaussian elimination can be performed on a square matrix $\mathbf{A}$, then the LU factorization $\mathbf{A} = \mathbf{LU}$ exists. Then $\mathbf{U}$ is the upper triangular matrix obtained by the Gaussian elimination, and $\mathbf{L}$ is defined by (5.2), where $l_{ij}$ denote the factors used in the Gaussian elimination.*

**Example 5.3.** Consider the coefficient matrix of Example 3.22:

$$
\mathbf{A} =
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}.
$$

As we saw in Example 3.22, the Gaussian elimination can be performed on $\mathbf{A}$, and $l_{21} = 2$, $l_{31} = -1$, $l_{41} = -2$, $l_{32} = 0$, $l_{42} = -1$ and $l_{43} = 6$. If we compute the LU factorization, then we write down the Gaussian elimination so that the factors $l_{ij}$ can be written in place of the elements which are eliminated (changed to 0):

$$
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & 3 & 6 & 8 \\
-1 & 0 & 1 & -6 \\
-2 & -3 & 0 & -6
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & 3 & 6 & 8 \\
-1 & 0 & 1 & -6 \\
-2 & -1 & 6 & 2
\end{pmatrix}
\sim
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & 3 & 6 & 8 \\
-1 & 0 & 1 & -6 \\
-2 & -1 & 6 & 38
\end{pmatrix}.
$$

Now in the last matrix the elements in the main diagonal and above are the elements of the matrix $\mathbf{U}$, and the elements below the main diagonal are the entries of $\mathbf{L}$. Therefore,

$$
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 & 0 \\
2 & 1 & 0 & 0 \\
-1 & 0 & 1 & 0 \\
-2 & -1 & 6 & 1
\end{pmatrix}
\begin{pmatrix}
1 & -2 & -2 & -2 \\
0 & 3 & 6 & 8 \\
0 & 0 & 1 & -6 \\
0 & 0 & 0 & 38
\end{pmatrix},
$$

which can be checked by performing the product. $\quad\square$

The following results can be proved easily.

**Theorem 5.4.** *If all the principal minors of $\mathbf{A}$ are nonzero, then the Gaussian elimination can be performed without row changes, and so the LU factorization $\mathbf{A} = \mathbf{LU}$ exists.*

**Theorem 5.5.** *For any invertible square matrix $\mathbf{A}$ there exists a permutation matrix $\mathbf{P}$ such that the LU factorization $\mathbf{PA} = \mathbf{LU}$ exists.*

If an LU factorization $\mathbf{A} = \mathbf{LU}$ is known, then we can solve linear systems with the coefficient matrix $\mathbf{A}$ efficiently. Consider the system $\mathbf{Ax} = \mathbf{b}$. We introduce the new variable $\mathbf{y} = \mathbf{Ux}$. Then the original system is equivalent to

$$
\begin{aligned}
\mathbf{Ly} &= \mathbf{b} \\
\mathbf{Ux} &= \mathbf{y},
\end{aligned}
$$

where both systems are triangular. We solve the first equation using a forward substitution method for $\mathbf{y}$, and then the second equation using the backward substitution method for $\mathbf{x}$. It is easy to check that $n^2 + \mathcal{O}(n)$ number of multiplications/divisions are needed to solve the two triangular systems, and to compute the LU factorization, $n^3/3 + \mathcal{O}(n^2)$ number of multiplications/divisions are needed. It is especially efficient if we solve several linear system with the same coefficient matrix.

### Exercises

1. Compute the LU factorization of the following matrices:

   (a) $\begin{pmatrix} 2 & 3 & -1 \\ -1 & -2 & -1 \\ 0 & 2 & 4 \end{pmatrix}$
   (b) $\begin{pmatrix} 4 & -1 & 2 \\ -12 & 0 & -1 \\ 8 & -17 & 26 \end{pmatrix}$

   (c) $\begin{pmatrix} 1 & 3 & -1 & 2 \\ -2 & -4 & 5 & -5 \\ 0 & 6 & 6 & -2 \\ 2 & 4 & -14 & 16 \end{pmatrix}$
   (d) $\begin{pmatrix} 2 & -1 & 3 & -2 \\ -8 & 5 & -7 & 7 \\ 2 & -4 & -14 & 0 \\ -4 & 7 & 23 & 4 \end{pmatrix}$

2. Show that the matrix $\begin{pmatrix} 2 & 2 & 3 \\ 1 & 1 & 4 \\ 1 & 0 & 1 \end{pmatrix}$ has no LU factorization.

3. Show that the matrix $\begin{pmatrix} 1 & 1 & -1 \\ 2 & 2 & 2 \\ 3 & 3 & -4 \end{pmatrix}$ has infinitely many LU factorization. Do not we get a contradiction to Theorem 5.1?

4. Prove Theorem 5.4. (Hint: Use that during the elimination steps the principal minors of $\mathbf{A}^{(k-1)}$ and $\mathbf{A}^{(k)}$ are equal. Why?)

5. Prove Theorem 5.5.

6. Solve the linear systems given in Exercise 1 of Section 3.3 using LU factorization.

---

