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

