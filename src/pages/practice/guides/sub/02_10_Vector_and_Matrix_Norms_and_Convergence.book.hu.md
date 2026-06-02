## 2.10. Vektor- és mátrixnormák, vektor- és mátrixsorozatok konvergenciája

Az $\mathbf{x}\in\mathbb{R}^n$ vektor komponenseit $\mathbf{x}=(x_1,x_2,\dots,x_n)^T$-tal jelöljük. Az $\|\cdot\|\colon\mathbb{R}^n\to\mathbb{R}$ függvényt *vektornormának* nevezzük, ha

1. $\|\mathbf{x}\|\geq 0$ minden $\mathbf{x}\in\mathbb{R}^n$-re, és $\|\mathbf{x}\|=0$ akkor és csak akkor, ha $\mathbf{x}=\mathbf{0}$,
2. $\|c\mathbf{x}\|=|c|\|\mathbf{x}\|$ minden $c\in\mathbb{R}$ és $\mathbf{x}\in\mathbb{R}^n$-re,
3. (háromszög-egyenlőtlenség:) $\|\mathbf{x}+\mathbf{y}\|\leq\|\mathbf{x}\|+\|\mathbf{y}\|$ minden $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re.

**2.41. tétel.** *Egy tetszőleges $\|\cdot\|$ vektornormára*
1. $\big|\|\mathbf{x}\|-\|\mathbf{y}\|\big|\leq\|\mathbf{x}-\mathbf{y}\|$,
2. *$\|\cdot\|$ folytonos függvény $\mathbb{R}^n$-en.*

**Bizonyítás.** A háromszög-egyenlőtlenség alapján $\|\mathbf{x}\|=\|\mathbf{x}-\mathbf{y}+\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|+\|\mathbf{y}\|$, amiből $\|\mathbf{x}\|-\|\mathbf{y}\|\leq\|\mathbf{x}-\mathbf{y}\|$ következik. Ugyanígy $\|\mathbf{y}\|-\|\mathbf{x}\|\leq\|\mathbf{x}-\mathbf{y}\|$ is teljesül, így az 1. állítás igaz. A $\|\cdot\|$ norma függvény folytonossága következik az 1. pontban bizonyított egyenlőtlenségből. $\square$

Legyen $p\geq 1$, és definiáljuk az ún. *$p$-normát*:

$$\|\mathbf{x}\|_p:=\left(\sum_{i=1}^n |x_i|^p\right)^{1/p}.$$

Belátható, hogy $\|\cdot\|_p$ teljesíti a vektornorma definícióját minden $p\geq 1$-re. A $p=2$-höz tartozó $\|\cdot\|_2$ normát *euklideszi normának* is szokás nevezni. Egy gyakran használt speciális eset az 1-norma:

$$\|\mathbf{x}\|_1:=\sum_{i=1}^n |x_i|.$$

Egy másik gyakran használt vektornorma az ún. *végtelen norma*

$$\|\mathbf{x}\|_\infty := \max_{i=1,\dots,n} |x_i|.$$

Az olvasóra bízzuk annak igazolását, hogy $\|\cdot\|_1$ és $\|\cdot\|_\infty$ teljesítik a norma tulajdonságait (1. feladat). Az euklideszi norma nyilvánvalóan teljesíti a norma definíciójának 1. és 2. tulajdonságát. A háromszög-egyenlőtlenség igazolásához viszont szükség van a következő, önmagában is igen fontos egyenlőtlenségre.

**2.42. tétel (Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség).** *Minden $x_1,\dots,x_n,y_1,\dots,y_n\in\mathbb{R}$-re teljesül a*

$$\left(\sum_{i=1}^n x_i y_i\right)^2\leq \sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2$$

*egyenlőtlenség, ahol akkor és csak akkor áll fenn egyenlőség, ha létezik olyan $\lambda\in\mathbb{R}$, hogy $y_i=\lambda x_i$ minden $i=1,2,\dots,n$-re.*

