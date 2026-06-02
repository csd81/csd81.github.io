Multivariable Calculus: A Comprehensive Study Guide

This document serves as a detailed review of multivariable calculus concepts, notations, and theorems essential for the analysis of non-linear systems. It synthesizes foundational principles regarding derivatives, approximations, and mean value theorems for both scalar and vector-valued functions.

Part I: Short-Answer Quiz

1. What does it mean for a function f: E \to \mathbb{R} to belong to the class C^m? A function f is said to be m times continuously partially differentiable, denoted as f \in C^m, if all its partial derivatives up to the order m exist and are continuous on its domain. This classification ensures the smoothness required for higher-order mathematical operations and approximations.

2. How is the gradient vector of a scalar function defined? For a function f \in C^1, the gradient vector f'(\mathbf{x}) is a column vector consisting of the first-order partial derivatives of the function with respect to each variable. It is mathematically represented as f'(\mathbf{x}) := \left(\frac{\partial f(\mathbf{x})}{\partial x_1}, \dots, \frac{\partial f(\mathbf{x})}{\partial x_n}\right)^T.

3. What is the Hessian matrix and when is it utilized? The Hessian matrix, denoted f''(\mathbf{x}), is an n \times n matrix containing all second-order partial derivatives of a function f \in C^2. It is primarily used in second-order Taylor approximations to account for the curvature of the function around a specific point.

4. Under what conditions is a function guaranteed to have a maximum and minimum value on a set? According to Theorem 2.37, if a set E \subset \mathbb{R}^n is closed and bounded, and the function f: E \to \mathbb{R} is continuous, then f must attain both a maximum and a minimum value within that set. This implies there exist points \mathbf{c} and \mathbf{d} in E such that the function's values at these points represent the extreme limits of the function on E.

5. How is the second-order Taylor approximation of a scalar function expressed using vector notation? For a function f \in C^3, the approximation around a point \mathbf{a} is written as f(\mathbf{x}) \approx f(\mathbf{a}) + f'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) + \frac{1}{2}(\mathbf{x} - \mathbf{a})^T f''(\mathbf{a})(\mathbf{x} - \mathbf{a}). This notation utilizes the gradient vector for the linear term and the Hessian matrix for the quadratic term.

6. Define the derivative of a vector-valued function g(t) of a single real variable. A function g: I \to \mathbb{R}^n is differentiable if all its component functions g_i(t) are differentiable. Its derivative g'(t) is a vector composed of the derivatives of each component function: g'(t) := (g_1'(t), \dots, g_n'(t))^T.

7. State the multivariable Chain Rule for the composition of a scalar function and a vector-valued function. If f: \mathbb{R}^n \to \mathbb{R} is C^1 and g: \mathbb{R} \to \mathbb{R}^n is continuously differentiable, the derivative of the composite function f \circ g is given by \frac{d}{dt}f(g(t)) = f'(g(t))^T g'(t). This result shows that the derivative is the scalar product of the gradient of the outer function and the derivative of the inner function.

8. What are the requirements for the domain E in the multivariable Lagrange's Mean Value Theorem? The theorem requires the set E \subset \mathbb{R}^n to be both open and convex. These properties ensure that for any two points \mathbf{x}, \mathbf{y} \in E, the line segment connecting them remains entirely within E, allowing for the existence of an intermediate point \xi where the derivative can be evaluated.

9. What is the Jacobian matrix of a vector-valued function \mathbf{f}: \mathbb{R}^n \to \mathbb{R}^n? The Jacobian (or derivative matrix) \mathbf{f}'(\mathbf{x}) is an n \times n matrix where each row corresponds to a component function f_i and each column corresponds to a partial derivative with respect to a variable x_j. Specifically, the entry in the i-th row and j-th column is \frac{\partial f_i}{\partial x_j}(\mathbf{x}).

10. How is the linear approximation of a vector-valued function \mathbf{f}(\mathbf{x}) calculated? The linear approximation of \mathbf{f} around a fixed point \mathbf{a} is expressed as \mathbf{f}(\mathbf{x}) \approx \mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a}). This formula uses the Jacobian matrix \mathbf{f}'(\mathbf{a}) to perform a matrix-vector multiplication with the displacement vector (\mathbf{x} - \mathbf{a}).


