Study Guide: Newton’s Divided Difference Form of the Lagrange Polynomial

This study guide focuses on the mathematical derivation, practical application, and theoretical consequences of Newton’s divided difference formula for interpolation. It explores how this specific form of the Lagrange interpolating polynomial addresses the computational limitations of the standard Lagrange formula.


--------------------------------------------------------------------------------


1. Concept Overview

The primary disadvantage of the standard Lagrange interpolation formula is that the addition of a new mesh point (alappont) requires a complete recomputation of the entire formula. The Newton form, or Newton Polynomial, solves this by using a recursive structure. This allows a new data point to be incorporated by simply adding a single new term to the existing polynomial.

The General Formula

The n-th degree Lagrange interpolating polynomial in Newton’s form is expressed as: L_n(x) = f[x_0] + f[x_0, x_1](x - x_0) + f[x_0, x_1, x_2](x - x_0)(x - x_1) + \cdots + f[x_0, x_1, \ldots, x_n](x - x_0)(x - x_1) \cdots (x - x_{n-1})

Where f[x_0, \dots, x_i] represents the i-th order divided difference.


--------------------------------------------------------------------------------


2. Mathematical Foundation and Derivation

The derivation begins with the relation: L_n(x) = L_0(x) + (L_1(x) - L_0(x)) + (L_2(x) - L_1(x)) + \cdots + (L_n(x) - L_{n-1}(x))

Key Derivation Points:

1. Initial Condition: By definition, L_0(x) = f(x_0), which is a constant function.
2. Polynomial Differences: The difference L_i(x) - L_{i-1}(x) is a polynomial of degree at most i. Since both L_i and L_{i-1} satisfy the interpolating equations for points x_0, \dots, x_{i-1}, the difference is zero at those points.
3. Factorization: According to the Fundamental Theorem of Algebra, the difference can be factored as: L_i(x) - L_{i-1}(x) = a_i(x - x_0)(x - x_1) \cdots (x - x_{i-1}) where a_i is the i-th divided difference, denoted as f[x_0, x_1, \dots, x_i].


--------------------------------------------------------------------------------


3. Practical Implementation: The Divided Difference Table

For manual calculations, divided differences are arranged in a triangular table. Each value is computed using the difference of the values to its left and above, divided by the difference of the corresponding mesh points.

x_i	f(x_i)	1st Divided Diff	2nd Divided Diff	3rd Divided Diff
x_0	\boxed{f[x_0]}			
x_1	f[x_1]	\boxed{f[x_0, x_1]}		
x_2	f[x_2]	f[x_1, x_2]	\boxed{f[x_0, x_1, x_2]}	
x_3	f[x_3]	f[x_2, x_3]	f[x_1, x_2, x_3]	\boxed{f[x_0, x_1, x_2, x_3]}

Note: The coefficients for the Newton polynomial are found along the top diagonal (boxed values).


--------------------------------------------------------------------------------


4. Truncation Error and Theoretical Results

The Error Formula

The difference between the actual function f(x) and the interpolating polynomial L_n(x) can be expressed using a divided difference that includes the point x: f(x) = L_n(x) + f[x_0, x_1, \ldots, x_n, x](x - x_0)(x - x_1) \cdots (x - x_n)

Relation to Derivatives

If the function f is sufficiently smooth (f \in C^n), then there exists a value \xi in the interval spanned by the mesh points such that: f[x_0, x_1, \ldots, x_n] = \frac{f^{(n)}(\xi)}{n!} This result shows that divided differences are discrete approximations of the function's derivatives.


--------------------------------------------------------------------------------


5. Study Quiz

Instructions: Answer the following questions in 2–3 sentences based on the source materials.

1. What is the primary advantage of the Newton form over the standard Lagrange form of interpolation?
2. How is the zero-degree polynomial L_0(x) defined in the Newton derivation?
3. Explain the role of the Fundamental Theorem of Algebra in deriving the Newton polynomial.
4. How does one determine the degree of a Newton polynomial simply by looking at its coefficients?
5. What is the recursive relationship used to update L_n(x) to L_{n+1}(x) when a new mesh point is added?
6. Why is Horner’s method recommended for evaluating a Newton polynomial?
7. Describe how a single value in the divided difference table (beyond the second column) is calculated.
8. Why is the error term f[x_0, \dots, x_n, x] \prod (x-x_i) considered to be of "theoretical" rather than "practical" importance?
9. According to the Corollary, what does the n-th order divided difference represent in terms of calculus?
10. In the provided example with points x = \{-1, 1, 2, 3\} and values y = \{-2, 0, -2, 2\}, what is the resulting simplified polynomial?


