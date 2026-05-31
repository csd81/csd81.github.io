## Numerical Analysis Glossary

---

### 1

* **1-Norm of a Vector**: Defined as $\|x\|_1 = \sum_{i=1}^n |x_i|$.

---

### A

* **Absolute Error**: The difference between the true value and an approximate value: $|x-\tilde x|$.

---

### B

* **Backward Difference**: Defined as $f'(x) \approx \frac{f(x) - f(x-h)}{h}$.
* **Backward Substitution**: Solving a triangular system starting from the last equation and substituting backward.
* **Band Matrix**: A sparse matrix whose non-zero entries are confined to a diagonal band.
* **BFGS Method**: A popular quasi-Newton method using update formulas for Hessian approximation named after Broyden, Fletcher, Goldfarb, and Shanno.
* **Bisection Method**: A root-finding method where $f(a)f(b) < 0$ guarantees a root in $[a, b]$, and intervals are halved recursively.
* **Block Matrix**: A matrix partitioned into smaller matrices called blocks.
* **Broyden's Method**: A quasi-Newton method that updates an approximation of the Jacobian matrix in solving nonlinear systems.

---

### C

* **Cauchy–Bunyakovsky–Schwarz Inequality**: For all vectors $x$ and $y$: $| x^T y| \leq \|x\|_2 \cdot \|y\|_2$.
* **Central Difference**: Defined as $f'(x) \approx \frac{f(x+h) - f(x-h)}{2h}$.
* **Characteristic Equation**: The equation $\det(A - \lambda I) = 0$, used to find the eigenvalues of $A$.
* **Cholesky Decomposition**: Decomposes a symmetric positive definite matrix $A$ as $A = LL^T$, where $L$ is lower triangular.
* **Chopping**: A method of rounding where digits beyond a certain precision are simply discarded.
* **Clamped Spline**: A cubic spline with specified first derivatives at endpoints: $S'(x_0)$ and $S'(x_n)$ are known.
* **Classical Runge–Kutta Method**: A widely used fourth-order method: combines four slopes for high accuracy.
* **Complete Pivoting**: A pivoting strategy where both rows and columns are interchanged to select the largest available pivot element.
* **Composite Simpson's Rule**: A more accurate rule by applying Simpson’s Rule over multiple subintervals.
* **Composite Trapezoidal Rule**: Applies the trapezoidal rule to subintervals of $[a, b]$ for better accuracy.
* **Condition Number**: Defined as $\text{cond}(A) := \|A\| \|A^{-1}\|$, indicating sensitivity of the solution.
* **Contraction**: A Lipschitz function with constant $0 \leq c < 1$; ensures convergence in fixed-point iteration.
* **Convergence Criterion**: For linear iterations: the method converges if $\rho(T) < 1$.
* **Convergence of a Vector Sequence**: A sequence $x^{(k)}$ converges to $x$ if $\|x^{(k)} - x\| \to 0$ as $k \to \infty$.
* **Convergence of Iterative Methods**: An iterative method converges if the sequence of approximations approaches the exact solution as iterations increase.
* **Cubic Spline**: A spline composed of piecewise cubic polynomials with continuous first and second derivatives.

---

### D

* **Descent**: The process of moving in the direction where the function decreases.
* **Determinant Condition**: The condition $d > 0$ ensures a unique solution to the normal equations.
* **DFP Update**: The Davidon–Fletcher–Powell update formula used to approximate the inverse Hessian in quasi-Newton methods.
* **Diagonal Dominance**: A matrix $A$ is diagonally dominant if $|a_{ii}| > \sum_{j \ne i} |a_{ij}|$ for all $i$.
* **Diagonally Dominant Matrix**: A matrix $A$ where $|a_{ii}| > \sum_{j \ne i} |a_{ij}|$ for all rows $i$.
* **Direct Method**: A method that aims to solve the system in a finite number of steps, such as Gaussian elimination.
* **Distance Between Vectors**: Defined by $\|x - y\|$, typically using the Euclidean norm.
* **Divided Differences**: Recursive coefficients used in Newton's form of interpolating polynomials.
* **Double Precision**: A 64-bit floating point representation conforming to IEEE 754, offering about 15–17 decimal digits of precision.

