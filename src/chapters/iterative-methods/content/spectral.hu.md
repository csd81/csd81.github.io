## Sajátértékek és a spektrálsugár

A $\lambda \in \mathbb{C}$ komplex szám az $\mathbf{A} \in \mathbb{R}^{n \times n}$ mátrix **sajátértéke**, ha az $\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$ egyenletnek van nemtriviális $\mathbf{x} \neq \mathbf{0}$ megoldása (a **sajátvektor**). Ekvivalensen $(\mathbf{A} - \lambda\mathbf{I})\mathbf{x} = \mathbf{0}$.

> **Tétel.** Egy $n \times n$-es mátrixnak $n$ sajátértéke van, az $n$-edfokú **karakterisztikus egyenlet** gyökei:
> $$\det(\mathbf{A} - \lambda\mathbf{I}) = 0.$$

A **spektrálsugár** a legnagyobb sajátérték-abszolútérték:

$$\rho(\mathbf{A}) = \max\{|\lambda| : \lambda \text{ az } \mathbf{A} \text{ sajátértéke}\}.$$

> **Tétel.** Bármely $\|\cdot\|$ mátrixnormára
> $$\rho(\mathbf{A}) \leq \|\mathbf{A}\|.$$

Tehát minden mátrixnorma felülről becsli a spektrálsugarat. Fordítva (a tankönyv 3.17. tétele szerint) minden $\varepsilon > 0$-ra van olyan norma, hogy $\|\mathbf{A}\| \leq \rho(\mathbf{A}) + \varepsilon$.

## Hasznos mátrixnormák

- $\|\mathbf{T}\|_\infty$ — a legnagyobb abszolút **sor**összeg;
- $\|\mathbf{T}\|_1$ — a legnagyobb abszolút **oszlop**összeg;
- $\|\mathbf{T}\|_2$ — a legnagyobb **szinguláris érték** (spektrálnorma).

## A konvergencia-teszt

Az $\mathbf{x}^{(k+1)} = \mathbf{T}\mathbf{x}^{(k)} + \mathbf{c}$ iteráció pontosan akkor konvergál minden kezdeti értékre, **ha** $\rho(\mathbf{T}) < 1$ — azaz **minden sajátérték szigorúan az egységkörön belül** van a komplex síkon.

A normateszt csak **elegendő**: ha valamely $\|\mathbf{T}\| < 1$, a konvergencia biztos (hiszen $\rho(\mathbf{T}) \leq \|\mathbf{T}\| < 1$), de a módszer akkor is konvergálhat, ha $\|\mathbf{T}\| \geq 1$, amíg $\rho(\mathbf{T}) < 1$. Az alábbi ábra a sajátértékeket mutatja az egységkörhöz képest, így közvetlenül leolvasható az eredmény.

## Feladatok

1. Számítsa ki a spektrális kondíciószámot, $\operatorname{cond}_*(\mathbf{A})$, az $\mathbf{A} = \left(\begin{smallmatrix} 1 & 4 \\ 2 & -1 \end{smallmatrix}\right)$ mátrixra!

   <details class="reveal-solution"><summary>Megoldás</summary>

   The eigenvalues solve $\det(\mathbf{A} - \lambda\mathbf{I}) = (1-\lambda)(-1-\lambda) - 8 = \lambda^2 - 9 = 0$, so $\lambda_1 = 3$, $\lambda_2 = -3$. The eigenvalues of $\mathbf{A}^{-1}$ are $1/3$ and $-1/3$. Hence $\operatorname{cond}_*(\mathbf{A}) = \rho(\mathbf{A})\rho(\mathbf{A}^{-1}) = 3 \cdot \tfrac13 = 1$ — this matrix is perfectly conditioned.

   </details>

2. Bizonyítsa be a 4.24. tételt: tetszőleges invertálható $\mathbf{A}$ esetén (1) $\operatorname{cond}(\mathbf{A}) \geq 1$ és (2) $\rho(\mathbf{A})\rho(\mathbf{A}^{-1}) \leq \operatorname{cond}(\mathbf{A})$.

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(1)** By submultiplicativity, $\operatorname{cond}(\mathbf{A}) = \|\mathbf{A}\|\|\mathbf{A}^{-1}\| \geq \|\mathbf{A}\mathbf{A}^{-1}\| = \|\mathbf{I}\| = 1$. **(2)** For any eigenvalue $\lambda$ of $\mathbf{A}$ with unit eigenvector $\mathbf{v}$, $\|\mathbf{A}\| \geq \|\mathbf{A}\mathbf{v}\| = |\lambda|$, so $\|\mathbf{A}\| \geq \rho(\mathbf{A})$; likewise $\|\mathbf{A}^{-1}\| \geq \rho(\mathbf{A}^{-1})$. Multiplying gives $\operatorname{cond}(\mathbf{A}) = \|\mathbf{A}\|\|\mathbf{A}^{-1}\| \geq \rho(\mathbf{A})\rho(\mathbf{A}^{-1})$. $\square$

   </details>

3. Igazolja, hogy $\operatorname{cond}_*(\mathbf{A}) = \dfrac{\max\{|\lambda_1|,\dots,|\lambda_n|\}}{\min\{|\lambda_1|,\dots,|\lambda_n|\}}$!

   <details class="reveal-solution"><summary>Megoldás</summary>

   If $\lambda_1,\dots,\lambda_n$ are the eigenvalues of $\mathbf{A}$, then $1/\lambda_1,\dots,1/\lambda_n$ are the eigenvalues of $\mathbf{A}^{-1}$. Thus $\rho(\mathbf{A}) = \max_i|\lambda_i|$ and $\rho(\mathbf{A}^{-1}) = \max_i|1/\lambda_i| = 1/\min_i|\lambda_i|$. Therefore $\operatorname{cond}_*(\mathbf{A}) = \rho(\mathbf{A})\rho(\mathbf{A}^{-1}) = \dfrac{\max_i|\lambda_i|}{\min_i|\lambda_i|}$. $\square$

   </details>
