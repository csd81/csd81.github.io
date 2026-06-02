## 6.5. Spline interpoláció

Legyen $a = x_0 < x_1 < \ldots < x_n = b$ az $[a,b]$ intervallumnak egy felosztása. Az $S \colon [a,b] \to \mathbb{R}$ folytonos függvényt az $\{x_i\}$ osztópontokhoz tartozó **$k$-adrendű spline** függvénynek nevezzük, ha $S \in C^{k-1}(a,b)$, és $S$ megszorítása minden $[x_i, x_{i+1}]$ intervallumra egy $k$-adrendű polinom. Az elsőrendű, másodrendű ill. harmadrendű spline függvényeket **lineáris, kvadratikus, ill. kubikus spline függvényeknek** nevezzük.

[ábra: lineáris spline függvény — szakaszonkénti egyenesek]

[ábra: rugalmas spline-vonalzó (fizikai spline) használata]

---

Adott osztópontoknak egy $a = x_0 < x_1 < \ldots < x_n = b$, és hozzá tartozó $y_0, y_1, \ldots, y_n$ függvényértékek véges sorozata. Keresünk egy olyan $S$ **harmadrendű spline** függvényt, amely interpolálja a megadott adatokat, azaz

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

Jelöljük $S_i$-vel az $S$ függvény $[x_i, x_{i+1}]$ intervallumra vett megszorítását $(i = 0, 1, \ldots, n - 1)$. [ábra: $S_0, S_i, S_{i+1}, S_{n-1}$ szakaszok]

---

Az $S_i$ függvények teljesítik a következő feltételeket:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(7)} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \quad\text{(8)} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \quad\text{(9)} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \quad\text{(10)}
\end{aligned}$$

Mivel minden egyes $S_i$ függvényt 4 paraméter határoz meg, így összesen $4n$ paraméter definiálja $S$-t. A (7)–(10) feltételek száma viszont csak $4n - 2$, ezért még két feltételt megadhatunk. Egy gyakran használt feltétel a következő:

$$S_0''(x_0) = 0 \qquad \text{és} \qquad S_{n-1}''(x_n) = 0. \tag{11}$$

A (7)–(11) feltételekkel definiált kubikus spline függvényt **természetes spline** függvénynek nevezzük.

---

Vegyük fel $S_i$-t a következő alakban:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

ahol $a_i, b_i, c_i$ és $d_i$ $(i = 0, 1, \ldots, n - 1)$ meghatározandó paraméterek. Ekkor

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

Ezekből rögtön következik

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{és} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{12}$$

A (12) összefüggések segítségével definiálhatjuk az $a_n$, $b_n$ és $c_n$ konstansokat is:

$$a_n := y_n, \qquad b_n := S'(x_n) \qquad \text{és} \qquad c_n := S''(x_n)/2. \tag{13}$$

(A (13) képletekben a deriváltak bal oldali deriváltakat jelentenek.)

---

$x = x_{i+1}$-t behelyettesítve $S_i$ képletébe:

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Vezessük be a $\Delta x_i := x_{i+1} - x_i$ és a $\Delta y_i := y_{i+1} - y_i$ jelöléseket. Így

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{14}$$

A (9) feltételből és a $b_{i+1} = S_{i+1}'(x_{i+1})$ összefüggésből

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{15}$$

minden $i = 0, 1, \ldots, n - 2$-re. Hasonlóan, a (10) egyenletből és $c_n$ definíciójából következik

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

amiből

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{16}$$

---

Ezt behelyettesítve a (14) és (15) egyenletekbe:

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1.
\end{aligned}$$

Az első egyenletből kifejezve $b_i$-t

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

és behelyettesítve a másodikba $i = 0, 1, \ldots, n - 2$-re:

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{17}$$

A (17) egyenlet $n - 1$ db, $c_i$-re nézve lineáris egyenletet ír le.

---

Hozzávéve a (11) feltételből adódó $c_0 = 0$ és $c_n = 0$ egyenleteket $n + 1$ egyenletből álló $\mathbf{Ax} = \mathbf{b}$ alakú lineáris egyenletrendszert kapunk, ahol $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

$$\mathbf{A} = \begin{pmatrix}
1 & 0 & 0 & 0 & 0 & \cdots & 0 \\
\Delta x_0 & 2(\Delta x_0 + \Delta x_1) & \Delta x_1 & 0 & 0 & \cdots & 0 \\
0 & \Delta x_1 & 2(\Delta x_1 + \Delta x_2) & \Delta x_2 & 0 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & & \\
0 & \cdots & & & \Delta x_{n-2} & 2(\Delta x_{n-2} + \Delta x_{n-1}) & \Delta x_{n-1} \\
0 & \cdots & & & 0 & 0 & 1
\end{pmatrix}$$

