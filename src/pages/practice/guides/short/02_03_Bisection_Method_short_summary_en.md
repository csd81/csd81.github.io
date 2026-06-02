**2.3. Bisection Method** 

## 1. Goal and Basic Principle of the Method

The bisection method is one of the simplest and most robust algorithms for the numerical solution of nonlinear equations of the form $f(x)=0$.

The method is based on the **Bolzano–Darboux theorem** (Intermediate Value Theorem), which states:

> If the function $f$ is continuous on a closed interval $[a,b]$ ($f \in C[a,b]$), and its signs at the endpoints of the interval are opposite (i.e., $f(a)f(b) < 0$), then the function has at least one root inside the interval $[a,b]$.



## 2. Operation of the Algorithm (Recursion)

The method halves the interval containing the root step by step:

1. **Initialization:** We designate the initial interval: $[a_0, b_0] = [a, b]$.
2. **Bisection:** We calculate the midpoint (bisecting point) of the interval: $p_0 = \frac{a_0 + b_0}{2}$.
3. **Examination:** 
   * If $f(p_0) = 0$, then we have found the exact root, and the algorithm stops.
   * If $f(p_0) \neq 0$, then we check in which subinterval the signs of the function at the endpoints are opposite.
4. **Narrowing:** If there is a sign change on the interval $[a_0, p_0]$, then this will be the new interval in the next step ($[a_1, b_1] = [a_0, p_0]$); otherwise, the right half will be the new interval ($[a_1, b_1] = [p_0, b_0]$).

By repeating this procedure, we obtain a sequence of nested closed intervals, each containing the root. Since the length of the intervals is halved in each step ($\frac{b-a}{2^k}$), their length approaches zero, so the sequence of endpoints and midpoints $p_k$ also converges to the actual root $p$.



## 3. Error Estimation and the Required Number of Steps (Theorem 2.16)

One of the biggest advantages of the method is that its error can be precisely estimated in advance, without knowing the function.

* **Error bound formula:** The distance of the approximation $p_k$ obtained in the $k$-th step from the actual root $p$ can be at most half the length of the current interval:

$$|p_k - p| \leq \frac{b - a}{2^{k+1}}$$

* **Required number of steps:** If we want to achieve a pre-specified error bound (tolerance) $\varepsilon > 0$, the necessary number of iterations $k$ can be calculated using the following logarithmic relationship:

$$k \geq \log_2 \left(\frac{b - a}{\varepsilon}\right) - 1$$



## 4. Important Notes and Limitations

* **Monotonicity:** If the function is strictly monotonic on the given interval (like the function $f(x)=e^x-2\cos x$ in the example), then there is **exactly one** root in the interval.
* **The mandatory condition of continuity:** The critical condition for the operation of the method is the continuity of the function $f$. If the function is not continuous on the interval (for example, it has a discontinuity at the point $x=0$, like the function $f(x)=\frac{1}{x}$), the algorithm will incorrectly converge to a point of discontinuity instead of an actual root.
