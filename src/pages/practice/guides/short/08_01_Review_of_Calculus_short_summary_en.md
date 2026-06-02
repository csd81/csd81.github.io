**8.1. Extremum Calculus – Calculus Prerequisites** 



## 1. Basic Concepts: Gradient Vector and Hessian Matrix

When analyzing multivariable functions, the roles of the single-variable first and second derivatives are taken over by the **gradient vector** and the **Hessian matrix**.

### The Gradient Vector ($f'(\mathbf{x})$ or $\nabla f(\mathbf{x})$)

Let $f\colon \mathbb{R}^n \to \mathbb{R}$ be a multivariable, real-valued function. If the function is partially differentiable with respect to all its variables, the vector formed by the first-order partial derivatives is called the gradient vector:


$$f'(\mathbf{x}) = \nabla f(\mathbf{x}) := \left( \frac{\partial f(\mathbf{x})}{\partial x_1}, \frac{\partial f(\mathbf{x})}{\partial x_2}, \ldots, \frac{\partial f(\mathbf{x})}{\partial x_n} \right)^T$$

### The Hessian Matrix ($f''(\mathbf{x})$ or $\mathbf{H}(\mathbf{x})$)

If $f$ is twice partially differentiable, the second-order partial derivatives can be arranged into an $n \times n$ square matrix, known as the Hessian matrix:


$$f''(\mathbf{x}) := \begin{pmatrix} 
\dfrac{\partial^2 f}{\partial x_1^2}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_1 \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_1 \partial x_n}(\mathbf{x}) \\[2ex]
\dfrac{\partial^2 f}{\partial x_2 \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_2^2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_2 \partial x_n}(\mathbf{x}) \\[2ex]
\vdots & \vdots & \ddots & \vdots \\[1ex]
\dfrac{\partial^2 f}{\partial x_n \partial x_1}(\mathbf{x}) & \dfrac{\partial^2 f}{\partial x_n \partial x_2}(\mathbf{x}) & \cdots & \dfrac{\partial^2 f}{\partial x_n^2}(\mathbf{x}) 
\end{pmatrix}$$

*Note (Young's Theorem):* If the second-order partial derivatives are continuous ($f \in C^2$), then the mixed partial derivatives are independent of the order of differentiation (i.e., $\frac{\partial^2 f}{\partial x_i \partial x_j} = \frac{\partial^2 f}{\partial x_j \partial x_i}$), which means that the Hessian matrix **always has a symmetric** structure.



## 2. General Conditions for $n$-variable Local Extrema (Theorem 8.1)

In optimization theory, the existence of local extrema for an arbitrary $n$-variable function is governed by the following necessary and sufficient conditions:

### Necessary Condition (First-order Condition)

> If the function $f$ has a **local extremum** (either minimum or maximum) at the partially differentiable point **$\mathbf{a}$**, then all first-order partial derivatives of the function there are exactly zero, i.e., the **gradient vector vanishes**:
> 
> $$\nabla f(\mathbf{a}) = \mathbf{0} \implies \frac{\partial f(\mathbf{a})}{\partial x_i} = 0 \qquad \text{for all } i = 1, \ldots, n.$$
> 
> 
> 
> The points where the gradient vector is zero are called **critical or stationary points**.

### Sufficient Condition (Second-order Condition)

Assume that $f \in C^2$ and point $\mathbf{a}$ is a stationary point ($\nabla f(\mathbf{a}) = \mathbf{0}$). Then the nature of the point depends on the **definiteness** of the Hessian matrix:

1. If the Hessian matrix $f''(\mathbf{a})$ is **positive definite**, then the function has a **strict local minimum** at point $\mathbf{a}$.
2. If the Hessian matrix $f''(\mathbf{a})$ is **negative definite**, then the function has a **strict local maximum** at point $\mathbf{a}$.
3. If the matrix is *indefinite* (has both positive and negative eigenvalues), then the point is not an extremum, but a *saddle point*.



## 3. Special Case: Optimization of Two-variable Functions (Theorem 8.2)

A significant portion of practical and engineering problems reduces to two-variable surfaces. For two-variable functions $f(x,y)$, the above theory simplifies to a determinant-based criterion that is easier to calculate.

### Algorithm for the Two-variable Sufficient Condition:

1. We find the stationary points by setting the partial derivatives to zero:

$$\frac{\partial f}{\partial x}(a, b) = 0, \qquad \frac{\partial f}{\partial y}(a, b) = 0 \tag{8.1}$$


2. We write the determinant function of the Hessian matrix, the so-called **discriminant ($D$)**:

$$D(a, b) := \det \mathbf{H}(a,b) = \frac{\partial^2 f}{\partial x^2}(a, b) \cdot \frac{\partial^2 f}{\partial y^2}(a, b) - \left( \frac{\partial^2 f}{\partial x \partial y}(a, b) \right)^2$$



### Classification of Stationary Points based on $D$:

* **If $D(a, b) > 0$:** The point **has a local extremum**.
  * If $\dfrac{\partial^2 f}{\partial x^2}(a, b) > 0$, then the point is a **local minimum**.
  * If $\dfrac{\partial^2 f}{\partial x^2}(a, b) < 0$, then the point is a **local maximum**.


* **If $D(a, b) < 0$:** The function **does not have an extremum** at this point, the surface has a **saddle point** here.
* **If $D(a, b) = 0$:** The test is *inconclusive* (cannot be decided). In this case, examining higher-order Taylor approximations is necessary to determine the nature of the point.



## 4. Theoretical Significance in Numerical Methods

This chapter establishes the theoretical prerequisites for all multivariable numerical minimization procedures. When computer algorithms (e.g., the method of least squares in Chapter 9) search for the global minimum of an error function, the analytical or numerical steps always aim to set the gradient vector to zero and ensure the positive definiteness of the Hessian matrix (or the non-singularity of the normal equations).
