# Absztrakt vektorterek

<!-- OCR of "Absztrakt vektorterek.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens, Pannon Egyetem). 19 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Absztrakt vektortér definíciója

Legyen $V$ egy halmaz, $\Gamma$ egy test (pl. valós vagy komplex számtest), és legyenek adottak a $+ : V\times V\to V$ és a $\cdot : \Gamma\times V\to V$ műveletek. Tegyük fel, hogy bármely $a, b, c\in V$, $\lambda,\mu\in\Gamma$ esetén

- **V1:** $(a+b)+c = a+(b+c)$ — (asszociativitás)
- **V2:** $a+b = b+a$ — (kommutativitás)
- **V3:** Létezik olyan $o\in V$ elem, hogy bármely $a\in V$ esetén $a+o=a$. — (nullelem létezése)
- **V4:** Bármely $a\in V$ esetén létezik olyan $a'\in V$, hogy $a+a'=o$, ahol $a'=(-1)\cdot a$, az $a$ ellentettje. — (ellentett létezése)
- **V5:** $(\lambda+\mu)\cdot a = \lambda\cdot a+\mu\cdot a$
- **V6:** $\lambda\cdot(a+b) = \lambda\cdot a+\lambda\cdot b$
- **V7:** $\lambda\cdot(\mu\cdot a) = (\lambda\cdot\mu)\cdot a$
- **V8:** $1\cdot a = a$

### Absztrakt vektortér definíciója (folyt.)

Ekkor $V$-t a $\Gamma$ test feletti **vektortérnek**, $V$ elemeit **vektoroknak**, $\Gamma$ elemeit **skalároknak** hívjuk.

$\Gamma=\mathbb{R}$ esetén *valós vektortérről*, $\Gamma=\mathbb{C}$ esetén *komplex vektortérről* beszélünk.

A V1–V8 tulajdonságokat *vektortér-axiómáknak* nevezzük.

## Analóg módon értelmezhető lin. algebrai fogalmak absztrakt vektorterekben

**Lineáris kombináció:**
Legyen $V$ egy $\Gamma$ test feletti vektortér. Legyenek $a_1, a_2, \dots, a_k$ $V$-beli vektorok és $\lambda_1,\lambda_2,\dots,\lambda_k\in\Gamma$ skalárok. Ekkor a $\lambda_1\cdot a_1+\lambda_2\cdot a_2+\dots+\lambda_k\cdot a_k\in V$ vektort az $a_1,\dots,a_k$ vektorok $\lambda_1,\dots,\lambda_k$ skalárokkal vett *lineáris kombinációjának* nevezzük.

**Triviális lineáris kombináció**

**Lineáris függetlenség, összefüggőség** véges sok vektorra.
*Kiegészítés:* Egy $H\subset V$ vektorhalmaz lineárisan független, ha minden véges részhalmaza lineárisan független. Ellenkező esetben $H$ lineárisan összefüggő.

**Rang**

**Generátorrendszer, bázis**

### Analóg módon értelmezhető lin. algebrai fogalmak (folyt.)

**Dimenzió:**
- Ha egy vektortérnek van véges bázisa, akkor igazolható, hogy a vektortér minden bázisa ugyanannyi vektorból áll. Ezt a számot *a vektortér dimenziójának* nevezzük.
- Ha egy vektortérnek nincs véges bázisa, akkor a vektorteret *végtelen dimenziósnak* hívjuk.

**Megjegyzés:** Véges dimenziós vektorterekben használható a bázistranszformáció algoritmusa.

## Példák absztrakt vektorterekre

1. $V=\mathbb{R}^n$, $\Gamma=\mathbb{R}$: $+$ és $\cdot$ művelet a tanult módon értelmezve — *valós vektortér*.

