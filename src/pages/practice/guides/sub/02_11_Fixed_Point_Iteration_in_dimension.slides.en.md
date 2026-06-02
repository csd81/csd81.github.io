## 2.10 Fixed-Point Iteration in $n$ dimensions

### Example

Consider the system

$$\begin{aligned}
4x_1 - e^{x_1 x_2} - 3 &= 0 \\
x_1 - x_2^2 - 3x_2 - 1 &= 0.
\end{aligned} \tag{18}$$

It is easy to check that $x_1 = 1$ and $x_2 = 0$ is a solution of the system. We rearrange (18) in the following way. We express

$$\begin{aligned}
x_1 &= \tfrac{1}{4}(e^{x_1 x_2} + 3) \\
x_2 &= \tfrac{1}{3}(x_1 - x_2^2 - 1).
\end{aligned} \tag{19}$$

We can denote the system shorty as $\mathbf{x} = \mathbf{g}(\mathbf{x})$, where $\mathbf{x} = (x_1, x_2)^T$ and

$$\mathbf{g}(\mathbf{x}) = \mathbf{g}(x_1, x_2) = \begin{pmatrix} \tfrac{1}{4}(e^{x_1 x_2} + 3) \\ \tfrac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}. \tag{20}$$

### Example cont.

We define an iteration to approximate the solutions of (19) as in the single variable case for $k = 0, 1, 2, \ldots$ by

$$\begin{aligned}
p_1^{(k+1)} &= \tfrac{1}{4}(e^{p_1^{(k)} p_2^{(k)}} + 3) \\
p_2^{(k+1)} &= \tfrac{1}{3}\left(p_1^{(k)} - (p_2^{(k)})^2 - 1\right).
\end{aligned} \tag{21}$$

Defining the vector sequence

$$\mathbf{p}^{(k)} = (p_1^{(k)}, p_2^{(k)})^T,$$

iteration (21) can be written shortly as

$$\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)}).$$

Fixed-point iteration

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
| 10 |  0.998086211 | -0.001469956 |
| 11 |  0.999633219 | -0.000398650 |
| 12 |  0.999900394 | -0.000122313 |

Let $E \subset \mathbb{R}^n$, and consider a function $\mathbf{g}\colon E \to \mathbb{R}^n$. We say that a vector $\mathbf{p} \in E$ is a **fixed point** of the function $\mathbf{g}$ if

$$\mathbf{p} = \mathbf{g}(\mathbf{p}).$$

A function $\mathbf{g}\colon E \to \mathbb{R}^n$ is called a **contraction** on the set $E$ using the vector norm $\|\cdot\|$ if there exists a constant $0 \leq c < 1$ such that

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq c\|\mathbf{x} - \mathbf{y}\|$$

for all $\mathbf{x}, \mathbf{y} \in E$.

### Theorem (fixed-point theorem)

Let $E \subset \mathbb{R}^n$ be a closed set, $\mathbf{g}\colon E \to E$, and let $\mathbf{g}$ be a contraction on $E$ using a vector norm $\|\cdot\|$. Then $\mathbf{g}$ has a unique fixed point $\mathbf{p} \in E$, and the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ converges to $\mathbf{p}$ for all $\mathbf{p}^{(0)} \in E$. The order of convergence is (at least) linear.

**Proof.** First we show that $\mathbf{p}^{(k)}$ is a Cauchy sequence. Let $c$ be the Lipschitz constant of the function $\mathbf{g}$, and let $k > m$.

$$\begin{aligned}
&\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| \\
&= \|\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)} + \mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)} + \cdots + \mathbf{p}^{(m+1)} - \mathbf{p}^{(m)}\| \\
&\leq \|\mathbf{p}^{(k)} - \mathbf{p}^{(k-1)}\| + \|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \cdots + \|\mathbf{p}^{(m+1)} - \mathbf{p}^{(m)}\| \\
&= \|\mathbf{g}(\mathbf{p}^{(k-1)}) - \mathbf{g}(\mathbf{p}^{(k-2)})\| + \|\mathbf{g}(\mathbf{p}^{(k-2)}) - \mathbf{g}(\mathbf{p}^{(k-3)})\| \\
&\quad + \cdots + \|\mathbf{g}(\mathbf{p}^{(m)}) - \mathbf{g}(\mathbf{p}^{(m-1)})\| \\
&\leq c\bigl(\|\mathbf{p}^{(k-1)} - \mathbf{p}^{(k-2)}\| + \|\mathbf{p}^{(k-2)} - \mathbf{p}^{(k-3)}\| + \cdots + \|\mathbf{p}^{(m)} - \mathbf{p}^{(m-1)}\|\bigr) \\
&\leq (c^{k-1} + c^{k-2} + \cdots + c^m)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&= c^m(c^{k-m-1} + c^{k-m-2} + \cdots + 1)\|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\| \\
&\leq c^m \sum_{i=0}^\infty c^i \|\mathbf{p}^{(1)} - \mathbf{p}^{(0)}\|.
\end{aligned}$$

