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
