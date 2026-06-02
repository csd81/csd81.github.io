# Lineáris algebra alapfogalmak részletes magyarázattal

*Dr. Szalkai István*
*Pannon Egyetem, Veszprém*

2020.08.11.

## Tartalomjegyzék

- Bevezetés — 1
- 1. Alapvető definíciók és tételek — 3
- 2. Bázistranszformáció — 17
  - 2.1. A bázistranszformációs táblázat és benne az információk — 18
  - 2.2. A bázistranszformáció számolása — 20
  - 2.3. Példa — 25
  - 2.4. Könnyítő észrevételek — 27
  - 2.5. A számolás vége — 27
  - 2.6. Néhány további megjegyzés — 28
  - 2.7. Alkalmazások — 30
- 3. Lineáris egyenletrendszerek és megoldásuk — 31
- 4. További ajánlott irodalom — 33
- Tárgymutató — 33

# Bevezetés

Ebben a fájlban a Lineáris Algebra alapfogalmait (bázis, stb.) és azok alapvető tulajdonságait magyarázzuk el *nagyon részletesen*. Felhívjuk a figyelmet arra, hogy az egész Lineáris Algebra tárgy megértéséhez és a feladatok megoldásához elengedhetetlenül szükséges az alábbiak alapos megértése!

Ez a fájl nem teljes, tehát más oktatási segédanyagokban még találhatóak olyan információk, amelyek ebben a magyarázatban nem szerepelnek.

# 1. fejezet — Alapvető definíciók és tételek

**Jelölések:**
$\mathbb{R}$ = valós számok halmaza,
$\square$ = (kis négyzet) = egy definíció / tétel / gondolat vége. $\square$

**1.1. Definíció.** *Tetszőleges $n$ természetes szám és $x_1, \dots, x_n \in \mathbb{R}$ valós számok esetén az $(x_1, \dots, x_n)$ **rendezett** $n$-est (azaz $n$ szám kötött sorrendben) **vektor**-nak nevezzük, röviden* $\mathbf{x}$ *vagy* $\underline{x}$ *vagy* $\vec{x}$ *-lal jelöljük.* $\square$

A vektorok különböző jelölései között (*egyelőre*) nem teszünk különbséget:
$[x_1, \dots, x_n]$, $(x_1, \dots, x_n)$ (**sorvektor**ok) és
$$
\begin{bmatrix}
x_1 \\
\vdots \\
x_n
\end{bmatrix}
\tag{1.1}
$$
(**oszlopvektor**) ugyanazt jelölik.

**1.2. Definíció.** *A fenti esetben az $x_1, \dots, x_n$ valós számok az $\underline{x}$ vektor **komponensei** ("alkotórészei"). Ha $n$ rögzített, akkor $\mathbb{R}^n$ jelöli az összes vektor halmazát, és $\mathbb{R}^n$-et **vektortér**-nek nevezzük.* $\square$

A vektorok közötti műveleteket (összeadás és számmal való szorzás) és azok tulajdonságait most nem írjuk le, egyszerűek: *"komponensenként"*. Legtöbbször az *oszlopvektor* írásmód a szemléletes és egyszerűbb.

A gyakorlati életben például egy termék, gép paramétereinek (tulajdonságainak) listája is adott számok egy sorrendje, vagyis egy vektor.

Szöveg írásakor sokszor kényelmesebb sorvektorokat írnunk, számoláskor ("komponensenként") pedig oszlopvektorokat. Ezért hasznos a *transzponálás*[^1] művelete: az $\underline{x} = [x_1, \dots, x_n]$ *sorvektor* **transzponáltja** az (1.1)-ben szereplő *oszlopvektor*, melynek jele $\underline{x}^T$ vagy $[x_1, \dots, x_n]^T$, és megfordítva: ha a $\underline{v}$ vektor egy *oszlopvektor*, akkor a $\underline{v}^T$ a megfelelő *sorvektor*: ugyanazokat a komponenseket tartalmazza (ugyanabban a sorrendben). A vektorok és transzponálásuk speciális esetei a mátrixoknak és azok transzponálásainak.

[^1]: most nem zenei transzponálás, pedig rokon elnevezések.

**1.3. Definíció.** Adott $\underline{a}_1, \dots, \underline{a}_k \in \mathbb{R}^n$ vektorok **lineáris kombinációja** az alábbi
$$
\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k
\tag{1.2}
$$
kifejezés, ahol $\lambda_1, \dots, \lambda_k \in \mathbb{R}$ tetszőleges valós számok (**együtthatók**[^2]). A fenti kifejezésnek az **értéke** a $\underline{b}$ vektor:
$$
\underline{b} = \lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k ~,
\tag{1.3}
$$
és ez esetben azt mondjuk, hogy a $\underline{b}$ vektort **előállítottuk** az $\underline{a}_1, \dots, \underline{a}_k$ vektorokból.

[^2]: a banki szaknyelvben *koefficiensek*, angolul *co-efficients*, magyarul *szorzótényezők*.

**Megjegyzések:** *i)* **Tanácsos** a számokat és a vektorokat mindig hangsúlyozottan megkülönböztetni, mind írásban mind olvasásban, ez megkönnyíti az anyag jobb megértését!

*ii)* **Felmerül a kérdés:** tudunk-e az (1.2) lineáris kombinációnál bonyolultabb képleteket készíteni? Szerencsére a válasz: *nem*, ami azt jelenti, hogy akárhogyan is készítünk bonyolultabb képleteket zárójelekkel, szorzás és összeadás műveletekkel, a végeredmény mindig egyszerű lineáris kombináció lesz (legfeljebb a $\lambda_1, \dots, \lambda_k \in \mathbb{R}$ valós számok változnak). Ennek oka az, hogy *lineáris kombinációk lineáris kombinációja is az eredeti vektorok lineáris kombinációja*, ezt most nem bizonyítjuk. $\square$

**1.4. Példa.** *Próbáljuk meg előállítani az (adott)* $\underline{a}_1 := [3, -1, 0]^T$, $\underline{a}_2 := [0, -7, 5]^T$, $\underline{a}_3 := [-5, 4, 1]^T$, $\underline{a}_4 := [2, 1, 8]^T$ *vektorokból a* $\underline{b} := [1, 0, 6]^T$ *vektort. Ez nyilván a következőket jelenti:*

$$
\begin{bmatrix}
3 \\
-1 \\
0
\end{bmatrix} \cdot x_1 + 
\begin{bmatrix}
0 \\
-7 \\
5
\end{bmatrix} \cdot x_2 + 
\begin{bmatrix}
-5 \\
4 \\
1
\end{bmatrix} \cdot x_3 + 
\begin{bmatrix}
2 \\
1 \\
8
\end{bmatrix} \cdot x_4 = 
\begin{bmatrix}
1 \\
0 \\
6
\end{bmatrix}
$$
$$
\Updownarrow
$$
$$
\begin{bmatrix}
3x_1 \\
-1x_1 \\
0x_1
\end{bmatrix} + 
\begin{bmatrix}
0 \cdot x_2 \\
-7 \cdot x_2 \\
5 \cdot x_2
\end{bmatrix} + 
\begin{bmatrix}
-5 \cdot x_3 \\
4 \cdot x_3 \\
1 \cdot x_3
\end{bmatrix} + 
\begin{bmatrix}
2 \cdot x_4 \\
1 \cdot x_4 \\
8 \cdot x_4
\end{bmatrix} = 
\begin{bmatrix}
1 \\
0 \\
6
\end{bmatrix}
$$
$$
\Updownarrow
$$
$$
\begin{bmatrix}
3x_1 + 0 \cdot x_2 - 5 \cdot x_3 + 2 \cdot x_4 \\
-1x_1 - 7 \cdot x_2 + 4 \cdot x_3 + 1 \cdot x_4 \\
0x_1 + 5 \cdot x_2 + 1 \cdot x_3 + 8 \cdot x_4
\end{bmatrix} = 
\begin{bmatrix}
1 \\
0 \\
6
\end{bmatrix}
$$
$$
\Updownarrow
$$
$$
\begin{array}{ccccccc}
3x_1 & + & & -5x_3 & & + 2x_4 & = & 1 \\
-x_1 & & - 7x_2 & + 4x_3 & & + x_4 & = & 0 \\
& & 5x_2 & + x_3 & & + 8x_4 & = & 6
\end{array}
$$

**Tehát:** *Vektorok lineáris kombinációja $\Longleftrightarrow$ lineáris egyenletrendszer*

*Mint láthatjuk, ez a feladat egy többismeretlenes lineáris egyenletrendszer megoldásával egyenértékű (ekvivalens), amit jelenlegi ismereteink szerint meg tudunk ugyan oldani, de nehézkesen. A lineáris algebra (elsősorban az elemi bázistranszformáció) hatékony és kényelmes módszert fog adni mind a lineáris kombinációk, mind a lineáris egyenletrendszerek és más problémák megoldására is.*

**1.5. Definíció.** *Ha az összes $\lambda_1, \dots, \lambda_k$ együttható 0, akkor a*
$$
0 \cdot \underline{a}_1 + \dots + 0 \cdot \underline{a}_k
\tag{1.4}
$$
*kifejezést* **triviális** *lineáris kombináció-nak nevezzük, aminek értéke nyilván a $\underline{0}$ vektor.* $\square$

**Megjegyzések:** *i)* Az *előállítás* szó azonos a hétköznapi jelentésével: valami adott alkatrészekből (most az $\underline{a}_1, \dots, \underline{a}_k$ vektorokból) készítünk valami újat: most egy újabb vektort, $\underline{b}$-t.

*ii)* Ne tévesszük össze: $k$ a vektorok száma, míg $n$ a vektortér "kitevője" (a "dimenzió" szót egyelőre még tilos használni).

