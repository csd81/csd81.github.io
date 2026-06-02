## 10.5 Runge–Kutta Method

The **Runge–Kutta methods** will preserve the high convergence rates of the Taylor's method, but reduce the computational complexity. The idea is presented for the second-order case:

Let $f \in C^2$, consider the formula of the second-order Taylor's method

$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right).$$

Compare this formula with the following Taylor formula:

$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + E(t, z, a, b),$$

where the error is of second order

$$E(t, z, a, b) = \frac{1}{2}\left(\frac{\partial^2 f}{\partial t^2}(\xi, \eta)a^2 + 2\frac{\partial^2 f}{\partial t \partial y}(\xi, \eta)ab + \frac{\partial^2 f}{\partial y^2}(\xi, \eta)b^2\right) \tag{10}$$

for some $\xi \in \langle t, t + a \rangle$ and $\eta \in \langle z, z + b \rangle$.

If we use the parameters $a = h/2$ and $b = f(t, z)h/2$, we get

$$f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right) = F(t, z; h) + E\left(t, z, \frac{h}{2}, \frac{h}{2}f(t, z)\right),$$

so the essential part of $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ coincides with $F(t, z; h)$. But the significant difference is that it is much simpler to evaluate $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ than $F(t, z; h)$. This motivates to define the approximation sequence

$$z_{i+1} = z_i + hf\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right), \quad i = 0, 1, 2, \ldots, \qquad z_0 = y_0.$$

This is called the **midpoint method**.

Let $\tau_{i+1}$ and $\bar{\tau}_{i+1}$ be the local truncation error of the midpoint and the second-order Taylor's methods, respectively. Then

$$
\begin{aligned}
\tau_{i+1} &= \frac{y(t_{i+1}) - y(t_i)}{h} - f\left(t_i + \frac{h}{2}, y(t_i) + \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \bar{\tau}_{i+1} - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right).
\end{aligned}
$$

We know from the previous section that $|\bar{\tau}_{i+1}| \le \bar{K}h^2$, and (10) and $f \in C^2$ imply that there exists $\tilde{K}$ such that $\left|E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right)\right| \le \tilde{K}h^2$. But then

$$|\tau_{i+1}| \le (\bar{K} + \tilde{K})h^2$$

holds, and therefore the midpoint method converges quadratically.

Now we define $F$ in the following way:

$$
\begin{aligned}
F(t, z; h) &:= \sum_{j=1}^{p}\gamma_j G_j(t, z; h), \\
G_1(t, z; h) &:= f(t, z), \\
G_j(t, z; h) &:= f\left(t + \alpha_j h, z + h\sum_{k=1}^{j-1}\beta_{jk}G_k(t, z; h)\right), \qquad j = 2, 3, \ldots, p.
\end{aligned}
\tag{11}
$$

The class of methods defined by formulas (8) and (11) is called **(explicit) Runge–Kutta methods**. The goal is to select the parameters so that we get high order local truncation errors.

Consider now the case when $p = 2$. Then

$$F(t, z; h) = \gamma_1 f(t, z) + \gamma_2 f(t + \alpha_1 h, z + \beta_{11}hf(t, z)).$$

(If $\gamma_1 = 0$, $\gamma_2 = 1$, $\alpha_1 = \beta_{11} = 1/2$, then we get back the midpoint method.) We try to select parameters so that we get third-order local truncation error.

We apply the second Taylor formula for the right hand side:

$$
\begin{aligned}
F(t, z; h) &= (\gamma_1 + \gamma_2)f(t, z) + h\gamma_2\left(\alpha_1\frac{\partial f}{\partial t}(t, z) + \beta_{11}f(t, z)\frac{\partial f}{\partial y}(t, z)\right) \\
&\quad + \frac{h^2}{2}\gamma_2\left(\alpha_1^2\frac{\partial^2 f}{\partial t^2}(t, z) + 2\alpha_1\beta_{11}f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z)\right. \\
&\quad \left. + \beta_{11}^2(f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z)\right) + E(t, z, \alpha_1 h, \beta_{11}hf(t, z)),
\end{aligned}
\tag{12}
$$

where $E$ is a third-order error term. Compare it with

$$
\begin{aligned}
\tilde{F}(t, z; h) &= f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \\
&\quad + \frac{h^2}{6}\left(\frac{\partial^2 f}{\partial t^2}(t, z) + 2f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z)\right. \\
&\quad + (f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z) + \frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z) \\
&\quad \left. + \left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)\right).
\end{aligned}
\tag{13}
$$

