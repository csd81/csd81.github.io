## 2.9. Vektor- és mátrixnormák, vektor- és mátrixsorozatok

### 88. fólia — szakaszcím

**2.9. Vektor- és mátrixnormák, vektor- és mátrixsorozatok**

### 89. fólia — abszolút érték emlékeztető

Idézzük fel a valós számok abszolút értékének tulajdonságait:
1. $|x|\geq 0$, és $|x|=0$ akkor és csak akkor, ha $x=0$;
2. $|cx|=|c||x|$, minden $c,x\in\mathbb{R}$-re;
3. $|x+y|\leq|x|+|y|$, minden $x,y\in\mathbb{R}$-re (háromszög-egyenlőtlenség).

Az $x$ abszolút értéke visszaadja az $x$ távolságát az origótól: *Ábra: számegyenes, $0$-tól $x$-ig nyíl, $|x|$ címke.*

Az $x$ és $y$ pontok távolsága $|x-y|$. *Ábra: számegyenes $0$, $x$, $y$ pontokkal és $|x-y|$ szakasszal.*

### 90. fólia — vektornorma definíciója

Az $\mathbf{x}\in\mathbb{R}^n$ vektor komponenseit

$$\mathbf{x}=(x_1,x_2,\dots,x_n)^T$$

jelöli.

**Definíció.** Az $\|\cdot\|\colon\mathbb{R}^n\to\mathbb{R}$ függvényt *vektornormának* nevezzük, ha
1. $\|\mathbf{x}\|\geq 0$ minden $\mathbf{x}\in\mathbb{R}^n$-re, és $\|\mathbf{x}\|=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$;
2. $\|c\mathbf{x}\|=|c|\|\mathbf{x}\|$ minden $c\in\mathbb{R}$ és $\mathbf{x}\in\mathbb{R}^n$-re;
3. (háromszög-egyenlőtlenség:) $\|\mathbf{x}+\mathbf{y}\|\leq\|\mathbf{x}\|+\|\mathbf{y}\|$ minden $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re.

### 91. fólia — Tétel: norma fordított háromszög + folytonosság

**Tétel.** *Egy tetszőleges $\|\cdot\|$ vektornormára*
1. $\big|\|\mathbf{x}\|-\|\mathbf{y}\|\big|\leq\|\mathbf{x}-\mathbf{y}\|$,
2. *$\|\cdot\|$ folytonos függvény $\mathbb{R}^n$-en.*

**Bizonyítás.** A háromszög-egyenlőtlenség alapján

$$\|\mathbf{x}\|=\|\mathbf{x}-\mathbf{y}+\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|+\|\mathbf{y}\|,$$

amiből

$$\|\mathbf{x}\|-\|\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|$$

következik. Ugyanígy

$$\|\mathbf{y}\|-\|\mathbf{x}\|\leq\|\mathbf{x}-\mathbf{y}\|$$

is teljesül, így az 1. állítás igaz. A $\|\cdot\|$ norma függvény folytonossága következik az 1. pontban bizonyított egyenlőtlenségből.

### 92. fólia — $p$-norma, euklideszi

Legyen $p\geq 1$, és definiáljuk az ún. *$p$-normát*:

$$\|\mathbf{x}\|_p:=\left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

Nyilván $\|\mathbf{x}\|_p\geq 0$, és $\|\mathbf{x}\|_p=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$.

$$\|c\mathbf{x}\|_p=\left(\sum_{i=1}^n |cx_i|^p\right)^{1/p}=\left(|c|^p\sum_{i=1}^n |x_i|^p\right)^{1/p}=|c|\|\mathbf{x}\|_p.$$

Belátható, hogy $\|\cdot\|_p$ teljesíti a háromszög-egyenlőtlenséget minden $p\geq 1$-re. A $p=2$-höz tartozó $\|\cdot\|_2$ normát, azaz a

$$\|\mathbf{x}\|_2=\sqrt{\sum_{i=1}^n x_i^2}$$

képletet *euklideszi normának* is szokás nevezni.

### 93. fólia — 1-norma és végtelen norma

Egy gyakran használt speciális eset az *1-norma*:

$$\|\mathbf{x}\|_1:=\sum_{i=1}^n |x_i|.$$

Egy másik gyakran használt vektornorma az ún. *végtelen norma*

