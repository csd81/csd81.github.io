# Numerical Analysis — 5. Matrix Factorization

*Ferenc Hartung*
*University of Pannonia, Department of Mathematics, Veszprém, Hungary*
*2025*

---

## 5.1. LU Factorization

### Example

The following identity can be checked:

$$
\begin{pmatrix}
-2 & -1 & -3 \\
-4 & 0 & -7 \\
6 & 7 & 9
\end{pmatrix}
=
\begin{pmatrix}
1 & 0 & 0 \\
2 & 1 & 0 \\
-3 & 2 & 1
\end{pmatrix}
\begin{pmatrix}
-2 & -1 & -3 \\
0 & 2 & -1 \\
0 & 0 & 2
\end{pmatrix}
$$

Let $\mathbf{A}$ be an $n \times n$ matrix. The product

$$
\mathbf{A} = \mathbf{LU}
$$

is called **LU factorization** of $\mathbf{A}$ if $\mathbf{L}$ is lower triangular with all entries 1 in the main diagonal, and $\mathbf{U}$ is upper triangular.

---

### Theorem:

*Let $\mathbf{A}$ be a nonsingular square matrix. If the LU factorization of $\mathbf{A}$ exists, then its is unique.*

**Proof.** Suppose

$$
\mathbf{A} = \mathbf{L}_1\mathbf{U}_1 = \mathbf{L}_2\mathbf{U}_2
$$

are two LU factorizations of the matrix $\mathbf{A}$. Since

$$
\det(\mathbf{A}) = \det(\mathbf{L}_1)\det(\mathbf{U}_1) = \det(\mathbf{L}_2)\det(\mathbf{U}_2) \neq 0,
$$

therefore, $\mathbf{L}_1$, $\mathbf{L}_2$, $\mathbf{U}_1$ and $\mathbf{U}_2$ are nonsingular matrices. Hence

$$
\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1}.
$$

It is easy to check that $\mathbf{L}_2^{-1}\mathbf{L}_1$ is lower triangular, and $\mathbf{U}_2\mathbf{U}_1^{-1}$ is upper triangular. Therefore, both are diagonal. The main diagonal of $\mathbf{L}_2^{-1}\mathbf{L}_1$ consists of only 1 entry, hence

$$
\mathbf{L}_2^{-1}\mathbf{L}_1 = \mathbf{U}_2\mathbf{U}_1^{-1} = \mathbf{I},
$$

which implies

$$
\mathbf{L}_1 = \mathbf{L}_2 \qquad \text{and} \qquad \mathbf{U}_1 = \mathbf{U}_2.
$$

---

Consider the definition of the Gaussian elimination. Let

$$
l_{i1} = \frac{a_{i1}}{a_{11}}, \qquad i = 2, 3, \ldots, n,
$$

and define the lower triangular matrix

$$
\mathbf{L}_1 :=
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
-l_{n1} & & & & 1
\end{pmatrix}
$$

where the missing elements are all equal to $0$. It is easy to check that

$$
\mathbf{L}_1\mathbf{A} = \mathbf{A}^{(1)},
$$

where $\mathbf{A}^{(1)}$ is the matrix obtained performing the first elimination step of the Gaussian elimination on the coefficient matrix.

---

It is easy to check that

$$
\begin{pmatrix}
1 & & & & \\
-l_{21} & 1 & & & \\
-l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
-l_{n1} & & & & 1
\end{pmatrix}
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
l_{n1} & & & & 1
\end{pmatrix}
=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& & 1 & & \\
& & & \ddots & \\
& & & & 1
\end{pmatrix},
$$

hence

$$
\mathbf{L}_1^{-1} :=
\begin{pmatrix}
1 & & & & \\
l_{21} & 1 & & & \\
l_{31} & & 1 & & \\
\vdots & & & \ddots & \\
l_{n1} & & & & 1
\end{pmatrix}
$$

---

Similarly, let

$$
l_{i2} = \frac{a_{i2}^{(1)}}{a_{22}^{(1)}}, \qquad i = 3, 4, \ldots, n,
$$

