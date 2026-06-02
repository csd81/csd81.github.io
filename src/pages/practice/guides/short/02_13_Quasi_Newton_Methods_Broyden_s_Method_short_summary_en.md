**2.12. Quasi-Newton Methods, Broyden's Method** 

## 1. Motivation and the Principle of Quasi-Newton Procedures

* **The problem with the multivariable Newton's method:** Although Newton's method converges quadratically, its practical application is extremely costly, since in every single iteration step the full $n \times n$ Jacobian matrix $\mathbf{f}'(\mathbf{p}^{(k)})$ must be written out and evaluated. In addition, in every step an associated linear system of equations must also be solved, which is also computationally expensive ($O(n^3)$ operations).
* **The solution of quasi-Newton methods:** During the procedure, we approximate the exact Jacobian matrix $\mathbf{f}'(\mathbf{p}^{(k)})$ with a more easily computable matrix $\mathbf{A}^{(k)}$. The general recursion formula thus becomes the following:

$$\mathbf{p}^{(k+1)}=\mathbf{p}^{(k)}-\left(\mathbf{A}^{(k)}\right)^{-1}\mathbf{f}(\mathbf{p}^{(k)}) \tag{2.31}$$

### Numerical (Naive) Approximation of the Jacobian Matrix

One obvious approach is to replace the partial derivatives with the difference quotient using a fixed, small step size $h > 0$ and the unit vectors $\mathbf{e}^{(j)}$:

$$a_{ij}^{(k)}=\frac{f_i(\mathbf{p}^{(k)}+h\mathbf{e}^{(j)})-f_i(\mathbf{p}^{(k)})}{h}, \qquad i,j=1,\dots,n \tag{2.33}$$

This method is a direct multivariable generalization of the secant method, but it still requires $n^2$ function evaluations per step.

## 2. Theory of Broyden's Method

Broyden's method employs a much more efficient approach: it updates the approximate matrix $\mathbf{A}^{(k)}$ step by step without having to recalculate the entire matrix.

### The Quasi-Newton Equation (Secant Equation)

Following the pattern of the single-variable secant method, we require that the new matrix $\mathbf{A}^{(k)}$ satisfies the following equation:

$$\mathbf{A}^{(k)}(\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)}) = \mathbf{f}(\mathbf{p}^{(k)}) - \mathbf{f}(\mathbf{p}^{(k-1)})$$

To simplify the notations, we introduce the vectors of changes:

$$\mathbf{s}^{(k)} = \mathbf{p}^{(k)} - \mathbf{p}^{(k-1)} \qquad \text{and} \qquad \mathbf{y}^{(k)} = \mathbf{f}(\mathbf{p}^{(k)}) - \mathbf{f}(\mathbf{p}^{(k-1)})$$

Thus the condition for the matrix is: $\mathbf{A}^{(k)}\mathbf{s}^{(k)} = \mathbf{y}^{(k)}$.

### Broyden's Matrix Update Formula

Since the above equation does not uniquely determine the matrix, Broyden imposed the condition that in the directions orthogonal to the vector $\mathbf{s}^{(k)}$, the matrix should not change compared to the previous step (to $\mathbf{A}^{(k-1)}$). From this principle of minimal change (rank-1 correction) comes Broyden's formula:

$$\mathbf{A}^{(k)} = \mathbf{A}^{(k-1)} + \frac{\mathbf{y}^{(k)} - \mathbf{A}^{(k-1)}\mathbf{s}^{(k)}}{\|\mathbf{s}^{(k)}\|_2^2} (\mathbf{s}^{(k)})^T \tag{2.35}$$

## 3. Convergence and Efficiency (Theorem 2.59)

* **Local convergence:** If the initial matrix $\mathbf{A}^{(0)}$ is close enough to the true Jacobian matrix at the root, and the starting point $\mathbf{p}^{(0)}$ is also close enough to the exact solution $\mathbf{p}$, Broyden's method is guaranteed to converge.
* **The order of convergence:** The rate of convergence is **superlinear**, which means that the ratio of the error terms tends to zero at infinity:

$$\lim_{k \to \infty} \frac{\|\mathbf{p}^{(k+1)} - \mathbf{p}\|}{\|\mathbf{p}^{(k)} - \mathbf{p}\|} = 0 \tag{2.36}$$

### Why is it extremely efficient in practice? (The Sherman–Morrison Formula)

The true power of Broyden's method lies in the fact that with the help of the **Sherman–Morrison formula**, we are directly able to update the inverse of the approximate matrix ($\mathbf{B}^{(k)} = (\mathbf{A}^{(k)})^{-1}$) step by step as well.
Thereby, during the iterations, **solving linear systems of equations and matrix inversion can be completely eliminated**, the computational cost per step drops from $O(n^3)$ to a mere **$O(n^2)$ pure matrix-vector multiplications**.

## 4. Numerical Comparison with Newton's Method (Example 2.60)

The chapter tests Broyden's method on the same two-dimensional nonlinear system of equations as the previous sections.

* **Initial parameters:** $\mathbf{p}^{(0)} = (-1.5, -1.5)^T$, $h=0.001$, $TOL = 10^{-5}$.
* **Result:** Broyden's method reached the desired precision for the exact root $\mathbf{p} = (1, 0)^T$ in **10 steps**.
* **Context:** * **Newton's method** required only **4 steps** for the same, since it used the exact derivatives (quadratic convergence).
* Although Broyden's method needed more steps, the computational cost of the individual steps was orders of magnitude smaller, so for higher-dimensional systems, considering the total runtime, Broyden's method often surpasses the classical Newton method.
