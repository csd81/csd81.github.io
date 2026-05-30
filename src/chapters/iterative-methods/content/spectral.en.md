## Eigenvalues and the spectral radius

A complex number $\lambda \in \mathbb{C}$ is an **eigenvalue** of $\mathbf{A} \in \mathbb{R}^{n \times n}$ if $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ has a nontrivial solution $\mathbf{x} \neq \mathbf{0}$ (an **eigenvector**). Equivalently $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$.

> **Theorem.** An $n \times n$ matrix has $n$ eigenvalues, the roots of the $n$-th degree **characteristic equation**
> $$\det(\mathbf{A} - \lambda\mathbf{I}) = 0.$$

The **spectral radius** is the largest eigenvalue magnitude:

$$\rho(\mathbf{A}) = \max\{|\lambda| : \lambda \text{ is an eigenvalue of } \mathbf{A}\}.$$

> **Theorem.** For any matrix norm $\|\cdot\|$,
> $$\rho(\mathbf{A}) \leq \|\mathbf{A}\|.$$

So every matrix norm bounds the spectral radius from above. Conversely (Theorem 3.17 of the text), for any $\varepsilon > 0$ there is a norm with $\|\mathbf{A}\| \leq \rho(\mathbf{A}) + \varepsilon$.

## Useful matrix norms

- $\|\mathbf{T}\|_\infty$ — the largest absolute **row** sum;
- $\|\mathbf{T}\|_1$ — the largest absolute **column** sum;
- $\|\mathbf{T}\|_2$ — the largest **singular value** (the spectral norm).

## The convergence test

The iteration $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ converges for every starting point **if and only if** $\rho(\mathbf{T}) < 1$ — that is, **every eigenvalue lies strictly inside the unit circle** of the complex plane.

A norm test is only **sufficient**: if some $\|\mathbf{T}\| < 1$ then convergence is guaranteed (since $\rho(\mathbf{T}) \leq \|\mathbf{T}\| < 1$), but a method can still converge when $\|\mathbf{T}\| \geq 1$, as long as $\rho(\mathbf{T}) < 1$. The plot below shows the eigenvalues against the unit circle so you can read off the verdict directly.
