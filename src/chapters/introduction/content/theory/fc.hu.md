## 1.4. A véges számábrázolás következményei

**1.19. példa.** Oldjuk meg az

$$x^2 - 83.5x + 1.5 = 0$$

másodfokú egyenletet négyjegyű aritmetikát használva.

A másodfokú egyenlet megoldóképlete szerint és négyjegyű aritmetikát használva a numerikus megoldás

$$\tilde{x} = \frac{83.5 \pm \sqrt{83.5^2 - 4 \cdot 1.5}}{2} = \frac{83.5 \pm \sqrt{6972 - 6.000}}{2} = \frac{83.5 \pm 83.46}{2},$$

azaz

$$\tilde{x}_1 = \frac{167.0}{2} = 83.50, \quad \text{és} \quad \tilde{x}_2 = \frac{0.040}{2} = 0.020.$$

Az egyenlet pontos megoldása $x_1 = 83.482032$ ill. $x_2 = 0.0179679$. Ha kiszámoljuk a két gyök közelítésének relatív hibáit, a $\delta_1 = 0.0002152$ és $\delta_2 = 0.113096$ értékeket kapjuk. Az első numerikus gyök tehát 4 számjegy, a második viszont csak 1 számjegy pontosságú közelítés, azaz a két gyök pontossága között 3 nagyságrendi különbség van. Mi ennek az oka? A második gyök kiszámításakor a gyökképletben két egymáshoz közeli számot kellett kivonni egymásból. Az előző szakaszból tudjuk, hogy ez járhat a pontosság elvesztésével, és ezt tapasztalhattuk a jelenlegi számolásban is. $\square$

Tekintsük az $ax^2 + bx + c = 0$ másodfokú egyenlet két gyöke közül az

$$x_2 = \frac{-b - \sqrt{b^2 - 4ac}}{2a}\tag{1.2}$$

gyököt. Amikor $b$ negatív, és $4ac$ sokkal kisebb, mint $b^2$, két egymáshoz közeli számot vonunk ki egymásból a számlálóban, azaz fellép az értékes számjegyek végzetes elvesztésének jelensége. (Ezt az esetet vizsgáltuk az 1.19. példában.) Ennek kiküszöbölésére gyöktelenítsük a számlálót:

$$x_2 = \frac{b^2 - (b^2 - 4ac)}{2a(-b + \sqrt{b^2 - 4ac})} = \frac{2c}{-b + \sqrt{b^2 - 4ac}}.\tag{1.3}$$

Ez a képlet algebrailag ekvivalens az (1.2) formulával. A különbség viszont az, hogy ebben nem szerepel kivonás (a nevezőben két pozitív számot adunk össze). Ha $b$ pozitív, akkor a másik gyökképlettel ismételhetjük meg ugyanezt a trükköt, és kaphatjuk az

$$x_1 = \frac{2c}{-b - \sqrt{b^2 - 4ac}}\tag{1.4}$$

formulát.

**1.20. példa.** Számítsuk ki az 1.19. példa második gyökét újra, négyjegyű aritmetikát és a gyökképlet (1.4) alakját használva!

$$\tilde{x}_2 = \frac{2 \cdot 1.5}{83.5 + \sqrt{83.5^2 - 4 \cdot 1.5}} = \frac{3}{83.5 + 83.46} = \frac{3}{167.0} = 0.01796.$$

Ennek a numerikus gyöknek a relatív hibája $\delta_2 = 0.00044$, azaz négy számjegy pontosságú a közelítés. $\square$

**1.21. példa.** Tegyük fel, hogy a $\cos^2 x - \sin^2 x$ kifejezést kell kiértékelnünk. Ha $x = \frac{\pi}{4}$, akkor a kifejezés pontos értéke 0, azaz ha $x$ $\frac{\pi}{4}$-hez közel van, akkor a kifejezés két egymáshoz közeli szám különbsége lesz, ahol fellép az értékes számjegyek elvesztése. Ezt könnyen kikerülhetjük, ha az eredeti kifejezés helyett az azzal algebrailag ekvivalens $\cos 2x$ alakot használjuk. $\square$

Az eddigi példáinkban algebrai azonosságot használva tudtuk a pontosság elvesztését megakadályozni. A következő példákban ugyanezt más módszerrel tesszük meg.

**1.22. példa.** Tekintsük az $f(x) = e^x - 1$ függvényt. Az $x = 0$ közelében ismét két közel azonos számot kell egymásból kivonni, viszont most nincs olyan azonosság, amellyel ezt el lehetne kerülni. Ha $e^x$ Taylor-sorát vesszük, akkor az 1-gyel való kivonással tudunk egyszerűsíteni:

$$f(x) = x + \frac{x}{2} + \frac{x^3}{3!} + \cdots + \frac{x^n}{n!} + \cdots.$$

Tehát $f$-et érdemes ennek a végtelen sornak egy véges közelítő összege segítségével kiértékelni. $\square$

Egy más jellegű problémát vet fel a következő példa.

**1.23. példa.** Számítsuk ki az $y = 20^{50}/50!$ szám értékét! A probléma a következő: ha a képlet alapján először a számlálót és a nevezőt külön akarjuk kiszámolni, rögtön beleütközünk a számábrázolás szabta korlátokba, egyszeres pontosság használata esetén már túlcsordul a számolás. Másrészt tudjuk, hogy $a^n/n! \to 0$, ha $n \to \infty$, így a számolás végeredménye várhatóan kis szám lesz. Rendezzük úgy a számítást, hogy minden részeredmény benne maradjon az ábrázolható számok tartományában:

$$\frac{20^{50}}{50!} = \frac{20}{50} \cdot \frac{20}{49} \cdot \frac{20}{48} \cdots \frac{20}{1}.$$

