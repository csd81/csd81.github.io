**8.7. Kvázi-Newton módszerek** 



## 1. Motiváció és az alapötlet

* **A probléma a Newton-módszerrel:** A klasszikus többváltozós Newton-módszer (8.6. fejezet) rendkívül gyors (kvadratikus konvergenciájú), de minden egyes iterációs lépésben ki kell számítani a függvény összes másodrendű parciális deriváltját tartalmazó **Hesse-mátrixot**, valamint meg kell oldani egy hozzá tartozó lineáris egyenletrendszert (vagy invertálni kell a mátrixot). Ez nagy dimenziós ($n$) feladatok esetén óriási műveletigényt ($O(n^3)$ lépésenként) és bonyolult analitikus deriválást jelent.
* **A Kvázi-Newton módszerek célja:** Úgy próbálják megőrizni a Newton-módszer gyorsaságát és völgy-követő tulajdonságait, hogy **teljesen kiküszöbölik a másodrendű deriváltak közvetlen kiszámítását és a mátrixinvertálást**.

### Hogyan működik?

Ahelyett, hogy kiszámolnánk a valódi $f''(\mathbf{p}^{(k)})$ Hesse-mátrixot, az algoritmus egy könnyen generálható **$\mathbf{A}^{(k)}$ közelítő mátrixot** tart számon, amelyet lépésről lépésre, pusztán az egymást követő pontok és gradiensvektorok változásaiból (elsőrendű információkból) frissít egy okos algebrai sémával.



## 2. A Kvázi-Newton modell és a Szekáns-egyenlet

Közelítsük az $f$ függvényt a $\mathbf{p}^{(k)}$ pont környezetében egy kvadratikus függvénnyel:


$$g(\mathbf{x}) := f(\mathbf{p}^{(k)}) + \big(\mathbf{v}^{(k)}\big)^T (\mathbf{x} - \mathbf{p}^{(k)}) + \frac{1}{2}(\mathbf{x} - \mathbf{p}^{(k)})^T \mathbf{A}^{(k)}(\mathbf{x} - \mathbf{p}^{(k)}) \tag{8.16}$$


Ahol $\mathbf{v}^{(k)} \approx f'(\mathbf{p}^{(k)})$ a gradiens közelítése (többnyire a pontos gradienssel egyenlő), és $\mathbf{A}^{(k)} \approx f''(\mathbf{p}^{(k)})$ a szimmetrikus, pozitív definit közelítő Hesse-mátrix.

Ha az $g(\mathbf{x})$ minimumhelyére ugrunk, megkapjuk az általános lépést:


$$\mathbf{p}^{(k+1)} = \mathbf{p}^{(k)} - \big(\mathbf{A}^{(k)}\big)^{-1} \mathbf{v}^{(k)} \tag{8.17}$$

Ahhoz, hogy az $\mathbf{A}^{(k+1)}$ mátrix a következő lépésben jól viselkedjen, megköveteljük, hogy teljesítse a többváltozós **szekáns-egyenletet (kvázi-Newton feltételt)**:


$$\mathbf{A}^{(k+1)} \mathbf{s}^{(k)} = \mathbf{y}^{(k)} \qquad \text{vagy inverz formában:} \qquad \mathbf{s}^{(k)} = \big(\mathbf{A}^{(k+1)}\big)^{-1} \mathbf{y}^{(k)}$$


Ahol bevezetjük a lépés- és gradiensváltozási vektorokat:

* $\mathbf{s}^{(k)} := \mathbf{p}^{(k+1)} - \mathbf{p}^{(k)}$ (az elmozdulásvektor),
* $\mathbf{y}^{(k)} := \mathbf{v}^{(k+1)} - \mathbf{v}^{(k)}$ (a gradiensek különbsége).



## 3. Frissítési stratégiák (Hessian Update Strategies)

A szekáns-egyenlet önmagában nem határozza meg egyértelműen az új mátrixot. A jegyzet három klasszikus rang-korrekciós formulát mutat be a mátrixok lépésenkénti frissítésére:

### A) Elsőrangú szimmetrikus formula (SR1 — Symmetric Rank-1)

A legkorábbi séma, amely a korábbi mátrixhoz egyetlen diádikus szorzatot (rang-1 korrekciót) ad hozzá:


