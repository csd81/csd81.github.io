# Az $\mathbb{R}^n$ vektortér

<!-- OCR of "Az_Rn_vektorter_info.pdf" (előadás-diák, összeállította: dr. Leitold Adrien, egyetemi docens, Pannon Egyetem). 39 dia. -->

*Összeállította: dr. Leitold Adrien, egyetemi docens*

## Rendezett szám n-esek

- Rendezett szám n-esek:
  - $\underline a=(a_1,a_2,\dots,a_n)$
  - $a_1,a_2,\dots,a_n\in\mathbb{R}$, a rendezett szám n-es komponensei
- $\mathbb{R}^n$: a valós számokból képezett rendezett szám n-esek halmaza
- Két rendezett szám n-es egyenlő, ha a megfelelő komponenseik megegyeznek.

## Műveletek rendezett n-esekkel

**Alapműveletek:**
- Két rendezett n-es összege: Ha $\underline a=(a_1,a_2,\dots,a_n)$ és $\underline b=(b_1,b_2,\dots,b_n)\in\mathbb{R}^n$, akkor
$$\underline a+\underline b=(a_1+b_1,\ a_2+b_2,\ \dots,\ a_n+b_n).$$
- Egy rendezett n-es $\lambda$-szorosa: Ha $\underline a=(a_1,a_2,\dots,a_n)\in\mathbb{R}^n$ és $\lambda\in\mathbb{R}$, akkor
$$\lambda\cdot\underline a=(\lambda\cdot a_1,\ \lambda\cdot a_2,\ \dots,\ \lambda\cdot a_n).$$

**Két rendezett n-es különbsége:** (származtatott művelet)
$$\underline a-\underline b=\underline a+(-1)\cdot\underline b=(a_1-b_1,\ a_2-b_2,\ \dots,\ a_n-b_n).$$

## Az alapműveletek tulajdonságai

Legyenek $\underline a,\underline b$ és $\underline c\in\mathbb{R}^n$ tetszőleges rendezett n-esek, valamint $\lambda,\mu\in\mathbb{R}$ tetszőleges valós számok. Ekkor:
1. $(\underline a+\underline b)+\underline c=\underline a+(\underline b+\underline c)$ — (asszociativitás)
2. $\underline a+\underline b=\underline b+\underline a$ — (kommutativitás)
3. Létezik olyan $\underline o\in\mathbb{R}^n$ rendezett n-es, hogy bármely $\underline a\in\mathbb{R}^n$ esetén $\underline a+\underline o=\underline a$. — (nullelem létezése)
4. Bármely $\underline a\in\mathbb{R}^n$ esetén létezik olyan $\underline a'\in\mathbb{R}^n$, hogy $\underline a+\underline a'=\underline o$, ahol $\underline a'=(-1)\cdot\underline a$, az $\underline a$ ellentettje. — (ellentett létezése)
5. $(\lambda+\mu)\cdot\underline a=\lambda\cdot\underline a+\mu\cdot\underline a$
6. $\lambda\cdot(\underline a+\underline b)=\lambda\cdot\underline a+\lambda\cdot\underline b$
7. $\lambda\cdot(\mu\cdot\underline a)=(\lambda\cdot\mu)\cdot\underline a$
8. $1\cdot\underline a=\underline a$

## Az $\mathbb{R}^n$ vektortér

**Megjegyzés:** Mivel az $(\mathbb{R}^n,+,\cdot)$ algebrai struktúrában teljesül a vektorterekre jellemző előző nyolc alaptulajdonság (vektortér-axiómák), ezért $\mathbb{R}^n$-t **n-dimenziós valós vektortérnek** vagy **n-dimenziós euklideszi vektortérnek** nevezzük, $\mathbb{R}^n$ elemeit **n-dimenziós vektoroknak** hívjuk.

## Lineáris kombináció

**Vektorok lineáris kombinációja:** Legyenek $\underline a_1,\underline a_2,\dots,\underline a_k$ n-dimenziós vektorok és $\lambda_1,\lambda_2,\dots,\lambda_k$ skalárok. Ekkor a $\lambda_1\cdot\underline a_1+\lambda_2\cdot\underline a_2+\dots+\lambda_k\cdot\underline a_k\in\mathbb{R}^n$ vektort az $\underline a_1,\dots,\underline a_k$ vektorok $\lambda_1,\dots,\lambda_k$ skalárokkal vett lineáris kombinációjának nevezzük.

