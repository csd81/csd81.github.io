**2.11. Newton's Method in $n$-dimensions** (in the detailed notes *Section 2.12*)  

## 1. The Basic Idea of the Multivariable Newton's Method

The goal of the chapter is the generalization of the classical single-variable Newton–Raphson method for the numerical solution of nonlinear systems of equations.

Consider a multivariable nonlinear system of equations of the following form:

$$\mathbf{f}(\mathbf{x}) = \mathbf{0}$$

where $\mathbf{f}\colon U \to \mathbb{R}^n$ ($U \subset \mathbb{R}^n$ is an open set) is a vector-valued function.

Similarly to the single-variable case, we fix an approximate point $\mathbf{p}^{(k)} \in U$, and replace the function with its linear part around $p^{(k)}$ (its first-order multivariable Taylor polynomial):

$$\mathbf{f}\big(\mathbf{p}^{(k)}\big) + \mathbf{f}'\big(\mathbf{p}^{(k)}\big)\big(\mathbf{x} - \mathbf{p}^{(k)}\big) = \mathbf{0}$$

Where $\mathbf{f}'\big(\mathbf{p}^{(k)}\big)$ denotes the **Jacobian matrix** of the function at the given point. The root of this linear system of equations is considered as the next iteration point, which gives the theoretical recursion formula:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \left(\mathbf{f}'\big(\mathbf{p}^{(k)}\big)\right)^{-1}\mathbf{f}\big(\mathbf{p}^{(k)}\big) \tag{2.29}$$

## 2. Quadratic Convergence (Theorem 2.56)

The multivariable procedure preserves the most important advantage of the single-variable Newton's method, its extremely fast execution.

> **Theorem:** Let $\mathbf{f} \in C^2$, the exact solution of the system be $\mathbf{p}$ (i.e., $\mathbf{f}(\mathbf{p}) = \mathbf{0}$), and suppose that the Jacobian matrix $\mathbf{f}'(\mathbf{p})$ evaluated at the root is invertible. Then the Newton iteration, started from a sufficiently small neighborhood of the root, converges **locally quadratically (of second order)** to $\mathbf{p}$.

### The Principle of the Proof

The proof of the theorem conceives the method as a special multivariable fixed-point iteration, whose fixed-point function is: $\mathbf{g}(\mathbf{x}) = \mathbf{x} - (\mathbf{f}'(\mathbf{x}))^{-1}\mathbf{f}(\mathbf{x})$. Based on the theory of the previous (2.10.) chapter, the fixed-point iteration is quadratic if the matrix of first-order partial derivatives is zero at the root location ($\mathbf{g}'(\mathbf{p}) = \mathbf{0}$). By partially differentiating, it can be proven that this condition is indeed satisfied at the sought point, thus the order of convergence is exactly two.

## 3. The Practical, Efficient Form of the Method

Although matrix inversion appears in the theoretical formula (2.29), in practice **we never invert a matrix**, because it would involve extremely high computational cost and would be unstable. Instead, in each step we solve a linear system of equations as follows:

1. We introduce the step size (modification) vector:

$$\mathbf{s}^{(k)} = \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$$

2. We rearrange the formula into a **linear system of equations**:

$$\mathbf{f}'\big(\mathbf{p}^{(k)}\big)\mathbf{s}^{(k)} = -\mathbf{f}\big(\mathbf{p}^{(k)}\big)$$

3. We solve this system for the unknown vector $\mathbf{s}^{(k)}$ (for example, using Gaussian elimination or in MATLAB with the efficient `\` operator).
4. We update the current approximation:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \mathbf{s}^{(k)}$$

## 4. Numerical Example (Example 2.57)

The notes demonstrate the operation on the two-dimensional nonlinear system of equations previously examined with fixed-point iteration:

$$\begin{aligned}4x_1-e^{x_1 x_2}-3 &= 0\\ x_1-x_2^2-3x_2-1 &= 0\end{aligned}$$

* **Starting point:** $\mathbf{p}^{(0)} = (-1.5, -1.5)^T$.
* **Result:** Thanks to quadratic convergence, Newton's method runs extremely fast: after only **4 steps** it reaches the exact solution $\mathbf{p} = (1, 0)^T$ within a $10^{-6}$ error bound.

## 5. Summary Evaluation

The multivariable Newton's method is one of the **fastest and most efficient** procedures for solving systems of equations, provided that the initial value is close enough to the true solution. Its main practical difficulty is that in every single step, the full $n \times n$ Jacobian matrix must be written out and evaluated, and then an associated linear system of equations must be solved.