2. $V=\mathbb{C}^n$ a komplex számokból képzett rendezett $n$-esek halmaza, $\Gamma=\mathbb{R}$ vagy $\mathbb{C}$:
   - $\Gamma=\mathbb{R}$ esetén valós vektortér
   - $\Gamma=\mathbb{C}$ esetén komplex vektortér
   - $+$ és $\cdot$ művelet a tanult módon értelmezve
   - nullelem: $(0,\dots,0)$;
   - a $(z_1,\dots,z_n)\in\mathbb{C}^n$ ellentettje: $(-z_1,\dots,-z_n)$
   - $\Gamma=\mathbb{R}$ esetén bázis: $(1,\dots,0),(i,\dots,0),\dots,(0,\dots,1),(0,\dots,i)\Rightarrow 2n$ dimenziós vektortér
   - $\Gamma=\mathbb{C}$ esetén bázis: $(1,\dots,0),\dots,(0,\dots,1)\Rightarrow n$ dimenziós vektortér

### Példák absztrakt vektorterekre (folyt.)

3. $V=\mathbb{R}^{m\times n}$, a valós számokból képzett $m\times n$-es mátrixok halmaza, $\Gamma=\mathbb{R}$:
   - valós vektortér
   - $+$ és $\cdot$ művelet a tanult módon értelmezve
   - nullelem: $m\times n$-es nullmátrix
   - az $A_{m\times n}=\begin{pmatrix}a_{11}&a_{12}&\dots&a_{1n}\\a_{21}&a_{22}&\dots&a_{2n}\\\vdots&\vdots&\ddots&\vdots\\a_{m1}&a_{m2}&\dots&a_{mn}\end{pmatrix}$ ellentettje $-A_{m\times n}=\begin{pmatrix}-a_{11}&-a_{12}&\dots&-a_{1n}\\-a_{21}&-a_{22}&\dots&-a_{2n}\\\vdots&\vdots&\ddots&\vdots\\-a_{m1}&-a_{m2}&\dots&-a_{mn}\end{pmatrix}$
   - bázis: $\begin{pmatrix}1&0&\dots&0\\0&0&\dots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\dots&0\end{pmatrix},\begin{pmatrix}0&1&\dots&0\\0&0&\dots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\dots&0\end{pmatrix},\dots,\begin{pmatrix}0&0&\dots&0\\0&0&\dots&0\\\vdots&\vdots&\ddots&\vdots\\0&0&\dots&1\end{pmatrix}$
   - $m\cdot n$ dimenziós

### Példák absztrakt vektorterekre (folyt.)

4. $V=\mathbb{C}^{m\times n}$, a komplex számokból képzett $m\times n$-es mátrixok halmaza, $\Gamma=\mathbb{R}$ vagy $\Gamma=\mathbb{C}$:
   - $+$ és $\cdot$ művelet a tanult módon értelmezve
   - $\Gamma=\mathbb{R}$ esetén valós vektortér, $2m\cdot n$ dimenziós
   - $\Gamma=\mathbb{C}$ esetén komplex vektortér, $m\cdot n$ dimenziós

5. $V=L(\mathbb{R}^m,\mathbb{R}^n)=\{A:\mathbb{R}^m\to\mathbb{R}^n\mid A\text{ lineáris}\}$, az $\mathbb{R}^m\to\mathbb{R}^n$ típusú lineáris leképezések halmaza, $\Gamma=\mathbb{R}$:
   - $+$ és $\cdot$ művelet a tanult módon értelmezve
   - nullelem: $O:\mathbb{R}^m\to\mathbb{R}^n,\ \underline x\mapsto\underline o$
   - az $A:\mathbb{R}^m\to\mathbb{R}^n$ lineáris leképezés ellentettje $A':\mathbb{R}^m\to\mathbb{R}^n$ melyre $A'(\underline x)=-A(\underline x)$, minden $\underline x\in\mathbb{R}^m$ esetén
   - valós vektortér
   - igazolható, hogy $m\cdot n$ dimenziós

### Példák absztrakt vektorterekre (folyt.)

