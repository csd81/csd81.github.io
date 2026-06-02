## 1.4. A véges számábrázolás következményei

---

> **Példa**
>
> Oldjuk meg az
>
> $$x^2 - 83.5x + 1.5 = 0$$
>
> másodfokú egyenletet négyjegyű aritmetikát használva:
>
> $$\tilde{x} = \frac{83.5 \pm \sqrt{83.5^2 - 4 \cdot 1.5}}{2} = \frac{83.5 \pm \sqrt{6972 - 6.000}}{2} = \frac{83.5 \pm 83.46}{2},$$
>
> így
>
> $$\tilde{x}_1 = \frac{167.0}{2} = 83.50, \quad \text{és} \quad \tilde{x}_2 = \frac{0.040}{2} = 0.020.$$
>
> Az egyenlet pontos megoldása (néhány tizedesjegy pontossággal)
>
> $$x_1 = 83.482032 \quad \text{ill.} \quad x_2 = 0.0179679,$$
>
> ezért a két gyök közelítésének relatív hibái
>
> $$\delta_1 = 0.0002152 \qquad \text{és} \qquad \delta_2 = 0.113096.$$

---

Tekintsük az $ax^2 + bx + c = 0$ másodfokú egyenlet két gyöke közül az

$$x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}.\tag{1}$$

gyököt. Amikor $b$ negatív, és $4ac$ sokkal kisebb, mint $b^2$, két egymáshoz közeli számot vonunk ki egymásból a számlálóban, azaz fellép az értékes számjegyek végzetes elvesztésének jelensége. Ennek kiküszöbölésére gyöktelenítsük a számlálót:

$$x_2 = \frac{b^2 - (b^2 - 4ac)}{2a(-b + \sqrt{b^2 - 4ac})} = \frac{2c}{-b + \sqrt{b^2 - 4ac}}.\tag{2}$$

Ez a képlet algebrailag ekvivalens az (1) formulával. A különbség viszont az, hogy ebben nem szerepel kivonás (a nevezőben két pozitív számot adunk össze). Ha $b$ pozitív, akkor a másik gyökképlettel ismételhetjük meg ugyanezt a trükköt, és kaphatjuk az

$$x_1 = \frac{2c}{-b - \sqrt{b^2 - 4ac}}\tag{3}$$

formulát.

---

> **Példa**
>
> Számítsuk ki az előző példa második gyökét újra, négyjegyű aritmetikát és a gyökképlet (3) alakját használva:
>
> $$\tilde{x}_2 = \frac{2 \cdot 1.5}{83.5 + \sqrt{83.5^2 - 4 \cdot 1.5}} = \frac{3}{83.5 + 83.46} = \frac{3}{167.0} = 0.01796.$$
>
> Ennek a numerikus gyöknek a relatív hibája $\delta_2 = 0.00044$.

---

> **Példa**
>
> Tegyük fel, hogy a
>
> $$\cos^2 x - \sin^2 x.$$
>
> kifejezést kell kiértékelnünk. Ha $x = \frac{\pi}{4}$, akkor a kifejezés pontos értéke 0, azaz ha $x$ $\frac{\pi}{4}$-hez közel van, akkor a kifejezés két egymáshoz közeli szám különbsége lesz, ahol fellép a pontosság elvesztése. Ezt könnyen kikerülhetjük, ha az eredeti kifejezés helyett az azzal algebrailag ekvivalens
>
> $$\cos^2 x - \sin^2 x = \cos 2x$$
>
> alakot használjuk.

---

> **Példa**
>
> Tekintsük az $f(x) = e^x - 1$ függvényt. Az $x = 0$ közelében ismét két közel azonos számot kell egymásból kivonni, viszont most nincs olyan azonosság, amellyel ezt el lehetne kerülni. Ha $e^x$ Taylor-sorát vesszük, akkor az 1-gyel való kivonással tudunk egyszerűsíteni:
>
> $$
> \begin{aligned}
> f(x) &= 1 + x + \frac{x}{2} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots - 1\\
> &= x + \frac{x}{2} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots.
> \end{aligned}
> $$
>
> Tehát $f$-et érdemes ennek a végtelen sornak egy véges közelítő összege segítségével kiértékelni.

---

Egy más jellegű problémát vet fel a következő példa.

> **Példa**
>
> Számítsuk ki az
>
> $$y = \frac{15^{40}}{40!}$$
>
> értékét. A probléma a következő: ha a képlet alapján először a számlálót és a nevezőt külön akarjuk kiszámolni, rögtön beleütközünk a számábrázolás szabta korlátokba, egyszeres pontosság használata esetén már túlcsordul a számolás. Másrészt tudjuk, hogy $a^n/n! \to 0$, ha $n \to \infty$, így a számolás végeredménye várhatóan kis szám lesz. Rendezzük úgy a számítást, hogy minden részeredmény benne maradjon az ábrázolható számok tartományában:
>
> $$\frac{15^{40}}{40!} = \frac{15}{40} \cdot \frac{15}{39} \cdot \frac{15}{38} \cdots \frac{15}{1}.$$

---

> **Példa folyt.**
>
> Ezt a képletet a számítógépen egy egyszerű **for** ciklussal kiszámolhatjuk:
>
> ```
> y ← 15
> for i = 2, ..., 40 do
>     y ← y · (15/i)
> end do
> output(y)
> ```
>
> Az eredmény 0.135521.

---

> **Példa**
>
> Számítsuk ki az
>
> $$A = 1.000 + 0.0003 + 0.0003 + \cdots + 0.0003 = 1.000 + \sum_{i=1}^{1000} 0.0003$$
>
> összeget, négyjegyű aritmetikát használva! Balról jobbra értékeljük ki az összeadásokat, így először az $1.000 + 0.0003$ összeget kell kiszámítanunk. Négyjegyű aritmetika szerint
>
> $$1.000 + 0.0003 = 1.0003 = 1.000$$
>
> kerekítés után. Ehhez hozzáadva a következő számot, a 4 jegyre kerekítés miatt, újra $1.000 + 0.0003 + 0.0003 = 1.000$ lesz. Látható, hogy $A = 1.000$ lesz a számolás eredménye.

---

> **Példa folyt.**
>
> Nézzük most újra az előbbi összeadást, de más sorrendben:
>
> $$B = 0.0003 + 0.0003 + \cdots + 0.0003 + 1.000 = \sum_{i=1}^{1000} 0.0003 + 1.000.$$
>
> Most először számítsuk ki
>
> $$0.0003 + 0.0003 = 0.0006.$$
>
> Ezután:
>
> $$0.0003 + 0.0003 + 0.0003 = 0.0009,$$
>
> és hasonlóan
>
> $$B = \sum_{i=1}^{1000} 0.0003 + 1.000 = 0.3 + 1.000 = 1.300.$$
>
> A kettőnél több tagú összeadás nem kommutatív a számítógépeken!

Amikor lehet, az összeadásokat érdemes a tagok növekvő sorrendjében végezni.
