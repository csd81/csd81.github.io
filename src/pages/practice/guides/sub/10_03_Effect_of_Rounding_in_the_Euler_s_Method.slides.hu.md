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
