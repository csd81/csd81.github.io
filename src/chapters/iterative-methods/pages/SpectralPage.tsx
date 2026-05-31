import { useMemo, useState } from 'react';
import { useStrings } from '../i18n/useStrings';
import { useLanguage } from '../context/LanguageContext';
import { getTheory } from '../content';
import { getQuiz } from '../quizzes';
import { getQuiz as getBankQuiz } from '../content/quiz';
import { Theory } from '../components/Theory';
import { Quiz } from '../components/Quiz';
import { Quiz as BankQuiz } from '../../../shared/ui/Quiz';
import { MatrixInput } from '../components/MatrixInput';
import { ComplexPlane } from '../components/ComplexPlane';
import { Panel, Stat, Verdict, PageHeader } from '../components/ui';
import {
  eigenvalues,
  spectralRadius,
  normInf,
  norm1,
  norm2,
  magnitude,
  type Mat,
} from '../compute';
import { resize } from './_resize';

interface Preset {
  name: string;
  m: Mat;
}

const PRESETS: Preset[] = [
  {
    name: 'Convergent T_J',
    m: [
      [0, -0.6, 0.2],
      [0.2, 0, 0.1],
      [-0.25, 0.3333, 0],
    ],
  },
  {
    name: 'Complex eigenvalues',
    m: [
      [0.4, -0.6],
      [0.6, 0.4],
    ],
  },
  {
    name: 'Divergent (ρ>1)',
    m: [
      [0, 1.5],
      [1.2, 0],
    ],
  },
];

export function SpectralPage() {
  const t = useStrings();
  const { lang } = useLanguage();
  const [m, setM] = useState<Mat>(PRESETS[0].m);

  const { eig, rho, ni, n1, n2 } = useMemo(
    () => ({
      eig: eigenvalues(m),
      rho: spectralRadius(m),
      ni: normInf(m),
      n1: norm1(m),
      n2: norm2(m),
    }),
    [m],
  );

  const converges = rho < 1;

  return (
    <div className="space-y-6">
      <PageHeader title={t.modules.spectral.title} lead={t.spectralPage.desc} />

      <Theory markdown={getTheory('spectral', lang)} title={t.common.theory} />

      <Panel>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{t.common.presets}:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => setM(p.m)}
              className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:border-brand-400 hover:bg-brand-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-brand-600/20"
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-[auto,1fr]">
          <div className="space-y-4">
            <MatrixInput
              value={m}
              onChange={setM}
              label="T"
              onResize={(n) => setM((prev) => resize(prev, n))}
              minSize={2}
              maxSize={5}
            />
            <div className="grid grid-cols-2 gap-2">
              <Stat label={t.common.spectralRadius} value={rho.toFixed(4)} />
              <Stat label={t.common.normInf} value={ni.toFixed(4)} />
              <Stat label={t.common.norm1} value={n1.toFixed(4)} />
              <Stat label={t.common.norm2} value={n2.toFixed(4)} />
            </div>
            <Verdict
              ok={converges}
              okText={t.spectralPage.insideCircle}
              badText={t.spectralPage.outsideCircle}
            />
          </div>

          <div>
            <ComplexPlane points={eig} labels={{ re: t.spectralPage.re, im: t.spectralPage.im }} />
            <div className="mt-3">
              <div className="mb-1 text-sm font-semibold text-slate-700 dark:text-slate-200">
                {t.spectralPage.eigenvalues}
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {eig.map((z, i) => {
                  const outside = magnitude(z) >= 1 - 1e-9;
                  return (
                    <span
                      key={i}
                      className={`rounded px-2 py-1 ${
                        outside
                          ? 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300'
                          : 'bg-brand-100 text-brand-700 dark:bg-brand-600/25 dark:text-brand-200'
                      }`}
                    >
                      λ{i + 1} = {z.re.toFixed(3)}
                      {z.im >= 0 ? ' + ' : ' − '}
                      {Math.abs(z.im).toFixed(3)}i &nbsp;(|λ| = {magnitude(z).toFixed(3)})
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Panel>

      <Quiz moduleId="spectral" questions={getQuiz('spectral', lang)} />
      <BankQuiz questions={getBankQuiz('spectral')} />
    </div>
  );
}
