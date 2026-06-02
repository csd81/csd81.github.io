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
