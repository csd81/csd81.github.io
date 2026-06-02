**2.10. Fixed Point Theorem in $n$-dimensions** (*Multidimensional Fixed Point Iteration*)

## 1. Motivation and the Principle of Multivariable Fixed Point Iteration

The concept of fixed point and fixed point iteration introduced for single-variable functions can be naturally generalized to solve multivariable nonlinear systems of equations.

Our initial task is to solve a multivariable nonlinear system of equations:

$$\mathbf{f}(\mathbf{x}) = \mathbf{0}$$

Through algebraic transformations, we bring this to an equivalent, fixed-point form:

$$\mathbf{x} = \mathbf{g}(\mathbf{x})$$

Where $\mathbf{x} = (x_1, x_2, \dots, x_n)^T \in \mathbb{R}^n$ is the vector of variables, and $\mathbf{g}(\mathbf{x}) = \big(g_1(\mathbf{x}), g_2(\mathbf{x}), \dots, g_n(\mathbf{x})\big)^T$ is the multivariable iteration function. From this, the multivariable fixed-point iteration sequence can be generated:

$$\mathbf{p}^{(k+1)} = \mathbf{g}\big(\mathbf{p}^{(k)}\big), \qquad k=0,1,2,\dots$$

## 2. Introductory Example (Example 2.51)

The chapter demonstrates the structure of the iteration through a two-dimensional nonlinear system of equations:

$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned}$$

Expressing $x_1$ from the first equation, and $x_2$ from the second, we get the fixed-point form:

$$\mathbf{g}(x_1, x_2) = \begin{pmatrix} \frac{1}{4}(e^{x_1 x_2} + 3) \\ \frac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}$$

The exact solution of the system of equations is the vector $\mathbf{x} = (1, 0)^T$.

## 3. Global and Local Convergence Theorems

For the iteration sequence to certainly converge to the desired fixed point, the function $\mathbf{g}$ must be a contraction. The convergence can be checked using the **norm of the Jacobian matrix $\mathbf{g}'(\mathbf{x})$**.

### Condition for Global Convergence (Contraction)

If there exists a constant $c \in (0,1)$ such that for the partial derivatives of the coordinate functions the following holds:

$$\|\mathbf{g}'(\mathbf{x})\| \leq c < 1$$

on a convex domain, then due to the multivariable Mean Value Theorem of Lagrange, the function is a contraction, thus the fixed-point iteration converges to a unique solution starting from any initial value.

### Local Convergence

If in the neighborhood of the exact fixed point $\mathbf{p}$ an arbitrary induced matrix norm of the Jacobian matrix is strictly less than 1:

$$\|\mathbf{g}'(\mathbf{p})\| < 1$$

then the iteration is **locally convergent** when starting from a sufficiently small neighborhood of the root. The rate of convergence in this case is **linear**.

## 4. The Special Case of Quadratic Convergence

The most important theoretical proof of the chapter applies to the case when all first-order partial derivatives of the iteration function are exactly zero at the fixed point.

> **Theorem:** Suppose that $\mathbf{p}$ is a fixed point of the function $\mathbf{g}$, and for the partial derivatives of the function $\mathbf{g}$ at the fixed point it holds that $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$ (i.e., all first-order partial derivatives are zero). If the second-order partial derivatives of the coordinate functions of the function $\mathbf{g}$ are continuous and bounded (by a constant $M$) in a neighborhood of the fixed point, then the iteration converges **locally quadratically (of second order)**.

### Outline of the Proof of Quadratic Convergence

1. We write the **second-order Taylor approximation** of the $i$-th component function ($g_i$) of the function $\mathbf{g}$ around the exact fixed point $\mathbf{p}$:

$$g_i(\mathbf{x}) = g_i(\mathbf{p}) + \sum_{j=1}^n \frac{\partial g_i(\mathbf{p})}{\partial x_j}(x_j - p_j) + \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\boldsymbol{\xi})}{\partial x_j \partial x_l}(x_j - p_j)(x_l - p_l)$$

2. Since according to the condition the first-order partial derivatives at the point $\mathbf{p}$ are zero ($\frac{\partial g_i(\mathbf{p})}{\partial x_j} = 0$), the middle linear sum completely disappears.
3. Substituting the terms of the sequence ($\mathbf{x} = \mathbf{p}^{(k)}$) and utilizing the relations $p_i = g_i(\mathbf{p})$, as well as $p_i^{(k+1)} = g_i(\mathbf{p}^{(k)})$, we get the following for the error term:

$$p_i^{(k+1)} - p_i = \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\boldsymbol{\xi})}{\partial x_j \partial x_l}(p_j^{(k)} - p_j)(p_l^{(k)} - p_l)$$

4. Taking the absolute value and introducing the upper bound $M$ of the second-order derivatives, with the help of the triangle inequality we can switch to the **maximum norm ($\|\cdot\|_\infty$)**:

$$|p_i^{(k+1)} - p_i| \leq \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n M |p_j^{(k)} - p_j||p_l^{(k)} - p_l| \leq \frac{n^2}{2} M \|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2$$

5. Since this estimate is true for every individual $i$ component of the vector, the maximum can also be taken on the left side, thus the final inequality proving quadratic convergence is born:

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq \left( \frac{n^2}{2} M \right) \|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2$$

## 5. Summary Lesson

The speed of the multivariable fixed-point iteration – similar to the single-variable one – depends on the derivatives. In the general case, the convergence is linear ($\|\mathbf{g}'(\mathbf{p})\| < 1$), but if we manage to construct an iteration function whose full Jacobian matrix is zero at the root location, the convergence accelerates to quadratic. This quadratic theory provides the direct mathematical foundation for the later **multivariable Newton's method** as well.