**Bizonyítás.** Tekintsük a $p(t):=t^2\sum_{i=1}^n x_i^2-2t\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2$ másodfokú polinomot. Ekkor $p(t)=\sum_{i=1}^n (tx_i-y_i)^2\geq 0$ teljesül minden $t$-re, így $p$-nek nem lehet két valós gyöke, azaz $p$ diszkriminánsa nem lehet pozitív:

$$4\left(\sum_{i=1}^n x_i y_i\right)^2-4\sum_{i=1}^n x_i^2 \sum_{i=1}^n y_i^2\leq 0.$$

Ebből kapjuk a tétel állításában szereplő egyenlőtlenséget. $p$-nek akkor és csak akkor lehet pontosan egy valós gyöke, ha a diszkriminánsa egyenlő nullával, azaz a tétel állításában egyenlőség szerepel. Másrészt $p(t)=0$ akkor és csak akkor teljesül valamely $t=\lambda$-ra, ha minden $i=1,2,\dots,n$-re $y_i=\lambda x_i$. $\square$

A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség mindkét oldalából gyököt vonva és vektoriális jelölést alkalmazva kapjuk:

**2.43. következmény.** *Tetszőleges $\mathbf{x},\mathbf{y}\in\mathbb{R}^n$-re*

$$|\mathbf{x}^T\mathbf{y}|\leq\|\mathbf{x}\|_2\|\mathbf{y}\|_2$$

*teljesül, ahol egyenlőség akkor és csak akkor van, ha $\mathbf{y}=\lambda\mathbf{x}$ valamely $\lambda\in\mathbb{R}$-re.*

A Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{x}+\mathbf{y}\|_2^2 &= \sum_{i=1}^n (x_i+y_i)^2 = \sum_{i=1}^n x_i^2+2\sum_{i=1}^n x_i y_i+\sum_{i=1}^n y_i^2 \\
&\leq \sum_{i=1}^n x_i^2+2\sqrt{\sum_{i=1}^n x_i^2}\sqrt{\sum_{i=1}^n y_i^2}+\sum_{i=1}^n y_i^2 \\
&= \left(\sqrt{\sum_{i=1}^n x_i^2}+\sqrt{\sum_{i=1}^n y_i^2}\right)^2 \\
&= (\|\mathbf{x}\|_2+\|\mathbf{y}\|_2)^2,
\end{aligned}
$$

ami igazolja, hogy az euklideszi norma teljesíti a háromszög-egyenlőtlenséget.

A normák segítségével értelmezhetjük vektorok hosszát, távolságát, valamint vektorsorozatok határértékét. A $\|\mathbf{x}\|$-t az $\mathbf{x}$ vektor *hosszának*, azaz a $\mathbf{0}$-tól való távolságának nevezzük. Az $\mathbf{x}$ és $\mathbf{y}$ vektorok távolságán az $\|\mathbf{x}-\mathbf{y}\|$ számot értjük. Legyen $\mathbf{p}^{(k)}$ $n$-dimenziós vektoroknak egy sorozata, és $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en. Azt mondjuk, hogy a $\mathbf{p}^{(k)}$ sorozat a $\mathbf{p}$ vektorhoz konvergál, ha

$$\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0.$$

Belátható, hogy a konvergencia fogalma független a definícióban használt vektornorma választásától, azaz ha egy sorozat egy vektornormában konvergens, akkor egy tetszőleges másik vektornormában is az, és ugyanahhoz a vektorhoz konvergál. (Ezt a tulajdonságot hívják az analízisben úgy, hogy $\mathbb{R}^n$-en a vektornormák ekvivalensek.)

**2.44. tétel.** *Legyen $|\cdot|$ és $\|\cdot\|$ két vektornorma, és $\mathbf{p}^{(k)}$ egy vektorsorozat $\mathbb{R}^n$-en. Ekkor $\lim_{k\to\infty}|\mathbf{p}^{(k)}-\mathbf{p}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{p}^{(k)}-\mathbf{p}\|=0$.*

