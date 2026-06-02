## 10.4 Taylor's Method

Define the following general **one step method** corresponding to an equidistant mesh to approximate the solutions of the IVP (1):

$$z_{i+1} = z_i + hF(t_i, z_i; h), \qquad i = 0, 1, \ldots, n-1, \qquad z_0 = y_0, \tag{8}$$

where $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ for some $H > 0$. For the Euler's method

$$F(t, z; h) = f(t, z).$$

Similarly to the Euler's method, we define the $(i+1)$-th **local truncation error** for the method (8) by

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h), \qquad (i = 0, 1, \ldots, n-1)$$

where $y(t)$ is the exact solution of the IVP (1).

> **Theorem:**
> Let $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ be continuous and Lipschitz continuous in its second variable, and be continuously differentiable with respect to both variables. Suppose the local truncation error of (8) is of order $\alpha$, i.e., there exists a constant $K_2 > 0$ such that
>
> $$|\tau_{i+1}| \le K_2 h^\alpha$$
>
> for all $i = 0, 1, \ldots, n-1$. Then the approximate solution (8) converges to the exact solution of the IVP (1) in order $\alpha$, i.e., there exists a constant $K > 0$ such that
>
> $$|y(t_i) - z_i| \le Kh^\alpha, \qquad i = 0, 1, \ldots, n.$$

We need to select $F$ to guarantee a high order local truncation error. Consider higher Taylor polynomial approximation of the solution:

$$
\begin{aligned}
y(t) &= y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(t_i)(t - t_i)^2 + \ldots + \frac{1}{\alpha!}y^{(\alpha)}(t_i)(t - t_i)^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}y^{(\alpha+1)}(\xi_i)(t - t_i)^{\alpha+1},
\end{aligned}
$$

where $\xi_i \in \langle t, t_i \rangle$. We know that $y'(t) = f(t, y(t))$. Computing the derivatives of both sides we get

$$y''(t) = \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))f(t, y(t)).$$

If we compute the derivatives of the right hand side and using relation $y'(t) = f(t, y(t))$ we get an expression for $y'''(t)$ in terms of $t$, $y(t)$, $f$ and the partial derivatives of $f$.

We introduce the notation

$$f^{(i)}(t, y(t)) := \frac{d^i}{dt^i}\left(f(t, y(t))\right).$$

$f^{(i)}(t, z)$ denotes the formula which we get when in the formula of $f^{(i)}(t, y(t))$ we replace $y(t)$ with $z$. Using this notation we get $y^{(i)}(t) = f^{(i-1)}(t, y(t))$, and hence

$$
\begin{aligned}
y(t_{i+1}) &= y(t_i) + f(t_i, y(t_i))h + \frac{1}{2}f^{(1)}(t_i, y(t_i))h^2 + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t_i, y(t_i))h^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^{\alpha+1}.
\end{aligned}
$$

Suppose $f \in C^\alpha$, and define $F$ by

$$F(t, z; h) := f(t, z) + \frac{1}{2}f^{(1)}(t, z)h + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t, z)h^{\alpha-1}. \tag{9}$$

Then

$$\tau_{i+1} = \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^\alpha,$$

and hence the local truncation error is of order $\alpha$ in $h$. The method defined by (8) and (9) is called **Taylor's method** of order $\alpha$.

> **Example**
> Consider again the IVP $y' = 2y - 10t^2 + 2t$, $y(0) = 1$, and apply the second-order Taylor's method for it. First compute $f^{(1)}$:
>
> $$
> \begin{aligned}
> f^{(1)}(t, y(t)) &= \frac{d}{dt}\left(2y(t) - 10t^2 + 2t\right) = 2y'(t) - 20t + 2 \\
> &= 2(2y(t) - 10t^2 + 2t) - 20t + 2 = 4y(t) - 20t^2 - 16t + 2.
> \end{aligned}
> $$
>
> Hence the numerical method is defined by $z_0 = 1$, and
>
> $$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right), \quad i = 0, 1, 2, \ldots.$$
>
> In the next table we listed the numerical values of first few terms of this method and the error of the approximation corresponding to step sizes $h = 0.2$ and $0.1$.

> **Example cont.**
>
> Second-order Taylor's method
>
> | $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
> |------|---------|---|---------|------------------|----|---------|------------------|
> | | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
> | 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
> | 0.2 | 1.50818 | 1 | 1.52000 | 1.1825e-02 | 2 | 1.51160 | 3.4247e-03 |
> | 0.4 | 2.17446 | 2 | 2.20960 | 3.5141e-02 | 4 | 2.18467 | 1.0206e-02 |
> | 0.6 | 2.87988 | 3 | 2.95821 | 7.8325e-02 | 6 | 2.90270 | 2.2813e-02 |
> | 0.8 | 3.44697 | 4 | 3.60215 | 1.5518e-01 | 8 | 3.49229 | 4.5325e-02 |
> | 1.0 | 3.61094 | 5 | 3.89918 | 2.8823e-01 | 10 | 3.69537 | 8.4425e-02 |
>
> We can see that when the step size reduces to its half, then the error reduces to its quarter, which demonstrates that the method is of order 2.

> **Example cont.**
> Next we apply the third-order Taylor's method for the same problem. Simple calculations yield
>
> $$
> \begin{aligned}
> f^{(2)}(t, y(t)) &= \frac{d}{dt}f^{(1)}(t, y(t)) \\
> &= \frac{d}{dt}\left(4y(t) - 20t^2 - 16t + 2\right) \\
> &= 4y'(t) - 40t - 16 = 8y(t) - 40t^2 - 32t - 16.
> \end{aligned}
> $$
>
> Hence the third-order Taylor's method is defined by:
>
> $$
> \begin{aligned}
> z_{i+1} &= z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right) \\
> &\quad + \frac{h^3}{6}(8z_i - 40t_i^2 - 32t_i - 16),
> \end{aligned}
> $$
>
> for $i = 0, 1, 2, \ldots$, and $z_0 = 1$. The numerical results can be seen next.

> **Example cont.**
>
> Third-order Taylor's method
>
> | $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
> |------|---------|---|---------|------------------|----|---------|------------------|
> | | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
> | 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
> | 0.2 | 1.50818 | 1 | 1.50933 | 1.1580e-03 | 2 | 1.50834 | 1.6959e-04 |
> | 0.4 | 2.17446 | 2 | 2.17791 | 3.4538e-03 | 4 | 2.17497 | 5.0596e-04 |
> | 0.6 | 2.87988 | 3 | 2.88761 | 7.7257e-03 | 6 | 2.88102 | 1.1321e-03 |
> | 0.8 | 3.44697 | 4 | 3.46233 | 1.5361e-02 | 8 | 3.44922 | 2.2518e-03 |
> | 1.0 | 3.61094 | 5 | 3.63958 | 2.8634e-02 | 10 | 3.61514 | 4.1989e-03 |

---

