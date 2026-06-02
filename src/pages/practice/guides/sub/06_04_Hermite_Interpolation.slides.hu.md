## 6.4. Hermite-interpoláció

Legyen adott egy $f$ differenciálható függvény, és osztópontoknak egy $x_i$ $(i = 0, \ldots, n)$ véges sorozata. Az ún. **Hermite-féle interpolációs feladatban** az $y_i = f(x_i)$ függvényértékeken kívül az $y_i' := f'(x_i)$ derivált értékeket is interpoláljuk. Keresünk tehát egy olyan

$$g(x) = c_0 + c_1 x + \cdots + c_m x^m$$

polinomot, amelyre

$$g(x_i) = y_i, \qquad g'(x_i) = y_i', \qquad i = 0, 1, \ldots, n$$

teljesül.

[ábra: adatpontok érintőszakaszokkal, majd átmenő $g(x)$ görbe]

---

A $g$ függvény képletében $m + 1$ db paraméter szerepel, az előző feltételek $2(n + 1)$ egyenletet határoznak meg, így azt várjuk, hogy

$$m = 2n + 1\text{-edfokú}$$

polinomok között találunk egyértelmű megoldását az Hermite-féle interpolációs problémának. Az Hermite-féle interpolációs probléma megoldását **Hermite-féle interpolációs polinomnak** vagy röviden **Hermite-polinomnak** nevezzük, és $H_{2n+1}$ jelöli.

---

A magasabbrendű speciális osztott differenciák, ahol az egymás után következő két alappont megegyezhet:

$$\begin{aligned}
f&[x_0, x_0, x_1, x_1, \ldots, x_n, x_n] \\
&= \frac{f[x_0, x_1, x_1, \ldots, x_n, x_n] - f[x_0, x_0, x_1, x_1, \ldots, x_n]}{x_n - x_0}.
\end{aligned}$$

Például

$$f[x_0, x_0, x_1] = \frac{f[x_0, x_1] - f[x_0, x_0]}{x_1 - x_0}, \qquad f[x_0, x_1, x_1] = \frac{f[x_1, x_1] - f[x_0, x_1]}{x_1 - x_0}.$$

---

**Tétel.** *Az Hermite-féle interpolációs feladatnak létezik egyértelmű megoldása a legfeljebb $(2n + 1)$-edfokú polinomok körében, amelyet a*

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0](x - x_0) + f[x_0, x_0, x_1](x - x_0)^2 \\
&+ f[x_0, x_0, x_1, x_1](x - x_0)^2(x - x_1) + f[x_0, x_0, x_1, x_1, x_2](x - x_0)^2(x - x_1)^2 \\
&+ f[x_0, x_0, x_1, x_1, x_2, x_2](x - x_0)^2(x - x_1)^2(x - x_2) + \cdots \tag{4} \\
&+ f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n](x - x_0)^2 \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

*alakban adhatunk meg. Továbbá a közelítés képlethibája*

$$f(x) - H_{2n+1}(x) = f[x_0, x_0, \ldots, x_n, x_n, x](x - x_0)^2 \cdots (x - x_n)^2. \tag{5}$$

---

**Bizonyítás.** Először vizsgáljuk az Hermite-polinom egyértelműségét. Tegyük fel, hogy $H_{2n+1}$ és $\tilde{H}_{2n+1}$ legfeljebb $(2n + 1)$-edfokú polinomok, amelyek teljesítik az Hermite-féle interpolációs feltételeket. Ekkor

$$P := H_{2n+1} - \tilde{H}_{2n+1}$$

is egy legfeljebb $(2n+1)$-edfokú polinom, amelyre

$$P(x_i) = H_{2n+1}(x_i) - \tilde{H}_{2n+1}(x_i) = f(x_i) - f(x_i) = 0$$

és

$$P'(x_i) = H'_{2n+1}(x_i) - \tilde{H}'_{2n+1}(x_i) = f'(x_i) - f'(x_i) = 0,$$

azaz $x_i$ kétszeres gyöke $P$-nek minden $i = 0, 1, \ldots, n$-re. $P$-nek van tehát $2(n + 1) = 2n + 2$ gyöke, amiből következik az algebra alaptétele szerint, hogy $P$ azonosan 0 polinom, hiszen $P$ legfeljebb $(2n + 1)$-edfokú.

