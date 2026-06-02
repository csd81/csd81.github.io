## 6.5. Spline interpoláció

Legyen $a = x_0 < x_1 < \ldots < x_n = b$ az $[a,b]$ intervallumnak egy felosztása. Az $S \colon [a,b] \to \mathbb{R}$ folytonos függvényt az $\{x_i\}$ osztópontokhoz tartozó *$k$-adrendű spline* függvénynek nevezzük, ha $S \in C^{k-1}(a,b)$, és $S$ megszorítása minden $[x_i, x_{i+1}]$ intervallumra egy $k$-adrendű polinom. Az elsőrendű, másodrendű ill. harmadrendű spline függvényeket *lineáris, kvadratikus, ill. kubikus spline függvényeknek* nevezzük.

A legegyszerűbb, és így a gyakorlatban igen gyakran használt interpolációs módszer lineáris spline-okkal interpolálja a megadott adatokat. Geometriailag ez azt jelenti, hogy a megadott $(x_i, y_i)$ pontokat szakaszokkal kötjük össze. A lineáris spline interpolációval elkövetett hiba becslésével a 2. feladat foglalkozik.

A lineáris spline interpoláció hátránya az, hogy az interpolációs függvény nem sima, azaz nem differenciálható. Ezt a hátrányt kiküszöböli a harmadrendű spline interpoláció. Ekkor az interpolációs függvény kétszer folytonosan differenciálható lesz, ami a gyakorlati alkalmazásoknál többnyire elegendő. A szakasz hátralevő részében a harmadrendű spline interpolációval foglalkozunk.

Adott osztópontoknak egy $a = x_0 < x_1 < \ldots < x_n = b$, és hozzá tartozó $y_0, y_1, \ldots, y_n$ függvényértékek véges sorozata. Keresünk egy olyan $S$ harmadrendű spline függvényt, amely interpolálja a megadott adatokat, azaz

$$S(x_i) = y_i, \qquad i = 0, 1, \ldots, n.$$

Jelöljük $S_i$-vel az $S$ függvény $[x_i, x_{i+1}]$ intervallumra vett megszorítását $(i = 0, 1, \ldots, n - 1)$. A feltevés szerint $S$ interpolálja az $(x_i, y_i)$ pontokat és kétszer folytonosan differenciálható, ezért az $S_i$ függvények teljesítik a következő feltételeket:

$$\begin{aligned}
S_i(x_i) &= y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(6.10)} \\
S_i(x_{i+1}) &= y_{i+1}, & i &= 0, 1, \ldots, n - 1, \quad\text{(6.11)} \\
S_i'(x_{i+1}) &= S_{i+1}'(x_{i+1}), & i &= 0, 1, \ldots, n - 2, \quad\text{(6.12)} \\
S_i''(x_{i+1}) &= S_{i+1}''(x_{i+1}), & i &= 0, 1, \ldots, n - 2. \quad\text{(6.13)}
\end{aligned}$$

Mivel minden egyes $S_i$ függvényt 4 paraméter határoz meg, így összesen $4n$ paraméter definiálja $S$-t. A (6.10)–(6.13) feltételek száma viszont csak $4n - 2$, ezért a feladatnak így nem egyértelmű a megoldása. Ezért várhatóan még két feltételt megadhatunk, és ettől remélhetően egyértelmű megoldást kapunk. Egy gyakran használt feltétel a következő:

$$S_0''(x_0) = 0 \qquad \text{és} \qquad S_{n-1}''(x_n) = 0. \tag{6.14}$$

A (6.10)–(6.14) feltételekkel definiált kubikus spline függvényt *természetes spline* függvénynek nevezzük. Belátjuk, hogy az interpolációs feladatnak pontosan egy természetes spline függvény megoldása van. Vegyük fel $S_i$-t a következő alakban:

$$S_i(x) = a_i + b_i(x - x_i) + c_i(x - x_i)^2 + d_i(x - x_i)^3,$$

ahol $a_i, b_i, c_i$ és $d_i$ $(i = 0, 1, \ldots, n - 1)$ meghatározandó paraméterek. Ekkor

