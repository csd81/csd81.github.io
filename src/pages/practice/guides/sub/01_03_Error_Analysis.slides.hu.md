## 1.3. Hibaanalízis

---

Legyen $x$ és $y$ pozitív, és tekintsük az $\tilde{x}$ és $\tilde{y}$ számokat $x$ és $y$ közelítésének. Legyen

$$|x - \tilde{x}| \leq \Delta_x \qquad \text{és} \qquad |y - \tilde{y}| \leq \Delta_y$$

a közelítések hibakorlátja. A megfelelő relatív hibakorlátokat

$$\delta_x := \frac{\Delta_x}{x} \qquad \text{és} \qquad \delta_y := \frac{\Delta_y}{y}$$

jelöljük.

A következő kérdéssel foglalkozunk: az $x$ és $y$ számokon egy aritmetikai műveletet (összeadás, kivonás, szorzás, osztás) kell elvégeznünk, és ahelyett az $\tilde{x}$ és $\tilde{y}$ számokon végezzük el a műveletet, és annak (pontos) eredményével közelítjük az eredeti művelet eredményét. Adjuk meg, legfeljebb mekkora lehet a közelítés hibája ill. relatív hibája.

---

Tekintsük az összeadást. Keresünk $\Delta_{x+y}$ és $\delta_{x+y}$ korlátokat, amelyekre

$$|x + y - (\tilde{x} + \tilde{y})| \leq \Delta_{x+y} \quad \text{és} \quad \frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} \leq \delta_{x+y}.$$

> **Theorem**
>
> A
>
> $$\Delta_{x+y} := \Delta_x + \Delta_y \qquad \text{és} \qquad \delta_{x+y} := \max\{\delta_x, \delta_y\}$$
>
> számok az összeadás hiba- ill. relatív hibakorlátai.

---