and define the matrix

$$
\mathbf{L}_2 :=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& -l_{32} & 1 & & \\
& \vdots & & \ddots & \\
& -l_{n2} & & & 1
\end{pmatrix}
$$

where all elements in the main diagonal are 1, in the second column the elements under the diagonal are $-l_{32}, -l_{42}, \ldots, -l_{n2}$, and all the other elements are 0. Then

$$
\mathbf{A}^{(2)} = \mathbf{L}_2\mathbf{A}^{(1)}
$$

holds.

---

We have

$$
\mathbf{L}_2^{-1} :=
\begin{pmatrix}
1 & & & & \\
& 1 & & & \\
& l_{32} & 1 & & \\
& \vdots & & \ddots & \\
& l_{n2} & & & 1
\end{pmatrix}
$$

We define the lower triangular matrices $\mathbf{L}_3, \ldots, \mathbf{L}_{n-1}$ in a similar manner. Simple computation shows

$$
\mathbf{L}_{n-1}\mathbf{L}_{n-2}\cdots\mathbf{L}_1 =
\begin{pmatrix}
1 & 0 & 0 & \cdots & 0 \\
-l_{21} & 1 & 0 & \cdots & 0 \\
-l_{31} & -l_{32} & 1 & \cdots & 0 \\
\vdots & \vdots & \ddots & \ddots & \vdots \\
-l_{n1} & -l_{n2} & \cdots & -l_{n,n-1} & 1
\end{pmatrix},
$$

and

---

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
\tag{1}
$$

---

Let $\mathbf{U} := \mathbf{A}^{(n-1)}$, i.e., the upper triangular matrix which is the result of the Gaussian elimination. Then

$$
\mathbf{U} = \mathbf{L}_{n-1}\cdots\mathbf{L}_1\mathbf{A},
$$

which gives

$$
\mathbf{A} = \mathbf{LU}.
$$

We have proved the following result.

### Theorem:

*If the Gaussian elimination can be performed on a square matrix $\mathbf{A}$, then the LU factorization $\mathbf{A} = \mathbf{LU}$ exists. Then $\mathbf{U}$ is the upper triangular matrix obtained by the Gaussian elimination, and $\mathbf{L}$ is defined by (1), where $l_{ij}$ denote the factors used in the Gaussian elimination.*

---

### Example

Consider the coefficient matrix of a linear system of an earlier example in Chapter 3.

$$
\mathbf{A} =
\begin{pmatrix}
1 & -2 & -2 & -2 \\
2 & -1 & 2 & 4 \\
-1 & 2 & 3 & -4 \\
-2 & 1 & 4 & -2
\end{pmatrix}.
$$

As we saw earlier, the Gaussian elimination can be performed on $\mathbf{A}$, and $l_{21} = 2$, $l_{31} = -1$, $l_{41} = -2$, $l_{32} = 0$, $l_{42} = -1$ and $l_{43} = 6$. If we compute the LU factorization, then we write down the Gaussian elimination so that the factors $l_{ij}$ can be written in place of the elements which are eliminated (changed to 0):

---

### Example cont.

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
$$

$$
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
\end{pmatrix}
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
\end{pmatrix}.
$$

---

The following results can be proved easily.

### Theorem:

*If all the principal minors of $\mathbf{A}$ are nonzero, then the Gaussian elimination can be performed without row changes, and so the LU factorization $\mathbf{A} = \mathbf{LU}$ exists.*

### Theorem:

*For any invertible square matrix $\mathbf{A}$ there exists a permutation matrix $\mathbf{P}$ such that the LU factorization $\mathbf{PA} = \mathbf{LU}$ exists.*

---

Suppose $\mathbf{A} = \mathbf{LU}$ is known, and consider the linear system $\mathbf{Ax} = \mathbf{b}$. Then

$$
\mathbf{LUx} = \mathbf{b}.
$$

We introduce the new variable $\mathbf{y} = \mathbf{Ux}$. Then the original system is equivalent to

