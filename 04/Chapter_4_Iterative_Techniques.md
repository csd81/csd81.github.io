# Chapter 4

# Iterative Techniques for Solving Linear Systems

In this chapter we first discuss the theory of linear fixed-point iteration, and then we apply it for the solution of linear systems (we define the Jacobi and Gauss–Seidel iterations). Finally, we introduce the condition number of matrices, and study perturbation of linear systems.

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

## 4.3. Gauss–Seidel Iteration

**Example 4.12.** Consider again the system (4.9), and its equivalent form (4.10). Define the iteration

$$
\begin{aligned}
x_1^{(k+1)} &= (-4 - 3x_2^{(k)} + x_3^{(k)})/5 \\
x_2^{(k+1)} &= (-25 + 2x_1^{(k+1)} + x_3^{(k)})/10 \\
x_3^{(k+1)} &= (47 - 3x_1^{(k+1)} + 4x_2^{(k+1)})/12.
\end{aligned}
\tag{4.16}
$$

The difference between the iterations (4.11) and (4.16) is that here if a new value of a variable $x_i$ is computed, then its is immediately used in the computation of the next iteration. The $k+1$-th value of $x_1$ is computed in the first equation, then in the computation of the new value of $x_2$ the updated value of $x_1^{(k+1)}$ is used in the second equation (which is hopefully a better approximation of $x_1$ than $x_1^{(k)}$) together with $x_3^{(k)}$, which has no new value at this moment. In Table 4.2 we present the numerical results corresponding to the initial values $x_1^{(0)} = x_2^{(0)} = x_3^{(0)} = 0$. We can observe that this method converges faster to the limits than the Jacobi iteration. $\qquad\square$

**Table 4.2: Gauss–Seidel iteration**

| $k$ | $x_1^{(k)}$ | $x_2^{(k)}$ | $x_3^{(k)}$ |
|----|------------|------------|------------|
| 0  | 0.000000   | 0.000000   | 0.000000   |
| 1  | -0.800000  | -2.660000  | 3.230000   |
| 2  | 1.442000   | -1.888600  | 2.926633   |
| 3  | 0.918487   | -2.023639  | 3.012499   |
| 4  | 1.016683   | -1.995413  | 2.997358   |
| 5  | 0.996720   | -2.000920  | 3.000513   |
| 6  | 1.000655   | -1.999818  | 2.999897   |
| 7  | 0.999870   | -2.000036  | 3.000020   |
| 8  | 1.000026   | -1.999993  | 2.999996   |
| 9  | 0.999995   | -2.000001  | 3.000001   |
| 10 | 1.000001   | -2.000000  | 3.000000   |
| 11 | 1.000000   | -2.000000  | 3.000000   |

Now consider again the general linear system (4.13). Motivated by the example above, we define the *Gauss–Seidel iteration* to solve the system (4.13). For $k = 0, 1, 2, \ldots$ (if $a_{ii} \neq 0$ for all $i = 1, \ldots, n$) we define

$$x_i^{(k+1)} = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} x_j^{(k+1)} - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} x_j^{(k)} + \frac{b_i}{a_{ii}}, \qquad i = 1, \ldots, n. \tag{4.17}$$

Equation (4.17) can be rearranged to

$$\sum_{j=1}^{i} a_{ij} x_j^{(k+1)} = -\sum_{j=i+1}^{n} a_{ij} x_j^{(k)} + b_i, \qquad i = 1, \ldots, n,$$

i.e., using matrix notation,

$$(\mathbf{D} + \mathbf{L})\mathbf{x}^{(k+1)} = -\mathbf{U}\mathbf{x}^{(k)} + \mathbf{b},$$

where $\mathbf{L}$, $\mathbf{D}$, $\mathbf{U}$ is defined in the previous section. So the Gauss–Seidel iteration can be written in the form (4.12) with $\mathbf{T} = \mathbf{T}_G := -(\mathbf{D} + \mathbf{L})^{-1}\mathbf{U}$ and $\mathbf{c} = (\mathbf{D} + \mathbf{L})^{-1}\mathbf{b}$.

Theorem 4.6 and Corollary 4.7 imply immediately the next results.

**Theorem 4.13.** *The Gauss–Seidel iteration is convergent for any initial value if and only if* $\rho(\mathbf{T}_G) < 1$.

**Corollary 4.14.** *If* $\|\mathbf{T}_G\| < 1$ *in some matrix norm* $\|\cdot\|$, *then the Gauss–Seidel iteration is convergent for all initial values* $\mathbf{x}^{(0)}$.

