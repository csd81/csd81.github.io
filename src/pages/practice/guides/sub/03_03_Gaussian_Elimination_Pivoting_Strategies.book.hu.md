## 3.3. Gauss-elimináció, főelemkiválasztási stratégiák

**3.22. példa.** Tekintsük az

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
2x_1 & - & x_2 & + & 2x_3 & + & 4x_4 & = & -8 \\
-x_1 & + & 2x_2 & + & 3x_3 & - & 4x_4 & = & 27 \\
-2x_1 & + & x_2 & + & 4x_3 & - & 2x_4 & = & 28
\end{array} \tag{3.3}$$

egyenletrendszert. Az első egyenlet segítségével a második, harmadik és negyedik egyenletből az $x_1$ változó kiejthető a következő módon: az első egyenlet 2-szeresét, $-1$-szeresét, ill. $-2$-szeresét kivonjuk a második, harmadik, ill. a negyedik egyenletből:

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\
& & & & x_3 & - & 6x_4 & = & 16 \\
& - & 3x_2 & & & - & 6x_4 & = & 6
\end{array} \tag{3.4}$$

Ekkor az eredetivel ekvivalens egyenletrendszert kapunk. Ezt mátrixok segítségével a következőképpen írhatjuk le röviden: A (3.3) egyenletrendszer együtthatóit egy $4 \times 4$-es mátrixban leírjuk, majd azt kibővítjük egy ötödik oszloppal, ahol az egyenletrendszer jobb oldalát írjuk le. Ekkor kapjuk az

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \tag{3.5}$$

ún. *kibővített mátrixot*. A (3.4) egyenletrendszert leíró kibővített mátrixot tehát úgy kapjuk, hogy a (3.5) mátrix első sorát megszorozzuk 2, $-1$ és $-2$-vel, és a kapott sorokat kivonjuk rendre a második, harmadik és a negyedik sorból:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix}. \tag{3.6}$$

Az $x_2$ változó hiányzik a harmadik sorból, és a második egyenlet segítségével kiküszöböljük a negyedik sorból $x_2$-t, azaz a (3.6) mátrixban a második oszlopban a főátló alatti elemeket „kinullázzuk" a második sor segítségével: a második sor $-1$-szeresét kivonjuk a negyedik sorból:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix}. \tag{3.7}$$

Végül beszorozzuk a harmadik sort 6-tal, és kivonjuk a negyedikből:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 0 & 38 & -76 \end{pmatrix}. \tag{3.8}$$

Ez az

$$\begin{array}{rcrcrcrcr}
x_1 & - & 2x_2 & - & 2x_3 & - & 2x_4 & = & -11 \\
& & 3x_2 & + & 6x_3 & + & 8x_4 & = & 14 \\
& & & & x_3 & - & 6x_4 & = & 16 \\
& & & & & & 38x_4 & = & -76
\end{array}$$

trianguláris egyenletrendszerrel ekvivalens. Ezt megoldva a visszahelyettesítés módszerével kapjuk, hogy a megoldás $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$. A kibővített mátrixokkal a számolást röviden a következő alakban szoktuk leírni:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 0 & 38 & -76 \end{pmatrix}. \qquad\square$$

Az előző példa módszerét alkalmazva az

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
a_{21}x_1 & + & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
\vdots & & \vdots & & & & \vdots & & \vdots \\
a_{n1}x_1 & + & a_{n2}x_2 & + & \ldots & + & a_{nn}x_n & = & b_n
\end{array} \tag{3.9}$$

általános $n$-dimenziós lineáris egyenletrendszerre kapjuk a *Gauss-elimináció* módszerét: Az együtthatókat és az egyenlet bal oldalát az ún. *kibővített mátrixban* tároljuk:

$$\tilde{\mathbf{A}}^{(0)} = (\mathbf{A}, \mathbf{b}) = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ a_{21} & a_{22} & \ldots & a_{2n} & a_{2,n+1} \\ \vdots & \vdots & & \vdots & \vdots \\ a_{n1} & a_{n2} & \ldots & a_{nn} & a_{n,n+1} \end{pmatrix},$$

