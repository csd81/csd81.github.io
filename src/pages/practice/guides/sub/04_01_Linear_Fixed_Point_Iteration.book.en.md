## 4.1. Linear Fixed-Point Iteration

In this section we investigate linear $n$ dimensional fixed-point iterations of the form

$$\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}, \qquad k = 0, 1, 2, \ldots . \tag{4.1}$$

First we consider the case when $\mathbf{c} = \mathbf{0}$. Then it is easy to see that $\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)}$ for all $k = 1, 2, \ldots$.

**Theorem 4.1.** *The following statements are equivalent:*

&nbsp;&nbsp;*(i)* $\displaystyle\lim_{k\to\infty} \mathbf{T}^k = \mathbf{0}$ *(zero matrix), i.e.,* $\displaystyle\lim_{k\to\infty} \|\mathbf{T}^k\| = 0$ *for any matrix norm* $\|\cdot\|$;

&nbsp;&nbsp;*(ii)* $\displaystyle\lim_{k\to\infty} \mathbf{T}^k \mathbf{x} = \mathbf{0}$ *(zero vector) for all* $\mathbf{x} \in \mathbb{R}^n$, *i.e.,* $\displaystyle\lim_{k\to\infty} \|\mathbf{T}^k \mathbf{x}\| = 0$ *for all* $\mathbf{x} \in \mathbb{R}^n$ *and for any vector norm* $\|\cdot\|$;

&nbsp;&nbsp;*(iii)* $\rho(\mathbf{T}) < 1$.

**Proof.** Statement (ii) follows from (i), since

$$\|\mathbf{T}^k \mathbf{x}\| \leq \|\mathbf{T}^k\| \|\mathbf{x}\|$$

for all $x \in \mathbb{R}^n$ and for any norm $\|\cdot\|$.

Suppose (ii) holds. Let $\lambda$ be an eigenvalue of $\mathbf{T}$, and let $\mathbf{v}$ be an eigenvector corresponding to $\lambda$. Then $\mathbf{T}^k \mathbf{v} = \lambda^k \mathbf{v}$, hence $\mathbf{T}^k \mathbf{v} \to \mathbf{0}$ (as $k \to \infty$) implies $|\lambda| < 1$, since $\mathbf{v} \neq \mathbf{0}$. Since $\lambda$ was an arbitrary eigenvalue of $\mathbf{T}$, $\rho(\mathbf{T}) < 1$ is satisfied.

Now suppose (iii) holds. Theorem 3.17 implies that there exists a matrix norm $\|\cdot\|$ and $\varepsilon > 0$ such that $\|\mathbf{T}\| \leq \rho(\mathbf{T}) + \varepsilon < 1$. Then

$$\|\mathbf{T}^k\| \leq \|\mathbf{T}\|^k \leq (\rho(\mathbf{T}) + \varepsilon)^k \to 0,$$

as $k \to \infty$. But then Theorem 2.47 yields $\|\mathbf{T}^k\| \to 0$ in any matrix norm $\|\cdot\|$, so (i) holds. $\qquad\square$

The next theorem states that $\|\mathbf{T}\| < 1$ implies $\|\mathbf{T}^k\| \to 0$.

**Theorem 4.2.** *If* $\|\mathbf{T}\| < 1$ *in some matrix norm* $\|\cdot\|$, *then* $\|\mathbf{T}^k\| \to 0$ *as* $k \to \infty$.

**Proof.** The statement follows from $\|\mathbf{T}^k\| \leq \|\mathbf{T}\|^k$. $\qquad\square$

Next we investigate the convergence of the matrix *geometric series* or *Neumann-series* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$, where $\mathbf{A}$ is a square matrix.

**Theorem 4.3.** *If* $\rho(\mathbf{A}) < 1$, *then the geometric series* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ *is convergent, the matrix* $\mathbf{I} - \mathbf{A}$ *is invertible, and*

$$(\mathbf{I} - \mathbf{A})^{-1} = \mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots .$$

*Conversely, if the geometric series* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ *is convergent, then* $\rho(\mathbf{A}) < 1$.

**Proof.** Let $\rho(\mathbf{A}) < 1$. Suppose that $\mathbf{I} - \mathbf{A}$ is not invertible. Then Theorem 3.3 yields that there exists a nonzero vector $\mathbf{x} \neq \mathbf{0}$ such that $(\mathbf{I} - \mathbf{A})\mathbf{x} = \mathbf{0}$. But then $\mathbf{A}\mathbf{x} = \mathbf{x}$, i.e., $1$ is an eigenvalue of $\mathbf{A}$, which contradicts to the assumption that $\rho(\mathbf{A}) < 1$. Hence $\mathbf{I} - \mathbf{A}$ is invertible.

It is easy to check that

$$(\mathbf{I} - \mathbf{A})(\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m) = \mathbf{I} - \mathbf{A}^{m+1}. \tag{4.2}$$

Therefore,

$$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m = (\mathbf{I} - \mathbf{A})^{-1}(\mathbf{I} - \mathbf{A}^{m+1}),$$

