## 4.4. Hibabecslés, iteratív finomítás

Az előző szakaszokban megismert iterációs módszerek megállási feltételei hasonlóak egy általános iterációs sorozat megállási feltételeihez. A 2.8. szakaszban tárgyalt feltételek mintájára három általános megállási feltétel valamelyikét, ill. ezek kombinációit használhatjuk:

$$1. \;\; \|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\| < \varepsilon, \quad 2. \;\; \frac{\|\mathbf{x}^{(k+1)} - \mathbf{x}^{(k)}\|}{\|\mathbf{x}^{(k+1)}\|} < \varepsilon, \quad \text{és} \quad 3. \;\; \|\mathbf{b} - \mathbf{A}\mathbf{x}^{(k)}\| < \varepsilon.$$

Ez utóbbi feltétellel foglalkozunk ebben a szakaszban.

Az $\mathbf{r} \equiv \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$ vektort az $\tilde{\mathbf{x}}$ közelítő megoldáshoz tartozó *reziduális vektornak* nevezzük. A 3. feltétel azon a hipotézisen alapszik, hogy ha $\mathbf{r}$ normája kicsi, akkor $\tilde{\mathbf{x}}$ jó közelítése a pontos megoldásnak. Azt, hogy ez a hipotézis nem minden esetben igaz, az alábbi példa mutatja.

**4.17. példa.** A

$$\begin{pmatrix} 4 & 1 \\ 4.03 & 1 \end{pmatrix} \begin{pmatrix} x_1 \\ x_2 \end{pmatrix} = \begin{pmatrix} 5 \\ 5.03 \end{pmatrix} \tag{4.20}$$

egyenletrendszer pontos megoldása $\mathbf{x} = (1, 1)^T$. Tekintsük $\tilde{\mathbf{x}} = (2, -3)^T$-t egy „közelítő” megoldásnak. A hozzá tartozó reziduális vektor: $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.03)^T$. Ennek végtelen normája $\|\mathbf{r}\|_\infty = 0.03$, ami kicsi, annak ellenére, hogy $\tilde{\mathbf{x}}$ nyilván nem tekinthető a pontos megoldás jó közelítésének. $\qquad\square$

A következő eredmény azt vizsgálja, hogy $\|\mathbf{r}\|$ kicsinységéből milyen esetekben következtethetünk arra, hogy a közelítés hibája kicsi.

**4.18. tétel.** *Legyen* $\mathbf{A}$ *egy nemszinguláris négyzetes mátrix,* $\mathbf{x}$ *az* $\mathbf{A}\mathbf{x} = \mathbf{b}$ *egyenlet pontos megoldása,* $\tilde{\mathbf{x}}$ *egy közelítő megoldása, és legyen* $\mathbf{r} \equiv \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$. *Ekkor*

$$\|\mathbf{x} - \tilde{\mathbf{x}}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|, \tag{4.21}$$

*és*

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}. \tag{4.22}$$

**Bizonyítás.** Az $\mathbf{A}\mathbf{x} = \mathbf{b}$ és $\mathbf{A}\tilde{\mathbf{x}} = \mathbf{b} - \mathbf{r}$ összefüggésből kapjuk, hogy $\mathbf{A}(\mathbf{x} - \tilde{\mathbf{x}}) = \mathbf{r}$, és így $\mathbf{x} - \tilde{\mathbf{x}} = \mathbf{A}^{-1}\mathbf{r}$. Ebből az $\|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\|$ egyenlőtlenséget felhasználva következik (4.21).

A (4.21) és a $\|\mathbf{b}\| \leq \|\mathbf{A}\| \|\mathbf{x}\|$ egyenlőtlenségekből

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|}{\|\mathbf{x}\|} \leq \frac{\|\mathbf{A}\| \|\mathbf{A}^{-1}\| \|\mathbf{r}\|}{\|\mathbf{A}\| \|\mathbf{x}\|} \leq \|\mathbf{A}\| \|\mathbf{A}^{-1}\| \frac{\|\mathbf{r}\|}{\|\mathbf{b}\|}.$$

$\square$

Az előbbi tétel ad választ a 4.17. példában is vizsgált kérdésre. Abból, hogy a közelítő megoldás reziduális vektora kicsi, akkor következik csak, hogy a közelítés relatív hibája kicsi, ha az $\|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ szorzat nem „túl nagy”. Vezessük be a következő elnevezést: az $\|\mathbf{A}\| \|\mathbf{A}^{-1}\|$ számot az $\mathbf{A}$ mátrix ($\|\cdot\|$ normára vonatkozó) *kondíciószámának* nevezzük és $\mathrm{cond}(\mathbf{A})$-val jelöljük. Megjegyezzük, hogy a kondíciószám a használt mátrixnormától függ. A $\|\cdot\|_p$ mátrixnormához tartozó kondíciószámot $\mathrm{cond}_p(\mathbf{A})$-val jelöljük. Ha egy $\mathbf{A}$ mátrix kondíciószáma „nagy”, akkor a mátrixot *rosszul kondícionált*, vagy *gyengén meghatározott* mátrixnak nevezzük. Arra, hogy mekkora kell legyen a kondíciószám ahhoz, hogy rosszul kondícionált mátrixról beszéljünk, nem adunk pontos definíciót. Általában 100–1000 feletti kondíciószám esetén szokás rosszul kondícionált mátrixról beszélni. Rosszul kondícionált mátrixokra tehát nem megbízható a 3. megállási feltétel.

