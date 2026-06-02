## 10.1. Differenciálegyenletek előismeretek

Ebben a fejezetben az

$$y' = f(t, y), \qquad y(t_0) = y_0 \tag{10.1}$$

kezdeti érték probléma közelítő megoldását keressük egy véges $[t_0, T]$ intervallumon. Az egyszerűség kedvéért a közelítő módszerek tárgyalásakor azt az esetet vizsgáljuk, ahol $y = y(t)$ valós értékű függvény, azaz feltesszük, hogy

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

A kapott eredmények könnyen átvihetők differenciálegyenlet-rendszerekre: ekkor $\mathbf{y} = \mathbf{y}(t)$ az ismeretlen függvényekből képzett $m$-dimenziós vektort jelöl, és a vizsgált egyenletrendszert vektor jelöléssel az

$$\mathbf{y}' = \mathbf{f}(t, \mathbf{y}), \qquad \mathbf{y}(t_0) = \mathbf{y}^{(0)}, \tag{10.2}$$

alakban írjuk fel, ahol

$$\mathbf{f} \colon [t_0, T] \times \mathbb{R}^m \to \mathbb{R}^m, \qquad \mathbf{y}^{(0)} \in \mathbb{R}^m.$$

Vezessük be a következő definíciót: Az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ függvény a második változójában teljesíti a *Lipschitz-tulajdonságot* az $L$ Lipschitz-konstanssal, ha

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{minden } t \in [t_0, T] \text{ és } y, \tilde{y} \in \mathbb{R}\text{-re.} \tag{10.3}$$

Ezt a fogalmat könnyen általánosíthatjuk a vektor értékű esetre, ha abszolút érték helyett normát használunk az előző definícióban.

A differenciálegyenletek elméletéből tudjuk, hogy a (10.1) ill. (10.2) kezdeti érték problémák megoldhatóságához annyit kell csak feltenni, hogy az $f$ ill. $\mathbf{f}$ függvények folytonosak legyenek, valamint a megoldások egyértelműségéhez még azt is fel kell tenni, hogy a második változójukban Lipschitz-tulajdonságúak legyenek. Érvényes tehát a következő állítás (a skalár esetre megfogalmazva):

**10.1. tétel.** *Tegyük fel, hogy az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú (valamely $L$ Lipschitz-konstanssal). Ekkor a (10.1) kezdeti érték problémának minden $y_0 \in \mathbb{R}$ kezdeti értékhez létezik egyértelmű megoldása a $[0, T]$ intervallumon.*

Megjegyezzük, hogy a 10.1. tétel és a későbbiekben megfogalmazandó tételek feltételeiben szereplő Lipschitz-tulajdonság, azaz a (10.3) egyenlőtlenség teljesülésének megkövetelése minden $y, \tilde{y} \in \mathbb{R}$-re elég erős megszorítás $f$-re nézve. Ehelyett szokás gyengébb, ún. lokális Lipschitz-tulajdonságot megkövetelni: minden $T > t_0$ és $[a, b]$ intervallumhoz, amelyre $y_0 \in (a, b)$, létezik

---

*10.2. Euler-módszer* — 173

olyan $L > 0$ szám (amely $T$-től és $[a, b]$-től függ), hogy (10.3) teljesül minden $t \in [t_0, T]$, $y, \tilde{y} \in [a, b]$-re. Ez a feltétel a gyakorlatban fellépő $f$ függvények nagyrészére teljesül. Például elég azt feltenni, hogy a folytonos $f$ függvény folytonosan differenciálható a második változója szerint, abból következik, hogy Lipschitz-tulajdonságú a második változójában (3. feladat). A lokális Lipschitz-feltételből viszont nem garantálható, hogy a (10.1) feladat megoldása az egész $[t_0, T]$ intervallumon létezik, csak annyit mondhatunk, hogy létezik olyan $0 < \bar{T} \le T$ szám, hogy a (10.1) feladatnak egyértelmű megoldása létezik a $[t_0, \bar{T}]$ intervallumon (lásd 4. feladat). Ennek a technikai problémának elkerülésére a későbbi bizonyításainkhoz feltesszük, hogy $f$ globálisan, azaz (10.3) értelmében Lipschitz-tulajdonságú.

Ismert, hogy az

$$y^{(m)} = f(t, y, y', \ldots, y^{(m-1)}), \quad y(t_0) = y_0,\ y'(t_0) = y_1, \ldots,\ y^{(m-1)}(t_0) = y_{m-1}$$

$m$-edrendű kezdeti érték feladat ekvivalens egy (10.2) alakú elsőrendű differenciálegyenlet-rendszerrel, ahol

$$\mathbf{y} = (y, y', \ldots, y^{(m-1)})^T, \quad \text{és} \quad \mathbf{y}^{(0)} = (y_0, y_1, \ldots, y_{m-1})^T.$$

Mi az egyszerűség kedvéért csak a (10.1) alakú elsőrendű skaláris differenciálegyenletekkel foglalkozunk a továbbiakban, de a később ismertetett módszerek egyrésze könnyen átfogalmazható differenciálegyenlet-rendszerekre is.

### Feladatok

1. Alakítsa át a következő magasabbrendű differenciálegyenletekhez tartozó kezdeti érték feladatokat (10.2) alakra:

   (a) $y'' + 5y' = e^{2t-1}, \qquad y(0) = 3, \quad y'(0) = -1$,

   (b) $y'' - t^2 y' + ty = 0, \qquad y(1) = 1, \quad y'(1) = 0$,

   (c) $y''' + 4y'' - 2y' + 5y = t^3, \qquad y(-1) = 2, \quad y'(-1) = -3$.

2. Bizonyítsa be, hogy az $y' = \sqrt{|y|}$, $y(0) = 0$ kezdeti érték feladatnak $y(t) = 0$ is $y(t) = t^2/4$ is megoldása. Mutassa meg, hogy az $f(y) = \sqrt{|y|}$ függvény nem Lipschitz-tulajdonságú $y$-ban.

3. Bizonyítsa be, hogy ha az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változója szerint folytonosan parciálisan differenciálható, akkor $f$ lokális Lipschitz-tulajdonságú a második változójában.

4. Igazolja, hogy az $y' = y^2$, $y(0) = 1$ kezdeti érték feladatnak nem létezik megoldása a $[0, T]$ intervallumon, ha $T \ge 1$! Mutassa meg, hogy a $g(y) = y^2$ függvény nem globális Lipschitz-tulajdonságú $y$-ban, viszont lokális Lipschitz-tulajdonságú!
