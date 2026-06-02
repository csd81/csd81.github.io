**10.1. Review of Differential Equations**


## 1. Definition of the Initial Value Problem (IVP)

The central subject of investigation in the chapter is the first-order, scalar **initial value problem** (IVP) on a finite time interval $[t_0, T]$:

$$\begin{cases} y' = f(t, y), & t \in [t_0, T] \\ y(t_0) = y_0 \end{cases} \tag{10.1}$$

Where:

* $t$ is the independent variable (time),
* $y = y(t)$ is the sought (unknown) real-valued function,
* $y_0 \in \mathbb{R}$ is the given initial state (initial condition),
* $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is the right-hand side of the differential equation, which geometrically determines a direction field on the plane.



## 2. Lipschitz continuity (The key to stability and uniqueness)

For the differential equation to certainly have a unique and stable solution, the right-hand side function $f$ must satisfy a special condition in its second (i.e., $y$) variable.

> **Definition:** The function $f(t, y)$ satisfies the **Lipschitz condition** in its second variable with a Lipschitz constant $L \geq 0$, if for all $t \in [t_0, T]$ and any $y, \tilde{y} \in \mathbb{R}$, the following inequality holds:
> 
> $$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \tag{10.3}$$
> 
> 

### How can this be easily verified?

If the function $f(t, y)$ is continuously differentiable with respect to the variable $y$ ($\frac{\partial f}{\partial y}$ exists and is continuous) on a convex domain, then due to Lagrange's mean value theorem, the Lipschitz condition is satisfied, and the constant can be chosen as an upper bound for the absolute value of the partial derivative:


$$L = \max \left| \frac{\partial f(t,y)}{\partial y} \right|$$



## 3. Picard–Lindelöf existence and uniqueness theorem

The most important theoretical theorem of the chapter establishes the conditions under which it makes sense to run numerical approximation methods on the differential equation.

> **Theorem (Existence and Uniqueness):** Suppose that the function $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ is continuous, and is Lipschitz continuous in its second variable with constant $L$. Then the initial value problem (10.1) has **exactly one (unique) solution** on the entire interval $[t_0, T]$, for any initial value $y_0 \in \mathbb{R}$.



## 4. Rewriting higher-order differential equations as a system

In practice (for example, when describing physical oscillatory motions), we often encounter second- or higher-order differential equations. The notes show that an arbitrary $m$-th order scalar differential equation **can always be rewritten as an equivalent system of first-order differential equations**.

Consider an $m$-th order initial value problem:


$$y^{(m)} = f(t, y, y', \ldots, y^{(m-1)}), \quad y(t_0) = y_0,\ y'(t_0) = y_1, \ldots,\ y^{(m-1)}(t_0) = y_{m-1}$$

For rewriting, we introduce $m$ new variables as follows:


$$\begin{aligned} u_1(t) &= y(t) \\ u_2(t) &= y'(t) \\ u_3(t) &= y''(t) \\ &\vdots \\ u_m(t) &= y^{(m-1)}(t) \end{aligned}$$

Then, writing down the derivatives, we obtain the following **first-order system of equations**:


$$\begin{aligned} u_1' &= u_2 \\ u_2' &= u_3 \\ &\vdots \\ u_{m-1}' &= u_m \\ u_m' &= f(t, u_1, u_2, \ldots, u_m) \end{aligned}$$

And the corresponding initial vector is simply: $\mathbf{u}(t_0) = (y_0, y_1, \ldots, y_{m-1})^T$.

### Practical consequence

Since every higher-order equation can be transformed into a first-order system, in numerical analysis it is sufficient to focus on solving first-order problems, as the developed algorithms (e.g., Runge-Kutta methods) can also be directly applied to these systems in vector form.
