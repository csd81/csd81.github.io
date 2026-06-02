## 4.2. Jacobi Iteration

> **Example.** Solve the linear system
> $$
> \begin{array}{rcrcrcr}
> 4x_1 & + & 2x_2 & - & x_3 & = & 9 \\
> 5x_1 & - & 10x_2 & + & 2x_3 & = & 8 \\
> -2x_1 & + & 3x_2 & - & 7x_3 & = & 3.
> \end{array}
> $$
> We rewrite the system in the equivalent form:
> $$
> \begin{aligned}
> x_1 &= (9 - 2x_2 + x_3)/4 \\
> x_2 &= (-8 + 5x_1 + 2x_3)/10 \\
> x_3 &= (-3 - 2x_1 + 3x_2)/7.
> \end{aligned}
> $$
> We define the sequences
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (9 - 2x_2^{(k)} + x_3^{(k)})/4 \\
> x_2^{(k+1)} &= (-8 + 5x_1^{(k)} + 2x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (-3 - 2x_1^{(k)} + 3x_2^{(k)})/7
> \end{aligned}
> $$
> for $k = 0, 1, 2, \ldots$. This sequence is called **Jacobi iteration**.

> **Example cont.**
>
> **Jacobi iteration**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | -0.8000000 | -0.4285714 |
> | 2  | 2.5428571  | 0.2392857  | -1.4142857 |
> | 3  | 1.7767857  | 0.1885714  | -1.0525510 |
> | 4  | 1.8925765  | -0.1221173 | -0.8554082 |
> | ⋮  | ⋮          | ⋮          | ⋮          |
> | 19 | 2.0000268  | -0.0000010 | -1.0000107 |
> | 20 | 1.9999978  | 0.0000112  | -1.0000081 |
> | 21 | 1.9999924  | -0.0000027 | -0.9999946 |
> | 22 | 2.0000027  | -0.0000027 | -0.9999990 |
> | 23 | 2.0000016  | 0.0000016  | -1.0000019 |

> **Example cont.** The Jacobi iteration can be written in a vector form as
> $$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c},$$
> where
> $$\mathbf{T} = \begin{pmatrix} 0 & -2/4 & 1/4 \\ 5/10 & 0 & 2/10 \\ -2/7 & 3/7 & 0 \end{pmatrix} \quad \text{and} \quad \mathbf{c} = \begin{pmatrix} 9/4 \\ -8/10 \\ -3/7 \end{pmatrix}.$$
> Since
> $$\|\mathbf{T}\|_\infty = \max\{3/4, 7/10, 5/7\} = 3/4 < 1,$$
> we get that the iteration is convergent.

Consider the linear system

$$
\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n.
\end{array}
$$

If $a_{ii} \neq 0$ for all $i = 1, \ldots, n$, then the linear system can be transformed into the form

$$x_i = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n,$$

and we can define the **Jacobi iteration** for $k = 0, 1, 2, \ldots$ by

$$x_i^{(k+1)} = -\sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{3}$$

If $a_{ii} = 0$ for some $i$, then we can try to interchange rows so that in the resulting matrix $a_{ii} \neq 0$ for all $i = 1, \ldots, n$.

We introduce the notations $\mathbf{A} = \mathbf{L} + \mathbf{D} + \mathbf{U}$, where

$$\mathbf{L} = \begin{pmatrix} 0 & 0 & 0 & \cdots & 0 \\ a_{21} & 0 & 0 & \cdots & 0 \\ a_{31} & a_{32} & 0 & \cdots & 0 \\ \vdots & \vdots & & \ddots & \\ a_{n1} & a_{n2} & \cdots & a_{n,n-1} & 0 \end{pmatrix}, \quad \mathbf{U} = \begin{pmatrix} 0 & a_{12} & a_{13} & \cdots & a_{1n} \\ 0 & 0 & a_{23} & \cdots & a_{2n} \\ 0 & 0 & 0 & \cdots & a_{3n} \\ \vdots & \vdots & & \ddots & \\ 0 & 0 & \cdots & 0 & 0 \end{pmatrix},$$

and

$$\mathbf{D} = \mathrm{diag}(a_{11}, a_{22}, \ldots, a_{nn}).$$

$\mathbf{L}$ and $\mathbf{U}$ are lower and upper triangular matrices (with zeros in the diagonal too).

With this notation the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}$$

can be rewritten as

$$(\mathbf{L} + \mathbf{D} + \mathbf{U})\mathbf{x} = \mathbf{b}$$

hence

$$\mathbf{D}\mathbf{x} = -(\mathbf{L} + \mathbf{U})\mathbf{x} + \mathbf{b}.$$

Then multiplying this equation by $\mathbf{D}^{-1}$ we get a linear system of the form

$$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c},$$

where

$$\mathbf{T} = \mathbf{T}_J := -\mathbf{D}^{-1}(\mathbf{L} + \mathbf{U}) \qquad \text{and} \qquad \mathbf{c} = \mathbf{D}^{-1}\mathbf{b}.$$

Therefore the Jacobi iteration can be defined as a fixed-point iteration

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}.$$

> **Theorem.** The Jacobi iteration is convergent for all initial values if and only if $\rho(\mathbf{T}_J) < 1$.

> **Corollary.** If $\|\mathbf{T}_J\| < 1$ in some matrix norm $\|\cdot\|$, then the Jacobi iteration is convergent for all initial values $\mathbf{x}^{(0)}$.

In practice we can use the following sufficient condition.

> **Theorem.** If the matrix $\mathbf{A}$ is diagonally dominant, then the Jacobi iteration is convergent for all initial values $\mathbf{x}^{(0)}$.

> **Proof.** Since
> $$\mathbf{T}_J = \begin{pmatrix} 0 & -a_{12}/a_{11} & -a_{13}/a_{11} & \cdots & -a_{1n}/a_{11} \\ -a_{21}/a_{22} & 0 & -a_{23}/a_{22} & \cdots & -a_{2n}/a_{22} \\ -a_{31}/a_{33} & -a_{32}/a_{33} & 0 & \cdots & -a_{3n}/a_{33} \\ \vdots & & & \ddots & \vdots \\ -a_{n1}/a_{nn} & -a_{n2}/a_{nn} & -a_{n3}/a_{nn} & \cdots & 0 \end{pmatrix},$$
> using the diagonal dominance of $\mathbf{A}$, we get
> $$\|\mathbf{T}_J\|_\infty = \max_{i=1,\ldots,n} \left\{ \sum_{\substack{j=1 \\ j \neq i}}^{n} \frac{|a_{ij}|}{|a_{ii}|} \right\} < 1.$$
> Hence the Jacobi iteration is convergent.

---

