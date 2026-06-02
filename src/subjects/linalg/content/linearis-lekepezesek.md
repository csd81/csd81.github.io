# Lineáris leképezések

<!-- OCR of "Lin_lekep_info.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens). 19 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Lineáris leképezés fogalma

**Lineáris leképezés:** Az $A:\mathbb{R}^m\to\mathbb{R}^n$ típusú fv.-t lineáris leképezésnek nevezzük, ha bármely $\underline x,\underline y\in\mathbb{R}^m$, $\lambda\in\mathbb{R}$ esetén:
$$A(\underline x+\underline y)=A(\underline x)+A(\underline y)\qquad\text{additív}$$
$$A(\lambda\underline x)=\lambda\cdot A(\underline x)\qquad\text{homogén}$$

Megjegyzések:
- Ha speciálisan $m=n$, akkor **lineáris transzformáció**ról beszélünk.
- Ha az $A$ leképezés $\mathbb{R}^m\to\mathbb{R}^n$ típusú, akkor $\operatorname{dom}(A)=\mathbb{R}^m$, $\operatorname{im}(A)\subseteq\mathbb{R}^n$.

## Lineáris leképezések tulajdonságai (Állítások)

- Bármely lineáris leképezés nullvektorhoz nullvektort rendel.
- Ha $\underline v_1,\underline v_2,\dots,\underline v_k\in\mathbb{R}^m$, $\lambda_1,\lambda_2,\dots\lambda_k\in\mathbb{R}$, akkor
$$A(\lambda_1\underline v_1+\dots+\lambda_k\underline v_k)=\lambda_1\cdot A(\underline v_1)+\dots+\lambda_k\cdot A(\underline v_k)$$
- Legyen $A:\mathbb{R}^m\to\mathbb{R}^n$ lin. leképezés, $B=\{\underline b_1,\dots,\underline b_m\}$ bázis $\mathbb{R}^m$-ben. Ekkor bármely $\underline x\in\mathbb{R}^m$ esetén az $A(\underline x)$ képvektorra:

  ha $\underline x=\lambda_1\underline b_1+\dots+\lambda_m\underline b_m$, akkor
$$A(\underline x)=\lambda_1 A(\underline b_1)+\dots+\lambda_m A(\underline b_m),$$
  azaz a képvektort egyértelműen meghatározzák a bázisvektorok képei.

## Magtér, képtér

**Lineáris leképezés magtere:** Legyen $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés. Az $A$ leképezés magtere olyan $\mathbb{R}^m$-beli vektorokból áll, amelyekhez $A$ az $\mathbb{R}^n$ nullvektorát rendeli:
$$\ker(A)=\left\{\underline x\in\mathbb{R}^m\mid A(\underline x)=\underline o\right\}$$
Megjegyzés: Minden lineáris leképezés magtere tartalmazza a nullvektort.

**Lineáris leképezés képtere:** a képvektorok halmaza.
$$\operatorname{im}(A)=\left\{A(\underline x)\in\mathbb{R}^n\mid\underline x\in\mathbb{R}^m\right\}$$
Megjegyzés: Igazolható, hogy minden lineáris leképezésnél a magtér altér $\mathbb{R}^m$-ben, a képtér altér $\mathbb{R}^n$-ben.

## Lineáris leképezés mátrixa

**Lineáris leképezés mátrixa:** Legyen $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés, $\underline e_1,\dots,\underline e_m$ a kanonikus bázis $\mathbb{R}^m$-ben. Az $A$ lin. leképezés (kanonikus bázisokra vonatkozó) mátrixán azt az $n\times m$-es mátrixot értjük, amelynek oszlopvektorai az $A(\underline e_1),\dots,A(\underline e_m)$ képvektorok.

Jel.: $M(A)$, $A$

Megjegyzés: Az $\underline x\in\mathbb{R}^m$ vektor képe az $M(A)\cdot\underline x$ mátrixszorzással is megkapható, ahol $\underline x$-et oszlopvektorként írjuk fel.

