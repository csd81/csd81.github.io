**2.4. Method of False Position** (*Regula Falsi*)

## 1. Basic Idea and Motivation of the Method

* **Why is it needed?** A major shortcoming of the bisection method is that when determining the next approximation point, it does not take the shape of the function into account at all (it always rigidly chooses the midpoint).
* **Principle of the method of false position:** The initial conditions are the same (let $f \in C[a,b]$ and $f(a)f(b) < 0$). However, the new division point $p_k$ is defined not as the midpoint of the interval, but as the **intersection of the chord (secant line) connecting the points $(a_k, f(a_k))$ and $(b_k, f(b_k))$ and the $x$-axis**.

Calculating from the equation of the secant line, the formula for the new approximation point is:


$$p_k = a_k - f(a_k)\frac{a_k - b_k}{f(a_k) - f(b_k)}$$

For the next interval $[a_{k+1}, b_{k+1}]$, we again choose the part between $[a_k, p_k]$ and $[p_k, b_k]$ where the function changes sign.

> **Implementation note:** When programming, to avoid division by zero, it must always be checked whether $f(a_k) \neq f(b_k)$ holds.



## 2. Convergence in the Convex/Concave Case (Theorem 2.19)

The convergence of the method of false position is generally more complicated to prove, but there is an easily manageable, important special case:

* **Theorem:** If $f \in C[a,b]$ is continuous, $f(a)f(b) < 0$, and the function is **strictly convex or concave** on the interval $[a,b]$, then the method of false position is guaranteed to converge to the unique root $p$ of the function $f$.
* **Mechanism of the proof (example):** If $f$ is convex, $f(a) > 0$ and $f(b) < 0$, then due to the geometric properties of the chord, the root always falls into the left subinterval. Because of this, one endpoint of the interval remains fixed ($a_{k+1} = a$), while the other endpoint strictly monotonically closes in on the actual root according to the points $p_k$ ($b_{k+1} = p_k$).



## 3. Speed of the Method of False Position: When is it Fast and When is it Slow?

The chapter demonstrates through two detailed numerical examples how the shape of the function and the choice of the initial interval radically influence the speed for the equation $f(x) = e^x - 2\cos x = 0$:

### A) The "Lucky" Case: Interval $[0,1]$ (Example 2.20)

* **Experience:** With a tolerance of $TOL = 10^{-5}$, the method of false position reached the desired accuracy in just **8 steps**.
* **Comparison:** On the same interval, the bisection method required 16 steps. Since the shape of the function was favorable, the secant line "guided" the points towards the root much faster than blind bisection.

### B) The "Trap" Case: Interval $[0,4]$ (Example 2.21)

* **Experience:** If we increase the interval to $[0,4]$, the method of false position collapses spectacularly: even after **51 steps**, it does not reach the desired accuracy (the function value is still only of the order of $10^{-4}$).
* **Comparison:** The bisection method requires only **18 steps** even on this larger interval.
* **What is the cause of the slowdown?** The function $e^x - 2\cos x$ rises extremely fast around $4$ due to the exponential term ($f(4) \approx 54$). The chord connecting the points $(0, -1)$ and $(4, 54)$ will therefore be very steep, and it will intersect the $x$-axis almost completely next to the left endpoint ($0$). The method gets stuck, and in every step, it only moves a negligibly small amount closer to the root.



## 4. Summary Lesson

The method of false position is **not necessarily faster** than the bisection method. If the function value at one endpoint of the initial interval is disproportionately huge compared to the other, the convergence of the method of false position can slow down extremely. In contrast, the bisection method is slower, but its number of steps is completely predictable and immune to the asymmetry of the function.
