**10.3. Effect of Rounding Error on the Euler Method** 



## 1. Background of the Problem and the Mathematical Model

In the previous chapter, we examined the theoretical convergence of the Euler method, assuming that calculations are performed with infinite precision. In practice, however, computers use finite floating-point number representation, so rounding errors inevitably occur:

1. Instead of the exact initial value $y_0$, we can only store its rounded machine equivalent ($w_0$).
2. During the execution of each iteration step (during multiplications and additions), another rounding error is generated.

To track the errors, we introduce the following notations:

* $y(t_i)$: the theoretical, **exact solution** of the differential equation.
* $z_i$: the theoretical **exact Euler sequence** without rounding errors.
* $w_i$: the value **actually computed (rounded)** on the computer.
* $\delta_0 := y_0 - w_0$: the **initial rounding error**.
* $\delta_i$: the **local rounding error** committed in the $i$-th step.

The equation of the actually executed algorithm thus becomes the following perturbed recursion:


$$w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}, \qquad i = 0, 1, \dots, n-1 \tag{10.17}$$



## 2. Accumulation of the Rounding Error ($|w_i - z_i|$)

If we subtract the equation of the exact Euler method from the perturbed equation (10.17), and apply the triangle inequality, as well as the Lipschitz constant $L$ regarding the second variable of $f$, we obtain the following estimate for error propagation:


$$|w_{i+1} - z_{i+1}| \leq (1 + hL)|w_i - z_i| + \delta$$


where $\delta := \max\{|\delta_1|, |\delta_2|, \dots, |\delta_n|\}$ is the maximum rounding error per step.

From this, using the discrete Grönwall's lemma (Theorem 10.3), it can be derived how much deviation the pure rounding error causes from the theoretical Euler method:


$$|w_i - z_i| \leq \frac{e^{L(T - t_0)} - 1}{L}\frac{\delta}{h} + |\delta_0|e^{L(T - t_0)}$$



## 3. The Total Error and the Final Error Estimation Theorem (Theorem 10.6)

In reality, we are interested in the **total error**, that is, the distance between the exact mathematical solution and the value returned by the machine ($|y(t_i) - w_i|$). According to the triangle inequality, this error is the sum of the **formula error** (truncation error) and the **rounding error**:


$$|y(t_i) - w_i| \leq \underbrace{|y(t_i) - z_i|}_{\text{Formula error}} + \underbrace{|z_i - w_i|}_{\text{Rounding error}}$$

> **Theorem 10.6:** If $f$ is continuous, Lipschitz continuous in its variable $y$ with constant $L$, and continuously partially differentiable with respect to both of its variables, then the total numerical error can be bounded as follows:
> 
> $$|y(t_i) - w_i| \leq \frac{e^{L(T - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) + |\delta_0|e^{L(T - t_0)} \tag{10.18}$$
> 
> 
> 
> where $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$ is the maximum of the second derivative of the solution.



## 4. The Asymptotic Trap of the Euler Method (Divergence for $h \to 0$)

The most important and surprising element of the error estimate (10.18) is the expression in parentheses:


$$E(h) = \frac{hM_2}{2} + \frac{\delta}{h}$$

While the pure formula error would tend to zero linearly with the decrease of $h$ ($\frac{hM_2}{2} \to 0$), in the rounding error term $h$ **appears in the denominator** ($\frac{\delta}{h}$). This has serious theoretical and practical consequences:


$$\lim_{h \to 0+} \left(\frac{hM_2}{2} + \frac{\delta}{h}\right) = \infty \tag{10.19}$$

* **If the step size ($h$) is too large:** The formula error (truncation error) dominates, and the approximation will be inaccurate.
* **If the step size ($h$) is too small:** The number of time steps ($n = (T-t_0)/h$) grows immensely, so millions of tiny rounding errors add up and accumulate. Since $\frac{\delta}{h} \to \infty$, choosing an excessively small step size **completely destroys the accuracy of the calculation and the algorithm diverges**.

### Determination of the Optimal Step Size

With the help of differential calculus (by deriving the function $E(h)$ with respect to $h$ and setting it to zero), the theoretical **optimal step size ($h_{\mathrm{opt}}$)** can be calculated, where the total error is as small as possible:


$$E'(h) = \frac{M_2}{2} - \frac{\delta}{h^2} = 0 \implies h_{\mathrm{opt}} = \sqrt{\frac{2\delta}{M_2}}$$

In practice, alongside modern 64-bit double precision representation, the fundamental error $\delta$ of the machine is extremely small ($\approx 10^{-16}$), so the explosion of rounding errors only occurs at extremely small values of $h$, but it represents a critical engineering and stability limit.