## Műveletek lineáris leképezésekkel

**Lineáris leképezések összege:** Legyenek $A:\mathbb{R}^m\to\mathbb{R}^n$, $B:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezések.

Az $A$ és $B$ összege:
$$(A+B)(\underline x)=A(\underline x)+B(\underline x),\quad\text{minden }\mathbb{R}^m\text{-beli }\underline x\text{-re.}$$

Igazolhatóak az alábbiak:
- Az $A+B$ leképezés is lineáris.
- $M(A+B)=M(A)+M(B)$

## Műveletek lineáris leképezésekkel (folyt.)

**Lineáris leképezés skalárszorosa:** Legyen $A:\mathbb{R}^m\to\mathbb{R}^n$, $\lambda\in\mathbb{R}$.

Ekkor az $A$ leképezés $\lambda$-szorosa:
$$(\lambda\cdot A)(\underline x)=\lambda\cdot A(\underline x),\quad\text{minden }\mathbb{R}^m\text{-beli }\underline x\text{-re.}$$

Igazolhatóak az alábbiak:
- A $\lambda\cdot A$ leképezés is lineáris.
- $M(\lambda\cdot A)=\lambda\cdot M(A)$

## Műveletek lineáris leképezésekkel (folyt.)

**Lineáris leképezések összetétele (kompozíciója):** Legyenek $A:\mathbb{R}^m\to\mathbb{R}^n$ és $B:\mathbb{R}^\ell\to\mathbb{R}^m$ lin. leképezések. Ekkor az $A\circ B:\mathbb{R}^\ell\to\mathbb{R}^n$ leképezés is lineáris.

Igazolható:
$$M(A\circ B)=M(A)\cdot M(B)$$

Megjegyzés: A fentiek alapján lineáris leképezések és mátrixok között kölcsönösen egyértelmű, művelettartó megfeleltetés létesíthető.

## Speciális lineáris leképezések

**Identikus leképezés:**
$$id_{\mathbb{R}^n}:\mathbb{R}^n\to\mathbb{R}^n,\ \underline x\mapsto\underline x\qquad\text{mátrixa: }M(id_{\mathbb{R}^n})=E_{n\times n}$$

**$k$-adik projekció (vetítő) függvény:**
$$pr_k:\mathbb{R}^n\to\mathbb{R},\ (x_1,\dots,x_k,\dots,x_n)\mapsto x_k\qquad\text{mátrixa: }M(pr_k)=[0\dots1\dots0]$$
*(az $1$ a $k$-adik helyen áll)*

**$k$-adik injekció (beágyazó) függvény:**
$$in_k:\mathbb{R}\to\mathbb{R}^n,\ x\mapsto(0,\dots,0,x,0,\dots,0)\qquad\text{mátrixa: }M(in_k)=\begin{bmatrix}0\\\vdots\\1\\\vdots\\0\end{bmatrix}\ \ (\text{az }1\text{ a }k\text{-adik helyen})$$

## Lineáris leképezés rangja

**Lineáris leképezés rangja:** Az $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés rangján a képtér dimenzióját értjük:
$$r(A)=\dim(\operatorname{im}(A))$$

Igazolható, hogy minden $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezésre:
$$r(A)=r(M(A))$$

## Lineáris leképezésekre vonatkozó további állítások

- Az $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés injektív (invertálható) $\Leftrightarrow\ker(A)=\{\underline o\}$.
- Bármely $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés esetén lineárisan összefüggő vektorok képvektorai is lineárisan összefüggőek.
- Az $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés injektív (invertálható) $\Leftrightarrow$ lineárisan független vektorok képvektorai is lineárisan függetlenek.
- Az $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés ráképezés $\Leftrightarrow$ generátorrendszer képe is generátorrendszer.
- Az $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés bijektív $\Leftrightarrow$ bázis képe is bázis.

