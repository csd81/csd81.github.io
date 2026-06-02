**10.4. Taylor Method**



## 1. Motivation and Definition of the General One-Step Method

* **The problem with the Euler method:** Although the Euler method is simple, it is only first-order convergent, which means the error decreases slowly, and in practice, it requires an excessively small step size ($h$).
* **The principle of generalization:** Retaining the structure of the Euler method, we can define a general **one-step numerical procedure** on an equidistant time grid ($t_i = t_0 + ih$) to solve the initial value problem (IVP):

$$z_{i+1} = z_i + hF(t_i, z_i; h), \qquad i = 0, 1, \dots, n-1, \qquad z_0 = y_0 \tag{10.18}$$



Where $F$ is the so-called **increment function**. (The Euler method is a special case of this, where $F(t, z; h) = f(t, z)$).



## 2. Local Truncation Error and Global Convergence

To characterize the convergence of such a general method of type (10.18), we introduce the concept of **local truncation error (LTE)**:


$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) \tag{10.19}$$


Where $y(t)$ is the exact mathematical solution of the differential equation.

> **Convergence Theorem (Theorem 10.7):** If the increment function ($F$) is Lipschitz continuous in its second variable with constant $L_F$, and the local truncation error is of order $\alpha$ (i.e. $|\tau_{i+1}| \leq K_2 h^\alpha$), then the method is **globally convergent of order $\alpha$ as well**. The following upper bound holds for the global error:
> 
> $$|y(t_i) - z_i| \leq \frac{K_2(e^{L_F(t_i - t_0)} - 1)}{L_F} \cdot h^\alpha \tag{10.20}$$
> 
> 



## 3. Construction of Higher-Order Taylor Methods

The basic idea of the Taylor method is to design the increment function ($F$) such that the order of the local error ($\alpha$) can be an arbitrarily high integer. To achieve this, we use the **higher-degree Taylor polynomial** of the exact solution around the point $t_i$:


$$y(t_{i+1}) = y(t_i) + h y'(t_i) + \frac{h^2}{2} y''(t_i) + \dots + \frac{h^m}{m!} y^{(m)}(t_i) + \frac{h^{m+1}}{(m+1)!} y^{(m+1)}(\xi_i)$$

Since $y'(t) = f(t, y(t))$ based on the differential equation, the higher-order derivatives can be generated analytically one after another using the chain rule (total differentiation):

* $y''(t) = \frac{d}{dt}f(t, y(t)) =: f^{(1)}(t, y(t))$
* $y'''(t) = \frac{d^2}{dt^2}f(t, y(t)) =: f^{(2)}(t, y(t))$

Substituting these, we obtain the increment function of the **$m$-th order Taylor method**:


$$F(t, z; h) = f(t, z) + \frac{h}{2}f^{(1)}(t, z) + \frac{h^2}{3!}f^{(2)}(t, z) + \dots + \frac{h^{m-1}}{m!}f^{(m-1)}(t, z) \tag{10.22}$$

> **Property:** The local truncation error of the $m$-th order Taylor method is of order $\mathcal{O}(h^m)$, and its global error is also **of order $m$** ($\alpha = m$).



## 4. Sample Example and Numerical Verification of the Order

The chapter demonstrates the operation of the method on the problem $y' = 2y - 10t^2 + 2t$, $y(0)=1$.

### Derivation of the second-order ($m=2$) Taylor method:

We calculate the first total derivative:


$$f^{(1)}(t, y) = \frac{d}{dt}(2y - 10t^2 + 2t) = 2y' - 20t + 2 = 2(2y - 10t^2 + 2t) - 20t + 2 = 4y - 20t^2 - 16t + 2$$


Thus the recursion formula is:


$$z_{i+1} = z_i + h(2z_i - 10t_i^2 + 2t_i) + \frac{h^2}{2}(4z_i - 20t_i^2 - 16t_i + 2)$$

### Numerical Experiences (Verification of the Order)

From the results of calculations performed with different step sizes ($h=0.2$ and $h=0.1$), we can observe:

* If we reduce the step size to **half** ($0.2 \to 0.1$), the global error roughly drops to a **quarter**. This is practical proof that the method is indeed **second-order** (order $2$).
* In the case of the third-order ($m=3$) Taylor method, halving the step size already results in the error decreasing to an **eighth**.



## 5. Advantages and Serious Disadvantage of Taylor Methods

### Advantage:

* Theoretically, it can provide an arbitrarily high order of convergence ($m=2, 3, 4, \dots$), so we can obtain extremely accurate approximations even with relatively larger step sizes.

### Disadvantage (Why it is rarely used in practice):

* For each step, the **analytic higher-order total derivatives** of the function $f$ ($f^{(1)}, f^{(2)}$, etc.) must be calculated. If the right-hand side of the differential equation is complex, these chains consisting of multiple partial derivatives result in huge, obscure, and hard-to-program formulas, the evaluation of which is computationally expensive.

> **Transition to the next chapter:** This serious practical disadvantage led to the development of **Runge-Kutta methods**, which are capable of retaining the high convergence order, but without having to calculate the derivatives of the function even once.