*iii)* "triviális" = "nyilvánvaló, nagyon egyszerű".

Hangsúlyozzuk, hogy az egész lineáris algebrában az első és *legfontosabb kérdés* az, hogy mely vektorokat *hogyan és hányféleképpen* (egy- vagy többféleképpen, azaz egyértelműen-e) lehet előállítani néhány, adott vektorból[^3].

[^3]: Hasonlóan, mint pl: molekulákból vegyületeket, logikai kapukból áramköröket, Lego elemekből nagyobb építményeket felépíteni.

Ezekre a kérdésekre (többek között) az alábbi 1.6. Definícióban, 1.9. Állításban, 1.10. Definícióban és 1.11. Tételben kapunk választ.

**1.6. Definíció.** *Egy tetszőleges adott $H = \{\underline{a}_1, \dots, \underline{a}_k\} \subset \mathbb{R}^n$ vektorhalmazt* **generátor-rendszer**-*nek hívunk, ha az $\mathbb{R}^n$ vektortér minden vektora előállítható $H$ elemeiből, azaz bármely $\underline{b} \in \mathbb{R}^n$ vektor esetén vannak olyan $\lambda_1, \dots, \lambda_k \in \mathbb{R}$ valós számok, amelyekre (1.3) teljesül.* $\square$

**Megjegyzés:** Ez az elnevezés teljesen érthető, mert "generálni" = "előállítani", pl. elektromos generátor, …

**1.7. Definíció.** *Egy tetszőleges adott $H = \{\underline{a}_1, \dots, \underline{a}_k\} \subset \mathbb{R}^n$ vektorhalmazt* **(lineárisan) független** *vektorrendszernek hívjuk, ha a*
$$
\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k = \underline{0}
\tag{1.5}
$$
*összefüggés (egyenlet) csak úgy teljesülhet, ha az összes $\lambda_i$ együttható értéke 0, azaz $\lambda_1 = \dots = \lambda_k = 0$.*

*Ezt úgy is mondhatjuk, hogy: a $\underline{0}$ vektor csak a triviális lineáris kombinációval állítható elő a $H$ halmaz vektoraiból.* $\square$

**Vigyázat:** az nyilvánvaló, hogy "triviális" lineáris kombináció esetén, vagyis amikor $\lambda_1 = \dots = \lambda_k = 0$, az (1.2)-beli $\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k$ összeg végeredménye a $\underline{0}$ vektor. *Azonban* a fenti Definíció ennek a *megfordítását* követeli meg: ez az összeg *másképpen nem lehet* a $\underline{0}$ vektor, vagyis mindenképpen *csak* $\lambda_1 = \dots = \lambda_k = 0$ lehet a $\underline{0}$ vektor előállításakor!

**Ezt nagyon alaposan meg kell értenünk**, a további Állítások ebben segítenek!

A "függetlenség" elnevezés igazi *magyarázatát* az alábbi Állítás adja meg.

**1.8. Állítás.** *A $H$ vektorhalmaz pontosan akkor lineárisan független, ha egyik $\underline{a}_i \in H$ vektor sem állítható elő $H$ többi elemeiből (lin. kombinációval), azaz nem létezik olyan $i \in \{1, \dots, k\}$ és olyan $\beta_1, \dots, \beta_k \in \mathbb{R}$ valós számok, amelyekre*
$$\beta_1 \cdot \underline{a}_1 + \dots + \beta_{i-1} \cdot \underline{a}_{i-1} + \beta_{i+1} \cdot \underline{a}_{i+1} + \dots + \lambda_k \cdot \underline{a}_k = \underline{a}_i\ . \tag{1.6}$$

**Vegyük észre**, hogy a fenti egyenlet *bal* oldalán az $\underline{a}_i$ vektor *nem* szerepel!

**Bizonyítás.** $\boxed{\Longleftarrow}$ Ha (1.6) teljesül, akkor mindkét oldalból $\underline{a}_i$-t kivonva kapjuk:
$$\beta_1 \cdot \underline{a}_1 + \dots + \beta_{i-1} \cdot \underline{a}_{i-1} - 1 \cdot \underline{a}_i + \beta_{i+1} \cdot \underline{a}_{i+1} + \dots + \lambda_k \cdot \underline{a}_k = \underline{0}\ , \tag{1.7}$$
ami a $\underline{0}$-nak egy *nem triviális* előállítása, ami ellentmond az 1.7. Definíciónak.

$\boxed{\Longrightarrow}$ Ha az 1.7. Definícióval ellentétben *van olyan* (1.5) lin. kombináció, amelyben *nem mindegyik* $\lambda_i$ együttható $0$, mondjuk éppen $\lambda_i \neq 0$, akkor az (1.5) lin. kombinációt átrendezhetjük:
$$\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_{i-1} \cdot \underline{a}_{i-1} + \lambda_{i+1} \cdot \underline{a}_{i+1} + \dots + \lambda_k \cdot \underline{a}_k = -\lambda_i \cdot \underline{a}_i \tag{1.8}$$
$$\frac{-\lambda_1}{\lambda_i} \cdot \underline{a}_1 + \dots + \frac{-\lambda_{i-1}}{\lambda_i} \cdot \underline{a}_{i-1} + \frac{-\lambda_{i+1}}{\lambda_i} \cdot \underline{a}_{i+1} + \dots + \frac{-\lambda_k}{\lambda_i} \cdot \underline{a}_k = \underline{a}_i\ , \tag{1.9}$$
vagyis a $\beta_j := \frac{-\lambda_j}{\lambda_i}\ (j \neq i)$ választással (1.6) teljesül. $\blacksquare$

**Magyarázat:** a fenti (1.6) összefüggés *kizárását* (tagadását) úgy is értelmezhetjük, hogy az $\underline{a}_i$ vektort nem tudjuk előállítani (helyettesíteni) a többi vektorral[^4], tehát $\underline{a}_i$ tényleg "nem függ" a többi vektortól!

[^4]: ez is tétel, de most nem mondjuk ki precízen.

Az 1.7. Definíció igazi *hasznát* (vagyis a "függetlenség" fogalom *fontosságát*) az alábbi Állítás adja meg.

**1.9. Állítás.** *A $H \subset \mathbb{R}^n$ vektorhalmaz pontosan akkor lineárisan független, ha az $\mathbb{R}^n$ tér bármely vektora legfeljebb egyféleképpen állítható elő $H$ elemeiből, azaz: bármely $\underline{b} \in \mathbb{R}^n$ vektorra az (1.3) egyenletnek (ahol az ismeretlenek a $\lambda_1, \dots, \lambda_k$ számok) vagy nincs megoldása, vagy csak egyetlen megoldása van.*

**Bizonyítás.** Ha van olyan $\underline{b} \in \mathbb{R}^n$ vektor, amely kétféleképpen állítható elő a $H = \{\underline{a}_1, \dots, \underline{a}_k\} \subset \mathbb{R}^n$ vektorhalmaz elemeiből, akkor
$$\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k = \underline{b} \tag{1.10}$$
és
$$\mu_1 \cdot \underline{a}_1 + \dots + \mu_k \cdot \underline{a}_k = \underline{b} \tag{1.11}$$
két különböző előállítás, vagyis van olyan $i$ index, amelyre $\lambda_i \neq \mu_i$. A fenti két egyenletet egymásból kivonva kapjuk:
$$(\lambda_1 - \mu_1) \cdot \underline{a}_1 + \dots + (\lambda_k - \mu_k) \cdot \underline{a}_k = \underline{0}\ . \tag{1.12}$$
Mivel $\lambda_i \neq \mu_i$, ezért a fenti egyenlőség a $\underline{0}$-nak egy *nem triviális* előállítása, vagyis ellentmond az 1.7. Definíciónak.

*Megfordítva:* tegyük fel, hogy létezik a $\underline{0}$-nak egy *nem triviális* előállítása:
$$\nu_1 \cdot \underline{a}_1 + \dots + \nu_k \cdot \underline{a}_k = \underline{0}\ , \tag{1.13}$$
vagyis valamelyik együttható[^5] $\nu_i \neq 0$. Tekintsük most egy (akármely) $\underline{b} \in \mathbb{R}^n$ vektor (1.10)-beli előállítását. Az (1.10) és (1.13) egyenleteket összeadva kapjuk:
$$(\lambda_1 + \nu_1) \cdot \underline{a}_1 + \dots + (\lambda_k + \nu_k) \cdot \underline{a}_k = \underline{b}\ , \tag{1.14}$$
ami $\nu_i \neq 0$ miatt különbözik az (1.10) előállítástól. $\blacksquare$

[^5]: Ez már önmagában is bizonyítja a Tétel második felét, de a folytatásban ennél még többet bizonyítunk.

**Megjegyzés:** Észrevehetjük, hogy az 1.7. Definíció a $\underline{0}$ vektor egyértelmű előállítását követelte meg (lásd az (1.5) egyenletet), és a fenti állítás szerint a $\underline{0}$ vektor egyértelmű előállítása *ekvivalens* az $\mathbb{R}^n$ tér *bármely* (összes) $\underline{b}$ vektorának legfeljebb egyértelmű előállításának lehetőségével!

Most jön a lényeg: az 1.6. Definíció és az 1.9. Állítás kapcsolatát már magunk is sejthetjük. A szokásos definíció a következő:

**1.10. Definíció.** Tetszőleges $H = \{\underline{a}_1, \dots, \underline{a}_k\} \subset \mathbb{R}^n$ vektorhalmazt az $\mathbb{R}^n$ tér ***bázisának*** nevezzük, ha lineárisan független és generátorrendszer. $\square$

