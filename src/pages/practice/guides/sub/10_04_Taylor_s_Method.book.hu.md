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