$$\|\mathbf{x}\|_\infty:=\max_{i=1,\dots,n}|x_i|.$$

Nyilván $\|\mathbf{x}\|_\infty\geq 0$, és $\|\mathbf{x}\|_\infty=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$.

$$\|c\mathbf{x}\|_\infty:=\max_{i=1,\dots,n}|cx_i|=\max_{i=1,\dots,n}|c||x_i|=|c|\max_{i=1,\dots,n}|x_i|=|c|\|\mathbf{x}\|_\infty.$$

Rögzített $i$-re kapjuk

$$|x_i+y_i|\leq|x_i|+|y_i|\leq\max_{i=1,\dots,n}|x_i|+\max_{i=1,\dots,n}|y_i|=\|\mathbf{x}\|_\infty+\|\mathbf{y}\|_\infty.$$

Mivel a jobb oldal $i$-től független, ezért

$$\|\mathbf{x}+\mathbf{y}\|_\infty=\max_{i=1,\dots,n}|x_i+y_i|\leq\|\mathbf{x}\|_\infty+\|\mathbf{y}\|_\infty,$$

így $\|\cdot\|_\infty$ teljesíti a norma tulajdonságait.

---
### 94. fólia — Cauchy–Bunyakovszkij–Schwarz

**Tétel (Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség).** *Minden $x_1,\dots,x_n,y_1,\dots,y_n\in\mathbb{R}$-re teljesül a*

$$\left(\sum_{i=1}^n x_i y_i\right)^2\leq\sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2$$

*egyenlőtlenség, ahol akkor és csak akkor áll fenn egyenlőség, ha létezik olyan $\lambda\in\mathbb{R}$, hogy $y_i=\lambda x_i$ minden $i=1,2,\dots,n$-re.*

### 95. fólia — Bizonyítás

**Bizonyítás.** Tekintsük a

$$p(t):=t^2\sum_{i=1}^n x_i^2-2t\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2$$

másodfokú polinomot. Ekkor

$$p(t)=\sum_{i=1}^n(tx_i-y_i)^2\geq 0, \qquad t\in\mathbb{R},$$

így $p$-nek nem lehet két valós gyöke, azaz

$$4\left(\sum_{i=1}^n x_i y_i\right)^2-4\sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2\leq 0.$$

Másrészt $p(t)=0$ akkor és csak akkor, ha a diszkriminánsa egyenlő nullával, és valamely $t=\lambda$-ra minden $i=1,2,\dots,n$-re $y_i=\lambda x_i$.

### 96. fólia — vektoriális alak

**Corollary.** *Tetszőleges $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re*

$$|\mathbf{x}^T\mathbf{y}|\leq\|\mathbf{x}\|_2\|\mathbf{y}\|_2$$

*teljesül, ahol egyenlőség akkor és csak akkor van, ha $\mathbf{y}=\lambda\mathbf{x}$ valamely $\lambda\in\mathbb{R}$-re.*

### 97. fólia — euklideszi norma háromszög-egyenlőtlensége

A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{x}+\mathbf{y}\|_2^2 &= \sum_{i=1}^n(x_i+y_i)^2 \\
&= \sum_{i=1}^n x_i^2+2\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2+2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2}+\sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2}+\sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2+\|\mathbf{y}\|_2)^2,
\end{aligned}
$$

ami igazolja, hogy az euklideszi norma teljesíti a háromszög-egyenlőtlenséget.

### 98. fólia — geometriai szemléltetés

Kétdimenziós $\mathbf{x}=(x_1,x_2)$ vektorok esetében az $(x_1,x_2)$ pontokat a koordináta-rendszerben azonosíthatjuk a helyvektorokkal, azaz az origóból az $(x_1,x_2)$ pontba mutató síkbeli vektorral. Ennek a vektornak a hossza

$$\|\mathbf{x}\|_2=\sqrt{x_1^2+x_2^2}.$$

*Ábra (bal): koordináta-rendszer, kék vektor az origóból $\mathbf{x}=(x_1,x_2)$-be, hossza $\|\mathbf{x}\|_2$.*

Az $\mathbf{x}=(x_1,x_2)$ és $\mathbf{y}=(y_1,y_2)$ pontok távolsága

$$\|\mathbf{x}-\mathbf{y}\|_2=\sqrt{(x_1-y_1)^2+(x_2-y_2)^2}.$$

