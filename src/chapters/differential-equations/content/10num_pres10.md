# Numerikus analízis: 10. — Közönséges differenciálegyenletek

Matematika Tanszék

2026

---

## 10.1. Differenciálegyenletek előismeretek

Ebben a fejezetben az

$$y' = f(t, y), \qquad t \in [t_0, T], \qquad y(t_0) = y_0. \tag{1}$$

kezdeti érték probléma közelítő megoldását keressük a $[t_0, T]$ intervallumon. Feltesszük, hogy

$$f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}, \qquad y_0 \in \mathbb{R}.$$

*(Az ábrán egy iránymező látható több megoldásgörbével; a piros görbe a $(t_0, y_0)$ ponton átmenő megoldás.)*

Az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ függvény a második változójában teljesíti a **Lipschitz-tulajdonságot** az $L$ Lipschitz-konstanssal, ha

$$|f(t, y) - f(t, \tilde{y})| \le L|y - \tilde{y}| \qquad \text{minden } t \in [t_0, T] \text{ és } y, \tilde{y} \in \mathbb{R}.$$

> **Tétel**
> Tegyük fel, hogy az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú (valamely $L$ Lipschitz-konstanssal). Ekkor az (1) kezdeti érték problémának minden $y_0 \in \mathbb{R}$ kezdeti értékhez létezik egyértelmű megoldása a $[0, T]$ intervallumon.

---

## 10.2. Euler-módszer

Tekintsük az (1) feladatot:

$$y' = f(t, y), \qquad y(t_0) = y_0$$

**Euler-módszer:**
Rögzítsünk a $t_0 < t_1 < \cdots < t_n = T$ osztópontokat, és legyen $h_i := t_{i+1} - t_i$ $(i = 0, \ldots, n-1)$.

A célunk az, hogy az alappontokban közelítsük a megoldást. Megmutatjuk, hogy

$$y(t_i) \approx z_i,$$

ahol az **Euler-sorozat** definíciója

$$z_{i+1} = z_i + h_i f(t_i, z_i), \quad (i = 0, 1, \ldots, n-1), \qquad z_0 = y_0. \tag{2}$$

**1. levezetés:** Legyen $y(t)$ az (1) feladat megoldása. Ekkor $y(t_0) = y_0 = z_0$. Tekintsük $y(t)$ elsőrendű Taylor-közelítését $t_0$ körül:

$$y(t) \approx y(t_0) + y'(t_0)(t - t_0).$$

Ekkor a $t = t_1$ pontban

$$y(t_1) \approx y(t_0) + y'(t_0)h_1 = y(t_0) + f(t_0, y(t_0))h_1 = z_0 + h_1 f(t_0, z_0).$$

Ezért

$$y(t_1) \approx z_1 := z_0 + h_1 f(t_0, z_0).$$

Tegyük fel, hogy $z_i$ közelíti az $y(t_i)$ értékét. Ekkor a fenti ötletet alkalmazva,

$$y(t_{i+1}) \approx y(t_i) + y'(t_i)h_i = y(t_i) + h_i f(t_i, y(t_i)) \approx z_i + h_i f(t_i, z_i),$$

ezért definiáljuk

$$z_{i+1} = z_i + h_i f(t_i, z_i).$$

**2. levezetés:** A megoldásra

$$y'(t_i) = f(t_i, y(t_i))$$

teljesül. Elsőrendű differencia módszert alkalmazva

$$y'(t_i) \approx \frac{y(t_{i+1}) - y(t_i)}{h_i},$$

így

$$\frac{y(t_{i+1}) - y(t_i)}{h_i} \approx f(t_i, y(t_i)),$$

amiből

$$y(t_{i+1}) \approx y(t_i) + h_i f(t_i, y(t_i)).$$

Feltéve, hogy $y(t_i) \approx z_i$, az

$$z_{i+1} = z_i + h_i f(t_i, z_i)$$

sorozatra kapjuk

$$y(t_{i+1}) \approx z_{i+1}.$$

**3. levezetés:** Az $y'(t) = f(t, y(t))$ egyenlet mindkét oldalát integrálva $t_i$ és $t_{i+1}$ között kapjuk

$$y(t_{i+1}) - y(t_i) = \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds,$$

így

$$y(t_{i+1}) = y(t_i) + \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds.$$

Használjuk az alábbi elemi közelítést:

$$\int_a^b g(s)\, ds \approx g(a)(b - a).$$

Ekkor

$$\int_{t_i}^{t_{i+1}} f(s, y(s))\, ds \approx h_i f(t_i, y(t_i)),$$

Így az

$$y(t_{i+1}) = y(t_i) + \int_{t_i}^{t_{i+1}} f(s, y(s))\, ds$$

egyenlőségből következik

$$y(t_{i+1}) \approx y(t_i) + h_i f(t_i, y(t_i)),$$