Azonban *nem* a fenti definíció a lényeg: a *bázisok* lényeges tulajdonságát az 1.6. Definíció és az 1.9. Állítás összevetésével kapjuk meg, az alábbi Tételben (!), és *hangsúlyozzuk*: **ez a legfontosabb** fogalom (összefüggés), az egész Lineáris Algebra elmélet erre épül!!!

**1.11. Tétel.** *Egy tetszőleges $H = \{\underline{a}_1, \dots, \underline{a}_k\} \subset \mathbb{R}^n$ vektorhalmaz pontosan akkor bázis, ha az $\mathbb{R}^n$ tér bármely vektora PONTOSAN egyféleképpen!!! állítható elő $H$ elemeiből, azaz bármely $\underline{v} \in \mathbb{R}^n$ vektorra az (1.3) egyenletnek*
$$\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k = \underline{v} \tag{1.15}$$
*pontosan egy megoldása van, vagyis a $\lambda_1, \dots, \lambda_k$ számok egyértelműek.* $\square$

A fenti Tétel magyarázza meg az 1.10. Definíciót és a "bázis" elnevezést ("bázis" = alapja valaminek, belőle minden előállítható, *és* egyértelműen), még jobb elnevezés lenne: *"$H$ bázisa az $\mathbb{R}^n$ térnek"*.

Még egyszer hangsúlyozzuk, hogy az 1.11. Tétel nagyon egyszerű következménye az előtte felsorolt ismereteknek, és az egész Lineáris Algebra elmélet erre épül!

Nagyon fontos még az 1.19. Következmény (tétel) alább.

**1.12. Definíció.** *Ha adott egy tetszőleges $H \subset \mathbb{R}^n$ bázis, akkor az (1.15) egyenletben szereplő (egyértelmű) $\lambda_1, \dots, \lambda_k$ számokat a $\underline{v} \in \mathbb{R}^n$ vektornak a "$H$ bázisra vonatkozó **koordinátái**"-nak nevezzük, és*
$$[\underline{v}]_H := [\lambda_1, \dots, \lambda_k] \tag{1.16}$$
*jellel jelöljük.* $\square$

**1.13. Állítás.** *Speciálisan: Ha a $\underline{v}$ vektor megegyezik valamelyik bázisvektorral ($\underline{v} \in H$, vagy "$\underline{v}$ a bázisban van"), mondjuk $\underline{v} = \underline{a}_t$ ahol $H = \{\underline{a}_1, \dots, \underline{a}_k\}$ egy bázisa $\mathbb{R}^n$-nek ($1 \le t \le k$), akkor nyilván*
$$0 \cdot \underline{a}_1 + \dots + 0 \cdot \underline{a}_{t-1} + 1 \cdot \underline{a}_t + 0 \cdot \underline{a}_{t+1} + \dots + 0 \cdot \underline{a}_k = \underline{a}_t = \underline{v}\ , \tag{1.17}$$
*vagyis az egyértelműség miatt*
$$[\underline{v}]_H = [0, \dots, 0, 1, 0, \dots, 0]\ , \tag{1.18}$$
*azaz "báziselem koordinátái = 1$\times$ önmaga + 0$\times$ többi".* $\square$

**Megjegyzések:** Vegyük észre, hogy a koordináták is egy rendezett $n$-es, a komponensekhez hasonlóan. Míg egy vektor *komponensei* "alapból" adottak (hiszen így adjuk meg a vektort), ehhez semmilyen bázis nem kell; a *koordinátákhoz* mindig kell egy bázis, vagyis bázis nélkül nincsenek koordináták!

Nem csak egy, hanem végtelen sok (különböző) bázis van!

Lényeges még, hogy ugyanannak a vektornak más és más bázisban mások a koordinátái, hiszen ha például $H = \{\underline{a}_1, \dots, \underline{a}_k\}$ és $B = \{\underline{b}_1, \dots, \underline{b}_k\} \subset \mathbb{R}^n$ az $\mathbb{R}^n$ tér két különböző bázisa, akkor *bármely* $\underline{v} \in \mathbb{R}^n$ vektornak a $[\underline{v}]_H$ és $[\underline{v}]_B$ koordinátáit meghatározó egyenletei is mások:
$$\lambda_1 \cdot \underline{a}_1 + \dots + \lambda_k \cdot \underline{a}_k = \underline{v} \tag{1.19}$$
illetve
$$\mu_1 \cdot \underline{b}_1 + \dots + \mu_k \cdot \underline{b}_k = \underline{v}\ , \tag{1.20}$$
és így természetesen a megoldásaik is különbözőek:
$$[\underline{v}]_H = [\lambda_1, \dots, \lambda_k] \tag{1.21}$$
és
$$[\underline{v}]_B = [\mu_1, \dots, \mu_k]\ . \tag{1.22}$$

Egy nagyon egyszerű, de nagyon fontos tény a következő:

**1.14. Állítás.** *i)* a $\underline{0}$ (nullvektor) koordinátái minden $B$ bázisban $[0, \dots, 0]$, hiszen $0 \cdot \underline{b}_1 + \dots + 0 \cdot \underline{b}_k = \underline{0}$ bármely $\{\underline{b}_1, \dots, \underline{b}_k\}$ vektorokra és a koordináták egyértelműek; *ii)* bármely $B$ bázisban csak a $\underline{0}$ koordinátái a $[0, \dots, 0]$, vagyis minden más vektornak legalább egy koordinátája nem $0$. $\square$

Az alábbi ábrákon a fentieket megpróbáljuk szemléltetni (most $n = 2$). Az ábrák nagy felbontásban megtalálhatóak a <https://math.uni-pannon.hu/~szalkai/bazis-ij-v-ab-halo.pdf> címen.

*Ábra: A standard $\{\underline{i}, \underline{j}\}$ bázis grid hálón.*

*Ábra: $\underline{v}$ a standard $\{\underline{i}, \underline{j}\}$ bázisban, ahol $\underline{v} = (-1.72)\cdot\underline{i} + (-2.75)\cdot\underline{j}$ (zöld vektor).*

*Ábra: Az új $\{\underline{a}, \underline{b}\}$ bázis és a $\underline{v}$ vektor a standard hálón, ahol $\underline{a} = (4,2)$ (narancs), $\underline{b} = (-2,1)$ (piros), $\underline{v} = (-1.72, -2.75)$ (zöld).*

*Ábra: $\underline{v}$ az új $\{\underline{a}, \underline{b}\}$ bázisban, ferde koordinátahálón mérve, ahol $\underline{v} \approx -0.90\cdot\underline{a} - 0.95\cdot\underline{b}$.*

Az ábráról geometriailag (szemmel) is leolvashatjuk, vonalzóval le is mérhetjük, és később kiszámoljuk, hogy $\underline{a} = (4, 2)$, $\underline{b} = (-2, 1)$, $\underline{v} = (-1.72,\ -2.75)$, sőt
$$\underline{v} = -1.72 \cdot \underline{i} - 2.75 \cdot \underline{j} \approx (-0.90) \cdot \underline{a} + (-0.95) \cdot \underline{b}\ , \tag{1.23}$$
*vagyis* a $\underline{v}$ vektor koordinátái az új $\{\underline{a},\ \underline{b}\}$ bázisban
$$[\underline{v}]_{\{\underline{a}, \underline{b}\}} \approx [-0.90,\ -0.95]\ . \tag{1.24}$$
A fenti számok könnyen ellenőrizhetők: (1.23) alapján
$$(-0.90) \cdot \begin{bmatrix} 4 \\ 2 \end{bmatrix} + (-0.95) \cdot \begin{bmatrix} -2 \\ 1 \end{bmatrix} = \begin{bmatrix} -1.7 \\ -2.75 \end{bmatrix} \approx \underline{v}\ . \tag{1.25}$$

A pontos számok (magasabb dimenziók esetén is!) a következő fejezetben megismerendő *"elemi bázistranszformáció"* módszerrel kaphatók meg, szemmérték használata nélkül.

Lényeges még az 1.19. Következmény (tétel) alább, de sorban kell haladnunk.

Rögzített bázis esetén a műveletek (összeadás és számmal való szorzás) ugyanúgy végezhetőek el koordinátákkal, mint komponensekkel, de lényeges, hogy a vektorok koordinátái ugyanabban a bázisban legyenek megadva!

Egy nagyon speciális és nagyon fontos bázis a következő.

**1.15. Definíció.** *Tekintsük a következő (speciális) $\underline{e}_1, \dots, \underline{e}_n \in \mathbb{R}^n$ vektorokat:*
$$\underline{e}_1 = \begin{bmatrix} 1 \\ 0 \\ 0 \\ \vdots \\ 0 \end{bmatrix}\ ,\ \underline{e}_2 = \begin{bmatrix} 0 \\ 1 \\ 0 \\ \vdots \\ 0 \end{bmatrix}\ ,\ \underline{e}_3 = \begin{bmatrix} 0 \\ 0 \\ 1 \\ \vdots \\ 0 \end{bmatrix}\ ,\ \dots\ ,\ \underline{e}_n = \begin{bmatrix} 0 \\ 0 \\ 0 \\ \vdots \\ 1 \end{bmatrix}\ , \tag{1.26}$$
*azaz az $i$-edik vektornak ($\underline{e}_i$) éppen az $i$-edik komponense (!) $1$, a többi komponense $0$.*

*Az $E := \{\underline{e}_1, \dots, \underline{e}_n\} \subset \mathbb{R}^n$ vektorhalmazt **standard** (sztenderd) vagy **kanonikus bázis**-nak hívjuk, az $\underline{e}_1, \dots, \underline{e}_n$ vektorokat pedig standard bázisvektoroknak.* $\square$

**Házi Feladat:** Nagyon egyszerű és nagyon fontos: $E$ valóban bázis ("standard" = "alap").

