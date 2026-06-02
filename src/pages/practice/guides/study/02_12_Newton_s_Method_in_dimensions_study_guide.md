Study Guide: Fixed-Point Iteration in n Dimensions

This study guide provides a comprehensive review of the mathematical principles, theorems, and applications of fixed-point iteration within n-dimensional spaces. It focuses on the conditions for existence, uniqueness, and the rates of convergence for multivariable systems.


--------------------------------------------------------------------------------


Section 1: Short-Answer Quiz

Instructions: Answer the following questions in 2–3 sentences based on the principles outlined in the source context.

1. How is a fixed point defined for a multivariable function $\mathbf{g}: E \to \mathbb{R}^n$?
2. What criteria must a function $\mathbf{g}$ meet to be considered a "contraction" on a set E?
3. According to the Fixed-Point Theorem, what are the necessary conditions for a function to have a unique fixed point in n dimensions?
4. Explain the role of the Cauchy sequence in proving the convergence of a fixed-point iteration.
5. What is the minimum order of convergence guaranteed by the Fixed-Point Theorem for a contraction mapping?
6. How does the Jacobian matrix $\mathbf{g}$'($\mathbf{p}$) influence the local convergence of an iteration?
7. What specific condition regarding the Jacobian matrix leads to quadratic convergence in a fixed-point iteration?
8. In the provided example system involving $x_1$ and $x_2$, how is the system of equations rearranged to form a fixed-point problem?
9. Why is it necessary for the set E to be closed in the general Fixed-Point Theorem?
10. How is the Lagrange Mean Value Theorem utilized in the proof of local convergence?


--------------------------------------------------------------------------------


Section 2: Answer Key