ahol $a_{i,n+1} := b_i$, $(i = 1, \ldots, n)$. Az $\tilde{\mathbf{A}}^{(0)}$ mátrixból képezzük az egymással ekvivalens egyenleteket leíró $\tilde{\mathbf{A}}^{(1)}, \tilde{\mathbf{A}}^{(2)}, \ldots, \tilde{\mathbf{A}}^{(n-1)}$ mátrixokat a következő módon:

$$\tilde{\mathbf{A}}^{(1)} = \begin{pmatrix} a_{11} & a_{12} & \ldots & a_{1n} & a_{1,n+1} \\ 0 & a_{22}^{(1)} & \ldots & a_{2n}^{(1)} & a_{2,n+1}^{(1)} \\ \vdots & \vdots & & \vdots & \vdots \\ 0 & a_{n2}^{(1)} & \ldots & a_{nn}^{(1)} & a_{n,n+1}^{(1)} \end{pmatrix},$$

ahol $a_{ij}^{(1)} = a_{ij} - l_{i1}a_{1j}$, $l_{i1} = \dfrac{a_{i1}}{a_{11}}$, $i = 2, \ldots, n$, $j = 2, \ldots, n+1$, (feltéve, hogy $a_{11} \neq 0$). Ha már $\tilde{\mathbf{A}}^{(1)}, \ldots, \tilde{\mathbf{A}}^{(k-1)}$ definiált, ahol $k \leq n-1$, akkor legyen

$$\tilde{\mathbf{A}}^{(k)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k} & a_{1,k+1} & \cdots & a_{1,n} & a_{1,n+1} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2,n}^{(1)} & a_{2,n+1}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k,k}^{(k-1)} & a_{k,k+1}^{(k-1)} & \cdots & a_{k,n}^{(k-1)} & a_{k,n+1}^{(k-1)} \\
0 & 0 & \cdots & 0 & a_{k+1,k+1}^{(k)} & \cdots & a_{k+1,n}^{(k)} & a_{k+1,n+1}^{(k)} \\
\vdots & \vdots & & \vdots & \vdots & & \vdots & \vdots \\
0 & 0 & \cdots & 0 & a_{n,k+1}^{(k)} & \cdots & a_{n,n}^{(k)} & a_{n,n+1}^{(k)}
\end{pmatrix},$$

ahol $a_{ij}^{(k)} = a_{ij}^{(k-1)} - l_{ik}a_{kj}^{(k-1)}$, $l_{ik} = \dfrac{a_{ik}^{(k-1)}}{a_{kk}^{(k-1)}}$, $i = k+1, \ldots, n$, $j = k+1, \ldots, n+1$. Ezeket az ún. *eliminációs lépéseket* $k = 1, \ldots, n-1$-re hajtjuk végre. Ezután az $\tilde{\mathbf{A}}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszert a visszahelyettesítés módszerével megoldjuk. A Gauss-elimináció végrehajtása után az együtthatómátrix főátlójában szereplő $a_{11}, a_{22}^{(1)}, \ldots, a_{nn}^{(n-1)}$ számokat *főelemeknek* nevezzük. Nyilvánvalóan, a Gauss-elimináció akkor és csak akkor hajtható végre, ha az összes főelem nem nulla.

Ha a Gauss-elimináció lépéseit csak az együtthatómátrixon végezzük, akkor az iterációs lépésekben kapott mátrixokat $\mathbf{A}^{(0)} := \mathbf{A}, \mathbf{A}^{(1)}, \ldots, \mathbf{A}^{(n-1)}$-gyel jelöljük.

---

**3.23. algoritmus. Gauss-elimináció**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$ - kibővített együtthatómátrix
OUTPUT: $x_1, \ldots, x_n$

