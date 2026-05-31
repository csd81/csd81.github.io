## 6.4. Hermite-interpoláció

Ebben a szakaszban az interpoláció alapfeladatát módosítjuk. Legyen adott egy $f$ differenciálható függvény, és osztópontoknak egy $x_i$ $(i = 0, \ldots, n)$ véges sorozata. Az ún. *Hermite-féle interpolációs feladatban* azon kívül, hogy az $y_i = f(x_i)$ függvényértékeket interpoláljuk, az $y_i' \equiv f'(x_i)$ derivált értékeket is szeretnénk interpolálni. Keresünk tehát egy olyan $g(x) = c_0 + c_1 x + \cdots + c_m x^m$ polinomot, amelyre

$$g(x_i) = y_i, \qquad g'(x_i) = y_i', \qquad i = 0, 1, \ldots, n$$

teljesül. A feladat geometriai jelentése az, hogy olyan polinomot keresünk, amelynek grafikonja a megadott irányokban megy át az adott $(x_i, y_i)$ pontokon, azaz az érintőjének iránytangense megegyezik az $y_i'$ értékekkel. A $g$ függvény képletében $m + 1$ db paraméter szerepel, az előző feltételek $2(n + 1)$ egyenletet határoznak meg, így azt várjuk, hogy $m = 2n + 1$-edfokú polinomok között találunk egyértelmű megoldását az Hermite-féle interpolációs problémának. A következő tételben szükségünk lesz olyan magasabbrendű speciális osztott differenciákra, ahol az egymás után következő két alappont megegyezhet: $f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n]$, ahol $x_0, x_1, \ldots, x_n$ páronként különböznek. Ezeket az osztott differenciákat a szokásos rekurzív definícióval értelmezhetjük eggyel alacsonyabb fokú osztott differenciák segítségével:

$$f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] = \frac{f[x_0, x_1, x_1, \ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \ldots, x_n]}{x_n - x_0}.$$

Az alacsonyabb fokú osztott differenciákat is ehhez hasonlóan definiáljuk, és ezt folytathatjuk egészen addig, amíg különböző vagy egyenlő alappontokra felírt elsőrendű osztott differenciákig nem jutunk vissza, amelyeket már definiáltuk a 6.2 szakaszban.

**6.18. tétel.** *Az Hermite-féle interpolációs feladatnak létezik egyértelmű megoldása a legfeljebb $(2n + 1)$-edfokú polinomok körében, amelyet a*

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \cdots \tag{6.7} \\
&+ f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n](x - x_0)^2(x - x_1)^2 \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

*alakban adhatunk meg. Továbbá a közelítés képlethibája*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \ldots, x_n, x_n, x](x - x_0)^2 \cdots (x - x_n)^2. \tag{6.8}$$

**Bizonyítás.** Először vizsgáljuk az Hermite-polinom egyértelműségét. Tegyük fel, hogy $H_{2n+1}$ és $\tilde{H}_{2n+1}$ legfeljebb $(2n + 1)$-edfokú polinomok, amelyek teljesítik az Hermite-féle interpolációs feltételeket. Ekkor $P \equiv H_{2n+1} - \tilde{H}_{2n+1}$ is egy legfeljebb $(2n+1)$-edfokú polinom, amelyre $P(x_i) = H_{2n+1}(x_i) - \tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$, és $P'(x_i) = H'_{2n+1}(x_i) - \tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0$, azaz $x_i$ kétszeres gyöke $P$-nek minden $i = 0, 1, \ldots, n$-re. $P$-nek van tehát $2(n + 1) = 2n + 2$ gyöke, amiből következik az algebra alaptétele szerint, hogy $P$ azonosan 0 polinom, hiszen $P$ legfeljebb $(2n + 1)$-edfokú. Ebből következik, hogy az Hermite-féle interpolációs feladatnak legfeljebb egy $(2n + 1)$-edfokú megoldása lehet.

