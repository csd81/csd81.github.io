# 10. fejezet

# Közönséges differenciálegyenletek

Ebben a fejezetben közönséges differenciálegyenletek numerikus megoldásait vizsgáljuk az Euler-, Taylor-, és Runge–Kutta módszerekkel.

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

## 10.2. Euler-módszer

Tekintsük a (10.1) kezdeti érték problémát. Ebben a szakaszban a probléma legegyszerűbb numerikus megoldási módszerét, az ún. *Euler-módszert* vizsgáljuk. A célunk az, hogy egy $[t_0, T]$ véges intervallumon, előre megadott véges sok pontban közelítsük a megoldást. Jelöljük ezeket az alappontokat (a $t_0$ ponttal kezdve): $t_0 < t_1 < \cdots < t_n = T$-vel, és az alappontok távolságát $h_i$-vel, azaz $h_i = t_{i+1} - t_i$ $(i = 0, \ldots, n-1)$. Nem kell feltennünk a második definíciásakor, hogy az alappontok ekvidisztánsak (azaz $h_i = h$ állandó), de a gyakorlatban természetesen erre az esetre alkalmazzuk a leggyakrabban a módszert. Az alappontokbeli $y(t_i)$ megoldásértékek közelítésére definiáljuk a $z_i$, ún. *Euler-sorozatot* a

$$z_{i+1} = z_i + h_i f(t_i, z_i), \quad (i = 0, 1, 2, \ldots, n-1), \qquad z_0 = y_0 \tag{10.4}$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

174 — *10. Közönséges differenciálegyenletek*

rekurzív képlettel.

Most háromféleképpen is levezetjük az Euler-módszer képletét, majd utána vizsgáljuk a közelítés hibáját.

**1. levezetés:** Tegyük fel, hogy $y(t)$ megoldása a (10.1) kezdeti érték problémának. Mivel $y(t)$ teljesíti a kezdeti feltételt, tudjuk az $t_0$ alappontbeli értékét: $y(t_0) = y_0$, ezért $z_0$ a pontos értéke a megoldásnak a $t_0$ pontban. Hogyan becsülhetjük $y(t_1)$-et? Közelítsük az $y(t)$ függvényt a $t_0$ pontjához tartozó elsőrendű Taylor-polinomjával (azaz geometriailag a függvény grafikonját az adott ponthoz tartozó érintőjével közelítjük): $y(t) \approx y(t_0) + y'(t_0)(t - t_0)$. Ekkor a $t = t_1$ pontban kapjuk, hogy

$$y(t_1) \approx y(t_0) + y'(t_0)h_1. \tag{10.5}$$

Ebben a képletben szerepel még a megoldás deriváltja a $t_0$ pontban, ami a (10.1) egyenletet alapján $y'(t_0) = f(t_0, y(t_0))$. Mivel $y(t_0) = y_0 = z_0$, így $y'(t_0)$-t ki tudjuk számítani az egyenlet jobb oldala, $t_0$ és a már definiált $z_0$ érték segítségével: $y'(t_0) = f(t_0, z_0)$. Ezért a (10.5) összefüggésből kapjuk, hogy $y(t_1) \approx z_1 := z_0 + h_1 f(t_0, z_0)$. Használhatjuk tehát $z_1$-et, mint a megoldás $t_1$-beli közelítését. Hogyan közelítsük $y(t_2)$-t, ill általában $y(t_{i+1})$-et, ha már ismert az $y(t_i)$ megoldásérték $z_i$ közelítése? Az előző ötletet követve $y(t_{i+1}) \approx y(t_i) + y'(t_i)h_i$, és mivel $y(t_i) \approx z_i$ és így $y'(t_i) = f(t_i, y(t_i)) \approx f(t_i, z_i)$, kapjuk, hogy $y(t_{i+1}) \approx z_{i+1}$, ahol $z_{i+1}$-et a (10.4) képlettel definiáltuk.

**2. levezetés:** A megoldás teljesíti az $y'(t_i) = f(t_i, y(t_i))$ összefüggést. Elsőrendű numerikus differenciálási képletet használva

$$y'(t_i) \approx \frac{y(t_{i+1}) - y(t_i)}{h_i},$$

azaz

$$\frac{y(t_{i+1}) - y(t_i)}{h_i} \approx f(t_i, y(t_i)).$$

Ezt átrendezve kapjuk, hogy $y(t_{i+1}) \approx y(t_i) + h_i f(t_i, y(t_i))$. Feltéve hogy $y(t_i) \approx z_i$, a (10.4) képlettel definiált $z_{i+1}$ teljesíti az $y(t_{i+1}) \approx z_{i+1}$ összefüggést.

**3. levezetés:** Az $y'(t) = f(t, y(t))$ differenciálegyenlet mindkét oldalát integrálva $t_i$-től $t_{i+1}$-ig kapjuk, hogy

$$y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds,$$

azaz

$$y(t_{i+1}) = y(t_i) + \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds. \tag{10.6}$$

A probléma az, hogy nem ismerjük az $f(s, y(s))$ összetett függvényt, mivel nem ismerjük $y(s)$ képletét. Így az integrál pontos értékét nem tudjuk kiszámítani. Használjunk egy egyszerű integrál közelítő képletet:

$$\int_a^b g(s)\, ds \approx g(a)(b - a). \tag{10.7}$$

Ez a közelítő képlet alkalmazható ebben az esetben, mivel ehhez csak a függvény intervallum bal oldali végpontjához tartozó értéke szükséges, amit feltesszük, hogy már ismerünk. Ezt a közelítést alkalmazva $\int_{t_i}^{t_{i+1}} f(s, y(s))\, ds \approx h_i f(t_i, y(t_i))$, azaz

