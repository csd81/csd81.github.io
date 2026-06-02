# Lineáris egyenletrendszerek

<!-- OCR of "Lin_egy_nappali.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 19 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Leontieff-modellek

**Leontieff-modellek:** input-output modellek a gazdaság leírására
- legyen $n$ féle, egymással összefüggésben lévő ágazat, amelyek mindegyike egy-egy jószágot termel;
- a saját jószágának termeléséhez minden ágazatnak szüksége van inputra legalább egy másik ágazat jószágából;
- minden ágazatnak az általa előállított jószágból ki kell elégítenie a többi ágazat igényeit és egy bizonyos külső igényt is (végső kereslet);

## Leonteff-modellek (folyt.)

Adatok:
- $a_{ij}$: a $j$-edik jószág egységnyi mennyiségének előállításakor az $i$-edik jószágból felhasznált mennyiség; $(i,j=1,\dots,n)$ — **input (vagy termelési) együtthatók**
- $b_i$: az $i$-edik jószág iránti külső igény; $(i=1,\dots,n)$ — **végső kereslet**

Probléma: Mennyit termeljenek az egyes ágazatok az egyes jószágokból, hogy a többi ágazat igényét és a végső keresletet biztosítani tudják?

## Leontieff-modellek (folyt.)

- Legyen $x_1,\dots,x_n$ az egyes jószágokból előállított mennyiség.
- Feltesszük, hogy az input követelmények egyenesen arányosak a megtermelt outputokkal, azaz $x_j$ mennyiségű $j$-edik jószág előállításához az $i$-edik jószágból felhasznált mennyiség: $a_{ij}\cdot x_j$.
- Ha az egyes jószágokból $x_1,\dots,x_n$ mennyiségeket állítunk elő, akkor ehhez az $i$-edik jószágból felhasznált összmennyiség: $a_{i1}\cdot x_1+a_{i2}\cdot x_2+\dots+a_{in}\cdot x_n$
- Az $i$-edik jószágra vonatkozó kereslet és kínálat egyensúlya szerint: $x_i=a_{i1}\cdot x_1+a_{i2}\cdot x_2+\dots+a_{in}\cdot x_n+b_i$

## A Leontieff-rendszerek általános alakja

A teljes modell:
$$\begin{aligned}
x_1&=a_{11}\cdot x_1+a_{12}\cdot x_2+\dots+a_{1n}\cdot x_n+b_1\\
x_2&=a_{21}\cdot x_1+a_{22}\cdot x_2+\dots+a_{2n}\cdot x_n+b_2\\
&\ \ \vdots\\
x_n&=a_{n1}\cdot x_1+a_{n2}\cdot x_2+\dots+a_{nn}\cdot x_n+b_n
\end{aligned}$$

Rendezve az egyenletrendszert:
$$\begin{aligned}
(1-a_{11})\cdot x_1-a_{12}\cdot x_2-\dots-a_{1n}\cdot x_n&=b_1\\
-a_{21}\cdot x_1+(1-a_{22})\cdot x_2-\dots-a_{2n}\cdot x_n&=b_2\\
&\ \ \vdots\\
-a_{n1}\cdot x_1-a_{n2}\cdot x_2-\dots+(1-a_{nn})\cdot x_n&=b_n
\end{aligned}$$

## Leontieff-modellek (folyt.)

Megjegyzés:

A fenti lineáris egyenletrendszer olyan $(x_1,\dots,x_n)$ megoldása érdekel bennünket, ahol az $x_i$ értékek nemnegatívak.

## Lineáris egyenletrendszerek általános alakja

**Általános (részletes) alak:**
$$\begin{aligned}
a_{11}\cdot x_1+\dots+a_{1n}\cdot x_n&=b_1\\
a_{21}\cdot x_1+\dots+a_{2n}\cdot x_n&=b_2\\
&\vdots\\
a_{m1}\cdot x_1+\dots+a_{mn}\cdot x_n&=b_m
\end{aligned}$$

*$m$ egyenlet, $n$ ismeretlen: $x_1,\dots,x_n$*

Jelölések:
$$\underline a_1=\begin{pmatrix}a_{11}\\\vdots\\a_{m1}\end{pmatrix},\ \underline a_2=\begin{pmatrix}a_{12}\\\vdots\\a_{m2}\end{pmatrix},\ \dots,\ \underline a_n=\begin{pmatrix}a_{1n}\\\vdots\\a_{mn}\end{pmatrix},\quad \underline b=\begin{pmatrix}b_1\\\vdots\\b_m\end{pmatrix},\quad \underline x=\begin{pmatrix}x_1\\\vdots\\x_n\end{pmatrix}$$