Most belátjuk, hogy a (6.7) képlettel definiált $H_{2n+1}$ polinom megoldása az Hermite-féle interpolációs feladatnak, és teljesíti a (6.8) hibaformulát. Direkt számolással rögtön kapjuk, hogy $H_{2n+1}(x_0) = f(x_0)$ és $H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0)$. Következő lépésként belátjuk, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$ is teljesül. Ehhez válasszunk olyan $x_i$-hez közeli $\tilde{x}_i$ számokat, hogy $\{x_i, \tilde{x}_i:\ i = 0, 1, \ldots, n\}$ páronként különbözőek legyenek, és legyen $L_{2n+1}$ ezekhez az alappontokhoz tartozó, $f$-et interpoláló Lagrange-féle interpolációs polinom. Ekkor

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \cdots \\
&+ f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'](x - x_0)(x - x_0') \cdots (x - x_{n-1}) \\
&\quad \cdot (x - x_{n-1}')(x - x_n),
\end{aligned}$$

és

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \ldots, x_n, x_n', x](x - x_0)(x - x_0') \cdots (x - x_n)(x - x_n').$$

$L_{2n+1}$ és $H_{2n+1}$ definíciójából és az osztott differencia folytonosságából (lásd a 3. feladatot) kapjuk, hogy minden $x$-re

$$L_{2n+1}(x) \to H_{2n+1}(x) \quad \text{ha } (x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n), \tag{6.9}$$

és így

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \cdots (x - x_n)^2.$$

Ez igazolja a (6.8) összefüggést. A Lagrange-féle interpolációs polinom egyértelműségéből következik, hogy ha $x_0$, $x_0'$ és $x_1$, $x_1'$ sorrendjét felcseréljük, az interpolációs polinom nem fog változni, azaz

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \cdots \\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\
&\quad \cdot (x - x_2)(x - x_2') \cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\end{aligned}$$

Ebből viszont kapjuk, mindkét oldal határértékét véve, ha $(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)$, és használva a (6.9) összefüggést és a határérték egyértelműségét, hogy

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \cdots \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\
&\quad \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

alakban is felírható. Ebből viszont nyilvánvaló, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$. Ehhez hasonlóan látható be, hogy $H_{2n+1}(x_i) = f(x_i)$ és $H'_{2n+1}(x_i) = f'(x_i)$ teljesül $i = 2, 3, \ldots, n$-re is. $\square$

**6.19. tétel.** *Legyen $f \in C^{2n+2}$. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}(x - x_0)^2 \ldots (x - x_n)^2.$$

**Bizonyítás.** A bizonyítás hasonló a 6.5 tétel bizonyításához. Legyen $x$ egy osztópontoktól különböző rögzített szám, és definiáljuk a

$$g(z) = f(z) - H_{2n+1}(z) - \frac{(z - x_0)^2 \cdots (z - x_n)^2}{(x - x_0)^2 \cdots (x - x_n)^2}(f(x) - H_{2n+1}(x))$$

függvényt. Nyilván $g \in C^{2n+2}$, és $x_0, \ldots, x_n$ kétszeres gyökei, $x$ pedig egyszeres gyöke $g$-nek. Ezért az általánosított Rolle-tétel (6.4 tétel) szerint létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy $g^{(2n+2)}(\xi) = 0$. Ebből pedig következik a tétel állítása. $\square$

A (6.8) összefüggést és a 6.19 tételt összehasonlítva rögtön kapjuk:

**6.20. következmény.** *Tegyük fel, hogy $f \in C^{2n+2}$ és $x, x_0, \ldots, x_n$ páronként különböző számok. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f[x_0, x_0, \ldots, x_n, x_n, x] = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}.$$

