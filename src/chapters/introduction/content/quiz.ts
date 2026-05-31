import type { QuizQuestion } from '../../../shared/ui/Quiz';

/**
 * Multiple-choice questions for Chapter 1, keyed by the chapter's scrolly
 * section ids. Questions are taken from quiz.md §1.1–§1.3; each quiz.md
 * subsection is attached to the closest chapter section:
 *   §1.1 Introduction to Numerical Analysis → `cx` (Complexity, end of the 1.1 group)
 *   §1.2 Computer Representation of Reals    → `mach` (Machine numbers / IEEE 754)
 *   §1.3 Error Analysis                      → `ep` (Error propagation)
 */
const QUIZZES: Record<string, QuizQuestion[]> = {
  cx: [
    {
      id: 'q-cx-1',
      prompt: { en: 'What is space complexity?', hu: 'Mi a tárkomplexitás (helyigény)?' },
      options: [
        { en: 'Amount of CPU cycles used', hu: 'A felhasznált CPU-ciklusok száma' },
        { en: 'Number of floating point operations', hu: 'A lebegőpontos műveletek száma' },
        { en: 'Time to access memory', hu: 'A memóriaelérés ideje' },
        { en: 'Amount of memory required during computation', hu: 'A számítás során szükséges memória mennyisége' },
      ],
      answer: 3,
      explanation: {
        en: 'Space complexity measures the amount of memory an algorithm needs as the input grows.',
        hu: 'A tárkomplexitás azt méri, mennyi memóriát igényel egy algoritmus a bemenet növekedésével.',
      },
    },
    {
      id: 'q-cx-2',
      prompt: {
        en: 'What type of error occurs when an exact mathematical expression is replaced by an approximate formula?',
        hu: 'Milyen típusú hiba keletkezik, amikor egy pontos matematikai kifejezést közelítő képlettel helyettesítünk?',
      },
      options: [
        { en: 'Modeling error', hu: 'Modellezési hiba' },
        { en: 'Rounding error', hu: 'Kerekítési hiba' },
        { en: 'Measurement error', hu: 'Mérési hiba' },
        { en: 'Truncation error', hu: 'Csonkítási hiba' },
      ],
      answer: 3,
      explanation: {
        en: 'Truncation error comes from replacing an exact process (e.g. a series or derivative) by a finite approximation.',
        hu: 'A csonkítási hiba abból ered, hogy egy pontos folyamatot (pl. sort vagy deriváltat) véges közelítéssel helyettesítünk.',
      },
    },
    {
      id: 'q-cx-3',
      prompt: {
        en: 'If a 1% change in a coefficient causes over 100% change in the solution, the system is:',
        hu: 'Ha egy együttható 1%-os változása több mint 100%-os változást okoz a megoldásban, akkor a rendszer:',
      },
      options: [
        { en: 'Ill-conditioned', hu: 'Rosszul kondicionált' },
        { en: 'Stable', hu: 'Stabil' },
        { en: 'Efficient', hu: 'Hatékony' },
        { en: 'Well-conditioned', hu: 'Jól kondicionált' },
      ],
      answer: 0,
      explanation: {
        en: 'Large output sensitivity to small input changes is the definition of ill-conditioning.',
        hu: 'A kimenet nagy érzékenysége a kis bemeneti változásokra éppen a rossz kondicionáltság definíciója.',
      },
    },
    {
      id: 'q-cx-4',
      prompt: {
        en: 'Which method minimizes the number of multiplications and additions in polynomial evaluation?',
        hu: 'Melyik módszer minimalizálja a szorzások és összeadások számát a polinom kiértékelésekor?',
      },
      options: [
        { en: "Horner's Method", hu: 'Horner-módszer' },
        { en: 'Taylor Expansion', hu: 'Taylor-sorfejtés' },
        { en: "Newton's Method", hu: 'Newton-módszer' },
        { en: 'Lagrange Interpolation', hu: 'Lagrange-interpoláció' },
      ],
      answer: 0,
      explanation: {
        en: "Horner's nested form evaluates a degree-n polynomial with only n multiplications and n additions.",
        hu: 'A Horner-féle beágyazott alak egy n-edfokú polinomot csak n szorzással és n összeadással értékel ki.',
      },
    },
    {
      id: 'q-cx-5',
      prompt: {
        en: 'When is a numerical algorithm considered stable?',
        hu: 'Mikor tekintünk egy numerikus algoritmust stabilnak?',
      },
      options: [
        { en: 'When it is fast', hu: 'Amikor gyors' },
        { en: 'When rounding errors do not significantly affect the result', hu: 'Amikor a kerekítési hibák nem befolyásolják jelentősen az eredményt' },
        { en: 'When it minimizes modeling error', hu: 'Amikor minimalizálja a modellezési hibát' },
        { en: 'When it uses few steps', hu: 'Amikor kevés lépést használ' },
      ],
      answer: 1,
      explanation: {
        en: 'Stability means accumulated rounding errors stay controlled and do not corrupt the result.',
        hu: 'A stabilitás azt jelenti, hogy a felhalmozódó kerekítési hibák kontroll alatt maradnak, és nem rontják el az eredményt.',
      },
    },
  ],
  mach: [
    {
      id: 'q-mach-1',
      prompt: {
        en: 'What is meant by "chopping" in floating point representation?',
        hu: 'Mit jelent a „levágás” (chopping) a lebegőpontos ábrázolásban?',
      },
      options: [
        { en: 'Discarding the sign', hu: 'Az előjel eldobása' },
        { en: 'Rounding the mantissa up', hu: 'A mantissza felfelé kerekítése' },
        { en: 'Eliminating the exponent', hu: 'A kitevő megszüntetése' },
        { en: 'Truncating the mantissa after storing fixed bits', hu: 'A mantissza csonkítása a rögzített számú bit eltárolása után' },
      ],
      answer: 3,
      explanation: {
        en: 'Chopping simply discards (truncates) the mantissa bits beyond the stored precision, without rounding.',
        hu: 'A levágás egyszerűen eldobja (csonkítja) a tárolt pontosságon túli mantisszabiteket, kerekítés nélkül.',
      },
    },
    {
      id: 'q-mach-2',
      prompt: {
        en: 'Which part of the number is not stored in the IEEE 754-1985 binary floating point arithmetic system?',
        hu: 'Az IEEE 754-1985 bináris lebegőpontos rendszerben a szám melyik részét nem tároljuk?',
      },
      options: [
        { en: 'The mantissa bits', hu: 'A mantisszabiteket' },
        { en: 'The sign bit', hu: 'Az előjelbitet' },
        { en: 'The exponent bias', hu: 'A kitevő eltolását (bias)' },
        { en: 'The leading 1 in the mantissa', hu: 'A mantissza vezető 1-esét' },
      ],
      answer: 3,
      explanation: {
        en: 'For normalized numbers the leading 1 is implicit (the hidden bit) and is not stored.',
        hu: 'Normalizált számoknál a vezető 1-es implicit (a rejtett bit), és nem tároljuk.',
      },
    },
    {
      id: 'q-mach-3',
      prompt: {
        en: 'What is the smallest positive representable number in IEEE 754-1985 single precision specification?',
        hu: 'Mi a legkisebb pozitív ábrázolható szám az IEEE 754-1985 egyszeres pontosságú specifikációban?',
      },
      options: [
        { en: '$0$', hu: '$0$' },
        { en: '$(2-2^{-23}) \\cdot 2^{127}$', hu: '$(2-2^{-23}) \\cdot 2^{127}$' },
        { en: '$(1+2^{-23}) \\cdot 2^{-127}$', hu: '$(1+2^{-23}) \\cdot 2^{-127}$' },
        { en: '$2^{-254}$', hu: '$2^{-254}$' },
      ],
      answer: 2,
      explanation: {
        en: 'Option (b) is the largest representable number, and 0 is not positive; the small positive normalized value is the intended answer.',
        hu: 'A (b) válasz a legnagyobb ábrázolható szám, a 0 pedig nem pozitív; a keresett érték a kis pozitív normalizált szám.',
      },
    },
    {
      id: 'q-mach-4',
      prompt: {
        en: 'What is the representation of positive infinity in IEEE 754-1985 single precision specification?',
        hu: 'Hogyan ábrázoljuk a pozitív végtelent az IEEE 754-1985 egyszeres pontosságú specifikációban?',
      },
      options: [
        { en: 'Sign bit 0, exponent all 1s, mantissa all 0s', hu: 'Előjelbit 0, a kitevő csupa 1-es, a mantissza csupa 0' },
        { en: 'Sign bit 0, exponent all 1s, mantissa all 1s', hu: 'Előjelbit 0, a kitevő csupa 1-es, a mantissza csupa 1-es' },
        { en: 'Sign bit 0, exponent all 0s, mantissa all 1s', hu: 'Előjelbit 0, a kitevő csupa 0, a mantissza csupa 1-es' },
        { en: 'Sign bit 1, exponent all 0s, mantissa all 0s', hu: 'Előjelbit 1, a kitevő csupa 0, a mantissza csupa 0' },
      ],
      answer: 0,
      explanation: {
        en: 'Infinity is exponent all 1s with a zero mantissa; a nonzero mantissa would encode NaN.',
        hu: 'A végtelen kódja: a kitevő csupa 1-es, a mantissza pedig nulla; nem nulla mantissza NaN-t kódolna.',
      },
    },
    {
      id: 'q-mach-5',
      prompt: {
        en: 'What is the value of machine epsilon $\\epsilon_m$ in the IEEE 754-1985 single precision standard?',
        hu: 'Mekkora a gépi epszilon $\\epsilon_m$ értéke az IEEE 754-1985 egyszeres pontosságú szabványban?',
      },
      options: [
        { en: '$2^{-23}$', hu: '$2^{-23}$' },
        { en: '$127$', hu: '$127$' },
        { en: '$2^{23}$', hu: '$2^{23}$' },
        { en: '$1$', hu: '$1$' },
      ],
      answer: 0,
      explanation: {
        en: 'Single precision keeps 23 fractional mantissa bits, so machine epsilon is 2^{-23}.',
        hu: 'Az egyszeres pontosság 23 tört mantisszabitet tárol, így a gépi epszilon 2^{-23}.',
      },
    },
  ],
  ep: [
    {
      id: 'q-ep-1',
      prompt: {
        en: 'What is the relative error bound for the subtraction $x - y$ if $x > y > 0$?',
        hu: 'Mi az $x - y$ kivonás relatív hibakorlátja, ha $x > y > 0$?',
      },
      options: [
        { en: '$\\max\\{\\delta_x, \\delta_y\\}$', hu: '$\\max\\{\\delta_x, \\delta_y\\}$' },
        { en: '$\\delta_x + \\delta_y$', hu: '$\\delta_x + \\delta_y$' },
        { en: '$\\frac{x}{x - y}\\delta_x + \\frac{y}{x - y}\\delta_y$', hu: '$\\frac{x}{x - y}\\delta_x + \\frac{y}{x - y}\\delta_y$' },
        { en: '$\\frac{\\Delta_x + \\Delta_y}{x - y}$', hu: '$\\frac{\\Delta_x + \\Delta_y}{x - y}$' },
      ],
      answer: 2,
      explanation: {
        en: 'The relative error of x − y is amplified by the factors x/(x−y) and y/(x−y) — this is cancellation.',
        hu: 'Az x − y relatív hibáját az x/(x−y) és y/(x−y) tényezők felnagyítják — ez a kiejtés (cancellation).',
      },
    },
    {
      id: 'q-ep-2',
      prompt: {
        en: 'What is the relative error bound for the sum $x + y$ (with $x, y > 0$)?',
        hu: 'Mi az $x + y$ összeg relatív hibakorlátja ($x, y > 0$ esetén)?',
      },
      options: [
        { en: '$\\Delta_x + \\Delta_y$', hu: '$\\Delta_x + \\Delta_y$' },
        { en: '$\\frac{\\Delta_x + \\Delta_y}{x + y}$', hu: '$\\frac{\\Delta_x + \\Delta_y}{x + y}$' },
        { en: '$\\max\\{\\delta_x, \\delta_y\\}$', hu: '$\\max\\{\\delta_x, \\delta_y\\}$' },
        { en: '$\\frac{|x + y - (\\tilde{x} + \\tilde{y})|}{x + y}$', hu: '$\\frac{|x + y - (\\tilde{x} + \\tilde{y})|}{x + y}$' },
      ],
      answer: 2,
      explanation: {
        en: 'The relative error of a sum of positive numbers is a convex combination of the inputs, hence bounded by max{δx, δy}.',
        hu: 'Pozitív számok összegének relatív hibája a bemenetek konvex kombinációja, ezért max{δx, δy} korlátozza.',
      },
    },
    {
      id: 'q-ep-3',
      prompt: {
        en: 'Why is the term $\\Delta_x \\Delta_y$ often neglected in multiplication error estimation?',
        hu: 'Miért hanyagoljuk el gyakran a $\\Delta_x \\Delta_y$ tagot a szorzás hibabecslésében?',
      },
      options: [
        { en: 'It increases accuracy', hu: 'Növeli a pontosságot' },
        { en: 'It is too complex to compute', hu: 'Túl bonyolult kiszámítani' },
        { en: 'It is not part of the error', hu: 'Nem része a hibának' },
        { en: 'It is much smaller than the other terms', hu: 'Sokkal kisebb a többi tagnál' },
      ],
      answer: 3,
      explanation: {
        en: 'The product of two small errors is second order, negligible next to the first-order terms.',
        hu: 'Két kis hiba szorzata másodrendű, elhanyagolható az elsőrendű tagok mellett.',
      },
    },
    {
      id: 'q-ep-4',
      prompt: {
        en: 'What is the definition of relative error?',
        hu: 'Mi a relatív hiba definíciója?',
      },
      options: [
        { en: '$\\tilde{x} - x$', hu: '$\\tilde{x} - x$' },
        { en: '$x - \\tilde{x}$', hu: '$x - \\tilde{x}$' },
        { en: '$\\frac{x}{|x - \\tilde{x}|}$', hu: '$\\frac{x}{|x - \\tilde{x}|}$' },
        { en: '$\\frac{|x - \\tilde{x}|}{x}$', hu: '$\\frac{|x - \\tilde{x}|}{x}$' },
      ],
      answer: 3,
      explanation: {
        en: 'Relative error is the absolute error divided by the (true) magnitude of the value.',
        hu: 'A relatív hiba az abszolút hiba osztva az érték (valódi) nagyságával.',
      },
    },
    {
      id: 'q-ep-5',
      prompt: {
        en: 'Which scenario can lead to a large absolute error in the division $x/y$?',
        hu: 'Melyik eset vezethet nagy abszolút hibához az $x/y$ osztásban?',
      },
      options: [
        { en: '$y \\approx 0$', hu: '$y \\approx 0$' },
        { en: 'Large $y$', hu: 'Nagy $y$' },
        { en: '$x = y$', hu: '$x = y$' },
        { en: 'Small $x$', hu: 'Kis $x$' },
      ],
      answer: 0,
      explanation: {
        en: 'Dividing by a value near zero amplifies any error in the operands enormously.',
        hu: 'A nullához közeli értékkel való osztás óriási mértékben felnagyítja az operandusok hibáját.',
      },
    },
  ],
};

export function getQuiz(sectionId: string): QuizQuestion[] {
  return QUIZZES[sectionId] ?? [];
}