**1.16. Példa.** *Legyen $n = 5$, $\underline{v} = [3, 2, 0, -1, 4]$, ekkor nyilván*
$$3 \cdot \begin{bmatrix} 1 \\ 0 \\ 0 \\ 0 \\ 0 \end{bmatrix} + 2 \cdot \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \\ 0 \end{bmatrix} + 0 \cdot \begin{bmatrix} 0 \\ 0 \\ 1 \\ 0 \\ 0 \end{bmatrix} + (-1) \cdot \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \\ 0 \end{bmatrix} + 4 \cdot \begin{bmatrix} 0 \\ 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} = \begin{bmatrix} 3 \\ 2 \\ 0 \\ -1 \\ 4 \end{bmatrix}\ , \tag{1.27}$$
vagyis
$$3 \cdot \underline{e}_1 + 2 \cdot \underline{e}_2 + 0 \cdot \underline{e}_3 + (-1) \cdot \underline{e}_4 + 4 \cdot \underline{e}_5 = \underline{v}\ . \tag{1.28}$$
*Ez azt jelenti, hogy $\underline{v}$ vektornak az $E$ bázisra vonatkozó koordinátái*
$$[\underline{v}]_E = [3, 2, 0, -1, 4] \tag{1.29}$$
*éppen a $\underline{v}$ vektor eredeti komponensei!* $\square$

A fenti összefüggés mindig igaz:

**1.17. Állítás.** *Tetszőleges $\mathbb{R}^n$ térben tetszőleges $\underline{v} \in \mathbb{R}^n$ vektornak a standard bázisra vonatkozó koordinátái megegyeznek $\underline{v}$ komponenseivel.* $\square$

Megjegyezzük, hogy más bázisokra vonatkozó koordináták meghatározása, vagyis az (1.15) egyenletrendszer megoldása nem egyszerű feladat, ezt később tanuljuk meg (az elemi bázistranszformáció segítségével).

Az alábbi (fontos!) tételek a különböző vektorhalmazok méreteiről adnak felvilágosítást. Egy technikai eredménnyel kell kezdenünk:

**1.18. Tétel. *Steinitz-féle kicserélési Tétel:*** *Ha $G \subset \mathbb{R}^n$ tetszőleges generátorrendszer és $L \subset \mathbb{R}^n$ tetszőleges lineárisan független vektorhalmaz, akkor bármely $\underline{u} \in L$ vektorhoz található olyan $\underline{w} \in G$ vektor, hogy az $L \smallsetminus \{\underline{u}\} \cup \{\underline{w}\}$ vektorhalmaz is lineárisan független (tehát $L$-ben $\underline{u}$-t kicserélhetjük $\underline{w}$-re, és még mindig független marad).* $\square$

Nekünk azonban ennek a tételnek *csak* a következményeire van szükségünk, amik viszont **rendkívül fontosak** mind elméleti, mind gyakorlati problémák megoldásánál!

**1.19. Következmény.**
*i)* Tetszőleges $G$ generátorrendszer és $L$ lineárisan független vektorhalmazra
$$|L| \le |G|\ , \tag{1.30}$$
*ii)* tetszőleges $G$ generátorrendszer, $L$ független és $B$ bázis esetén
$$|L| \le |B| \le |G|\ , \tag{1.31}$$
*iii)* tetszőleges $B_1$, $B_2$ bázisok esetén
$$|B_1| = |B_2|\ , \tag{1.32}$$
*iv)* tetszőleges $B \subset \mathbb{R}^n$ bázisra
$$|B| = n\ , \tag{1.33}$$
*v)* tetszőleges $G$ generátorrendszer, $L$ független és $B$ bázis esetén, $\mathbb{R}^n$-ben
$$|L| \le n\ ,\quad |B| = n\ ,\quad n \le |G|\ . \tag{1.34}$$
$\square$

**Tehát** szavakban: $\mathbb{R}^n$-ben lineárisan független $L$ halmazban *legfeljebb* $n$, generátorrendszer $G$ halmazban *legalább* $n$, és minden $B$ bázisban *pontosan* $n$ elem lehetséges csak!

Minden bázis elemszáma *ugyanannyi*, és ez $n$-nel egyezik meg. Emiatt például már az 1.10. Definíció utáni összes képletben $n$ elemű bázisokat kellett volna írnunk, vagyis $k = n$.

**1.20. Definíció.** *Tetszőleges vektortérben*[^6] *a bázisok közös (ugyanannyi) elemszámát, vagyis az (1.32)-ben szereplő $n$ számot nevezzük a vektortér **dimenziójá**-nak (ami éppen $=n$). Jelben: $n = \dim(\mathbb{R}^n)$.* $\square$

[^6]: **Megjegyzés:** Nem csak az $\mathbb{R}^n$ halmaz elemei között lehetséges összeadni és számmal szorozni, például mátrixok, polinomok, függvények, sorozatok, … között is, és ekkor ezeket a matematikai objektumokat is vektoroknak hívjuk, halmazukat pedig **általános** vagy **absztrakt vektortereknek**. A lineáris algebra összes kérdése vizsgálható (és hasznos) absztrakt vektorterekben is, mi ezzel most nem foglalkozunk.

A legtöbb vektorhalmaz (ami "kezünk ügyébe kerül") általában nem bázis (bár néha az is lehet), például nem lineárisan független (lásd pl. az 1.8. Állítást). Felmerül a kérdés: ebből a vektorhalmazból *legfeljebb* hány vektort tudunk kiválasztani úgy, hogy a kiválasztott vektorok (rész)halmaza még lineárisan független legyen[^7].

[^7]: Egy *hasonló* probléma: adott társaságból legfeljebb hány személyt lehet kiválasztani úgy, hogy a kiválasztott személyek között senki nem haragosa senkinek?

**1.21. Definíció.** *Tetszőleges $H \subset \mathbb{R}^n$ vektorhalmaz esetén $H$ **rangja** az a legnagyobb $r$ egész szám, amelyre teljesül: $H$-ban található $r$-elemű, lineárisan független részhalmaz, vagyis van olyan $A \subseteq H$ részhalmaz, amely lineárisan független, $|A| = r$ és $r$ a legnagyobb ilyen szám. Ezt az $r$ számot $r(H)$-val jelöljük.* $\square$

**1.22. Állítás.** *Nyilván $H \subset \mathbb{R}^n$ esetén*
$$r(H) \le |H|\quad \text{és}\quad r(H) \le n\ . \tag{1.35}$$
$\square$

A fenti definíciót kétféleképpen is lehetne értelmezni vagy kiszámolni. *Egyrészt:* ha kivettem néhányat ($r_1$ db-ot), és már nem tudok újabbat *hozzávenni* hogy a lineáris függetlenség megmaradjon (tehát a kiválasztott $r_1$ db vektor részhalmaz *tovább már nem bővíthető*), akkor ez már maximum; vagy *másrészt*: dobjuk vissza a kiválasztott $r_1$ db vektort, kezdjük újra a kiválasztást, és lehetséges, hogy másodjára már (ügyesebben) $r_1$-nél *több* db vektort tudunk kiválasztani (amik lineárisan függetlenek)!

Szerencsére egy Tétel mondja ki, hogy ha már a "kezünkben" egy (akármilyen), *tovább már nem bővíthető* részhalmaz van, akkor ennek elemszáma már megadja a(z) (eredeti) vektorhalmaz rangját.

$r(H)$ kiszámolását a későbbi anyagban tanuljuk meg, az elemi bázistranszformáció segítségével.

# 2. fejezet — Bázistranszformáció

Célunk ebben a fejezetben adott (tetszőleges) *vektorhalmazokról* eldönteni, hogy lineárisan független / generátorrendszer / bázist alkotnak-e, valamint adott további vektorok koordinátáinak kiszámolása. Ez a definíció alapján, lineáris egyenletrendszerekkel ugyan megoldható, de az ebben a fejezetben ismertetett "Elemi Bázistranszformáció" *táblázat* és algoritmus segítségével sokkal könnyebben kapunk választ a fenti kérdésekre.

A fejezet három nagy részre bomlik:

**i)** a bázistranszformációs táblázat és a benne tárolt információk,

**ii)** maga a bázistranszformáció számolása,

**iii)** a bázistranszformáció alkalmazása (a számolás után).

Felhívjuk a figyelmet, hogy a táblázat nagyon sűrítetten tárol nagyon sok fontos információt, amelyek *alapos* megértése és megtanulása nélkül nem tudjuk később alkalmazni a "bázistranszformáció" nevű számolási módszert! Nem maga a konkrét számolás (osztom, szorzom, kivonom, …) a nehéz, hanem a számolás végén kapott *újabb* (végső) táblázatból az eredmények, a válasz leolvasásához kell tudnunk értelmezni a táblázat sorait és oszlopait! Márpedig a lineáris algebra (és a lineáris programozás) legtöbb kérdését, számítását az alábbiakban ismertetett Elemi Bázistranszformáció[^8] segítségével oldjuk meg!

[^8]: "transzformáció" = átalakítás, átformálás.

## 2.1. A bázistranszformációs táblázat és benne az információk

A táblázat általános alakja (lényeges az oszlopok és sorok jól láthatósága):

