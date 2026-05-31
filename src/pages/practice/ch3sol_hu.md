# 3. fejezet

# Lineáris egyenletrendszerek

Ebben a fejezetben lineáris egyenletrendszerek direkt módszerekkel történő numerikus megoldásait és vele kapcsolatos lineáris algebrai feladatokat vizsgálunk. Megismerjük a Gauss- és Gauss–Jordan-eliminációt és variánsait, valamint azok alkalmazását a mátrix inverzió feladatára.

## 3.1. Lineáris algebrai előismeretek

Ebben a szakaszban néhány, a későbbiekben használt lineáris algebrai jelölést, fogalmat, állítást elevenítünk fel. A továbbiakban, ha másképp nem mondjuk, $\mathbf{A} = (a_{ij})$ egy $n \times n$-es mátrixot, $\mathbf{x}$ pedig egy $n$-dimenziós oszlopvektort jelöl. Az $\mathbf{A}$ mátrix determinánsát $\det(\mathbf{A})$-val, az $n \times n$-es egységmátrixot $\mathbf{I}$-vel jelöljük. Az $\mathbf{A}$ mátrix ill. az $\mathbf{x}$ oszlopvektor transzponáltját $\mathbf{A}^T$ ill. $\mathbf{x}^T$ jelöli. Azt a diagonális mátrixot, amelynek főátlójában rendre $a_1, a_2, \ldots, a_n$ áll, $\mathrm{diag}(a_1, a_2, \ldots, a_n)$ jelöli.

A determinánsok néhány ismert tulajdonságát foglaltuk össze a következő tételben:

**3.1. tétel.** *Legyen $\mathbf{A}, \mathbf{B}$ $n \times n$-es mátrixok. Ekkor*

1. $\det(\mathbf{A}) = 0$, *ha $\mathbf{A}$ egy sora (vagy oszlopa) azonosan nulla;*

2. $\det(\mathbf{A}) = 0$, *ha $\mathbf{A}$ két sora (oszlopa) azonos;*

3. $\det(\mathbf{A}\mathbf{B}) = \det(\mathbf{A})\det(\mathbf{B})$;

4. $\det(\mathbf{A}^{-1}) = 1/\det(\mathbf{A})$;

5. $\det(\mathbf{A}^T) = \det(\mathbf{A})$;

6. *Ha $\mathbf{B}$-t úgy kapjuk az $\mathbf{A}$ mártixból, hogy annak valamely sorát (oszlopát) megszorozzuk egy $c$ konstanssal, akkor $\det(\mathbf{B}) = c\det(\mathbf{A})$.*

7. *Ha $\mathbf{B}$-t úgy kapjuk az $\mathbf{A}$ mártixból, hogy annak két sorát (oszlopát) felcseréljük, akkor $\det(\mathbf{B}) = -\det(\mathbf{A})$.*

8. *Ha $\mathbf{B}$-t úgy kapjuk az $\mathbf{A}$ mártixból, hogy annak egyik sorához (oszlopához) egy másik sor (oszlop) $c$-szeresét ($c \in \mathbb{R}$ tetszőleges) hozzáadjuk, akkor $\det(\mathbf{B}) = \det(\mathbf{A})$.*

9. *Jelölje $\mathbf{A}_{ij}$ azt az $(n-1) \times (n-1)$-es mátrixot, amelyet az $\mathbf{A}$ mátrixból annak $i$-edik sora és $j$-edik oszlopa elhagyásával kapunk. Ekkor a determináns $i$-edik sora szerinti sorfejtése*

$$\det(\mathbf{A}) = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} \det(\mathbf{A}_{ij}),$$

*a $j$-edik oszlop szerinti sorfejtése pedig*

$$\det(\mathbf{A}) = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} \det(\mathbf{A}_{ij}).$$

Az $\mathbf{A}^{-1}$ $n \times n$-es mátrixot az $\mathbf{A}$ $n \times n$-es mátrix *inverzének* nevezzük, ha $\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$. Egy négyzetes mátrixot *invertálhatónak* nevezünk, ha létezik az inverze. Egy $\mathbf{A}$ négyzetes mátrixot *szingulárisnak* nevezünk, ha nem létezik az inverze. Az invertálható mátrixokat szokás *nemszinguláris* vagy *reguláris* mátrixoknak is hívni.

**3.2. tétel.** *Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$, $\mathbf{b} \in \mathbb{R}^n$. A következő állítások ekvivalensek:*

1. $\det(\mathbf{A}) \neq 0$,

2. *az $\mathbf{A}$ mátrix invertálható,*

3. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletnek létezik egyértelmű megoldása minden $\mathbf{b}$ vektorra.*

**3.3. tétel.** *Az $\mathbf{A}\mathbf{x} = \mathbf{0}$ egyenletnek akkor és csak akkor van nemtriviális (azaz nemnulla) megoldása, ha $\mathbf{A}$ szinguláris, azaz $\det(\mathbf{A}) = 0$.*

**3.4. tétel.** *Ha $\mathbf{A}, \mathbf{B} \in \mathbb{R}^{n \times n}$ invertálható, akkor $\mathbf{A}\mathbf{B}$ is invertálható, és $(\mathbf{A}\mathbf{B})^{-1} = \mathbf{B}^{-1}\mathbf{A}^{-1}$.*

Az $\mathbf{A}$ négyzetes mátrixot *felülről (alulról) trianguláris*nak vagy más szóval *felső (alsó) háromszög mátrix*nak nevezünk, ha $a_{ij} = 0$ minden $i > j$-re ($i < j$-re), azaz a mátrix főátlója alatti (feletti) minden elem 0.

**3.5. tétel.** *Egy $\mathbf{A}$ trianguláris mátrix deteminánsa $\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$.*

**3.6. tétel.** *Felülről (alulról) trianguláris mátrixok szorzata felülről (alulról) trianguláris mátrix. Felülről (alulról) trianguláris invertálható mátrix inverze felülről (alulról) trianguláris mátrix.*

Egy olyan $\mathbf{P}$ négyzetes mátrixot, amelyet az egységmátrixból sorok (vagy oszlopok) felcserélésével (permutációjával) kapunk, *permutációs mátrix*nak mátrixnak nevezünk. A következő tétel szerint mátrixok sorainak (oszlopainak) felcserélése egy megfelelő permutációs mátrixszal való szorzással ekvivalens.

**3.7. tétel.** *Legyen $k_1, \ldots, k_n$ az $1, \ldots, n$ számok egy permutációja (átrendezése), és legyen $\mathbf{P} \in \mathbb{R}^{n \times n}$ az a permutációs mátrix, amelyet az egységmátrixból úgy kapunk, hogy annak első sorát a $k_1$-edik sorba, $\ldots$, az $n$-edik sorát pedig a $k_n$-edik sorba helyezzük el. Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$ tetszőleges. Ekkor a $\mathbf{P}\mathbf{A}$ mátrix ($\mathbf{A}\mathbf{P}$ mátrix) megkapható az $\mathbf{A}$ mátrixból úgy, hogy annak első sorát (oszlopát) a $k_1$-edik sorba (oszlopba), $\ldots$, az $n$-edik sorát (oszlopát) pedig a $k_n$-edik sorba (oszlopba) helyezzük el.*

Az $\mathbf{A}$ négyzetes mátrixot *soronként diagonálisan dominánsnak* vagy röviden *diagonálisan dominánsnak* nevezzük, ha

$$|a_{ii}| > \sum_{\substack{j=1 \\ j \neq i}}^{n} |a_{ij}|$$