**Triviális lineáris kombináció:** Ha a lineáris kombinációban az összes skalár nulla, akkor triviális lineáris kombinációról beszélünk. Triviális lineáris kombináció eredménye (bármilyen $\underline a_1,\dots,\underline a_k$ vektorok esetén) mindig nullvektor.

## Lineáris kombináció geometriai szemléltetése 1.

A $\underline v=\lambda\cdot\underline a$ alakú vektorok egy origón átmenő $\underline a$ irányvektorú egyenesre esnek. (Pl. $\underline v=2\underline a$, $\underline v=0\underline a$, $\underline v=-1\underline a$.)

## Lineáris kombináció geometriai szemléltetése 2.

A $\underline v=\lambda_1\cdot\underline a+\lambda_2\cdot\underline b$ alakú vektorok egy origón átmenő $\underline a$ és $\underline b$ által kifeszített síkra esnek. (Pl. $\underline v=1\underline a+1\underline b$, $2\underline a+1\underline b$, $2\underline a+0\underline b$, $0\underline a+(-1)\underline b$.)

## Lineáris kombináció geometriai szemléltetése 3.

A $\underline v=\lambda_1\cdot\underline a+\lambda_2\cdot\underline b$ alakú vektorok egy origón átmenő egyenesre esnek, amelynek az irányvektora az $\underline a$ vagy a $\underline b$ vektor. (Ez az eset, amikor $\underline a$ és $\underline b$ párhuzamosak.)

## Lineáris kombináció geometriai szemléltetése 4.

A $\underline v=\lambda_1\cdot\underline a+\lambda_2\cdot\underline b+\lambda_3\cdot\underline c$ alakú vektorok kitöltik a teljes teret. (Pl. $\underline v=1\underline a+1\underline b+1\underline c$, $1\underline a+0{,}5\underline b$, $2\underline a+0\underline b+0\underline c$.)

## Lineáris kombináció geometriai szemléltetése 5.

A $\underline v=\lambda_1\cdot\underline a+\lambda_2\cdot\underline b+\lambda_3\cdot\underline c$ alakú vektorok az origón átmenő $\underline a$ és $\underline b$ által kifeszített síkra esnek. (Ez az eset, amikor $\underline a,\underline b,\underline c$ egy síkba esnek.)

## Lineáris függetlenség és összefüggőség

**Lineárisan független vektorok:** Az $\underline a_1,\dots,\underline a_k\in\mathbb{R}^n$ vektorokat lineárisan függetleneknek nevezzük, ha belőlük csak triviális lineáris kombinációval (csupa nulla együtthatóval) állítható elő a nullvektor.

**Lineárisan összefüggő vektorok:** Az $\underline a_1,\dots,\underline a_k\in\mathbb{R}^n$ vektorokat lineárisan összefüggőeknek hívjuk, ha belőlük nem triviális lineáris kombinációval is előállítható a nullvektor.

## Lin. függetlenség és összefüggőség geometriai szemléltetése az $\mathbb{R}^3$ térben

- **1 vektor esetén:** $\underline v\ne\underline o$ → lineárisan független; $\underline v=\underline o$ → lineárisan összefüggő.
- **2 vektor esetén:** $\underline a\nparallel\underline b$ → lineárisan független; $\underline a\parallel\underline b$ → lineárisan összefüggő.
- **3 vektor esetén:** $\underline a,\underline b$ és $\underline c$ nem esnek egy síkra → lineárisan független; $\underline a,\underline b$ és $\underline c$ egy síkra esnek → lineárisan összefüggő.
- **4 vagy több vektor esetén:** Az $\mathbb{R}^3$ térben 4 vagy több vektor mindig lineárisan összefüggő.

## Lin. függetlenség ill. összefüggőség: állítások