---

**Bizonyítás (folyt.)** Direkt számolással rögtön kapjuk, hogy

$$H_{2n+1}(x_0) = f(x_0) \quad \text{és} \quad H'_{2n+1}(x_0) = f[x_0, x_0] = f'(x_0).$$

Válasszunk olyan $x_i$-hez közeli $x_i' > x_i$ számokat úgy, hogy $\{x_i, x_i':\ i = 0, 1, \ldots, n\}$ páronként különbözőek legyenek, és legyen $L_{2n+1}$ ezekhez az alappontokhoz tartozó, $f$-et interpoláló Lagrange-féle interpolációs polinom. [ábra: $x_0, x_0', \ldots, x_i, x_i', x_{i+1}, x_{i+1}', \ldots, x_n, x_n'$ osztópontok]

---

**Bizonyítás (folyt.)** Ekkor

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_0] + f[x_0, x_0'](x - x_0) + f[x_0, x_0', x_1](x - x_0)(x - x_0') \\
&+ f[x_0, x_0', x_1, x_1'](x - x_0)(x - x_0')(x - x_1) + \cdots \\
&+ f[x_0, x_0', x_1, x_1', \ldots, x_n, x_n'](x - x_0)(x - x_0') \cdots (x - x_{n-1}) \\
&\quad \cdot (x - x_{n-1}')(x - x_n),
\end{aligned}$$

és

$$f(x) = L_{2n+1}(x) + f[x_0, x_0', \ldots, x_n, x_n', x](x - x_0)(x - x_0') \cdots (x - x_n)(x - x_n').$$

$L_{2n+1}$ és $H_{2n+1}$ definíciójából és az osztott differencia folytonosságából kapjuk, hogy minden $x$-re

$$L_{2n+1}(x) \to H_{2n+1}(x) \quad \text{ha } (x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n), \tag{6}$$

és így

$$f(x) = H_{2n+1}(x) + f[x_0, x_0, x_1, x_1, \ldots, x_n, x_n, x](x - x_0)^2(x - x_1)^2 \cdots (x - x_n)^2.$$

Ez igazolja az (5) összefüggést.

---

**Bizonyítás (folyt.)** A Lagrange-féle interpolációs polinom egyértelműségéből következik, hogy ha $x_0$, $x_0'$ és $x_1$, $x_1'$ sorrendjét felcseréljük, az interpolációs polinom nem fog változni, azaz

$$\begin{aligned}
L_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1'](x - x_1) + f[x_1, x_1', x_0](x - x_1)(x - x_1') \\
&+ f[x_1, x_1', x_0, x_0'](x - x_1)(x - x_1')(x - x_0) + \cdots \\
&+ f[x_1, x_1', x_0, x_0', x_2, x_2' \ldots, x_n, x_n'](x - x_1)(x - x_1')(x - x_0)(x - x_0') \\
&\quad \cdot (x - x_2)(x - x_2') \cdots (x - x_{n-1})(x - x_{n-1}')(x - x_n).
\end{aligned}$$

---

**Bizonyítás (folyt.)** Mindkét oldal határértékét véve, ha $(x_0', x_1', \ldots, x_n') \to (x_0, x_1, \ldots, x_n)$, és használva a (6) összefüggést és a határérték egyértelműségét:

$$\begin{aligned}
H_{2n+1}(x) = &\ f[x_1] + f[x_1, x_1](x - x_1) + f[x_1, x_1, x_0](x - x_1)^2 \\
&+ f[x_1, x_1, x_0, x_0](x - x_1)^2(x - x_0) + f[x_1, x_1, x_0, x_0, x_2](x - x_1)^2(x - x_0)^2 \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2](x - x_1)^2(x - x_0)^2(x - x_2) + \cdots \\
&+ f[x_1, x_1, x_0, x_0, x_2, x_2, \ldots, x_n, x_n](x - x_1)^2(x - x_0)^2(x - x_2)^2 \\
&\quad \cdots (x - x_{n-1})^2(x - x_n)
\end{aligned}$$

alakban is felírható. Ebből nyilvánvaló, hogy $H_{2n+1}(x_1) = f(x_1)$ és $H'_{2n+1}(x_1) = f'(x_1)$. Ehhez hasonlóan látható be, hogy $H_{2n+1}(x_i) = f(x_i)$ és $H'_{2n+1}(x_i) = f'(x_i)$, $i = 2, 3, \ldots, n$-re. $\square$

---

**Tétel.** *Legyen $f \in C^{2n+2}$. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f(x) - H_{2n+1}(x) = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}(x - x_0)^2 \ldots (x - x_n)^2.$$

**Bizonyítás.** Legyen $x$ egy osztópontoktól különböző rögzített szám, és definiáljuk a

$$g(z) = f(z) - H_{2n+1}(z) - \frac{(z - x_0)^2 \cdots (z - x_n)^2}{(x - x_0)^2 \cdots (x - x_n)^2}(f(x) - H_{2n+1}(x))$$

függvényt. Nyilván $g \in C^{2n+2}$, és $x_0, \ldots, x_n$ kétszeres gyökei, $x$ pedig egyszeres gyöke $g$-nek. Ezért az általánosított Rolle-tétel szerint létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy $g^{(2n+2)}(\xi) = 0$. Ebből pedig következik a tétel állítása. $\square$

---

**Corollary.** *Tegyük fel, hogy $f \in C^{2n+2}$ és $x, x_0, \ldots, x_n$ páronként különböző számok. Ekkor létezik olyan $\xi \in \langle x_0, x_1, \ldots, x_n, x \rangle$, hogy*

$$f[x_0, x_0, \ldots, x_n, x_n, x] = \frac{f^{(2n+2)}(\xi)}{(2n+2)!}.$$

---

**Osztott differenciák elrendezése a Hermite-polinom számoláskor**

| $x_0$ | $\boxed{f(x_0)}$ | | | |
|-------|------------------|---|---|---|
| $x_0$ | $f(x_0)$ | $\boxed{f[x_0, x_0]}$ | | |
| $x_1$ | $f(x_1)$ | $f[x_0, x_1]$ | $\boxed{f[x_0, x_0, x_1]}$ | |
| $x_1$ | $f(x_1)$ | $f[x_1, x_1]$ | $f[x_0, x_1, x_1]$ | $\ddots$ |
| $\vdots$ | $\vdots$ | $\vdots$ | $\vdots$ | |
| $x_n$ | $f(x_n)$ | $f[x_{n-1}, x_n]$ | $f[x_{n-1}, x_{n-1}, x_n]$ | $\cdots$ |
| $x_n$ | $f(x_n)$ | $f[x_n, x_n]$ | $f[x_{n-1}, x_n, x_n]$ | $\cdots$ $\boxed{f[x_0, x_0, x_1, x_1 \ldots, x_n, x_n]}$ |

---

**Példa.** Tekintsük a következő adatokat:

| $x_i$ | -1 | 1 | 2 |
|--------|----|----|----|
| $y_i$ | -1 | 1 | 29 |
| $y_i'$ | -5 | 7 | 61 |

Az adatokat interpoláló Hermite-féle polinomhoz a táblázat lépésenkénti számítása (animáció):

$$\frac{1-(-1)}{1-(-1)} = 1, \quad \frac{29-1}{2-1} = 28, \quad \frac{1-(-5)}{1-(-1)} = 3, \quad \frac{7-1}{1-(-1)} = 3,$$
$$\frac{28-7}{2-1} = 21, \quad \frac{61-28}{2-1} = 33, \quad \frac{3-3}{1-(-1)} = 0, \quad \frac{21-3}{2-(-1)} = 6,$$
$$\frac{33-21}{2-1} = 12, \quad \frac{6-0}{2-(-1)} = 2, \quad \frac{12-6}{2-(-1)} = 2, \quad \frac{2-2}{2-(-1)} = 0.$$

A teljes táblázat:

$$
\begin{array}{rrrrrrr}
-1 & -1 & & & & & \\
-1 & -1 & -5 & & & & \\
1 & 1 & 1 & 3 & & & \\
1 & 1 & 7 & 3 & 0 & & \\
2 & 29 & 28 & 21 & 6 & 2 & \\
2 & 29 & 61 & 33 & 12 & 2 & 0
\end{array}
$$

Így a $H_5$ Hermite-polinom negyedfokú:

$$H_5(x) = -1 - 5(x+1) + 3(x+1)^2 + 2(x+1)^2(x-1)^2 = 2x^4 - x^2 + x - 1.$$

---