$$y(t_{i+1}) \approx y(t_i) + h_i f(t_i, y(t_i)),$$

amiből szintén megkapjuk a (10.4) formulát.

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.2. Euler-módszer* — 175

Az Euler-módszer 1. levezetése alapján a módszerhez a következő geometriai interpretációt rendelhetjük hozzá: az $i$-edik lépésben megkapott $(t_i, z_i)$ pontból egy egyenes (a ponton átmenő megoldás érintője) mentén lépünk tovább egy „egységet", azaz az egyenesen levő, $t_{i+1}$ első koordinátájú pontba.

**10.2. példa.** Tekintsük az

$$y' = 2y - 10t^2 + 2t, \qquad y(0) = 1. \tag{10.8}$$

kezdeti érték feladatot! Könnyen ellenőrizhetjük, hogy a feladat analitikus megoldása $y(t) = 5t^2 + 4t + 2 - e^{2t}$. Vegyük egy $h$ lépésközhöz tartozó $t_i = ih$ ekvidisztáns beosztást! Az Euler-sorozatot a

$$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = 1.$$

rekurzív definícióval számoljuk ki. A 10.1. táblázat tartalmazza a közelítő sorozat $h = 0.2$, $0.1$ és $0.05$ lépésközökhöz tartozó első néhány tagját és a közelítés $e_i = |y(t_i) - z_i|$ hibáját. Láthatjuk, hogy a lépésközt csökkentve a közelítés hibája is csökken, sőt azt is észrevehetjük, hogy a hiba $h$-val lineárisan arányos: ha felezzük a lépésközt, a hiba is körülbelül fele akkora lesz. $\square$

**10.1. táblázat. Euler-módszer**

| $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | | | $h = 0.05$ | |
|------|---------|---|--------|--------|----|--------|--------|----|--------|--------|
| | | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ |
| 0.0 | 1.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 |
| 0.2 | 1.0652 | 1 | 1.1000 | 0.0348 | 2 | 1.0830 | 0.0178 | 4 | 1.0742 | 0.0090 |
| 0.4 | 1.0614 | 2 | 1.1340 | 0.0726 | 4 | 1.0986 | 0.0372 | 8 | 1.0802 | 0.0188 |
| 0.6 | 0.9899 | 3 | 1.1034 | 0.1135 | 6 | 1.0481 | 0.0583 | 12 | 1.0194 | 0.0295 |
| 0.8 | 0.8518 | 4 | 1.0097 | 0.1579 | 8 | 0.9329 | 0.0811 | 16 | 0.8930 | 0.0411 |
| 1.0 | 0.6487 | 5 | 0.8547 | 0.2060 | 10 | 0.7547 | 0.1060 | 20 | 0.7025 | 0.0538 |

Most rátérünk az Euler-módszer konvergenciájának vizsgálatára. Az egyszerűség kedvéért tegyük fel, hogy ekvidisztáns osztópontokra alkalmazzuk az Euler-módszert, azaz $h_i = h$ konstans. Szükségünk lesz a következő definícióra: Az Euler-módszer $(i+1)$-edik *lokális képlethibáján* a

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i)), \qquad (i = 0, 1, \ldots, n-1) \tag{10.9}$$

számot értjük, ahol $y(t)$ a (10.1) feladat pontos megoldása.

Átrendezve a (10.9) egyenletet következik, hogy

$$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \tau_{i+1}h. \tag{10.10}$$

Innen látható, hogy $\tau_{i+1}h$ adja a numerikus módszer hibáját az $(i+1)$-edik lépés megtételekor, ha feltesszük, hogy az $i$-edik lépésben a pontos értékből indulunk ki.

Vegyük $y(t)$ elsőrendű Taylor-közelítését a $t_i$ pont körül:

$$y(t) = y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(\xi)(t - t_i)^2.$$

Ebből kapjuk, használva az $y'(t_i) = f(t_i, y(t_i))$ összefüggést és a (10.10) egyenletet, hogy az Euler-módszer lokális képlethibája

$$\tau_{i+1} = \frac{h}{2}y''(\xi) \tag{10.11}$$

alakú, ahol $\xi \in (t_i, t_{i+1})$.

Szükségünk lesz az alábbi állításra:

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

176 — *10. Közönséges differenciálegyenletek*

**10.3. tétel.** *Legyenek $a, b$ pozitív valós számok, $x_0, x_1, x_2, \ldots$ egy számsorozat, amelyre $x_0 \ge -b/a$, és*

$$x_{i+1} \le (1 + a)x_i + b, \qquad i \ge 0.$$

*Ekkor*

$$x_i \le e^{ia}\left(\frac{b}{a} + x_0\right) - \frac{b}{a}$$

*teljesül minden $i \ge 0$-ra.*

**Bizonyítás.** Egymás után alkalmazva a feltételt és elemi átalakításokat kapjuk a következő összefüggéseket:

$$
\begin{aligned}
x_i &\le (1 + a)x_{i-1} + b \\
&\le (1 + a)((1 + a)x_{i-2} + b) + b \\
&\ \ \vdots \\
&\le (1 + a)((1 + a)(\cdots((1 + a)x_0 + b)\cdots) + b) + b \\
&= (1 + a)^i x_0 + (1 + (1 + a) + (1 + a)^2 + \cdots + (1 + a)^{i-1})b \\
&= (1 + a)^i x_0 + \frac{(1 + a)^i - 1}{a}b \\
&= (1 + a)^i\left(\frac{b}{a} + x_0\right) - \frac{b}{a}. 
\end{aligned}
\tag{10.12}
$$

Az $1 + x \le e^x$ elemi egyenlőtlenségből kapjuk, hogy $(1 + x)^i \le e^{ix}$, ami a (10.12) egyenlőtlenséggel együtt adja a tétel állítását. $\square$

