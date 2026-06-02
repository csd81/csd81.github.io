## 10.5. Runge–Kutta Method

The difficulty in the application of the Taylor's method is the computation of the derivatives $f^{(i)}$. Here we can get complicated formulas which can require a lot of computational time, which may result in the accumulation of the rounding errors too. The *Runge–Kutta methods* will preserve the high convergence rates of the Taylor's method, but reduce the computational complexity. The idea is presented for the second-order case:

Let $f \in C^2$, consider the formula of the second-order Taylor's method

$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right).$$

Here, as usual, $\frac{\partial f}{\partial y}$ denotes the partial derivative of $f$ with respect to its second variable. Compare this formula to the following Taylor formula:

$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + E(t, z, a, b),$$

where the error is of second order

$$E(t, z, a, b) = \frac{1}{2}\left(\frac{\partial^2 f}{\partial t^2}(\xi, \eta)a^2 + 2\frac{\partial^2 f}{\partial t \partial y}(\xi, \eta)ab + \frac{\partial^2 f}{\partial y^2}(\xi, \eta)b^2\right) \tag{10.22}$$

for some $\xi \in \langle t, t + a \rangle$ and $\eta \in \langle z, z + b \rangle$. If we use the parameters $a = h/2$ and $b = f(t, z)h/2$, we get

$$f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right) = F(t, z; h) + E\left(t, z, \frac{h}{2}, \frac{h}{2}f(t, z)\right),$$

so the essential part of $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ coincides with $F(t, z; h)$. But the significant difference is that it is much simpler to evaluate $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ than $F(t, z; h)$. This motivates to define the approximation sequence

$$z_{i+1} = z_i + hf\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right), \quad i = 0, 1, 2, \ldots, \qquad z_0 = y_0. \tag{10.23}$$

This is called the *midpoint method*. Let $\tau_{i+1}$ and $\bar{\tau}_{i+1}$ be the local truncation error of the midpoint and the second-order Taylor's methods, respectively. Then

$$
\begin{aligned}
\tau_{i+1} &= \frac{y(t_{i+1}) - y(t_i)}{h} - f\left(t_i + \frac{h}{2}, y(t_i) + \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \bar{\tau}_{i+1} - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right).
\end{aligned}
$$

We know from the previous section that $|\bar{\tau}_{i+1}| \le \bar{K}h^2$, and (10.22) and $f \in C^2$ imply that there exists $\tilde{K}$ such that $\left|E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right)\right| \le \tilde{K}h^2$. But then $|\tau_{i+1}| \le (\bar{K} + \tilde{K})h^2$ holds, and therefore, the method (10.23) converges quadratically, assuming that the Lipschitz continuity needed in Theorem 10.7 also holds. This is clearly satisfied if $f$ is Lipschitz continuous in its second variable. (See Exercise 2.)

Now we define $F$ in the following way:

$$
\begin{aligned}
F(t, z; h) &:= \sum_{j=1}^{p}\gamma_j G_j(t, z; h), \\
G_1(t, z; h) &:= f(t, z), \\
G_j(t, z; h) &:= f\left(t + \alpha_j h, z + h\sum_{k=1}^{j-1}\beta_{jk}G_k(t, z; h)\right), \qquad j = 2, 3, \ldots, p.
\end{aligned}
\tag{10.24}
$$

The class of methods defined by formulas (10.18) and (10.24) is called *(explicit) Runge–Kutta methods*. The goal is to select the parameters so that we get high order local truncation errors.

Consider now the case when $p = 2$. Then

$$F(t, z; h) = \gamma_1 f(t, z) + \gamma_2 f(t + \alpha_1 h, z + \beta_{21}hf(t, z)).$$

(If $\gamma_1 = 0$, $\gamma_2 = 1$, $\alpha_1 = \beta_{21} = 1/2$, then we get back the midpoint method.) We try to select parameters so that we get third-order local truncation error. We apply the second Taylor formula for the right hand side:

$$
\begin{aligned}
F(t, z; h) &= (\gamma_1 + \gamma_2)f(t, z) + h\gamma_2\left(\alpha_1\frac{\partial f}{\partial t}(t, z) + \beta_{21}f(t, z)\frac{\partial f}{\partial y}(t, z)\right) \\
&\quad + \frac{h^2}{2}\gamma_2\left(\alpha_1^2\frac{\partial^2 f}{\partial t^2}(t, z) + 2\alpha_1\beta_{21}f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z)\right. \\
&\quad \left. + \beta_{21}^2(f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z)\right) + E(t, z, \alpha_1 h, \beta_{21}hf(t, z)),
\end{aligned}
\tag{10.25}
$$

where $E$ is a third-order error term. Compare it to the formula of the third-order Taylor's method

$$
\begin{aligned}
\tilde{F}(t, z; h) &= f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \\
&\quad + \frac{h^2}{6}\left(\frac{\partial^2 f}{\partial t^2}(t, z) + 2f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z)\right. \\
&\quad \left. + (f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z) + \frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z) + \left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)\right).
\end{aligned}
\tag{10.26}
$$

We can see that all the terms of $F$ with at most second order appear in the formula of $\tilde{F}$. But the opposite case is not true: the terms $\frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z)$ and $\left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)$ which appear in (10.26) have no corresponding term in (10.25). This means that we cannot replace all second-order terms of the Taylor's method with the second-order terms of $F$, so the local truncation error can only be quadratic. But we try to identify as many terms of (10.25) and (10.26) as possible. Therefore, we assume

