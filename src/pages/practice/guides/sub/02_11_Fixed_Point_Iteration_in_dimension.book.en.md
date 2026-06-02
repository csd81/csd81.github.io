## 2.11. Fixed-Point Iteration in $n$-dimension

We can generalize the notion of the fixed point and the fixed-point iteration for multivariable functions.

**Example 2.51.** Consider the system

$$\begin{aligned}
4x_1 - e^{x_1 x_2} - 3 &= 0 \\
x_1 - x_2^2 - 3x_2 - 1 &= 0.
\end{aligned} \tag{2.26}$$

It is easy to check that $x_1 = 1$ and $x_2 = 0$ is a solution of the system. We rearrange (2.26) in the following way. We express $x_1$ from the first, and $x_2$ from the second equation:

$$\begin{aligned}
x_1 &= \tfrac{1}{4}(e^{x_1 x_2} + 3) \\
x_2 &= \tfrac{1}{3}(x_1 - x_2^2 - 1).
\end{aligned} \tag{2.27}$$

We can denote system (2.27) shortly as $\mathbf{x} = \mathbf{g}(\mathbf{x})$, where $\mathbf{x} = (x_1, x_2)^T$ and

$$\mathbf{g}(\mathbf{x}) = \mathbf{g}(x_1, x_2) = \begin{pmatrix} \tfrac{1}{4}(e^{x_1 x_2} + 3) \\ \tfrac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}. \tag{2.28}$$

We define an iteration to approximate the solutions of (2.27) as in the single variable case for $k = 0, 1, 2, \ldots$ by

$$\begin{aligned}
p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)} p_2^{(k)}} + 3) \\
p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)} - (p_2^{(k)})^2 - 1\right).
\end{aligned} \tag{2.29}$$

We have listed the first several terms of the sequences $p_1^{(k)}$ and $p_2^{(k)}$ starting from the initial value $p_1^{(0)} = -2$ and $p_2^{(0)} = -2$ in Table 2.12. We can observe that the sequences converge to 1 and 0, respectively. $\square$

Table 2.12: Fixed-point iteration

| $k$ | $p_1^{(k)}$ | $p_2^{(k)}$ |
|---|---|---|
| 0  | -2.000000000 | -2.000000000 |
| 1  | 14.399537510 | -2.333333333 |
| 2  |  0.750000000 |  2.651697960 |
| 3  |  2.576641266 | -2.427166879 |
| 4  |  0.750480717 | -1.438165931 |
| 5  |  0.834956989 | -0.772613509 |
| 6  |  0.881152644 | -0.253991549 |
| 7  |  0.949867689 | -0.061119687 |
| 8  |  0.985899367 | -0.017955976 |
| 9  |  0.995613247 | -0.004807684 |
| 10 |  0.998806211 | -0.001469956 |
| 11 |  0.999633219 | -0.000398650 |
| 12 |  0.999900394 | -0.000122313 |

Defining the vector sequence $\mathbf{p}^{(k)} = (p_1^{(k)}, p_2^{(k)})^T$, iteration (2.29) can be written shortly as $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$. $\square$

Let $E \subset \mathbb{R}^n$, and consider a function $\mathbf{g}\colon E \to \mathbb{R}^n$. Similarly to the single variable case, we say that a vector $\mathbf{p} \in E$ is a *fixed point* of the function $\mathbf{g}$ if $\mathbf{p} = \mathbf{g}(\mathbf{p})$.

A function $\mathbf{g}\colon E \to \mathbb{R}^n$ is called a *contraction* on the set $E$ using the vector norm $\|\cdot\|$ if there exists a constant $0 \leq c < 1$ such that $\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq c\|\mathbf{x} - \mathbf{y}\|$ for all $\mathbf{x}, \mathbf{y} \in E$. Note that a contraction is always a continuous function.

**Theorem 2.52 (fixed-point theorem).** *Let $E \subset \mathbb{R}^n$ be a closed set, $\mathbf{g}\colon E \to E$, and let $\mathbf{g}$ be a contraction on $E$ using a vector norm $\|\cdot\|$. Then $\mathbf{g}$ has a unique fixed point $\mathbf{p} \in E$, and the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges to $\mathbf{p}$ for all $\mathbf{p}^{(0)} \in E$. The order of convergence is (at least) linear.*