Similarly to the Jacobi iteration, the Gauss–Seidel iteration is also convergent if the coefficient matrix is diagonally dominant.

**Theorem 4.15.** *If* $\mathbf{A}$ *is diagonally dominant, then the Gauss–Seidel iteration is convergent for all initial values* $\mathbf{x}^{(0)}$.

**Proof.** Let $\mathbf{x} = (x_1, \ldots, x_n)^T$ be the solution of equation (4.13). Then we express $x_i$ from the $i$th equation of (4.13), and subtracting it from (4.17), we get

$$x_i^{(k+1)} - x_i = -\sum_{j=1}^{i-1} \frac{a_{ij}}{a_{ii}} (x_j^{(k+1)} - x_j) - \sum_{j=i+1}^{n} \frac{a_{ij}}{a_{ii}} (x_j^{(k)} - x_j).$$

Therefore,

$$|x_i^{(k+1)} - x_i| \leq \sum_{j=1}^{i-1} \left| \frac{a_{ij}}{a_{ii}} \right| |x_j^{(k+1)} - x_j| + \sum_{j=i+1}^{n} \left| \frac{a_{ij}}{a_{ii}} \right| |x_j^{(k)} - x_j|. \tag{4.18}$$

Let

$$\alpha_i := \sum_{j=1}^{i-1} \left| \frac{a_{ij}}{a_{ii}} \right| \qquad \text{and} \qquad \beta_i := \sum_{j=i+1}^{n} \left| \frac{a_{ij}}{a_{ii}} \right|.$$

With this notation inequality (4.18) yields

$$|x_i^{(k+1)} - x_i| \leq \alpha_i \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty + \beta_i \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty$$

for $i = 1, \ldots, n$. Let $l$ be an index for which $|x_l^{(k+1)} - x_l| = \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty$. Then

$$\|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty \leq \alpha_l \|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty + \beta_l \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty.$$

The matrix $\mathbf{A}$ is diagonally dominant, therefore, $\alpha_l < 1$, and so

$$\|\mathbf{x}^{(k+1)} - \mathbf{x}\|_\infty \leq \frac{\beta_l}{1 - \alpha_l} \|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty.$$

Hence we obtain

$$\|\mathbf{x}^{(k)} - \mathbf{x}\|_\infty \leq \left( \max_{l=1,\ldots,n} \frac{\beta_l}{1 - \alpha_l} \right)^k \|\mathbf{x}^{(0)} - \mathbf{x}\|_\infty.$$

This guarantees that the Gauss–Seidel iteration is convergent, since the diagonal dominance yields

$$\frac{\beta_l}{1 - \alpha_l} \leq \alpha_l + \beta_l < 1$$

for all $l = 1, \ldots, n$, and so

$$\max_{l=1,\ldots,n} \frac{\beta_l}{1 - \alpha_l} \leq \max_{l=1,\ldots,n} \{\alpha_l + \beta_l\} = \|\mathbf{T}_J\|_\infty < 1 \tag{4.19}$$

follows. $\qquad\square$

Estimate (4.19) yields that the error estimate of the Gauss–Seidel iteration is better than that of for the Jacobi iteration. So, in general, the Gauss–Seidel iteration converges faster for the case of a diagonally dominant coefficient matrix. In the general case the Gauss–Seidel iteration is faster than the Jacobi iteration if $\rho(\mathbf{T}_G) < \rho(\mathbf{T}_J)$. But we do not know a general condition in terms of the coefficient matrix $\mathbf{A}$ to check this relation. We formulate one result below for a special case without proof.

**Theorem 4.16 (Stein–Rosenberg).** *Suppose* $a_{ij} \leq 0$ *if* $i \neq j$ *and* $a_{ii} > 0$ *for all* $i = 1, \ldots, n$. *Then exactly one of the statements holds:*

&nbsp;&nbsp;*1.* $0 \leq \rho(\mathbf{T}_G) < \rho(\mathbf{T}_J) < 1$,

&nbsp;&nbsp;*2.* $1 < \rho(\mathbf{T}_J) < \rho(\mathbf{T}_G)$,

&nbsp;&nbsp;*3.* $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 0$,

&nbsp;&nbsp;*4.* $\rho(\mathbf{T}_J) = \rho(\mathbf{T}_G) = 1$.