*Ábra (jobb): két helyvektor $\mathbf{x}$ és $\mathbf{y}$, közöttük a piros $\mathbf{x}-\mathbf{y}$ szakasz.*

### 99. fólia — vektorsorozat konvergencia

A $\|\mathbf{x}\|$-t az $\mathbf{x}$ vektor *hosszának*, azaz a $\mathbf{0}$-tól való távolságának nevezzük. Az $\mathbf{x}$ és $\mathbf{y}$ vektorok távolságán az

$$\|\mathbf{x}-\mathbf{y}\|$$

számot értjük. Legyen $\mathbf{p}^{(k)}$ $n$-dimenziós vektoroknak egy sorozata, és $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en. Azt mondjuk, hogy a $\mathbf{p}^{(k)}$ sorozat a $\mathbf{p}$ vektorhoz *konvergál*, ha

$$\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0.$$

### 100. fólia — normák ekvivalenciája

**Tétel.** *Legyen $|\cdot|$ és $\|\cdot\|$ két vektornorma, és $\mathbf{p}^{(k)}$ egy vektorsorozat $\mathbb{R}^n$-en. Ekkor $\lim_{k\to\infty}|\mathbf{p}^{(k)}-\mathbf{p}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0$.*

**Bizonyítás.** Elegendő megmutatni, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$ akkor és csak akkor, ha $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\to 0$, ahol $\|\cdot\|$ egy tetszőleges norma $\mathbb{R}^n$-en. Ez teljesül, ha belátjuk, hogy léteznek olyan $m$ és $M$ konstansok, hogy

$$m\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\leq\|\mathbf{p}^{(k)}-\mathbf{p}\|\leq M\|\mathbf{p}^{(k)}-\mathbf{p}\|_1. \tag{17}$$

Legyen $E:=\{\mathbf{x}\in\mathbb{R}^n\colon \|\mathbf{x}\|_1=1\}$. $E$ korlátos és zárt részhalmaza $\mathbb{R}^n$-nek, ezért a $\|\cdot\|$ folytonos függvény felveszi maximumát és minimumát $E$-n. Legyenek ezek $M$ és $m$. Legyen $\mathbf{x}\in E$, ezért $m\leq\|\mathbf{x}\|\leq M$, amit beszorozva $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1$-val kapjuk (17) egyenlőtlenséget.

### 101. fólia — komponensenkénti konvergencia

**Tétel.** *Legyen $\mathbf{p}^{(k)}$ és $\mathbf{p}$ vektor $i$-edik komponense $p_i^{(k)}$ ill. $p_i$. Ekkor a $\mathbf{p}^{(k)}$ vektorsorozat akkor és csak akkor konvergál a $\mathbf{p}$ vektorhoz, ha $p_i^{(k)}\to p_i$ minden $i=1,2,\dots,n$-re, ha $k\to\infty$.*

**Bizonyítás.** Az előbbi tétel szerint

$$\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$$

akkor és csak akkor, ha

$$\|\mathbf{p}^{(k)}-\mathbf{p}\|_1=\sum_{i=1}^n|p_i^{(k)}-p_i|\to 0,$$

ami pontosan akkor teljesül, ha

$$p_i^{(k)}\to p_i, \qquad i=1,2,\dots,n.$$

### 102. fólia — mátrixnorma definíciója

Az $n\times n$-es valós mátrixok halmazát $\mathbb{R}^{n\times n}$-nel jelöljük. Legyen $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en.

**Definíció.** Az

$$\|\mathbf{A}\|:=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

képlettel definiált $\|\cdot\|\colon\mathbb{R}^{n\times n}\to\mathbb{R}$ függvényt az $\|\cdot\|$ vektornorma által generált *mátrixnormának* nevezzük.

Itt a sup a legkisebb felső korlátot jelöli, azaz a legkisebb $M$, amire

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}\leq M \quad \text{minden } \mathbf{x}\neq\mathbf{0}\text{-ra}.$$

Megmutatható, hogy a mátrixnorma definícióban szereplő sup (azaz legkisebb felső korlát) max-ra cserélhető, azaz létezik olyan $\mathbf{x}$ vektor, amelyre

$$\|\mathbf{A}\|=\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}.$$

