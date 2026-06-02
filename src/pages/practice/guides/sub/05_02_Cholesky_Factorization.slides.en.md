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
