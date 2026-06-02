**2.8. Stopping Criteria of Iteration Methods** (*Numerical Stopping Criteria and Iteration Stability*)

## 1. Background of the Problem

Numerical iteration methods generate an infinite sequence $p_k$, which (ideally) converges to the sought exact solution $p$ (the root, i.e., the point $f(p) = 0$). Since we cannot compute to infinity, in practice we have to determine a sufficiently large number of steps $k$ where we stop the generation of the sequence, and we accept the term $p_k$ as a good approximation.

To stop, we use pre-specified, small positive tolerance values ($\varepsilon_1, \varepsilon_2, \varepsilon_3 > 0$).



## 2. The Three Most Common Stopping Criteria

In practice, we can decide to stop according to the following three basic strategies:

### 1. Absolute Change Criterion

* **Formula:** $|p_k - p_{k-1}| < \varepsilon_1$
* **Underlying principle:** This is the numerical equivalent of the actual absolute error ($|p_k - p|$). It is based on the heuristic assumption that if the difference between two consecutive terms is very small, it is because both values are already close to the final limit.

### 2. Relative Change Criterion

* **Formula:** $\dfrac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2$
* **Underlying principle:** This is the numerical approximation of the actual relative error ($|p_k - p| / |p|$). Similarly to the first one, it measures the distance between the terms from each other, but when examining the difference, it also takes the magnitude of the terms into account.

### 3. Function Value Criterion

* **Formula:** $|f(p_k)| < \varepsilon_3$
* **Underlying principle:** It specifically applies to root-finding problems of the form $f(x)=0$. If the function value at the point $p_k$ is close to zero, we assume that the point is close to the actual root of the function.



## 3. Pitfalls of the Criteria and Practical Solution

For each criterion, a mathematical counterexample (trap) can be given, when the criterion is met, but the obtained result is still not a good approximation of the root:

* **Error of the 1st and 2nd criteria:** The criteria can also be met for sequences that seem convergent but are actually divergent (e.g., the harmonic series tending to infinity), if the difference between the terms decreases slowly enough.
* **Error of the 3rd criterion:** For a very flat function (or a local "valley"), the function value can become extremely small without the point actually being close to the actual root of the function.

> **Practical solution:** Since no single criterion is perfect on its own, in practice, a **combination** of these stopping criteria is applied to filter out errors.



## 4. Incorporating a Maximum Number of Steps

A **maximum number of iteration steps** must obligatorily be incorporated into every numerical algorithm. If the program exceeds this limit, the execution must also be stopped. This safety element prevents:

* Entering an infinite loop (if the sequence is divergent).
* Too slow, uneconomical convergence.