teljesül minden $i = 1, \ldots, n$-re. Ehhez hasonlóan az $\mathbf{A}$ mátrixot *oszloponként diagonálisan dominánsnak* nevezzük, ha $\mathbf{A}^T$ diagonálisan domináns, azaz

$$|a_{jj}| > \sum_{\substack{i=1 \\ i \neq j}}^{n} |a_{ij}|$$

teljesül minden $j = 1, \ldots, n$-re.

**3.8. tétel.** *Ha $\mathbf{A}$ diagonálisan domináns, akkor $\mathbf{A}$ invertálható.*

**Bizonyítás.** Tegyük fel, hogy $\mathbf{A}$ nem invertálható. Ekkor az $\mathbf{A}\mathbf{x} = \mathbf{0}$ egyenletnek létezik $\mathbf{x} \neq \mathbf{0}$ nemtriviális megoldása. Legyen $k$ olyan, hogy $|x_k| = \max\{|x_i| : i = 1, \ldots, n\}$. Ekkor $x_k \neq 0$. Mivel $\sum_{j=1}^{n} a_{ij}x_j = 0$ minden $i = 1, \ldots, n$-re, kapjuk, hogy $a_{kk}x_k = -\sum_{j=1, j\neq k}^{n} a_{kj}x_j$. Ekkor a háromszög-egyenlőtlenség alapján $|a_{kk}x_k| \leq \sum_{j=1, j\neq k}^{n} |a_{kj}x_j|$, és így

$$|a_{kk}| \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}| \frac{|x_j|}{|x_k|} \leq \sum_{\substack{j=1 \\ j \neq k}}^{n} |a_{kj}|,$$

ami ellentmondás. $\qquad\square$

Egy $\mathbf{A}$ mátrixot *pozitív definitnek* (*negatív definitnek*) nevezünk, ha $\mathbf{A}$ szimmetrikus és $\mathbf{x}^T\mathbf{A}\mathbf{x} > 0$ (ill. $\mathbf{x}^T\mathbf{A}\mathbf{x} < 0$) minden $\mathbf{x} \neq \mathbf{0}$-ra. $\mathbf{A}$-t *pozitív szemidefinitnek* (*negatív szemidefinitnek*) nevezzük, ha $\mathbf{A}$ szimmetrikus és $\mathbf{x}^T\mathbf{A}\mathbf{x} \geq 0$ (ill. $\mathbf{x}^T\mathbf{A}\mathbf{x} \leq 0$) minden $\mathbf{x}$-re.

**3.9. tétel.** *Ha $\mathbf{A}$ pozitív definit, akkor*

1. $\mathbf{A}$ *invertálható,*

2. $a_{ii} > 0$ *minden $i = 1, \ldots, n$-re.*

**3.10. tétel.** *Az $\mathbf{A}$ négyzetes szimmetrikus mátrix akkor és csak akkor pozitív definit, ha az összes bal felső főminorai pozitívak, azaz*

$$\det\begin{pmatrix} a_{11} & \cdots & a_{1i} \\ \vdots & & \vdots \\ a_{i1} & \cdots & a_{ii} \end{pmatrix} > 0, \qquad i = 1, 2, \ldots, n.$$

Az $\mathbf{A}$ négyzetes mátrixot *ortogonálisnak* nevezzük, ha $\mathbf{A}\mathbf{A}^T = \mathbf{A}^T\mathbf{A} = \mathbf{I}$, azaz $\mathbf{A}$ invertálható és $\mathbf{A}^{-1} = \mathbf{A}^T$.

**3.11. tétel.** *Ortogonális mátrixok szorzata ortogonális.*

A $\lambda \in \mathbb{C}$ komplex számot az $\mathbf{A}$ mátrix *sajátértékének* nevezzük, ha az

$$\mathbf{A}\mathbf{x} = \lambda\mathbf{x}$$

egyenletnek létezik nemtriviális ($\mathbf{x} \neq 0$) megoldása. Az egyenlet egy $\mathbf{x} \neq 0$ megoldását az $\mathbf{A}$ mátrix $\lambda$ sajátértékéhez tartozó *sajátvektorának* nevezzük.

**3.12. tétel.** *Az $\mathbf{A}$ $n \times n$-es mátrixnak $n$ db sajátértéke van, amelyek a*

$$\det(\mathbf{A} - \lambda\mathbf{I}) = 0$$

*$n$-edfokú algebrai egyenlet, az ún. karakterisztikus egyenlet gyökei.*

**3.13. tétel.** *Legyen $\lambda_1, \lambda_2, \ldots, \lambda_n$ az $\mathbf{A}$ mátrix sajátértékei. Ekkor*

1. $\det(\mathbf{A}) = \lambda_1\lambda_2\cdots\lambda_n$;

2. $\mathbf{A}$ *akkor és csak akkor invertálható, ha $\lambda_i \neq 0$ minden $i = 1, 2, \ldots, n$-re;*

3. *ha $\mathbf{A}$ invertálható, akkor $\mathbf{A}^{-1}$ sajátértékei az $1/\lambda_1, 1/\lambda_2, \ldots, 1/\lambda_n$ számok;*

4. *az $\mathbf{A}^k$ mátrix sajátértékei a $\lambda_1^k, \lambda_2^k, \ldots, \lambda_n^k$ számok.*

**3.14. tétel.** *Egy trianguláris $\mathbf{A}$ mátrix sajátértékei a főátlóban álló $a_{11}, a_{22}, \ldots, a_{nn}$ számok.*

Legyen $\mathbf{A}$ és $\mathbf{B}$ két azonos dimenziójú négyzetes mátrix. Azt mondjuk, hogy $\mathbf{A}$ és $\mathbf{B}$ *hasonló*, ha létezik olyan $\mathbf{P}$ invertálható mátrix, hogy $\mathbf{A} = \mathbf{P}^{-1}\mathbf{B}\mathbf{P}$. Megjegyezzük, hogy ekkor nyilván $\mathbf{B} = \mathbf{P}\mathbf{A}\mathbf{P}^{-1}$, azaz a hasonlóság szimmetrikus reláció. A $\mathbf{P}^{-1}\mathbf{A}\mathbf{P}$ mátrixhoz tartozó lineáris transzformációt *hasonlósági transzformációnak* nevezzük.

**3.15. tétel.** *Hasonló mátrixok sajátértékei megegyeznek.*

**Bizonyítás.** Legyen $\mathbf{A} = \mathbf{P}^{-1}\mathbf{B}\mathbf{P}$. Ekkor a determinánsok tulajdonságait felhasználva $\mathbf{A}$ karakterisztikus polinomjára

$$\det(\mathbf{A} - \lambda\mathbf{I}) = \det(\mathbf{P}^{-1}\mathbf{B}\mathbf{P} - \lambda\mathbf{I}) = \det(\mathbf{P}^{-1})\det(\mathbf{B} - \lambda\mathbf{I})\det(\mathbf{P}) = \det(\mathbf{B} - \lambda\mathbf{I})$$

teljesül, amiből következik a tétel. $\qquad\square$

A $\rho(\mathbf{A}) := \max\{|\lambda| : \lambda \text{ sajátértéke } \mathbf{A}\text{-nak}\}$ számot az $\mathbf{A}$ mátrix *spektrálsugarának* nevezzük.

**3.16. tétel.** *Legyen $k$ pozitív egész, és $\|\cdot\|$ egy tetszőleges mátrixnorma. Ekkor*

1. $\rho(\mathbf{A}^k) = (\rho(\mathbf{A}))^k$,

2. $\rho(\mathbf{A}) \leq \|\mathbf{A}\|$.

