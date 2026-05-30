## 4.1 Linear fixed-point iteration

We investigate linear $n$-dimensional fixed-point iterations of the form

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots \tag{4.1}$$

associated with the fixed-point equation $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$, where $\mathbf{T} \in \mathbb{R}^{n \times n}$ and $\mathbf{c} \in \mathbb{R}^n$. When $\mathbf{c} = \mathbf{0}$ the iterates are simply $\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)}$, so convergence hinges on whether the powers $\mathbf{T}^k$ tend to the zero matrix.

> **Theorem 4.1.** The following statements are equivalent:
> 1. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ (zero matrix), i.e. $\lim_{k\to\infty}\|\mathbf{T}^k\| = 0$ for any matrix norm;
> 2. $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ for all $\mathbf{x} \in \mathbb{R}^n$;
> 3. $\rho(\mathbf{T}) < 1$.

Here $\rho(\mathbf{T}) = \max\{|\lambda| : \lambda \text{ is an eigenvalue of } \mathbf{T}\}$ is the **spectral radius**.

> **Theorem 4.2.** If $\|\mathbf{T}\| < 1$ in some matrix norm $\|\cdot\|$, then $\|\mathbf{T}^k\| \to 0$ as $k \to \infty$.

## The Neumann series

For a scalar $|a| < 1$ we have $1 + a + a^2 + \cdots = \tfrac{1}{1-a}$. The matrix analogue is the **geometric** (or **Neumann**) **series** $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$.

> **Theorem 4.3.** If $\rho(\mathbf{A}) < 1$, then the geometric series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots$ converges, the matrix $\mathbf{I} - \mathbf{A}$ is invertible, and
> $$(\mathbf{I} - \mathbf{A})^{-1} = \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots .$$
> Conversely, if the series converges then $\rho(\mathbf{A}) < 1$.

> **Corollary 4.4.** If $\|\mathbf{A}\| < 1$ in some matrix norm, then $\mathbf{I} - \mathbf{A}$ is invertible, the series converges to $(\mathbf{I}-\mathbf{A})^{-1}$, and
> $$\|(\mathbf{I} - \mathbf{A})^{-1}\| \leq \frac{1}{1 - \|\mathbf{A}\|}.$$

A consequence: if $\mathbf{A}$ is nonsingular, every matrix "close" to $\mathbf{A}$ is also nonsingular.

> **Theorem 4.5.** Let $\mathbf{A}, \mathbf{B}$ be $n \times n$ matrices, $\mathbf{A}$ nonsingular, and $\|\mathbf{A} - \mathbf{B}\| < \tfrac{1}{\|\mathbf{A}^{-1}\|}$. Then $\mathbf{B}$ is also nonsingular, and
> $$\|\mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\|\,\|\mathbf{A} - \mathbf{B}\|}, \tag{4.3}$$
> $$\|\mathbf{A}^{-1} - \mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|^2\,\|\mathbf{A} - \mathbf{B}\|}{1 - \|\mathbf{A}^{-1}\|\,\|\mathbf{A} - \mathbf{B}\|}. \tag{4.4}$$

## The general iteration

The $k$-th iterate of (4.1) is
$$\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}.$$

> **Theorem 4.6.** Let $\mathbf{c} \neq \mathbf{0}$. The equation $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ has a unique solution, and the iteration (4.1) converges to it for **every** $\mathbf{x}^{(0)}$ if and only if $\rho(\mathbf{T}) < 1$.

> **Corollary 4.7.** If $\|\mathbf{T}\| < 1$ in some matrix norm, then (4.1) converges for all $\mathbf{x}^{(0)}$, and
> $$\|\mathbf{x} - \mathbf{x}^{(k)}\| \leq \|\mathbf{T}\|^k \,\|\mathbf{x} - \mathbf{x}^{(0)}\|. \tag{4.6}$$

So the smaller $\|\mathbf{T}\|$ (or $\rho(\mathbf{T})$), the faster the convergence.

## Stability under rounding error

Suppose that instead of (4.1) we generate
$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}, \qquad \mathbf{y}^{(0)} = \mathbf{x}^{(0)} + \mathbf{w}^{(0)}, \tag{4.7–4.8}$$

where the rounding errors satisfy $\|\mathbf{w}^{(k)}\| \leq \varepsilon$. Then
$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq (\|\mathbf{T}\|^{k+1} + \cdots + \|\mathbf{T}\| + 1)\,\varepsilon,$$
and if $\|\mathbf{T}\| < 1$ this is bounded by the geometric sum
$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|}\,\varepsilon.$$

The computation is therefore **stable**: the smaller $\|\mathbf{T}\|$, the smaller the accumulated rounding error.
