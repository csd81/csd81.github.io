# Chapter 10

# Ordinary Differential Equations

In this chapter we study numerical solution techniques of ordinary differential equations (ODEs). We define the Euler's, Taylor's and Runge–Kutta methods.

## 10.1. Review of Differential Equations

In this chapter we investigate approximate solutions of the initial value problem (IVP)

$$y' = f(t, y), \qquad y(t_0) = y_0 \tag{10.1}$$

on a finite time interval $[t_0, T]$. For simplicity we study the case when $y = y(t)$ is a real function, i.e., we assume that

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

The methods we define can be generalized to the system case: then the unknown variable $\mathbf{y} = \mathbf{y}(t)$ denotes a vector of $m$ dimension, and the system has the form

$$\mathbf{y}' = \mathbf{f}(t, \mathbf{y}), \qquad \mathbf{y}(t_0) = \mathbf{y}^{(0)}, \tag{10.2}$$

where

$$\mathbf{f} \colon [t_0, T] \times \mathbb{R}^m \to \mathbb{R}^m, \qquad \mathbf{y}^{(0)} \in \mathbb{R}^m.$$

We introduce the following definition: The function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is called *Lipschitz continuous* in its second variable with the *Lipschitz constant* $L$ if

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{for all } t \in [t_0, T] \text{ and } y, \tilde{y} \in \mathbb{R}. \tag{10.3}$$

This notion can be easily generalized to the system case if instead of the absolute value we use a vector norm in the previous definition.

It is known from the theory of ODEs that the existence of solution of the IVPs (10.1) or (10.2) follows if the functions $f$ or $\mathbf{f}$ are continuous. To get the uniqueness of the solutions, we have to assume also the Lipschitz continuity of $f$ or $\mathbf{f}$ in its second variable. Therefore, we have the following result (formulated for the scalar case):

**Theorem 10.1.** *Suppose that $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuous and it is Lipschitz continuous in its second variable. Then the IVP (10.1) has a unique solution on the interval $[0, T]$ for all initial value $y_0 \in \mathbb{R}$.*

We note that the Lipschitz continuity of $f$ in Theorem 10.1 and also in later results, i.e., the assumption that inequality (10.3) holds for all $y, \tilde{y} \in \mathbb{R}$ is a strong condition on $f$. Instead of it we could assume the so-called *local Lipschitz continuity*: for every interval $[a, b]$ for which $y_0 \in (a, b)$ there exists a constant $L > 0$ (which depends on $[a, b]$) such that (10.3) holds for all $t \in [t_0, T]$, $y, \tilde{y} \in [a, b]$. This property holds for most of the functions which are important in applications. For example, it is enough to assume that $f$ be continuously differentiable with respect to its second derivative. Then it implies that $f$ is locally Lipschitz continuous in its second variable (see Exercise 3). But from the local Lipschitz continuity it does not follow that the solution of the IVP (10.1) exists on $[t_0, T]$. It follows only that there exists a $0 < \bar{T} \le T$ such that the IVP (10.1) has a unique solution on the interval $[t_0, \bar{T}]$ (see Exercise 4). To avoid this technical problem we will assume in later results that $f$ is globally Lipschitz continuous in its second variable, i.e., (10.3) holds.

It is known that the scalar $m$th-order IVP