### 103. fólia — Tétel: mátrixnorma tulajdonságok

**Tétel.** *Minden $\mathbf{A},\mathbf{B}\in\mathbb{R}^{n\times n}$-re*
1. $\|\mathbf{A}\|\geq 0$, és $\|\mathbf{A}\|=0$ akkor és csak akkor, ha $\mathbf{A}=\mathbf{0}$,
2. $\|c\mathbf{A}\|=|c|\|\mathbf{A}\|$ minden $c\in\mathbb{R}$-re,
3. *(háromszög-egyenlőtlenség)* $\|\mathbf{A}+\mathbf{B}\|\leq\|\mathbf{A}\|+\|\mathbf{B}\|$,
4. $\|\mathbf{A}\mathbf{x}\|\leq\|\mathbf{A}\|\|\mathbf{x}\|$, minden $\mathbf{x}\in\mathbb{R}^n$-re,
5. $\|\mathbf{A}\mathbf{B}\|\leq\|\mathbf{A}\|\|\mathbf{B}\|$,
6. $\|\mathbf{A}\|=\sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\|=1\}$.

**Bizonyítás.** (ii)

$$\|c\mathbf{A}\|=\sup_{\mathbf{x}\neq 0}\frac{\|c\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=\sup_{\mathbf{x}\neq 0}\frac{|c|\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=|c|\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=|c|\|\mathbf{A}\|.$$

(iii)

$$\|\mathbf{A}+\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|(\mathbf{A}+\mathbf{B})\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|+\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|+\|\mathbf{B}\|.$$

### 104. fólia — Bizonyítás folyt.

**Bizonyítás folyt.** A 4. állítás következik az

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{y}\neq 0}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|}=\|\mathbf{A}\|$$

egyenlőtlenségből. A 4. állítást felhasználva

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|,$$

ezért

$$\|\mathbf{A}\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|.$$

Végül a 6. állítás következik az alábbi egyenlőségből:

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=\left\|\mathbf{A}\frac{\mathbf{x}}{\|\mathbf{x}\|}\right\|.$$

### 105. fólia — mátrixnormák ekvivalenciája

**Tétel.** *Jelöljön $|\cdot|$ és $\|\cdot\|$ két vektornormát ill. az általa generált mátrixnormát. Legyen $\mathbf{A}^{(k)}$ egy mátrixsorozat $\mathbb{R}^{n\times n}$-en. Ekkor $\lim_{k\to\infty}|\mathbf{A}^{(k)}-\mathbf{A}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{A}^{(k)}-\mathbf{A}\|=0$.*

**Bizonyítás.** Megmutatjuk, hogy léteznek olyan $l,L$ nemnegatív konstansok, hogy

$$l|\mathbf{B}|\leq\|\mathbf{B}\|\leq L|\mathbf{B}|, \qquad \mathbf{B}\in\mathbb{R}^{n\times n}.$$

Korábbi tétel bizonyításából következik, hogy létezik olyan $m,M>0$, hogy

$$m|\mathbf{x}|\leq\|\mathbf{x}\|\leq M|\mathbf{x}|, \qquad x\in\mathbb{R}^n.$$

Ekkor

$$\tfrac{m}{M}|\mathbf{B}|=\sup_{\mathbf{x}\neq 0}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|}\leq\|\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{x}\neq 0}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|}=\tfrac{M}{m}|\mathbf{B}|.$$

### 106. fólia — 1- és $\infty$-norma képlete

**Tétel.** *Legyen $\mathbf{A}=(a_{ij})\in\mathbb{R}^{n\times n}$. Ekkor az $\|\cdot\|_1$ és $\|\cdot\|_\infty$ vektornormák által generált mátrixnorma*

$$\|\mathbf{A}\|_1=\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|,$$

*illetve*

$$\|\mathbf{A}\|_\infty=\max_{i=1,\dots,n}\sum_{j=1}^n|a_{ij}|.$$

### 107. fólia — bizonyítás 1-normára

**Bizonyítás.** Az $\|\cdot\|_1$ vektornorma definíciója és a háromszög-egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n\left|\sum_{j=1}^n a_{ij} x_j\right| \\
&\leq \sum_{i=1}^n\sum_{j=1}^n|a_{ij} x_j| \\
&= \sum_{j=1}^n|x_j|\sum_{i=1}^n|a_{ij}| \\
&\leq \left(\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|\right)\sum_{j=1}^n|x_j| \\
&= \left(\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|\right)\|\mathbf{x}\|_1,
\end{aligned}
$$