## Lin. egyenletrendszerek általános alakja (folyt.)

**Tömörebb alak:**
$$\underline a_1\cdot x_1+\underline a_2\cdot x_2+\dots+\underline a_n\cdot x_n=\underline b$$

Jelölés:
$$A=\begin{pmatrix}a_{11}&\dots&a_{1n}\\\vdots&&\vdots\\a_{m1}&\dots&a_{mn}\end{pmatrix}_{m\times n}\qquad\text{együtthatómátrix}$$

**Tömör alak:**
$$A\cdot\underline x=\underline b$$

## Homogén és inhomogén egyenletrendszerek

**Homogén egyenletrendszer:** Az $A\underline x=\underline b$ lineáris egyenletrendszert homogénnek nevezzük, ha $\underline b=\underline o$.

**Inhomogén egyenletrendszer:** Az $A\underline x=\underline b$ lineáris egyenletrendszert inhomogénnek nevezzük, ha $\underline b\ne\underline o$.

Megjegyzések:
- Az $A\underline x=\underline o$ homogén lineáris egyenletrendszer mindig megoldható, az $\underline x=\underline o$ megoldásvektort **triviális megoldásnak** nevezzük.
- Az $A\underline x=\underline b$ lineáris egyenletrendszert **konzisztensnek** nevezzük, ha megoldható, **inkonzisztensnek**, ha nem oldható meg.

## A megoldhatóság feltétele

Lineáris egyenletrendszerek megoldhatóságának szükséges és elégséges feltétele:

1. Az $A\underline x=\underline b$ lin. egyenletrendszer megoldható $\Leftrightarrow$ a $\underline b$ vektor előáll az $A$ együtthatómátrix oszlopvektorainak lineáris kombinációjával.
2. Az $A\underline x=\underline b$ lin. egyenletrendszer megoldható $\Leftrightarrow r(A)=r([A,\underline b])$, ahol $[A,\underline b]$ az egyenletrendszer **kibővített mátrixa:**
$$[A,\underline b]=\begin{pmatrix}a_{11}&\dots&a_{1n}&b_1\\\vdots&&\vdots&\vdots\\a_{m1}&\dots&a_{mn}&b_m\end{pmatrix}_{m\times(n+1)}.$$

## Lin. egyenletrendszer megoldása

Lin. egyenletrendszer megoldása:

Tegyük fel, hogy az $A\underline x=\underline b$ lin. egyenletrendszer megoldható, azaz $r(A)=r([A,\underline b])=k$.

Jelölje $B_{m\times k}$ az $A$ együtthatómátrix $k$ db lin. független oszlopvektorából felépülő mátrixot, továbbá $R_{m\times(n-k)}$ az $A$ együtthatómátrix maradék $n-k$ db oszlopvektorából felépülő mátrixot. A megfelelő indexű ismeretlenek alkossák az $\underline x_B$ és $\underline x_R$ vektorokat. Ekkor:
$$B\,\underline x_B+R\,\underline x_R=\underline b$$

## Lin. egyenletrendszer megoldása (folyt.)

Mivel a $B$ oszlopvektorai az $A$ együtthatómátrix oszlopvektorainak egy maximális lin. független részhalmazát képezik, így az $R$ oszlopvektorai és a $\underline b$ vektor előállnak a $B$ oszlopvektorainak lineáris kombinációjával. Ezért van olyan $D$ mátrix és $\underline d$ vektor, melyekre:
$$R=B\cdot D\quad\text{és}\quad\underline b=B\cdot\underline d,\ \text{ahol:}$$
- a $D$ mátrix az $R$ oszlopvektorainak a $B$ oszlopvektoraira vonatkozó koordinátáit tartalmazza,
- a $\underline d$ vektor a $\underline b$ vektornak a $B$ oszlopvektoraira vonatkozó koordinátáit tartalmazza.

Így:
$$B\,\underline x_B+B\cdot D\,\underline x_R=B\cdot\underline d,\quad\text{ebből:}\quad B(\underline x_B+D\,\underline x_R-\underline d)=\underline o.$$

## Lin. egyenletrendszer „megoldó képlete"

Innen, mivel $B$ oszlopvektorai lin. függetlenek:
$$\underline x_B+D\,\underline x_R-\underline d=\underline o,\quad\text{azaz:}$$