$$y^{(m)} = f(t, y, y', \ldots, y^{(m-1)}), \quad y(t_0) = y_0,\ y'(t_0) = y_1, \ldots,\ y^{(m-1)}(t_0) = y_{m-1}$$

is equivalent to an IVP of the form (10.2), where

$$\mathbf{y} = (y, y', \ldots, y^{(m-1)})^T, \quad \text{and} \quad \mathbf{y}^{(0)} = (y_0, y_1, \ldots, y_{m-1})^T.$$

So for simplicity, later we will study only scalar IVPs of the form (10.1), but most of the results can be generalized to the system case and to $m$th-order IVPs too.

### Exercises

1. Reformulate the following higher order scalar IVPs as an equivalent system of the form (10.2):

   (a) $y'' + 5y' = e^{2t-1}, \qquad y(0) = 3, \quad y'(0) = -1$,

   (b) $y'' - t^2 y' + ty = 0, \qquad y(1) = 1, \quad y'(1) = 0$,

   (c) $y''' + 4y'' - 2y' + 5y = t^3, \qquad y(-1) = 2, \quad y'(-1) = -3$.

<details class="reveal-solution"><summary>Show solution</summary>

**(a)** Let $y_1 = y,\ y_2 = y'$. Then $y_1' = y_2$, $y_2' = e^{2t-1} - 5y_2$, giving the system

$$\begin{pmatrix} y_1' \\ y_2' \end{pmatrix} = \begin{pmatrix} y_2 \\ e^{2t-1} - 5y_2 \end{pmatrix}, \quad \begin{pmatrix} y_1(0) \\ y_2(0) \end{pmatrix} = \begin{pmatrix} 3 \\ -1 \end{pmatrix}.$$

**(b)** Let $y_1 = y,\ y_2 = y'$. Then $y_1' = y_2$, $y_2' = t^2 y_2 - t y_1$, giving

$$\begin{pmatrix} y_1' \\ y_2' \end{pmatrix} = \begin{pmatrix} y_2 \\ t^2 y_2 - t y_1 \end{pmatrix}, \quad \begin{pmatrix} y_1(1) \\ y_2(1) \end{pmatrix} = \begin{pmatrix} 1 \\ 0 \end{pmatrix}.$$

**(c)** Let $y_1 = y,\ y_2 = y',\ y_3 = y''$. Then $y_1' = y_2$, $y_2' = y_3$, $y_3' = t^3 - 4y_3 + 2y_2 - 5y_1$, giving

$$\begin{pmatrix} y_1' \\ y_2' \\ y_3' \end{pmatrix} = \begin{pmatrix} y_2 \\ y_3 \\ t^3 - 4y_3 + 2y_2 - 5y_1 \end{pmatrix}, \quad \begin{pmatrix} y_1(-1) \\ y_2(-1) \\ y_3(-1) \end{pmatrix} = \begin{pmatrix} 2 \\ -3 \\ 1 \end{pmatrix}.$$

</details>

2. Show that the IVP $y' = \sqrt{|y|}$, $y(0) = 0$ has two solutions $y(t) = 0$ and $y(t) = t^2/4$. Show that the function $f(y) = \sqrt{|y|}$ is not Lipschitz continuous in $y$.

<details class="reveal-solution"><summary>Show solution</summary>

The two candidate solutions are $y_1(t) = 0$ and $y_2(t) = t^2/4$ (for $t \ge 0$). Verification: $y_1'(t) = 0 = \sqrt{|y_1|}$, and $y_2'(t) = t/2 = \sqrt{t^2/4} = \sqrt{|y_2|}$; both satisfy $y(0) = 0$.

To show $f(y) = \sqrt{|y|}$ is not Lipschitz, take $\tilde{y} = 0$:

$$\frac{|f(y) - f(0)|}{|y - 0|} = \frac{\sqrt{|y|}}{|y|} = \frac{1}{\sqrt{|y|}} \to \infty \quad \text{as } y \to 0.$$

Hence no finite Lipschitz constant exists — Lipschitz continuity is essential for uniqueness.

</details>

3. Prove that if the function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuously differentiable in its second variable, then $f$ is locally Lipschitz continuous in its second variable.

<details class="reveal-solution"><summary>Show solution</summary>

Let $[a, b]$ be any bounded interval. Since $\partial f/\partial y$ is continuous on $[t_0, T] \times [a, b]$, it is bounded: $\left|\frac{\partial f}{\partial y}(t, y)\right| \le M$ there. By the Mean Value Theorem, for any $y, \tilde{y} \in [a, b]$,

$$f(t, y) - f(t, \tilde{y}) = \frac{\partial f}{\partial y}(t, \xi)(y - \tilde{y})$$

for some $\xi$ between $y$ and $\tilde{y}$. Therefore

$$|f(t, y) - f(t, \tilde{y})| \le M|y - \tilde{y}|,$$

so $f$ is Lipschitz on $[a, b]$ with $L = M$. Since $[a, b]$ was arbitrary, $f$ is locally Lipschitz. $\square$

</details>

4. Show that the IVP $y' = y^2$, $y(0) = 1$ has no solution on the interval $[0, T]$ for $T \ge 1$. Show that the function $g(y) = y^2$ is not globally Lipschitz continuous in $y$, but it is locally Lipschitz continuous.

<details class="reveal-solution"><summary>Show solution</summary>

Separating variables: $\int y^{-2}\,dy = \int dt$ gives $-1/y = t + C$. With $y(0) = 1$ we get $C = -1$, so

$$y(t) = \frac{1}{1-t}.$$

As $t \to 1^-$, $y(t) \to \infty$ (finite-time blowup), hence no solution exists on $[0, T]$ for $T \ge 1$.

$g(y) = y^2$ is not globally Lipschitz: $\frac{|g(y) - g(0)|}{|y|} = |y| \to \infty$. But on any bounded interval $[a, b]$, $|g'(y)| = |2y| \le 2\max(|a|,|b|)$, so by Exercise 3 it is locally Lipschitz.

</details>

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

<details class="reveal-solution"><summary>Show solution</summary>

*Worked example (illustrating Euler's method on $y' = 2y - 10t^2 + 2t$, $y(0)=1$, exact $y(t) = 5t^2 + 2t + 1$):*

Euler's method: $z_{i+1} = z_i + h(2z_i - 10t_i^2 + 2t_i)$. With $h = 0.2$:

```
t = 0.0:  z = 1.0000
t = 0.2:  z = 1.4000
t = 0.4:  z = 1.9600
t = 0.6:  z = 2.5840
t = 0.8:  z = 3.1328
t = 1.0:  z = 3.4254
```

Exact $y(1) = 8$, so the error at $t = 1$ is $|8 - 3.4254| = 4.57$ — Euler's method is only first-order accurate. Apply the same recurrence $z_{i+1} = z_i + h\,f(t_i, z_i)$ to each IVP (a)–(d) and compare with the supplied exact solution.

</details>

2. Formulate the Euler's method for systems of differential equations.

<details class="reveal-solution"><summary>Show solution</summary>

For a system $\mathbf{y}' = \mathbf{f}(t, \mathbf{y})$, $\mathbf{y}(t_0) = \mathbf{y}_0$ with $\mathbf{y} \in \mathbb{R}^m$, the Euler sequence is the vector recurrence

$$\mathbf{z}_{i+1} = \mathbf{z}_i + h\,\mathbf{f}(t_i, \mathbf{z}_i), \qquad \mathbf{z}_0 = \mathbf{y}_0,$$

i.e. each component $z^{(k)}_{i+1} = z^{(k)}_i + h\,f_k(t_i, \mathbf{z}_i)$ is updated simultaneously using the current vector $\mathbf{z}_i$. (Higher-order scalar ODEs are first reduced to such a system as in Exercise 1 of Section 10.1.)

</details>

3. Solve the following system of differential equations using Euler's method, and give the error of the approximation (using the given solution):

   (a) $\left.\begin{array}{rcl} y_1' &=& 2y_1 - 3y_2, \\ y_2' &=& -y_1 + 4y_2, \end{array}\right\}$ $\quad t \in [0, 2], \quad y_1(0) = 1, \quad y_2(0) = -5$,
   $h = 0.1, \quad y_1(t) = -3e^t + 4e^{5t}, \quad y_2(t) = -4e^{5t} - e^t$.

   (b) $\left.\begin{array}{rcl} y_1' &=& 2y_1 - 3y_2, \\ y_2' &=& 3y_1 + 2y_2, \end{array}\right\}$ $\quad t \in [0, 1], \quad y_1(0) = 1, \quad y_2(0) = 0$,
   $h = 0.1, \quad y_1(t) = e^{2t}\cos 3t, \quad y_2(t) = e^{2t}\sin 3t$.

<details class="reveal-solution"><summary>Show solution</summary>

Apply the vector Euler recurrence from Exercise 2 componentwise. For (a),

$$z^{(1)}_{i+1} = z^{(1)}_i + h(2z^{(1)}_i - 3z^{(2)}_i), \qquad z^{(2)}_{i+1} = z^{(2)}_i + h(-z^{(1)}_i + 4z^{(2)}_i),$$

starting from $(z^{(1)}_0, z^{(2)}_0) = (1, -5)$ with $h = 0.1$ on $[0,2]$; for (b) use $z^{(2)}_{i+1} = z^{(2)}_i + h(3z^{(1)}_i + 2z^{(2)}_i)$ from $(1,0)$ on $[0,1]$. At each $t_i$ the error is $\max_k |y_k(t_i) - z^{(k)}_i|$ using the supplied exact solutions $y_1, y_2$. Because the exact solutions grow exponentially, the Euler error grows with $t$ at the expected first-order rate $O(h)$.

</details>

4. Give the equivalent system of differential equations for the following scalar differential equations. Compute the approximate solution of the system using Euler's method, and give the error of the approximation (using the given solution).

   (a) $y'' - 3y' + 2y = 2, \quad t \in [0, 1] \quad y(0) = 1,\ y'(0) = -1, \quad h = 0.1, \quad y(t) = 1 + e^t - e^{2t}$,

   (b) $y'' - 2y' + 5y = 0, \quad t \in [0, 2], \quad y(1) = 1,\ y'(0) = 3, \quad h = 0.2, \quad y(t) = e^t \sin 2t + e^t \cos 2t$.

<details class="reveal-solution"><summary>Show solution</summary>

First reduce each scalar equation to a system (as in Section 10.1, Exercise 1). For (a), set $y_1 = y,\ y_2 = y'$:

$$y_1' = y_2, \qquad y_2' = 2 + 3y_2 - 2y_1, \qquad (y_1(0), y_2(0)) = (1, -1);$$

for (b), $y_1' = y_2,\ y_2' = 2y_2 - 5y_1$. Then apply the vector Euler recurrence with the given $h$, and at each mesh point compare $z^{(1)}_i$ with the supplied exact $y(t_i)$ to obtain the error, which decreases as $O(h)$.

</details>

5. Let $t_i = t_0 + ih$ be an equidistant mesh of the interval $[t_0, T]$, $\{z_i\}$ be the corresponding Euler sequence, and $z(t; h)$ be the linear spline function which interpolates the values $z_i$: $z(t_i; h) = z_i$, $i = 0, 1, \ldots, n$. Prove that

$$\sup_{t \in [t_0, T]} |y(t) - z(t; h)| \to 0, \qquad \text{as } h \to 0.$$

<details class="reveal-solution"><summary>Show solution</summary>

By the convergence of Euler's method (Theorem 10.5), $\max_i |y(t_i) - z_i| \le \frac{hM_2}{2L}(e^{L(T-t_0)} - 1) \to 0$ as $h \to 0$. At the nodes the spline equals $z_i$. Between nodes, $z(\cdot; h)$ is linear, while $y$ is uniformly continuous on the compact interval $[t_0, T]$; thus on each subinterval $|y(t) - z(t;h)|$ is bounded by the nodal errors plus the oscillation of $y$ over a subinterval of width $h$, both of which tend to $0$. Taking the supremum over $t$ gives $\sup_t |y(t) - z(t;h)| \to 0$. $\square$

</details>

## 10.3. Effect of Rounding in the Euler's Method

In practice in the application of the Euler's (or any other) method the rounding error can effect the numerical result of the computation. First, when we store the initial value $y_0$ in the computer, there can occur a rounding error when we replace the number with a machine number. In each step of the computation, we may also observe rounding error in the output. Let $z_i$ denote the exact value of the Euler sequence, and $w_i$ be the numerically computed value of the sequence. Furthermore, let $w_0$ be the machine number stored instead of $y_0$. Define $\delta_0 := y_0 - w_0$, and let $\delta_i$ be the rounding error in the $i$th step. Then we have that

$$w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}, \qquad i = 0, 1, 2, \ldots, n-1. \tag{10.17}$$

Subtracting equations (10.17) and (10.4) we get

$$w_{i+1} - z_{i+1} = w_i - z_i + h(f(t_i, w_i) - f(t_i, z_i)) + \delta_{i+1}.$$

Suppose $f$ is Lipschitz continuous in its second variable with the Lipschitz constant $L$. Let $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$. Then the triangle inequality yields

$$
\begin{aligned}
|w_{i+1} - z_{i+1}| &\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\delta_{i+1}| \\
&\le |w_i - z_i| + hL|w_i - z_i| + \delta, \qquad i = 0, 1, 2, \ldots.
\end{aligned}
$$

Hence Theorem 10.3 gives the next result.

**Theorem 10.6.** *Let $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ be continuous, Lipschitz continuous in its second variable with the Lipschitz constant $L$, and be continuously partially differentiable with respect to both variables. Then*

$$|y(t_i) - w_i| \le \frac{e^{L(T - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) + |\delta_0|e^{L(T - t_0)}, \qquad i = 0, 1, \ldots, n,$$

*where $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$ and $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$.*

The factor $\frac{hM_2}{2} + \frac{\delta}{h}$ in Theorem 10.6 is no longer linear in $h$, moreover

$$\lim_{h \to 0+}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) = \infty.$$

Hence if $h$ is too small, then the effect of rounding in the Euler's method can be significant. If the step size is much bigger than the rounding error, then the effect of the rounding is small in the output.

### Exercises

1. Work out the details of Theorem 10.6.

<details class="reveal-solution"><summary>Show solution</summary>

With rounding, $w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}$, $|\delta_i| \le \delta$ for $i \ge 1$. Let $e_i = y(t_i) - w_i$. Subtracting from the Taylor expansion of $y$,

$$e_{i+1} = e_i + h[f(t_i, y(t_i)) - f(t_i, w_i)] + \tfrac{h^2}{2}y''(\xi_i) - \delta_{i+1},$$

so by Lipschitz continuity $|e_{i+1}| \le (1 + hL)|e_i| + \tfrac{h^2}{2}M_2 + \delta$. Writing $A = 1 + hL$, $B = \tfrac{h^2}{2}M_2 + \delta$ and iterating ($|e_i| \le A^i|e_0| + B\frac{A^i - 1}{A - 1}$) with $A - 1 = hL$ and $A^i \le e^{L(t_i - t_0)}$ gives

$$|y(t_i) - w_i| \le |\delta_0|e^{L(t_i - t_0)} + \frac{e^{L(t_i - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right). \qquad \square$$

</details>

2. Draw the graph of the function $g(h) = \frac{hM_2}{2} + \frac{\delta}{h}$ which appears in Theorem 10.6. What is its minimum point?

<details class="reveal-solution"><summary>Show solution</summary>

$g'(h) = \frac{M_2}{2} - \frac{\delta}{h^2} = 0 \implies h^2 = \frac{2\delta}{M_2}$, i.e.

$$h_{\text{opt}} = \sqrt{\frac{2\delta}{M_2}}.$$

Since $g''(h) = \frac{2\delta}{h^3} > 0$ for $h > 0$, this is a minimum, with minimum value $g(h_{\text{opt}}) = \sqrt{2\delta M_2}$. The graph decreases like $\delta/h$ for small $h$ (rounding dominates) and increases linearly for large $h$ (truncation dominates), forming a convex "U".

</details>

3. Using the optimal step size obtained in the previous exercise compute for the problem of Example 10.2 assuming $\delta = 0.00001$.

<details class="reveal-solution"><summary>Show solution</summary>

For Example 10.2, $y'' = 10$ so $M_2 = 10$, and $\delta = 10^{-5}$. Then

$$h_{\text{opt}} = \sqrt{\frac{2 \cdot 10^{-5}}{10}} = \sqrt{2 \cdot 10^{-6}} \approx 0.00141, \qquad g(h_{\text{opt}}) = \sqrt{2 \cdot 10^{-5} \cdot 10} = \sqrt{2 \cdot 10^{-4}} \approx 0.0141.$$

Using a step smaller than $\approx 0.0014$ would actually *increase* the total error because of rounding.

</details>

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

<details class="reveal-solution"><summary>Show solution</summary>

*Worked example on $f(t,y) = 2y - 10t^2 + 2t$:* compute the derivatives along solutions,

$$f^{(1)} = 4y - 20t^2 - 16t + 2, \qquad f^{(2)} = 8y - 40t^2 - 32t - 16.$$

Second-order Taylor: $z_{i+1} = z_i + hf + \tfrac{h^2}{2}f^{(1)}$; third-order adds $+\tfrac{h^3}{6}f^{(2)}$. With $h = 0.2$, $z_0 = 1$ the second-order method gives $z_1 = 1.52$, $z_2 \approx 2.098$, and the third-order method gives $z_1 \approx 1.509$ — both far more accurate than plain Euler. For each IVP (a)–(d) of Section 10.2, differentiate $f$ along the solution and apply these same formulas.

</details>

2. Formulate and apply the fourth- and fifth-order Taylor's method for the IVP (10.8).

<details class="reveal-solution"><summary>Show solution</summary>

Continuing the derivatives of $f(t,y) = 2y - 10t^2 + 2t$,

$$f^{(3)} = 16y - 80t^2 - 64t - 32, \qquad f^{(4)} = 32y - 160t^2 - 128t - 64.$$

Fourth-order Taylor: $z_{i+1} = z_i + hf + \tfrac{h^2}{2}f^{(1)} + \tfrac{h^3}{6}f^{(2)} + \tfrac{h^4}{24}f^{(3)}$; fifth-order adds $+\tfrac{h^5}{120}f^{(4)}$. The derivatives become increasingly cumbersome to compute — which is precisely why Runge–Kutta methods (next section) are preferred.

</details>

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

<details class="reveal-solution"><summary>Show solution</summary>

For each IVP apply, per step, the slope formulas

- **Midpoint:** $k_1 = f(t_i, z_i)$, $k_2 = f(t_i + \tfrac{h}{2}, z_i + \tfrac{h}{2}k_1)$, $z_{i+1} = z_i + hk_2$.
- **Modified Euler:** $k_1 = f(t_i, z_i)$, $k_2 = f(t_i + h, z_i + hk_1)$, $z_{i+1} = z_i + \tfrac{h}{2}(k_1 + k_2)$.
- **RK4:** $k_1 = f(t_i, z_i)$, $k_2 = f(t_i + \tfrac{h}{2}, z_i + \tfrac{h}{2}k_1)$, $k_3 = f(t_i + \tfrac{h}{2}, z_i + \tfrac{h}{2}k_2)$, $k_4 = f(t_i + h, z_i + hk_3)$, $z_{i+1} = z_i + \tfrac{h}{6}(k_1 + 2k_2 + 2k_3 + k_4)$.

At $t = 1$, $h = 0.1$ the expected error orders are: Euler $O(h) \approx 10^{-1}$; midpoint / modified Euler / Heun $O(h^2) \approx 10^{-2}$; RK4 $O(h^4) \approx 10^{-4}$.

</details>

2. Prove that if $f$ is Lipschitz continuous in its second variable, then the function

$$F(t, z; h) = \frac{1}{2}f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$$

of the midpoint method is also Lipschitz continuous in its second variable.

<details class="reveal-solution"><summary>Show solution</summary>

Using the Lipschitz constant $L$ of $f$ twice,

$$|F(t, z; h) - F(t, \tilde{z}; h)| \le L\left|z - \tilde{z} + \tfrac{h}{2}(f(t,z) - f(t,\tilde{z}))\right| \le L|z - \tilde{z}| + \tfrac{hL}{2}\,L|z - \tilde{z}| = L\left(1 + \tfrac{hL}{2}\right)|z - \tilde{z}|.$$

Hence $F$ is Lipschitz in its second variable with constant $L(1 + hL/2)$. $\square$

</details>

3. Similarly to the method (iii) of the Euler's method, derive formula (10.29).

<details class="reveal-solution"><summary>Show solution</summary>

Start from the trapezoidal rule applied to $y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f$:

$$y(t_{i+1}) = y(t_i) + \tfrac{h}{2}[f(t_i, y(t_i)) + f(t_{i+1}, y(t_{i+1}))].$$

This is implicit; replace the unknown $y(t_{i+1})$ on the right by the Euler predictor $w_{i+1} = z_i + hf(t_i, z_i)$:

$$z_{i+1} = z_i + \tfrac{h}{2}\big[f(t_i, z_i) + f(t_i + h,\, z_i + hf(t_i, z_i))\big],$$

which is the modified Euler formula (10.29). $\square$

</details>

4. Show that the midpoint method, the modified Euler and Heun method gives back the same approximation for all step sizes for the IVP

$$y' = 2 - t - y, \qquad y(0) = 1.$$

<details class="reveal-solution"><summary>Show solution</summary>

Here $f(t,y) = 2 - t - y$ is *linear* in $y$. Substituting it into each RK2 scheme (midpoint, modified Euler, Heun) and simplifying, all three collapse to the same recurrence

$$z_{i+1} = \left(1 - h + \tfrac{h^2}{2}\right)z_i + h(2 - t_i) - \tfrac{h^2}{2}.$$

Thus for this linear ODE the three methods produce identical approximations for every step size.

</details>

5. Find a geometric interpretation to the classical fourth-order Runge–Kutta method.

<details class="reveal-solution"><summary>Show solution</summary>

RK4 samples four slopes: $k_1$ at the start $(t_i, z_i)$; $k_2$ at the midpoint using the $k_1$ prediction; $k_3$ at the midpoint again using the refined $k_2$ prediction; and $k_4$ at the endpoint using $k_3$. The step uses the weighted average $\frac{k_1 + 2k_2 + 2k_3 + k_4}{6}$, weighting the midpoint slopes most heavily — directly analogous to Simpson's rule for integration.

</details>

6. Show that if $f$ depends only on $t$, then the classical fourth-order Runge–Kutta method reduces to the Simpson's rule.

<details class="reveal-solution"><summary>Show solution</summary>

If $f = f(t)$ then $k_1 = f(t_i)$, $k_2 = k_3 = f(t_i + \tfrac{h}{2})$, $k_4 = f(t_i + h)$, so

$$z_{i+1} = z_i + \tfrac{h}{6}\big[f(t_i) + 4f(t_i + \tfrac{h}{2}) + f(t_i + h)\big],$$

which is exactly Simpson's rule for $\int_{t_i}^{t_{i+1}} f(t)\,dt$. Hence RK4 generalizes Simpson's rule to ODEs. $\square$

</details>