**Proof cont.** Therefore we get

$$\|\mathbf{p}^{(k)} - \mathbf{p}^{(m)}\| \to 0 \qquad \text{as } m \to \infty,$$

hence $\mathbf{p}^{(k)}$ is a Cauchy sequence. We get that $\mathbf{p}^{(k)}$ converges to a vector $\mathbf{p}$. Using the continuity of $\mathbf{g}$ we get

$$\begin{array}{ccc} \mathbf{p}^{(k+1)} & = & \mathbf{g}(\mathbf{p}^{(k)}) \\ \downarrow & & \downarrow \\ \mathbf{p} & = & \mathbf{g}(\mathbf{p}) \end{array}$$

i.e., $\mathbf{p}$ is a fixed-point of $\mathbf{g}$. The order of convergence is at least linear, since

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\| = \|\mathbf{g}(\mathbf{p}^{(k)}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|.$$

**Proof cont.** Suppose that $\mathbf{p}$ and $\bar{\mathbf{p}}$ are both fixed points of $\mathbf{g}$. Using the contraction property of $\mathbf{g}$ we have

$$\|\mathbf{p} - \bar{\mathbf{p}}\| = \|\mathbf{g}(\mathbf{p}) - \mathbf{g}(\bar{\mathbf{p}})\| \leq c\|\mathbf{p} - \bar{\mathbf{p}}\|,$$

and therefore $\mathbf{p} = \bar{\mathbf{p}}$ follows.

### Theorem

Let $E \subset \mathbb{R}^n$ be an open set, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^1$, and let $\mathbf{p}$ be a fixed point of $\mathbf{g}$. If

$$\|\mathbf{g}'(\mathbf{p})\| < 1$$

in a matrix norm generated by a vector norm $\|\cdot\|$, then the fixed-point iteration $\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$ locally converges to $\mathbf{p}$.

**Proof.** Since $E$ is an open set, there exists a radius $\bar{\delta} > 0$ such that

$$\{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| < \bar{\delta}\} \subset E.$$

Fix a $c$ such that

$$\|\mathbf{g}'(\mathbf{p})\| < c < 1.$$

The function $\mathbf{g}'$ is continuous at $\mathbf{p}$, therefore there exists $0 < \delta \leq \bar{\delta}$ such that

$$\|\mathbf{g}'(\mathbf{x})\| \leq c \qquad \text{for all } \mathbf{x} \in V := \{\mathbf{x}\colon \|\mathbf{x} - \mathbf{p}\| \leq \delta\}.$$

The Lagrange's Mean Value Theorem yields

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{y})\| \leq \max_{t \in (0,1)}\|\mathbf{g}'(\mathbf{x} + t(\mathbf{y} - \mathbf{x}))\| \cdot \|\mathbf{x} - \mathbf{y}\| \leq c\|\mathbf{x} - \mathbf{y}\|,$$

i.e., $\mathbf{g}$ is a contraction.

**Proof cont.** Now we show that the function $\mathbf{g}$ maps the set $V$ into itself. Let $\mathbf{x} \in V$. The contraction property of $\mathbf{g}$ implies

$$\|\mathbf{g}(\mathbf{x}) - \mathbf{p}\| = \|\mathbf{g}(\mathbf{x}) - \mathbf{g}(\mathbf{p})\| \leq c\|\mathbf{x} - \mathbf{p}\| < \delta,$$

hence

$$\mathbf{g}(\mathbf{x}) \in V.$$

