## 2.13. Quasi-Newton Methods, Broyden's Method

The advantage of Newton's method is its fast speed of (local) convergence, but its disadvantage is that the computation of the Jacobian matrix is, in general, requires many arithmetic operations. Also, it requires matrix inversion or solution of a linear equation which is also computationally expensive. To avoid or reduce these problems we introduce *quasi-Newton methods* which are defined by

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}). \tag{2.32}$$

Here the matrix $\mathbf{A}^{(k)}$ is an approximation of the Jacobian $\mathbf{f}'(\mathbf{p}^{(k)})$. Using different approximations, we get different classes of quasi-Newton methods.

One typical approach is to approximate the Jacobian matrix numerically. Let $\mathbf{e}^{(j)} = (0, \ldots, 0, 1, 0, \ldots, 0)^T$ be the $j$th standard unit vector, $h > 0$ be a small discretization constant, and define the components of $\mathbf{A}^{(k)}$ by the expressions

$$a_{ij}^{(k)} = \frac{f_i(\mathbf{p}^{(k)} + h\mathbf{e}^{(j)}) - f_i(\mathbf{p}^{(k)})}{h}, \quad i, j = 1, \ldots, n. \tag{2.33}$$

The resulting quasi-Newton method is a straightforward generalization of the secant method for the vector case.

Next we introduce an other popular selection of the matrices $\mathbf{A}^{(k)}$. This method is called *Broyden's method*. This is a different generalization of the secant method for the vector case.

For scalar equations the secant method replaces the nonlinear equation $f(x) = 0$ by a linear equation

$$f(p_k) + a_k(x - p_k) = 0,$$

where $a_k = (f(p_k) - f(p_{k-1}))/(p_k - p_{k-1})$. We replace $k$ by $k + 1$, and we rewrite the equation, we get that $a_{k+1}$ solves the equation

$$a_{k+1}(p_{k+1} - p_k) = f(p_{k+1}) - f(p_k). \tag{2.34}$$

We will generalize this formula for the vector case.

Select an initial vector $\mathbf{p}^{(0)}$ and an initial matrix $\mathbf{A}^{(0)}$. For the selection of $\mathbf{A}^{(0)}$ we can use different strategies: it is possible to use the exact value $\mathbf{A}^{(0)} = \mathbf{f}'(\mathbf{p}^{(0)})$, or using the formula (2.33) we can compute an approximate derivative matrix at $\mathbf{p}^{(0)}$, or just select any invertible matrix $\mathbf{A}^{(0)}$.

Suppose $\mathbf{p}^{(k)}$ and $\mathbf{A}^{(k)}$ are already defined. Then we define $\mathbf{p}^{(k+1)}$ by formula (2.32). Similarly to equation (2.34), we require that $\mathbf{A}^{(k+1)}$ satisfies the so-called *secant equation*

$$\mathbf{A}^{(k+1)}(\mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}) = \mathbf{f}(\mathbf{p}^{(k+1)}) - \mathbf{f}(\mathbf{p}^{(k)}). \tag{2.35}$$

We introduce the following notations

$$\mathbf{y}^{(k)} := \mathbf{f}(\mathbf{p}^{(k+1)}) - \mathbf{f}(\mathbf{p}^{(k)}) \quad \text{and} \quad \mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}.$$

Using these notations, equations (2.32) and (2.35) are equivalent to

$$\mathbf{A}^{(k)}\mathbf{s}^{(k)} = -\mathbf{f}(\mathbf{p}^{(k)}), \tag{2.36}$$

and

$$\mathbf{A}^{(k+1)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}, \tag{2.37}$$

respectively. First we solve (2.36) for $\mathbf{s}^{(k)}$ (assuming that $\mathbf{A}^{(k)}$ is invertible), so the problem is reduced to the selection of a matrix $\mathbf{A}^{(k+1)}$ which satisfies equation (2.37). Unfortunately, this equation does not determine the matrix $\mathbf{A}^{(k+1)}$ uniquely, since this equation is equivalent to $n$ number of scalar equations, but $\mathbf{A}^{(k+1)}$ is determined by $n^2$ number of components. Equation (2.37) requires that the linear operator $\mathbf{A}^{(k+1)}$ is defined on the one dimensional space spanned by the vector $\mathbf{s}^{(k)}$. But in the $n - 1$ directions orthogonal to the vector $\mathbf{s}^{(k)}$ the linear map is undetermined. Since in the $k + 1$-th step we "do not have new information" about the next linear operator, i.e., the next matrix, we define $\mathbf{A}^{(k+1)}$ so that its effect on this subspace be the same as the matrix $\mathbf{A}^{(k)}$. Therefore, in addition to equation (2.37), we require

$$\mathbf{A}^{(k+1)}\mathbf{z} = \mathbf{A}^{(k)}\mathbf{z}, \quad \text{for all } \mathbf{z} \perp \mathbf{s}^{(k)}. \tag{2.38}$$

Equations (2.37) and (2.38) together determine the matrix $\mathbf{A}^{(k+1)}$ uniquely. It can be checked easily (see Exercise 2) that the matrix

$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2} \tag{2.39}$$

satisfies both (2.37) and (2.38).

The recursion (2.32) requires the computation of $(\mathbf{A}^{(k)})^{-1}$. The next result is an efficient way to compute it.

**Theorem 2.58 (Sherman–Morrison–Woodbury).** *Let $\mathbf{u}, \mathbf{v} \in \mathbb{R}^n$, $\mathbf{u}, \mathbf{v} \neq \mathbf{0}$ and $\mathbf{A} \in \mathbb{R}^{n \times n}$ be invertible. Then the matrix $\mathbf{A} + \mathbf{u}\mathbf{v}^T$ is invertible if and only if $1 + \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u} \neq 0$, and then*

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)^{-1} = \mathbf{A}^{-1} - \frac{\mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}}{1 + \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}}$$

