**1.3. Error Analysis**

## 1. Basic Concepts and Notations

The chapter examines the practical problem when a basic arithmetic operation must be performed on two exact positive real numbers ($x$ and $y$), but only their approximate values ($\tilde{x}$ and $\tilde{y}$) are available in the computer's memory. The goal is to determine how the errors of the initial data propagate to the final result of the operation (addition, subtraction, multiplication, division).

For the calculations, we introduce the following error bounds:

* **Absolute error bounds ($\Delta_x, \Delta_y$):** Positive numbers for which $|x - \tilde{x}| \leq \Delta_x$ and $|y - \tilde{y}| \leq \Delta_y$ hold.
* **Relative error bounds ($\delta_x, \delta_y$):** The quotients of the absolute error bound and the exact value, that is, $\delta_x = \frac{\Delta_x}{x}$ and $\delta_y = \frac{\Delta_y}{y}$.

## 2. Error Analysis of Basic Operations

### A) Addition

* **Absolute error bound:** The absolute error of addition is the **sum** of the absolute errors of the terms:

$$\Delta_{x+y} = \Delta_x + \Delta_y$$

* **Relative error bound:** The relative error bound of addition cannot exceed the **maximum** of the relative errors of the terms:

$$\delta_{x+y} = \max\{\delta_x, \delta_y\}$$

### B) Subtraction

* **Absolute error bound:** The absolute error of subtraction – similarly to addition – is the **sum** of the absolute errors of the terms (the errors do not cancel each other out):

$$\Delta_{x-y} = \Delta_x + \Delta_y$$

* **Relative error bound (The critical point):** The relative error bound of subtraction can be estimated by the following inequality:

$$\delta_{x-y} \leq \frac{x\delta_x + y\delta_y}{|x - y|}$$

> **The trap of subtraction (Cancellation error / Loss of significance):** If the values of $x$ and $y$ are very close to each other ($x \approx y$), then the expression $|x - y|$ in the denominator will be close to zero. Due to division by a number close to zero, the relative error can **jump to a huge value**, completely destroying the precision of the calculation.

### C) Multiplication

* **Absolute error bound:** The absolute error of the result of multiplication also depends on the magnitude of the factors:

$$\Delta_{xy} = y\Delta_x + x\Delta_y + \Delta_x\Delta_y$$

Since in practice errors are small ($\Delta_x\Delta_y \approx 0$), the product term is negligible, thus the linearized absolute error estimate is: $\Delta_{xy} \approx y\Delta_x + x\Delta_y$.
* **Relative error bound:** If the initial errors are small, the relative error of the product can be well approximated by the **sum** of the relative errors of the factors:

$$\delta_{xy} \approx \delta_x + \delta_y$$

### D) Division

* **Absolute error bound:** The absolute error bound of division (assuming the relative error of the denominator is small, $\delta_y < 1$):

$$\Delta_{x/y} = \frac{y\Delta_x + x\Delta_y}{y(y - \Delta_y)}$$

If the error is negligible compared to $y$, the linearized form is: $\Delta_{x/y} \approx \frac{1}{y}\Delta_x + \frac{x}{y^2}\Delta_y$. This shows that if the denominator ($y$) is close to zero, the absolute error is drastically amplified.
* **Relative error bound:** If $\delta_y$ is small, the relative error of division behaves as the **sum** of the relative errors of the components, similarly to multiplication:

$$\delta_{x/y} \approx \delta_x + \delta_y$$

## 3. Practical Lessons and Rules (Engineering Perspective)

1. **The relative error is added up** during multiplication and division ($\delta_{xy} \approx \delta_x + \delta_y$), while it remains stable during addition (limited by the maximum).
2. **The most dangerous operation is subtraction:** If we subtract two measurement or calculation data that are very close to each other, the relative error can uncontrollably increase (loss of significance).
3. **Proximity to division by zero:** If we divide an expression by a number that is itself small (close to zero), the absolute error of the divisor amplifies the absolute error of the final result quadratically ($\frac{x}{y^2}$).
