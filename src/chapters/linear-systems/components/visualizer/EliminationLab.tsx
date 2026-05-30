import { useEffect, useMemo, useRef, useState } from 'react';
import { F, toKatex, type Frac } from '../../lib/fraction';
import type { FracMatrix, Method, PivotStrategy, Step } from '../../lib/types';
import { solveSystem } from '../../lib/solve';
import { invertMatrix } from '../../lib/inverse';
import { determinant } from '../../lib/determinant';
import { solveTridiagonal } from '../../lib/tridiagonal';
import { useI18n } from '../../app/LanguageContext';
import type { LabMode } from '../../app/labMode';
import {
  systemPresets,
  matrixPresets,
  tridiagonalPresets,
  type NumLike,
  type SystemPreset,
} from '../../content/examples';
import { Tex } from '../math/Tex';
import { MatrixView } from '../math/MatrixView';
import { MatrixInput, VectorInput } from './MatrixInput';

export interface LabInitial {
  mode?: LabMode;
  method?: Method;
  pivot?: PivotStrategy;
  presetId?: string;
}

interface TriState {
  a: string[];
  d: string[];
  c: string[];
  b: string[];
}

interface LabRun {
  steps: Step[];
  error: string | null;
  solution?: Frac[] | null;
  determinant?: Frac | null;
  inverse?: FracMatrix | null;
  singular?: boolean;
}

const strMat = (A: NumLike[][]): string[][] => A.map((row) => row.map(String));
const strVec = (v: NumLike[]): string[] => v.map(String);
const zeros = (n: number): string[] => Array.from({ length: n }, () => '0');
const zeroMat = (n: number): string[][] => Array.from({ length: n }, () => zeros(n));

const parseVec = (v: string[]): Frac[] =>
  v.map((s) => F(s.trim() === '' ? 0 : s.trim()));
const parseMat = (A: string[][]): FracMatrix => A.map(parseVec);

function presetsForMode(mode: LabMode): SystemPreset[] {
  if (mode === 'solve') return systemPresets;
  return matrixPresets; // inverse / determinant
}

