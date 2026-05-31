## 8.5. Lineáris egyenletrendszerek megoldása gradiens módszerrel

Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$ szimmetrikus mátrix, $\mathbf{b} \in \mathbb{R}^n$, $c \in \mathbb{R}$, és tekintsük a

$$g\colon \mathbb{R}^n \to \mathbb{R}, \qquad g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c \tag{8.8}$$

alakú kvadratikus függvényt. Az $\mathbf{A} = (a_{ij})$, $\mathbf{x} = (x_1, \ldots, x_n)^T$, $\mathbf{b} = (b_1, \ldots, b_n)^T$ jelöléseket használva felírhatjuk $g$-t a következő alakban:

$$g(x_1, \ldots, x_n) = \frac{1}{2} \sum_{i=1}^{n} \sum_{j=1}^{n} a_{ij} x_i x_j - \sum_{i=1}^{n} b_i x_i + c.$$

Számítsuk ki a $\frac{\partial g}{\partial x_i}$ parciális deriváltat. A feltevés szerint $a_{ij} = a_{ji}$, ezért

$$\frac{\partial g}{\partial x_i}(x_1, \ldots, x_n) = \frac{1}{2} \sum_{j=1}^{n} (a_{ij} x_j + a_{ji} x_j) - b_i = \sum_{j=1}^{n} a_{ij} x_j - b_i,$$

azaz vektoriális alakban

$$g'(\mathbf{x}) = \left( \frac{\partial g}{\partial x_1}(\mathbf{x}), \ldots, \frac{\partial g}{\partial x_n}(\mathbf{x}) \right)^T = \mathbf{A}\mathbf{x} - \mathbf{b}. \tag{8.9}$$

Így ha $\mathbf{A}$ invertálható, akkor $g$-nek pontosan egy kritikus pontja van, amely az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet megoldása. Legyen $\bar{\mathbf{x}}$ a $g$ függvény kritikus pontja és $\mathbf{x} = \bar{\mathbf{x}} + \Delta\mathbf{x}$.

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}(\bar{\mathbf{x}} + \Delta\mathbf{x})^T \mathbf{A}(\bar{\mathbf{x}} + \Delta\mathbf{x}) - \mathbf{b}^T(\bar{\mathbf{x}} + \Delta\mathbf{x}) + c \\
&= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}} + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} \\
&\quad - \mathbf{b}^T \bar{\mathbf{x}} - \mathbf{b}^T \Delta\mathbf{x} + c.
\end{aligned}$$

Ebből kapjuk az $\mathbf{A} = \mathbf{A}^T$, $\bar{\mathbf{x}}^T \mathbf{A}\Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{A}\bar{\mathbf{x}}$, $\mathbf{b}^T \Delta\mathbf{x} = (\Delta\mathbf{x})^T \mathbf{b}$ és az $\mathbf{A}\bar{\mathbf{x}} = \mathbf{b}$ összefüggéseket felhasználva, hogy

$$\begin{aligned}
g(\bar{\mathbf{x}} + \Delta\mathbf{x}) &= \frac{1}{2}\bar{\mathbf{x}}^T \mathbf{A}\bar{\mathbf{x}} - \mathbf{b}^T \bar{\mathbf{x}} + (\Delta\mathbf{x})^T(\mathbf{A}\bar{\mathbf{x}} - \mathbf{b}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x} + c \\
&= g(\bar{\mathbf{x}}) + \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}.
\end{aligned}$$

Ezért

$$g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) = \frac{1}{2}(\Delta\mathbf{x})^T \mathbf{A}\Delta\mathbf{x}. \tag{8.10}$$

Ha $\mathbf{A}$ pozitív definit mátrix, akkor $g(\bar{\mathbf{x}} + \Delta\mathbf{x}) - g(\bar{\mathbf{x}}) > 0$ minden $\Delta\mathbf{x} \neq \mathbf{0}$ vektorra, azaz $\bar{x}$ minimalizálja a $g$ függvényt. Ehhez hasonlóan, ha $\mathbf{A}$ negatív definit, akkor a (8.10) egyenletből következik, hogy $g$-nek maximuma van $\bar{x}$-ben. Pozitív ill. negatív definit mátrixok a 3.9. tétel szerint invertálhatók. Ezzel beláttuk tehát a következő tételt:

**8.10. tétel.** *Legyen $\mathbf{A}$ szimmetrikus. Ekkor a $g(\mathbf{x}) = \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c$ kvadratikus függvény gradiensvektora $g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b}$. Ha $\mathbf{A}$ pozitív (negatív) definit, akkor $g$-nek létezik globális minimuma (maximuma), amelyet a $\mathbf{x} = \mathbf{A}^{-1}\mathbf{b}$ pontban vesz fel.*