$$\begin{aligned}
S_i'(x) &= b_i + 2c_i(x - x_i) + 3d_i(x - x_i)^2, \\
S_i''(x) &= 2c_i + 6d_i(x - x_i).
\end{aligned}$$

Ezekből az összefüggésekből rögtön következik

$$a_i = S_i(x_i) = y_i, \quad b_i = S_i'(x_i) \quad \text{és} \quad c_i = S_i''(x_i)/2, \quad i = 0, 1, \ldots, n - 1. \tag{6.15}$$

A (6.15) összefüggések segítségével definiálhatjuk az $a_n$, $b_n$ és $c_n$ konstansokat is (amelyekre később szükségünk lesz):

$$a_n \equiv y_n, \qquad b_n \equiv S'(x_n) \qquad \text{és} \qquad c_n \equiv S''(x_n)/2. \tag{6.16}$$

(A (6.16) képletekben a deriváltak bal oldali deriváltakat jelentenek.) $x = x_{i+1}$-t behelyettesítve $S_i$ képletébe és a (6.11) egyenletet, valamint az $a_i = y_i$ összefüggést használva kapjuk

$$y_i + b_i(x_{i+1} - x_i) + c_i(x_{i+1} - x_i)^2 + d_i(x_{i+1} - x_i)^3 = y_{i+1}.$$

Vezessük be a $\Delta x_i \equiv x_{i+1} - x_i$ és a $\Delta y_i \equiv y_{i+1} - y_i$ jelöléseket. Így

$$b_i \Delta x_i + c_i(\Delta x_i)^2 + d_i(\Delta x_i)^3 = \Delta y_i, \qquad i = 0, 1, \ldots, n - 1. \tag{6.17}$$

A (6.12) feltételből és a $b_{i+1} = S_{i+1}'(x_{i+1})$ összefüggésből

$$b_i + 2c_i \Delta x_i + 3d_i(\Delta x_i)^2 = b_{i+1} \tag{6.18}$$

minden $i = 0, 1, \ldots, n - 2$-re. Használva $b_n$ definícióját kapjuk, hogy (6.18) teljesül $i = n - 1$-re is. Hasonlóan, a (6.13) egyenletből és $c_n$ definíciójából következik

$$2c_i + 6d_i \Delta x_i = 2c_{i+1}, \qquad i = 0, 1, \ldots, n - 1,$$

amiből

$$d_i = \frac{c_{i+1} - c_i}{3\Delta x_i}, \qquad i = 0, 1, \ldots, n - 1. \tag{6.19}$$

Ezt behelyettesítjük a (6.17) és (6.18) egyenletekbe:

$$\begin{aligned}
b_i \Delta x_i + c_i(\Delta x_i)^2 + \frac{c_{i+1} - c_i}{3}(\Delta x_i)^2 &= \Delta y_i, & i &= 0, 1, \ldots, n - 1, \quad\text{(6.20)} \\
b_i + 2c_i \Delta x_i + (c_{i+1} - c_i)\Delta x_i &= b_{i+1}, & i &= 0, 1, \ldots, n - 1. \quad\text{(6.21)}
\end{aligned}$$

Az első egyenletből kifejezve $b_i$-t

$$b_i = \frac{\Delta y_i}{\Delta x_i} - \frac{2c_i + c_{i+1}}{3}\Delta x_i,$$

és behelyettesítve a másodikba $i = 0, 1, \ldots, n - 2$-re kis számolással adódik

$$c_i \Delta x_i + 2c_{i+1}(\Delta x_i + \Delta x_{i+1}) + c_{i+2}\Delta x_{i+1} = 3\frac{\Delta y_{i+1}}{\Delta x_{i+1}} - 3\frac{\Delta y_i}{\Delta x_i}, \quad i = 0, 1, \ldots, n - 2. \tag{6.22}$$

