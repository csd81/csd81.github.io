**8.4. Gradient Method** 



## 1. Principle and Geometric Background

The gradient method (also known as the **steepest descent method**) is one of the most fundamental multivariable nonlinear optimization (extremum-seeking) algorithms, which relies on the function's first-order derivatives (the gradient vector).

* **Direction of steepest descent (Theorem 8.8):** It is a theorem from mathematical analysis that starting from any arbitrary point $\mathbf{p}$, the function $f$ decreases fastest (steepest) in the **direction of the negative gradient, i.e., $-f'(\mathbf{p})$**.
* **Orthogonality to contour lines:** The gradient vector $f'(\mathbf{p})$ of a multivariable function is always **perpendicular to the contour line** (its tangent) passing through the point. Consequently, the iteration steps of the gradient method geometrically always move perpendicularly to the contour lines.



## 2. General Recursion of the Algorithm

The method starts from an arbitrarily chosen initial point $\mathbf{p}^{(0)}$, and generates a sequence of points according to the following iterative rule:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k f'(\mathbf{p}^{(k)}), \qquad k = 0, 1, 2, \ldots \tag{8.5}$$

Where:

* $\mathbf{p}^{(k)}$ is the current position (vector),
* $f'(\mathbf{p}^{(k)})$ is the function's gradient vector at the given point,
* $\alpha_k > 0$ is the **step size** (or learning rate/scaling factor), which determines how far we step in the direction of the steepest descent.



## 3. Strategies for Choosing the Step Size

The method's efficiency and convergence speed critically depend on the dynamic or constant choice of the step size $\alpha_k$. The notes present two main approaches:

### A) Constant or simply scaled step size

In this case, the step length is fixed or scaled proportionally to the gradient's norm (e.g., $\alpha_k = \frac{h}{\|f'(\mathbf{p}^{(k)})\|_2}$).

* **Problem:** If $\alpha_k$ is too large, the sequence can easily overshoot the valley bottom and start oscillating around the minimum. If it is too small, convergence becomes extremely slow.

### B) Optimal gradient method (Line Search)

In the optimal version, at each step we solve a **one-dimensional minimization problem** with respect to parameter $\alpha$: we choose $\alpha_k$ such that the function value at the new point is the smallest possible along the designated line:


$$\min_{\alpha > 0} f\big(\mathbf{p}^{(k)} - \alpha f'(\mathbf{p}^{(k)})\big)$$

> **Important geometric property:** Due to the single-variable extremum condition, the optimal step size requires that the obtained new direction be perpendicular to the previous one. Therefore, the trajectory of the optimal gradient method describes a **characteristic zig-zag line strictly perpendicular to itself** between the contour lines.



## 4. Convergence Speed and the "Valley Effect"

The chapter states that the optimal gradient method is theoretically **locally linearly convergent**.

* If the contour lines are spherically (or circularly) symmetric, the method is extremely fast (reaching the center in even 1-2 steps).
* However, if the function's contour lines are elongated (forming an elongated, steep-walled valley), the algorithm falls into a trap due to the orthogonal constraint: it plummets very quickly to the bottom of the valley, but there it can only progress towards the actual axial minimum of the valley very slowly, with tiny, infinitely dense zig-zag steps.



## 5. Derivative-free Variant (Using Numerical Derivatives)

If the function's analytical gradient vector is unknown, or its calculation would require too many arithmetic operations, formula (8.5) can be modified so that instead of the true derivatives, the gradient coordinates are approximated by **first-order difference quotients** (numerical differentiation) with a tiny step size $h>0$:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)} \tag{8.7}$$

Where the $i$-th component of the approximation vector $\mathbf{v}^{(k)}$ is:


$$v_i^{(k)} = \frac{f(\mathbf{p}^{(k)} + h\mathbf{e}^{(i)}) - f(\mathbf{p}^{(k)})}{h}, \qquad i = 1, \ldots, n$$


*(Where $\mathbf{e}^{(i)}$ is the unit vector in the direction of the $i$-th coordinate axis).*



## 6. Summary

The gradient method is a classical pillar of nonlinear optimization. Its advantage is that it performs a directed search (always steps towards improvement), but due to its zig-zag slowdown on elongated, ill-conditioned surfaces, modern numerical software often combines it with higher-order procedures (e.g., conjugate gradient or quasi-Newton methods).