The theorem implies that for systems satisfying the conditions of the theorem the Jacobi iteration is convergent if and only if the Gauss–Seidel iteration is convergent, and the Gauss–Seidel iteration is faster. But in general we can find examples when the Jacobi iteration converges faster than the Gauss–Seidel iteration.

### Exercises

1. Solve the systems given in Exercise 1 of the previous section using Gauss–Seidel iteration.

2. Show that both the Jacobi and the Gauss–Seidel iteration determine the exact root of the system in finitely many steps if $\mathbf{A}$ is upper triangular and $a_{ii} \neq 0$ for $i = 1, \ldots, n$.

## 4.4. Error Bounds and Iterative Refinement

We can introduce stopping criteria for the Jacobi and the Gauss–Seidel iterations similar to nonlinear iterations. As we defined in Section 2.8, we can use the following stopping criteria or any combination of them:

$$\text{(i)} \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)} \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon \quad \text{and} \quad \text{(iii)} \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Condition (iii) is a natural analogue of condition (iii) of Section 2.8 used for nonlinear equations. We investigate this criterion in this section.

The vector $\mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$ is called the *residual vector* of the approximate solution $\tilde{\mathbf{x}}$ of the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$. The stopping criterion (iii) relies on the hypothesis that if the norm of $\mathbf{r}$ is small, then $\tilde{\mathbf{x}}$ is a good approximation of the exact solution $\mathbf{x}$. The following example shows that this is not necessarily true in general.

**Example 4.17.** The exact solution of the linear system

$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix} \tag{4.20}$$

is $\mathbf{x} = (1, 1)^T$. Consider $\tilde{\mathbf{x}} = (2, -3)^T$ as the "approximate" solution. The corresponding residual vector is $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.03)^T$. Its infinity norm is $\|\mathbf{r}\|_\infty = 0.03$, which is small, but $\tilde{\mathbf{x}}$ cannot be considered as a good approximation of the true solution. $\qquad\square$

The next result gives conditions which imply that the smallness of the norm of $\|\mathbf{r}\|$ yields that the error of the approximation is also small.

**Theorem 4.18.** *Let* $\mathbf{A}$ *be a nonsingular square matrix,* $\mathbf{x}$ *be the exact solution of the system* $\mathbf{A}\mathbf{x} = \mathbf{b}$, *the vector* $\tilde{\mathbf{x}}$ *is an approximate solution, and* $\mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. *Then*

$$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|, \tag{4.21}$$

*and*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}. \tag{4.22}$$

**Proof.** From the relations $\mathbf{A}\mathbf{x} = \mathbf{b}$ and $\mathbf{A}\tilde{\mathbf{x}} = \mathbf{b} - \mathbf{r}$ we have $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{r}$, and hence $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}$. This relation together with $\|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|$ implies (4.21).

Estimates (4.21) and $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ yield

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{r}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

$\square$

The previous result answers our previous question: if the residual vector is small in norm, then it implies the smallness of the error of the approximation only if the product $\|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ is not too big. The number $\mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ is called the *condition number* of the matrix $\mathbf{A}$ relative to a norm $\|\cdot\|$. The condition number corresponding to the $\|\cdot\|_p$ norm is denoted by $\mathrm{cond}_p(\mathbf{A})$. If a condition number of the matrix $\mathbf{A}$ is "big", then it is called *ill-conditioned*, otherwise it is called *well-conditioned*. It is not defined exactly how big the condition number should be in order to call the matrix ill-conditioned. In practice, if the condition number is bigger than 100–1000, then we say that the matrix is ill-conditioned. Therefore, if the coefficient matrix is ill-conditioned then the stopping criterion (iii) is not reliable.

**Example 4.19.** Consider the coefficient matrix $\mathbf{A}$ of Example 4.17. We can check that

$$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$

and so $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Therefore, $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, and Theorem 4.18 explains why $(2, -3)^T$ is not a good approximation of the true solution despite the fact that $\mathbf{r}$ is small in norm. $\qquad\square$

Suppose we solve the linear system $\mathbf{A}\mathbf{x} = \mathbf{b}$ with Gaussian elimination and $t$-digit arithmetic. Let $\tilde{\mathbf{x}}$ be the numerical solution, which, in general, has rounding error. We compute the residual vector $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$, but using here $2t$-digit arithmetic (double precision) for the computation of $\mathbf{r}$. It can be shown that

