## 4.2. Jacobi Iteration

**Example 4.8.** Solve the linear system

$$
\begin{array}{rcrcrcr}
5x_1 & + & 3x_2 & - & x_3 & = & -4 \\
2x_1 & - & 10x_2 & + & x_3 & = & 25 \\
-3x_1 & + & 4x_2 & - & 12x_3 & = & -47.
\end{array}
\tag{4.9}
$$

We express $x_1$ from the first, $x_2$ from the second and $x_3$ from the third equation:

$$
\begin{aligned}
x_1 &= (-4 - 3x_2 + x_3)/5 \\
x_2 &= (-25 + 2x_1 + x_3)/10 \\
x_3 &= (47 - 3x_1 + 4x_2)/12.
\end{aligned}
\tag{4.10}
$$

System (4.10) is a three dimensional linear fixed-point equation, so we define the sequences

$$
\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k)} + 4x_2^{(k)})/12
\end{aligned}
\tag{4.11}
$$

for $k = 0, 1, 2, \ldots$. Table 4.1 lists the numerical results starting from the initial values $x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0$. We can observe that the sequences converge, and their limits are $x_1 = 1$, $x_2 = -2$ and $x_3 = 3$, which are the solutions of the system (4.9). The iteration (4.11) can be written in a vector form as

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \tag{4.12}$$

where

$$\mathbf{T} = \begin{pmatrix} 0 & -3/5 & 1/5 \\ 2/10 & 0 & 1/10 \\ -3/12 & 4/12 & 0 \end{pmatrix} \quad \text{and} \quad \mathbf{c} = \begin{pmatrix} -4/5 \\ -25/10 \\ 47/12 \end{pmatrix}.$$

Corollary 4.7 yields the convergence of the iteration (4.12) if the norm of $\mathbf{T}$ is less than 1 in some norm. Since $\|\mathbf{T}\|_\infty = \max\{4/5, 3/10, 7/12\} = 4/5 < 1$, we get that the iteration (4.11) is convergent. $\qquad\square$

**Table 4.1: Jacobi iteration**

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0  | 0.000000   | 0.000000   | 0.000000   |
| 1  | -0.800000  | -2.500000  | 3.916667   |
| 2  | 1.483333   | -2.268333  | 3.283333   |
| 3  | 1.217667   | -1.875000  | 2.789722   |
| 4  | 0.882944   | -1.977494  | 2.987250   |
| ⋮  | ⋮          | ⋮          | ⋮          |
| 14 | 0.999999   | -1.999992  | 2.999990   |
| 15 | 0.999993   | -2.000003  | 3.000003   |
| 16 | 1.000001   | -2.000001  | 3.000001   |
| 17 | 1.000001   | -2.000000  | 2.999999   |
| 18 | 1.000000   | -2.000000  | 3.000000   |

Consider the linear system

$$
\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n.
\end{array}
\tag{4.13}
$$

If $a_{ii} \neq 0$ for all $i = 1, \ldots, n$, then the system (4.13) can be transformed into the form

$$x_i = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n, \tag{4.14}$$

and we can define the *Jacobi iteration* for $k = 0, 1, 2, \ldots$ by

$$x_i^{(k+1)} = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4.15}$$

If $a_{ii} = 0$ for some $i$, then we can try to interchange rows so that in the resulting matrix $a_{ii} \neq 0$ holds for all $i = 1, \ldots, n$. We introduce the notations $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, where

$$\mathbf{L} = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ a_{21} & 0 & 0 & \cdots & 0 \\ a_{31} & a_{32} & 0 & \cdots & 0 \\ \vdots & \vdots & & \ddots & \\ a_{n1} & a_{n2} & \cdots & a_{n,n-1} & 0 \end{pmatrix}, \qquad \mathbf{U} = \begin{pmatrix} 0 & a_{12} & a_{13} & \cdots & a_{1n} \\ 0 & 0 & a_{23} & \cdots & a_{2n} \\ 0 & 0 & 0 & \cdots & a_{3n} \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & \cdots & 0 & 0 \end{pmatrix},$$

and $\mathbf{D} = \mathrm{diag}(a_{11}, a_{22}, \ldots, a_{nn})$. $\mathbf{L}$ and $\mathbf{U}$ are lower and upper triangular matrices (with zeros in the diagonal too). With this notation the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ can be rewritten as $\mathbf{D}\mathbf{x} = -(\mathbf{L} + \mathbf{U})\mathbf{x} + \mathbf{b}$. Then multiplying this equation by $\mathbf{D}^{-1}$ we get a linear system of the form (4.14). Therefore, the Jacobi iteration can be defined by (4.12), where $\mathbf{T} = \mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U})$ and $\mathbf{c} = \mathbf{D}^{-1}\mathbf{b}$.

Theorem 4.6 and Corollary 4.7 imply the following necessary and sufficient condition for the convergence of the Jacobi iteration.

**Theorem 4.9.** *The Jacobi iteration is convergent for all initial values if and only if* $\rho(\mathbf{T}_J) < 1$.

**Corollary 4.10.** *If* $\|\mathbf{T}_J\| < 1$ *in some matrix norm* $\|\cdot\|$, *then the Jacobi iteration is convergent for all initial values* $\mathbf{x}^{(0)}$.

In practice we can use the following sufficient condition.

**Theorem 4.11.** *If the matrix* $\mathbf{A}$ *is diagonally dominant, then the Jacobi iteration is convergent for all initial values* $\mathbf{x}^{(0)}$.

**Proof.** Since

$$\mathbf{T}_J = \begin{pmatrix} 0 & -a_{12}/a_{11} & -a_{13}/a_{11} & \cdots & -a_{1n}/a_{11} \\ -a_{21}/a_{22} & 0 & -a_{23}/a_{22} & \cdots & -a_{2n}/a_{22} \\ -a_{31}/a_{33} & -a_{32}/a_{33} & 0 & \cdots & -a_{3n}/a_{33} \\ \vdots & & & \ddots & \vdots \\ -a_{n1}/a_{nn} & -a_{n2}/a_{nn} & -a_{n3}/a_{nn} & \cdots & 0 \end{pmatrix},$$

using the diagonal dominance of $\mathbf{A}$, we get

$$\|\mathbf{T}_J\|_\infty = \max_{i=1,\ldots,n} \left\{ \sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{|a_{ij}|}{|a_{ii}|} \right\} < 1.$$

Hence Corollary 4.10 implies the statement. $\qquad\square$

### Exercises

1. Solve the following linear systems with Jacobi iteration:

$$
\text{(a)} \quad
\begin{array}{rcrcrcr}
6.2x_1 & + & 1.1x_2 & - & 3.4x_3 & = & 5.1 \\
-0.6x_1 & + & 2.9x_2 & + & 0.3x_3 & = & -7.2 \\
1.1x_1 & - & 0.6x_2 & + & 4.4x_3 & = & 3.1
\end{array}
$$

$$
\text{(b)} \quad
\begin{array}{rcrcrcrcr}
-8x_1 & + & 3x_2 & - & 2x_3 & & & = & 6 \\
2x_1 & + & 6x_2 & + & x_3 & - & 2x_4 & = & 3 \\
3x_1 & - & 3x_2 & + & 10x_3 & + & x_4 & = & 5 \\
& & x_2 & - & 3x_3 & + & 7x_4 & = & -17
\end{array}
$$

2. Show that the Jacobi iteration is convergent for all initial values if $\mathbf{A}$ is column diagonally dominant.