**3.17. tétel.** *Minden $\mathbf{A}$ mátrixhoz és $\varepsilon > 0$ számhoz létezik olyan $\|\cdot\|$ mátrixnorma, amelyre $\|\mathbf{A}\| \leq \rho(\mathbf{A}) + \varepsilon$.*

**3.18. tétel.** *Egy tetszőleges négyzetes $\mathbf{A}$ mátrixra $\|\mathbf{A}\|_2 = \sqrt{\rho(\mathbf{A}^T\mathbf{A})}$. Ha $\mathbf{A}$ szimmetrikus, akkor $\|\mathbf{A}\|_2 = \rho(\mathbf{A})$.*

Legyenek $a_1, \ldots, a_n$ komplex számok. A

$$\det\begin{pmatrix} 1 & a_1 & a_1^2 & \cdots & a_1^{n-1} \\ 1 & a_2 & a_2^2 & \cdots & a_2^{n-1} \\ \vdots & \vdots & \vdots & & \vdots \\ 1 & a_n & a_n^2 & \cdots & a_n^{n-1} \end{pmatrix} \tag{3.1}$$

determinánst *Vandermonde-féle determinánsnak* nevezzük.

**3.19. tétel.** *A (3.1) Vandermonde-féle determináns akkor és csak akkor nem nulla, ha az $a_i$ számok páronként különbözők.*

### Feladatok

1. Határozza meg az $\alpha$ és $\beta$ paraméterek lehetséges értékeit, hogy az

   $$\mathbf{A} = \begin{pmatrix} \alpha & 1 & 0 \\ \beta & 2 & 1 \\ 0 & 1 & 2 \end{pmatrix}$$

   mátrix

   (a) szinguláris,

   (b) diagonálisan domináns,

   (c) szimmetrikus,

   (d) pozitív definit legyen.

2. Igazolja, hogy ha $\mathbf{A}$ és $\mathbf{B}$ pozitív definit $n \times n$-es mátrixok, akkor

   (a) $\mathbf{A}^T$,

   (b) $\mathbf{A} + \mathbf{B}$,

   (c) $\mathbf{A}^2$

   is pozitív definit.

3. Bizonyítsa be a 3.6. tételt!

4. Bizonyítsa be a 3.7. tételt!

5. Bizonyítsa be a 3.9. tételt!

6. Bizonyítsa be a 3.11. tételt!

7. Bizonyítsa be a 3.12. tételt!

8. Bizonyítsa be a 3.14. tételt!

9. Bizonyítsa be a 3.19. tételt! (Útmutatás: A (3.1) determináns képletében helyettesítsük $a_1$-et $x$-szel. Mutassa meg, hogy a kapott determináns $n-1$-edfokú polinom $x$-ben! Soroljon fel $n-1$ db különböző gyököt a kapott polinomnak!)

10. Mutassa meg, hogy a (3.1) Vandermonde-determináns értéke

    $$\prod_{i>j}(a_i - a_j).$$

    (Útmutatás: Tekintse az előző feladat megoldását!)

## 3.2. Trianguláris egyenletrendszerek

**3.20. példa.** Oldjuk meg a következő egyenletrendszert:

$$\begin{array}{rcrcrcrcr}
2x_1 & - & x_2 & + & 3x_3 & + & x_4 & = & 3 \\
& & 3x_2 & - & x_3 & + & 2x_4 & = & 13 \\
& & & & 2x_3 & - & x_4 & = & -2 \\
& & & & & & 3x_4 & = & 12
\end{array}$$

A negyedik egyenletet $x_4$-re megoldhatjuk: $x_4 = 4$. Ezt visszahelyettesítve a harmadik egyenletbe kapjuk $x_3 = (-2 + x_4)/2 = 1$, majd a második egyenletből $x_2 = (13 + x_3 - 2x_4)/3 = 2$. Végül az első egyenletből $x_1 = (3 + x_2 - 3x_3 - x_4)/2 = -1$. $\qquad\square$

Az előző példát általánosítva, egy $n$-dimenziós felülről trianguláris egyenletrendszer, $\mathbf{A}\mathbf{x} = \mathbf{b}$, azaz

$$\begin{array}{rcrcrcrcr}
a_{11}x_1 & + & a_{12}x_2 & + & \ldots & + & a_{1n}x_n & = & b_1 \\
& & a_{22}x_2 & + & \ldots & + & a_{2n}x_n & = & b_2 \\
& & & & \ddots & & \vdots & & \vdots \\
& & & & & & a_{nn}x_n & = & b_n
\end{array} \tag{3.2}$$

megoldásának módszerét, az ún. *visszahelyettesítés módszerét* a következő algoritmussal adhatjuk meg:

---

**3.21. algoritmus. Trianguláris egyenletrendszer megoldása visszahelyettesítéssel**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n)$, $b_i$, $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

$x_n \leftarrow b_n / a_{nn}$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow \left(b_i - \sum_{j=i+1}^{n} a_{ij}x_j\right)/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A visszahelyettesítés módszere akkor és csak akkor hajtható végre, ha $a_{ii} \neq 0$ minden $i = 1, \ldots, n$-re. Mivel $\det(\mathbf{A}) = a_{11}a_{22}\cdots a_{nn}$, így ez akkor és csak akkor teljesül, ha a (3.2) egyenletnek létezik egyértelmű megoldása, azaz $\det(\mathbf{A}) \neq 0$.

A módszer műveletigénye:

| | osztás/szorzás | összeadás/kivonás |
|---|---|---|
| 1. lépés: | 1 | 0 |
| 2. lépés: | 2 | 1 |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $n$. lépés: | $n$ | $n-1$ |

Azaz a módszer végrehajtásához összesen $1 + 2 + \cdots + n = n(n+1)/2$ osztás ill. szorzás, valamint $1 + 2 + \cdots + n - 1 = (n-1)n/2$ összeadás ill. kivonás szükséges. Ezt szokás úgy is írni, hogy $n^2/2 + \mathcal{O}(n)$ nagyságrendű osztás/szorzás, és hasonlóan $n^2/2 + \mathcal{O}(n)$ nagyságrendű összeadás/kivonás kell a módszerhez. Itt és a továbbiakban $\mathcal{O}(n^k)$ egy legfeljebb $k$-adrendű polinomot jelöl.

### Feladatok

1. Oldja meg a következő trianguláris egyenletrendszereket:

   (a)
   $$\begin{array}{rcrcrcrcr}
   3x_1 & + & x_2 & - & x_3 & + & 2x_4 & = & -4 \\
   & & 4x_2 & - & 2x_3 & + & x_4 & = & 5 \\
   & & & & 6x_3 & - & 2x_4 & = & -7 \\
   & & & & & & 2x_4 & = & 4
   \end{array}$$

   (b)
   $$\begin{array}{rcrcrcrcrcr}
   1.2x_1 & + & 2.1x_2 & - & 3.2x_3 & + & 2.0x_4 & + & 1.4x_5 & = & 81.5 \\
   & & 2.5x_2 & - & 1.1x_3 & + & 6.1x_4 & - & 3.0x_5 & = & 159.7 \\
   & & & & 2.6x_3 & - & 1.1x_4 & & & = & 12.8 \\
   & & & & & & 2.2x_4 & + & 4.1x_5 & = & 46.9 \\
   & & & & & & & & 1.3x_5 & = & 6.5
   \end{array}$$

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

### Részleges főelemkiválasztás

Az előző két példa mutatja, hogy néha kell, és sok esetben célszerű módosítani a 3.23. algoritmust. Erre az egyik legegyszerűbb stratégia a következő, *részleges főelemkiválasztásnak* (vagy egyszerűen csak *főelemkiválasztásnak*) nevezett módszer: a Gauss-elimináció $k$-adik lépése előtt keressük meg a $k$-adik oszlopban a főátlóban és az alatta álló elemek közül a legnagyobb abszolút értékűt, azaz legyen

