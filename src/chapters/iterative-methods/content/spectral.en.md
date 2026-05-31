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

## Exercises

1. Compute the spectral condition number $\operatorname{cond}_*(\mathbf{A})$ for $\mathbf{A} = \left(\begin{smallmatrix} 1 & 4 \\ 2 & -1 \end{smallmatrix}\right)$.

   <details class="reveal-solution"><summary>Show solution</summary>

   The eigenvalues solve $\det(\mathbf{A} - \lambda\mathbf{I}) = (1-\lambda)(-1-\lambda) - 8 = \lambda^2 - 9 = 0$, so $\lambda_1 = 3$, $\lambda_2 = -3$. The eigenvalues of $\mathbf{A}^{-1}$ are $1/3$ and $-1/3$. Hence $\operatorname{cond}_*(\mathbf{A}) = \rho(\mathbf{A})\rho(\mathbf{A}^{-1}) = 3 \cdot \tfrac13 = 1$ — this matrix is perfectly conditioned.

   </details>

2. Prove Theorem 4.24: for any invertible $\mathbf{A}$, (1) $\operatorname{cond}(\mathbf{A}) \geq 1$ and (2) $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \operatorname{cond}(\mathbf{A})$.

   <details class="reveal-solution"><summary>Show solution</summary>

   **(1)** By submultiplicativity, $\operatorname{cond}(\mathbf{A}) = \|\mathbf{A}\|\|\mathbf{A}^{-1}\| \geq \|\mathbf{A}\mathbf{A}^{-1}\| = \|\mathbf{I}\| = 1$. **(2)** For any eigenvalue $\lambda$ of $\mathbf{A}$ with unit eigenvector $\mathbf{v}$, $\|\mathbf{A}\| \geq \|\mathbf{A}\mathbf{v}\| = |\lambda|$, so $\|\mathbf{A}\| \geq \rho(\mathbf{A})$; likewise $\|\mathbf{A}^{-1}\| \geq \rho(\mathbf{A}^{-1})$. Multiplying gives $\operatorname{cond}(\mathbf{A}) = \|\mathbf{A}\|\|\mathbf{A}^{-1}\| \geq \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$. $\square$

   </details>

3. Show that $\operatorname{cond}_*(\mathbf{A}) = \dfrac{\max\{|\lambda_1|,\dots,|\lambda_n|\}}{\min\{|\lambda_1|,\dots,|\lambda_n|\}}$.

   <details class="reveal-solution"><summary>Show solution</summary>

   If $\lambda_1,\dots,\lambda_n$ are the eigenvalues of $\mathbf{A}$, then $1/\lambda_1,\dots,1/\lambda_n$ are the eigenvalues of $\mathbf{A}^{-1}$. Thus $\rho(\mathbf{A}) = \max_i|\lambda_i|$ and $\rho(\mathbf{A}^{-1}) = \max_i|1/\lambda_i| = 1/\min_i|\lambda_i|$. Therefore $\operatorname{cond}_*(\mathbf{A}) = \rho(\mathbf{A})\rho(\mathbf{A}^{-1}) = \dfrac{\max_i|\lambda_i|}{\min_i|\lambda_i|}$. $\square$

   </details>