amiből kapjuk az Euler-sorozatot.

> **Példa**
> Tekintsük az
>
> $$y' = 2y - 10t^2 + 2t, \qquad y(0) = 1. \tag{3}$$
>
> kezdeti érték feladatot! Könnyen ellenőrizhetjük, hogy a feladat analitikus megoldása
>
> $$y(t) = 5t^2 + 4t + 2 - e^{2t}.$$
>
> Vegyünk egy $h$ lépésközhöz tartozó $t_i = ih$ ekvidisztáns beosztást! Az Euler-sorozatot a
>
> $$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right), \qquad i = 0, 1, 2, \ldots, \qquad z_0 = 1.$$
>
> rekurzív definícióval számoljuk ki. A következő táblázat tartalmazza a közelítő sorozat $h = 0.2$, $0.1$ és $0.05$ lépésközökhöz tartozó első néhány tagját és a közelítés $e_i = |y(t_i) - z_i|$ hibáját.

> **Példa folyt.**
>
> Euler-módszer, $e_i = |y(t_i) - z_i|$
>
> | $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | | | $h = 0.05$ | |
> |------|---------|---|--------|--------|----|--------|--------|----|--------|--------|
> | | | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ | $i$ | $z_i$ | $e_i$ |
> | 0.0 | 1.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 | 0 | 1.0000 | 0.0000 |
> | 0.2 | 1.5082 | 1 | 1.4000 | 0.1082 | 2 | 1.4500 | 0.0582 | 4 | 1.4779 | 0.0303 |
> | 0.4 | 2.1745 | 2 | 1.9600 | 0.2145 | 4 | 2.0580 | 0.1165 | 8 | 2.1135 | 0.0610 |
> | 0.6 | 2.8799 | 3 | 2.5840 | 0.2959 | 6 | 2.7175 | 0.1624 | 12 | 2.7943 | 0.0856 |
> | 0.8 | 3.4470 | 4 | 3.1376 | 0.3094 | 8 | 3.2752 | 0.1717 | 16 | 3.3557 | 0.0913 |
> | 1.0 | 3.6109 | 5 | 3.4326 | 0.1783 | 10 | 3.5103 | 0.1006 | 20 | 3.5566 | 0.0544 |
>
> Láthatjuk, hogy a lépésközt csökkentve a közelítés hibája is csökken, sőt azt is észrevehetjük, hogy a hiba $h$-val lineárisan arányos: ha felezzük a lépésközt, a hiba is körülbelül fele akkora lesz.

Vizsgáljuk az Euler-módszer konvergenciáját. Tegyük fel, hogy ekvidisztáns osztópontokra alkalmazzuk az Euler-módszert, azaz $h_i = h$ konstans. Az Euler-módszer $(i+1)$-edik **lokális képlethibáján** a

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - f(t_i, y(t_i)), \qquad (i = 0, 1, \ldots, n-1),$$

számot értjük, ahol $y(t)$ az (1) feladat pontos megoldása. Átrendezve

$$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \tau_{i+1}h. \tag{4}$$

Innen látható, hogy $|\tau_{i+1}|h$ adja a módszer hibáját az $(i+1)$-edik lépésben, ha feltesszük, hogy $i$-edik lépésben a pontos értékből indulunk ki.

Vegyük $y(t)$ elsőrendű Taylor-közelítését a $t_i$ pont körül:

$$y(t) = y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(\xi)(t - t_i)^2.$$

Ekkor

$$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \frac{1}{2}y''(\xi)h^2.$$

Így

$$\tau_{i+1} = \frac{h}{2}y''(\xi),$$

ahol $\xi \in (t_i, t_{i+1})$.

> **Tétel**
> Legyenek $a, b$ pozitív valós számok, $x_0, x_1, x_2, \ldots$ egy számsorozat, amelyre $x_0 \ge -b/a$, és
>
> $$x_{i+1} \le (1 + a)x_i + b, \qquad i \ge 0.$$
>
> Ekkor
>
> $$x_i \le e^{ia}\left(\frac{b}{a} + x_0\right) - \frac{b}{a}$$
>
> teljesül minden $i \ge 0$-ra.

> **Bizonyítás**
> Egymás után alkalmazva a feltételt és elemi átalakításokat kapjuk:
>
> $$
> \begin{aligned}
> x_i &\le (1 + a)x_{i-1} + b \\
> &\le (1 + a)((1 + a)x_{i-2} + b) + b \\
> &\ \ \vdots \\
> &\le (1 + a)((1 + a)(\cdots((1 + a)x_0 + b)\cdots) + b) + b \\
> &= (1 + a)^i x_0 + (1 + (1 + a) + (1 + a)^2 + \cdots + (1 + a)^{i-1})b \\
> &= (1 + a)^i x_0 + \frac{(1 + a)^i - 1}{a}b \\
> &= (1 + a)^i\left(\frac{b}{a} + x_0\right) - \frac{b}{a}. 
> \end{aligned}
> \tag{5}
> $$
>
> Az $1 + x \le e^x$ elemi egyenlőtlenségből kapjuk, hogy $(1 + x)^i \le e^{ix}$, ami az (5) egyenlőtlenséggel együtt adja a tétel állítását.