Az előző tétel bizonyításából könnyen belátható:

**8.11. következmény.** *Ha egy kvadratikus függvénynek egy pontban lokális minimuma (maximuma) van, akkor ott a függvénynek globális minimuma (maximuma) is van.*

Ha $\mathbf{A}$ egy szimmetrikus pozitív definit mátrix, akkor a 8.10. tétel szerint az $\mathbf{A}\mathbf{x} = \mathbf{b}$ lineáris egyenletrendszert megoldhatjuk úgy, hogy definiáljuk a $g$ kvadratikus függvényt a (8.8) képlettel, és optimális gradiens módszerrel minimalizáljuk azt. Definiáljuk tehát a

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k \mathbf{v}^{(k)}$$

sorozatot, ahol

$$\mathbf{v}^{(k)} = g'(\mathbf{p}^{(k)}) = \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}.$$

$\alpha_k$-t az optimális gradiens módszer definíciójának megfelelően a $\phi_k(t) = g(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)})$ egyváltozós függvény minimumhelyének választjuk. Az $\phi_k$ függvény egy másodfokú polinom, hiszen

$$\begin{aligned}
\phi_k(t) &= \frac{1}{2}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big)^T \mathbf{A}\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) - \mathbf{b}^T\big(\mathbf{p}^{(k)} - t\mathbf{v}^{(k)}\big) + c \\
&= t^2 \frac{1}{2}\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)} - t\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big) + \frac{1}{2}\big(\mathbf{p}^{(k)}\big)^T \mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}^T \mathbf{p}^{(k)} + c.
\end{aligned}$$

Ezért $\phi_k$ minimumhelyét explicit módon meg tudjuk adni:

$$\alpha_k = \frac{\big(\mathbf{v}^{(k)}\big)^T \big(\mathbf{A}\mathbf{p}^{(k)} - \mathbf{b}\big)}{\big(\mathbf{v}^{(k)}\big)^T \mathbf{A}\mathbf{v}^{(k)}}.$$

Ha bevezetjük az $\mathbf{r}^{(k)} := \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}$ reziduális vektort, akkor az előbbi képleteket összefoglalhatjuk a következő alakban:

$$\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} \tag{8.11}$$

$$\alpha_k = \frac{\big(\mathbf{r}^{(k)}\big)^T \mathbf{r}^{(k)}}{\big(\mathbf{r}^{(k)}\big)^T \mathbf{A}\mathbf{r}^{(k)}} \tag{8.12}$$

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)}. \tag{8.13}$$

**8.12. példa.** A

$$\begin{array}{rcrcrcl}
4x_1 &+& 2x_2 &-& x_3 &=& 0 \\
2x_1 &+& 5x_2 & & &=& 8 \\
-x_1 & & &+& 3x_3 &=& 1
\end{array}$$

lineáris egyenletrendszerre alkalmaztuk a gradiens módszert a (8.11)-(8.13) rekurzív képletekkel a $\mathbf{p}^{(0)} = (3, 3, 3)^T$ kezdőértékből kiindulva. Megjegyezzük, hogy a módszer alkalmazható, hiszen a lineáris rendszer együtthatómátrixa szimmetrikus és pozitív definit. A kapott $\mathbf{p}^{(k)}$ sorozat első 13 tagját a 8.4. táblázatban soroltuk fel a közelítés hibájával együtt. Megjegyezzük, hogy a pontos megoldás $(-1, 2, 0)$. $\quad\square$

---

*8.4. táblázat. Lineáris egyenletrendszer megoldása gradiens módszerrel*

| $k$ | $\mathbf{p}^{(k)}$ | $\|\mathbf{p}^{(k)} - \mathbf{p}\|_2$ |
|----|------|------|
| 0 | ( 3.00000000, 3.00000000, 3.00000000) | 5.09901951 |
| 1 | ( 0.43469388, 0.77673469, 2.14489796) | 2.85575065 |
| 2 | ( 0.03799038, 1.89933726, 0.41611180) | 1.12280719 |
| 3 | (−0.59954375, 1.61568290, 0.37817223) | 0.67162421 |
| 4 | (−0.75093609, 1.98854968, 0.13393796) | 0.28302529 |
| 5 | (−0.90321440, 1.90857051, 0.10622765) | 0.17032651 |
| 6 | (−0.93575911, 1.99605148, 0.03257991) | 0.07213829 |
| 7 | (−0.97504377, 1.97631917, 0.02650106) | 0.04342696 |
| 8 | (−0.98365956, 1.99904876, 0.00839916) | 0.01839730 |
| 9 | (−0.99365117, 1.99398134, 0.00679190) | 0.01107528 |
| 10 | (−0.99583018, 1.99975420, 0.00213698) | 0.00469196 |
| 11 | (−0.99837993, 1.99846385, 0.00173029) | 0.00282459 |
| 12 | (−0.99893668, 1.99993749, 0.00054530) | 0.00119662 |
| 13 | (−0.99958687, 1.99960829, 0.00044139) | 0.00072037 |

