**8.5. Lineáris egyenletrendszerek megoldása gradiens módszerrel** 



## 1. Motiváció és az alapötlet: Optimalizáció és Lineáris Algebra kapcsolata

Az előző (8.4.) szakaszban a gradiens-módszert általános nemlineáris függvények minimumhelyének megkeresésére használtuk. Ez a fejezet egy rendkívül fontos matematikai hidat épít fel: megmutatja, hogyan lehet egy **lineáris egyenletrendszer megoldását átfogalmazni egy többváltozós kvadratikus függvény minimalizálási feladatává**.

Ez a megközelítés teszi lehetővé, hogy a mérnöki gyakorlatban előforduló, akár több milliós változószámú, ritka együtthatómátrixú lineáris rendszereket (pl. parciális differenciálegyenletek diszkretizációja során) közvetlen mátrixinvertálás nélkül, tisztán iteratív optimalizációs lépésekkel oldjuk meg.



## 2. A kvadratikus minimalizációs modell felépítése

Legyen $\mathbf{A} \in \mathbb{R}^{n \times n}$ egy **szimmetrikus és pozitív definit** mátrix, $\mathbf{b} \in \mathbb{R}^n$ egy ismert valós vektor, és $c \in \mathbb{R}$ egy tetszőleges konstans. Definiáljuk az alábbi többváltozós kvadratikus (másodfokú) függvényt:

$$g(\mathbf{x}) := \frac{1}{2}\mathbf{x}^T \mathbf{A}\mathbf{x} - \mathbf{b}^T \mathbf{x} + c \tag{8.8}$$

Ha a parciális deriváltakat koordinátánként kiszámítjuk (kihasználva a szimmetria miatti $a_{ij} = a_{ji}$ tulajdonságot), a függvény **gradiensvektorára** az alábbi letisztult mátrixos képlet adódik:


$$g'(\mathbf{x}) = \mathbf{A}\mathbf{x} - \mathbf{b} \tag{8.9}$$

A 8.1. fejezetből ismert elsőrendű szükséges feltétel szerint a függvénynek ott lehet szélsőértéke, ahol a gradiensvektor zéró:


$$g'(\mathbf{x}) = \mathbf{0} \implies \mathbf{A}\mathbf{x} - \mathbf{b} = \mathbf{0} \implies \mathbf{A}\mathbf{x} = \mathbf{b} \tag{8.10}$$

> **A híd elve (8.10. Tétel):** Mivel az $\mathbf{A}$ mátrix pozitív definit, a függvény Hesse-mátrixa ($g''(\mathbf{x}) = \mathbf{A}$) is pozitív definit, ami garantálja, hogy a függvénynek egyetlen, szigorú globális minimuma van. Ez a minimumhely **pontosan megegyezik az $\mathbf{A}\mathbf{x} = \mathbf{b}$ lineáris egyenletrendszer pontos elméleti megoldásával**.



## 3. Az optimális gradiens-módszer lineáris rendszerekre

Alkalmazzuk a (8.8) kvadratikus függvényre a 8.4-es fejezetben megismert optimális gradiens-iterációt. A negatív gradiensirányt – amelyet a lineáris algebrában **reziduális (maradék) vektornak** nevezünk – jelöljük $\mathbf{r}^{(k)}$-val:


$$\mathbf{r}^{(k)} := -\nabla g(\mathbf{p}^{(k)}) = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)} \tag{8.11}$$

Mivel $g(\mathbf{x})$ egy tiszta másodfokú algebrai alak, a 8.4-es fejezetben említett egydimenziós lépésköz-minimalizációs feladat ($\min_{\alpha} g(\mathbf{p}^{(k)} + \alpha \mathbf{r}^{(k)})$) analitikusan, **egzakt képlettel megoldható**. A derivált nullává tételével az **optimális $\alpha_k$ lépéshossz** közvetlenül kiszámítható:


$$\alpha_k = \frac{\|\mathbf{r}^{(k)}\|_2^2}{(\mathbf{r}^{(k)})^T \mathbf{A} \mathbf{r}^{(k)}} \tag{8.12}$$

### A végleges iterációs algoritmus:

Egy tetszőleges $\mathbf{p}^{(0)}$ kezdővektorból elindulva a rekurzió lépései a következők:

1. Kiszámítjuk az aktuális hiba-irányt: $\mathbf{r}^{(k)} = \mathbf{b} - \mathbf{A}\mathbf{p}^{(k)}$.
2. Ha $\|\mathbf{r}^{(k)}\| < \varepsilon$, az iterációt leállítjuk (elértük a kívánt pontosságot).
3. Meghatározzuk az egzakt lépésközt az (8.12) képlettel.
4. Lépünk a következő közelítésre:

$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} + \alpha_k \mathbf{r}^{(k)} \tag{8.13}$$





## 4. Számszerű Mintapélda: $3 \times 3$-as rendszer megoldása

A jegyzet az alábbi szimmetrikus és pozitív definit egyenletrendszeren mutatja be az algoritmus működését:


$$\begin{array}{rcrcrcr} 
4x_1 & + & 2x_2 & - &  x_3    & = & 0 \\ 
2x_1 & + & 5x_2 &   &        & = & 8 \\ 
-x_1 & + &      & + &  3x_3 & = & 1 
\end{array}$$

A pontos elméleti megoldás: $\mathbf{p} = (-1, 2, 0)^T$.

Az algoritmust a $\mathbf{p}^{(0)} = (3, 3, 3)^T$ távoli kezdőpontból indítva az alábbi konvergencia-menetrend adódik:

* **0. lépés:** A kezdeti hiba-távolság (euklideszi norma) $\|\mathbf{p}^{(0)} - \mathbf{p}\|_2 = 5.099$.
* **1. lépés:** Az optimális lépésköz beszámítása után az új helyzet $\mathbf{p}^{(1)} = (0.4346, 0.7767, 2.1448)^T$, a valódi hiba pedig máris lecsökkent $2.855$-re.
* **2. lépés:** $\mathbf{p}^{(2)} = (0.0379, 1.8993, 0.4161)^T$, a hiba tovább zuhan $1.116$-ra.
* **13. lépés:** A sorozat teljesen rásimul a célobjektumra: $\mathbf{p}^{(13)} = (-0.9995, 1.9996, 0.0004)^T$, ahol az eltérés elenyésző, mindössze **$0.00072$**.



## 5. Összegzés és kitekintés (Konjugált Gradiens)

A lineáris egyenletrendszerekre szabott optimális gradiens-módszer egy rendkívül elegáns eljárás, mivel a lépésközök kereséséhez nincs szükség bizonytalan vagy lassú egydimenziós próbálkozásokra (line search), az $\alpha_k$ egyetlen közvetlen képlettel egzaktul megkapható.

Bár a 8.4. szakaszban bemutatott nemlineáris "cikcakk" oszcilláció (völgy-effektus) a nagyon rosszul kondicionált mátrixok esetén itt is lelassíthatja a konvergenciát, ez az eljárás szolgált közvetlen elméleti alapul a numerikus analízis egyik legnagyszerűbb algoritmusának, a **Konjugált Gradiens (CG) módszernek** a kifejlesztéséhez, amely az irányok okos ortogonalizálásával már legfeljebb $n$ lépésben garantálja bármely szimmetrikus pozitív definit lineáris rendszer elméletileg pontos megoldását.