Ezt a képletet a számítógépen egy egyszerű **for** ciklussal kiszámolhatjuk:

```
y ← 20
for i = 2, ..., 50 do
    y ← y · (20/i)
end do
output(y)
```

A számolás eredménye: 3.701902 (6 tizedesjegy pontossággal). $\square$

**1.24. példa.** Számítsuk ki az

$$A = 10.00 + 0.002 + 0.002 + \cdots + 0.002 = 10.00 + \sum_{i=1}^{10} 0.002$$

összeget, négyjegyű aritmetikát használva! Balról jobbra értékeljük ki az összeadásokat, így először az $10.00 + 0.002$ összeget kell kiszámítanunk. Négyjegyű aritmetika szerint $10.00 + 0.002 = 10.002 = 10.00$ kerekítés után. Ehhez hozzáadva a következő számot, a 4 jegyre kerekítés miatt, újra $10.00 + 0.002 + 0.002 = 10.00$ lesz. Látható, hogy $A = 10.00$ lesz a számolás eredménye.

Nézzük most újra az előbbi összeadást, de más sorrendben:

$$B = 0.002 + 0.002 + \cdots + 0.002 + 10.00 = \sum_{i=1}^{10} 0.002 + 10.00.$$

Most először a $0.002 + 0.002 = 0.004$ összeget számítjuk ki. Ezt a négyjegyű aritmetikában is pontosan tudjuk számolni! Ezután sorra számolható: $0.002 + 0.002 + 0.002 = 0.006$ stb, végül $\sum_{i=1}^{10} 0.002 = 0.02$. Az eredmény tehát ebben a sorrendben $B = 10.02$. Ezen összeadások egyikében sem lépett fel kerekítési hiba, mivel minden részeredményt pontosan tárolhattunk a négyjegyű aritmetikában.

Ez a példánk mutatja azt is, hogy a kettőnél több tagú összeadás nem kommutatív művelet a számítógépeken. $\square$

Az előző példa tanulsága az, hogy, amikor lehet, az összeadásokat érdemes a tagok növekvő sorrendjében végezni, mert ekkor van a legnagyobb esély arra, hogy a számolás során kapott részösszeg azonos nagyságrendű legyen a következő összeadandóval, és így minél kisebb legyen a kerekítési hiba.

### Feladatok

1. Vizsgálja meg, hogy a következő kifejezésekben mikor lép fel az értékes számjegyek elvesztésének jelensége! Hogyan tudjuk kiküszöbölni a pontosság csökkenését?

   (a) $\ln x - 1$,

   (b) $\sqrt{x + 9} - 3$,

   (c) $\sin x - x$,

   (d) $1 - \cos x$,

   (e) $(1 - \cos x)/\sin x$,

   (f) $(\cos x - e^{-x})/x$.

<details class="reveal-solution"><summary>Megoldás</summary>

Loss of significance occurs when subtracting nearly equal numbers; rewrite each to avoid it.

**(a) $\ln x - 1$** — problematic when $\ln x \approx 1$, i.e. $x \approx e$. Use $\ln x - 1 = \ln(x/e) = \ln\!\big(1 + \tfrac{x-e}{e}\big)$ and expand $\ln(1+u) \approx u - u^2/2 + \cdots$ with $u = (x-e)/e$.

**(b) $\sqrt{x+9} - 3$** — problematic near $x \approx 0$. Rationalize:
$$\sqrt{x+9} - 3 = \frac{(\sqrt{x+9}-3)(\sqrt{x+9}+3)}{\sqrt{x+9}+3} = \frac{x}{\sqrt{x+9}+3}.$$

**(c) $\sin x - x$** — problematic near $x \approx 0$. Use the Taylor series $\sin x - x = -\tfrac{x^3}{3!} + \tfrac{x^5}{5!} - \cdots$.

**(d) $1 - \cos x$** — problematic near $x \approx 0$. Use $1 - \cos x = 2\sin^2(x/2)$.

**(e) $(1-\cos x)/\sin x$** — problematic near $x \approx 0$. Use
$$\frac{1-\cos x}{\sin x} = \frac{2\sin^2(x/2)}{2\sin(x/2)\cos(x/2)} = \tan(x/2).$$

**(f) $(\cos x - e^{-x})/x$** — problematic near $x \approx 0$. Using Taylor series, $\cos x - e^{-x} = x - x^2 + \tfrac{x^3}{6} + \cdots$, so $(\cos x - e^{-x})/x = 1 - x + \tfrac{x^2}{6} + \cdots$.

</details>

2. Négyjegyű aritmetikát használva számítsa ki az $2.274 + 12.04 + 0.4233 + 0.1202 + 0.2204$ összeget, majd rendezze a tagokat növekvő sorrendbe, és úgy is számítsa ki az összeget!

<details class="reveal-solution"><summary>Megoldás</summary>

**Original order (left to right), 4-digit rounding:**
```
2.274 + 12.04 = 14.314 → 14.31
14.31 + 0.4233 = 14.7333 → 14.73
14.73 + 0.1202 = 14.8502 → 14.85
14.85 + 0.2204 = 15.0704 → 15.07
```
Result: **15.07**.

**Increasing order $0.1202 + 0.2204 + 0.4233 + 2.274 + 12.04$:**
```
0.1202 + 0.2204 = 0.3406
0.3406 + 0.4233 = 0.7639
0.7639 + 2.274 = 3.0379 → 3.038
3.038 + 12.04 = 15.078 → 15.08
```
Result: **15.08**.

Exact sum $= 15.0779$. The original order has error $0.0079$, the sorted order only $0.0021$ — summing from smallest to largest magnitude reduces rounding-error accumulation.

</details>

---