*(elimináció:)*
**for** $k = 1, \ldots, n-1$ **do**
$\qquad$**for** $i = k+1, \ldots, n$ **do**
$\qquad\qquad l_{ik} \leftarrow a_{ik}/a_{kk}$
$\qquad\qquad$**for** $j = k+1, \ldots, n+1$ **do**
$\qquad\qquad\qquad a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$
$\qquad\qquad$**end do**
$\qquad$**end do**
**end do**
*(visszahelyettesítés:)*
$x_n \leftarrow a_{n,n+1}/a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(a_{i,n+1} - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A fenti algoritmust úgy fogalmaztuk meg, hogy minden egyes eliminációs lépésben az új együtthatómátrix elemeivel felülírjuk az előző lépés együtthatómátrixát. Megjegyezzük, hogy a 3.23. algoritmus a „kinullázott" elemeket se nem számítja, se nem tárolja. Azaz az algoritmus végén a főátló alatti elemek tartalma nem használható, ott előző lépésekből megmaradt tartalom van csak. Ha szükséges, ezeket az elemeket nullázzuk ki direkt módon.

A Gauss-elimináció műveletigénye:

| | osztás/szorzás | összeadás/kivonás |
|---|---|---|
| 1. lépés: | $(n-1)(n+1)$ | $(n-1)n$ |
| 2. lépés: | $(n-2)n$ | $(n-2)(n-1)$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $n-1$-edik lépés: | $1 \cdot 3$ | $1 \cdot 2$ |
| összesen: | $\sum_{i=1}^{n-1} i(i+2)$ | $\sum_{i=1}^{n-1} i(i+1)$ |

Az $1^2 + 2^2 + \cdots + n^2 = \frac{1}{6}n(n+1)(2n+1)$ azonosságot alkalmazva könnyen kiszámítható, hogy összesen $n^3/3 + n^2/2 - 5n/6$ szorzás ill. osztás, valamint $(n^3 - n)/3$ összeadás ill. kivonás szükséges az együtthatómátrix trianguláris alakra hozásához. A visszahelyettesítéssel együtt pedig összesen $n^3/3 + n^2/2 - 5n/6 + n^2/2 + n/2 = n^3/3 + n^2 - n/3 = n^3/3 + \mathcal{O}(n^2)$ osztás ill. szorzás, valamint $(n^3 - n)/3 + n^2/2 - n/2 = n^3/3 + n^2/2 - 5n/6 = n^3/3 + \mathcal{O}(n^2)$ összeadás ill. kivonás szükséges a Gauss-elimináció végrehajtásához. Röviden azt mondjuk, hogy $n^3/3$ nagyságrendű műveletigénye van a módszernek.

**3.24. példa.** Oldjuk meg az

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & & & - & 3x_4 & = & 8 \\
2x_1 & - & x_2 & + & x_3 & + & 5x_4 & = & 2 \\
-3x_1 & + & x_2 & + & x_3 & - & 2x_4 & = & -5 \\
2x_1 & + & 4x_2 & & & - & x_4 & = & 21
\end{array}$$

egyenletrendszert Gauss-eliminációval! Egy Gauss-eliminációs lépést elvégezve kapjuk

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix}.$$

A második sor második oszlopában levő elem 0, ezért nem tudjuk tovább folytatatni a 3.23. algoritmust. Könnyen látható, hogy az egyenletrendszernek viszont létezik egyértelmű megoldása: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$. Ha felcseréljük az utolsó lépésben kapott kibővített mátrix második és harmadik sorát, akkor ezzel természetesen a hozzá tartozó egyenletrendszer nem változik, viszont folytathatók az eliminációs lépések:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 5 & 0 & 2 & 13 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 10 & -63 & 83 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 0 & -1/2 & 1 & -13/2 & 7 \\ 0 & 0 & 1 & 8 & -6 \\ 0 & 0 & 0 & -143 & 143 \end{pmatrix},$$

amelyből következik az egyenletrendszer megoldása. $\qquad\square$

**3.25. példa.** Oldjuk meg a

$$\begin{array}{rcrcr}
0.0002x_1 & - & 30.5x_2 & = & -60.99 \\
5.060x_1 & - & 1.05x_2 & = & 250.9
\end{array}$$

egyenletrendszert a Gauss-eliminációval 4-jegyű aritmetikát használva a számolásokhoz. A 3.23. algoritmust követve, először kiszámoljuk az $l_{21} = 5.060/0.0002 = 25300$ szorzótényezőt (4 értékes jegyre kerekítve), ezzel beszorozzuk az első egyenletet, és a kapott sort kivonjuk a másodikból:

$$\begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 5.06 & -1.05 & 250.9 \end{pmatrix} \sim \begin{pmatrix} 0.0002 & -30.5 & -60.99 \\ 0 & 771700 & 1543000 \end{pmatrix}.$$

(Megjegyezzük, hogy a 3.23. algoritmussal a 2. sorban levő 0-t nem numerikusan számoljuk.) Ezt megoldva kapjuk az $\tilde{x}_1 = -100.0$ és $\tilde{x}_2 = 1.999$ megoldást. Könnyen ellenőrizhetjük, hogy az egyenletrendszer pontos megoldása $x_1 = 50$ és $x_2 = 2$. A számolt megoldásokban tehát 300% ill. 0.05%-os relatív hiba van! Különösen hatalmas a hiba az első változó értékében.

Végezzük most el ugyanezt a számolást az egyenletrendszeren úgy, hogy először felcseréljük a két egyenletet. Kapjuk:

$$\begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0.0002 & -30.5 & -60.99 \end{pmatrix} \sim \begin{pmatrix} 5.06 & -1.05 & 250.9 \\ 0 & -30.5 & -61.0 \end{pmatrix}.$$

amiből következik, hogy $x_1 = 50.00$ és $x_2 = 2.000$, amelyek pontosan megegyeznek a tényleges megoldás értékekkel!

Mi a különbség a két számolásban? Az első esetben $l_{21}$ kiszámolásakor egy kis számmal (0.0002) kellett osztani, ami a kerekítési hiba jelentős növekedéséhez vezetett. A második esetben viszont 5.06-gyel osztottunk $l_{21}$ kiszámításakor, és a végső eredményben nem kaptunk kerekítési hibát. $\qquad\square$


### Feladatok

1. Oldja meg a következő egyenletrendszereket Gauss-eliminációval:

   (i) főelemkiválasztás nélkül,

   (ii) részleges főelemkiválasztással,

   (iii) teljes főelemkiválasztással,

   (iv) részleges főelemkiválasztással és implicit sorkiegyenlítéssel:

   (a)
   $$\begin{array}{rcrcrcr}
   2x_1 & + & 2x_2 & - & 2x_3 & = & -4 \\
   -x_1 & + & 3x_2 & & & = & -11 \\
   4x_1 & + & 2x_2 & - & 3x_3 & = & -1
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcrcr}
   -x_1 & - & 3x_2 & & & + & 2x_4 & = & 10 \\
   -2x_1 & + & 3x_2 & & & + & x_4 & = & 8 \\
   4x_1 & + & x_2 & - & x_3 & - & 3x_4 & = & -21 \\
   2x_1 & + & x_2 & - & x_3 & + & 3x_4 & = & 7
   \end{array}$$

2. Használjon 4-jegyű aritmetikát a számolásokhoz, és az előző feladat kérdését alkalmazza a következő egyenletekre:

   (a)
   $$\begin{array}{rcrcrcr}
   1.03x_1 & - & 1.1x_2 & + & 8x_3 & = & -9.06 \\
   -4.1x_1 & + & 10.1x_2 & - & 6x_3 & = & 106.2 \\
   2.11x_1 & - & 4.2x_2 & + & 12x_3 & = & -40.22
   \end{array}$$
   (pontos megoldás: $(-2, 10, 0.5)$),

   (b)
   $$\begin{array}{rcrcrcr}
   x_1 & + & \frac{1}{2}x_2 & + & \frac{1}{3}x_3 & = & 20 \\
   \frac{1}{2}x_1 & + & \frac{1}{3}x_2 & + & \frac{1}{4}x_3 & = & 14 \\
   \frac{1}{3}x_1 & + & \frac{1}{4}x_2 & + & \frac{1}{5}x_3 & = & 11
   \end{array}$$
   (pontos megoldás: $(6, -12, 60)$)

3. Lássa be a 3.30. tételt!

4. Lássa be a 3.33. tételt (a stabilitásra vonatkozó állítás nélkül)!
