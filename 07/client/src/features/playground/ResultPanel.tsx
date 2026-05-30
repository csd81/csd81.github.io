import { useTranslation } from 'react-i18next';

interface Props {
  approx: number;
  reference: number;
  error: number;
}

const fmt = (v: number) => (Number.isFinite(v) ? v.toPrecision(7) : '—');

const fmtErr = (v: number) => (Number.isFinite(v) ? v.toExponential(4) : '—');

export default function ResultPanel({ approx, reference, error }: Props) {
  const { t } = useTranslation();
  const rows = [
    { label: t('playground.approx'), value: fmt(approx), accent: true },
    { label: t('playground.reference'), value: fmt(reference), accent: false },
    { label: t('playground.error'), value: fmtErr(error), accent: false },
  ];
  return (
    <dl className="grid gap-2">
      {rows.map((r) => (
        <div
          key={r.label}
          className="flex items-center justify-between rounded-xl bg-slate-100 px-4 py-2 dark:bg-slate-800/70"
        >
          <dt className="text-sm text-slate-500 dark:text-slate-400">{r.label}</dt>
          <dd
            className={`font-mono text-sm font-semibold ${
              r.accent ? 'text-brand-700 dark:text-brand-300' : 'text-slate-800 dark:text-slate-100'
            }`}
          >
            {r.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
