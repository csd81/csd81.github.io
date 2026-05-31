export interface Bi { en: string; hu: string }
export interface Flashcard { q: Bi; a: Bi }

// §1.2 flashcards (Q/A with KaTeX math), imported from 0102flashcards.csv.
// Bilingual: math-only answers are identical in both languages.
export const FLASHCARDS: Flashcard[] = [
  {
    q: {
      en: "In a base-$b$ number system with $m$ digits, what is the formula for the numerical value of an integer $I = (a_{m-1}a_{m-2}...a_1 a_0)_b$?",
      hu: "Egy $b$ alapú, $m$ jegyű számrendszerben mi az $I = (a_{m-1}a_{m-2}...a_1 a_0)_b$ egész szám értékének képlete?",
    },
    a: {
      en: "$I = a_{m-1}b^{m-1} + a_{m-2}b^{m-2} + \\cdots + a_1 b + a_0$",
      hu: "$I = a_{m-1}b^{m-1} + a_{m-2}b^{m-2} + \\cdots + a_1 b + a_0$",
    },
  },
  {
    q: {
      en: "What is the numerical value of the largest integer $I_{\\max}$ that can be represented with $m$ digits in base $b$?",
      hu: "Mi a legnagyobb $I_{\\max}$ egész szám értéke, amely $m$ jeggyel ábrázolható $b$ alapú rendszerben?",
    },
    a: { en: "$I_{\\max} = b^m - 1$", hu: "$I_{\\max} = b^m - 1$" },
  },
  {
    q: {
      en: "How many different integers can be represented using $m$ digits in a base-$b$ system?",
      hu: "Hány különböző egész szám ábrázolható $m$ jeggyel egy $b$ alapú rendszerben?",
    },
    a: { en: "$b^m$ different integers", hu: "$b^m$ különböző egész szám" },
  },
  {
    q: {
      en: "In binary sign-magnitude representation, what value is stored in the sign bit for a negative integer?",
      hu: "Bináris előjel-nagyság ábrázolásban milyen érték kerül az előjelbitbe egy negatív egész szám esetén?",
    },
    a: { en: "1", hu: "1" },
  },
  {
    q: {
      en: "In an $m$-bit sign-magnitude system, how many bits are used to store the magnitude of the number?",
      hu: "Egy $m$ bites előjel-nagyság rendszerben hány bit tárolja a szám nagyságát?",
    },
    a: { en: "$m - 1$ bits", hu: "$m - 1$ bit" },
  },
  {
    q: {
      en: "What are the largest ($I_{\\max}$) and smallest ($I_{\\min}$) representable integers in an $m$-bit sign-magnitude system?",
      hu: "Mi a legnagyobb ($I_{\\max}$) és legkisebb ($I_{\\min}$) ábrázolható egész szám egy $m$ bites előjel-nagyság rendszerben?",
    },
    a: {
      en: "$I_{\\max} = 2^{m-1} - 1$ and $I_{\\min} = -(2^{m-1} - 1)$",
      hu: "$I_{\\max} = 2^{m-1} - 1$ és $I_{\\min} = -(2^{m-1} - 1)$",
    },
  },
  {
    q: {
      en: "How is the integer 0 represented in a sign-magnitude binary system?",
      hu: "Hogyan ábrázoljuk a 0 egész számot egy előjel-nagyság bináris rendszerben?",
    },
    a: {
      en: "It can be stored as an identically 0 bit sequence or as $100...0$ (negative zero).",
      hu: "Tárolható csupa 0 bitsorozatként vagy $100...0$ alakban (negatív nulla).",
    },
  },
  {
    q: {
      en: "In $m$-bit two's-complement representation, how is the stored value $C$ defined for a non-negative integer $0 \\le I \\le 2^{m-1} - 1$?",
      hu: "Az $m$ bites kettes komplemens ábrázolásban hogyan definiáljuk a tárolt $C$ értéket egy nemnegatív $0 \\le I \\le 2^{m-1} - 1$ egész számra?",
    },
    a: { en: "$C = I$", hu: "$C = I$" },
  },
  {
    q: {
      en: "In $m$-bit two's-complement representation, what is the definition of $C$ for a negative integer $-2^{m-1} \\le I < 0$?",
      hu: "Az $m$ bites kettes komplemens ábrázolásban mi a $C$ definíciója egy negatív $-2^{m-1} \\le I < 0$ egész számra?",
    },
    a: { en: "$C = 2^m + I$", hu: "$C = 2^m + I$" },
  },
  {
    q: {
      en: "What is the range of representable integers $[I_{\\min}, I_{\\max}]$ in an $m$-bit two's-complement system?",
      hu: "Mi az ábrázolható egész számok $[I_{\\min}, I_{\\max}]$ tartománya egy $m$ bites kettes komplemens rendszerben?",
    },
    a: { en: "$[-2^{m-1}, 2^{m-1} - 1]$", hu: "$[-2^{m-1}, 2^{m-1} - 1]$" },
  },
  {
    q: {
      en: "In two's-complement representation, what does a first bit of 1 indicate about the integer $I$?",
      hu: "A kettes komplemens ábrázolásban mit jelez az 1-es első bit az $I$ egész számról?",
    },
    a: { en: "The integer $I$ is negative.", hu: "Az $I$ egész szám negatív." },
  },
  {
    q: {
      en: "What is the primary computational advantage of using two's-complement representation for signed integers?",
      hu: "Mi a kettes komplemens ábrázolás fő számítási előnye előjeles egész számoknál?",
    },
    a: {
      en: "Subtraction can be performed as addition.",
      hu: "A kivonás összeadásként végezhető el.",
    },
  },
  {
    q: {
      en: "Process: Convert a negative integer to two's-complement manually.",
      hu: "Eljárás: Negatív egész szám kézi átalakítása kettes komplemensre.",
    },
    a: {
      en: "Take the binary form of the absolute value, flip all bits (0 to 1, 1 to 0), and add 1.",
      hu: "Vedd az abszolút érték bináris alakját, fordíts meg minden bitet (0→1, 1→0), majd adj hozzá 1-et.",
    },
  },
  {
    q: {
      en: "What is the numerical value of a real number $x$ represented in base $b$ as $(x_{m-1}x_{m-2}...x_0.x_{-1}x_{-2}...)_b$?",
      hu: "Mi az $x$ valós szám értéke $b$ alapon $(x_{m-1}x_{m-2}...x_0.x_{-1}x_{-2}...)_b$ alakban?",
    },
    a: { en: "$x = \\sum_{i=-\\infty}^{m-1} x_i b^i$", hu: "$x = \\sum_{i=-\\infty}^{m-1} x_i b^i$" },
  },
  {
    q: {
      en: "Define the normal form of a non-zero real number $x$ in base $b$.",
      hu: "Add meg egy nem nulla $x$ valós szám normálalakját $b$ alapon.",
    },
    a: {
      en: "$x = \\pm m \\cdot b^k$, where $1 \\le m < b$.",
      hu: "$x = \\pm m \\cdot b^k$, ahol $1 \\le m < b$.",
    },
  },
  {
    q: {
      en: "In the floating point normal form $x = \\pm m \\cdot b^k$, what are the terms $m$ and $k$ called?",
      hu: "A lebegőpontos $x = \\pm m \\cdot b^k$ normálalakban hogyan nevezzük az $m$ és $k$ tagokat?",
    },
    a: {
      en: "$m$ is the mantissa and $k$ is the exponent.",
      hu: "$m$ a mantissza, $k$ pedig a kitevő.",
    },
  },
  {
    q: {
      en: "What base system is used by computers to represent floating point numbers according to the IEEE 754 specification?",
      hu: "Milyen számrendszert használnak a számítógépek a lebegőpontos számok ábrázolására az IEEE 754 specifikáció szerint?",
    },
    a: {
      en: "The binary number system (base 2).",
      hu: "A bináris (2-es alapú) számrendszert.",
    },
  },
  {
    q: {
      en: "In IEEE 754 single precision (32-bit), which bit stores the sign $s$?",
      hu: "Az IEEE 754 egyszeres pontosságban (32 bit) melyik bit tárolja az $s$ előjelet?",
    },
    a: {
      en: "The 1st bit (most significant bit).",
      hu: "Az 1. bit (a legmagasabb helyiértékű bit).",
    },
  },
  {
    q: {
      en: "How is the exponent $k$ stored in IEEE 754 single precision (32-bit)?",
      hu: "Hogyan tároljuk a $k$ kitevőt az IEEE 754 egyszeres pontosságban (32 bit)?",
    },
    a: {
      en: "As a shifted value $e = k + 127$ stored on bits 2–9.",
      hu: "Eltolt értékként, $e = k + 127$, a 2–9. biteken tárolva.",
    },
  },
  {
    q: {
      en: "Why is the leading digit of the mantissa (the 1 in $1.m_1 m_2...$) not stored in IEEE binary representation?",
      hu: "Miért nem tároljuk a mantissza vezető jegyét (az 1-est $1.m_1 m_2...$ alakban) az IEEE bináris ábrázolásban?",
    },
    a: {
      en: "In normal form it is always 1, so it is omitted (hidden bit) to save storage space.",
      hu: "Normálalakban mindig 1, ezért elhagyjuk (rejtett bit), helyet takarítva meg.",
    },
  },
  {
    q: {
      en: "How many bits are used for the fractional part of the mantissa in IEEE 754 single precision?",
      hu: "Hány bit jut a mantissza tört részére az IEEE 754 egyszeres pontosságban?",
    },
    a: { en: "23 bits (stored on bits 10–32).", hu: "23 bit (a 10–32. biteken tárolva)." },
  },
  {
    q: {
      en: "In the IEEE 754 32-bit standard, what does a stored exponent $e = 0$ and all mantissa bits = 0 represent?",
      hu: "Az IEEE 754 32 bites szabványban mit jelent a tárolt $e = 0$ kitevő és csupa 0 mantisszabit?",
    },
    a: {
      en: "The value 0 (can be +0 or -0 depending on the sign bit).",
      hu: "A 0 értéket (lehet +0 vagy -0 az előjelbittől függően).",
    },
  },
  {
    q: {
      en: "In the IEEE 754 32-bit standard, what is the representation for $+\\mathtt{Inf}$?",
      hu: "Az IEEE 754 32 bites szabványban hogyan ábrázoljuk a $+\\mathtt{Inf}$ értéket?",
    },
    a: {
      en: "$s = 0$, $e = 255$ (all 1s), and at least one mantissa bit is 0.",
      hu: "$s = 0$, $e = 255$ (csupa 1-es), és legalább egy mantisszabit 0.",
    },
  },
  {
    q: {
      en: "What do the IEEE 754 symbols $+\\mathtt{NaN}$ and $-\\mathtt{NaN}$ signify?",
      hu: "Mit jelölnek az IEEE 754 $+\\mathtt{NaN}$ és $-\\mathtt{NaN}$ szimbólumok?",
    },
    a: {
      en: "Not-a-Number, resulting from undefined operations like division by zero or roots of negative numbers.",
      hu: "Nem-szám (Not-a-Number); definiálatlan műveletekből, pl. nullával osztásból vagy negatív szám gyökéből ered.",
    },
  },
  {
    q: {
      en: "What range of values for $e$ is reserved for finite real numbers in IEEE 754 single precision?",
      hu: "Az $e$ mely értéktartománya van fenntartva a véges valós számoknak az IEEE 754 egyszeres pontosságban?",
    },
    a: { en: "$0 \\le e \\le 254$", hu: "$0 \\le e \\le 254$" },
  },
  {
    q: {
      en: "In IEEE 754 single precision, what are the possible values for the actual exponent $k$?",
      hu: "Az IEEE 754 egyszeres pontosságban mik a tényleges $k$ kitevő lehetséges értékei?",
    },
    a: { en: "$-127 \\le k \\le 127$", hu: "$-127 \\le k \\le 127$" },
  },
  {
    q: {
      en: "What is the approximate value of the smallest positive representable number ($x_{\\min}$) in single precision?",
      hu: "Mi a legkisebb pozitív ábrázolható szám ($x_{\\min}$) közelítő értéke egyszeres pontosságban?",
    },
    a: { en: "$10^{-38}$", hu: "$10^{-38}$" },
  },
  {
    q: {
      en: "What is the approximate value of the largest finite representable number ($x_{\\max}$) in single precision?",
      hu: "Mi a legnagyobb véges ábrázolható szám ($x_{\\max}$) közelítő értéke egyszeres pontosságban?",
    },
    a: { en: "$10^{38}$", hu: "$10^{38}$" },
  },
  {
    q: {
      en: "In IEEE 754 double precision (64-bit), how is the shifted exponent $e$ calculated?",
      hu: "Az IEEE 754 dupla pontosságban (64 bit) hogyan számoljuk az eltolt $e$ kitevőt?",
    },
    a: { en: "$e = k + 1023$", hu: "$e = k + 1023$" },
  },
  {
    q: {
      en: "Which bits are used to store the shifted exponent in IEEE 754 double precision?",
      hu: "Mely bitek tárolják az eltolt kitevőt az IEEE 754 dupla pontosságban?",
    },
    a: { en: "Bits 2–12 (11 bits total).", hu: "A 2–12. bitek (összesen 11 bit)." },
  },
  {
    q: {
      en: "How many bits are used for the fractional part of the mantissa in IEEE 754 double precision?",
      hu: "Hány bit jut a mantissza tört részére az IEEE 754 dupla pontosságban?",
    },
    a: { en: "52 bits (stored on bits 13–64).", hu: "52 bit (a 13–64. biteken tárolva)." },
  },
  {
    q: {
      en: "What is the approximate range of positive real numbers representable in double precision?",
      hu: "Mi a dupla pontosságban ábrázolható pozitív valós számok közelítő tartománya?",
    },
    a: { en: "$10^{-308}$ to $10^{308}$", hu: "$10^{-308}$-tól $10^{308}$-ig" },
  },
  {
    q: { en: "Term: Machine numbers", hu: "Fogalom: Gépi számok" },
    a: {
      en: "Definition: The set of real numbers that can be stored in a specific computer representation without error.",
      hu: "Definíció: Azon valós számok halmaza, amelyek egy adott számítógépes ábrázolásban hiba nélkül tárolhatók.",
    },
  },
  {
    q: {
      en: "The machine representation of a real number $x$ is denoted by the symbol _____.",
      hu: "Az $x$ valós szám gépi ábrázolását a _____ szimbólum jelöli.",
    },
    a: { en: "$fl(x)$", hu: "$fl(x)$" },
  },
  {
    q: {
      en: "Condition: $|x| < x_{\\min}$. What is the result in floating point arithmetic?",
      hu: "Feltétel: $|x| < x_{\\min}$. Mi az eredmény lebegőpontos aritmetikában?",
    },
    a: {
      en: "Arithmetic underflow, resulting in $fl(x) = 0$.",
      hu: "Alulcsordulás (underflow), melynek eredménye $fl(x) = 0$.",
    },
  },
  {
    q: {
      en: "Condition: $x > x_{\\max}$. What is the result in floating point arithmetic?",
      hu: "Feltétel: $x > x_{\\max}$. Mi az eredmény lebegőpontos aritmetikában?",
    },
    a: {
      en: "Arithmetic overflow, resulting in $fl(x) = \\mathtt{Inf}$.",
      hu: "Túlcsordulás (overflow), melynek eredménye $fl(x) = \\mathtt{Inf}$.",
    },
  },
  {
    q: { en: "Concept: Chopping", hu: "Fogalom: Levágás (chopping)" },
    a: {
      en: "Definition: A method of defining $fl(x)$ where the mantissa fractional bits are truncated to fit the storage limit.",
      hu: "Definíció: $fl(x)$ olyan meghatározása, amelyben a mantissza törtbitjeit a tárolási korláthoz csonkítjuk.",
    },
  },
  {
    q: { en: "Concept: Rounding", hu: "Fogalom: Kerekítés" },
    a: {
      en: "Definition: Defining $fl(x)$ as the machine number nearest to the real value $x$.",
      hu: "Definíció: $fl(x)$ az $x$ valós értékhez legközelebbi gépi szám.",
    },
  },
  {
    q: {
      en: "In IEEE rounding, how is $fl(x)$ determined if $x$ is exactly halfway between two consecutive machine numbers $x'$ and $x''$?",
      hu: "Az IEEE kerekítésben hogyan határozzuk meg $fl(x)$-et, ha $x$ pontosan két szomszédos $x'$ és $x''$ gépi szám felezőpontján van?",
    },
    a: {
      en: "It rounds to the machine number whose last mantissa bit ($m_{23}$) is 0.",
      hu: "Ahhoz a gépi számhoz kerekít, amelynek utolsó mantisszabitje ($m_{23}$) 0.",
    },
  },
  {
    q: {
      en: "Why does the IEEE standard round to the nearest machine number with a last mantissa bit of 0 in tie-break cases?",
      hu: "Miért kerekít az IEEE szabvány döntetlen esetben a 0 utolsó mantisszabittel rendelkező gépi számhoz?",
    },
    a: {
      en: "It ensures unbiased rounding (up/down half the time) and allows division by 2 without error.",
      hu: "Torzítatlan kerekítést biztosít (fele-fele arányban fel/le), és lehetővé teszi a hibamentes 2-vel osztást.",
    },
  },
  {
    q: {
      en: "What is the maximum absolute error $|x - fl(x)|$ when using IEEE single precision rounding?",
      hu: "Mi a maximális abszolút hiba $|x - fl(x)|$ IEEE egyszeres pontosságú kerekítésnél?",
    },
    a: { en: "$\\frac{1}{2} 2^{-23} 2^k$", hu: "$\\frac{1}{2} 2^{-23} 2^k$" },
  },
  {
    q: {
      en: "Define 'machine epsilon' ($\\varepsilon_m$).",
      hu: "Definiáld a „gépi epszilon” ($\\varepsilon_m$) fogalmát.",
    },
    a: {
      en: "The difference between the number 1 and the first machine number greater than 1.",
      hu: "Az 1 és az 1-nél nagyobb első gépi szám közötti különbség.",
    },
  },
  {
    q: {
      en: "How is machine epsilon ($\\varepsilon_m$) used to evaluate computer comparisons involving the number 1?",
      hu: "Hogyan használjuk a gépi epszilont ($\\varepsilon_m$) az 1-et tartalmazó számítógépes összehasonlításokban?",
    },
    a: {
      en: "It is the smallest power of 2 for which the computer evaluates $1 + \\varepsilon_m > 1$ as true.",
      hu: "A 2 legkisebb hatványa, amelyre a gép $1 + \\varepsilon_m > 1$-et igaznak értékel.",
    },
  },
  {
    q: {
      en: "According to Theorem 1.9, what is the bound for the relative error $|x - fl(x)|/|x|$ using rounding?",
      hu: "Az 1.9. tétel szerint mi a relatív hiba $|x - fl(x)|/|x|$ korlátja kerekítésnél?",
    },
    a: { en: "$\\frac{1}{2}\\varepsilon_m$", hu: "$\\frac{1}{2}\\varepsilon_m$" },
  },
  {
    q: {
      en: "Theorem 1.10: For a base-2 system with $t$ bits for the mantissa fractional part, what is $\\varepsilon_m$?",
      hu: "1.10. tétel: Egy 2-es alapú rendszerben, ahol a mantissza tört részére $t$ bit jut, mennyi $\\varepsilon_m$?",
    },
    a: { en: "$2^{-t}$", hu: "$2^{-t}$" },
  },
  {
    q: {
      en: "Theorem 1.10: For a base $b \\ne 2$ with $t$ mantissa digits, what is the formula for $\\varepsilon_m$?",
      hu: "1.10. tétel: Egy $b \\ne 2$ alapú rendszerben $t$ mantisszajeggyel mi az $\\varepsilon_m$ képlete?",
    },
    a: { en: "$b^{1-t}$", hu: "$b^{1-t}$" },
  },
  {
    q: {
      en: "Formula: Absolute Error of an approximation $\\tilde{x}$ to $x$.",
      hu: "Képlet: Az $x$-et közelítő $\\tilde{x}$ abszolút hibája.",
    },
    a: { en: "$|x - \\tilde{x}|$", hu: "$|x - \\tilde{x}|$" },
  },
  {
    q: {
      en: "Formula: Relative Error of an approximation $\\tilde{x}$ to $x$.",
      hu: "Képlet: Az $x$-et közelítő $\\tilde{x}$ relatív hibája.",
    },
    a: {
      en: "$\\frac{|x - \\tilde{x}|}{|x|}$ (where $x \\ne 0$).",
      hu: "$\\frac{|x - \\tilde{x}|}{|x|}$ (ahol $x \\ne 0$).",
    },
  },
  {
    q: {
      en: "What is the condition for an approximation $\\tilde{x}$ to be considered 'exact in $n$ digits' in base $b$?",
      hu: "Mi a feltétele annak, hogy egy $\\tilde{x}$ közelítés „$n$ jegyre pontos” legyen $b$ alapon?",
    },
    a: {
      en: "$\\frac{|x - \\tilde{x}|}{|x|} \\le \\frac{1}{2}b^{1-n}$",
      hu: "$\\frac{|x - \\tilde{x}|}{|x|} \\le \\frac{1}{2}b^{1-n}$",
    },
  },
  {
    q: {
      en: "In the decimal system ($b = 10$), how does a factor of 1/10 reduction in relative error affect the number of exact digits?",
      hu: "A tízes számrendszerben ($b = 10$) a relatív hiba 1/10-ed részére csökkenése hogyan hat a pontos jegyek számára?",
    },
    a: {
      en: "The number of exact digits increases by 1.",
      hu: "A pontos jegyek száma eggyel nő.",
    },
  },
  {
    q: {
      en: "How many exact decimal digits are guaranteed in single precision floating point arithmetic?",
      hu: "Hány pontos tizedesjegy garantált egyszeres pontosságú lebegőpontos aritmetikában?",
    },
    a: { en: "7 digits.", hu: "7 jegy." },
  },
  {
    q: {
      en: "Process: Find the binary fractional part of a decimal $x$.",
      hu: "Eljárás: Egy decimális $x$ bináris tört részének meghatározása.",
    },
    a: {
      en: "Repeatedly multiply the fractional part by 2; the integer part of each result provides the binary digits ($x_1, x_2, ...$).",
      hu: "Ismételten szorozd a tört részt 2-vel; minden eredmény egész része adja a bináris jegyeket ($x_1, x_2, ...$).",
    },
  },
  {
    q: {
      en: "What is the decimal value of the binary number $(101101)_2$?",
      hu: "Mi a $(101101)_2$ bináris szám decimális értéke?",
    },
    a: { en: "45", hu: "45" },
  },
  {
    q: {
      en: "What is the decimal value of the binary fraction $(0.10011)_2$?",
      hu: "Mi a $(0.10011)_2$ bináris tört decimális értéke?",
    },
    a: {
      en: "$0.5 + 0.0625 + 0.03125 = 0.59375$ (or $\\frac{19}{32}$)",
      hu: "$0.5 + 0.0625 + 0.03125 = 0.59375$ (vagy $\\frac{19}{32}$)",
    },
  },
  {
    q: {
      en: "Define the machine operation $x \\oplus y$.",
      hu: "Definiáld az $x \\oplus y$ gépi műveletet.",
    },
    a: { en: "$fl(fl(x) + fl(y))$", hu: "$fl(fl(x) + fl(y))$" },
  },
  {
    q: { en: "Concept: 4-digit rounding arithmetic", hu: "Fogalom: 4 jegyű kerekítéses aritmetika" },
    a: {
      en: "Definition: Floating point arithmetic where results of every step are rounded to the first 4 significant digits.",
      hu: "Definíció: Olyan lebegőpontos aritmetika, ahol minden lépés eredményét az első 4 értékes jegyre kerekítjük.",
    },
  },
  {
    q: {
      en: "In 4-digit arithmetic, what is the result of $1.043 + 20340$?",
      hu: "4 jegyű aritmetikában mi a $1.043 + 20340$ eredménye?",
    },
    a: {
      en: "20340 (The exact value 20341.043 is rounded to 4 significant digits).",
      hu: "20340 (A pontos 20341.043 értéket 4 értékes jegyre kerekítjük).",
    },
  },
  {
    q: {
      en: "How do you represent a real number as a floating point machine number if its absolute value exceeds $x_{\\max}$?",
      hu: "Hogyan ábrázolunk egy valós számot lebegőpontos gépi számként, ha abszolút értéke meghaladja $x_{\\max}$-ot?",
    },
    a: {
      en: "Store it as $+\\mathtt{Inf}$ for $x > 0$ or $-\\mathtt{Inf}$ for $x < 0$.",
      hu: "Tároljuk $+\\mathtt{Inf}$-ként, ha $x > 0$, vagy $-\\mathtt{Inf}$-ként, ha $x < 0$.",
    },
  },
  {
    q: {
      en: "In a 4-bit floating point system where 1 bit is sign, 1 bit is $e = k+1$, and 2 bits are fractional mantissa, what is the value represented by bit sequence $0001$?",
      hu: "Egy 4 bites lebegőpontos rendszerben (1 bit előjel, 1 bit $e = k+1$, 2 bit tört mantissza) milyen értéket jelöl a $0001$ bitsorozat?",
    },
    a: { en: "$(1.01)_2 \\cdot 2^{-1} = \\frac{5}{8}$", hu: "$(1.01)_2 \\cdot 2^{-1} = \\frac{5}{8}$" },
  },
  {
    q: {
      en: "In a 4-bit floating point system (sign=1, $e=k+1$=1, mantissa=2), what is the value represented by $0100$?",
      hu: "Egy 4 bites lebegőpontos rendszerben (előjel=1, $e=k+1$=1, mantissza=2) milyen értéket jelöl a $0100$?",
    },
    a: { en: "$(1.00)_2 \\cdot 2^0 = 1$", hu: "$(1.00)_2 \\cdot 2^0 = 1$" },
  },
  {
    q: {
      en: "In a 4-bit floating point system (sign=1, $e=k+1$=1, mantissa=2), what is the value represented by $0111$?",
      hu: "Egy 4 bites lebegőpontos rendszerben (előjel=1, $e=k+1$=1, mantissza=2) milyen értéket jelöl a $0111$?",
    },
    a: {
      en: "$(1.11)_2 \\cdot 2^0 = \\frac{7}{4} = \\frac{14}{8}$",
      hu: "$(1.11)_2 \\cdot 2^0 = \\frac{7}{4} = \\frac{14}{8}$",
    },
  },
  {
    q: {
      en: "According to Example 1.11, if $x = 1657.3$ and $\\tilde{x} = 1656.2$, why is the approximation exact in 3 digits?",
      hu: "Az 1.11. példa szerint, ha $x = 1657.3$ és $\\tilde{x} = 1656.2$, miért 3 jegyre pontos a közelítés?",
    },
    a: {
      en: "Because the relative error $0.0006637 < 0.5 \\cdot 10^{-2}$.",
      hu: "Mert a relatív hiba $0.0006637 < 0.5 \\cdot 10^{-2}$.",
    },
  },
  {
    q: {
      en: "What determines if one approximation is better than another when the absolute errors are identical?",
      hu: "Mi dönti el, hogy az egyik közelítés jobb-e a másiknál, ha az abszolút hibák azonosak?",
    },
    a: {
      en: "The relative error (comparison to the magnitude of the exact value).",
      hu: "A relatív hiba (a pontos érték nagyságához viszonyítva).",
    },
  },
  {
    q: {
      en: "What binary sequence represents the number 12 in base 2?",
      hu: "Melyik bináris sorozat ábrázolja a 12-t a 2-es számrendszerben?",
    },
    a: { en: "$(1100)_2$", hu: "$(1100)_2$" },
  },
  {
    q: {
      en: "Why is the fractional value 0.4 problematic in binary representation?",
      hu: "Miért problémás a 0.4 tört érték bináris ábrázolásban?",
    },
    a: {
      en: "It results in a periodically repeating bit sequence $(0.01100110...)$ and cannot be represented exactly in finite bits.",
      hu: "Periodikusan ismétlődő bitsorozatot ($0.01100110...$) eredményez, és véges biten nem ábrázolható pontosan.",
    },
  },
  {
    q: {
      en: "What decimal value corresponds to the binary normal form $(1.100011...0)_2 \\cdot 2^3$ used to approximate 12.4 in single precision?",
      hu: "Milyen decimális érték felel meg a 12.4-et egyszeres pontosságban közelítő $(1.100011...0)_2 \\cdot 2^3$ bináris normálalaknak?",
    },
    a: { en: "$12.3999996185302734375$", hu: "$12.3999996185302734375$" },
  },
  {
    q: {
      en: "Explain the term 'significant digits'.",
      hu: "Magyarázd el az „értékes jegyek” fogalmát.",
    },
    a: {
      en: "The sequence of digits in a number starting from the first non-zero digit.",
      hu: "Egy szám jegyeinek sorozata az első nem nulla jegytől kezdve.",
    },
  },
  {
    q: {
      en: "What is the binary representation of the decimal integer 57?",
      hu: "Mi az 57 decimális egész szám bináris alakja?",
    },
    a: { en: "$(111001)_2$", hu: "$(111001)_2$" },
  },
  {
    q: {
      en: "What is the binary representation of the decimal fraction 0.25?",
      hu: "Mi a 0.25 decimális tört bináris alakja?",
    },
    a: { en: "$(0.01)_2$", hu: "$(0.01)_2$" },
  },
  {
    q: {
      en: "In a decimal system ($b = 10$), what is the machine epsilon $\\varepsilon_m$ for a representation storing $t = 4$ mantissa digits?",
      hu: "A tízes számrendszerben ($b = 10$) mennyi a gépi epszilon $\\varepsilon_m$ egy $t = 4$ mantisszajegyet tároló ábrázolásnál?",
    },
    a: { en: "$10^{1-4} = 10^{-3} = 0.001$", hu: "$10^{1-4} = 10^{-3} = 0.001$" },
  },
  {
    q: {
      en: "If $x$ and $\\tilde{x}$ have the same order of magnitude and their first $m+1$ digits are the same, how many exact digits of accuracy does $\\tilde{x}$ have at minimum?",
      hu: "Ha $x$ és $\\tilde{x}$ azonos nagyságrendű, és első $m+1$ jegyük megegyezik, legalább hány pontos jegyre pontos $\\tilde{x}$?",
    },
    a: { en: "At least $m$ exact digits.", hu: "Legalább $m$ pontos jegyre." },
  },
  {
    q: {
      en: "What is the purpose of the 127 bias in single precision exponents?",
      hu: "Mi a 127-es eltolás (bias) célja az egyszeres pontosságú kitevőkben?",
    },
    a: {
      en: "It allows exponents to be stored as non-negative integers (0 to 255) while representing a range including negative powers.",
      hu: "Lehetővé teszi, hogy a kitevőket nemnegatív egészként (0–255) tároljuk, miközben a tartomány negatív hatványokat is lefed.",
    },
  },
  {
    q: {
      en: "In the table for $m=3$ bit two's-complement, what is the stored binary code for the decimal integer -4?",
      hu: "Az $m=3$ bites kettes komplemens táblában mi a -4 decimális egész tárolt bináris kódja?",
    },
    a: { en: "100", hu: "100" },
  },
  {
    q: {
      en: "In the table for $m=3$ bit two's-complement, what is the stored binary code for the decimal integer -1?",
      hu: "Az $m=3$ bites kettes komplemens táblában mi a -1 decimális egész tárolt bináris kódja?",
    },
    a: { en: "111", hu: "111" },
  },
  {
    q: {
      en: "What value of $e$ is used in IEEE 754 to represent special symbols like Infinity and NaN?",
      hu: "Az IEEE 754-ben az $e$ mely értékét használjuk a speciális szimbólumokhoz, mint a végtelen és a NaN?",
    },
    a: { en: "$e = 255$ ($11111111_2$).", hu: "$e = 255$ ($11111111_2$)." },
  },
  {
    q: {
      en: "In single precision, what is the smallest positive $k$ exponent value?",
      hu: "Egyszeres pontosságban mi a legkisebb pozitív $k$ kitevőérték?",
    },
    a: { en: "-127 (corresponding to $e=0$).", hu: "-127 (az $e=0$-nak megfelelően)." },
  },
  {
    q: {
      en: "In binary floating point, how is the sign $s$ used in the value formula?",
      hu: "A bináris lebegőpontban hogyan szerepel az $s$ előjel az érték képletében?",
    },
    a: {
      en: "The value is multiplied by $(-1)^s$.",
      hu: "Az értéket $(-1)^s$-nel szorozzuk.",
    },
  },

  // §1.3 error analysis
  {
    q: {
      en: "In error analysis, if $\\tilde{x}$ is an approximation of the real number $x$, what inequality defines the absolute error bound $\\Delta_x$?",
      hu: "A hibaanalízisben, ha $\\tilde{x}$ az $x$ valós szám közelítése, milyen egyenlőtlenség definiálja a $\\Delta_x$ abszolút hibakorlátot?",
    },
    a: { en: "$|x - \\tilde{x}| \\leq \\Delta_x$", hu: "$|x - \\tilde{x}| \\leq \\Delta_x$" },
  },
  {
    q: {
      en: "How is the relative error bound $\\delta_x$ defined in terms of the absolute error bound $\\Delta_x$ and the exact value $x$?",
      hu: "Hogyan definiáljuk a $\\delta_x$ relatív hibakorlátot a $\\Delta_x$ abszolút hibakorláttal és az $x$ pontos értékkel?",
    },
    a: { en: "$\\delta_x := \\frac{\\Delta_x}{x}$", hu: "$\\delta_x := \\frac{\\Delta_x}{x}$" },
  },
  {
    q: {
      en: "According to Theorem 1.14, what is the absolute error bound $\\Delta_{x+y}$ for the addition of two positive real numbers?",
      hu: "Az 1.14. tétel szerint mi két pozitív valós szám összegének $\\Delta_{x+y}$ abszolút hibakorlátja?",
    },
    a: { en: "$\\Delta_x + \\Delta_y$", hu: "$\\Delta_x + \\Delta_y$" },
  },
  {
    q: {
      en: "What is the relative error bound $\\delta_{x+y}$ for the addition of two positive real numbers?",
      hu: "Mi két pozitív valós szám összegének $\\delta_{x+y}$ relatív hibakorlátja?",
    },
    a: { en: "$\\max\\{\\delta_x, \\delta_y\\}$", hu: "$\\max\\{\\delta_x, \\delta_y\\}$" },
  },
  {
    q: {
      en: "Which mathematical inequality is primarily used to prove the absolute error bound of addition?",
      hu: "Melyik matematikai egyenlőtlenséget használjuk főként az összeadás abszolút hibakorlátjának bizonyítására?",
    },
    a: {
      en: "The triangle inequality ($|a+b| \\leq |a| + |b|$)",
      hu: "A háromszög-egyenlőtlenséget ($|a+b| \\leq |a| + |b|$)",
    },
  },
  {
    q: {
      en: "In the proof for $\\delta_{x+y}$, the term $\\frac{\\Delta_x + \\Delta_y}{x + y}$ is rewritten as a weighted sum of $\\delta_x$ and $\\delta_y$. What are those weights?",
      hu: "A $\\delta_{x+y}$ bizonyításában a $\\frac{\\Delta_x + \\Delta_y}{x + y}$ tagot $\\delta_x$ és $\\delta_y$ súlyozott összegeként írjuk át. Mik ezek a súlyok?",
    },
    a: { en: "$\\frac{x}{x + y}$ and $\\frac{y}{x + y}$", hu: "$\\frac{x}{x + y}$ és $\\frac{y}{x + y}$" },
  },
  {
    q: {
      en: "When generalizing addition to several numbers, how is the total absolute error bound calculated?",
      hu: "Az összeadást több számra általánosítva hogyan számoljuk a teljes abszolút hibakorlátot?",
    },
    a: {
      en: "By summing the individual absolute error bounds of all operands.",
      hu: "Az összes operandus egyedi abszolút hibakorlátjának összeadásával.",
    },
  },
  {
    q: {
      en: "How does the number of exact digits in a sum compare to the number of exact digits in its individual operands?",
      hu: "Hogyan viszonyul egy összeg pontos jegyeinek száma az egyes operandusok pontos jegyeinek számához?",
    },
    a: {
      en: "It is at least the smallest number of exact digits among the operands.",
      hu: "Legalább az operandusok közül a legkisebb pontosjegy-szám.",
    },
  },
  {
    q: {
      en: "In practice, why might the actual error of a sum be smaller than the calculated bound $\\Delta_x + \\Delta_y$?",
      hu: "A gyakorlatban miért lehet egy összeg tényleges hibája kisebb a számolt $\\Delta_x + \\Delta_y$ korlátnál?",
    },
    a: {
      en: "The errors of the individual terms can balance each other out (one being positive and one negative).",
      hu: "Az egyes tagok hibái kiegyenlíthetik egymást (az egyik pozitív, a másik negatív).",
    },
  },
  {
    q: {
      en: "Theorem 1.15: For $x > y > 0$, what is the absolute error bound $\\Delta_{x-y}$ for subtraction?",
      hu: "1.15. tétel: $x > y > 0$ esetén mi a kivonás $\\Delta_{x-y}$ abszolút hibakorlátja?",
    },
    a: { en: "$\\Delta_x + \\Delta_y$", hu: "$\\Delta_x + \\Delta_y$" },
  },
  {
    q: {
      en: "Theorem 1.15: For $x > y > 0$, what is the formula for the relative error bound $\\delta_{x-y}$?",
      hu: "1.15. tétel: $x > y > 0$ esetén mi a $\\delta_{x-y}$ relatív hibakorlát képlete?",
    },
    a: {
      en: "$\\frac{x}{x - y}\\delta_x + \\frac{y}{x - y}\\delta_y$",
      hu: "$\\frac{x}{x - y}\\delta_x + \\frac{y}{x - y}\\delta_y$",
    },
  },
  {
    q: {
      en: "Why is the absolute error bound for subtraction $\\Delta_x + \\Delta_y$ rather than $\\Delta_x - \\Delta_y$?",
      hu: "Miért $\\Delta_x + \\Delta_y$ a kivonás abszolút hibakorlátja, nem pedig $\\Delta_x - \\Delta_y$?",
    },
    a: {
      en: "Errors can accumulate in the worst case, and the triangle inequality requires adding the absolute values of differences.",
      hu: "A hibák a legrosszabb esetben halmozódhatnak, és a háromszög-egyenlőtlenség a különbségek abszolút értékeinek összeadását igényli.",
    },
  },
  {
    q: {
      en: "What specific phenomenon occurs when subtracting two nearly equal numbers, leading to a significant loss of exact digits?",
      hu: "Milyen jelenség lép fel két közel egyenlő szám kivonásakor, amely a pontos jegyek jelentős elvesztéséhez vezet?",
    },
    a: {
      en: "Loss of significance (or catastrophic cancellation).",
      hu: "Jegyvesztés (kiejtés, katasztrofális kiejtés).",
    },
  },
  {
    q: {
      en: "In the context of subtraction, when is the relative error $\\delta_{x-y}$ most likely to be significantly magnified?",
      hu: "A kivonásnál mikor nagyítódik fel leginkább a $\\delta_{x-y}$ relatív hiba?",
    },
    a: {
      en: "When $x$ and $y$ are nearly equal, making the denominator $x - y$ very small.",
      hu: "Amikor $x$ és $y$ közel egyenlő, így az $x - y$ nevező nagyon kicsi.",
    },
  },
  {
    q: {
      en: "In Example 1.16, two numbers exact to 6 digits are subtracted. How many digits of precision remain in the result?",
      hu: "Az 1.16. példában két 6 jegyre pontos számot vonunk ki. Hány pontos jegy marad az eredményben?",
    },
    a: { en: "2 digits", hu: "2 jegy" },
  },
  {
    q: {
      en: "Theorem 1.17: What is the exact formula for the absolute error bound of multiplication $\\Delta_{x \\cdot y}$?",
      hu: "1.17. tétel: Mi a szorzás $\\Delta_{x \\cdot y}$ abszolút hibakorlátjának pontos képlete?",
    },
    a: {
      en: "$x\\Delta_y + y\\Delta_x + \\Delta_x \\Delta_y$",
      hu: "$x\\Delta_y + y\\Delta_x + \\Delta_x \\Delta_y$",
    },
  },
  {
    q: {
      en: "Theorem 1.17: What is the exact formula for the relative error bound of multiplication $\\delta_{x \\cdot y}$?",
      hu: "1.17. tétel: Mi a szorzás $\\delta_{x \\cdot y}$ relatív hibakorlátjának pontos képlete?",
    },
    a: {
      en: "$\\delta_x + \\delta_y + \\delta_x \\delta_y$",
      hu: "$\\delta_x + \\delta_y + \\delta_x \\delta_y$",
    },
  },
  {
    q: {
      en: "If $\\Delta_x$ and $\\Delta_y$ are very small compared to $x$ and $y$, what is a good approximation for the absolute error of multiplication?",
      hu: "Ha $\\Delta_x$ és $\\Delta_y$ nagyon kicsi $x$-hez és $y$-hoz képest, mi a szorzás abszolút hibájának jó közelítése?",
    },
    a: { en: "$x\\Delta_y + y\\Delta_x$", hu: "$x\\Delta_y + y\\Delta_x$" },
  },
  {
    q: {
      en: "What is the simplified approximation for the relative error bound of multiplication $\\delta_{x \\cdot y}$ when $\\delta_x$ and $\\delta_y$ are small?",
      hu: "Mi a szorzás $\\delta_{x \\cdot y}$ relatív hibakorlátjának egyszerűsített közelítése, ha $\\delta_x$ és $\\delta_y$ kicsi?",
    },
    a: { en: "$\\delta_x + \\delta_y$", hu: "$\\delta_x + \\delta_y$" },
  },
  {
    q: {
      en: "Theorem 1.18: What condition must be met by $\\delta_y$ to define the error bounds for division $\\frac{x}{y}$?",
      hu: "1.18. tétel: Milyen feltételnek kell teljesülnie $\\delta_y$-ra az $\\frac{x}{y}$ osztás hibakorlátjainak definiálásához?",
    },
    a: { en: "$\\delta_y < 1$", hu: "$\\delta_y < 1$" },
  },
  {
    q: {
      en: "Theorem 1.18: What is the exact formula for the absolute error bound of division $\\Delta_{x/y}$?",
      hu: "1.18. tétel: Mi az osztás $\\Delta_{x/y}$ abszolút hibakorlátjának pontos képlete?",
    },
    a: {
      en: "$\\frac{x\\Delta_y + y\\Delta_x}{y(y - \\Delta_y)}$",
      hu: "$\\frac{x\\Delta_y + y\\Delta_x}{y(y - \\Delta_y)}$",
    },
  },
  {
    q: {
      en: "Theorem 1.18: What is the exact formula for the relative error bound of division $\\delta_{x/y}$?",
      hu: "1.18. tétel: Mi az osztás $\\delta_{x/y}$ relatív hibakorlátjának pontos képlete?",
    },
    a: {
      en: "$\\frac{\\delta_x + \\delta_y}{1 - \\delta_y}$",
      hu: "$\\frac{\\delta_x + \\delta_y}{1 - \\delta_y}$",
    },
  },
  {
    q: {
      en: "When $\\delta_y$ is small, what is the approximate relative error bound for division $\\delta_{x/y}$?",
      hu: "Ha $\\delta_y$ kicsi, mi az osztás $\\delta_{x/y}$ relatív hibakorlátjának közelítése?",
    },
    a: { en: "$\\delta_x + \\delta_y$", hu: "$\\delta_x + \\delta_y$" },
  },
  {
    q: {
      en: "When $\\Delta_y$ is much smaller than $y$, what is the approximate absolute error bound for division $\\Delta_{x/y}$?",
      hu: "Ha $\\Delta_y$ sokkal kisebb $y$-nál, mi az osztás $\\Delta_{x/y}$ abszolút hibakorlátjának közelítése?",
    },
    a: {
      en: "$\\frac{1}{y}\\Delta_x + \\frac{x}{y^2}\\Delta_y$",
      hu: "$\\frac{1}{y}\\Delta_x + \\frac{x}{y^2}\\Delta_y$",
    },
  },
  {
    q: {
      en: "Under what condition regarding the divisor $y$ can the absolute error of a division operation be significantly magnified?",
      hu: "Az osztó $y$ milyen feltétele mellett nagyítódhat fel jelentősen az osztás abszolút hibája?",
    },
    a: {
      en: "When $y$ is much smaller than $x$ or when $y$ is close to 0.",
      hu: "Amikor $y$ sokkal kisebb $x$-nél, vagy amikor $y$ közel van a 0-hoz.",
    },
  },
  {
    q: {
      en: "Concept: Propagation of errors in multiplication.",
      hu: "Fogalom: A hibák terjedése szorzásnál.",
    },
    a: {
      en: "Definition: Errors generally do not propagate rapidly because the relative error is approximately the sum of the relative errors of the operands.",
      hu: "Definíció: A hibák általában nem terjednek gyorsan, mert a relatív hiba közelítőleg az operandusok relatív hibáinak összege.",
    },
  },
  {
    q: {
      en: "Concept: Lagrange's Mean Value Theorem in error analysis.",
      hu: "Fogalom: A Lagrange-féle középértéktétel a hibaanalízisben.",
    },
    a: {
      en: "Purpose: To estimate the absolute error of an approximation when a differentiable function is applied to a value.",
      hu: "Cél: Egy közelítés abszolút hibájának becslése, amikor egy differenciálható függvényt alkalmazunk egy értékre.",
    },
  },
  {
    q: {
      en: "For a differentiable function $f$ with $|f'(x)| \\leq M$, what is the estimated absolute error of $\\tilde{y} = f(\\tilde{x})$ given $|x - \\tilde{x}| \\leq \\Delta_x$?",
      hu: "Egy $f$ differenciálható függvényre $|f'(x)| \\leq M$ esetén mi a $\\tilde{y} = f(\\tilde{x})$ becsült abszolút hibája, ha $|x - \\tilde{x}| \\leq \\Delta_x$?",
    },
    a: { en: "$M \\cdot \\Delta_x$", hu: "$M \\cdot \\Delta_x$" },
  },
  {
    q: {
      en: "The relative error of the result of _____ (operation) is always less than or equal to the maximum relative error of the operands.",
      hu: "A _____ (művelet) eredményének relatív hibája mindig kisebb vagy egyenlő az operandusok maximális relatív hibájánál.",
    },
    a: { en: "Addition", hu: "Összeadás" },
  },
  {
    q: {
      en: "In division, if $y = 0.003$ and $x = 42$, which operand's absolute error bound is magnified more in the result $\\Delta_{x/y}$?",
      hu: "Osztásnál, ha $y = 0.003$ és $x = 42$, melyik operandus abszolút hibakorlátja nagyítódik fel jobban a $\\Delta_{x/y}$ eredményben?",
    },
    a: {
      en: "$\\Delta_y$ (it is multiplied by approximately $\\frac{x}{y^2}$)",
      hu: "$\\Delta_y$ (közelítőleg $\\frac{x}{y^2}$-tel szorzódik)",
    },
  },
  {
    q: {
      en: "In the multiplication proof, the identity $|xy - \\tilde{x}\\tilde{y}| = |xy - x\\tilde{y} + x\\tilde{y} - \\tilde{x}\\tilde{y}|$ is used. This is an example of adding and subtracting the term _____.",
      hu: "A szorzás bizonyításában az $|xy - \\tilde{x}\\tilde{y}| = |xy - x\\tilde{y} + x\\tilde{y} - \\tilde{x}\\tilde{y}|$ azonosságot használjuk. Ez a _____ tag hozzáadásának és kivonásának példája.",
    },
    a: { en: "$x\\tilde{y}$", hu: "$x\\tilde{y}$" },
  },
  {
    q: { en: "Term: Absolute error bound", hu: "Fogalom: Abszolút hibakorlát" },
    a: {
      en: "Definition: An upper limit on the magnitude of the difference between a real number and its approximation.",
      hu: "Definíció: Felső korlát egy valós szám és közelítése közötti különbség nagyságára.",
    },
  },
  {
    q: {
      en: "True or False: The relative error of multiplication is roughly the product of the relative errors of the factors.",
      hu: "Igaz vagy hamis: A szorzás relatív hibája nagyjából a tényezők relatív hibáinak szorzata.",
    },
    a: { en: "False (it is roughly the sum).", hu: "Hamis (nagyjából az összegük)." },
  },
  {
    q: { en: "Formula: Relative error bound of $x^2$.", hu: "Képlet: Az $x^2$ relatív hibakorlátja." },
    a: {
      en: "$2\\delta_x + \\delta_x^2$ (or approximately $2\\delta_x$)",
      hu: "$2\\delta_x + \\delta_x^2$ (vagy közelítőleg $2\\delta_x$)",
    },
  },
  {
    q: {
      en: "If $\\delta_y = 0.1$, what is the denominator in the exact relative error bound formula for division?",
      hu: "Ha $\\delta_y = 0.1$, mi a nevező az osztás pontos relatív hibakorlát képletében?",
    },
    a: { en: "$0.9$ (from $1 - \\delta_y$)", hu: "$0.9$ (az $1 - \\delta_y$-ból)" },
  },
  {
    q: {
      en: "How does the 'worst case estimate' in Theorem 1.14 relate to actual computational errors?",
      hu: "Hogyan viszonyul az 1.14. tétel „legrosszabb esetre vonatkozó becslése” a tényleges számítási hibákhoz?",
    },
    a: {
      en: "It provides a guaranteed upper limit, though actual errors may be lower due to sign cancellation.",
      hu: "Garantált felső korlátot ad, bár a tényleges hibák kisebbek lehetnek az előjelek kiejtése miatt.",
    },
  },
  {
    q: {
      en: "In subtraction, the relative error bound $\\delta_{x-y}$ is a weighted sum of $\\delta_x$ and $\\delta_y$. What happens to the weights as $x$ approaches $y$?",
      hu: "Kivonásnál a $\\delta_{x-y}$ relatív hibakorlát $\\delta_x$ és $\\delta_y$ súlyozott összege. Mi történik a súlyokkal, ahogy $x$ közelít $y$-hoz?",
    },
    a: {
      en: "The weights $\\frac{x}{x-y}$ and $\\frac{y}{x-y}$ grow toward infinity.",
      hu: "A $\\frac{x}{x-y}$ és $\\frac{y}{x-y}$ súlyok a végtelenhez tartanak.",
    },
  },
  {
    q: {
      en: "What is the primary danger of performing division by a number very close to zero in numerical calculations?",
      hu: "Mi a fő veszélye annak, ha numerikus számításokban egy nullához nagyon közeli számmal osztunk?",
    },
    a: {
      en: "It can significantly magnify the absolute errors of the operands.",
      hu: "Jelentősen felnagyíthatja az operandusok abszolút hibáit.",
    },
  },
  {
    q: { en: "Formula: Approximate relative error bound of $y^3$.", hu: "Képlet: Az $y^3$ közelítő relatív hibakorlátja." },
    a: { en: "$3\\delta_y$", hu: "$3\\delta_y$" },
  },
  {
    q: {
      en: "According to the source, why is $\\Delta_x \\Delta_y$ usually omitted in multiplication error approximations?",
      hu: "A forrás szerint miért hagyjuk el általában a $\\Delta_x \\Delta_y$ tagot a szorzás hibaközelítéseiben?",
    },
    a: {
      en: "Because $\\Delta_x$ and $\\Delta_y$ are generally much smaller than $x$ and $y$, making their product negligible.",
      hu: "Mert $\\Delta_x$ és $\\Delta_y$ általában sokkal kisebb $x$-nél és $y$-nál, így szorzatuk elhanyagolható.",
    },
  },
  {
    q: {
      en: "In the proof of the division bound, the assumption $\\delta_y < 1$ ensures that the denominator $y - \\Delta_y$ is _____.",
      hu: "Az osztás korlátjának bizonyításában a $\\delta_y < 1$ feltétel biztosítja, hogy az $y - \\Delta_y$ nevező _____.",
    },
    a: { en: "Greater than zero (positive).", hu: "Nullánál nagyobb (pozitív)." },
  },
  {
    q: {
      en: "What is the relationship between $\\delta_x$ and the 'number of exact digits' in $\\tilde{x}$?",
      hu: "Mi a kapcsolat $\\delta_x$ és a $\\tilde{x}$ „pontos jegyeinek száma” között?",
    },
    a: {
      en: "A smaller relative error bound generally corresponds to a higher number of exact digits.",
      hu: "A kisebb relatív hibakorlát általában több pontos jegynek felel meg.",
    },
  },
  {
    q: {
      en: "Exercise 1: If $x = 3.50$ and $\\tilde{x} = 3.47$, what is the absolute error $|x - \\tilde{x}|$?",
      hu: "1. feladat: Ha $x = 3.50$ és $\\tilde{x} = 3.47$, mennyi az abszolút hiba $|x - \\tilde{x}|$?",
    },
    a: { en: "$0.03$", hu: "$0.03$" },
  },
  {
    q: {
      en: "For the operation $f(x) = \\frac{1}{y}$, using the differentiable function rule, what is the absolute error bound if $|f'(y)| = \\frac{1}{y^2}$?",
      hu: "Az $f(x) = \\frac{1}{y}$ műveletre a differenciálható függvény szabályát használva mi az abszolút hibakorlát, ha $|f'(y)| = \\frac{1}{y^2}$?",
    },
    a: { en: "$\\frac{1}{y^2} \\Delta_y$", hu: "$\\frac{1}{y^2} \\Delta_y$" },
  },
  {
    q: {
      en: "What is the result of the absolute error bound $\\Delta_{3x + 7y}$?",
      hu: "Mi a $\\Delta_{3x + 7y}$ abszolút hibakorlát eredménye?",
    },
    a: { en: "$3\\Delta_x + 7\\Delta_y$", hu: "$3\\Delta_x + 7\\Delta_y$" },
  },
  {
    q: {
      en: "How does the relative error bound of division $\\delta_{x/y}$ compare to that of multiplication $\\delta_{xy}$ when $\\delta_y$ is very small?",
      hu: "Hogyan viszonyul az osztás $\\delta_{x/y}$ relatív hibakorlátja a szorzás $\\delta_{xy}$ korlátjához, ha $\\delta_y$ nagyon kicsi?",
    },
    a: {
      en: "They are approximately the same (both $\\approx \\delta_x + \\delta_y$).",
      hu: "Közelítőleg azonosak (mindkettő $\\approx \\delta_x + \\delta_y$).",
    },
  },
  {
    q: {
      en: "The phenomenon of 'loss of significance' most directly impacts the _____ error of a subtraction result.",
      hu: "A „jegyvesztés” jelensége legközvetlenebbül egy kivonás eredményének _____ hibáját érinti.",
    },
    a: { en: "Relative", hu: "Relatív" },
  },
  {
    q: {
      en: "If $\\tilde{x} = 12.47534$ and $x = 12.47531$, what is $\\Delta_x$ based on this specific error?",
      hu: "Ha $\\tilde{x} = 12.47534$ és $x = 12.47531$, mennyi $\\Delta_x$ e konkrét hiba alapján?",
    },
    a: { en: "$0.00003$ (or $3 \\cdot 10^{-5}$)", hu: "$0.00003$ (vagy $3 \\cdot 10^{-5}$)" },
  },
  {
    q: {
      en: "Why is subtraction considered more 'dangerous' than addition in numerical analysis?",
      hu: "Miért tekintjük a kivonást „veszélyesebbnek” az összeadásnál a numerikus analízisben?",
    },
    a: {
      en: "Subtraction can lead to a catastrophic loss of significant digits, whereas addition preserves them.",
      hu: "A kivonás az értékes jegyek katasztrofális elvesztéséhez vezethet, míg az összeadás megőrzi azokat.",
    },
  },
  {
    q: {
      en: "In the proof of Theorem 1.18, the term $|\\tilde{y}|$ is bounded from below by which expression?",
      hu: "Az 1.18. tétel bizonyításában a $|\\tilde{y}|$ tagot alulról melyik kifejezés korlátozza?",
    },
    a: { en: "$y - \\Delta_y$", hu: "$y - \\Delta_y$" },
  },

  // §1.4 consequences of floating-point arithmetic
  {
    q: {
      en: "What numerical phenomenon occurs when two nearly equal numbers are subtracted in finite arithmetic?",
      hu: "Milyen numerikus jelenség lép fel, amikor két közel egyenlő számot vonunk ki véges aritmetikában?",
    },
    a: {
      en: "The loss of significance (or catastrophic cancellation).",
      hu: "A jegyvesztés (katasztrofális kiejtés).",
    },
  },
  {
    q: {
      en: "In Example 1.19, what is the relative error $\\delta_1$ of the first root using 4-digit arithmetic?",
      hu: "Az 1.19. példában mennyi az első gyök $\\delta_1$ relatív hibája 4 jegyű aritmetikával?",
    },
    a: { en: "$\\delta_1 = 0.0002152$.", hu: "$\\delta_1 = 0.0002152$." },
  },
  {
    q: {
      en: "In Example 1.19, what is the relative error $\\delta_2$ of the second root using 4-digit arithmetic?",
      hu: "Az 1.19. példában mennyi a második gyök $\\delta_2$ relatív hibája 4 jegyű aritmetikával?",
    },
    a: { en: "$\\delta_2 = 0.113096$.", hu: "$\\delta_2 = 0.113096$." },
  },
  {
    q: {
      en: "Why does the second root in Example 1.19 have a significantly higher relative error than the first?",
      hu: "Miért lényegesen nagyobb a második gyök relatív hibája az elsőénél az 1.19. példában?",
    },
    a: {
      en: "It was calculated by subtracting two numbers that are very close in value.",
      hu: "Két, értékben nagyon közeli szám kivonásával számoltuk.",
    },
  },
  {
    q: {
      en: "What is the standard quadratic formula for the root $x_2$?",
      hu: "Mi a szokásos megoldóképlet az $x_2$ gyökre?",
    },
    a: {
      en: "$x_2 = \\frac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
      hu: "$x_2 = \\frac{-b - \\sqrt{b^2 - 4ac}}{2a}$.",
    },
  },
  {
    q: {
      en: "Under what conditions for $b$ and $4ac$ does the standard quadratic formula for $x_2$ lose significance?",
      hu: "$b$ és $4ac$ milyen feltételei mellett veszít jegyeket a szokásos megoldóképlet $x_2$-re?",
    },
    a: {
      en: "When $b$ is negative and $4ac$ is much smaller than $b^2$.",
      hu: "Amikor $b$ negatív, és $4ac$ sokkal kisebb $b^2$-nél.",
    },
  },
  {
    q: {
      en: "What is the algebraically equivalent, stable formula for $x_2$ to avoid subtraction of close numbers?",
      hu: "Mi az $x_2$ algebrailag ekvivalens, stabil képlete a közeli számok kivonásának elkerülésére?",
    },
    a: {
      en: "$x_2 = \\frac{2c}{-b + \\sqrt{b^2 - 4ac}}$.",
      hu: "$x_2 = \\frac{2c}{-b + \\sqrt{b^2 - 4ac}}$.",
    },
  },
  {
    q: {
      en: "Why is the reformulated root formula $x_2 = \\frac{2c}{-b + \\sqrt{b^2 - 4ac}}$ more numerically stable?",
      hu: "Miért numerikusan stabilabb az átalakított $x_2 = \\frac{2c}{-b + \\sqrt{b^2 - 4ac}}$ gyökképlet?",
    },
    a: {
      en: "It replaces the subtraction in the numerator with an addition in the denominator.",
      hu: "A számlálóban lévő kivonást a nevezőben lévő összeadásra cseréli.",
    },
  },
  {
    q: {
      en: "If $b$ is positive and $4ac$ is much smaller than $b^2$, which stable formula should be used for $x_1$?",
      hu: "Ha $b$ pozitív, és $4ac$ sokkal kisebb $b^2$-nél, melyik stabil képletet használjuk $x_1$-re?",
    },
    a: {
      en: "$x_1 = \\frac{2c}{-b - \\sqrt{b^2 - 4ac}}$.",
      hu: "$x_1 = \\frac{2c}{-b - \\sqrt{b^2 - 4ac}}$.",
    },
  },
  {
    q: {
      en: "In Example 1.20, what is the relative error of the second root when using the stable formula?",
      hu: "Az 1.20. példában mennyi a második gyök relatív hibája a stabil képlettel?",
    },
    a: { en: "$\\delta_2 = 0.00044$.", hu: "$\\delta_2 = 0.00044$." },
  },
  {
    q: {
      en: "Evaluation of the expression $\\cos^2 x - \\sin^2 x$ loses significance when $x$ is near _____.",
      hu: "A $\\cos^2 x - \\sin^2 x$ kifejezés kiértékelése jegyeket veszít, amikor $x$ közel van _____.",
    },
    a: { en: "$\\frac{\\pi}{4}$", hu: "$\\frac{\\pi}{4}$-hez" },
  },
  {
    q: {
      en: "What trigonometric identity avoids the loss of significance for $\\cos^2 x - \\sin^2 x$ near $\\frac{\\pi}{4}$?",
      hu: "Melyik trigonometrikus azonosság kerüli el a jegyvesztést a $\\cos^2 x - \\sin^2 x$-nél $\\frac{\\pi}{4}$ közelében?",
    },
    a: { en: "$\\cos 2x$", hu: "$\\cos 2x$" },
  },
  {
    q: {
      en: "Evaluation of the function $f(x) = e^x - 1$ loses significance when $x$ is near _____.",
      hu: "Az $f(x) = e^x - 1$ függvény kiértékelése jegyeket veszít, amikor $x$ közel van _____.",
    },
    a: { en: "0", hu: "0-hoz" },
  },
  {
    q: {
      en: "How can the loss of significance in $e^x - 1$ be avoided when $x$ is near 0?",
      hu: "Hogyan kerülhető el a jegyvesztés az $e^x - 1$-ben, amikor $x$ közel van 0-hoz?",
    },
    a: {
      en: "By using a finite approximation of its Taylor series expansion.",
      hu: "A Taylor-sorfejtésének véges közelítését használva.",
    },
  },
  {
    q: {
      en: "What is the Taylor series expansion for $e^x - 1$ used to improve numerical stability?",
      hu: "Mi az $e^x - 1$ numerikus stabilitás javítására használt Taylor-sorfejtése?",
    },
    a: {
      en: "$x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots + \\frac{x^n}{n!} + \\dots$",
      hu: "$x + \\frac{x^2}{2!} + \\frac{x^3}{3!} + \\dots + \\frac{x^n}{n!} + \\dots$",
    },
  },
  {
    q: {
      en: "What is the primary risk when calculating $15^{40}$ or $40!$ separately in single precision?",
      hu: "Mi a fő kockázat, ha $15^{40}$-t vagy $40!$-t külön számoljuk egyszeres pontosságban?",
    },
    a: {
      en: "The calculation may overflow the range of representable numbers.",
      hu: "A számítás túlcsordulhat az ábrázolható számok tartományán.",
    },
  },
  {
    q: {
      en: "How should the expression $\\frac{a^n}{n!}$ be rearranged to stay within the representable range?",
      hu: "Hogyan rendezzük át az $\\frac{a^n}{n!}$ kifejezést, hogy az ábrázolható tartományon belül maradjon?",
    },
    a: {
      en: "As a product of fractions: $\\frac{a}{n} \\cdot \\frac{a}{n-1} \\cdot \\dots \\cdot \\frac{a}{1}$.",
      hu: "Törtek szorzataként: $\\frac{a}{n} \\cdot \\frac{a}{n-1} \\cdot \\dots \\cdot \\frac{a}{1}$.",
    },
  },
  {
    q: {
      en: "What is the numerical result of $\\frac{15^{40}}{40!}$ when calculated using a stable product method?",
      hu: "Mi az $\\frac{15^{40}}{40!}$ numerikus eredménye stabil szorzatmódszerrel számolva?",
    },
    a: { en: "0.135521", hu: "0.135521" },
  },
  {
    q: {
      en: "In 4-digit arithmetic, what is the result of $1.000 + 0.0003$ after rounding?",
      hu: "4 jegyű aritmetikában mi a $1.000 + 0.0003$ eredménye kerekítés után?",
    },
    a: { en: "1.000", hu: "1.000" },
  },
  {
    q: {
      en: "In Example 1.24, what is the result of adding $1.000$ to one thousand $0.0003$ terms from left to right?",
      hu: "Az 1.24. példában mi az eredménye, ha $1.000$-hez ezer darab $0.0003$ tagot adunk balról jobbra?",
    },
    a: { en: "1.000", hu: "1.000" },
  },
  {
    q: {
      en: "In Example 1.24, what is the result of summing one thousand $0.0003$ terms before adding $1.000$?",
      hu: "Az 1.24. példában mi az eredménye, ha előbb összegezzük az ezer $0.0003$ tagot, majd hozzáadjuk $1.000$-t?",
    },
    a: { en: "1.300", hu: "1.300" },
  },
  {
    q: {
      en: "Example 1.24 demonstrates that addition in floating-point arithmetic is not _____.",
      hu: "Az 1.24. példa azt mutatja, hogy a lebegőpontos aritmetikában az összeadás nem _____.",
    },
    a: { en: "commutative", hu: "kommutatív" },
  },
  {
    q: {
      en: "To minimize rounding errors in a sum of many terms, what is the recommended order of summation?",
      hu: "Sok tag összegénél a kerekítési hibák minimalizálásához milyen összegzési sorrend ajánlott?",
    },
    a: {
      en: "The terms should be added in increasing order of their magnitudes.",
      hu: "A tagokat nagyságuk növekvő sorrendjében kell összeadni.",
    },
  },
  {
    q: {
      en: "Why is summing terms in increasing order advantageous?",
      hu: "Miért előnyös a tagokat növekvő sorrendben összegezni?",
    },
    a: {
      en: "It ensures the partial sums remain of a similar order of magnitude to the next term being added.",
      hu: "Biztosítja, hogy a részösszegek hasonló nagyságrendűek maradjanak a következő hozzáadandó taghoz.",
    },
  },
  {
    q: {
      en: "When evaluating $\\ln x - 1$, loss of significance occurs when $x$ is close to _____.",
      hu: "A $\\ln x - 1$ kiértékelésekor jegyvesztés lép fel, amikor $x$ közel van _____.",
    },
    a: { en: "$e$", hu: "$e$-hez" },
  },
  {
    q: {
      en: "When evaluating $\\sqrt{x + 9} - 3$, loss of significance occurs when $x$ is close to _____.",
      hu: "A $\\sqrt{x + 9} - 3$ kiértékelésekor jegyvesztés lép fel, amikor $x$ közel van _____.",
    },
    a: { en: "0", hu: "0-hoz" },
  },
  {
    q: {
      en: "What is a stable alternative expression for $\\sqrt{x + 9} - 3$ to avoid precision loss near $x=0$?",
      hu: "Mi a $\\sqrt{x + 9} - 3$ stabil alternatív kifejezése a pontosságvesztés elkerülésére $x=0$ közelében?",
    },
    a: { en: "$\\frac{x}{\\sqrt{x + 9} + 3}$", hu: "$\\frac{x}{\\sqrt{x + 9} + 3}$" },
  },
  {
    q: {
      en: "What technique avoids precision loss for $\\sin x - x$ when $x$ is near 0?",
      hu: "Milyen technika kerüli el a pontosságvesztést a $\\sin x - x$-nél, amikor $x$ közel van 0-hoz?",
    },
    a: {
      en: "Taylor series expansion (e.g., $-\\frac{x^3}{6} + \\frac{x^5}{120} - \\dots$).",
      hu: "Taylor-sorfejtés (pl. $-\\frac{x^3}{6} + \\frac{x^5}{120} - \\dots$).",
    },
  },
  {
    q: {
      en: "When evaluating $1 - \\cos x$, loss of significance occurs when $x$ is close to _____.",
      hu: "Az $1 - \\cos x$ kiértékelésekor jegyvesztés lép fel, amikor $x$ közel van _____.",
    },
    a: { en: "0", hu: "0-hoz" },
  },
  {
    q: {
      en: "What trigonometric identity avoids the subtraction of close numbers in $1 - \\cos x$?",
      hu: "Melyik trigonometrikus azonosság kerüli el a közeli számok kivonását az $1 - \\cos x$-ben?",
    },
    a: { en: "$2 \\sin^2(\\frac{x}{2})$", hu: "$2 \\sin^2(\\frac{x}{2})$" },
  },
  {
    q: {
      en: "For the expression $(\\cos x - e^{-x})/x$, why is $x$ near 0 problematic?",
      hu: "A $(\\cos x - e^{-x})/x$ kifejezésnél miért problémás, ha $x$ közel van 0-hoz?",
    },
    a: {
      en: "The numerator involves the subtraction of two numbers nearly equal to 1.",
      hu: "A számláló két, 1-hez közeli szám kivonását tartalmazza.",
    },
  },
  {
    q: {
      en: "In Example 1.23, what is the numerical result of $\\frac{20^{50}}{50!}$ using stable calculation?",
      hu: "Az 1.23. példában mi a $\\frac{20^{50}}{50!}$ numerikus eredménye stabil számítással?",
    },
    a: { en: "3.701902", hu: "3.701902" },
  },
  {
    q: {
      en: "In 4-digit arithmetic, why does $10.00 + 0.002 = 10.00$?",
      hu: "4 jegyű aritmetikában miért $10.00 + 0.002 = 10.00$?",
    },
    a: {
      en: "The exact result $10.002$ is rounded to four significant digits.",
      hu: "A pontos $10.002$ eredményt négy értékes jegyre kerekítjük.",
    },
  },
  {
    q: {
      en: "In Example 1.24 (Variation), what is the sum of ten $0.002$ terms followed by $10.00$?",
      hu: "Az 1.24. példa (variáció) szerint mi tíz darab $0.002$ tag, majd $10.00$ összege?",
    },
    a: { en: "10.02", hu: "10.02" },
  },
  {
    q: {
      en: "What is the exact solution $x_1$ for the equation $x^2 - 83.5x + 1.5 = 0$?",
      hu: "Mi az $x^2 - 83.5x + 1.5 = 0$ egyenlet pontos $x_1$ megoldása?",
    },
    a: { en: "$x_1 = 83.482032$", hu: "$x_1 = 83.482032$" },
  },
  {
    q: {
      en: "What is the exact solution $x_2$ for the equation $x^2 - 83.5x + 1.5 = 0$?",
      hu: "Mi az $x^2 - 83.5x + 1.5 = 0$ egyenlet pontos $x_2$ megoldása?",
    },
    a: { en: "$x_2 = 0.0179679$", hu: "$x_2 = 0.0179679$" },
  },
  {
    q: {
      en: "When solving $ax^2 + bx + c = 0$, what mathematical operation is avoided in the denominator of the stable formula?",
      hu: "Az $ax^2 + bx + c = 0$ megoldásakor milyen műveletet kerülünk el a stabil képlet nevezőjében?",
    },
    a: {
      en: "Subtraction (it is replaced with addition of two positive values).",
      hu: "A kivonást (két pozitív érték összeadására cseréljük).",
    },
  },
  {
    q: {
      en: "The problem of $15^{40}$ being too large for computer storage is an example of _____.",
      hu: "Az a probléma, hogy $15^{40}$ túl nagy a számítógépes tároláshoz, a _____ példája.",
    },
    a: { en: "overflow", hu: "túlcsordulás (overflow)" },
  },
  {
    q: {
      en: "What is the limit of the sequence $\\frac{a^n}{n!}$ as $n$ approaches infinity?",
      hu: "Mi az $\\frac{a^n}{n!}$ sorozat határértéke, ahogy $n$ a végtelenhez tart?",
    },
    a: { en: "0", hu: "0" },
  },
  {
    q: { en: "Concept: Catastrophic Cancellation", hu: "Fogalom: Katasztrofális kiejtés" },
    a: {
      en: "Definition: The significant loss of precision that occurs when two nearly equal approximate values are subtracted.",
      hu: "Definíció: A pontosság jelentős elvesztése, amely két közel egyenlő közelítő érték kivonásakor lép fel.",
    },
  },
  {
    q: {
      en: "How can the expression $(1 - \\cos x) / \\sin x$ be stabilized near $x=0$ using an identity?",
      hu: "Hogyan stabilizálható a $(1 - \\cos x) / \\sin x$ kifejezés $x=0$ közelében egy azonosság segítségével?",
    },
    a: {
      en: "By using the identity $\\tan(\\frac{x}{2})$.",
      hu: "A $\\tan(\\frac{x}{2})$ azonosság használatával.",
    },
  },
  {
    q: {
      en: "In 4-digit arithmetic, the result of $0.0003 + 0.0003$ is _____.",
      hu: "4 jegyű aritmetikában a $0.0003 + 0.0003$ eredménye _____.",
    },
    a: { en: "0.0006", hu: "0.0006" },
  },
  {
    q: {
      en: "Why is addition not numerically commutative in computers?",
      hu: "Miért nem numerikusan kommutatív az összeadás a számítógépekben?",
    },
    a: {
      en: "Because the order of operations changes how rounding is applied to intermediate partial sums.",
      hu: "Mert a műveletek sorrendje megváltoztatja, hogyan alkalmazzuk a kerekítést a közbenső részösszegekre.",
    },
  },
  {
    q: {
      en: "What is the stable form of $\\sqrt{x + 4} - 2$ near $x=0$?",
      hu: "Mi a $\\sqrt{x + 4} - 2$ stabil alakja $x=0$ közelében?",
    },
    a: { en: "$\\frac{x}{\\sqrt{x + 4} + 2}$", hu: "$\\frac{x}{\\sqrt{x + 4} + 2}$" },
  },
  {
    q: {
      en: "In Example 1.19, what values are subtracted to produce the second root $\\tilde{x}_2$?",
      hu: "Az 1.19. példában mely értékeket vonjuk ki a második gyök $\\tilde{x}_2$ előállításához?",
    },
    a: { en: "83.5 and 83.46.", hu: "83.5 és 83.46." },
  },
  {
    q: {
      en: "In Example 1.22, why is an algebraic identity unavailable for $e^x - 1$?",
      hu: "Az 1.22. példában miért nincs algebrai azonosság az $e^x - 1$-re?",
    },
    a: {
      en: "It is a transcendental function without a simple polynomial subtraction identity.",
      hu: "Ez transzcendens függvény, amelyhez nincs egyszerű polinomiális kivonási azonosság.",
    },
  },
  {
    q: {
      en: "What programming structure is suggested for calculating rearranged products like $\\prod \\frac{15}{i}$?",
      hu: "Milyen programozási szerkezet ajánlott az átrendezett szorzatok, pl. $\\prod \\frac{15}{i}$ kiszámítására?",
    },
    a: { en: "A simple **for** cycle.", hu: "Egy egyszerű **for** ciklus." },
  },
  {
    q: {
      en: "Which root of $x^2 - 83.5x + 1.5 = 0$ is accurate to 4 digits in standard 4-digit arithmetic?",
      hu: "Az $x^2 - 83.5x + 1.5 = 0$ melyik gyöke pontos 4 jegyre a szokásos 4 jegyű aritmetikában?",
    },
    a: { en: "The first root, $\\tilde{x}_1$.", hu: "Az első gyök, $\\tilde{x}_1$." },
  },
  {
    q: {
      en: "According to the exercises, which order should $2.274 + 12.04 + 0.4233 + 0.1202 + 0.2204$ be summed for best accuracy?",
      hu: "A feladatok szerint milyen sorrendben kell összegezni a $2.274 + 12.04 + 0.4233 + 0.1202 + 0.2204$-t a legjobb pontosságért?",
    },
    a: {
      en: "$0.1202 + 0.2204 + 0.4233 + 2.274 + 12.04$.",
      hu: "$0.1202 + 0.2204 + 0.4233 + 2.274 + 12.04$.",
    },
  },
  {
    q: {
      en: "The derivation $x_2 = \\frac{b^2 - (b^2 - 4ac)}{2a(-b + \\sqrt{b^2 - 4ac})}$ is based on rationalizing the _____.",
      hu: "Az $x_2 = \\frac{b^2 - (b^2 - 4ac)}{2a(-b + \\sqrt{b^2 - 4ac})}$ levezetés a _____ gyöktelenítésén alapul.",
    },
    a: { en: "numerator", hu: "számláló" },
  },
];