**10.4. tétel.** *Legyen az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú az $L$ Lipschitz-konstanssal, jelölje $z_0, z_1, \ldots, z_n$ az Euler-sorozatot, és $\tau = \max\{|\tau_{i+1}| \colon i = 0, 1, \ldots, n-1\}$. Ekkor*

$$|y(t_i) - z_i| \le \left(e^{L(T - t_0)} - 1\right)\frac{\tau}{L}, \qquad (i = 0, 1, \ldots, n). \tag{10.13}$$

**Bizonyítás.** A (10.10) és (10.4) egyenleteket egymásból kivonva

$$y(t_{i+1}) - z_{i+1} = y(t_i) - z_i + h\left(f(t_i, y(t_i)) - f(t_i, z_i)\right) + \tau_{i+1}h$$

adódik. Ebből a háromszög-egyenlőtlenséget, $f$ Lipschitz-tulajdonságát, $\tau$ definícióját és a $h = \max\{h_i \colon i = 0, 1, \ldots, n-1\}$ jelölést használva:

$$
\begin{aligned}
|y(t_{i+1}) - z_{i+1}| &\le |y(t_i) - z_i| + h\left|f(t_i, y(t_i)) - f(t_i, z_i)\right| + |\tau_{i+1}|h \\
&\le |y(t_i) - z_i| + Lh|y(t_i) - z_i| + |\tau_{i+1}|h \\
&\le (1 + Lh)|y(t_i) - z_i| + \tau h.
\end{aligned}
$$

Ez utóbbi egyenlőtlenségre alkalmazva a 10.3. tételt az $x_i = |y(t_i) - z_i|$, $a = Lh$, $b = \tau h$ választással, és használva az $x_0 = 0$ és $nh = t_n - t_0 = T - t_0$ relációkat adódik (10.13). $\square$

A tételből következik, hogy a közelítés hibája

$$|y(t_i) - z_i| \le K_1 \tau, \qquad i = 0, 1, \ldots, n \tag{10.14}$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.2. Euler-módszer* — 177

alakban becsülhető (ahol $K_1$ egy adott konstans), azaz az Euler-sorozat közelítési hibája kicsi, feltéve hogy minden egyes lépés lokális képlethibája kicsi. A (10.11) képlet szerint $\tau_{i+1}$ megbecsülhető a

$$|\tau_{i+1}| \le \frac{M_2}{2}h, \qquad i = 0, 1, \ldots, n-1 \tag{10.15}$$

alakban, ahol $M_2 = \max\{|y''(t)| \colon t \in [t_0, T]\}$ (feltéve persze, hogy a megoldás kétszer differenciálható). Ebből adódik, hogy ha $h$ kicsi, akkor a közelítés hibája is kicsi.

A megoldás (definíció szerint) mindig differenciálható függvény, és a deriváltja teljesíti az $y'(t) = f(t, y(t))$ egyenletet. Ha tehát feltesszük, hogy $f$ folytonosan parciálisan differenciálható mindkét változója szerint, akkor a többváltozós függvényekre vonatkozó láncszabály szerint $y$ kétszer differenciálható, és

$$y''(t) = \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))y'(t).$$

Itt viszont használhatjuk újra az egyenletet $y'(t)$ helyettesítésére:

$$y''(t) = \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))f(t, y(t)). \tag{10.16}$$

Ha például $f$ és parciális deriváltjai korlátosak, akkor (10.16) segítségével rögtön kaphatunk egy explicit becslést $M_2$-re.

Összegezve az eddigieket, beláttuk a következő állítást:

**10.5. tétel.** *Legyen $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú, és folytonosan parciálisan differenciálható mindkét változója szerint. Ekkor az Euler-sorozat elsőrendben konvergál a megoldáshoz, azaz létezik egy $K > 0$ konstans, hogy*

$$|y(t_i) - z_i| \le Kh, \qquad i = 0, 1, \ldots, n.$$

### Feladatok

1. Számítsa ki a megadott lépésközhöz tartozó Euler-sorozat első tíz tagját és a közelítés hibáját (használva a megadott analitikus megoldást) a következő feladatokra:

   (a) $ty' - y = 2t, \qquad y(1) = 1, \quad h = 0.1$, the solution: $y(t) = 2t \ln t + t$,

   (b) $y' - 2y = 6, \qquad y(0) = 2, \quad h = 0.1, \quad y(t) = -3 + 5e^{2t}$,

   (c) $y' - \frac{2}{t}y = 1, \qquad y(1) = 1, \quad h = 0.2, \quad y(t) = 2t^2 - t$,

   (d) $y' = \frac{t}{1+y}, \qquad y(1) = 2, \quad h = 0.1, \quad y(t) = \sqrt{t^2 + 8} - 1$.

2. Fogalmazza meg az Euler-módszert differenciálegyenlet-rendszerekre!

3. Oldja meg a következő differenciálegyenlet-rendszereket Euler-módszerrel, és adja meg a közelítés hibáját (a megadott analitikus megoldás segítségével)!

   (a) $\left.\begin{array}{rcl} y_1' &=& 2y_1 - 3y_2, \\ y_2' &=& -y_1 + 4y_2, \end{array}\right\}$ $\quad t \in [0, 2], \quad y_1(0) = 1, \quad y_2(0) = -5$,
   $h = 0.1, \quad y_1(t) = -3e^t + 4e^{5t}, \quad y_2(t) = -4e^{5t} - e^t$.

   (b) $\left.\begin{array}{rcl} y_1' &=& 2y_1 - 3y_2, \\ y_2' &=& 3y_1 + 2y_2, \end{array}\right\}$ $\quad t \in [0, 1], \quad y_1(0) = 1, \quad y_2(0) = 0$,
   $h = 0.1, \quad y_1(t) = e^{2t}\cos 3t, \quad y_2(t) = e^{2t}\sin 3t$.