$$|a_{lk}| = \max\{|a_{ik}| : i = k, \ldots, n\}.$$

(A maximális elem az $l$-edik sorban van.) Cseréljük fel a $k$-adik és $l$-edik sort, és folytassuk az eliminációt. Ezzel a 3.24. és 3.25. példákban vizsgált problémákat ki tudjuk küszöbölni: ha $a_{kk}^{(k-1)} = 0$, akkor a sorcsere után nemnulla elem kerül erre a pozícióra (feltéve ha van nemnulla elem $a_{kk}^{(k-1)}$ alatt), valamint folytatva a Gauss-eliminációt a sorcserékkel elérhető lehető legnagyobb abszolút értékű számmal fogunk osztani, ami a kerekítési hibákat csökkenti.

**3.26. tétel.** *A következő állítások ekvivalensek:*

1. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenlet egyértelműen megoldható Gauss-eliminációval részleges főelemkiválasztást használva,*

2. $\det(\mathbf{A}) \neq 0$,

3. *az $\mathbf{A}$ mátrix invertálható,*

4. *az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletnek létezik megoldása minden $\mathbf{b}$ vektorra.*

**Bizonyítás.** Lineáris algebrából ismert, hogy a 2., 3. és 4. állítások ekvivalensek (lásd a 3.2. tételt). Így most azt látjuk be, hogy 1. és 2. ekvivalens.

Tegyük fel először, hogy 1. teljesül. Legyen $\mathbf{A}^{(0)} = \mathbf{A}$, és jelöljük $\mathbf{A}^{(k)}$-val a Gauss-elimináció $k$-adik lépésekor kapott együtthatómátrixot. A determinánsok tulajdonságából következik, hogy $\det(\mathbf{A}^{(k)}) = \det(\mathbf{A}^{(k-1)})$, ha nem történt sorcsere a $k$-adik lépésben, ill. $\det(\mathbf{A}^{(k)}) = -\det(\mathbf{A}^{(k-1)})$, ha volt sorcsere. Mivel a feltétel szerint a Gauss-elimináció elvégezhető, ezért az $\mathbf{A}^{(n-1)}$ mátrixhoz tartozó trianguláris egyenletrendszer megoldható, azaz $\det(\mathbf{A}^{(n-1)}) \neq 0$. Ebből viszont következik, hogy $\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(n-1)}) \neq 0$.

Belátjuk, hogy ha a részleges főelemkiválasztással végzett Gauss-elimináció $k$-adik lépése nem hajtható végre, akkor $\det(\mathbf{A}) = 0$. A $k$-adik lépés akkor és csak akkor nem hajtható végre, ha $a_{ik}^{(k-1)} = 0$ minden $i = k, \ldots, n$-re, azaz:

$$\mathbf{A}^{(k-1)} = \begin{pmatrix}
a_{11} & a_{12} & \cdots & a_{1,k-1} & a_{1k} & a_{k,k+1} & \cdots & a_{1n} \\
0 & a_{22}^{(1)} & \cdots & a_{2,k-1}^{(1)} & a_{2k}^{(1)} & a_{2,k+1}^{(1)} & \cdots & a_{2n}^{(1)} \\
& & \ddots & & & & & \\
0 & 0 & \cdots & a_{k-1,k-1}^{(k-2)} & a_{k-1,k}^{(k-2)} & a_{k-1,k+1}^{(k-2)} & \cdots & a_{k-1,n}^{(k-2)} \\
0 & 0 & \cdots & 0 & 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\
\vdots & \vdots & & \vdots & \vdots & \vdots & & \vdots \\
0 & 0 & \cdots & 0 & 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)}
\end{pmatrix}.$$

Ezért

$$\det(\mathbf{A}^{(k-1)}) = a_{11}a_{22}^{(1)}\cdots a_{k-1,k-1}^{(k-2)}\det\begin{pmatrix} 0 & a_{k,k+1}^{(k-1)} & \cdots & a_{kn}^{(k-1)} \\ \vdots & \vdots & & \vdots \\ 0 & a_{n,k+1}^{(k-1)} & \cdots & a_{nn}^{(k-1)} \end{pmatrix} = 0,$$

és így $\det(\mathbf{A}) = \pm\det(\mathbf{A}^{(k-1)}) = 0$. $\qquad\square$

**3.27. példa.** Tekintsük újra a 3.22. példa egyenletrendszerét, és oldjuk meg a feladatot Gauss-eliminációval részleges főelemkiválasztást használva! A kibővített mátrixok sorozata a következő:

$$\begin{pmatrix} 2 & -1 & 0 & -3 & 8 \\ 2 & -1 & 1 & 5 & 2 \\ -3 & 1 & 1 & -2 & -5 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 2 & -1 & 1 & 5 & 2 \\ 2 & -1 & 0 & -3 & 8 \\ 2 & 4 & 0 & -1 & 21 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & -1/3 & 2/3 & -13/3 & 14/3 \\ 0 & -1/3 & 5/3 & 11/3 & -4/3 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 5/7 & -9/2 & 83/14 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \end{pmatrix} \sim \begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \\ 0 & 0 & 5/7 & -9/2 & 83/14 \end{pmatrix} \sim$$

$$\begin{pmatrix} -3 & 1 & 1 & -2 & -5 \\ 0 & 14/3 & 2/3 & -7/3 & 53/3 \\ 0 & 0 & 12/7 & 7/2 & -1/14 \\ 0 & 0 & 0 & -143/24 & 143/24 \end{pmatrix}.$$

Látható, hogy az első és a harmadik eliminációs lépés előtt volt sorcsere. A trianguláris egyenletet megoldva kapjuk: $x_1 = 4$, $x_2 = 3$, $x_3 = 2$ és $x_4 = -1$. $\qquad\square$

Tegyük fel, hogy egy $\mathbf{A}$ együtthatómátrixon részleges főelemkiválasztással elvégzett Gauss-elimináció közben szükséges sorcseréket összegyűjtjük. Végezzük el ezeket egyszerre előre, az első eliminációs lépés előtt. Ezután a kapott mátrixon sorcsere nélkül végrehajtható lesz a Gauss-elimináció (és az eredménye ugyanaz, mint az $\mathbf{A}$ mátrixon részleges főelemkiválasztással elvégzett Gauss-elimináció). A 3.7. tétel szerint a sorcserék hatása egy megfelelő permutációs $\mathbf{P}$ mátrixszal (balról) történő szorzással ekvivalens. A 3.26. tételből tehát rögtön következik az alábbi eredmény:

**3.28. tétel.** *Ha $\det(\mathbf{A}) \neq 0$, akkor létezik olyan $\mathbf{P}$ permutációs mátrix, hogy a $\mathbf{P}\mathbf{A}\mathbf{x} = \mathbf{P}\mathbf{b}$ egyenletrendszer egyértelműen megoldható Gauss-eliminációval (sorcserék nélkül) minden $\mathbf{b}$ vektorra.*

### Teljes főelemkiválasztás

A kerekítési hibák további kiküszöbölésére használhatjuk a részleges főelemkiválasztás következő módosítását, az ún. *teljes főelemkiválasztás* módszerét: a Gauss-elimináció $k$-adik lépése előtt keressük meg az első olyan $l$ sor- és $m$ oszlopindexet, amelyre

$$|a_{lm}| = \max\{|a_{ij}| : i = k, \ldots, n,\ j = k, \ldots, n\}.$$

