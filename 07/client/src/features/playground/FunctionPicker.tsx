import { useTranslation } from 'react-i18next';
import { PRESETS } from '../../lib/mathEval';
import MathText from '../../components/MathText';

interface Props {
  expr: string;
  onChange: (expr: string) => void;
  valid: boolean;
}

export default function FunctionPicker({ expr, onChange, valid }: Props) {
  const { t } = useTranslation();
  const activePreset = PRESETS.find((p) => p.expr === expr);

  return (
    <div>
      <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
        {t('playground.function')}
      </span>
      <div className="mt-2 flex flex-wrap gap-2">
        {PRESETS.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => onChange(p.expr)}
            className={`chip border transition ${
              activePreset?.id === p.id
                ? 'border-brand-500 bg-brand-50 text-brand-700 dark:bg-brand-900/40 dark:text-brand-200'
                : 'border-slate-200 bg-white text-slate-600 hover:border-brand-300 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300'
            }`}
          >
            <MathText tex={p.latex} />
          </button>
        ))}
      </div>
      <label className="mt-3 block">
        <span className="text-xs uppercase tracking-wide text-slate-400">{t('playground.custom')}</span>
        <input
          type="text"
          value={expr}
          spellCheck={false}
          onChange={(e) => onChange(e.target.value)}
          className={`mt-1 w-full rounded-xl border bg-white px-3 py-2 font-mono text-sm outline-none transition dark:bg-slate-800 ${
            valid
              ? 'border-slate-200 focus:border-brand-400 dark:border-slate-700'
              : 'border-rose-400 focus:border-rose-500'
          }`}
        />
      </label>
      {valid ? (
        <p className="mt-1 text-xs text-slate-400">{t('playground.custom_hint')}</p>
      ) : (
        <p className="mt-1 text-xs text-rose-500">{t('playground.invalid')}</p>
      )}
    </div>
  );
}