$$\begin{array}{|c||c|c|c|c|c||c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \dots & \underline{a}_k & \underline{b} \\
\hline\hline
\underline{u}_1 & x_{1,1} & x_{1,2} & x_{1,3} & \dots & x_{1,k} & y_1 \\
\hline
\underline{u}_2 & x_{2,1} & x_{2,2} & x_{2,3} & \dots & x_{2,k} & y_2 \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_n & x_{n,1} & x_{n,2} & x_{n,3} & \dots & x_{n,k} & y_n \\
\hline
\end{array} \qquad (2.1)$$

**ahol:**
- az $x_{i,j}$ és $y_i$ valós számok,
- az $\underline{a}_1, \dots, \underline{a}_k$, $\underline{b}$ és $\underline{u}_1, \dots, \underline{u}_n$ vektorok *nevei*,
- speciálisan ha $\underline{e}_1, \dots, \underline{e}_n$ "feliratokat" látunk, akkor azok a *standard* bázisvektorok, vagyis $[0,\dots,0,1,0,\dots,0]$ alakúak (általában oszlopvektorokra gondolunk).

A fenti táblázatban szereplő adatok *jelentése* a következő:
- $\{\underline{u}_1, \dots, \underline{u}_n\}$ *mindig egy bázis* ("aktuális" bázis)!!!, vagyis érvényes rá az 1.11. Tétel,
- az $\underline{a}_j$ illetve $\underline{b}$ felirat (vektor-név) alatti *számoszlop* az $\underline{a}_j$ ill. a $\underline{b}$ vektor *koordinátái* az $\{\underline{u}_1, \dots, \underline{u}_n\}$ aktuális bázisra vonatkozóan, azaz (**lényeges!**):

$$\underline{a}_j = x_{1,j} \cdot \underline{u}_1 + x_{2,j} \cdot \underline{u}_2 + \dots + x_{n,j} \cdot \underline{u}_n \qquad (2.2)$$

és

$$\underline{b} = y_1 \cdot \underline{u}_1 + y_2 \cdot \underline{u}_2 + \dots + y_n \cdot \underline{u}_n . \qquad (2.3)$$

Ezt úgy mondjuk, hogy: "az $\underline{a}_j$ ill. a $\underline{b}$ vektort előállítottuk az $\{\underline{u}_1, \dots, \underline{u}_n\}$ vektorok lineáris kombinációjaként".

Az $\{\underline{u}_1, \dots, \underline{u}_n\}$ bázist azért hívjuk "aktuális"-nak, mert a "bázistranszformáció" (bázist átalakító) módszer megváltoztatja ezt a bázist, és megmutatja, hogy az *új* bázisban mik lesznek a (változatlan) $\underline{a}_1, \dots, \underline{a}_k$ és $\underline{b}$ vektorok koordinátái.

**Hasznos észrevétel:** *Ha* speciálisan valamelyik $\underline{a}_j$ "betű" (vektor) szerepel az $\{\underline{u}_1, \dots, \underline{u}_n\}$ (aktuális) bázisban, azaz $\underline{a}_j \in \{\underline{u}_1, \dots, \underline{u}_n\}$, például $\underline{a}_j = \underline{u}_t$, akkor nyilván (az egyértelműség miatt)

$$\underline{a}_j = 0 \cdot \underline{u}_1 + \dots + 0 \cdot \underline{u}_{t-1} + 1 \cdot \underline{u}_t + 0 \cdot \underline{u}_{t+1} + \dots + 0 \cdot \underline{u}_n , \qquad (2.4)$$

vagyis az $\underline{a}_j$ alatti számoszlop (az $\underline{a}_j$ koordinátái) csupa 0 és a megfelelő helyen egy db 1. (Ezt már az 1.13. Állításban is megállapítottuk!)

Ez megfordítva is igaz: *ha* a táblázatban valamelyik $\underline{a}_j$ alatti számoszlop csupa 0 és a megfelelő helyen egy db 1, akkor a koordináták definíciója miatt (2.4) teljesül, vagyis $\underline{a}_j = \underline{u}_t$, ami azt jelenti, hogy az $\underline{a}_j$ vektor az (aktuális) $\{\underline{u}_1, \dots, \underline{u}_n\}$ bázis egyik eleme!

**Például** legyenek adottak az $\underline{a}_1 = [1, 2, 0, 3]^T$, $\underline{a}_2 = [0, 0, 0, 1]^T$, $\underline{a}_3 = [0, 4, 4, 0]^T$, $\underline{a}_4 = [3, 2, 4, 5]^T$ és $\underline{a}_5 = [2, 8, 4, 10]^T$ vektorok. Milyen $\{\underline{u}_1, \dots, \underline{u}_n\}$ bázis esetén (és hogyan) tölthetjük ki a táblázatot, vagyis milyen $\{\underline{u}_1, \dots, \underline{u}_n\}$ bázisra vonatkozó koordinátáit tudjuk az $\underline{a}_1, \dots, \underline{a}_5$ vektoroknak?

Mint az 1.4. Példában láttuk, ez *tetszőleges* $\{\underline{u}_1, \dots, \underline{u}_n\}$ bázis esetén nem egyszerű feladat. Azonban az 1.17. Állítás alapján az $\{\underline{e}_1, \dots, \underline{e}_n\}$ *standard* bázisra vonatkozó koordináták egyszerűen a vektorok komponensei, tehát (az esetek zömében) az **induló táblázat**

$$\begin{array}{|c||c|c|c|c|c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \underline{a}_4 & \underline{a}_5 \\
\hline\hline
\underline{e}_1 & 1 & 0 & 0 & 3 & 2 \\
\hline
\underline{e}_2 & 2 & 0 & 4 & 2 & 8 \\
\hline
\underline{e}_3 & 0 & 0 & 4 & 4 & 4 \\
\hline
\underline{e}_4 & 3 & 1 & 0 & 5 & 10 \\
\hline
\end{array} .$$

Ne csak azt jegyezzük meg gépiesen, hogy *"a vektorok komponenseit oszloponként írtuk be a táblázatba"* (mind oszlopvektorokat), hanem inkább ennek okait, megismételve:
- egy vektor alatti *számoszlop* a vektor *koordinátái* az aktuális bázisra vonatkozóan,
- tetszőleges vektornak a standard bázisra vonatkozó koordinátái megegyeznek a vektor komponenseivel.

**Tehát**, általában egy feladatot mindig úgy kezdünk, hogy a táblázatot a standard bázissal írjuk fel, majd átalakítjuk (transzformáljuk) a bázist a kívánt alakra, és végül a legutolsó táblázatból leolvassuk az eredeti kérdésre adandó választ. Ehhez azonban a táblázat adatainak jelentését alaposan meg kell értenünk és jegyeznünk!

A fenti példában vegyünk észre egy specialitást: az $\underline{a}_2$ vektor oszlopa csupa 0 és egyetlen 1. Ez nem véletlen: vegyük észre azt is, hogy $\underline{a}_2$ éppen az $\underline{e}_4$ vektorral azonos, $\underline{a}_2 = \underline{e}_4$, és az $\underline{a}_2$ vektor oszlopában pontosan az $\underline{e}_4$ sorában van az egyetlen 1, vagyis $\underline{a}_2$-nek éppen az $\underline{e}_4$-re vonatkozó koordinátája nem nulla. Ez pedig ismét az 1.13. Állítás miatt van: $\underline{a}_2$ báziselem, tehát koordinátái (= oszlopa) = "$1\times$ önmaga + 0-szor a többi".

## 2.2. A bázistranszformáció számolása

A *bázistranszformáció* számolása könnyen megtanulható, de hangsúlyozzuk, hogy a végeredményt csak akkor tudjuk leolvasni a legutolsó táblázatból, ha a táblázat adatait értelmezni tudjuk az előző fejezetben leírtak alapján.

Tehát adott egy (2.1) alakú táblázat, és csak az $\{\underline{u}_1, \dots, \underline{u}_n\}$ bázist változtatjuk meg. Az $\underline{a}_1, \dots, \underline{a}_k$ és $\underline{b}$ vektorok változatlanok maradnak, de mint tudjuk, az *új* bázisra vonatkozó koordinátáik (vagyis az alattuk levő oszlopok) megváltoznak — ezeket akarjuk kiszámolni.

A *bázistranszformáció* csak úgy működik, ha a $H := \{\underline{u}_1, \dots, \underline{u}_n\}$ halmaz egyik eleme, mondjuk $\underline{u}_i$ helyére valamelyik $\underline{a}_j$ vektort tesszük, vagyis az *új bázis*

$$\{\underline{u}_1, \dots, \underline{u}_{i-1}, \underline{a}_j, \underline{u}_{i+1}, \dots, \underline{u}_n\} \qquad (2.5)$$

vagy tömörebben: $H \setminus \{\underline{u}_i\} \cup \{\underline{a}_j\}$ lesz az új bázis. Ezt úgy mondjuk, hogy "$\underline{u}_i$ kimegy és $\underline{a}_j$ bemegy" a bázisba, vagyis váltják egymást[^9]. Ezt a bázistranszformációt azért hívják *elemi*-nek, mert az új bázis csak egyetlen elemben ($\underline{u}_i$ helyett $\underline{a}_j$) különbözik a régi bázistól. Nyilván elegendően sok elemi csere után az eredeti bázisnak akárhány, akár az összes elemét is ki tudjuk cserélni.

[^9]: mint néha a politikusok.

Lássuk tehát az új táblázat kiszámolásának módját.

$$\begin{array}{|c||c|c|c|c|c|c|c||c|c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & . & \underline{a}_j & . & \underline{a}_k & \underline{b} & \underline{v} \\
\hline\hline
\underline{u}_1 & x_{1,1} & x_{1,2} & x_{1,3} & . & x_{1,j} & . & x_{1,k} & y_1 & v_1 \\
\hline
\underline{u}_2 & x_{2,1} & x_{2,2} & x_{2,3} & . & x_{2,j} & . & x_{2,k} & y_2 & v_2 \\
\hline
\dots & \dots & \dots & \dots & . & \dots & . & \dots & \dots & \dots \\
\hline
\underline{u}_i & x_{i,1} & x_{i,2} & x_{i,3} & . & \boxed{x_{i,j}} & . & x_{i,k} & y_i & v_i \\
\hline
\dots & \dots & \dots & \dots & . & \dots & . & \dots & \dots & \dots \\
\hline
\underline{u}_n & x_{n,1} & x_{n,2} & x_{n,3} & . & x_{n,j} & . & x_{n,k} & y_n & v_n \\
\hline
\end{array} \implies$$

$$\implies \begin{array}{|c||c|c|c|c|c|c|c||c|c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & . & \underline{a}_j & . & \underline{a}_k & \underline{b} & \underline{v} \\
\hline\hline
\underline{u}_1 & ? & ? & ? & . & 0 & . & ? & ? & ? \\
\hline
\underline{u}_2 & ? & ? & ? & . & 0 & . & ? & ? & ? \\
\hline
\dots & \dots & \dots & \dots & . & \dots & . & \dots & \dots & \dots \\
\hline
\underline{a}_j & ? & ? & ? & . & \boxed{1} & . & ? & ? & ? \\
\hline
\dots & \dots & \dots & \dots & . & \dots & . & \dots & \dots & \dots \\
\hline
\underline{u}_n & ? & ? & ? & . & 0 & . & ? & ? & ? \\
\hline
\end{array}$$

A baloldalon láthatjuk a régi, a jobb oldalon pedig a keresett új táblázatot.

Figyeljük meg, hogy a baloldali oldallécekben levő bázisok a régi: $H := \{\underline{u}_1, \dots, \underline{u}_n\}$, illetve az új: $H \setminus \{\underline{u}_i\} \cup \{\underline{a}_j\}$ azaz (2.5) látható.

Az $\underline{u}_i$ báziselem sorának és az $\underline{a}_j$ új vektor oszlopának kereszteződésében levő számot[^10] bejelöltük, ezt a számot *hívjuk* **fő-**, **generáló** vagy pivot[^11] **elemnek**, és mivel még sokat számolunk vele, az egyszerűség végett jelöljük csak $g$-vel:

$$g := x_{i,j} . \qquad (2.6)$$

[^10]: ami egyébként az $\underline{a}_j$ vektornak az $\underline{u}_i$ vektorhoz tartozó *koordinátája*!
[^11]: A *pivot* angol szó jelentése: *tengely, sarkpont, csukló, …*, ami körül valami megfordul, esetünkben $\underline{u}_i$ és $\underline{a}_j$.

A táblázatban az $\underline{a}_1, \dots, \underline{a}_k$ és a $\underline{b}, \underline{v}, \dots$ vektorokat elválasztó függőleges dupla vonal mindössze csak annyit jelent, hogy az $\underline{a}_1, \dots, \underline{a}_k$ vektorok valamelyikét akarjuk bevinni a bázisba, a $\underline{b}, \underline{v}, \dots$ vektorokat pedig nem. Az aktuális feladatból tudjuk majd meg, hogy mely vektorokat kell és melyeket nem kell bevinni a bázisba. Azonban az alább következő számolásokat mindegyik vektorra (oszlopra) egyformán kell végrehajtanunk, ekkor nincs jelentősége ennek a függőleges vonalnak.

Az alább következő számolási módszer csak kis részletekben tér el kollégáim módszerétől, az én számolási módszeremet ők is elfogadják.

**2.1. Tétel.** *Ha a főelem nem nulla, vagyis*

$$g = x_{i,j} \neq 0 , \qquad (2.7)$$

*akkor az $\underline{a}_j$ vektor bevihető a $H$ bázisba az $\underline{u}_i$ vektor helyére (vagyis az új $H \setminus \{\underline{u}_i\} \cup \{\underline{a}_j\}$ halmaz is bázist alkot), és az új táblázat elemeit a következő lépésekben leírt módon számolhatjuk ki.*

Hangsúlyozzuk, hogy az alábbiakban *nem* a matematikai képleteket írjuk le (minden könyvben megtalálhatóak, és azok csak a számítógép-programoknak kellenek), hanem a papír-ceruza kézzel számolós magyarázatot, amire a zh-ban lesz szükségünk.

**0.) lépés:** *főelem kiválasztása* (= generáló/pivot elem). Egyetlen szabály: nem lehet nulla: $g \neq 0$. Papíron be szoktuk karikázni, én inkább a szögletes $\boxed{x_{i,j}}$ "bekeretezést" ajánlom, mert nálunk a kör alakú karikázás mást jelent majd.

Mint említettük, egyedül csak a baloldali oldalléc változott: $\underline{u}_i$ helyett $\underline{a}_j$ neve szerepel. Azonban az oszlopok *nevei* változatlanok, hiszen minden oszlop ugyanannak a vektornak az adatait tartalmazza (csak egy új bázisban). **Ezért** hangsúlyozottan javaslom, hogy a második (és harmadik …) táblázatot az első táblázat *alá* írjuk, mindegyik $\underline{a}_\ell$ oszlop az eredeti $\underline{a}_\ell$ oszlop alá kerüljön (ekkor már felesleges az "$\underline{a}_1,\dots,\underline{a}_k,\underline{b},\underline{v}$" fejlécet ismét kiírni!), ez sokban megkönnyíti a számolást és az adatok értelmezését! Tehát:

$$\begin{array}{|c||c|c|c|c|c|c|c||c|c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \dots & \underline{a}_j & \dots & \underline{a}_k & \underline{b} & \underline{v} \\
\hline\hline
\underline{u}_1 & x_{1,1} & x_{1,2} & x_{1,3} & \dots & x_{1,j} & \dots & x_{1,k} & y_1 & v_1 \\
\hline
\underline{u}_2 & x_{2,1} & x_{2,2} & x_{2,3} & \dots & x_{2,j} & \dots & x_{2,k} & y_2 & v_2 \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_i & x_{i,1} & x_{i,2} & x_{i,3} & \dots & \boxed{x_{i,j}} & \dots & x_{i,k} & y_i & v_i \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_n & x_{n,1} & x_{n,2} & x_{n,3} & \dots & x_{n,j} & \dots & x_{n,k} & y_n & v_n \\
\hline\hline
\underline{u}_1 & ? & ? & ? & \dots & 0 & \dots & ? & ? & ? \\
\hline
\underline{u}_2 & ? & ? & ? & \dots & 0 & \dots & ? & ? & ? \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{a}_j & ? & ? & ? & \dots & \boxed{1} & \dots & ? & ? & ? \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_n & ? & ? & ? & \dots & 0 & \dots & ? & ? & ? \\
\hline
\end{array}$$

**Megjegyzések:** Néhány tankönyv a "csere" miatt az $\underline{u}_i$ vektor nevét és annak adatait (koordinátáit) írja az $\underline{a}_j$ oszlopába, ami szerintem rettentő zavaró, nem javaslom. Ha szükségünk van az $\underline{u}_i$ vektor új koordinátáira, akkor az alább leírt számolást javaslom. Továbbá, néhány tankönyv hajlamos "redukált" táblázattal dolgozni, ami azt jelenti, hogy elhagynak néhány oszlopot, aminek tartalmát könnyen ki lehet találni (lásd az 1.) lépés megjegyzéseit). Ezt sem javaslom, mert az oszlopok sorrendje megváltozik, ami zavaró.

**1.) lépés:** *a főelem oszlopában minden elem 0 lesz, kivéve a főelem helyén 1 lesz.* Ezt már láthatjuk is a fenti (alsó) táblázatban: az $\underline{a}_j$ vektor (aki éppen most került be a bázisba) oszlopa az 1.13. Állítás alapján: "ha $\underline{v}$ a bázisban van, akkor koordinátái 1 önmaga + 0 többi".

Ez nem csak a most bázisba bevitt, hanem az *összes*, régebben bekerült $\underline{a}_t$ vektor oszlopára is igaz (figyeljük meg a későbbi gyakorló példákban!). Tehát, ha egy vektor szerepel a táblázat bal oldali oldallécében, akkor annak az oszlopa a saját helyén 1, a többi elem pedig 0. Emiatt sok szerző már le sem írja ezeket az oszlopokat, de ismétlem, én nem javaslom, mert az oszlopok sorrendje is megváltozik, és felesleges gondolkodást igényel.

**2.) lépés:** *a főelem sorának minden elemét végig elosztjuk a főelemmel* ($g = x_{i,j}$-vel, de ne a képleteket jegyezzük meg, hanem ezt a mondatot):

$$\begin{array}{|c||c|c|c|c|c|c|c||c|c|}
\hline
\underline{u}_1 & ? & ? & ? & \dots & 0 & \dots & ? & ? & ? \\
\hline
\underline{u}_2 & ? & ? & ? & \dots & 0 & \dots & ? & ? & ? \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{a}_j & \frac{x_{i,1}}{g} & \frac{x_{i,2}}{g} & \frac{x_{i,3}}{g} & \dots & \boxed{1} & \dots & \frac{x_{i,k}}{g} & \frac{y_i}{g} & \frac{v_i}{g} \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_n & ? & ? & ? & \dots & 0 & \dots & ? & ? & ? \\
\hline
\end{array}$$

**3.) lépés:** Most olyan elemek számolása következik az új táblázatban, amelyek *sem* a főelem sorában, *sem* az oszlopában nem szerepelnek. Jelöljük meg a *régi* táblázatban a kérdéses elemet (amit ki akarunk számolni, mondjuk az $\underline{a}_1$ oszlop-vektor $\underline{u}_2$ báziselem-sorában) *karikával*. (Gépelési problémák miatt most csak kerek $(\quad)$ zárójelbe tettük.) A főelem (négyzet) és a kérdéses elem (kör) egy téglalap két átellenes csúcsa (mint a monitoron szokás), a másik két csúcsot (most $x_{i,1}$ és $x_{2,j}$) jelöljük meg *háromszögekkel* (gépelési problémák miatt most csak $/\dots\backslash$ jelekkel jelöltük):

