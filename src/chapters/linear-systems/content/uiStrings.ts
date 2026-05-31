import type { Bilingual } from '../lib/types';

/** UI label dictionary. Keys are referenced via the t() helper. */
export const uiStrings: Record<string, Bilingual> = {
  'app.title': { en: 'Linear Systems', hu: 'Lineáris egyenletrendszerek' },
  'app.subtitle': {
    en: 'Interactive Numerical Analysis · Chapter 3',
    hu: 'Interaktív numerikus analízis · 3. fejezet',
  },

  'nav.home': { en: 'Home', hu: 'Kezdőlap' },
  'nav.lab': { en: 'Elimination Lab', hu: 'Elimináció labor' },
  'nav.quiz': { en: 'Quiz', hu: 'Kvíz' },
  'nav.sections': { en: 'Lessons', hu: 'Leckék' },

  'theme.toggle': { en: 'Toggle dark mode', hu: 'Sötét mód váltása' },
  'lang.toggle': { en: 'Magyar', hu: 'English' },

  'home.tagline': {
    en: 'Learn direct methods for solving linear systems — step by step, in English or Hungarian.',
    hu: 'Tanuld meg a lineáris egyenletrendszerek direkt megoldási módszereit — lépésről lépésre, magyarul vagy angolul.',
  },
  'home.lead': {
    en: 'Gaussian & Gauss–Jordan elimination, pivoting strategies, tridiagonal solvers, matrix inversion and determinants — with an interactive visualizer and self-check quizzes.',
    hu: 'Gauss- és Gauss–Jordan-elimináció, főelemkiválasztási stratégiák, tridiagonális megoldók, mátrixinvertálás és determináns — interaktív szemléltetővel és önellenőrző kvízekkel.',
  },
  'home.openLab': { en: 'Open the Elimination Lab', hu: 'Elimináció labor megnyitása' },
  'home.openQuiz': { en: 'Take a quiz', hu: 'Kvíz kitöltése' },
  'home.browse': { en: 'Browse the lessons', hu: 'Leckék böngészése' },

  'lab.mode': { en: 'Task', hu: 'Feladat' },
  'lab.mode.solve': { en: 'Solve Ax = b', hu: 'Ax = b megoldása' },
  'lab.mode.inverse': { en: 'Invert A', hu: 'A invertálása' },
  'lab.mode.determinant': { en: 'Determinant', hu: 'Determináns' },
  'lab.mode.tridiagonal': { en: 'Tridiagonal', hu: 'Tridiagonális' },

  'lab.method': { en: 'Method', hu: 'Módszer' },
  'method.gauss': { en: 'Gaussian elimination', hu: 'Gauss-elimináció' },
  'method.gaussJordan': { en: 'Gauss–Jordan', hu: 'Gauss–Jordan' },

  'lab.pivoting': { en: 'Pivoting', hu: 'Főelemkiválasztás' },
  'pivot.none': { en: 'None', hu: 'Nincs' },
  'pivot.partial': { en: 'Partial', hu: 'Részleges' },
  'pivot.complete': { en: 'Complete', hu: 'Teljes' },
  'pivot.scaled': { en: 'Scaled partial', hu: 'Skálázott részleges' },

  'lab.preset': { en: 'Example', hu: 'Példa' },
  'lab.preset.custom': { en: 'Custom', hu: 'Egyéni' },
  'lab.size': { en: 'Size', hu: 'Méret' },
  'lab.matrixA': { en: 'Coefficient matrix A', hu: 'Együtthatómátrix A' },
  'lab.vectorB': { en: 'Right-hand side b', hu: 'Jobb oldal b' },
  'lab.solve': { en: 'Solve', hu: 'Megoldás' },

  'lab.first': { en: 'First', hu: 'Első' },
  'lab.prev': { en: 'Previous', hu: 'Előző' },
  'lab.play': { en: 'Play', hu: 'Lejátszás' },
  'lab.pause': { en: 'Pause', hu: 'Szünet' },
  'lab.next': { en: 'Next', hu: 'Következő' },
  'lab.last': { en: 'Last', hu: 'Utolsó' },
  'lab.stepOf': { en: 'Step {a} of {b}', hu: '{a}. lépés / {b}' },

  'lab.result': { en: 'Result', hu: 'Eredmény' },
  'lab.solution': { en: 'Solution', hu: 'Megoldás' },
  'lab.determinant': { en: 'Determinant', hu: 'Determináns' },
  'lab.inverse': { en: 'Inverse A⁻¹', hu: 'Inverz A⁻¹' },
  'lab.singular': {
    en: 'The matrix is singular for this strategy — no unique solution.',
    hu: 'A mátrix szinguláris ennél a stratégiánál — nincs egyértelmű megoldás.',
  },
  'lab.varOrder': { en: 'Variable order', hu: 'Változók sorrendje' },
  'lab.note.inverse': {
    en: 'Inversion augments A with the identity and reduces to (I | A⁻¹). Complete/scaled pivoting is disabled here.',
    hu: 'Az invertálás A-t az egységmátrixszal bővíti, és (I | A⁻¹) alakra hozza. A teljes/skálázott főelemkiválasztás itt nem elérhető.',
  },

  'quiz.title': { en: 'Self-check quiz', hu: 'Önellenőrző kvíz' },
  'quiz.check': { en: 'Check', hu: 'Ellenőrzés' },
  'quiz.correct': { en: 'Correct!', hu: 'Helyes!' },
  'quiz.incorrect': { en: 'Not quite — try again or see the solution.', hu: 'Nem egészen — próbáld újra, vagy nézd meg a megoldást.' },
  'quiz.showSolution': { en: 'Show solution', hu: 'Megoldás mutatása' },
  'quiz.hideSolution': { en: 'Hide solution', hu: 'Megoldás elrejtése' },
  'quiz.next': { en: 'Next question', hu: 'Következő kérdés' },
  'quiz.prev': { en: 'Previous', hu: 'Előző' },
  'quiz.score': { en: 'Score', hu: 'Pontszám' },
  'quiz.true': { en: 'True', hu: 'Igaz' },
  'quiz.false': { en: 'False', hu: 'Hamis' },
  'quiz.placeholder': { en: 'your answer', hu: 'a válaszod' },
  'quiz.questionOf': { en: 'Question {a} of {b}', hu: '{a}. kérdés / {b}' },

  'section.toLab': { en: 'Try it in the Lab', hu: 'Próbáld ki a laborban' },
  'common.algorithm': { en: 'Algorithm', hu: 'Algoritmus' },
  'common.theorem': { en: 'Theorem', hu: 'Tétel' },
  'common.example': { en: 'Example', hu: 'Példa' },
  'common.notFound': { en: 'Not found.', hu: 'Nem található.' },
  'common.exercise': { en: 'Exercise', hu: 'Feladat' },
  'common.exercises': { en: 'Exercises', hu: 'Feladatok' },
  'common.showSolution': { en: 'Show solution', hu: 'Megoldás' },
};