--------------------------------------------------------------------------------


6. Answer Key

1. The primary advantage is the ease of adding new mesh points; whereas the standard Lagrange form requires a complete recomputation, the Newton form only requires adding a single new term. This makes it much more efficient for applications where data points are collected incrementally.
2. L_0(x) is defined as the constant function equal to the function value at the first mesh point, f(x_0). It serves as the starting point for the recursive construction of higher-degree polynomials.
3. The Fundamental Theorem of Algebra is used to show that the difference between L_i(x) and L_{i-1}(x) is a polynomial of degree i with roots at x_0, \dots, x_{i-1}. This allows the difference to be factored into a product of linear terms (x-x_j) and a leading coefficient a_i.
4. The degree is determined by identifying the highest-order non-zero divided difference coefficient. If f[x_0, \dots, x_n] \neq 0, then the polynomial is exactly of degree n.
5. The update is performed by adding the term f[x_0, \dots, x_{n+1}] \prod_{i=0}^n (x - x_i) to the existing L_n(x). This shows that L_{n+1}(x) = L_n(x) + \text{correction term}.
6. Horner's method is used because it organizes the computation into a nested series of multiplications and additions, which is computationally efficient. It significantly reduces the number of arithmetic operations required compared to evaluating each term of the polynomial independently.
7. A value is calculated by taking the difference between the divided difference immediately to its left and the one above that, then dividing by the difference between the furthest mesh points involved in those differences. This recursive structure is what allows the table to be built column by column.
8. It is primarily theoretical because calculating the term f[x_0, \dots, x_n, x] requires knowing the exact value of f(x). Since the goal of interpolation is to approximate an unknown f(x), this term cannot be used for practical error estimation without already knowing the answer.
9. The n-th order divided difference is equal to the n-th derivative of the function evaluated at some point \xi within the interval of the mesh points, divided by n!. This establishes a direct link between discrete divided differences and continuous derivatives.
10. Based on the divided difference table provided in the source, the Newton polynomial L_3(x) = -2 + (x + 1) - (x + 1)(x - 1) + (x + 1)(x - 1)(x - 2) simplifies to L_3(x) = x^3 - 3x^2 + 2.


--------------------------------------------------------------------------------


7. Essay Questions

Instructions: Use the principles outlined in the source text to provide comprehensive long-form answers to the following.

1. The Evolution of Interpolation: Compare and contrast the Lagrange and Newton forms of interpolation. Discuss why a mathematician might choose one over the other based on data availability and computational constraints.
2. Deriving the Newton Coefficient: Provide a detailed walk-through of the derivation of the coefficient a_i. Explain how the interpolating equations and the Lagrange formula lead to the compact sum for divided differences.
3. Numerical Stability and Efficiency: Discuss the role of algorithms in interpolation. Specifically, analyze how Algorithm 6.13 (Coefficient Generation) and Algorithm 6.14 (Horner’s Evaluation) optimize the use of memory and processing power.
4. Bridging Discrete and Continuous Math: Elaborate on the significance of Corollary 6.17. How does the relationship between divided differences and derivatives allow us to use interpolation theory to understand the behavior of smooth functions?
5. Limits and Polynomial Behavior: Based on the exercise section, explain what happens to the m-th order divided difference when the order m exceeds the degree n of the polynomial. Additionally, discuss the behavior of the divided difference as all mesh points approach a single value x_0.


--------------------------------------------------------------------------------


8. Glossary of Key Terms

* Alappontok (Mesh Points): The set of distinct x-coordinates (x_0, x_1, \dots, x_n) at which the function values are known.
* Divided Difference (Osztott Differencia): A recursive measurement of the change in function values relative to the change in mesh points, used as coefficients in the Newton polynomial.
* Fundamental Theorem of Algebra: A theorem used in this context to prove that a polynomial of degree i with i known roots can be factored into linear terms.
* Horner’s Method (Horner-elrendezés): An efficient algorithm for evaluating polynomials that minimizes the number of multiplications.
* Interpolation Equation: The requirement that the approximating polynomial L_n(x) must exactly equal the function value f(x_i) at every mesh point x_i.
* Lagrange Interpolating Polynomial: The unique polynomial of degree at most n that passes through n+1 given data points.
* Newton Polynomial: A specific form of the Lagrange interpolating polynomial constructed using divided differences.
* Truncation Error (Képlethiba): The difference between the true function value and the value produced by the interpolating polynomial.