## Lineáris transzformáció determinánsa

Az $A:\mathbb{R}^n\to\mathbb{R}^n$ lineáris transzformáció determinánsán mátrixának determinánsát értjük:
$$\det(A)=\det(M(A)).$$

Megjegyzés: Lineáris transzformáció mátrixa mindig négyzetes!

## Lineáris transzformáció invertálhatósága

Lin. transzformáció invertálhatóságának feltétele:
- Az $A:\mathbb{R}^n\to\mathbb{R}^n$ lin. transzformáció invertálható $\Leftrightarrow$ az $A$ lin. transzformáció mátrixa invertálható.
- Az $A:\mathbb{R}^n\to\mathbb{R}^n$ lin. transzformáció invertálható $\Leftrightarrow\det(A)=\det(M(A))\ne 0$.

Ha az $A:\mathbb{R}^n\to\mathbb{R}^n$ lin. transzformáció invertálható, akkor az inverz transzformáció is lineáris és az inverz transzformáció mátrixa:
$$M(A^{-1})=(M(A))^{-1}.$$

## Lin. transzformáció sajátértéke, sajátvektora, sajátaltere

1. Legyen $A:\mathbb{R}^n\to\mathbb{R}^n$ típusú lineáris transzformáció. Az $A$ lineáris transzformáció **sajátértékének** nevezzük a $\lambda\in\mathbb{R}$ számot, ha van olyan $\underline v\in\mathbb{R}^n$, $\underline v\ne\underline o$ vektor, amelyre $A(\underline v)=\lambda\cdot\underline v$ teljesül.

   Ekkor a $\underline v\in\mathbb{R}^n$ vektort a $\lambda$ sajátértékhez tartozó **sajátvektor**nak nevezzük.

2. Az $A:\mathbb{R}^n\to\mathbb{R}^n$ lineáris transzformáció **sajátalterét** olyan $\underline v\in\mathbb{R}^n$ vektorok alkotják, amelyekre $A(\underline v)=\lambda\cdot\underline v$ teljesül. Jel.: $H(\lambda)$.

3. A $H(\lambda)$ sajátaltér dimenzióját a $\lambda$ sajátérték **geometriai multiplicitásának** nevezzük.

## Lin. transzformáció sajátértéke, sajátvektora, sajátaltere (folyt.)

Megjegyzések:
1. A $H(\lambda)$ sajátaltér vektorai a $\lambda$ sajátértékhez tartozó sajátvektorok és a nullvektor.
2. Igazolható, hogy a $H(\lambda)$ sajátaltér (ahogy az elnevezés is mutatja) altér $\mathbb{R}^n$-ben.

Állítás:

Egy lineáris transzformáció különböző sajátértékekhez tartozó sajátvektorai lineárisan függetlenek.

Következmény:

Egy $A:\mathbb{R}^n\to\mathbb{R}^n$ lineáris transzformációnak legfeljebb $n$ darab különböző sajátértéke lehet.

## Négyzetes mátrix sajátértéke, sajátvektora

Legyen $A$ $n\times n$-es mátrix. Az $A$ mátrix **sajátértékének** nevezzük a $\lambda\in\mathbb{R}$ számot, ha van olyan $\underline v$ $n\times 1$-es oszlopvektor, ahol $\underline v\ne\underline o$, és amelyre $A\cdot\underline v=\lambda\cdot\underline v$ teljesül.

Ekkor a $\underline v$ oszlopvektort a $\lambda$ sajátértékhez tartozó **sajátvektor**nak nevezzük.

Megjegyzés:
1. $\underline v$ pontosan akkor $\lambda$ sajátértékhez tartozó sajátvektora az $A$ négyzetes mátrixnak, ha nemtriviális megoldása az $(A-\lambda\cdot E)\cdot\underline x=\underline o$ homogén egyenletrendszernek.
2. Az $(A-\lambda\cdot E)\cdot\underline x=\underline o$ homogén egyenletrendszernek pontosan akkor van triviálistól különböző megoldása, ha $\det(A-\lambda\cdot E)=0$.