and so, using that Theorem 4.1 implies $\mathbf{A}^{m+1} \to 0$, we get

$$\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m \to (\mathbf{I} - \mathbf{A})^{-1},$$

as $m \to \infty$.

Now suppose that the geometric series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ is convergent. Then it is easy to see that $\mathbf{A}^m \to \mathbf{0}$, and hence Theorem 4.1 yields $\rho(\mathbf{A}) < 1$. $\qquad\square$

**Corollary 4.4.** *If* $\|\mathbf{A}\| < 1$ *in some matrix norm* $\|\cdot\|$, *then the matrix* $\mathbf{I} - \mathbf{A}$ *is invertible, the geometric series* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ *is convergent,* $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots = (\mathbf{I} - \mathbf{A})^{-1}$, *and*

$$\|(\mathbf{I} - \mathbf{A})^{-1}\| \leq \frac{1}{1 - \|\mathbf{A}\|}.$$

**Proof.** We have to prove only the last statement, the others follow immediately from Theorems 4.3 and 3.16. Using the continuity of the matrix norm, the triangle-inequality and the properties of the norm, we get

$$
\begin{aligned}
\|(\mathbf{I} - \mathbf{A})^{-1}\| &= \Big\| \lim_{m\to\infty} (\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m) \Big\| \\
&= \lim_{m\to\infty} \|\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots + \mathbf{A}^m\| \\
&\leq \lim_{m\to\infty} (\|\mathbf{I}\| + \|\mathbf{A}\| + \|\mathbf{A}^2\| + \|\mathbf{A}^3\| + \cdots + \|\mathbf{A}^m\|) \\
&\leq \lim_{m\to\infty} (1 + \|\mathbf{A}\| + \|\mathbf{A}\|^2 + \|\mathbf{A}\|^3 + \cdots + \|\mathbf{A}\|^m) \\
&= \frac{1}{1 - \|\mathbf{A}\|}.
\end{aligned}
$$

$\square$

The last result has an important consequence: if $\mathbf{A}$ is nonsingular, then all matrices "close" to $\mathbf{A}$ are also nonsingular.

**Theorem 4.5.** *Let* $\mathbf{A}$ *and* $\mathbf{B}$ *be* $n \times n$ *matrices. Let* $\mathbf{A}$ *be nonsingular, and*

$$\|\mathbf{A} - \mathbf{B}\| < \frac{1}{\|\mathbf{A}^{-1}\|}.$$

*Then* $\mathbf{B}$ *is also nonsingular, moreover,*

$$\|\mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|} \tag{4.3}$$

*and*

$$\|\mathbf{A}^{-1} - \mathbf{B}^{-1}\| \leq \frac{\|\mathbf{A}^{-1}\|^2 \|\mathbf{A} - \mathbf{B}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\|}. \tag{4.4}$$

**Proof.** Consider the identities $\mathbf{B} = \mathbf{A} - (\mathbf{A} - \mathbf{B}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B}))$. Using the assumption we get $\|\mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \mathbf{B}\| < 1$, therefore, Corollary 4.4 yields that the matrix $\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B})$ is invertible. But then $\mathbf{B}^{-1} = (\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \mathbf{B}))^{-1} \mathbf{A}^{-1}$ also exists. From this, relation $\mathbf{A}^{-1} - \mathbf{B}^{-1} = \mathbf{A}^{-1}(\mathbf{B} - \mathbf{A})\mathbf{B}^{-1}$ and Corollary 4.4 imply estimates (4.3) and (4.4). $\qquad\square$

Consider again the fixed-point problem (4.1). Now we consider the general case. It is easy to see that the $k$th term of the fixed-point iteration is

$$\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c}, \qquad k = 1, 2, \ldots .$$

Theorems 4.1 and 4.3 imply the following results.

**Theorem 4.6.** *Let* $\mathbf{c} \neq \mathbf{0}$. *The fixed-point equation* $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ *has a unique solution and the fixed-point iteration* (4.1) *converges to the unique solution of the equation for all* $\mathbf{x}^{(0)}$ *if and only if* $\rho(\mathbf{T}) < 1$.

**Proof.** Let $\rho(\mathbf{T}) < 1$. Then Theorem 4.3 yields that $\mathbf{I} - \mathbf{T}$ is invertible, hence the equation $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ has a unique solution: $\mathbf{x} = (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c}$. Theorems 4.1 and 4.3 imply that $\mathbf{T}^k \mathbf{x}^{(0)} \to 0$ for all $\mathbf{x}^{(0)} \in \mathbb{R}^n$, and $(\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{T} + \mathbf{I})\mathbf{c} \to (\mathbf{I} - \mathbf{T})^{-1}\mathbf{c}$ as $k \to \infty$.

Conversely, let $\mathbf{x}$ be the solution of $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$, and suppose $\mathbf{x}^{(k)} \to \mathbf{x}$ as $k \to \infty$. Then subtracting the equations $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ and $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ we get $\mathbf{x} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{x} - \mathbf{x}^{(k)})$, and so

