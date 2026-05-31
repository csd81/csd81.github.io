import{j as e,b as A,a as u,r as E,i as q,L as k}from"./index-BNJfr4Vx.js";import{R as z}from"./kit-CvJHkrYq.js";import{M as S}from"./MarkdownView-DBbdIc_d.js";/* empty css            */import"./auto-render-DUhD6wWl.js";import"./katex-Dc8nsIP1.js";import"./normalizeMath-C5FP3L7Z.js";import"./index-DBt8WOlV.js";import"./CodeBlock-DfTMu4uI.js";const v=[{n:1,title:"Halmazelmélet",ilaId:"ch1"},{n:2,title:"Megfeleltetések és leképezések",ilaId:"ch2"},{n:3,title:"Permutációk",ilaId:"ch3"},{n:4,title:"Relációk és gráfok",ilaId:"ch4"},{n:5,title:"Halmazok számossága",ilaId:"ch5"},{n:6,title:"Matematikai logika",ilaId:"ch6"},{n:7,title:"Komplex számok",ilaId:"ch7"},{n:8,title:"Absztrakt algebra",ilaId:"ch8"},{n:9,title:"Matematikai bizonyítások",ilaId:"ch9"}],K=`---
n: 1
title: "Kombinatorika elemei (P, V, C)"
glossary: "Az elemi kombinatorika a permutációk, variációk és kombinációk számolási módszereit vizsgálja."
path: "combo"
related_dimat: ["ch2"]
related_ila: ["ch10"]
related_exercises: ["ch2"]
formulas:
  - "$P_n = n!$"
  - "$V_n^k = \\\\dfrac{n!}{(n-k)!}$"
  - "$C_n^k = \\\\dbinom{n}{k} = \\\\dfrac{n!}{k!\\\\,(n-k)!}$"
---

A kombinatorika egyik alapfeladata annak meghatározása, hogy adott objektumokból hányféleképpen lehet választani vagy rendezni. A három legfontosabb modell:

## Permutáció (P)

Az összes elem sorbarendezése, ahol a sorrend számít.

**Példa:** 5 ember hányféleképpen ülhet le egy sorba?

$$P_n = n!$$

$$P_5 = 5! = 120$$

## Variáció (V)

$k$ elem kiválasztása $n$ elem közül úgy, hogy a sorrend számít.

**Példa:** 10 versenyző közül arany-, ezüst- és bronzérmes kiválasztása.

$$V_n^k = \\dfrac{n!}{(n-k)!}$$

$$V_{10}^3 = 10 \\cdot 9 \\cdot 8 = 720$$

## Kombináció (C)

$k$ elem kiválasztása $n$ elem közül úgy, hogy a sorrend nem számít.

**Példa:** 10 emberből 3 fős csapat választása.

$$C_n^k = \\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$$

$$\\binom{10}{3} = 120$$

## Ismétléses változatok

Ha az elemek között vannak azonosak (vagy egy elemet többször választhatunk), külön képletek érvényesek:

### Ismétléses permutáció

$n$ elem közül $k_1$ azonos típusú az elsőből, $k_2$ a másodikból, …, $k_s$ az $s$-edikből ($\\sum k_i = n$):

$$P_n^{k_1, k_2, \\ldots, k_s} = \\dfrac{n!}{k_1!\\,k_2!\\,\\cdots\\,k_s!}$$

Mert az azonos elemek egymás közti cseréje nem ad új sorrendet, így le kell osztanunk azok permutációival.

**Példa:** A „MEGFELLEBBEZHETETLEN" szóban hányféle anagramma van? Számoljuk meg az ismétléseket: **20 betű** összesen, ebből $E$ **7×**, $L$ **3×**, $B$ **2×**, $T$ **2×**, többi (M, G, F, Z, H, N) 1×. Tehát:

$$\\dfrac{20!}{7!\\,3!\\,2!\\,2!}$$

**Nehezítés:** hány olyan sorrend van, amelyben **két \`E\` betű nem kerül egymás mellé**? Trükk: rakjuk először a 13 nem-E betűt sorba ($\\frac{13!}{3!\\,2!\\,2!}$ módon), ami 14 „lyukat" hagy az E-knek (előtte, közötte, utána); ebből 7-et kell választani — $\\binom{14}{7}$. Eredmény: $\\frac{13!}{3! \\cdot 2! \\cdot 2!} \\cdot \\binom{14}{7}$.

### Sakktábla-rácsút (Király-bejárás)

> *„Hányféleképpen juthat el a király a $8\\times 8$-as sakktábla bal felső sarkából a jobb alsóba, ha csak lefelé és jobbra léphet?"*

**Bijekció a betű-sorozatokkal:** minden geometriai útvonal pontosan **14 lépés** hosszú (7 lefelé + 7 jobbra). Minden út tehát egy 14-elemű szó 7 darab \`J\` (jobbra) és 7 darab \`L\` (lefelé) betűvel. A különböző szavak száma:

$$\\binom{14}{7} = \\frac{14!}{7! \\cdot 7!} = 3432$$

**Variánsok (vizsga-feladatok):**
- *Átlós lépés is megengedett* (le-jobbra) → 3-féle lépéstípus, polinomiális együtthatós formula
- *Lezárt cellák* (Alfa, Béta mező tilos) → szita-formula a tilos-mezőn-áthaladó utak kivonására
- **„C-variáns" (kötelező érintés — OR/unió)**: A királynak az $\\{c_1, c_2, c_3\\}$ mezők *valamelyikére* rá kell lépnie. Modell: $A_i$ = a $c_i$-n áthaladó utak halmaza. Cél: $|A_1 \\cup A_2 \\cup A_3|$ — **szita-formula** (\`tétel 5\`). Minden $A_i$-t azzal a trükkel számolunk, hogy a $c_i$ pont $r$-edik sor és $s$-edik oszlop → előtte $\\binom{r+s}{r}$ út, utána $\\binom{(7-r) + (7-s)}{7-r}$, így $|A_i| = \\binom{r+s}{r} \\cdot \\binom{14 - r - s}{7 - r}$. A metszeteknél a kötelező $c_i, c_j$ csúcsokat sorrendben kell érinteni — szorzat-felbontás.
- **„D-variáns" (kizárt mezők — De Morgan)**: A királynak az $\\{d_1, d_2, d_3\\}$ mezők *egyikére sem* léphet rá. De Morgan-azonosság: $|\\overline{A_1 \\cup A_2 \\cup A_3}| = \\binom{14}{7} - |A_1 \\cup A_2 \\cup A_3|$ — az összes út és a C-variáns megoldásának különbsége. Ez nem új feladat, csak a C-variáns *komplementere*.

### Számológép-trükk: a $\\binom{n}{k}$ egyszerűsített tört-formája

A tankönyvi képlet $\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$ közvetlenül használhatatlan nagy $n$-re (pl. $70!$ már túlcsordul a legtöbb számológépen). **Ehelyett** írjuk:

$$\\binom{n}{k} = \\frac{n \\cdot (n-1) \\cdot (n-2) \\cdots (n-k+1)}{1 \\cdot 2 \\cdot 3 \\cdots k}$$

— a számláló $k$ tagú csökkenő szorzat $n$-től, a nevező $k!$. Példa **ötöslottó** $\\binom{90}{5}$:

$$\\frac{90 \\cdot 89 \\cdot 88 \\cdot 87 \\cdot 86}{1 \\cdot 2 \\cdot 3 \\cdot 4 \\cdot 5} = 43\\,949\\,268$$

A számológépen az **\`nCr\`** (vagy \`C(n,k)\`) gomb beépítve csinálja ezt — érdemes a szimmetria miatt mindig a kisebb $k$-val számolni, $\\binom{n}{k} = \\binom{n}{n-k}$ szerint.

### Ismétléses variáció

$k$ elem kiválasztása $n$-ből úgy, hogy minden helyre **bármelyik** elem újra választható, és a sorrend számít:

$$V_n^{k,\\,\\text{ism}} = n^k$$

**Példa:** 4-jegyű PIN-kód, ahol minden jegy 0–9 → $10^4 = 10\\,000$ kód.

### Ismétléses kombináció (stars-and-bars)

$k$ elem kiválasztása $n$ típusból, ha visszatevéssel megyünk és a sorrend nem számít:

$$C_n^{k,\\,\\text{ism}} = \\binom{n + k - 1}{k}$$

**Példa:** 3-féle ízű (csoki, vanília, eper) fagyiból veszünk 5 gombócot — hányféleképpen? $\\binom{3 + 5 - 1}{5} = \\binom{7}{5} = 21$.

A „stars-and-bars" intuíció: $k$ csillagot és $n-1$ függőleges választóvonalat rakunk sorba; a vonalak közti csillagok megadják az egyes típusok darabszámát.

## Négyirányú döntési táblázat

| | Sorrend számít | Sorrend nem számít |
|---|---|---|
| **Visszatevés nélkül**, $k$ elem | $V_n^k = \\dfrac{n!}{(n-k)!}$ | $C_n^k = \\dbinom{n}{k}$ |
| **Visszatevéssel**, $k$ elem | $V_n^{k,\\text{ism}} = n^k$ | $C_n^{k,\\text{ism}} = \\dbinom{n+k-1}{k}$ |
| Mind az $n$ elem | $P_n = n!$ (ism. nélk.) | $P_n^{k_1,\\dots,k_s} = \\dfrac{n!}{k_1!\\cdots k_s!}$ |

## Konvencó: $0! = 1$

Definíció szerint $0! = 1$. Indoklás:

- *Programozói:* egy üres szorzat (semelyik tagot sem szorozunk össze) értéke az egységelem, vagyis 1.
- *Kombinatorikai:* az üres halmaz egyféleképpen rendezhető sorba (a triviális, üres sorrenddel).
- *Konzisztencia a rekurzióval:* $n! = n\\cdot (n-1)!$, így $1! = 1\\cdot 0!$ csak $0! = 1$-nél stimmel.

Ezzel a képletek $k = 0$ és $k = n$ esetekben is érvényesek ($V_n^0 = 1$, $C_n^n = 1$).

## Pedagógiai név: „merítőkanál"

A magyar tananyagban a kombinációt szokás *merítőkanál módszer*nek hívni: olyan, mintha egyszerre belemerítenénk egy kanalat a tárgyak közé és kihúznánk $k$ darabot — a kihúzás *sorrendje láthatatlan*, csak a végén látjuk, mi került ki együtt.

## Intuíció

Ez az alapmechanika a kombinatorika „számláló motorja" — szinte minden későbbi téma ezekre épül: binomiális együtthatók, valószínűségszámítás, gráfelmélet, algoritmusok, kriptográfia.

A kulcskérdés mindig: *(1) Számít-e a sorrend?* *(2) Felhasználható-e egy elem többször?* — a kettő válasza választja ki a négy modell egyikét. 🧮
`,P=`---
n: 2
title: 'Binomiális és polinomiális tételek'
glossary: 'A binomiális és multinomiális kifejezések hatványainak algebrai felbontását leíró tételek.'
path: 'combo'
related_dimat: ['ch3']
related_ila: ['ch11']
related_exercises: ['ch3']
formulas:
  - '$(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k$'
  - '$(a_1+\\dots+a_m)^n = \\sum \\dfrac{n!}{k_1!\\cdots k_m!} a_1^{k_1}\\cdots a_m^{k_m}$'
---
A binomiális tétel azt mondja meg, hogyan lehet egy kéttagú kifejezés hatványát összeg alakra felbontani.

## Binomiális tétel

$$(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k$$

A képletben:

- $\\binom{n}{k}$ a binomiális együttható,
- az egyes tagokban az $a$ és $b$ kitevőinek összege mindig $n$.

**Példa:**

$$(a+b)^3 = a^3 + 3a^2 b + 3ab^2 + b^3$$

Az együtthatók $1, 3, 3, 1$ a Pascal-háromszögből is kiolvashatók.

## Kombinatorikai jelentés

$\\binom{n}{k}$ megadja, hogy $n$ tényező közül hányféleképpen választhatjuk ki azt a $k$ darabot, amelyből $b$ kerül a szorzatba. Ezért a binomiális tétel mélyen kapcsolódik a kombinatorikához.

## Polinomiális (multinomiális) tétel

Több tag esetén:

$$(a_1+a_2+\\dots+a_m)^n = \\sum \\dfrac{n!}{k_1!\\,k_2!\\,\\cdots k_m!} a_1^{k_1} a_2^{k_2}\\cdots a_m^{k_m}$$

ahol $k_1+k_2+\\dots+k_m = n$.

**Példa:**

$$(a+b+c)^2 = a^2+b^2+c^2+2ab+2ac+2bc$$

A polinomiális együttható $\\dfrac{n!}{k_1!\\cdots k_m!}$ pontosan egy **ismétléses permutáció** számával egyenlő (\`tétel 1\`): hányféleképp lehet egy $n$-hosszú szót leírni úgy, hogy $k_i$ db $a_i$ szerepel.

## Newton-féle általánosított binomiális tétel

A binomiális tétel kiterjeszthető **tetszőleges** $\\alpha \\in \\mathbb{R}$ (vagy $\\mathbb{C}$) kitevőre — végtelen hatványsorként:

$$(1 + x)^\\alpha = \\sum_{i=0}^\\infty \\binom{\\alpha}{i} x^i, \\qquad |x| < 1$$

ahol $\\binom{\\alpha}{i} = \\dfrac{\\alpha(\\alpha-1)\\cdots(\\alpha-i+1)}{i!}$ az általánosított binomiális együttható (\`tétel 4\`). A faktoriálisos képlet itt nem értelmezhető, csak a szorzatos alak.

**Példák:**

- $\\alpha = -1$: $(1 + x)^{-1} = \\sum_i (-1)^i x^i = 1 - x + x^2 - x^3 + \\dots$ (mértani sor).
- $\\alpha = 1/2$: $\\sqrt{1 + x} = 1 + \\tfrac{x}{2} - \\tfrac{x^2}{8} + \\tfrac{x^3}{16} - \\dots$
- $\\alpha = -n$: $(1 + x)^{-n} = \\sum_i (-1)^i \\binom{n+i-1}{i} x^i$ — generálja a stars-and-bars számokat (\`tétel 8\` generátorfüggvény-fejezet).

## Leibniz-szabály — analízis kapcsolat

Az analízisben két függvény szorzatának $n$-edik deriváltjára:

$$\\left(f(x)\\, g(x)\\right)^{(n)} = \\sum_{k=0}^n \\binom{n}{k} f^{(k)}(x)\\, g^{(n-k)}(x)$$

A szerkezet **formailag azonos** a binomiális tétellel: a $\\binom{n}{k}$ együtthatók ugyanúgy súlyozzák a tagokat, csak az „összeg" itt deriválás-rend szerinti felbontás. Ez azt mutatja, hogy a binomiális együtthatók messze túlmutatnak a kombinatorikán.

## Alkalmazások

- kombinatorikai számolások,
- valószínűségszámítás,
- generátorfüggvények,
- statisztika és algoritmuselmélet.

## Intuíció

A binomiális tétel azt mutatja meg, hogyan „terül szét" egy kétváltozós hatvány. A multinomiális tétel ezt általánosítja sok tagra — olyan, mint egy algebrai robbanásmodell, amely a hatvány minden lehetséges szorzatkombinációját rendszerezetten előállítja.
`,H=`---
n: 3
title: 'Stirling-formula'
glossary: 'A faktoriális függvény nagy számokra adott közelítő formulája.'
path: 'combo'
related_dimat: ['ch2']
related_ila: ['ch11']
related_exercises: ['ch2']
formulas:
  - '$n! \\approx \\sqrt{2\\pi n}\\,\\left(\\dfrac{n}{e}\\right)^n$'
  - '$\\ln n! = n\\ln n - n + O(\\ln n)$'
---
A faktoriális:

$$n! = 1\\cdot 2\\cdot 3\\cdots n$$

nagyon gyorsan nő, ezért nagy $n$-re nehéz pontosan számolni vele. A Stirling-formula egyszerűbb alakban közelíti:

$$n! \\approx \\sqrt{2\\pi n}\\,\\left(\\dfrac{n}{e}\\right)^n$$

## Példa

$10! = 3\\,628\\,800$. A Stirling-közelítés:

$$\\sqrt{20\\pi}\\,\\left(\\dfrac{10}{e}\\right)^{10} \\approx 3\\,598\\,696$$

A hiba csak néhány ezrelék.

## Finomítások

A pontosság javítható korrekciós tagokkal:

$$n! \\sim \\sqrt{2\\pi n}\\,\\left(\\dfrac{n}{e}\\right)^n \\left(1 + \\dfrac{1}{12n} + \\dfrac{1}{288 n^2} - \\dfrac{139}{51840 n^3} + \\cdots\\right)$$

Más változatok:

- **Burnside:** $n! \\approx \\sqrt{2\\pi}\\,\\left(\\dfrac{n+\\tfrac{1}{2}}{e}\\right)^{n+\\tfrac{1}{2}}$
- **Ramanujan:** $n! \\approx \\sqrt{\\pi}\\,\\left(\\dfrac{n}{e}\\right)^n \\sqrt[6]{8n^3 + 4n^2 + n + \\tfrac{1}{30}}$ — meglepően pontos.

## Mire használják?

- kombinatorikában (binomiális együtthatók becslése),
- valószínűségszámításban,
- algoritmusok tér- és időbecslésénél,
- információelméletben, fizikában, statisztikában.

## Növekedési sorrend — algoritmus-komplexitás kontextusban

A kombinatorikai függvények növekedési sebessége drasztikusan eltér; nagyság szerint:

$$n \\;\\ll\\; n^2 \\;\\ll\\; n^3 \\;\\ll\\; 2^n \\;\\ll\\; n! \\;\\ll\\; n^n$$

Konkrét számok $n = 100$-ra:

| Függvény | Érték $n = 100$-ra |
|---|---|
| $n$ | $100$ |
| $n^2$ | $10\\,000$ |
| $n^3$ | $10^6$ |
| $2^n$ | $\\sim 1.27 \\cdot 10^{30}$ |
| $n! $ | $\\sim 9.33 \\cdot 10^{157}$ |
| $n^n$ | $10^{200}$ |

**Gyakorlati következmény:** algoritmusok, amelyek faktoriális futási idejűek (pl. brute-force gráf-izomorf, TSP, naív Hamilton-kör), $n = 100$-ra **évmilliárdokig** is futnának. Csak polinom-idejű ($n^k$) algoritmusok használhatók gyakorlatban nagy adathalmazon.

### Logaritmikus skála — vizualizáció

A fenti $\\sim 10^{200}$ értéket egy papírlapon nem lehet közvetlenül ábrázolni (a $y$-tengely lineárisan végtelen lenne). A trükk a **logaritmikus skála**: a függőleges tengelyt $\\log_{10}$-ben mérjük, így a $10^{200}$ érték a 200-as helyen jelenik meg. Ezzel a $n, n^2, 2^n, n!, n^n$ függvények egyenes vonalakká vagy enyhén görbülő íjjokká változnak, és **összehasonlíthatóvá** válnak ugyanazon a koordináta-rendszeren.

## Intuíció

A faktoriális növekedése nagyjából $(n/e)^n$ nagyságrendű; a $\\sqrt{2\\pi n}$ tényező finom korrekció, amely a $\\ln n!$ maximumkörnyezetének Gauss-jellegéből származik.
`,M=`---
n: 4
title: 'Binomiális együtthatók tulajdonságai'
glossary: 'A binomiális együtthatók algebrai, kombinatorikai és számolási tulajdonságainak vizsgálata.'
path: 'combo'
related_dimat: ['ch3']
related_ila: ['ch10']
related_exercises: ['ch3']
formulas:
  - '$\\binom{n}{k} = \\binom{n}{n-k}$'
  - '$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$'
  - '$\\sum_{k=0}^n \\binom{n}{k} = 2^n$'
---
A binomiális együttható

$$\\binom{n}{k} = \\dfrac{n!}{k!\\,(n-k)!}$$

megadja, hogy $n$ elem közül hányféleképpen választhatunk ki $k$ darabot úgy, hogy a sorrend nem számít.

## 1. Szimmetria

$$\\binom{n}{k} = \\binom{n}{n-k}$$

$k$ elem kiválasztása ugyanaz, mint $n-k$ elem kihagyása.

## 2. Pascal-azonosság

$$\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$$

Ez építi fel a Pascal-háromszöget. Például $\\binom{5}{2} = \\binom{4}{1} + \\binom{4}{2} = 4 + 6 = 10$.

## 3. Sorösszeg

$$\\sum_{k=0}^n \\binom{n}{k} = 2^n$$

Egy $n$-elemű halmaznak pontosan $2^n$ részhalmaza van.

## 4. Váltakozó összeg

$$\\sum_{k=0}^n (-1)^k \\binom{n}{k} = 0 \\quad (n>0)$$

Ez $(1-1)^n$ binomiális felbontásából következik.

## 5. Vandermonde-féle konvolúció

$$\\sum_{i=0}^k \\binom{n}{i}\\binom{m}{k-i} = \\binom{n+m}{k}$$

**Kombinatorikai bizonyítás (Jóska + Mari példa):** Jóska és Mari közös bőröndbe pakol $k$ tárgyat. Jóskának $n$ darab kacatja van, Marinak $m$. Az összes lehetőséget kétféleképpen számoljuk:

- **Direkt:** a $n + m$ tárgy közül választunk $k$-t → $\\binom{n+m}{k}$.
- **Esetekre bontva:** Jóska $i$ darabot ad bele ($\\binom{n}{i}$), Mari pedig a fennmaradó $k - i$ darabot ($\\binom{m}{k-i}$); az $i$ minden lehetséges értékére összegezünk.

Speciális eset $n = m$, $k = n$ → $\\sum_{i=0}^n \\binom{n}{i}^2 = \\binom{2n}{n}$ (a szimmetria miatt $\\binom{n}{n-i} = \\binom{n}{i}$).

## 6. Speciális értékek és nullák

- $\\binom{n}{0} = 1$ (üres választás — egyféleképpen),
- $\\binom{n}{1} = n$ (egy elem $n$-féleképp választható),
- $\\binom{n}{n-1} = n$ (egyet hagyunk ki — $n$-féleképp választhatjuk, melyik marad),
- $\\binom{n}{n} = 1$ (mindet egyszerre).

**Konvenció:** $\\binom{n}{k} = 0$ ha $k < 0$ vagy $k > n$. A szorzatos képlet (lásd alább) ezt automatikusan adja, mert a számlálóban valamelyik tényező $0$ lesz.

## 7. Kapcsolat a binomiális tétellel

$(a+b)^4 = a^4 + 4a^3 b + 6 a^2 b^2 + 4 a b^3 + b^4$ — az együtthatók $1, 4, 6, 4, 1$ mind binomiális együtthatók.

## Számolási módszerek

- faktoriális formula,
- Pascal-háromszögből generálás,
- rekurzió,
- dinamikus programozás,
- modulo aritmetika (Lucas-tétel) nagy számokra.

### Szorzatos vs faktoriális alak — numerikus stabilitás

A tankönyvi $\\binom{n}{k} = \\dfrac{n!}{k!(n-k)!}$ szép, de gyakorlatban gyorsan **túlcsordul**: már $\\binom{70}{35}$-höz $70! \\approx 10^{100}$ kellene köztes lépésként, ami sok zsebszámológépet és egyszerű programot megfekteti. A **szorzatos alak** stabilabb:

$$\\binom{n}{k} = \\dfrac{n \\cdot (n-1) \\cdots (n-k+1)}{k!} = \\prod_{i=1}^k \\dfrac{n - k + i}{i}$$

A számláló és nevező pontosan $k$-$k$ tényezőből áll; lépésenként osztva az $i$-edik lépés után az eredmény mindig egész marad. Tipikus benchmark: $\\binom{300}{100}$ — szorzatos alak közvetlenül megadja, a faktoriálisos elszáll.

### Általánosított binomiális együttható

Tetszőleges $\\alpha \\in \\mathbb{R}$ (vagy $\\mathbb{C}$) és $i \\in \\mathbb{N}_0$ esetén a szorzatos alak az **általánosított** binomiális együtthatót adja:

$$\\binom{\\alpha}{i} = \\dfrac{\\alpha(\\alpha-1)(\\alpha-2)\\cdots(\\alpha-i+1)}{i!}$$

Példák:

- $\\binom{-1}{i} = (-1)^i$
- $\\binom{1/2}{i}$ — a $\\sqrt{1+x}$ Taylor-sorának együtthatói (Newton-féle gyökvonási sor)
- $\\binom{-n}{k} = (-1)^k \\binom{n+k-1}{k}$ — kapcsolat az ismétléses kombinációval (\`tétel 1\`)

Ez a *Newton-féle általánosított binomiális tétel* alapja: $(1+x)^\\alpha = \\sum_{i\\geq 0} \\binom{\\alpha}{i} x^i$ (lásd \`tétel 2\` és \`tétel 8\`).

## Alkalmazások

Kombinatorika, valószínűségszámítás, gráfelmélet, algoritmusok, kriptográfia, statisztika. A binomiális együttható a kombinatorika egyik „univerzális számlálóeleme".
`,B=`---
n: 5
title: 'Logikai szitaformula'
glossary: 'Az inklúzió-kizárás elvén alapuló kombinatorikai számolási módszer.'
path: 'combo'
related_dimat: ['ch4']
related_ila: ['ch11']
related_exercises: ['ch4']
formulas:
  - '$|A\\cup B| = |A| + |B| - |A\\cap B|$'
  - '$\\left|\\bigcup_{i=1}^n A_i\\right| = \\sum_{\\emptyset\\neq S\\subseteq[n]} (-1)^{|S|+1} \\left|\\bigcap_{i\\in S} A_i\\right|$'
---
A logikai szitaformula (inklúzió-kizárás elve) olyan módszer, amellyel több, egymást átfedő halmaz elemszámát lehet helyesen megszámolni.

Ha egyszerűen összeadjuk a halmazok méretét, akkor a közös elemeket többször számoljuk; a szita ezt korrigálja „hozzáad–kivon–hozzáad" mintával.

## Két halmaz

$$|A\\cup B| = |A| + |B| - |A\\cap B|$$

## Három halmaz

$$|A\\cup B\\cup C| = |A|+|B|+|C| - |A\\cap B|-|A\\cap C|-|B\\cap C|+|A\\cap B\\cap C|$$

### „Krétás krumpli" intuíció (3-halmaz)

Képzeld el a tornaterem parkettjére krétával rajzolt **három nagy kör** („krumplit") — az angolul, belgául, illetve cirilül tanuló diákok halmazai. Egy gyerek attól függően áll be valamelyik körbe (vagy több körbe egyszerre), hogy milyen nyelveket tanul.

- A három körben mindenki szerepel, aki *legalább egy* nyelvet tanul.
- A **mindhárom kör metszetében** álló gyerekek (mindhárom nyelvet tanulók) az egyenkénti összeadásnál ($|A| + |B| + |C|$) **háromszor** számolódnak.
- A páronkénti metszetek levonásánál ($-|A\\cap B| - |A\\cap C| - |B\\cap C|$) szintén **háromszor** vonjuk le őket — így ők **eltűnnek** a nyilvántartásból.
- Ezért a végén $+|A\\cap B\\cap C|$ tagra szükség van: **vissza kell adni** a középső csoportot egyszer.

A szita váltakozó előjelei pontosan ezt a „háromszor-számoltam – háromszor-levontam – egyszer-vissza" mintát követik. Programozói trükk: a páronkénti metszetek összegzéséhez **két egymásba ágyazott \`for\` ciklus** kell, ahol $j > i$ (azaz $j$ az $i+1$-től megy), különben minden párt kétszer számolnánk.

## Általános alak

$$\\left|\\bigcup_{i=1}^n A_i\\right| = \\sum_{\\emptyset\\neq S\\subseteq[n]} (-1)^{|S|+1} \\left|\\bigcap_{i\\in S} A_i\\right|$$

## Klasszikus példa

Hány szám osztható 2-vel vagy 3-mal $1\\dots 100$ között?

- 2-vel: $\\lfloor 100/2\\rfloor = 50$
- 3-mal: $\\lfloor 100/3\\rfloor = 33$
- 6-tal: $\\lfloor 100/6\\rfloor = 16$

Összesen $50+33-16 = 67$.

## Alkalmazások

- derangement-ek (fixpontmentes permutációk) száma,
- Möbius-féle inverzió,
- prímszitálás (Eratoszthenész általánosítása),
- gráfelméleti és valószínűségi formulák.

## Intuíció

A szita „dupla számolás elleni hibajavító protokoll": fokozatosan kiszűri a többszörös beszámításból származó hibákat.
`,T=`---
n: 6
title: 'Zárt formula $\\sum i^k$-ra'
glossary: 'Az egész számok hatványösszegeinek explicit képlettel való meghatározása.'
path: 'combo'
related_dimat: []
related_ila: []
related_exercises: []
formulas:
  - '$\\sum_{i=1}^n i = \\dfrac{n(n+1)}{2}$'
  - '$\\sum_{i=1}^n i^2 = \\dfrac{n(n+1)(2n+1)}{6}$'
  - '$\\sum_{i=1}^n i^3 = \\left(\\dfrac{n(n+1)}{2}\\right)^2$'
---
Ez a téma az olyan összegek explicit képletének meghatározásával foglalkozik, mint

$$S_k(n) = \\sum_{i=1}^n i^k$$

ahol $k$ rögzített pozitív egész. A cél egy *zárt formula*: olyan közvetlen képlet, amely nem igényli az összeg egyenkénti kiszámítását.

## Klasszikus formulák

$$\\sum_{i=1}^n i = \\dfrac{n(n+1)}{2}$$

$$\\sum_{i=1}^n i^2 = \\dfrac{n(n+1)(2n+1)}{6}$$

$$\\sum_{i=1}^n i^3 = \\left(\\dfrac{n(n+1)}{2}\\right)^2$$

$$\\sum_{i=1}^n i^4 = \\dfrac{n(n+1)(2n+1)(3n^2+3n-1)}{30}$$

## Általános alak (Faulhaber-formula)

Minden rögzített $k$-ra $S_k(n)$ egy $k+1$-edfokú polinom $n$-ben:

$$S_k(n) = \\dfrac{1}{k+1} \\sum_{j=0}^{k} \\binom{k+1}{j} B_j\\, n^{k+1-j}$$

ahol $B_j$ a Bernoulli-számok ($B_0=1$, $B_1 = \\tfrac{1}{2}$, $B_2=\\tfrac{1}{6}$, $B_4 = -\\tfrac{1}{30}$, $B_{2k+1}=0$ ha $k\\geq 1$).

## Bizonyítási ötlet (indukció)

$$\\sum_{i=1}^{n+1} i^k = \\sum_{i=1}^n i^k + (n+1)^k$$

a teleskópikus $(i+1)^{k+1} - i^{k+1}$ azonosság binomiális kifejtéséből kapjuk meg $S_k$-t lineáris rekurzióval $S_0, \\dots, S_{k-1}$ ismeretében.

## Algoritmikus jelentőség

Ha egy algoritmus $1+2+\\dots+n$ lépést végez, a zárt formula azonnal megmondja, hogy $O(n^2)$ nagyságrendű.

## Alkalmazások

- kombinatorika és számelmélet,
- algoritmusok futási idő becslése,
- diszkrét integrálok és diszkrét analízis,
- generátorfüggvény-azonosságok.

## Intuíció

A zárt formula „összecsomagolja" a hosszú összeget egyetlen algebrai kifejezésbe — mintha egy oszlopnyi számot egy kompakt matematikai gépezetté préselnénk.
`,V=`---
n: 7
title: 'Rekurzív sorozatok'
glossary: 'Olyan sorozatok vizsgálata, amelyek tagjai korábbi tagokból számíthatók ki.'
path: 'combo'
related_dimat: ['ch5']
related_ila: ['ch12']
related_exercises: ['ch5']
formulas:
  - '$a_n = f(a_{n-1}, a_{n-2}, \\dots)$'
  - '$F_n = F_{n-1} + F_{n-2}$, $F_0=0$, $F_1=1$'
  - '$F_n = \\dfrac{\\varphi^n - \\psi^n}{\\sqrt{5}}$, $\\varphi = \\dfrac{1+\\sqrt 5}{2}$'
---
A rekurzív sorozat olyan sorozat, amelyben az új tagokat a korábbi tagok segítségével definiáljuk. Általános alak:

$$a_n = f(a_{n-1}, a_{n-2}, \\dots)$$

Tehát minden új elem a múltból „épül fel".

## Fibonacci-sorozat

A legismertebb rekurzív sorozat:

$$F_n = F_{n-1} + F_{n-2}, \\quad F_0 = 0,\\; F_1 = 1$$

Tagok: $0, 1, 1, 2, 3, 5, 8, 13, \\dots$

## Rekurziók 4-tengelyes osztályozása

A rekurzív összefüggéseket **négy** szempont szerint csoportosíthatjuk:

| Tengely | Egyszerűbb eset | Bonyolultabb eset |
|---|---|---|
| **Rend** | véges (rögzített $k$-adrendű) — csak $k$ legutolsó tag kell | végtelen — az összes korábbi tag kell |
| **Linearitás** | lineáris — előző tagok lineáris kombinációja | nemlineáris — gyök, osztás, szorzat, hatvány a tagok között |
| **Homogenitás** | homogén — csak a sorozat tagjaitól függ | inhomogén — extra $B_n$ tag (konstans vagy $n$ függvénye) |
| **Együttható** | állandó — rögzített komplex számok | változó — $n$-től függő képletek |

A *legszebben kezelhető* osztály a **lineáris, állandó együtthatós, homogén, véges-rendű** — erre van karakterisztikus-egyenlet módszer (lásd alább). A többi típus általában generátorfüggvénnyel (\`tétel 8\`) vagy probabilistikus/aszimptotikus eszközökkel támadható.

## Karakterisztikus egyenlet

Lineáris homogén rekurzió

$$a_n = c_1 a_{n-1} + c_2 a_{n-2} + \\dots + c_k a_{n-k}$$

karakterisztikus egyenlete

$$x^k = c_1 x^{k-1} + \\dots + c_k$$

A megoldást $a_n = C \\cdot q^n$ alakban keresve, behelyettesítés és egyszerűsítés után jutunk a fenti $k$-adfokú egyenletre. Az **algebra alaptétele** szerint pontosan $k$ komplex gyöke van (multiplicitással számolva).

### Különböző gyökök esete

Ha minden gyök különböző ($q_1, q_2, \\ldots, q_k$):

$$a_n = C_1 q_1^n + C_2 q_2^n + \\cdots + C_k q_k^n$$

$C_i$ konstansok a **kezdeti értékekből** ($a_0, a_1, \\ldots, a_{k-1}$) határozódnak meg lineáris egyenletrendszerrel. Ha nincsenek kezdeti értékek, akkor az általános megoldás családja $k$ paraméteres ($C_i \\in \\mathbb{C}$).

A gyökökből megkapjuk a zárt formulát. Fibonacci esetén $x^2 = x + 1$, gyökei $\\varphi = \\tfrac{1+\\sqrt 5}{2}$ és $\\psi = \\tfrac{1-\\sqrt 5}{2}$, ezért:

$$F_n = \\dfrac{\\varphi^n - \\psi^n}{\\sqrt 5}$$

(Binet-formula).

### Konkrét példa: komplex gyökök

$a_n = 3 a_{n-1} - 7 a_{n-2}$. Karakterisztikus egyenlet $q^2 - 3q + 7 = 0$, diszkrimináns $9 - 28 = -19 < 0$:

$$q_{1, 2} = \\frac{3}{2} \\pm \\frac{\\sqrt{19}}{2} i$$

Általános megoldás:

$$a_n = C_1 \\left(\\tfrac{3}{2} + \\tfrac{\\sqrt{19}}{2} i\\right)^n + C_2 \\left(\\tfrac{3}{2} - \\tfrac{\\sqrt{19}}{2} i\\right)^n$$

Kezdeti értékekkel ($a_0 = 9, a_1 = 0$) $C_1, C_2$ meghatározható: $C_1 + C_2 = 9$, $C_1 q_1 + C_2 q_2 = 0$ → $C_1 = \\tfrac{9}{2}(1 - \\tfrac{3}{i\\sqrt{19}}), C_2 = \\overline{C_1}$. Bár a köztes számolás komplex, az $a_n$ végértékek **mindig valós** (sőt egész, ha az együtthatók és kezdőértékek azok) — mert $C_2 = \\overline{C_1}$ konjugált párok kioltják az imaginárius részt.

### Azonos gyökök esete (degenerált)

Ha a karakterisztikus egyenlet **dupla gyökkel** rendelkezik ($q_1 = q_2 = q$), a fenti formula csak egyetlen lineárisan független megoldást ($q^n$) ad, ami egy másodrendű rekurzióhoz nem elég. **Pótlás:** a második megoldás $n \\cdot q^n$:

$$a_n = C_1 \\cdot q^n + C_2 \\cdot n \\cdot q^n$$

Általánosan, ha $q$ multiplicitása $m$, akkor a $q^n, n \\cdot q^n, n^2 \\cdot q^n, \\ldots, n^{m-1} \\cdot q^n$ függvények mind megoldások (a karakterisztikus polinom deriváltjának nullhelye is). A teljes $k$-rendű általános megoldásban összesen $k$ független komponens szerepel.

## Inhomogén esetek

Ha $a_n = c_1 a_{n-1} + \\dots + c_k a_{n-k} + g(n)$, akkor az általános megoldás a homogén megoldás + egy partikuláris megoldás.

## Mire használják?

- algoritmusok elemzése (divide-and-conquer rekurziók — Master-tétel),
- dinamikus programozás,
- populációmodellek, pénzügyek,
- jelfeldolgozás (IIR szűrők).

## Intuíció

A rekurzív sorozat matematikai dominólánc: minden elem az előzőkből örökli a szerkezetét. 🔁
`,C=`---
n: 8
title: 'Generátorfüggvény módszer'
glossary: 'Sorozatok és kombinatorikai problémák hatványsorokkal történő kezelése.'
path: 'combo'
related_dimat: ['ch6']
related_ila: ['ch13']
related_exercises: ['ch6']
formulas:
  - '$G(x) = \\sum_{n=0}^\\infty a_n x^n$'
  - '$\\sum_{n=0}^\\infty x^n = \\dfrac{1}{1-x}$'
  - '$F(x) = \\dfrac{x}{1 - x - x^2}$'
---
Egy sorozat $a_0, a_1, a_2, \\dots$ **(rendes) generátorfüggvénye**:

$$G(x) = \\sum_{n=0}^\\infty a_n x^n$$

Itt $x$ formális változó; az $a_n$ együtthatók hordozzák a sorozat információját.

## Egyszerű példa

Ha $a_n = 1$ minden $n$-re:

$$G(x) = 1 + x + x^2 + x^3 + \\dots = \\dfrac{1}{1-x}$$

## Fibonacci-generátorfüggvény

$$F(x) = \\sum_n F_n x^n = \\dfrac{x}{1 - x - x^2}$$

A rekurzió így algebrai problémává alakul.

## Tipikus identitások

$$\\dfrac{1}{(1-x)^{n+1}} = \\sum_{k\\geq 0} \\binom{n+k}{k} x^k$$

(stars-and-bars generátorfüggvénye).

## Mire jó?

- rekurziók zárt formulájának levezetése,
- kombinatorikus számlálás (kompozíciók, partíciók),
- konvolúciók kezelése (mert $G\\cdot H$ együtthatói a Cauchy-szorzat),
- aszimptotikus viselkedés (szingularitás-elemzés).

## Példa: részhalmazok

$(1+x)^n = \\sum_k \\binom{n}{k} x^k$. Az $x^k$ együttható $\\binom{n}{k}$, a $k$-elemű részhalmazok száma.

## Hanoi-tornyok generátorfüggvénye — inhomogén rekurzió kezelése

A klasszikus inhomogén rekurzió $h_n = 2 h_{n-1} + 1$ ($n \\geq 1$), $h_0 = 0$. Levezetés generátorfüggvénnyel:

**1. lépés:** szorozzuk meg mindkét oldalt $x^n$-nel és szummázzuk $n = 1$-től végtelenig:

$$\\sum_{n \\geq 1} h_n x^n = 2 \\sum_{n \\geq 1} h_{n-1} x^n + \\sum_{n \\geq 1} x^n$$

**2. lépés:** ismerjük fel az $F(x) = \\sum_{n \\geq 0} h_n x^n$-t. A bal oldalon $F(x) - h_0 = F(x)$ (mert $h_0 = 0$). A jobb első tagjából: $2x \\sum_{n \\geq 1} h_{n-1} x^{n-1} = 2 x \\sum_{m \\geq 0} h_m x^m = 2 x F(x)$. A jobb második tag: $\\sum_{n \\geq 1} x^n = \\frac{1}{1-x} - 1 = \\frac{x}{1-x}$.

**3. lépés:** egyenlet:

$$F(x) - 2 x F(x) = \\frac{x}{1-x}$$

**4. lépés:** rendezés $F(x)$-re:

$$F(x) = \\frac{x}{(1 - 2x)(1 - x)}$$

**5. lépés** (parciális tört): $\\frac{x}{(1-2x)(1-x)} = \\frac{1}{1-2x} - \\frac{1}{1-x}$, így

$$h_n = 2^n - 1$$

— ami konzisztens az ismert $h_n = 2^n - 1$ zárt formulával.

## 6.6-os tétel — inhomogén → homogén átalakítás

Ha a generátorfüggvény **racionális tört** alakú ($F(x) = P(x) / Q(x)$, $\\deg P < \\deg Q$), akkor a **$Q(x)$ nevező** közvetlenül megadja a sorozatra vonatkozó **homogén** lineáris rekurziót:

$$Q(x) = 1 - d_1 x - d_2 x^2 - \\cdots - d_k x^k \\;\\;\\Longleftrightarrow\\;\\; a_n = d_1 a_{n-1} + d_2 a_{n-2} + \\cdots + d_k a_{n-k}$$

(az inhomogén tagok a $P(x)$ számlálóba kerülnek, és csak a kezdeti értékeket módosítják).

**Példa Hanoi-ra:** $Q(x) = (1 - 2x)(1 - x) = 1 - 3x + 2x^2$, tehát a homogén rekurzió:

$$h_n = 3 h_{n-1} - 2 h_{n-2}$$

Ezt a megfelelő kezdeti értékekkel ($h_0 = 0, h_1 = 1$) már a klasszikus karakterisztikus-egyenletes módszerrel oldhatjuk meg (\`tétel 7\`): $q^2 = 3q - 2$, gyökök $q = 1, 2$, megoldás $h_n = C_1 \\cdot 2^n + C_2$, kezdőértékekből $C_1 = 1, C_2 = -1$, tehát $h_n = 2^n - 1$ ✓.

> **Miért hasznos a 6.6 tétel?** Az inhomogén rekurzió közvetlen megoldása (partikuláris megoldás keresése) gyakran ad hoc — speciális próbálgatást igényel a $g(n)$ alakja szerint. A 6.6 tétel automatikus, gépi: csak a generátorfüggvényt kell elővarázsolni, és a nevező mechanikusan ad megoldhatóbb homogén rekurziót.

## Intuíció

A generátorfüggvény „adattömörítő": egy egész végtelen sorozatot egyetlen algebrai objektumba csomagol. Hatványsor-aritmetikával összetett kombinatorikai problémák egyszerű manipulációkká válnak. 📦
`,F=`---
n: 9
title: 'Extremális halmazrendszerek'
glossary: 'Maximális vagy minimális tulajdonságú halmazcsaládok szerkezetének vizsgálata.'
path: 'combo'
related_dimat: ['ch7']
related_ila: []
related_exercises: ['ch7']
formulas:
  - 'Sperner: $\\max |\\mathcal F| = \\binom{n}{\\lfloor n/2\\rfloor}$'
  - 'Erdős–Ko–Rado: ha $\\mathcal F$ $k$-szabványos, metsző, $n\\geq 2k$, akkor $|\\mathcal F|\\leq \\binom{n-1}{k-1}$'
---
Az extremális halmazelmélet azt vizsgálja, mekkora lehet egy halmazcsalád, ha egy adott szerkezeti feltételt teljesít.

## Sperner-tétel

Tekintsük az alaphalmazt $\\{1,\\dots,n\\}$. Egy *antilánc* olyan részhalmaz-család, amelyben egyik tag sem tartalmazza a másikat.

$$\\max\\,|\\mathcal F| = \\binom{n}{\\lfloor n/2\\rfloor}$$

A legnagyobb antilánc a „középső réteg" — az összes $\\lfloor n/2\\rfloor$ méretű részhalmaz.

## Erdős–Ko–Rado-tétel

Ha $\\mathcal F$ olyan $k$-elemű részhalmazokból áll, amelyek páronként metszők, és $n\\geq 2k$, akkor

$$|\\mathcal F| \\leq \\binom{n-1}{k-1}$$

A maximumot az „egy-pont-csillagok" (minden tag tartalmaz egy rögzített elemet) érik el.

## Erdős–De Bruijn-tétel

Másik klasszikus extremális kérdés: ha $\\mathcal F$ olyan halmazcsalád egy $n$-elemű alaphalmazon, amelyben **bármely két különböző tag metszete legfeljebb egyelemű**, akkor

$$|\\mathcal F| \\leq n$$

Ez **erős** korlátozás — még a Sperner-féle „nincs tartalmazás" feltételnél is szigorúbb. A becslés éles (pl. véges projektív sík vonal-családja).

### Geometriai kapcsolat — Gallai Tibor-féle tétel

A síkbeli pontok és egyenesek között ugyanez a kombinatorika él. Ha $n \\geq 2$ pont a síkon **nem mind kollineáris**, akkor legalább **$n$ különböző** egyenest határoznak meg. Az Erdős–De Bruijn-tétel ezt rögtön adja: minden egyenes a rajta lévő pontok halmazával azonosítható, és két egyenes legfeljebb egy közös pontot enged meg — pontosan a fenti „páronként legfeljebb 1-elemű metszet" feltétel.

## Tipikus extremális kérdések

- mennyi él lehet egy gráfban tiltott részgráf nélkül? (Turán)
- mekkora antilánc / lánc létezik?
- adott metszési feltétellel hány részhalmaz választható?

## Eszközök

- Lubell–Yamamoto–Meshalkin (LYM) egyenlőtlenség,
- shifting technika,
- valószínűségi módszer,
- spektrális technikák.

## Alkalmazások

Kódelmélet, informatikai komplexitás, kombinatorikus optimalizálás, hálózati tervezés.

## Intuíció

Az extremális matematika határkeresés: meddig nőhet egy szerkezet, mielőtt egy tiltott alakzat megjelenik. Olyan, mint mérnöki terhelésvizsgálat. 🧩
`,G=`---
n: 10
title: 'Partíciós problémák'
glossary: 'Egészek vagy halmazok felosztási lehetőségeinek kombinatorikai elemzése.'
path: 'combo'
related_dimat: ['ch8']
related_ila: []
related_exercises: ['ch8']
formulas:
  - '$p(n)$: $n$ partícióinak száma'
  - '$\\sum_{n\\geq 0} p(n) x^n = \\prod_{k\\geq 1} \\dfrac{1}{1-x^k}$'
  - '$B_n$: $n$ elem halmazpartícióinak száma (Bell-szám)'
---
A partíciós problémák azt vizsgálják, hányféleképpen lehet egy számot vagy halmazt részekre bontani.

## Számpartíció

Egy pozitív egész szám partíciója olyan felbontás, ahol pozitív egészek összegeként írjuk fel, a sorrend nem számít.

**Példa:** $4$ partíciói: $4,\\, 3+1,\\, 2+2,\\, 2+1+1,\\, 1+1+1+1$ → $p(4) = 5$.

## Euler generátorfüggvénye

$$\\sum_{n\\geq 0} p(n) x^n = \\prod_{k\\geq 1} \\dfrac{1}{1-x^k}$$

Hardy és Ramanujan aszimptotikus formulája:

$$p(n) \\sim \\dfrac{1}{4n\\sqrt 3} \\exp\\!\\left(\\pi\\sqrt{\\tfrac{2n}{3}}\\right)$$

## Halmazpartíció

Az $n$-elemű halmaz partícióinak száma a *Bell-szám* $B_n$:

$$B_{n+1} = \\sum_{k=0}^n \\binom{n}{k} B_k$$

Példa: $B_3 = 5$ ($\\{1,2,3\\}$ partíciói: $\\{1,2,3\\}$; $\\{1,2\\},\\{3\\}$; $\\{1,3\\},\\{2\\}$; $\\{2,3\\},\\{1\\}$; $\\{1\\},\\{2\\},\\{3\\}$).

A pontosan $k$ blokkból álló partíciók száma a *második fajú Stirling-szám* $S(n,k)$, így $B_n = \\sum_k S(n,k)$.

## A „12-szeres út" — halmazpartíció 4 alapesete

$n$ elem szétosztása $k$ dobozba **két binárus tengely** mentén osztályozható: megkülönböztethetők-e az elemek, és megkülönböztethetők-e a dobozok? (A „12-szeres út" ezt finomítja még a 3. tengellyel: üres doboz megengedett-e — itt mind a négy esetben üres megengedett.)

| Elemek | Dobozok | Megoldás-szám | Magyarázat |
|---|---|---|---|
| **különbözők** | **különbözők** | $k^n$ | minden elem $k$ helyre mehet |
| **különbözők** | **azonosak** | $\\sum_{j=1}^{k} S(n, j)$ | halmazpartíció legfeljebb $k$ blokkba |
| **azonosak** | **különbözők** | $\\binom{n+k-1}{k-1}$ | stars-and-bars |
| **azonosak** | **azonosak** | $\\sum_{j\\leq k} p(n, j)$ | szám-partíció legfeljebb $k$ részre |

ahol $S(n, k)$ a második fajú Stirling-szám és $p(n, k)$ az $n$ pontos $k$-tagú partícióinak száma.

### Kapcsolat az $x_1 + \\cdots + x_k = n$ egyenlettel

A 3. sor (azonos elemek külön dobozokba) pontosan az egyenlet nemnegatív egész megoldásainak számolása — stars-and-bars (\`tétel 1\`): $\\binom{n+k-1}{k-1}$.

Felső korlátokkal ($x_i \\leq b_i$) hozzá inklúzió-kizárás kell (\`tétel 5\`).

## Korlátos partíciók — teljes esetszámolás

A gyufaszál-poharak modell: $N$ azonos gyufaszálat osztunk szét $k$ különböző pohár között. Négyféle helyzetet kell elkülöníteni:

### A) Üres pohár megengedett ($x_i \\geq 0$)

Ismétléses kombináció, stars-and-bars:

$$\\#\\{(x_1, \\ldots, x_k) \\in \\mathbb{N}^k_0 : \\sum x_i = N\\} = \\binom{N + k - 1}{k - 1}$$

### B) Mindegyik pohár nem-üres ($x_i \\geq 1$)

**Trükk:** előre tegyünk egy-egy gyufaszálat minden pohárba (összesen $k$ darabot), a maradék $N' = N - k$ szabadon osztható (akár üresen). Visszavezetjük A)-ra:

$$\\#\\{x_i \\geq 1\\} = \\binom{(N-k) + k - 1}{k - 1} = \\binom{N - 1}{k - 1}$$

### B') Általános alsó korlátok ($x_i \\geq y_i$)

Adottak $y_1, \\ldots, y_k \\geq 0$ alsó korlátok. **Trükk:** előre tegyünk $y_i$ gyufaszálat az $i$-edik pohárba; a maradék $N'' = N - \\sum y_i$ szabadon osztható. Ha $N'' < 0$, nincs megoldás:

$$\\#\\{x_i \\geq y_i\\} = \\binom{N - \\sum y_i + k - 1}{k - 1}$$

**Negatív $y_i$ (adósság) is megengedett:** ha az $i$-edik pohár „indulóan negatívban" van (pl. egy korábbi kötelezvény miatt), $y_i < 0$ esetén $N'' = N - \\sum y_i > N$ — az elosztható készlet **nő**, mert a negatív küszöböt „le kell dolgozni" a 0-ra. Ez nem új matematikai szabály, csak a $\\sum y_i$ trükk alkalmazása előjeles korlátokkal.

### „Aranytömb-osztás" pedagógiai modell

A gyufaszál-pohár modell mellett egy alternatív vizuális kép: $k$ darab 1 kilogrammos **aranytömb**ot kell szétosztani $m$ kolléga (vagy doboz) között. Mivel az aranytömbök azonosak, csak az számít, ki *mennyit* kap — nem a kiosztás sorrendje. Ez ismétléses kombináció (stars-and-bars). Az „aranytömb" intuíciósan világosabbá teszi a *„az elemek azonosak, a dobozok különbözőek"* helyzetet (vö. \`tétel 10\` 12-szeres út, 3. sor).

### C) Felső korlátok ($x_i \\leq a_i$) — inklúzió-kizárással

Ez a **valódi nehéz eset**. Az $a_1, \\ldots, a_k$ felső korlátok közvetlenül nem kezelhetők; tagadjuk őket. Egy megoldás akkor *rossz*, ha valamelyik pohár **túlcsordul** ($x_i \\geq a_i + 1$).

Legyen $\\Omega$ az összes (alsó-korlát-mentes) megoldás halmaza, $R_i$ azon megoldások halmaza, ahol az $i$-edik pohár túlcsordul. A *jó* megoldások:

$$\\text{jó} = \\Omega \\setminus \\bigcup_{i=1}^k R_i$$

**$R_i$ számolása (B' eset $y_i = a_i + 1$-gyel):** ha az $i$-edik pohárba kötelezően $a_i + 1$ kerül, a maradék $N - a_i - 1$ szabadon osztható:

$$|R_i| = \\binom{N - (a_i + 1) + k - 1}{k - 1}$$

Hasonlóan $|R_i \\cap R_j|$ úgy számít, mintha mind $i$, mind $j$ pohárba $a_i + 1$, $a_j + 1$ kötelezően elhelyezett gyufaszál van — a maradék $N - a_i - a_j - 2$.

**Logikai szita-formula** (\`tétel 5\`):

$$\\left| \\Omega \\setminus \\bigcup R_i \\right| = \\sum_{S \\subseteq \\{1, \\ldots, k\\}} (-1)^{|S|} \\binom{N - \\sum_{i \\in S}(a_i + 1) + k - 1}{k - 1}$$

(Ahol a binomiális együtthatót 0-nak vesszük, ha a felső argumentum negatív.)

> **Ne a képletet jegyezd meg!** A négy esetet (A, B, B', C) és a *trükköket* tanuld meg: előre-eltöltés alsó korlátoknál, és komplementer-szita felső korlátoknál. A képlet ezekből származtatható.

### Megjegyzés — felső korlát „kiiktatása"

Ha az $i$-edik pohárra nem akarunk felső korlátot, vegyük $a_i := N$ (vagy bármely $\\geq N$ értéket). Mivel $\\sum x_j = N$ miatt $x_i \\leq N$ úgyis teljesül, ez a korlát az $R_i$-ben $a_i + 1 = N + 1$-et követelne — viszont $\\binom{-1 + k - 1}{k - 1} = 0$, így az $i$-edik tag eltűnik a szitából. **Vagyis:** a felső korlátot „nagy szám" választásával lényegtelenné teszi.

### Alsó-korlát OR-kapcsolat (vagy-szita)

Olykor a feladat **OR-kapcsolt** alsó korlátokat ad: keressük azon megoldások számát, amelyek **legalább egy** $x_i \\geq c_i$ feltételt teljesítenek. Pl. $x_1 + x_2 + x_3 = N$ kétségbeesett megoldási tér, ahol $x_1 \\geq 5 \\lor x_2 \\geq 7 \\lor x_3 \\geq 9$.

**Modell:** legyen $L_i = \\{(x_1, x_2, x_3) : x_i \\geq c_i\\}$ az $i$-edik feltételt teljesítő megoldások halmaza. Keressük: $|L_1 \\cup L_2 \\cup L_3|$. Szita-formula:

$$|L_1 \\cup L_2 \\cup L_3| = |L_1| + |L_2| + |L_3| - |L_1 \\cap L_2| - |L_1 \\cap L_3| - |L_2 \\cap L_3| + |L_1 \\cap L_2 \\cap L_3|$$

**Egy tag számolása:** $|L_i|$ a B') eset: $x_i \\geq c_i$ alsó korlát + a többi $x_j \\geq 0$. Vagyis $|L_i| = \\binom{N - c_i + 2}{2}$. **Metszet:** $|L_i \\cap L_j|$ két alsó korlát egyszerre: $|L_i \\cap L_j| = \\binom{N - c_i - c_j + 2}{2}$. (Negatív felső argumentum → 0.)

Ez ekvivalens a **tagadással**: $|L_1 \\cup L_2 \\cup L_3| = |\\Omega| - |\\overline{L_1} \\cap \\overline{L_2} \\cap \\overline{L_3}|$ — az összes megoldás mínusz azok, ahol *mindhárom* feltétel sérül ($x_1 < 5, x_2 < 7, x_3 < 9$). A két megközelítés ugyanazt adja, csak más oldalról.

### Alkalmazás: kocka-összegek (valószínűségszámítás)

4 hagyományos kockával dobva: hány kimenetel adja a **19** összeget? Modell: $x_1 + x_2 + x_3 + x_4 = 19$, $1 \\leq x_i \\leq 6$. Ez a fenti C-eset $N = 19$, $k = 4$, $a_i = 6$ paraméterekkel.

**Számolás:** előre minden pohárba 1 gyufaszálat → $N' = 15$, módosított felső korlátok $a_i' = 5$ (azaz $x_i' \\leq 5$, $x_i' \\geq 0$). Szita:

$$\\#\\{\\sum x_i' = 15, x_i' \\leq 5\\} = \\sum_{j=0}^{4} (-1)^j \\binom{4}{j} \\binom{15 - 6j + 3}{3}$$

$$= \\binom{18}{3} - 4\\binom{12}{3} + 6\\binom{6}{3} - 4\\binom{0}{3} + \\binom{-6}{3} = 816 - 880 + 120 - 0 + 0 = 56$$

**Valószínűség:** $P(\\sum = 19) = 56 / 6^4 = 56 / 1296 \\approx 4.32\\%$. Ez illusztrálja, hogy a sok-kockás dobások eloszlása **normális (Gauss-) eloszláshoz közelít** (centrális határeloszlás-tétel): a szélső összegek (közel $k$ vagy közel $6k$) valószínűsége kicsi, a középső összegé csúcsos.

## Algoritmuselméleti kapcsolat

A „Partition Problem" (két egyenlő összegű részhalmaz létezik-e) NP-teljes — fontos ütemezésben, erőforráselosztásban, kriptográfiában.

## Intuíció

Hányféleképpen rendezhetjük át ugyanazt a LEGO-készletet? A partícióelmélet ezt méri. 🧱
`,L=`---
n: 11
title: 'Gráfelméleti alapfogalmak'
glossary: 'A gráfok csúcsainak, éleinek és alapvető szerkezeti fogalmainak bevezetése.'
path: 'graph'
related_dimat: ['ch9']
related_ila: ['ch14']
related_exercises: ['ch9']
formulas:
  - '$G = (V, E)$'
  - '$\\sum_{v\\in V} d(v) = 2|E|$'
---
Egy gráf csúcsok ($V$) és élek ($E$) halmazából áll:

$$G = (V, E)$$

A csúcsok objektumokat (városok, emberek, számítógépek), az élek kapcsolatokat (utak, barátságok, linkek) modelleznek.

A gráf nem a *rajz*, hanem a **kapcsolat-struktúra**: ugyanazt a gráfot többféleképpen lerajzolhatjuk, és két különböző rajz lehet izomorf (lásd \`tétel 27\`). Formálisan: $E \\subseteq V \\times V$ egy **bináris reláció**; irányítatlan gráfnál szimmetrikus ($((x,y) \\in E \\Leftrightarrow (y,x) \\in E)$), és ekkor a $(x,y)$ pár helyett a $\\{x,y\\}$ **kételemű halmazt** írjuk; irányítottnál a rendezett párokat tartjuk meg.

### Két szorzat-jelölés különbsége

A relációknál fontos a precíz halmazos jelölés:

- $V \\times V = \\{(x, y) \\mid x, y \\in V\\}$ — **rendezett** párok (irányított él lehet $(x,x)$ is, vagyis hurokél)
- $[V]^2 = \\{\\{x, y\\} \\mid x \\neq y, \\; x, y \\in V\\}$ — **rendezetlen** kételemű részhalmazok

Irányítatlan egyszerű gráfra $E \\subseteq [V]^2$ (nincs hurok és nincs többszörös él). Multigráfra a multiplicitás-függvénnyel pontosítjuk.

### Modellezési erő — állapottér-gráfok

A gráf nem csak fizikai objektumok kapcsolatát tudja leírni, hanem **diszkrét problémák állapotterét**. Klasszikus: a **farkas–kecske–káposzta** átkelési feladvány. Csúcsok = lehetséges biztonságos szituációk (ki van a folyó melyik oldalán); élek = engedélyezett egylépéses átkelések; tiltott állapotok (farkas+kecske egyedül vagy kecske+káposzta egyedül) **nem** csúcsok. A megoldás keresése egy gráfalgoritmus a start- és cél-csúcs közti út keresésére. Ez az általános minta: minden olyan probléma, amit „állapot + megengedett átmenetek" formában tudunk megfogalmazni — beleértve sakk-tételeket, AI keresést, fordítóprogramok lemma-keresését — gráf-bejárássá redukálódik.

### Hipergráf — amikor egy él több csúcsot köt össze

Ebben a kurzusban *közönséges* gráfokkal foglalkozunk: minden élnek pontosan 2 vége van. Az általánosítás a **hipergráf**, ahol egy él (hiperél) tetszőlegesen sok csúcsot köthet össze egyetlen csoportként. Például: egy kémiai reakció, mint hiperél, $n$ reagensből $m$ terméket állít elő; egy konferencia-cikk, mint hiperél, néhány szerző csúcsát köti össze. Tankönyvi gráf-elmélet erre nem alkalmazható közvetlenül, de az alapfogalmak (csúcsok, fokszám, összefüggőség) általánosíthatók.

## Fontos alapfogalmak

- **Szomszédosság:** két csúcs szomszédos, ha él köti össze őket.
- **Fokszám:** $d(v) = $ az incidens élek száma.
- **Izolált csúcs:** $d(v)=0$.
- **Út / kör:** csúcs-él váltakozó sorozat; körnél visszatér a kezdőcsúcshoz.
- **Összefüggő gráf:** bármely két csúcs között van út.

## Gráftípusok

- **Irányítatlan** vs **irányított gráf** (élek iránya).
- **Súlyozott gráf**: élekhez számértékek (távolság, költség, idő).
- **Egyszerű gráf** vs **multigráf**: az egyszerű gráfban *nincs* hurokél (csúcs önmagával) és *nincs* többszörös él (két csúcs között maximum egy él); a multigráfban mindkettő megengedett. Multigráfra szokás $m(e)$ multiplicitás-függvényt definiálni: $|E| = \\sum_e m(e)$.

## Hurokélek és a fokszám

Hurokél $\\ell = \\{v, v\\}$ esetén a $v$ csúcs fokszámához **kétszer** számít, mert mindkét „végpontja" $v$-re csatlakozik. Így a kézfogási lemma hurokélekkel és többszörös élekkel is érvényes.

### Multiplicitásos fokszám-képlet

Általános multigráfra ($G = (V, E, m)$, $m: E \\to \\mathbb{N}$ multiplicitás):

$$\\delta(v) := \\sum_{\\{v, w\\} \\in E,\\ w \\neq v} m(\\{v, w\\}) \\;+\\; 2 \\cdot m(\\{v, v\\})$$

A hurokél kétszer számít, a többszörös élek a multiplicitásukkal. **Vizuális ellenőrzés:** egy kis kör környezetét rajzoljuk $v$ köré → hány **„drótdarab" / „vonaldarab"** lép ki a körön (függetlenül attól, hova kanyarodnak utána) = $\\delta(v)$. Az elektronikai analógia magyarázza a hurokél-2 konvenciót: ha egy drótszálat ráforrasztunk a $v$ kontaktusra és **visszahurkolunk** ugyanoda, két forrasztási pont van ugyanazon a csúcson — két drótdarab indul ki. Például egy 3-szoros élnél $v$ és $w$ között 3 drótdarab, egy hurokélnél 2.

### Következmény: szénhidrogének $C_n H_m$

Egy szénhidrogén-molekula gráfja: csúcsok = atomok, élek = kovalens kötések. A szén 4-vegyértékű ($\\delta(C) = 4$), a hidrogén 1-vegyértékű ($\\delta(H) = 1$). A páratlan fokú csúcsok száma **páros** (a kézfogás következménye) — itt csak a hidrogének páratlan-fokúak, így **a hidrogén-atomok száma mindig páros**. Például $CH_4$, $C_2H_6$, $C_6H_6$ — soha nem $CH_3$ önállóan stabil. Ezt a kémikusok már a 19. század elejétől tudták, anélkül hogy gráfelméletet ismertek volna.

## Alapösszefüggés (kézfogási lemma)

$$\\sum_{v\\in V} d(v) = 2|E|$$

Minden él két csúcshoz kapcsolódik, ezért kétszer számít a fokszámösszegbe. **Következmény:** a páratlan fokú csúcsok száma mindig páros (lásd \`tétel 13\`).

## Gráfmetrikák

A gráf szerkezetét három alapmennyiséggel jellemezhetjük:

- **Távolság** $\\rho(u, v)$: a legrövidebb $u \\to v$ út élszáma (vagy súlyozott esetben élsúly-összege). Súlyozatlan esetben BFS-sel $O(|V|+|E|)$, súlyozottra Dijkstra (lásd \`tétel 13\`).
- **Átmérő** (*diameter*) $\\mathrm{diam}(G) = \\max_{u, v} \\rho(u, v)$: a leghosszabb legrövidebb-út.
- **Derékbőség** (*girth*) $g(G)$: a gráf legrövidebb körének hossza. Erdős–Sachs-tétel szerint nagy girth-ű és nagy átlagfokszámú gráfok kuriózumok (probabilisztikus konstrukció szükséges).

Klasszikus eredmény: a *kis-világ* hálózatok (közösségi hálók, internet) átmérője meglepően kicsi ($\\log |V|$ nagyságrendű) — innen a „hat lépés szeparáció" jelenség.

## Utak és körök — pontos szóhasználat

> *Séta / walk:* $(x_0, x_1, \\ldots, x_K)$ csúcs-sorozat, ahol $\\{x_{i-1}, x_i\\} \\in E$ minden $i = 1, \\ldots, K$-ra. Megengedett az **él- és csúcsismétlődés**.
> *Kör / cycle:* fenti séta, ahol $x_K = x_0$ (zárt).
> *Egyszerű (simple)* út/kör: nincs benne sem él-, sem csúcsismétlődés.

### Hossz-konvenció

A $P_K$ jelölésben **$K$ a hossz** (az élek száma, nem a csúcsok száma):

- nyílt $P_K$ útnak $K$ éle és $K+1$ csúcsa van,
- zárt $C_K$ körnek $K$ éle és $K$ csúcsa van (mert $x_K = x_0$).

A kurzus konvenciója: ha csak „$P_K$ / $C_K$" jelölést látunk, **egyszerű** út/kör; ha „út/kör" szóban, akkor nem feltétlenül egyszerű.

### Élismétlődés ⟹ csúcsismétlődés

Ha egy sétán ugyanaz az él kétszer szerepel, akkor mindkét végpontján is kétszer átmegyünk → csúcsismétlődés is van. **Megfordítva nem igaz:** egy „nyolcas-alakú" sétán átmehetünk egy csúcson kétszer anélkül, hogy bármely él ismétlődne.

### Útrövidítő algoritmus

Ha létezik *bármilyen* út $x_0 \\to x_K$, akkor létezik **egyszerű** út is. Konstrukció: ha találunk $x_i = x_j$ ($i < j$) csúcsismétlést, **kivágjuk** a $(x_{i+1}, \\ldots, x_j)$ szakaszt, az $x_i$-ből közvetlenül $x_{j+1}$-be lépünk. Ezt addig ismételjük, amíg minden csúcsismétlést kiküszöbölünk; a végeredmény egyszerű út.

## Komponensek mint ekvivalencia-osztályok

Definiáljuk a $\\sim$ relációt $V$-n: $x \\sim y \\iff$ van $x$-ből $y$-ba út.

> **Állítás:** $\\sim$ ekvivalencia-reláció (reflexív, szimmetrikus, tranzitív).

- *Reflexivitás:* triviális 0-hosszú út $x \\to x$.
- *Szimmetria:* irányítatlan gráfban az út megfordítható.
- *Tranzitivitás:* két utat összefűzve harmadik utat kapunk.

> **Definíció:** A gráf **komponensei** = a $\\sim$ ekvivalencia-osztályai $V$-n, illetve a hozzájuk tartozó **maximális összefüggő részgráfok**.

**Hangsúly:** a komponens nem egyszerűen „csúcsok és élek halmaza", hanem egy **maximális összefüggő részgráf** — vagyis tovább már nem bővíthető. (Vizsgán gyakori hibás válasz: „csúcsok és élek halmaza"; helyesen: maximális összefüggő részgráf.)

> **Ne tévesszük össze más tudományágak komponens-fogalmával!** A kémiában a *komponens* egy vegyület alkotórésze (pl. víz = H + O), az algebrában (lineáris algebra) egy vektor *komponensei* annak koordinátái, a topológiában az *(útszerinti) összefüggőségi komponens* hasonló de általánosabb fogalom. A gráfelméleti komponens **kifejezetten** a $\\sim$ (van-út) ekvivalencia-osztály által meghatározott maximális összefüggő részgráf.

### Tintacsöppentő algoritmus (BFS-szerű)

Konstruktív megfelelés: csöppents tintát egy $v$ csúcsra, az éleken keresztül átfolyik minden szomszédra rekurzívan. Ami megfestődik egy színnel: egy komponens. A festéshez nem ragadt csúcsokra új színű csöppent. Az algoritmus $O(|V| + |E|)$ idejű (BFS/DFS).

### Összefüggőség eldöntése — $O(n^2) \\to O(n)$

> **Naív kérdés:** „bármely két csúcs között van út?" — ez $\\binom{n}{2}$ pár vizsgálata, így $O(n^2)$ ellenőrzés.

**Megfigyelés:** elég egyetlen, **rögzített** $v_0$ („főváros") csúcsból minden más csúcsba elérhetőséget igazolni. Ha onnan minden csúcs elérhető, a $\\sim$ tranzitivitása miatt bármely két csúcs is. Így csak $n - 1$ útkeresés kell: **$O(n)$ szorozva a BFS-szel = $O(n \\cdot (n + |E|))$** elemiműveletek, vagy ha csak elérhetőséget akarunk, egyetlen BFS $v_0$-ból $O(|V| + |E|)$.

Lényeg: a komponens-fogalom redukálja a kvadratikus problémát lineárissá — egyetlen csúcs „fővárossá választása" elegendő.

## Részgráfok két fajtája

Egy $G = (V, E)$ gráfból kétféleképpen alkothatunk $H$ részgráfot:

- **Feszített (induced) részgráf** $G[S]$ $S \\subseteq V$ csúcshalmazra: $H$ csúcsai $S$, és $H$ **minden** $S$-en belül futó eredeti élet tartalmazza. A csúcshalmaz dönt.
- **Feszítő (spanning) részgráf**: $H$ csúcsai pontosan $V$ (mind), de $H$ az élek **egy részhalmazát** veszi át. Az élhalmaz dönt.

A két fogalom alapvetően különbözik: feszítőfa (\`tétel 20\`) az utóbbira példa.

## Alkalmazások

Útvonaltervezés, közösségi hálók, internet routing, AI keresőalgoritmusok, elektromos hálózatok, biológiai hálózatok.

## Intuíció

A gráf a „kapcsolatok matematikája" — szinte minden modern informatikai rendszer mögött gráfszerkezet áll. 🌐
`,N=`---
n: 12
title: 'Speciális gráfok'
glossary: 'Különleges tulajdonságú gráfosztályok, például teljes, bipartit vagy reguláris gráfok vizsgálata.'
path: 'graph'
related_dimat: ['ch9']
related_ila: ['ch14']
related_exercises: ['ch9']
formulas:
  - '$|E(K_n)| = \\binom{n}{2} = \\dfrac{n(n-1)}{2}$'
  - '$|E(K_{m,n})| = mn$'
  - 'fa: $|E| = |V|-1$'
---
A speciális gráfok meghatározott szerkezeti tulajdonságokkal bíró fontos alapmodellek.

## Teljes gráf $K_n$

Minden csúcspár össze van kötve. Élszám: $|E| = \\binom{n}{2} = \\dfrac{n(n-1)}{2}$.

## Páros gráf

A csúcsok két diszjunkt osztályba $A$, $B$ oszthatók úgy, hogy élek csak $A$ és $B$ között futnak.

> **Magyar gyökerek:** a páros gráfok elméletének megalapozója **Kőnig Dénes** (1884–1944) magyar matematikus, az első modern gráfelméleti monográfia (1936) szerzője. Az ő tétele (\`tétel 29\`) — a maximum párosítás és a minimum lefogó pontrendszer egyenlősége páros gráfokban — adta a *Hungarian Method* alapját (Kuhn 1955; lásd \`tétel 29\`). A „két pólusú", „kétrészes" és „bipartit" elnevezés mind ugyanazt jelenti.

## Teljes páros gráf $K_{m,n}$

Minden $A$-beli csúcs minden $B$-belivel össze van kötve. $|E| = mn$.

## Reguláris gráf

Minden csúcs fokszáma azonos. $k$-reguláris, ha $d(v) = k$ minden $v$-re.

## További alapok

- **Körgráf $C_n$**: csúcsok egyetlen körön; $d(v) = 2$.
- **Útgráf $P_n$**: lánc.
- **Fa**: összefüggő, körmentes; $|E| = |V|-1$.
- **Komplementer $\\bar G$**: két csúcs $\\bar G$-ben szomszédos, ha $G$-ben nem volt él köztük.
- **Hiperkocka $Q_n$**: bináris $n$-vektorok; két csúcs szomszédos, ha pontosan egy bitben különböznek. $|V|=2^n$, $|E|=n\\cdot 2^{n-1}$, $n$-reguláris.

### Hiperkocka — rekurzív konstrukció és Gray-kód

**Rekurzió:** $Q_0$ egyetlen pont (üres bit-szó); $Q_n$ úgy épül $Q_{n-1}$-ből, hogy két példányt veszünk, az egyik csúcsainak címke elé \`0\`-t, a másikéké elé \`1\`-est írunk, majd a megfelelő csúcspárokat **dimenzió-emelő élekkel** összekötjük.

**Hamilton-kör — indukcióval:** $Q_n$ minden $n \\geq 2$-re tartalmaz Hamilton-kört. $Q_{n-1}$-ben indukció szerint van $H$ Hamilton-kör; másoljuk $Q_n$ két felére; szakítsuk meg ugyanannál az élnél; az egyik fél elejétől induljunk, ugorjunk át dimenzió-emelő élen, járjuk be a másik felet **ellenkező irányban**, egy újabb dimenzió-emelő éllel térjünk vissza.

**Gray-kód = Hamilton-kör csúcssorozata $Q_n$-ben.** Két egymás utáni kód pontosan 1 bitben különbözik (mert $Q_n$ szomszédai 1-bit-eltéréssel definiáltak), és minden $n$-bit-szó pontosan egyszer szerepel.

**Gyakorlati haszon:**

- **Karnaugh-táblák** — digitális Boole-függvények minimalizálása; a tábla sorai/oszlopai Gray-sorrendben (00, 01, 11, 10), szomszédos minterm-ek könnyen összevonhatók.
- **Forgási kódolók** (rotary encoder) — mechanikus pozíció leolvasásnál egy átmenetnél több bit egyidejű változása hamis köztes értéket adna; Gray-kódolással egyszerre csak 1 bit billen.
- **Hibatűrő digitális vezérlés**, A/D-konverterek, kombinatorikus algoritmusok (összes részhalmaz Gray-sorrendben).

Megjegyzés: $Q_n$ páros gráf (kétszínezés a bitösszeg paritása szerint, \`tétel 28\`), így minden Hamilton-kör hossza páros — összhangban $|V|=2^n$ páros voltával.

### Hiperkocka — teljes tulajdonság-katalógus

| Tulajdonság | $H_n$ értéke | Bizonyítás |
|---|---|---|
| Csúcsszám $|V|$ | $2^n$ | címkék = $\\{0,1\\}^n$ összes sorozatai |
| Élszám $e_n$ | $n \\cdot 2^{n-1}$ | rekurzió: $e_{n+1} = 2 e_n + 2^n$, $e_0 = 0$ |
| Fokszám $\\delta(v)$ | $n$ minden csúcsra | $n$-reguláris |
| Páros gráf | igen | $\\chi(H_n) = 2$, kétszínezés bit-paritás szerint |
| Két csúcs távolsága | Hamming-távolság a címkék közt | minden él 1-bit-eltérés |
| Átmérő $\\mathrm{diam}(H_n)$ | $n$ | a $000\\ldots0$ és $111\\ldots1$ közti távolság |
| Derékbőség $g(H_n)$ | 4 | nincs háromszög (páros), $C_4$ van |
| Hamilton-kör | minden $n \\geq 2$-re létezik | indukciós konstrukció (lásd fent) |
| Páros kör hosszak | minden $2 \\leq 2k \\leq 2^n$ | minden páros hosszúságú kör megtalálható |

### Élszám rekurzió levezetése

$H_{n+1}$ két másolat $H_n$-ből + $2^n$ darab dimenzió-emelő él (a megfelelő csúcspárokat összekötve):

$$e_{n+1} = 2 \\cdot e_n + 2^n$$

$e_0 = 0$ kezdővel: $e_1 = 1, e_2 = 4, e_3 = 12, e_4 = 32, e_5 = 80, \\ldots$ — zárt formula $e_n = n \\cdot 2^{n-1}$ (indukcióval bizonyítható). Megegyezik a fokszám-összeg $/2$-vel: $n \\cdot 2^n / 2 = n \\cdot 2^{n-1}$ (kézfogási lemma). ✓

### Hamming-távolság — érdekes következmény

Két csúcs távolsága $H_n$-ben pontosan annyi, ahány bitben a címkéik eltérnek. Pl. $0110 \\to 1011$ távolsága 3 (3 bit eltér). Ez azt jelenti, hogy $H_n$ a $\\{0,1\\}^n$ **Hamming-tér** gráfja — a hibajavító kódolás kódtávolság-fogalmának gráfelméleti megfelelője.

## Petersen-gráf — az „ellenpélda-gráf"

**Julius Petersen** dán matematikus (1839–1910) által 1898-ban publikált 10-csúcsú, 3-reguláris, 15-élű gráf. Két koncentrikus 5-szög (külső és belső csillag-pentagon) megfelelő csúcsait átkötve.

**Tulajdonságai:**

- 10 csúcs, 15 él, 3-reguláris ($d(v) = 3$ minden $v$-re)
- $\\chi = 3$ kromatikus szám
- *girth* (derékbőség) = 5 (a legrövidebb kör)
- *átmérő* = 2
- Hipo-Hamilton: nincs Hamilton-kör, de bármely csúcs törlésével van Hamilton-kör a maradékon

**Miért „ellenpélda-gráf"?** Számos gráfelméleti sejtés és tétel ezen a gráfon bukik el — ha valaki egy gráfról tesz általános állítást, célszerű **először a Petersen-gráfon ellenőrizni**. Klasszikus példák:

- Tait-sejtés (3-reguláris síkgráf Hamilton-köre) — Petersen mutatja, hogy a *nem-síkbeli* esetben hamis
- Több Hamilton-szín-sejtés Petersen-graf okán módosult formára szorult

## Kempe-gráf — izomorf a Petersen-gráffal

**Alfred Bray Kempe** angol matematikus (1849–1922) körülbelül 12 évvel a Petersen előtt (kb. 1886) más kontextusban definiált egy 10-csúcsú 3-reguláris gráfot. Kiderült: a **Kempe-gráf izomorf a Petersen-gráffal** (\`tétel 27\`-ben tárgyalt fogalom), csak más síkbeli ábrázolásban.

> **Történelmi tanulság:** ugyanaz a gráf-struktúra többször „felfedezhető" különböző geometriai elrendezésben — ezért a gráf-izomorfia algoritmikus eldöntése fontos és nem triviális.

Kempe egyébként a négyszín-tétel hibás 1879-es bizonyításáról és a Kempe-láncok (Heawood 1890-es 5-szín-tétele alapja, \`tétel 24\`) miatt is híres.

## Miért fontosak?

Modellezési alaposztályok, tételek mintapéldái, algoritmusok tesztstruktúrái. Hiperkocka-gráfok például párhuzamos algoritmusoknál és Gray-kódoknál kulcsfontosságúak. A Petersen-gráfot „univerzális ellenpéldának" használjuk a sejtések tesztelésére.

## Intuíció

- Teljes gráf = maximális kapcsolat.
- Fa = minimális összefüggő kapcsolat.
- Kör = ciklikus szerkezet.
- Bipartit = kétoldalú rendszer.
`,R=`---
n: 13
title: 'Elemi összefüggések gráfokban'
glossary: 'Alapvető összefüggések tanulmányozása csúcsok, élek és fokszámok között.'
path: 'graph'
related_dimat: ['ch9']
related_ila: []
related_exercises: ['ch9']
formulas:
  - '$\\sum_v d(v) = 2|E|$'
  - 'Páratlan fokú csúcsok száma páros'
  - 'Síkgráf: $|V| - |E| + |F| = 2$'
---
Ez a téma a gráfok csúcsai, élei és fokszámai közötti alapvető kapcsolatokkal foglalkozik.

## Fokszámösszeg-tétel

$$\\sum_{v\\in V} d(v) = 2|E|$$

Minden él két csúcshoz tartozik, ezért kétszer számít. Következmény:

**A páratlan fokszámú csúcsok száma mindig páros.**

## Átlagos fokszám

$$\\bar d = \\dfrac{2|E|}{|V|}$$

## Teljes gráf élszáma

$$|E(K_n)| = \\dfrac{n(n-1)}{2}$$

## Fa-azonosság

Fa esetén $|E| = |V| - 1$.

## Síkgráfra Euler-formula

$$|V| - |E| + |F| = 2$$

ahol $|F|$ a lapok száma. Ebből egyszerű síkgráfra:

$$|E| \\leq 3|V| - 6$$

## Példa

Ha egy gráfban 6 csúcs van, fokszámösszeg 14, akkor $2|E| = 14 \\Rightarrow |E| = 7$.

## Grafikus sorozat — fokszám-sorozat megvalósíthatósága

Adott egy nem-növekvő $d_1 \\geq d_2 \\geq \\cdots \\geq d_n \\geq 0$ egész sorozat. **Grafikus**, ha létezik olyan egyszerű gráf, amelynek ez a fokszám-sorozata.

A kézfogási lemma ad egy **szükséges** feltételt — $\\sum d_i$ páros —, **de nem elégséges**. Pl. $(3, 3, 3, 1)$ paritása rendben, de nem grafikus (próbáljunk egy 4-csúcsú gráfot 3, 3, 3, 1 fokszámmal — nem megy).

### Havel–Hakimi algoritmus

**Václav Jaromír Havel** (1927–) cseh matematikus 1955-ös és **Seifollah Louis Hakimi** (1932–2005) iráni-amerikai matematikus 1962-es egymástól független eredménye.

> **Tétel:** Az algoritmus pontosan akkor akad meg (negatív bejegyzés vagy nem-elég-elem), ha **nincs** ilyen fokszám-sorozatú egyszerű gráf.

Konstruktív teszt, $O(n^2)$ lépés:

1. **Sorbarendezzük** csökkenően a sorozatot: $d_1 \\geq d_2 \\geq \\cdots \\geq d_n \\geq 0$.
2. *Szükséges feltétel:* $\\sum d_i$ páros (kézfogás) — ha nem, azonnal nem grafikus.
3. Vegyük a legnagyobb $d_1$ értéket; vonjuk le $1$-et a következő $d_1$ darab tagból (a csúcs „elhelyezi" $d_1$ élét, kielégítve az igényét a sor szerint következő legnagyobbakkal).
4. Töröljük a $d_1$-et („tegyük félre a kielégített pontot").
5. Ha bármely tag **negatív** lesz, vagy nincs elég pozitív tag a kielégítéshez → **nem grafikus**.
6. Egyébként rendezzük újra, és ismételjük.
7. Ha minden tag $0$ lesz → **grafikus** (az algoritmus egy konkrét konstrukciót is ad).

**Példa:** $(4, 3, 3, 3, 2, 1)$. Lépés: $(4) - $; a maradékon vonjunk le 1-et az első 4-ből: $(2, 2, 2, 1, 1) \\to$ rendezve $(2, 2, 2, 1, 1)$. Folytatva $(1, 1, 0, 1) \\to (1, 1, 1, 0) \\to (0, 0, 0) \\to$ grafikus.

#### Vigyázat: csak **egy** gráf

Az algoritmus megalapozottan ad konstrukciót, de a kielégítési sorrend mindig „a legnagyobb $d_1$-et a következő $d_1$ legnagyobbal" — ez **csak egyetlen** speciális gráfot ad. Több, nem-izomorf egyszerű gráf is létezhet azonos fokszám-sorozattal — ezeket az algoritmus nem deríti fel. (Az izomorf-osztály enumerálása lényegesen nehezebb probléma.)

> **Nyitott kutatási kérdés:** *„Adott $(d_1, \\ldots, d_n)$ grafikus sorozathoz hány nem-izomorf egyszerű gráf tartozik?"* — ez általában megoldatlan; csak speciális sorozatcsaládokra ismertek pontos képletek (pl. reguláris gráfokra). A H-H tehát **eldönti** a létezést, de **nem számolja meg** a realizációkat.

#### Gyakorló példák (Szalkai 2023)

| Sorozat | Eredmény |
|---|---|
| $1, 1, 2, 3, 3, 3, 4, 4$ | grafikus |
| $1, 2, 2, 3, 3, 3, 4, 4$ | grafikus |
| $1, 2, 2, 2, 5, 5, 5$ | grafikus |
| $4, 1, 2, 6, 2, 1, 2$ | grafikus |
| $4, 1, 2, 6, 2, 3, 2$ | grafikus |
| $4, 1, 2, 6, 2, 5, 2$ | **nem grafikus** |
| $7, 7, 7, 6, 6, 5, 5, 5$ ($n = 8$, $\\sum = 48$ páros ✓) | grafikus |

Ezeket érdemes papíron végigjátszani — a 6-os utolsó nem-grafikussá teszi a feladatot, mert egy 7-csúcsú egyszerű gráfban egy csúcs fokszáma legfeljebb 6 lehet.

### Erdős–Gallai-tétel

Ekvivalens karakterizáció (nem konstruktív, de elméletileg fontos): a sorozat grafikus $\\iff$ $\\sum d_i$ páros, és minden $k$-ra

$$\\sum_{i=1}^k d_i \\leq k(k-1) + \\sum_{i=k+1}^n \\min(d_i, k)$$

## Intuíció

Ezek a gráfok „megmaradási törvényei" — globális szerkezeti korlátok, akár az energiamegmaradás a fizikában. 🌐
`,O=`---
n: 14
title: 'Utak és Euler-körök'
glossary: 'Olyan gráfbeli séták vizsgálata, amelyek minden élet pontosan egyszer járnak be.'
path: 'graph'
related_dimat: ['ch10']
related_ila: ['ch15']
related_exercises: ['ch10']
formulas:
  - 'Euler-vonal létezik $\\iff$ legfeljebb 2 csúcs páratlan fokú'
  - 'Euler-kör létezik $\\iff$ minden csúcs fokszáma páros'
---
Az út csúcsok és élek olyan sorozata, ahol minden egymást követő csúcspárt él köt össze. *Egyszerű út*: nem ismétel csúcsot. *Zárt út*: kezdő- és végpontja azonos.

### Útrövidítő algoritmus — bármely útból egyszerű

> **Tétel:** Ha $u$-ból $v$-be vezet út, akkor egyszerű út is létezik közöttük.

**Bizonyítás-algoritmus:** vegyük a csúcs-sorozatot $x_0, x_1, \\dots, x_k$. Ha találunk $x_i = x_j$ ($i < j$) csúcsismétlést, *vágjuk ki* a $x_{i+1}, \\dots, x_j$ szakaszt; a sorozat továbbra is érvényes út marad (mert $x_i$-ből $x_{j+1}$-be ugorhatunk az eredeti élen). Ezt addig ismételjük, amíg minden csúcsismétlést eltüntetünk — az eredmény egyszerű út. Élismétlés szükségképp csúcsismétlést is jelent, így ezt is kezeli.

### Tintacsöppentős" — összefüggő komponensek

Az összefüggőség és komponensek vizualizálható algoritmussal megkereshetők: válassz egy csúcsot, „csöppents tintát" rá, és hagyd, hogy az éleken keresztül átfolyjon minden szomszédra rekurzívan (ez pontosan a BFS/DFS). Ami megfestődik: egy maximális összefüggő komponens. Maradék csúcsokra új színű csöpp, és így tovább. A komponensek a $\\sim$ („van út") ekvivalenciareláció ekvivalencia-osztályai.

## Euler-vonal és Euler-kör

- **Euler-vonal:** minden élet pontosan egyszer használ.
- **Euler-kör:** zárt Euler-vonal — ugyanabba a csúcsba tér vissza.

## Klasszikus probléma

A *Königsbergi hidak* problémája (Euler, 1736): bejárható-e a város összes hídja pontosan egyszer? Ez tekinthető a gráfelmélet születésének.

## Euler tétele

Összefüggő gráfban:

- **Euler-kör létezik $\\iff$** minden csúcs fokszáma páros.
- **Euler-vonal létezik $\\iff$** legfeljebb 2 csúcs páratlan fokú (ekkor azok a vonal végpontjai).

Az intuíció: minden alkalommal, amikor belépünk egy csúcsba, ki is kell lépnünk — ez „párosítja" az éleket.

## Hierholzer-algoritmus

Lineáris időben ($O(|E|)$) megtalál egy Euler-kört: indulj egy csúcsból, járj körbe; ha kimaradtak élek, illessz be új köröket.

### „Városnéző busz" hasonlat

Képzeld el, hogy egy körutazó buszon ülsz, és a busz egy nagy körön halad a városon át (az első $C_0$ kör). Amikor a busz olyan csúcshoz ér, ahonnan még bejáratlan élek indulnak, *leszállsz*, bejárod ezt a kisebb $C_1$ kört (mint egy spontán városnézést), majd visszaszállsz a buszra és folytatod a nagy túrát. Minden „leszállás" rekurzív — a kisebb körök is tartalmazhatnak még kisebbeket. Az algoritmus akkor ér véget, amikor minden élet egyszer érintettünk; az összes részkör a fő-körbe fűződik be.

## Euler-kör vs Hamilton-kör

| | Euler | Hamilton |
|---|---|---|
| Mit ér | minden élet egyszer | minden csúcsot egyszer |
| Eldönthető | gyorsan (fokszámok) | NP-teljes |

## Legrövidebb út — Dijkstra algoritmus (1959)

Az **útkeresés** általános problémája: adott súlyozott gráf $G = (V, E, w)$ **nem-negatív** élsúlyokkal, valamint $a, b \\in V$ — keressük a legkisebb össz-súlyú $a \\to b$ utat. Az élsúlyok jelenthetnek távolságot (km), költséget (Ft), ellenállást (Ω), időt — bármilyen additív aggregálható mennyiséget.

> **Megjegyzés:** ha $w(e)$ lehet **negatív**, a probléma NP-nehéz lesz (negatív kör mentén tetszőlegesen rövid utat lehet képezni). Ezért Dijkstra csak $w \\geq 0$ esetére érvényes; negatív súlyokra Bellman–Ford ($O(|V| \\cdot |E|)$) vagy Floyd–Warshall ($O(|V|^3)$) használandó.

### Egyszerre több célhoz — egy-forrásból mindenhova

Érdekes módon Dijkstra eredetileg úgy működik, hogy egyetlen **forrás** $a$-ból az **összes többi** csúcshoz egyszerre megadja a legrövidebb utat — nem lehet csak egy adott $a \\to b$ párra hatékonyan futtatni. Mellékesen a gráf **összefüggőségét** is megadja: ha valamelyik csúcs távolsága a végén $+\\infty$ marad, oda nincs út $a$-ból.

### Algoritmus — minden $x \\in V$ csúcshoz három adat

- $\\ell(x)$ — eddig megtalált legrövidebb út hossza $a$-ból $x$-be (kezdetben $+\\infty$, kivéve $\\ell(a) = 0$)
- $p(x)$ — az út utolsó-előtti csúcsa („precedence", honnan érkezünk $x$-be) — elég ennyit tárolni, az út visszafele rekurzívan rekonstruálható
- $T(x)$ — *temporary* boolean (még finomítható-e? kezdetben minden csúcs \`True\`)

**Inicializálás:** $\\ell(a) := 0, p(a) := a, T(\\cdot) := \\text{True}$ mindenkire; a többi $\\ell := +\\infty$.

**Ciklus (amíg van véges-távú ideiglenes csúcs):**

1. Válasszuk azt az $y$ csúcsot, amely *még ideiglenes* ($T(y)$), véges $\\ell(y)$-vel rendelkezik, és **minimalizálja** $\\ell$-et az ideiglenesek között.
2. *Véglegesítsük*: $T(y) := \\text{False}$. (Bizonyítás alább: ennél rövidebb út már nem létezik $y$-ba.)
3. **Relaxáció:** minden $y$-szomszéd ideiglenes $x$-re ha $\\ell(y) + w(y,x) < \\ell(x)$, akkor frissítsük $\\ell(x) := \\ell(y) + w(y,x)$ és $p(x) := y$.

**Terminálás:** ha nincs több véges-távú ideiglenes csúcs — az algoritmus kész. Ekkor a maradék $+\\infty$-vel rendelkező csúcsok ($T = \\text{True}$-val) **elérhetetlenek** $a$-ból; a gráf nem összefüggő.

### Subpath-optimum lemma (a helyesség kulcsa)

> **Lemma:** Ha $P = a, v_1, v_2, \\ldots, v_k = b$ a legrövidebb $a \\to b$ út, akkor minden $0 \\leq i \\leq k$-ra az $a \\to v_i$ kezdő szakasz a legrövidebb $a \\to v_i$ út.

**Bizonyítás (indirekt):** ha egy közbenső $v_i$-ig lenne rövidebb $a$-ból, akkor azt fűzve a $v_i \\to b$ farokra, $P$-nél rövidebb $a \\to b$ utat kapnánk — ellentmondás. $\\square$

Ez a lemma indokolja, hogy elég **csak az előző csúcsot** ($p(x)$) tárolni: a teljes utat visszafele kibontva rekonstruáljuk. Analógia: vonatos utazáskor sem a 30 állomást jegyezzük meg, hanem csak az **utolsó megálló**-t — az átszállásokat menetrend visszafele rekurzív módon megadja.

### Korrektség

**Indukciós invariáns:** a véglegesítés pillanatában $\\ell(y)$ valóban az optimális $a \\to y$ úthossz. Ha nem, akkor egy hipotetikus rövidebb $P'$ útnak át kellene haladnia egy másik ideiglenes $z$-n — de akkor $\\ell(z) \\leq \\ell(P'_{\\to z}) < \\ell(y)$, így a 1. lépésben $z$-t választottuk volna $y$ helyett. Ellentmondás. (A nem-negativitás elengedhetetlen: csak így biztos, hogy a hátralévő $z \\to y$ szakasz nem-negatív, és így $\\ell(P'_{\\to z}) < \\ell(P') < \\ell(y)$.) $\\square$

### Komplexitás

- *Naív implementáció:* $n$ ciklus × $n$ csúcs-vizsgálat = $O(n^2)$. „Közepes" sebességű — sem nem a leggyorsabb, sem nem a leglassabb.
- *Binary heap (Fibonacci heap nélkül):* $O((|V| + |E|) \\log |V|)$
- *Fibonacci heap:* $O(|E| + |V| \\log |V|)$ — elméletileg optimális, de a konstans miatt gyakorlatban nem mindig nyer.

### Történet — Edsger Dijkstra (1930–2002)

A holland matematikus **Dijkstra** 1956-ban (publikálta 1959-ben) tervezte ezt az algoritmust egy demonstrációs gondolatkísérleten: „mi a legrövidebb út Rotterdam és Groningen között?" Pannon Egyetem hallgatói az országos programozói versenyen másodikok lettek egy ilyen feladatra építve Dijkstra alkalmazását. Ma a GPS-navigáció (Google Maps, OpenStreetMap-routing), hálózati protokollok (OSPF, IS-IS) és áramköri ellenálláshálózat-elemzés alapja.

### Kapcsolódó útkereső algoritmusok

| Algoritmus | Súly | Komplexitás | Megjegyzés |
|---|---|---|---|
| **BFS** | egységes | $O(|V|+|E|)$ | gráf-élek számolása |
| **Dijkstra** | $w \\geq 0$ | $O(|V|^2)$ vagy $O(|E| \\log |V|)$ | egy-forrás, minden cél |
| **A\\*** | $w \\geq 0$ + heurisztika | jobb min Dijkstra ha jó $h$ | célzott egy-pár (\`tétel 16\`-ban) |
| **Bellman–Ford** | bármilyen | $O(|V| \\cdot |E|)$ | negatív él OK, kör nem |
| **Floyd–Warshall** | bármilyen | $O(|V|^3)$ | minden-minden pár együtt |
| **Johnson** | bármilyen | $O(|V|^2 \\log |V| + |V| \\cdot |E|)$ | ritka gráfra Floyd helyett |

### Dijkstra vs. minimális feszítőfa (MST) — két nagyon hasonló, de **különböző** probléma

Vizsgán gyakori csapda — a két algoritmus felépítése (egy-forrásból növekvő, mohó-bővítés) hasonló, de teljesen más kérdésre felelnek:

| | **Dijkstra** | **MST (Kruskal / Prim)** |
|---|---|---|
| **Mit keresünk?** | egy forrás $a$-ból minden csúcs *legrövidebb úthossza* | a teljes gráf *legolcsóbb* összefüggő feszítő-részgráfja |
| **Eredmény szerkezete** | $a$-ból induló legrövidebb-út-fa (BFS-szerű) | feszítőfa $|V|-1$ éllel, $a$-tól független |
| **Cél** | csúcs-távolságok minimalizálása | összsúly minimalizálása az élhalmazon |
| **Mohó kritérium** | aktuálisan legközelebbi ideiglenes csúcs | a teljes gráf legolcsóbb még körmentes éle |
| **Forrás-függőség** | igen (kötelező $a$) | nincs (minden gyökerező-pont ugyanazt az MST-t adja Prim-mel) |
| **Tipikus alkalmazás** | GPS, OSPF-routing, ellenállás-hálózat | vezeték-hálózat építése, klaszterezés, telefonhálózat |
| **Intuíció** | „legrövidebb út" | „kristály-növekedés" — legolcsóbb él mindig |

**Kulcsmegfigyelés:** Dijkstra-fa **gyakran nem MST** és fordítva. Pl. ha az \`a-b\` él súlya 10, \`a-c\` él 5, \`c-b\` él 6:

- Dijkstra $a$-ból: $a \\to b$ legrövidebb út hossza 10 (közvetlen él), MST viszont \`{a-c, c-b}\` (összsúly 11, de a Dijkstra-fa $\\{a-c, a-b\\}$ összsúlya 15).
- Az MST-ben az $a \\to b$ út hossza 11 — *nem optimális Dijkstra-szempontból*.

## Alkalmazások

Útvonaloptimalizálás (szemétszállítás, postás-probléma), de Bruijn-gráfok, DNS-szekvenálás, hálózatellenőrzés.

### Klasszikus rejtvény-alkalmazások

- **Dominó-kirakás:** sorba rakhatók-e a dominók egyetlen láncba (vagy körbe)? Modell: a dominóértékek a csúcsok, egy dominó a két végén lévő értékek közötti él. A lánc létezése Euler-vonal létezésével ekvivalens.
- **„Királyi palota" / alaprajz:** bejárható-e a kastély úgy, hogy minden ajtón pontosan egyszer megyünk át? A szobák csúcsok, az ajtók élek. Csak akkor lehet, ha legfeljebb 2 szobának van páratlan számú ajtaja.
- **Egyvonalas rajzok:** a klasszikus „kis ház" („téglalap két átlóval") egyvonalas megrajzolhatóságának eldöntése — pontosan a páratlan fokú csúcsok megszámolása.
`,I=`---
n: 15
title: 'Euler tétele'
glossary: 'Az Euler-kör létezésének szükséges és elégséges feltételeit leíró tétel.'
path: 'graph'
related_dimat: ['ch10']
related_ila: ['ch15']
related_exercises: ['ch10']
formulas:
  - '$G$ Euler-gráf $\\iff$ $G$ összefüggő és $\\forall v\\colon d(v)$ páros'
---
Euler tétele az Euler-körök létezésére ad szükséges és elégséges feltételt.

## A tétel

> **Tétel (Euler, 1736):** Egy gráfban akkor és csak akkor van Euler-kör, ha
>
> i) minden csúcs fokszáma páros, **és**
>
> ii) izolált pontoktól eltekintve összefüggő.

$$G \\text{ Euler-gráf} \\iff \\forall v\\in V: d(v)\\text{ páros} \\quad \\text{és } G\\setminus\\{\\text{izolált csúcsok}\\} \\text{ összefüggő}$$

> **Hangsúly: „izolált pontoktól eltekintve"** — egy $\\delta(v) = 0$ fokú izolált csúcs nem zavarja az Euler-kört (egyetlen él sem fut rajta keresztül), így leszámítható az összefüggőség-vizsgálatból.
>
> **Csúcsszegényke vs izolált:** egy csúcs egyetlen hurokéllel **nem** izolált ($\\delta = 2$), így ha a gráf többi része ettől különálló, a gráf *nem* Euler-bejárható (mert nem összefüggő). Az izolált jelző matematikai: pontosan $\\delta(v) = 0$.

## Intuíció

Ha egy csúcsba belépünk egy élen, egy másikon ki is kell lépnünk. Ez párokba rendezi az éleket, így minden csúcshoz páros számú élnek kell tartoznia.

## Konstruktív bizonyítás (Euler 1736 algoritmusa)

A megfordított irány („minden csúcs páros + összefüggő ⟹ Euler-kör") konstruktív, **polinom-idejű** algoritmust ad:

1. **Indulás:** válasszunk egy tetszőleges $v_0 \\in V$ csúcsot. Induljunk el $v_0$-ból tetszőleges éleken keresztül egy sétán; minden élet legfeljebb egyszer használunk fel.

2. **Hol akadhatunk el?** Csak $v_0$-nál. Mert ha egy másik $v$ csúcsba érünk és nincs tovább, az azt jelenti, hogy az addig kihasznált $v$-él-szám páratlan; de a páros eredeti fokszám és a már-érintett élek nem-érintett párja miatt kell legyen még szabad él — ellentmondás, kivéve a kezdő $v_0$-nál (ott a kilépés is $v_0$-ról volt). Tehát a séta szükségképp visszatér $v_0$-ba egy **$C_0$ körrel**.

3. **Indukciós lépés:** hagyjuk el a $C_0$ éleit a gráfból (és a keletkezett izolált csúcsokat). A maradék gráf komponensei $G_1, \\ldots, G_k$ — mindegyikben minden fokszám páros (egyenként 0 vagy páros marad), így indukció szerint mindegyikben van $C_i$ Euler-kör.

4. **Felfűzés:** szükséges segédállítás, hogy $C_0$-nak mindegyik $C_i$-vel van legalább egy közös csúcsa (különben a gráf $C_0$-tól szétválna, ami sérti az összefüggőséget). A találkozási csúcsoknál „leszállunk" a $C_0$-ról, körbejárjuk $C_i$-t, és visszaszállunk. Az eredmény: egyetlen nagy Euler-kör.

### Segédállítás (lemma)

> **Lemma:** Az induló $C_0$ körnek mindegyik további $G_i$ komponens $C_i$ körével van legalább egy közös csúcsa.

**Bizonyítás:** ha valamelyik $G_i$-nek nincs közös csúcsa $C_0$-val, akkor $G_i$ szétválik az eredeti $G$-től — ellentmondás az „izoláltaktól eltekintve összefüggő" feltétellel. $\\square$

### Konkrét példa: $H_4$ 4-dimenziós kockagráf

$H_4$: 16 csúcs, mindegyik 4-reguláris (4 él lép ki belőle), 32 él. Páros fokú + összefüggő, így Euler-bejárható. Egy lehetséges felépítés:

- **$C_0$ (kék):** $C \\to D \\to H \\to G \\to F \\to E \\to A \\to B \\to C \\to G \\to O \\to K \\to C$
- **$C_1$ (piros):** $B \\to J \\to I \\to M \\to E \\to H \\to P \\to O \\to N \\to F \\to B$
- **$C_2$ (zöld):** $D \\to A \\to I \\to L \\to D$
- **$C_3$ (sárga):** $K \\to J \\to N \\to M \\to P \\to L \\to K$

**Felfűzve:** $C \\cdot D = D - A - I - L - D \\cdot H - G - F - E - A - B = B - J - I - M - E - H - P - O - N - F - B \\cdot C - G - O - K = K - J - N - M - P - L - K \\cdot C$

A \`=\` jelek a kis körök beillesztési pontjai a $C_0$-ban. Eredmény: az összes 32 élet pontosan egyszer használó, $v_0 = C$ kezdő-végpontú Euler-kör.

## Euler-vonal esete — a „fiktív él" trükk

> **2. Tétel (Euler):** Egy gráfban akkor és csak akkor van **Euler-út** (nem feltétlenül zárt), ha (izolált pontoktól eltekintve) összefüggő, és a **páratlan fokú csúcsok száma 0 vagy 2**.
>
> **Sőt:** ha 2 ilyen csúcs van, az Euler-út két végpontja **pontosan ezek**.

Ha pontosan **két** csúcs $u, w$ fokszáma páratlan, Euler-kör nincs, de Euler-vonal létezik; a két páratlan fokú csúcs a vonal kezdő- és végpontja — nem véletlenszerű, a végpontok kötöttek.

**Bizonyítás (fiktív él):** kössük össze $u$-t és $w$-t egy *fiktív* (extra) éllel. Az új gráfban minden csúcs fokszáma páros, így Euler-kör létezik (1. Tétel). Hagyjuk el a fiktív élet a kapott körből — a maradék pontosan egy Euler-vonal $u$ és $w$ között az eredeti gráfban. Megjegyzés: hurokélek és többszörös élek esetén is változatlanul érvényes a tétel; egyetlen hurokéllel rendelkező csúcs már *nem* izolált a tétel értelmében.

**Vigyázat — gyakori vizsgahiba:** *„legfeljebb 2 páratlan fokú csúcs"* helytelen megfogalmazás. Pontosan 0 vagy 2 lehet (a kézfogási lemma miatt a páratlan fokúak száma mindig páros, így 1 nem, 3 nem, de 4, 6, ... van; ezekre nincs Euler-út).

## Példa

A négyszög $C_4$ Euler-gráf: minden csúcs fokszáma $2$.

## Ellenpélda

Ha három csúcs páratlan fokú, akkor sem Euler-kör, sem Euler-vonal nem létezhet.

## Történeti jelentőség

A *hét königsbergi híd* problémája (1736) — Euler ezzel a tétellel zárta le. Általában a gráfelmélet kezdetének tekintik.

### Kapcsolódó probléma: kínai postás

Az Euler-kör/út feladványának testvére a **kínai postás-probléma** (Meigu Guan, 1962): a postás minden utca **mindkét oldalán** ki kell hordja a leveleket, vagyis minden élen pontosan **kétszer** kell végigmennie. Ez ekvivalens egy Euler-körrel a megduplázott-él-multiplicitású gráfon. Ha az eredeti gráfban már van Euler-kör (minden fokszám páros), akkor a postásnak nincs extra munkája — egyébként a páratlan fokú csúcsokat páronként minimális összköltségű utakon kell „virtuálisan megduplázni" (Edmonds–Johnson megoldás 1973).

### Olimpiai 5 karika

A 5 karika (kék, sárga, fekete, zöld, piros) egymással-fonott szerkezete egy 4-reguláris Euler-bejárható gráfot ad: minden csúcsot (karika-metszéspontot) 4 ívdarab metsz, így az egész szimbólumot **egyetlen vonallal megrajzolható** anélkül, hogy bárhol felemelnénk a tollat — pontosan ezt használják ki a logo-tervezők. (Vizuális Euler-tétel illusztráció.)

### Skemp — óvodások intuíciója

Richard Skemp pszichológus *A matematikatanulás pszichológiája* könyvében dokumentálja: amikor óvodásoknak és általános iskolásoknak adták fel az „egyvonalas-rajzolj!" feladatot, **egyes gyerekek maguktól rájöttek** a szükséges feltételre („legfeljebb 2 páratlan csomópont"). Amikor a tételt elmondták nekik, megértették. Ez azt mutatja, hogy az Euler-tétel kombinatorikus magva intuitíven hozzáférhető — szemben a négyszín-tétellel, amit csak gépi bizonyítás 1976-ban tisztázott.

## Hierholzer-algoritmus

Páros fokszámok esetén $O(|E|)$ időben megkonstruál egy Euler-kört: kiindulunk egy csúcsból, járunk amerre lehet, a maradék éleket körökként beillesztjük.

## Alkalmazások

Hálózatbejárás, útvonaltervezés, DNS-szekvenálás, logisztika, de Bruijn-gráfok.

## Intuíció

A tétel meglepően egyszerű, lokális feltételből (fokszámparitás) globális tulajdonságot (a teljes gráf bejárhatóságát) jósol meg.
`,w=`---
n: 16
title: 'Hamilton-körök'
glossary: 'Olyan körök vizsgálata, amelyek minden csúcsot pontosan egyszer érintenek.'
path: 'graph'
related_dimat: ['ch11']
related_ila: ['ch15']
related_exercises: ['ch11']
formulas:
  - 'Dirac: $d(v)\\geq n/2 \\Rightarrow$ van Hamilton-kör'
  - 'Ore: $d(u)+d(v)\\geq n$ minden nem szomszédos $u,v$-re $\\Rightarrow$ van Hamilton-kör'
---
Hamilton-kör: olyan zárt út, amely minden csúcsot pontosan egyszer érint, majd visszatér a kezdőcsúcsba.

Elnevezése **Sir William Rowan Hamilton** (1805–1865) ír matematikusról; klasszikus alkalmazásai a sakktábla-ló-bejárás (Euler-féle, 1759) és az utazó ügynök probléma (\`tétel 18\`).

## Euler-kör vs Hamilton-kör

> **„Csak egy szóban különbözik az Euler-köröktől, de hatalmas a különbség!"** Az Euler-kör minden **élet** pontosan egyszer használ; a Hamilton-kör minden **csúcsot** pontosan egyszer érint. Ez az egyszerű szócsere algoritmikus pokoljárást okoz: az Euler-kör eldöntése $O(|V| + |E|)$, a Hamilton-kör eldöntése **NP-teljes** (\`tétel 19\`).

| | Euler | Hamilton |
|---|---|---|
| Fókusz | élek | csúcsok |
| Eldönthetőség | könnyű (fokszámok) | NP-teljes |
| Feltétel | egyszerű paritás | nincs egyszerű karakterizáció |
| Hurokél, többszörös él | befolyásolja | **lényegtelen** |

A Hamilton-körben a csúcs- és élismétlődés is tilos (vagyis **egyszerű** kör), és a $C = (c_1, \\ldots, c_n)$ felsorolás a $V$ csúcsok egy **permutációja**.

## Dirac tétele

Ha $|V|=n\\geq 3$ és minden csúcsra $d(v)\\geq n/2$, akkor van Hamilton-kör.

## Ore tétele

Ha minden nem szomszédos $u, v$ csúcspárra $d(u)+d(v)\\geq n$, akkor van Hamilton-kör (Dirac általánosítása).

## Pósa Lajos tétele

A magyar matematikus 1960-as években született eredménye **Dirac-tétel élesítése** — engedi a kisfokú csúcsokat, csak korlátozza a számukat:

> Ha egy $n$ csúcsú egyszerű gráfban minden $1 \\leq k < n/2$ esetén a fokszámú $< k$ csúcsok száma **szigorúan kisebb mint $k$**, akkor van Hamilton-kör.

**Intuíció:** lehet pár alacsony fokú csúcs (pl. fok 2-3), de „nem lehet túl sok belőlük". Pl. legfeljebb 9 csúcs lehet 10-nél kisebb fokszámú.

### Erdős Pál variánsa — Hamilton-úthoz

Pósa-tétel finomítása **Erdős** által: ha a fenti feltételben megengedjük az **egyenlőséget** (fokszámú $< k$ csúcsok száma $\\leq k$), akkor garantáltan van **Hamilton-út** (de nem feltétlenül Hamilton-kör). Az egyenlőség engedélyezése egy apró bizonyítási finomításnak látszik, de **rendkívül megbonyolítja** Pósa eredeti érvét.

A Pósa–Erdős-eredmények érdekessége: bár a Hamilton-probléma NP-teljes, *speciális* feltételekkel polinomiális garanciát adhatunk, és ezek a feltételek **közelítenek a karakterizációhoz** (de teljes ekvivalencia nincs).

## $Q_n$ hiperkocka — Hamilton-kör és Gray-kód kapcsolat

A hiperkocka $Q_n$ minden $n \\geq 2$-re tartalmaz Hamilton-kört (\`tétel 12\` indukciós bizonyítása). A kör csúcssorozata $2^n$ bináris kódból álló **Gray-kód**: két egymás utáni kód pontosan 1 bitben különbözik. Ez a Hamilton-elmélet egyik legszebb digitális technikai alkalmazása (Karnaugh-tábla, forgási kódoló, hibatűrő vezérlés).

## Bondy–Chvátal-tétel

Az Ore-feltételt iteratívan finomítja: a *closure* $\\mathrm{cl}(G)$ hamiltoni $\\iff$ $G$ hamiltoni.

## Negatív kritérium — elvágó-csúcs-rendszerek

A Dirac és Ore tételek **elégségesek**: ha teljesülnek, van Hamilton-kör. A nemlétezést viszont legtöbbször **elvágó-csúcs-rendszerekkel** mutatjuk ki:

| Feltétel | Pontrendszer típus | Következmény |
|---|---|---|
| $\\exists S \\subseteq V$, $|S|=k$, hogy $G - S$ több mint $k$ komponensre esik | **elvágó pontrendszer** | nincs Hamilton-kör |
| $\\exists S \\subseteq V$, $|S|=k$, hogy $G - S$ legalább $k+2$ komponensre esik | **erősen elvágó pontrendszer** | nincs Hamilton-út sem |

**Intuíció:** egy Hamilton-kör minden $S \\subseteq V$ kivágása után legfeljebb $|S|$ komponensre eshet szét (mert a kör mentén minden komponensbe „be is jövünk és ki is megyünk" — ehhez $S$-ből 2 csúcs kell komponensenként). Hamilton-út esetén a két végpont engedhet 2 plusz komponenst.

### Klasszikus elvágó-példák — nyakkendő- és szélkerék-gráf

- **Nyakkendő-gráf** (két háromszög egy közös $v$ csúccsal — bow-tie graph): a középső $v$ csúcs kivágásával 2 komponensre esik szét ($k=1$, komponensek $= 2 > k$) → **nincs Hamilton-kör**. Hamilton-út viszont **van** (a két háromszöget $v$-n átlépve összefűzve).
- **Szélkerék-gráf** (3 háromszög egy közös $v$ csúccsal — windmill / friendship graph): $v$ kivágásával **3 komponensre** esik ($k = 1$, komponensek $= 3 > 1 + 1 = k+1$) → erősen elvágó pontrendszer → **nincs Hamilton-út sem**. Pedig minden külső csúcs fokszáma 2, csak a központi $v$ kapcsolja össze a három szárnyat.

### Vigyázat: nem oda-vissza tétel

Az elvágó-pontrendszer **csak szükséges**, nem elégséges a Hamilton-kör/út hiányához. Ha *nincs* elvágó pontrendszer egy gráfban, attól még **lehet, hogy Hamilton-kör sincs**. Az állítás csak egyirányú: elvágó-rendszer $\\Rightarrow$ nincs Hamilton-kör. Ezért hívjuk ezeket **negatív tételeknek** — csak a nemlétezést bizonyítják.

**Példa:** ha egyetlen $v$ középső csúcs kivágása szétszedi a gráfot 2-3 részre, Hamilton-kör biztosan nincs (és ha $\\geq 3$ részre, út sincs).

Ez a *Chvátal-féle toughness* fogalom alapja: $t(G) := \\min_S \\dfrac{|S|}{c(G-S)}$, és $t(G) \\geq 1$ szükséges a Hamilton-körhöz.

## Algoritmus — naív és NP-teljes

> **Triviális algoritmus:** próbáljuk végig a $V$ csúcsok mind $n!$ permutációját, mindegyiknél ellenőrizzük, hogy a sorrend megvalósítható-e éleken keresztül.

Komplexitás: $n!$ — már $n = 50$-re Stirling szerint $\\sim 3 \\cdot 10^{64}$ lehetőség. Még tera-Hz-es gépen, óragyenként egy permutáció ellenőrzéssel is **évmilliárdokig** futna. 100 csúcsra a probléma kozmikus.

> **Tétel:** A Hamilton-kör általános problémája (van/nincs?) **NP-teljes**. Részleteket lásd \`tétel 19\`.

**NP-teljesség informális megfogalmazása (Szalkai-féle pedagógiai definíció):**

> *„Egy $\\Pi$ problémát NP-teljesnek nevezünk, ha teljesül a következő implikáció:*
>
> *Ha a $\\Pi$ problémára lenne gyors algoritmus, **AKKOR** a világ összes algoritmikus problémájára is lenne gyors algoritmus."*

Ez a $\\Pi$ — $\\text{world}$ implikáció nem azt mondja, hogy *van* vagy *nincs* gyors algoritmus, csak hogy **ha létezik egyikre, akkor mindre létezik**. A Hamilton-körök problémájára ez az implikáció bizonyított ($\\sim$1970-es évek). Az „$P = NP$?" híres millennium-probléma pontosan azt kérdezi: a világ-implikáció előtag valós-e.

### Vizsga-anekdota — 10-dimenziós kockagráf

Szalkai professzor megemlíti: vizsgán a két jegy között ingadozó hallgatóknak felajánlja, hogy „terítsenek le egy nagy csomagolópapírt és rajzolják fel a 10-dimenziós kockagráfot hibátlanul + jelöljenek be benne egy Hamilton-kört" — a 10-D kockagráfnak $2^{10} = 1024$ csúcsa van, $|E| = 5120$ éle, $|H| = $ Hamilton-kör hossza $1024$. Mondhatni „kihíváspróba" jellegű.

## Gyakorlati feladat — sakk-ló bejárás

**A 3×4-es sakktáblán** elhelyezett ló képes-e minden mezőre pontosan egyszer ráugrani, majd visszatérni a startra? — Hamilton-kör keresése azon a gráfon, ahol a csúcsok a táblamezők, élek a ló-lépések.

**Válasz: nem.** A csúcsok 2-színezéssel sárga/zöld osztályra bonthatók (sakktábla-mintán), és a ló mindig más színű mezőre lép → a kör mentén a színek váltakoznak. 12 mező esetén ezeket 6-6 mezőre osztja a paritás, ami önmagában **megengedne** Hamilton-kört. De az elvágó-pont-érv: a sarokmezőkből kevés él indul (a 3×4-en a 4 sarok mindegyikéből pontosan 2 ló-él), így a sarokmezők kvázi-elvágó struktúrát alkotnak. Részletes esetelemzéssel bizonyítható a nem-létezés. (A **8×8-as standard táblán** *létezik* zárt ló-bejárás, ami Euler 1759-es felfedezése.)

Ez a feladat klasszikus vizsgafogás: tanítja, hogy a *nem-létezés* bizonyítása sokszor nehezebb, mint a létezésé.

## Travelling Salesman Problem (TSP)

Súlyozott gráfban a minimális összsúlyú Hamilton-kör keresése. Ez a Hamilton-probléma optimalizálási változata; nagyon nehéz (lásd a TSP- és NP-tételeket).

## Miért nehéz?

Euler-körnél elegendő a fokszámokat nézni; Hamilton-körnél a teljes globális szerkezet számít, és egyetlen rossz kapcsolat is tönkreteheti.

## Alkalmazások

Logisztika, chiptervezés, robotika, drónútvonalak, DNS-szekvenálás, ütemezés.

## Intuíció

A Hamilton-kör „tökéletes világkörüli túra": minden helyre pontosan egyszer, kihagyás nélkül, és a végén visszaérünk. 🌍
`,D=`---
n: 17
title: 'Modern eredmények gráfelméletben'
glossary: 'Korszerű gráfelméleti tételek és kutatási irányok áttekintése.'
path: 'graph'
related_dimat: ['ch11', 'ch18', 'ch20', 'ch21', 'ch22']
related_ila: []
related_exercises: []
formulas:
  - 'Erdős–Rényi: $G(n, p)$'
  - 'Turán: ex$(n, K_{r+1}) \\sim (1 - \\tfrac{1}{r})\\tfrac{n^2}{2}$'
  - 'Max-flow = Min-cut (Ford–Fulkerson)'
---
A modern gráfelmélet a klasszikus alapokon túl véletlen gráfokkal, hálózatokkal, algoritmusokkal és spektrális technikákkal foglalkozik. Ez a tétel egy „menü" — a kapcsolódó dimat-fejezetek tartalmazzák a részleteket.

## Extremális gráfelmélet

Mekkora lehet egy gráf bizonyos tiltott szerkezet (pl. $K_{r+1}$) nélkül? Turán-típusú problémák. → \`dimat_ch20\`

### Általános probléma + jelölés

Adott egy **$G$ tiltott részgráf** és egy $n$ csúcsszám. Legfeljebb hány él lehet egy $n$-csúcsú egyszerű gráfban úgy, hogy ne tartalmazzon $G$-vel izomorf részgráfot?

- **$ex(n, G)$** = maximális élszám (kis betű: szám)
- **$Ex(n, G)$** = a maximumot elérő gráf konstrukciója (nagy betű: gráf, ha ismert)

### Mantel-tétel (Turán $r=2$ speciális eset)

**Mantel** 1907-ben (Turán előtt) bizonyította: egy $n$-csúcsú **háromszög-mentes** ($C_3$-mentes) egyszerű gráfban legfeljebb $\\lfloor n^2/4 \\rfloor$ él lehet. A maximumot a $K_{\\lfloor n/2\\rfloor,\\lceil n/2\\rceil}$ teljes páros gráf éri el (lásd \`tétel 28\`). Vigyázat: $C_3 = K_3$ azonos (háromszög-mentes ⟺ $K_3$-mentes), de $C_n \\neq K_n$ ha $n \\geq 4$ ($C_5$ csak 5 él, $K_5$ 10 él).

### Turán-tétel (1941, Turán Pál)

> **Tétel (Turán):** Legyen $k \\geq 2$ rögzített. Az olyan $n$-csúcsú egyszerű gráfok között, amelyek **nem tartalmaznak $K_k$-t**, a maximális élszámút úgy kapjuk:
>
> 1. osszuk a csúcsokat $k - 1$ darab közel egyenlő méretű kupacra,
> 2. húzzunk be minden élet a **különböző** kupacok közötti csúcsok között (de **egyetlen** él se fusson egy kupacon belül).

Ez a **Turán-gráf** $T(n, k-1)$ — az „$(k-1)$-részes teljes gráf". Speciális esetben $n = (k-1) \\cdot m$ esetén minden kupac mérete $m$, és az élszám:

$$ex(n, K_k) = \\binom{k-1}{2} \\cdot m^2 = \\left(1 - \\frac{1}{k-1}\\right) \\frac{n^2}{2}$$

$k = 3$: $T(n, 2) = K_{n/2, n/2}$ — visszakapjuk Mantelt.

**Történet:** Turán Pál (1910–1976) ELTE-professzor klasszikus 1941-es eredménye munkatáborban született, papírmaradékokra felírva. A 20. század magyar gráfelméleti aranykorának egyik alappillére, Erdős, Lovász, Babai mellett.

**Megjegyzés:** ha $n$ nem osztható $(k-1)$-gyel, a kupacok mérete legfeljebb 1-gyel térhet el, az élszám-képlet egy kicsit komplikáltabb (egész részekkel), de a konstrukció ugyanaz.

A tétel **általánosítása nem-klikk tiltott részgráfokra** aktív kutatási terület — Erdős–Stone, Erdős–Simonovits tételek tucatja a 20. század második felében (\`dimat_ch20\`).

## Véletlen gráfok (Erdős–Rényi)

Minden él független $p$ valószínűséggel jelenik meg a $G(n, p)$ modellben. Phase transition-ök (összefüggőség, óriáskomponens megjelenése $p \\approx 1/n$ körül).

## Kis-világ és skálafüggetlen hálózatok

Sok valós hálózat rövid átlagos úthosszal és hatványfüggvény-fokszámeloszlással bír (webgráf, közösségi hálók). Watts–Strogatz, Barabási–Albert modellek.

## Spektrális gráfelmélet

A szomszédsági és Laplace-mátrix sajátértékei klaszterezést, expanzert, vágás-jóslást adnak. → \`dimat_ch21\`

### Klasszikus spektrális tételek

> **Megnyugtató alaptétel:** ha $A$ szimmetrikus valós mátrix (tehát egy irányítatlan gráf adjacencia-mátrixa), akkor minden sajátértéke **valós szám**. Komplex sajátérték nem fordul elő.

**Lovász László – Pelikán József (1971):**

> Egy egyszerű gráf akkor és csak akkor **páros (kétpólusú)**, ha az adjacencia-mátrix spektruma az **origóra szimmetrikus** (azaz $\\lambda$ sajátérték ⟺ $-\\lambda$ is sajátérték).

**Spektrum-tökéletes-párosítás kapcsolat:**

> Ha $G$ páros gráf **és 0 nem sajátértéke** az adjacencia-mátrixnak, akkor $G$-ben van **1-faktor** (tökéletes párosítás — minden csúcsot pontosan egy él fed).

**Lovász László — kromatikus szám felső becslése:**

> Tetszőleges egyszerű $G$ gráfra:
>
> $$\\chi(G) \\leq \\lambda_{\\max}(A) + 1$$
>
> ahol $\\lambda_{\\max}$ az adjacencia-mátrix legnagyobb sajátértéke. Sőt általában $\\lambda_{\\max} \\leq \\Delta(G)$ (a maximális fokszám), így Lovász-tétel a **Brooks-tétel élesítése**.

Algoritmikus megjegyzés: $\\lambda_{\\max}$ kiszámolása az $n \\times n$ adjacency-mátrix karakterisztikus polinomjának ($n$-fokú) maximális gyökét igényli — képfeldolgozásban (PCA, eigenfaces) is alapfontosságú, de költséges.

### Barátság-tétel (Friendship theorem, 1966)

**Erdős Pál – Rényi Alfréd – Sós Vera** (1966) tétele, tőlük függetlenül **Wilf** angol matematikus is bizonyította:

> **Tétel:** Egy egyszerű gráf akkor és csak akkor **szélkerék** (windmill / friendship graph — egy közös $v$ csúcs és körülötte $\\geq 3$ háromszög), ha bármely **két csúcsának pontosan egy közös szomszédja** van.

**Intuíció ($\\Leftarrow$ irány):** társadalmi értelmezés — ha egy társaságban bármely két ember pontosan egy közös barátja van, akkor van **egy „univerzális barát"**, aki mindenki közös barátja, és a többiek páronként összepárosíthatók (a háromszögek szárai).

A balról-jobbra irány ($\\Rightarrow$) triviális: a szélkerékben pontosan ez teljesül. Az **igazi tétel** a jobbról-balra irány — bárhogy is összeáll egy gráf, ha a páronkénti egy-közös-szomszéd tulajdonság áll, az **kötelezően** szélkerék-formájú. A bizonyítás a fent említett **spektrális eszközöket** használja (a feltételből $A^2 = (k-1) I + J$ alakra hozható, amiből az adjacencia-mátrix sajátértékei kiderülnek).

## Színezési problémák — kromatikus szám

A **kromatikus szám** $\\chi(G)$ a legkevesebb szín száma, amivel a csúcsok úgy színezhetők, hogy szomszédos csúcsok különböző színűek legyenek.

**Komplexitási ugrás $k=2$ és $k=3$ között:**

- $\\chi(G) \\leq 2$ eldönthető $O(|V|+|E|)$ időben (BFS-alapú „piros-kék" algoritmus, \`tétel 28\`) — ekvivalens páros gráffal.
- $\\chi(G) \\leq 3$ már **NP-teljes** általában (Karp 21 problémájának egyike, 1972).
- $\\chi(G) \\leq 4$ síkgráfra **mindig igaz** (négyszín-tétel, Appel–Haken 1976 — \`tétel 24\`).

**Konkrét korlátok:**

- $\\chi(G) \\leq \\Delta(G) + 1$ (Greedy algoritmus garantálja, $\\Delta$ a maximális fokszám).
- $\\chi(G) \\leq \\Delta(G)$ kivéve teljes gráfra és páratlan körre (**Brooks-tétel**).
- **Hoffman-korlát:** $\\chi(G) \\geq 1 - \\lambda_n/\\lambda_1$ ahol $\\lambda_1, \\lambda_n$ az adjacencia-mátrix legnagyobb és legkisebb sajátértékei.

**Alkalmazások:** ütemezés (kollízió-mentes erőforrás-kiosztás), frekvenciakiosztás (mobilhálózat), fordítóoptimalizálás (regiszter-allokáció), Ramsey-elmélet → \`dimat_ch18\`. A regiszter-allokáció pontosan gráfszínezés: csúcs = változó, él = egyidejűleg élő pár, szín = CPU regiszter.

### Erdős valószínűségi módszere (1959)

**Megdöbbentő eredmény:** tetszőlegesen *nagy girth-ű* (rövidkör-mentes) és tetszőlegesen *nagy kromatikus számú* gráf létezik egyszerre.

> **Tétel (Erdős, 1959):** Minden $k, l \\in \\mathbb{N}$-re létezik olyan $G$ gráf, hogy $g(G) \\geq l$ és $\\chi(G) \\geq k$.

**Bizonyítás:** *valószínűségi módszerrel* — véletlen gráf $G(n, p)$ alkalmas $p$-vel várhatóan nem sok rövid kört tartalmaz, és nincs benne nagy független halmaz; a kevés rövid kört csúcsok eltávolításával fel lehet bontani, miközben a kromatikus szám továbbra is nagy marad. Ez a probabilistic method egyik alapfeladata — Erdős nyitotta meg vele a modern kombinatorika új korszakát.

**Speciális eset $l = 4$:** létezik $C_3$-mentes (háromszög-mentes) gráf akármilyen nagy $\\chi$-vel. Lokálisan minden véges szomszédság fa-szerű, mégis globálisan nem 2-színezhető.

## Ramsey-elmélet

Klasszikus megfogalmazás: **„Minden hattagú társaságban van 3 fő, akik egymást vagy mind ismerik, vagy mind nem ismerik."** Ez az élszínezés formalizmusában:

$$K_6 \\to (K_3, K_3)^2_2$$

azaz $K_6$ éleinek **bármely** 2-színezésénél létezik egyszínű $K_3$ („egyszínű háromszög").

### Erdős-féle nyíl-reláció

$$G \\to (H_1, \\dots, H_k)^2_k$$

azt jelenti: $G$ éleinek bármely $k$-színezésénél létezik valamelyik $i \\leq k$-ra a $H_i$ gráffal izomorf, az $i$-edik színben homogén részgráf $G$-ben.

### Ramsey-tétel (1930, Frank Plumpton Ramsey)

> Tetszőleges $k, l \\in \\mathbb{N}$-re létezik $n_0$, hogy minden $n \\geq n_0$-ra $K_n \\to (K_k, K_l)^2_2$.

A legkisebb ilyen $n_0$ a **Ramsey-szám** $R(k, l)$.

**Rekurzió + Erdős-Szekeres-becslés:**

$$R(k, l) \\leq R(k-1, l) + R(k, l-1) \\;\\;\\Longrightarrow\\;\\; R(k, l) \\leq \\binom{k+l-2}{k-1}$$

**Diagonális becslés:** $\\sqrt{2}^k \\leq R(k, k) \\leq 4^k$ (Erdős–Szekeres). Az alsó becslés Erdős *valószínűségi módszerével* — egy másik klasszikus pioneer eredmény.

**Pontos értékek (csak a kicsik ismertek):**

| Ramsey-szám | Érték |
|---|---|
| $R(3,3)$ | $6$ |
| $R(3,4)$ | $9$ |
| $R(3,5)$ | $14$ |
| $R(3,6)$ | $18$ |
| $R(3,9)$ | $36$ |
| $R(4,4)$ | $18$ |
| $R(4,5)$ | $25$ |
| $R(5,5)$ | $43 \\leq R \\leq 48$ (nyitott!) |
| $R(6,6)$ | $102 \\leq R \\leq 165$ (nyitott) |

Erdős klasszikus mondása: *„ha földönkívüli civilizáció megfenyegetne minket, hogy 1 éven belül adjuk meg $R(5,5)$-öt, az emberiség minden számítógépét összefogva is megoldhatatlan; ha $R(6,6)$-ot kérnék, jobban tennénk, ha azonnal megadnánk magunkat."*

### Klasszikus következmények

- **Van der Waerden (1927):** $\\mathbb{N} = C_1 \\cup \\dots \\cup C_r$ partíció esetén valamelyik $C_i$ tartalmaz **tetszőleges hosszú** számtani sorozatot.
- **Erdős–Szekeres konvex sokszög-tétel:** minden $k$-ra létezik $N$, hogy a sík bármely $N$ általános helyzetű pontja közül kiválasztható $k$ konvex $k$-szöget alkotó.
- **Monoton részsorozat:** minden végtelen valós sorozatnak van monoton részsorozata (Ramsey-tétel következménye).

## Hálózati folyamok

A *hálózat* egy **irányított gráf** két kitüntetett csúccsal:

- **forrás** $s$ (source — kezdő-csúcs, ahonnan az anyag/energia ered),
- **nyelő** $t$ (sink — végcsúcs, ahova az anyag áramlik),
- **kapacitás-függvény** $c: E \\to \\mathbb{R}_+$ — minden élre egy *pozitív szám*, ami az élen átáramoltatható mennyiség felső korlátja.

### Folyam definíciója

Egy *folyam* $f: E \\to \\mathbb{R}_{\\geq 0}$ függvény, amely teljesíti:

1. **Kapacitás-korlát:** $0 \\leq f(e) \\leq c(e)$ minden élre.
2. **Kirchhoff-konzerváció (megmaradási törvény):** minden köztes csúcs ($\\neq s, t$) esetén
   $$\\sum_{e \\text{ be}} f(e) = \\sum_{e \\text{ ki}} f(e)$$
   (ami befolyik = ami kifolyik; nem szivárog el sehol).

> *Gazdasági példa:* az elektromos hálózat fizikailag tényleg többutas (több vezeték), nem azért, mert a tervező rossz, hanem mert a politikai stabilitás és a fizikai biztonság redundanciát követel. Egyetlen él kiesése (kábelszakadás) nem szakíthatja meg az ellátást.

### Folyam értéke

$$|f| := \\sum_{e \\text{ ki } s\\text{-ből}} f(e) - \\sum_{e \\text{ be } s\\text{-be}} f(e)$$

(Nettó kifelé-folyás a forrásnál.) A Kirchhoff-törvényből egyszerűen levezethető, hogy ez **megegyezik** a nyelőnél mérhető nettó befolyással: $|f| = (\\text{kifelé}_s) - (\\text{befelé}_s) = (\\text{befelé}_t) - (\\text{kifelé}_t)$.

### Max-flow problem

Keressük azt az $f$ folyamot, amelyre $|f|$ **maximális**, a kapacitás- és Kirchhoff-korlátok mellett.

### Ford–Fulkerson-algoritmus (1956) — javítható utak

> **Alapötlet:** kezdjük az azonosan 0 folyammal. Iteratíven keressünk **javítható utat** $s$-ből $t$-be a *maradék gráfban* (ahol az élek még nincsenek telítve), és növeljük a folyamot a maximumig az út mentén. Megáll, amikor nincs több javítható út → ez a maximális folyam.

Komplexitás: egész kapacitások esetén $O(|E| \\cdot |f^*|)$ — irracionális kapacitásoknál akár végtelen-iterációs ellenpélda is van. **Edmonds–Karp-finomítás** (BFS-szel keresett legrövidebb javítható út): $O(|V| \\cdot |E|^2)$ garantált polinomiális. **Dinic-algoritmus**: $O(|V|^2 \\cdot |E|)$, gyakorlatban gyors.

### Max-flow = Min-cut tétel

A maximális folyam értéke egyenlő a **minimális $s$-$t$ vágás** kapacitásával. Egy *vágás* az $V$ csúcshalmaz olyan partíciója $V = S \\cup T$, hogy $s \\in S, t \\in T$; a vágás kapacitása az $S \\to T$ irányú élek kapacitás-összege. A min-cut a „palacknyak" — a folyamot ennél több nem haladhatja meg.

### Alkalmazások

- **Bipartit matching** (\`tétel 29\` — Hopcroft–Karp): minden $A$-belit egy $B$-belivel párosítani max-flow-redukcióval $O(\\sqrt{|V|} \\cdot |E|)$-ben.
- **Image segmentation** (graph cuts): vágás-minimalizálás a pixel-gráfon.
- **Project selection, baseball elimination, traffic engineering** — bevezetik a flow-modelltől.

→ Részletek: \`dimat_ch22\`. Egy egész félévet ki lehet tölteni vele.

## Algoritmikus gráfelmélet

BFS, DFS, Dijkstra, Bellman–Ford, Kruskal/Prim (MST), Hopcroft–Karp (matching).

## Modern alkalmazások

GNN-ek (gráf-neurális hálók), kvantumhálózatok, knowledge graph-ok, közösségi hálózat-analízis, recommendation systemek.

## Intuíció

A modern gráfelmélet a „kapcsolatok fizikája": hogyan viselkednek hatalmas, összekapcsolt rendszerek lokális szabályokból kialakulva.

## Vizsga-térkép — a 39-tételes kurzus átfogó nézete

A diszkrét matematika kurzus **3 logikai területre** + **1 összekapcsoló rétegre** osztható:

\`\`\`
KOMBINATORIKA    →    GRÁFELMÉLET    →    SZÁMELMÉLET
megszámlálás          algoritmusok          kriptográfia
↓                     ↓                     ↓
binomiális        struktúrák              moduláris
extremális        (fa, bipartit, MST)     aritmetika
generátorfügg.    NP-teljesség            RSA, ECDSA
\`\`\`

**Kombinatorika → Gráfelmélet** áthídalások:
- megszámlálás → Hamilton-permutációk, Cayley-formula, $n!$ algoritmus-méret
- extremális gondolkodás → Turán, Mantel (\`tétel\` ebből és \`tétel 9\`)
- binomiális együtthatók → $K_n$ élszáma $\\binom{n}{2}$, Sperner-tétel

**Gráfelmélet → Algoritmusok** áthídalások:
- NP-teljesség (\`tétel 19\`) → Hamilton, TSP, színezés
- keresési problémák → BFS/DFS, Dijkstra, A*, Hopcroft–Karp
- struktúrák → fa-alapú adatszerkezetek (BST, B-fa, Union-Find)

**Számelmélet → Kriptográfia** áthídalások:
- moduláris aritmetika → Z_m gyűrűk, Euler-tétel
- gyors algoritmusok → Euklidész (Lamé), kínai maradéktétel, gyorshatványozás
- RSA → faktorizáció nehézsége, zero-knowledge proof

### Legfontosabb 15 tétel — vizsga-prioritási sorrend

A Szalkai-kurzus 39 témaköre közül **15 a legvalószínűbb** szóbeli vizsga-tétel:

| # | Tétel | Path | Kurzus |
|---|---|---|---|
| 1 | Binomiális együttható tulajdonságai (\`tétel 4\`) | combo | Pascal-háromszög, $\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}$ |
| 2 | Stars-and-bars (\`tétel 1\`, \`tétel 10\`) | combo | $\\binom{n+k-1}{k-1}$ |
| 3 | Sperner-tétel (\`tétel 9\`) | combo | $m \\leq \\binom{n}{\\lfloor n/2 \\rfloor}$ |
| 4 | Kézfogási tétel (\`tétel 11\`, \`tétel 13\`) | graph | $\\sum d(v) = 2\\|E\\|$ |
| 5 | Euler-kör feltétel (\`tétel 15\`) | graph | minden csúcs páros fokú + összefüggő |
| 6 | Hamilton vs. Euler (\`tétel 16\`) | graph | csúcsok vs. élek; NP-teljes vs. P |
| 7 | Fa definíció (\`tétel 20\`) | graph | összefüggő + körmentes |
| 8 | $\\|E\\| = \\|V\\| - 1$ (\`tétel 21\`) | graph | fa kulcstétel |
| 9 | Bipartit ↔ páratlan kör nincs (\`tétel 28\`) | graph | König |
| 10 | Turán alapötlet (\`tétel 17\`) | graph | $(k-1)$-részes teljes |
| 11 | Kongruencia definíció (\`tétel 35\`) | szamelm | $a \\equiv b \\pmod m$ |
| 12 | Euklideszi algoritmus (\`tétel 33\`) | szamelm | Lamé, $O(\\log n)$ |
| 13 | LKÖ / LKKT (\`tétel 30\`) | szamelm | multihalmaz-szemlélet |
| 14 | Euler-féle $\\varphi$ (\`tétel 36\`) | szamelm | $\\varphi(p^k) = p^k(1 - 1/p)$ |
| 15 | RSA alaplépések (\`tétel 39\`) | szamelm | kulcsgenerálás + titkosítás |

**Vizsgára optimalizált stratégia:** ezt a 15 témát kell **kétségbeesés nélkül** elmondani — a többi 24 nagyobb valószínűséggel rövid kérdés, esetfelismerés vagy kapcsolódó probléma.

### Tipikus vizsgahibák a 15 tételhez

- *„Kézfogási tétel"* — hurokél kétszer számít a fokszámba (nem egyszer)
- *„Euler-kör"* — „izolált pontoktól eltekintve összefüggő" kell, nem csak „összefüggő"
- *„Hamilton"* — naív $n!$ algoritmus NP-teljességre nem bizonyíték
- *„Fa"* — $\\|E\\| = \\|V\\| - 1$ önmagában nem elég (lásd háromszög + izolált csúcs ellenpélda)
- *„Turán"* — nem $\\binom{n}{2}$ közelítve, hanem $(1 - 1/(k-1)) n^2/2$
- *„Euklidész"* — Lamé-tétel ($5 \\log b$), nem $O(b)$
- *„RSA"* — $\\varphi(n) = (p-1)(q-1)$, nem $pq$ vagy $\\varphi(p) + \\varphi(q)$
`,Z=`---
n: 18
title: 'Utazó ügynök probléma'
glossary: 'Klasszikus optimalizálási probléma minimális hosszúságú Hamilton-kör keresésére.'
path: 'graph'
related_dimat: ['ch11', 'ch15']
related_ila: ['ch15']
related_exercises: ['ch11']
formulas:
  - '$\\min \\sum_{e\\in C} w(e)$, ahol $C$ Hamilton-kör'
  - 'Lehetséges körök száma: $\\sim (n-1)!/2$'
---
Az utazó ügynök probléma (TSP) a kombinatorikus optimalizálás egyik legismertebb problémája.

## A feladat

Adott $n$ város és köztük távolságok; keressük a legrövidebb zárt útvonalat, amely minden várost pontosan egyszer érint.

## Gráfelméleti modell

Súlyozott teljes gráf $G = (V, E, w)$. Cél:

$$\\min_{C \\text{ Hamilton-kör}} \\sum_{e\\in C} w(e)$$

## Miért nehéz?

A lehetséges körök száma $\\sim (n-1)!/2$ — brutális kombinatorikus robbanás.

## NP-teljesség

A TSP döntési változata NP-teljes. Nincs ismert polinomiális általános algoritmus.

## Pontos algoritmusok

- brute force ($O(n!)$),
- branch-and-bound,
- Held–Karp dinamikus programozás: $O(n^2 2^n)$ — kis $n$-re ($n\\leq 25$) használható.

## Approximációk

- **MST-alapú 2-approximáció** (metrikus TSP): keressünk minimális feszítőfát $T$ → körbejárjuk minden élet kétszer ($2 \\cdot w(T)$ költséggel) → ha egy csúcsot már érintettünk, **átugorjuk** a következő bejáratlanra. A háromszög-egyenlőtlenség biztosítja, hogy az ugró-él nem hosszabb mint a kihagyott kerülő — így a kapott Hamilton-kör költsége $\\leq 2 \\cdot w(T) \\leq 2 \\cdot w(\\text{OPT})$.
- **Christofides–Serdyukov** (metrikus TSP): $1.5$-szeres közelítés MST + minimális párosítás kombinálásával.
- Lin–Kernighan, 2-opt / 3-opt heurisztikák.
- Metaheurisztikák: simulated annealing, genetikus algoritmus, ant colony optimization.

## Egészértékű programozás

Miller–Tucker–Zemlin vagy subtour-elimination megfogalmazás CPLEX/Gurobi-ban.

## Alkalmazások

Logisztika, futárszolgálatok, chipgyártás, robotika, drónútvonalak, DNS-szekvenálás, gyártástervezés.

## Intuíció

A TSP „tökéletes körút" probléma: hogyan járjunk be mindent pontosan egyszer minimális költséggel? Egyszerűnek hangzik — a kombinatorikus robbanás miatt matematikai fekete lyuk. 🌌
`,W=`---
n: 19
title: 'NP-teljesség'
glossary: 'Számításelméleti fogalom nehéz kombinatorikus problémák bonyolultságának jellemzésére.'
path: 'graph'
related_dimat: ['ch11']
related_ila: []
related_exercises: []
formulas:
  - '$P \\subseteq NP$'
  - '$NP\\text{-teljes}$: NP-beli és minden NP-probléma polinomiális idő alatt visszavezethető rá'
  - '$P\\overset{?}{=}NP$'
---
Az NP-teljesség a számításelmélet egyik központi fogalma, amely nagyon nehéz kombinatorikus problémák osztályozására szolgál.

## P osztály

Polinomiális időben megoldható problémák. Példák: rendezés, legrövidebb út (Dijkstra), GCD.

## NP osztály

Olyan problémák, amelyeknél egy megoldás polinomiális időben **ellenőrizhető**. Példa: Hamilton-kör — ha valaki megad egy körnek vélt csúcssorozatot, gyorsan eldönthető, hogy az tényleg Hamilton-kör-e.

## NP-teljes

Egy probléma NP-teljes, ha:

1. Benne van NP-ben.
2. Minden NP-beli probléma polinomiális időben **visszavezethető** rá (Karp-redukció).

Az NP osztály „legnehezebb" problémái.

## A nagy nyitott kérdés

$$P \\overset{?}{=} NP$$

Ha valaha gyors algoritmus születik **akár egy** NP-teljes problémára, az **minden** NP-problémát gyorsan megoldhatóvá tesz — forradalmasítaná a kriptográfiát, optimalizálást, mesterséges intelligenciát.

## Klasszikus NP-teljes problémák

- Hamilton-kör, utazó ügynök (lásd \`tétel 18\`),
- gráfszínezés (3-coloring),
- SAT, 3-SAT (Cook–Levin-tétel),
- vertex cover, clique, independent set,
- subset sum, partition problem,
- knapsack (NP-teljes a döntési változat).

## Redukció

Az NP-teljességet redukcióval bizonyítjuk: egy ismert NP-teljes problémát áttranszformálunk az újba polinomiális időben.

## Gyakorlatban

NP-teljes problémákra heurisztikákat, approximációs algoritmusokat és metaheurisztikákat használnak. A bizonyítottan jó közelítés (PCP-tétel, Khot UGC) önmagában is mély elmélet.

## Kapcsolat kriptográfiával

A jelenlegi titkosítás (RSA, Diffie–Hellman) azért működik, mert bizonyos problémák (faktorizáció, diszkrét logaritmus) nehezek. Kvantumalgoritmusok (Shor) ezeket megtörhetik.

## Eldönthető vs eldönthetetlen — a komplexitás-hierarchia teteje

Az NP-teljesség *nehéz*, de van „nehezebb" osztály is — a **kiszámíthatatlan** (uncomputable, eldönthetetlen) problémák, amelyekre **semmilyen** algoritmus nem létezik, bármilyen sok időt és memóriát adva.

**Klasszikus példa — Halting problem (megállási probléma, Turing 1936):** adott $P$ program és $x$ input, megáll-e $P$ az $x$-en valaha? Turing bizonyította, hogy nincs olyan általános algoritmus, ami minden $(P, x)$-re eldönti — *eldönthetetlen*.

| Osztály | Példa | Megjegyzés |
|---|---|---|
| **$P$** — polinomiálisan megoldható | rendezés, BFS, GCD | gyorsan megoldható |
| **$NP$** — gyorsan ellenőrizhető | SAT, Hamilton-kör | tanú-igazolás polinomiális |
| **$NP$-teljes** | TSP, 3-SAT, $k\\geq 3$-színezés | NP legnehezebbjei |
| **„szürke zóna"** | gráfizomorfizmus | $\\in NP$, de nem ismert NP-teljesnek |
| **$PSPACE$ / $EXPTIME$** | sakk véges táblán | exponenciális idő, polinom-tér |
| **eldönthetetlen** | Halting problem, Tarski 10. problémája (egész-megoldású diofantikus) | nincs algoritmus, soha |

A Hamilton-kör és a Halting problem közti különbség: az előbbire **van** algoritmus (brute force), csak nem gyors; az utóbbira **semmilyen** algoritmus sosem létezhet (Turing tétele).

## Intuíció

Az NP-teljesség a „kombinatorikus robbanás" matematikája: a lehetőségek száma olyan gyorsan nő, hogy brute force hamar kozmikus méretűvé válik. 🚀
`,J=`---
n: 20
title: 'Fák'
glossary: 'Körmentes összefüggő gráfok szerkezeti tulajdonságainak vizsgálata.'
path: 'graph'
related_dimat: ['ch14']
related_ila: ['ch15']
related_exercises: ['ch14']
formulas:
  - 'fa: összefüggő $\\land$ körmentes'
  - '$|E| = |V|-1$'
  - 'Bármely két csúcs között egyértelmű út'
---
A fa egyik legalapvetőbb gráfszerkezet: összefüggő és körmentes.

## Erdő és fa kapcsolata

- **Erdő (liget):** körmentes gráf — nem feltétlenül összefüggő.
- **Fa:** összefüggő erdő.
- **Tétel:** egy erdő minden komponense fa, mert minden komponens definíció szerint összefüggő, és a körmentesség öröklődik.
- Fa és erdő mindig **egyszerű gráf** (hurokél és többszörös él kört eredményezne). Pontosabban: egy **hurokél önmagában 1-hosszú kör** (a csúcs visszatér önmagába egy élen át), egy **többszörös él** ($v$ és $w$ között 2 él) önmagában **2-hosszú kör** ($v \\to w \\to v$ a két különböző élen). Mindkettő körmentességet sért, ezért tilos.

## Alaptulajdonságok

Ha egy fának $n$ csúcsa van:

$$|E| = |V| - 1 = n - 1$$

Bármely két csúcs között **pontosan egy** út létezik (ha lenne kettő, kör keletkezne).

### Vigyázat: $|E| = |V|-1$ **önmagában nem elég**

Csak az **élszám** vizsgálata nem azonosít fát. Ellenpélda: vegyünk egy háromszöget (3 csúcs, 3 él) + 1 izolált csúcsot — összesen $|V|=4, |E|=3 = |V|-1$, de a gráf *nem fa* (van benne kör és nem is összefüggő). A fa-azonossághoz mindig **két** tulajdonság együtt kell: pl. összefüggő + $|E|=|V|-1$, vagy körmentes + $|E|=|V|-1$.

**Minimális ellenpéldák** a három alaptulajdonság egymásból-következésének cáfolatára:

- *Két izolált csúcs* — körmentes, $|E| = 0 \\leq |V|-1 = 1$, **de nem összefüggő**. Mutatja: körmentes $\\not\\Rightarrow$ összefüggő (még $|E| = |V|-1$ sem következik).
- *Négyszög $C_4$* — összefüggő, $|E| = 4 \\geq |V|-1 = 3$, **de tartalmaz kört**. Mutatja: összefüggő $\\not\\Rightarrow$ körmentes (még $|E| = |V|-1$ sem következik).
- *Háromszög + izolált csúcs* — $|V| = 4, |E| = 3 = |V|-1$, **de nem fa**. Mutatja: $|E| = |V|-1$ önmagában elégtelen.

Ezért a fa-jellemzés mindig **kettő-háromból** kell: a három tulajdonság (összefüggő, körmentes, $|E|=|V|-1$) közül bármely kettő implikálja a harmadikat, de **egy** önmagában nem.

### Fokszám és kör — egyszerű elégséges feltétel

> **Állítás:** Ha $G$ minden csúcsára $\\delta(v) \\geq 2$, akkor $G$-ben van kör.

**Bizonyítás:** induljunk el bármely csúcsból; minden csúcsnak van legalább 2 szomszédja, így soha nem kell visszafordulni. Véges gráfban véges sok csúcs van, így előbb-utóbb visszatérünk egy korábban érintett csúcshoz — ez egy kör.

**Következmény:** minden fában van legalább egy **levél** ($\\delta = 1$) — sőt $n \\geq 2$ esetén legalább kettő. Ezt használja a Prüfer-kódolás (mindig van mit törölni) és az indukciós bizonyítások ($n-1$-re vezetjük vissza levél leválasztással).

## Ekvivalens jellemzések

A következők ekvivalensek:

1. $G$ összefüggő és körmentes.
2. $G$ összefüggő és $|E|=|V|-1$.
3. $G$ körmentes és $|E|=|V|-1$.
4. Bármely két csúcs között egyértelmű út van.
5. Bármelyik él törlése szétszakítja $G$-t.
6. Bármelyik új él hozzáadása pontosan egy kört hoz létre.

### „Bármely 2-ből 3" — kompakt formuláció

A három alapvető fa-tulajdonság közül **bármely kettő** maga után vonja a harmadikat:

(A) $G$ összefüggő &nbsp; (B) $G$ körmentes &nbsp; (C) $|E| = |V| - 1$

$$\\boxed{\\;(A) \\land (B) \\;\\Rightarrow\\; (C), \\quad (A) \\land (C) \\;\\Rightarrow\\; (B), \\quad (B) \\land (C) \\;\\Rightarrow\\; (A)\\;}$$

Az egyirányú implikációk is hasznosak:

- körmentes $\\Rightarrow |E| \\leq |V| - 1$ (felső korlát)
- összefüggő $\\Rightarrow |E| \\geq |V| - 1$ (alsó korlát)

A két egyenlőtlenség együttese pontosan $|E| = |V| - 1$-et ad — visszafelé csak akkor azonosít fát, ha a másik feltétel is megvan (lásd a fenti ellenpéldát: háromszög + izolált csúcs).

### Algoritmikus fa-eldöntés — a „kettőből-három" trükk hatékony használata

A „bármely kettő ⟹ harmadik" tétel praktikus algoritmust ad fa-tesztelésre: nem kell mindhárom feltételt függetlenül vizsgálnunk.

**Hatékony stratégia ($O(|V| + |E|)$):**

1. **Élszám + csúcsszám:** számoljuk meg $|E|$-t és $|V|$-t — triviális, $O(|E|)$. Ellenőrizzük: $|E| \\stackrel{?}{=} |V| - 1$ (C tulajdonság).
2. **Tintacsöppentős / BFS:** egyetlen $v_0$ csúcsból BFS, $O(|V| + |E|)$. Ha minden csúcsot elér, **összefüggő** (A tulajdonság).
3. **Ha A és C is teljesül → B (körmentes) automatikusan**, a tétel értelmében. **Nem kell külön körtesztelő algoritmust** futtatni (ami $O(|V| + |E|)$ DFS-szel önmagában is megoldható, de a tételből megspóroljuk).

Alternatív 1-lépéses ellenőrzés: a BFS során, ha bármilyen él *nem-fa-éhez* vezet (azaz egy már látott csúcsot összekötő él, ami nem visszafelé-él), kör van. Ez a klasszikus „DFS cycle-detection". De a fenti 2-lépéses módszer nem igényli a cycle-trackinget — egyszerűbb implementálni.

## Gyökerezett fa — a „shaking" módszer

Egy kiválasztott csúcs a *gyökér*; bevezethető:

- szülő, gyermek, levél,
- mélység, magasság,
- altér / részfa.

**Vizuális konstrukció:** fogjuk meg a fát a gyökérnél, és „rázzuk meg" — a gravitáció szintekbe rendezi a csúcsokat. Szint 0 a gyökér; szint 1 a gyökér szomszédai; szint $k$ az $k-1$-edik szint közvetlen leszármazottai. **Levelek** azok a csúcsok, amelyeknek a gyökértől kifelé nincs leszármazottja (matematikailag: fok 1, kivéve egy gyökeret-tartalmazó egyetlen csúcs). A matematikai fák „fordítva" nőnek a természetes ábrázolásban: gyökér felül, levelek alul.

## Bináris fa

Minden csúcsnak legfeljebb két gyereke. Fontos: BST-k, heap-ek, Huffman-fák, fordítók AST-jei.

### „Szigorúan izomorf" bináris fák száma — Catalan-számok

A bináris fáknál a *bal* vs *jobb* gyermek **megkülönböztetett** (egy folyamatban a balra-ágazás és a jobbra-ágazás nem ugyanaz!). Ha $u_n$ a szigorúan izomorfia szerinti $n$-csúcsú bináris fák száma ($u_0 := 1, u_1 := 1$), akkor:

$$u_n = \\sum_{i=0}^{n-1} u_i \\cdot u_{n-1-i}$$

(gyökér + bal részfa $i$ csúccsal + jobb részfa $n-1-i$ csúccsal). Megoldás: a **Catalan-számok**

$$u_n = C_n = \\dfrac{1}{n+1} \\binom{2n}{n}$$

$C_3 = 5$, $C_4 = 14$, $C_5 = 42$. A Catalan-számok generátorfüggvénye $C(x) = \\tfrac{1 - \\sqrt{1-4x}}{2x}$ — lásd \`tétel 8\`.

### Bináris fa magasság-levél egyenlőtlenség

> **Állítás:** Ha egy bináris fa magassága $h$, leveleinek száma $\\ell$, akkor $\\ell \\leq 2^h$.

**Bizonyítás (indukció $h$-ra):** $h = 0$ esetén egyetlen csúcs (a gyökér), egyetlen levél, $1 \\leq 2^0 = 1$. ✓ Induktív lépés: $h$-mélységű bináris fa $\\leq 2$ részfára bontható a gyökér gyermekeinél, mindkettő magassága $\\leq h - 1$, így leveleinek száma legfeljebb $2 \\cdot 2^{h-1} = 2^h$. $\\square$

Ez az **alsó korlát az $\\Omega(n \\log n)$ rendezés-bizonyításhoz** (lásd lentebb), és a kiegyensúlyozott BST mélységének elméleti korlátja.

### Bináris keresőfa (BST)

A BST egy **online adatszerkezet**: ahogy érkeznek az értékek, illesztjük be a fába úgy, hogy minden $v$ csúcsra a **bal részfa** minden értéke $< v$, a **jobb részfa** minden értéke $> v$. Ekkor:

- *Beszúrás* $O(h)$, ahol $h$ a fa magassága
- *Keresés* $O(h)$
- *In-order bejárás* lineáris időben kiolvassa az értékeket **rendezett sorrendben** — alternatív rendező algoritmus

Kiegyensúlyozott BST-vel ($AVL$, *red-black tree*) $h = O(\\log n)$, így minden művelet $O(\\log n)$. Ez a rendezések alsó korlátját ($\\Omega(n \\log n)$) is elérik.

## Feszítőfa

Egy összefüggő gráf $G$ olyan részgráfja, amely fa és tartalmazza $G$ minden csúcsát. Minimum spanning tree (MST) súlyozott esetben: Kruskal, Prim.

## Cayley-tétel

A címkézett $n$-csúcsú fák száma $n^{n-2}$ (Prüfer-kódolás bizonyítja).

### Prüfer-kódolás algoritmus

Minden $n$-csúcsú címkézett fát egy $n-2$ hosszú számsorozattá alakít (bijekció):

1. Töröljük a **legkisebb sorszámú** elsőfokú csúcsot (levelet) az élével együtt; írjuk fel a kód következő pozíciójára a *szomszédja* sorszámát.
2. Ismételjük, amíg csak 2 csúcs marad. Az utolsó él az $n$-es csúcs felé tart — ezt nem írjuk fel (mindig $n$).
3. Az eredmény $n-2$ szám $\\{1, \\dots, n\\}$-ből; az ismétléses variációk száma pontosan $n^{n-2}$.

**Dekódolás:** táblázattal — a kód-pozíciók és „nem-szereplő legkisebb sorszám" együttesen visszaadják az éleket. Ez kódolás-elméleti megoldás: bonyolult fa-struktúra rövid sorozat-kóddá tömörítve, oda-vissza dekódolható.

### Általánosított Cayley — adott fokszám-sorozattal

Ha a csúcsok fokszámai $d_1, \\ldots, d_n$ adottak ($\\sum d_i = 2(n-1)$, mert $|E|=n-1$), akkor a fák száma:

$$\\binom{n-2}{d_1 - 1, d_2 - 1, \\ldots, d_n - 1} = \\dfrac{(n-2)!}{\\prod (d_i - 1)!}$$

— pontosan a polinomiális együttható (\`tétel 2\`). Ez összhangban van a $n^{n-2}$ képlettel, ha minden fokszám-elosztásra összegezünk.

### Címkézetlen fák — Otter aszimptotikus tétel

Ha a csúcsok *megkülönböztethetetlenek* (csak a fa-szerkezet számít), a fák száma sokkal lassabban nő:

$$T_n \\sim C \\cdot \\alpha^n \\cdot n^{-5/2}, \\quad \\alpha \\approx 2.9558, \\; C \\approx 0.5349$$

(Otter, 1948). A bizonyítás generátorfüggvényekkel és komplex analízissel — Erdős, Lovász és más magyar matematikusok is jelentősen hozzájárultak az ilyen aszimptotikus problémákhoz.

## Lineáris algebra ↔ gráf analógia

A fa-tulajdonságok meglepő párhuzamban állnak a vektortér alapfogalmaival:

| Vektortér | Gráf |
|---|---|
| **Lineárisan független** rendszer: minden vektor *legfeljebb* 1-féleképpen áll elő | **Körmentes** gráf: két csúcs közt *legfeljebb* 1 út |
| **Generátorrendszer**: minden vektor *legalább* 1-féleképpen áll elő | **Összefüggő** gráf: két csúcs közt *legalább* 1 út |
| **Bázis**: minden vektor *pontosan* 1-féleképpen áll elő | **Fa**: két csúcs közt *pontosan* 1 út |

Ez nem véletlen — mindkét struktúra egy **matroid** speciális esete; a Kruskal-MST algoritmus pontosan a *mohó algoritmus* matroidokra, ami pontosan azokon a struktúrákon optimális, ahol a függetlenségi rendszer teljesíti a *csere-axiómát*.

## Alkalmazások

Fájlrendszerek, adatbázis-indexek (B-fa, B+ fa), hálózati routing (spanning tree protocol), AI keresési fák, döntési fák, XML/HTML DOM, Git commit-gráf (fa-szerű).

### Döntési fák és az $n \\log n$ alsó korlát

A döntési fák (decision trees) elméleti eszközei az algoritmusok minimális komplexitásának bizonyítására. **Klasszikus eredmény:** bármely **összehasonlítás-alapú** rendezőalgoritmus létezik olyan bemenet, amelyen legalább $\\Omega(n \\log n)$ összehasonlítást igényel.

**Bizonyítás-vázlat:** ábrázoljuk az algoritmust bináris döntési fával — minden belső csúcs egy összehasonlítás $a_i \\overset{?}{<} a_j$, a két ág az igen/nem kimenetel. A fa **leveleinek** halmaza a lehetséges kimeneti permutációkkal van bijekcióban, tehát $\\geq n!$ levél kell. Egy $h$ mélységű bináris fának legfeljebb $2^h$ levele van, így

$$2^h \\geq n! \\;\\Longrightarrow\\; h \\geq \\log_2(n!) = \\Theta(n \\log n)$$

A legrosszabb eset egy gyökér–levél út hossza, így legalább $n \\log n$ összehasonlítás szükséges. Quicksort/Mergesort tehát **aszimptotikusan optimális**; gyorsabb csak nem-összehasonlító módszerrel lehet (Radix, Counting sort).

## Intuíció

A fa a „minimális összekapcsolt struktúra": minden össze van kötve, de nincs fölösleges ciklus. 🌳
`,X=`---
n: 21
title: 'Élszám és csúcsszám kapcsolata fákban'
glossary: 'Fák esetén az élek száma mindig eggyel kisebb a csúcsok számánál.'
path: 'graph'
related_dimat: ['ch14']
related_ila: []
related_exercises: ['ch14']
formulas:
  - '$|E| = |V| - 1$'
  - 'MST mérete: $|V|-1$ él'
---
Fák egyik központi szerkezeti tulajdonsága: ha a fa $n$ csúcsú, akkor pontosan $n-1$ éle van.

$$|E| = |V| - 1$$

## Miért igaz?

Egy fa összefüggő és körmentes. Minden új csúcshoz pontosan egy új él kell — több él kört, kevesebb pedig szétesést okozna.

## Indukciós bizonyítás

**Alapeset:** 1 csúcs, 0 él: $0 = 1 - 1$. ✓

**Induktív lépés:** minden fában van legalább egy *levélcsúcs* ($d(v)=1$). Vegyünk egy levelet és vágjuk le; a maradék fa $n-1$ csúcsú, $n-2$ él, így az összefüggés örökölhetően teljesül.

## Következmények

- **Egyértelmű út**: két csúcs között pontosan egy út van.
- **Minimális összefüggőség**: ha egy élet törlünk, a fa szétesik.
- **Maximális körmentesség**: ha bármilyen új élet hozzáadunk, pontosan egy kör keletkezik.

## Erdőre általánosítva

Egy **erdő** (körmentes, nem feltétlenül összefüggő gráf) $c$ komponensre eshet. Minden komponens fa, így mindegyikre $|E_i| = |V_i| - 1$. Összegezve:

$$|E| = |V| - c$$

Ez egyszerre adja a fa-azonosságot ($c=1$) és a maximum-élű körmentes-szerkezetet. Új él hozzáadása vagy 1-gyel csökkenti $c$-t (összeolvaszt két komponenst), vagy egyetlen kört hoz létre (egy komponensen belül). A Kruskal-MST algoritmus ezt használja: rendezett élek mentén végighaladunk, és csak akkor adjuk az élet a fához, ha a két végpontja még különböző komponensekben van — addig, amíg $c=1$.

### Általános gráf — körök száma $e - n + k$

Tetszőleges (nem-fa) $G = (V, E)$ gráfra $n$ csúccsal, $k$ komponenssel és $e$ éllel:

$$|E| \\geq n - k$$

ahol egyenlőség pontosan az erdő esetén áll (\`G erdő ⟺ |E| = n - k\`). Ha $e > n - k$, akkor a gráf **legalább $e - n + k$ független kört** tartalmaz — minden „felesleges" él pontosan egy új független kört zár be (a feszítő-erdőhöz képest). Ez a mennyiség a gráf **ciklomatikus száma** ($\\mu(G) = e - n + k$), az algebrai topológiában az 1-dimenziós Betti-szám, és Euler-formulával is összhangban van (\`tétel 26\`).

## Konkrét alkalmazás: kémia — paraffinok mint fagráfok

A nyílt szénláncú paraffinok ($C_n H_{2n+2}$, pl. metán, etán, propán, ...) **pontosan fa-szerkezetű** molekulagráfok, ahol a csúcsok atomok és az élek kovalens kötések:

- Csúcsok: $|V| = n + (2n+2) = 3n + 2$ atom (szén + hidrogén)
- Élek: $|E| = \\tfrac{1}{2}(4 \\cdot n + 1 \\cdot (2n+2)) = 3n + 1$ kötés (szén 4-vegyértékű, hidrogén 1-vegyértékű, élek = fokszám-összeg / 2)

Ezzel $|E| = |V| - 1$, vagyis a paraffinok **fa-gráfok** (összefüggő + körmentes). Ezért nincs „gyűrűs" paraffin (a benzol már *nem* paraffin, mert kört tartalmaz). **Cayley** 1857–59 között ezt a problémát vizsgálva fedezte fel az $n^{n-2}$ képletet (\`tétel 20\`); a *pontos* alkán-izomer-számolás máig megoldatlan, csak aszimptotikus eredmények ismertek (Otter).

Hasonló: alkoholok $C_n H_{2n+1} OH$ szintén fa-szerkezetűek; **kérdés:** mi a helyzet $C_8 H_{18}$-cal két alkohol-OH-csoporttal ($C_8 H_{18} (OH)_2$)?

## Kapcsolat feszítőfákkal

Minden $n$ csúcsú összefüggő gráf tartalmaz $n-1$ élből álló feszítőfát. Ez az MST-algoritmusok (Kruskal, Prim) alapja.

## Informatikai jelentőség

- Hálózattervezés (Steiner-fa, spanning tree).
- Routing protocolok (STP, IS-IS spanning tree).
- Adatstruktúrák (Union-Find).
- Optimalizálás (MST gyakran az MWST/Christofides első lépése).

## Intuíció

A fa pontosan annyi kapcsolatot tartalmaz, amennyi még elegendő az összetartáshoz, és semennyivel sem többet. 🌲
`,Q=`---
n: 22
title: 'Adjacencia-mátrix'
glossary: 'Gráfok csúcskapcsolatait mátrixalakban reprezentáló struktúra.'
path: 'graph'
related_dimat: ['ch12']
related_ila: ['ch14']
related_exercises: ['ch12']
formulas:
  - '$A_{ij} = \\begin{cases}1 & \\{v_i,v_j\\}\\in E\\\\ 0 & \\text{kül.} \\end{cases}$'
  - '$A = A^T$ (irányítatlan)'
  - '$(A^k)_{ij}$ = $k$-élű séták száma $v_i \\to v_j$'
---
Az adjacencia-mátrix (szomszédsági mátrix) egy gráf mátrixos reprezentációja, amely megmutatja, mely csúcsok vannak összekötve.

## Definíció

Legyen $G = (V, E)$ $n$ csúcsú gráf. Az adjacencia-mátrix $A = (a_{ij})_{n\\times n}$:

$$a_{ij} = \\begin{cases} 1 & \\text{ha van él } v_i \\text{ és } v_j \\text{ között} \\\\ 0 & \\text{egyébként} \\end{cases}$$

## Példa

Gráf csúcsokkal $A, B, C$ és élekkel $\\{A,B\\}, \\{A,C\\}, \\{B,C\\}$:

$$A = \\begin{pmatrix} 0 & 1 & 1 \\\\ 1 & 0 & 1 \\\\ 1 & 1 & 0 \\end{pmatrix}$$

## Tulajdonságok

- **Irányítatlan gráf**: $A = A^T$ (szimmetrikus).
- **Irányított gráf**: általában nem szimmetrikus.
- **Egyszerű gráf**: $a_{ii} = 0$ (nincs hurokél).
- **Fokszám**: $d(v_i) = \\sum_j a_{ij}$.

## Multigráf esete

Hurokélek és többszörös élek esetén az adjacencia-mátrix nem 0/1 értékű, hanem **multiplicitás-mátrix**:

- $a_{ij}$ = a $v_i, v_j$ közti élek (irányítatlan) száma,
- $a_{ii}$ = a $v_i$-hez kapcsolódó hurokélek számának **kétszerese** (mert a hurokél két vége ugyanahhoz a csúcshoz tartozik — kézfogási lemma).

Ezzel a fokszám-képlet $d(v_i) = \\sum_j a_{ij}$ továbbra is érvényes.

### Spúr (trace)

A főátló elemeinek összege:

$$\\mathrm{tr}(A) = \\sum_i a_{ii} = 2 \\cdot (\\text{hurokélek száma})$$

Egyszerű gráfra $\\mathrm{tr}(A) = 0$.

## Mátrixhatványok

$(A^k)_{ij}$ megadja a $v_i$-ből $v_j$-be vezető $k$-élű séták számát. Ezért $A$ sajátértékei és sajátvektorai sok szerkezeti tulajdonságot kódolnak (lásd \`dimat_ch21\` — spektrum).

### Konkrét példa

Egy 8-csúcsú gráf $A$ adjacencia-mátrixát $A^7$-re emelve, ha az első sor 8. oszlopában 57 áll, akkor pontosan **57 darab 7-élű séta** vezet $v_1$-ből $v_8$-ba (kanyargós, akár csúcsismétlő séták is). A módszer kézi számolással kis $k$-ra elboldogul, géppel 1000-csúcsú gráfra is, és független attól, hogy a séták egyszerűek-e — minden $k$-élű csúcssorozatot számba vesz.

#### Az 57 kombinatorikus felbontása

A konkrét Szalkai-példában a gráfban $v_2 v_3$ él **háromszoros** (mult. 3), $v_7$-nél van egy **hurokél** (a $2k$ konvenció szerint $a_{77} = 2$), a többi az 5-csúcsú $v_1 v_2 v_3 v_4 v_7 v_8$ úton egyszeres él. A minimális $v_1 \\to v_8$ út 5 él hosszú; még 2 él „extra" lépésre marad, amit **oda-vissza** kell elköltsünk valahol. Háromféle „extra-2-él" választás:

1. **Egy egyszerű élen oda-vissza** $v_i \\to v_j \\to v_i$ a 6 lehetséges él egyikén ($v_1v_2, v_3v_4, v_4v_5, v_4v_6, v_4v_7, v_7v_8$). Az 5-csúcsú út $v_1v_2v_3v_4v_7v_8$, plus a $v_4 v_5, v_4 v_6$ leágazás → 6 lehetőség, mindegyik egyszerű él → $1 \\cdot 1 = 1$ séta. De a beillesztési pozíció **3-féle**: az 5 csúcs közül melyiknél tegyük az detour-t. → $6 \\cdot 3 = 18$.

2. **A $v_2 v_3$ hármas-élen oda-vissza**: $3^3 = 27$. Ennek oka: a 3-szoros élt oda-vissza tehetjük, de mindhárom „él-példányt" használhatjuk akármelyikbe, kombinatorikusan $3^3$ kombináció ad ki egy 3-éles körutat.

3. **A $v_7$ hurokélt kétszer** ($3 \\cdot 2^2 = 12$): a hurkot az 5-csúcsú út 3 lehetséges pontján fűzhetjük be, és minden hurokél-érintés $2$-féle „lépés" (a $2k$ konvenció a hatványozásban két lépést jelent).

**Összesen:** $18 + 27 + 12 = 57$ — pontosan, amit $A^7$ kiad. Ez illusztrálja, miért fontos a multiplicitás-számolás és a hurokél kétszeres-konvenciója a tétel kombinatorikus tartalmához.

Többszörös élek és hurokélek szerepe általában: ha két csúcs közt 3 él van, $a_{ij} = 3$, így $(A^2)_{ii}$-be ennek a párnak a hatása $3 \\cdot 3 = 9$ (oda-vissza 9-féleképp). Egy hurokél 2 lehetőséget jelent egy séta-lépésben (mert mindkét végpont $v_i$-ben van).

### Indukciós bizonyítás $(A^k)_{ij}$ = $k$-séta-szám

**Alapeset $k = 1$:** $A^1 = A$, és $a_{ij}$ pontosan az 1-hosszú séták (élek) száma. ✓

**Induktív lépés $k \\to k+1$:** $A^{k+1} = A^k \\cdot A$, így

$$(A^{k+1})_{ij} = \\sum_{m} (A^k)_{im} \\cdot a_{mj}$$

Az indukciós feltétel szerint $(A^k)_{im}$ a $v_i \\to v_m$ $k$-séták száma, $a_{mj}$ pedig az $m \\to j$ élek száma. A szorzat az $i \\to m \\to j$ $(k{+}1)$-séták száma az adott $m$-en át; az $m$-re vett összeg pedig az **összes** $(k{+}1)$-séta $v_i \\to v_j$. $\\square$

### Főátló-spúr — körök számolása

$(A^k)_{ii}$ a $v_i$-be visszatérő $k$-hosszú **zárt séták** száma. Ennek összege:

$$\\mathrm{tr}(A^k) = \\sum_i (A^k)_{ii} = \\text{összes } k\\text{-hosszú zárt séta}$$

Speciális esetek (egyszerű gráfra):

- $\\mathrm{tr}(A^2) = \\sum_i d(v_i) = 2|E|$ — a **fokszámok összege**, mivel egy $v_i \\to v_j \\to v_i$ 2-séta pontosan egy szomszéd. Ez független-bizonyítás a kézfogási tételhez!
- $\\mathrm{tr}(A^3) = 6 \\cdot (\\text{háromszögek száma})$ — egy háromszögbe 3 csúcsnál × 2 irányban (CW + CCW) léphetünk be.
- *Páros kör hiánya:* a gráf **pontosan akkor páros (kétszínezhető)**, ha minden páratlan $k$-ra $\\mathrm{tr}(A^k) = 0$ (mert csak páratlan-kör tartalmaz páratlan-hosszú zárt sétát).

### Összefüggőség eldöntése mátrix-hatványokkal

> **Tétel:** $G$ akkor és csak akkor összefüggő, ha az $S = A + A^2 + \\cdots + A^{n-1}$ mátrixban (ahol $n = |V|$) nincs nulla elem (a főátlón kívül).

**Bizonyítás-vázlat:** összefüggő gráfban bármely két csúcs között van legfeljebb $n - 1$ élhosszú út; az $S_{ij}$ pozitív, ha valamilyen $1 \\leq k \\leq n-1$ hosszúságon van $v_i \\to v_j$ séta. $\\square$

Komplexitás: $n - 1$ mátrix-szorzás × $O(n^3)$ = **$O(n^4)$**. Lassú, de elméletileg érdekes.

### Gyorsabb: BFS/DFS „tintacsöppentő"

> **Algoritmus:** csöppents tintát az 1. csúcsba; rekurzív propagáció a szomszédokra (oszlopok az $A$ mátrixban); minden csúcsnak \`temporary\`/\`final\` állapota. Egy menet végén egy *komponens* csúcsait kapod. Új tintával folytatva újabb komponens.

Komplexitás: minden csúcs szomszédait egyszer nézzük végig — összesen $O(n^2)$ ha mátrixban tárolunk, vagy $O(|V| + |E|)$ ha adjacency-listán. Sokkal jobb, mint a $O(n^4)$ mátrix-hatványos!

### Komplementer-gráf

Egyszerű gráfra a **komplementer** $\\overline{G}$ adjacencia-mátrixa:

$$A_{\\overline{G}} = \\mathbb{I} - I - A_G \\quad \\text{(főátló kizárva: } \\overline{A} = \\mathbb{I} - A_G\\text{ ha hurokélt sem engedünk)}$$

ahol $\\mathbb{I} = [1]_{n \\times n}$ a **csupa-1** mátrix (nem azonos az $I$ egységmátrixszal!) — Szalkai-konvenció szerint, hogy a kettőt elkülönítsük. Ellenőrzés: ahol $A_{ij} = 0$ (nincs él, $i \\neq j$), $\\overline{A}_{ij} = 1$; ahol $A_{ij} = 1$, $\\overline{A}_{ij} = 0$. A főátló mindkettőben 0 (nincs hurokél). Hurokélnél/többszörös élnél nincs jól definiált komplementer.

### 4 adjacencia-mátrix-típus — egységes katalógus

A *„melyik tulajdonság melyik mátrix-típuson érvényes?"* kérdés végigjárása fontos:

| Típus | $G$ alak | $[A]_{ij}$ definíció | Értékkészlet | Vizsgán |
|---|---|---|---|---|
| **1.** Egyszerű | hurok+többszörös tilos | $1$ ha él, $0$ ha nincs | $\\{0,1\\}^{n \\times n}$ | **kötelező** |
| **2.** Multi | hurok+többszörös OK | $k$ (mult.) ha nem hurok, **$2k$** ha hurok | $\\mathbb{N}^{n \\times n}$ | **kötelező** |
| **3.** Súlyozott | $w: E \\to \\mathbb{R}_+$ | $w(v_i, v_j)$ ha él, **$+\\infty$** ha nincs | $\\mathbb{R}_+^{n \\times n}$ | „nem kötelező"  |
| **4.** Irányított egyszerű | $(v_i, v_j) \\neq (v_j, v_i)$ | $+1$ ha $(v_i, v_j) \\in E$, $-1$ ha $(v_j, v_i) \\in E$, 0 egyébként | $\\{-1, 0, +1\\}^{n \\times n}$ | „nem kötelező" |

A Szalkai-kurzuson **a 1. és 2. típus a vizsgaköteles**; a 3. és 4. variánssal csak megemlítés szintjén foglalkozunk. A főtételek érvényessége típusonként különbözik: az 1. + 2. típusra a fokszám-összeg formulák, a kézfogás, hatványos séta-számolás mind igaz; a 3. típuson a hatványnak más jelentése van (legrövidebb-út, Dijkstra/Floyd-Warshall környezet); a 4. típuson $A^T = -A$ (ferdén szimmetrikus).

### Páros gráf block-anti-diagonal alakja

$G = (A \\cup B, E)$ páros gráf ($|A| = p, |B| = q$). Ha a csúcsokat $A$-belieket előbb, $B$-belieket utóbb sorolva indexeljük, az adjacencia-mátrix:

$$A = \\begin{pmatrix} 0_{p \\times p} & X \\\\ X^T & 0_{q \\times q} \\end{pmatrix}$$

Az $X$ a két oldal közti élek bi-mátrixa. Megfordítva: $G$ pontosan akkor páros, ha sor-oszlop csere után erre az alakra hozható.

### Komponens block-diagonális alak

Ha $G$-nek $c$ komponense van, és a csúcsokat komponensenként soroljuk fel, az adjacencia-mátrix **block-diagonális**:

$$A = \\begin{pmatrix} A_1 & & \\\\ & A_2 & \\\\ & & \\ddots \\\\ & & & A_c \\end{pmatrix}$$

ahol $A_k$ a $k$-adik komponens adjacencia-mátrixa. A blokkok közötti üres helyeken csupa 0. Megfordítva: ha $A$ ilyen alakra hozható sor-oszlop cserékkel, akkor $G$ nem összefüggő.

### Izomorfia és sorcsere — $n!$ probléma

Két gráf $G_1, G_2$ akkor és csak akkor izomorf, ha létezik $P$ permutációs mátrix úgy, hogy $A_2 = P A_1 P^T$ (sorok + oszlopok egyszerre azonos cserével). Brute-force kereséshez $n!$ permutációt kellene végigpróbálni — Stirling miatt **$n = 50$-re már $\\sim 3 \\cdot 10^{64}$** lehetőség, ami $\\sim 10^{47}$ évig tartana. Ezért a gráf-izomorfia algoritmusilag nem triviális (\`tétel 27\` — Babai 2015 quasi-poly).

> A pontos nagyságrend: $O(n!) = O\\!\\left(\\left(\\tfrac{n}{e}\\right)^n \\sqrt{2\\pi n}\\right) \\succ O(2^n)$, vagyis a faktoriális *gyorsabban* nő, mint bármely exponenciális. A három szerkezeti vizsgálat (páros-jelleg, összefüggőség, izomorfia) sorcsere-alapú lekérdezése **brute-force-ban exponenciális** — pszuldo-algoritmusnak nevezzük, csak elméleti igazolásra használjuk; gyakorlati eldöntésre BFS-tinta ($O(n^2)$), kétszínezés-BFS, vagy Weisfeiler–Leman finomítás kell.

## Előnyök / hátrányok

- ✅ Éllekérdezés $O(1)$, mátrixalgebra használható.
- ❌ Ritka gráfra $O(n^2)$ memória — *sok nulla*.

### Sűrű vs ritka

A adjacencia-mátrix akkor **gazdaságos**, ha a gráf sűrű, azaz $|E| = \\Theta(n^2)$. Ritka gráfra ($|E| = O(n)$, pl. szociális hálók, internet) **éllista** ($O(|E|)$) vagy **adjacency list** ($O(|V| + |E|)$) jobb. A választás algoritmikusan is dönt: BFS pl. $O(|V|+|E|)$ adjacency listán, de $O(|V|^2)$ adjacencia-mátrixon.

## Súlyozott gráf

$a_{ij} = w(\\{v_i, v_j\\})$ ha él van, $0$ vagy $\\infty$ egyébként (Dijkstra/Floyd–Warshall esetén $\\infty$).

## Spektrális kapcsolat

Az $A$ sajátértékei összefüggnek a gráf:

- összefüggőségével ($\\lambda_2$ Laplace),
- klasztereivel (Cheeger-egyenlőtlenség),
- színezhetőségével (Hoffman-korlát),
- PageRank-kel és centralitásokkal.

## Alkalmazások

GNN-ek, közösségi háló analízis, recommendation systemek (collaborative filtering), GPU-gráfalgoritmusok, PageRank.

## Intuíció

Az adjacencia-mátrix a gráf „kapcsolati térképe", amely pontok és vonalak helyett lineáris algebrai objektummá alakítja. 🧮
`,U=`---
n: 23
title: 'Incidencia-mátrix'
glossary: 'A gráf csúcsai és élei közötti kapcsolatokat leíró mátrix.'
path: 'graph'
related_dimat: ['ch12']
related_ila: []
related_exercises: ['ch12']
formulas:
  - '$B_{ij} = 1$, ha $v_i$ incidens $e_j$-vel'
  - 'Irányított: $B_{ij} \\in \\{-1, 0, +1\\}$'
  - '$L = B B^T$ (Laplace-mátrix, irányítatlan eset $\\pm$ jellel)'
---
Az incidencia-mátrix a gráf csúcsai és élei közötti kapcsolatot írja le. Míg az adjacencia-mátrix csúcs–csúcs kapcsolatokat tárol, addig az incidencia-mátrix **csúcs–él** kapcsolatokat.

> *„Incident"* angolul: illeszkedik. A geometriában is, a gráfelméletben is: egy él *incidens* a végpontjaival.

## Méret és reprezentáció

$B$ mérete $n \\times m$ (csúcsok × élek). Memória: $O(n \\cdot m)$, ami $|E| = O(n)$ ritka gráfra $O(n^2)$, sűrű gráfra $O(n^3)$ — adjacencia-mátrixhoz képest sokszor **több**, ritka gráfokra ezért kevésbé hatékony.

## Definíció (irányítatlan)

Legyen $|V|=n$, $|E|=m$. A $B \\in \\{0,1\\}^{n\\times m}$ mátrix:

$$b_{ij} = \\begin{cases} 1 & \\text{ha } v_i \\text{ incidens } e_j \\text{-vel} \\\\ 0 & \\text{egyébként} \\end{cases}$$

Minden oszlopban pontosan **két** darab 1 szerepel (egy él két csúcshoz tartozik).

## Példa

Csúcsok $A, B, C$, élek $e_1=(A,B)$, $e_2=(A,C)$:

$$B = \\begin{pmatrix} 1 & 1 \\\\ 1 & 0 \\\\ 0 & 1 \\end{pmatrix}$$

## Irányított gráf

$$b_{ij} = \\begin{cases} -1 & \\text{ha } e_j \\text{ kilép } v_i \\text{-ből} \\\\ +1 & \\text{ha } e_j \\text{ belép } v_i \\text{-be} \\\\ 0 & \\text{egyébként} \\end{cases}$$

Az oszlopösszeg ekkor mindig 0 — ez tükrözi Kirchhoff áramerősség-megmaradását.

## Kapcsolat más mátrixokkal

Irányított gráfra a Laplace-mátrix: $L = B B^T$. Ez vezeti be a *Mátrix-fa tételt* (Kirchhoff):

> A címkézett feszítőfák száma = $L$ bármely $n-1$-szer $n-1$-es részmátrixának determinánsa.

Példa: $K_n$ feszítőfáinak száma $n^{n-2}$ (Cayley-tétel — Kirchhoff-tételből rögtön kijön).

## Folyamok és Kirchhoff

Hálózati folyamokban (\`dimat_ch22\`) a folyam $f$ kielégíti $B f = b$, ahol $b$ a forrás/nyelő vektora. Ez a max-flow LP-formuláció alapja.

## Hurokél és többszörös él

- **Hurokél** $e = \\{v_i, v_i\\}$: az $e$ oszlopában csak egy nem-nulla bejegyzés van ($v_i$ sorában), de **kettőt** írunk (nem 1-et) — analóg az adjacencia-mátrix főátló-konvencióval. Így az oszlopösszeg következetesen 2 marad minden élre.
- **Többszörös él**: vagy külön oszlopot kap minden példány, vagy az oszlopba a multiplicitás kerül a 1 helyett.

## Hipergráf — incidencia-mátrix általánosított ereje

A *hipergráf* élei nem 2, hanem **akármennyi** csúcsot összekötő részhalmazok. Az incidencia-mátrix természetesen kiterjed:

$$b_{ij} = \\begin{cases} 1 & v_i \\in e_j \\\\ 0 & \\text{egyébként} \\end{cases}$$

Egy hiper-él $e_j$ oszlopában akármennyi 1 lehet (annyi, ahány csúcsot tartalmaz). Adjacencia-mátrixszal ezt nem lehet egyszerűen reprezentálni (3-dimenziós tenzort igényelne), így a **hipergráfok természetes ábrázolása** az incidencia-mátrix.

## Sor- és oszlop-csere — független

Az adjacencia-mátrixnál sor- és oszlop-cserét **együtt** kellett alkalmazni (mert mindkettő ugyanahhoz a csúcshoz tartozik). Az incidencia-mátrixban a sorok csúcsok, az oszlopok élek — két **független** halmaz. Egy sor cseréje csak két csúcsot cserél, egy oszlop cseréje csak két élet újraszámoz — egymástól függetlenül lehet.

## Egyszerű tulajdonságok

- **Izolált csúcs** sora: csupa 0.
- **Csúcs fokszáma** = sor-összeg (irányítatlan, egyszerű gráf).
- **Egy oszlopban** pontosan 2 egyes (egyszerű él), vagy a két végpont számainak összege a kettős/hurok-konvencióval.
- **Két oszlop azonos** ⟺ a megfelelő két él között többszörös-él kapcsolat (ugyanazokat a csúcsokat kötik).
- **Hurokél / hiperél azonosítása**: oszlopban pontosan **1** / **több** ($>2$) nem-nulla elem.

## Páros gráf — csak sor-átrendezés kell

> **Állítás:** $G$ pontosan akkor páros (két-pólusú), ha az incidencia-mátrix **sorai** átrendezhetők úgy, hogy egy vízszintes elválasztó vonal alakuljon ki: a felső blokk csúcsai az egyik osztály, az alsó blokk csúcsai a másik osztály — és minden oszlopban (élben) pontosan egy 1 felül, egy 1 alul.

Az adjacencia-mátrixnál sorhoz tartozó oszlopot is cserélni kellett (mert ugyanaz a csúcs sora és oszlopa is); itt csak sor-átrendezés szükséges, mert sorok és oszlopok különböző halmazok (csúcsok vs élek).

## Komponens-szerkezet — block-diagonális

> **Állítás:** $G$ nem összefüggő ⟺ sor- és oszlop-átrendezéssel $B$ az alábbi alakra hozható:
>
> $$B = \\begin{pmatrix} X & 0 \\\\ 0 & Y \\end{pmatrix}$$
>
> ahol $X$ az első komponens incidencia-mátrixa, $Y$ a másodiké, és a két blokkon kívüli rész csupa 0.

Több komponens esetén a $B$ matrix $k$-blokk diagonális ($X_1, X_2, \\ldots, X_k$ a komponensek incidence-mátrixai).

## Izomorfia — független sor- és oszlop-csere

$G_1 \\cong G_2$ ⟺ incidencia-mátrixaik **sorok és oszlopok független** átrendezésével azonossá tehetők. Ez **két** permutációs mátrixszal: $B_2 = P_V B_1 P_E^T$ ahol $P_V \\in S_n$ csúcsokon, $P_E \\in S_m$ éleken hat. A brute force ezért $n! \\cdot m!$ — még rosszabb, mint az adjacency-mátrixnál ($n!$).

## Egyszerű tulajdonságok melyik definíción érvényesek?

> *„Melyik tulajdonság / állítás melyik incidencia-mátrix típuson igaz?"* — Szalkai-féle pedagógiai mantra. Az egyszerű gráfra (a) érvényesek mindig; multigráfra (b) a fokszám/hurokél-konvenciók kellenek; irányított gráfra (c) oszlop-összeg = 0 (be-fok − ki-fok); hipergráfra (d) a fokszám már „hiper-fokszámot" jelent.

## Alkalmazások

- elektromos áramkörök (Kirchhoff feszültség/áram törvények),
- lineáris programozás (hálózati folyam),
- gráfneurális hálók,
- algebrai gráfelmélet,
- topológiai adatelemzés,
- hipergráf-tanulás (CNN-szerű architektúrák hipergráfokon).

## Intuíció

Az incidencia-mátrix a gráf „bekötési táblája": melyik csúcsot melyik él érinti, és milyen irányban. 🔌
`,Y=`---
n: 24
title: 'Síkbarajzolhatóság'
glossary: 'Annak vizsgálata, hogy egy gráf kereszteződésmentesen rajzolható-e síkra.'
path: 'graph'
related_dimat: ['ch17']
related_ila: ['ch16']
related_exercises: ['ch17']
formulas:
  - '$|V| - |E| + |F| = 2$ (Euler-formula)'
  - '$|E| \\leq 3|V| - 6$'
  - 'Páros síkgráfra $|E| \\leq 2|V| - 4$'
---
Egy gráf **síkbarajzolható**, ha lerajzolható a síkban úgy, hogy az élek csak a végpontjaikban találkozzanak (nincs élkereszteződés). Az ilyen gráfokat *síkgráfoknak* hívjuk.

## Példák

- Minden fa síkbarajzolható.
- $C_n$ síkbarajzolható.
- $K_5$ és $K_{3,3}$ **nem** síkbarajzolhatók (lásd Kuratowski-tétel).

## Euler-formula

Összefüggő síkgráfra:

$$|V| - |E| + |F| = 2$$

ahol $|F|$ a lapok száma (beleértve a külső, határtalan lapot).

## Következmény

Egyszerű síkgráfra ($|V| \\geq 3$):

$$|E| \\leq 3|V| - 6$$

Páros síkgráfra:

$$|E| \\leq 2|V| - 4$$

## Algoritmikus eldöntés

A síkbarajzolhatóság lineáris időben eldönthető:

- **William T. Tutte** (1917–2002, brit), 1963 — az első polinomiális idejű algoritmus.
- **John E. Hopcroft** (1939–) és **Robert E. Tarjan** (1948–), 1974 — lineáris idejű $O(|V|+|E|)$ algoritmus, ami nem csak eldönt, hanem konkrét síkbarajzolást is konstruál.

Történeti jegyzet: **Kazimierz Kuratowski** (1896–1980, lengyel) 1930-as eredményével **nagyjából egy időben** **Orrin Frink Jr.** (1901–1988) és **Paul A. Smith** (1900–1980) amerikai matematikusok is hasonló jellemzést bizonyítottak, de a dolgozatuk soha nem jelent meg publikálva — így a tétel Kuratowski nevéhez fűződik. **Fáry István** (1922–1984) magyar matematikus 1948-as tétele a Wagner 1936-os eredményével együtt mondja ki az egyenes-szakaszos rajzolhatóságot.

## VLSI — minimum-területű síkbarajzolás

A síkbarajzolhatóság elméleti megoldhatósága mellett a gyakorlat **optimalizálási** problémát kíván:

> Adott síkbarajzolható gráf — rajzoljuk le **minimális területű** síkrészre, egész koordinátákkal (vagy adott rácson).

Ez a **VLSI** (*Very Large Scale Integration*) probléma az integrált áramkörök layoutjánál: a chip-felület drága, ezért a vezetékeket úgy kell elrendezni, hogy átfedés-mentesen minimális helyet foglaljanak. **Schnyder 1990** eredménye szerint minden $n$-csúcsú síkgráf elhelyezhető $(n-1) \\times (n-1)$-es egész-rácson — ez aszimptotikusan optimális, de a konkrét konstans és a kis $n$-re vonatkozó eredmények aktív kutatási terület.

## Wagner–Fáry-tétel — egyenes vonalas rajzolás

> **Tétel (Wagner 1936, Fáry István 1948):** Minden síkba rajzolható egyszerű gráf lerajzolható úgy is, hogy **minden él egyenes szakasz**.

Vagyis a görbék, hajlított ívek nem szükségesek — bármilyen síkba terítés átalakítható egyenes-szakaszrajzba (Fáry „straight-line embedding"). Az eredmény ára gyakran nagy: a csúcsok koordinátáit exponenciálisan kell precízen elhelyezni, de elvileg lehetséges.

**Modern változat (Schnyder, 1990):** minden $n$-csúcsú síkgráfra létezik egyenes-vonalas rajzolás egy $(n-1) \\times (n-1)$-es rácsban — egész koordinátákkal. Ezen alapulnak a modern grafikai gráfrajzoló rendszerek (graphviz, Cytoscape).

## Sztereografikus projekció — sík ↔ gömb

A síkba és gömbre rajzolható gráfok osztálya **azonos**. Bizonyítás: helyezzünk a sík fölé érintőlegesen egy gömböt, és az északi pólusból „lézersugarat" indítva minden sík-pont egy-egy gömb-pontnak feleltetődik meg (a pólust kivéve, ami a sík „végtelen pontja"). Ezért az „összes síkgráf" és „összes gömbgráf" osztály ugyanaz.

Gyakorlatibb intuíció: rajzolj egy lyukas gumilabdára egy gráfot, majd nyújtsd ki a labdát a síkra a lyukon keresztül — a gráf síkba kerül anélkül, hogy az élek metszenék egymást.

## Lapok és Euler-karakterisztika

A síkbarajzolás felosztja a síkot lapokra. A $\\chi = V - E + F$ mennyiség topológiai invariáns — gömbfelszínen $2$, tóruszon $0$.

## Térkép-duál és színezés

Egy *(síkbeli) térkép* a sík (vagy korlátos tartomány) felosztása szomszédos tartományokra; **duális gráfja** egy csúcs minden tartományhoz, és él két csúcs között, ha a tartományok határosak. A térkép $k$-színezhetősége pontosan a duális gráf $\\chi \\leq k$ tulajdonsága — mindkét formuláció ekvivalens.

## Ötszín-tétel (Heawood, 1890)

> **Tétel:** Minden síkba rajzolható gráfra $\\chi(G) \\leq 5$.

A négyszín-tétel előfutára. Bizonyítása **Kempe 1879-es ötletén** (Kempe-láncok) alapul. Heawood vette észre, hogy Kempe eredeti 4-szín-érve hibás, de a gondolatmenet 5-színre tiszta — ez maradt a legmagasabb szigorúan bizonyított eredmény közel egy évszázadig.

## Négy szín tétel

Minden síktérkép kiszínezhető legfeljebb 4 színnel úgy, hogy szomszédos tartományok különböző színűek legyenek. Ekvivalens állítás síkgráfokra: $\\chi(G) \\leq 4$ minden síkgráfra.

**Történet:**

- **Guthrie sejtés (1852)** — Francis Guthrie veszi észre Anglia térképének színezésekor, hogy 4 szín mindig elég.
- **Kempe (1879)** — hibás bizonyítás 4 színre (Heawood 1890 mutatott rá a hibára).
- **Appel–Haken (1976)** — első érvényes bizonyítás, számítógép több mint 1000 órás futtatása ~1500 „elkerülhetetlen konfigurációt" ellenőrzött. Ez volt az első nagy számítógép-asszisztált matematikai tétel; sokáig vitatták az ilyen bizonyítások filozófiai státuszát.
- **Robertson–Sanders–Seymour–Thomas (1996)** — egyszerűsített, gépileg verifikált bizonyítás + $O(n^2)$ algoritmus a 4-színezés megkonstruálására.

## Más felületek

A síkbeli (és gömbi) gráfok $\\chi \\leq 4$, de **más topológiájú felületekre** más korlátok érvényesek:

| Felület | Euler-karakterisztika | $\\chi$ felső korlát |
|---|---|---|
| gömb / sík | $2$ | $4$ |
| Möbius-szalag | $0$ | $6$ |
| tórusz (perec) | $0$ | $7$ |
| kétlyukú felület | $-2$ | $8$ |

**Heawood-formula** (1890) — minden $g \\geq 1$ génuszú orientálható felületre:

$$\\chi \\leq \\left\\lfloor \\tfrac{7 + \\sqrt{1 + 48g}}{2} \\right\\rfloor$$

Érdekes módon a tórusz esetét **könnyebb** bizonyítani, mint a síkét — Heawood már 1890-ben kezelte. A bonyolult eset pont a $g=0$ (sík), amit csak 1976-ban sikerült.

## Alkalmazások

- áramkörtervezés, PCB-layout,
- chip-design (VLSI),
- térképszínezés,
- számítógépes grafika és háló-generálás,
- algebrai topológia.

## Intuíció

A síkbarajzolhatóság a gráf „geometriai tisztaságát" méri: meg lehet-e rajzolni a kapcsolatokat anélkül, hogy a vezetékek összeakadnának. 🧭
`,ee=`---
n: 25
title: 'Kuratowsky tétele'
glossary: 'A síkbarajzolhatóságot tiltott részgráfokkal jellemző klasszikus tétel.'
path: 'graph'
related_dimat: ['ch17']
related_ila: ['ch16']
related_exercises: ['ch17']
formulas:
  - '$G$ síkbarajzolható $\\iff$ nem tartalmaz $K_5$ vagy $K_{3,3}$ topológiai részgráfot'
---
Kuratowski tétele (1930) a síkbarajzolhatóság egyik alapvető karakterizációja.

## A tétel

Egy gráf akkor és csak akkor síkbarajzolható, ha **nem** tartalmaz $K_5$ vagy $K_{3,3}$ *topológiai részgráfot* (élek mentén csúcsokat be lehet illeszteni, de az alapszerkezet ugyanaz marad).

$$G \\text{ nem síkbarajzolható} \\iff G \\text{ tartalmaz } K_5 \\text{ vagy } K_{3,3} \\text{ felosztását}$$

## A két tiltott gráf

- **$K_5$**: az 5 csúcsú teljes gráf.
- **$K_{3,3}$**: a „három ház és három közmű" (régebbi nevén „három ház, három kút") probléma gráfja — teljes páros gráf $3+3$ csúccsal. **Klasszikus rejtvény:** 3 ház + 3 közmű (gáz, víz, áram); minden házat össze kell kötni mind a 3 közművel úgy, hogy a vezetékek ne keresztezzék egymást. **Megoldás: nem létezik** — pontosan ezért nem síkbarajzolható $K_{3,3}$.

## Felosztás (subdivision)

Az élek helyére hosszabb (egymás után fűzött) utak kerülhetnek. A topológiai szerkezet ugyanaz marad.

### Kuratowski-keresési stratégia — csúcs-diszjunkt utak

A „tartalmaz $K_{3,3}$ felosztást" feltétel **nem** szimpla részgráf-keresés (az élek csak út-csúcs-sorozat lehet, nem közvetlen él). A praktikus algoritmus:

> **$K_{3,3}$-keresés:** keressünk **3+3 csúcsot** (mondjuk 3 piros, 3 kék) úgy, hogy **mindegyik piros csúcsból** vezet **út** mindegyik kék csúcshoz — összesen **9 út** —, és ezek az utak **páronként csúcs-diszjunktak** (a 6 alapcsúcson kívül nincs közös csúcsuk).
>
> **$K_5$-keresés:** keressünk **5 csúcsot** úgy, hogy bármely kettő között legyen út, és a $\\binom{5}{2} = 10$ út páronként csúcs-diszjunkt (a 5 alapcsúcson kívül nem osztozik).

A csúcs-diszjunkt-utak feltétel azzal egyenértékű, hogy az élek hosszabbítása ($K_5$ vagy $K_{3,3}$ felosztása) megtalálható a gráfban. **Algoritmikus megoldása $O(|V| + |E|)$** Hopcroft–Tarjan 1974 alapján (\`tétel 24\`).

> **Pedagógiai megjegyzés (Szalkai):** vizsgán ezt az „útkeresős" megközelítést használjátok, ne az interneten talált alternatív algoritmusokat (LR-planáris, Boyer–Myrvold), mert a tárgyalt elmélettel közvetlenül illeszkedik.

## Wagner-tétel (rokon)

Egy gráf síkbarajzolható $\\iff$ nem tartalmaz $K_5$ vagy $K_{3,3}$ *minorként* (élkontrakcióval is el lehet jutni hozzá).

## Példa

$K_4$ síkbarajzolható. $K_5$ már nem — egyetlen plusz csúcs is elkerülhetetlenné teszi a keresztezést.

## Kapcsolat az Euler-formulával

Ha $|E| > 3|V| - 6$, biztosan nem síkbarajzolható. Kuratowski tétele *teljes* karakterizációt ad — szükséges és elégséges feltételt.

## Történeti jelentőség

Kazimierz Kuratowski 1930-ban bizonyította; a topológiai gráfelmélet egyik sarokköve. A Robertson–Seymour minor-tétel ezt általánosítja: bármely felfelé-zárt gráfosztályt véges sok tiltott minor jellemez.

## Alkalmazások

Áramkörtervezés, chip-layout, gráfalgoritmusok (síkgráfokra sok probléma egyszerűbb), számítógépes grafika.

## Intuíció

Minden nem síkbarajzolható gráf mélyén ugyanaz a két „tiltott gépezet" rejtőzik — diagnosztikai szabály: ha a hálózatban elbújik egy $K_5$ vagy $K_{3,3}$, a vezetékek garantáltan összegabalyodnak. 🕸️
`,ne=`---
n: 26
title: 'Euler poliédertétele'
glossary: 'A konvex poliéderek csúcsaira, éleire és lapjaira vonatkozó összefüggés.'
path: 'graph'
related_dimat: ['ch17']
related_ila: []
related_exercises: ['ch17']
formulas:
  - '$|V| - |E| + |F| = 2$'
  - 'Kocka: $8 - 12 + 6 = 2$'
  - 'Általánosítás: $\\chi(\\text{tórusz}) = 0$'
---
Euler poliédertétele (1750) a konvex poliéderek csúcsai, élei és lapjai közötti alapvető összefüggést írja le.

## A tétel

Konvex poliéderre:

$$|V| - |E| + |F| = 2$$

## Példa: kocka

$|V| = 8$, $|E| = 12$, $|F| = 6$:

$$8 - 12 + 6 = 2 \\quad \\checkmark$$

## Példa: tetraéder

$|V|=4$, $|E|=6$, $|F|=4$: $4-6+4=2$. ✓

## Kapcsolat síkgráfokkal

Minden konvex poliéder élszerkezete síkgráfként ábrázolható (sztereografikus vetítés). Ezért az Euler-formula összefüggő síkgráfokra is érvényes.

## Következmények

Egyszerű síkgráfra ($|V|\\geq 3$):

$$|E| \\leq 3|V| - 6$$

Páros esetben $|E|\\leq 2|V|-4$. Ezekből rögtön következik, hogy $K_5$ és $K_{3,3}$ nem síkbarajzolható.

### Derékbőség-alapú általánosítás

A $|E| \\leq 3|V| - 6$ és $|E| \\leq 2|V| - 4$ képletek egy közös általánosítás speciális esetei. Legyen $g = g(G)$ a gráf **derékbősége** (girth — legrövidebb kör hossza). Egyszerű, $g$-derékbőségű síkgráfra:

$$|E| \\leq \\frac{g}{g - 2} \\cdot (|V| - 2)$$

**Levezetés:** Euler-formulából $|F| = 2 - |V| + |E|$. Minden lapot legalább $g$ él határol (mert minden kör hossza $\\geq g$); minden él pontosan 2 lap között fut → $g \\cdot |F| \\leq 2 |E|$. Behelyettesítve:

$$g (2 - |V| + |E|) \\leq 2 |E| \\;\\Longrightarrow\\; (g - 2) |E| \\leq g (|V| - 2) \\;\\Longrightarrow\\; |E| \\leq \\frac{g}{g - 2}(|V| - 2)$$

**Speciális esetek:**
- $g = 3$ (legkisebb lehetséges, háromszög): $|E| \\leq 3(|V| - 2) = 3|V| - 6$ ✓
- $g = 4$ (páros gráf, mert nincs páratlan kör): $|E| \\leq 2(|V| - 2) = 2|V| - 4$ ✓
- $g = 5$ (Petersen-szerű): $|E| \\leq \\tfrac{5}{3}(|V| - 2)$
- $g \\to \\infty$ (fa-szerű): $|E| \\to |V| - 2$, azaz fa-szerű ($|V| - 1$) közelíti.

**Vizsgafeladat-stratégia:** Síkba rajzolhatóság kiszúrására **először** számoljuk $|V|, |E|$-t; ha $|E| > \\frac{g}{g-2}(|V|-2)$, biztosan **nem síkbarajzolható**. Ha kisebb, **még nem garantált** a síkba rajzolhatóság — ekkor Kuratowski-féle $K_5$/$K_{3,3}$ keresés kell.

## Euler-karakterisztika

Az általánosított mennyiség:

$$\\chi = V - E + F$$

topológiai invariáns:

- gömbfelület: $\\chi = 2$,
- tórusz: $\\chi = 0$,
- kétlyukú felület: $\\chi = -2$.

## Platóni testek

Az Euler-formulából rögtön kijön, hogy pontosan **öt** konvex szabályos poliéder van: tetraéder, kocka, oktaéder, dodekaéder, ikozaéder.

## Euler második poliéder-tétele

A klasszikus $V-E+F=2$ általánosítása **3-reguláris, hurokmentes, kör-fedett** síkgráfokra (minden él valamely lap határán van). Jelölje $n_i$ az $i$-oldalú lapok számát ($i \\geq 2$, ahol $n_2$ a kétoldalú párhuzamos él által közrezárt „digon" lapok száma). Ekkor:

$$\\sum_{i \\geq 2} (6 - i) \\, n_i = 12$$

**Bizonyítás-vázlat:** 3-regularitás miatt $|V| = \\tfrac{2}{3}|E|$ (minden csúcs 3 lap találkozása); minden él pontosan 2 lap határán → $|E| = \\tfrac{1}{2}\\sum_i i \\cdot n_i$; $|F| = \\sum_i n_i$. Az $V-E+F=2$-be behelyettesítve és átrendezve adódik a tétel.

**Érdekesség:** $i = 6$ esetén $(6-i) n_i = 0$, vagyis a **hatszögek száma nem szerepel** a formulában! Akárhány hatszöget hozzáadhatunk, a tétel mindig 12-t ad — a 12 az ötszögekkel és kisebb lapokkal egyenlítődik ki.

## Fullerének (foci-labda molekula)

A **fullerén** ($C_{60}$) molekula 1990-ben fizikai laboratóriumban előállított szénszerkezet — 60 szénatom, 90 kötés, 32 lap (12 ötszög + 20 hatszög), pontosan mint egy szabványos foci-labda. Felfedezőinek 1996-ban Nobel-díjat ítéltek (Curl, Kroto, Smalley).

**Az érdekesség:** ezt a poliéderes szerkezetet **300 évvel** korábban a matematikusok már leírták az Euler-poliédertétel következményeként! A fenti második poliéder-tételben, ha **csak 5- és 6-szöges lapok** vannak (kémiai indok: a benzol-gyűrűk szénkötés-szöge 120° körül $\\Rightarrow$ csak 5- és 6-szögű gyűrűk lehetségesek):

$$\\sum (6-i) n_i = (6-5) n_5 + (6-6) n_6 = n_5 = 12$$

azaz **pontosan 12 ötszöget** kell tartalmaznia, függetlenül a hatszögek számától. A $C_{60}$ ennek a családnak a legszimmetrikusabb képviselője; az elnevezés **Buckminster Fuller** építészről származik, aki ilyen gömbszerű kupolákat tervezett (Topkapi palota 200 éves díszítései hasonló motívumot mutatnak).

Hasonlóan: a hatszögcsempézés a síkban végtelen sok hatszöget tartalmaz, de **gömb felszínén** szükségképpen 12 ötszöges „hibapontnak" kell lennie — emiatt látjuk a foci-labdán a fekete ötszögeket.

## Más felületekre rajzolt gráfok

Az Euler-karakterisztika $\\chi(\\text{felület}) = V - E + F$ a felülettől függ:

### Euler-karakterisztika táblázat

| Felület | $\\sigma = V - E + F$ |
|---|---|
| sík / gömb | $2$ |
| tórusz („úszógumi") | $0$ |
| Möbius-szalag | $0$ |
| Klein-palack | $0$ |
| hengerpalást | $0$ |
| kétlyukú gömb | $0$ |
| kétlyukú papírlap | $-1$ |
| projektív sík | $1$ |
| $g$-lyukú orientálható felület | $2 - 2g$ |

Bármely $\\mathcal{F}$ felületre $\\sigma(\\mathcal{F})$ egy egész szám (**Euler-karakterisztika**), amely minden $\\mathcal{F}$-be rajzolt összefüggő gráfra teljesíti $V - E + F = \\sigma(\\mathcal{F})$.

### Tóruszra rajzolható (és nem rajzolható)

A tóruszra **több** gráf rajzolható, mint síkra:

- **Lehet** tóruszra rajzolni: $K_{3,3}$ és $K_5$ (síkban tiltott!), $K_{4,4}$, $K_7$, a 4-dimenziós hiperkocka mint képkeret-szerkezet.
- **Nem** rajzolható tóruszra: $K_{5,5}$ és $K_8$ — a génusz korlátja miatt.

Minden felületre létezik **Kuratowski-szerű karakterizáció** véges tiltott részgráf-halmazzal (Robertson–Seymour minor-tétel következménye). A pontos tiltott listát csak az **Euklideszi síkra** (Kuratowski: $K_5, K_{3,3}$) és a **projektív síkra** (Glover–Huneke–Wang 1979: 35 tiltott minor) ismerjük.

## Alkalmazások

- gráfelmélet (síkgráfok elemzése),
- topológia,
- számítógépes grafika és háló-feldolgozás (mesh processing),
- CAD-rendszerek (Euler operators),
- topológiai adatelemzés (TDA).

## Intuíció

Egy poliéder szerkezete mögött rejtett globális egyensúly van: hiába változik az alak, $V-E+F$ makacsul állandó. 🧊
`,ae=`---
n: 27
title: 'Gráfizomorfizmus'
glossary: 'Két gráf szerkezeti azonosságának vizsgálata csúcsátnevezés mellett.'
path: 'graph'
related_dimat: ['ch16']
related_ila: []
related_exercises: ['ch16']
formulas:
  - '$G_1 \\cong G_2$ ha $\\exists f\\colon V_1\\to V_2$ bijekció szomszédság-tartó'
  - '$A_2 = P^{-1} A_1 P$ permutációs $P$'
---
Két gráf **izomorf**, ha szerkezetileg azonosak, csak a csúcsok elnevezése különbözik.

### Steinitz-féle elv

A matematikai izomorfizmus filozófiai magja (**Ernst Steinitz**, 1871–1928, német matematikus): *„két izomorf struktúra csak lényegtelen külsőségekben különbözik — minden lényeges, általunk vizsgált tulajdonságban azonos."* A gráfra alkalmazva ez azt jelenti: ha $G_1 \\cong G_2$, akkor minden gráf-elméleti kérdésre $G_1$-re és $G_2$-re ugyanaz a válasz (összefüggőség, átmérő, kromatikus szám, Hamilton-kör létezése, spektrum, …). A két gráf címkéje vagy rajza különbözhet, de a *struktúra* azonos.

## Definíció

$G_1 = (V_1, E_1)$ és $G_2 = (V_2, E_2)$ izomorfak, ha létezik olyan bijekció

$$f\\colon V_1 \\to V_2$$

amely megőrzi a szomszédosságot:

$$\\{u, v\\} \\in E_1 \\iff \\{f(u), f(v)\\} \\in E_2$$

Jelölés: $G_1 \\cong G_2$.

**Multigráf esete:** ha élek multiplicitása $m_1, m_2$ függvényekkel adott (lásd \`tétel 11\`), az izomorfizmus a multiplicitást is megőrzi:

$$m_1\\{x, y\\} = m_2\\{f(x), f(y)\\} \\quad \\forall x, y \\in V_1$$

Az alap szomszédság-feltétel ennek speciális esete ($m=0$ ↔ nincs él, $m\\geq 1$ ↔ van). Hurokélekre is automatikusan teljesül ($x = y$ eset).

## Mátrixos megfogalmazás

$A_2 = P^{-1} A_1 P$ valamilyen permutációs $P$ mátrixra.

## Izomorfia-invariánsok

Ha két gráf izomorf, akkor sok tulajdonságuk egyezik:

- csúcsszám, élszám,
- fokszám-sorozat,
- komponensek száma,
- körök száma adott hosszra,
- diaméter,
- spektrum (sajátérték-multihalmaz),
- kromatikus polinom.

Ezek **szükséges**, de **nem elégséges** feltételek (kivéve néhány speciális esetet).

### Klasszikus példa — Petersen-gráf

A **Petersen-gráf** a gráfelmélet ikonja: 10 csúcs, 15 él, 3-reguláris, $g = 5$ girth-tel. Két különböző rajza látszólag teljesen eltér:

- **Csillag-rajz** (**Julius Petersen**, 1839–1910, dán matematikus, 1898-as eredeti rajz): külső 5-szög ($A_1, \\dots, A_5$), belső 5-szög-pentagram ($B_1, \\dots, B_5$), $A_i$ és $B_i$ minden $i$-re összekötve.
- **„Kempe-féle" rajz** (**Alfred Bray Kempe**, 1849–1922, angol matematikus, ~1886): a 10 csúcs a $\\binom{5}{2} = 10$ db kétpontú részhalmazaként $\\{1,\\dots,5\\}$ fölött, két csúcs szomszédos $\\iff$ a megfelelő részhalmazok **diszjunktak**. (Kempe a négyszín-tétel 1879-es hibás bizonyításáról és a Kempe-láncokról is híres.)

A két rajz **izomorf** — ez gyakori vizsgapélda arra, hogy az izomorfizmust nem lehet rajzból vagy névből megítélni, csak a szomszédság-szerkezet vizsgálatából. (A Petersen-gráf egyébként a nem-Hamilton-bejárható és nem-élszínezhető 3-reguláris gráfok ősi ellenpéldája.)

## Számítási nehézség

A gráfizomorfizmus probléma híres komplexitáselméleti „szürke zóna":

- $\\in NP$, de **nem ismert** NP-teljesnek,
- Babai 2015: **kvázi-polinomiális** $\\exp(O((\\log n)^c))$ idejű algoritmus,
- speciális osztályokra (fák, síkgráfok, korlátos fokszám) polinomiális.

### Triviális brute-force algoritmus

Egy egyszerű, mindig működő algoritmus létezik: próbáljuk végig az **összes** $n!$ bijekciót $V_1 \\to V_2$, és mindegyikre ellenőrizzük az éltartó feltételt minden $(i, j)$ párra.

\`\`\`
for each bijection f: V_1 → V_2:
    for i = 1 to n; for j = 1 to n:
        if ( {v_i, v_j} ∈ E_1 ) XOR ( {f(v_i), f(v_j)} ∈ E_2 ):
            "f nem éltartó", continue with next f
    return "izomorf" (with f)
return "nem izomorf"
\`\`\`

**Komplexitás:** $n! \\cdot n^2$ → Stirling-becsléssel $\\left(\\dfrac{n}{e}\\right)^n \\cdot n^2$. Már $n = 50$-re **évmilliárdok**; gyakorlatilag csak $n \\leq 12$ körülig használható. Modern algoritmusok (Babai 2015 kvázi-polinomiális, ill. VF2/Nauty heurisztikák) sokkal jobbak.

## Algoritmusok

- VF2 (gyakorlatban gyors),
- Nauty és Bliss (kanonikus címkézés),
- Color refinement / 1-WL teszt (de nem teljes).

### Babai László (1950–)

A magyar matematikus 2015-ös kvázi-polinomiális áttörése a probléma egyik legnagyobb modern eredménye — $\\exp(O((\\log n)^c))$ idejű algoritmus, ami közelít a polinomiálishoz, de nem azonos vele. A bizonyítás 2017-ben kis hibajavítás után véglegesedett.

## Faszerű részosztályok — Babai–Reed-algoritmus

Ha **mindkét gráf fa**, lineáris idejű algoritmus létezik (Babai–Read, 1979). A módszer szépen demonstrálja, miért könnyebb a fa-iso:

**Lépés 1 — gyökereztetés.** Mindkét fát gyökereztetjük (lásd \`tétel 20\` „shaking" módszer); a csúcsok szintekre rendeződnek. Ha a magasságok eltérnek → nem izomorf. Egyébként az egyik fa gyökereztetését rögzítjük, a másikat $n$-féleképpen próbáljuk gyökereztetni.

**Lépés 2 — címkézés alulról fel.** Minden $x$ csúcshoz rendelünk egy $L(x)$ **sorozat** címkét és egy $C(x) \\in \\mathbb{N}$ **sorszám** címkét, lentről felfelé:

- **Levelek:** $L(x) := ()$ (üres sorozat), $C(x) := 0$.
- **Belső csúcs $x$, $(i+1)$-edik szint felett:** legyen $x$ gyermekei $z_1, \\dots, z_p$. Definiáljuk $L(x) := \\text{sort}(C(z_1), \\dots, C(z_p))$ — a gyermek-sorszámok **nem-csökkenő** sorozata.
- Aktuális szint összes csúcsára $L$-eket lexikografikusan rendezzük; $C(x)$ = az $L(x)$ rang-sorszáma (azonos $L$ → azonos $C$, eltérő → ugró $C$).

**Lépés 3 — eldöntés.** A két fa szintenkénti izomorf $\\iff$ a két gyökér $L$ címkéje azonos. Ha igen, a szintek lexikografikus sorrendje adja a konkrét izomorfizmust.

### Bucket sort gyorsítás → lineáris idő

A naív sorbarendezés szintenként $O(n \\log n)$ → összesen $O(n^2 \\log n)$. De a címkék korlátosak ($\\leq n$), így **vödör-rendezés** alkalmazható: $m$ vödör, minden inputot egyetlen lépésben a helyére dobunk. Komplexitás $O(n + m)$, ami konstanssal együtt $O(n)$. Így az egész fa-iso **lineáris idejű** — ahányszor a gépnek kell beolvasnia a gráfot, lényegében annyi idő alatt eldönt.

**Kiterjesztés címkézett csúcsokra:** ha a csúcsoknak van „típus" attribútumuk (pl. kémiai atom: H, C, O, …), egyszerűen prefixáljuk az $L$ sorozatok elejére a típus-azonosítót. Az algoritmus változatlanul fut.

## Alkalmazások

- kémiai molekulák összehasonlítása,
- mintafelismerés,
- adatbázis-szubgráf keresés,
- kriptográfia (Zero-Knowledge bizonyítások),
- computer vision (gráfok illesztése).

## Intuíció

„Strukturális azonosság" — a nevek és rajzok változhatnak, de a kapcsolatok mintázata ugyanaz marad. 🧩
`,te=`---
n: 28
title: 'Páros gráfok'
glossary: 'Olyan gráfok, amelyek csúcsai két diszjunkt osztályba sorolhatók.'
path: 'graph'
related_dimat: ['ch19']
related_ila: ['ch16']
related_exercises: []
formulas:
  - '$V = A \\cup B$, $A\\cap B=\\emptyset$, $E\\subseteq A\\times B$'
  - '$G$ páros $\\iff$ nincs benne páratlan hosszúságú kör'
  - '$K_{m,n}$: $|E| = mn$'
---
A **páros (bipartit) gráf** csúcsai két diszjunkt osztályba oszthatók úgy, hogy élek csak a két osztály *között* futnak.

## Definíció

$$V = A \\cup B, \\quad A \\cap B = \\emptyset, \\quad E \\subseteq \\{\\{a, b\\}\\colon a\\in A, b\\in B\\}$$

Nincs él ugyanazon osztály két csúcsa között.

## Teljes páros gráf $K_{m,n}$

Minden $A$-beli csúcs minden $B$-belivel össze van kötve. $|E(K_{m,n})| = m\\cdot n$.

## Karakterizáció

> Egy gráf akkor és csak akkor páros, ha **nem tartalmaz páratlan hosszúságú kört**.

Bizonyítás: kétszínezzük a csúcsokat a BFS-fa szintjei szerint; páratlan kör végén „rossz színhez" érnénk.

## Kétszínezhetőség

A páros gráfok pontosan a **2-színezhető** gráfok. BFS-sel $O(|V|+|E|)$ időben eldönthető.

### „Piros-kék" algoritmus

1. **Kezdés:** válassz egy tetszőleges $v_0$ csúcsot, színezd **pirosra**.
2. **Terjesztés (BFS):** a sorbavevés során minden új csúcsot az aktuálissal **ellentétes** színűre festsd (piros szomszédja kék, kék szomszédja piros).
3. **Ellenőrzés:** amikor egy él egy már színezett csúcshoz vezet, ellenőrizd:
   - ha a két végpont **különböző** színű → rendben, folytasd,
   - ha **azonos** színű → **konfliktus**: a gráf *nem páros*, és találtál egy páratlan hosszúságú kört.
4. Folytasd, amíg minden csúcsot beszínezel; ha minden komponens átment ellenőrzés nélkül → **páros**.

Komplexitás: $O(|V|+|E|)$. Megjegyzés: a **2-szín** színezhetőség eldöntése *könnyű*, de már a **3-szín** színezhetőség (általában: kromatikus szám) **NP-teljes** — drámai komplexitás-ugrás.

## Matching (párosítás)

Páros gráfokban a párosítás külön fontos téma:

- **Maximális matching** = legtöbb diszjunkt él.
- **Hopcroft–Karp**: $O(\\sqrt{|V|}\\,|E|)$ algoritmus.
- **Hall-tétel** és **König-tétel** (lásd \`tétel 29\`).

### Reguláris gráf → 1-faktor

> **Tétel:** Tetszőleges $k$-reguláris páros gráfban mindig létezik **teljes párosítás** (1-faktor).

**Bizonyítás:** a Hall-feltétel ($|N(X)| \\geq |X|$ minden $X \\subseteq V_1$-re) automatikusan teljesül, mert mind $X$-ből, mind $N(X)$-ből pontosan $k|X|$, illetve $\\leq k|N(X)|$ él indul; ezek egybeesnek, így $|N(X)| \\geq |X|$.

**Következmény:** minden $k$-reguláris páros gráf felbomlik **éldiszjunkt 1-faktorok uniójára** (az 1-faktor eltávolítása után a maradék $(k-1)$-reguláris, indukció). Ez az alapja pl. a sportligák körmérkőzés-ütemezésének: az $n$-csapatos liga ($n$ páros) felosztható $n-1$ fordulóra úgy, hogy minden csapat minden másikkal pontosan egyszer játsszon.

## Mantel-tétel (extremális élszám háromszög-mentes gráfokra)

> **Tétel:** $n$ csúcsú **háromszög**-mentes ($C_3$-mentes) egyszerű gráfban legfeljebb $\\lfloor n^2/4 \\rfloor$ él lehet.

A maximumot pontosan a **teljes páros gráf** $K_{\\lfloor n/2 \\rfloor, \\lceil n/2 \\rceil}$ éri el — egy páros gráf nyilván nem tartalmaz páratlan kört, így háromszöget sem. **Speciális eset:** $n = 6$-ra max 9 él ($K_{3,3}$), $n=10$-re 25 él ($K_{5,5}$).

A Mantel-tétel a **Turán-tétel** ($K_{r+1}$-tiltó) speciális esete $r=2$-re (lásd \`tétel 17\`).

## Alkalmazások

- assignment problem (munkás ↔ feladat, diák ↔ kollégium),
- recommendation rendszerek (user ↔ item),
- ütemezés, erőforráselosztás,
- páros gráfok ↔ 0-1 mátrixok ↔ kombinatorikus tervek.

## Spektrum

A páros gráfok adjacencia-mátrixának spektruma **szimmetrikus** $0$-ra: ha $\\lambda$ sajátérték, akkor $-\\lambda$ is.

## Intuíció

A páros gráf két különálló „világ" közötti kapcsolatmodell — azonos típusú objektumok nem kapcsolódnak közvetlenül, csak a másik oldalhoz. ⚖️
`,se=`---
n: 29
title: 'Kőnig-Hall-Ore tételek'
glossary: 'Páros gráfok párosításaira és lefedéseire vonatkozó alapvető tételek.'
path: 'graph'
related_dimat: ['ch19']
related_ila: ['ch16']
related_exercises: []
formulas:
  - 'König: $\\nu(G) = \\tau(G)$ páros gráfra'
  - 'Hall: matching létezik $\\iff$ $|N(S)|\\geq|S|$ minden $S\\subseteq A$'
  - 'Ore: $d(u)+d(v)\\geq n \\Rightarrow$ Hamilton-kör'
---
Ezek a tételek páros gráfok párosításairól és Hamilton-tulajdonságokról szólnak — central matching és lefedési eredmények.

## Alapfogalmak

Egy $G = (V, E)$ gráfra:

- **Független élhalmaz / párosítás (matching)** $F \\subseteq E$: páronként diszjunkt élek; $e_i \\cap e_j = \\emptyset$ minden $i\\neq j$-re.
- **Lefedő élrendszer**: olyan $F \\subseteq E$, ami minden csúcsot érint ($\\cup F = V$).
- **Teljes párosítás / 1-faktor**: független **és** lefedő — minden csúcs pontosan egy él végén van.
- **Lefogó pontrendszer (vertex cover)** $Y \\subseteq V$: minden élnek legalább egy vége $Y$-ban van („rajzszögek" minden élre).
- **Szomszédság-halmaz** $N(X) := \\{y \\in V \\colon \\exists x\\in X, \\{x,y\\}\\in E\\}$.
- **$\\nu(G) = M(G)$**: maximum párosítás mérete.
- **$\\tau(G) = m(G)$**: minimum lefogó pontrendszer mérete.

### Alapegyenlőtlenség

Tetszőleges (nem feltétlenül páros) $G$ gráfra:

$$\\tau(G) \\geq \\nu(G)$$

**Bizonyítás:** minden párosítás-élnek a két végéből legalább az egyikre kell egy fedő csúcs, és különböző matching-élek diszjunktak — így $\\tau \\geq \\nu$. Általában az egyenlőség *nem* áll: pl. $K_3$-ra $\\nu = 1, \\tau = 2$; $C_{2n+1}$-re $\\nu = n, \\tau = n+1$.

## Kőnig tétele (1916)

> **Tétel:** Páros gráfra $\\nu(G) = \\tau(G)$.

Vagyis a páros gráfok a „min–max dualitás" osztálya — itt a maximum párosítás és a minimum lefogó pontrendszer méretei megegyeznek. **Kőnig Dénes** (1884–1944) magyar matematikus a modern gráfelmélet egyik megalapozója; a tétel a játékelmélet, hálózati folyamok és LP-dualitás alapvető prototípusa.

### Augmenting paths algoritmus (a tétel bizonyítása)

A Kőnig-tétel bizonyítása konstruktív — egy gyors algoritmus:

- **Alternáló út**: olyan út, amelyben a már matching-beli („kövér") és nem matching-beli („sovány") élek váltakoznak.
- **Javító út**: olyan alternáló út, amelynek **mindkét végén sovány** él van és a két végpont *nem* fedett.
- **Növelés**: a javító út mentén cseréljük fel a kövér/sovány élszerepeket — a matching mérete pontosan 1-gyel nő.
- **Stop**: ha már nincs javító út, a matching maximális; ekkor a $B_2 \\cup A_3$ halmaz (lásd a tankönyvi ábrát) pontosan a minimum lefogó pontrendszer, $|B_2 \\cup A_3| = \\nu(G)$.

Komplexitás: $O(n \\cdot |E|)$ ügyes adattároláshoz, vagy $O(\\sqrt{|V|}\\,|E|)$ a **Hopcroft–Karp** finomítással. (Max-folyam algoritmusokra is visszavezethető — \`tétel 17\` Ford–Fulkerson.)

### Kőnig ↔ Hall — ekvivalencia

A Kőnig-tétel és a Hall-tétel **logikailag ekvivalensek** (egymásból egyszerű érveléssel kihozhatók). Történetileg Kőnig 1916-os állítása előbb született, Hall 1935-ben publikálta az „illeszkedési" formát.

## Hall-tétel

Egy páros gráfban az $A$-oldal *minden* csúcsa párosítható $B$-be akkor és csak akkor, ha **Hall-feltétel** teljesül:

$$|N(S)| \\geq |S| \\quad \\forall S\\subseteq A$$

ahol $N(S)$ az $S$ szomszédainak halmaza.

**Intuíció:** bármely csúcshalmaznak legalább annyi külön „választási lehetősége" kell legyen, ahányan vannak. Klasszikus példa: diákok és kollégiumi szobák, munkások és feladatok.

## Ore tétele

(Általános gráfokra, Hamilton-feltétel)

Ha minden nem szomszédos $u, v$ csúcspárra:

$$d(u) + d(v) \\geq n$$

akkor a gráf Hamilton-kört tartalmaz. Dirac tételének általánosítása.

## König–Egerváry-algoritmus

Maximum matching páros gráfban: $O(\\sqrt{|V|}\\,|E|)$ Hopcroft–Karp módszerrel, vagy max-flow redukcióval.

## Súlyozott eset

A *hungarian algoritmus* $O(n^3)$ időben megoldja a teljes súlyozott assignment problémát.

### „Hungarian Method" — a magyar gráfelméleti iskola

A „Hungarian Method" elnevezést **Harold Kuhn** amerikai matematikus adta 1955-ben, amikor az általa kidolgozott súlyozott-páros-gráf párosítási algoritmust publikálta. A módszer matematikai alapját azonban **Kőnig Dénes** (1916, Kőnig-tétel) és **Egerváry Jenő** (1931, lefedés-dualitás súlyozott eset) magyar matematikusok rakták le — innen az elnevezés.

Ez része egy nagyobb hagyatéknak: a **magyar gráfelméleti iskolának**, amelyhez Erdős Pál, Rényi Alfréd, Turán Pál, Hajnal András, Gallai Tibor, Lovász László és Babai László is tartozik. Számos klasszikus eredmény (Turán-tétel, Erdős–Ko–Rado, Erdős–Rényi véletlen gráfok, Lovász local lemma) magyar matematikusokhoz fűződik — ezért a gráfelmélet egyik szellemi szülőhazája Magyarország.

### Mérnöki alkalmazás: csuklós szerkezetek stabilitása

A 4-szög rácsból álló merevített csuklós szerkezetek **stabilitása** páros gráffal modellezhető: a vízszintes és függőleges rúdsorok két csúcsosztály, az átlós merevítések az élek. A szerkezet pontosan akkor stabil, ha a megfelelő bipartit gráf összefüggő. (Bolyai János ezt is felismerte, bár anyaga csak halála után került elő.) Ezt az ELTE építészmérnök kar évtizedeken át használta tetőszerkezet-tervezésnél.

## Alkalmazások

- assignment problem,
- recommendation rendszerek,
- network routing,
- scheduling,
- LP-dualitás bemutatása.

## Intuíció

Ezek a tételek a gráfelmélet „összepárosító mechanikái": megmondják, mikor lehet egy hálózatban minden szereplőt megfelelően összekötni vagy bejárni. 🔗
`,le=`---
n: 30
title: 'Prímfelbontás'
glossary: 'Egész számok prímtényezőkre bontásának algoritmikus problémája.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch17']
related_exercises: []
formulas:
  - '$n = p_1^{a_1} p_2^{a_2}\\cdots p_k^{a_k}$ (egyértelmű)'
  - '$360 = 2^3 \\cdot 3^2 \\cdot 5$'
---
A prímfelbontás egy pozitív egész szám felírása prímszámok szorzataként.

## Az aritmetika alaptétele

Minden $n > 1$ egész szám **egyértelműen** írható fel prímszámok szorzataként:

$$n = p_1^{a_1} p_2^{a_2} \\cdots p_k^{a_k}$$

ahol $p_1 < p_2 < \\dots < p_k$ prímek, $a_i$ pozitív egészek.

## Példa

$$360 = 2^3 \\cdot 3^2 \\cdot 5$$

## Multihalmaz-szemlélet

Minden pozitív egészhez hozzárendelhető a benne szereplő prímek **multihalmaza** (mert egy prím többször is szerepelhet):

- $12 \\;\\to\\; \\{2, 2, 3\\}$
- $18 \\;\\to\\; \\{2, 3, 3\\}$
- $1 \\;\\to\\; \\emptyset$ (üres halmaz)

Ebben a nyelven a számelméleti műveletek halmazműveletekké válnak:

| Számelmélet | Multihalmaz-művelet |
|---|---|
| Szorzás ($a\\cdot b$) | unió („összeöntés") |
| Osztás (maradék nélkül) | halmazkivonás |
| $\\gcd(a, b)$ | metszet (közös prímek minimális kitevővel) |
| $\\mathrm{lcm}(a, b)$ | unió (összes prím maximális kitevővel) |
| Oszthatóság $a \\mid b$ | $a$ multihalmaza részhalmaza $b$-ének |

### Kulcsidentitás

$$\\gcd(a, b) \\cdot \\mathrm{lcm}(a, b) = a \\cdot b$$

Bizonyítás multihalmazokkal: minden prímre $\\min(\\alpha_p, \\beta_p) + \\max(\\alpha_p, \\beta_p) = \\alpha_p + \\beta_p$. Gyakorlati haszna: ha a $\\gcd$-t már kiszámoltuk (Euklideszi alg. → \`tétel 33\`), az $\\mathrm{lcm}$ már csak egy osztás — **faktorizáció nem kell**.

### Jelölések

Az LNKO-ra és LKKT-re háromféle jelölés használatos:

- **Prefix:** $\\mathrm{LNKO}(a, b)$, $\\mathrm{LKKT}(a, b)$
- **Infix:** $a \\wedge b$, $a \\vee b$ (a halmazelméleti $\\cap, \\cup$ szellemében)
- **Hagyományos:** $\\gcd(a, b)$, $\\mathrm{lcm}(a, b)$

A három jelölés ugyanazt fedi; a $\\wedge / \\vee$ formák kiemelik a háló-szerkezetet (disztributivitás, De Morgan-azonosságok).

### Boole-algebra-struktúra ($D_n$ négyzetmentes $n$-re)

Ha $n$ **négyzetmentes** (nem osztható egyetlen prímszám négyzetével sem), az $n$ osztóinak halmaza $D_n = \\{d \\in \\mathbb{N}\\colon d \\mid n\\}$ a következő műveletekkel **Boole-algebrát** alkot:

| Művelet | Számelmélet | Boole-algebra |
|---|---|---|
| metszet $\\wedge$ | $\\gcd(a, b)$ | $\\cap$ |
| egyesítés $\\vee$ | $\\mathrm{lcm}(a, b)$ | $\\cup$ |
| komplemens $\\bar a$ | $n / a$ | $\\neg a$ |
| zéró elem | $1$ | $\\emptyset$ |
| egységelem | $n$ | univerzum |

Mind a kommutativitás, asszociativitás, **disztributivitás**, abszorpció, **De Morgan**-azonosságok teljesülnek. Példa $n = 30 = 2\\cdot 3\\cdot 5$: a $D_{30} = \\{1, 2, 3, 5, 6, 10, 15, 30\\}$ izomorf a $\\mathcal{P}(\\{p_1, p_2, p_3\\})$ hatványhalmazzal.

> **Algoritmikus megjegyzés:** elméletileg a $\\gcd, \\mathrm{lcm}$ kiszámítható a prímfelbontásból (lásd fent), **gyakorlatilag azonban használhatatlan**, mert a prímfelbontás drága. Az Euklideszi algoritmus (\`tétel 33\`) ezt megkerüli — anélkül találja meg a $\\gcd$-t, hogy bármelyik számot faktorizálnánk.

## Három algoritmikus alap-probléma

A nagyméretű egész számok (több száz számjegyű $n$) kezelésére **három különálló** algoritmikus problémát szoktunk megkülönböztetni:

| # | Probléma | Cél | XXI. század |
|---|---|---|---|
| (i) | **Prímtesztelés** | $n$ prímszám-e? | $P$-ben (\`tétel 31\` — AKS 2002) |
| (ii) | **Prímfelbontás** (faktorizáció) | $n$-et bontsuk fel min. 2 szám szorzatára, vagy bizonyítsuk $n \\in \\mathbb{P}$ | **nincs** ismert poly-algoritmus (RSA alapja!) |
| (iii) | **Prímgenerálás** | Adjunk meg egy $n$-nél nagyobb prímet | megoldható (\`tétel 32\`) |

**Logikai következmények:** $\\text{(ii)} \\Rightarrow \\text{(i)}$ és $\\text{(ii)} \\Rightarrow \\text{(iii)}$ — ha a faktorizáció megy, a tesztelés és generálás is. **Megfordítva nem** — az AKS poly-prímtesztel, de nem ad faktorizációt.

> **Definíció:** Az $n \\in \\mathbb{N}$ **input hossza** = $n$ számjegyeinek száma. Ha $h := $ számjegyek, akkor $n \\approx 10^h$, vagyis a számérték *exponenciális* a kódhosszban. Egy „$O(\\sqrt n)$" próbálgatós algoritmus tehát **exponenciális** $h$-ban — kódhossz alapon mérve a gyorsaságot.

> **Következmény (didaktikai):** *Prímfelbontást használó algoritmusok nem jók!* Pl. $\\gcd(a, b)$ kiszámolása faktorizáción keresztül kerülendő — az Euklideszi algoritmus (\`tétel 33\`) viszont **anélkül** dolgozik, hogy bármelyik számot faktorizálná. Általában: ha egy algoritmus a prímtényezőkre bontást *bemenetként* feltételezi, gyakorlatban használhatatlan nagy számokra.

## Nagy Prímszámtétel

A prímek aszimptotikus sűrűségét leíró Hadamard–de la Vallée Poussin-tétel (1896):

$$\\pi(n) \\sim \\frac{n}{\\log n}, \\qquad \\text{azaz} \\qquad \\frac{\\pi(n)}{n} \\sim \\frac{1}{\\log n}$$

ahol $\\pi(n)$ az $\\leq n$ prímek száma. Következmény: $k$-bites prím kereséséhez várhatóan $O(k)$ véletlen-próba elég, mert a prímek sűrűsége $1/\\log n = 1/(k \\cdot \\log 2)$. Részletek: \`tétel 32\`.

## Faktorizációs algoritmusok

### Egyszerű módszer (próbálgatásos osztás)

Vizsgáljuk az osztókat $2, 3, 5, \\dots, \\sqrt n$-ig. Komplexitás: $O(\\sqrt n)$ — kis számokra elég.

### Pollard $\\rho$

Vélelmezhető $O(n^{1/4})$ várható idő; gyors „közepes" számokra ($10^{12}$–$10^{18}$).

### Kvadratikus szita (QS)

Szub-exponenciális: $\\exp(\\sqrt{\\log n \\log\\log n})$. Klasszikus 100–150 jegyű számokra.

### Number Field Sieve (GNFS)

Heurisztikus $\\exp\\!\\big((c+o(1))(\\log n)^{1/3}(\\log\\log n)^{2/3}\\big)$ — a legjobb klasszikus algoritmus jelenleg, RSA-méretű számokra.

## Kvantum: Shor-algoritmus

Polinomiális idejű kvantumalgoritmus a faktorizációra. Ez az **RSA legnagyobb hosszú távú veszélye** — ezért a posztkvantum-kriptográfia.

## Kapcsolat RSA-val

Az RSA biztonsága a faktorizáció nehézségén alapul: $n = p\\cdot q$ szorzatból $p, q$ visszanyerése (lásd \`tétel 39\`).

## Komplexitás

A faktorizáció **nem** ismert polinomiális idejűnek klasszikus számítógépen, de **nem is bizonyított NP-teljes** — különleges köztes állapot ($NP \\cap \\text{co-}NP$).

## Intuíció

A prímfelbontás egy szám „molekuláris szerkezete": minden összetett szám prím-atomokra bontható, egyértelmű módon. ⚛️
`,ie=`---
n: 31
title: 'Prímtesztelés'
glossary: 'Annak eldöntése, hogy egy szám prím-e.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch17']
related_exercises: []
formulas:
  - 'Fermat: prím $p$, $\\gcd(a, p)=1 \\Rightarrow a^{p-1}\\equiv 1\\pmod p$'
  - 'Miller–Rabin: gyors probabilisztikus teszt'
  - 'AKS: első determinisztikus polinomiális prímteszt (2002)'
---
A prímtesztelés annak eldöntése, hogy egy egész szám prímszám-e.

## Naív módszer

Vizsgáljuk az osztókat $2, 3, \\dots, \\sqrt n$-ig. Komplexitás $O(\\sqrt n)$ — csak kis számokra praktikus.

Miért elég $\\sqrt n$-ig? Ha $n = ab$, akkor legalább az egyik tényező $\\leq \\sqrt n$.

### Miért exponenciális ez valójában?

A számítástudományban a bemenet **mérete** a számjegyek/bitek száma, *nem* maga az érték. Ha $n$ egy **1000 jegyű** szám, akkor a fájl mérete 1000 karakter, de $n \\approx 10^{1000}$, így a próbálgatásos osztás

$$\\sqrt n \\approx 10^{500}$$

lépést igényel — ez egyetlen szám eldöntéséhez **évmilliárdokon át** futna a leggyorsabb mai gépeken is. A bit-méret szerint $\\sqrt n$ tehát **exponenciális**. Innen ered a 21. századi algoritmikus számelmélet egyik fő kérdése: létezik-e *polinomiális* (bit-méretben) prímteszt? — Az AKS válasza igen.

## Fermat-prímteszt

A *Fermat kis tétel* szerint ha $p$ prím és $\\gcd(a, p) = 1$:

$$a^{p-1} \\equiv 1 \\pmod p$$

Ha valamilyen $a$-ra ez nem áll, $p$ biztosan összetett. Probléma: léteznek *Carmichael-számok* (pl. $561, 1105, \\dots$), amelyek minden bázisra „prímnek tűnnek" — ezért Fermat magában nem megbízható.

### Történeti érdekesség — Bolyai János és az álprímek

**Bolyai János** — bár világhírűvé a nem-euklideszi geometriával vált — a számelmélettel is komolyan foglalkozott. Megpróbálta megfordítani Fermat tételét prímtesztelés céljából: ha $a^{p-1} \\equiv 1 \\pmod p$ teljesül *minden* $a$-ra, akkor $p$ szükségképpen prím-e? Ő jött rá először, hogy ez **nem igaz** — léteznek *pszeudoprímek* (álprímek), összetett számok, amelyek néhány vagy minden bázisra teljesítik a fenti kongruenciát.

Tragikus módon Bolyai számelméleti jegyzetei évtizedekig **publikálatlanul, egy zárt ládában maradtak** a marosvásárhelyi hagyatékban; csak halála után kerültek elő, mire mások már (újra)felfedezték az eredményeit. Ma a Carmichael-számok ezeknek a pszeudoprímeknek egy szigorúbb osztálya (minden $\\gcd(a, n) = 1$ bázisra teljesítik).

## Miller–Rabin

A jelenlegi „munkásparipa" probabilisztikus algoritmus. Megpróbáljuk az $a^{n-1}-1$ négyzetgyökeit modulo $n$:

$$n - 1 = 2^s \\cdot d, \\quad d \\text{ páratlan}$$

Egy $a$ bázis *tanú* arra, hogy $n$ összetett, ha:

$$a^d \\not\\equiv 1 \\pmod n \\;\\text{és}\\; a^{2^r d} \\not\\equiv -1 \\pmod n \\;\\forall\\, 0 \\leq r < s$$

Ha $k$ véletlen bázist próbálunk, a hibavalószínűség $\\leq 4^{-k}$. Gyakorlatban $k=20$ már elfogadható.

## AKS-algoritmus (2002)

Az **első** determinisztikus, polinomiális idejű prímteszt: $\\tilde O((\\log n)^6)$. Elméletileg fontos, de a Miller–Rabin gyakorlati gyorsabb.

## ECPP

*Elliptic Curve Primality Proving* — bizonyítható prím-igazolás elliptikus görbék segítségével.

## Prímtesztelés vs faktorizáció

| | Tesztelés | Faktorizáció |
|---|---|---|
| Komplexitás | $P$-ben (AKS) | nincs polinomiális klasszikus algoritmus |

## Alkalmazások

- RSA kulcsgenerálás,
- kriptográfiai protokollok,
- véletlenszám-generátorok kiértékelése,
- számelméleti algoritmusok.

## Intuíció

A prímtesztelés „hitelesítés": eldönteni, hogy a szám atom, vagy csak álcázott összetett objektum. 🧪
`,re=`---
n: 32
title: 'Prímgenerálás'
glossary: 'Prímszámok előállítására szolgáló algoritmusok vizsgálata.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch17']
related_exercises: []
formulas:
  - 'Eratoszthenész szitája: $O(n\\log\\log n)$'
  - 'Prímszámtétel: $\\pi(n)\\sim \\dfrac{n}{\\ln n}$'
  - 'Véletlen-bit + Miller–Rabin a gyakorlatban'
---
A prímgenerálás algoritmusokkal foglalkozik, amelyek prímeket állítanak elő (kis tartományban) vagy keresnek (nagy számokra).

## Eratoszthenész szitája

Klasszikus algoritmus $1\\dots n$ közti prímek listájához:

\`\`\`
sieve = [True]*(n+1); sieve[0]=sieve[1]=False
for p in range(2, int(n**0.5)+1):
    if sieve[p]:
        for k in range(p*p, n+1, p):
            sieve[k] = False
primes = [i for i,v in enumerate(sieve) if v]
\`\`\`

Komplexitás $O(n\\log\\log n)$.

### Lineáris (Euler) szita

$O(n)$ idő alatt megtalál minden prímet $\\leq n$. Minden összetett számot a legkisebb prímosztójával keresztezünk ki, így minden szám pontosan egyszer megy át.

## Nagy prímek generálása

Kriptográfiában (RSA, DH, ECC) gyakori módszer:

1. Generálj véletlen bittel egy páratlan $n$-et a kívánt nagyságrendben.
2. Próbaosztással vesd el azokat, amelyeknek kis prímosztói vannak.
3. Futtasd Miller–Rabin tesztet $k$ bázissal.
4. Ha átment, $n$ „nagy valószínűséggel" prím.
5. Egyébként $n \\leftarrow n + 2$, próbáld újra.

## Prímszámtétel

A prímek ritkulnak, de végtelenül vannak:

$$\\pi(n) \\sim \\dfrac{n}{\\ln n}$$

ahol $\\pi(n)$ a $\\leq n$ prímek száma. Ezért $k$-bites prím keresése várhatóan $O(k)$ próba elegendő.

### Történeti háttér

A formulát eredetileg **Gauss** sejtette meg a 19. század elején a kor prímtáblázatait tanulmányozva (köztük magyar matematikusok által összeállított táblákat). Független bizonyítást **Hadamard** és **Charles de la Vallée Poussin** adott 1896-ban; később **Hardy** és **Littlewood** finomította az aszimptotikát hibatag-becslésekkel. Pontosabb közelítés a *logaritmikus integrál*:

$$\\pi(n) \\sim \\mathrm{Li}(n) = \\int_2^n \\dfrac{dt}{\\ln t}$$

ami jobban illeszkedik a tényleges $\\pi(n)$ értékhez, mint $n/\\ln n$.

## Speciális prímtípusok

- **Mersenne-prímek**: $M_p = 2^p - 1$ alakú prímek (Lucas–Lehmer-teszt).
- **Sophie Germain-prímek**: $p$ és $2p+1$ is prím.
- **Ikerprímek**: $(p, p+2)$ párok.
- **Biztonságos prímek** (RSA-hoz): $p = 2q + 1$, ahol $q$ is prím.

## Determinisztikus kis-bázisok

$n < 3{,}3 \\times 10^{14}$ esetén a Miller–Rabin **bizonyítottan determinisztikus** ha a $\\{2, 3, 5, 7, 11, 13, 17, 19, 23\\}$ bázisokat teszteljük.

## Rossz prímválasztás — RSA-szempontok

Önmagában a „nagy prímet generálok" még nem elég a biztonsághoz. Tipikus csapdák:

- **$p$ és $q$ túl közel:** ha $|p - q|$ kicsi, a **Fermat-féle faktorizáció** (próbáljuk $n = a^2 - b^2$ alakra hozni) szinte azonnal megtalálja $p, q$-t. Ezért $|p - q|$ legyen legalább $2^{(\\text{bitméret}/2) - 100}$ nagyságrendű.
- **$p - 1$ vagy $q - 1$ kicsi prímtényezőkből áll:** ekkor a **Pollard $p-1$ algoritmus** gyorsan faktorizál. Védekezés: használj *biztonságos prímeket* ($p = 2p' + 1$, ahol $p'$ is prím).
- **Hasonló alakú prímtényezők** (pl. $p \\approx q \\cdot c$ kis $c$-vel) szintén feltörhetők.
- **Rossz véletlenforrás** — ha $p$ vagy $q$ rossz entrópiából jön, a **Coppersmith-támadás** és a *batch GCD* több kulcs között gyorsan közös tényezőket talál (2012-es Lenstra-tanulmány: \\~0.4% of internetes RSA-kulcs feltörhető volt így).

Ezért a gyakorlatban: kriptográfiai entrópiaforrást használj, generálj két **független** prímet ugyanabban a bitméret-tartományban, ellenőrizd $|p-q|$-t és $p-1, q-1$ prímosztóit.

## Alkalmazások

RSA, Diffie–Hellman, ElGamal, ECDSA, blokkláncok, véletlenszám-generátorok validálása.

## Intuíció

A prímgenerálás ritka matematikai kristályok keresése: a számok óceánjában találunk olyanokat, amelyeknek nincs nem-triviális osztója. 💎
`,oe=`---
n: 33
title: 'Euklideszi algoritmus'
glossary: 'Két szám legnagyobb közös osztójának hatékony meghatározási módszere.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch17']
related_exercises: []
formulas:
  - '$\\gcd(a, b) = \\gcd(b, a \\bmod b)$'
  - 'Komplexitás: $O(\\log \\min(a,b))$'
  - 'Kiterjesztett: $ax + by = \\gcd(a,b)$'
---
Az Euklideszi algoritmus két egész szám legnagyobb közös osztóját (LKÖ, $\\gcd$) számolja ki gyorsan.

## Alapelv

$$\\gcd(a, b) = \\gcd(b, a \\bmod b)$$

Az osztási maradékkal cseréljük az aktuális $a, b$ párt.

## Algoritmus

\`\`\`
function gcd(a, b):
    while b != 0:
        a, b = b, a mod b
    return a
\`\`\`

## Példa: $\\gcd(84, 30)$

$$84 = 30 \\cdot 2 + 24$$
$$30 = 24 \\cdot 1 + 6$$
$$24 = 6 \\cdot 4 + 0$$

Tehát $\\gcd(84, 30) = 6$. (Az **utolsó nem nulla maradék**.)

**Jelölési tipp:** írhatjuk a maradékokat $\\langle 24 \\rangle, \\langle 6 \\rangle, \\langle 0 \\rangle$ alakban, hogy a hányadosoktól (amelyek a $\\gcd$ szempontjából lényegtelenek) megkülönböztessük őket. Ez később, a kiterjesztett változatnál (lásd \`tétel 34\` — *visszafejtés*) különösen hasznos.

## Miért áll meg? — Végtelen leszállás

A *descente infinie* elve: a maradékok szigorúan csökkenő pozitív egészek

$$|b| > r_1 > r_2 > \\dots \\geq 0$$

A pozitív egészek halmazában nincs végtelen szigorúan csökkenő lánc (jól-rendezettség), így **véges sok lépésben** $r_k = 0$ lesz, és az eljárás megáll. A megelőző $r_{k-1}$ a $\\gcd$.

Az invariáns, hogy minden lépésnél $\\gcd(a, b) = \\gcd(b, a \\bmod b)$ ugyanúgy érvényes, így a kezdeti $\\gcd$ a folyamat végén $\\gcd(r_{k-1}, 0) = r_{k-1}$.

## Komplexitás — Lamé-tétel (1844)

> **Tétel (Gabriel Lamé, 1795–1870, francia matematikus):** Az Euklideszi algoritmus $a, b$ párra (ahol $|a| \\geq |b|$) legfeljebb $m \\leq 5 \\log_{10} |b|$ lépésben terminál.

Vagyis a lépésszám **lineáris a $b$ számjegyeinek számában**, nem a $b$ értékében — exponenciális gyorsulás a triviális próbálgatáshoz képest. Ez a számelmélet **első** ismert polinom-idejű algoritmusa (1844-ben publikálva), és Lamé-tétel az **első olyan eredmény az algoritmusok komplexitásáról**, amit szigorúan bizonyítottak — több mint 100 évvel a komplexitáselmélet hivatalos megalapítása előtt.

$$O(\\log \\min(a, b))$$

A Fibonacci-számok adják a legrosszabb esetet — egymást követő Fibonacci-számok pár $\\gcd(F_{n+1}, F_n)$ pontosan $n$ Euklideszi-lépést igényel, mert $F_{n+1} = F_n \\cdot 1 + F_{n-1}$. Az aranymetszés $\\varphi = (1+\\sqrt 5)/2$ szerepe: $F_n \\sim \\varphi^n / \\sqrt 5$, így a lépésszám $\\sim \\log_\\varphi n$.

### Konkrét nagy példa

$\\gcd(5\\,170\\,549,\\; 4\\,195\\,813) = ?$

| | osztandó | $=$ osztó $\\cdot$ hányados $+$ maradék |
|---|---|---|
| | $\\langle 5170549 \\rangle$ | $= \\langle 4195813 \\rangle \\cdot 1 + \\langle 974736 \\rangle$ |
| | $\\langle 4195813 \\rangle$ | $= \\langle 974736 \\rangle \\cdot 4 + \\langle 296869 \\rangle$ |
| | $\\langle 974736 \\rangle$ | $= \\langle 296869 \\rangle \\cdot 3 + \\langle 84129 \\rangle$ |
| | $\\langle 296869 \\rangle$ | $= \\langle 84129 \\rangle \\cdot 3 + \\langle 44482 \\rangle$ |
| | $\\langle 84129 \\rangle$ | $= \\langle 44482 \\rangle \\cdot 1 + \\langle 39647 \\rangle$ |
| | $\\langle 44482 \\rangle$ | $= \\langle 39647 \\rangle \\cdot 1 + \\langle 4835 \\rangle$ |
| | $\\langle 39647 \\rangle$ | $= \\langle 4835 \\rangle \\cdot 8 + \\langle 967 \\rangle$ |
| | $\\langle 4835 \\rangle$ | $= \\langle 967 \\rangle \\cdot 5 + \\langle 0 \\rangle$ |

Tehát $\\gcd(5170549, 4195813) = 967$. 8 lépés, $\\log_{10}(4195813) \\approx 6.6$, így $5 \\cdot 6.6 = 33$-as felső korlát bőven teljesül. **Próbálgatós osztással** (osztó $2, 3, 5, \\ldots$) ehhez közel $\\sqrt{4195813} \\approx 2050$ tesztet kellene végezni — jóval lassabb.

## Algoritmus-elemzés 6 kérdése (Szalkai-féle keret)

Minden algoritmusnál érdemes szisztematikusan ellenőrizni:

1. **Megáll-e minden inputra?** — Euklidész: igen, mert $|b| > r_1 > r_2 > \\cdots > 0$ szigorúan csökkenő pozitív egészek; *descente infinie* miatt véges sok lépésben elérjük 0-t.
2. **Helyes eredmény?** — Teljes indukció *alulról felfelé*: $\\gcd(a, b) = \\gcd(b, r_1) = \\cdots = \\gcd(r_{m-1}, r_m) = r_m$.
3. **Mennyi a futási idő?** — Lamé: $O(\\log \\min(a, b))$.
4. **Milyen bonyolult?** — Egyetlen \`FOR\` ciklus, minden lépés $O(1)$ aritmetika modulo a kódhossz.
5. **Más problémákhoz használható?** — Egész számelmélet, modulo inverz, Diofantoszi egyenletek (\`tétel 34\`), CRT (\`tétel 35\`), Euler $\\varphi$ (\`tétel 36\`), RSA (\`tétel 39\`) — gyakorlatilag az **egész algoritmikus számelmélet** alapja.
6. **Egyéb?** — Kiterjeszthető Euklideszi gyűrűkre (lásd lentebb).

## Kiterjesztett Euklideszi algoritmus

Nemcsak $\\gcd$-t, hanem olyan $x, y$ egészeket is talál, hogy

$$ax + by = \\gcd(a, b)$$

Ez **modulo inverz** számolására fontos: ha $\\gcd(a, m) = 1$, akkor $a x \\equiv 1 \\pmod m$ megoldható, és $a^{-1} \\bmod m = x$.

## Bináris GCD (Stein)

Csak szorzás/osztás 2-vel és kivonás — hatékony hardver-implementáció.

## Kapcsolat prímekkel

$\\gcd(a, b) = 1$ esetén $a$ és $b$ **relatív prímek**.

## Alkalmazások

- törtek egyszerűsítése,
- modulo inverzek,
- RSA, Diffie–Hellman,
- diofantikus egyenletek (lásd \`tétel 34\`),
- kínai maradéktétel.

## Intuíció — biciklis fogaskerekek

Az algoritmus „lehántja" a közös szerkezetet maradékos osztásokkal, amíg eljut a közös magig. Egy szép fizikai szemléltetés: jelöljük meg egy **biciklilánc** két fogaskerekének — a *hajtó* (pl. 52 fog) és a *hajtott* (pl. 14 fog) — egy-egy fogát. Indítsuk el a kerékpárt; a két jelölt fog csak akkor kerül újra egyszerre az érintkezési pontba, amikor a hajtó kerék $\\mathrm{lcm}(52, 14)/52$ teljes fordulatot tett (a hajtott pedig $\\mathrm{lcm}(52, 14)/14$-et). A találkozási ciklus hossza megegyezik az LKKT-vel, ebből $\\gcd(52, 14) = 52\\cdot 14 / \\mathrm{lcm}$ azonnal kijön. *(A „sárga biciklis" Algebra és számelmélet feladatgyűjtemény címlapja erre az effektre utal.)*

## Általánosítás: Euklideszi gyűrűk

Az algoritmus nem csak $\\mathbb Z$-ben működik, hanem minden **Euklideszi gyűrűben** — olyan integritás-tartományokban, ahol létezik norma $\\varphi\\colon R \\setminus \\{0\\} \\to \\mathbb{N}$ úgy, hogy bármely $a, b$-re $a = b\\cdot c + d$ írható $\\varphi(d) < \\varphi(b)$ feltétellel.

**Tipikus Euklideszi gyűrűk és normáik:**

| Gyűrű | Generátor $\\alpha$ | Norma $N(a + b\\alpha)$ |
|---|---|---|
| $\\mathbb{Z}$ | — | $\\lvert a \\rvert$ |
| $\\mathbb{Z}[i]$ (Gauss-egészek) | $i$, $\\alpha^2 = -1$ | $a^2 + b^2$ |
| $\\mathbb{Z}[\\omega]$ (Eisenstein-egészek) | $\\omega = e^{2\\pi i/3}$, $\\alpha^2 + \\alpha + 1 = 0$ | $a^2 - ab + b^2$ |
| $\\mathbb{Z}[\\sqrt 2]$ | $\\sqrt 2$, $\\alpha^2 - 2 = 0$ | $\\lvert a^2 - 2b^2 \\rvert$ |
| $F[x]$ test felett | — | $\\deg(f) + 1$ |
| $R[[x]]$ formális hatványsor | — | legkisebb nemzéró együttható indexe |

Gauss-egészekben például $\\gcd(6 + 6i,\\; 5 + 3i)$ kiszámítható a megszokott módon. Az algebrai számelméletben ezek kulcsfontosságúak (Fermat 2-négyzet-tétele, Pell-egyenletek, kvadratikus reciprocitás).

### Ellenpélda: amit *nem* nyerünk

A $(\\mathbb{Z} \\cdot 2, +, \\cdot)$ páros-szám-gyűrű **nem** Euklideszi: nincs $1$ egységelem, és nem teljesül az egyértelmű prímfelbontás. Például

$$60 = 2 \\cdot 30 = 6 \\cdot 10$$

két különböző felbontás **irreducibilis** elemekre (sem 2, sem 6, sem 10, sem 30 nem írható tovább 2-szorzatként a páros számok között). Ez mutatja, hogy a $\\gcd$/LCM elmélet **az egységelem és az egyértelmű prímfelbontás** együttesétől függ.

Kicsi, elegáns, és brutálisan hatékony — a kriptográfia minden modern rendszerében ott fut. ⚙️
`,ke=`---
n: 34
title: 'Lineáris diofantikus egyenletek'
glossary: 'Egész megoldásokat kereső lineáris egyenletek vizsgálata.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch17']
related_exercises: []
formulas:
  - '$ax + by = c$'
  - 'Megoldható $\\iff \\gcd(a,b)\\mid c$'
  - 'Általános: $x = x_0 + \\tfrac{b}{d} t$, $y = y_0 - \\tfrac{a}{d} t$'
---
A lineáris diofantikus egyenletek olyan lineáris egyenletek, amelyekben egész megoldásokat keresünk. (Diophantus, i.e. III. század.)

## Általános alak

$$ax + by = c$$

ahol $a, b, c$ adott egészek, $x, y$ keresett egészek.

## Mikor van megoldás?

$$ax + by = c \\text{ megoldható} \\iff \\gcd(a, b) \\mid c$$

**Bizonyítás:** legyen $d = \\gcd(a, b)$. $d \\mid a$ és $d \\mid b$, így $d \\mid ax + by$, ezért $d \\mid c$ szükséges. Visszafelé a kiterjesztett Euklideszi algoritmus konstruál megoldást.

## Példa

$6x + 9y = 3$: $\\gcd(6, 9) = 3$, és $3 \\mid 3$, tehát van megoldás. Egy konkrét: $x = -1, y = 1$ ($-6 + 9 = 3$).

## Általános megoldás

Ha $(x_0, y_0)$ egy partikuláris megoldás és $d = \\gcd(a, b)$, akkor minden megoldás:

$$x = x_0 + \\dfrac{b}{d} t, \\quad y = y_0 - \\dfrac{a}{d} t, \\quad t \\in \\mathbb Z$$

Az egyikhez hozzáadjuk, a másikból levonjuk ugyanazt, így $ax + by$ értéke nem változik.

## Megoldási recept ($ax + by = c$, 5 lépés)

1. **$d$ kiszámítása:** $d = \\gcd(a, b)$ az Euklideszi algoritmussal (\`tétel 33\`).
2. **Megoldhatóság ellenőrzése:** ha $d \\nmid c$, **nincs** egész megoldás. Vége.
3. **Segédegyenlet megoldása:** keressünk olyan $u_0, v_0$ egészeket, hogy $au_0 + bv_0 = d$ (kiterjesztett Euklideszi / *visszafejtés*).
4. **Partikuláris megoldás skálázása:** $x_0 = u_0 \\cdot \\tfrac{c}{d}$, $y_0 = v_0 \\cdot \\tfrac{c}{d}$.
5. **Általános megoldás:** $x = x_0 + \\tfrac{b}{d} t$, $y = y_0 - \\tfrac{a}{d} t$ minden $t \\in \\mathbb Z$-re.

## Visszafejtés (back-substitution)

A 3. lépéshez az Euklideszi algoritmus sorait alulról felfelé olvassuk, és a maradékokat lépésről lépésre az eredeti $a, b$ kombinációjaként fejezzük ki.

### Példa: $84 u + 30 v = 6$ (mert $\\gcd(84,30)=6$)

Euklideszi lépések (lásd \`tétel 33\`):

$$84 = 30 \\cdot 2 + 24 \\quad\\Rightarrow\\quad \\langle 24 \\rangle = 84 - 30\\cdot 2$$
$$30 = 24 \\cdot 1 + 6  \\quad\\Rightarrow\\quad \\langle 6  \\rangle = 30 - 24\\cdot 1$$

Visszafejtés (a $\\langle 6 \\rangle$-be helyettesítjük a $\\langle 24 \\rangle$ kifejezést):

$$6 = 30 - (84 - 30\\cdot 2)\\cdot 1 = 30\\cdot 3 - 84\\cdot 1$$

Tehát $u_0 = -1$, $v_0 = 3$ — ellenőrzés: $84\\cdot(-1) + 30\\cdot 3 = -84 + 90 = 6$. ✓

Ha az eredeti egyenlet $84x + 30 y = 18$ lenne ($c/d = 3$), akkor $x_0 = -3$, $y_0 = 9$, és az általános megoldás $x = -3 + 5t$, $y = 9 - 14 t$.

## Geometriai jelentés

$ax + by = c$ egy egyenes a síkban; a diofantikus probléma azt kérdezi, mely pontjai vannak egész rácson.

## Kongruenciák kapcsolata

$$ax \\equiv b \\pmod m$$

ekvivalens $ax + my = b$-vel.

## Több változó

$a_1 x_1 + \\dots + a_n x_n = c$ megoldható $\\iff \\gcd(a_1, \\dots, a_n) \\mid c$.

**Megoldás indukcióval:** csökkentsük az ismeretlenek számát úgy, hogy $a_1 x_1 + a_2 x_2$ helyébe egy új ismeretlent állítunk, amelynek együtthatója $\\gcd(a_1, a_2)$; a megmaradó egyenletet ugyanígy oldjuk meg.

**Szabadsági fokok:** 2 ismeretlennél 1 paraméter ($t$) van; $n$ ismeretlennél $n-1$ szabad paraméter (ha van megoldás).

### 3-változós algoritmus — $ax + by + cz = m$

Részletes lépések:

0. **Megoldhatóság:** $\\gcd(a, b, c) \\mid m$?
1. **$d := \\gcd(a, b)$** (Euklideszivel).
2. **Segéd-egyenlet:** oldjuk meg $a x + b y = t \\cdot d$-t (paraméteres formában):
   $$x = t \\cdot x_0 + \\frac{\\mathrm{lkkt}(a, b)}{a} k, \\qquad y = t \\cdot y_0 + \\frac{\\mathrm{lkkt}(a, b)}{b} k \\quad (k \\in \\mathbb{Z})$$
3. **$\\delta := \\gcd(d, c) = \\gcd(a, b, c)$**.
4. **Külső egyenlet:** oldjuk meg $d t + c z = m$-et:
   $$t = \\frac{m}{\\delta} t_0 + \\frac{\\mathrm{lkkt}(d, c)}{d} \\ell, \\qquad z = \\frac{m}{\\delta} z_0 - \\frac{\\mathrm{lkkt}(d, c)}{c} \\ell \\quad (\\ell \\in \\mathbb{Z})$$

**Végeredmény** (két szabad paraméter $k, \\ell$):

$$\\begin{cases} x = t \\cdot x_0 + \\dfrac{\\mathrm{lkkt}(a, b)}{a} \\cdot k \\\\ y = t \\cdot y_0 + \\dfrac{\\mathrm{lkkt}(a, b)}{b} \\cdot k \\\\ z = \\dfrac{m}{\\delta} z_0 - \\dfrac{\\mathrm{lkkt}(d, c)}{c} \\ell \\end{cases} \\quad \\text{ahol } t = \\dfrac{m}{\\delta} t_0 + \\dfrac{\\mathrm{lkkt}(d, c)}{d} \\ell$$

### Konkrét példa: $12x + 30y + 15z = 18$

| Lépés | Számítás |
|---|---|
| (0) | $\\gcd(12, 30, 15) = 3 \\mid 18$ ✓ — van megoldás |
| (1) | $d = \\gcd(12, 30) = 6$ |
| (2) | $12 x + 30 y = 6 t$ általános: $x = t \\cdot (-2) + 5 k$, $y = t \\cdot 1 - 2 k$ |
| (3) | $\\delta = \\gcd(6, 15) = 3$ |
| (4) | $6 t + 15 z = 18$ általános: $t = -12 + 5 \\ell$, $z = 6 - 2 \\ell$ |

**Összesítve $k, \\ell \\in \\mathbb{Z}$ paraméterekkel:**

$$\\begin{cases} x = (-12 + 5\\ell)(-2) + 5 k = -10\\ell + 5k + 24 \\\\ y = (-12 + 5\\ell) - 2k = 5\\ell - 2k - 12 \\\\ z = -2\\ell + 6 \\end{cases}$$

**Ellenőrzés** $k = \\ell = 0$-val: $x = 24, y = -12, z = 6$ → $12 \\cdot 24 + 30 \\cdot (-12) + 15 \\cdot 6 = 288 - 360 + 90 = 18$ ✓.

### Konkrét 2-változós példa: $9867 x + 8855 y = 759$

| | osztandó | $=$ osztó $\\cdot$ hányados $+$ maradék |
|---|---|---|
| | $\\langle 9867 \\rangle$ | $= \\langle 8855 \\rangle \\cdot 1 + \\langle 1012 \\rangle$ |
| | $\\langle 8855 \\rangle$ | $= \\langle 1012 \\rangle \\cdot 8 + \\langle 759 \\rangle$ |
| | $\\langle 1012 \\rangle$ | $= \\langle 759 \\rangle \\cdot 1 + \\langle 253 \\rangle$ |
| | $\\langle 759 \\rangle$ | $= \\langle 253 \\rangle \\cdot 3 + \\langle 0 \\rangle$ |

Tehát $d = \\gcd(9867, 8855) = 253$, és $253 \\mid 759$ → van megoldás. **Visszafejtés:**

$$\\langle 253 \\rangle = \\langle 1012 \\rangle - \\langle 759 \\rangle = \\langle 1012 \\rangle - (\\langle 8855 \\rangle - 8 \\langle 1012 \\rangle) = -\\langle 8855 \\rangle + 9 \\langle 1012 \\rangle$$

$$= -\\langle 8855 \\rangle + 9 (\\langle 9867 \\rangle - \\langle 8855 \\rangle) = 9 \\cdot \\langle 9867 \\rangle - 10 \\cdot \\langle 8855 \\rangle$$

Tehát $u_0 = 9, v_0 = -10$. **Skálázás** $c/d = 759/253 = 3$:

$$x_0 = 9 \\cdot 3 = 27, \\quad y_0 = -10 \\cdot 3 = -30$$

**Általános megoldás:**

$$x = 27 + k \\cdot \\frac{8855}{253} = 27 + 35 k, \\quad y = -30 - k \\cdot \\frac{9867}{253} = -30 - 39 k \\quad (k \\in \\mathbb{Z})$$

### Páronkénti vs együttes relatív prímség

Egy gyakori csapda: a $\\gcd(a_1, \\dots, a_n) = 1$ **nem jelenti**, hogy a számok páronként is relatív prímek lennének. Ellenpélda:

$$\\gcd(6, 10, 15) = 1 \\quad\\text{de}\\quad \\gcd(6, 10) = 2,\\; \\gcd(6, 15) = 3,\\; \\gcd(10, 15) = 5$$

Egyetlen pár sem relatív prím, mégis az együttes $\\gcd$ egy. Ez fontos pl. a Kínai maradéktétel alkalmazhatóságánál (\`tétel 35\`): a CRT a *páronkénti* relatív primalitást követeli, nem a gyengébb együttest.

## Alkalmazások

- moduláris aritmetika és kongruenciák,
- modulo inverzek (RSA-ban),
- kínai maradéktétel,
- pénzváltási problémák (címletekkel),
- ütemezés, optimalizálás.

### Klasszikus szöveges feladatok

- **Bélyeg / pénzfelváltás:** ragaszthatunk-e 42 Ft értéket 4 Ft-os és 2,50 Ft-os bélyegekből? (Megoldható $\\iff \\gcd(4, 2{,}5) \\mid 42$ átskálázás után.)
- **Borfejtés / léc-fűrészelés:** 4,6 liter bort lehet-e maradéktalanul átfejteni 1 ℓ-es és 7 dℓ-es palackokba? (Diofantikus megoldhatóság a $\\gcd$-en múlik.)
- **Körpálya / busz menetrend:** két futó körönként $t_1$ és $t_2$ perces körrel — mikor és hol találkoznak? Két busz (14 / 20 perces gyakoriság) — mennyit kell várni a legrosszabb esetben? (LKKT-vel az időciklus, $\\gcd$-vel a térbeli találkozó-pontok száma.)
  - **Egyirányú futás találkozási képlet:** $t = x \\cdot \\dfrac{t_1 t_2}{t_2 - t_1}$ ($x \\in \\mathbb{N}$).
  - **Ellentétes irányban:** $t = x \\cdot \\dfrac{t_1 t_2}{t_2 + t_1}$.
  - Pl. $\\mathrm{lcm}(6, 10) = 30$ perc múlva együtt vannak a *startnál*, de már 15 perc múlva is találkoznak a pálya **felénél** — a $T$ találkozási ciklus a teljes találkozások sűrűségét adja.

### Frobenius-szám (Chicken McNugget probléma)

Ha az érmecímletek (vagy McDonald's csomagok: 6, 9, 20) **relatív prímek**, akkor véges sok természetes szám van, ami **nem** írható fel $\\sum a_i x_i$ alakban $x_i \\geq 0$-val. A legnagyobb ilyen szám a *Frobenius-szám* $g(a_1, \\dots, a_n)$.

- 2 címlettel: $g(a, b) = ab - a - b$ (Sylvester-formula). Pl. $g(6, 9) = 54 - 15 = 39$ helyett (mivel $\\gcd \\neq 1$) érdemesebb $g(3, 5) = 7$-t megnézni.
- 3+ címlettel **nincs zárt formula**; csak algoritmikus számítás (DP, gráfelméleti megoldás Frobenius-számra).
- A klasszikus „6, 9, 20 McNugget" esetén $g = 43$ — minden $\\geq 44$ darabszám előállítható.

## Intuíció

A diofantikus egyenletek a „diszkrét világ" egyenletei: nem akármilyen megoldást keresünk, csak egész rácspontokat. 🔢
`,me=`---
n: 35
title: 'Kínai maradéktétel'
glossary: 'Kongruenciarendszerek megoldását biztosító klasszikus számelméleti tétel.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch18']
related_exercises: []
formulas:
  - '$x\\equiv a_i \\pmod{m_i}$, páronként relatív prím $m_i$'
  - 'Egyértelmű megoldás mod $M = \\prod m_i$'
---
A **kínai maradéktétel (CRT)** megadja, hogyan oldjunk meg kongruenciarendszereket egyszerre.

## Kongruencia — gyors emlékeztető

Két egész szám $a, b$ **kongruens** modulo $m > 0$, ha különbségük osztható $m$-mel:

$$a \\equiv b \\pmod{m} \\;\\Longleftrightarrow\\; m \\mid (a - b) \\;\\Longleftrightarrow\\; a, b \\text{ ugyanazt a maradékot adja } m\\text{-mel osztva}$$

A „kongruens" szó latin eredetű, jelentése *megegyezik* — nem szigorú egyenlőség, hanem azonos maradék modulo $m$.

A kongruencia **ekvivalencia reláció** (reflexív, szimmetrikus, tranzitív), és **kompatibilis** az összeadással és szorzással:

$$a \\equiv b, \\; c \\equiv d \\pmod m \\;\\Longrightarrow\\; a + c \\equiv b + d, \\quad ac \\equiv bd \\pmod m$$

Ezért a $\\mathbb{Z}_m = \\{0, 1, \\dots, m-1\\}$ maradékosztály-halmaz $(\\mathbb{Z}_m, +, \\cdot)$ **kommutatív gyűrűt** alkot. **Test** akkor és csak akkor, ha $m$ prím (lásd \`tétel 36\`). Ha $m$ összetett, vannak nullosztók: pl. $20 \\cdot 22 = 440 \\equiv 0 \\pmod{110}$.

### Hétköznapi példák

- A hét napjai: napszámolás modulo $7$.
- 32-bites előjeles túlcsordulás: modulo $2^{32}$ aritmetika.
- Trigonometrikus függvények $2\\pi$-periodicitása.
- $17 \\equiv -2 \\pmod{19}$, mert $17 - (-2) = 19$ osztható 19-cel.

## A tétel

Legyenek $m_1, m_2, \\dots, m_k$ páronként relatív prímek, és $a_1, \\dots, a_k$ adottak. A rendszer

$$x \\equiv a_i \\pmod{m_i}, \\quad i = 1, \\dots, k$$

egyértelműen megoldható modulo $M = m_1 m_2 \\cdots m_k$.

## Példa — két modulus

$$x \\equiv 2 \\pmod 3, \\quad x \\equiv 3 \\pmod 5$$

Próbálgatva: $x = 8$ teljesít, és $\\gcd(3, 5) = 1$, $M = 15$, így $x \\equiv 8 \\pmod{15}$.

## Nagyobb példa — négy modulus (Szalkai 2020)

$$\\begin{cases} x \\equiv 5 \\pmod 7 \\\\ x \\equiv 2 \\pmod{12} \\\\ x \\equiv 3 \\pmod{25} \\\\ x \\equiv 0 \\pmod{11} \\end{cases}$$

**1. lépés** — modulusok páronkénti relatív prímek? $\\gcd(7, 12) = \\gcd(7, 25) = \\gcd(7, 11) = \\gcd(12, 25) = \\gcd(12, 11) = \\gcd(25, 11) = 1$ ✓. $M = 7 \\cdot 12 \\cdot 25 \\cdot 11 = 23\\,100$.

**2. lépés** — $M_i = M / m_i$ értékek és $y_i \\equiv M_i^{-1} \\pmod{m_i}$:

| $i$ | $m_i$ | $M_i = M / m_i$ | egyenlet | $y_i$ |
|---|---|---|---|---|
| 1 | $7$ | $3300$ | $y_1 \\cdot 3300 \\equiv 1 \\pmod 7$, ahol $3300 \\equiv 2 \\pmod 7$ | $y_1 = -2 \\equiv 5$ |
| 2 | $12$ | $1925$ | $y_2 \\cdot 1925 \\equiv 1 \\pmod{12}$, ahol $1925 \\equiv 5 \\pmod{12}$ | $y_2 = 5$ |
| 3 | $25$ | $924$ | $y_3 \\cdot 924 \\equiv 1 \\pmod{25}$, ahol $924 \\equiv -1 \\pmod{25}$ | $y_3 = -1 \\equiv 24$ |
| 4 | $11$ | $2100$ | $y_4 \\cdot 2100 \\equiv 1 \\pmod{11}$, ahol $2100 \\equiv -1 \\pmod{11}$ | $y_4 = -1 \\equiv 10$ |

**3. lépés** — összegezés:

$$x \\equiv \\sum_{i=1}^4 a_i \\cdot y_i \\cdot M_i = 5 \\cdot 5 \\cdot 3300 + 2 \\cdot 5 \\cdot 1925 + 3 \\cdot 24 \\cdot 924 + 0 \\cdot 10 \\cdot 2100$$

$$= 82\\,500 + 19\\,250 + 66\\,528 + 0 = 168\\,278 \\equiv 6578 \\pmod{23\\,100}$$

**Ellenőrzés:** $6578 / 7 = 939 \\cdot 7 + 5$ ✓, $6578 / 12 = 548 \\cdot 12 + 2$ ✓, $6578 / 25 = 263 \\cdot 25 + 3$ ✓, $6578 / 11 = 598 \\cdot 11 + 0$ ✓.

## Konstrukció

Legyen $M_i = M / m_i$. Számítsuk ki $y_i = M_i^{-1} \\pmod{m_i}$ (kiterjesztett Euklideszi alg.). Ekkor:

$$x = \\sum_{i=1}^k a_i M_i y_i \\pmod M$$

## Miért működik?

$M_i \\equiv 0 \\pmod{m_j}$ ha $j \\neq i$, és $M_i y_i \\equiv 1 \\pmod{m_i}$. A relatív primalitás miatt a maradékinformációk nem zavarják egymást.

## Algebrai alak (gyűrűizomorfizmus)

Ha $m_1, \\dots, m_k$ páronként relatív prímek, akkor

$$\\mathbb Z/M\\mathbb Z \\;\\cong\\; \\mathbb Z/m_1\\mathbb Z \\times \\cdots \\times \\mathbb Z/m_k\\mathbb Z$$

## Alkalmazások

- **RSA-gyorsítás**: a $c^d \\bmod n$ helyett $c^{d_p} \\bmod p$ és $c^{d_q} \\bmod q$, majd CRT-vel rakjuk össze — kb. 4× gyorsabb.
- **Párhuzamosítás nagy egészeken**: a $\\mathbb{Z}/M\\mathbb{Z} \\cong \\prod \\mathbb{Z}/m_i\\mathbb{Z}$ izomorfizmus miatt egy nagy számokon végzett **szorzás** vagy hatványozás szétdarabolható: különböző processzorokon (vagy GPU-szálakon) független $\\mathbb{Z}/m_i\\mathbb{Z}$ modulokon számolunk, majd a részeredményeket CRT-vel rakjuk össze. Klasszikus alkalmazás a *Residue Number System* (RNS) — pl. NVIDIA cuBLAS, vagy DSP-k.
- Hibajavító kódok (Reed–Solomon).
- Számítógépes algebra (Maple, Mathematica, SymPy — Gröbner-bázis számolás modulo prímek mintáján).
- Hash-rendszerek.
- Sztochasztikus szimuláció (random number generator state).

## Történeti háttér

A III. századi *Sun Zi Suanjing* matematikai kézikönyvben szerepelt először. A klasszikus probléma így hangzott:

> *„Keressük a legkisebb természetes számot, amely 3-mal osztva 2, 5-tel osztva 3, és 7-tel osztva 2 maradékot ad."*

Ez a $x \\equiv 2 \\pmod 3$, $x \\equiv 3 \\pmod 5$, $x \\equiv 2 \\pmod 7$ rendszer; megoldása $x = 23$ (és $x \\equiv 23 \\pmod{105}$).

Egy hasonló, „leszámolós" típusú feladat: melyik a legkisebb természetes szám, amely 2-vel osztva 1, 3-mal osztva 2, 4-gyel osztva 3, és 5-tel osztva 4 maradékot ad? *(Megoldás: $x = 59$, mert $x + 1$ osztható 2-vel, 3-mal, 4-gyel és 5-tel is, azaz $\\mathrm{lcm}(2,3,4,5) = 60$ többszöröse — innen $x = 59$.)*

## Intuíció

A kínai maradéktétel több különálló órarendszer szinkronizálása — a maradékfeltételek egyetlen közös ritmusba állnak össze. ⏱️
`,$e=`---
n: 36
title: 'Euler-féle $\\varphi$-függvény'
glossary: 'Egy számhoz a vele relatív prím pozitív egészek számát rendelő függvény.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch18']
related_exercises: []
formulas:
  - '$\\varphi(n) = |\\{k \\in [1,n]\\colon \\gcd(k,n)=1\\}|$'
  - '$\\varphi(p) = p-1$, $\\varphi(p^k)=p^k-p^{k-1}$'
  - '$\\varphi(n) = n\\prod_{p\\mid n}\\left(1 - \\dfrac{1}{p}\\right)$'
---
Az Euler-féle $\\varphi$-függvény (totient-függvény) megadja, hány $k \\in \\{1, \\dots, n\\}$ teljesíti $\\gcd(k, n) = 1$.

## Definíció

$$\\varphi(n) = \\left|\\{k \\in [1, n]\\colon \\gcd(k, n) = 1\\}\\right|$$

## Példa

$\\varphi(8)$: 1, 3, 5, 7 relatív prímek 8-hoz, tehát $\\varphi(8) = 4$.

## Speciális esetek

- **Prímre**: $\\varphi(p) = p - 1$.
- **Prímhatványra**: $\\varphi(p^k) = p^k - p^{k-1} = p^{k-1}(p-1)$.

## Általános formula

Ha $n = p_1^{a_1} \\cdots p_k^{a_k}$:

$$\\varphi(n) = n \\prod_{p \\mid n}\\left(1 - \\dfrac{1}{p}\\right)$$

**Példa:** $n = 12 = 2^2 \\cdot 3$:

$$\\varphi(12) = 12 \\cdot \\tfrac{1}{2} \\cdot \\tfrac{2}{3} = 4$$

### Konkrét nagyobb példa: $\\varphi(720)$ logikai szita-formulával

A formula közvetlenül felhasználható, de tanulságos végigvezetni a **logikai szita-megfogalmazást** is — ez mutatja, miért igaz a szorzat-képlet.

**Prímfelbontás:** $720 = 2^4 \\cdot 3^2 \\cdot 5$ — a 720 prímei $\\{2, 3, 5\\}$. (A kitevők a $\\varphi$ szempontjából **lényegtelenek**, csak a *különböző* prímek számítanak.)

**Szita:** azon számok közül $\\{1, 2, \\ldots, 720\\}$, amelyek **nem** relatív prímek 720-hoz, ki kell vonni. Egy szám rossz, ha osztható legalább egy 720-prímmel (2, 3 vagy 5). Inklúzió-kizárás:

$$\\varphi(720) = 720 - \\underbrace{(\\tfrac{720}{2} + \\tfrac{720}{3} + \\tfrac{720}{5})}_{\\text{egyenkénti oszthatók}} + \\underbrace{(\\tfrac{720}{6} + \\tfrac{720}{10} + \\tfrac{720}{15})}_{\\text{páros metszetek}} - \\underbrace{\\tfrac{720}{30}}_{\\text{hármas metszet}}$$

$$= 720 - (360 + 240 + 144) + (120 + 72 + 48) - 24 = 720 - 744 + 240 - 24 = \\mathbf{192}$$

**Ellenőrzés szorzatképlettel:**

$$\\varphi(720) = 720 \\cdot \\left(1 - \\tfrac{1}{2}\\right) \\cdot \\left(1 - \\tfrac{1}{3}\\right) \\cdot \\left(1 - \\tfrac{1}{5}\\right) = 720 \\cdot \\tfrac{1}{2} \\cdot \\tfrac{2}{3} \\cdot \\tfrac{4}{5} = 192 \\quad ✓$$

> **Miért ekvivalens?** A szorzat-formula $n \\prod (1 - 1/p_i)$ pontosan a szita-formula **algebrai átírása**: kibontva ugyanazt az inklúzió-kizárás szerkezetet adja vissza. Ezért nem kell tudni a $720 = 2^4 \\cdot 3^2 \\cdot 5$ pontos kitevőit a $\\varphi$-hez — csak a *különböző* prím-osztók halmaza ($\\{2, 3, 5\\}$) számít.

## Multiplikativitás

$\\varphi$ **gyengén multiplikatív**: ha $\\gcd(m, n) = 1$, akkor $\\varphi(mn) = \\varphi(m)\\varphi(n)$. ("Erősen multiplikatív" függvényekre ez minden $m, n$-re igaz lenne — $\\varphi$-re nem.)

## Redukált maradékosztályok — $\\mathbb{Z}_m^*$

A modulo $m$ maradékosztályok halmaza $\\mathbb{Z}_m = \\{0, 1, \\dots, m-1\\}$. A **redukált** maradékosztályok azok, amelyek **relatív prímek** $m$-hez:

$$\\mathbb{Z}_m^* = \\{a \\in \\mathbb{Z}_m \\colon \\gcd(a, m) = 1\\}, \\qquad |\\mathbb{Z}_m^*| = \\varphi(m)$$

Tehát $\\varphi(m)$ pontosan a redukált maradékosztályok száma. Tulajdonságok:

- A szorzásra **zárt** és **nullosztómentes** (két relatív prím elem szorzata is relatív prím $m$-hez).
- Minden $a \\in \\mathbb{Z}_m^*$ elemnek **van multiplikatív inverze** modulo $m$ (a kiterjesztett Euklideszi alg.-tal megtalálható, lásd \`tétel 33\`).
- Az **összeadásra nem zárt** (két relatív prím szám összege már nem feltétlenül az).
- $(\\mathbb{Z}_m^*, \\cdot)$ véges Abel-csoport, rendje $\\varphi(m)$ — innen Lagrange-tételből rögtön kijön Euler tétele.

**Példa** $m = 8$: $\\mathbb{Z}_8^* = \\{1, 3, 5, 7\\}$, $\\varphi(8) = 4$.

## Euler-tétel

Ha $\\gcd(a, n) = 1$:

$$a^{\\varphi(n)} \\equiv 1 \\pmod n$$

Ez Fermat kis tételének általánosítása ($\\varphi(p) = p-1$).

## RSA-kapcsolat

RSA-ban $n = pq$ két nagy prímre, ekkor

$$\\varphi(n) = (p-1)(q-1)$$

és a kulcsgenerálás $e \\cdot d \\equiv 1 \\pmod{\\varphi(n)}$.

## Számolási tulajdonságok

- $\\sum_{d \\mid n} \\varphi(d) = n$ (Gauss-formula).
- $\\varphi(n)$ páros, ha $n > 2$.

## Alkalmazások

- RSA (kulcsgenerálás, helyességi bizonyítás),
- moduláris aritmetika és $\\mathbb Z_n^\\times$ rend,
- ciklikus csoportok,
- kriptográfiai protokollok.

## Intuíció

$\\varphi(n)$ a $\\mathbb Z/n\\mathbb Z$ multiplikatív csoport rendje: hány „független" maradékosztály van modulo $n$. 📡
`,ze=`---
n: 37
title: 'Lagrange, Euler és Fermat tételei'
glossary: 'Moduláris aritmetikára és oszthatóságra vonatkozó alapvető számelméleti eredmények.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch18']
related_exercises: []
formulas:
  - 'Fermat: $p$ prím $\\land \\gcd(a,p)=1 \\Rightarrow a^{p-1}\\equiv 1\\pmod p$'
  - 'Euler: $\\gcd(a,n)=1 \\Rightarrow a^{\\varphi(n)}\\equiv 1\\pmod n$'
  - 'Lagrange: $|H| \\mid |G|$ véges csoportokra'
---
Ezek a tételek a moduláris aritmetika és csoportelmélet sarokkövei.

## Maradékosztály-gyűrű $(\\mathbb{Z}_m, \\oplus, \\odot)$

A maradékosztályok halmaza $\\mathbb{Z}_m := \\{0, 1, \\ldots, m-1\\}$ a kongruencia-osztályok reprezentánsai. Műveletek:

$$a \\oplus b := (a + b) \\bmod m, \\qquad a \\odot b := (a \\cdot b) \\bmod m$$

> **Állítás:** $(\\mathbb{Z}_m, \\oplus, \\odot)$ **mindig** kommutatív **gyűrű** (asszociativitás, kommutativitás, disztributivitás, additív 0, multiplikatív 1).
>
> **Tétel:** $(\\mathbb{Z}_m, \\oplus, \\odot)$ **test** ⟺ $m$ prímszám.

### Nullosztók

**Definíció:** Egy $(R, +, \\cdot)$ gyűrűben $a \\neq 0$ **nullosztó** (zérusosztó), ha létezik $b \\neq 0$ úgy, hogy $a \\cdot b = 0$. (Ekkor $b$ is nullosztó.)

> **Tétel:** Nullosztónak **nincs** multiplikatív inverze.

**Példa:** $20 \\cdot 22 = 440 = 4 \\cdot 110 \\equiv 0 \\pmod{110}$, így $20$ és $22$ nullosztók $\\mathbb{Z}_{110}$-ban.

> **Állítás:** Ha $m$ összetett, $\\mathbb{Z}_m$-ben van nullosztó (pl. $m = p \\cdot q$ esetén $p \\cdot q = m \\equiv 0$).
>
> **Következmény:** $m$ összetett $\\Rightarrow \\mathbb{Z}_m$ nem test.

### Reduált maradékosztályok — $\\mathbb{Z}_m^*$

$$\\mathbb{Z}_m^* := \\{x \\in \\mathbb{N} : 0 < x < m \\text{ és } \\gcd(x, m) = 1\\}$$

Az $m$-hez **relatív prím** elemek halmaza. *Példa:* $\\mathbb{Z}_{40}^* = \\{1, 3, 7, 9, 11, 13, 17, 19, 21, 23, 27, 29, 31, 33, 37, 39\\}$, így $\\varphi(40) = 16$.

> **Tétel:** $(\\mathbb{Z}_m^*, \\odot)$ **csoport** — minden elemének van multiplikatív inverze (mert $\\gcd(a, m) = 1$ esetén kiterjesztett Euklidész ad megoldást).

**Megjegyzés:** $\\mathbb{Z}_m^*$ **nem zárt** az $\\oplus$-ra (pl. $3, 9 \\in \\mathbb{Z}_{40}^*$ de $3 + 9 = 12 \\notin \\mathbb{Z}_{40}^*$). Csoport csak szorzás szempontjából.

## Fermat kis tétele

Ha $p$ prím és $p \\nmid a$:

$$a^{p-1} \\equiv 1 \\pmod p$$

**Példa:** $2^6 = 64 \\equiv 1 \\pmod 7$ ($63 = 9\\cdot 7$).

Jelentőség: a prímtesztelés alapja (Fermat-teszt → Miller–Rabin) és az RSA helyességi bizonyításának egyik összetevője.

## Euler tétele

Fermat általánosítása. Ha $\\gcd(a, n) = 1$:

$$a^{\\varphi(n)} \\equiv 1 \\pmod n$$

ahol $\\varphi$ az Euler-féle totient-függvény.

Ha $n = p$ prím, $\\varphi(p) = p-1$, és Euler tétele Fermat tételévé válik.

## Lagrange tétele (csoportelmélet)

> Véges csoportban minden részcsoport rendje osztja a csoport rendjét: $|H| \\mid |G|$.

**Elem-rendű korrolárius:** minden $g \\in G$ elem rendje osztja $|G|$-t, így

$$g^{|G|} = e \\quad \\text{(egységelem)}$$

Ebből származik a két közvetlen alkalmazás:

- **Euler-tétel** ← Lagrange a $(\\mathbb{Z}_m^*, \\odot)$ csoportra: $|G| = \\varphi(m)$, $g^{\\varphi(m)} \\equiv 1 \\pmod m$.
- **Fermat kis tétele** ← Lagrange a $(\\mathbb{Z}_p^*, \\odot)$ csoportra: $|G| = p - 1$, $g^{p-1} \\equiv 1 \\pmod p$.

Következmény: $\\mathbb Z_n^\\times$ rendje $\\varphi(n)$, és minden eleme rendje osztja $\\varphi(n)$-t — ezért Euler tétele a Lagrange-tétel speciális esete.

### Bolyai János prímteszt-kérdése

**Bolyai János** Fermat-tétel **megfordítását** vizsgálta — prímteszt céljából. Részletek: \`tétel 31\`.

> **Kérdés:** Ha $m \\in \\mathbb{Z}$ olyan, hogy $a^{m-1} \\equiv 1 \\pmod m$ teljesül **minden** $1 < a < m$-re, akkor $m$ szükségképpen prím?

**Válasz: nem** — már Bolyai is talált **álprímeket** (pszeudoprímeket): $341, 561, 1105, 1729, \\ldots$. A $561 = 3 \\cdot 11 \\cdot 17$ a legkisebb **Carmichael-szám** (minden $\\gcd(a, n) = 1$ bázisra teljesíti a Fermat-feltételt). Ez motiválta a Miller–Rabin valószínűségi prímteszt fejlesztését és végül az AKS (2002) determinisztikus polinomiális tesztet.

## Lagrange-féle polinomgyökök tétele

Polinomiális kongruencia $f(x) \\equiv 0 \\pmod p$ legfeljebb $\\deg f$ gyökkel rendelkezik (modulo prím). Például $x^2 \\equiv 1 \\pmod p$ legfeljebb 2 megoldással.

## RSA-helyesség

RSA-ban $e \\cdot d \\equiv 1 \\pmod{\\varphi(n)}$, így $a^{ed} \\equiv a \\pmod n$ minden $a$-ra (Euler tétel + CRT a $\\gcd(a, n) > 1$ esetekre).

## Alkalmazások

- prímtesztelés (Fermat, Miller–Rabin),
- RSA, Diffie–Hellman, ElGamal,
- modulo inverzek és diszkrét logaritmus,
- hibajavító kódok,
- számelméleti algoritmusok.

## Intuíció

A moduláris hatványozás kaotikusnak tűnik, de e tételek megmutatják, hogy mély **periodikus** szerkezet rejtőzik mögötte — a hatványok modulo $n$ végül „ritmusba rendeződnek". ⏳
`,ge=`---
n: 38
title: 'Nagy kitevőjű hatványozás mod $m$'
glossary: 'Hatékony algoritmus moduláris exponenciáció kiszámítására.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch18']
related_exercises: []
formulas:
  - '$a^n \\bmod m$ kiszámítása $O(\\log n)$ szorzással'
  - 'Páros: $a^n = (a^{n/2})^2$'
  - 'Páratlan: $a^n = a \\cdot a^{n-1}$'
---
A nagy kitevőjű moduláris exponenciáció: $a^n \\bmod m$ hatékonyan, anélkül hogy $a^n$ óriási számot ténylegesen kiszámítanánk.

## A kulcsötlet

A modulo műveletet **folyamatosan** alkalmazzuk:

$$(ab) \\bmod m = \\big((a \\bmod m)(b \\bmod m)\\big) \\bmod m$$

Így a részeredmények nem nőnek kontrollálatlanul.

## Gyorshatványozás (repeated squaring)

\`\`\`
def powmod(a, n, m):
    result = 1
    a = a % m
    while n > 0:
        if n & 1:
            result = (result * a) % m
        a = (a * a) % m
        n >>= 1
    return result
\`\`\`

## A kitevő bináris felbontása

Az algoritmus magja: a kitevőt **kettes számrendszerben** írjuk fel,

$$n = b_t 2^t + b_{t-1} 2^{t-1} + \\dots + b_1 2 + b_0, \\qquad b_i \\in \\{0, 1\\}$$

majd $u^n = \\prod_{b_i = 1} u^{2^i}$, ahol az $u^{2^i}$ értékeket **ismételt négyzetre emeléssel** állítjuk elő:

$$u^1, \\; u^2 = (u^1)^2, \\; u^4 = (u^2)^2, \\; u^8 = (u^4)^2, \\; \\ldots$$

Minden négyzetre emelés után **azonnal** modulo $m$-et veszünk, így a részeredmények sosem nőnek $m^2$ fölé.

## Példa: $3^{13} \\bmod 7$

$13 = 1101_2 = 8 + 4 + 1$. Számoljuk a $3$-as ismételt négyzeteit modulo 7:

$$3^1 \\equiv 3, \\; 3^2 \\equiv 2, \\; 3^4 \\equiv 4, \\; 3^8 \\equiv 2$$

A felbontásnak megfelelően (kitevőkben 1-es bitek: $2^3, 2^2, 2^0$):

$$3^{13} = 3^8 \\cdot 3^4 \\cdot 3^1 \\equiv 2 \\cdot 4 \\cdot 3 = 24 \\equiv 3 \\pmod 7$$

## Nagyobb példa: $u^{4652} \\bmod m$

Naív megközelítéssel $4651$ szorzás kellene. Bináris felbontás:

$$4652 = 4096 + 512 + 32 + 8 + 4 = 2^{12} + 2^9 + 2^5 + 2^3 + 2^2$$

Tehát ki kell számolnunk az $u^1, u^2, u^4, \\dots, u^{4096}$ értékeket (mind modulo $m$), ami **12 négyzetre emelés**. A végső szorzat csak a fenti 5 hatvány közül választott tagokból áll: **4 szorzás**. Összesen: $\\approx 16$ moduláris szorzás $4651$ helyett. RSA-méretű 2048-bites kitevőre $\\approx 3000$ szorzás $\\approx 2^{2048}$ helyett.

### Konkrét teljes futás: $6456^{4652} \\pmod{9786}$

Először $2^{13} = 8192 > 4652$ → $t = 12$ négyzetreemelés. $u[i] := u^{2^i} \\pmod{9786}$ táblázat:

| $i$ | $u[i]$ | $u[i]$ kiszámolva $(u[i-1])^2$-ből |
|---|---|---|
| 0 | $6456$ | (alap) |
| 1 | $1362$ | $6456^2 = 41\\,679\\,936 \\equiv 1362$ |
| 2 | $\\mathbf{5490}$ | $1362^2 = 1\\,855\\,044 \\equiv 5490$ |
| 3 | $\\mathbf{9006}$ | $5490^2 \\equiv 9006$ |
| 4 | $1668$ | $9006^2 \\equiv 1668$ |
| 5 | $\\mathbf{3000}$ | $1668^2 \\equiv 3000$ |
| 6 | $6666$ | $3000^2 \\equiv 6666$ |
| 7 | $7116$ | $6666^2 \\equiv 7116$ |
| 8 | $4692$ | $7116^2 \\equiv 4692$ |
| 9 | $\\mathbf{6150}$ | $4692^2 \\equiv 6150$ |
| 10 | $9396$ | $6150^2 \\equiv 9396$ |
| 11 | $5310$ | $9396^2 \\equiv 5310$ |
| 12 | $\\mathbf{2634}$ | $5310^2 \\equiv 2634$ |

**Bitfelbontás** $k = 4652 = \\mathbf{1}001000\\mathbf{1}0\\mathbf{1}\\mathbf{1}00_2$ → bitpozíciók: $\\{2, 3, 5, 9, 12\\}$ (1-es bitek). Tehát:

$$u^{4652} = u[2] \\cdot u[3] \\cdot u[5] \\cdot u[9] \\cdot u[12] \\equiv 5490 \\cdot 9006 \\cdot 3000 \\cdot 6150 \\cdot 2634$$

**Lépésenként** (mindig azonnal modulo redukcióval):

$$5490 \\cdot 9006 \\equiv 4068; \\quad 4068 \\cdot 3000 \\equiv 858; \\quad 858 \\cdot 6150 \\equiv 2046; \\quad 2046 \\cdot 2634 \\equiv \\mathbf{6864} \\pmod{9786}$$

Tehát $6456^{4652} \\equiv 6864 \\pmod{9786}$. **Összesen 12 négyzetreemelés + 4 szorzás = 16 művelet** — vs. naiv $4651$ szorzás.

> **Memória-igény:** $0$ — csak a futó $u[\\cdot]$ értéket kell tárolni. A bittáblát menet közben olvassuk a kitevőből. Klasszikus *space-efficient* algoritmus.

## Komplexitás

Naív: $O(n)$ szorzás. Gyorshatványozás: $O(\\log n)$ szorzás. RSA-méretű kulcsokra ($n$ kb. $2048$–$4096$ bites) ez óriási különbség.

## Optimalizálások

- **Montgomery-szorzás**: osztás nélküli moduláris szorzás — hardverre ideális.
- **CRT-gyorsítás** (RSA-ban): $c^d \\bmod pq$ helyett $c^{d_p} \\bmod p$ és $c^{d_q} \\bmod q$, majd CRT.
- **Sliding window**: szélesebb ablakok a Hamming-súly csökkentésére.

## Euler-tétel kapcsolata

Ha $\\gcd(a, m) = 1$, $a^n$ helyett számolhatjuk $a^{n \\bmod \\varphi(m)} \\bmod m$-t — ha ismerjük $\\varphi(m)$-t, ez tovább rövidíti a kitevőt.

## Alkalmazások

- RSA (titkosítás, visszafejtés, kulcsgenerálás),
- Diffie–Hellman kulcscsere,
- ElGamal, ECDSA,
- digitális aláírások,
- prímtesztelés (Miller–Rabin),
- blokkláncok és hash-funkciók.

## Intuíció

Nem egyesével lépkedünk a kitevőben, hanem **duplázva** ugrunk — exponenciális ugrásokkal mászunk az exponenciális hegyen. 🚀
`,de=`---
n: 39
title: 'RSA algoritmus'
glossary: 'Nyilvános kulcsú titkosítási eljárás, amely a számelmélet nehéz problémáira épül.'
path: 'szamelm'
related_dimat: []
related_ila: ['ch18']
related_exercises: []
formulas:
  - '$n = pq$, $\\varphi(n) = (p-1)(q-1)$'
  - 'Nyilvános: $(n, e)$, titkos: $d$ ahol $ed\\equiv 1\\pmod{\\varphi(n)}$'
  - 'Titkosítás: $c = m^e \\bmod n$; visszafejtés: $m = c^d \\bmod n$'
---
Az **RSA** a legismertebb nyilvános kulcsú titkosítási algoritmus (Rivest, Shamir, Adleman, 1977).

### Történeti előzmény

Clifford Cocks brit matematikus a GCHQ-nál már **1973**-ban hasonló eljárást írt le, de a titoktartási kötelezettsége miatt nem publikálhatta — a nyilvános elsőbbség így 1977-re és a Rivest–Shamir–Adleman-trióra esett.

## Alapötlet

Két nagy prím összeszorzása könnyű, de a szorzat prímtényezős felbontása nehéz (jelenleg).

### „Telefonkönyv" analógia

A nyilvános kulcsú modell lényege: minden résztvevő $(n, e)$ párja egy közös, mindenki által elérhető „telefonkönyvben" van. Bárki tud üzenetet titkosítani neki, de **csak ő** tudja visszafejteni (a saját $d$-jével). A küldő sem tudja utólag visszafejteni az általa titkosított üzenetet, ha eldobta a plaintextet.

### Skálázhatóság — miért váltja le a klasszikus rendszereket

Klasszikus szimmetrikus titkosítás $t$ résztvevő esetén $\\binom{t}{2} \\approx t^2/2$ páros kulcs egyeztetését igényli. RSA-val mindenkinek **egyetlen** $(n, e, d)$ kulcsa van: $t$ kulcs összesen, és új résztvevő bekapcsolása nem igényel előzetes kapcsolatot egyetlen meglévő résztvevővel sem.

## Kulcsgenerálás

1. **Válassz két nagy prímet:** $p, q$ (általában $\\geq 1024$ bites).
2. **Modulus:** $n = pq$.
3. **Euler-függvény:** $\\varphi(n) = (p-1)(q-1)$.
4. **Nyilvános kitevő:** $e$ úgy, hogy $\\gcd(e, \\varphi(n)) = 1$ (gyakran $e = 65537$).
5. **Titkos kitevő:** $d \\equiv e^{-1} \\pmod{\\varphi(n)}$ (kiterjesztett Euklideszi).

**Nyilvános kulcs:** $(n, e)$ &nbsp;&nbsp; **Titkos kulcs:** $d$ (és $p, q$).

## Titkosítás / visszafejtés

$$c \\equiv m^e \\pmod n \\quad\\text{(titkosítás)}$$

$$m \\equiv c^d \\pmod n \\quad\\text{(visszafejtés)}$$

A helyességet Euler tétele garantálja: $m^{ed} \\equiv m^{1 + k\\varphi(n)} \\equiv m \\pmod n$. A kétféle hatványozás **felcserélhető**: $(m^e)^d = (m^d)^e = m^{ed}$ — így a digitális aláírás is ugyanazzal a sémával működik (lásd lent).

### Üzenet előkészítése

Az algoritmus bemenete egész szám $m$, $0 < m < n$. Hosszabb üzenetekhez:

1. **Számmá alakítás** — pl. ASCII vagy a saját ábécé indexei: \`H E L L O → 08 05 12 12 15 …\`
2. **Darabolás** — fix méretű blokkokra, mindegyik blokk értéke $< n$.
3. **Nullával padolás** — a blokkokat egyforma hosszúságúra töltjük fel.
4. **Blokkonkénti hatványozás** — minden $m_i$ blokkot külön-külön emelünk $e$-edik hatványra modulo $n$.

A blokkonkénti tankönyvi RSA önmagában determinisztikus → **OAEP padding kötelező** a gyakorlatban (lásd \`Gyakorlati kérdések\`).

## Egyszerű példa

$p = 5, q = 11 \\Rightarrow n = 55, \\varphi(55) = 40$. $e = 3$, és $3d \\equiv 1 \\pmod{40} \\Rightarrow d = 27$.

- $m = 4$: $c = 4^3 \\bmod 55 = 64 \\bmod 55 = 9$.
- visszafejtés: $9^{27} \\bmod 55 = 4$.

## Reális példa — $p = 269$, $q = 241$ (Szalkai 2020)

**(o)** $n = p \\cdot q = 269 \\cdot 241 = 64\\,829$.

**(a)** $s = \\varphi(n) = (p-1)(q-1) = 268 \\cdot 240 = 64\\,320$.

**(b1)** Választunk $e = 53\\,201$. Ellenőrizzük $\\gcd(e, s) = 1$ Euklideszi algoritmussal:

$$\\langle 64320 \\rangle = 1 \\cdot \\langle 53201 \\rangle + \\langle 11119 \\rangle$$
$$\\langle 53201 \\rangle = 4 \\cdot \\langle 11119 \\rangle + \\langle 8725 \\rangle$$
$$\\langle 11119 \\rangle = 1 \\cdot \\langle 8725 \\rangle + \\langle 2394 \\rangle$$
$$\\langle 8725 \\rangle = 3 \\cdot \\langle 2394 \\rangle + \\langle 1543 \\rangle$$
$$\\cdots \\text{(további 7 lépés)} \\cdots$$
$$\\langle 9 \\rangle = 4 \\cdot \\langle 2 \\rangle + \\boxed{1}$$

12 lépés → $\\gcd(e, s) = 1$ ✓.

**(b2)** $f = ?$ az $e \\cdot f \\equiv 1 \\pmod s$ egyenletből. **Visszafejtés** az Euklideszi sorokon alulról felfelé olvasva (az \`1\`-ből indulva, minden maradékot az eredeti $\\langle 53201 \\rangle$ és $\\langle 64320 \\rangle$ kombinációjára visszavezetve):

$$1 = 9 - 4 \\cdot 2 = 9 - 4(47 - 5 \\cdot 9) = 21 \\cdot 9 - 4 \\cdot 47 = \\cdots$$

12 visszafejtési lépés után:

$$1 = 28\\,721 \\cdot \\langle 53201 \\rangle - 23\\,756 \\cdot \\langle 64320 \\rangle$$

Tehát $f = \\mathbf{28\\,721}$ (és $y = 23\\,756$ a Diofantosz-paraméter). **Ellenőrzés:** $28721 \\cdot 53201 = 1\\,528\\,054\\,321 = 23756 \\cdot 64320 + 1$ ✓.

**(c) Titkosítás** $k = 48\\,055$:

$$K = \\mathcal{C}_A(k) \\equiv 48055^{53201} \\equiv \\cdots \\equiv 61\\,606 \\pmod{64\\,829}$$

(gyorshatványozással — \`tétel 38\`).

**(d) Visszafejtés** ellenőrzés:

$$\\mathcal{D}_A(K) \\equiv 61606^{28721} \\equiv \\cdots \\equiv 48\\,055 \\pmod{64\\,829} \\quad ✓$$

**(e) „HELLO" titkosítása.** ASCII helyett ábécé-index: H=08, E=05, L=12, L=12, O=15. Blokkméret: 4 jegy (mert $k < n_A = 64\\,829$), így 3 blokk: $k_1 = 0008, k_2 = 0512, k_3 = 1215$.

$$0008^{53201} \\equiv 13\\,745, \\quad 0512^{53201} \\equiv 57\\,388, \\quad 1215^{53201} \\equiv 18\\,638 \\pmod{64\\,829}$$

$$\\mathcal{C}_A(\\text{HELLO}) = \\texttt{"13745 57388 18638"}$$

**(f) Dekódolási feladvány.** Tegyük fel, hogy az ellenfél elfogta a \`"36376 28210 53334"\` szöveget. Az $f_A = 28721$ titkos kulccsal:

$$36376^{28721} \\equiv 0016, \\quad 28210^{28721} \\equiv 0918, \\quad 53334^{28721} \\equiv 1519 \\pmod{64\\,829}$$

Visszaolvasva: $\\mathcal{D}_A = \\texttt{"0016 0918 1519"} \\to \\text{P}=16, \\text{I}=09, \\text{R}=18, \\text{O}=15, \\text{S}=19 \\to$ **„PIROS"**.

> **Megjegyzés a $p, q$ választására:** a **Fermat prímfelbontási algoritmus** trivializálja az RSA-t, ha $|p - q|$ kicsi (mert $n = \\left(\\tfrac{p+q}{2}\\right)^2 - \\left(\\tfrac{p-q}{2}\\right)^2$ alak). A **Pollard $p - 1$ algoritmus** trivializálja, ha $p - 1$ csak kis prímtényezőkből áll ($B$-smooth). Ezért a kulcs-generáláskor $p, q$ **nagyok, közel azonos méretűek de nem szomszédosak**, és $p \\pm 1, q \\pm 1$ legalább egy nagy prímtényezőt kell tartalmazzon (*safe primes*).

## Biztonsági alap

A támadónak ki kellene számolnia $\\varphi(n)$-t, ehhez $n$-t kéne faktorizálnia. Nagy számokra ez (klasszikus számítógéppel) jelenleg gyakorlatilag lehetetlen.

## Gyakorlati kérdések

- **Padding (OAEP)**: tankönyvi RSA önmagában nem biztonságos — \`m^e mod n\` determinisztikus, így ismert plaintext támadható. Az RFC 8017 PKCS#1 v2.2 az OAEP-et használja.
- **CRT-gyorsítás**: 4× gyorsabb visszafejtés.
- **Kulcsméret**: 2048 vagy 3072 bit ma az ajánlás; 1024 már gyenge.

## Kvantum-veszély

**Shor algoritmusa** kvantumszámítógépen polinomiális időben faktorizál — ezért az ipar a **posztkvantum-kriptográfia** (lattice-based, code-based, isogeny-based) felé mozdul (NIST PQC standardizáció, 2024).

## Digitális aláírás

A séma fordítva is működik: $\\sigma = m^d \\bmod n$ az **aláírás**, és bárki ellenőrizheti $m \\equiv \\sigma^e \\pmod n$-nel — mert csak a kulcs tulajdonosa ismeri $d$-t.

### Hitelesítés + titkosítás (kombinált protokoll)

Ha $B$ titkos üzenetet **és aláírást** akar küldeni $A$-nak:

1. **Egyedi bélyegző:** $B$ az üzenetbe egy újrahasznosíthatatlan azonosítót illeszt (dátum + névsor) — különben egy aláírást másolni lehetne.
2. **Aláírás:** $B$ a saját $d_B$ titkos kitevőjével „aláírja" → $\\lambda = \\text{üzenet}^{d_B} \\bmod n_B$.
3. **Titkosítás:** $B$ a $\\lambda$-t $A$ nyilvános kulcsával titkosítja → $K = \\lambda^{e_A} \\bmod n_A$, és ezt küldi.
4. **Visszafejtés és ellenőrzés:** $A$ a saját $d_A$-jával visszafejti $K$-t → $\\lambda$, majd $B$ nyilvános $e_B$-jével „kicsomagolja" → eredeti üzenet. Ha értelmes szöveg jön ki, akkor **biztosan $B$** írta.

### Letagadhatatlanság (non-repudiation)

A fenti séma jogi szempontból erős bizonyíték: a bíró csak a **nyilvános** táblázatból ($e_A, e_B, n_A, n_B$) ellenőrzi, hogy $\\lambda$ valóban $B$ titkos kulcsával készült-e. $B$ nem tudja letagadni az üzenetet, mert csak ő ismeri $d_B$-t. Ezt nevezzük *non-repudiation*-nek.

## Zero-knowledge bizonyítás

Az RSA-szerű számelméleti séma azt is lehetővé teszi, hogy valaki bebizonyítsa egy titok (pl. jelszó) **ismeretét** anélkül, hogy magát a titkot elárulná. A kérdező többszöri „kihívás" formájában matematikai feladványokat tesz fel; a válaszoló a titkos kulcsával válaszol. Néhány forduló után a kérdező 100%-os bizonyossággal tudja, hogy a másik ismeri a titkot, **és egy lehallgató sem nyer semmi újrahasználható információt** (a következő alkalommal teljesen új kihívások mennek). Ez a *Zero-Knowledge Proof* protokoll-család alapötlete.

### Definíció (formálisan)

> **Bizonyítás 0 információval** — párbeszéd-protokoll:
> 1. A **válaszadó** ($V$, *prover*) bebizonyítja a **kérdezőnek** ($K$, *verifier*), hogy ismeri a jelszót.
> 2. **$K$ a kód egyetlen részletét sem ismeri meg** a teljes beszélgetésből.
> 3. **Sőt:** a teljes beszélgetés ismeretében sem $K$, sem egy 3. személy **legközelebb** nem tudja kiadni magát $V$-nek!

A 3. pont a *Zero-Knowledge* lényege: a protokoll **lehallgatható** anélkül, hogy a lehallgató bármit nyerne. Minden „session" friss véletlenekkel kezdődik; egy korábbi beszélgetés nem írható át.

### RSA-alapú aláírás-hitelesítési protokoll (= zero-knowledge proof)

$B$ üzenetet és aláírást küld $A$-nak:

1. **Random nonce:** $B$ választ egy $\\ell \\in \\mathbb{N}$ véletlen (még nem használt) jelsorozatot.
2. **$L$ küldése:** $L := \\mathcal{C}_A(\\ell) \\equiv \\ell^{e_A} \\pmod{n_A}$. ($\\ell$ titkosítása $A$ nyilvános kulcsával.) Elküldi $A$-nak.
3. **$B$ aláírása:** $\\lambda := \\mathcal{D}_B(\\ell) \\equiv \\ell^{f_B} \\pmod{n_B}$ ($\\ell$ visszafejtése $B$ **titkos** kulcsával — ezt csak $B$ tudja megcsinálni!).
4. **$\\Lambda$ küldése:** $\\Lambda := \\mathcal{C}_A(\\lambda) \\equiv \\lambda^{e_A} \\pmod{n_A}$ ($\\lambda$ titkosítása $A$-nak). Elküldi $A$-nak.

$A$ olvassa:

5. $\\ell_1 := \\mathcal{D}_A(L) \\equiv L^{f_A} \\pmod{n_A}$
6. $\\lambda := \\mathcal{D}_A(\\Lambda) \\equiv \\Lambda^{f_A} \\pmod{n_A}$
7. $\\ell_2 := \\mathcal{C}_B(\\lambda) \\equiv \\lambda^{e_B} \\pmod{n_B}$ ($B$ nyilvános kulcsával újra-titkosítjuk $\\lambda$-t)

**Hitelesítés:** $B$ valódi feladó ⟺ $\\ell_1 = \\ell_2$. (Ha $\\lambda = \\ell^{f_B}$ volt, akkor $\\lambda^{e_B} = \\ell^{f_B \\cdot e_B} = \\ell$ Euler-tétel miatt.)

### Megrendelés-bizonyítás 3. személy (bíróság) felé

Ha $B$ utólag **letagadja**, hogy az üzenetet ő küldte (jogi vita), $A$ a bírósághoz ($C$) fordulhat $\\Lambda, \\lambda, \\ell$ átadásával. $C$ csak a **nyilvános** táblázatból ($n_A, e_A, n_B, e_B$) ellenőrzi:

(i) $\\Lambda \\stackrel{?}{=} \\mathcal{C}_A(\\lambda) \\equiv \\lambda^{e_A} \\pmod{n_A}$ → $A$-nak címezték.

(ii) $\\ell \\stackrel{?}{=} \\mathcal{C}_B(\\lambda) \\equiv \\lambda^{e_B} \\pmod{n_B}$ → csak $B$ tudta $\\lambda$-t kiszámolni ($f_B$ titkos!).

Ha mindkettő teljesül, $B$ **bizonyítottan** írta az üzenetet. Ez a **non-repudiation** (letagadhatatlanság) jogi alapja.

## Alkalmazások

HTTPS / TLS handshake (kulcsátadásra; szimmetrikus kulcs a tényleges adatra), digitális aláírás, S/MIME e-mail, banki tranzakciók, VPN-ek, kódaláírás, blokkláncok.

## Történelmi eset: RSA-129

1977 augusztusában Rivest–Shamir–Adleman a *Scientific American*-ben publikált egy kihívást: faktorizálj egy **129 jegyű** modulust és olvasd el a benne kódolt üzenetet (\\$100 jutalom). Akkor sokan úgy hitték, ezt soha nem fogják feltörni. **1994 áprilisában** sikerült: **600 PC** összehangolt munkája **8 hónapig** építette fel az 569 466 × 524 338-as Gauss-eliminációs mátrixot (188 614 × 188 160-ra redukálva), majd egy 16K-os MasPar P-1 párhuzamos szupergép **45 óra** alatt elvégezte a végső faktorizációt. A megfejtés:

> *"The magic words are squeamish ossifrage."*
> *(magyarul: "A varázsszó a kényesgyomrú halászsas.")*

Tanulság: ami 1977-ben feltörhetetlennek látszott, 17 év alatt megnyílt. Ezért használnak ma legalább **2048–3072 bit**-es modulust.

## Intuíció

Az RSA matematikai lakat: **bezárni könnyű** (gyors moduláris hatványozás), **kinyitni csak a titkos szerkezettel lehet** (mert faktorizálni nehéz). 🗝️
`,ce=Object.assign({"./content/01.md":K,"./content/02.md":P,"./content/03.md":H,"./content/04.md":M,"./content/05.md":B,"./content/06.md":T,"./content/07.md":V,"./content/08.md":C,"./content/09.md":F,"./content/10.md":G,"./content/11.md":L,"./content/12.md":N,"./content/13.md":R,"./content/14.md":O,"./content/15.md":I,"./content/16.md":w,"./content/17.md":D,"./content/18.md":Z,"./content/19.md":W,"./content/20.md":J,"./content/21.md":X,"./content/22.md":Q,"./content/23.md":U,"./content/24.md":Y,"./content/25.md":ee,"./content/26.md":ne,"./content/27.md":ae,"./content/28.md":te,"./content/29.md":se,"./content/30.md":le,"./content/31.md":ie,"./content/32.md":re,"./content/33.md":oe,"./content/34.md":ke,"./content/35.md":me,"./content/36.md":$e,"./content/37.md":ze,"./content/38.md":ge,"./content/39.md":de}),c=a=>a.trim().replace(/^['"]|['"]$/g,"");function be(a,n){const t=a.trim();if(t.startsWith("[")){const s=t.replace(/^\[|\]$/g,"").trim();return s?s.split(",").map(l=>c(l)).filter(Boolean):[]}return n.map(s=>c(s.replace(/^\s*-\s*/,""))).filter(Boolean)}function ye(a){const n=/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/.exec(a);if(!n)return null;const[,t,s]=n,l=t.split(`
`),i={},o={};for(let r=0;r<l.length;r++){const g=l[r],y=/^([a-z_]+):\s*(.*)$/i.exec(g);if(!y)continue;const[,p,m]=y;if(m.trim()===""||m.trim().startsWith("[")){const d=[];let $=r+1;for(;$<l.length&&/^\s+-\s*/.test(l[$]);)d.push(l[$]),$++;if(m.trim().startsWith("[")||d.length){o[p]=be(m,d),r=$-1;continue}}i[p]=c(m)}return{n:parseInt(i.n??"0",10),title:i.title??"",glossary:i.glossary??"",path:i.path??"combo",related_dimat:o.related_dimat??[],related_ila:o.related_ila??[],related_exercises:o.related_exercises??[],formulas:o.formulas??[],body:s.trim()}}const b=Object.values(ce).map(ye).filter(a=>a!==null).sort((a,n)=>a.n-n.n),pe=a=>b.find(n=>n.n===a),f={combo:{title:"Kombinatorika",titleEn:"Combinatorics",colour:"#f59e0b",range:[1,10]},graph:{title:"Gráfelmélet",titleEn:"Graph Theory",colour:"#38bdf8",range:[11,29]},szamelm:{title:"Számelmélet",titleEn:"Number Theory",colour:"#a78bfa",range:[30,39]}},_=a=>b.filter(n=>n.path===a),ue=["combo","graph","szamelm"];function he(a){return{display:"block",background:a==="#f59e0b"?"#1c1209":a==="#38bdf8"?"#082236":"#1b1230",border:`1px solid ${a}55`,borderRadius:"8px 8px 0 0",padding:".7rem .85rem"}}const j={background:"#0d1117",border:"1px solid #1f2937",borderTop:"none",borderRadius:"0 0 8px 8px",padding:".4rem .25rem"},x={display:"flex",alignItems:"baseline",gap:".45rem",padding:".4rem .55rem",textDecoration:"none",color:"#cbd5e1",fontSize:".83rem",borderRadius:".35rem"};function ve({path:a,query:n}){const t=f[a],s=_(a).filter(l=>!n||l.title.toLowerCase().includes(n));return e.jsxs("div",{children:[e.jsxs("div",{style:he(t.colour),children:[e.jsx("div",{style:{color:t.colour,fontWeight:700,fontSize:".7rem",letterSpacing:".1em",textTransform:"uppercase"},children:t.title}),e.jsxs("div",{style:{color:t.colour,fontSize:".9rem",marginTop:".1rem",opacity:.85},children:[t.range[0],"–",t.range[1],". tétel"]})]}),e.jsxs("div",{style:j,children:[s.length===0&&e.jsx("p",{style:{color:"#6b7280",fontSize:".8rem",padding:".5rem .6rem",margin:0},children:"Nincs találat"}),s.map(l=>e.jsxs(k,{to:`/tetelsor/${l.n}`,className:"ts-row",style:x,children:[e.jsx("span",{style:{color:t.colour,fontWeight:700,fontSize:".72rem",flexShrink:0},children:String(l.n).padStart(2,"0")}),e.jsx(z,{html:l.title,style:{color:"#e6edf3",fontSize:".83rem",lineHeight:1.5}})]},l.n))]})]})}function fe({query:a}){const n="#10b981",t=v.filter(s=>!a||s.title.toLowerCase().includes(a));return e.jsxs("div",{children:[e.jsxs("div",{style:{display:"block",background:"#082a1d",border:`1px solid ${n}55`,borderRadius:"8px 8px 0 0",padding:".7rem .85rem"},children:[e.jsx("div",{style:{color:n,fontWeight:700,fontSize:".7rem",letterSpacing:".1em",textTransform:"uppercase"},children:"ILA Alapok"}),e.jsx("div",{style:{color:"#34d399",fontSize:".9rem",marginTop:".1rem"},children:"9 alapozó téma"})]}),e.jsxs("div",{style:j,children:[t.length===0&&e.jsx("p",{style:{color:"#6b7280",fontSize:".8rem",padding:".5rem .6rem",margin:0},children:"Nincs találat"}),t.map(s=>e.jsxs(k,{to:`/ila/${s.ilaId}`,className:"ts-row",style:x,children:[e.jsxs("span",{style:{color:n,fontWeight:700,fontSize:".72rem",flexShrink:0},children:["F",s.n]}),e.jsx("span",{style:{color:"#e6edf3"},children:s.title})]},s.n))]})]})}function _e(){const[a,n]=E.useState(""),t=a.trim().toLowerCase(),s=b.filter(i=>!t||i.title.toLowerCase().includes(t)).length,l=v.filter(i=>!t||i.title.toLowerCase().includes(t)).length;return e.jsxs("div",{className:"ila",children:[e.jsxs("header",{style:{marginBottom:"1.5rem"},children:[e.jsxs("div",{style:{display:"flex",alignItems:"baseline",gap:".7rem",flexWrap:"wrap"},children:[e.jsx("h1",{className:"ila__title",style:{margin:0},children:"Tételsor"}),e.jsx("span",{style:{color:"#9ca3af",fontSize:".95rem"},children:"39 vizsgatétel + ILA alapok"})]}),e.jsx("p",{className:"ila__cite",style:{marginTop:".5rem"},children:"A diszkrét matematika vizsgakérdései három útvonalra osztva. Kattints egy tételre a kidolgozás megnyitásához."})]}),e.jsxs("div",{style:{display:"flex",gap:".5rem",marginBottom:"1.25rem",flexWrap:"wrap",alignItems:"center"},children:[e.jsx("input",{type:"search",placeholder:"Keresés / Search…",value:a,onChange:i=>n(i.target.value),className:"ila-text",style:{flex:1,minWidth:240,padding:".55rem .85rem",fontSize:".9rem"}}),e.jsx("span",{style:{color:"#6b7280",fontSize:".82rem",flexShrink:0},children:t?`${s+l} találat`:"39 + 9 tétel"})]}),e.jsxs("div",{className:"ts-columns",children:[ue.map(i=>e.jsx(ve,{path:i,query:t},i)),e.jsx(fe,{query:t})]}),e.jsx("style",{children:`
        .ts-columns { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 1rem; }
        .ts-row:hover { background: #1f2937 !important; }
        @media (max-width: 880px) { .ts-columns { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
        @media (max-width: 520px) { .ts-columns { grid-template-columns: 1fr; } }
      `})]})}function h(a,n){return(n==="ila"?"ILA ":"Dimat ")+a.replace("ch","")}function je(){const{n:a}=q(),n=pe(parseInt(a??"0",10));if(!n)return e.jsxs("div",{className:"ila",children:[e.jsx(k,{to:"/tetelsor",className:"ila__back",children:"← Tételsor"}),e.jsx("p",{className:"ila__cite",children:"A tétel nem található."})]});const t=f[n.path],s=_(n.path),l=s.findIndex(r=>r.n===n.n),i=l>0?s[l-1]:null,o=l>=0&&l<s.length-1?s[l+1]:null;return e.jsxs("div",{className:"ila",children:[e.jsx(k,{to:"/tetelsor",className:"ila__back",children:"← Tételsor"}),e.jsxs("p",{className:"ila__kicker",style:{color:t.colour},children:[t.title," · ",String(n.n).padStart(2,"0"),". tétel"]}),e.jsx("h1",{className:"ila__title",children:e.jsx(z,{html:n.title,style:{display:"inline"}})}),n.glossary&&e.jsxs("div",{className:"info-box",style:{marginTop:".75rem"},children:[e.jsx("span",{className:"lbl",style:{color:t.colour},children:"Áttekintés"}),e.jsx(z,{className:"box-body",html:n.glossary})]}),n.formulas.length>0&&e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:".4rem",margin:".6rem 0"},children:n.formulas.map((r,g)=>e.jsx(z,{html:`<span class="formula-chip">${r}</span>`},g))}),e.jsx(S,{markdown:n.body}),(n.related_ila.length>0||n.related_dimat.length>0)&&e.jsxs("div",{className:"info-box",style:{marginTop:"1rem"},children:[e.jsx("span",{className:"lbl",style:{color:t.colour},children:"Kapcsolódó interaktív fejezetek"}),e.jsxs("div",{style:{display:"flex",flexWrap:"wrap",gap:".4rem",marginTop:".3rem"},children:[n.related_ila.map(r=>e.jsx(k,{to:`/ila/${r}`,className:"op-btn",children:h(r,"ila")},"i"+r)),n.related_dimat.map(r=>e.jsx(k,{to:`/dimat/${r}`,className:"op-btn",children:h(r,"dimat")},"d"+r))]})]}),e.jsxs("div",{style:{display:"flex",justifyContent:"space-between",marginTop:"1.5rem",gap:".5rem"},children:[i?e.jsxs(k,{to:`/tetelsor/${i.n}`,className:"op-btn",children:["← ",String(i.n).padStart(2,"0"),"."]}):e.jsx("span",{}),o?e.jsxs(k,{to:`/tetelsor/${o.n}`,className:"op-btn",children:[String(o.n).padStart(2,"0"),". →"]}):e.jsx("span",{})]})]})}function Be(){return e.jsxs(A,{children:[e.jsx(u,{index:!0,element:e.jsx(_e,{})}),e.jsx(u,{path:":n",element:e.jsx(je,{})})]})}export{Be as default};