---
ezért $\|\mathbf{A}\|_1\leq\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|$.

### 108. fólia — bizonyítás folyt.

**Bizonyítás folyt.** Legyen

$$\max_{j=1,\dots,n}\sum_{i=1}^n|a_{ij}|=\sum_{i=1}^n|a_{ik}|.$$

Az egyenlőséget abból kapjuk, hogy ha az $\mathbf{e}^{(k)}=(0,\dots,0,1,0,\dots,0)^T$ vektorra alkalmazzuk $\mathbf{A}$-t, ahol $e_i^{(k)}=0$ ha $i\neq k$ és $e_k^{(k)}=1$, akkor

$$\mathbf{A}\mathbf{e}^{(k)}=(a_{1k},a_{2k},\dots,a_{nk})^T,$$

így

$$\|\mathbf{A}\mathbf{e}^{(k)}\|_1=\sum_{i=1}^n|a_{ik}|.$$

### 109. fólia — vektorsorozat konvergencia tulajdonságok

**Tétel.**
1. *Ha a $\mathbf{p}^{(k)}$ vektorsorozat konvergens, akkor a határérték egyértelmű.*
2. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$ és $\mathbf{q}^{(k)}\to\mathbf{q}$, $\alpha,\beta\in\mathbb{R}$, akkor $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}$ konvergens, és $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}\to\alpha\mathbf{p}+\beta\mathbf{q}$.*
3. *Ha $c_k\to c$ valós számsorozat és $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $c_k\mathbf{p}^{(k)}\to c\mathbf{p}$.*
4. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $\mathbf{A}\mathbf{p}^{(k)}\to\mathbf{A}\mathbf{p}$ minden $\mathbf{A}\in\mathbb{R}^{n\times n}$-re.*
5. *(Cauchy-féle konvergenciakritérium)* $\mathbf{p}^{(k)}$ *akkor és csak akkor konvergens, ha Cauchy-sorozat, azaz bármely $\varepsilon>0$-hoz létezik olyan $k_0>0$ küszöbszám, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|<\varepsilon$ minden $k,m>k_0$-ra.*

### 110. fólia — többváltozós Lagrange vektor értékre

**Tétel (Lagrange-féle középértéktétel).** *Jelöljön $\|\cdot\|$ egy tetszőleges vektornormát $\mathbb{R}^n$-en illetve az általa generált mátrixnormát. Legyen $E\subset\mathbb{R}^n$ nyílt konvex halmaz, $\mathbf{f}\colon E\to\mathbb{R}^n$ folytonosan parciálisan differenciálható, $\mathbf{x},\mathbf{y}\in E$. Ekkor*

$$\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|\leq\max_{t\in[0,1]}\|\mathbf{f}'(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))\|\cdot\|\mathbf{x}-\mathbf{y}\|.$$

### 111. fólia — Bizonyítás

**Bizonyítás.** Az állítást csak a $\|\cdot\|=\|\cdot\|_2$ speciális esetben bizonyítjuk. Legyen

$$\mathbf{h}:=\frac{\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2}.$$

Ekkor $\|\mathbf{h}\|_2=1$. Legyen $\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T$, $\mathbf{h}=(h_1,\dots,h_n)^T$. Definiáljuk a

$$g(t):=\mathbf{h}^T\mathbf{f}(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))=\sum_{i=1}^n h_i f_i(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$$

valós függvényt. Ekkor az egyváltozós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint…

### 112. fólia — Bizonyítás folyt.

**Bizonyítás folyt.**

$$
\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) &= g(1)-g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}) \\
&= \mathbf{h}^T\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})
\end{aligned}
$$

valamely $\xi\in(0,1)$-re. Így $\mathbf{h}$ definíciója, a C-B-S egyenlőtlenség vektoriális alakja, $\|\mathbf{h}\|_2=1$ és a mátrixnorma tulajdonsága alapján

$$
\begin{aligned}
\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y}) \\
&\leq \|\mathbf{h}\|_2\|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))\|_2\|\mathbf{x}-\mathbf{y}\|_2.
\end{aligned}
$$

---