Megjegyezzük, hogy a (6.22) egyenlet levezetéséhez nem használtuk a (6.14) feltételt, így ez tetszőleges harmadrendű spline interpolációra teljesül. A (6.22) egyenlet $n - 1$ db, $c_i$-re nézve lineáris egyenletet ír le. Ehhez hozzávéve a (6.14) feltételből adódó $c_0 = 0$ és $c_n = 0$ egyenleteket $n + 1$ egyenletből álló $\mathbf{Ax} = \mathbf{b}$ alakú lineáris egyenletrendszert kapunk, ahol $\mathbf{x} = (c_0, c_1, \ldots, c_n)^T$,

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

Mivel $\mathbf{A}$ diagonálisan domináns, az $\mathbf{Ax} = \mathbf{b}$ egyenletnek létezik egyértelmű megoldása. A $c_i$-k ismeretében pedig a $d_i$ és $b_i$ együtthatókat is meghatározhatjuk. Ezzel beláttuk, hogy a feladatnak létezik egyértelmű megoldása. Megjegyezzük, hogy a gyakorlatban az $\mathbf{Ax} = \mathbf{b}$ egyenletrendszert a tridiagonális lineáris egyenletre vonatkozó Gauss-eliminációval (3.37 algoritmus) oldhatjuk meg hatékonyan. Beláttuk tehát:

**6.22. tétel.** *A harmadrendű spline interpoláció feladatának létezik pontosan egy természetes harmadrendű spline függvény megoldása.*

**6.23. példa.** Illesszünk természetes harmadrendű spline függvényt az

| $x_i$ | 0.0 | 1.0 | 1.5 | 2.0 | 3.0 | 4.0 |
|-------|-----|-----|-----|-----|-----|-----|
| $y_i$ | 0.5 | 0.1 | 2.5 | -1.0 | -0.5 | 0.0 |

adatokra! Az előző jelölést követve a $c_i$ együtthatókra felírt lineáris egyenletrendszer az adott adatokra a következő lesz:

$$\begin{pmatrix}
1 & 0 & 0 & 0 & 0 & 0 \\
1 & 3 & 0.5 & 0 & 0 & 0 \\
0 & 0.5 & 2 & 0.5 & 0 & 0 \\
0 & 0 & 0.5 & 3 & 1 & 0 \\
0 & 0 & 0 & 1 & 4 & 1 \\
0 & 0 & 0 & 0 & 0 & 1
\end{pmatrix}
\begin{pmatrix}
c_0 \\ c_1 \\ c_2 \\ c_3 \\ c_4 \\ c_5
\end{pmatrix}
=
\begin{pmatrix}
0 \\ 15.6 \\ -35.4 \\ 22.5 \\ 0 \\ 0
\end{pmatrix}.$$

Ezt megoldva kapjuk a $c_i$ értékeket, amit visszahelyettesítve a (6.19) és (6.20) egyenletekbe kiszámíthatók a $d_i$ és $b_i$ együtthatók értékei. A számolást elvégezve a következő harmadrendű polinomokat kapjuk az egyes intervallumokon:

$$\begin{aligned}
S_0(x) &= 0.5 - 3.4141079x + 3.0141079x^3, \\
S_1(x) &= 0.1 + 5.6282158(x - 1) + 9.04232365(x - 1)^2 - 21.3975104(x - 1)^3, \\
S_2(x) &= 2.5 - 1.3775934(x - 1.5) - 23.0539419(x - 1.5)^2 + 23.6182573(x - 1.5)^3, \\
S_3(x) &= -1.0 - 6.7178423(x - 2) + 12.3734440(x - 2)^2 - 5.1556017(x - 2)^3, \\
S_4(x) &= -0.5 + 2.5622407(x - 3) - 3.0933610(x - 3)^2 + 1.0311203(x - 3)^3.
\end{aligned}$$

A kapott spline függvény és az adatok grafikonja a 6.3 ábrán látható. $\square$

![6.3. ábra. Spline interpoláció](figure_6_3.png)

*6.3. ábra. Spline interpoláció*

A (6.14) feltétel helyett számos más, $S$ végpontjaira vonatkozó feltételt is kiköthetünk. Itt most csak az

$$S'(x_0) = y_0' \qquad \text{és} \qquad S'(x_n) = y_n' \tag{6.23}$$

