## 10.2. Euler's Method

Consider the IVP (10.1). In this section we investigate the simplest numerical approximation method for solving ODEs, the *Euler's method*. Given a finite interval $[t_0, T]$, and equidistant mesh points $t_0 < t_1 < \cdots < t_n = T$, where $h = (T - t_0)/n$, and $t_i = t_0 + ih$ $(i = 0, \ldots, n-1)$. Note that the Euler's method can be easily extended for non-equidistant mesh points, but for simplicity, here we study only the case of the equidistant mesh. The function values $y(t_i)$ are approximated by the so-called *Euler sequence* $z_i$ defined by

$$z_{i+1} = z_i + hf(t_i, z_i), \quad (i = 0, 1, 2, \ldots, n-1), \qquad z_0 = y_0. \tag{10.4}$$

We show three different methods to derive the formula of the Euler's method, and then we investigate the truncation error of the approximation. We assume that the function $f$ is continuous.

**Method (i):** Suppose that $y(t)$ is the solution of the IVP (10.1). Since $y(t)$ satisfies the initial condition, we have that $y(t_0) = y_0$, and hence $z_0$ is the exact solution value at $t_0$. We estimate $y(t)$ by its first-order Taylor polynomial around $t_0$: $y(t) \approx y(t_0) + y'(t_0)(t - t_0)$. Then at $t = t_1$ we get

$$y(t_1) \approx y(t_0) + y'(t_0)h. \tag{10.5}$$

This formula involves the derivative of the solution at $t_0$, but equation (10.1) yields $y'(t_0) = f(t_0, y(t_0))$. Since $y(t_0) = y_0 = z_0$, we can compute $y'(t_0)$ with the help of $t_0$ and $z_0$: $y'(t_0) = f(t_0, z_0)$. Hence relation (10.5) implies $y(t_1) \approx z_1 := z_0 + hf(t_0, z_0)$. Therefore, $z_1$ approximates the value of the solution at $t_1$. Suppose now that $z_i$ approximates $y(t_i)$. Then following the previous idea, $y(t_{i+1}) \approx y(t_i) + y'(t_i)h$, and since $y(t_i) \approx z_i$ and $y'(t_i) = f(t_i, y(t_i)) \approx f(t_i, z_i)$, we get $y(t_{i+1}) \approx z_{i+1}$, where $z_{i+1}$ is defined by formula (10.4).

**Method (ii):** The solution satisfies relation $y'(t_i) = f(t_i, y(t_i))$. Applying the first-order difference formula we get

$$y'(t_i) \approx \frac{y(t_{i+1}) - y(t_i)}{h},$$

and therefore,

$$\frac{y(t_{i+1}) - y(t_i)}{h} \approx f(t_i, y(t_i)).$$

Rearranging this equation we get $y(t_{i+1}) \approx y(t_i) + hf(t_i, y(t_i))$. Assuming that $y(t_i) \approx z_i$, the expression $z_{i+1}$ defined by (10.4) satisfies $y(t_{i+1}) \approx z_{i+1}$.

**Method (iii):** Integrating both sides of the equation $y'(t) = f(t, y(t))$ from $t_i$ to $t_{i+1}$ we get

$$y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds,$$

and hence

$$y(t_{i+1}) = y(t_i) + \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds. \tag{10.6}$$

We do not know $y(s)$, and therefore, we cannot integrate $f(s, y(s))$ exactly. We use the following simple approximation formula for the definite integral:

$$\int_a^b g(s)\, ds \approx g(a)(b - a). \tag{10.7}$$

This formula can be applied here, since it uses only a function value at the left end point of the interval, which is assumed to be known. With this formula we have $\int_{t_i}^{t_{i+1}} f(s, y(s))\, ds \approx hf(t_i, y(t_i))$, and hence

$$y(t_{i+1}) \approx y(t_i) + hf(t_i, y(t_i)),$$

which gives again formula (10.4).

The geometric interpretation of method (i) is the following: we take the point $(t_i, z_i)$ obtained in the $i$th step, and consider the tangent line to the solution which goes through this point, and we move to the point on the tangent line with first coordinate $t_{i+1}$.

**Example 10.2.** Consider the IVP

$$y' = 2y - 10t^2 + 2t, \qquad y(0) = 1. \tag{10.8}$$

We can easily check that the exact solution of the problem is $y(t) = 5t^2 + 4t + 2 - e^{2t}$. Fix a step size $h > 0$, and consider the equidistant mesh points $t_i = ih$. The Euler sequence is defined by the recursion

$$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = 1.$$

We printed the first several terms of the sequence and the error of the approximation $e_i = |y(t_i) - z_i|$ in Table 10.1 corresponding to step sizes $h = 0.2$, $0.1$ and $0.05$. We can observe that the error decreases as $h$ decreases. Moreover, the numerical values indicate that the error is linear in $h$: when the step size is reduced to its half, the error also reduces approximately to its half. $\square$