**Proof.** First we show that $\mathbf{p}^{(k)}$ is a Cauchy sequence. Let $c$ be the Lipschitz constant of the function $\mathbf{g}$, and let $k > m$. Similarly to the single variable case, the definition of the sequence and the contraction property yield

$$\begin{aligned}
\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| &\leq \|\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)}\| + \|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \cdots + \|\mathbf{p}^{(m+1)} - \mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)}) - \mathbf{g}(\mathbf{p}^{(k-2)})\| + \|\mathbf{g}(\mathbf{p}^{(k-2)}) - \mathbf{g}(\mathbf{p}^{(k-3)})\| \\
&\quad + \cdots + \|\mathbf{g}(\mathbf{p}^{(m)}) - \mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c(\|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \|\mathbf{p}^{(k-2)} - \mathbf{p}^{(k-3)}\| + \cdots + \|\mathbf{p}^{(m)} - \mathbf{p}^{(m-1)}\|) \\
&\leq (c^{k-1} + c^{k-2} + \cdots + c^m)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1} + c^{k-m-2} + \cdots + 1)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&\leq c^m \sum_{i=0}^\infty c^i \|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\|.
\end{aligned}$$

Therefore we get $\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| \to 0$ as $m \to \infty$, hence $\mathbf{p}^{(k)}$ is a Cauchy sequence. Part (v) of Theorem 2.49 implies that $\mathbf{p}^{(k)}$ converges to a vector $\mathbf{p}$. Using the continuity of $\mathbf{g}$ we get $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)}) \to \mathbf{g}(\mathbf{p})$, and so $\mathbf{p} = \mathbf{g}(\mathbf{p})$, i.e., $\mathbf{p}$ is a fixed-point of $\mathbf{g}$.

