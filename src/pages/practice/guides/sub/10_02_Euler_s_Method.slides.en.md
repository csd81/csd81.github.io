## 10.2 Euler's Method

Consider the IVP (1):

$$y' = f(t, y), \qquad y(t_0) = y_0$$

First we define the **Euler's method**.

Fix a finite mesh $t_0 < t_1 < \cdots < t_n = T$, and let $h_i := t_{i+1} - t_i$ $(i = 0, \ldots, n-1)$.

Our goal is to approximate the solution at the mesh points. We will show that

$$y(t_i) \approx z_i,$$

where the **Euler sequence** $z_i$ is defined by

$$z_{i+1} = z_i + h_i f(t_i, z_i), \quad (i = 0, 1, \ldots, n-1), \qquad z_0 = y_0. \tag{2}$$

**Method (i):** Let $y(t)$ be the solution of the IVP (1). We have $y(t_0) = y_0 = z_0$. Consider the first Taylor polynomial approximation of $y(t)$ around $t_0$:

$$y(t) \approx y(t_0) + y'(t_0)(t - t_0).$$

Then at $t = t_1$ we get

$$y(t_1) \approx y(t_0) + y'(t_0)h_1 = y(t_0) + f(t_0, y(t_0))h_1 = z_0 + h_1 f(t_0, z_0).$$

Therefore

$$y(t_1) \approx z_1 := z_0 + h_1 f(t_0, z_0).$$

Suppose now that $z_i$ approximates $y(t_i)$. Then following the previous idea,

$$y(t_{i+1}) \approx y(t_i) + y'(t_i)h_i = y(t_i) + h_i f(t_i, y(t_i)) \approx z_i + h_i f(t_i, z_i),$$

so we define

$$z_{i+1} = z_i + h_i f(t_i, z_i).$$

**Method (ii):** The solution satisfies relation

$$y'(t_i) = f(t_i, y(t_i)).$$

Applying the first-order difference formula we get

$$y'(t_i) \approx \frac{y(t_{i+1}) - y(t_i)}{h_i},$$

and therefore

$$\frac{y(t_{i+1}) - y(t_i)}{h_i} \approx f(t_i, y(t_i)),$$

which yields

$$y(t_{i+1}) \approx y(t_i) + h_i f(t_i, y(t_i)).$$

Assuming that $y(t_i) \approx z_i$, the expression

$$z_{i+1} = z_i + h_i f(t_i, z_i)$$

satisfies

$$y(t_{i+1}) \approx z_{i+1}.$$

**Method (iii):** Integrating both sides of the equation $y'(t) = f(t, y(t))$ from $t_i$ to $t_{i+1}$ we get

$$y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds,$$

and hence

$$y(t_{i+1}) = y(t_i) + \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds.$$

We use the following simple approximation formula for the definite integral:

$$\int_a^b g(s)\, ds \approx g(a)(b - a).$$

We get

$$\int_{t_i}^{t_{i+1}} f(s, y(s))\, ds \approx h_i f(t_i, y(t_i)).$$

Hence relation

$$y(t_{i+1}) = y(t_i) + \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds$$

yields

$$y(t_{i+1}) \approx y(t_i) + h_i f(t_i, y(t_i)),$$

which gives the definition of the Euler sequence.

> **Example**
> Consider the IVP
>
> $$y' = 2y - 10t^2 + 2t, \qquad y(0) = 1. \tag{3}$$
>
> We can easily check that the exact solution of the problem is
>
> $$y(t) = 5t^2 + 4t + 2 - e^{2t}.$$
>
> Fix a step size $h > 0$, and consider the equidistant mesh points $t_i = ih$. The Euler sequence is defined by the recursion
>
> $$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = 1.$$
>
> We printed the first several terms of the sequence and the error of the approximation $e_i = |y(t_i) - z_i|$ in the next table corresponding to step sizes $h = 0.2$, $0.1$ and $0.05$.

> **Example cont.**
>
> Euler's method, $e_i = |y(t_i) - z_i|$
>
> | $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | | | $h = 0.05$ | |
> |------|---------|---|--------|--------|----|--------|--------|----|--------|--------|
> | | | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ |
> | 0.0 | 1.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 |
> | 0.2 | 1.5082 | 1 | 1.4000 | 0.1082 | 2 | 1.4500 | 0.0582 | 4 | 1.4779 | 0.0303 |
> | 0.4 | 2.1745 | 2 | 1.9600 | 0.2145 | 4 | 2.0580 | 0.1165 | 8 | 2.1135 | 0.0610 |
> | 0.6 | 2.8799 | 3 | 2.5840 | 0.2959 | 6 | 2.7175 | 0.1624 | 12 | 2.7943 | 0.0856 |
> | 0.8 | 3.4470 | 4 | 3.1376 | 0.3094 | 8 | 3.2752 | 0.1717 | 16 | 3.3557 | 0.0913 |
> | 1.0 | 3.6109 | 5 | 3.4326 | 0.1783 | 10 | 3.5103 | 0.1006 | 20 | 3.5566 | 0.0544 |
>
> We can observe that the error decreases as $h$ decreases. Moreover, the numerical values indicate that the error is linear in $h$: when the step size is reduced to its half, the error also reduces approximately to its half.