$$\|\mathbf{r}\| \approx 10^{-t} \|\mathbf{A}\| \|\tilde{\mathbf{x}}\|.$$

We can use this relation to estimate the condition number of $\mathbf{A}$ in the following way: Consider the equation $\mathbf{A}\mathbf{y} = \mathbf{r}$, and let $\tilde{\mathbf{y}}$ be its numerical solution using $t$-digit arithmetic. Note that the linear system $\mathbf{A}\mathbf{y} = \mathbf{r}$ can be solved effectively if we store the $l_{ij}$ factors and the row changes used in the first Gaussian elimination, and now we do the elimination steps only on the vector $\mathbf{r}$. (In Section 5.1 below we will show an effective method for solving several linear systems with the same coefficient matrix.) Then

$$\tilde{\mathbf{y}} \approx \mathbf{A}^{-1}\mathbf{r} = \mathbf{A}^{-1}(\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}) = \mathbf{A}^{-1}\mathbf{b} - \tilde{\mathbf{x}} = \mathbf{x} - \tilde{\mathbf{x}},$$

so $\|\tilde{\mathbf{y}}\|$ is an estimate of the error $\|\mathbf{x} - \tilde{\mathbf{x}}\|$, and

$$\|\tilde{\mathbf{y}}\| \approx \|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\| \approx \|\mathbf{A}^{-1}\| \|\mathbf{A}\| 10^{-t} \|\tilde{\mathbf{x}}\| = 10^{-t}\mathrm{cond}(\mathbf{A}) \|\tilde{\mathbf{x}}\|.$$

From this we get the formula

$$\mathrm{cond}(\mathbf{A}) \approx 10^t \frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|} \tag{4.23}$$

as an approximation of the condition number. Let $\tilde{\mathbf{r}} := \mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}$ be the residual vector of $\tilde{\mathbf{y}}$. In general, $\|\tilde{\mathbf{r}}\|$ is much smaller than $\|\mathbf{r}\|$, therefore, if instead of $\tilde{\mathbf{x}}$ we consider $\bar{\mathbf{x}} := \tilde{\mathbf{x}} + \tilde{\mathbf{y}}$ as the approximation of $\mathbf{x}$, then for the residual vector corresponding to $\bar{\mathbf{x}}$ we have

$$\|\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}\| = \|\mathbf{b} - \mathbf{A}(\tilde{\mathbf{x}} + \tilde{\mathbf{y}})\| = \|\mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}\| = \|\tilde{\mathbf{r}}\| \ll \|\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}\|,$$

i.e., $\bar{\mathbf{x}}$ is a much better approximation of $\mathbf{x}$ than $\tilde{\mathbf{x}}$. If we repeat this procedure we get the method of *iterative refinement*. This method gives a good approximation of the solution in a few steps even for ill-conditioned coefficient matrices.

**Algorithm 4.20. Iterative refinement**

```
INPUT:    A, b
          N    - maximal iteration number
          TOL  - tolerance
          t    - number of digits of precision
OUTPUT:   z    - approximate solution
          COND - estimate of cond_∞(A)

We solve the system Ax = b with Gaussian elimination
for k = 1, 2, ..., N do
    We compute the residual vector r = b - Ax using double precision.
    We solve Ay = r for y
    z ← x + y
    if k = 1 do
        COND ← 10^t · ||y||_∞ / ||x||_∞
        output(COND)
    end do
    if ||y||_∞ < TOL do
        output(z)
        stop
    end do
    x ← z
end do
output(The maximal number of iteration is exceeded.)
```

**Example 4.21.** Consider again system (4.20). Its exact solution is $\mathbf{x} = (1, 1)^T$. Using Gaussian elimination with 4-digit arithmetic we get the approximate solution $\tilde{\mathbf{x}} = (0.9375, 1.2500)^T$. Its residual vector is (with double precision): $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.001875)^T$, so $\|\mathbf{r}\|_\infty = 0.001875$.

Solving $\mathbf{A}\mathbf{y} = \mathbf{r}$ with Gaussian elimination (with 4-digit arithmetic) we get the approximate solution $\tilde{\mathbf{y}} = (0.0586, -0.2344)^T$. Hence (4.23) yields

$$\mathrm{cond}_\infty(\mathbf{A}) \approx 10^4 \frac{\|\tilde{\mathbf{y}}\|_\infty}{\|\tilde{\mathbf{x}}\|_\infty} = 10^4 \frac{0.2344}{1.25} = 1875. \tag{4.24}$$

