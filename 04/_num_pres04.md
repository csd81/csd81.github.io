# Numerical Analysis

## 4. Iterative Techniques for Solving Linear Systems

Ferenc Hartung

University of Pannonia, Department of Mathematics, Veszprém, Hungary

2025

---

## 4.1. Linear Fixed-Point Iteration

First we recall the definition of the eigenvalue of a matrix. The complex number $\lambda \in \mathbb{C}$ is an **eigenvalue** of the square matrix $\mathbf{A} \in \mathbb{R}^{n \times n}$ if the linear system

$$\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$$

has a nontrivial ($\mathbf{x} \neq \mathbf{0}$) solution. Its nontrivial solution $\mathbf{x}$ is called the **eigenvector** of the matrix $\mathbf{A}$ corresponding to the eigenvalue $\lambda$. The eigenvector equation can be written in an equivalent form

$$(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0},$$

where $\mathbf{I}$ denotes the $n \times n$ dimensional identity matrix, so $\mathbf{I}\mathbf{x} = \mathbf{x}$.

> **Theorem.** The $n \times n$ matrix $\mathbf{A}$ has $n$ eigenvalues, which are solutions of the $n$th-degree algebraic equation
> $$\det(\mathbf{A} - \lambda\mathbf{I}) = 0,$$
> the so-called **characteristic equation**.

Let $\mathbf{A} \in \mathbb{R}^{n \times n}$. The number

$$\rho(\mathbf{A}) := \max\{|\lambda| : \lambda \text{ is an eigenvalue of } \mathbf{A}\}$$

is called the **spectral radius** of $\mathbf{A}$.

> **Theorem.** Let $\|\cdot\|$ be a matrix norm. Then
> $$\rho(\mathbf{A}) \leq \|\mathbf{A}\|.$$

> **Proof.** Let $\lambda$ be an eigenvalue of $\mathbf{A}$, and $\mathbf{v} \neq \mathbf{0}$ be a corresponding eigenvector, and let $\|\cdot\|$ be the vector norm which generates the matrix norm. Then
> $$\lambda\mathbf{v} = \mathbf{A}\mathbf{v},$$
> so
> $$|\lambda| \|\mathbf{v}\| = \|\mathbf{A}\mathbf{v}\| \leq \|\mathbf{A}\| \|\mathbf{v}\|.$$
> It follows
> $$|\lambda| \leq \|\mathbf{A}\|,$$
> therefore
> $$\rho(\mathbf{A}) = \max |\lambda| \leq \|\mathbf{A}\|.$$

Next we investigate the linear fixed-point equation

$$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c},$$

where $\mathbf{T} \in \mathbb{R}^{n \times n}$, $\mathbf{c} \in \mathbb{R}^n$. Consider the linear $n$ dimensional fixed-point iteration

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots . \tag{1}$$

First we consider the case when $\mathbf{c} = \mathbf{0}$. Then

$$
\begin{aligned}
\mathbf{x}^{(k)} &= \mathbf{T}\mathbf{x}^{(k-1)} \\
&= \mathbf{T}\Big(\mathbf{T}\mathbf{x}^{(k-2)}\Big) \\
&\;\;\vdots \\
&= \mathbf{T}^k \mathbf{x}^{(0)} \qquad k = 1, 2, \ldots .
\end{aligned}
$$

For a real or complex constant $a$ we have

$$\lim_{k\to\infty} a^k = 0 \quad \iff \quad |a| < 1.$$

> **Theorem.** Let $\mathbf{T} \in \mathbb{R}^{n \times n}$. The following statements are equivalent:
>
> &nbsp;&nbsp;(i) $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ *(zero matrix)*, i.e.,
> $$\lim_{k\to\infty} \|\mathbf{T}^k - \mathbf{0}\| = \lim_{k\to\infty} \|\mathbf{T}^k\| = 0$$
> for any matrix norm $\|\cdot\|$;
>
> &nbsp;&nbsp;(ii) $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ *(zero vector)* for all $\mathbf{x} \in \mathbb{R}^n$, i.e.,
> $$\lim_{k\to\infty} \|\mathbf{T}^k \mathbf{x} - \mathbf{0}\| = \lim_{k\to\infty} \|\mathbf{T}^k \mathbf{x}\| = 0$$
> for all $\mathbf{x} \in \mathbb{R}^n$ and for any vector norm $\|\cdot\|$;
>
> &nbsp;&nbsp;(iii) $\rho(\mathbf{T}) < 1$.