--------------------------------------------------------------------------------


Part II: Answer Key

1. C^m Class: A function is C^m if all partial derivatives up to order m exist and are continuous.
2. Gradient Vector: A column vector of all first-order partial derivatives, denoted f'(\mathbf{x}).
3. Hessian Matrix: An n \times n matrix of second-order partial derivatives used in quadratic approximations.
4. Extremum Conditions: The set E must be closed and bounded, and the function f must be continuous.
5. Second-Order Taylor: f(\mathbf{x}) \approx f(\mathbf{a}) + f'(\mathbf{a})^T(\mathbf{x} - \mathbf{a}) + \frac{1}{2}(\mathbf{x} - \mathbf{a})^T f''(\mathbf{a})(\mathbf{x} - \mathbf{a}).
6. Vector Derivative g'(t): A vector consisting of the derivatives of the individual component functions (g_1'(t), \dots, g_n'(t))^T.
7. Chain Rule: \frac{d}{dt}f(g(t)) = f'(g(t))^T g'(t).
8. Lagrange Domain: The set must be open and convex to ensure the line segment between any two points is contained within the domain.
9. Jacobian Matrix: An n \times n matrix \mathbf{f}'(\mathbf{x}) containing partial derivatives of all component functions.
10. Linear Approximation: \mathbf{f}(\mathbf{x}) \approx \mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a}).


--------------------------------------------------------------------------------


Part III: Essay Questions

1. The Role of Smoothness in Multivariable Analysis: Discuss the importance of the C^m classification. How does the requirement for continuous partial derivatives impact the reliability of Taylor approximations and the validity of the Hessian matrix?
2. Geometric Interpretation of Taylor’s Formula: Analyze the multivariable Taylor's formula, specifically focusing on the intermediate point \xi. Explain the significance of the condition that \xi must lie on the line segment connecting \mathbf{a} and \mathbf{x}.
3. From Scalar to Vector-Valued Functions: Compare the derivative of a scalar function (gradient) with the derivative of a vector-valued function (Jacobian). How does the structure of these derivatives reflect the dimensionality of the function's output?
4. Proof and Application of Lagrange's Mean Value Theorem: Detail the logical steps in proving the multivariable Lagrange's Mean Value Theorem using the single-variable theorem and the Chain Rule. Why is the convexity of the set E a non-negotiable requirement for this proof?
5. Linear and Quadratic Approximations in Practice: Evaluate the trade-offs between using a first-order linear approximation (Jacobian-based) and a second-order quadratic approximation (Hessian-based). In what scenarios would the added complexity of the Hessian be necessary for accurate modeling?


--------------------------------------------------------------------------------


Part IV: Glossary of Key Terms

Term	Definition
C^m Class	A classification for functions where all partial derivatives up to order m exist and are continuous.
Chain Rule	A formula for computing the derivative of the composition of two or more functions.
Convex Set	A set where for every pair of points within the set, every point on the straight line segment that joins them is also within the set.
Fréchet Derivative	A formal calculus term for the total derivative; in this context, f' and f'' serve as the first and second Fréchet derivatives.
Gradient Vector	A vector denoted f' whose components are the first-order partial derivatives of a scalar function.
Hessian Matrix	A square matrix of second-order partial derivatives of a scalar-valued function.
Jacobian Matrix	An n \times n matrix of all first-order partial derivatives of a vector-valued function.
Lagrange's Mean Value Theorem	A theorem stating that for a differentiable function, there exists a point on a given interval (or line segment) where the derivative equals the function's average rate of change over that interval.
Linear Approximation	An approximation of a function using its first-order Taylor polynomial, typically expressed as \mathbf{f}(\mathbf{a}) + \mathbf{f}'(\mathbf{a})(\mathbf{x} - \mathbf{a}).
Partial Derivative	The derivative of a multivariable function with respect to one variable while holding the others constant, denoted \frac{\partial f}{\partial x_i}.
Taylor's Formula	A representation of a function as an infinite sum of terms calculated from the values of its derivatives at a single point.