The order of convergence is at least linear, since

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\| = \|\mathbf{g}(\mathbf{p}^{(k)}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|.$$

Suppose that $\mathbf{p}$ and $\bar{\mathbf{p}}$ both are fixed points of $\mathbf{g}$. Using the contraction property of $\mathbf{g}$ we have $\|\mathbf{p} - \bar{\mathbf{p}}\| = \|\mathbf{g}(\mathbf{p}) - \mathbf{g}(\bar{\mathbf{p}})\| \leq c\|\mathbf{p} - \bar{\mathbf{p}}\|$, and therefore, $\mathbf{p} = \bar{\mathbf{p}}$ follows. $\square$

**Theorem 2.53.** *Let $E \subset \mathbb{R}^n$ be an open set, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^1$, and let $\mathbf{p}$ be a fixed point of $\mathbf{g}$. If $\|\mathbf{g}'(\mathbf{p})\| < 1$ in a matrix norm generated by a vector norm $\|\cdot\|$, then the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges locally to $\mathbf{p}$.*

**Proof.** Since $E$ is an open set, there exists a radius $\bar{\delta} > 0$ such that $\{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| < \bar{\delta}\} \subset E$. Fix a $c$ such that $\|\mathbf{g}'(\mathbf{p})\| < c < 1$. The function $\mathbf{g}'$ is continuous at $\mathbf{p}$, therefore there exists $0 < \delta \leq \bar{\delta}$ such that $\|\mathbf{g}'(\mathbf{x})\| \leq c$ for all $\mathbf{x} \in V := \{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| \leq \delta\}$. The Lagrange's Mean Value Theorem (Theorem 2.50) yields

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq \max_{t \in (0,1)} \|\mathbf{g}'(\mathbf{x} + t(\mathbf{y} - \mathbf{x}))\| \cdot \|\mathbf{x} - \mathbf{y}\| \leq c\|\mathbf{x} - \mathbf{y}\|,$$

i.e., $\mathbf{g}$ is a contraction.

Now we show that the function $\mathbf{g}$ maps the set $V$ into itself. Let $\mathbf{x} \in V$. The contraction property of $\mathbf{g}$ implies $\|\mathbf{g}(\mathbf{x}) - \mathbf{p}\| = \|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{x} - \mathbf{p}\| < \delta$, hence $\mathbf{g}(\mathbf{x}) \in V$. If we restrict $\mathbf{g}$ to the set $V$, then this function satisfies the conditions of Theorem 2.52, therefore any fixed-point iteration with initial value from $V$ converges to $\mathbf{p}$. $\square$

**Example 2.54.** Compute the Jacobian matrix of the function $\mathbf{g}$ defined by (2.28) in Example 2.51:

$$\mathbf{g}'(\mathbf{x}) = \begin{pmatrix} \tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4}x_1 e^{x_1 x_2} \\ \tfrac{1}{3} & -\tfrac{2}{3}x_2 \end{pmatrix}.$$

Its value at the fixed point of $\mathbf{g}$, i.e., at the point $(1, 0)^T$ is

$$\mathbf{g}'(1, 0) = \begin{pmatrix} 0 & \tfrac{1}{4} \\ \tfrac{1}{3} & 0 \end{pmatrix}.$$

Its 1-norm is $\|\mathbf{g}'(1, 0)\|_1 = \tfrac{1}{3} < 1$, hence Theorem 2.53 yields that the fixed-point iteration converges locally to $(1, 0)^T$. $\square$

**Theorem 2.55.** *Let $E \subset \mathbb{R}^n$, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^2$, $\mathbf{g}(\mathbf{p}) = \mathbf{p}$, and $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$. Then there exists a $\delta > 0$ such that the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges to $\mathbf{p}$ if $\|\mathbf{p}^{(0)} - \mathbf{p}\|_\infty < \delta$. Moreover, there exists a constant $c$ such that for all $k$ it follows $\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2$, i.e., the iteration converges locally quadratically to $\mathbf{p}$.*

**Proof.** By the assumptions, $0 = \|\mathbf{g}'(\mathbf{p})\| < 1$, therefore, Theorem 2.53 yields that the fixed-point iteration is locally convergent.

Now we show that the order of convergence is quadratic. Consider the second-order Taylor approximation of the $i$th component function of $\mathbf{g}$ around $\mathbf{p} = (p_1, \ldots, p_n)^T$:

$$\begin{aligned}
g_i(x_1, \ldots, x_n) &= g_i(p_1, \ldots, p_n) + \sum_{j=1}^n \frac{\partial g_i(p_1, \ldots, p_n)}{\partial x_j}(x_j - p_j) \\
&\quad + \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(x_j - p_j)(x_l - p_l).
\end{aligned}$$

Applying this relation for $(x_1, \ldots, x_n)^T = (p_1^{(k)}, \ldots, p_n^{(k)})^T$, and using that $p_i = g_i(\mathbf{p})$ and $p_i^{(k+1)} = g_i(\mathbf{p}^{(k)})$, we get

$$p_i^{(k+1)} - p_i = \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(p_j^{(k)} - p_j)(p_l^{(k)} - p_l).$$

Let $M$ be such that $\left|\dfrac{\partial^2 g_i(x_1, \ldots, x_n)}{\partial x_j \partial x_l}\right| \leq M$ for all $i, j, l = 1, \ldots, n$ in a neighborhood of $\mathbf{p}$ which contains all $\mathbf{p}^{(k)}$. The definition of $M$ implies

$$|p_i^{(k+1)} - p_i| \leq \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n M |p_j^{(k)} - p_j||p_l^{(k)} - p_l| \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2.$$

Since this holds for all $i = 1, \ldots, n$, we get

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2,$$

i.e., the order of convergence is quadratic. $\square$

### Exercises

1. Rewrite the following system as a fixed-point problem, and find an approximate solution by using the fixed-point iteration from the starting value $(0, 0)^T$:
   - (a) $\begin{aligned} -2x^2 + 6x - y &= 4 \\ x^2 + y^3 - 5y &= 3 \end{aligned}$
   - (b) $\begin{aligned} 8x + \cos x - y^3 &= -7 \\ x^2 + 4y &= 8 \end{aligned}$
   - (c) $\begin{aligned} x^2 + 7x + y^2 - 4y &= 3 \\ 2x + y^3 + 4y &= -5 \end{aligned}$
   - (d) $\begin{aligned} \cos x - 5y &= 3 \\ x^2 - 6x + y^2 - 2y &= 4 \end{aligned}$
2. Compute the Jacobian matrix of the fixed-point functions we get in the problem mentioned above, and evaluate the norm of the Jacobian matrix at the fixed point obtained numerically.
3. Show that under the conditions of Theorem 2.55, the sequence $\mathbf{p}^{(k)}$ converges locally quadratically in any vector norm.