> **Proof.**
> $(i) \Rightarrow (ii)$:
> $$\|\mathbf{T}^k \mathbf{x}\| \leq \|\mathbf{T}^k\| \|\mathbf{x}\| \to 0, \qquad \text{as } k \to \infty$$
> for all $x \in \mathbb{R}^n$ and for any norm $\|\cdot\|$.
>
> $(ii) \Rightarrow (iii)$: Let $\lambda$ be an eigenvalue of $\mathbf{T}$, and let $\mathbf{v}$ be an eigenvector corresponding to $\lambda$. Then
> $$\mathbf{T}^k \mathbf{v} = \mathbf{T}^{k-1}(\mathbf{T}\mathbf{v}) = \lambda\mathbf{T}^{k-1}\mathbf{v} = \cdots = \lambda^k \mathbf{v},$$
> hence
> $$\lim_{k\to\infty} \mathbf{T}^k \mathbf{v} = \mathbf{0} \quad \Rightarrow \quad |\lambda| < 1,$$
> since $\mathbf{v} \neq \mathbf{0}$. Since $\lambda$ was an arbitrary eigenvalue of $\mathbf{T}$,
> $$\rho(\mathbf{T}) < 1$$
> is satisfied.
>
> $(iii) \Rightarrow (i)$: We do not prove it here.

> **Theorem.** If $\|\mathbf{T}\| < 1$ in some matrix norm $\|\cdot\|$, then $\|\mathbf{T}^k\| \to 0$ as $k \to \infty$.

> **Proof.** The statement follows from
> $$0 \leq \|\mathbf{T}^k\| \leq \|\mathbf{T}\|^k \to 0.$$

For a real or complex number $a$ we have that the infinite geometric sum

$$1 + a + a^2 + a^3 + \cdots + a^k + \cdots$$

is convergent if and only if $|a| < 1$, and

$$1 + a + a^2 + a^3 + \cdots = \frac{1}{1 - a}, \qquad |a| < 1.$$

Next we investigate the convergence of the **geometric series** or **Neumann-series**

$$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots ,$$

where $\mathbf{A}$ is a square matrix.

> **Theorem.** If $\rho(\mathbf{A}) < 1$, then the geometric series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ is convergent, the matrix $\mathbf{I} - \mathbf{A}$ is invertible, and
> $$(\mathbf{I} - \mathbf{A})^{-1} = \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots .$$
> Conversely, if the geometric series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ is convergent, then
> $$\rho(\mathbf{A}) < 1.$$

> **Proof.** Let $\rho(\mathbf{A}) < 1$. Suppose that $\mathbf{I} - \mathbf{A}$ is not invertible. Then there exists a nonzero vector $\mathbf{x} \neq \mathbf{0}$ such that $(\mathbf{I} - \mathbf{A})\mathbf{x} = \mathbf{0}$. But then
> $$\mathbf{A}\mathbf{x} = \mathbf{x},$$
> i.e., $1$ is an eigenvalue of $\mathbf{A}$, which contradicts to the assumption that $\rho(\mathbf{A}) < 1$. Hence $\mathbf{I} - \mathbf{A}$ is invertible. It is easy to check that
> $$(\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m) = \mathbf{I} - \mathbf{A}^{m+1}. \tag{2}$$
> Therefore,
> $$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m = (\mathbf{I} - \mathbf{A})^{-1}(\mathbf{I} - \mathbf{A}^{m+1}),$$
> and so, using that $\mathbf{A}^{m+1} \to 0$, we get
> $$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m \to (\mathbf{I} - \mathbf{A})^{-1},$$
> as $m \to \infty$. Reverse statement is not proved here.

> **Corollary.** If $\|\mathbf{A}\| < 1$ in some matrix norm $\|\cdot\|$, then the matrix $\mathbf{I} - \mathbf{A}$ is invertible, the geometric series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ is convergent, $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots = (\mathbf{I} - \mathbf{A})^{-1}$, and
> $$\|(\mathbf{I} - \mathbf{A})^{-1}\| \leq \frac{1}{1 - \|\mathbf{A}\|}.$$