4. Fogalmazza át a problémát differenciálegyenlet-rendszerre, majd számítsa ki annak Euler-közelítését a megadott lépésközzel az adott intervallumon! Mi az eredeti feladat közelítő megoldása az osztópontokban? Adja meg a közelítés hibáját (a megadott analitikus megoldás ismeretében)!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

178 — *10. Közönséges differenciálegyenletek*

&nbsp;&nbsp;&nbsp;(a) $y'' - 3y' + 2y = 2, \quad t \in [0, 1] \quad y(0) = 1,\ y'(0) = -1, \quad h = 0.1, \quad y(t) = 1 + e^t - e^{2t}$,

&nbsp;&nbsp;&nbsp;(b) $y'' - 2y' + 5y = 0, \quad t \in [0, 2], \quad y(1) = 1,\ y'(0) = 3, \quad h = 0.2, \quad y(t) = e^t \sin 2t + e^t \cos 2t$.

5. Legyen $t_i = t_0 + ih$ ekvidisztáns beosztása a $[t_0, T]$ intervallumnak, $\{z_i\}$ a hozzá tartozó Euler-sorozat, és $z(t; h)$ az a lineáris spline függvény, amely a $z_i$ értékeket interpolálja az alappontokban: $z(t_i; h) = z_i$, $i = 0, 1, \ldots, n$. Bizonyítsa be, hogy

$$\sup_{t \in [t_0, T]} |y(t) - z(t; h)| \to 0, \qquad \text{ha } h \to 0.$$

## 10.3. A kerekítési hiba hatása az Euler-módszerre

A gyakorlatban az Euler-módszer (és bármely más numerikus módszer) alkalmazásakor számítanunk kell a kerekítési hibák fellépésére. Először is az $y_0$ pontos kezdőérték helyett annak gépi megfelelőjét tároljuk és használjuk kezdeti értékként, valamint minden egyes iterációs lépésben követünk el kerekítési hibát. Jelöljük $z_i$-vel az előző szakaszban definiált Euler-sorozat pontos értékét, és $w_i$-vel a ténylegesen számolt értékét. Legyen $w_0$ a kezdeti érték gépi megfelelője. Legyen $\delta_0 = y_0 - w_0$, és jelölje $\delta_i$ az egyes iterációs lépések közben elkövetett kerekítési hibát, azaz tegyük fel, hogy

$$w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}, \qquad i = 0, 1, 2, \ldots, n-1. \tag{10.17}$$

A (10.17) egyenletből kivonva a (10.4) egyenletet kapjuk

$$w_{i+1} - z_{i+1} = w_i - z_i + h(f(t_i, w_i) - f(t_i, z_i)) + \delta_{i+1}.$$

Tegyük fel, hogy $f$ Lipschitz-tulajdonságú a második változójában az $L$ Lipschitz-konstanssal. Jelölje $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$. Ekkor a háromszög-egyenlőtlenséget használva:

$$
\begin{aligned}
|w_{i+1} - z_{i+1}| &\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\delta_{i+1}| \\
&\le |w_i - z_i| + hL|w_i - z_i| + \delta, \qquad i = 0, 1, 2, \ldots.
\end{aligned}
$$

Ebből az egyenlőtlenségből a 10.3. tétel segítségével belátható a következő állítás:

**10.6. tétel.** *Legyen $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú az $L$ Lipschitz-konstanssal, és folytonosan parciálisan differenciálható mindkét változója szerint. Ekkor*

$$|y(t_i) - w_i| \le \frac{e^{L(T - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) + |\delta_0|e^{L(T - t_0)}, \qquad i = 0, 1, \ldots, n,$$

*ahol $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$ és $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$.*

A 10.6. tételben szereplő $\frac{hM_2}{2} + \frac{\delta}{h}$ tényező már nem lineáris $h$-ban, sőt

$$\lim_{h \to 0+}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) = \infty.$$

Ezért túlságosan kis lépésköz választása esetén jelentős lehet az Euler-módszer hibája. A gyakorlatban persze ha a lépésköz nagyságrendekkel nagyobb, mint a kerekítési hiba (ami általában teljesül), akkor a kerekítési hiba hatása kicsi.

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.4. Taylor-módszer* — 179

### Feladatok

1. Dolgozza ki a 10.6. tétel bizonyításának részleteit!

2. Rajzolja fel a 10.6. tételben szereplő $g(h) = \frac{hM_2}{2} + \frac{\delta}{h}$ függvény grafikonját! Határozza meg a függvény minimumát!

3. Az előző feladatban megkapott optimális, azaz a $g(h)$ függvényt minimalizáló lépésköz értékét számítsa ki a 10.2. példában vizsgált feladat esetén, feltéve, hogy $\delta = 0.00001$!

## 10.4. Taylor-módszer

A 10.2. szakaszban levezetett eredmények könnyen átvihetők általánosabb módszerekre is. Az Euler-módszer képletéből kiindulva definiáljuk a következő általános egylépéses módszert a (10.1) feladat megoldására:

$$z_{i+1} = z_i + hF(t_i, z_i; h), \qquad i = 0, 1, \ldots, n-1, \qquad z_0 = y_0, \tag{10.18}$$

ahol $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$, valamely $H > 0$-ra. (Az Euler-módszernél $F(t, z; h) = f(t, z)$.) Megjegyezzük, hogy ebben a szakaszban ekvidisztáns osztópontokra fogalmazzuk meg a módszereket, de a levezetett képleteket alkalmazhatjuk az általános esetben is a $z_{i+1} = z_i + h_i F(t_i, z_i; h_i)$ rekurzív definíció szerint.

Az Euler-módszerhez hasonlóan, a (10.18) módszer $(i+1)$-edik *lokális képlethibáján* a

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h), \qquad (i = 0, 1, \ldots, n-1) \tag{10.19}$$