**Bizonyítás.** Elegendő megmutatni, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$ akkor és csak akkor, ha $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\to 0$, ahol $\|\cdot\|$ egy tetszőleges norma $\mathbb{R}^n$-en. Ez teljesül, ha belátjuk, hogy léteznek olyan $m$ és $M$ konstansok, hogy

$$m\|\mathbf{p}^{(k)}-\mathbf{p}\|_1\leq \|\mathbf{p}^{(k)}-\mathbf{p}\|\leq M\|\mathbf{p}^{(k)}-\mathbf{p}\|_1. \tag{2.24}$$

Legyen $E:=\{\|\mathbf{x}\in\mathbb{R}^n\colon \|\mathbf{x}\|_1=1\}$. $E$ korlátos és zárt részhalmaza $\mathbb{R}^n$-nek, ezért a 2.37. és 2.41. tételek szerint a $\|\cdot\|$ folytonos függvény felveszi maximumát és minimumát $E$-n. Legyenek ezek $M$ és $m$. Legyen $\mathbf{x}=(\mathbf{p}^{(k)}-\mathbf{p})/\|\mathbf{p}^{(k)}-\mathbf{p}\|_1$. Ekkor $\mathbf{x}\in E$, ezért $m\leq\|\mathbf{x}\|\leq M$, amit beszorozva $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1$-val kapjuk (2.24) egyenlőtlenséget. $\square$

**2.45. tétel.** *Legyen a $\mathbf{p}^{(k)}$ és a $\mathbf{p}$ vektor $i$-edik komponense $p_i^{(k)}$ ill. $p_i$. Ekkor a $\mathbf{p}^{(k)}$ vektorsorozat akkor és csak akkor konvergál a $\mathbf{p}$ vektorhoz, ha $p_i^{(k)}\to p_i$ minden $i=1,2,\dots,n$-re, ha $k\to\infty$.*

**Bizonyítás.** A 2.44. tétel szerint $\|\mathbf{p}^{(k)}-\mathbf{p}\|\to 0$ akkor és csak akkor, ha $\|\mathbf{p}^{(k)}-\mathbf{p}\|_1=\sum_{i=1}^n|p_i^{(k)}-p_i|\to 0$, ami pontosan akkor teljesül, ha $p_i^{(k)}\to p_i$ minden $i=1,2,\dots,n$-re. $\square$

Az $n\times n$-es valós mátrixok halmazát $\mathbb{R}^{n\times n}$-nel jelöljük. Legyen $\|\cdot\|$ egy vektornorma $\mathbb{R}^n$-en. Az

$$\|\mathbf{A}\|:=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$$

képlettel definiált $\|\cdot\|\colon\mathbb{R}^{n\times n}\to\mathbb{R}$ függvényt az $\|\cdot\|$ vektornorma által generált *mátrixnormának* nevezzük. (A jelölésben nem teszünk különbséget a vektornorma és az általa generált mátrixnorma között.) Megmutatható, hogy a mátrixnorma definíciójában szereplő sup (azaz legkisebb felső korlát) max-ra cserélhető, azaz létezik olyan $\mathbf{x}$ vektor, amelyre $\|\mathbf{A}\|=\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}$. Könnyen beláthatók a mátrixnorma következő tulajdonságai:

**2.46. tétel.** *Minden $\mathbf{A},\mathbf{B}\in\mathbb{R}^{n\times n}$-re*
1. $\|\mathbf{A}\|\geq 0$, és $\|\mathbf{A}\|=0$ akkor és csak akkor, ha $\mathbf{A}=\mathbf{0}$,
2. $\|c\mathbf{A}\|=|c|\|\mathbf{A}\|$ minden $c\in\mathbb{R}$-re,
3. (háromszög-egyenlőtlenség:) $\|\mathbf{A}+\mathbf{B}\|\leq\|\mathbf{A}\|+\|\mathbf{B}\|$,
4. $\|\mathbf{A}\mathbf{x}\|\leq\|\mathbf{A}\|\|\mathbf{x}\|$ minden $\mathbf{x}\in\mathbb{R}^n$-re,
5. $\|\mathbf{A}\mathbf{B}\|\leq\|\mathbf{A}\|\|\mathbf{B}\|$,
6. $\|\mathbf{A}\|=\sup\{\|\mathbf{A}\mathbf{y}\|\colon \|\mathbf{y}\|=1\}$.