We have seen in Example 4.19 that $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, so (4.24) is an approximation of the condition number. The relative error of the approximate solution $\tilde{\mathbf{x}}$ is

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} = 0.25,$$

which is relatively large (since $\mathbf{A}$ is ill-conditioned). Using Theorem 4.18 we get the error bound

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} \leq \mathrm{cond}_\infty(\mathbf{A}) \frac{\|\mathbf{r}\|_\infty}{\|\mathbf{b}\|_\infty} = 0.5017$$

for the relative error. Using one step of the iterative refinement we get the approximate solution $\mathbf{x}^{(2)} = \mathbf{x} + \mathbf{y} = (0.9961, 1.016)^T$, which is close to the true solution. $\qquad\square$

### Exercises

1. Compute the condition numbers $\mathrm{cond}_\infty$ and $\mathrm{cond}_1$ of the following matrices:

$$\text{(a)} \quad \begin{pmatrix} 1 & 2 \\ 4 & -1 \end{pmatrix}, \qquad \text{(b)} \quad \begin{pmatrix} 1 & 0 & 2 \\ 2 & 1 & 0 \\ 1 & -1 & 1 \end{pmatrix}.$$

2. Estimate the condition number $\mathrm{cond}_\infty(\mathbf{A})$ for

$$\mathbf{A} = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} \end{pmatrix}.$$

3. Using 4-digit arithmetic solve

$$
\begin{aligned}
0.009x_1 - 0.52x_2 &= -5.191 \\
9211x_1 + 21.1x_2 &= 9422
\end{aligned}
$$

with applying two steps of the iterative refinement. (The exact solution is: $(1, 10)$.)

## 4.5. Perturbation of Linear Systems

Consider the linear system

$$\mathbf{A}\mathbf{x} = \mathbf{b}. \tag{4.25}$$

Suppose that instead of (4.25) we solve the linear system

$$\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{4.26}$$

where $\tilde{\mathbf{b}} := \mathbf{b} + \Delta\mathbf{b}$ is a perturbation of $\mathbf{b}$ by $\Delta\mathbf{b}$. Its exact solution is denoted by $\tilde{\mathbf{x}}$. The next result gives a relation between the solutions of the two problems.

**Theorem 4.22.** *Let* $\mathbf{A}$ *be a nonsingular square matrix,* $\mathbf{x}$ *and* $\tilde{\mathbf{x}}$ *be solutions of the linear systems* (4.25) *and* (4.26), *respectively. Then*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

**Proof.** Subtracting (4.25) and (4.26) we get $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{b} - \tilde{\mathbf{b}}$, hence $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}(\mathbf{b} - \tilde{\mathbf{b}})$, therefore, $\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|$. Using this and the inequality $\|\mathbf{b}\| = \|\mathbf{A}\mathbf{x}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ it follows

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \mathrm{cond}(\mathbf{A}) \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

$\square$

The theorem says that one order of magnitude increase in $\mathrm{cond}(\mathbf{A})$ can result in one order of magnitude increase in the relative error of the approximation, or in other words, a loss of one significant digit in the approximation.

Now we consider the general case, when we perturb both the coefficient matrix and the right-hand-side of the system. We consider the linear system

$$\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}, \tag{4.27}$$

where $\|\mathbf{b} - \tilde{\mathbf{b}}\|$ and $\|\mathbf{A} - \tilde{\mathbf{A}}\|$ are "small".

**Theorem 4.23.** *Let* $\mathbf{A}$ *be a nonsingular square matrix, and* $\tilde{\mathbf{A}}$ *be such that* $\|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|$. *Let* $\mathbf{x}$ *and* $\tilde{\mathbf{x}}$ *be the exact solutions of* (4.25) *and* (4.27), *respectively. Then*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} \right).$$

**Proof.** First consider the relation $\tilde{\mathbf{A}} = \mathbf{A} - (\mathbf{A} - \tilde{\mathbf{A}}) = \mathbf{A}(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))$. Since by our assumption $\|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\| < 1$, Corollary 4.4 yields that $\tilde{\mathbf{A}}$ is invertible, and

$$
\begin{aligned}
\|(\tilde{\mathbf{A}})^{-1}\| &\leq \|(\mathbf{I} - \mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}}))^{-1}\| \|\mathbf{A}^{-1}\| \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}(\mathbf{A} - \tilde{\mathbf{A}})\|} \\
&\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}.
\end{aligned}
$$