$$\begin{array}{|c||c|c|c|c|c|c|c||c|c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \dots & \underline{a}_j & \dots & \underline{a}_k & \underline{b} & \underline{v} \\
\hline\hline
\underline{u}_1 & x_{1,1} & x_{1,2} & x_{1,3} & \dots & x_{1,j} & \dots & x_{1,k} & y_1 & v_1 \\
\hline
\underline{u}_2 & \color{magenta}{(x_{2,1})} & x_{2,2} & x_{2,3} & \dots & \color{blue}{/x_{2,j}\backslash} & \dots & x_{2,k} & y_2 & v_2 \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_i & \color{blue}{/x_{i,1}\backslash} & x_{i,2} & x_{i,3} & \dots & \color{magenta}{\boxed{x_{i,j}}} & \dots & x_{i,k} & y_i & v_i \\
\hline
\dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots & \dots \\
\hline
\underline{u}_n & x_{n,1} & x_{n,2} & x_{n,3} & \dots & x_{n,j} & \dots & x_{n,k} & y_n & v_n \\
\hline
\end{array}$$

Ekkor a bekarikázott (kör) elem új értéke:

$$(x_{2,1})_{\text{új}} := \color{magenta}{(x_{2,1})}_{\text{régi}} - \frac{\color{blue}{/x_{i,1}\backslash} \cdot \color{blue}{/x_{2,j}\backslash}}{\color{magenta}{\boxed{x_{i,j}}}} , \qquad (2.8)$$

de hangsúlyozom, hogy ne a képletet (indexeket) magolják be (ez a számítógépnek kell), hanem a képlet szerkezetét, grafikáját:

$$\circ_{\text{új}} = \circ_{\text{régi}} - \frac{\Delta \cdot \Delta}{\square} \qquad (2.9)$$

*Ábra: <https://math.uni-pannon.hu/~szalkai/Elbtrafo-z.gif>*

Ezt a számolást a táblázat összes olyan elemére el kell végeznünk, ami nem a főelem sorában vagy oszlopában van. A dolgozatban legfeljebb (négy alapműveletes) egyszerű számológép használható, mindent kézzel kell kiszámolni, ráadásul egy példához nem csak egy, hanem 4-5 elemi bázistranszformáció kell. Javaslom, hogy az elvégzendő $(x_{2,1})_{\text{új}} := (x_{2,1})_{\text{régi}} - \frac{/x_{i,1}\backslash \cdot /x_{2,j}\backslash}{\boxed{x_{i,j}}}$ számolások mindegyikét írjuk le a dolgozatba, így elszámolás esetén kevesebb pontot vonok le. Zh javításakor nem a négy alapműveleti hibákat osztályozom, azonban igyekezzünk pontosan számolni, mert félreszámolt táblázat esetén a feladat kérdésére adandó válasz, sőt maga a feladat kérdése is megváltozik, ami már súlyosabb hiba (nem csak pontveszteség).

Az általános számolási szabályokat (*"Könnyítő észrevételek"*) az alábbi példa után folytatjuk!

## 2.3. Példa

Legyenek adva az $\underline{a}_1 = [5, 0, 2, 1]^T$, $\underline{a}_2 = [-1, 3, 5, 3]^T$, $\underline{a}_3 = [2, 1, 4, 6]^T$, $\underline{a}_4 = [3, -1, -2, 2]^T$, $\underline{a}_5 = [0, -2, -4, -1]^T$ és $\underline{b} = [7, 4, 1, 0]^T$ vektorok. Ekkor az induló táblázat:

$$\begin{array}{|c||c|c|c|c|c||c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \underline{a}_4 & \underline{a}_5 & \underline{b} \\
\hline\hline
\underline{e}_1 & 5 & -1 & 2 & 3 & 0 & 7 \\
\hline
\underline{e}_2 & 0 & 3 & \boxed{1} & -1 & -2 & 4 \\
\hline
\underline{e}_3 & 2 & 5 & 4 & -2 & -4 & 1 \\
\hline
\underline{e}_4 & 1 & 3 & 6 & 2 & -1 & 0 \\
\hline
\end{array}$$

Mivel a főelemmel osztani kell, ezért papír-ceruza-fej esetén 1-et választunk, legyen mondjuk *második sor harmadik oszlop*. (Megjegyzem, hogy negatív főelem esetén gyakoriak az előjeltévesztések, különösen a 3. lépésben, tehát negatív főelemnél erre különösen ügyelnünk kell!) Az 1.) és 2.) lépést elvégezve:

$$\begin{array}{|c||c|c|c|c|c||c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \underline{a}_4 & \underline{a}_5 & \underline{b} \\
\hline\hline
\underline{e}_1 & & & 0 & & & \\
\hline
\underline{a}_3 & 0 & 3 & \boxed{1} & -1 & -2 & 4 \\
\hline
\underline{e}_3 & & & 0 & & & \\
\hline
\underline{e}_4 & & & 0 & & & \\
\hline
\end{array}$$

A 2. lépésnek megfelelően a főelem sorának minden elemét végigosztottuk a főelemmel, de az szerencsére 1 volt, ezért nem látszik (könnyen leírtuk).

**3. lépés** következik: a maradék 15 elemre egyesével kell kiszámolnunk. A karikákat és a háromszögeket az eredeti táblázatban kell jelölnünk (ceruzával), az eredményeket a második táblázatba kell írnunk.

**1. sor** 1. oszlop: $(?)_{\text{új}} = (5)_{\text{régi}} - \frac{/0\backslash \cdot /2\backslash}{\boxed{1}} = 5 - 0 = 5 ,$

**1. sor** 2. oszlop: $(?)_{\text{új}} = (-1)_{\text{régi}} - \frac{/3\backslash \cdot /2\backslash}{\boxed{1}} = -1 - 6 = -7 ,$

**1. sor** 4. oszlop: $(?)_{\text{új}} = (3)_{\text{régi}} - \frac{/2\backslash \cdot /-1\backslash}{\boxed{1}} = 3 - (-2) = 5 ,$

**1. sor** 5. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**1. sor** 6. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**3. sor** 1. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**3. sor** 2. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**3. sor** 4. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**3. sor** 5. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**3. sor** 6. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**4. sor** 1. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**4. sor** 2. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**4. sor** 4. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**4. sor** 5. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

**4. sor** 6. oszlop: $(?)_{\text{új}} = (\quad)_{\text{régi}} - \frac{/\quad\backslash \cdot /\quad\backslash}{\boxed{1}} = \quad = \quad ,$

tehát a végső táblázat:

$$\begin{array}{|c||c|c|c|c|c||c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \underline{a}_4 & \underline{a}_5 & \underline{b} \\
\hline\hline
\underline{e}_1 & & & 0 & & & \\
\hline
\underline{a}_3 & 0 & 3 & \boxed{1} & -1 & -2 & 4 \\
\hline
\underline{e}_3 & & & 0 & & & \\
\hline
\underline{e}_4 & & & 0 & & & \\
\hline
\end{array}$$

## 2.4. Könnyítő észrevételek

**4a)** Mint többször említettük: ha egy $\underline{a}_t$ vektor már bekerült a bázisba (a számolások előrehaladtával egyre több ilyen vektorunk lesz!), vagyis a baloldali oldallécben is szerepel $\underline{a}_t$, akkor $\underline{a}_t$ oszlopában az összes elem 0, kivéve saját sorában 1 van (ismét az 1.13. Állítás alapján).

**4b)** HA a főelem *sorában* van egy 0, akkor ennek a 0-nak az *oszlopa* változatlan marad, vagyis a következő táblázatban ez az *oszlop* ugyanaz, mint az előző táblázatban. Hasonló állítás igaz, ha a fenti mondatban a *sor* és *oszlop* szavakat felcseréljük: HA a főelem *oszlopában* van egy 0, akkor ennek a 0-nak a *sora* változatlan marad. (Mindkét állítást könnyen igazolhatjuk a (2.9) képlet segítségével.)

Ezt a fenti példában is észrevehetjük: a főelem sorának első eleme 0, és valóban, az első oszlop változatlan maradt.

## 2.5. A számolás vége

*Általában* egy feladatban addig kell végeznünk elemi bázistranszformációkat, amíg lehet, vagyis annyi $\underline{a}_t$ vektort kell bevinnünk a bázisba, amennyit csak lehet. Tehát nyilvánvaló, hogy akkor akadunk el, ha *vagy* nincs már több bevihető $\underline{a}_t$ vektor, *vagy* már nincs kivihető $\underline{e}_\ell$ vektor. Vigyázat: ez utóbbi nem csak úgy jelentkezhet, hogy az oldallécben nem látunk $\underline{e}_\ell$ vektort, hanem az is lehet, hogy az oldallécben szereplő mindegyik $\underline{e}_\ell$ vektor sora csupa 0-át tartalmaz. Mert ugye ekkor nem lehet főelemet választani, és nem lehet az $\underline{e}_\ell$ vektort kivinni a bázisból!

Egy feladat *elkezdéséhez* általában 4-5 transzformáció szükséges. Ugyanis, mint látni fogjuk: az elemi bázistranszformációk sorozata csak az ötödik alapművelet, és a legutolsó táblázatból fogjuk leolvasni a feladat végeredményét, a kérdésre adandó választ. Ekkor már számolnunk nem kell, hanem csak gondolkodni, ehhez azonban alaposan tudnunk kell a táblázatban tárolt információkat (lásd az első fejezetben).

A honlapomon több számítógép program található a "Lineáris Algebra" részben, a (2.9) ábra mellett: <https://math.uni-pannon.hu/~szalkai/Foelem3g_win.zip>, amelyekkel ellenőrizhetjük otthon számolásunkat, sajnos zh-n nem használhatóak.