**Feladatok**

1. Mutassa meg, hogy tetszőleges

   $$g(\mathbf{x}) = \sum_{i=1}^{n} \sum_{j=1}^{n} \tilde{a}_{ij} x_i x_j + \sum_{i=1}^{n} \tilde{b}_i x_i + c$$

   kvadratikus függvény felírható (8.8) alakban! Hogy írhatjuk fel $g'(\mathbf{x})$-et és $g''(\mathbf{x})$-et mátrix jelölést használva?

   <details class="reveal-solution"><summary>Megoldás</summary>

   Collect the quadratic coefficients into a symmetric matrix $A$ with $a_{ij} = \tilde a_{ij} + \tilde a_{ji}$ (so the off-diagonal terms are split symmetrically), set $\mathbf{b} = -\tilde{\mathbf{b}}$, and keep the constant $c$. Then $g(\mathbf{x}) = \tfrac12 \mathbf{x}^T A\mathbf{x} - \mathbf{b}^T\mathbf{x} + c$, which is exactly the form (8.8). In matrix notation the gradient is $g'(\mathbf{x}) = A\mathbf{x} - \mathbf{b}$ and the Hessian is the constant matrix $g''(\mathbf{x}) = A$.

   </details>

2. Igazolja a 8.11. következményt!

   <details class="reveal-solution"><summary>Megoldás</summary>

   For the quadratic $g(\mathbf{x}) = \tfrac12 \mathbf{x}^T A\mathbf{x} - \mathbf{b}^T\mathbf{x} + c$ with $A$ symmetric positive definite, $g'(\mathbf{x}) = A\mathbf{x} - \mathbf{b} = 0$ has the unique solution $\mathbf{x}^* = A^{-1}\mathbf{b}$. Because $g''(\mathbf{x}) = A$ is positive definite everywhere, $g$ is strictly convex, so this stationary point is the unique global minimiser. Thus minimising $g$ is equivalent to solving the linear system $A\mathbf{x} = \mathbf{b}$. $\square$

   </details>

3. Ellenőrizze a (8.11)-(8.13) képletek levezetését!

   <details class="reveal-solution"><summary>Megoldás</summary>

   With residual $\mathbf{r}^{(k)} = A\mathbf{p}^{(k)} - \mathbf{b} = g'(\mathbf{p}^{(k)})$, the steepest-descent line is $\mathbf{p}^{(k)} - t\,\mathbf{r}^{(k)}$. Substituting into $g$ gives $\phi(t) = \tfrac12 (\mathbf{p}^{(k)} - t\mathbf{r}^{(k)})^T A(\mathbf{p}^{(k)} - t\mathbf{r}^{(k)}) - \mathbf{b}^T(\mathbf{p}^{(k)} - t\mathbf{r}^{(k)}) + c$. Setting $\phi'(t) = -\mathbf{r}^{(k)T}(A\mathbf{p}^{(k)} - \mathbf{b}) + t\,\mathbf{r}^{(k)T}A\mathbf{r}^{(k)} = 0$ yields the optimal step $\alpha_k = \dfrac{\mathbf{r}^{(k)T}\mathbf{r}^{(k)}}{\mathbf{r}^{(k)T}A\mathbf{r}^{(k)}}$, and the update is $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k\mathbf{r}^{(k)}$, which is formulas (8.11)–(8.13).

   </details>

4. Alkalmazza a gradiens módszert a következő kvadratikus függvények minimumhelyének meghatározására:

   (a) $f(x, y) = 2x^2 - 12x + 3y^2 + 30y$, (b) $f(x, y) = 2x^2 - 4xy + 3y^2 - 2y$.

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(a)** $\nabla f = (4x - 12,\ 6y + 30)$. Writing $f = \tfrac12 \mathbf{x}^T A\mathbf{x} - \mathbf{b}^T\mathbf{x}$ with $A = \left(\begin{smallmatrix} 4 & 0 \\ 0 & 6 \end{smallmatrix}\right)$, $\mathbf{b} = (12, -30)^T$, the minimum solves $A\mathbf{x} = \mathbf{b}$, giving $(x, y) = (3, -5)$. The gradient iteration $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k(A\mathbf{p}^{(k)} - \mathbf{b})$ with the optimal $\alpha_k = \mathbf{r}^{(k)T}\mathbf{r}^{(k)} / \mathbf{r}^{(k)T}A\mathbf{r}^{(k)}$ converges to $(3, -5)$.

   **(b)** $\nabla f = (4x - 4y,\ -4x + 6y - 2)$, i.e. $A = \left(\begin{smallmatrix} 4 & -4 \\ -4 & 6 \end{smallmatrix}\right)$, $\mathbf{b} = (0, 2)^T$. Solving $A\mathbf{x} = \mathbf{b}$ gives $(x, y) = (1, 1)$. Run the same optimal gradient iteration to converge to $(1, 1)$.

   </details>