export function EliminationLab({ initial }: { initial?: LabInitial }) {
  const { t, pick, lang } = useI18n();

  const [mode, setMode] = useState<LabMode>(initial?.mode ?? 'solve');
  const [method, setMethod] = useState<Method>(initial?.method ?? 'gauss');
  const [pivot, setPivot] = useState<PivotStrategy>(initial?.pivot ?? 'none');

  // Seed matrix / vector state from the requested (or first) preset.
  const seed = useMemo(() => {
    const m = initial?.mode ?? 'solve';
    if (m === 'tridiagonal') {
      const p =
        tridiagonalPresets.find((x) => x.id === initial?.presetId) ?? tridiagonalPresets[0];
      return { presetId: p.id };
    }
    const list = presetsForMode(m);
    const p = list.find((x) => x.id === initial?.presetId) ?? list[0];
    return { presetId: p.id };
  }, [initial?.mode, initial?.presetId]);

  const [presetId, setPresetId] = useState<string>(seed.presetId);

  const firstSolve = systemPresets[0];
  const [A, setA] = useState<string[][]>(() => {
    const m = initial?.mode ?? 'solve';
    const list = presetsForMode(m);
    const p = list.find((x) => x.id === initial?.presetId) ?? list[0] ?? firstSolve;
    return strMat(p.A);
  });
  const [b, setB] = useState<string[]>(() => {
    const p = systemPresets.find((x) => x.id === initial?.presetId) ?? firstSolve;
    return strVec(p.b);
  });
  const [tri, setTri] = useState<TriState>(() => {
    const p =
      tridiagonalPresets.find((x) => x.id === initial?.presetId) ?? tridiagonalPresets[0];
    return { a: strVec(p.a), d: strVec(p.d), c: strVec(p.c), b: strVec(p.b) };
  });

  const [idx, setIdx] = useState(0);
  const [playing, setPlaying] = useState(false);

  // ---- handlers ----
  function loadPreset(nextMode: LabMode, id: string) {
    setPresetId(id);
    if (nextMode === 'tridiagonal') {
      const p = tridiagonalPresets.find((x) => x.id === id) ?? tridiagonalPresets[0];
      setTri({ a: strVec(p.a), d: strVec(p.d), c: strVec(p.c), b: strVec(p.b) });
      return;
    }
    const list = presetsForMode(nextMode);
    const p = list.find((x) => x.id === id) ?? list[0];
    if (p) {
      setA(strMat(p.A));
      setB(strVec(p.b));
    }
  }

  function changeMode(next: LabMode) {
    setMode(next);
    if (next === 'inverse') {
      setMethod('gauss-jordan');
      if (pivot === 'complete' || pivot === 'scaled') setPivot('none');
    } else if (next === 'determinant') {
      setMethod('gauss');
    }
    if (next === 'tridiagonal') {
      loadPreset(next, tridiagonalPresets[0].id);
    } else {
      loadPreset(next, presetsForMode(next)[0].id);
    }
  }

  function resize(n: number) {
    setA((prev) => {
      const next = zeroMat(n);
      for (let i = 0; i < Math.min(n, prev.length); i++)
        for (let j = 0; j < Math.min(n, prev[i].length); j++) next[i][j] = prev[i][j];
      return next;
    });
    setB((prev) => {
      const next = zeros(n);
      for (let i = 0; i < Math.min(n, prev.length); i++) next[i] = prev[i];
      return next;
    });
    setPresetId('custom');
  }

  // ---- compute run ----
  const run: LabRun = useMemo(() => {
    try {
      if (mode === 'tridiagonal') {
        const a = parseVec(tri.a);
        const d = parseVec(tri.d);
        const c = parseVec(tri.c);
        const bb = parseVec(tri.b);
        if (a.length !== d.length - 1 || c.length !== d.length - 1 || bb.length !== d.length) {
          return { steps: [], error: 'dimension mismatch' };
        }
        const r = solveTridiagonal({ a, d, c, b: bb });
        return { steps: r.steps, error: null, solution: r.solution, singular: r.singular };
      }
      const Amat = parseMat(A);
      if (mode === 'solve') {
        const r = solveSystem(Amat, parseVec(b), { method, pivoting: pivot });
        return {
          steps: r.steps,
          error: null,
          solution: r.solution,
          determinant: r.determinant,
          singular: r.singular,
        };
      }
      if (mode === 'inverse') {
        const r = invertMatrix(Amat, pivot === 'partial' ? 'partial' : 'none');
        return { steps: r.steps, error: null, inverse: r.inverse, singular: r.singular };
      }
      const r = determinant(Amat, pivot);
      return { steps: r.steps, error: null, determinant: r.determinant };
    } catch {
      return { steps: [], error: 'invalid' };
    }
  }, [mode, method, pivot, A, b, tri]);

  // Reset playback whenever the run changes.
  useEffect(() => {
    setIdx(0);
    setPlaying(false);
  }, [run]);

  // Auto-play timer.
  const timer = useRef<number | null>(null);
  useEffect(() => {
    if (!playing) return;
    timer.current = window.setInterval(() => {
      setIdx((i) => {
        if (i >= run.steps.length - 1) {
          setPlaying(false);
          return i;
        }
        return i + 1;
      });
    }, 900);
    return () => {
      if (timer.current) window.clearInterval(timer.current);
    };
  }, [playing, run.steps.length]);

  const steps = run.steps;
  const safeIdx = Math.min(idx, Math.max(0, steps.length - 1));
  const step = steps[safeIdx];
  const n = A.length;

  const showMethod = mode === 'solve';
  const showPivot = mode === 'solve' || mode === 'determinant' || mode === 'inverse';
  const pivotOptions: PivotStrategy[] =
    mode === 'inverse' ? ['none', 'partial'] : ['none', 'partial', 'complete', 'scaled'];

  const presetList =
    mode === 'tridiagonal' ? tridiagonalPresets : presetsForMode(mode);
  const activePreset =
    presetList.find((p) => p.id === presetId) ?? null;

  return (
    <div className="grid-2">
      {/* ----- Controls ----- */}
      <div className="card stack">
        <div className="row">
          <label className="field" style={{ flex: 1 }}>
            {t('lab.mode')}
            <select value={mode} onChange={(e) => changeMode(e.target.value as LabMode)}>
              <option value="solve">{t('lab.mode.solve')}</option>
              <option value="inverse">{t('lab.mode.inverse')}</option>
              <option value="determinant">{t('lab.mode.determinant')}</option>
              <option value="tridiagonal">{t('lab.mode.tridiagonal')}</option>
            </select>
          </label>
          <label className="field" style={{ flex: 1 }}>
            {t('lab.preset')}
            <select
              value={presetId}
              onChange={(e) => loadPreset(mode, e.target.value)}
            >
              {presetList.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.ref} — {pick(p.name)}
                </option>
              ))}
              <option value="custom">{t('lab.preset.custom')}</option>
            </select>
          </label>
        </div>

        {(showMethod || showPivot) && (
          <div className="row">
            {showMethod && (
              <label className="field" style={{ flex: 1 }}>
                {t('lab.method')}
                <select value={method} onChange={(e) => setMethod(e.target.value as Method)}>
                  <option value="gauss">{t('method.gauss')}</option>
                  <option value="gauss-jordan">{t('method.gaussJordan')}</option>
                </select>
              </label>
            )}
            {showPivot && (
              <label className="field" style={{ flex: 1 }}>
                {t('lab.pivoting')}
                <select
                  value={pivot}
                  onChange={(e) => setPivot(e.target.value as PivotStrategy)}
                >
                  {pivotOptions.map((p) => (
                    <option key={p} value={p}>
                      {t(`pivot.${p}`)}
                    </option>
                  ))}
                </select>
              </label>
            )}
          </div>
        )}

        {activePreset && 'note' in activePreset && activePreset.note && (
          <div className="caption">{pick(activePreset.note)}</div>
        )}
        {mode === 'inverse' && <div className="muted" style={{ fontSize: '0.82rem' }}>{t('lab.note.inverse')}</div>}

        {/* Inputs */}
        {mode === 'tridiagonal' ? (
          <div className="stack">
            <VectorInput
              label={lang === 'hu' ? 'Főátló d' : 'Diagonal d'}
              values={tri.d}
              horizontal
              onChange={(i, v) => {
                setPresetId('custom');
                setTri((p) => ({ ...p, d: p.d.map((x, k) => (k === i ? v : x)) }));
              }}
            />
            <VectorInput
              label={lang === 'hu' ? 'Felső átló c' : 'Super-diagonal c'}
              values={tri.c}
              horizontal
              onChange={(i, v) => {
                setPresetId('custom');
                setTri((p) => ({ ...p, c: p.c.map((x, k) => (k === i ? v : x)) }));
              }}
            />
            <VectorInput
              label={lang === 'hu' ? 'Alsó átló a' : 'Sub-diagonal a'}
              values={tri.a}
              horizontal
              onChange={(i, v) => {
                setPresetId('custom');
                setTri((p) => ({ ...p, a: p.a.map((x, k) => (k === i ? v : x)) }));
              }}
            />
            <VectorInput
              label={t('lab.vectorB')}
              values={tri.b}
              horizontal
              onChange={(i, v) => {
                setPresetId('custom');
                setTri((p) => ({ ...p, b: p.b.map((x, k) => (k === i ? v : x)) }));
              }}
            />
          </div>
        ) : (
          <div className="stack">
            <label className="field">
              {t('lab.size')}
              <select value={n} onChange={(e) => resize(Number(e.target.value))}>
                {[2, 3, 4, 5].map((s) => (
                  <option key={s} value={s}>
                    {s} × {s}
                  </option>
                ))}
              </select>
            </label>
            <MatrixInput
              label={t('lab.matrixA')}
              values={A}
              onChange={(r, c, v) => {
                setPresetId('custom');
                setA((prev) => prev.map((row, i) => (i === r ? row.map((x, j) => (j === c ? v : x)) : row)));
              }}
            />
            {mode === 'solve' && (
              <VectorInput
                label={t('lab.vectorB')}
                values={b}
                onChange={(i, v) => {
                  setPresetId('custom');
                  setB((prev) => prev.map((x, k) => (k === i ? v : x)));
                }}
              />
            )}
          </div>
        )}
      </div>

      {/* ----- Visualisation ----- */}
      <div className="card stack">
        {run.error || !step ? (
          <p className="feedback err">
            {lang === 'hu' ? 'Érvénytelen bemenet.' : 'Invalid input.'}
          </p>
        ) : (
          <>
            <div className="caption">{pick(step.caption)}</div>
            <MatrixView
              matrix={step.matrix}
              coeffCols={mode === 'inverse' ? undefined : step.coeffCols}
              pivot={step.pivot}
              changed={step.changed}
              varOrder={step.varOrder}
            />

            <div className="kbd-controls">
              <button className="icon-btn" onClick={() => setIdx(0)} disabled={safeIdx === 0}>
                ⏮ {t('lab.first')}
              </button>
              <button
                className="icon-btn"
                onClick={() => setIdx((i) => Math.max(0, i - 1))}
                disabled={safeIdx === 0}
              >
                ◀ {t('lab.prev')}
              </button>
              <button className="btn" onClick={() => setPlaying((p) => !p)}>
                {playing ? `⏸ ${t('lab.pause')}` : `▶ ${t('lab.play')}`}
              </button>
              <button
                className="icon-btn"
                onClick={() => setIdx((i) => Math.min(steps.length - 1, i + 1))}
                disabled={safeIdx >= steps.length - 1}
              >
                {t('lab.next')} ▶
              </button>
              <button
                className="icon-btn"
                onClick={() => setIdx(steps.length - 1)}
                disabled={safeIdx >= steps.length - 1}
              >
                {t('lab.last')} ⏭
              </button>
            </div>
            <div className="row">
              <span className="muted" style={{ fontSize: '0.85rem', minWidth: 110 }}>
                {t('lab.stepOf', { a: safeIdx + 1, b: steps.length })}
              </span>
              <div className="progress">
                <div style={{ width: `${((safeIdx + 1) / steps.length) * 100}%` }} />
              </div>
            </div>

            <ResultPanel run={run} mode={mode} />
          </>
        )}
      </div>
    </div>
  );
}

