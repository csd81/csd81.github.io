# Mátrixok

<!-- OCR of "Matrixok.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 24 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Mátrix

**Mátrix:** téglalap alakú számtáblázat
$$A_{m\times n}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\dots&a_{mn}\end{pmatrix}$$
Jelölés: $A$, $A_{m\times n}$, $(a_{ij})_{m\times n}$

- **Mátrix típusa (rendje):** $m\times n$
  - $m$: sorok száma
  - $n$: oszlopok száma
- **Mátrix $(i,j)$-edik eleme:** $a_{ij}$
  - $i$: sorindex, $i=1,\dots,m$
  - $j$: oszlopindex, $j=1,\dots,n$

## Egyenlő mátrixok, mátrix transzponáltja

Két mátrix egyenlő, ha típusuk megegyezik és a megfelelő elemeik rendre megegyeznek.

**Mátrix transzponáltja:** Az $A$ $m\times n$-es mátrix transzponáltján azt az $n\times m$-es mátrixot értjük, amelyet az $A$ mátrixból a sorok és oszlopok felcserélésével kapunk.
$$A_{m\times n}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\dots&a_{mn}\end{pmatrix}\Rightarrow A^T_{n\times m}=\begin{pmatrix}a_{11}&a_{21}&\dots&a_{m1}\\a_{12}&a_{22}&\dots&a_{m2}\\\vdots&\vdots&\ddots&\vdots\\a_{1n}&a_{2n}&\dots&a_{mn}\end{pmatrix}$$

## Speciális mátrixok

- **Sorvektor:** $(1\times n)$-es mátrix, Jel.: $\underline a=(a_1,\dots,a_n)$
- **Oszlopvektor:** $(n\times 1)$-es mátrix, Jel.: $\underline a=\begin{pmatrix}a_1\\\vdots\\a_n\end{pmatrix}$
- **Négyzetes mátrix:** $(n\times n)$-es mátrix
$$A_{n\times n}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{n1}&a_{n2}&\dots&a_{nn}\end{pmatrix}$$
  **főátló:** $a_{11},a_{22},\dots,a_{nn}$

## Speciális mátrixok (folyt.)

**Diagonális mátrix:** olyan négyzetes mátrix, amelynek a főátlón kívüli elemei mind nullák.
$$A_{n\times n}=\begin{pmatrix}a_{11}&0&\dots&0\\0&a_{22}&\dots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\dots&a_{nn}\end{pmatrix}$$

**Szimmetrikus mátrix:** olyan $A=(a_{ij})_{n\times n}$ négyzetes mátrix, melyben $a_{ij}=a_{ji}$, $i,j=1,\dots,n$.

Megjegyzés: $A$ szimmetrikus $\Leftrightarrow A=A^T$

## Speciális mátrixok (folyt.)

**Egységmátrix:** olyan diagonális mátrix, amelynek főátlójában egyesek állnak.
$$E_{n\times n}=\begin{pmatrix}1&0&\dots&0\\0&1&\dots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\dots&1\end{pmatrix}$$

**Nullmátrix:** olyan mátrix, amelynek minden eleme nulla.
$$0_{m\times n}=\begin{pmatrix}0&0&\dots&0\\0&0&\dots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\dots&0\end{pmatrix}$$

## Mátrixműveletek

**Mátrixok összeadása:** Legyen $A=(a_{ij})_{m\times n}$ és $B=(b_{ij})_{m\times n}$ két azonos méretű mátrix. Ekkor $A$ és $B$ összege:
$$A+B=(a_{ij}+b_{ij})_{m\times n}$$

**Mátrix skalárral való szorzása:** Legyen $A=(a_{ij})_{m\times n}$ és $\lambda\in\mathbb{R}$. Ekkor az $A$ mátrix $\lambda$-szorosa:
$$\lambda\cdot A=(\lambda\cdot a_{ij})_{m\times n}$$

**Két mátrix különbsége:** származtatott művelet
$$A-B=A+(-1)\cdot B=(a_{ij}-b_{ij})_{m\times n}$$

## Az összeadás és a skalárral való szorzás tulajdonságai

