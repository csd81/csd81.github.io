Study Guide: Error Bounds and Iterative Refinement

This study guide explores the relationship between residual vectors, matrix condition numbers, and the accuracy of numerical solutions to linear systems. It specifically addresses how to evaluate the quality of an approximate solution and how to refine it using iterative methods.


--------------------------------------------------------------------------------


Part 1: Short-Answer Quiz

Instructions: Answer the following questions in 2–3 sentences based on the provided text.

1. What is the definition of a residual vector (\mathbf{r}) in the context of a linear system \mathbf{A}\mathbf{x} = \mathbf{b}?
2. Identify the three common stopping criteria used for Jacobi and Gauss–Seidel iterations.
3. Explain the central hypothesis regarding the residual vector when used as a stopping criterion.
4. How is the condition number (\mathrm{cond}(\mathbf{A})) of a matrix defined relative to a norm?
5. What is the practical threshold used to determine if a matrix is "ill-conditioned"?
6. According to Theorem 4.18, what is the upper bound for the absolute error \|\mathbf{x} - \tilde{\mathbf{x}}\|?
7. Why can a small residual norm be misleading when dealing with certain linear systems?
8. Describe the basic process of one step of iterative refinement.
9. Why is it computationally efficient to solve the system \mathbf{A}\mathbf{y} = \mathbf{r} during iterative refinement if Gaussian elimination was already performed?
10. How can the condition number be estimated using t-digit arithmetic and the results of a refinement step?


--------------------------------------------------------------------------------


Part 2: Answer Key

1. The residual vector is defined as \mathbf{r} := \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}, where \tilde{\mathbf{x}} is the approximate solution to the system. It represents the difference between the constant vector \mathbf{b} and the product of the coefficient matrix and the approximation.
2. The three criteria are: (i) the norm of the difference between consecutive iterations \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, (ii) the relative difference between consecutive iterations \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, and (iii) the norm of the residual vector \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.
3. The hypothesis is that if the norm of the residual vector \mathbf{r} is small, then the approximate solution \tilde{\mathbf{x}} is a good approximation of the exact solution \mathbf{x}. However, this is not always true for all matrices.
4. The condition number of a matrix \mathbf{A} is the product of the norm of the matrix and the norm of its inverse: \mathrm{cond}(\mathbf{A}) := \|\mathbf{A}\| \|\mathbf{A}^{-1}\|. This value is specific to the norm (such as the \infty-norm or 1-norm) being applied.
5. While there is no exact definition, in practice, a matrix is generally considered ill-conditioned if its condition number is greater than 100–1000. If the condition number is not "big," the matrix is called well-conditioned.
6. The absolute error is bounded by the product of the norm of the matrix inverse and the norm of the residual vector, expressed as \|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|.
7. A small residual does not guarantee a small error if the matrix is ill-conditioned (having a very large \|\mathbf{A}^{-1}\|). In such cases, the error can be large even when the residual is small, as seen in Example 4.17 where the error was significant despite a residual norm of only 0.03.
8. Iterative refinement involves calculating the residual \mathbf{r} using double precision, solving the system \mathbf{A}\mathbf{y} = \mathbf{r} for a correction vector \mathbf{y}, and then updating the approximation to \bar{\mathbf{x}} = \tilde{\mathbf{x}} + \mathbf{y}.
9. It is efficient because the l_{ij} factors and row changes from the initial Gaussian elimination of \mathbf{A} can be stored and reused. Consequently, the elimination steps only need to be performed on the new vector \mathbf{r}, rather than re-processing the entire matrix.
10. The condition number can be approximated using the formula \mathrm{cond}(\mathbf{A}) \approx 10^t \frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|}, where t is the number of digits in the arithmetic, \tilde{\mathbf{y}} is the solution to \mathbf{A}\mathbf{y} = \mathbf{r}, and \tilde{\mathbf{x}} is the initial approximate solution.


--------------------------------------------------------------------------------


Part 3: Essay Questions

1. Analyze the Role of Matrix Conditionality: Discuss how the condition number affects the reliability of various stopping criteria in iterative methods. Why is the condition number a more critical metric than the residual norm alone?
2. Theorem 4.18 and Error Estimation: Provide a conceptual breakdown of Theorem 4.18. Explain how the relationship between \|\mathbf{A}\|, \|\mathbf{A}^{-1}\|, and the residual vector provides a bound for the relative error of an approximate solution.
3. The Mechanics of Iterative Refinement: Explain the step-by-step logic of the iterative refinement algorithm. Why must the residual vector be calculated with double precision (2t-digit arithmetic) to ensure the method's effectiveness?
4. Well-conditioned vs. Ill-conditioned Systems: Compare and contrast the behavior of well-conditioned and ill-conditioned matrices when subjected to rounding errors during Gaussian elimination. Use the provided examples to support your analysis.
5. Computational Efficiency in Successive Linear Systems: Discuss the practical advantages of storing factorization components (like l_{ij} factors) when solving multiple linear systems with the same coefficient matrix, particularly in the context of error correction and iterative refinement.


--------------------------------------------------------------------------------


Part 4: Glossary of Key Terms

Term	Definition
Condition Number	Defined as \mathrm{cond}(\mathbf{A}) = |\mathbf{A}| |\mathbf{A}^{-1}|; a measure of how sensitive the solution of a linear system is to changes or errors in the input data.
Double Precision	The use of 2t-digit arithmetic (where t is the standard precision) to calculate the residual vector to preserve significant digits.
Ill-conditioned Matrix	A matrix with a "big" condition number (typically > 100–1000), making numerical solutions unreliable and sensitive to rounding errors.
Iterative Refinement	Also known as residual correction; a method for improving the accuracy of an approximate solution by solving for the error using the residual vector.
Relative Error	The ratio of the absolute error to the norm of the exact solution: \frac{|\mathbf{x} - \tilde{\mathbf{x}}|}{|\mathbf{x}|}.
Residual Vector	The vector \mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}, which measures how well an approximate solution \tilde{\mathbf{x}} satisfies the system \mathbf{A}\mathbf{x} = \mathbf{b}.
Stopping Criteria	Conditions (such as a small residual norm or small change between iterations) used to terminate an iterative numerical process.
Well-conditioned Matrix	A matrix with a small condition number, where small changes in input result in small changes in the output solution.