Kézi számoláskor a (6.8) képlethez szükséges osztott differenciákat a 6.2 táblázat segítségével számolhatjuk ki. Megjegyezzük, hogy ez a táblázat nagyon hasonlít a 6.1 táblázathoz. A különbség az, hogy minden alappont és a hozzá tartozó függvényérték kétszer szerepel benne, és a harmadik oszlopban az azonos alappontokra felírt elsőrendű osztott differenciák is előre adottak, a megadott derivált értékkel egyeznek meg. A táblázat többi elemét ugyanúgy számítjuk, mint a 6.1 táblázatban. A bekeretezett számok fogják adni a (6.8) képletben szereplő együtthatókat.

*6.2. táblázat. Osztott differenciák elrendezése kézi számoláskor*

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\cdots$ $\boxed{f[x_0, x_0, x_1, x_1 \ldots, x_n, x_n]}$ |

**6.21. példa.** Tekintsük a következő adatokat:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | 2 | 4 | 11 |
| $y_i'$ | 3 | -5 | 30 |

Keressük meg az adatokat interpoláló Hermite-féle interpolációs polinomot! Készítsük el a következő táblázatot:

$$
\begin{array}{rrrrrrr}
-1 & 2 & & & & & \\
-1 & 2 & \boxed{3} & & & & \\
1 & 4 & 1 & -1 & & & \\
1 & 4 & \boxed{-5} & -3 & -1 & & \\
2 & 11 & 7 & 12 & 5 & 2 & \\
2 & 11 & \boxed{30} & 23 & 11 & 2 & 0
\end{array}
$$

(A harmadik oszlopban bekereteztük az inputként megadott derivált értékeket.) Az Hermite-polinom tehát

$$H_5(x) = 2 + 3(x + 1) - (x + 1)^2 - (x + 1)^2(x - 1) + 2(x + 1)^2(x - 1)^2 = 2x^4 - x^3 - 6x^2 + 2x + 7,$$

azaz $H_5$ jelen esetben egy negyedfokú polinom. $\square$

### Feladatok

1. Számítsa ki és ábrázolja az alábbi adatokhoz tartozó Hermite-féle interpolációs polinomokat:

   (a)

   | $x_i$ | -2 | -1 | 0 | 1 |
   |--------|----|----|----|----|
   | $y_i$ | 4 | 1 | 14 | -35 |
   | $y_i'$ | -1 | -2 | 43 | -394 |

   (b)

   | $x_i$ | -1 | 0 | 2 | 3 |
   |--------|----|----|----|----|
   | $y_i$ | 1 | 2 | 64 | -19 |
   | $y_i'$ | 3 | -1 | 111 | -301 |

<details class="reveal-solution"><summary>Megoldás</summary>

Build a divided-difference table with each mesh point repeated (so $z_{2i} = z_{2i+1} = x_i$), using $f[x_i,x_i] = y_i'$ for the repeated-point entries and ordinary divided differences elsewhere. The Hermite polynomial is then the Newton form
$$H_{2n+1}(x) = f[z_0] + f[z_0,z_1](x - z_0) + f[z_0,z_1,z_2](x - z_0)(x - z_1) + \cdots.$$

**(a)** With $z = (-2,-2,-1,-1,0,0,1,1)$, $y = (4,1,14,-35)$, $y' = (-1,-2,43,-394)$, fill the table (leading entries $f[z_0]=4$, $f[z_0,z_1]=-1$, $f[z_0,z_1,z_2]=3$, $f[z_0,\ldots,z_3]=-10$, $\ldots$) and assemble $H_7(x)$.

**(b)** With $z = (-1,-1,0,0,2,2,3,3)$, $y = (1,2,64,-19)$, $y' = (3,-1,111,-301)$, the same construction gives $H_7(x)$.

</details>

2. Bizonyítsa be, hogy ha $P$ egy legfeljebb $(2n + 2)$-edfokú polinom, $x_i$ $(i = 0, 1, \ldots, n)$ páronként különböző alappontok, és $H_{2n+1}$ a $P$-hez és az alappontokhoz tartozó Hermite-polinom, akkor $P(x) = H_{2n+1}(x)$ minden $x$-re!

