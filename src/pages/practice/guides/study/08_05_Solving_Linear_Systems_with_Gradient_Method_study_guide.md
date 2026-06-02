Study Guide: Solving Linear Systems with the Gradient Method

This study guide provides a comprehensive review of the methodology, mathematical foundations, and practical applications of solving linear systems using the gradient method, as outlined in the source documentation.

Quiz

Question 1: Define the quadratic function g(x) used to solve the linear system Ax = b and identify its components. The quadratic function is defined as g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c. In this expression, \mathbf{A} is a symmetric matrix in \mathbb{R}^{n \times n}, \mathbf{b} is a vector in \mathbb{R}^n, and c is a real constant.

Question 2: What is the relationship between the gradient of the function g(x) and the linear system Ax = b? The gradient vector of the quadratic function is g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}. Consequently, the critical point of g(x), where the gradient is zero, is the exact solution to the linear system \mathbf{A}\mathbf{x} = \mathbf{b}.

Question 3: Under what condition does the quadratic function g(x) have exactly one critical point? The function g(x) possesses exactly one critical point if the matrix \mathbf{A} is invertible. This critical point corresponds to the unique solution of the linear system, expressed as \mathbf{x} = \mathbf{A}^{-1}\mathbf{b}.

Question 4: How does the definiteness of matrix A affect the extrema of the function g(x)? If \mathbf{A} is a positive definite matrix, the critical point \bar{\mathbf{x}} minimizes the function g, resulting in a global minimum. Conversely, if \mathbf{A} is negative definite, the function reaches a global maximum at the critical point.

Question 5: What is the significance of Corollary 8.11 regarding local and global extrema? Corollary 8.11 states that for a quadratic function, if a local minimum or maximum exists at a specific point, that point is also the global minimum or maximum of the function. This ensures that an optimization method finding a local optimum has successfully found the global solution.

Question 6: Define the residual vector r^{(k)} and explain its role in the iterative process. The residual vector is defined as \mathbf{r}^{(k)} := \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}, which is the negative of the gradient vector \mathbf{v}^{(k)}. It represents the direction of the correction applied to the current approximation in each step of the gradient method.

Question 7: How is the step size \alpha_k calculated in the optimal gradient method? The step size \alpha_k is chosen to be the minimum point of the scalar function \phi_k(t) := g(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}). It is explicitly calculated using the formula \alpha_k = \frac{(\mathbf{r}^{(k)})^T \mathbf{r}^{(k)}}{(\mathbf{r}^{(k)})^T \mathbf{A}\mathbf{r}^{(k)}}.

Question 8: Describe the recursive formula used to update the approximation sequence p^{(k)}. The sequence of approximations is updated using the iteration \mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)}. This formula adds a scaled version of the residual vector to the current approximation to move closer to the true solution.

Question 9: Why is the symmetry of matrix A a prerequisite for the partial derivative derivations provided? Symmetry (a_{ij} = a_{ji}) is required to simplify the calculation of the partial derivative \frac{\partial g}{\partial x_i}. It allows the terms \frac{1}{2} \sum (a_{ij} x_j + a_{ji} x_j) to reduce simply to \sum a_{ij} x_j, leading to the clean gradient form g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}.

Question 10: In the provided numerical example, what was the initial point and the final true solution? The iterative process began with an initial point \mathbf{p}^{(0)} = (3, 3, 3)^T. After 13 iterations, the method converged toward the true solution of the system, which was exactly (-1, 2, 0)^T.


--------------------------------------------------------------------------------


Answer Key

1. g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c, where \mathbf{A} is a symmetric matrix, \mathbf{b} is a vector, and c is a constant.
2. The gradient g'(\mathbf{x}) is \mathbf{A}\mathbf{x} - \mathbf{b}; setting this to zero yields the system \mathbf{A}\mathbf{x} = \mathbf{b}.
3. Matrix \mathbf{A} must be invertible.
4. Positive definite \mathbf{A} leads to a global minimum; negative definite \mathbf{A} leads to a global maximum.
5. Any local extremum of a quadratic function is also its global extremum.
6. \mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}; it serves as the direction vector for the next step in the iteration.
7. \alpha_k = \frac{(\mathbf{r}^{(k)})^T \mathbf{r}^{(k)}}{(\mathbf{r}^{(k)})^T \mathbf{A}\mathbf{r}^{(k)}}.
8. \mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)}.
9. It simplifies the summation of partial derivatives, ensuring g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}.
10. Initial point \mathbf{p}^{(0)} = (3, 3, 3)^T; True solution \mathbf{x} = (-1, 2, 0)^T.


--------------------------------------------------------------------------------


Essay Questions

1. Derivation of the Gradient: Provide a detailed step-by-step derivation of the gradient vector g'(\mathbf{x}) from the summation form of the quadratic function g(x_1, \ldots, x_n), explicitly showing how the symmetry of matrix \mathbf{A} is utilized.
2. Theoretical Foundation of Optimization: Explain the mathematical reasoning why the difference g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) simplifies to \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} and how this result proves that a positive definite matrix guarantees a global minimum.
3. The Optimal Step Size: Discuss the role of the scalar function \phi_k(t) in the gradient method. Explain why \phi_k(t) is a quadratic polynomial and how its minimum point \alpha_k is derived to ensure the efficiency of the iteration.
4. Convergence Analysis: Using the provided example data in Table 8.4, analyze the convergence of the sequence \mathbf{p}^{(k)}. Discuss how the error \|\mathbf{p}^{(k)} - \mathbf{p}\|_2 behaves over 13 iterations and what this implies about the speed of the gradient method for this specific system.
5. Conditions for Application: Compare and contrast the requirements for solving \mathbf{A}\mathbf{x} = \mathbf{b} via matrix inversion versus solving it via the optimal gradient method. Focus on the necessity of symmetry and positive definiteness.


--------------------------------------------------------------------------------


Glossary of Key Terms

Term	Definition
Symmetric Matrix	A square matrix \mathbf{A} that is equal to its transpose (\mathbf{A}^T = \mathbf{A}), meaning a_{ij} = a_{ji} for all i, j.
Quadratic Function	A function of the form g(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c, used here to transform a linear system into an optimization problem.
Gradient Vector (g'(\mathbf{x}))	The vector of partial derivatives of g(\mathbf{x}); for the quadratic functions discussed, it is defined as \mathbf{A}\mathbf{x} - \mathbf{b}.
Critical Point	A point \bar{\mathbf{x}} where the gradient of the function is zero; in this context, it is the solution to the linear system \mathbf{A}\mathbf{x} = \mathbf{b}.
Positive Definite	A property of a matrix \mathbf{A} where (\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} > 0 for all non-zero vectors \Delta\mathbf{x}, ensuring the function has a global minimum.
Negative Definite	A property of a matrix \mathbf{A} where (\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} < 0 for all non-zero vectors \Delta\mathbf{x}, ensuring the function has a global maximum.
Invertible Matrix	A matrix for which an inverse exists (\mathbf{A}^{-1}), ensuring the linear system has exactly one unique solution.
Residual Vector (\mathbf{r}^{(k)})	Defined as \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}, it measures the difference between the target vector and the current linear transformation of the approximation.
Step Size (\alpha_k)	A scalar value that determines the distance moved along the residual direction in each iteration to reach the minimum of the function.
Optimal Gradient Method	An iterative algorithm that finds the minimum of a quadratic function by updating approximations based on the gradient and an optimally chosen step size.
Asymptotic Error Constant	A value representing the limit of the ratio of errors between consecutive iterations as the number of iterations approaches infinity.
