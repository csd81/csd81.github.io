import { useSearchParams } from 'react-router-dom';
import { useI18n } from '../app/LanguageContext';
import type { Method, PivotStrategy } from '../lib/types';
import { LAB_MODES, type LabMode } from '../app/labMode';
import { EliminationLab, type LabInitial } from '../components/visualizer/EliminationLab';

const METHODS: Method[] = ['gauss', 'gauss-jordan'];
const PIVOTS: PivotStrategy[] = ['none', 'partial', 'complete', 'scaled'];

export function LabPage() {
  const { t, lang } = useI18n();
  const [params] = useSearchParams();

  const modeParam = params.get('mode') as LabMode | null;
  const methodParam = params.get('method') as Method | null;
  const pivotParam = params.get('pivot') as PivotStrategy | null;

  const initial: LabInitial = {
    mode: modeParam && LAB_MODES.includes(modeParam) ? modeParam : undefined,
    method: methodParam && METHODS.includes(methodParam) ? methodParam : undefined,
    pivot: pivotParam && PIVOTS.includes(pivotParam) ? pivotParam : undefined,
    presetId: params.get('preset') ?? undefined,
  };

  // Remount on query change so deep links always re-seed the lab.
  const key = `${initial.mode}-${initial.method}-${initial.pivot}-${initial.presetId}`;

  return (
    <div className="stack">
      <div>
        <span className="section-eyebrow">{t('nav.lab')}</span>
        <h1 style={{ margin: '4px 0 2px' }}>{t('nav.lab')}</h1>
        <p className="muted" style={{ marginTop: 0 }}>
          {lang === 'hu'
            ? 'Állítsd be a feladatot, a módszert és a főelemkiválasztást, majd lépkedj végig az eliminációi lépéseken.'
            : 'Choose the task, method and pivoting strategy, then step through the elimination.'}
        </p>
      </div>
      <EliminationLab key={key} initial={initial} />
    </div>
  );
}
