**3.4. Tridiagonális egyenletrendszerek**  


## 1. A tridiagonális mátrix fogalma és jelentősége

A lineáris algebrai alkalmazásokban (például differenciálegyenletek numerikus megoldásakor vagy spline interpolációnál) gyakran találkozunk olyan speciális ritka mátrixokkal, ahol a nemnulla elemek egy szűk sávra korlátozódnak.

> **Definíció:** Egy négyzetes $\mathbf{A} = (a_{ij})$ mátrixot **tridiagonálisnak (háromátlósnak)** nevezünk, ha minden olyan elem értéke nulla, amely egynél távolabb esik a főátlótól:
> 
> $$a_{ij} = 0 \qquad \text{minden olyan } i, j \text{ indexre, ahol } |i - j| > 1 \tag{3.10}$$
> 
> 

Ez azt jelenti, hogy nemnulla számok **kizárólag a főátlóban, valamint a közvetlenül alatta és felette lévő egy-egy mellékátlóban** jelenhetnek meg.

### Standard jelölésrendszer:

A hatékony algoritmusok felírásához a tridiagonális egyenletrendszert nem a teljes mátrixszal, hanem három jól elkülöníthető vektorral reprezentáljuk:

* $(d_i)$ : a **főátló** elemei ($d_1, d_2, \ldots, d_n$)
* $(c_i)$ : a főátló **feletti** (szuperdiagonális) mellékátló elemei ($c_1, c_2, \ldots, c_{n-1}$)
* $(a_i)$ : a főátló **alatti** (szubdiagonális) mellékátló elemei ($a_1, a_2, \ldots, a_{n-1}$)
* $(b_i)$ : a jobb oldali **szabadtagok** vektora ($b_1, b_2, \ldots, b_n$)

Mátrixos formában a rendszer a következő képet mutatja:


$$\begin{pmatrix} 
d_1 & c_1 & 0 & 0 & \cdots & 0 \\ 
a_1 & d_2 & c_2 & 0 & \cdots & 0 \\ 
0 & a_2 & d_3 & c_3 & \cdots & 0 \\ 
\vdots & & \ddots & \ddots & \ddots & \vdots \\ 
0 & 0 & \cdots & a_{n-2} & d_{n-1} & c_{n-1} \\ 
0 & 0 & \cdots & 0 & a_{n-1} & d_n 
\end{pmatrix}
\begin{pmatrix} x_1 \\ x_2 \\ x_3 \\ \vdots \\ x_{n-1} \\ x_n \end{pmatrix} = 
\begin{pmatrix} b_1 \\ b_2 \\ b_3 \\ \vdots \\ b_{n-1} \\ b_n \end{pmatrix} \tag{5}$$



## 2. Memóriamegtakarítás (Adattárolás)

Egy általános, sűrű $n \times n$-es mátrix tárolásához a számítógép memóriájában $n^2$ darab tárhelyre van szükség. Nagy méreteknél (pl. $n = 100\,000$) ez kezelhetetlenné válna.

A tridiagonális struktúrának köszönhetően elegendő csupán a három említett együttható-vektort eltárolni. Így a szükséges tárolókapacitás:


$$\text{Tárhelyigény} = (n-1) + n + (n-1) = \mathbf{3n - 2}$$

Ez lineáris memóriafogyasztást jelent, ami radikális megtakarítást eredményez a hagyományos $n^2$-es négyzetes növekedéshez képest.



## 3. Speciális Gauss-elimináció tridiagonális rendszerekre

Ha egy standard Gauss-eliminációt futtatnánk le a háromátlós rendszerre, az algoritmus feleslegesen vizsgálná a nullát tartalmazó blokkokat. Mivel oszloponként a főátló alatt mindössze egyetlen darab nemnulla elem ($a_i$) található, a kiesési lépés rendkívül leegyszerűsödik:

1. **Strukturális állandóság:** Az elimináció során a főátló feletti $c_i$ elemek értékei **sosem változnak meg**, és a mátrix többi részén sem keletkeznek új nemnulla elemek (nincs "feltöltődés").
2. **Frissítés:** Csupán a főátló ($d_i$) és a szabadtagok ($b_i$) értékeit kell soronként módosítani az alábbi rekurzió szerint.

### Az eljárás algoritmusa (Thomas-algoritmus):

Az eredeti együtthatókat közvetlenül felülírva az algoritmus két fő fázisból áll:

* **A) Előrehaladó elimináció (Forward elimination):**
$i = 2, 3, \ldots, n$ esetén lépésről lépésre végrehajtjuk:

$$\begin{aligned}
temp &\leftarrow \frac{a_{i-1}}{d_{i-1}} \\
d_i &\leftarrow d_i - temp \cdot c_{i-1} \\
b_i &\leftarrow b_i - temp \cdot b_{i-1}
\end{aligned}$$


* **B) Visszahelyettesítés (Backward substitution):**
A háromszögesített alakból lentről felfelé meghatározzuk az ismeretleneket:

$$x_n \leftarrow \frac{b_n}{d_n}$$



majd $i = n-1, n-2, \ldots, 1$ indexekre visszafele haladva:

$$x_i \leftarrow \frac{b_i - c_i x_{i+1}}{d_i}$$





## 4. Műveletigény és Időkomplexitás

Az algoritmus legnagyobb zsenialitása a számítási idő drasztikus csökkenésében rejlik. Ha összeszámoljuk az összes elvégzett lebegőpontos szorzást és osztást, a következő meglepően kicsi eredményt kapjuk:

$$\text{Összes szorzás és osztás száma} = \mathbf{5n - 4}$$

### Összehasonlítás a standard módszerekkel:

* **Általános Gauss-elimináció:** $\approx \frac{1}{3}n^3$ művelet.
* **Tridiagonális Gauss-elimináció:** $\approx 5n$ művelet.

Ha például egy $n = 1000$ dimenziós rendszert kell megoldani, a standard Gauss-elimináció nagyságrendileg **333 millió** műveletet végezne el, míg ez a speciális algoritmus mindössze **4996** műveletből megkapja a hajszálpontos végeredményt. Emiatt a mérnöki szoftverekben tridiagonális feladat esetén kötelező ezt a célspecifikus eljárást használni.



## 5. Numerikus stabilitás és a főelemkiválasztás kérdése

A 3.2. fejezetből ismert, hogy a Gauss-elimináció során a kerekítési hibák elkerülésére általában sorcseréket (főelemkiválasztást) kell alkalmazni. Azonban a tridiagonális rendszereknél a sorcsere teljesen felborítaná a sávos struktúrát, megnövelve a memória- és műveletigényt.

Szerencsére egy fontos elméleti tétel védelmet nyújt a sávmátrixoknak:

> **Tétel:** Ha az $\mathbf{A}$ tridiagonális mátrix **szigorúan diagonálisan domináns** a soraira (vagy oszlopaira) nézve, azaz:
> 
> $$|d_i| > |a_{i-1}| + |c_i| \qquad \text{minden } i\text{-re,}$$
> 
> 
> 
> akkor a speciális tridiagonális algoritmus **garantáltan végrehajtható és numerikusan teljesen stabil főelemkiválasztás (sorcsere) nélkül is**. A számítógépes kerekítési hibák nem fognak felerősödni.
