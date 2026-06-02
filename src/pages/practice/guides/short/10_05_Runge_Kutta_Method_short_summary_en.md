**10.5. Runge-Kutta Methods**  



## 1. Motivation and Basic Idea

* **The problem with Taylor methods:** Although higher-order Taylor methods are very accurate, their application requires the analytic, higher-order total derivatives ($f^{(1)}, f^{(2)}$, etc.) of the right-hand side ($f$) of the differential equation. For complex equations, these result in extremely obscure, computationally expensive formulas.
* **The goal of Runge-Kutta (RK) methods:** They reduce the computational demand and programming complexity by **retaining the high-order convergence of Taylor methods, but without having to calculate the derivatives of the function even once**. To achieve this, the derivatives are replaced by a linear combination of the values of the function $f$ evaluated at cleverly chosen points.



## 2. Derivation Principle of Runge-Kutta Methods (Second-Order Case)

The notes present the mathematical background of the method through the comparison of Taylor series. Let us start from the increment function of the second-order Taylor method:


$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \tag{10.23}$$

Let us compare this with the first-order Taylor polynomial of the two-variable function $f$ around the point $t+a$ and $z+b$:


$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + \mathcal{O}(a^2+b^2) \tag{10.24}$$

If we choose the parameters $a = \frac{h}{2}$ and $b = \frac{h}{2}f(t,z)$ in formula (10.24), then the expressions with partial derivatives exactly match the bracketed term of the Taylor method (10.23). From this arises the recursion of the procedure:


$$z_{i+1} = z_i + h f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right) \tag{10.25}$$

This formula is called the **modified Euler method** or the **midpoint method**. Geometrically, this means we take a half Euler step forward, evaluate the slope of the direction field there, and then use the direction measured at the midpoint of the interval to take the full step of length $h$ from the point $t_i$.



## 3. The General $p$-Stage Explicit Runge-Kutta Method

The principle can be generalized such that within a single time step, we evaluate the function $f$ at $p$ different points (in internal stages). The general explicit scheme is as follows:

$$\begin{aligned} w_{i,1} &= f(t_i, z_i) \\ w_{i,2} &= f(t_i + c_2h, z_i + h a_{21}w_{i,1}) \\ w_{i,3} &= f(t_i + c_3h, z_i + h(a_{31}w_{i,1} + a_{32}w_{i,2})) \\ &\vdots \\ w_{i,p} &= f\left(t_i + c_ph, z_i + h\sum_{j=1}^{p-1} a_{pj}w_{i,j}\right) \\ z_{i+1} &= z_i + h\sum_{j=1}^p b_jw_{i,j} \end{aligned} \tag{10.26}$$

The coefficients of the method ($a_{ij}, b_j, c_i$) are usually summarized in the so-called **Butcher tableau**.



## 4. Relationship Between the Number of Stages ($p$) and the Maximum Achievable Order

There is a nonlinear relationship between the number of stages (function evaluations) and the order of global convergence. The possible maximum order is summarized in the following table:

| $p$ (number of stages) | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **Maximum global order** | **1** | **2** | **3** | **4** | **4** | **5** | **6** | **6** |

> **Important theoretical limit (Butcher barrier):** Up to $p=4$, we can achieve an order equal to the number of stages. However, for a 5th-order method, at least 6 stages (evaluations) are already required, which makes the **fourth-order Runge-Kutta method the most optimal** in terms of efficiency/computational cost ratio.



## 5. The "Classic" Fourth-Order Runge-Kutta Method (RK4)

One of the most widely used numerical algorithms for solving differential equations is **RK4**, which performs 4 function evaluations per step and is globally **fourth-order convergent** ($\mathcal{O}(h^4)$).

### Formula of RK4:

$$z_0 = y_0$$

$$\begin{aligned} w_{i,1} &= f(t_i, z_i) \\ w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right) \\ w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right) \\ w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right) \end{aligned}$$

$$z_{i+1} = z_i + \frac{h}{6}\big(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}\big)$$



## 6. Numerical Comparison (Example 10.4)

The chapter tests the different methods on the problem $y' = 2y - 10t^2 + 2t$, $y(0)=1$ with a step size of $h=0.1$:

* **Euler method (1st order):** The error at the endpoint $t=1$ is $5.8 \cdot 10^{-2}$.
* **Modified Euler (2nd order):** The error at the same point is significantly smaller: $1.1 \cdot 10^{-2}$.
* **Classic RK4 (4th order):** It produces astounding accuracy: the error is merely **$7.3 \cdot 10^{-5}$**.

### Summary

Runge-Kutta methods (especially RK4) form the backbone of modern numerical software (e.g., MATLAB `ode45`). They are capable of providing extremely precise, high-order approximations in such a way that they eliminate the differentiation difficulties of Taylor methods, and rely purely on the evaluation of the function $f$.