tridiagonális mátrix és

$$\mathbf{b} = \begin{pmatrix}
0 \\
3\frac{\Delta y_1}{\Delta x_1} - 3\frac{\Delta y_0}{\Delta x_0} \\
\vdots \\
3\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - 3\frac{\Delta y_{n-2}}{\Delta x_{n-2}} \\
0
\end{pmatrix}.$$

Mivel $\mathbf{A}$ diagonálisan domináns, az $\mathbf{Ax} = \mathbf{b}$ egyenletnek létezik egyértelmű megoldása.

---

A $c_i$-k ismeretében pedig a $d_i$ és $b_i$ együtthatókat is meghatározhatjuk.

**Tétel.** *A harmadrendű spline interpoláció feladatának létezik pontosan egy természetes harmadrendű spline függvény megoldása.*

---

**Példa.** Illesszünk természetes harmadrendű spline függvényt az

| $x_i$ | 0.0 | 0.5 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.9 | 0.1 | 1.5 | 0.0 | -0.8 | -0.2 |

adatokra! A $c_i$ együtthatókra felírt lineáris egyenletrendszer:

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
0.5 & 3 & 1 & 0 & 0 & 0 \\
0 & 1 & 3 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 9.0 \\ -13.2 \\ 6.6 \\ 4.2 \\ 0
\end{pmatrix}.$$

---

**Példa (folyt.)** A számolást elvégezve a következő harmadrendű polinomokat kapjuk:

$$\begin{aligned}
S_0(x) &= 0.9 - 2.47117647x + 3.48470588x^3, \\
S_1(x) &= 0.1 + 0.142352940(x - 0.5) + 5.22705882(x - 0.5)^2 \\
&\quad - 3.96941176(x - 0.5)^3, \\
S_2(x) &= 1.5 - 1.31176471(x - 1.5) - 6.68117647(x - 1.5)^2 \\
&\quad + 6.60941177(x - 1.5)^3, \\
S_3(x) &= -3.03588235(x - 2) + 3.232941176(x - 2)^2 \\
&\quad - 0.997058823(x - 2)^3, \\
S_4(x) &= -0.8 + 0.438823529(x - 3) + 0.2417647059(x - 3)^2 \\
&\quad - 0.0805882353(x - 3)^3.
\end{aligned}$$

[ábra: Spline interpoláció grafikonja az adatpontokkal]

---

A (11) feltétel helyett az

$$S'(x_0) = y_0' \qquad \text{és} \qquad S'(x_n) = y_n' \tag{18}$$

feltételt is kiköthetjük, ahol $y_0'$ és $y_n'$ adott számok. A (18) feltételt teljesítő spline függvényt **teljes spline függvénynek** nevezzük.

[ábra: madár alakú adatok ("Adatok")]
[ábra: ugyanaz Lagrange-interpolációval — szélső oszcilláció]
[ábra: ugyanaz spline interpolációval — sima illeszkedés]

---

**Tétel.** *Legyen $a = x_0 < x_1 < \ldots < x_n = b$ és $y_0, y_1, \ldots, y_n$ osztópontoknak és hozzátartozó függvényértékeknek egy véges sorozata, és legyen $S$ az ezeket interpoláló természetes kubikus spline függvény. Ekkor*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{19}$$

*minden olyan $f \in C^2(a,b)$-re, amely szintén interpolálja az adatokat, azaz $f(x_i) = y_i$, $i = 0, 1, \ldots, n$-re.*

**Bizonyítás.** Vezessük be a $g(x) \equiv f(x) - S(x)$ függvényt. Ekkor $f''(x) = S''(x) + g''(x)$, és így

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

---

**Bizonyítás (folyt.)** Mivel $\int_a^b (g''(x))^2 \, dx \geq 0$, így a tétel állítása következik, ha belátjuk, hogy $\int_a^b S''(x)g''(x) \, dx = 0$. Az integrált felbontva és parciálisan integrálva:

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

$S$ természetes spline függvény, így $S''(a) = S''(b) = 0$. Mivel $S$ harmadfokú polinom minden $[x_{i-1}, x_i]$ intervallumon, ezért ott $S'''$ konstans, így az integrál elé kivihető. Viszont $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, mivel $g(x_i) = 0$ minden $i = 0, 1, \ldots, n$-re. $\square$

---

**Tétel.** *Legyen $f \in C^4(a,b)$, $a = x_0 < x_1 < \ldots < x_n = b$ osztópontok, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ függvényértékek, valamint $y_0' = f'(a)$ és $y_n' = f'(b)$ derivált értékek, és legyen $S$ az ezekhez tartozó teljes spline függvény. Ekkor $x \in [a,b]$-re*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*ahol $M_4 := \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h := \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k := \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*