> **Tétel**
> Legyen az $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú az $L$ Lipschitz-konstanssal, jelölje $z_0, z_1, \ldots, z_n$ az Euler-sorozatot, és $\tau = \max\{|\tau_{i+1}| \colon i = 0, 1, \ldots, n-1\}$. Ekkor
>
> $$|y(t_i) - z_i| \le \left(e^{L(T - t_0)} - 1\right)\frac{\tau}{L}, \qquad (i = 0, 1, \ldots, n). \tag{6}$$

> **Bizonyítás**
> Az
>
> $$y(t_{i+1}) = y(t_i) + hf(t_i, y(t_i)) + \tau_{i+1}h$$
>
> és
>
> $$z_{i+1} = z_i + hf(t_i, z_i)$$
>
> egyenleteket egymásból kivonva kapjuk
>
> $$y(t_{i+1}) - z_{i+1} = y(t_i) - z_i + h\left(f(t_i, y(t_i)) - f(t_i, z_i)\right) + \tau_{i+1}h.$$
>
> Ekkor
>
> $$
> \begin{aligned}
> |y(t_{i+1}) - z_{i+1}| &\le |y(t_i) - z_i| + h\left|f(t_i, y(t_i)) - f(t_i, z_i)\right| + |\tau_{i+1}|h \\
> &\le |y(t_i) - z_i| + Lh|y(t_i) - z_i| + |\tau_{i+1}|h \\
> &\le (1 + Lh)|y(t_i) - z_i| + \tau h.
> \end{aligned}
> $$
>
> Ez utóbbi egyenlőtlenségre alkalmazva az előző tételt az $x_i = |y(t_i) - z_i|$, $a = Lh$, $b = \tau h$ választással, és használva az $x_0 = 0$ és $nh = t_n - t_0 = T - t_0$ relációkat adódik (6).

A tételből következik, hogy a közelítés hibája

$$|y(t_i) - z_i| \le K_1 \tau, \qquad i = 0, 1, \ldots, n,$$

ahol $K_1$ konstans. Az

$$\tau_{i+1} = \frac{h}{2}y''(\xi)$$

formulából kapjuk, hogy

$$|\tau_{i+1}| \le \frac{M_2}{2}h, \qquad i = 0, 1, \ldots, n-1,$$

ahol

$$M_2 = \max\{|y''(t)| \colon t \in [t_0, T]\}.$$

A megoldás mindig differenciálható függvény, és

$$y'(t) = f(t, y(t)).$$

Ha tehát feltesszük, hogy $f$ folytonosan parciálisan differenciálható mindkét változója szerint, akkor a láncszabály szerint $y$ kétszer differenciálható, és

$$
\begin{aligned}
y''(t) &= \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))y'(t) \\
&= \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))f(t, y(t)).
\end{aligned}
$$

Ha például $f$ és parciális deriváltjai korlátosak, akkor rögtön kaphatunk egy explicit becslést $M_2$-re.

> **Tétel**
> Legyen $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú, és folytonosan parciálisan differenciálható mindkét változója szerint. Ekkor az Euler-sorozat elsőrendben konvergál a megoldáshoz, azaz létezik egy $K > 0$ konstans, hogy
>
> $$|y(t_i) - z_i| \le Kh, \qquad i = 0, 1, \ldots, n.$$

---

## 10.3. A kerekítési hiba hatása az Euler-módszerre

Most vizsgáljuk a kerekítési hiba hatását az Euler-módszerre. Tegyük fel, hogy a $z_i$ érték helyett a $w_i$ értékkel számolunk tovább. Legyen $w_0$ az $y_0$ kezdeti érték tárolt száma. Legyen $\delta_0 := y_0 - w_0$, és legyen $\delta_i$ az $i$-edik lépés kerekítési hibája. Ekkor

$$w_{i+1} = w_i + hf(t_i, w_i) + \delta_{i+1}, \qquad i = 0, 1, 2, \ldots, n-1. \tag{7}$$

Ebből kivonva az

$$z_{i+1} = z_i + hf(t_i, z_i)$$

egyenletet kapjuk

$$w_{i+1} - z_{i+1} = w_i - z_i + h(f(t_i, w_i) - f(t_i, z_i)) + \delta_{i+1}.$$

Tegyük fel, hogy $f$ Lipschitz-tulajdonságú a második változójában az $L$ Lipschitz-konstanssal. Legyen $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$. Ekkor a háromszög-egyenlőtlenség szerint