$$\boxed{\underline x_B=\underline d-D\,\underline x_R}\qquad\text{„megoldó képlet"}$$

- $\underline x_B$: a kötött ismeretlenek vektora
- $\underline x_R$: a szabad ismeretlenek vektora

A szabad ismeretlenek számát az egyenletrendszer **szabadsági fokának** hívjuk.

## Megoldásvektorok száma

Homogén lin. egyenletrendszer megoldásvektorainak számára vonatkozó állítások:

1. Az $A\underline x=\underline o$ homogén lin. egyenletrendszernek csak triviális megoldása van $\Leftrightarrow r(A)=n$, ahol $n$ az ismeretlenek száma.
2. Az $A\underline x=\underline o$ homogén lin. egyenletrendszernek van triviálistól különböző megoldása is $\Leftrightarrow r(A)<n$, ahol $n$ az ismeretlenek száma.

Megjegyzés: ebben az esetben az egyenletrendszernek végtelen sok megoldásvektora van.

## Homogén-inhomogén egyenletrendszer-pár

Homogén-inhomogén egyenletrendszer megoldáshalmazai közötti kapcsolat:

Tekintsük az $A\underline x=\underline o$ és $A\underline x=\underline b$ homogén-inhomogén egyenletrendszer-párt. Jelölje
- $M_0$ a homogén egyenletrendszer megoldáshalmazát,
- $M$ az inhomogén egyenletrendszer megoldáshalmazát,
- $\underline x_0$ az inhomogén egyenletrendszer egy rögzített megoldásvektorát.

Ekkor: $M=M_0+\{\underline x_0\}$.

## Lineáris egyenletrendszerek: összefoglalás

| Megoldásvektorok száma | Homogén lin. e.r. $A_{m\times n}\underline x=\underline o$ | Inhomogén lin. e.r. $A_{m\times n}\underline x=\underline b$ |
|---|---|---|
| **Nincs megoldás** (Az e.r. nem oldható meg.) | ------- | $r(A)<r([A,\underline b])$, $M=\emptyset$ |
| **1 db megoldásvektor** (Az e.r. egyértelműen megoldható.) | $r(A)=n$, $M_0=\{\underline o\}$ | $r(A)=r([A,\underline b])=n$, $M=\{\underline x_0\}$ |
| **Végtelen sok megoldásvektor** | $r(A)<n$, $M_0$ | $r(A)=r([A,\underline b])<n$, $M=M_0+\{\underline x_0\}$ |

## A Cramer-szabály

Tekintsük az $A\underline x=\underline b$ lin. egyenletrendszert, ahol az $A$ együtthatómátrix négyzetes: $A=[\underline a_1\ \underline a_2\ \dots\ \underline a_n]_{n\times n}$. Legyen
- $D=\det(A)$,
- $D_1=\det([\underline b\ \underline a_2\ \dots\ \underline a_n])$,
- $D_2=\det([\underline a_1\ \underline b\ \dots\ \underline a_n])$,
- …
- $D_n=\det([\underline a_1\ \underline a_2\ \dots\ \underline b])$.

Ekkor:
$$D\cdot x_k=D_k,\quad k=1,\dots,n.$$

## A Cramer-szabály következményei

Következmények:

1. Ha $D\ne 0$, akkor az egyenletrendszer egyértelműen megoldható és a megoldásvektor $k$-adik komponense: $x_k=D_k/D$, $k=1,\dots,n$.
2. Ha $D=0$ és valamely $k$-ra $D_k\ne 0$, akkor az egyenletrendszer nem oldható meg.
3. Ha $D=D_1=\dots=D_n=0$ és $r(A)=r([A,\underline b])$, akkor az egyenletrendszernek végtelen sok megoldásvektora van.

(Ebben az esetben a megoldásvektorok előállítására a Cramer-szabály nem alkalmas.)

## A Cramer-szabály következményei (folyt.)

4. Az $A\underline x=\underline o$ homogén lin. egyenletrendszernek csak triviális megoldása van $\Leftrightarrow D\ne 0$.
5. Az $A\underline x=\underline o$ homogén lin. egyenletrendszernek létezik triviálistól különböző megoldása is $\Leftrightarrow D=0$.

(Ebben az esetben az egyenletrendszernek végtelen sok megoldásvektora van, de ezeket a Cramer-szabállyal nem tudjuk előállítani.)