Next we investigate the **convergence of the Euler's method**. For simplicity we suppose the mesh points are equidistant, i.e., $h_i = h$ with $h > 0$. The $(i+1)$-th **local truncation error** of the Euler's method is defined by

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i)), \qquad (i = 0, 1, \ldots, n-1),$$

where $y(t)$ is the solution of the IVP (1). It implies

$$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \tau_{i+1}h. \tag{4}$$

This yields that the error at the $(i+1)$-th step is $|\tau_{i+1}|h$, if at the $i$th step the error is 0, i.e., we made the step from the exact solution value.

Consider the first-order Taylor approximation of $y(t)$ around $t_i$:

$$y(t) = y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(\xi)(t - t_i)^2.$$

Then

$$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \frac{1}{2}y''(\xi)h^2.$$

Hence

$$\tau_{i+1} = \frac{h}{2}y''(\xi),$$

where $\xi \in (t_i, t_{i+1})$.

> **Theorem:**
> Let $a, b$ be positive reals, $x_0, x_1, x_2, \ldots$ a finite sequence of reals, for which $x_0 \ge -b/a$ and
>
> $$x_{i+1} \le (1 + a)x_i + b, \qquad i \ge 0.$$
>
> Then
>
> $$x_i \le e^{ia}\left(\frac{b}{a} + x_0\right) - \frac{b}{a}$$
>
> holds for all $i \ge 0$.

> **Proof**
> Applying the conditions and simple manipulations we get
>
> $$
> \begin{aligned}
> x_i &\le (1 + a)x_{i-1} + b \\
> &\le (1 + a)((1 + a)x_{i-2} + b) + b \\
> &\ \ \vdots \\
> &\le (1 + a)((1 + a)(\cdots((1 + a)x_0 + b)\cdots) + b) + b \\
> &= (1 + a)^i x_0 + (1 + (1 + a) + (1 + a)^2 + \cdots + (1 + a)^{i-1})b \\
> &= (1 + a)^i x_0 + \frac{(1 + a)^i - 1}{a}b \\
> &= (1 + a)^i\left(\frac{b}{a} + x_0\right) - \frac{b}{a}. 
> \end{aligned}
> \tag{5}
> $$
>
> It follows from $1 + x \le e^x$ that $(1 + x)^i \le e^{ix}$, which, together with (5), implies the statement of the theorem.

> **Theorem:**
> Let $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ be continuous and Lipschitz continuous in its second variable with the Lipschitz constant $L$, and let $z_0, z_1, \ldots, z_n$ be the Euler sequence, and $\tau = \max\{|\tau_{i+1}| \colon i = 0, 1, \ldots, n-1\}$. Then
>
> $$|y(t_i) - z_i| \le \left(e^{L(T - t_0)} - 1\right)\frac{\tau}{L}, \qquad (i = 0, 1, \ldots, n). \tag{6}$$

> **Proof**
> Subtracting equations
>
> $$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \tau_{i+1}h$$
>
> and
>
> $$z_{i+1} = z_i + hf(t_i, z_i)$$
>
> we get
>
> $$y(t_{i+1}) - z_{i+1} = y(t_i) - z_i + h\left(f(t_i, y(t_i)) - f(t_i, z_i)\right) + \tau_{i+1}h.$$
>
> Then we get
>
> $$
> \begin{aligned}
> |y(t_{i+1}) - z_{i+1}| &\le |y(t_i) - z_i| + h\left|f(t_i, y(t_i)) - f(t_i, z_i)\right| + |\tau_{i+1}|h \\
> &\le |y(t_i) - z_i| + Lh|y(t_i) - z_i| + |\tau_{i+1}|h \\
> &\le (1 + Lh)|y(t_i) - z_i| + \tau h.
> \end{aligned}
> $$
>
> From the last inequality an application of the previous theorem gives with $x_i = |y(t_i) - z_i|$, $a = Lh$, $b = \tau h$, and using relations $x_0 = 0$ and $nh = t_n - t_0 = T - t_0$ estimate (6) follows.

The previous theorem gives the error estimate

$$|y(t_i) - z_i| \le K_1 \tau, \qquad i = 0, 1, \ldots, n,$$

where $K_1$ is a constant. Formula

$$\tau_{i+1} = \frac{h}{2}y''(\xi)$$

implies that $\tau_{i+1}$ can be estimated by

$$|\tau_{i+1}| \le \frac{M_2}{2}h, \qquad i = 0, 1, \ldots, n-1$$

where

$$M_2 = \max\{|y''(t)| \colon t \in [t_0, T]\}.$$

The solution is differentiable and satisfies equation

$$y'(t) = f(t, y(t)).$$

So if we assume that $f \in C^1$ then

$$
\begin{aligned}
y''(t) &= \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))y'(t) \\
&= \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))f(t, y(t)).
\end{aligned}
$$

Therefore if $f$ and the partial derivatives of $f$ are bounded, then we can get an explicit estimate of $M_2$.

> **Theorem:**
> Let $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ be continuous and Lipschitz continuous in its second variable, and continuously partially differentiable with respect to both variables. Then the Euler's method converges linearly to the solution of the IVP (1), i.e., there exists a constant $K > 0$ such that
>
> $$|y(t_i) - z_i| \le Kh, \qquad i = 0, 1, \ldots, n.$$

---