(A maximális elem az $l$-edik sorban és $m$-edik oszlopban van.) Cseréljük fel a $k$-adik és $l$-edik sort és a $k$-adik és $m$-edik oszlopot. Jegyezzük meg, hogy az oszlopcserével melyik oszlop melyik ismeretlen együtthatóit tartalmazza, és folytassuk az eliminációt.

Ennek a módszernek a hátránya a részleges főelemkiválasztáshoz képest az, hogy sokkal több összehasonlításra van szükség, ami lassítja a módszert.

**3.29. példa.** Tekintsük újra a 3.22. és 3.27. példa egyenletrendszerét, és oldjuk meg a feladatot most Gauss-elimimációval teljes főelemkiválasztást használva:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_1 & x_2 & x_3 & x_4 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ -2 & -2 & 2 & 1 & -11 \\ -4 & 2 & 3 & -1 & 27 \\ -2 & 1 & 4 & -2 & 28 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & -5/2 & 1 & 2 & -15 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & 1/2 & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & -1 & 2 & 2 & -8 \\ 0 & 1 & 5 & 1 & 19 \\ 0 & -5/2 & 1 & 2 & -15 \\ 0 & 1/2 & 5 & -1 & 24 \\ x_4 & x_2 & x_3 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & -1 & -5/2 & 2 & -15 \\ 0 & 5 & 1/2 & -1 & 24 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim$$

$$\begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -23/10 & 11/5 & -56/5 \\ 0 & 0 & -1/2 & -2 & 5 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix} \sim \begin{pmatrix} 4 & 2 & -1 & 2 & -8 \\ 0 & 5 & 1 & 1 & 19 \\ 0 & 0 & -23/10 & 11/5 & -56/5 \\ 0 & 0 & 0 & -57/23 & 171/23 \\ x_4 & x_3 & x_2 & x_1 & \end{pmatrix}.$$

Azért, hogy az oszlopcseréket követni tudjuk, kibővítettük a mátrixot egy plusz sorral, ahol azt jelöljük, hogy az adott oszlop melyik változó együtthatóit tartalmazza. Az első eliminációs lépés előtt felcseréltük az első és második sort és az első és negyedik oszlopot, mivel 4 volt a maximális elem az együtthatók abszolút értékei közül. (Lehetett volna az első és második sor és az első és negyedik oszlop felcserélésével $-4$-et behozni a főelem pozíciójába; vagy pedig az első és negyedik sor és az első és harmadik oszlop cseréjével az 4-et behozni az első főelem pozíciójába.) A második eliminációs lépés előtt felcseréltük a második és harmadik sort és a második és harmadik oszlopot. A harmadik eliminációs lépés előtt pedig nem volt sor vagy oszlop csere. A megoldást most is a trianguláris egyenletrendszert megoldva kapjuk, de például a 4. egyenletből most az $x_1$ értékét kapjuk meg. A végeredmény: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$.

Természetesen a részleges ill. a teljes főelemkiválasztás módszerének előnye csak akkor jelentkezik, ha numerikusan számoljuk végig az egyenletrendszert. $\qquad\square$

### Sorkiegyenlítés

Numerikus tapasztalat az, hogy ha az együtthatómátrix elemei között jelentős nagyságrendi eltérés van, akkor a kerekítési hiba megnőhet a számolás során (lásd a 3.25. példát). Ezért szokás az egyes egyenleteket beszorozni valamely nemnulla számokkal úgy, hogy a kapott egyenletrendszer együtthatói közel azonos nagyságrendűek legyenek. Ezt a beszorzást nevezzük *sorkiegyenlítésnek*. Hasonlóan, ha az egyenletrendszer megoldásai eltérő nagyságrendűek, akkor azokat is célszerű kiegyenlíteni, azaz az együtthatómátrix oszlopait beszorozni valamely nemnulla számokkal. Erre jelenleg nem ismert jó stratégia (az $\mathbf{A}$ mátrix és a $\mathbf{b}$ vektor ismeretében), ezért itt csak a sorkiegyenlítéssel foglalkozunk.

Keressünk tehát olyan $d_1, \ldots, d_n \neq 0$ számokat, hogy a $\mathbf{B} := \mathbf{D}\mathbf{A}$ mátrix elemei közel azonos nagyságrendűek legyenek, ahol $\mathbf{D} = \mathrm{diag}(d_1, \ldots, d_n)$. Ekkor az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszer helyett a $\mathbf{D}\mathbf{A}\mathbf{x} = \mathbf{D}\mathbf{b}$ egyenletrendszert oldjuk meg numerikusan. Egy egyszerű stratégia szerint úgy választjuk $\mathbf{D}$-t, hogy $\max\{|b_{ij}| : 1 \leq j \leq n\} \approx 1$ legyen minden $i = 1, \ldots, n$-re. Ezt elérhetjük a $d_i := 1/s_i$, $s_i := \max\{|a_{ij}| : 1 \leq j \leq n\}$ választással. Ezzel az a probléma, hogy az osztás további kerekítési hibát vezethet be a számolásba. Ezt kiküszöbölendő csinálhatjuk a következőt: legyen $\beta$ a számábrázolás alapja a számítógépen, és legyen $r_i$ a legkisebb egész, hogy $\beta^{r_i} \geq s_i$, és definiáljuk $b_{ij} := a_{ij}/\beta^{r_i}$ $(i, j = 1, \ldots, n)$. Ekkor az osztásnál nem lesz kerekítési hiba, és $1/\beta < \max_{1 \leq j \leq n} |b_{ij}| \leq 1$ teljesül minden $i = 1, \ldots, n$-re.

Könnyen igazolható a következő állítás:

**3.30. tétel.** *Tegyük fel, hogy egy $\mathbf{A}$ együtthatómátrixon sorkiegyenlítést végeztünk olyan $\mathbf{D} = \mathrm{diag}(d_1, \ldots, d_n)$ szorzótényezőkkel (pl. $\beta$ hatványokkal), amelyek nem eredményeztek kerekítési hibát. Ekkor ha a $\mathbf{D}\mathbf{A}$ mátrixon végzett (részleges vagy teljes) főelemkiválasztás ugyanazokat a sorcseréket (és oszlopcseréket) eredményezi, mint az $\mathbf{A}$ mátrixon, akkor az $\mathbf{A}\mathbf{x} = \mathbf{b}$ és $\mathbf{D}\mathbf{A}\mathbf{x} = \mathbf{D}\mathbf{b}$ egyenletek numerikus megoldásai pontosan ugyanazok lesznek.*

Ebből következik, hogy a kiegyenlítésnek csak a főelemkiválasztásra van hatása. A Gauss-eliminációnak a következő módosításában a súlyozás helyett csak ún. *implicit sorkiegyenlítést* végzünk, a főelemek kiválasztásához használjuk csak a súlyokat. Ez a módszer a gyakorlatban az egyik leggyakrabban használt algoritmus lineáris egyenletrendszerek megoldására.

---

**3.31. algoritmus. Gauss-elimináció részleges főelemkiválasztással és implicit sorkiegyenlítéssel**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$ - kibővített együtthatómátrix
OUTPUT: $x_1, \ldots, x_n$

*(súlyok kiszámítása:)*
**for** $i = 1, \ldots, n$ **do**
$\qquad s_i \leftarrow \max\limits_{1 \leq j \leq n} |a_{ij}|$
**end do**
*(elimináció:)*
**for** $k = 1, \ldots, n-1$ **do**
$\qquad$legyen $l$ a legkisebb olyan index, amelyre $\dfrac{|a_{lk}|}{s_l} = \max\limits_{k \leq i \leq n} \dfrac{|a_{ik}|}{s_i}$
$\qquad$cseréljük fel az $\mathbf{A}$ mátrix $k$-adik és $l$-edik sorát
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

