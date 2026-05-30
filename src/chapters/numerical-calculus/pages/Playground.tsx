import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import DerivativePlayground from '../features/playground/DerivativePlayground';
import IntegralPlayground from '../features/playground/IntegralPlayground';

type Tab = 'diff' | 'int';

export default function Playground() {
  const { t } = useTranslation();
  const [tab, setTab] = useState<Tab>('diff');

  return (
    <div>
      <h1 className="text-3xl font-extrabold">{t('playground.title')}</h1>
      <p className="mt-1 text-slate-500 dark:text-slate-400">{t('playground.lead')}</p>

      <div className="mt-5 inline-flex rounded-xl bg-slate-200 p-1 dark:bg-slate-800">
        {(['diff', 'int'] as Tab[]).map((tb) => (
          <button
            key={tb}
            type="button"
            onClick={() => setTab(tb)}
            className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
              tab === tb
                ? 'bg-white text-brand-700 shadow dark:bg-slate-900 dark:text-brand-300'
                : 'text-slate-600 dark:text-slate-300'
            }`}
          >
            {t(tb === 'diff' ? 'playground.tab_diff' : 'playground.tab_int')}
          </button>
        ))}
      </div>

      <div className="mt-5">
        {tab === 'diff' ? <DerivativePlayground /> : <IntegralPlayground />}
      </div>
    </div>
  );
}