**Bizonyítás.** Az 1., 2. és 3. állítások bizonyítását az olvasóra hagyjuk. A 4. állítás következik az

$$\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}\leq \sup_{\mathbf{y}\neq 0}\frac{\|\mathbf{A}\mathbf{y}\|}{\|\mathbf{y}\|}=\|\mathbf{A}\|$$

egyenlőtlenségből. A 4. állítást felhasználva

$$\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|,$$

ezért

$$\|\mathbf{A}\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{A}\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\|\mathbf{A}\|\|\mathbf{B}\|.$$

Végül a 6. állítás következik az $\frac{\|\mathbf{A}\mathbf{x}\|}{\|\mathbf{x}\|}=\left\|\mathbf{A}\frac{\mathbf{x}}{\|\mathbf{x}\|}\right\|$ egyenlőségből. $\square$

Megjegyezzük, hogy mátrixnormát általánosabban is lehet definiálni a vektornorma definíciójához hasonlóan: egy olyan $\|\cdot\|\colon\mathbb{R}^{n\times n}\to\mathbb{R}$ függvény, amely teljesíti a 2.46. tétel első 1.–3. és 5. tulajdonságait. Vannak olyan mátrixnormák, amelyek nem vektornorma által generált mátrixnormák. Nekünk a továbbiakban elegendő csak a vektornormák által generált mátrixnormákat használni, ezért fogalmaztuk így a definíciót.

A következő tétel szerint bármely két mátrixnorma ekvivalens.

**2.47. tétel.** *Jelöljön $|\cdot|$ és $\|\cdot\|$ két vektornormát ill. az általa generált mátrixnormát. Legyen $\mathbf{A}^{(k)}$ egy mátrixsorozat $\mathbb{R}^{n\times n}$-en. Ekkor $\lim_{k\to\infty}|\mathbf{A}^{(k)}-\mathbf{A}|=0$ akkor és csak akkor, ha $\lim_{k\to\infty}\|\mathbf{A}^{(k)}-\mathbf{A}\|=0$.*

**Bizonyítás.** Most is, mint a 2.44. tétel bizonyításában, elegendő megmutatni, hogy léteznek olyan $l,L$ nemnegatív konstansok, hogy

$$l|\mathbf{B}|\leq\|\mathbf{B}\|\leq L|\mathbf{B}|, \quad \mathbf{B}\in\mathbb{R}^{n\times n}.$$

A 2.44. tétel bizonyításából következik, hogy léteznek olyan $m,M>0$, hogy

$$m|\mathbf{x}|\leq\|\mathbf{x}\|\leq M|\mathbf{x}|, \quad x\in\mathbb{R}^n.$$

Ekkor

$$\tfrac{m}{M}|\mathbf{B}|=\sup_{\mathbf{x}\neq 0}\frac{m|\mathbf{B}\mathbf{x}|}{M|\mathbf{x}|}\leq\|\mathbf{B}\|=\sup_{\mathbf{x}\neq 0}\frac{\|\mathbf{B}\mathbf{x}\|}{\|\mathbf{x}\|}\leq\sup_{\mathbf{x}\neq 0}\frac{M|\mathbf{B}\mathbf{x}|}{m|\mathbf{x}|}=\tfrac{M}{m}|\mathbf{B}|,$$

amiből következik a tétel állítása. $\square$

A gyakorlatban az 1-es és a végtelen vektornormák által generált mátrixnormákat használjuk leggyakrabban. Ezek kiszámolására vonatkozik a következő tétel:

**2.48. tétel.** *Legyen $\mathbf{A}=(a_{ij})\in\mathbb{R}^{n\times n}$. Ekkor az $\|\cdot\|_1$ és $\|\cdot\|_\infty$ vektornormák által generált mátrixnorma*

