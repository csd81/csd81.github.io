**9.3. Fitting a nonlinear function** 



## 1. Background of the problem: Nonlinear normal equations

The method of least squares can be easily applied to curve fitting tasks where the unknown parameters appear linearly in the formula (as in the case of line or polynomial fitting), because then the Gauss normal equations obtained from the partial derivatives form a well-manageable linear system of equations.

However, if the parameters appear nonlinearly, the situation changes drastically. Consider fitting an exponential function of the form $y = b e^{ax}$ to the data points $(x_i, y_i)$. The squared error function to be minimized is:


$$F(a, b) = \sum_{i=0}^{n} (b e^{ax_i} - y_i)^2$$

If we differentiate this function partially with respect to the parameters $a$ and $b$ to be determined, we obtain the following system of critical equations:


$$\begin{aligned} 2\sum_{i=0}^{n} (b e^{ax_i} - y_i) b e^{ax_i} x_i &= 0 \\ 2\sum_{i=0}^{n} (b e^{ax_i} - y_i) e^{ax_i} &= 0 \end{aligned}$$

* **The problem:** This system is **nonlinear**, thus it cannot be solved analytically (with a formula). The number of solutions is not easily visible either, and its pure numerical solution (e.g. with the multivariable Newton method) would be complicated and computationally demanding.



## 2. The method of linearization

For certain special types of nonlinear functions, the above technical difficulty can be completely eliminated by a clever mathematical trick, **linearization**. The essence of the method is that by taking the logarithm or algebraic transformation of both sides of the nonlinear relationship, we switch to a new pair of variables between which there is already a **linear relationship**.

The chapter presents two prominent nonlinear models:

### A) Exponential model: $y = b e^{ax}$

Let's take the natural logarithm of both sides:


$$\ln y = \ln(b e^{ax}) \implies \ln y = \ln b + ax$$


Let's introduce the new transformed variables and parameters:


$$X := x, \qquad Y := \ln y, \qquad A := a, \qquad B := \ln b$$


Thereby the task is simplified to a classical linear line fitting for the transformed data points $(X_i, Y_i) = (x_i, \ln y_i)$:


$$Y = AX + B$$

### B) Power function model: $y = b x^a$

Assuming that $x > 0$, let's take the logarithm of both sides:


$$\ln y = \ln(b x^a) \implies \ln y = a \ln x + \ln b$$


The definition of the new variables in this case:


$$X := \ln x, \qquad Y := \ln y, \qquad A := a, \qquad B := \ln b$$


Thus the well-known line $Y = AX + B$ can be fitted to the grid points $(\ln x_i, \ln y_i)$.



## 3. Practical calculation and return to the original parameters

After setting up and solving the $2 \times 2$ Gaussian linear system of normal equations for the transformed points, we get the values of $A$ and $B$. The parameters of the originally sought function are obtained back by the inverse transformation:


$$a = A \qquad \text{and} \qquad b = e^B \tag{9.5}$$



## 4. Sample example: Fitting a power function (Example 9.5)

The notes present the procedure in detail on a dataset consisting of 5 points ($n=4$) for the model $y = bx^a$:

* The logarithms of the base points and measurements ($\ln x_i, \ln y_i$), as well as the column sums required for the normal equation are calculated.
* Substituting the obtained sums, the linear system is:

$$\begin{aligned} 2.691393A + 1.727221B &= 2.032673 \\ 1.727221A + 5B &= 1.783485 \end{aligned}$$


* The solution of the system: $A = 0.676257$, $B = 0.123088$.
* Return to the original coefficients: $a = 0.676257$ and $b = e^{0.123088} = 1.130984$.
* The equation of the optimal nonlinear curve obtained is:

$$y = 1.130984 \cdot x^{0.676257}$$





## 5. Critical note on errors (The distortion of the method)

The most important theoretical lesson of the chapter is that the linearized fitting **is not mathematically completely equivalent to the direct minimization of the original nonlinear problem**.

* By taking the logarithm, we are not actually minimizing the deviations of the original dependent variable $y_i - g(x_i)$, but rather the logarithmic distances **$\ln y_i - \ln g(x_i)$**. Due to the properties of the logarithmic function, this re-evaluates (distorts) the weight of the errors in different ranges.
* In the sample example, the squared error measured in the linearized space is extremely small ($0.007279$), but if we substitute the obtained curve back into the untransformed, original error function, the squared error is already larger there ($0.019616$).

> **Summary:** Linearization is an extremely fast, elegant and well-programmable engineering tool, because it eliminates the solving of nonlinear systems of equations. When applying it, however, one must keep in mind that the obtained parameters provide only a very good approximation, but do not necessarily match the absolute (global) minimum point of the original problem.
