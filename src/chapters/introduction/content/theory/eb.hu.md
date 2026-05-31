## 1.3. Hibaanalízis

Legyen $x$ és $y$ pozitív, és tekintsük az $\tilde{x}$ és $\tilde{y}$ számokat $x$ és $y$ közelítésének. Legyen $|x - \tilde{x}| \leq \Delta_x$ valamint $|y - \tilde{y}| \leq \Delta_y$ a közelítések hibakorlátja. A megfelelő relatív hibakorlátokat $\delta_x = \Delta_x/x$ és $\delta_y = \Delta_y/y$ jelöljük. Ebben a szakaszban azzal a kérdéssel foglalkozunk, hogy ha az $x$ és $y$ számokon egy aritmetikai műveletet (összeadás, kivonás, szorzás, osztás) kell elvégeznünk, és ahelyett az $\tilde{x}$ és $\tilde{y}$ számokon végezzük el a műveletet, és annak (pontos) eredményével közelítjük az eredeti művelet eredményét, mekkora lehet a közelítés hibája ill. relatív hibája.

Először tekintsük az összeadás műveletét. Keresünk tehát olyan $\Delta_{x+y}$ és $\delta_{x+y}$ számokat, hogy

$$|x + y - (\tilde{x} + \tilde{y})| \leq \Delta_{x+y} \quad \text{és} \quad \frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} \leq \delta_{x+y}.$$

**1.14. tétel.** *A*

$$\Delta_{x+y} := \Delta_x + \Delta_y \qquad \text{és} \qquad \delta_{x+y} := \max\{\delta_x, \delta_y\}$$

*számok az összeadás hiba- ill. relatív hibakorlátai.*

<details class="proof-details"><summary>Bizonyítás</summary>

A háromszög-egyenlőtlenséget és $\Delta_x$ és $\Delta_y$ definícióját alkalmazva

$$|x + y - (\tilde{x} + \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y.$$

Ebből kapjuk hogy $\Delta_x + \Delta_y$ egy hibakorlátja lesz az összeadásnak.

Az előbbi összefüggést felhasználva

$$\frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} \leq \frac{\Delta_x + \Delta_y}{x + y} = \frac{x}{x + y}\delta_x + \frac{y}{x + y}\delta_y \leq \max\{\delta_x, \delta_y\}.$$

Tehát $\max\{\delta_x, \delta_y\}$ egy relatív hibakorlátja az összeadásnak. $\square$

</details>

A tételt nyilván lehet általánosítani több szám összeadására: a tagok hibái összeadódhatnak, az összeg relatív hibája nem nagyobb, mint a tagok relatív hibái közül a legnagyobb. Az állítást megfogalmazhatjuk úgy is, hogy a közelítő összeg pontos jegyeinek száma nem kevesebb, mint az egyes tagok közelítéseiben szereplő pontos jegyek számai közül a legkisebb szám. Természetesen a tétel a legrosszabb esetre vonatkozik. A gyakorlatban a hibák kiegyenlíthetik egymást. Pl. legyen $x = 1$, $y = 2$, $\tilde{x} = 1.1$, $\tilde{y} = 1.8$. Ekkor $x + y = 3$, $\tilde{x} + \tilde{y} = 2.9$. Azaz az összeg hibája csak 0.1, kisebb, mint az egyes tagok hibáinak összege, 0.3.

**1.15. tétel.** *Legyen $x > y > 0$. A*

$$\Delta_{x-y} := \Delta_x + \Delta_y \qquad \text{és} \qquad \delta_{x-y} := \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y$$

*számok a kivonás hiba- ill. relatív hibakorlátai.*

<details class="proof-details"><summary>Bizonyítás</summary>

Az

