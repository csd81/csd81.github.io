import { useEffect, useMemo, useRef, useState } from 'react';
import { useStrings } from '../i18n/useStrings';
import { useLanguage } from '../context/LanguageContext';
import { getTheory } from '../content';
import { getQuiz } from '../quizzes';
import { Theory } from '../components/Theory';
import { Quiz } from '../components/Quiz';
import { MatrixInput } from '../components/MatrixInput';
import { VectorInput } from '../components/VectorInput';
import { MatrixView } from '../components/MatrixView';
import { IterationTable } from '../components/IterationTable';
import { ConvergenceChart } from '../components/ConvergenceChart';
import { Panel, Stat, Verdict, PageHeader } from '../components/ui';
import {
  iterate,
  jacobiT,
  spectralRadius,
  normInf,
  isDiagonallyDominant,
  solve,
  type Mat,
  type Vec,
  type Method,
} from '../compute';
import { resize, resizeVec } from './_resize';

interface Preset {
  name: string;
  a: Mat;
  b: Vec;
}

const PRESETS: Preset[] = [
  {
    name: 'Textbook (convergent)',
    a: [
      [5, 3, -1],
      [2, -10, 1],
      [-3, 4, -12],
    ],
    b: [-4, 25, -47],
  },
  {
    name: 'Strongly dominant',
    a: [
      [10, -1, 2],
      [-1, 11, -1],
      [2, -1, 10],
    ],
    b: [6, 25, -11],
  },
  {
    name: 'Divergent (ρ>1)',
    a: [
      [1, 3],
      [2, 1],
    ],
    b: [4, 3],
  },
];

