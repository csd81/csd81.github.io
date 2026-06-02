Gaussian Quadrature: A Comprehensive Study Guide

This study guide explores the principles, mathematical foundations, and applications of Gaussian quadrature formulas as presented in the provided source materials. This method provides a highly efficient approach to numerical integration by selecting specific points and weights to achieve maximum precision for polynomial functions.

Short-Answer Quiz

Question 1: What is the primary advantage of Gaussian quadrature formulas compared to Newton–Cotes formulas regarding convergence speed? Gaussian quadrature formulas exhibit exponential convergence toward zero as the number of points (n) increases, provided the 2n-th derivative of the function is bounded. In contrast, Newton–Cotes formulas typically only converge at a polynomial rate.

Question 2: According to Theorem 7.10, what is the necessary and sufficient condition for a quadrature formula to be exact for polynomials of degree at most m? A quadrature formula is exact for polynomials up to degree m if and only if it is exact for every monomial $x^i$ where i ranges from 0 to m. This is due to the linearity of both the integral and the quadrature formula itself.

Question 3: Why is an n-point Gaussian quadrature formula expected to be exact for polynomials of degree up to 2n-1? An n-point quadrature formula contains 2n parameters, consisting of n weights ($c_i$) and n nodes ($x_i$). Since a polynomial of degree 2n-1 also possesses 2n coefficients, these parameters can be solved to match the exact integral values.

Question 4: What are the specific weights and nodes for a two-point Gaussian quadrature formula on the interval [-1, 1]? For n=2 on the interval [-1, 1], the weights are $c_1 = 1$ and $c_2 = 1$. The corresponding nodes are $x_1 = -\frac{\sqrt{3}}{3}$ and $x_2 = \frac{\sqrt{3}}{3}$.

Question 5: How are "orthogonal functions" defined on a specific interval [a, b]? Two functions, f and g, are considered orthogonal on the interval [a, b] if the integral of their product over that interval is equal to zero. Mathematically, this is expressed as $\int_a^b f(x)g(x$)\,dx = 0.

Question 6: What role does the Gram–Schmidt orthogonalization process play in the context of Gaussian quadrature? The Gram–Schmidt process is used to generate a sequence of Legendre polynomials ($P_i$) that are pairwise orthogonal on the interval [-1, 1]. These polynomials are essential because their roots serve as the optimal nodes for Gaussian quadrature.

Question 7: List three important properties of the roots of the n-th degree Legendre polynomial ($P_n$). The roots are all real, distinct, and located within the open interval (-1, 1). Furthermore, these roots are symmetric with respect to the origin.

Question 8: How is an integral on an arbitrary interval [a, b] converted to the standard interval [-1, 1] used in Gaussian quadrature? The conversion is achieved through a variable substitution: x = $\frac{(b - a)t + a + b}{2}$. This transforms the integral such that $\int_a^b f(x$)\,dx = $\frac{b - a}{2}\int_{-1}^{1} f\left(\frac{(b - a)t + a + b}{2}\right)$dt.

Question 9: What is the relationship between the parity of a Legendre polynomial and its index i? A Legendre polynomial $P_i$ is an even function if the index i is even. Conversely, it is a odd function if the index i is odd.

Question 10: What determines the nodes ($x_i$) and coefficients ($c_i$) in an n-point Gaussian quadrature formula? The nodes ($x_1, \ldots, x_n$) are the roots of the n-th degree Legendre polynomial. The coefficients ($c_i$) are determined by integrating the Lagrange-style basis functions associated with those specific roots over the interval [-1, 1].

Answer Key

1. Exponential convergence vs. polynomial convergence.
2. Exactness for monomials $x^0, x^1, \ldots, x^m$.
3. Matching 2n parameters ($c_i, x_i$) to the 2n coefficients of a (2n-1)-degree polynomial.
4. Weights: 1, 1; Nodes: $\pm\frac{\sqrt{3}}{3}$.
5. The integral of their product is zero.
6. Generating Legendre polynomials whose roots are the quadrature nodes.
7. Real and distinct, located in (-1, 1), and symmetric to the origin.
8. Variable substitution: x = $\frac{(b - a)t + a + b}{2}$.
9. $P_i$ is even if i is even, and odd if i is odd.
10. Nodes are roots of $P_n$; coefficients are integrals of specific polynomial basis functions.

Essay Questions

1. Compare and contrast the Newton–Cotes formulas with Gaussian quadrature. Focus on the selection of nodes, the degree of polynomial exactness, and the behavior of the error term as n increases.
2. Explain the derivation of the two-point Gaussian quadrature formula on the interval [-1, 1]. Detail the system of nonlinear equations used to find the weights and nodes and how the unique solution is identified.
3. Discuss the significance of Legendre polynomials in numerical analysis. Why must the quadrature nodes be the roots of these specific polynomials to achieve a precision of degree 2n-1?
4. Analyze the transformation required to apply Gaussian quadrature to a non-standard interval [a, b]. Provide a step-by-step conceptual guide on how the function f(x) and the differential dx change during this substitution.
5. Describe the Gram–Schmidt orthogonalization process as applied to the construction of Legendre polynomials. Explain how orthogonality is enforced starting from the base polynomials $P_0(x)=1$ and $P_1(x)=x$.

Glossary of Key Terms

Term	Definition
Gaussian Quadrature	A numerical integration method that approximates the integral of a function as a weighted sum of functional values at specific points, designed to be exact for polynomials of degree 2n-1.
Legendre Polynomial ($P_n$)	A sequence of orthogonal polynomials on the interval [-1, 1] where each $P_n$ has degree n. Their roots are used as nodes in Gaussian quadrature.
Orthogonal Functions	Two functions whose integral product over a specific interval is zero.
Nodes ($x_i$)	The specific points within the interval of integration at which the function f(x) is evaluated.
Weights ($c_i$)	The coefficients by which the functional values at the nodes are multiplied to approximate the integral.
Gram–Schmidt Orthogonalization	A mathematical procedure for generating a set of orthogonal functions (like Legendre polynomials) from a set of linearly independent functions.
Truncation Error	The difference between the exact value of an integral and the value produced by the quadrature formula.
Monomial	A polynomial consisting of only one term, such as $x^i$.
Linearity	The property of the integral and the quadrature formula that allows the operation on a sum of terms to equal the sum of the operations on individual terms.
Recursion Formula	A mathematical relation (such as $P_{n+1}(x$) = x$P_n(x) - \frac{n^2}{4n^2 - 1}P_{n-1}(x$)) used to define subsequent Legendre polynomials based on previous ones.
