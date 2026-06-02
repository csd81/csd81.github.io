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

2. Draw the graph of the function $g(h) = \frac{hM_2}{2} + \frac{\delta}{h}$ which appears in Theorem 10.6. What is its minimum point?

3. Using the optimal step size obtained in the previous exercise compute for the problem of Example 10.2 assuming $\delta = 0.00001$.