> **Proof.**
> $$
> \begin{aligned}
> \|(\mathbf{I} - \mathbf{A})^{-1}\| &= \Big\| \lim_{m\to\infty} (\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m) \Big\| \\
> &= \lim_{m\to\infty} \|\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots + \mathbf{A}^m\| \\
> &\leq \lim_{m\to\infty} (\|\mathbf{I}\| + \|\mathbf{A}\| + \|\mathbf{A}^2\| + \|\mathbf{A}^3\| + \cdots + \|\mathbf{A}^m\|) \\
> &\leq \lim_{m\to\infty} (1 + \|\mathbf{A}\| + \|\mathbf{A}\|^2 + \|\mathbf{A}\|^3 + \cdots + \|\mathbf{A}\|^m) \\
> &= \frac{1}{1 - \|\mathbf{A}\|}.
> \end{aligned}
> $$

> **Theorem.** Let $\mathbf{A}$ and $\mathbf{B}$ be $n \times n$ matrices. Let $\mathbf{A}$ be nonsingular, and
> $$\|\mathbf{A} - \mathbf{B}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$
> Then $\mathbf{B}$ is also nonsingular, moreover,
> $$\|\mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|}$$
> and
> $$\|\mathbf{A}^{-1} - \mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|^2 \|\mathbf{A} - \mathbf{B}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|}.$$

> **Proof.** Consider the identities
> $$\mathbf{B} = \mathbf{A} - (\mathbf{A} - \mathbf{B}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})).$$
> Using the assumption we get
> $$\|\mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\| < 1,$$
> therefore, the matrix
> $$\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})$$
> is invertible. But then
> $$\mathbf{B}^{-1} = (\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B}))^{-1} \mathbf{A}^{-1}$$
> also exists. From this, relation
> $$\mathbf{A}^{-1} - \mathbf{B}^{-1} = \mathbf{A}^{-1}(\mathbf{B} - \mathbf{A})\mathbf{B}^{-1}$$
> and the last corollary imply the last two estimates of the theorem.

Consider again the fixed-point problem (1). The iteration yields

$$
\begin{aligned}
\mathbf{x}^{(k)} &= \mathbf{T}\mathbf{x}^{(k-1)} + \mathbf{c} \\
&= \mathbf{T}\Big(\mathbf{T}\mathbf{x}^{(k-2)} + \mathbf{c}\Big) + \mathbf{c} \\
&= \mathbf{T}^2\mathbf{x}^{(k-2)} + \mathbf{T}\mathbf{c} + \mathbf{c} \\
&\;\;\vdots \\
&= \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}, \qquad k = 1, 2, \ldots .
\end{aligned}
$$

> **Theorem.** Let $\mathbf{c} \neq \mathbf{0}$. The fixed-point equation
> $$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$
> has a unique solution, and the fixed-point iteration (1) converges to the unique solution of the equation for all $\mathbf{x}^{(0)} \in \mathbb{R}^n$ if and only if
> $$\rho(\mathbf{T}) < 1.$$

> **Proof.** Let $\rho(\mathbf{T}) < 1$. Then $\mathbf{I} - \mathbf{T}$ is invertible, hence the equation
> $$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$
> has a unique solution
> $$\mathbf{x} = (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c}.$$
> We have
> $$\mathbf{T}^k \mathbf{x}^{(0)} \to \mathbf{0}, \qquad \text{for all } \mathbf{x}^{(0)} \in \mathbb{R}^n,$$
> and
> $$(\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c} \to (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c} \qquad \text{as } k \to \infty,$$
> therefore relation
> $$\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}$$
> yields
> $$\mathbf{x}^{(k)} \to \mathbf{x} \qquad \text{as } k \to \infty.$$

> **Corollary.** If $\|\mathbf{T}\| < 1$ in some matrix norm $\|\cdot\|$, then the iteration (1) is convergent for all initial value $\mathbf{x}^{(0)}$, and
> $$\|\mathbf{x} - \mathbf{x}^{(k)}\| \leq \|\mathbf{T}\|^k \|\mathbf{x} - \mathbf{x}^{(0)}\|.$$