$$
\begin{aligned}
\mathbf{Ly} &= \mathbf{b} \\
\mathbf{Ux} &= \mathbf{y},
\end{aligned}
$$

where both systems are triangular. We solve the first equation using a forward substitution method for $\mathbf{y}$, and then the second equation using the backward substitution method for $\mathbf{x}$. It is easy to check that $n^2 + \mathcal{O}(n)$ number of multiplications/divisions are needed to solve the two triangular systems, and to compute the LU factorization, $n^3/3 + \mathcal{O}(n^2)$ number of multiplications/divisions are needed. It is especially efficient if we solve several linear system with the same coefficient matrix.

---

## 5.2. Cholesky Factorization

Let $\mathbf{A}$ be a symmetric matrix. The factorization

$$
\mathbf{A} = \mathbf{LL}^T
$$

of the matrix $\mathbf{A}$, where $\mathbf{L}$ is a lower triangular matrix, is called the **Cholesky factorization**.

We note that if the Cholesky factorization exists, it is not unique. The next theorem formulates a sufficient condition for the existence of the Cholesky factorization.

### Theorem:

*If $\mathbf{A}$ is positive definite and symmetric, then the Cholesky factorization $\mathbf{A} = \mathbf{LL}^T$ exists, the matrix $\mathbf{L}$ is real, and we can select positive elements in the main diagonal of $\mathbf{L}$.*

---

### Proof

We prove the statement using mathematical induction with respect to the dimension of the matrix $\mathbf{A}$. The statement is obvious for $1 \times 1$ matrices. Suppose the statement of the theorem holds for $(n-1) \times (n-1)$ matrices, and let $\mathbf{A}$ be an $n \times n$ matrix. We partition the matrix $\mathbf{A}$ in the following form:

$$
\mathbf{A} =
\begin{pmatrix}
\mathbf{X} & \mathbf{y} \\
\mathbf{y}^T & a_{nn}
\end{pmatrix},
$$

where $\mathbf{X}$ is an $(n-1) \times (n-1)$ matrix, $\mathbf{y}$ is an $n-1$-dimensional column vector. Since $\mathbf{A}$ is positive definite, all of its principal minors are positive, hence $\mathbf{X}$ is positive definite. We are looking for the Cholesky factorization of $\mathbf{A}$ in the form

$$
\mathbf{A} =
\begin{pmatrix}
\mathbf{X} & \mathbf{y} \\
\mathbf{y}^T & a_{nn}
\end{pmatrix}
=
\begin{pmatrix}
\tilde{\mathbf{L}} & \mathbf{0} \\
\mathbf{c}^T & d
\end{pmatrix}
\begin{pmatrix}
\tilde{\mathbf{L}}^T & \mathbf{c} \\
\mathbf{0}^T & d
\end{pmatrix}.
\tag{2}
$$

Here $\tilde{\mathbf{L}}$ is an $(n-1) \times (n-1)$ dimensional lower triangular matrix, $\mathbf{c}$ is an $n-1$-dimensional column vector, $d \in \mathbb{R}$.

---

### Proof cont.

If we perform the matrix multiplication on the partitioned matrices, we get the relations

$$
\mathbf{X} = \tilde{\mathbf{L}}\tilde{\mathbf{L}}^T, \qquad \tilde{\mathbf{L}}\mathbf{c} = \mathbf{y} \quad \text{and} \quad \mathbf{c}^T\mathbf{c} + d^2 = a_{nn}.
$$