1. Az $\underline a_1,\dots,\underline a_k\in\mathbb{R}^n$ vektorok pontosan akkor lineárisan összefüggőek, ha valamelyikük előáll a többi vektor lineáris kombinációjaként.
2. Az $\underline a_1,\dots,\underline a_k\in\mathbb{R}^n$ vektorok pontosan akkor lineárisan függetlenek, ha egyikük sem áll elő a többi vektor lineáris kombinációjaként.
3. Az $\underline a_1,\dots,\underline a_k\in\mathbb{R}^n$ vektorok pontosan akkor lin. függetlenek, ha az $\mathbb{R}^n$ vektortér bármely vektora *legfeljebb* csak egy féleképpen áll elő az $\underline a_1,\dots,\underline a_k$ vektorok lin. kombinációjával.
4. Ha egy vektorhalmazban szerepel a nullvektor, akkor az lineárisan összefüggő.
5. Lin. független vektorhalmaz részhalmaza is lin. független.
6. Lin. összefüggő vektorhalmazt bővítve az összefüggőség megőrződik.
7. Az $\mathbb{R}^n$ vektortérben $n+1$ db vektor mindig lin. összefüggő.

## Vektorhalmaz rangja

**Vektorhalmaz rangja:** Az $\{\underline a_1,\dots,\underline a_k\}\subseteq\mathbb{R}^n$ vektorhalmaz rangja $r$, ha a vektorok közül kiválasztható $r$ darab lin. független vektor, de bármely $r+1$ darab vektor már lin. összefüggő.

**Megjegyzések:**
- A rang megmutatja, hogy az adott vektorok közül maximálisan hány darab lin. független vektort tudunk kiválasztani.
- Az $\mathbb{R}^n$ vektortérben bármely vektorhalmaz rangja kisebb vagy egyenlő, mint $n$.
- Lineárisan független vektorhalmaz rangja megegyezik a vektorhalmazban lévő vektorok számával.

## Vektorhalmaz rangjára vonatkozó állítások

Legyen $H\subseteq\mathbb{R}^n$ egy vektorhalmaz.
1. Ha a $H$ vektorhalmaz rangja $r$ és az $\underline a_1,\dots,\underline a_r\in H$ vektorok lin. függetlenek (azaz egy *maximális lin. független részrendszert* alkotnak $H$-ban), akkor a $H$ vektorhalmaz valamennyi vektora előáll az $\underline a_1,\dots,\underline a_r$ vektorok lineáris kombinációjával.
2. Ha a $H$ vektorhalmaz valamennyi vektora előáll $r$ darab rögzített $\mathbb{R}^n$-beli vektor lin. kombinációjával, akkor a $H$ vektorhalmaz rangja $\le r$.

## Generátorrendszer, bázis

**Generátorrendszer:** Legyen $G\subseteq\mathbb{R}^n$ egy vektorhalmaz. $G$ generátorrendszer az $\mathbb{R}^n$ vektortérben, ha $G$ elemeiből lineáris kombinációval az $\mathbb{R}^n$ vektortér bármely vektora előállítható.

**Bázis:** Legyen $B\subseteq\mathbb{R}^n$ egy vektorhalmaz, amely
- lineárisan független és
- generátorrendszer.

Ekkor a $B$-t az $\mathbb{R}^n$ vektortér egy bázisának hívjuk.

## A kanonikus (standard) bázis

**Példa bázisra** — kanonikus (standard) bázis:
$$\underline e_1=(1,0,\dots,0),\quad\underline e_2=(0,1,\dots,0),\quad\dots,\quad\underline e_n=(0,0,\dots,1)$$

**Megjegyzés:** Egy $\underline x=(x_1,x_2,\dots,x_n)$ $\mathbb{R}^n$-beli vektornak a kanonikus bázisra vonatkozó előállítása:
$$\underline x=x_1\cdot\underline e_1+x_2\cdot\underline e_2+\dots+x_n\cdot\underline e_n$$

## A Steiniz-féle kicserélési tétel

**A Steiniz-féle kicserélési tétel:** Legyen $L$ egy lin. független vektorhalmaz, $G$ pedig egy generátorrendszer az $\mathbb{R}^n$ vektortérben. Ekkor az $L$ vektorhalmaz minden $\underline v$ vektorához található olyan $\underline g\in G$ vektor, hogy a $(L\setminus\{\underline v\})\cup\{\underline g\}$ vektorhalmaz is lineárisan független.