számot értjük, ahol $y(t)$ a (10.1) feladat pontos megoldása.

Nyilvánvalóan a 10.4. tétel átvihető a (10.18) módszerre, ha $F$ folytonos és Lipschitz-tulajdonságú a második változójában. A 10.4. tétel utáni levezetések megismételhetők, és teljesül a (10.14) egyenlőtlenség is. Ha feltesszük, hogy (10.15) is teljesül (ez nem teljesül automatikusan), akkor ebből következik a 10.5. tétel megfelelő változata erre az általános módszerre. Sőt ennél többet is beláthatunk. Könnyen bizonyítható a következő állítás:

**10.7. tétel.** *Legyen $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú, és folytonosan parciálisan differenciálható az első és második változója szerint. Feltesszük, hogy a (10.18) módszer lokális képlethibája $\alpha$ rendű, azaz létezik egy olyan $K_2 > 0$ konstans, hogy*

$$|\tau_{i+1}| \le K_2 h^\alpha$$

*minden $i = 0, 1, \ldots, n-1$-re. Ekkor a (10.18) közelítő megoldás $\alpha$ rendben konvergál a (10.1) feladat megoldásához, azaz létezik egy $K > 0$ konstans, hogy*

$$|y(t_i) - z_i| \le Kh^\alpha, \qquad i = 0, 1, \ldots, n.$$

Hogyan válasszuk meg $F$-et, hogy a 10.7. tétel feltételei teljesüljenek? Az Euler-módszer 1. levezetéséből és a (10.11) becslés bizonyításából kézenfekvően adódik az ötlet, hogy ne elsőrendű, hanem magasabbrendű Taylor-polinommal közelítsük a megoldást (feltéve, hogy a megoldás elég sokszor differenciálható):

$$
\begin{aligned}
y(t) &= y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(t_i)(t - t_i)^2 + \ldots + \frac{1}{\alpha!}y^{(\alpha)}(t_i)(t - t_i)^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}y^{(\alpha+1)}(\xi_i)(t - t_i)^{\alpha+1},
\end{aligned}
$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

180 — *10. Közönséges differenciálegyenletek*

