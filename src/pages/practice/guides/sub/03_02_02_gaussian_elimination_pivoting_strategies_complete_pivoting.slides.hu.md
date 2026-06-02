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