$$
\begin{aligned}
|w_{i+1} - z_{i+1}| &\le |w_i - z_i| + h|f(t_i, w_i) - f(t_i, z_i)| + |\delta_{i+1}| \\
&\le |w_i - z_i| + hL|w_i - z_i| + \delta, \qquad i = 0, 1, 2, \ldots.
\end{aligned}
$$

Így $a = hL$ és $b = \delta$ választással a korábbi becslést alkalmazva kapjuk

$$
\begin{aligned}
|w_i - z_i| &\le e^{L(T - t_0)}\left(\frac{\delta}{hL} + \delta_0\right) - \frac{\delta}{hL} \\
&= \frac{e^{L(T - t_0)} - 1}{L}\frac{\delta}{h} + |\delta_0|e^{L(T - t_0)}.
\end{aligned}
$$

Láttuk korábban, hogy

$$|y(t_i) - z_i| \le \left(e^{L(T - t_0)} - 1\right)\frac{hM_2}{2L},$$

ahol $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$. Ekkor az

$$|y(t_i) - w_i| \le |y(t_i) - z_i| + |z_i - w_i|$$

becslésből kapjuk az alábbi eredményt.

> **Tétel**
> Legyen $f \colon [t_0, T] \times \mathbb{R} \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú az $L$ Lipschitz-konstanssal, és folytonosan parciálisan differenciálható mindkét változója szerint. Ekkor
>
> $$|y(t_i) - w_i| \le \frac{e^{L(T - t_0)} - 1}{L}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) + |\delta_0|e^{L(T - t_0)}, \qquad i = 0, 1, \ldots, n,$$
>
> ahol $M_2 := \max\{|y''(t)| \colon t \in [t_0, T]\}$ és $\delta := \max\{|\delta_1|, |\delta_2|, \ldots, |\delta_n|\}$.

Az előbbi tételben szereplő $\frac{hM_2}{2} + \frac{\delta}{h}$ tényező már nem lineáris $h$-ban, sőt

$$\lim_{h \to 0+}\left(\frac{hM_2}{2} + \frac{\delta}{h}\right) = \infty.$$

Ezért túlságosan kis lépésköz választása esetén jelentős lehet az Euler-módszer hibája. A gyakorlatban persze ha a lépésköz nagyságrendekkel nagyobb, mint a kerekítési hiba (ami általában teljesül), akkor a kerekítési hiba hatása kicsi.

---

## 10.4. Taylor-módszer

Definiáljuk a következő **általános egylépéses módszert** ekvidisztáns osztópontokat használva:

$$z_{i+1} = z_i + hF(t_i, z_i; h), \qquad i = 0, 1, \ldots, n-1, \qquad z_0 = y_0, \tag{8}$$

ahol $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ valamely $H > 0$-ra. Az Euler-módszer esetén

$$F(t, z; h) = f(t, z).$$

Az Euler-módszerhez hasonlóan, a (8) módszer $(i+1)$-edik **lokális képlethibáján** a

$$\tau_{i+1} := \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h), \qquad (i = 0, 1, \ldots, n-1),$$

számot értjük, ahol $y(t)$ az (1) feladat pontos megoldása.

> **Tétel**
> Legyen $F \colon [t_0, T] \times \mathbb{R} \times [0, H] \to \mathbb{R}$ folytonos függvény a második változójában Lipschitz-tulajdonságú, és folytonosan parciálisan differenciálható az első és második változója szerint. Feltesszük, hogy a (8) módszer lokális képlethibája $\alpha$ rendű, azaz létezik egy olyan $K_2 > 0$ konstans, hogy
>
> $$|\tau_{i+1}| \le K_2 h^\alpha$$
>
> minden $i = 0, 1, \ldots, n-1$-re. Ekkor a (8) közelítő megoldás is $\alpha$ rendben konvergál az (1) feladat megoldásához, azaz létezik egy $K > 0$ konstans, hogy
>
> $$|y(t_i) - z_i| \le Kh^\alpha, \qquad i = 0, 1, \ldots, n.$$

Úgy szeretnénk $F$-et megválasztani, hogy magasrendű lokális képlethibát kapjunk. Tekintsük a megoldás magasabbrendű Taylor-polinom közelítését:

$$
\begin{aligned}
y(t) &= y(t_i) + y'(t_i)(t - t_i) + \frac{1}{2}y''(t_i)(t - t_i)^2 + \ldots + \frac{1}{\alpha!}y^{(\alpha)}(t_i)(t - t_i)^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}y^{(\alpha+1)}(\xi_i)(t - t_i)^{\alpha+1},
\end{aligned}
$$

ahol $\xi_i \in \langle t, t_i \rangle$. Tudjuk, hogy $y'(t) = f(t, y(t))$. Mindkét oldalt deriválva kapjuk

