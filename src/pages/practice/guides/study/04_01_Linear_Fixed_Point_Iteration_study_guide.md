Study Guide: Linear Fixed-Point Iteration

This study guide provides a comprehensive review of the mathematical foundations, convergence criteria, and stability of linear fixed-point iterations. It is designed to assist in mastering the iterative techniques used to solve linear systems of the form $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$.


--------------------------------------------------------------------------------


Part I: Short-Answer Quiz

Instructions: Answer the following ten questions in 2–3 sentences each, focusing on the core theoretical concepts.

1. Define the eigenvalue and eigenvector of a square matrix.
2. What is the characteristic equation of a matrix, and what does it determine?
3. Define the spectral radius $\rho(\mathbf{A}$) of a matrix.
4. State the relationship between the spectral radius of a matrix and its matrix norm.
5. Under what conditions is the matrix sequence $\mathbf{T}^k$ equivalent to the zero matrix as k approaches infinity?
6. What is a Neumann series (geometric series) in the context of matrices, and when does it converge?
7. If the spectral radius $\rho(\mathbf{A}) < 1$, what can be concluded about the matrix ($\mathbf{I} - \mathbf{A}$)?
8. How is the unique solution $\mathbf{x}$ to the equation $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ calculated when the iteration converges?
9. How does the magnitude of the matrix norm \|$\mathbf{T}$\| impact the speed of convergence?
10. Describe the impact of rounding errors on the stability of linear fixed-point iterations.


--------------------------------------------------------------------------------


Part II: Quiz Answer Key

1. Define the eigenvalue and eigenvector of a square matrix. An eigenvalue $\lambda$ is a complex number such that the equation $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ has a nontrivial solution ($\mathbf{x} \neq \mathbf{0}$). The solution vector $\mathbf{x}$ is known as the eigenvector corresponding to the eigenvalue $\lambda$.
2. What is the characteristic equation of a matrix, and what does it determine? The characteristic equation is defined as $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$, which is an nth-degree algebraic equation. Solving this equation determines the n eigenvalues of the n $\times n$ matrix $\mathbf{A}$.
3. Define the spectral radius $\rho(\mathbf{A}$) of a matrix. The spectral radius $\rho(\mathbf{A}$) is the maximum of the absolute values of all eigenvalues of the matrix $\mathbf{A}$. Geometrically, it represents the radius of the smallest circle centered at the origin in the complex plane that contains all the eigenvalues.
4. State the relationship between the spectral radius of a matrix and its matrix norm. For any matrix norm \|$\cdot$\|, the spectral radius is always less than or equal to the norm, expressed as $\rho(\mathbf{A}) \leq$ \|$\mathbf{A}$\|. This is proven by taking the norm of both sides of the eigenvalue equation $\mathbf{A}\mathbf{v} = \lambda\mathbf{v}$ and simplifying.
5. Under what conditions is the matrix sequence $\mathbf{T}^k$ equivalent to the zero matrix as k approaches infinity? The sequence $\mathbf{T}^k$ converges to the zero matrix if and only if the spectral radius of $\mathbf{T}$ is less than one ($\rho(\mathbf{T}) < 1$). This is also equivalent to the condition that $\mathbf{T}^k \mathbf{x}$ converges to the zero vector for all initial vectors $\mathbf{x}$.
6. What is a Neumann series (geometric series) in the context of matrices, and when does it converge? The Neumann series is the infinite sum $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \mathbf{A}^3 + \cdots$, where $\mathbf{A}$ is a square matrix. It converges if and only if the spectral radius $\rho(\mathbf{A}) < 1$.
7. If the spectral radius $\rho(\mathbf{A}) < 1$, what can be concluded about the matrix ($\mathbf{I} - \mathbf{A}$)? If $\rho(\mathbf{A}) < 1$, the matrix ($\mathbf{I} - \mathbf{A}$) is guaranteed to be invertible (nonsingular). Furthermore, its inverse can be expressed as the sum of the convergent Neumann series: ($\mathbf{I} - \mathbf{A}$)^{-1} = $\sum_{k=0}^{\infty} \mathbf{A}^k$.
8. How is the unique solution $\mathbf{x}$ to the equation $\mathbf{x} = \mathbf{T}\mathbf{x} + \mathbf{c}$ calculated when the iteration converges? The unique solution is given by the formula $\mathbf{x} = (\mathbf{I} - \mathbf{T}$)^{-1}$\mathbf{c}$. The fixed-point iteration $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ will converge to this specific solution for any choice of the initial vector $\mathbf{x}^{(0)}$ provided $\rho(\mathbf{T}) < 1$.
9. How does the magnitude of the matrix norm \|$\mathbf{T}$\| impact the speed of convergence? The speed of convergence is directly related to the magnitude of the norm; the smaller the value of \|$\mathbf{T}$\|, the faster the sequence $\mathbf{x}^{(k)}$ converges to the solution. This is supported by the error estimate \|$\mathbf{x} - \mathbf{x}^{(k)}$\| $\leq$ \|$\mathbf{T}$\|^k \|$\mathbf{x} - \mathbf{x}^{(0)}$\|.
10. Describe the impact of rounding errors on the stability of linear fixed-point iterations. If \|$\mathbf{T}$\| < 1, the iteration is stable because the total difference between the theoretical sequence and the sequence with rounding errors is bounded by $\frac{\varepsilon}{1 - \|\mathbf{T}\|}$. Consequently, the smaller the norm of $\mathbf{T}$, the less the computation is affected by cumulative rounding errors.