6. $V=P_\mathbb{R}$, a valós együtthatós polinomok halmaza, $\Gamma=\mathbb{R}$:
   - $+$ és $\cdot$ művelet pontonként
   - nullelem: $o:\mathbb{R}\to\mathbb{R},\ x\mapsto 0$ (azonosan nulla polinom)
   - a $p(x)=a_0+a_1\cdot x+a_2\cdot x^2+\dots+a_n\cdot x^n$ polinom ellentettje: $-p(x)=-a_0-a_1\cdot x-a_2\cdot x^2-\dots-a_n\cdot x^n$
   - valós vektortér
   - bázis: $q_0:\mathbb{R}\to\mathbb{R},x\mapsto 1$; $q_1:\mathbb{R}\to\mathbb{R},x\mapsto x$; $q_2:\mathbb{R}\to\mathbb{R},x\mapsto x^2$; $\dots$
   - végtelen dimenziós

7. $V=P_\mathbb{R}^n$, a legfeljebb $n$-ed fokú valós együtthatós polinomok halmaza, $\Gamma=\mathbb{R}$:
   - műveletek, nullelem, ellentett ua., mint előbb
   - valós vektortér
   - bázis: $q_0:\mathbb{R}\to\mathbb{R},x\mapsto 1$; $q_1:\mathbb{R}\to\mathbb{R},x\mapsto x$; $\dots$; $q_n:\mathbb{R}\to\mathbb{R},x\mapsto x^n$
   - $n+1$ dimenziós

### Példák absztrakt vektorterekre (folyt.)

8. $V=\mathbb{R}^\mathbb{N}$, a valós számokból álló végtelen számsorozatok halmaza, $\Gamma=\mathbb{R}$:
   - $+$ és $\cdot$ művelet a tanult módon
   - nullelem: $0,0,0,\dots$ (azonosan nulla sorozat)
   - az $(a_n)$ sorozat ellentettje: $(-a_n)$
   - valós vektortér
   - bázis: $a_1:1,0,0,\dots$; $a_2:0,1,0,\dots$; $a_3:0,0,1,\dots$; $\dots$
   - végtelen dimenziós

9. $V=\mathbb{R}^I=\{f:I\to\mathbb{R}\}$, az $I\subseteq\mathbb{R}$ intervallumon értelmezett valós függvények halmaza, $\Gamma=\mathbb{R}$:
   - műveletek pontonként
   - valós vektortér
   - végtelen dimenziós

### Példák absztrakt vektorterekre (folyt.)

10. $C(I)=\{f:I\to\mathbb{R}\mid f\text{ folytonos}\}$, $\Gamma=\mathbb{R}$;
    $D(I)=\{f:I\to\mathbb{R}\mid f\text{ differenciálható}\}$, $\Gamma=\mathbb{R}$;
    $S(I)=\{f:I\to\mathbb{R}\mid f\text{ integrálható}\}$, $\Gamma=\mathbb{R}$.
    - nyilván $D(I)\subset C(I)\subset S(I)\subset\mathbb{R}^I$
    - mindegyik végtelen dimenziós vektortér

## Alterek absztrakt vektorterekben

**Altér:** *analóg definíció:* Legyen $V$ egy a $\Gamma$ test feletti vektortér. A $H\subseteq V$ vektorhalmazt **altérnek** hívjuk a $V$ vektortérben, ha bármely $a,b\in H$ vektorok és bármely $\lambda\in\Gamma$ esetén $a+b\in H$ és $\lambda\cdot a\in H$ is teljesül.

$H$ zárt a vektorműveletekre.

**Megjegyzések:**
- Egy altér mindig tartalmazza a vektortér nullvektorát.
- Egy vektortér altere az örökölt műveletekkel maga is vektortér, teljesülnek benne a V1–V8 vektortér-axiómák.

### Példák alterekre

- $P_\mathbb{R}^n$ altér a $P_\mathbb{R}$ vektortérben.
- $\mathbb{R}^\mathbb{N}$ vektortérben alteret alkotnak a korlátos sorozatok, azon belül a konvergens sorozatok, azon belül a 0-hoz konvergáló sorozatok.
- $D(I)\subset C(I)\subset S(I)\subset\mathbb{R}^I$ egymás alterei.

## Absztrakt vektorterek közti lineáris leképezések

