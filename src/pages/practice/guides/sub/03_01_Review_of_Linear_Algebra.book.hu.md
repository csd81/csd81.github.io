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