> **Proof.** Subtracting the equations
> $$\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$$
> and
> $$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$
> we get
> $$\mathbf{x} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{x} - \mathbf{x}^{(k)}) = \cdots = \mathbf{T}^{k+1}(\mathbf{x} - \mathbf{x}^{(0)}).$$
> This yields the estimate of the statement.

Suppose that instead of the sequence

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots$$

we generate the sequence

$$
\begin{aligned}
\mathbf{y}^{(k+1)} &= \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}, \qquad k = 0, 1, \ldots, \\
\mathbf{y}^{(0)} &= \mathbf{x}^{(0)} + \mathbf{w}^{(0)},
\end{aligned}
$$

where the effect of the rounding error in the $k$th step is represented by $\mathbf{w}^{(k+1)}$, and $\mathbf{w}^{(0)}$ is the rounding error we get when we store the initial value of the sequence. We suppose that

$$\|\mathbf{w}^{(k)}\| \leq \varepsilon, \qquad k = 0, 1, \ldots$$

holds in a certain vector norm. We compute the difference of equations:

$$\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)}) + \mathbf{w}^{(k+1)}.$$

Then

$$
\begin{aligned}
\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| &\leq \|\mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)})\| + \|\mathbf{w}^{(k+1)}\| \\
&\leq \|\mathbf{T}\| \|\mathbf{y}^{(k)} - \mathbf{x}^{(k)}\| + \varepsilon \\
&\;\;\vdots \\
&\leq \|\mathbf{T}\|^{k+1} \|\mathbf{y}^{(0)} - \mathbf{x}^{(0)}\| + (\|\mathbf{T}\|^k + \cdots \|\mathbf{T}\| + 1)\varepsilon \\
&\leq (\|\mathbf{T}\|^{k+1} + \|\mathbf{T}\|^k + \cdots \|\mathbf{T}\| + 1)\varepsilon.
\end{aligned}
$$

If $\|\mathbf{T}\| < 1$, then the last expression can be estimated by the sum of the geometric series:

$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|}\varepsilon.$$

This shows that the computation is stable with respect to the rounding errors, and the smaller is $\|\mathbf{T}\|$ the smaller is the rounding error.

---

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

## 4.3. Gauss–Seidel Iteration

> **Example.** Consider again the system of the previous example, and its equivalent form
> $$
> \begin{aligned}
> x_1 &= (9 - 2x_2 + x_3)/4 \\
> x_2 &= (-8 + 5x_1 + 2x_3)/10 \\
> x_3 &= (-3 - 2x_1 + 3x_2)/7.
> \end{aligned}
> $$
> Define the iteration
> $$
> \begin{aligned}
> x_1^{(k+1)} &= (9 - 2x_2^{(k)} + x_3^{(k)})/4 \\
> x_2^{(k+1)} &= (-8 + 5x_1^{(k+1)} + 2x_3^{(k)})/10 \\
> x_3^{(k+1)} &= (-3 - 2x_1^{(k+1)} + 3x_2^{(k+1)})/7.
> \end{aligned}
> $$
> This is called **Gauss–Seidel iteration**.

> **Example cont.**
>
> **Gauss–Seidel iteration**
>
> | $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
> |----|------------|------------|------------|
> | 0  | 0.0000000  | 0.0000000  | 0.0000000  |
> | 1  | 2.2500000  | 0.3250000  | -0.9321429 |
> | 2  | 1.8544643  | -0.0591964 | -0.9837883 |
> | 3  | 2.0336511  | 0.0200679  | -1.0010141 |
> | 4  | 1.9897125  | -0.0053466 | -0.9993521 |
> | 5  | 2.0028353  | 0.0015472  | -1.0001470 |
> | 6  | 1.9991897  | -0.0004346 | -0.9999547 |
> | 7  | 2.0002286  | 0.0001234  | -1.0000124 |
> | 8  | 1.9999352  | -0.0000349 | -0.9999964 |
> | 9  | 2.0000183  | 0.0000099  | -1.0000010 |
> | 10 | 1.9999948  | -0.0000028 | -0.9999997 |
> | 11 | 2.0000015  | 0.0000008  | -1.0000001 |
> | 12 | 1.9999996  | -0.0000002 | -1.0000000 |