$$y''(t) = \frac{\partial f}{\partial t}(t, y(t)) + \frac{\partial f}{\partial y}(t, y(t))f(t, y(t)).$$

Ha az egyenlet jobb oldalát deriváljuk $t$ szerint, és használjuk az $y'(t) = f(t, y(t))$ összefüggést, megkapjuk $y'''(t)$-t $t$, $y(t)$, $f$ és $f$ parciális deriváltjai segítségével.

Vezessük be a következő jelölést:

$$f^{(i)}(t, y(t)) := \frac{d^i}{dt^i}\left(f(t, y(t))\right).$$

Jelölje $f^{(i)}(t, z)$ azt a képletet, amit az előbb definiált $f^{(i)}(t, y(t))$ képletéből $y(t)$ $z$-re cserélésével kapunk. Ezt a jelölést használva $y^{(i)}(t) = f^{(i-1)}(t, y(t))$, és így

$$
\begin{aligned}
y(t_{i+1}) &= y(t_i) + f(t_i, y(t_i))h + \frac{1}{2}f^{(1)}(t_i, y(t_i))h^2 + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t_i, y(t_i))h^\alpha \\
&\quad + \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^{\alpha+1}.
\end{aligned}
$$

Tegyük fel, hogy $f \in C^\alpha$, és definiáljuk az $F$ függvényt az alábbi módon:

$$F(t, z; h) := f(t, z) + \frac{1}{2}f^{(1)}(t, z)h + \ldots + \frac{1}{\alpha!}f^{(\alpha-1)}(t, z)h^{\alpha-1}. \tag{9}$$

Ekkor

$$\tau_{i+1} = \frac{1}{(\alpha + 1)!}f^{(\alpha)}(\xi_i, y(\xi_i))h^\alpha,$$

ezért a lokális képlethiba $\alpha$-rendű $h$-ban. A (8) és (9) képlettel definiált módszert $\alpha$-rendű **Taylor-módszernek** nevezzük.

> **Példa**
> Tekintsük újra az $y' = 2y - 10t^2 + 2t$, $y(0) = 1$ feladatot, és a másodrendű Taylor-módszerrel keressünk megoldást! Számoljuk ki $f^{(1)}$ képletét:
>
> $$
> \begin{aligned}
> f^{(1)}(t, y(t)) &= \frac{d}{dt}\left(2y(t) - 10t^2 + 2t\right) = 2y'(t) - 20t + 2 \\
> &= 2(2y(t) - 10t^2 + 2t) - 20t + 2 = 4y(t) - 20t^2 - 16t + 2.
> \end{aligned}
> $$
>
> Ekkor a közelítő módszer definíciója $t_i = ih$, $z_0 = 1$, és
>
> $$z_{i+1} = z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right), \quad i = 0, 1, 2, \ldots.$$
>
> A következő táblázatban felsoroltuk a sorozat $h = 0.2$ és $0.1$ lépésközökhöz tartozó első néhány tagját.

> **Példa folyt.**
>
> Másodrendű Taylor-módszer
>
> | $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
> |------|---------|---|---------|------------------|----|---------|------------------|
> | | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
> | 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
> | 0.2 | 1.50818 | 1 | 1.52000 | 1.1825e-02 | 2 | 1.51160 | 3.4247e-03 |
> | 0.4 | 2.17446 | 2 | 2.20960 | 3.5141e-02 | 4 | 2.18467 | 1.0206e-02 |
> | 0.6 | 2.87988 | 3 | 2.95821 | 7.8325e-02 | 6 | 2.90270 | 2.2813e-02 |
> | 0.8 | 3.44697 | 4 | 3.60215 | 1.5518e-01 | 8 | 3.49229 | 4.5325e-02 |
> | 1.0 | 3.61094 | 5 | 3.89918 | 2.8823e-01 | 10 | 3.69537 | 8.4425e-02 |
>
> Látható, hogy a lépésközt felezve a hiba kb. negyedére csökken, ami mutatja a másodrendű konvergenciát.

> **Példa folyt.**
> Most alkalmazzuk a harmadrendű Taylor-módszert a feladatra. Egyszerű számolással kapjuk, hogy
>
> $$
> \begin{aligned}
> f^{(2)}(t, y(t)) &= \frac{d}{dt}f^{(1)}(t, y(t)) \\
> &= \frac{d}{dt}\left(4y(t) - 20t^2 - 16t + 2\right) \\
> &= 4y'(t) - 40t - 16 = 8y(t) - 40t^2 - 32t - 16.
> \end{aligned}
> $$
>
> Így a közelítő sorozat definíciója:
>
> $$
> \begin{aligned}
> z_{i+1} &= z_i + h\left(2z_i - 10t_i^2 + 2t_i\right) + \frac{h^2}{2}\left(4z_i - 20t_i^2 - 16t_i + 2\right) \\
> &\quad + \frac{h^3}{6}(8z_i - 40t_i^2 - 32t_i - 16),
> \end{aligned}
> $$
>
> $i = 0, 1, 2, \ldots$-re, és $z_0 = 1$, $t_i = ih$. A numerikus eredményeket az alábbi táblázatban mutatjuk.