From equations (4.26) and (4.25) we get

$$\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{x} - (\tilde{\mathbf{A}})^{-1}\tilde{\mathbf{b}} = (\tilde{\mathbf{A}})^{-1}(\tilde{\mathbf{A}}\mathbf{x} - \tilde{\mathbf{b}}) = (\tilde{\mathbf{A}})^{-1}(\mathbf{b} - \tilde{\mathbf{b}} - (\mathbf{A} - \tilde{\mathbf{A}})\mathbf{x}).$$

Therefore,

$$
\begin{aligned}
\|\mathbf{x} - \tilde{\mathbf{x}}\| &\leq \frac{\|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A} - \tilde{\mathbf{A}}\|}(\|\mathbf{b} - \tilde{\mathbf{b}}\| + \|\mathbf{A} - \tilde{\mathbf{A}}\| \|\mathbf{x}\|) \\
&= \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\|}{1 - \|\mathbf{A}^{-1}\| \|\mathbf{A}\| \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \|\mathbf{x}\| \right).
\end{aligned}
$$

Dividing both sides by $\|\mathbf{x}\|$ and using relation $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ we get

$$
\begin{aligned}
\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} &\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right) \\
&\leq \frac{\mathrm{cond}(\mathbf{A})}{1 - \mathrm{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}} \left( \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|} + \frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} \right).
\end{aligned}
$$

$\square$

The following properties of the condition number can be proved easily.

**Theorem 4.24.** *Let* $\|\cdot\|$ *be a fixed matrix norm and* $\mathrm{cond}(\cdot)$ *be the corresponding condition number function. Then*

&nbsp;&nbsp;*1.* $\mathrm{cond}(\mathbf{A}) \geq 1$,

&nbsp;&nbsp;*2.* $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \mathrm{cond}(\mathbf{A})$

*hold for all invertible matrices* $\mathbf{A}$.

The number $\mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$ is called the *spectral condition number* of the matrix $\mathbf{A}$. According to the previous result, the spectral condition number of a matrix is always less than any other condition number. Its disadvantage is that it is difficult to compute, since it requires the computation of eigenvalues of matrices.

We present the next result without proof.

**Theorem 4.25 (Gastinel).** *Let* $\|\cdot\|$ *be a matrix norm,* $\mathbf{A}$ *be invertible. Then*

$$\frac{1}{\mathrm{cond}(\mathbf{A})} = \min \left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ is singular} \right\}.$$

The theorem implies that if the condition number of $\mathbf{A}$ is big, then there is a singular matrix close to $\mathbf{A}$.

An example for an ill-conditioned matrix is the so-called *Hilbert-matrix*:

$$\mathbf{H}_n = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} & \cdots & \frac{1}{n} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} & \cdots & \frac{1}{n+1} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} & \cdots & \frac{1}{n+2} \\ \vdots & & & & \vdots \\ \frac{1}{n} & \frac{1}{n+1} & \frac{1}{n+2} & \cdots & \frac{1}{2n-1} \end{pmatrix}.$$

In Table 4.3 we computed the spectral condition number of the Hilbert-matrix for several values of $n$. We can observe that the spectral condition number (and hence all conditions numbers) increase quickly as $n$ increases.

### Exercises

1. Compute the spectral condition number of the matrix

$$\begin{pmatrix} 1 & 4 \\ 2 & -1 \end{pmatrix}.$$

2. Prove Theorem 4.24.

3. Show that

$$\mathrm{cond}_*(\mathbf{A}) = \frac{\max\{|\lambda_1|, \ldots, |\lambda_n|\}}{\min\{|\lambda_1|, \ldots, |\lambda_n|\}},$$

where $\lambda_1, \ldots, \lambda_n$ are the eigenvalues of the matrix $\mathbf{A}$.

**Table 4.3: Spectral condition number of the Hilbert-matrix**

| $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ | $n$ | $\mathrm{cond}_*(\mathbf{H}_n)$ |
|----|---------------------------------|-----|---------------------------------|
| 3  | $5.24 \cdot 10^2$               | 7   | $7.45 \cdot 10^8$               |
| 4  | $1.55 \cdot 10^4$               | 8   | $1.53 \cdot 10^{10}$            |
| 5  | $4.77 \cdot 10^5$               | 9   | $4.93 \cdot 10^{11}$            |
| 6  | $1.50 \cdot 10^6$               | 10  | $1.60 \cdot 10^{13}$            |