---

### E

* **Eigenvalue**: A scalar $\lambda$ is an eigenvalue of matrix $A$ if there exists a nonzero vector $x$ such that $Ax = \lambda x$.
* **Eigenvector**: A nonzero vector $x$ such that $Ax = \lambda x$, where $\lambda$ is an eigenvalue of $A$.
* **Equally Spaced Points**: Points with constant spacing $h = x_{i+1} - x_i$.
* **Equidistant Nodes**: Data points where $x_{i+1} - x_i = h$ for a constant $h$.
* **Error**: The difference between the computed solution $\tilde{\mathbf{x}}$ and the exact solution $\mathbf{x}$, i.e., $\| \tilde{\mathbf{x}} - \mathbf{x} \|$.
* **Error Minimization**: The goal of curve fitting: $\min F(a)$ where $F$ is the squared error.
* **Error of Interpolation**: For the Lagrange interpolation: $f(x) - L_n(x) = \frac{f^{(n+1)}(\xi)}{(n+1)!} \prod_{i=0}^n (x - x_i)$ for some $\xi \in [x_0, x_n]$.
* **Error Term of Integration**: Indicates how the numerical approximation differs from the exact integral.
* **Euclidean Norm**: Defined as $\|x\|_2 = \sqrt{\sum_{i=1}^n x_i^2}$, also known as the 2-norm.
* **Euler's Method**: A first-order numerical method for solving ordinary differential equations: $z_{i+1} = z_i + h f(t_i, z_i)$.
* **Exponential Curve Fitting**: Fitting a model of the form $y = be^{ax}$ to data.

---

### F

* **False Position Method**: Also known as Regula Falsi, uses secant lines to find successive approximations to the root.
* **Fixed Point**: A number $p$ is a fixed point of $g$ if $g(p) = p$.
* **Fixed-Point Iteration**: A method where a sequence $p_{k+1} = g(p_k)$ is generated to approximate a solution $p$ such that $g(p) = p$.
* **Floating Point Arithmetic**: A method of representing real numbers in computers by using a fixed number of bits to store the sign, exponent, and mantissa (significand).
* **Forward Difference**: Defined as $f'(x) \approx \frac{f(x+h) - f(x)}{h}$.
* **Forward Substitution**: A method to solve $Ly = b$ where $L$ is a lower triangular matrix.

---

### G

* **Gauss–Jordan Elimination**: An elimination method that reduces the coefficient matrix to the identity matrix, solving $A x = b$ and $A^{-1}$.
* **Gauss–Seidel Iteration**: An iterative method for solving linear systems using updated values as soon as they are available during the iteration.
* **Gauss–Seidel Matrix**: In Gauss–Seidel, $T_G = -(D+L)^{-1}U$.
* **Gaussian Elimination**: A method for solving linear systems by transforming the coefficient matrix into upper triangular form.
* **Gaussian Normal Equations**: The system of equations obtained by setting the gradient of the least squares error to zero.
* **Gaussian Quadrature**: A numerical integration method that approximates $\int_{-1}^{1} f(x) \, dx$ using optimally chosen points and weights.
* **Global Error**: The difference between the numerical solution and the exact solution at a mesh point.
* **Global Minimum**: A point where the function attains its lowest value over the entire domain.
* **Golden Section Search Method**: A technique for finding the extremum of a unimodal function by narrowing the range of values inside the domain and comparing function values.
* **Gradient**: The vector of first partial derivatives of a multivariable function: $f'(x)$.
* **Gradient Method**: An iterative optimization method based on the gradient of the objective function.
* **Gradient Vector**: A vector containing all first-order partial derivatives of a scalar-valued function.

---

### H