1. Fixed Point Definition: A vector $\mathbf{p} \in E$ is considered a fixed point of a function $\mathbf{g}$ if the output of the function is equal to the input vector itself, expressed as $\mathbf{p} = \mathbf{g}(\mathbf{p}$). In n dimensions, this means every component of the vector must satisfy the equality simultaneously.
2. Contraction Criteria: A function is a contraction if there exists a constant c (where 0 $\leq c < 1$) such that the distance between the function values of any two points $\mathbf{x}$ and $\mathbf{y}$ is less than or equal to c times the distance between the points themselves. This is mathematically represented using a vector norm as \|$\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y}$)\| $\leq c$\|$\mathbf{x} - \mathbf{y}$\|.
3. Existence and Uniqueness Conditions: The function $\mathbf{g}$ must map a closed set E into itself ($\mathbf{g}: E \to E$) and must be a contraction on that set. Under these conditions, the theorem guarantees that a unique fixed point exists and that any iteration starting in E will converge to it.
4. Cauchy Sequence Role: Proving the sequence $\mathbf{p}^{(k)}$ is a Cauchy sequence demonstrates that the terms of the iteration become arbitrarily close to each other as the number of iterations increases. Because $\mathbb{R}^n$ is complete, every Cauchy sequence converges to a limit, which is then shown to be the fixed point of the function.
5. Minimum Order of Convergence: The order of convergence for a fixed-point iteration under the contraction mapping property is at least linear. This is because the error at each step is bounded by the contraction constant c multiplied by the error of the previous step: \|$\mathbf{p}^{(k+1)} - \mathbf{p}$\| $\leq c$\|$\mathbf{p}^{(k)} - \mathbf{p}$\|.
6. Jacobian and Local Convergence: If the norm of the Jacobian matrix (derivative matrix) at the fixed point is less than one (\|$\mathbf{g}$'($\mathbf{p}$)\| < 1), the iteration is guaranteed to converge locally to $\mathbf{p}$. This condition ensures that the function acts as a contraction within a sufficiently small neighborhood of the fixed point.
7. Quadratic Convergence Condition: Quadratic convergence occurs when the Jacobian matrix at the fixed point is the zero matrix ($\mathbf{g}$'($\mathbf{p}) = \mathbf{0}$) and the function is at least twice continuously differentiable ($C^2$). This higher order of convergence means the error at each step is proportional to the square of the error at the previous step.
8. Example Rearrangement: The example system is transformed by isolating one variable in each equation; specifically, $x_1$ is expressed as $\frac{1}{4}(e^{x_1 x_2} + 3$) and $x_2$ is expressed as $\frac{1}{3}(x_1 - x_2^2 - 1$). These resulting expressions define the components of the vector function $\mathbf{g}(\mathbf{x}$).
9. Closed Set Requirement: The set E must be closed to ensure that the limit of the Cauchy sequence $\mathbf{p}^{(k)}$ actually resides within the domain E. If the set were open, the sequence might converge to a point on the boundary that is not included in the domain of $\mathbf{g}$.
10. Lagrange Mean Value Theorem: This theorem is used to relate the difference in function values to the Jacobian matrix. By showing that the norm of the Jacobian is bounded by a constant c < 1 in a neighborhood, the theorem proves that the function is a contraction in that specific area.


--------------------------------------------------------------------------------


Section 3: Essay Questions

Instructions: These questions are designed for deeper reflection and mathematical analysis. No answers are provided.

1. The Geometry of Contraction: Discuss why the contraction property is essential for ensuring uniqueness. Use the mathematical proof provided in the text to explain why two distinct fixed points cannot exist if c < 1.
2. Global vs. Local Convergence: Compare the requirements for the general Fixed-Point Theorem with those for the Local Convergence Theorem. Analyze how the shift from a closed set E to an open set E changes the requirements placed on the derivative of the function.
3. From 1D to n Dimensions: Synthesize how the concepts of derivatives and absolute values in single-variable fixed-point iterations are generalized into Jacobian matrices and vector norms in n dimensions.
4. The Impact of Higher-Order Derivatives: Explain the derivation of quadratic convergence using the second-order Taylor approximation. Why does the requirement $\mathbf{g}$'($\mathbf{p}) = \mathbf{0}$ eliminate the linear term of the error expansion?
5. Practical Implementation Challenges: Based on the provided iteration table and example exercises, evaluate the factors that might influence the speed of convergence in a real-world numerical problem. How does the choice of the initial vector $\mathbf{p}^{(0)}$ affect the outcome?


--------------------------------------------------------------------------------


Section 4: Glossary of Key Terms

Term	Definition
Cauchy Sequence	A sequence whose elements become arbitrarily close to each other as the sequence progresses; in $\mathbb{R}^n$, all such sequences converge to a limit.
Closed Set	A set E $\subset \mathbb{R}^n$ that contains all its limit points, ensuring that the result of an iterative process stays within the set.
Contraction	A mapping $\mathbf{g}$ where the distance between the images of any two points is strictly less than the distance between the points themselves, scaled by a factor c < 1.
Fixed Point	A vector $\mathbf{p}$ such that $\mathbf{g}(\mathbf{p}) = \mathbf{p}$; the point remains unchanged by the application of the function.
Fixed-Point Iteration	A numerical method where a sequence is generated by repeatedly applying a function to the previous result: $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)}$).
Jacobian Matrix	The matrix of all first-order partial derivatives of a vector-valued function; denoted as $\mathbf{g}$'($\mathbf{x}$).
Linear Convergence	A rate of convergence where the error in the current step is bounded by a constant multiple of the error in the previous step.
Lipschitz Constant (c)	The non-negative constant c < 1 used in the definition of a contraction to bound the distance between function values.
Matrix Norm	A measure of the "size" or "length" of a matrix, often generated by a corresponding vector norm, used to evaluate the contraction property of the Jacobian.
Quadratic Convergence	A rapid rate of convergence where the error in the current step is bounded by a constant multiple of the square of the error in the previous step.
Vector Norm (|$\cdot$|)	A function that assigns a strictly positive length or size to each vector in a vector space.