feltételt vizsgáljuk, ahol $y_0'$ és $y_n'$ adott számok. Ez azt jelenti, hogy ismerjük az $S$ függvény érintőjét a grafikon végpontjaiban. A (6.23) feltételt teljesítő spline függvényt *teljes spline* függvénynek nevezzük. Ebben az esetben is ugyanúgy kapjuk a (6.22) egyenleteket. Még két egyenletet kell felírni, hogy az egyenletrendszer jól meghatározott legyen. Használva a $b_0 = S'(x_0) = y_0'$ összefüggést, a (6.20) egyenletből következik

$$y_0' \Delta x_0 + c_0(\Delta x_0)^2 + \frac{c_1 - c_0}{3}(\Delta x_0)^2 = \Delta y_0,$$

azaz

$$2c_0 \Delta x_0 + c_1 \Delta x_0 = 3\frac{\Delta y_0}{\Delta x_0} - 3y_0'. \tag{6.24}$$

$b_{n-1}$-et kifejezve a (6.20) egyenletből és behelyettesítve a (6.21) egyenletbe, és a $b_n = y_n'$ összefüggést használva kapjuk

$$\frac{\Delta y_{n-1}}{\Delta x_{n-1}} - \frac{2c_{n-1} + c_n}{3}\Delta x_{n-1} + \Delta x_{n-1}(c_{n-1} + c_n) = y_n',$$

ill. átrendezve

$$c_{n-1}\Delta x_{n-1} + 2c_n \Delta x_{n-1} = 3y_n' - 3\frac{\Delta y_{n-1}}{\Delta x_{n-1}}. \tag{6.25}$$

Ha a természetes spline interpolációnál kapott $\mathbf{Ax} = \mathbf{b}$ egyenlet első egyenletét kicseréljük a (6.24) egyenletre, és az utolsó egyenletet a (6.25) egyenletre, akkor könnyen látható, hogy az együtthatómátrix továbbra is diagonálisan domináns marad, azaz a módosított egyenletrendszernek is van egyértelmű megoldása. Így a (6.23) feltétellel kiegészített interpolációs problémának van teljes spline függvény megoldása, és a megoldás egyértelmű.

A harmadrendű természetes spline interpolációs függvények a következő minimum tulajdonsággal rendelkeznek, ami bizonyos értelemben azt jelenti, hogy spline függvénnyel lehet a legsimábban interpolálni adott pontokat.

**6.24. tétel.** *Legyen $a = x_0 < x_1 < \ldots < x_n = b$ és $y_0, y_1, \ldots, y_n$ osztópontoknak és hozzátartozó függvényértékeknek egy véges sorozata, és legyen $S$ az ezeket interpoláló természetes kubikus spline függvény. Ekkor*

$$\int_a^b (S''(x))^2 \, dx \leq \int_a^b (f''(x))^2 \, dx \tag{6.26}$$

*minden olyan $f \in C^2(a,b)$-re, amely szintén interpolálja az adatokat, azaz $f(x_i) = y_i$ minden $i = 0, 1, \ldots, n$-re.*

**Bizonyítás.** Vezessük be a $g(x) \equiv f(x) - S(x)$ függvényt. Ekkor $f''(x) = S''(x) + g''(x)$, és így

$$\int_a^b (f''(x))^2 \, dx = \int_a^b (S''(x))^2 \, dx + 2\int_a^b S''(x)g''(x) \, dx + \int_a^b (g''(x))^2 \, dx.$$

Mivel $\int_a^b (g''(x))^2 \, dx \geq 0$, így a tétel állítása következik ebből az egyenlőségből, ha belátjuk, hogy $\int_a^b S''(x)g''(x) \, dx = 0$. Az integrált felbontva és parciálisan integrálva kapjuk