> **Példa folyt.**
>
> Harmadrendű Taylor-módszer
>
> | $t_i$ | $y(t_i)$ | | $h = 0.2$ | | | $h = 0.1$ | |
> |------|---------|---|---------|------------------|----|---------|------------------|
> | | | $i$ | $z_i$ | $|y(t_i) - z_i|$ | $i$ | $z_i$ | $|y(t_i) - z_i|$ |
> | 0.0 | 1.00000 | 0 | 1.00000 | 0.0000e-01 | 0 | 1.00000 | 0.0000e-01 |
> | 0.2 | 1.50818 | 1 | 1.50933 | 1.1580e-03 | 2 | 1.50834 | 1.6959e-04 |
> | 0.4 | 2.17446 | 2 | 2.17791 | 3.4538e-03 | 4 | 2.17497 | 5.0596e-04 |
> | 0.6 | 2.87988 | 3 | 2.88761 | 7.7257e-03 | 6 | 2.88102 | 1.1321e-03 |
> | 0.8 | 3.44697 | 4 | 3.46233 | 1.5361e-02 | 8 | 3.44922 | 2.2518e-03 |
> | 1.0 | 3.61094 | 5 | 3.63958 | 2.8634e-02 | 10 | 3.61514 | 4.1989e-03 |

---

## 10.5. Runge–Kutta-módszerek

A **Runge–Kutta-módszerek** a Taylor-módszerek számolási igényét igyekeznek csökkenteni, megőrizve azok magasrendű konvergenciáját. Az alapötletet először másodrendű esetben mutatjuk meg.

Legyen $f \in C^2$, és tekintsük a másodrendű Taylor-módszert definiáló

$$F(t, z; h) = f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right)$$

függvényt! Hasonlítsuk össze ezt a képletet a következő Taylor-formulával:

$$f(t + a, z + b) = f(t, z) + \frac{\partial f}{\partial t}(t, z)a + \frac{\partial f}{\partial y}(t, z)b + E(t, z, a, b),$$

ahol a hibatag másodrendű, azaz

$$E(t, z, a, b) = \frac{1}{2}\left(\frac{\partial^2 f}{\partial t^2}(\xi, \eta)a^2 + 2\frac{\partial^2 f}{\partial t \partial y}(\xi, \eta)ab + \frac{\partial^2 f}{\partial y^2}(\xi, \eta)b^2\right) \tag{10}$$

valamely $\xi \in \langle t, t + a \rangle$ és $\eta \in \langle z, z + b \rangle$-re.

Ha az $a = h/2$ és $b = f(t, z)h/2$ paraméter választást használjuk, kapjuk hogy

$$f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right) = F(t, z; h) + E\left(t, z, \frac{h}{2}, \frac{h}{2}f(t, z)\right),$$

azaz $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$ „lényeges része" megegyezik $F(t, z; h)$-val. Jelentős különbség viszont, hogy $f\left(t + \frac{h}{2}, z + \frac{h}{2}f(t, z)\right)$-t sokkal egyszerűbb kiszámolni, mint $F(t, z; h)$-t. Ez adja az ötletet, hogy tekintsük a

$$z_{i+1} = z_i + hf\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}f(t_i, z_i)\right), \quad i = 0, 1, 2, \ldots, \qquad z_0 = y_0$$

közelítő módszert. Ezt a módszert **felezőpont-módszernek** nevezzük.

Legyen $\tau_{i+1}$ a felezőpont-módszer, $\bar{\tau}_{i+1}$ pedig a másodrendű Taylor-módszer $(i+1)$-edik lokális képlethibája. Ekkor

$$
\begin{aligned}
\tau_{i+1} &= \frac{y(t_{i+1}) - y(t_i)}{h} - f\left(t_i + \frac{h}{2}, y(t_i) + \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \frac{y(t_{i+1}) - y(t_i)}{h} - F(t_i, y(t_i); h) - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right) \\
&= \bar{\tau}_{i+1} - E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right).
\end{aligned}
$$

Az előző szakaszból ismert, hogy $|\bar{\tau}_{i+1}| \le \bar{K}h^2$, és (10) valamint $f \in C^2$ biztosítja, hogy létezik olyan $\tilde{K}$, hogy $\left|E\left(t_i, y(t_i), \frac{h}{2}, \frac{h}{2}f(t_i, y(t_i))\right)\right| \le \tilde{K}h^2$. Ebből viszont következik, hogy