* **Hermite Interpolation**: Interpolates both function values and derivatives at given points.
* **Hermite Polynomial**: A polynomial used in Hermite interpolation that incorporates both function and derivative values at mesh points.
* **Hessian Matrix**: A square matrix of second-order partial derivatives of a scalar-valued function.
* **Heun's Method**: A second-order method: $z_{i+1} = z_i + \frac{h}{4}(f(t_i, z_i) + 3f(t_i + \frac{2h}{3}, z_i + \frac{2h}{3} f(t_i, z_i)))$.
* **Hilbert Matrix**: An example of an ill-conditioned matrix: $H_n = \left[ \frac{1}{i+j-1} \right]$.
* **Horner’s Method**: An efficient algorithm for polynomial evaluation that reduces the number of multiplications and additions required by using nested multiplication.

---

### I

* **Ill-conditioned Matrix**: A matrix for which small changes in input cause large changes in the solution; has a large condition number.
* **Initial Value Problem (IVP)**: A differential equation along with a specified value, called the initial condition, which the solution must satisfy: $y' = f(t, y),\ y(t_0) = y_0$.
* **Intermediate Value Theorem**: If $f \in C[a, b]$ and $f(a) \neq f(b)$, then for any $d$ in between $f(a)$ and $f(b)$, there exists $c \in (a, b)$ such that $f(c) = d$.
* **Interpolation**: The process of finding a function of certain property whose graph goes through the given data points.
* **Interpolation Error**: The error between the interpolated value and the actual function value.
* **Inverse Matrix**: A matrix $A^{-1}$ such that $A A^{-1} = I$, exists only for square and non-singular matrices.
* **Iterative Method**: A procedure that generates successive approximations to the solution of a system, such as Jacobi or Gauss-Seidel methods.

---

### J

* **Jacobi Iteration**: A method for solving linear systems where each variable is solved using values from the previous iteration.
* **Jacobi Matrix**: In Jacobi iteration, $T_J = -D^{-1}(L + U)$.
* **Jacobian Matrix**: A matrix of all first-order partial derivatives of a vector-valued and vector-variable function.

---

### L

* **Lagrange Basis Polynomial**: Defined as $l_k(x) = \prod_{j=0,j\neq k}^n \frac{x - x_j}{x_k - x_j}$, used in Lagrange interpolation.
* **Lagrange Form**: The Lagrange interpolating polynomial in the form $L_n(x) = \sum_{k=0}^n y_k l_k(x)$, where $l_k(x)$ are Lagrange basis polynomials.
* **Lagrange Interpolating Polynomial**: A polynomial $L_n(x)$ of degree at most $n$ that passes through $n+1$ given data points.
* **Lagrange Polynomial**: Defined as $L_n(x) = \sum_{k=0}^n y_k l_k(x)$, where $l_k(x)$ are Lagrange basis polynomials.
* **Lagrange's Mean Value Theorem**: If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then $f'(c) = \frac{f(b) - f(a)}{b - a}$ for some $c \in (a, b)$.
* **Least Squares Error**: The error function $F(a) = \sum_{i=0}^n (g(x_i;a) - y_i)^2$ minimized in the method of least squares.
* **Least Squares Method**: A technique to approximate the solution of overdetermined systems by minimizing the sum of the squares of the residuals.
* **Legendre Polynomials**: A sequence of orthogonal polynomials $P_n(x)$ defined on $[-1, 1]$, used in Gaussian quadrature.
* **Length of a Vector**: The norm of the vector, denoted $\|x\|$, typically the Euclidean norm.
* **Line Fitting**: Fitting a linear function $g(x) = ax + b$ to a set of data points.
* **Linear Convergence**: Convergence with order $\alpha = 1$ and constant $0 < c < 1$.
* **Linear Fixed-Point Equation**: A linear system of the form $x = T x + c$.
* **Linear Fixed-Point Iteration**: An iterative process of the form $x^{(k+1)} = T x^{(k)} + c$ for solving linear fixed-point equations.
* **Linear System**: A set of equations of the form $A \mathbf{x} = \mathbf{b}$, where $A$ is a matrix, $\mathbf{x}$ a vector of variables, and $\mathbf{b}$ a vector of constants.
* **Linearization**: Transforming a nonlinear model into a linear one using logarithms.
* **Lipschitz Continuity**: A function $g$ is Lipschitz continuous if $|g(x) - g(y)| \leq c|x - y|$ for all $x, y$.
* **Local Minimum**: A point where the function value is lower than nearby points, but not necessarily global.
* **Local Truncation Error**: The error made in a single step of a numerical method, e.g. in Euler's method: $\tau_{i+1} = \frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i))$.
* **Loss of Significance**: A problem that occurs when subtracting nearly equal numbers, causing significant digits to be lost due to rounding, thus reducing precision.
* **LU Decomposition**: Decomposes matrix $A$ as $A = LU$, where $L$ is lower triangular where the diagonal consists of 1s and $U$ is upper triangular.
[Image showing the LU decomposition of a matrix into Lower and Upper triangular parts]

