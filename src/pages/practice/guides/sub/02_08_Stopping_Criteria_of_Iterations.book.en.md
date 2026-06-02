## 2.8. Stopping Criteria of Iterations

In this chapter the numerical methods we discussed generate an infinite sequence $p_k$ to find a root of the function $f$, and the limit $p$ of the sequence is the exact value of the root. We approximate the limit of the sequence $p$ by a term of the sequence $p_k$, where $k$ is "large enough". So the question is how we determine the number of steps $k$ for which $p_k$ gives us a good approximation of $p$. Here we introduce three popular strategies. We predefine three tolerances $\varepsilon_1 > 0$, $\varepsilon_2 > 0$ and $\varepsilon_3 > 0$. We consider the $k$th term $p_k$ as an appropriate approximation of $p$ if

$$\text{(i)}\ |p_k - p_{k-1}| < \varepsilon_1, \quad \text{(ii)}\ \frac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2, \quad \text{or}\quad \text{(iii)}\ |f(p_k)| < \varepsilon_3. \tag{2.24}$$

Condition (i) is a numerical analogue of the absolute error $|p_k - p|$ of the approximation. It assumes that if a new term of the sequence is closer to the previous one than the tolerance, then it is because both terms are already close to the limit. So we terminate the generation of the sequence.

Condition (ii) is the numerical analogue of the relative error $|p_k - p|/|p|$ of the approximation. As in the previous case, we examine the distance between consecutive terms but we take into account the order of magnitude of the terms.

Condition (iii) tests whether the function value at $p_k$ is close to 0. If it is satisfied, we assume that it is because the term is close to a root of $f$, and we terminate the sequence.

In a computer code it is always recommended to count the number of iteration and stop computing the sequence if it is too large, i.e., larger than a predefined maximal iteration number. This way we avoid a possible infinite loop of the program, and also, we do not allow a convergence which is too slow.

The first two conditions can be applied for any iteration, but the third one is formulated for the problem of finding a root of a single variable function $f$. We remark that for other type of problems it is likely that we can formulate a similar condition which tests how well the approximate solution satisfies the investigated mathematical problem (see, e.g., Section 4.4 below).

We remark that the above reasoning is heuristic. We can find examples when a stopping condition (i), (ii) or (iii) in (2.24) holds, but the $k$th term of the sequence is not close to a root. Therefore, in practice, we usually use combination of stopping criteria.

### Exercises

1. Suppose an iteration method generates the sequence $p_k = \sum_{i=1}^k \tfrac{1}{i}$, and suppose we use only the stopping criterion (i) defined in (2.24). What do we observe? Does the sequence converge? What do we get if we use stopping criterion (ii)?
2. Let $f(x) = x^8$, and suppose an iteration generates $p_k = 1/k$ to approximate the root of $f$. Suppose we use stopping condition (i) in (2.24) with $\varepsilon_1 = 10^{-8}$. What do we get as an approximate root? What do we get if we use only stopping condition (ii), and what if we use only condition (iii) with tolerances $\varepsilon_2 = 10^{-8}$ or $\varepsilon_3 = 10^{-8}$, respectively?