Megjegyezzük, hogy az eddigi módszereknél gyakran kellett egy $\mathbf{A} = (a_{ij})$ mátrix két sorát felcserélni. Ez sok művelettel jár, ezért az algoritmusok programozásakor csinálhatjuk a következőt: Az $\mathbf{A}$ mátrixot tároljuk egy $a[i, j]$ tömbben. Definiálunk egy $m[i]$ vektort, amelynek kezdeti értéke $m[i] = i$, $(i = 1, \ldots, n)$. A $k$-adik és $l$-edik sor cseréjekor csak az $m[\cdot]$ vektor $k$-adik és $l$-edik elemeit cseréljük fel. Amikor az algoritmusban az $\mathbf{A}$ mátrix egy $a_{ij}$ elemére kell hivatkozni, akkor használjuk az $a[m[i], j]$ elemet.

**3.32. tétel.** *Ha az $\mathbf{A}$ mátrix diagonálisan domináns, akkor a Gauss-elimináció főelemkiválasztás nélkül végrehajtható az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszeren, és a módszer stabil a kerekítési hibákra nézve.*

**Bizonyítás.** Megjegyezzük, hogy ha az $\mathbf{A}$ mátrix diagonálisan domináns, akkor a 3.8. tétel szerint az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszernek létezik egyértelmű megoldása.

Megmutatjuk, hogy a Gauss-eliminációval kapott $\mathbf{A}^{(1)}, \mathbf{A}^{(2)}, \ldots, \mathbf{A}^{(n-1)}$ mátrixok mindegyike képezhető és diagonálisan domináns. Mivel $\mathbf{A}^{(0)} = \mathbf{A}$ diagonálisan domináns, ezért $|a_{11}| > \sum_{j=2}^{n} |a_{1j}|$, így $a_{11} \neq 0$. Ebből következik, hogy az $\mathbf{A}^{(1)}$ mátrix képezhető. Megmutatjuk, hogy $\mathbf{A}^{(1)}$ diagonálisan domináns. Mivel $\mathbf{A}^{(1)}$ első sora megegyezik $\mathbf{A}$ első sorával, ezért az első sor diagonálisan domináns. Legyen $1 < i \leq n$. Használva, hogy $a_{ij}^{(1)} = a_{ij} - \frac{a_{i1}}{a_{11}}a_{1j}$, $(j = 2, \ldots, n)$, valamint $a_{i1}^{(1)} = 0$, kapjuk

$$\sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{ij}^{(1)}| = \sum_{\substack{j=2 \\ j \neq i}}^{n} \left|a_{ij} - \frac{a_{i1}}{a_{11}}a_{1j}\right| \leq \sum_{\substack{j=2 \\ j \neq i}}^{n} \left(|a_{ij}| + \frac{|a_{i1}|}{|a_{11}|}|a_{1j}|\right) = \sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{ij}| + \frac{|a_{i1}|}{|a_{11}|}\sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{1j}|.$$

Mivel az $\mathbf{A}$ mátrix $i$-edik és az első sora is diagonálisan domináns, ezért

$$\begin{aligned}
\sum_{\substack{j=2 \\ j \neq i}}^{n} |a_{ij}^{(1)}| &< |a_{ii}| - |a_{i1}| + \frac{|a_{i1}|}{|a_{11}|}(|a_{11}| - |a_{1i}|) \\
&= |a_{ii}| - \frac{|a_{i1}|}{|a_{11}|}|a_{1i}| \\
&\leq \left|a_{ii} - \frac{a_{i1}}{a_{11}}a_{1i}\right| \\
&= |a_{ii}^{(1)}|.
\end{aligned}$$

Ezzel beláttuk, hogy $\mathbf{A}^{(1)}$ minden sora diagonálisan domináns, azaz a mátrix diagonálisan domináns.

Ehhez hasonlóan belátható, hogy $\mathbf{A}^{(2)}, \ldots, \mathbf{A}^{(n-1)}$ mindegyike definiált és diagonálisan domináns.

A módszer stabilitását itt nem bizonyítjuk be. $\qquad\square$

Belátható a következő tétel:

**3.33. tétel.** *Legyen $\mathbf{A}$ szimmetrikus $n \times n$-es mátrix. Ekkor $\mathbf{A}$ akkor és csak akkor pozitív definit, ha a Gauss-elimináció főelemkiválasztás nélkül végrehajtható az $\mathbf{A}\mathbf{x} = \mathbf{b}$ egyenletrendszeren, és a főelemek pozitívak. Továbbá ebben az esetben a módszer stabil a kerekítési hibákra nézve.*

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

## 3.4. Gauss–Jordan-elimináció

A Gauss-elimináció egyik módosítása a *Gauss–Jordan-elimináció* (vagy egyszerűen *Jordan-elimináció*), ahol a Gauss-elimináció lépéseivel egységmátrixra alakítjuk át az együtthatómátrixot, azaz az $(\mathbf{A}, \mathbf{b})$ kibővített mátrixot az $(\mathbf{I}, \mathbf{b}^{(n-1)})$ alakra hozzuk. Ekkor az egyenletrendszer megoldása $\mathbf{x} = \mathbf{b}^{(n-1)}$ lesz.

---

**3.34. algoritmus. Gauss–Jordan-elimináció**

---

INPUT: $a_{ij}$, $(i = 1, \ldots, n,\ \ j = 1, \ldots, n+1)$ - kibővített együtthatómátrix
OUTPUT: $x_1, \ldots, x_n$

*(együtthatómátrix diagonális alakra hozása:)*
**for** $k = 1, \ldots, n$ **do**
$\qquad$**for** $i = 1, \ldots, n$ **do**
$\qquad\qquad$**if** $i \neq k$ **do**
$\qquad\qquad\qquad l_{ik} \leftarrow a_{ik}/a_{kk}$
$\qquad\qquad\qquad$**for** $j = k+1, \ldots, n+1$ **do**
$\qquad\qquad\qquad\qquad a_{ij} \leftarrow a_{ij} - l_{ik}a_{kj}$
$\qquad\qquad\qquad$**end do**
$\qquad\qquad$**end do**
$\qquad$**end do**
**end do**
**for** $i = 1, \ldots, n$ **do**
$\qquad x_i \leftarrow a_{i,n+1}/a_{ii}$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

Ellenőrizhető, hogy a Gauss–Jordan-elimináció műveletigénye: $n^3/2 + \mathcal{O}(n^2)$ osztás/szorzás.

**3.35. példa.** Alkalmazzuk a Gauss–Jordan-eliminációt a 3.22. feladatban vizsgált egyenletrendszer megoldására:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & -3 & -4 & 3 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & -3 & 0 & -6 & 6 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & 10/3 & -5/3 \\ 0 & 3 & 6 & 8 & 14 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 14/15 & -73/15 \\ 0 & 3 & 0 & 4/5 & 22/5 \\ 0 & 0 & -5 & -6 & -8 \\ 0 & 0 & 0 & -26/5 & 52/5 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 3 & 0 & 0 & 6 \\ 0 & 0 & -5 & 0 & -20 \\ 0 & 0 & 0 & -26/5 & 52/5 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}.$$

A megoldás leolvasható a mátrix utolsó oszlopáról: $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$. $\qquad\square$

A Gauss-eliminációnál megfogalmazott részleges ill. teljes főelemkiválasztás alkalmazható a Gauss–Jordan-elimináció esetében is.