$$|\tau_{i+1}| \le (\bar{K} + \tilde{K})h^2,$$

és így felezőpont-módszer másodrendben konvergál.

Az előzőekkel analóg módon definiáljuk $F$-et a következő módon:

$$
\begin{aligned}
F(t, z; h) &:= \sum_{j=1}^{p}\gamma_j G_j(t, z; h), \\
G_1(t, z; h) &:= f(t, z), \\
G_j(t, z; h) &:= f\left(t + \alpha_j h, z + h\sum_{k=1}^{j-1}\beta_{jk}G_k(t, z; h)\right), \qquad j = 2, 3, \ldots, p.
\end{aligned}
\tag{11}
$$

A (8) és (11) képletekkel definiált módszerek osztályát **(explicit) Runge–Kutta-módszereknek** nevezzük. A cél úgy megválasztani a képletekben szereplő paramétereket, hogy a lehető legmagasabb rendű lokális képlethibát kapjunk.

Tekintsük most a $p = 2$ esetet. Erre

$$F(t, z; h) = \gamma_1 f(t, z) + \gamma_2 f(t + \alpha_1 h, z + \beta_{11}hf(t, z)).$$

(Ha $\gamma_1 = 0$, $\gamma_2 = 1$, $\alpha_1 = \beta_{11} = 1/2$, akkor visszakapjuk a felezőpont-módszert.) Próbáljuk meg úgy megválasztani a paramétereket, hogy harmadrendű lokális hibát kapjunk.

Alkalmazzuk a másodrendű Taylor-formulát a jobb oldalra:

$$
\begin{aligned}
F(t, z; h) &= (\gamma_1 + \gamma_2)f(t, z) + h\gamma_2\left(\alpha_1\frac{\partial f}{\partial t}(t, z) + \beta_{11}f(t, z)\frac{\partial f}{\partial y}(t, z)\right) \\
&\quad + \frac{h^2}{2}\gamma_2\left(\alpha_1^2\frac{\partial^2 f}{\partial t^2}(t, z) + 2\alpha_1\beta_{11}f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z)\right. \\
&\quad \left. + \beta_{11}^2(f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z)\right) + E(t, z, \alpha_1 h, \beta_{11}hf(t, z)),
\end{aligned}
\tag{12}
$$

ahol $E$ a harmadrendű hibatag. Hasonlítsuk ezt össze a harmadrendű Taylor-módszert definiáló képlettel:

$$
\begin{aligned}
\tilde{F}(t, z; h) &= f(t, z) + \frac{h}{2}\left(\frac{\partial f}{\partial t}(t, z) + \frac{\partial f}{\partial y}(t, z)f(t, z)\right) \\
&\quad + \frac{h^2}{6}\left(\frac{\partial^2 f}{\partial t^2}(t, z) + 2f(t, z)\frac{\partial^2 f}{\partial t \partial y}(t, z)\right. \\
&\quad \left. + (f(t, z))^2\frac{\partial^2 f}{\partial y^2}(t, z) + \frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z) + \left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)\right).
\end{aligned}
\tag{13}
$$

Láthatjuk, hogy $F$ legfeljebb másodrendű tagjai mind szerepelnek $\tilde{F}$ képletében. Fordítva ez nem teljesül: a (13)-ban szereplő $\frac{\partial f}{\partial t}(t, z)\frac{\partial f}{\partial y}(t, z)$ és $\left(\frac{\partial f}{\partial y}(t, z)\right)^2 f(t, z)$ tagoknak nincs megfelelőjük (12)-ben. Ez azt jelenti, hogy nem tudunk minden $h$-ban másodrendű tagot helyettesíteni $F$ másodrendű tagjaival. A kapott képlet így csak másodrendű lehet. Próbáljuk meg azért a lehető legtöbb másodrendű tagot előállítani. Olyan paramétereket keresünk, amelyeknél a (12) és (13) nullad- és elsőfokú tagjai megegyeznek, azaz:

$$\gamma_1 + \gamma_2 = 1, \qquad \gamma_2\alpha_1 = \frac{1}{2}, \qquad \gamma_2\beta_{11} = \frac{1}{2}, \tag{14}$$

és

$$\frac{\gamma_2}{2}\alpha_1^2 = \frac{1}{6}, \qquad \gamma_2\alpha_2\beta_{11} = \frac{1}{3}, \qquad \frac{\gamma_2}{2}\beta_{11}^2 = \frac{1}{6}. \tag{15}$$

Látható, hogy például $\gamma_1 = \gamma_2 = 1/2$, $\alpha_1 = \beta_{11} = 1$ paraméterek megoldásai (14)-nek, de nem teljesítik (15) egyenleteket. Viszont mivel a Taylor-módszer minden legfeljebb elsőrendű tagját visszakapjuk, így a felezőpont-módszerhez hasonlóan másodrendű módszert kapunk.