## Karakterisztikus polinom, karakterisztikus egyenlet

1. Legyen $A$ $n\times n$-es mátrix. Az $A$ négyzetes mátrix **karakterisztikus polinomján** a $P(\lambda)=\det(A-\lambda\cdot E)$ polinomot, **karakterisztikus egyenletén** a $P(\lambda)=\det(A-\lambda\cdot E)=0$ egyenletet értjük.

2. Lineáris transzformáció **karakterisztikus polinomján** mátrixának karakterisztikus polinomját értjük. Lineáris transzformáció **karakterisztikus egyenletén** mátrixának karakterisztikus egyenletét értjük.

Megjegyzések:
1. Ha $A$ $n\times n$-es mátrix, akkor a karakterisztikus polinom $\lambda$-ra nézve $n$-ed fokú polinom, míg a karakterisztikus egyenlet $n$-ed fokú algebrai egyenlet.
2. A sajátértékek a karakterisztikus egyenlet gyökei.
3. A $\lambda$ sajátérték **algebrai multiplicitása** az a szám, amely megmutatja, hogy $\lambda$ hányszoros gyöke a $P(\lambda)=0$ karakterisztikus egyenletnek.
4. Igazolható, hogy egy $\lambda$ sajátérték geometriai multiplicitása mindig kisebb vagy egyenlő, mint az algebrai multiplicitás.

## Összefoglalás: A sajátértékek, sajátvektorok meghatározása

Adott: $A:\mathbb{R}^n\to\mathbb{R}^n$ lineáris transzformáció.

1. Felírjuk az $A$ lin. transzformáció mátrixát. $\Rightarrow A_{n\times n}$
2. Felírjuk a karakterisztikus egyenletet: $P(\lambda)=\det(A-\lambda\cdot E)=0$
3. Megoldjuk a karakterisztikus egyenletet. $\Rightarrow\lambda$ sajátértékek; $\lambda$ hányszoros gyöke a karakterisztikus egyenletnek? $\Rightarrow$ algebrai multiplicitás
4. Minden $\lambda$ sajátérték esetén az ismert $\lambda$ sajátértékkel felírjuk az $(A-\lambda\cdot E)\cdot\underline x=\underline o$ homogén lin. egyenletrendszert és bázistranszformációval megoldjuk azt. $\Rightarrow M$ megoldáshalmaz
5. A $\lambda$ sajátértékű sajátvektorok összessége: $M\setminus\{\underline o\}$
6. A $\lambda$ sajátértékű sajátaltér: $H(\lambda)=M$
7. A $\lambda$ sajátérték geometriai multiplicitása: $\dim(H(\lambda))$

## Cayley-Hamilton tétel

Minden lineáris transzformáció illetve négyzetes mátrix gyöke a saját karakterisztikus egyenletének. Azaz:

1. Legyen $A:\mathbb{R}^n\to\mathbb{R}^n$ lineáris transzformáció, melynek a karakterisztikus egyenlete: $P(\lambda)=a_n\lambda^n+\dots+a_1\lambda+a_0=0$.

   Ekkor: $P(A)=a_nA^n+\dots+a_1A+a_0\,id_{\mathbb{R}^n}=O$, ahol $O:\mathbb{R}^n\to\mathbb{R}^n$, $\underline x\mapsto\underline o$ az azonosan nulla leképezés.

2. Legyen $A$ $n\times n$-es mátrix, melynek a karakterisztikus egyenlete: $P(\lambda)=a_n\lambda^n+\dots+a_1\lambda+a_0=0$.

   Ekkor: $P(A)=a_nA^n+\dots+a_1A+a_0E=O$, ahol $O$ az $n\times n$-es nullmátrix.
