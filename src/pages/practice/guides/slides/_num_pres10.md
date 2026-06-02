# Numerical Analysis: 10 — Ordinary Differential Equations

**Ferenc Hartung**
University of Pannonia
Department of Mathematics
Veszprém, Hungary

2025

---

## 10.1 Review of Differential Equations

Consider the initial value problem (IVP)

$$y' = f(t, y), \qquad t \in [t_0, T], \qquad y(t_0) = y_0. \tag{1}$$

We assume

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

*(Slide shows a direction field with several solution curves; the red curve is the solution through $(t_0, y_0)$.)*

The function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is called **Lipschitz continuous** in its second variable with the **Lipschitz constant** $L$ if

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{for all } t \in [t_0, T] \text{ and } y, \tilde{y} \in \mathbb{R}.$$

> **Theorem:**
> Suppose that $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuous and it is Lipschitz continuous in its second variable. Then the IVP (1) has a unique solution on the interval $[0, T]$ for all initial value $y_0 \in \mathbb{R}$.

---

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

## 10.3 Effect of Rounding in the Euler's Method

We analyze the **effect of the rounding error** in the computation of the Euler's method. Suppose instead of $z_i$ we compute $w_i$. Also, let $w_0$ be the machine number stored instead of $y_0$. Define $\delta_0 := y_0 - w_0$, and let $\delta_i$ be the rounding error in the $i$th step. Then

$$w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}, \qquad i = 0, 1, 2, \ldots, n-1. \tag{7}$$

Subtracting equation $z_{i+1} = z_i + hf(t_i, z_i)$ from it we get

$$w_{i+1} - z_{i+1} = w_i - z_i + h(f(t_i, w_i) - f(t_i, z_i)) + \delta_{i+1}.$$

Suppose $f$ is Lipschitz continuous in its second variable with the Lipschitz constant $L$. Let $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$. Then the triangle inequality yields

$$
\begin{aligned}
|w_{i+1} - z_{i+1}| &\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\delta_{i+1}| \\
&\le |w_i - z_i| + hL|w_i - z_i| + \delta, \qquad i = 0, 1, 2, \ldots.
\end{aligned}
$$

Hence with $a = hL$ and $b = \delta$ we get the next estimate.

$$
\begin{aligned}
|w_i - z_i| &\le e^{L(T - t_0)}\left(\frac{\delta}{hL} + \delta_0\right) - \frac{\delta}{hL} \\
&= \frac{e^{L(T - t_0)} - 1}{L}\frac{\delta}{h} + |\delta_0|e^{L(T - t_0)}.
\end{aligned}
$$

We proved earlier

$$|y(t_i) - z_i| \le \left(e^{L(T - t_0)} - 1\right)\frac{hM_2}{2L},$$

where $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$. Then

$$|y(t_i) - w_i| \le |y(t_i) - z_i| + |z_i - w_i|$$

yields the next result.

> **Theorem:**
> Let $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ be continuous, Lipschitz continuous in its second variable with the Lipschitz constant $L$, and be continuously partially differentiable with respect to both variables. Then
>
> $$|y(t_i) - w_i| \le \frac{e^{L(T - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) + |\delta_0|e^{L(T - t_0)}, \qquad i = 0, 1, \ldots, n,$$
>
> where $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$ and $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$.

The factor $\frac{hM_2}{2} + \frac{\delta}{h}$ in the previous theorem is no longer linear in $h$, moreover

$$\lim_{h \to 0+}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) = \infty.$$

Hence if $h$ is too small, then the effect of rounding in the Euler's method can be significant. If the step size is much bigger than the rounding error, then the effect of the rounding is small in the output.

---

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