**4.19. példa.** Tekintsük a 4.17. példa $\mathbf{A}$ együtthatómátrixát! Könnyen ellenőrizhető, hogy

$$\mathbf{A}^{-1} = \begin{pmatrix} -33.33 & 33.33 \\ 134.3 & -133.3 \end{pmatrix},$$

és így $\|\mathbf{A}\|_\infty = 5.03$, $\|\mathbf{A}^{-1}\|_\infty = 267.6$. Ebből kapjuk, hogy $\mathrm{cond}_\infty(\mathbf{A}) = 1346$. A 4.18. tétel szerint ez magyarázza azt, hogy $(2, -3)^T$ nem jó közelítése az egyenlet megoldásának, bár a reziduális vektor kicsi. $\qquad\square$

Tegyük fel, hogy az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletet Gauss-eliminációval oldjuk meg, $t$-jegyű aritmetikát használva. Legyen $\tilde{\mathbf{x}}$ ennek közelítő megoldása, amely kerekítési hibával terhelt. Számítsuk ki az $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}$ reziduális vektort, de az értékes számjegyek megőrzése érdekében most használjunk $2t$-jegyű aritmetikát (dupla pontosságot) $\mathbf{r}$ számolásához. Megmutatható, hogy

$$\|\mathbf{r}\| \approx 10^{-t} \|\mathbf{A}\| \|\tilde{\mathbf{x}}\|.$$

Ezt az összefüggést felhasználhatjuk $\mathbf{A}$ kondíciószámának becslésére a következőképpen: Tekintsük az $\mathbf{A}\mathbf{y} = \mathbf{r}$ egyenletet, és legyen $\tilde{\mathbf{y}}$ ennek numerikus megoldása $t$-jegyű aritmetikát használva. Megjegyezzük, hogy az $\mathbf{A}\mathbf{y} = \mathbf{r}$ egyenletet hatékonyan meg tudjuk oldani, ha az első Gauss-elimináció során a sorcseréket és az $l_{ij}$ faktorokat, és a Gauss-elimináció végén kapott együtthatómátrixot megjegyezzük. Így csak az $\mathbf{r}$ vektoron kell újra eliminációt végezni, az együtthatómátrixon nem. (Az 5.1. szakaszban egy hasonlóan hatékony módszert fogunk bemutatni olyan lineáris egyenletrendszerek megoldására LU-faktorizáció segítségével, ahol az együtthatómátrix azonos.) Ekkor

$$\tilde{\mathbf{y}} \approx \mathbf{A}^{-1}\mathbf{r} = \mathbf{A}^{-1}(\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}) = \mathbf{A}^{-1}\mathbf{b} - \tilde{\mathbf{x}} = \mathbf{x} - \tilde{\mathbf{x}},$$

tehát $\|\tilde{\mathbf{y}}\|$ becslése $\|\mathbf{x} - \tilde{\mathbf{x}}\|$ hibának, és

$$\|\tilde{\mathbf{y}}\| \approx \|\mathbf{A}^{-1}\mathbf{r}\| \leq \|\mathbf{A}^{-1}\| \|\mathbf{r}\| \approx \|\mathbf{A}^{-1}\| \|\mathbf{A}\| 10^{-t} \|\tilde{\mathbf{x}}\| = 10^{-t}\mathrm{cond}(\mathbf{A}) \|\tilde{\mathbf{x}}\|.$$

Ebből kapjuk, hogy a

$$\mathrm{cond}(\mathbf{A}) \approx 10^t \frac{\|\tilde{\mathbf{y}}\|}{\|\tilde{\mathbf{x}}\|} \tag{4.23}$$

képletet használhatjuk a kondíciószám becslésére. Legyen $\tilde{\mathbf{r}} \equiv \mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}$ az $\tilde{\mathbf{y}}$-hoz tartozó reziduális vektor. Általában $\|\tilde{\mathbf{r}}\|$ sokkal kisebb, mint $\|\mathbf{r}\|$, ezért ha $\tilde{\mathbf{x}}$ helyett $\bar{\mathbf{x}} \equiv \tilde{\mathbf{x}} + \tilde{\mathbf{y}}$-t tekintjük $\mathbf{x}$ közelítésének, akkor az $\bar{\mathbf{x}}$-hez tartozó reziduális vektorra

$$\|\mathbf{b} - \mathbf{A}\bar{\mathbf{x}}\| = \|\mathbf{b} - \mathbf{A}(\tilde{\mathbf{x}} + \tilde{\mathbf{y}})\| = \|\mathbf{r} - \mathbf{A}\tilde{\mathbf{y}}\| = \|\tilde{\mathbf{r}}\| \ll \|\mathbf{b} - \mathbf{A}\tilde{\mathbf{x}}\|,$$

