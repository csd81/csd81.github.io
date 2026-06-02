## 2.2 Stopping Criteria of Iterations

Suppose the sequence $p_k$ tends to the limit $p$. We approximate the limit $p$ by a term of the sequence $p_k$, where $k$ is "large enough". Question: how to determine the number of steps $k$ for which $p_k$ gives us a good approximation of $p$, where $f(p) = 0$.

We predefine three tolerances $\varepsilon_1 > 0$, $\varepsilon_2 > 0$ and $\varepsilon_3 > 0$. We consider the $k$th term $p_k$ as an appropriate approximation of $p$ if

(i) $|p_k - p_{k-1}| < \varepsilon_1$, &nbsp;&nbsp; (ii) $\dfrac{|p_k - p_{k-1}|}{|p_k|} < \varepsilon_2$, &nbsp;&nbsp; or &nbsp;&nbsp; (iii) $|f(p_k)| < \varepsilon_3$.

Condition (i) is a numerical analogue of the absolute error $|p_k - p|$ of the approximation.
Condition (ii) is the numerical analogue of the relative error $|p_k - p|/|p|$ of the approximation.
Condition (iii) tests whether the function value at $p_k$ is close to 0.

### Example

Consider the sequence

$$p_k = 1 + \tfrac{1}{2} + \cdots + \tfrac{1}{k}.$$

We have $|p_k - p_{k-1}| = \tfrac{1}{k}$, so condition (i) holds if $k$ is large enough. On the other hand, $p_k \to \infty$ as $k \to \infty$.
Similarly,

$$\frac{|p_k - p_{k-1}|}{|p_k|} = \frac{1/k}{1 + \tfrac{1}{2} + \cdots + \tfrac{1}{k}} \leq \frac{1}{k} \to 0, \quad \text{as } k \to \infty,$$

so condition (ii) holds for large $k$, but the sequence is not convergent.

### Example

Consider a function whose graph has a small "valley" where $|f(p_k)|$ is small but $p_k$ is not close to the root $p$. Here condition (iii) holds, but $p_k$ is not close to the root.

In practice we use a *combination* of stopping criteria.

---

