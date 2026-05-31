import { useMemo, useState } from 'react';
import { Matrix, inverse } from 'ml-matrix';
import { useStrings } from '../i18n/useStrings';
import { useLanguage } from '../context/LanguageContext';
import { getTheory } from '../content';
import { getQuiz } from '../quizzes';
import { getQuiz as getBankQuiz } from '../content/quiz';
import { Theory } from '../components/Theory';
import { Quiz } from '../components/Quiz';
import { Quiz as BankQuiz } from '../../../shared/ui/Quiz';
import { GlossaryDeck, FlashcardDeck } from '../components/Decks';
import { MatrixInput } from '../components/MatrixInput';
import { MatrixView } from '../components/MatrixView';
import { Panel, Stat, Verdict, PageHeader } from '../components/ui';
import { spectralRadius, normInf, type Mat } from '../compute';
import { resize } from '../pages/_resize';

const PRESET: Mat = [
  [0, 0.5, 0.1],
  [0.2, 0, 0.3],
  [0.1, 0.2, 0],
];

export function FixedPointPage() {
  const t = useStrings();
  const { lang } = useLanguage();
  const [a, setA] = useState<Mat>(PRESET);
  const [m, setM] = useState(4);

  const { rho, partial, target, diff } = useMemo(() => {
    const n = a.length;
    const A = new Matrix(a);
    // Partial sum I + A + A^2 + ... + A^m
    let term = Matrix.eye(n);
    let sum = Matrix.eye(n);
    for (let i = 1; i <= m; i++) {
      term = term.mmul(A);
      sum = sum.add(term); // accumulate in place
    }
    let inv: Matrix | null = null;
    try {
      inv = inverse(Matrix.eye(n).sub(A)); // (I - A)^{-1}
    } catch {
      inv = null;
    }
    const diffNorm = inv ? normInf(sum.clone().sub(inv).to2DArray()) : Infinity;
    return {
      rho: spectralRadius(a),
      partial: sum.to2DArray(),
      target: inv ? inv.to2DArray() : null,
      diff: diffNorm,
    };
  }, [a, m]);

  const converges = rho < 1;

  return (
    <div className="space-y-6">
      <PageHeader title={t.modules['fixed-point'].title} lead={t.modules['fixed-point'].blurb} />

      <Theory markdown={getTheory('fixed-point', lang)} title={t.common.theory} />

      <Panel title={`${t.fixedPoint.neumannTitle} — ${t.common.playground}`}>
        <p className="mb-4 text-sm text-slate-600 dark:text-slate-300">{t.fixedPoint.neumannDesc}</p>
        <div className="grid gap-6 md:grid-cols-[auto,1fr]">
          <div className="space-y-4">
            <MatrixInput
              value={a}
              onChange={setA}
              label={t.common.matrixA + ' (A)'}
              onResize={(n) => setA((prev) => resize(prev, n))}
              minSize={2}
              maxSize={4}
            />
            <div>
              <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t.fixedPoint.terms}: {m}
              </label>
              <input
                type="range"
                min={0}
                max={20}
                value={m}
                onChange={(e) => setM(Number(e.target.value))}
                className="w-full accent-brand-600"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Stat label={t.fixedPoint.rhoA} value={rho.toFixed(4)} />
              <Stat
                label={t.fixedPoint.diffNorm}
                value={Number.isFinite(diff) ? diff.toExponential(2) : '∞'}
              />
            </div>
            <Verdict
              ok={converges}
              okText={t.fixedPoint.willConverge}
              badText={t.fixedPoint.willDiverge}
            />
          </div>

          <div className="space-y-4 overflow-x-auto">
            <div>
              <div className="mb-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t.fixedPoint.partialSum} (m = {m})
              </div>
              <MatrixView matrix={partial} />
            </div>
            {target && (
              <div>
                <div className="mb-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {t.fixedPoint.target}
                </div>
                <MatrixView matrix={target} />
              </div>
            )}
          </div>
        </div>
      </Panel>

      <GlossaryDeck moduleId="fixed-point" title={lang === 'hu' ? 'Fogalomtár' : 'Glossary'} />
      <FlashcardDeck moduleId="fixed-point" title={lang === 'hu' ? 'Tanulókártyák' : 'Flashcards'} />

      <Quiz moduleId="fixed-point" questions={getQuiz('fixed-point', lang)} />
      <BankQuiz questions={getBankQuiz('fixed-point')} />
    </div>
  );
}