We define the **Gauss–Seidel iteration** to solve the $n$-dimensional linear system. For $k = 0, 1, 2, \ldots$ (if $a_{ii} \neq 0$ for all $i = 1, \ldots, n$) we define

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4}$$

Equation (4) can be rearranged to

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

i.e., using matrix notation,

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

where $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ is defined in the previous section. So the Gauss–Seidel iteration can be written in the form

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$$

with

$$\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U} \qquad \text{and} \qquad \mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}.$$

> **Theorem.** The Gauss–Seidel iteration is convergent for any initial value if and only if $\rho(\mathbf{T}_G) < 1$.

> **Corollary.** If $\|\mathbf{T}_G\| < 1$ in some matrix norm $\|\cdot\|$, then the Gauss–Seidel iteration is convergent for all initial values $\mathbf{x}^{(0)}$.

> **Theorem.** If $\mathbf{A}$ is diagonally dominant, then the Gauss–Seidel iteration is convergent for all initial values $\mathbf{x}^{(0)}$.

---

## 4.4. Error Bounds and the Condition Number

We can introduce stopping criteria for the Jacobi and the Gauss–Seidel iterations similar to nonlinear iterations:

$$\text{(i)} \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)} \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{(iii)} \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

The vector

$$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}$$

is called the **residual vector** of the approximate solution $\bar{\mathbf{x}}$ of the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}.$$

Hypothesis: if the norm of $\mathbf{r}$ is small, then $\bar{\mathbf{x}}$ is a good approximation of the exact solution $\mathbf{x}$.

> **Example.** The exact solution of the linear system
> $$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$
> is $\mathbf{x} = (1, 1)^T$. Consider
> $$\bar{\mathbf{x}} = (2, -3)^T$$
> as the "approximate" solution. The corresponding residual vector is
> $$\mathbf{r} = \mathbf{b} - \mathbf{A}\bar{\mathbf{x}} = (0, 0.03)^T.$$
> Its infinity norm is
> $$\|\mathbf{r}\|_\infty = 0.03,$$
> which is small, but $\bar{\mathbf{x}}$ cannot be considered as a good approximation of the true solution.

The next result gives conditions which imply that the smallness of the norm of $\|\mathbf{r}\|$ yields that the error of the approximation is also small.

> **Theorem.** Let $\mathbf{A}$ be a nonsingular square matrix, $\mathbf{x}$ be the exact solution of the system
> $$\mathbf{A}\mathbf{x} = \mathbf{b},$$
> the vector $\bar{\mathbf{x}}$ is an approximate solution, and
> $$\mathbf{r} := \mathbf{b} - \mathbf{A}\bar{\mathbf{x}}.$$
> Then
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|,$$
> and
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

> **Proof.** Subtracting relations
> $$\mathbf{A}\mathbf{x} = \mathbf{b}, \qquad \mathbf{A}\bar{\mathbf{x}} = \mathbf{b} - \mathbf{r}$$
> we get
> $$\mathbf{A}(\mathbf{x} - \bar{\mathbf{x}}) = \mathbf{r},$$
> and hence
> $$\mathbf{x} - \bar{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}.$$
> Then
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| = \|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|.$$
> Combining it with
> $$\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$$
> we get
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{r}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

The number

$$\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|$$

is called the **condition number** of the matrix $\mathbf{A}$ relative to a norm $\|\cdot\|$. The condition number corresponding to the $\|\cdot\|_p$ norm is denoted by $\mathrm{cond}_p(\mathbf{A})$. If a condition number of the matrix $\mathbf{A}$ is "big", then it is called **ill-conditioned**, otherwise it is called **well-conditioned**.

> **Example.** Consider the coefficient matrix $\mathbf{A} = \begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix}$ of an earlier example. We can check that
> $$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 143.3 & -133.3 \end{pmatrix},$$
> and so $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Therefore $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, hence $\mathbf{A}$ is ill-conditioned, and so $(2, -3)^T$ is not a good approximation of the true solution despite the fact that $\mathbf{r}$ is small in norm.

---

## 4.5. Perturbation of Linear Systems

