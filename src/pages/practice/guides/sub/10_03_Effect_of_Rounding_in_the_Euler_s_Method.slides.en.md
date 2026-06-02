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