A mátrixösszeadás és skalárral való szorzás tulajdonságai:
- $(A+B)+C=A+(B+C)$
- $A+B=B+A$
- $A+0=A$
- $(\lambda+\mu)\cdot A=\lambda\cdot A+\mu\cdot A$
- $\lambda\cdot(A+B)=\lambda\cdot A+\lambda\cdot B$

Megjegyzés: a $(-1)\cdot A$ mátrixot az $A$ mátrix ellentettjének nevezzük és $-A$-val jelöljük.

Ekkor: $A+(-A)=0$

## Mátrixműveletek (folyt.)

**Mátrixok szorzása:** Legyenek $A=(a_{ij})_{m\times n}$ és $B=(b_{jk})_{n\times p}$ mátrixok. Ekkor az $A$ és $B$ mátrixok szorzata az a $C$ $m\times p$-s mátrix, amelynek $(i,k)$-adik eleme:
$$c_{ik}=a_{i1}\cdot b_{1k}+a_{i2}\cdot b_{2k}+\dots+a_{in}\cdot b_{nk}$$

**Figyelem!** Két mátrix összeszorozhatóságának feltétele, hogy az első mátrix oszlopainak száma megegyezzen a második mátrix sorainak számával.

**Mátrix hatványa:** Ha $A$ négyzetes mátrix, akkor
$$A^n=A\cdot A\cdot\dots\cdot A\quad(n\text{-szer szorozzuk }A\text{-t önmagával, ahol }n\text{ pozitív egész})$$

## A mátrixszorzás tulajdonságai

A mátrixszorzás tulajdonságai:
- Általában: $A\cdot B\ne B\cdot A$ (nem kommutatív)
- Asszociatív, azaz ha az $A\cdot(B\cdot C)$ szorzat létezik, akkor az $(A\cdot B)\cdot C$ szorzat is létezik és
$$A\cdot(B\cdot C)=(A\cdot B)\cdot C$$
- $A\cdot(B+C)=A\cdot B+A\cdot C$ (balról disztributív)
- $(A+B)\cdot C=A\cdot C+B\cdot C$ (jobbról disztributív)
- Zérusosztós művelet, azaz két mátrix szorzata úgy is lehet nullmátrix, hogy a két mátrix egyike sem nullmátrix.
- $A_{m\times n}\cdot 0_{n\times p}=0_{m\times p}$, illetve $0_{m\times n}\cdot A_{n\times p}=0_{m\times p}$
- $A_{m\times n}\cdot E_{n\times n}=A_{m\times n}$, illetve $E_{m\times m}\cdot A_{m\times n}=A_{m\times n}$

## Mátrix oszlopvektorai

Tekintsünk egy mátrixot!
$$A_{m\times n}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\dots&a_{mn}\end{pmatrix}$$

Oszlopvektorok: $A=[\underline a_1\ \dots\ \underline a_n]$
$$\underline a_1=\begin{pmatrix}a_{11}\\a_{21}\\\vdots\\a_{m1}\end{pmatrix},\ \dots,\ \underline a_n=\begin{pmatrix}a_{1n}\\a_{2n}\\\vdots\\a_{mn}\end{pmatrix}$$
*$n$ darab $m$ dimenziós oszlopvektor*

## Mátrix sorvektorai

Tekintsünk egy mátrixot!
$$A_{m\times n}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\dots&a_{mn}\end{pmatrix}$$

Sorvektorok: $A_{m\times n}=\begin{bmatrix}\underline a^1\\\vdots\\\underline a^m\end{bmatrix}$
$$\underline a^1=(a_{11},\dots,a_{1n}),\ \dots,\ \underline a^m=(a_{m1},\dots,a_{mn})$$
*$m$ darab $n$ dimenziós sorvektor*

## Mátrix rangja

**Mátrix oszloprangja:** Egy mátrix oszloprangján az oszlopvektoraiból álló vektorhalmaz rangját értjük, azaz ha $A_{m\times n}=[\underline a_1\ \dots\ \underline a_n]$, akkor $r_o(A)=r(\{\underline a_1,\dots,\underline a_n\})$.

**Mátrix sorrangja:** Egy mátrix sorrangján a sorvektoraiból álló vektorhalmaz rangját értjük, azaz ha $A_{m\times n}=\begin{bmatrix}\underline a^1\\\vdots\\\underline a^m\end{bmatrix}$, akkor $r_s(A)=r(\{\underline a^1,\dots,\underline a^m\})$.