$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T}{(\mathbf{y}^{(k)} - \mathbf{A}^{(k)}\mathbf{s}^{(k)})^T \mathbf{s}^{(k)}}$$

* **Hátránya:** Nem garantálja, hogy a mátrix megőrzi a pozitív definitségét, sőt a nevező nullává válásakor az algoritmus numerikusan összeomolhat.

### B) A DFP-formula (Davidon–Fletcher–Powell)

A DFP-módszer két diádikus szorzat hozzáadásával (rang-2 korrekcióval) frissít, és közvetlenül az **inverz Hesse-mátrixot** ($(\mathbf{A}^{(k)})^{-1}$) számítja rekurzívan:


$$(\mathbf{A}^{(k+1)})^{-1} = (\mathbf{A}^{(k)})^{-1} + \frac{\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T}{(\mathbf{s}^{(k)})^T \mathbf{y}^{(k)}} - \frac{(\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1}}{(\mathbf{y}^{(k)})^T (\mathbf{A}^{(k)})^{-1} \mathbf{y}^{(k)}} \tag{8.35}$$

* **Előny:** Ha az induló mátrix pozitív definit volt, és a lépésközt egydimenziós kereséssel (line search) jól választjuk meg, a DFP séma **garantáltan megőrzi a pozitív definitséget**, és az inverz közvetlen frissítése miatt **sosem kell lineáris egyenletrendszert megoldani vagy mátrixot invertálni** ($O(n^2)$ műveletigény lépésenként).

### C) A BFGS-formula (Broyden–Fletcher–Goldfarb–Shanno)

A modern numerikus analízis **legsikeresebb és leghatékonyabb** kvázi-Newton algoritmusa, amely a DFP matematikai dualitásából származik. Közvetlenül a közelítő Hesse-mátrixot frissíti az alábbi módon:


$$\mathbf{A}^{(k+1)} = \mathbf{A}^{(k)} + \frac{\mathbf{y}^{(k)}(\mathbf{y}^{(k)})^T}{(\mathbf{y}^{(k)})^T \mathbf{s}^{(k)}} - \frac{\mathbf{A}^{(k)}\mathbf{s}^{(k)}(\mathbf{s}^{(k)})^T\mathbf{A}^{(k)}}{(\mathbf{s}^{(k)})^T\mathbf{A}^{(k)}\mathbf{s}^{(k)}}$$



## 4. Konvergencia és Numerikus Tapasztalatok

A kvázi-Newton módszerek elméletileg **lokálisan szuperlineáris konvergenciájúak**. Ez sebességben a gradiens-módszer lineáris és a tiszta Newton-módszer kvadratikus tempója között helyezkedik el, de a gyakorlatban rendkívül közel van a Newton-módszer gyorsaságához.

A jegyzet a Rosenbrock-függvényen ($f(x, y) = (x^2 - 2y)^2 + 2(x - 1)^2$) teszteli a DFP-algoritmust a távoli $(2,2)^T$ pontból indítva, ahol a kiindulási mátrix az $\mathbf{A}^{(0)} = \mathbf{I}$ egységmátrix (vagyis az első lépés egy tiszta gradiens-lépés):

* **0. lépés:** Távolság a minimumtól: $1.802$.
* **1. lépés:** A hiba $0.295$-re csökken.
* **4. lépés:** A mátrixba beépülő görbületi információknak köszönhetően a hiba radikálisan bezuhan $0.011$-re.
* **8. lépés:** Gyakorlatilag eléri a pontos $(1, 0.5)^T$ minimumhelyet, a hiba elenyésző: **$0.00000002$**.



## 5. Összegzés és gyakorlati haszon

A kvázi-Newton eljárások (különösen a **BFGS** és annak korlátozott memóriájú változata, az *L-BFGS*) a modern gépi tanulási és mérnöki optimalizációs szoftverek igáslovai. Sikerük titka a zseniális kompromisszum: képesek biztosítani a Newton-módszer intelligens, völgyeket stabilan követő keresési irányát és gyorsaságát, miközben a számítási igényt a gradiens-módszer olcsó, tisztán elsőrendű deriváltakra épülő szintjén tartják.