export function JacobiGaussSeidelPage() {
  const t = useStrings();
  const { lang } = useLanguage();

  const [a, setA] = useState<Mat>(PRESETS[0].a);
  const [b, setB] = useState<Vec>(PRESETS[0].b);
  const [x0, setX0] = useState<Vec>([0, 0, 0]);
  const [maxSteps, setMaxSteps] = useState(30);
  const [tableMethod, setTableMethod] = useState<Method>('gauss-seidel');
  const [highlightK, setHighlightK] = useState<number | undefined>(undefined);
  const [playing, setPlaying] = useState(false);
  const timer = useRef<number | null>(null);

  const n = a.length;

  const applyPreset = (p: Preset) => {
    setA(p.a);
    setB(p.b);
    setX0(p.b.map(() => 0));
    setHighlightK(undefined);
    setPlaying(false);
  };

  const resizeAll = (size: number) => {
    setA((prev) => resize(prev, size));
    setB((prev) => resizeVec(prev, size));
    setX0((prev) => resizeVec(prev, size));
    setHighlightK(undefined);
  };

  const exact = useMemo(() => solve(a, b), [a, b]);

  const jac = useMemo(
    () => iterate(a, b, x0, 'jacobi', maxSteps, 1e-7, exact),
    [a, b, x0, maxSteps, exact],
  );
  const gs = useMemo(
    () => iterate(a, b, x0, 'gauss-seidel', maxSteps, 1e-7, exact),
    [a, b, x0, maxSteps, exact],
  );

  const info = useMemo(() => {
    const tj = jacobiT(a);
    const rhoJ = tj ? spectralRadius(tj.T) : NaN;
    const normJ = tj ? normInf(tj.T) : NaN;
    return {
      tJ: tj?.T ?? null,
      rhoJ,
      normJ,
      diagDom: isDiagonallyDominant(a),
    };
  }, [a]);

  const metric: 'residualNorm' | 'errorNorm' = exact ? 'errorNorm' : 'residualNorm';
  const maxK = Math.max(jac.steps.length, gs.steps.length) - 1;

  // Step-through animation.
  useEffect(() => {
    if (!playing) {
      if (timer.current) window.clearInterval(timer.current);
      return;
    }
    timer.current = window.setInterval(() => {
      setHighlightK((k) => {
        const next = (k ?? -1) + 1;
        if (next >= maxK) {
          setPlaying(false);
          return maxK;
        }
        return next;
      });
    }, 350);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [playing, maxK]);

  const zeroDiag = jac.error === 'zero-diagonal';
  const tableSteps = tableMethod === 'jacobi' ? jac.steps : gs.steps;

  return (
    <div className="space-y-6">
      <PageHeader title={t.modules['jacobi-gs'].title} lead={t.modules['jacobi-gs'].blurb} />

      <Theory markdown={getTheory('jacobi-gs', lang)} title={t.common.theory} />

      {/* Inputs */}
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
          <MatrixInput
            value={a}
            onChange={setA}
            label="A"
            onResize={resizeAll}
            minSize={2}
            maxSize={6}
          />
          <VectorInput value={b} onChange={setB} label="b" />
          <VectorInput value={x0} onChange={setX0} label={t.common.initialGuess} />
          <div>
            <label className="mb-1 block text-sm font-semibold text-slate-700 dark:text-slate-200">
              {t.common.maxSteps}: {maxSteps}
            </label>
            <input
              type="range"
              min={5}
              max={80}
              value={maxSteps}
              onChange={(e) => setMaxSteps(Number(e.target.value))}
              className="w-40 accent-brand-600"
            />
          </div>
        </div>

        {zeroDiag && (
          <p className="mt-3 rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-700 dark:bg-amber-500/15 dark:text-amber-300">
            {t.common.zeroDiagonal}
          </p>
        )}
      </Panel>

      {/* Stats + verdict */}
      <Panel>
        <div className="flex flex-wrap items-center gap-3">
          <Verdict
            ok={info.rhoJ < 1}
            okText={`${t.common.convergent} (ρ(T_J) = ${info.rhoJ.toFixed(3)})`}
            badText={`${t.common.divergent} (ρ(T_J) = ${info.rhoJ.toFixed(3)})`}
          />
          <Verdict
            ok={info.diagDom}
            okText={t.common.diagDominant}
            badText={`${t.common.diagDominant}: ${t.common.no}`}
          />
        </div>
        <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Stat label={t.common.spectralRadius.replace('T', 'T_J')} value={info.rhoJ.toFixed(4)} />
          <Stat label="‖T_J‖∞" value={Number.isFinite(info.normJ) ? info.normJ.toFixed(4) : '—'} />
          {exact && (
            <Stat
              label={t.common.trueSolution}
              value={`(${exact.map((v) => +v.toFixed(2)).join(', ')})`}
            />
          )}
        </div>
        {info.tJ && (
          <div className="mt-4 overflow-x-auto">
            <MatrixView matrix={info.tJ} prefix={'\\mathbf{T}_J = '} />
          </div>
        )}
      </Panel>

      {/* Chart: Jacobi vs Gauss–Seidel race */}
      <Panel title="Jacobi vs Gauss–Seidel">
        <ConvergenceChart
          series={[
            { name: t.common.jacobi, color: '#f59e0b', steps: jac.steps },
            { name: t.common.gaussSeidel, color: '#4f46e5', steps: gs.steps },
          ]}
          metric={metric}
          highlightK={highlightK}
          yLabel={metric === 'errorNorm' ? t.common.error : t.common.residual}
        />
        {/* Animation controls */}
        <div className="mt-3 flex flex-wrap items-center gap-2">
          <button
            onClick={() => {
              setHighlightK(0);
              setPlaying(true);
            }}
            className="rounded-lg bg-brand-600 px-3 py-1.5 text-sm font-semibold text-white hover:bg-brand-700"
          >
            ▶ {t.common.play}
          </button>
          <button
            onClick={() => setPlaying(false)}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ⏸ {t.common.pause}
          </button>
          <button
            onClick={() => setHighlightK((k) => Math.max(0, (k ?? 0) - 1))}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ◀
          </button>
          <button
            onClick={() => setHighlightK((k) => Math.min(maxK, (k ?? -1) + 1))}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            ▶
          </button>
          <button
            onClick={() => {
              setHighlightK(undefined);
              setPlaying(false);
            }}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-semibold text-slate-700 hover:bg-slate-100 dark:border-slate-600 dark:text-slate-200 dark:hover:bg-slate-800"
          >
            {t.common.reset}
          </button>
          {highlightK !== undefined && (
            <span className="ml-2 font-mono text-sm text-slate-500 dark:text-slate-400">k = {highlightK}</span>
          )}
        </div>
      </Panel>

      {/* Iteration table */}
      <Panel>
        <div className="mb-3 inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-sm font-medium dark:border-slate-600 dark:bg-slate-800">
          {(['jacobi', 'gauss-seidel'] as Method[]).map((mth) => (
            <button
              key={mth}
              onClick={() => setTableMethod(mth)}
              className={`rounded-md px-3 py-1 transition ${
                tableMethod === mth
                  ? 'bg-brand-600 text-white'
                  : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
              }`}
            >
              {mth === 'jacobi' ? t.common.jacobi : t.common.gaussSeidel}
            </button>
          ))}
        </div>
        <IterationTable
          steps={tableSteps}
          highlightK={highlightK}
          showError={!!exact}
          labels={{
            iteration: 'k',
            residual: t.common.residual,
            error: t.common.error,
          }}
        />
        <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
          n = {n}, {tableSteps.length - 1} {t.common.iteration.toLowerCase()}.
        </p>
      </Panel>

      <Quiz moduleId="jacobi-gs" questions={getQuiz('jacobi-gs', lang)} />
    </div>
  );
}