Igazolható, hogy bármely mátrix esetén a sor- és oszloprang megegyezik. Ezt a közös értéket röviden a **mátrix rangjának** nevezzük:
$$r(A)=r_s(A)=r_o(A)$$

## A transzponálásra vonatkozó szabályok

A transzponálásra vonatkozó szabályok:
- $(A^T)^T=A$
- $(A+B)^T=A^T+B^T$
- $(\lambda\cdot A)^T=\lambda\cdot A^T$
- $(A\cdot B)^T=B^T\cdot A^T$
- $r(A)=r(A^T)$

## Négyzetes mátrix inverze

**Invertálhatóság, inverzmátrix:** Legyen $A$ egy $n\times n$-es négyzetes mátrix. $A$-t invertálhatónak nevezzük, ha van olyan $X$ $n\times n$-es mátrix, melyre $A\cdot X=X\cdot A=E_{n\times n}$.

Ekkor $X$-t az $A$ mátrix inverzének hívjuk és $A^{-1}$-gyel jelöljük.

**Az invertálhatóság feltétele:** Az $A$ $n\times n$-es mátrix invertálható $\Leftrightarrow r(A)=n$.

## Mátrix invertálása bázistranszformációval

Legyen $A_{n\times n}=[\underline a_1\ \dots\ \underline a_n]$ egy négyzetes mátrix. Ekkor az $A^{-1}$ inverzmátrix az $\underline e_1,\dots,\underline e_n$ kanonikus bázisvektoroknak az $\underline a_1,\dots,\underline a_n$ vektorokra, mint bázisra vonatkozó koordinátáiból épül fel.

*A bázistranszformációs séma: a bal oldali táblázatban a sorok az $\underline e_1,\dots,\underline e_n$ bázisvektorok, az oszlopok az $\underline a_1\ \dots\ \underline a_n\mid\underline e_1\ \dots\ \underline e_n$ vektorok ($A\mid E$). A teljes bázistranszformáció után a sorok az $\underline a_1,\dots,\underline a_n$, az oszlopok az $\underline e_1\ \dots\ \underline e_n$ vektorok, a táblázat tartalma pedig $A^{-1}$:*
$$[\,A\mid E\,]\Rightarrow[\,E\mid A^{-1}\,]$$

## Az invertálás szabályai

Az invertálás szabályai: Legyenek $A$ és $B$ invertálható $n\times n$-es mátrixok. Ekkor:
- $A^{-1}$ invertálható és $(A^{-1})^{-1}=A$.
- $A\cdot B$ invertálható és $(A\cdot B)^{-1}=B^{-1}\cdot A^{-1}$.
- $A^T$ invertálható és $(A^T)^{-1}=(A^{-1})^T$.
- $\lambda\cdot A$ invertálható és $(\lambda\cdot A)^{-1}=\dfrac1\lambda\cdot A^{-1}$, ahol $\lambda$ nullától különböző valós szám.

## Négyzetes mátrix determinánsa

**Részmátrix:** Legyen $A=(a_{ij})$ $n\times n$-es mátrix. Az $A$ mátrix $a_{ij}$ elemhez tartozó részmátrixán azt az $(n-1)\times(n-1)$-es mátrixot értjük, amelyet az $A$ mátrixból annak $i$-edik sorát és $j$-edik oszlopát elhagyva kapunk. Jel.: $A_{ij}$.

**Négyzetes mátrix determinánsa:** (rekurzív definíció)
1. Legyen $A=[a_{11}]$ $1\times 1$-es mátrix. Ekkor $A$ determinánsa: $\det(A)=a_{11}$.
2. Legyen $A=(a_{ij})$ $n\times n$-es mátrix, ahol $n\ge 2$. Ekkor $A$ determinánsa: (első sor szerinti kifejtés)
$$\det(A)=\sum_{j=1}^n(-1)^{1+j}a_{1j}\det(A_{1j})$$

## Négyzetes mátrix determinánsa (folyt.)