Ezt a

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, z_i + hf(t_i, z_i))\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0
\end{aligned}
$$

formulával definiált módszert **módosított Euler-módszernek** nevezzük.

Ha a paramétereknek a $\gamma_1 = 1/4$, $\gamma_2 = 3/4$ és $\alpha_1 = \beta_{11} = 2/3$ értékeket választjuk, akkor mind a (14) és (15) egyenletek teljesülnek. Az ehhez tartozó módszer, az ún. **Heun-módszer** definíciója tehát:

$$
\begin{aligned}
z_{i+1} &= z_i + \frac{h}{4}\left(f(t_i, z_i) + 3f\left(t_i + \frac{2h}{3}, z_i + \frac{2}{3}hf(t_i, z_i)\right)\right), \quad i = 0, 1, 2, \ldots, \\
z_0 &= y_0.
\end{aligned}
$$

Mindkét módszer ún. másodrendű Runge–Kutta-képlet (mivel másodrendű lokális képlethibával rendelkeznek).

A **módosított Euler-módszer geometriai interpretációja**

$$
\begin{aligned}
w_{i+1} &= z_i + hf(t_i, z_i) \\
z_{i+1} &= z_i + \frac{h}{2}\left(f(t_i, z_i) + f(t_{i+1}, w_{i+1})\right)
\end{aligned}
$$

*(Az ábrán a $(t_i, z_i)$ pontból induló nyilak: az Euler-lépés a $(t_{i+1}, w_{i+1})$ pontba, az átlagos meredekség a $(t_{i+1}, z_{i+1})$ pontba mutat.)*

Az eddig megadott néhány képlethez hasonló módon levezethető számos más Runge-Kutta típusú módszer. Belátható, hogy a különböző $p$ értékekhez tartozó (11) képletekkel definiált Runge–Kutta-módszerekkel a következő maximális rendű lokális képlethibákat lehet elérni:

| $p$ | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 |
|-----|---|---|---|---|---|---|---|---|---|----|
| a módszer maximális rendje | 1 | 2 | 3 | 4 | 4 | 5 | 6 | 6 | 7 | 7 |

Az egyik legnépszerűbb (11) típusú módszer, a „klasszikus" **Runge–Kutta-módszer** definíciója:

$$
\begin{aligned}
z_0 &= y_0, \\
w_{i,1} &= f(t_i, z_i), \\
w_{i,2} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,1}\right), \\
w_{i,3} &= f\left(t_i + \frac{h}{2}, z_i + \frac{h}{2}w_{i,2}\right), \\
w_{i,4} &= f\left(t_{i+1}, z_i + hw_{i,3}\right), \\
z_{i+1} &= z_i + \frac{h}{6}(w_{i,1} + 2w_{i,2} + 2w_{i,3} + w_{i,4}), \qquad i = 0, 1, 2, \ldots.
\end{aligned}
$$

Ez a módszer negyedrendű lokális képlethibával rendelkezik (feltéve, hogy $f \in C^5$). A módszer levezetését és a képlethiba rendjének bizonyítását itt nem közöljük.

*(Az ábra a klasszikus Runge–Kutta-módszer geometriai interpretációját mutatja a négy meredekség-nyíllal.)*

> **Példa**
> Az $y' = 2y - 10t^2 + 2t$, $y(0) = 1$ feladatra alkalmaztuk a módosított Euler-, Heun- és a klasszikus negyedrendű Runge–Kutta-módszereket a $h = 0.2$-es lépésközt használva. A kapott numerikus eredmények az alábbi táblázatban találhatók.
>
> Runge–Kutta-módszerek
>
> | | | módosított Euler | | Heun | | klasszikus | |
> |------|---------|--------|------------------|--------|------------------|--------|------------------|
> | $t_i$ | $y(t_i)$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ | $z_i$ | $|y(t_i) - z_i|$ |
> | 0.0 | 1.0000 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 | 1.0000 | 0.0000e-01 |
> | 0.2 | 1.5082 | 1.5005 | 7.6753e-03 | 1.5042 | 3.9753e-03 | 1.5082 | 1.1773e-05 |
> | 0.4 | 2.1745 | 2.1570 | 1.7415e-02 | 2.1663 | 8.2078e-03 | 2.1744 | 2.6024e-05 |
> | 0.6 | 2.8799 | 2.8505 | 2.9398e-02 | 2.8679 | 1.1995e-02 | 2.8798 | 4.2338e-05 |
> | 0.8 | 3.4470 | 3.4035 | 4.3486e-02 | 3.4331 | 1.3882e-02 | 3.4469 | 5.9304e-05 |
> | 1.0 | 3.6109 | 3.5521 | 5.8862e-02 | 3.5998 | 1.1100e-02 | 3.6109 | 7.3610e-05 |
