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