By the induction hypothesis the equation $\mathbf{X} = \tilde{\mathbf{L}}\tilde{\mathbf{L}}^T$ has a lower triangular solution $\tilde{\mathbf{L}} \in \mathbb{R}^{(n-1)\times(n-1)}$, where in the main diagonal we can select positive elements. This yields that $\tilde{\mathbf{L}}$ is nonsingular, so the equation $\tilde{\mathbf{L}}\mathbf{c} = \mathbf{y}$ has a unique solution $\mathbf{c}$. Let $d$ be a (possibly complex) root of the equation $\mathbf{c}^T\mathbf{c} + d^2 = a_{nn}$. Then relation (2) holds. $d$ can be selected to be a positive real if and only if $d^2 = a_{nn} - \mathbf{c}^T\mathbf{c} > 0$. Relation (2) implies $\det(\mathbf{A}) = \det(\tilde{\mathbf{L}})^2 d^2$. Since $\mathbf{A}$ is positive definite, it follows $\det(\mathbf{A}) > 0$. This yields that $d^2$ is positive, hence $d$ can be selected to be a positive real.

---

### Example

Find the Cholesky factorization of the matrix

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}.
$$

We write

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
l_{11} & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
l_{11} & l_{21} & l_{31} \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

We consider first the equation for the first row first element:

$$
4 = l_{11}^2.
$$

This can be solved for $l_{11}$: the positive solution is

$$
l_{11} = 2.
$$

---

### Example cont.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
l_{21} & l_{22} & 0 \\
l_{31} & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & l_{21} & l_{31} \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Then we consider the elements under the main diagonal of the first column:

$$
-8 = 2l_{21}, \qquad 4 = 2l_{31}.
$$

The solutions are $l_{21} = -4$, $l_{31} = 2$.

---

### Example cont.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & l_{22} & 0 \\
2 & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & l_{22} & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Now we consider the element of the main diagonal of the second column:

$$
17 = (-4)^2 + l_{22}^2.
$$

Its positive solution is $l_{22} = 1$.

---

### Example cont.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & 1 & 0 \\
2 & l_{32} & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & 1 & l_{32} \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Then look at the element in the second column under the main diagonal:

$$
-11 = 2(-4) + 1 \cdot l_{32}.
$$

This can be solved as $l_{32} = -3$.

---

### Example cont.

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & 1 & 0 \\
2 & -3 & l_{33}
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & 1 & -3 \\
0 & 0 & l_{33}
\end{pmatrix}
$$

Finally, the element in the third row and third column is

$$
22 = 2^2 + (-3)^2 + l_{33}^2.
$$

This gives $l_{33} = 3$. We have then

$$
\begin{pmatrix}
4 & -8 & 4 \\
-8 & 17 & -11 \\
4 & -11 & 22
\end{pmatrix}
=
\begin{pmatrix}
2 & 0 & 0 \\
-4 & 1 & 0 \\
2 & -3 & 3
\end{pmatrix}
\begin{pmatrix}
2 & -4 & 2 \\
0 & 1 & -3 \\
0 & 0 & 3
\end{pmatrix}.
$$

---

### Algorithm: Cholesky factorization

---

> INPUT: $\quad\mathbf{A}$
> OUTPUT: $\quad\mathbf{L}$
>
> $l_{11} \leftarrow \sqrt{a_{11}}$
> **for** $i = 2, \ldots, n$ **do**
> $\quad l_{i1} \leftarrow a_{i1}/l_{11}$
> **end do**
> **for** $j = 2, \ldots, n-1$ **do**
> $\quad l_{jj} \leftarrow \sqrt{a_{jj} - \sum_{k=1}^{j-1} l_{jk}^2}$
> $\quad$ **for** $i = j+1, \ldots, n$ **do**
> $\quad\quad l_{ij} \leftarrow \left(a_{ij} - \sum_{k=1}^{j-1} l_{ik}l_{jk}\right)/l_{jj}$
> $\quad$ **end do**
> **end do**
> $l_{nn} \leftarrow \sqrt{a_{nn} - \sum_{k=1}^{n-1} l_{nk}^2}$
> **output**$(l_{ij}, \quad i = 1, \ldots, n, \ j = 1, \ldots, i)$

---

The operation count of the Cholesky factorization is

$$
n^3/6 + \mathcal{O}(n^2)
$$

number of multiplications and divisions,

$$
n^3/6 + \mathcal{O}(n^2)
$$

number of additions and subtractions, and

$$
n
$$

number of square roots.
