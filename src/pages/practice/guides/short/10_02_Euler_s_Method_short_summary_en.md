**10.2. Euler's Method**



## 1. The goal and definition of the method

Euler's method is the **simplest and most classical numerical solution procedure** for first-order initial value problems (IVP) of ordinary differential equations.

Our problem is as follows:


$$\begin{cases} y' = f(t, y), & t \in [t_0, T] \\ y(t_0) = y_0 \end{cases}$$

The goal is to approximate the values of the exact solution function $y(t)$ at pre-fixed time points $t_0 < t_1 < \dots < t_n = T$ (the so-called time grid or base points). If the distance between the base points is constant, we speak of an **equidistant** grid, where the step size is:


$$h = \frac{T - t_0}{n} \qquad \text{and} \qquad t_i = t_0 + ih \tag{10.2}$$

The method approximates the exact values $y(t_i)$ with a recursively generated sequence $z_i$ (**Euler sequence**):

$$\mathbf{z_{i+1} = z_i + h f(t_i, z_i)}, \qquad i = 0, 1, \dots, n-1, \qquad z_0 = y_0 \tag{10.4}$$



## 2. Three different derivations of Euler's method

The notes show that the above formula (10.4) can be obtained through three independent mathematical approaches:

### (i) Geometric derivation (with Taylor polynomial)

Let's start from the first-order Taylor polynomial (linear tangent approximation) of the exact solution around the point $t_i$:


$$y(t) \approx y(t_i) + y'(t_i)(t - t_i)$$


Since we know from the differential equation that $y'(t_i) = f(t_i, y(t_i))$, at the next grid point $t = t_{i+1}$ we can write:


$$y(t_{i+1}) \approx y(t_i) + h f(t_i, y(t_i))$$


If we replace the exact $y(t_i)$ values with the numerical approximations $z_i$, we obtain the Euler formula. Geometrically, this means that from the current point we step forward to the next time step **along the tangent line** determined by the field.

### (ii) Numerical differentiation (with finite difference)

At the point $t_i$, let's approximate the derivative $y'(t_i)$ with the classical **forward difference quotient**:


$$y'(t_i) \approx \frac{y(t_{i+1}) - y(t_i)}{h}$$


Substituting this into the differential equation:


$$\frac{y(t_{i+1}) - y(t_i)}{h} \approx f(t_i, y(t_i))$$


Rearranging this equation for $y(t_{i+1})$ and introducing the approximations, we again arrive at the recursion (10.4).

### (iii) Numerical integration (with the rectangle rule)

Integrate both sides of the differential equation on the subinterval $[t_i, t_{i+1}]$:


$$\int_{t_i}^{t_{i+1}} y'(t) \, dt = \int_{t_i}^{t_{i+1}} f(t, y(t)) \, dt \implies y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f(t, y(t)) \, dt$$


Approximate the integral on the right side with the **left rectangle rule** (where the integrand is assumed to be constant with the value taken at the beginning of the interval):


$$\int_{t_i}^{t_{i+1}} f(t, y(t)) \, dt \approx h f(t_i, y(t_i))$$


From this $y(t_{i+1}) \approx y(t_i) + h f(t_i, y(t_i))$, which for the third time gives Euler's method.



## 3. Error Analysis and Convergence

For a numerical method, a critical question is whether the approximation error tends to zero as the step size ($h$) is reduced.

### Local Truncation Error

The local error measures how much error we make **during a single time step**, assuming that at the previous point we started from the exact value. It comes from the second-order remainder term of Taylor's theorem:


$$\tau_{i+1} = \frac{h}{2}y''(\xi_i)$$


If the partial derivatives of the function are continuous and bounded, then the function $y''(t)$ is also bounded (with constant $M_2$), so the local error is:


$$|\tau_{i+1}| \leq \frac{M_2}{2}h \sim \mathcal{O}(h^2)$$

### Global Error and Convergence Theorem (Theorem 10.5)

The global error ($e_i = |y(t_i) - z_i|$) is the effect of all errors accumulated over the entire interval $[t_0, T]$ at the $i$-th step.

> **Theorem 10.5:** If $f$ is continuous and Lipschitz continuous in its second variable with constant $L$, and the exact solution is twice continuously differentiable, then the following estimate holds for the global error of Euler's method:
> 
> $$|y(t_i) - z_i| \leq \frac{M_2}{2L} \left( e^{L(t_i - t_0)} - 1 \right) \cdot h \tag{10.6}$$
> 
> 

### Consequence: First-order convergence

Since the step size $h$ appears to the first power on the right side of the estimate (10.6), Euler's method is **first-order convergent** (order: $1$). This means that if we halve the step size ($h \to h/2$), the global error will also roughly halve.



## 4. Application of Euler's method to systems of differential equations

Although the derivations were done for scalar equations, the formula can be directly extended to **systems of first-order differential equations**; one only needs to replace the scalar variables with vectors:

$$\mathbf{z}_{i+1} = \mathbf{z}_i + h \mathbf{f}(t_i, \mathbf{z}_i)$$

The exercises at the end of the chapter show that higher-order scalar differential equations must first be transformed into a system, and then the Euler approximation can be programmed or manually calculated using this vector formula.