---

### M

* **m-order Recursion**: A recursion of the form $p_{k+1} = h(p_k, p_{k-1}, \dots, p_{k-m+1})$, defined with $m$ initial values.
* **Machine Epsilon**: The smallest number $\varepsilon$ such that $1 + \varepsilon > 1$ in the floating point arithmetic system. It indicates the precision of the system.
* **Machine Number**: A number that can be represented exactly in a computer's floating point system. Other numbers are approximated by the nearest machine number.
* **Matrix**: A rectangular array of numbers or functions arranged in rows and columns.
* **Matrix Factorization**: The decomposition of a matrix into a product of matrices with specific properties.
* **Matrix Norm**: The norm of a matrix $A$ generated by a vector norm $\|\cdot\|$ is defined by $\|A\|=\sup_{x\neq0}\frac{\|Ax\|}{ \|x\|}$.
* **Mesh Points**: A sequence of points $x_0, x_1, \ldots, x_n$ used in interpolation or numerical methods to define intervals.
* **Midpoint Method**: A second-order Runge–Kutta method: $z_{i+1} = z_i + h f(t_i + \frac{h}{2}, z_i + \frac{h}{2} f(t_i, z_i))$.
* **Model Function**: The function $g(x;a)$ used to approximate the observed data.
* **Modified Euler Method**: A second-order method: $z_{i+1} = z_i + \frac{h}{2}(f(t_i, z_i) + f(t_{i+1}, z_i + h f(t_i, z_i)))$.

---

### N