**Következmények:**
1. $L$-nek legfeljebb annyi vektora lehet, mint $G$-nek: $|L|\le|G|$.
2. Ha $L$ lin. független vektorhalmaz, $B$ bázis, $G$ generátorrendszer $\mathbb{R}^n$-ben, akkor $|L|\le|B|\le|G|$.

## Bázis, dimenzió, koordináták

**Bázisokra vonatkozó állítások:**
1. $\mathbb{R}^n$-ben minden bázis ugyanannyi vektorból áll.
2. $\mathbb{R}^n$-ben minden bázis $n$ darab vektorból áll. Ezt a számot hívjuk az $\mathbb{R}^n$ vektortér **dimenziójának**.
3. $\mathbb{R}^n$-ben bármely $n$ darab lineárisan független vektor bázist alkot.
4. Legyen $B=\{\underline b_1,\dots,\underline b_n\}$ bázis $\mathbb{R}^n$-ben. Ekkor bármely $\underline x\in\mathbb{R}^n$ vektor *egyértelműen* előállítható a bázisvektorok lineáris kombinációjával:
$$\underline x=\lambda_1\underline b_1+\lambda_2\underline b_2+\dots+\lambda_n\underline b_n$$
Ekkor a $\lambda_1,\lambda_2,\dots,\lambda_n$ számokat az $\underline x$ vektor $B$ bázisra vonatkozó **koordinátáinak** nevezzük.

**Megjegyzés:** Bármely $\underline x=(x_1,x_2,\dots,x_n)$ $\mathbb{R}^n$-beli vektornak a kanonikus bázisra vonatkozó koordinátái maguk a vektorkomponensek.

## Elemi bázistranszformáció

**Elemi bázistranszformáció:** Legyen $B=\{\underline b_1,\dots,\underline b_n\}$ egy bázis $\mathbb{R}^n$-ben, $\underline c\in\mathbb{R}^n$, $\underline c\ne\underline o$.

Ekkor a $B$ bázis vektorai között van olyan, amely kicserélhető a $\underline c$ vektorral úgy, hogy a vektorcsere után is bázist kapjunk.

Az új bázisra vonatkozó koordináták számolásának algoritmusát elemi bázistranszformációnak nevezzük.

## Az új koordináták számolása

Legyen az $\underline x$ vektor $B$ bázisra vonatkozó előállítása: $\underline x=\lambda_1\underline b_1+\lambda_2\underline b_2+\dots+\lambda_n\underline b_n$
Legyen a $\underline c$ vektor $B$ bázisra vonatkozó előállítása: $\underline c=\gamma_1\underline b_1+\gamma_2\underline b_2+\dots+\gamma_n\underline b_n$
Tegyük fel, hogy $\gamma_i\ne 0$. Cseréljük ki a $B$ bázisban a $\underline b_i$ vektort a $\underline c$ vektorral. Ekkor az $\underline x$ vektor új bázisra vonatkozó koordinátái:
$$\hat\lambda_j=\lambda_j-\frac{\lambda_i}{\gamma_i}\cdot\gamma_j\quad(j\ne i)$$
$$\hat\lambda_i=\frac{\lambda_i}{\gamma_i}=\delta$$

## Bázistranszformációs táblázat

A régi és az új koordináták táblázatos elrendezése:

| | $\underline c$ | $\underline x$ |
|---|---|---|
| $\underline b_1$ | $\gamma_1$ | $\lambda_1$ |
| $\underline b_2$ | $\gamma_2$ | $\lambda_2$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\underline b_i$ | $\boxed{\gamma_i}$ | $\lambda_i$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\underline b_n$ | $\gamma_n$ | $\lambda_n$ |

a csere után:

| | $\underline c$ | $\underline x$ |
|---|---|---|
| $\underline b_1$ | $0$ | $\lambda_1-\delta\cdot\gamma_1$ |
| $\underline b_2$ | $0$ | $\lambda_2-\delta\cdot\gamma_2$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\underline c$ | $1$ | $\delta$ |
| $\vdots$ | $\vdots$ | $\vdots$ |
| $\underline b_n$ | $0$ | $\lambda_n-\delta\cdot\gamma_n$ |

A $\gamma_i$ számot **generálóelemnek** hívjuk.

## Alterek az $\mathbb{R}^n$ vektortérben