$$\gamma_1 + \gamma_2 = 1, \qquad \gamma_2\alpha_1 = \frac{1}{2}, \qquad \gamma_2\beta_{21} = \frac{1}{2}, \tag{10.27}$$

and

$$\frac{\gamma_2}{2}\alpha_1^2 = \frac{1}{6}, \qquad \gamma_2\alpha_2\beta_{21} = \frac{1}{3}, \qquad \frac{\gamma_2}{2}\beta_{21}^2 = \frac{1}{6}. \tag{10.28}$$

For example, $\gamma_1 = \gamma_2 = 1/2$ and $\alpha_1 = \beta_{21} = 1$ satisfy (10.27), but not (10.28). But since all the first-order terms are identified, we get a second-order method. The corresponding method

$$z_{i+1} = z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i))\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = y_0 \tag{10.29}$$

is called *modified Euler method*.

If we use the parameter values $\gamma_1 = 1/4$, $\gamma_2 = 3/4$ and $\alpha_1 = \beta_{21} = 2/3$, then both (10.27) and (10.28) are satisfied. The corresponding method, the so-called *Heun's method* is defined by

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{4}\left(f(t_i, z_i) + 3f\left(t_i + \frac{2h}{3}, z_i + \frac{2}{3}hf(t_i, z_i)\right)\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0.
\end{aligned}
\tag{10.30}
$$

Both methods are so-called second-order Runge–Kutta methods (since their local truncation error is of second order).

The geometric meaning of the modified Euler method is the following: Suppose the point $(t_i, z_i)$ is given in the $i$th step of the method. If we used the Euler's method, then we would take one step along with a line through this point with slope $f(t_i, z_i)$, and we would move to the point $(t_{i+1}, w_{i+1})$ where $w_{i+1} := z_i + hf(t_i, z_i)$. The slope of the tangent line to the graph of the exact solution at this point is $f(t_{i+1}, w_{i+1})$. We compute the average of the two slopes, and move one step along with a line of such averaged slope starting from the point $f(t_i, z_i)$. See Figure 10.1.

![Figure 10.1: Geometric interpretation of the modified Euler method — from $(t_i, z_i)$ the dashed arrow reaches the Euler point $(t_{i+1}, w_{i+1})$, the solid arrow reaches $(t_{i+1}, z_{i+1})$ using the averaged slope, and the dotted arrow shows the endpoint slope.](figure_10_1.png)

**Figure 10.1:** Geometric interpretation of the modified Euler method

Following the idea presented above, we can define several other Runge-Kutta methods. It can be shown that for different parameter values $p$ the corresponding methods of the form can have at most the order of the local truncation error given in the following table:

| $p$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|----|
| maximal order of the method | 1 | 2 | 3 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |

One of the most popular ODE approximation method of the form (10.24) is the "classical" Runge–Kutta method:

$$
\begin{aligned}
z_0 &= y_0, \\
w_{i,1} &= f(t_i, z_i), \\
w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right), \\
w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right), \\
w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right), \\
z_{i+1} &= z_i + \frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}), \qquad i = 0, 1, 2, \ldots.
\end{aligned}
\tag{10.31}
$$

It can be shown that this method has a fourth-order local truncation error (if $f \in C^5$). The derivation of the method and the proof of its order is not presented here.

**Example 10.9.** For the IVP (10.8) we applied the modified Euler, Heun and the classical fourth-order Runge–Kutta methods using step size $h = 0.1$. The numerical results are presented in Table 10.4. $\square$

**Table 10.4: Runge–Kutta methods**

| | | modified Euler | | Heun | | classical | |
|------|---------|--------|------------------|--------|------------------|--------|------------------|
| $t_i$ | $y(t_i)$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.0000 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 |
| 0.2 | 1.5082 | 1.5005 | 7.6753e-03 | 1.5042 | 3.9753e-03 | 1.5082 | 1.1773e-05 |
| 0.4 | 2.1745 | 2.1570 | 1.7415e-02 | 2.1663 | 8.2078e-03 | 2.1744 | 2.6024e-05 |
| 0.6 | 2.8799 | 2.8505 | 2.9398e-02 | 2.8679 | 1.1995e-02 | 2.8798 | 4.2338e-05 |
| 0.8 | 3.4470 | 3.4035 | 4.3486e-02 | 3.4331 | 1.3882e-02 | 3.4469 | 5.9304e-05 |
| 1.0 | 3.6109 | 3.5521 | 5.8862e-02 | 3.5998 | 1.1100e-02 | 3.6109 | 7.3610e-05 |

### Exercises

1. Solve the IVPs presented in Exercise 1 of Section 10.2 using the midpoint, modified Euler, Heun and the classical fourth-order Runge–Kutta methods.

2. Prove that if $f$ is Lipschitz continuous in its second variable, then the function

$$F(t, z; h) = \frac{1}{2}f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$$

of the midpoint method is also Lipschitz continuous in its second variable.

3. Similarly to the method (iii) of the Euler's method, derive formula (10.29).

4. Show that the midpoint method, the modified Euler and Heun method gives back the same approximation for all step sizes for the IVP

$$y' = 2 - t - y, \qquad y(0) = 1.$$

5. Find a geometric interpretation to the classical fourth-order Runge–Kutta method.

6. Show that if $f$ depends only on $t$, then the classical fourth-order Runge–Kutta method reduces to the Simpson's rule.