ahol $\xi_i \in \langle t, t_i \rangle$. Hogy számolhatók $y$ magasabbrendű deriváltjai? Tudjuk, hogy $y'(t) = f(t, y(t))$. Ha mindkét oldalt deriváljuk, kapjuk a (10.16) egyenletet. Ha (10.16) jobb oldalát deriváljuk $t$ szerint, és használjuk az $y'(t) = f(t, y(t))$ összefüggést, megkapjuk $y'''(t)$-t $t$, $y(t)$, $f$ és $f$ parciális deriváltjai segítségével. Vezessük be a következő jelölést:

$$f^{(i)}(t, y(t)) := \frac{d^i}{dt^i}\left(f(t, y(t))\right), \tag{10.20}$$

(azaz $f^{(i)}(t, y(t))$ az $f(t, y(t))$ összetett függvény $t$-szerinti $i$-edrendű deriváltja). $f^{(i)}(t, z)$ pedig jelöli azt a képletet, amit az előbb definiált $f^{(i)}(t, y(t))$ képletéből $y(t)$ $z$-re cserélésével kapunk. Ezt a jelölést használva $y^{(i)}(t) = f^{(i-1)}(t, y(t))$, és így

$$
\begin{aligned}
y(t_{i+1}) &= y(t_i) + f(t_i, y(t_i))h + \frac{1}{2}f^{(1)}(t_i, y(t_i))h^2 + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t_i, y(t_i))h^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^{\alpha+1}.
\end{aligned}
$$

Tegyük fel tehát hogy $f \in C^\alpha$, és definiáljuk $F$-et a következőképpen:

$$F(t, z; h) := f(t, z) + \frac{1}{2}f^{(1)}(t, z)h + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t, z)h^{\alpha-1} \tag{10.21}$$

Ekkor

$$\tau_{i+1} = \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^\alpha,$$

azaz a lokális képlethiba $h$-ban $\alpha$ rendű. A (10.18) és (10.21) képlettel definiált módszert $\alpha$ rendű *Taylor-módszernek* nevezzük.

**10.8. példa.** Tekintsük újra a (10.8) feladatot, és alkalmazzuk rá először a másodrendű Taylor-módszert! Ehhez számítsuk ki $f^{(1)}$-et:

$$
\begin{aligned}
f^{(1)}(t, y(t)) &= \frac{d}{dt}\left(2y(t) - 10t^2 + 2t\right) = 2y'(t) - 20t + 2 \\
&= (4y(t) - 20t^2 + 4t) - 20t + 2 = 4y(t) - 20t^2 - 16t + 2.
\end{aligned}
$$

Ezért a közelítő sorozatunk definíciója:

$$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = 1.$$

A 10.2. táblázatban felsoroltuk a sorozat $h = 0.2$ és $0.1$ lépésközhöz tartozó első néhány tagját. Látható, hogy a lépésközt felezve a hiba kb. negyedére csökken, ami mutatja a másodrendű konvergenciát. Összehasonlítva a kapott eredményt a 10.1. táblázattal, látható, hogy ezzel a képlettel jelentősen kisebb hibát kapunk, mint az Euler-módszerrel.

**10.2. táblázat. Másodrendű Taylor-módszer**

| $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
|------|---------|---|---------|------------------|----|---------|------------------|
| | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
| 0.2 | 1.50818 | 1 | 1.52000 | 1.1825e-02 | 2 | 1.51160 | 3.4247e-03 |
| 0.4 | 2.17446 | 2 | 2.20960 | 3.5141e-02 | 4 | 2.18467 | 1.0206e-02 |
| 0.6 | 2.87988 | 3 | 2.95821 | 7.8325e-02 | 6 | 2.90270 | 2.2813e-02 |
| 0.8 | 3.44697 | 4 | 3.60215 | 1.5518e-01 | 8 | 3.49229 | 4.5325e-02 |
| 1.0 | 3.61094 | 5 | 3.89918 | 2.8823e-01 | 10 | 3.69537 | 8.4425e-02 |

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.5. Runge–Kutta-módszerek* — 181

Most alkalmazzuk a harmadrendű Taylor-módszert a feladatra. Egyszerű számolással kapjuk, hogy

$$f^{(2)}(t, y(t)) = \frac{d}{dt}\left(4y(t) - 20t^2 - 16t + 2\right) = 4y'(t) - 40t - 16 = 8y(t) - 40t^2 - 32t - 16.$$

Így a közelítő sorozat definíciója:

$$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right) + \frac{h^3}{6}\left(8z_i - 40t_i^2 - 32t_i - 16\right),$$

$i = 0, 1, 2, \ldots$ és $z_0 = 1$. A numerikus eredményeket a 10.3. táblázatban közöljük. $\square$

**10.3. táblázat. Harmadrendű Taylor-módszer**

| $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
|------|---------|---|---------|------------------|----|---------|------------------|
| | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
| 0.2 | 1.50818 | 1 | 1.50933 | 1.1580e-03 | 2 | 1.50834 | 1.6959e-04 |
| 0.4 | 2.17446 | 2 | 2.17791 | 3.4538e-03 | 4 | 2.17497 | 5.0596e-04 |
| 0.6 | 2.87988 | 3 | 2.88761 | 7.7257e-03 | 6 | 2.88102 | 1.1321e-03 |
| 0.8 | 3.44697 | 4 | 3.46233 | 1.5361e-02 | 8 | 3.44922 | 2.2518e-03 |
| 1.0 | 3.61094 | 5 | 3.63958 | 2.8634e-02 | 10 | 3.61514 | 4.1989e-03 |

### Feladatok

1. Ismételje meg a 10.2. szakasz 1. feladatát másod- és harmadrendű Taylor-módszert használva!

2. Fogalmazza meg és alkalmazza a negyed- és ötödrendű Taylor-módszereket a (10.8) feladatra!

## 10.5. Runge–Kutta-módszerek

A Taylor-módszer nehézsége az, hogy a módszer alkalmazásához ki kell számítani az $f^{(i)}$ deriváltakat, amikor könnyen kaphatunk olyan bonyolult képleteket, amelyek kiértékelése jelentős gépidőt igényelhet, és a sok aritmetikai művelet elvégzése közben a számolási hibák felhalmozódásától is tarthatunk. A *Runge–Kutta-módszerek* a Taylor-módszerek számolási igényét igyekeznek csökkenteni, megőrizve azok magasrendű konvergenciáját. Az alapötletet először másodrendű esetben mutatjuk meg.

Legyen $f \in C^2$, és tekintsük a másodrendű Taylor-módszert definiáló

$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right)$$

függvényt! (Itt is, mint eddig, $\frac{\partial f}{\partial y}$ jelöli az $f$ függvény második változó szerinti parciális deriváltját.) Hasonlítsuk össze ezt a képletet a következő Taylor-formulával:

$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + E(t, z, a, b),$$

ahol a hibatag másodrendű, azaz

$$E(t, z, a, b) = \frac{1}{2}\left(\frac{\partial^2 f}{\partial t^2}(\xi, \eta)a^2 + 2\frac{\partial^2 f}{\partial t \partial y}(\xi, \eta)ab + \frac{\partial^2 f}{\partial y^2}(\xi, \eta)b^2\right) \tag{10.22}$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

182 — *10. Közönséges differenciálegyenletek*

valamely $\xi \in \langle t, t + a \rangle$ és $\eta \in \langle z, z + b \rangle$-re. Ha az $a = h/2$ és $b = f(t, z)h/2$ paraméter választást használjuk, kapjuk hogy

$$f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right) = F(t, z; h) + E\left(t, z, \frac{h}{2}, \frac{h}{2}f(t, z)\right),$$

azaz $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ „lényeges része" megegyezik $F(t, z; h)$-val. Jelentős különbség viszont, hogy $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$-t sokkal egyszerűbb kiszámolni, mint $F(t, z; h)$-t. Ez adja az ötletet, hogy tekintsük a

$$z_{i+1} = z_i + hf\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right), \quad i = 0, 1, 2, \ldots, \qquad z_0 = y_0 \tag{10.23}$$

közelítő módszert. Ezt a módszert *felezőpont-módszernek* nevezzük. Legyen $\tau_{i+1}$ a felezőpont-módszer, $\bar{\tau}_{i+1}$ pedig a másodrendű Taylor-módszer $(i+1)$-edik lokális képlethibája. Ekkor

$$
\begin{aligned}
\tau_{i+1} &= \frac{y(t_{i+1}) - y(t_i)}{h} - f\left(t_i + \frac{h}{2}, y(t_i) + \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \bar{\tau}_{i+1} - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right).
\end{aligned}
$$

Az előző szakaszból ismert, hogy $|\bar{\tau}_{i+1}| \le \bar{K}h^2$, és (10.22) valamint $f \in C^2$ biztosítja, hogy létezik olyan $\tilde{K}$, hogy $\left|E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right)\right| \le \tilde{K}h^2$. Ebből viszont következik, hogy $|\tau_{i+1}| \le (\bar{K} + \tilde{K})h^2$, és így a (10.23) módszer másodrendben konvergál, feltéve, hogy a 10.7. tételben a Lipschitz-feltétel is teljesül. Ez a feltétel nyilvánvalóan teljesül, ha feltesszük, hogy $f$ Lipschitz-tulajdonságú a második változójában. (Lásd a 2. feladatot!)

Az előzőekkel analóg módon definiáljuk $F$-et a következő módon:

$$
\begin{aligned}
F(t, z; h) &:= \sum_{j=1}^{p}\gamma_j G_j(t, z; h), \\
G_1(t, z; h) &:= f(t, z), \\
G_j(t, z; h) &:= f\left(t + \alpha_j h, z + h\sum_{k=1}^{j-1}\beta_{jk}G_k(t, z; h)\right), \qquad j = 2, 3, \ldots, p.
\end{aligned}
\tag{10.24}
$$

A (10.18) és (10.24) képletekkel definiált módszerek osztályát *(explicit) Runge–Kutta-módszereknek* nevezzük. A cél úgy megválasztani a képletekben szereplő paramétereket, hogy a lehető legmagasabb rendű lokális képlethibát kapjuk.

Tekintsük most a $p = 2$ esetet. Erre

$$F(t, z; h) = \gamma_1 f(t, z) + \gamma_2 f(t + \alpha_1 h, z + \beta_{21}hf(t, z)).$$

(Ha $\gamma_1 = 0$, $\gamma_2 = 1$, $\alpha_1 = \beta_{21} = 1/2$, akkor visszakapjuk a felezőpont-módszert.) Próbáljuk meg úgy megválasztani a paramétereket, hogy harmadrendű lokális hibát kapjunk. Alkalmazzuk a másodrendű Taylor-formulát a jobb oldalra:

$$
\begin{aligned}
F(t, z; h) &= (\gamma_1 + \gamma_2)f(t, z) + h\gamma_2\left(\alpha_1\frac{\partial f}{\partial t}(t, z) + \beta_{21}f(t, z)\frac{\partial f}{\partial y}(t, z)\right) \\
&\quad + \frac{h^2}{2}\gamma_2\left(\alpha_1^2\frac{\partial^2 f}{\partial t^2}(t, z) + 2\alpha_1\beta_{21}f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z) \right. \\
&\quad \left. + \beta_{21}^2(f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z)\right) + E(t, z, \alpha_1 h, \beta_{21}hf(t, z)),
\end{aligned}
\tag{10.25}
$$

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.5. Runge–Kutta-módszerek* — 183

ahol $E$ a harmadrendű hibatag. Hasonlítsuk ezt össze a harmadrendű Taylor-módszert definiáló

$$
\begin{aligned}
\tilde{F}(t, z; h) &= f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \\
&\quad + \frac{h^2}{6}\left(\frac{\partial^2 f}{\partial t^2}(t, z) + 2f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z) \right. \\
&\quad \left. + (f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z) + \frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z) + \left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)\right)
\end{aligned}
\tag{10.26}
$$

függvénnyel. Láthatjuk, hogy $F$ legfeljebb másodrendű tagjai mind szerepelnek $\tilde{F}$ képletében. Fordítva ez nem teljesül: a (10.26)-ban szereplő $\frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z)$ és $\left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)$ tagoknak nincs megfelelőjük (10.25)-ben. Ez azt jelenti, hogy nem tudunk minden $h$-ban másodrendű tagot helyettesíteni $F$ másodrendű tagjaival. A kapott képlet így csak másodrendű lehet. Próbáljuk meg azért a lehető legtöbb másodrendű tagot előállítani. Olyan paramétereket keresünk, amelyeknél a (10.25) és (10.26) nullad- és elsőfokú tagjai megegyeznek, azaz:

$$\gamma_1 + \gamma_2 = 1, \qquad \gamma_2\alpha_1 = \frac{1}{2}, \qquad \gamma_2\beta_{21} = \frac{1}{2}, \tag{10.27}$$

valamint a megfelelő másodrendű tagok együtthatói is megegyeznek:

$$\frac{\gamma_2}{2}\alpha_1^2 = \frac{1}{6}, \qquad \gamma_2\alpha_2\beta_{21} = \frac{1}{3}, \qquad \frac{\gamma_2}{2}\beta_{21}^2 = \frac{1}{6}. \tag{10.28}$$

Látható, hogy például $\gamma_1 = \gamma_2 = 1/2$, $\alpha_1 = \beta_{21} = 1$ paraméterek megoldásai (10.27)-nek, de nem teljesítik (10.28) egyenleteket. Viszont mivel a Taylor-módszer minden legfeljebb elsőrendű tagját visszakapjuk, így a felező-módszerhez hasonlóan belátható, hogy másodrendű módszert kapunk. Ezt a

$$z_{i+1} = z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i))\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = y_0 \tag{10.29}$$

formulával definiált módszert *módosított Euler-módszernek* nevezzük.

Ha a paramétereknek a $\gamma_1 = 1/4$, $\gamma_2 = 3/4$ és $\alpha_1 = \beta_{21} = 2/3$ értékeket választjuk, akkor mind a (10.27) és (10.28) egyenletek teljesülnek. Az ehhez tartozó módszer, az ún. *Heun-módszer* definíciója tehát:

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{4}\left(f(t_i, z_i) + 3f\left(t_i + \frac{2h}{3}, z_i + \frac{2}{3}hf(t_i, z_i)\right)\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0.
\end{aligned}
\tag{10.30}
$$

Mindkét módszer ún. másodrendű Runge–Kutta-képlet (mivel másodrendű lokális képlethibával rendelkeznek).

A módosított Euler-módszerhez is rendelhetünk geometriai tartalmat: tegyük fel, hogy az $i$-edik lépésben már kiszámítottuk a $(t_i, z_i)$ pontot. Ha az Euler-lépéssel folytatnánk a generálást, akkor az $f(t_i, z_i)$ iránytangensű egyenes mentén a $(t_{i+1}, w_{i+1})$ pontba lépnénk tovább, ahol $w_{i+1} := z_i + hf(t_i, z_i)$. Ehelyett vesszük ebben a pontban a megoldás iránytangensét, $f(t_{i+1}, w_{i+1})$-et, és képezzük a $(f(t_i, z_i) + f(t_{i+1}, w_{i+1}))/2$ átlagos iránytangenst, és az ez által meghatározott irányban lépünk $(t_i, z_i)$-ből a $t_{i+1}$ első koordinátájú pontba. Lásd a 10.1. ábrát!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

184 — *10. Közönséges differenciálegyenletek*

![10.1. ábra. A módosított Euler-módszer geometriai interpretációja — A $(t_i, z_i)$ pontból három irányba mutató szakaszok: a folytonos nyíl a $(t_{i+1}, z_{i+1})$ átlagos iránytangensű pontba, a szaggatott nyíl a $(t_{i+1}, w_{i+1})$ Euler-lépés pontjába, a pontozott nyíl a végponti iránytangens irányába.](kep_10_1.png)

**10.1. ábra.** A módosított Euler-módszer geometriai interpretációja

Az eddig megadott néhány képlethez hasonló módon levezethető számos más Runge–Kutta típusú módszer. Belátható, hogy a különböző $p$ értékekhez tartozó (10.24) képletekkel definiált Runge–Kutta-módszerekkel a következő maximális rendű lokális képlethibákat lehet elérni:

| $p$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|----|
| a módszer maximális rendje | 1 | 2 | 3 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |

Az egyik legnépszerűbb (10.24) típusú módszer, a „klasszikus" Runge–Kutta-módszer definíciója:

$$
\begin{aligned}
z_0 &= y_0, \\
w_{i,1} &= f(t_i, z_i), \\
w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right), \\
w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right), \\
w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right), \\
z_{i+1} &= z_i + \frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}), \qquad i = 0, 1, 2, \ldots.
\end{aligned}
\tag{10.31}
$$

Ez a módszer negyedrendű lokális képlethibával rendelkezik (feltéve, hogy $f \in C^5$). A módszer levezetését és a képlethiba rendjének bizonyítását itt nem közöljük.

**10.9. példa.** A (10.8) feladatra alkalmaztuk a módosított Euler-, Heun- és a klasszikus negyedrendű Runge–Kutta-módszereket a $h = 0.2$-es lépésközt használva. A kapott numerikus eredmények a 10.4. táblázatban találhatók. $\square$

### Feladatok

1. Ismételje meg a 10.2. szakasz 1. feladatát felezőpont-, módosított Euler-, Heun- és a klasszikus negyedrendű Runge–Kutta-módszereket használva!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*

---

*10.5. Runge–Kutta-módszerek* — 185

**10.4. táblázat. Runge–Kutta-módszerek**

| | | módosított Euler | | Heun | | klasszikus | |
|------|---------|--------|------------------|--------|------------------|--------|------------------|
| $t_i$ | $y(t_i)$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ |
| 0.0 | 1.0000 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 |
| 0.2 | 1.5082 | 1.5005 | 7.6753e-03 | 1.5042 | 3.9753e-03 | 1.5082 | 1.1773e-05 |
| 0.4 | 2.1745 | 2.1570 | 1.7415e-02 | 2.1663 | 8.2078e-03 | 2.1744 | 2.6024e-05 |
| 0.6 | 2.8799 | 2.8505 | 2.9398e-02 | 2.8679 | 1.1995e-02 | 2.8798 | 4.2338e-05 |
| 0.8 | 3.4470 | 3.4035 | 4.3486e-02 | 3.4331 | 1.3882e-02 | 3.4469 | 5.9304e-05 |
| 1.0 | 3.6109 | 3.5521 | 5.8862e-02 | 3.5998 | 1.1100e-02 | 3.6109 | 7.3610e-05 |

2. Bizonyítsa be, hogy ha $f$ Lipschitz-tulajdonságú a második változójában, akkor a felezőpont-módszert definiáló

$$F(t, z; h) = \frac{1}{2}f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$$

függvény is Lipschitz-tulajdonságú a második változójában.

3. Az Euler-módszer 3. levezetéséhez hasonló módon vezesse le a (10.29) képletet!

4. Mutassa meg, hogy felezőpont-, módosított Euler- és a Heun-módszer minden lépésköz esetén ugyanazt a közelítő megoldást generálja az

$$y' = 2 - t - y, \qquad y(0) = 1$$

kezdeti érték problémára!

5. Keressen geometriai jelentést a klasszikus negyedrendű Runge–Kutta-módszerhez!

6. Igazolja, hogy ha $f$ csak $t$-től függ, akkor a klasszikus negyedrendű Runge–Kutta-módszer a Simpson-féle kvadratúra formulára redukálódik!

7. Fogalmazza meg a klasszikus negyedrendű Runge–Kutta-módszert differenciálegyenlet-rendszerekre!

8. Oldja meg a 10.2. szakasz 3. és 4. feladataiban szereplő kezdeti érték problémákat negyedrendű Runge–Kutta-módszerrel!

*Hartung Ferenc, Bevezetés a numerikus analízisbe* — *Pannon Egyetem*