*holds.*

**Proof.** Let $\gamma \in \mathbb{R}$, and consider

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1} - \gamma \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}) = \mathbf{I} + \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1} - \gamma \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1} - \gamma \mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}.$$

Since $\mathbf{v}^T \mathbf{A}^{-1}\mathbf{u}$ is a scalar, we can rewrite the above relation as

$$(\mathbf{A} + \mathbf{u}\mathbf{v}^T)(\mathbf{A}^{-1} - \gamma \mathbf{A}^{-1}\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1}) = \mathbf{I} + (1 - \gamma - \gamma \mathbf{v}^T \mathbf{A}^{-1}\mathbf{u})\mathbf{u}\mathbf{v}^T \mathbf{A}^{-1},$$

which proves the statement. $\square$

A little computation and Theorem 2.58 give from (2.39)

$$\begin{aligned}
(\mathbf{A}^{(k+1)})^{-1} &= \left(\mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{s}^{(k)})^T}{\|\mathbf{s}^{(k)}\|_2^2}\right)^{-1} \\
&= (\mathbf{A}^{(k)})^{-1} - \frac{(\mathbf{A}^{(k)})^{-1}\left(\frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{1 + (\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2}} \\
&= (\mathbf{A}^{(k)})^{-1} - \frac{\left((\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)} - \mathbf{s}^{(k)}\right)(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}}{(\mathbf{s}^{(k)})^T(\mathbf{A}^{(k)})^{-1}\mathbf{y}^{(k)}}.
\end{aligned} \tag{2.40}$$

Using iteration (2.40), if $(\mathbf{A}^{(k)})^{-1}$ is known, then only matrix multiplication is needed to compute $(\mathbf{A}^{(k+1)})^{-1}$, so $n^2$ number of arithmetic operation is enough to generate the next matrix. On the other hand, in the next chapter we will show that the matrix inversion needs $n^3$ number of operation, so here we have an efficient computational method.

It can be shown that the Broyden's method converges locally to a root $\mathbf{p}$ of $\mathbf{f}$ if $\mathbf{A}^{(0)}$ is close enough to $\mathbf{f}'(\mathbf{p})$, and the order of convergence is superlinear, i.e.,

$$\lim_{k \to \infty} \frac{\|\mathbf{p}^{(k+1)} - \mathbf{p}\|}{\|\mathbf{p}^{(k)} - \mathbf{p}\|} = 0.$$

We do not prove this result here. A possible definition of the Broyden's method is formulated in the next algorithm.

**Algorithm 2.59. Broyden's method**

```
INPUT:  f - function,
        p^(0) - initial value,
        h - step size for the approximation of A^(0),
        ‖·‖ - vector norm,
        TOL - tolerance,
        MAXIT - maximal iteration number,
OUTPUT: p - approximate root.

(computation of A = (a_ij) = A^(0))
for i = 1, ..., n do
    for j = 1, ..., n do
        a_ij ← (f_i(p^(0) + h·e^(j)) - f_i(p^(0)))/h
    end do
end do
A ← A^(-1)
q ← p^(0)
k ← 1                       (step size)
while k < MAXIT do
    s ← -A·f(q)
    p ← q + s
    if ‖s‖ < TOL do
        output(p)
        stop
    end do
    y ← f(p) - f(q)
    A ← A - (A·y - s)·s^T·A / (s^T·A·y)
    q ← p
    k ← k + 1
end do
output(Maximal iteration is exceeded.)
```

**Example 2.60.** Consider again the system (2.26) examined in Examples 2.51 and 2.57. The numerical results of Algorithm 2.59 with $h = 0.001$ and $TOL = 10^{-5}$ is shown in Table 2.14. We observe that the convergence of this sequence is slower than that for the Newton's method in Example 2.57. The last column indicates that the speed of the convergence here is superlinear. $\square$

Table 2.14: Broyden's method

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty$ | $\dfrac{\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty}{\|\mathbf{p}^{(k-1)} - \mathbf{p}\|_\infty}$ |
|---|---|---|---|
| 0  | $(-1.5000000000, -1.5000000000)^T$  | 2.5000000000 |             |
| 1  | $(-1.2490215360, -0.5215363883)^T$  | 2.2490215360 | 0.8996086144 |
| 2  | $(-0.4968297655, -0.9366983828)^T$  | 1.4968297660 | 0.6655471022 |
| 3  | $(-0.3045368940, -0.3621731989)^T$  | 1.3045368940 | 0.8715332389 |
| 4  | $(\phantom{-}0.5414891937, -0.0587408442)^T$ | 0.4585108063 | 0.3514740046 |
| 5  | $(\phantom{-}0.9527177435, -0.0515250779)^T$ | 0.0515250779 | 0.1123748387 |
| 6  | $(\phantom{-}1.0003263340, \phantom{-}0.0319681269)^T$ | 0.0319681269 | 0.6204382061 |
| 7  | $(\phantom{-}1.0000051000, -0.0040567750)^T$ | 0.0040567750 | 0.1269006155 |
| 8  | $(\phantom{-}1.0000069210, -0.0000347010)^T$ | 0.0000347010 | 0.0085538489 |
| 9  | $(\phantom{-}1.0000001100, \phantom{-}0.0000012682)^T$ | 0.0000012682 | 0.0365458110 |
| 10 | $(\phantom{-}1.0000000050, \phantom{-}0.0000000576)^T$ | 0.0000000576 | 0.0453865979 |

### Exercises

1. Apply Broyden's method to the systems listed in Exercise 1 of Section 2.11.
2. Show that the matrix $\mathbf{A}^{(k+1)}$ defined by (2.39) satisfies equations (2.37) and (2.38).
