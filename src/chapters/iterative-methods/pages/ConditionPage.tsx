import { useMemo, useState } from 'react';
import { useStrings } from '../i18n/useStrings';
import { useLanguage } from '../context/LanguageContext';
import { getTheory } from '../content';
import { getQuiz } from '../quizzes';
import { Theory } from '../components/Theory';
import { Quiz } from '../components/Quiz';
import { MatrixInput } from '../components/MatrixInput';
import { VectorInput } from '../components/VectorInput';
import { Panel, Stat, Verdict, PageHeader } from '../components/ui';
import {
  conditionNumber,
  hilbert,
  solve,
  vectorNorm,
  type Mat,
  type Vec,
} from '../compute';
import { resize, resizeVec } from './_resize';

interface Preset {
  name: string;
  a: Mat;
  b: Vec;
}

const PRESETS: Preset[] = [
  {
    name: 'Ill-conditioned (4.20)',
    a: [
      [4, 1],
      [4.03, 1],
    ],
    b: [5, 5.03],
  },
  {
    name: 'Well-conditioned',
    a: [
      [2, 1],
      [1, 3],
    ],
    b: [3, 5],
  },
];

function fmtBig(v: number): string {
  if (!Number.isFinite(v)) return '∞';
  if (v >= 1e4) return v.toExponential(2);
  return v.toFixed(2);
}

export function ConditionPage() {
  const t = useStrings();
  const { lang } = useLanguage();

  const [a, setA] = useState<Mat>(PRESETS[0].a);
  const [b, setB] = useState<Vec>(PRESETS[0].b);
  const [eps, setEps] = useState(0.03); // absolute perturbation on the last entry of b
  const [hn, setHn] = useState(5);

  const applyPreset = (p: Preset) => {
    setA(p.a);
    setB(p.b);
  };

  const resizeAll = (size: number) => {
    setA((prev) => resize(prev, size));
    setB((prev) => resizeVec(prev, size));
  };

  const { condInf, cond1, cond2, relB, relX, bound } = useMemo(() => {
    const x = solve(a, b);
    const bp = [...b];
    bp[bp.length - 1] += eps;
    const xp = solve(a, bp);
    const cInf = conditionNumber(a, 'inf');
    let rB = 0;
    let rX = 0;
    if (x && xp) {
      const db = bp.map((v, i) => v - b[i]);
      const dx = xp.map((v, i) => v - x[i]);
      rB = vectorNorm(db, 'inf') / vectorNorm(b, 'inf');
      rX = vectorNorm(dx, 'inf') / vectorNorm(x, 'inf');
    }
    return {
      condInf: cInf,
      cond1: conditionNumber(a, '1'),
      cond2: conditionNumber(a, '2'),
      relB: rB,
      relX: rX,
      bound: cInf * rB,
    };
  }, [a, b, eps]);

  const hilbertRows = useMemo(
    () =>
      Array.from({ length: 7 }, (_, i) => {
        const k = i + 2;
        return { n: k, cond: conditionNumber(hilbert(k), '2') };
      }),
    [],
  );

  const ill = condInf > 100;

  return (
    <div className="space-y-6">
      <PageHeader title={t.modules.condition.title} lead={t.conditionPage.desc} />

      <Theory markdown={getTheory('condition', lang)} title={t.common.theory} />

      <Panel>
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">{t.common.presets}:</span>
          {PRESETS.map((p) => (
            <button
              key={p.name}
              onClick={() => applyPreset(p)}
              className="rounded-full border border-slate-300 px-3 py-1 text-xs font-medium text-slate-700 hover:border-brand-400 hover:bg-brand-50 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-brand-600/20"
            >
              {p.name}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-start gap-6">
          <MatrixInput value={a} onChange={setA} label="A" onResize={resizeAll} minSize={2} maxSize={5} />
          <VectorInput value={b} onChange={setB} label="b" />
          <div className="min-w-[220px] flex-1">
            <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.conditionPage.perturbB}: Δb<sub>{b.length}</sub> = {eps.toFixed(3)}
            </label>
            <input
              type="range"
              min={-0.5}
              max={0.5}
              step={0.005}
              value={eps}
              onChange={(e) => setEps(Number(e.target.value))}
              className="w-full accent-brand-600"
            />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Stat label={t.conditionPage.relErrB} value={relB.toExponential(2)} />
              <Stat label={t.conditionPage.relErrX} value={relX.toExponential(2)} />
              <Stat label={t.conditionPage.bound} value={bound.toExponential(2)} />
            </div>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center gap-3">
          <Verdict
            ok={!ill}
            okText={t.conditionPage.wellConditioned}
            badText={t.conditionPage.illConditioned}
          />
          <Stat label={t.conditionPage.condInf} value={fmtBig(condInf)} />
          <Stat label={t.conditionPage.cond1} value={fmtBig(cond1)} />
          <Stat label={t.conditionPage.cond2} value={fmtBig(cond2)} />
        </div>
      </Panel>

      <Panel title={t.conditionPage.hilbertTitle}>
        <p className="mb-3 text-sm text-slate-600 dark:text-slate-300">{t.conditionPage.hilbertDesc}</p>
        <label className="mb-2 block text-sm font-semibold text-slate-700 dark:text-slate-200">
          {t.conditionPage.n} = {hn}
        </label>
        <input
          type="range"
          min={2}
          max={8}
          value={hn}
          onChange={(e) => setHn(Number(e.target.value))}
          className="w-56 accent-brand-600"
        />
        <div className="mt-3 text-sm">
          cond₂(H<sub>{hn}</sub>) ={' '}
          <span className="font-mono font-semibold text-brand-700 dark:text-brand-300">
            {conditionNumber(hilbert(hn), '2').toExponential(2)}
          </span>
        </div>

        <table className="mt-4 border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
              <th className="border border-slate-300 px-3 py-1 dark:border-slate-700">n</th>
              <th className="border border-slate-300 px-3 py-1 dark:border-slate-700">cond₂(Hₙ)</th>
            </tr>
          </thead>
          <tbody>
            {hilbertRows.map((r) => (
              <tr key={r.n} className={r.n === hn ? 'bg-brand-50 dark:bg-brand-600/20' : ''}>
                <td className="border border-slate-300 px-3 py-1 text-center font-mono dark:border-slate-700">
                  {r.n}
                </td>
                <td className="border border-slate-300 px-3 py-1 text-right font-mono dark:border-slate-700">
                  {r.cond.toExponential(2)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </Panel>

      <Quiz moduleId="condition" questions={getQuiz('condition', lang)} />
    </div>
  );
}