function ResultPanel({ run, mode }: { run: LabRun; mode: LabMode }) {
  const { t } = useI18n();

  if (run.singular && mode !== 'determinant') {
    return <div className="caption">{t('lab.singular')}</div>;
  }

  return (
    <div className="card" style={{ background: 'var(--bg-sunken)' }}>
      <div className="section-eyebrow">{t('lab.result')}</div>
      {(mode === 'solve' || mode === 'tridiagonal') && run.solution && (
        <div className="result-line" style={{ marginTop: 8 }}>
          <strong>{t('lab.solution')}:</strong>
          {run.solution.map((x, i) => (
            <span className="pill" key={i}>
              <Tex tex={`x_{${i + 1}} = ${toKatex(x)}`} />
            </span>
          ))}
        </div>
      )}
      {(mode === 'solve' || mode === 'determinant') && run.determinant && (
        <div className="result-line" style={{ marginTop: 8 }}>
          <strong>{t('lab.determinant')}:</strong>
          <span className="pill">
            <Tex tex={`\\det(A) = ${toKatex(run.determinant)}`} />
          </span>
        </div>
      )}
      {mode === 'inverse' && run.inverse && (
        <div style={{ marginTop: 8 }}>
          <strong>{t('lab.inverse')}:</strong>
          <MatrixView matrix={run.inverse} />
        </div>
      )}
    </div>
  );
}