$$\begin{aligned}
\int_a^b S''(x)g''(x) \, dx &= \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S''(x)g''(x) \, dx \\
&= \sum_{i=1}^{n} [S''(x)g'(x)]_{x_{i-1}}^{x_i} - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx \\
&= S''(b)g'(b) - S''(a)g'(a) - \sum_{i=1}^{n} \int_{x_{i-1}}^{x_i} S'''(x)g'(x) \, dx.
\end{aligned}$$

$S$ természetes spline függvény, így $S''(a) = S''(b) = 0$. Mivel $S$ harmadfokú polinom minden $[x_{i-1}, x_i]$ intervallumon, ezért ott $S'''$ konstans függvény, így az integrál elé kivihető. Viszont $\int_{x_{i-1}}^{x_i} g'(x) \, dx = g(x_i) - g(x_{i-1}) = 0$, mivel $g(x_i) = 0$ minden $i = 0, 1, \ldots, n$-re. Ezzel a tételt beláttuk. $\square$

A következő tétel a teljes spline interpoláció hibáját vizsgálja. Bizonyítás nélkül közöljük az eredményt.

**6.25. tétel.** *Legyen $f \in C^4(a,b)$, $a = x_0 < x_1 < \ldots < x_n = b$ osztópontok, $y_i = f(x_i)$, $i = 0, 1, \ldots, n$ függvényértékek, valamint $y_0' = f'(a)$ és $y_n' = f'(b)$ derivált értékek, és legyen $S$ az ezekhez tartozó teljes spline függvény. Ekkor $x \in [a,b]$-re*

$$\begin{aligned}
|f(x) - S(x)| &\leq \frac{5}{384}M_4 h^4, \\
|f'(x) - S'(x)| &\leq \left( \frac{\sqrt{3}}{216} + \frac{1}{24} \right) M_4 h^3, \\
|f''(x) - S''(x)| &\leq \left( \frac{1}{12} + \frac{h}{3k} \right) M_4 h^2,
\end{aligned}$$

*ahol $M_4 \equiv \max\{|f^{(4)}(x)|:\ x \in [a,b]\}$, $h \equiv \max\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$, $k \equiv \min\{x_{i+1} - x_i:\ i = 0, 1, \ldots, n - 1\}$.*

Megjegyezzük, hogy a természetes spline interpoláció hibája ehhez hasonló módon becsülhető.

### Feladatok

1. Adja meg az $(x_i, y_i)$, $i = 0, 1, \ldots, n$ adatokat interpoláló lineáris spline függvény képletét az $[x_i, x_{i+1}]$ intervallumon!

2. Adott egy $f \colon [a,b] \to \mathbb{R}$ folytonos függvény, és legyen $S_h$ az $[a,b]$ intervallum ekvidisztáns, $h$ lépésközű osztópontjaihoz tartozó $f$-et interpoláló lineáris spline függvény.

   (a) Mutassa meg, hogy $\max\{|f(x) - S_h(x)|:\ x \in [a,b]\} \to 0$, ha $h \to 0$.

   (b) Legyen $f \in C^1[a,b]$. Mutassa meg, hogy
   $$|f(x) - S_h(x)| \leq M_1 h, \qquad x \in [a,b],$$
   ahol $M_1 \equiv \max\{|f'(x)|:\ x \in [a,b]\}$.

3. Számítsa ki és ábrázolja a 6.1 szakasz 1. feladatában szereplő adatokhoz tartozó természetes kubikus spline interpolációs függvényeket!

4. Mutassa meg, hogy kvadratikus spline-interpolációnál az
   $$S'(x_0) = f'(x_0) \qquad \text{vagy} \qquad S'(x_n) = f'(x_n)$$
   feltételek egyike teljesülése egyértelműen meghatározza a spline interpolációs függvényt!

5. Mutassa meg, hogy ha $S$ adott $a = x_0 < x_1 < \ldots < x_n = b$ osztópontokhoz és $y_0, y_1, \ldots, y_n$ függvényértékekhez, valamint $y_0'$ és $y_n'$ derivált értékekhez tartozó teljes spline függvény, akkor $S$ teljesíti a (6.26) egyenlőtlenséget minden olyan $f \in C^2(a,b)$ függvényre, amelyre $f(x_i) = y_i$ minden $i$-re, $f'(a) = y_0$ és $f'(b) = y_n'$!