**Lineáris leképezés:** Legyenek $V$ és $W$ azonos test ($\Gamma$) feletti vektorterek. Az $A:V\to W$ leképezést **lineárisnak** nevezzük, ha bármely $x,y\in V$ és $\lambda\in\Gamma$ esetén

$$A(x+y)=A(x)+A(y)\quad\text{(additív)}$$
$$A(\lambda\cdot x)=\lambda\cdot A(x)\quad\text{(homogén)}$$

**Megjegyzés:** magtér, képtér fogalma analóg módon értelmezhető.

### Példák lineáris leképezésekre

1. Legyen $V\subset\mathbb{R}^\mathbb{N}$ a konvergens sorozatok vektortere. $A:V\to\mathbb{R}$, $(a_n)_{n=0}^\infty\mapsto\lim a_n$
2. $A:P_\mathbb{R}\to P_\mathbb{R}$, $p\mapsto p'$ (deriválás)
3. $A:S(I)\to\mathbb{R}$, $f\mapsto\int_I f$
4. $\psi:L(\mathbb{R}^m,\mathbb{R}^n)\to\mathbb{R}^{n\times m}$, $A\mapsto M(A)$
5. $A:\mathbb{R}^\mathbb{N}\to\mathbb{R}$, $(a_n)_{n=0}^\infty\mapsto a_k$ ($k\in\mathbb{N}$ rögzített)

## Megjegyzések

Legyenek $V$ és $W$ a $\Gamma$ test feletti vektorterek. A $V\to W$ típusú lineáris leképezésekre a korábbiakkal analóg módon értelmezhető az összeadás és a skalárral való szorzás művelete.

Megmutatható, hogy a $L(V,W)=\{A:V\to W\mid A\text{ lineáris}\}$ leképezések halmaza ezekkel a műveletekkel vektorteret alkot.

Speciálisan legyen $V$ a $\Gamma$ test feletti vektortér. A $L(V,\Gamma)=\{A:V\to\Gamma\mid A\text{ lineáris}\}$ vektorteret a $V$ vektortér **duálisának** nevezzük és $V^*$-gal jelöljük.

A $V\to W$ típusú lineáris leképezésekre a korábbiakkal analóg módon értelmezhető a **magtér**, a **képtér** és a **rang** fogalma.

## Lineáris leképezés mátrixa

Legyenek $V$ és $W$ azonos test feletti véges dimenziós vektorterek, legyen $\dim(V)=m$ és $\dim(W)=n$.

$B_1$ legyen bázis a $V$ vektortérben, $B_2$ pedig legyen bázis a $W$ vektortérben.

Legyen $A:V\to W$ lineáris leképezés. Az $A$ lineáris leképezés $B_1$-$B_2$ bázisokra vonatkozó mátrixán azt az $n\times m$-es mátrixot értjük, amelynek oszlopaiban a $B_1$ bázis elemeihez rendelt képelemek $B_2$ bázisra vonatkozó koordinátái állnak.

## Izomorf vektorterek

**Lineáris izomorfizmus:** A bijektív lineáris leképezéseket lineáris izomorfizmusoknak nevezzük.

**Izomorf vektorterek:** A $V$ és $W$ vektorterek izomorfak, ha létezik $A:V\to W$ lineáris izomorfizmus. Jel.: $V\cong W$

**Struktúra-tétel:** Két azonos test feletti véges dimenziós vektortér pontosan akkor izomorf, ha dimenziójuk megegyezik.

## Nullitás-rang tétel

**Nullitás:** Legyen $A:V\to W$ lineáris leképezés. Az $A$ magterének dimenzióját az $A$ lineáris leképezés *nullitásának* nevezzük. Jel.: $n(A)$
$$n(A)=\dim(\ker(A))$$

**Nullitás-rang tétel:** Legyen $A:V\to W$ lineáris leképezés, ahol $V$ véges dimenziós. Ekkor:
$$n(A)+r(A)=\dim(V),$$
azaz $A$ nullitásának és rangjának összege egyenlő $V$ dimenziójával.