$$\|\mathbf{A}\|_1=\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|,$$

*illetve*

$$\|\mathbf{A}\|_\infty=\max_{i=1,\dots,n}\sum_{j=1}^n |a_{ij}|.$$

**Bizonyítás.** Csak az első képletet indokoljuk, a második bizonyítását az olvasóra hagyjuk. Az $\|\cdot\|_1$ vektornorma definíciója és a háromszög-egyenlőtlenség alapján

$$
\begin{aligned}
\|\mathbf{A}\mathbf{x}\|_1 &= \sum_{i=1}^n\left|\sum_{j=1}^n a_{ij}x_j\right| \\
&\leq \sum_{i=1}^n\sum_{j=1}^n |a_{ij}x_j| \\
&= \sum_{j=1}^n |x_j| \sum_{i=1}^n |a_{ij}| \\
&\leq \left(\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|\right)\sum_{j=1}^n |x_j| \\
&= \left(\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|\right)\|\mathbf{x}\|_1,
\end{aligned}
$$

ezért $\|\mathbf{A}\|_1\leq \max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|$. Tegyük fel, hogy $\max_{j=1,\dots,n}\sum_{i=1}^n |a_{ij}|=\sum_{i=1}^n |a_{ik}|$. Az egyenlőséget abból kapjuk, hogy ha az $\mathbf{e}^{(k)}=(0,\dots,0,1,0,\dots,0)^T$ vektorra alkalmazzuk $\mathbf{A}$-t, ahol $e_i^{(k)}=0$ ha $i\neq k$ és $e_k^{(k)}=1$, akkor $\mathbf{A}\mathbf{e}^{(k)}=(a_{1k},a_{2k},\dots,a_{nk})^T$, így $\|\mathbf{A}\mathbf{e}^{(k)}\|_1=\sum_{i=1}^n |a_{ik}|$. $\square$

A valós számsorozatok tulajdonságainak egyszerű általánosításából kapjuk:

**2.49. tétel.**
1. *Ha a $\mathbf{p}^{(k)}$ vektorsorozat konvergens, akkor a határérték egyértelmű.*
2. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$ és $\mathbf{q}^{(k)}\to\mathbf{q}$, $\alpha,\beta\in\mathbb{R}$, akkor $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}$ konvergens, és $\alpha\mathbf{p}^{(k)}+\beta\mathbf{q}^{(k)}\to\alpha\mathbf{p}+\beta\mathbf{q}$.*
3. *Ha $c_k\to c$ valós számsorozat és $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $c_k\mathbf{p}^{(k)}\to c\mathbf{p}$.*
4. *Ha $\mathbf{p}^{(k)}\to\mathbf{p}$, akkor $\mathbf{A}\mathbf{p}^{(k)}\to\mathbf{A}\mathbf{p}$ minden $\mathbf{A}\in\mathbb{R}^{n\times n}$-re.*
5. *(Cauchy-féle konvergenciakritérium) $\mathbf{p}^{(k)}$ akkor és csak akkor konvergens, ha Cauchy-sorozat, azaz bármely $\varepsilon>0$-hoz létezik olyan $k_0>0$ küszöbszám, hogy $\|\mathbf{p}^{(k)}-\mathbf{p}^{(m)}\|<\varepsilon$ minden $k,m>k_0$-ra.*

Mátrixokra értelemszerűen kiterjeszthető a hosszúság, távolság és konvergencia fogalma, és érvényes a 2.44., a 2.45. és 2.49. tételek megfelelő kiterjesztése.

A vektor- és mátrixnorma alkalmazásával általánosítható a Lagrange-féle középértéktétel többváltozós vektor értékű függvényekre.

**2.50. tétel (Lagrange-féle középértéktétel).** *Jelöljön $\|\cdot\|$ egy tetszőleges vektornormát $\mathbb{R}^n$-en illetve az általa generált mátrixnormát. Legyen $E\subset\mathbb{R}^n$ nyílt konvex halmaz, $\mathbf{f}\colon E\to\mathbb{R}^n$ folytonosan parciálisan differenciálható, $\mathbf{x},\mathbf{y}\in E$. Ekkor*

