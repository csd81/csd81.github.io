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