> **Bizonyítás**
>
> A háromszög-egyenlőtlenséget és $\Delta_x$ és $\Delta_y$ definícióját alkalmazva
>
> $$|x + y - (\tilde{x} + \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y.$$
>
> Ebből kapjuk hogy $\Delta_x + \Delta_y$ egy hibakorlátja lesz az összeadásnak. Az előbbi összefüggést felhasználva
>
> $$
> \begin{aligned}
> \frac{|x + y - (\tilde{x} + \tilde{y})|}{x + y} &\leq \frac{\Delta_x + \Delta_y}{x + y} = \frac{\Delta_x}{x + y} + \frac{\Delta_y}{x + y}\\
> &= \frac{x}{x + y}\frac{\Delta_x}{x} + \frac{y}{x + y}\frac{\Delta_y}{y} = \frac{x}{x + y}\delta_x + \frac{y}{x + y}\delta_y\\
> &\leq \max\{\delta_x, \delta_y\}.
> \end{aligned}
> $$
>
> Tehát $\max\{\delta_x, \delta_y\}$ egy relatív hibakorlátja az összeadásnak.

---

A tétel a legrosszabb esetre vonatkozik. A gyakorlatban a hibák kiegyenlíthetik egymást.

> **Példa**
>
> Legyen $x = 1$, $y = 2$, $\tilde{x} = 1.1$ és $\tilde{y} = 1.8$. Ekkor $x + y = 3$ és $\tilde{x} + \tilde{y} = 2.9$, így az összeadás hibája
>
> $$|x + y - (\tilde{x} + \tilde{y})| = 0.1,$$
>
> de
>
> $$\Delta_x + \Delta_y = 0.1 + 0.2 = 0.3.$$

---

> **Theorem**
>
> Legyen $x > y > 0$. A
>
> $$\Delta_{x-y} := \Delta_x + \Delta_y \qquad \text{és} \qquad \delta_{x-y} := \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y$$
>
> számok a kivonás hiba- ill. relatív hibakorlátai.

> **Bizonyítás**
>
> Az
>
> $$|x - y - (\tilde{x} - \tilde{y})| \leq |x - \tilde{x}| + |y - \tilde{y}| \leq \Delta_x + \Delta_y$$
>
> egyenlőtlenségekből következik az első állítás. Tekintsük az
>
> $$
> \begin{aligned}
> \frac{|x - y - (\tilde{x} - \tilde{y})|}{x - y} &\leq \frac{\Delta_x + \Delta_y}{x - y}\\
> &= \frac{x}{x - y}\frac{\Delta_x}{x} + \frac{y}{x - y}\frac{\Delta_y}{y}\\
> &= \frac{x}{x - y}\delta_x + \frac{y}{x - y}\delta_y,
> \end{aligned}
> $$
>
> becsléseket, amiből a második állítást kapjuk.

---

Látható, hogy ha egymáshoz közeli számokat vonunk ki egymásból, akkor a relatív hiba megsokszorozódhat, azaz a pontos számjegyek száma jelentősen csökkenhet. Ezt a jelenséget hívjuk **értékes számjegyek végzetes elvesztésének**.

> **Példa**
>
> Legyen $x = 12.47531$, $\tilde{x} = 12.47534$, $y = 12.47326$, $\tilde{y} = 12.47325$, akkor
>
> $$\delta_x = 2.4 \cdot 10^{-6} \qquad \text{és} \qquad \delta_y = 8 \cdot 10^{-7}.$$
>
> Viszont
>
> $$x - y = 0.00205, \qquad \tilde{x} - \tilde{y} = 0.00209,$$
>
> így
>
> $$\delta_{x-y} = 0.0195.$$

---

> **Theorem**
>
> Legyen $x, y > 0$. A
>
> $$\Delta_{x \cdot y} := x\Delta_y + y\Delta_x + \Delta_x \Delta_y, \qquad \text{és} \qquad \delta_{x \cdot y} := \delta_x + \delta_y + \delta_x \delta_y$$
>
> számok a szorzás hiba- ill. relatív hibakorlátai.

> **Bizonyítás**
>
> A háromszög-egyenlőtlenség szerint
>
> $$
> \begin{aligned}
> |xy - \tilde{x}\tilde{y}| &= |xy - x\tilde{y} + x\tilde{y} - \tilde{x}\tilde{y}|\\
> &\leq x|y - \tilde{y}| + |\tilde{y}||x - \tilde{x}|\\
> &\leq x\Delta_y + |\tilde{y}|\Delta_x\\
> &= x\Delta_y + |y + \tilde{y} - y|\Delta_x\\
> &\leq x\Delta_y + y\Delta_x + \Delta_x \Delta_y.
> \end{aligned}
> $$
>
> Az első állítás szerint a szorzat relatív hibája
>
> $$\frac{|xy - \tilde{x}\tilde{y}|}{xy} \leq \frac{x\Delta_y + y\Delta_x + \Delta_x \Delta_y}{xy} = \delta_x + \delta_y + \delta_x \delta_y.$$

---

Mivel $\Delta_x$ és $\Delta_y$ általában sokkal kisebb mint $x$ és $y$, és így $\Delta_x \Delta_y$ elhanyagolható $x\Delta_y$ és $y\Delta_x$-hez képest, ezért

$$x\Delta_y + y\Delta_x$$

egy jó becslés a szorzat hibájára. Hasonlóan,

$$\delta_x + \delta_y$$

jó közelítése a szorzat relatív hibakorlátjának.

---

> **Theorem**
>
> Tegyük fel, hogy $x, y > 0$ és $\delta_y < 1$. Ekkor a
>
> $$\Delta_{x/y} := \frac{x\Delta_y + y\Delta_x}{y(y - \Delta_y)} \qquad \text{és} \qquad \delta_{x/y} := \frac{\delta_x + \delta_y}{1 - \delta_y}$$
>
> számok az osztás hiba- ill. relatív hibakorlátai.

> **Bizonyítás**
>
> Elemi átalakításokat használva kapjuk
>
> $$\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right| = \frac{|x\tilde{y} - xy + xy - \tilde{x}y|}{y|\tilde{y}|} \leq \frac{x\Delta_y + y\Delta_x}{y|\tilde{y}|} = \frac{x\Delta_y + y\Delta_x}{y|y - (y - \tilde{y})|}.$$
>
> A $\delta_y < 1$ feltételből következik, hogy $|y - \tilde{y}| \leq \Delta_y < y$, ezért az $|y - (y - \tilde{y})| \geq y - |y - \tilde{y}| \geq y - \Delta_y > 0$ egyenőtlenség felhasználásával következik a tétel első állítása. A második állítás igazolásához tekintsük
>
> $$\frac{\left|\frac{x}{y} - \frac{\tilde{x}}{\tilde{y}}\right|}{\frac{x}{y}} = \frac{|x(\tilde{y} - y) - y(\tilde{x} - x)|}{x|\tilde{y}|} = \frac{\left|\frac{\tilde{y} - y}{y} - \frac{\tilde{x} - x}{x}\right|}{\left|1 - \frac{y - \tilde{y}}{y}\right|} \leq \frac{\delta_x + \delta_y}{1 - \delta_y}.$$

---

Ha $\delta_y$ kicsi, akkor

$$\delta_{x/y} \approx \delta_x + \delta_y.$$

Hasonlóan, ha $\Delta_y$ $y$-hoz képest elhanyagolható, akkor

$$\Delta_{x/y} \approx \frac{1}{y}\Delta_x + \frac{x}{y^2}\Delta_y.$$

Ha $y$ sokkal kisebb, mint $x$, illetve ha $y$ közel van 0-hoz, akkor $\Delta_y$ ill. $\Delta_x$ együtthatója nagy, azaz a hiba a tényezők hibáinak többszöröse lehet.

---

> **Példa**
>
> Legyen $x = 42.721531$, $\tilde{x} = 42.721534$, $y = 0.00324721$ és $\tilde{y} = 0.00324732$. Ekkor
>
> $$\Delta_x = 3 \cdot 10^{-6} \qquad \text{és} \qquad \Delta_y = 1.1 \cdot 10^{-7}.$$
>
> Másrészt
>
> $$\frac{x}{y} \approx 13156.38071, \qquad \frac{\tilde{x}}{\tilde{y}} \approx 13155.93597,$$
>
> és így
>
> $$\Delta_{x/y} \approx 0.44474.$$
>
> Ekkor azt látjuk, hogy az osztás eredményének a hibája sokkal nagyobb, mint az $x$ és $y$ hibája.

---