A definícióból adódó észrevételek:
- **$2\times 2$-es mátrix determinánsa:**
$$\det(A)=a_{11}\cdot a_{22}-a_{12}\cdot a_{21}$$
(„főátlóbeli elemek szorzata mínusz mellékátlóbeli elemek szorzata")
- A determináns meghatározásának számolási igénye rohamosan növekszik a mátrix méretével.
- Diagonális mátrix determinánsa egyenlő a főátlóbeli elemek szorzatával.

## Sorok és oszlopok szerinti kifejtés

Igazolható, hogy egy négyzetes mátrix determinánsa bármelyik sor ill. oszlop szerint kifejtve megkapható.
- Az $i$-edik sor szerinti kifejtés képlete:
$$\det(A)=\sum_{j=1}^n(-1)^{i+j}a_{ij}\det(A_{ij})$$
- A $j$-edik oszlop szerinti kifejtés képlete:
$$\det(A)=\sum_{i=1}^n(-1)^{i+j}a_{ij}\det(A_{ij})$$

Következmény: $\det(A)=\det(A^T)$.

## A determináns tulajdonságai

A determináns tulajdonságai egyaránt igazak sorokra és oszlopokra megfogalmazva.
1. Ha a mátrix valamely oszlopában csupa nulla áll, akkor a determináns értéke 0.
2. Ha a mátrix két tetszőleges oszlopát felcseréljük, a determináns $-1$-szeresére változik.
3. Ha a mátrixban van két azonos oszlop, akkor a determináns értéke 0.
4. Legyen $A_{n\times n}=[\underline a_1\dots\underline a_j\dots\underline a_n]$, ahol $\underline a_j=\underline a_j'+\underline a_j''$. Ekkor:
$$\det(A)=\det([\underline a_1\dots\underline a_j'\dots\underline a_n])+\det([\underline a_1\dots\underline a_j''\dots\underline a_n]).$$

## A determináns tulajdonságai (folyt.)

5. Legyen $A_{n\times n}=[\underline a_1\dots\underline a_j\dots\underline a_n]$, ahol $\underline a_j=\lambda\cdot\underline a_j'$. Ekkor:
$$\det(A)=\lambda\cdot\det([\underline a_1\dots\underline a_j'\dots\underline a_n]).$$
6. Legyen $A$ $n\times n$-es mátrix és $\lambda\in\mathbb{R}$. Ekkor:
$$\det(\lambda\cdot A)=\lambda^n\cdot\det(A)$$
7. Ha a mátrix valamely oszlopához hozzáadjuk egy másik oszlop skalárszorosát (azaz ún. **elemi oszlopátalakítást** hajtunk végre), akkor a determináns értéke nem változik.
8. Szorzás-tétel: Legyenek $A$ és $B$ $n\times n$-es mátrixok. Ekkor:
$$\det(A\cdot B)=\det(A)\cdot\det(B).$$
9. Legyen $A$ invertálható mátrix. Ekkor:
$$\det(A^{-1})=1/\det(A).$$

## Négyzetes mátrixok osztályozása

**Nemszinguláris mátrixok**
- oszlopvektorok lineárisan függetlenek
- $r(A_{n\times n})=n$ (a mátrix teljes rangú)
- invertálható
- $\det(A)\ne 0$

**Szinguláris mátrixok**
- oszlopvektorok lineárisan összefüggőek
- $r(A_{n\times n})<n$ (a mátrix nem teljes rangú)
- nem invertálható
- $\det(A)=0$

## Négyzetes mátrix adjungáltja és az inverzmátrix

**Négyzetes mátrix adjungáltja:** Legyen $A=(a_{ij})_{n\times n}$ egy négyzetes mátrix. Ekkor az $A$ mátrix adjungáltja az az $n\times n$-es mátrix, amelynek $(i,j)$-edik eleme: $(-1)^{i+j}\cdot\det(A_{ji})$. Jel.: $\operatorname{adj}(A)$

Megjegyzés: A fenti definíció alapján levezethető, hogy egy $2\times 2$-es mátrix adjungáltját megkaphatjuk úgy, hogy a főátlóban lévő elemeket megcseréljük, a mellékátlóban lévő elemeket pedig szorozzuk $-1$-gyel.

**Az adjungált és az inverzmátrix kapcsolata:** Legyen az $A$ négyzetes mátrix invertálható. Ekkor:
$$A^{-1}=(1/\det(A))\cdot\operatorname{adj}(A).$$