**3.36. példa.** Alkalmazzuk a Gauss–Jordan-eliminációt részleges főelemkiválasztással a 3.22. feladatban vizsgált egyenletrendszer megoldására:

$$\begin{pmatrix} 1 & -2 & -2 & -2 & -11 \\ 2 & -1 & 2 & 4 & -8 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim \begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 1 & -2 & -2 & -2 & -11 \\ -1 & 2 & 3 & -4 & 27 \\ -2 & 1 & 4 & -2 & 28 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & -1 & 2 & 4 & -8 \\ 0 & -3/2 & -3 & -4 & -7 \\ 0 & 3/2 & 4 & -2 & 23 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\ 0 & -3/2 & -3 & -4 & -7 \\ 0 & 0 & 1 & -6 & 16 \\ 0 & 0 & 6 & 2 & 20 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & 0 & 4 & 20/3 & -10/3 \\ 0 & -3/2 & -3 & -4 & -7 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 1 & -6 & 16 \end{pmatrix} \sim \begin{pmatrix} 2 & 0 & 0 & 16/3 & -50/3 \\ 0 & -3/2 & 0 & -3 & 3 \\ 0 & 0 & 6 & 2 & 20 \\ 0 & 0 & 0 & -19/3 & 38/3 \end{pmatrix} \sim$$

$$\begin{pmatrix} 2 & 0 & 0 & 0 & -6 \\ 0 & -3/2 & 0 & 0 & -3 \\ 0 & 0 & 6 & 0 & 24 \\ 0 & 0 & 0 & -19/3 & 38/3 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & 0 & -3 \\ 0 & 1 & 0 & 0 & 2 \\ 0 & 0 & 1 & 0 & 4 \\ 0 & 0 & 0 & 1 & -2 \end{pmatrix}.$$

A megoldás tehát $x_1 = -3$, $x_2 = 2$, $x_3 = 4$ és $x_4 = -2$. $\qquad\square$

### Feladatok

1. Oldja meg a 3.3. szakasz 1. és 2. feladatában szereplő egyenletrendszereket Gauss–Jordan-eliminációval!

2. Lássa be, hogy a Gauss–Jordan-elimináció műveletigénye $n^3/2 + n^2 - n/2$ osztás ill. szorzás!

## 3.5. Tridiagonális egyenletrendszerek

Egy négyzetes $(a_{ij})$ mátrixot *tridiagonálisnak* nevezünk, ha $a_{ij} = 0$ minden $|i - j| > 1$-re, azaz nemnulla elemek csak a mátrix főátlójában, ill. közvetlen alatta vagy felette lehetnek. Tridiagonális lineáris egyenletrendszerek (azaz ahol az együtthatómátrix tridiagonális) gyakran előfordulnak alkalmazásokban, így ezek fontos speciális esetei a lineáris egyenletrendszereknek. A következő jelölést használjuk:

$$\begin{pmatrix}
d_1 & c_1 & 0 & 0 & \cdots & 0 \\
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\
0 & a_2 & d_3 & c_3 & \cdots & 0 \\
& & \ddots & \ddots & \ddots & \\
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\
0 & 0 & \cdots & 0 & a_{n-1} & d_n
\end{pmatrix}\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix}. \tag{3.10}$$

Egy tridiagonális mátrix elemeit célszerű a jelölés szerinti három vektorban tárolni: $(a_i)$, $(d_i)$ és $(c_i)$, így összesen $3n - 2$ tárolóhely kell az együtthatóknak.

Könnyen látható, hogy a Gauss-eliminációt alkalmazva a (3.10) egyenletrendszerre az $a_i$ számok kinullázódnak az elimináció végére, a $c_i$ számok viszont nem fognak megváltozni. A $d_i$ és $b_i$ értékek megváltoznak az elimináció során. A következő algoritmust úgy fogalmaztuk meg, hogy az elimináció során felülírja a $(d_i)$ és $(b_i)$ vektorokat.

---

**3.37. algoritmus. Gauss-elimináció tridiagonális egyenletrendszerre**

---

INPUT: $a_i, c_i$ $(i = 1, \ldots, n-1)$, $d_i, b_i$ $(i = 1, \ldots, n)$
OUTPUT: $x_1, \ldots, x_n$

*(elimináció:)*
**for** $i = 2, \ldots, n$ **do**
$\qquad temp \leftarrow a_{i-1}/d_{i-1}$
$\qquad d_i \leftarrow d_i - temp \cdot c_{i-1}$
$\qquad b_i \leftarrow b_i - temp \cdot b_{i-1}$
**end do**
*(visszahelyettesítés:)*
$x_n \leftarrow b_n/d_n$
**for** $i = n-1, \ldots, 1$ **do**
$\qquad x_i \leftarrow (b_i - c_i x_{i+1})/d_i$
**end do**
**output**$(x_1, x_2, \ldots, x_n)$

---

A módszer műveletigénye meglepően kicsi: $5n - 4$ szorzás/osztás. Ha ezt összehasonlítjuk a 3.23. algoritmus $n^3/3$ nagyságrendjével, akkor látjuk, hogy tridiagonális rendszerek megoldására feltétlenül ezt a speciális algoritmust kell használni.

A 3.32. tételből következik, hogy ha az $\mathbf{A}$ tridiagonális mátrix diagonálisan domináns, akkor a 3.37. algoritmus végrehajtható, azaz nincs szükség sorcserére a Gauss-elimináció közben.

### Feladatok

1. Oldja meg a következő tridiagonális egyenletrendszert:

   $$\begin{array}{rcrcrcrcrcrcr}
   x_1 & - & 0.5x_2 & & & & & & & & & = & 1.5 \\
   0.5x_1 & + & 4x_2 & - & 0.5x_3 & & & & & & & = & -4.0 \\
   & & 0.5x_2 & + & 2x_3 & - & 0.5x_4 & & & & & = & 2.0 \\
   & & & & 0.5x_3 & + & 4x_4 & - & 0.5x_5 & & & = & -4.0 \\
   & & & & & & 0.5x_4 & + & 2x_5 & - & 0.5x_6 & = & 2.0 \\
   & & & & & & & & 0.5x_5 & + & x_6 & = & -0.5
   \end{array}$$

2. Lássa be, hogy a 3.37. algoritmus műveletigénye $5n - 4$ osztás/szorzás!

3. Fogalmazzon meg a 3.37. algoritmushoz hasonló algoritmust olyan *szalagmátrixokra*, ahol nemnulla elemek csak a főátlóban és az alatti és feletti 2-2 átlóban lehetnek.

## 3.6. Szimultán egyenletrendszerek

Gyakran előfordul, hogy ún. *szimultán egyenletrendszereket*, azaz olyan $\mathbf{A}\mathbf{x} = \mathbf{b}^{(i)}$ alakú egyenletrendszereket kell megoldanunk $i = 1, \ldots, m$-re, ahol az együtthatómátrix azonos, de az egyenletek jobb oldala különböző. Ezt röviden az $\mathbf{A}\mathbf{X} = \mathbf{B}$ egyenlettel írhatjuk le, ahol az $n \times m$-es $\mathbf{B} = (\mathbf{b}^{(1)}, \mathbf{b}^{(2)}, \ldots, \mathbf{b}^{(m)})$ mátrix $i$-edik oszlopa $\mathbf{b}^{(i)}$, és az $n \times m$-es $\mathbf{X} = (\mathbf{x}^{(1)}, \mathbf{x}^{(2)}, \ldots, \mathbf{x}^{(m)})$ mátrix $i$-edik oszlopa $\mathbf{x}^{(i)}$, az $\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$ egyenlet megoldása. Mivel a Gauss- ill. a Gauss–Jordan-elimináció végrehajthatósága ill. főelemkiválasztásnál a cserék eldöntése csak az együtthatómátrixon múlik, alkalmazhatjuk ezeket a módszereket az $n \times (n + m)$-es $(\mathbf{A}, \mathbf{B})$ kibővített mátrixon. Pl. ha Gauss–Jordan-eliminációt végzünk, akkor az $(\mathbf{A}, \mathbf{B})$ kibővített mátrixot az $(\mathbf{I}, \mathbf{X})$ alakra hozzuk, és ekkor $\mathbf{X}$ lesz a szimultán egyenletrendszer megoldása.