**Table 10.1: Euler's method**

| $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | | | $h = 0.05$ | |
|------|---------|---|--------|--------|----|--------|--------|----|--------|--------|
| | | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ |
| 0.0 | 1.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 |
| 0.2 | 1.0652 | 1 | 1.1000 | 0.0348 | 2 | 1.0830 | 0.0178 | 4 | 1.0742 | 0.0090 |
| 0.4 | 1.0614 | 2 | 1.1340 | 0.0726 | 4 | 1.0986 | 0.0372 | 8 | 1.0802 | 0.0188 |
| 0.6 | 0.9899 | 3 | 1.1034 | 0.1135 | 6 | 1.0481 | 0.0583 | 12 | 1.0194 | 0.0295 |
| 0.8 | 0.8518 | 4 | 1.0097 | 0.1579 | 8 | 0.9329 | 0.0811 | 16 | 0.8930 | 0.0411 |
| 1.0 | 0.6487 | 5 | 0.8547 | 0.2060 | 10 | 0.7547 | 0.1060 | 20 | 0.7025 | 0.0538 |

Next we investigate the convergence of the Euler's method. We need the following definition: The *local truncation error* of the Euler's method at the $i$th mesh point is defined by the number

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i)), \qquad (i = 0, 1, \ldots, n-1), \tag{10.9}$$

where $y(t)$ is the solution of the IVP (10.1).

Rearranging equation (10.9) we have

$$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \tau_{i+1}h. \tag{10.10}$$

This yields that the error at the $(i+1)$st step is $\tau_{i+1}h$, if at the $i$th step the error is 0, i.e., we made the step from the exact solution value.

Consider the first Taylor approximation of $y(t)$ around $t_i$:

$$y(t) = y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(\xi)(t - t_i)^2.$$

From this relation, equation $y'(t_i) = f(t_i, y(t_i))$ and relation (10.10) it follows that the local truncation error of the Euler's method equals to

$$\tau_{i+1} = \frac{h}{2}y''(\xi), \tag{10.11}$$

where $\xi \in (t_i, t_{i+1})$.

We need the following result.

**Theorem 10.3.** *Let $a, b$ be positive reals, $x_0, x_1, x_2, \ldots, x_n$ be a finite sequence of reals, for which $x_0 \ge -b/a$ and*

$$x_{i+1} \le (1 + a)x_i + b, \qquad i = 0, 1, \ldots, n-1.$$

*Then*

$$x_i \le e^{ia}\left(\frac{b}{a} + x_0\right) - \frac{b}{a}$$

*holds for $i = 0, 1, \ldots, n$.*

**Proof.** Applying the conditions and simple manipulations we get

$$
\begin{aligned}
x_i &\le (1 + a)x_{i-1} + b \\
&\le (1 + a)((1 + a)x_{i-2} + b) + b \\
&\ \ \vdots \\
&\le (1 + a)((1 + a)(\cdots((1 + a)x_0 + b)\cdots) + b) + b \\
&= (1 + a)^i x_0 + (1 + (1 + a) + (1 + a)^2 + \cdots + (1 + a)^{i-1})b \\
&= (1 + a)^i x_0 + \frac{(1 + a)^i - 1}{a}b \\
&= (1 + a)^i\left(\frac{b}{a} + x_0\right) - \frac{b}{a}. 
\end{aligned}
\tag{10.12}
$$

It follows from $1 + x \le e^x$ that $(1 + x)^i \le e^{ix}$, which, together with (10.12), implies the statement of the theorem. $\square$

**Theorem 10.4.** *Let $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ be continuous and Lipschitz continuous in its second variable with the Lipschitz constant $L$, and let $z_0, z_1, \ldots, z_n$ be the Euler sequence, and $\tau = \max\{|\tau_{i+1}| \colon i = 0, 1, \ldots, n-1\}$. Then*

$$|y(t_i) - z_i| \le \left(e^{L(T - t_0)} - 1\right)\frac{\tau}{L}, \qquad (i = 0, 1, \ldots, n). \tag{10.13}$$

**Proof.** Subtracting equations (10.10) and (10.4) we get

$$y(t_{i+1}) - z_{i+1} = y(t_i) - z_i + h\left(f(t_i, y(t_i)) - f(t_i, z_i)\right) + \tau_{i+1}h.$$

Then the triangle inequality, Lipschitz continuity of $f$, the definition of $\tau$ yields

$$
\begin{aligned}
|y(t_{i+1}) - z_{i+1}| &\le |y(t_i) - z_i| + h\left|f(t_i, y(t_i)) - f(t_i, z_i)\right| + |\tau_{i+1}|h \\
&\le |y(t_i) - z_i| + Lh|y(t_i) - z_i| + |\tau_{i+1}|h \\
&\le (1 + Lh)|y(t_i) - z_i| + \tau h.
\end{aligned}
$$