$$\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|\leq \max_{t\in[0,1]}\|\mathbf{f}'(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))\|\cdot\|\mathbf{x}-\mathbf{y}\|.$$

**Bizonyítás.** Az állítást csak a $\|\cdot\|=\|\cdot\|_2$ speciális esetben bizonyítjuk. Nyilván feltehető, hogy $\mathbf{f}(\mathbf{x})\neq\mathbf{f}(\mathbf{y})$. Legyen

$$\mathbf{h}:=\frac{\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})}{\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2}.$$

Ekkor $\|\mathbf{h}\|_2=1$. Legyen $\mathbf{f}(\mathbf{x})=(f_1(\mathbf{x}),\dots,f_n(\mathbf{x}))^T$, $\mathbf{h}=(h_1,\dots,h_n)^T$. Definiáljuk a

$$g(t):=\mathbf{h}^T \mathbf{f}(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))=\sum_{i=1}^n h_i f_i(\mathbf{y}+t(\mathbf{x}-\mathbf{y}))$$

valós függvényt. Ekkor az egyváltozós függvényekre vonatkozó Lagrange-féle középértéktétel és a láncszabály szerint

$$
\begin{aligned}
\mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) &= g(1)-g(0) \\
&= g'(\xi) \\
&= \sum_{i=1}^n h_i f_i'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))^T(\mathbf{x}-\mathbf{y}) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})
\end{aligned}
$$

valamely $\xi\in(0,1)$-re. Így $\mathbf{h}$ definíciója, a Cauchy–Bunyakovszkij–Schwarz egyenlőtlenség vektoriális alakja, $\|\mathbf{h}\|_2=1$ és a mátrixnorma 2.46. tétel 5. tulajdonsága alapján

$$
\begin{aligned}
\|\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})\|_2 &= \mathbf{h}^T(\mathbf{f}(\mathbf{x})-\mathbf{f}(\mathbf{y})) \\
&= \mathbf{h}^T \mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y}) \\
&\leq \|\mathbf{h}\|_2\|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))(\mathbf{x}-\mathbf{y})\|_2 \\
&\leq \|\mathbf{f}'(\mathbf{y}+\xi(\mathbf{x}-\mathbf{y}))\|_2\|\mathbf{x}-\mathbf{y}\|_2,
\end{aligned}
$$

amiből következik a tétel állítása. $\square$

**Feladatok**

1. Mutassa meg, hogy $\|\cdot\|_1$ és $\|\cdot\|_\infty$ teljesítik a vektornorma tulajdonságait!
2. Számítsa ki az $\|\mathbf{x}\|_1$, $\|\mathbf{x}\|_2$ és $\|\mathbf{x}\|_\infty$, ill. az $\|\mathbf{A}\|_1$ és $\|\mathbf{A}\|_\infty$ normákat, ha
   - (a) $\mathbf{x}=(3,-1,0,5)^T$,  (b) $\mathbf{x}=(-3,-2,-1,4,-1)^T$,
   - (c) $\mathbf{A}=\begin{pmatrix}-1 & 3 & -2\\ 2 & -4 & 0\\ 0 & 3 & 2\end{pmatrix}$,  (d) $\mathbf{A}=\begin{pmatrix}-1 & 2 & 4\\ 2 & -3 & 5\\ 7 & -2 & 3\end{pmatrix}$.
3. Rajzolja fel az
   - (a) $\{\mathbf{x}\in\mathbb{R}^2\colon \|\mathbf{x}\|_1=1\}$,  (b) $\{\mathbf{x}\in\mathbb{R}^2\colon \|\mathbf{x}\|_\infty=1\}$

   síkbeli halmazokat!
4. Lássa be a 2.46. tétel 1.–3. állításait!
5. Igazolja a 2.48. tétel 2. állítását!
6. Bizonyítsa be a 2.49. tételt!

---