### Feladatok

1. Igazolja, hogy az $(\mathbf{A}, \mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$ kibővített mátrixon végzett Gauss-elimináció műveletigénye $n^3/3 + mn^2 - n/3$ osztás/szorzás!

2. Igazolja, hogy az $(\mathbf{A}, \mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$ kibővített mátrixon végzett Gauss–Jordan-elimináció műveletigénye $n^3/2 + mn^2 - n/2$ osztás/szorzás!

3. Fogalmazza át a 3.37. algoritmust szimultán tridiagonális együtthatójú egyenletrendszerek megoldására!

4. Lássa be, hogy az $\mathbf{A}\mathbf{x}^{(i)} = \mathbf{b}^{(i)}$, $i = 1, 2, \ldots, m$ egyenletrendszer ekvivalens az $\mathbf{A}\mathbf{X} = \mathbf{B}$ mátrix egyenlettel, ahol $\mathbf{X} = (\mathbf{x}^{(1)}, \ldots, \mathbf{x}^{(m)})$ és $\mathbf{B} = (\mathbf{b}^{(1)}, \ldots, \mathbf{b}^{(m)})$!

## 3.7. Mátrix invertálás és determináns számítás

Az $\mathbf{A}$ nemszinguláris négyzetes mátrix inverze teljesíti az $\mathbf{A}\mathbf{A}^{-1} = \mathbf{I}$ mátrix egyenletet, ezért $\mathbf{A}^{-1}$ megoldása az $\mathbf{A}\mathbf{X} = \mathbf{I}$ mátrix egyenletnek (azaz szimultán egyenletrendszernek). Ennek megoldására használhatjuk a Gauss–Jordan-eliminációt. Ellenőrizhető, hogy ennek műveletigénye $\frac{3}{2}n^3 + \mathcal{O}(n^2)$ osztás ill. szorzás.

**3.38. példa.** Invertáljuk az

$$\mathbf{A} = \begin{pmatrix} 1 & 0 & 2 \\ -1 & 1 & 0 \\ -2 & 0 & -1 \end{pmatrix}$$

mátrixot! A Gauss–Jordan-módszert használva:

$$\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ -1 & 1 & 0 & 0 & 1 & 0 \\ -2 & 0 & -1 & 0 & 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 2 & 1 & 0 & 0 \\ 0 & 1 & 2 & 1 & 1 & 0 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim \begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 3 & 2 & 0 & 1 \end{pmatrix} \sim$$

$$\begin{pmatrix} 1 & 0 & 0 & -1/3 & 0 & -2/3 \\ 0 & 1 & 0 & -1/3 & 1 & -2/3 \\ 0 & 0 & 1 & 2/3 & 0 & 1/3 \end{pmatrix}.$$

Tehát

$$\mathbf{A}^{-1} = \frac{1}{3}\begin{pmatrix} -1 & 0 & -2 \\ -1 & 3 & -2 \\ 2 & 0 & 1 \end{pmatrix}. \qquad\square$$

Természetesen a mátrix invertálás Gauss–Jordan-eliminációs módszerénél is használhatjuk a Gauss-eliminációnál megfogalmazott részleges főelemkiválasztás módszerét is a numerikus hiba csökkentése, illetve a nullával való osztás elkerülése érdekében.

A 3.26. tétel szerint az $\mathbf{A}$ mátrixon a Gauss-elimináció részleges főelemkiválasztással pontosan akkor hajtható végre, ha $\det(\mathbf{A}) \neq 0$. A tétel bizonyításából következik, hogy $\det(\mathbf{A}) = (-1)^s\det(\mathbf{A}^{(n-1)})$, ahol $s$ a módszer közben végrehajtott sorcserék száma. Azaz a determináns egyenlő a főelemek megfelelő előjellel vett szorzatával: $\det(\mathbf{A}) = (-1)^s a_{11}a_{22}^{(1)}\cdots a_{nn}^{(n-1)}$.

**3.39. példa.** Tekintsük a 3.22. példa együtthatómátrixát, azaz legyen

$$\mathbf{A} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 2 & -1 & 2 & 4 \\ -1 & 2 & 3 & -4 \\ -2 & 1 & 4 & -2 \end{pmatrix}.$$

Számítsuk ki a mátrix determinánsát! A 3.22. példában végigszámoltuk, hogy az $\mathbf{A}$ mátrixon végrehajtva a Gauss-eliminációt a végeredmény

$$\mathbf{A}^{(3)} = \begin{pmatrix} 1 & -2 & -2 & -2 \\ 0 & 3 & 6 & 8 \\ 0 & 0 & 1 & -6 \\ 0 & 0 & 0 & 38 \end{pmatrix}.$$

Tehát $\det(\mathbf{A}) = \det(\mathbf{A}^{(3)}) = 1 \cdot 3 \cdot 1 \cdot 38 = 114$. $\qquad\square$

### Feladatok

1. Invertálja a következő mátrixokat:

   (a)
   $$\begin{pmatrix} -1 & 1 & 2 \\ -2 & 1 & 0 \\ 0 & 1 & -1 \end{pmatrix}$$

   (b)
   $$\begin{pmatrix} -3 & 1 & 2 \\ 0 & 3 & 1 \\ -2 & -1 & 1 \end{pmatrix}$$

   (c)
   $$\begin{pmatrix} 1 & -1 & 0 & 2 \\ 2 & 1 & 0 & 1 \\ 1 & 0 & -1 & 0 \\ 1 & 2 & 2 & -1 \end{pmatrix}$$

2. Igazolja, hogy az általános Gauss–Jordan-eliminációt használva $3n^3/2 - n/2$ osztás ill. szorzás kell a mátrix invertáláshoz!

3. Fogalmazza meg a Gauss–Jordan-eljárás algoritmusát a mátrix invertálás feladatára alkalmazva, figyelembe véve, hogy az $\mathbf{A}\mathbf{X} = \mathbf{I}$ mátrix egyenletben $\mathbf{I}$ speciális alakú, azaz azt, hogy a nullával való szorzásokat nem kell végrehajtani! Lássa be, hogy az így kapott speciális Gauss–Jordan-eliminción alapuló mátrix invertálás műveletigénye $n^3$ osztás/szorzás!

4. Tesztelje az előző feladatban megfogalmazott algoritmust a

   $$\begin{pmatrix}
   -2 & 1 & & & & \\
   1 & -2 & 1 & & & \\
   & 1 & -2 & 1 & & \\
   & & \ddots & \ddots & \ddots & \\
   & & & 1 & -2 & 1 \\
   & & & & 1 & -2
   \end{pmatrix}$$

   $10 \times 10$-es mátrixon (ahol a hiányzó elemek nullák)! Lássa be, hogy a pontos inverz $\mathbf{A}^{-1} = (c_{ij})$, ahol $c_{ij} = c_{ji}$, és $c_{ij} = -i(11 - j)/11$, $i \leq j$.

5. Számítsa ki az 1. feladatban megadott mátrixok determinánsát Gauss-eliminációt használva!