$$\mathbf{x} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{x} - \mathbf{x}^{(k)}) = \cdots = \mathbf{T}^{k+1}(\mathbf{x} - \mathbf{x}^{(0)}). \tag{4.5}$$

Let $\mathbf{z}$ be an arbitrary vector, and $\mathbf{x}^{(0)} = \mathbf{x} - \mathbf{z}$. Then

$$\lim_{k\to\infty} \mathbf{T}^{k+1} \mathbf{z} = \lim_{k\to\infty} \mathbf{T}^{k+1}(\mathbf{x} - \mathbf{x}^{(0)}) = \lim_{k\to\infty} (\mathbf{x} - \mathbf{x}^{(k+1)}) = \mathbf{x} - \mathbf{x} = \mathbf{0}.$$

Theorem 4.1 yields $\rho(\mathbf{T}) < 1$. $\qquad\square$

**Corollary 4.7.** *If* $\|\mathbf{T}\| < 1$ *in some matrix norm* $\|\cdot\|$, *then the iteration* (4.1) *is convergent for all initial values* $\mathbf{x}^{(0)}$, *and*

$$\|\mathbf{x} - \mathbf{x}^{(k)}\| \leq \|\mathbf{T}\|^k \|\mathbf{x} - \mathbf{x}^{(0)}\|. \tag{4.6}$$

Estimate (4.6) implies that the smaller the $\|\mathbf{T}\|$ is, the faster the convergence of the sequence $\mathbf{x}^{(k)}$. Therefore, Theorem 3.17 yields that the smaller the $\rho(\mathbf{T})$ is, the faster the convergence (in a certain norm) of the sequence $\mathbf{x}^{(k)}$.

Next we investigate the effect of rounding error in the computation of the linear fixed-point iteration. Suppose that instead of the sequence (4.1) we generate the sequence

$$\mathbf{y}^{(k+1)} = \mathbf{T}\mathbf{y}^{(k)} + \mathbf{c} + \mathbf{w}^{(k+1)}, \qquad k = 0, 1, \ldots, \tag{4.7}$$

$$\mathbf{y}^{(0)} = \mathbf{x}^{(0)} + \mathbf{w}^{(0)}, \tag{4.8}$$

where the effect of the rounding error in the $k$th step is represented by $\mathbf{w}^{(k+1)}$, and $\mathbf{w}^{(0)}$ is the rounding error we get when we store the initial value of the sequence. We suppose that

$$\|\mathbf{w}^{(k)}\| \leq \varepsilon, \qquad k = 0, 1, \ldots$$

holds in a certain vector norm. We compute the difference of equations (4.7) and (4.1):

$$\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)} = \mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)}) + \mathbf{w}^{(k+1)}.$$

Then

$$
\begin{aligned}
\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| &\leq \|\mathbf{T}(\mathbf{y}^{(k)} - \mathbf{x}^{(k)})\| + \|\mathbf{w}^{(k+1)}\| \\
&\leq \|\mathbf{T}\| \|\mathbf{y}^{(k)} - \mathbf{x}^{(k)}\| + \varepsilon \\
&\;\;\vdots \\
&\leq \|\mathbf{T}\|^{k+1} \|\mathbf{y}^{(0)} - \mathbf{x}^{(0)}\| + (\|\mathbf{T}\|^k + \cdots + \|\mathbf{T}\| + 1)\varepsilon \\
&\leq (\|\mathbf{T}\|^{k+1} + \|\mathbf{T}\|^k + \cdots + \|\mathbf{T}\| + 1)\varepsilon.
\end{aligned}
$$

If $\|\mathbf{T}\| < 1$, then the last expression can be estimated by the sum of the geometric series:

$$\|\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}\| \leq \frac{1}{1 - \|\mathbf{T}\|}\varepsilon.$$

This shows that the computation is stable with respect to the rounding errors, and the smaller the $\|\mathbf{T}\|$ is, the smaller the rounding error is.

### Exercises

1. Compute the sum of the geometric series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$ for

$$\text{(a)} \quad \mathbf{A} = \begin{pmatrix} 0 & 1 & 2 & 3 \\ 0 & 0 & 1 & 2 \\ 0 & 0 & 0 & 1 \\ 0 & 0 & 0 & 0 \end{pmatrix}, \qquad \text{(b)} \quad \mathbf{A} = \begin{pmatrix} 1/2 & 0 & 0 & 0 \\ 0 & 1/3 & 0 & 0 \\ 0 & 0 & 1/4 & 0 \\ 0 & 0 & 0 & 1/5 \end{pmatrix}.$$

2. Prove identity (4.2).

3. Work out the details of the proofs of (4.3) and (4.4).

4. Find all values of the parameter $\alpha$ for which the matrix sequence

$$\begin{pmatrix} 1 & 2 \\ \alpha & 0 \end{pmatrix}^k$$

converges to the zero matrix.