Using Theorem 10.3 with $x_i = |y(t_i) - z_i|$, $a = Lh$, $b = \tau h$, the last inequality and relations $x_0 = 0$ and $nh = t_n - t_0 = T - t_0$ imply (10.13). $\square$

The previous theorem gives the error estimate

$$|y(t_i) - z_i| \le K_1 \tau, \qquad i = 0, 1, \ldots, n, \tag{10.14}$$

where $K_1$ is a constant. Hence the error of the Euler sequence is small if the local truncation error is small. Formula (10.11) implies that $\tau_{i+1}$ can be estimated by

$$|\tau_{i+1}| \le \frac{M_2}{2}h, \qquad i = 0, 1, \ldots, n-1 \tag{10.15}$$

where $M_2 = \max\{|y''(t)| \colon t \in [t_0, T]\}$ (assuming that the solution is twice differentiable). This means that if $h$ is small, then the error is small.

The solution is differentiable and satisfies equation $y'(t) = f(t, y(t))$. So if we assume that $f$ is continuously partially differentiable with respect to both variables, then $y$ is twice continuously differentiable, and

$$y''(t) = \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))y'(t).$$

Here we can use again (10.1) to substitute $y'(t)$:

$$y''(t) = \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))f(t, y(t)). \tag{10.16}$$

Therefore, if $f$ and the partial derivatives of $f$ are bounded, then (10.16) gives an explicit estimate of $M_2$.

Summarizing the above considerations, we get the next result.

**Theorem 10.5.** *Let $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ be continuous and Lipschitz continuity in its second variable, and continuously partially differentiable with respect to both variables. Then the Euler's method converges linearly to the solution of the IVP (10.1), i.e., there exists a constant $K > 0$ such that*

$$|y(t_i) - z_i| \le Kh, \qquad i = 0, 1, \ldots, n.$$

### Exercises

1. Compute the first 10 terms of the Euler sequence and compute the error of the approximation (using the given exact solution) for the following IVPs:

   (a) $ty' - y = 2t, \qquad y(1) = 1, \quad h = 0.1$, the solution: $y(t) = 2t \ln t + t$,

   (b) $y' - 2y = 6, \qquad y(0) = 2, \quad h = 0.1, \quad y(t) = -3 + 5e^{2t}$,

   (c) $y' - \frac{2}{t}y = 1, \qquad y(1) = 1, \quad h = 0.2, \quad y(t) = 2t^2 - t$,

   (d) $y' = \frac{t}{1+y}, \qquad y(1) = 2, \quad h = 0.1, \quad y(t) = \sqrt{t^2 + 8} - 1$.

2. Formulate the Euler's method for systems of differential equations.

3. Solve the following system of differential equations using Euler's method, and give the error of the approximation (using the given solution):

   (a) $\left.\begin{array}{rcl} y_1' &=& 2y_1 - 3y_2, \\ y_2' &=& -y_1 + 4y_2, \end{array}\right\}$ $\quad t \in [0, 2], \quad y_1(0) = 1, \quad y_2(0) = -5$,
   $h = 0.1, \quad y_1(t) = -3e^t + 4e^{5t}, \quad y_2(t) = -4e^{5t} - e^t$.

   (b) $\left.\begin{array}{rcl} y_1' &=& 2y_1 - 3y_2, \\ y_2' &=& 3y_1 + 2y_2, \end{array}\right\}$ $\quad t \in [0, 1], \quad y_1(0) = 1, \quad y_2(0) = 0$,
   $h = 0.1, \quad y_1(t) = e^{2t}\cos 3t, \quad y_2(t) = e^{2t}\sin 3t$.

4. Give the equivalent system of differential equations for the following scalar differential equations. Compute the approximate solution of the system using Euler's method, and give the error of the approximation (using the given solution).

   (a) $y'' - 3y' + 2y = 2, \quad t \in [0, 1] \quad y(0) = 1,\ y'(0) = -1, \quad h = 0.1, \quad y(t) = 1 + e^t - e^{2t}$,

   (b) $y'' - 2y' + 5y = 0, \quad t \in [0, 2], \quad y(1) = 1,\ y'(0) = 3, \quad h = 0.2, \quad y(t) = e^t \sin 2t + e^t \cos 2t$.

5. Let $t_i = t_0 + ih$ be an equidistant mesh of the interval $[t_0, T]$, $\{z_i\}$ be the corresponding Euler sequence, and $z(t; h)$ be the linear spline function which interpolates the values $z_i$: $z(t_i; h) = z_i$, $i = 0, 1, \ldots, n$. Prove that

$$\sup_{t \in [t_0, T]} |y(t) - z(t; h)| \to 0, \qquad \text{as } h \to 0.$$

