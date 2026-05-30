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