* **Natural Spline**: A cubic spline where the second derivative at the endpoints is zero: $S''(x_0) = S''(x_n) = 0$.
* **Nelder-Mead Method**: A simplex-based direct search method that uses reflection, expansion, contraction, and shrinking.
* **Neumann Series**: A geometric series of matrices: $I + A + A^2 + \cdots$, which converges if $\rho(A) < 1$.
* **Newton Polynomial**: The Lagrange interpolating polynomial expressed in terms of divided differences.
* **Newton–Cotes Formula**: A family of quadrature formulas for numerical integration where the weights are the integrals of the basis Lagrange polynomials.
* **Newton's Method (Optimization)**: Uses both gradient and Hessian to find a local minimum of a function.
* **Newton’s Form**: The Lagrange interpolating polynomial written as $L_n(x) = f[x_0] + f[x_0,x_1](x - x_0) + \ldots + f[x_0,\ldots,x_n](x - x_0)(x - x_1)\ldots(x - x_{n-1})$.
* **Newton’s Interpolation**: Uses divided differences to construct interpolating polynomial incrementally.
* **Newton’s Method (Roots)**: An iteration of the form $p_{k+1} = p_k - \frac{f(p_k)}{f'(p_k)}$ to find roots of $f(x) = 0$.
* **Non-Singular Matrix**: A square matrix which is invertible, i.e., has non-zero determinant.
* **Numerical Analysis**: The field of mathematics that seeks exact or approximate solutions to mathematical problems using arithmetic operations like addition, subtraction, multiplication, and division.
* **Numerical Differentiation**: The process of estimating the derivative of a function using discrete data points.
* **Numerical Integration**: The process of approximating the definite integral of a function using numerical methods.

---

### O

* **Order of a Method**: A method is of order $p$ if the global error is $\mathcal{O}(h^p)$.
* **Order of Convergence**: If $|p_{k+1} - p| \leq c|p_k - p|^\alpha$, then $\alpha$ is the order of convergence.
* **Orthogonal Functions**: Functions $f$ and $g$ are orthogonal on $[a, b]$ if $\int_a^b f(x)g(x)dx = 0$.
* **Overflow**: Occurs when a number exceeds the maximum representable value in the floating point system.

---

### P

* **Parameter Estimation**: The process of determining optimal values $a, b, \ldots$ in the fitting function.
* **Partial Pivoting**: Technique used in Gaussian elimination to improve numerical stability by swapping rows based on the largest pivot element.
* **Permutation Matrix**: A matrix $P$ used to record row swaps in LU decomposition with pivoting: $PA = LU$.
* **Perturbed System**: A system $\tilde{A}\tilde{x} = \tilde{b}$ differing slightly from the original $Ax=b$.
* **Piecewise Polynomial**: A function composed of polynomial segments on subintervals.
* **Pivot Element**: The element $a_{kk}$ used during the $k$-th step of Gaussian elimination to eliminate variables below the diagonal.
* **Pivoting**: A technique used during LU decomposition to improve numerical stability by row swapping.
* **Polynomial Curve Fitting**: Fitting a polynomial $g(x) = a_mx^m + \ldots + a_0$ to a dataset.
* **Positive Definite Matrix**: A symmetric matrix $A$ such that $x^T A x > 0$ for all non-zero vectors $x$.
* **Power Function Fitting**: Fitting a model $y = bx^a$ to data using logarithmic transformation.
* **Principal Minor**: The determinant of a principal submatrix of $A$, used in determining definiteness of a matrix.
* **PSB Update**: The Powell–Symmetric–Broyden update formula used in quasi-Newton optimization.

---

### Q

* **Quadratic Convergence**: Convergence with order $\alpha = 2$; error squared at each step.
* **Quadrature Formula**: A formula $\sum_{k=0}^n c_k f(x_k)$ for approximating the definite integral $\int_a^b f(x) dx$.
* **Quasi Newton-Method**: An iterative method to find the roots of a function using an approximate Jacobian matrix.
* **Quasi-Newton Method (Optimization)**: Approximates the Hessian matrix to reduce computational cost.

---

### R

* **Relative Error**: The ratio of the absolute error to the true value: $\frac{|x-\tilde x|}{|x|}$. It measures the size of the error in relation to the size of the quantity being measured.
* **Residual**: The difference $g(x_i;a) - y_i$ between the model prediction and observed data.
* **Residual Vector**: Given an approximate solution $\tilde{x}$ of a linear system $Ax=b$, the residual is $r = b - A\tilde{x}$.
* **Richardson Extrapolation**: A method to improve the accuracy of a numerical approximation by combining estimates with different step sizes.
* **Root of Multiplicity m**: A root $p$ such that $f(x) = (x - p)^m q(x)$, where $q(p) \neq 0$.
* **Rounding**: A method of approximation where a number is replaced by the nearest representable value.
* **Rounding Error**: Error arising from the finite precision with which computers store real numbers. It accumulates through computations and affects the accuracy of results.
* **Runge–Kutta Method**: A family of iterative methods, including the classical fourth-order method: $z_{i+1} = z_i + \frac{h}{6}(w_1 + 2w_2 + 2w_3 + w_4)$.

---

### S

* **Search Direction**: The direction in which a new iterate is calculated during optimization.
* **Secant Method**: Root finding using $p_{k+1} = p_k - \frac{p_k - p_{k-1}}{f(p_k) - f(p_{k-1})} f(p_k)$, avoiding the derivative.
* **Simplex**: A geometric figure consisting of $n+1$ points in $n$-dimensional space.
* **Simplex Method**: An optimization technique that moves and reshapes the simplex to locate the minimum.
* **Simpson's Rule**: Approximates $\int_a^b f(x) dx$ using $\frac h3\Bigl(f(x_0)+4f(x_1)+f(x_2)\Bigr)$.
* **Simultaneous Linear System**: A sequence of linear systems where the coefficient matrices are equal, i.e., equations of the form $A x = b^{(i)},\ i=1,\ldots,m$.
* **Single Precision**: A 32-bit floating point representation conforming to IEEE 754, offering about 7 decimal digits of precision.
* **Singular Matrix**: A matrix that is not invertible, i.e., it has determinant zero.
* **Space Complexity**: The amount of memory storage needed in the worst case at any point in an algorithm.
* **Spectral Condition Number**: Defined as $\rho(A)\rho(A^{-1})$, a lower bound for $\text{cond}(A)$.
* **Spectral Radius**: Defined as $\rho(A) := \max\{ |\lambda| : \lambda \text{ is an eigenvalue of } A \}$.
* **Spline Interpolation**: Piecewise-defined polynomials that ensure smoothness at the joints of intervals, often cubic splines are used.
* **Stability**: The method is stable if small perturbations in data result in small errors.
* **Stability (of Algorithm)**: An algorithm is said to be stable if small changes in input or rounding errors do not cause large changes in the output.
* **Stability (of Mathematical Problem)**: A mathematical problem is stable (well-conditioned) if small changes in input result in small changes in the output. Otherwise, it is ill-conditioned.
* **Stationary Point**: A point $x^*$ where the gradient $f'(x^*) = 0$.
* **Steepest Descent Method**: An iterative optimization method using the negative gradient direction.
* **Step Size (h)**: The distance between two mesh points in time: $h = t_{i+1} - t_i$.
* **Stopping conditions**: Conditions like $|p_k - p_{k-1}| < \varepsilon_1$, $\frac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2$, or $|f(p_k)| < \varepsilon_3$ used to stop iteration.
* **Stopping Criteria**: Conditions like $\|x^{(k+1)} - x^{(k)}\| < \varepsilon$ to end iteration.
* **Strictly Lower Triangular Matrix**: A matrix where all diagonal and upper triangular entries are zero.
* **Sum of Squares**: The function $F(a) = \sum (g(x_i;a) - y_i)^2$ representing total squared error.

---

### T

* **Taylor's Method**: A method using higher derivatives for better accuracy. Second-order Taylor: $z_{i+1} = z_i + h f(t_i, z_i) + \frac{h^2}{2} f^{(1)}(t_i, z_i)$.
* **Taylor's polynomial**: The Taylor's polynomial of degree $n$ of a real function $f$ at $p_0$ is defined by $T_n(x)=f(p_0)+f'(p_0)(x-p_0)+\frac{f''(p_0)}2(x-p_0)^2+\cdots+\frac{f^{(n)}(p_0)}{n!}(x-p_0)^n$.
* **Taylor’s Theorem**: Provides polynomial approximation: $f(x) = T_n(x) + \frac{f^{(n+1)}(\xi)}{(n+1)!}(x - x_0)^{n+1}$.
* **Time Complexity**: A measure of the number of steps or arithmetic operations required by an algorithm.
* **Trapezoidal Rule**: Approximates $\int_a^b f(x) dx$ using $\frac{h}{2} (f(a) + f(b))$.
* **Triangle Inequality**: States that $\|x + y\| \leq \|x\| + \|y\|$ for any vectors $x$ and $y$.
* **Triangular Matrix**: A matrix where all elements above (or below) the main diagonal are zero.
* **Triangular System**: A system where the coefficient matrix is either lower or upper triangular.
* **Tridiagonal Matrix**: A matrix where non-zero entries appear only on the main diagonal and the first diagonals above and below it.
* **Truncation Error**: The error that occurs when an exact mathematical expression is replaced with an approximate formula, such as using a Taylor polynomial instead of the function.

---

### U

* **Underflow**: Occurs when a number is closer to zero than the smallest positive representable number, resulting in a stored value of zero.
* **Unequally Spaced Points**: Points for which the distance between them varies.
* **Unimodal Function**: A function that has a single minimum (or maximum) in a given interval.
* **Unit Lower Triangular Matrix**: A lower triangular matrix with 1s on the diagonal.
* **Upper Triangular Matrix**: A matrix with all entries below the main diagonal equal to zero.

---

### V

* **Vector Norm**: A function $\|x\|$ that assigns a non-negative scalar to a vector, representing its length.

---

### W

* **Well-Conditioned Matrix**: A matrix where small changes in input result in small changes in the solution of the corresponding linear system; has a small condition number.