--------------------------------------------------------------------------------


Part III: Essay Questions

Instructions: Use the provided source materials to draft detailed responses to the following prompts. (Answers are not provided for this section).

1. The Role of Spectral Radius in Convergence: Provide a detailed proof and explanation for why the condition $\rho(\mathbf{T}) < 1$ is necessary and sufficient for the convergence of a linear fixed-point iteration. Compare this to the stronger condition of \|$\mathbf{T}$\| < 1.
2. Nonsingularity and Matrix Proximity: Discuss Theorem 4.5 regarding the nonsingularity of matrices "close" to an invertible matrix $\mathbf{A}$. Explain the significance of the condition \|$\mathbf{A} - \mathbf{B}$\| < $\frac{1}{\|\mathbf{A}^{-1}\|}$ and its implications for numerical stability.
3. Global vs. Local Convergence: Contrast linear fixed-point iterations with nonlinear versions. Why is the convergence of the linear form $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ considered "global," and how does this affect the choice of the initial vector $\mathbf{x}^{(0)}$?
4. Derivation of the Iterative General Form: Show the step-by-step derivation of the general formula for the kth term: $\mathbf{x}^{(k)} = \mathbf{T}^k \mathbf{x}^{(0)} + (\mathbf{T}^{k-1} + \mathbf{T}^{k-2} + \cdots + \mathbf{I})\mathbf{c}$. Explain how this formula relates to the convergence of the Neumann series.
5. Error Analysis and Stability: Analyze the effect of rounding errors $\mathbf{w}^{(k)}$ on a linear system. Derive the upper bound for the error difference \|$\mathbf{y}^{(k+1)} - \mathbf{x}^{(k+1)}$\| and explain how it demonstrates that the iterative process is stable.


--------------------------------------------------------------------------------


Part IV: Glossary of Key Terms

Term	Definition
Characteristic Equation	The algebraic equation $\det(\mathbf{A} - \lambda\mathbf{I}) = 0$ used to find the eigenvalues of a matrix.
Eigenvalue ($\lambda$)	A scalar value such that $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ for some nonzero vector $\mathbf{x}$.
Eigenvector ($\mathbf{x}$)	A nonzero vector that, when multiplied by a matrix, results only in a scale change defined by the eigenvalue.
Fixed-Point Iteration	An iterative method where each subsequent value is calculated as a function of the previous value: $\mathbf{x}^{(k+1)} = f(\mathbf{x}^{(k)}$).
Global Convergence	A property where an iterative sequence converges to a solution regardless of the initial starting value $\mathbf{x}^{(0)}$.
Identity Matrix ($\mathbf{I}$)	A square matrix with ones on the main diagonal and zeros elsewhere, such that $\mathbf{I}\mathbf{x} = \mathbf{x}$.
Matrix Norm (|$\cdot$|)	A function that assigns a strictly positive length or size to a matrix, typically satisfying the triangle inequality and |$\mathbf{A}\mathbf{B}| \leq |\mathbf{A}||\mathbf{B}$|.
Neumann Series	The matrix power series $\mathbf{I} + \mathbf{A} + \mathbf{A}^2 + \cdots$, which is the matrix analog of a geometric series.
Nonsingular Matrix	A square matrix that is invertible; its determinant is non-zero.
Rounding Error ($\mathbf{w}^{(k)}$)	The discrepancy introduced during a computation due to the limited precision of digital storage and arithmetic.
Spectral Radius ($\rho(\mathbf{A}$))	The maximum absolute value among all eigenvalues of a matrix $\mathbf{A}$.
Zero Matrix ($\mathbf{0}$)	A matrix in which all elements are zero; the limit of $\mathbf{T}^k$ if $\rho(\mathbf{T}) < 1$.