<details class="reveal-solution"><summary>Megoldás</summary>

Let $Q(x) = P(x) - H_{2n+1}(x)$. Since $H_{2n+1}$ matches $P$ in value and derivative at each $x_i$, we have $Q(x_i) = 0$ and $Q'(x_i) = 0$ for $i = 0, \ldots, n$, so each $x_i$ is a double root of $Q$. Thus $Q$ has at least $2n+2$ roots counted with multiplicity, while $\deg Q \le 2n+2$. The only consistent possibility is $Q \equiv 0$. Hence $P(x) = H_{2n+1}(x)$. $\square$

</details>

3. Legyen $f \in C^1$. Bizonyítsa be, hogy
   $$\lim_{(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)} f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'] = f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n]$$
   és
   $$\lim_{(x_0', \ldots, x_{n-1}') \to (x_0, \ldots, x_{n-1})} f[x_0, x_0', x_1, x_1', \ldots, x_{n-1}, x_{n-1}', x_n] = f[x_0, x_0, x_1, x_1, \ldots, x_{n-1}, x_{n-1}, x_n]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By Corollary 6.12 divided differences depend continuously on the mesh points when $f$ is continuous. As each $x_i' \to x_i$, the divided difference with distinct points therefore approaches the divided difference with the corresponding repeated points, which is exactly the limit on the right-hand side. The limit holds by continuity. $\square$

</details>

4. Legyen $i_0, i_1, \ldots, i_n$ a $0, 1, \ldots, n$ véges számsorozatnak egy átrendezése. Lássa be, hogy ekkor
   $$f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] = f[x_{i_0}, x_{i_0}, x_{i_1}, x_{i_1}, \ldots, x_{i_n}, x_{i_n}]!$$

<details class="reveal-solution"><summary>Megoldás</summary>

By Corollary 6.11 divided differences are independent of the order of the mesh points. This invariance extends to repeated points by the continuity argument of the previous exercise. Hence the divided difference is invariant under any permutation of the mesh points. $\square$

</details>

5. Az Hermite-interpolációs feladatot általánosabban is meg lehet fogalmazni: az $i$-edik osztópontban a függvényérték és az első $k_i$ derivált érték adott, amelyeket interpolálni szeretnénk. Erre a feladatra könnyen általánosítható az ebben a szakaszban tárgyalt módszer. Illusztrálásként tekintsünk most egy konkrét, egyszerű feladatot: adott két osztópont, $x_0$ és $x_1$, és egy $f \in C^3$ függvény. Keresünk egy olyan minimális fokszámú polinomot, amelyre

   $$H(x_0) = f(x_0), \quad H'(x_0) = f'(x_0), \quad H''(x_0) = f''(x_0), \quad \text{és} \quad H(x_1) = f(x_1).$$

   (Itt $k_0 = 2$ és $k_1 = 0$.) Lássa be, hogy a feladat megoldása a

   $$H(x) \equiv f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_0](x - x_0)^2 + f[x_0, x_0, x_0, x_1](x - x_0)^3$$

   legfeljebb harmadfokú polinom!

<details class="reveal-solution"><summary>Megoldás</summary>

There are 4 conditions, so we seek a polynomial of degree $\le 3$. Use the Newton form with repeated nodes $z_0 = z_1 = z_2 = x_0$, $z_3 = x_1$:
$$H(x) = f[z_0] + f[z_0,z_1](x-z_0) + f[z_0,z_1,z_2](x-z_0)(x-z_1) + f[z_0,z_1,z_2,z_3](x-z_0)(x-z_1)(x-z_2),$$
which becomes the stated formula. One checks: $H(x_0) = f[x_0] = f(x_0)$; $H'(x_0) = f[x_0,x_0] = f'(x_0)$; $H''(x_0) = 2f[x_0,x_0,x_0] = f''(x_0)$; and $H(x_1) = f(x_1)$ by construction of the divided differences. $\square$

</details>