> **Example.** Consider the linear system
> $$
> \begin{array}{rcrcrcr}
> x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 1 \\
> \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 1 \\
> \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 1.
> \end{array}
> $$
> Its exact solution is $x_1 = 3$, $x_2 = -24$ and $x_3 = 30$. Next suppose we compute the coefficients of the previous linear system up to 3 decimal digits, i.e., consider the system
> $$
> \begin{array}{rcrcrcr}
> y_1 & + & 0.5y_2 & + & 0.333y_3 & = & 1 \\
> 0.5y_1 & + & 0.333y_2 & + & 0.25y_3 & = & 1 \\
> 0.333y_1 & + & 0.25y_2 & + & 0.2y_3 & = & 1.
> \end{array}
> $$
> Its solution is $y_1 = 3.4460555$, $y_2 = -26.2735192$ and $y_3 = 32.1042167$. The difference of the two solutions is:
> $$|x_1 - y_1| = 0.4460555, \quad |x_2 - y_2| = 2.2735192, \quad |x_3 - y_3| = 2.1042167$$
> $$\frac{|x_1 - y_1|}{|x_2|} = 0.1486852, \quad \frac{|x_2 - y_2|}{|x_2|} = 0.09472997, \quad \frac{|x_3 - y_3|}{|x_3|} = 0.07014056$$

Consider the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}. \tag{5}$$

Suppose that instead of (5) we solve the linear system

$$\mathbf{A}\bar{\mathbf{x}} = \bar{\mathbf{b}}, \tag{6}$$

where $\bar{\mathbf{b}} := \mathbf{b} + \Delta\mathbf{b}$ is a perturbation of $\mathbf{b}$ by $\Delta\mathbf{b}$. Its exact solution is denoted by $\bar{\mathbf{x}}$.

> **Theorem.** Let $\mathbf{A}$ be a nonsingular square matrix, $\mathbf{x}$ and $\bar{\mathbf{x}}$ be solutions of the linear systems (5) and (6), respectively. Then
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

> **Proof.** Subtracting (5) and (6) we get
> $$\mathbf{A}(\mathbf{x} - \bar{\mathbf{x}}) = \mathbf{b} - \bar{\mathbf{b}},$$
> hence
> $$\mathbf{x} - \bar{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \bar{\mathbf{b}}),$$
> therefore,
> $$\|\mathbf{x} - \bar{\mathbf{x}}\| = \|\mathbf{A}^{-1}(\mathbf{b} - \bar{\mathbf{b}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \bar{\mathbf{b}}\|.$$
> Using this and the inequality
> $$\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$$
> it follows
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

Now we consider the general case, when we perturb both the coefficient matrix and the right-hand-side of the system. We consider the linear system

$$\tilde{\mathbf{A}}\bar{\mathbf{x}} = \bar{\mathbf{b}}, \tag{7}$$

where $\|\mathbf{b} - \bar{\mathbf{b}}\|$ and $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ are "small".

> **Theorem.** Let $\mathbf{A}$ be a nonsingular square matrix, and $\tilde{\mathbf{A}}$ be such that
> $$\|\mathbf{A} - \tilde{\mathbf{A}}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$
> Let $\mathbf{x}$ and $\bar{\mathbf{x}}$ be the exact solutions of (5) and (7), respectively. Then
> $$\frac{\|\mathbf{x} - \bar{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \bar{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

The following properties of the condition number can be proved easily.

> **Theorem.** Let $\|\cdot\|$ be a fixed matrix norm and $\mathrm{cond}(\cdot)$ be the corresponding condition number function. Then
>
> &nbsp;&nbsp;(i) $\mathrm{cond}(\mathbf{A}) \geq 1$,
>
> &nbsp;&nbsp;(ii) $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$
>
> hold for all invertible matrix $\mathbf{A}$.

The number $\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ is called the **spectral condition number** of the matrix $\mathbf{A}$.

> **Theorem (Gastinel).** Let $\|\cdot\|$ be a matrix norm, $\mathbf{A}$ be invertible. Then
> $$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ is singular} \right\}.$$

An example for an ill-conditioned matrix is the so-called **Hilbert-matrix**:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

**Spectral condition number of the Hilbert-matrix**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |
