## 4.4 Hibabecslés

Megállási feltételek az iterációkhoz (a nemlineáris esethez hasonlóan):

$$\text{(i)}\ \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad \text{(ii)}\ \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{(iii)}\ \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egy $\tilde{\mathbf{x}}$ közelítő megoldásánál a **reziduum** $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. A (iii) feltétel azt reméli, hogy kis reziduum kis hibát jelent — de ez nem mindig igaz.

**4.17. példa.** A
$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix}$$
pontos megoldása $\mathbf{x} = (1,1)^T$. A „közelítő” $\tilde{\mathbf{x}} = (2,-3)^T$ reziduuma $\mathbf{r} = (0,\,0.03)^T$, $\|\mathbf{r}\|_\infty = 0.03$ — apró, mégis $\tilde{\mathbf{x}}$ messze van a megoldástól.

> **4.18. tétel.** Legyen $\mathbf{A}$ nemszinguláris, $\mathbf{x}$ a pontos megoldás, $\tilde{\mathbf{x}}$ egy közelítés, $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. Ekkor
> $$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\|\,\|\mathbf{r}\|, \tag{4.21}$$
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\|\,\|\mathbf{A}^{-1}\|\,\frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}. \tag{4.22}$$

> **Definíció.** Az $\mathbf{A}$ normára vonatkozó **kondíciószáma** $\operatorname{cond}(\mathbf{A}) = \|\mathbf{A}\|\,\|\mathbf{A}^{-1}\|$ (a $p$-normánál $\operatorname{cond}_p$). A mátrix **rosszul kondícionált**, ha ez nagy (kb. $> 100$–$1000$), egyébként **jól kondícionált**.

**4.19. példa.** A fenti mátrixra
$$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$
így $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$, tehát $\operatorname{cond}_\infty(\mathbf{A}) = 1346$. Ez a nagy érték magyarázza, miért rejtett a 4.17. példa kis reziduuma nagy hibát.

## Iteratív finomítás

Az $\mathbf{A}\mathbf{x} = \mathbf{b}$ megoldása $t$-jegyű aritmetikával Gauss-eliminációval $\tilde{\mathbf{x}}$-et ad, amelyre $\|\mathbf{r}\| \approx 10^{-t}\|\mathbf{A}\|\,\|\tilde{\mathbf{x}}\|$ ($\mathbf{r}$-t dupla pontossággal számolva). Az $\mathbf{A}\mathbf{y} = \mathbf{r}$ megoldása $\tilde{\mathbf{y}} \approx \mathbf{x} - \tilde{\mathbf{x}}$, tehát becsli a hibát — és a kondíciószámot:

$$\operatorname{cond}(\mathbf{A}) \approx 10^{t}\,\frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|}. \tag{4.23}$$

A javított megoldás $\bar{\mathbf{x}} = \tilde{\mathbf{x}} + \tilde{\mathbf{y}}$ reziduuma sokkal kisebb. Ezt ismételve kapjuk az **iteratív finomítást** (reziduális korrekció):

```
BEMENET  A, b, N (max. iteráció), TOL, t (számjegyek)
oldd meg A x = b Gauss-eliminációval
k = 1, 2, ..., N esetén:
    r = b - A x          (dupla pontosság)
    oldd meg A y = r
    z = x + y
    ha k = 1:  COND = 10^t * ||y|| / ||x||;  kiír COND
    ha ||y|| < TOL:  kiír z; állj
    x = z
kiír "max. iterációszám túllépve"
```

**4.21. példa.** A 4.17. példa rendszerére 4 jegyű aritmetikával $\tilde{\mathbf{x}} = (0.9375,\,1.25)^T$, $\mathbf{r} = (0,\,0.001875)^T$. Az $\mathbf{A}\mathbf{y} = \mathbf{r}$ megoldása $\tilde{\mathbf{y}} = (0.0586,\,-0.2344)^T$, így (4.23) szerint
$$\operatorname{cond}_\infty(\mathbf{A}) \approx 10^4\,\frac{0.2344}{1.25} = 1875,$$
közel a valódi $1346$-hoz. Egy finomítási lépés után $\mathbf{x}^{(2)} = \tilde{\mathbf{x}} + \tilde{\mathbf{y}} = (0.9961,\,1.016)^T$ — sokkal közelebb $(1,1)$-hez.

## 4.5 Lineáris rendszerek perturbációja

Tegyük fel, hogy a jobb oldalt perturbáljuk: $\mathbf{A}\mathbf{x} = \mathbf{b}$ (4.25) helyett $\mathbf{A}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}$ (4.26), ahol $\tilde{\mathbf{b}} = \mathbf{b} + \Delta\mathbf{b}$.

> **4.22. tétel.** $\mathbf{A}$ nemszinguláris esetén
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \operatorname{cond}(\mathbf{A})\,\frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}.$$

Tehát egy nagyságrend a $\operatorname{cond}(\mathbf{A})$-ban egy értékes számjegybe kerülhet. **Mindkettőt** ($\mathbf{A}$-t és $\mathbf{b}$-t) perturbálva ($\tilde{\mathbf{A}}\tilde{\mathbf{x}} = \tilde{\mathbf{b}}$, 4.27):

> **4.23. tétel.** Ha $\|\mathbf{A} - \tilde{\mathbf{A}}\| < 1/\|\mathbf{A}^{-1}\|$, akkor
> $$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\operatorname{cond}(\mathbf{A})}{1 - \operatorname{cond}(\mathbf{A})\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|}}\left(\frac{\|\mathbf{A} - \tilde{\mathbf{A}}\|}{\|\mathbf{A}\|} + \frac{\|\mathbf{b} - \tilde{\mathbf{b}}\|}{\|\mathbf{b}\|}\right).$$

> **4.24. tétel.** Rögzített mátrixnormára és minden invertálható $\mathbf{A}$-ra:
> 1. $\operatorname{cond}(\mathbf{A}) \geq 1$;
> 2. $\rho(\mathbf{A})\,\rho(\mathbf{A}^{-1}) \leq \operatorname{cond}(\mathbf{A})$.

A $\operatorname{cond}_*(\mathbf{A}) = \rho(\mathbf{A})\,\rho(\mathbf{A}^{-1})$ szám a **spektrál kondíciószám** — az összes kondíciószám közül a legkisebb, de nehezebb kiszámolni (sajátértékek kellenek).

> **4.25. tétel (Gastinel).** Invertálható $\mathbf{A}$-ra
> $$\frac{1}{\operatorname{cond}(\mathbf{A})} = \min\left\{ \frac{\|\mathbf{A} - \mathbf{B}\|}{\|\mathbf{A}\|} : \mathbf{B} \text{ szinguláris} \right\}.$$

Tehát a nagy kondíciószám azt jelenti, hogy van $\mathbf{A}$-hoz közeli szinguláris mátrix.

## A Hilbert-mátrix

A klasszikus rosszul kondícionált család a **Hilbert-mátrix** $\mathbf{H}_n$, $1/(i+j-1)$ elemekkel. Spektrál kondíciószáma $n$-nel elszáll (4.3. táblázat):

| $n$ | $\operatorname{cond}_*(\mathbf{H}_n)$ | $n$ | $\operatorname{cond}_*(\mathbf{H}_n)$ |
|----|------|----|------|
| 3 | $5.24\cdot 10^2$ | 7 | $4.75\cdot 10^8$ |
| 4 | $1.55\cdot 10^4$ | 8 | $1.53\cdot 10^{10}$ |
| 5 | $4.77\cdot 10^5$ | 9 | $4.93\cdot 10^{11}$ |
| 6 | $1.50\cdot 10^7$ | 10 | $1.60\cdot 10^{13}$ |

*(Az értékek megegyeznek az alábbi interaktív számológép és a szokásos szoftverek eredményével; a nyomtatott tankönyvi táblázatban $n=6$-nál elírás van.)*

## Feladatok

1. Számítsa ki $\operatorname{cond}_\infty(\mathbf{A})$ és $\operatorname{cond}_1(\mathbf{A})$ értékét (a) $\mathbf{A} = \left(\begin{smallmatrix} 1 & 2 \\ 2 & -1 \end{smallmatrix}\right)$ és (b) $\mathbf{A} = \left(\begin{smallmatrix} 0 & 2 & 1 \\ 1 & 0 & 1 \\ 1 & -1 & 1 \end{smallmatrix}\right)$ esetén!

   <details class="reveal-solution"><summary>Megoldás</summary>

   **(a)** $\mathbf{A}^{-1} = \tfrac{1}{-5}\left(\begin{smallmatrix} -1 & -2 \\ -2 & 1 \end{smallmatrix}\right) = \left(\begin{smallmatrix} 1/5 & 2/5 \\ 2/5 & -1/5 \end{smallmatrix}\right)$. Then $\|\mathbf{A}\|_\infty = \max\{3,3\} = 3$ and $\|\mathbf{A}^{-1}\|_\infty = \max\{3/5,3/5\} = 3/5$, so $\operatorname{cond}_\infty(\mathbf{A}) = 3 \cdot 3/5 = 1.8$. The same row/column sums give $\operatorname{cond}_1(\mathbf{A}) = 1.8$.

   **(b)** $\mathbf{A}^{-1} = \left(\begin{smallmatrix} -1/2 & 3/2 & -1 \\ 0 & 1/2 & -1/2 \\ 1/2 & -1/2 & 1/2 \end{smallmatrix}\right)$. For the $\infty$-norm, $\|\mathbf{A}\|_\infty = \max\{3,2,3\} = 3$, $\|\mathbf{A}^{-1}\|_\infty = \max\{3,1,1.5\} = 3$, so $\operatorname{cond}_\infty(\mathbf{A}) = 9$. For the $1$-norm, $\|\mathbf{A}\|_1 = \max\{2,3,3\} = 3$, $\|\mathbf{A}^{-1}\|_1 = \max\{1,2.5,2\} = 2.5$, so $\operatorname{cond}_1(\mathbf{A}) = 7.5$.

   </details>

2. Becsülje meg $\operatorname{cond}_\infty(\mathbf{A})$ értékét a $3\times3$-as Hilbert-mátrixra: $\mathbf{A} = \left(\begin{smallmatrix} 1 & 1/2 & 1/3 \\ 1/2 & 1/3 & 1/4 \\ 1/3 & 1/4 & 1/5 \end{smallmatrix}\right)$.

   <details class="reveal-solution"><summary>Megoldás</summary>

   This is the Hilbert matrix $\mathbf{H}_3$, with $\operatorname{cond}_*(\mathbf{H}_3) \approx 5.24 \times 10^2$ from Table 4.3; since $\operatorname{cond}_\infty(\mathbf{A}) \geq \operatorname{cond}_*(\mathbf{A})$ we get $\operatorname{cond}_\infty(\mathbf{A}) \gtrsim 524$. Directly: $\mathbf{A}^{-1} = \left(\begin{smallmatrix} 9 & -36 & 30 \\ -36 & 192 & -180 \\ 30 & -180 & 180 \end{smallmatrix}\right)$, with $\|\mathbf{A}\|_\infty = 1.833$ and $\|\mathbf{A}^{-1}\|_\infty = \max\{75,408,390\} = 408$, hence $\operatorname{cond}_\infty(\mathbf{A}) = 1.833 \times 408 \approx 748$.

   </details>

3. Iteratív finomítással javítsa a $0.009x_1 - 0.52x_2 = -5.191$, $\ 9211x_1 + 21.1x_2 = 9422$ rendszer megoldását (a pontos megoldás $\mathbf{x} = (1,10)^T$)!

   <details class="reveal-solution"><summary>Megoldás</summary>

   Gaussian elimination with partial pivoting (swap rows since $9211 > 0.009$) and 4-digit arithmetic gives the multiplier $l_{21} = 0.009/9211 \approx 9.771\times10^{-7}$, leading to back substitution $x_2 = -5.200/(-0.5200) = 10.00$ and $x_1 = (9422 - 21.1\cdot10)/9211 = 1.000$ — exact here. Suppose rounding gave $\tilde{\mathbf{x}} = (0.99, 10.1)^T$. The residual (double precision) is $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} \approx (0.0484, 91.0)^T$. Solving $\mathbf{A}\mathbf{y} = \mathbf{r}$ gives $\mathbf{y} \approx (0.01, -0.09)^T$, so the update is $\mathbf{z} = \tilde{\mathbf{x}} + \mathbf{y} = (1.00, 10.01)^T$. The condition estimate is $\operatorname{cond}(\mathbf{A}) \approx 10^4 \cdot \|\mathbf{y}\|_\infty/\|\tilde{\mathbf{x}}\|_\infty = 10^4 \cdot 0.09/10.1 \approx 89$. After 2–3 refinement steps the solution converges to $(1,10)^T$.

   </details>