We can see that all the terms of $F$ with at most second order appear in the formula of $\tilde{F}$. But the opposite case is not true: the terms $\frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z)$ and $\left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)$ which appear in (13) have no corresponding term in (12). This means that we cannot replace all second-order terms of the Taylor's method with the second-order terms of $F$, so the local truncation error can be only quadratic. But we try to identify as many terms of (12) and (13) as possible. Therefore we assume

$$\gamma_1 + \gamma_2 = 1, \qquad \gamma_2\alpha_1 = \frac{1}{2}, \qquad \gamma_2\beta_{11} = \frac{1}{2}, \tag{14}$$

and

$$\frac{\gamma_2}{2}\alpha_1^2 = \frac{1}{6}, \qquad \gamma_2\alpha_2\beta_{11} = \frac{1}{3}, \qquad \frac{\gamma_2}{2}\beta_{11}^2 = \frac{1}{6}. \tag{15}$$

For example, $\gamma_1 = \gamma_2 = 1/2$ and $\alpha_1 = \beta_{11} = 1$ satisfy (14), but not (15). But since all the first-order terms are identified, we get a second-order method.

The corresponding method

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i))\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0
\end{aligned}
$$

is called **modified Euler method**.

If we use the parameter values $\gamma_1 = 1/4$, $\gamma_2 = 3/4$ and $\alpha_1 = \beta_{11} = 2/3$, then both (14) and (15) are satisfied. The corresponding method, the so-called **Heun's method** is defined by

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{4}\left(f(t_i, z_i) + 3f\left(t_i + \frac{2h}{3}, z_i + \frac{2}{3}hf(t_i, z_i)\right)\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0.
\end{aligned}
$$

Both methods are second-order Runge–Kutta methods (since their local truncation error is of second order).

The **geometric meaning of the modified Euler method**

$$
\begin{aligned}
w_{i+1} &= z_i + hf(t_i, z_i) \\
z_{i+1} &= z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, w_{i+1})\right)
\end{aligned}
$$

*(Slide shows the geometric interpretation: from $(t_i, z_i)$ the Euler step reaches $(t_{i+1}, w_{i+1})$, and the averaged slope gives $(t_{i+1}, z_{i+1})$.)*

Following the idea presented above, we can define several other Runge–Kutta methods. It can be shown that for different parameter $p$ the corresponding methods of the form can have at most the order of the local truncation error given in the following table:

| $p$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|----|
| maximal order of the method | 1 | 2 | 3 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |

One of the most popular ODE approximation method of the form (11) is the **"classical" Runge–Kutta method**:

$$
\begin{aligned}
z_0 &= y_0, \\
w_{i,1} &= f(t_i, z_i), \\
w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right), \\
w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right), \\
w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right), \\
z_{i+1} &= z_i + \frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}), \qquad i = 0, 1, 2, \ldots.
\end{aligned}
$$

It can be shown that this method has a fourth-order local truncation error (if $f \in C^5$). The derivation of the method and the proof of its order is not presented here.

*(Slide shows the geometric interpretation of the classical Runge–Kutta method with the four slope arrows combined.)*

> **Example**
> For the IVP $y' = 2y - 10t^2 + 2t$, $y(0) = 1$ we applied the modified Euler, Heun and the classical fourth-order Runge–Kutta methods using step size $h = 0.1$. The numerical results are presented in the next table.
>
> Runge–Kutta methods
>
> | | | modified Euler | | Heun | | classical | |
> |------|---------|--------|------------------|--------|------------------|--------|------------------|
> | $t_i$ | $y(t_i)$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ |
> | 0.0 | 1.0000 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 |
> | 0.2 | 1.5082 | 1.5005 | 7.6753e-03 | 1.5042 | 3.9753e-03 | 1.5082 | 1.1773e-05 |
> | 0.4 | 2.1745 | 2.1570 | 1.7415e-02 | 2.1663 | 8.2078e-03 | 2.1744 | 2.6024e-05 |
> | 0.6 | 2.8799 | 2.8505 | 2.9398e-02 | 2.8679 | 1.1995e-02 | 2.8798 | 4.2338e-05 |
> | 0.8 | 3.4470 | 3.4035 | 4.3486e-02 | 3.4331 | 1.3882e-02 | 3.4469 | 5.9304e-05 |
> | 1.0 | 3.6109 | 3.5521 | 5.8862e-02 | 3.5998 | 1.1100e-02 | 3.6109 | 7.3610e-05 |