5. Oldja meg a következő lineáris egyenletrendszereket gradiens módszerrel:

   (a)
   $$\begin{array}{rcrcl}
   4x_1 &-& 3x_2 &=& 4 \\
   -3x_1 &+& 3x_2 &=& 3
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcl}
   6x_1 &+& 3x_2 &-& 2x_3 &=& 6 \\
   3x_1 &+& 5x_2 &-& x_3 &=& -4 \\
   -2x_1 &-& x_2 &+& 3x_3 &=& -2
   \end{array}$$

   <details class="reveal-solution"><summary>Megoldás</summary>

   Solving $A\mathbf{x} = \mathbf{b}$ by minimising $g(\mathbf{x}) = \tfrac12 \mathbf{x}^T A\mathbf{x} - \mathbf{b}^T\mathbf{x}$ is equivalent to the gradient method with residual $\mathbf{r}^{(k)} = A\mathbf{p}^{(k)} - \mathbf{b}$, step $\alpha_k = \mathbf{r}^{(k)T}\mathbf{r}^{(k)} / \mathbf{r}^{(k)T}A\mathbf{r}^{(k)}$, and update $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \alpha_k\mathbf{r}^{(k)}$. Both matrices are symmetric positive definite, so the iteration converges to the unique solution. **(a)** $A = \left(\begin{smallmatrix} 4 & -3 \\ -3 & 3 \end{smallmatrix}\right)$, $\mathbf{b} = (4, 3)^T$; solving gives $\mathbf{x} = (7, 8)^T$. **(b)** $A = \left(\begin{smallmatrix} 6 & 3 & -2 \\ 3 & 5 & -1 \\ -2 & -1 & 3 \end{smallmatrix}\right)$, $\mathbf{b} = (6, -4, -2)^T$; solving gives $\mathbf{x} = (2, -2, 0)^T$. Run the gradient iteration from any starting point until $\|\mathbf{r}^{(k)}\|$ is below tolerance.

   </details>

6. Legyen $f(x, y) = \frac{1}{2}x^2 + \frac{9}{2}y^2$. Igazolja, hogy a gradiens módszert alkalmazva a $\mathbf{p}^{(0)} = (9, 1)^T$ pontból indulva a

   $$\mathbf{p}^{(k)} = \begin{pmatrix} 9 \\ (-1)^k \end{pmatrix} 0.8^k$$

   pontokat kapjuk! Mi a sorozat aszimptotikus hibakonstansa? Adjon meg egy olyan függvényt, ahol a gradiens módszer sorozatának aszimptotikus hibakonstansa egy előre megadott $0 < \alpha < 1$ szám!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Here $A = \left(\begin{smallmatrix} 1 & 0 \\ 0 & 9 \end{smallmatrix}\right)$, $\mathbf{b} = 0$, so $\mathbf{r}^{(k)} = A\mathbf{p}^{(k)} = (p_1^{(k)},\ 9p_2^{(k)})$. For $\mathbf{p}^{(k)} = 0.8^k(9,\ (-1)^k)$ one gets $\mathbf{r}^{(k)} = 0.8^k(9,\ 9(-1)^k)$, and the optimal step is $\alpha_k = \dfrac{\mathbf{r}^{(k)T}\mathbf{r}^{(k)}}{\mathbf{r}^{(k)T}A\mathbf{r}^{(k)}} = \dfrac{81 + 81}{81 + 729} = \dfrac{162}{810} = 0.2$. Then $\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - 0.2\,\mathbf{r}^{(k)} = 0.8^k(9 - 1.8\cdot 9,\ (-1)^k - 0.2\cdot 9(-1)^k) = 0.8^{k+1}(9,\ -(-1)^k)$, which is exactly $0.8^{k+1}(9,\ (-1)^{k+1})$, confirming the formula. The error is $\|\mathbf{p}^{(k)}\| \propto 0.8^k$, so the asymptotic error constant is $0.8 = \dfrac{9 - 1}{9 + 1}$ with $\kappa = 9$ the condition number. To make the constant a prescribed $0 < \alpha < 1$, take $f(x,y) = \tfrac12 x^2 + \tfrac{\lambda}{2} y^2$ with $\lambda = \dfrac{1+\alpha}{1-\alpha}$ (so $\kappa = \lambda$) and the analogous starting point $\mathbf{p}^{(0)} = (\lambda, 1)^T$.

   </details>
