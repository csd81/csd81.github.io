Study Guide: Perturbation of Linear Systems

This study guide provides a comprehensive review of the effects of perturbations on linear systems, focusing on the mathematical relationship between changes in input data (the coefficient matrix and the right-hand side vector) and the resulting errors in the solution.

Section 1: Short-Answer Quiz

Instructions: Answer the following questions using 2-3 sentences based on the information provided in the source context.

1. How does the condition number of a matrix affect the relative error of a solution when the right-hand side is perturbed?
2. Define the condition number \mathrm{cond}(\mathbf{A}) mathematically using matrix norms.
3. According to Gastinel's Theorem, what is the relationship between the condition number and singular matrices?
4. What is the "spectral condition number" and how does it compare to other condition numbers?
5. What specific condition must be satisfied by a perturbed matrix \tilde{\mathbf{A}} to ensure it remains invertible in the general perturbation theorem?
6. Using the Hilbert matrix as an example, describe what happens to the spectral condition number as the dimension n of the matrix increases.
7. What is the practical numerical consequence of an "order of magnitude" increase in the condition number?
8. Why is the spectral condition number considered difficult to compute in practice?
9. In the context of linear systems, what does the term "perturbation" refer to?
10. Explain why solving a linear system with an ill-conditioned matrix is problematic in numerical computations.


--------------------------------------------------------------------------------


Section 2: Quiz Answer Key

1. The relative error of the solution is bounded by the condition number of the matrix multiplied by the relative error of the right-hand side perturbation. Consequently, a large condition number can significantly amplify small errors in the input, leading to a large error in the output solution.
2. The condition number \mathrm{cond}(\mathbf{A}) is defined as the product of the norm of the matrix and the norm of its inverse, expressed as \|\mathbf{A}\| \cdot \|\mathbf{A}^{-1}\|. It is a property that measures how sensitive the solution of a linear system is to changes in the input data.
3. Gastinel's Theorem states that the reciprocal of the condition number represents the relative distance to the nearest singular matrix. If the condition number is very large, it implies that there is a singular matrix very "close" to the matrix \mathbf{A}, which can cause theoretical and practical issues during computation.
4. The spectral condition number is defined as \mathrm{cond}_*(\mathbf{A}) := \rho(\mathbf{A})\rho(\mathbf{A}^{-1}), where \rho denotes the spectral radius. It serves as a lower bound for any condition number derived from a matrix norm, meaning \mathrm{cond}_*(\mathbf{A}) \leq \mathrm{cond}(\mathbf{A}).
5. To guarantee that the perturbed matrix \tilde{\mathbf{A}} is nonsingular (invertible), the norm of the difference between the original and perturbed matrices must be less than the reciprocal of the norm of the inverse of the original matrix, or \|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|.
6. As the dimension n of the Hilbert matrix increases, its spectral condition number grows extremely rapidly. For instance, the condition number increases from approximately 5.24 \cdot 10^2 for n=3 to a massive 1.60 \cdot 10^{13} for n=10, characterizing it as a classic example of an ill-conditioned matrix.
7. An increase of one order of magnitude in the condition number can lead to a corresponding order of magnitude increase in the relative error of the solution. This is often interpreted as the loss of one significant digit of precision in the numerical approximation.
8. The spectral condition number is difficult to compute because it requires determining the eigenvalues of the matrix to find the spectral radius. For large-dimensional matrices, computing eigenvalues is a complex and computationally intensive numerical task.
9. A perturbation refers to a small change or error introduced into the parameters of a system, such as rounding coefficients to a certain number of decimal places or errors in the right-hand side vector. These small changes (\Delta\mathbf{b} or \Delta\mathbf{A}) can lead to a new solution \tilde{\mathbf{x}} that differs from the exact solution \mathbf{x}.
10. If a matrix is ill-conditioned, small rounding errors or input uncertainties can result in a solution that is far from the exact solution. In extreme cases, a nearby singular matrix might be used due to rounding, potentially resulting in a system with no unique solution.


--------------------------------------------------------------------------------


Section 3: Essay Format Questions

Instructions: Use the provided theorems and data to develop comprehensive responses to the following prompts.

1. The Impact of Matrix Stability on Numerical Accuracy: Discuss how the condition number acts as an error amplifier in linear systems. Use the provided proofs to explain why well-conditioned matrices are preferred in computational science.
2. Analysis of the Hilbert Matrix: Using the data provided in Table 4.3, analyze the relationship between matrix size and numerical stability. Explain why the Hilbert matrix is considered a "classic" example of an ill-conditioned system and what this implies for researchers working with such models.
3. The Significance of Gastinel’s Theorem: Evaluate the theoretical and practical implications of the relationship between the condition number and the proximity of singular matrices. How does this theorem explain the failure of certain numerical solvers?
4. Comparative Study of Perturbations: Compare and contrast the mathematical bounds for a system where only the right-hand side is perturbed versus a system where both the matrix and the right-hand side are perturbed. Discuss the additional complexities introduced by perturbing the coefficient matrix.
5. Spectral vs. Norm-Based Condition Numbers: Examine the trade-offs between using the spectral condition number and condition numbers based on standard matrix norms. Consider factors such as computational difficulty, accuracy of bounds, and the role of eigenvalues.


--------------------------------------------------------------------------------


Section 4: Glossary of Key Terms

Term	Definition
Condition Number (\mathrm{cond}(\mathbf{A}))	A measure of the sensitivity of a linear system's solution to perturbations in the input data, calculated as |\mathbf{A}| \cdot |\mathbf{A}^{-1}|.
Hilbert Matrix (\mathbf{H}_n)	A square matrix with entries h_{i,j} = 1/(i+j-1); it is a famous example of an ill-conditioned matrix where the condition number grows rapidly with size.
Ill-conditioned Matrix	A matrix with a very large condition number, meaning small changes in the system's parameters can cause large changes in the solution.
Nonsingular Matrix	A square matrix that is invertible, meaning its inverse exists and it has a unique solution for the system \mathbf{Ax} = \mathbf{b}.
Perturbation	A small change or error applied to a vector (e.g., \Delta\mathbf{b}) or a matrix (e.g., \Delta\mathbf{A}) that results in an approximate system.
Relative Error	The ratio of the absolute error in a value to the magnitude of the exact value, often expressed as |\mathbf{x} - \tilde{\mathbf{x}}| / |\mathbf{x}|.
Singular Matrix	A square matrix that is not invertible; its condition number is effectively infinite, and it does not have a unique solution.
Spectral Condition Number (\mathrm{cond}_*(\mathbf{A}))	The product of the spectral radius of a matrix and the spectral radius of its inverse (\rho(\mathbf{A})\rho(\mathbf{A}^{-1})).
Spectral Radius (\rho(\mathbf{A}))	The maximum of the absolute values of the eigenvalues of a matrix.
Well-conditioned Matrix	A matrix with a small condition number (close to 1), indicating that the solution is relatively stable against small changes in input.