$$|x - y - (\tilde{x} - \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y$$

egyenlőtlenségekből következik az első állítás. Tekintsük az

$$\frac{|x - y - (\tilde{x} - \tilde{y})|}{x + y} \leq \frac{\Delta_x + \Delta_y}{x - y} = \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y,$$

becsléseket, amiből a második állítást kapjuk. $\square$

</details>

Látható, hogy ha egymáshoz közeli számokat vonunk ki egymásból, akkor a relatív hiba megsokszorozódhat, azaz a pontos számjegyek száma jelentősen csökkenhet. Ezt a jelenséget hívjuk *értékes számjegyek végzetes elvesztésének*.

**1.16. példa.** Legyen $x = 12.47531$, $\tilde{x} = 12.47534$, $y = 12.47326$, $\tilde{y} = 12.47325$, akkor $\delta_x = 2.4 \cdot 10^{-6}$ és $\delta_y = 8 \cdot 10^{-7}$. Viszont $x - y = 0.00205$, $\tilde{x} - \tilde{y} = 0.00209$, így $\delta_{x-y} = 0.0195$. Ellenőrizhetjük, hogy $\tilde{x}$ és $\tilde{y}$ 6 pontos számjegyet, $\tilde{x} - \tilde{y}$ viszont csak 2 pontos számjegyet tartalmaz. $\square$

**1.17. tétel.** *Legyen $x, y > 0$. A*

$$\Delta_{x \cdot y} := x\Delta_y + y\Delta_x + \Delta_x \Delta_y, \qquad \text{és} \qquad \delta_{x \cdot y} := \delta_x + \delta_y + \delta_x \delta_y$$

*számok a szorzás hiba- ill. relatív hibakorlátai.*

<details class="proof-details"><summary>Bizonyítás</summary>

A háromszög-egyenlőtlenség szerint

$$
\begin{aligned}
|xy - \tilde{x}\tilde{y}| &= |xy - x\tilde{y} + x\tilde{y} - \tilde{x}\tilde{y}|\\
&\leq x|y - \tilde{y}| + |\tilde{y}||x - \tilde{x}|\\
&\leq x\Delta_y + |\tilde{y}|\Delta_x\\
&= x\Delta_y + |y + \tilde{y} - y|\Delta_x\\
&\leq x\Delta_y + y\Delta_x + \Delta_x \Delta_y.
\end{aligned}
$$

Az első állítás szerint a szorzat relatív hibája

$$\frac{|xy - \tilde{x}\tilde{y}|}{xy} \leq \frac{x\Delta_y + y\Delta_x + \Delta_x \Delta_y}{xy} = \delta_x + \delta_y + \delta_x \delta_y,$$

amiből kapjuk a második állítást. $\square$

</details>

Mivel $\Delta_x$ és $\Delta_y$ általában sokkal kisebb mint $x$ és $y$, és így $\Delta_x \Delta_y$ elhanyagolható $x\Delta_y$ és $y\Delta_x$-hez képest, ezért $x\Delta_y + y\Delta_x$ egy jó becslés a szorzat hibájára. Hasonlóan, $\delta_x + \delta_y$ jó közelítése a szorzat relatív hibakorlátjának.

**1.18. tétel.** *Tegyük fel, hogy $x, y > 0$ és $\delta_y < 1$. Ekkor a*

$$\Delta_{x/y} := \frac{x\Delta_y + y\Delta_x}{y(y - \Delta_y)} \qquad \text{és} \qquad \delta_{x/y} := \frac{\delta_x + \delta_y}{1 - \delta_y}$$

*számok az osztás hiba- ill. relatív hibakorlátai.*

<details class="proof-details"><summary>Bizonyítás</summary>

Elemi átalakításokat használva kapjuk

$$\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right| = \frac{|x\tilde{y} - xy + xy - \tilde{x}y|}{y|\tilde{y}|} \leq \frac{x\Delta_y + y\Delta_x}{y|\tilde{y}|} = \frac{x\Delta_y + y\Delta_x}{y|y - (y - \tilde{y})|}.$$

A $\delta_y < 1$ feltételből következik, hogy $|y - \tilde{y}| \leq \Delta_y < y$, ezért az $|y - (y - \tilde{y})| \geq y - |y - \tilde{y}| \geq y - \Delta_y > 0$ egyenőtlenség felhasználásával következik a tétel első állítása.

A második állítás igazolásához tekintsük

$$\frac{\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right|}{\frac{x}{y}} = \frac{|x(\tilde{y} - y) - y(\tilde{x} - x)|}{x|\tilde{y}|} = \frac{\left|\frac{\tilde{y} - y}{y} - \frac{\tilde{x} - x}{x}\right|}{\left|1 - \frac{y - \tilde{y}}{y}\right|} \leq \frac{\delta_x + \delta_y}{1 - \delta_y}. \qquad \square$$

</details>

Ha $\delta_y$ kicsi, akkor az osztás relatív hibakorlátját jól közelíti $\delta_x + \delta_y$. Hasonlóan, ha $\Delta_y$ $y$-hoz képest elhanyagolható, akkor $\frac{1}{y}\Delta_x + \frac{x}{y^2}\Delta_y$ jó becslése az $\Delta_{x/y}$ hibakorlátnak. Ha $y$ sokkal kisebb, mint $x$, illetve ha $y$ közel van 0-hoz, akkor $\Delta_y$ ill. $\Delta_x$ együtthatója nagy, azaz a hiba a tényezők hibáinak többszöröse lehet.

### Feladatok

1. Legyen $x = 3.50$, $y = 10.00$, $\tilde{x} = 3.47$, $\tilde{y} = 10.02$. Adjon egy becslést a

$$3x + 7y, \quad \frac{1}{y}, \quad x^2, \quad y^3, \quad \frac{4xy}{x + y}$$

   műveletek eredményének hibájára és relatív hibájára (a számítások elvégzése nélkül), ha azokban $x$ és $y$ helyett $\tilde{x}$ és $\tilde{y}$-t használunk! Ezután számítsa ki a tényleges értékeket, hibákat és relatív hibákat, és hasonlítsa össze a kapott becslésekkel!

<details class="reveal-solution"><summary>Megoldás</summary>

Error data: $\Delta_x = |3.50 - 3.47| = 0.03$, $\Delta_y = |10.00 - 10.02| = 0.02$, $\delta_x = 0.03/3.50 \approx 0.857\%$, $\delta_y = 0.02/10.00 = 0.2\%$.

**(a) $3x + 7y$:** estimate $\Delta = 3\Delta_x + 7\Delta_y = 0.09 + 0.14 = 0.23$. Exact $80.5$ vs approx $80.55$, actual error $0.05$ (within bound).

**(b) $4xy/(x+y)$:** exact $140/13.5 \approx 10.370$, approx $\approx 10.310$, actual error $\approx 0.060$. Quotient-rule estimate gives $\approx 10.37\times 0.0126 \approx 0.13$.

**(c) $x^2$:** estimate $\approx 2x\Delta_x = 2(3.50)(0.03) = 0.21$. Exact $12.25$ vs approx $12.0409$, actual error $0.2091$.

**(d) $y^3$:** estimate $\approx 3y^2\Delta_y = 3(100)(0.02) = 6$. Exact $1000$ vs approx $1006.012$, actual error $6.012$.

**(e) $1/y$:** estimate $\approx \Delta_y/y^2 = 0.02/100 = 0.0002$. Exact $0.1$ vs approx $0.0998$, actual error $\approx 0.0002$.

</details>

2. Legyen $\tilde{x}$ az $x$ szám egy közelítése, és $|x - \tilde{x}| \leq \Delta_x$. Legyen $f : \mathbb{R} \to \mathbb{R}$ egy differenciálható függvény, amelyre $|f'(x)| \leq M$ minden $x \in \mathbb{R}$-re. Legyen $y = f(x)$ és tekintsük az $\tilde{y} = f(\tilde{x})$ számot $y$ közelítésének. Adjon becslést a közelítés hibájára! (Használja a Lagrange-féle középérték tételt!)

<details class="reveal-solution"><summary>Megoldás</summary>

By the Mean Value Theorem there exists $\xi$ between $x$ and $\tilde{x}$ with
$$f(x) - f(\tilde{x}) = f'(\xi)(x - \tilde{x}).$$
Taking absolute values and using $|f'(\xi)| \le M$ and $|x - \tilde{x}| \le \Delta_x$:
$$|f(x) - f(\tilde{x})| = |f'(\xi)|\,|x - \tilde{x}| \le M\,\Delta_x.$$
So the absolute error bound is $M\,\Delta_x$. $\square$

</details>