**Altér:** A $H\subseteq\mathbb{R}^n$ vektorhalmazt **altérnek** hívjuk az $\mathbb{R}^n$ vektortérben, ha bármely $\underline a,\underline b\in H$ vektorok és bármely $\lambda\in\mathbb{R}$ esetén $\underline a+\underline b\in H$ és $\lambda\cdot\underline a\in H$ is teljesül. ($H$ zárt a vektorműveletekre.)

**Triviális alterek:** A $H=\{\underline o\}$ és $H=\mathbb{R}^n$ esetekben teljesül a fenti definíció, ezeket az altereket az $\mathbb{R}^n$ vektortér triviális (nem valódi) altereinek hívjuk.

**Megjegyzések:**
- $\mathbb{R}^n$ minden altere tartalmazza a nullvektort.
- Alterekre is értelmezhető (analóg módon) a bázis és a dimenzió fogalma.

## Alterek az $\mathbb{R}^3$ térben

- $H=\{\underline o\}$: 0-dimenziós, triviális altér.
- Legyen $\underline v\in\mathbb{R}^3$, $\underline v\ne\underline o$ rögzített. $H=\{\lambda\cdot\underline v\mid\lambda\in\mathbb{R}\}$: origón átmenő, $\underline v$ irányvektorú egyenesre eső vektorok összessége. 1-dimenziós altér.
- Legyen $\underline a,\underline b\in\mathbb{R}^3$ két lineárisan független vektor. $H=\{\lambda_1\cdot\underline a+\lambda_2\cdot\underline b\mid\lambda_1,\lambda_2\in\mathbb{R}\}$: origón átmenő, az $\underline a$ és $\underline b$ vektorok által kifeszített síkra eső vektorok összessége. 2-dimenziós altér.
- $H=\mathbb{R}^3$: 3-dimenziós, triviális altér.

## Vektorhalmazok összege

Legyen $A$ és $B$ két $\mathbb{R}^n$-beli vektorhalmaz. Ekkor $A$ és $B$ összege:
$$A+B:=\{\underline a+\underline b\mid\underline a\in A\text{ és }\underline b\in B\}$$

**Megjegyzés:** A fenti definíció a vektorhalmazok összegére NEM azonos az únió művelettel!

### Példa vektorhalmazok összegére I.

$A=\{\lambda\underline a\mid\lambda\in\mathbb{R}\}$, $B=\{\underline b\}$, $A+B=\{\lambda\underline a+\underline b\mid\lambda\in\mathbb{R}\}$ (az $A$ egyenessel párhuzamos, $\underline b$-n átmenő egyenes).

### Példa vektorhalmazok összegére II.