If we restrict $\mathbf{g}$ to the set $V$, then this function satisfies the conditions of the previous theorem, therefore the fixed-point iteration with initial value from $V$ converges to $\mathbf{p}$. $\square$

### Example

Compute the Jacobian matrix of the function

$$\mathbf{g}(\mathbf{x}) = \mathbf{g}(x_1, x_2) = \begin{pmatrix} \tfrac{1}{4}(e^{x_1 x_2} + 3) \\ \tfrac{1}{3}(x_1 - x_2^2 - 1) \end{pmatrix}$$

defined by (20):

$$\mathbf{g}'(\mathbf{x}) = \begin{pmatrix} \tfrac{1}{4}x_2 e^{x_1 x_2} & \tfrac{1}{4} x_1 e^{x_1 x_2} \\ \tfrac{1}{3} & -\tfrac{2}{3}x_2 \end{pmatrix}.$$

Its value at the fixed point of $\mathbf{g}$, i.e., at the point $(1, 0)^T$ is

$$\mathbf{g}'(1, 0) = \begin{pmatrix} 0 & \tfrac{1}{4} \\ \tfrac{1}{3} & 0 \end{pmatrix}.$$

Its 1-norm is $\|\mathbf{g}'(1,0)\|_1 = \tfrac{1}{3} < 1$, hence our theorem yields that the fixed-point iteration converges locally to $(1, 0)^T$.

### Theorem

Let $E \subset \mathbb{R}^n$, $\mathbf{g}\colon E \to \mathbb{R}^n$, $\mathbf{g} \in C^2$, $\mathbf{g}(\mathbf{p}) = \mathbf{p}$, and $\mathbf{g}'(\mathbf{p}) = \mathbf{0}$. Then there exist a $\delta > 0$ such that the fixed-point iteration

$$\mathbf{p}^{(k+1)} = \mathbf{g}(\mathbf{p}^{(k)})$$

converges to $\mathbf{p}$ if

$$\|\mathbf{p}^{(0)} - \mathbf{p}\|_\infty < \delta.$$

Moreover, there exists a constant $c$ such that for all $k$ it follows

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq c\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2,$$

i.e., the iteration locally quadratically converges to $\mathbf{p}$.

**Proof.** By the assumptions, $0 = \|\mathbf{g}'(\mathbf{p})\| < 1$, therefore the fixed-point iteration is locally convergent.
Consider the second-order Taylor approximation of the $i$th component function of $\mathbf{g}$ around $\mathbf{p} = (p_1, \ldots, p_n)^T$:

$$\begin{aligned}
g_i(x_1, \ldots, x_n) &= g_i(p_1, \ldots, p_n) + \sum_{j=1}^n \frac{\partial g_i(p_1, \ldots, p_n)}{\partial x_j}(x_j - p_j) \\
&\quad + \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(x_j - p_j)(x_l - p_l).
\end{aligned}$$

Applying this relation for $(x_1, \ldots, x_n)^T = (p_1^{(k)}, \ldots, p_n^{(k)})^T$, and using the relations $p_i = g_i(\mathbf{p})$ and $p_i^{(k+1)} = g_i(\mathbf{p}^{(k)})$, we get

$$p_i^{(k+1)} - p_i = \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n \frac{\partial^2 g_i(\xi_1, \ldots, \xi_n)}{\partial x_j \partial x_l}(p_j^{(k)} - p_j)(p_l^{(k)} - p_l).$$

**Proof cont.** Let $M$ be such that $\left|\dfrac{\partial^2 g_i(x_1, \ldots, x_n)}{\partial x_j \partial x_l}\right| \leq M$ for all $i, j, l = 1, \ldots, n$ in a neighborhood of $\mathbf{p}$ which contains all $\mathbf{p}^{(k)}$. The definition of $M$ implies

$$|p_i^{(k+1)} - p_i| \leq \frac{1}{2}\sum_{j=1}^n \sum_{l=1}^n M |p_j^{(k)} - p_j||p_l^{(k)} - p_l| \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2.$$

Since this holds for all $i = 1, \ldots, n$, we get

$$\|\mathbf{p}^{(k+1)} - \mathbf{p}\|_\infty \leq \frac{n^2}{2}M\|\mathbf{p}^{(k)} - \mathbf{p}\|_\infty^2,$$

i.e., the order of convergence is quadratic.

---