azaz $\bar{\mathbf{x}}$ sokkal pontosabb közelítése $\mathbf{x}$-nek, mint $\tilde{\mathbf{x}}$. Ha ezt az eljárást iterációs eljárásként ismételjük, akkor az ún. *iteratív finomítás* vagy más néven *reziduális korrekció* módszerét kapjuk. Ez a módszer rosszul kondícionált mátrixok esetén is az egyenlet megoldásának jó közelítését adja néhány lépésben.

**4.20. algoritmus. Iteratív finomítás**

```
INPUT:    A, b
          N    - maximális iterációszám
          TOL  - tolerancia
          t    - a számábrázolás pontossága
OUTPUT:   z    - az egyenlet megoldásának közelítése
          COND - cond_∞(A) közelítése

Az Ax = b egyenletet megoldjuk Gauss-eliminációval
for k = 1, 2, ..., N do
    Az r = b - Ax reziduális vektort kétszeres pontossággal kiszámoljuk.
    Az Ay = r egyenletet megoldjuk y-ra
    z ← x + y
    if k = 1 do
        COND ← 10^t · ||y||_∞ / ||x||_∞
        output(COND)
    end do
    if ||y||_∞ < TOL do
        output(z)
        stop
    end do
    x ← z
end do
output(A maximális iterációszámot túlléptük)
```

**4.21. példa.** Tekintsük a (4.20) egyenletet. Ennek pontos megoldása $\mathbf{x} = (1, 1)^T$. Gauss-eliminációval négyjegyű aritmetikát használva az $\tilde{\mathbf{x}} = (0.9375, 1.2500)^T$ közelítő megoldást kapjuk. Az ehhez tartozó reziduális vektor (dupla pontossággal számolva): $\mathbf{r} = \mathbf{b} - \mathbf{A}\tilde{\mathbf{x}} = (0, 0.001875)^T$, így $\|\mathbf{r}\|_\infty = 0.001875$.

Az $\mathbf{A}\mathbf{y} = \mathbf{r}$ egyenletet Gauss-eliminációval megoldva (négyjegyű aritmetikát használva) kapjuk $\tilde{\mathbf{y}} = (0.0586, -0.2344)^T$. Ezért a (4.23) becslés szerint

$$\mathrm{cond}_\infty(\mathbf{A}) \approx 10^4 \frac{\|\tilde{\mathbf{y}}\|_\infty}{\|\tilde{\mathbf{x}}\|_\infty} = 10^4 \frac{0.2344}{1.25} = 1875. \tag{4.24}$$

A 4.19. példában láttuk, hogy a kondíciószám pontos értéke: $\mathrm{cond}_\infty(\mathbf{A}) = 1346$, tehát (4.24) valóban közelítése a pontos kondíciószámnak. Az $\tilde{\mathbf{x}}$ közelítő megoldás relatív hibája

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} = 0.25,$$

ami elég nagy ($\mathbf{A}$ rosszul kondícionált). A 4.18. tétel szerint a

$$\frac{\|\mathbf{x} - \tilde{\mathbf{x}}\|_\infty}{\|\mathbf{x}\|_\infty} \leq \mathrm{cond}_\infty(\mathbf{A}) \frac{\|\mathbf{r}\|_\infty}{\|\mathbf{b}\|_\infty} = 0.5017$$

hibakorlátot kapjuk az elkövetett relatív hibára. Az iteratív finomítás egy lépését alkalmazva az $\mathbf{x}^{(2)} = \mathbf{x} + \mathbf{y} = (0.9961, 1.016)^T$ közelítő megoldást kapjuk, ami közel van az egyenlet pontos megoldásához. $\qquad\square$

### Feladatok

1. Számítsa ki az

$$\text{(a)} \quad \begin{pmatrix} 1 & 2 \\ 4 & -1 \end{pmatrix}, \qquad \text{(b)} \quad \begin{pmatrix} 1 & 0 & 2 \\ 2 & 1 & 0 \\ 1 & -1 & 1 \end{pmatrix}$$

mátrixok $\mathrm{cond}_\infty$ és $\mathrm{cond}_1$ kondíciószámát!

2. Becsülje meg a $\mathrm{cond}_\infty(\mathbf{A})$ kondíciószámot, ha

$$\mathbf{A} = \begin{pmatrix} 1 & \frac{1}{2} & \frac{1}{3} \\ \frac{1}{2} & \frac{1}{3} & \frac{1}{4} \\ \frac{1}{3} & \frac{1}{4} & \frac{1}{5} \end{pmatrix}.$$

3. Négyjegyű aritmetikát használva oldja meg az

$$
\begin{aligned}
0.009x_1 - 0.52x_2 &= -5.191 \\
9211x_1 + 21.1x_2 &= 9422
\end{aligned}
$$

egyenletrendszert az iteratív finomítás módszerének két lépését használva! (A pontos megoldás: $(1, 10)$.)