## 2.6. Néhány további megjegyzés

Később látni fogjuk, hogy (majdnem) teljesen mindegy, melyik $\underline{u}_i$ vektort cseréljük ki melyik $\underline{a}_j$ vektorra, ez legtöbbször még a feladat megoldása szempontjából is mindegy, sőt ha (általában) több $\underline{a}_j$ vektort kell bevinnünk több $\underline{u}_i$ vektor helyére, a be- és kivitel sorrendje is lényegtelen. Általában addig kell a számolást ismételgetnünk, amíg lehet (lásd az előző fejezetet).

Hogy milyen kérdésre, feladatra használhatjuk az elemi bázistranszformációt, egy szóval válaszolhatunk: (szinte) minden kérdésre, feladatra, csak a számolást ne rontsuk el. Én ugyan a zh-ban a számolási hibákat nem büntetem pontlevonással, de elszámolás esetén nagyon gyakran más típusú lesz a feladat, a válasz nehézsége is megváltozhat, és ez okozhat pontlevonást!

Ismételten megemlítem, hogy a *számolás* csak az eleje, utána a gondolkodás a lényeg — ezért is használjuk otthoni gyakorlásra a honlapomon szereplő programokat (azaz ne a számolásban fáradjunk ki, hanem legyen erőnk a lényegre koncentrálni!).

Ne feledjük, hogy az elemi bázistranszformáció táblázatok *oszlopai* változatlanul ugyanazok a vektorok, csak a koordinátájuk más és más. Mivel bármely bázisban koordinátánként lehet összeadni és lineáris kombinációt számolni, ugyanúgy mint a komponensekkel, ezért gyakorlati és elméleti feladatoknál is természetesen abban a bázisban számolgatunk, amelyben a számolás egyszerűbb (ez általában a legutolsó táblázat).

**Például** legyen a kezdő *és* a legutolsó táblázat:

$$\begin{array}{|c||c|c|c|c||c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \underline{a}_4 & \underline{b} \\
\hline\hline
\underline{e}_1 & 1 & 1 & 0 & 0 & 3 \\
\hline
\underline{e}_2 & 0 & 1 & 0 & 1 & 1 \\
\hline
\underline{e}_3 & 4 & 2 & 0 & 0 & 10 \\
\hline
\underline{e}_4 & 2 & 1 & 1 & 0 & -1 \\
\hline
\end{array}
\implies
\begin{array}{|c||c|c|c|c||c|}
\hline
& \underline{a}_1 & \underline{a}_2 & \underline{a}_3 & \underline{a}_4 & \underline{b} \\
\hline\hline
\underline{a}_1 & 1 & 0 & 0 & 0 & 2 \\
\hline
\underline{a}_4 & 0 & 0 & 0 & 1 & 0 \\
\hline
\underline{a}_2 & 0 & 1 & 0 & 0 & 1 \\
\hline
\underline{a}_3 & 0 & 0 & 1 & 0 & -6 \\
\hline
\end{array}$$

vagyis $\underline{a}_1 = [1, 0, 4, 2]^T$, $\underline{a}_2 = [1, 1, 2, 1]^T$, $\underline{a}_3 = [0, 0, 0, 1]^T$, $\underline{a}_4 = [0, 1, 0, 0]^T$ és $\underline{b} = [3, 1, 10, -1]^T$.

A számolásból (utolsó táblázat) nem csak azt látjuk, hogy a
$$H := \{ \underline{a}_1, \underline{a}_2, \underline{a}_3, \underline{a}_4 \} \tag{2.10}$$
vektorhalmaz bázist alkot (látszik a bal oldali oldallécben), hanem az is azonnal leolvasható (honnan?), hogy
$$2 \cdot \underline{a}_1 + \underline{a}_2 - 6 \cdot \underline{a}_3 = \underline{b} \quad , \tag{2.11}$$
*vagyis* a $\underline{b}$ vektornak a $H$ bázisra vonatkozó ($H$-beli) koordinátái
$$[\underline{b}]_H = [2, 1, -6, 0] \quad . \tag{2.12}$$

**Vigyázat:** a $\underline{b}$ vektornak ugyan a saját oszlopában vannak az aktuális bázisra vonatkozó koordinátái, és egy bázist mi mindig vektorhalmaznak emlegetünk, **de** a koordináták *sorrendjének* (2.12)-ben *meg kell egyeznie* a báziselemek (2.10)-beli sorrendjével (tehát mégsem csak egy egyszerű halmaz …)! Tehát a (2.11) egyenlet nagyon megtévesztő lehet!

Vegyük észre, hogy (2.11) szerint sikerült a $\underline{b}$ vektort előállítanunk az $\underline{a}_1, \underline{a}_2, \underline{a}_3, \underline{a}_4$ vektorokból, vagyis *megoldottuk* az
$$x_1 \cdot \underline{a}_1 + x_2 \cdot \underline{a}_2 + x_3 \cdot \underline{a}_3 + x_4 \cdot \underline{a}_4 = \underline{b} \tag{2.13}$$
*egyenletrendszert*: $x_1 = 2$, $x_2 = 1$, $x_3 = -6$ és $x_4 = 0$! A legelső (bevezető) fejezetben még azt írtuk, hogy ez egy nehéz feladat, de talán négy elemi bázistranszformáció nem is olyan nehéz?! A lineáris egyenletrendszerek elméletét (akárhány egyenlet és akárhány ismeretlen) a következő fejezetben tárgyaljuk részletesen — nem lesz nagyon nehéz!

A (2.11) összefüggés ellenőrzése (kötelező házi feladat, "koordinátánként"):
$$2 \cdot \begin{bmatrix} 1 \\ 0 \\ 4 \\ 2 \end{bmatrix} + 1 \cdot \begin{bmatrix} 1 \\ 1 \\ 2 \\ 1 \end{bmatrix} - 6 \cdot \begin{bmatrix} 0 \\ 0 \\ 0 \\ 1 \end{bmatrix} + 0 \cdot \begin{bmatrix} 0 \\ 1 \\ 0 \\ 0 \end{bmatrix} = \begin{bmatrix} 3 \\ 1 \\ 10 \\ -1 \end{bmatrix} \quad , \tag{2.14}$$
de ismétlem: ezt a feladat legelején aligha látjuk!

## 2.7. Alkalmazások

Most csak felsorolunk néhány kérdést, feladatot, amelyeket elemi bázistranszformációval tudunk megoldani ("az összeset"). A részleteket vagy az órán, vagy tankönyvekben találjuk meg.

- a) vektorhalmaz lineárisan független / generátorrendszer / bázis-e,
- b) vektorhalmaz rangja,
- c) adott vektor előállítása más vektorokból,
- d) lineáris egyenletrendszer megoldása,
- e) mátrix reguláris / szinguláris-e, mátrix inverze,
- f) …

# 3. fejezet — Lineáris egyenletrendszerek és megoldásuk

Most csak a lényeget írjuk le röviden. A korábban látott

> lineáris egyenletrendszer $\Longleftrightarrow$ lineáris kombináció

összefüggés alapján az egyenletrendszert beírjuk az elemi bázistranszformációs táblázatba. Mivel a (2.13) egyenletrendszert a standard bázisban (első táblázat adataival) nehezen tudjuk megoldani, ezért az $\underline{a}_i$ együtthatóvektorok közül minél többet beviszünk a bázisba (mint említettük, a sorrend lényegtelen), és az utolsó táblázatban a megoldás a megfelelő oszlopban látható. Ezt tapasztalhattuk például a 2.6. fejezetbeli példában és a (2.13) egyenletrendszerben.

No, persze vannak még részletek és buktatók, amiket előadáson meg kell ismernünk és tanulnunk!

**Ismét hangsúlyozzuk:** a lineáris algebrai *feladat* (lineáris kombináció) mindegyik táblázatban *ugyanaz*, csak más számokat (koordinátákat) látunk a táblázatban. Tehát az (elemi) bázistrafó azért hasznos, hogy jobb számokat lássunk a táblázatban: sok 0 és 1 miatt a megoldás szinte ránézéssel megoldható!

További részleteket és magyarázatokat találunk a következő bemutató 9. és 16–25. oldalain: <https://math.uni-pannon.hu/~szalkai/LinEgyenlet(SK)2d.ppt>, <https://math.uni-pannon.hu/~szalkai/LinEgyenlet(SK)2d.pdf>.

# 4. fejezet — További ajánlott irodalom

**Szalkai István**: *Oktatói honlap, Lineáris Algebra fejezet*, <https://math.uni-pannon.hu/~szalkai/>

# Tárgymutató

- általános vektortér, 15
- absztrakt vektortér, 15
- aktuális bázis, 18
- bázis, 9
  - aktuális, 18
  - kanonikus, 13
  - standard, 13
- coefficient, 4
- dimenzió, 15
- együttható, 4
- független vektorhalmaz, 6
- főelem, 21
- generáló elem, 21
- generátor-rendszer, 6
- induló táblázat, 19
- kanonikus bázis, 13
- koefficiens, 4
- komponensek, 3
- koordináták, 9
- lineáris kombináció, 4
  - triviális, 6
- lineárisan független, 6
- nullvektor, 10
- oszlopvektor, 3
- pivot elem, 21
- $r(H)$, 15
- $\mathbb{R}^n$, 3
- rang, 15
- rendezett $n$-es, 3
- sorvektor, 3
- standard bázis, 13
- transzformáció, 17
- transzponált vektor, 4
- vektor, 3
  - előállítása, 4
  - transzponáltja, 4
- vektortér, 3
  - általános, 15
  - absztrakt, 15
  - $\mathbb{R}^n$, 3
- $\underline{v}^T$, 4
- $\underline{x}^T$, 4