$A=\{\lambda\underline a\mid\lambda\in\mathbb{R}\}$, $B=\{\lambda\underline b'\mid\lambda\in\mathbb{R}\}$, $A+B$: a két egyenes által meghatározott síkra eső helyvektorok összessége.

## Alterekre vonatkozó állítások

1. Ha $V_1$ és $V_2$ két altér az $\mathbb{R}^n$ vektortérben, akkor $V_1\cap V_2$ és $V_1+V_2$ is altér $\mathbb{R}^n$-ben.
2. Legyenek $\underline a_1,\dots,\underline a_k$ $\mathbb{R}^n$-beli vektorok. Ekkor a $V=\{\lambda_1\cdot\underline a_1+\lambda_2\cdot\underline a_2+\dots+\lambda_k\cdot\underline a_k\mid\lambda_1,\dots,\lambda_k\in\mathbb{R}\}$ vektorhalmaz altér $\mathbb{R}^n$-ben, mégpedig a legszűkebb olyan altér, amely tartalmazza az $\underline a_1,\dots,\underline a_k$ vektorokat.

**Megjegyzés:** Ezt a $V$ alteret az $\underline a_1,\dots,\underline a_k$ vektorok **generátumának**, vagy **lineáris lezártjának** nevezzük, jelölése: $\mathcal L(\underline a_1,\dots,\underline a_k)$.

## Alterek direkt összege

Az $\mathbb{R}^n$ vektortér **direkt összege** a $V_1,\dots,V_k$ altereknek, ha bármely $\mathbb{R}^n$-beli vektor pontosan egy féle képpen írható fel $\underline v_1+\dots+\underline v_k$ alakban, ahol $\underline v_1\in V_1,\dots,\underline v_k\in V_k$. Jelölés: $\mathbb{R}^n=V_1\oplus\dots\oplus V_k$

**Megjegyzés:** azaz, minden $\mathbb{R}^n$-beli vektor egyértelműen felbontható az alterekbe eső összetevőkre.

### Példa alterek összegére, direkt összegére I.

$V_1$: origón átmenő sík; $V_2$: origón átmenő egyenes, $V_2\not\subset V_1$. Ekkor $V_1+V_2=\mathbb{R}^3$ és $V_1\oplus V_2=\mathbb{R}^3$.

### Példa alterek összegére, direkt összegére II.

$V_1,V_2$ és $V_3$ origón átmenő egyenesek, amelyek nincsenek egy síkban. Ekkor $V_1+V_2+V_3=\mathbb{R}^3$ és $V_1\oplus V_2\oplus V_3=\mathbb{R}^3$.

### Példa alterek összegére, direkt összegére III.

$V_1,V_2$ és $V_3$ origón átmenő egyenesek, amelyek egy síkra esnek. Ekkor $V_1+V_2+V_3\ne\mathbb{R}^3$, így $V_1\oplus V_2\oplus V_3\ne\mathbb{R}^3$.

### Példa alterek összegére, direkt összegére IV.

$V_1$ és $V_2$ két egymást metsző, origón átmenő sík. Ekkor $V_1+V_2=\mathbb{R}^3$, de $V_1\oplus V_2\ne\mathbb{R}^3$.

## Direkt összegre vonatkozó állítások

Legyenek $V_1,\dots,V_k$ alterek az $\mathbb{R}^n$ vektortérben.
1. $\mathbb{R}^n=V_1\oplus\dots\oplus V_k\Rightarrow\dim(V_1)+\dots+\dim(V_k)=n$. *(Ez az állítás NEM megfordítható, szükséges, de nem elégséges feltétel!)*
2. $\mathbb{R}^n=V_1\oplus\dots\oplus V_k\Leftrightarrow$ a $V_1,\dots,V_k$ alterek bázisainak úniója bázist alkot az $\mathbb{R}^n$ vektortérben.
3. $\mathbb{R}^n=V_1\oplus\dots\oplus V_k\Leftrightarrow\mathbb{R}^n=V_1+\dots+V_k$ és bármely $i=1,\dots,k$ esetén $V_i\cap(V_1+\dots+V_{i-1}+V_{i+1}+\dots+V_k)=\{\underline o\}$.
   Speciálisan $k=2$-re: $\mathbb{R}^n=V_1\oplus V_2\Leftrightarrow\mathbb{R}^n=V_1+V_2$ és $V_1\cap V_2=\{\underline o\}$.

## Egyenes és hipersík az $\mathbb{R}^n$ vektortérben

Legyenek $\underline a$ és $\underline v\in\mathbb{R}^n$, $\underline v\ne\underline o$.
- A $V=\{\lambda\underline v\mid\lambda\in\mathbb{R}\}$ alteret origón átmenő, $\underline v$ irányvektorú **egyenesnek** nevezzük.
- A $V+\{\underline a\}=\{\lambda\underline v+\underline a\mid\lambda\in\mathbb{R}\}$ eltolt alteret az $\underline a$ ponton átmenő, $\underline v$ irányvektorú **egyenesnek** nevezzük.

Legyenek $\underline a$ és $\underline v_1,\dots,\underline v_k\in\mathbb{R}^n$, $\underline v_1,\dots,\underline v_k$ lin. független vektorok.
- A $V=\{\lambda_1\cdot\underline v_1+\lambda_2\cdot\underline v_2+\dots+\lambda_k\cdot\underline v_k\mid\lambda_1,\dots,\lambda_k\in\mathbb{R}\}$ alteret origón átmenő, $k$-dimenziós **hipersíknak** nevezzük.
- A $V+\{\underline a\}=\{\lambda_1\cdot\underline v_1+\lambda_2\cdot\underline v_2+\dots+\lambda_k\cdot\underline v_k+\underline a\mid\lambda_1,\dots,\lambda_k\in\mathbb{R}\}$ eltolt alteret az $\underline a$ ponton átmenő, $k$-dimenziós **hipersíknak** nevezzük.
