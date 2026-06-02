## 10.4. Taylor's Method

The results of Section 10.2 can be repeated for more general methods. Motivated by the Euler's method, we define the following general one step method to approximate the solutions of the IVP (10.1):

$$z_{i+1} = z_i + hF(t_i, z_i; h), \qquad i = 0, 1, \ldots, n-1, \qquad z_0 = y_0, \tag{10.18}$$

where $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ for some $H > 0$. (For the Euler's method $F(t, z; h) = f(t, z)$.) In this section we formulate the methods for the case of equidistant mesh points, but the methods can be generalized for the case of non-uniform mesh points too, i.e., for $z_{i+1} = z_i + h_i F(t_i, z_i; h_i)$.

Similarly to the Euler's method, we define the *local truncation error* for the method (10.18) at the $i$th mesh point by

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h), \qquad i = 0, 1, \ldots, n-1, \tag{10.19}$$

where $y(t)$ is the exact solution of the IVP (10.1).

Clearly, Theorem 10.4 can be extended to the general one step method (10.18) if $F$ is continuous and Lipschitz continuous in its second variable. The computations after Theorem 10.4 can also be generalized, and inequality (10.14) holds too. If we also assume that (10.15) holds too (it is not automatic), then it yields a result similar to Theorem 10.5. We can prove the following result.

**Theorem 10.7.** *Let $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ be continuous and Lipschitz continuous in its second variable, and be continuously differentiable with respect to its first two variables. Suppose the local truncation error of (10.18) is of order $\alpha$, i.e., there exists a constant $K_2 > 0$ such*

$$|\tau_{i+1}| \le K_2 h^\alpha$$

*for all $i = 0, 1, \ldots, n-1$. Then the approximate solution (10.18) converges to the exact solution of the IVP (10.1) in order $\alpha$, i.e., there exists a constant $K > 0$ such that*

$$|y(t_i) - z_i| \le Kh^\alpha, \qquad i = 0, 1, \ldots, n.$$

How can we select $F$ so that the conditions of Theorem 10.7 be satisfied? It is natural from method (i) presented for the Euler's method to consider higher order Taylor polynomial approximation of the solution (assuming it is sufficiently many times differentiable):

$$
\begin{aligned}
y(t) &= y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(t_i)(t - t_i)^2 + \ldots + \frac{1}{\alpha!}y^{(\alpha)}(t_i)(t - t_i)^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}y^{(\alpha+1)}(\xi_i)(t - t_i)^{\alpha+1},
\end{aligned}
$$

where $\xi_i \in \langle t, t_i \rangle$. How can we compute higher order derivatives of $y$? We know that $y'(t) = f(t, y(t))$. Computing the derivatives of both sides we get relation (10.16). If we compute the derivatives of the right hand side of (10.16) and using relation $y'(t) = f(t, y(t))$ we get an expression for $y'''(t)$ in terms of $t$, $y(t)$, $f$ and the partial derivatives of $f$. We introduce the notation

$$f^{(i)}(t, y(t)) := \frac{d^i}{dt^i}\left(f(t, y(t))\right), \tag{10.20}$$

(i.e., $f^{(i)}(t, y(t))$ denotes the $i$th derivative of the composite function $f(t, y(t))$ with respect to $t$). $f^{(i)}(t, z)$ denotes the formula which we get when in the formula of $f^{(i)}(t, y(t))$ we replace $y(t)$ with $z$. Using this notation we get $y^{(i)}(t) = f^{(i-1)}(t, y(t))$, and hence

$$
\begin{aligned}
y(t_{i+1}) &= y(t_i) + f(t_i, y(t_i))h + \frac{1}{2}f^{(1)}(t_i, y(t_i))h^2 + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t_i, y(t_i))h^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^{\alpha+1}.
\end{aligned}
$$

Suppose $f \in C^\alpha$, and define $F$ by

$$F(t, z; h) := f(t, z) + \frac{1}{2}f^{(1)}(t, z)h + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t, z)h^{\alpha-1}. \tag{10.21}$$

Then

$$\tau_{i+1} = \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^\alpha,$$

and hence the local truncation error is of order $\alpha$ in $h$. The method defined by (10.18) and (10.21) is called *Taylor's method* of order $\alpha$.

**Example 10.8.** Consider again the problem of Example (10.8), and apply the second-order Taylor's method for it. First compute $f^{(1)}$:

$$
\begin{aligned}
f^{(1)}(t, y(t)) &= \frac{d}{dt}\left(2y(t) - 10t^2 + 2t\right) = 2y'(t) - 20t + 2 \\
&= (4y(t) - 20t^2 + 4t) - 20t + 2 = 4y(t) - 20t^2 - 16t + 2.
\end{aligned}
$$

Hence the numerical method is defined by

$$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = 1.$$

In Table 10.2 we listed the numerical values of first few terms of this method and the error of the approximation corresponding to step sizes $h = 0.2$ and $0.1$. We can see that when the step size reduces to its half, then the error reduces to its quarter, which demonstrates that the method is of order 2. Comparing to the errors presented in Table 10.1 we can see that the errors here are better than that in the Euler's method.

Next we apply the third-order Taylor's method for the same problem. Simple calculations yield

$$f^{(2)}(t, y(t)) = \frac{d}{dt}\left(4y(t) - 20t^2 - 16t + 2\right) = 4y'(t) - 40t - 16 = 8y(t) - 40t^2 - 32t - 16.$$

Hence the third-order Taylor's method is defined by:

$$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right) + \frac{h^3}{6}(8z_i - 40t_i^2 - 32t_i - 16),$$

for $i = 0, 1, 2, \ldots$, and $z_0 = 1$. The numerical results can be seen in Table 10.3. We observe smaller error then in the previous example. $\square$

**Table 10.2: Second-order Taylor's method**

| $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
|------|---------|---|---------|------------------|----|---------|------------------|
| | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
| 0.2 | 1.50818 | 1 | 1.52000 | 1.1825e-02 | 2 | 1.51160 | 3.4247e-03 |
| 0.4 | 2.17446 | 2 | 2.20960 | 3.5141e-02 | 4 | 2.18467 | 1.0206e-02 |
| 0.6 | 2.87988 | 3 | 2.95821 | 7.8325e-02 | 6 | 2.90270 | 2.2813e-02 |
| 0.8 | 3.44697 | 4 | 3.60215 | 1.5518e-01 | 8 | 3.49229 | 4.5325e-02 |
| 1.0 | 3.61094 | 5 | 3.89918 | 2.8823e-01 | 10 | 3.69537 | 8.4425e-02 |

**Table 10.3: Third-order Taylor's method**

| $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
|------|---------|---|---------|------------------|----|---------|------------------|
| | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
| 0.2 | 1.50818 | 1 | 1.50933 | 1.1580e-03 | 2 | 1.50834 | 1.6959e-04 |
| 0.4 | 2.17446 | 2 | 2.17791 | 3.4538e-03 | 4 | 2.17497 | 5.0596e-04 |
| 0.6 | 2.87988 | 3 | 2.88761 | 7.7257e-03 | 6 | 2.88102 | 1.1321e-03 |
| 0.8 | 3.44697 | 4 | 3.46233 | 1.5361e-02 | 8 | 3.44922 | 2.2518e-03 |
| 1.0 | 3.61094 | 5 | 3.63958 | 2.8634e-02 | 10 | 3.61514 | 4.1989e-03 |

### Exercises

1. Solve the IVPs presented in Exercise 1 of Section 10.2 using the second- and third-order Taylor' method.

2. Formulate and apply the fourth- and fifth-order Taylor's method for the IVP (10.8).

