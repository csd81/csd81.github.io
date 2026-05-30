import { useLanguage } from '../context/LanguageContext';

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="inline-flex rounded-lg border border-slate-300 bg-white p-0.5 text-sm font-medium dark:border-slate-600 dark:bg-slate-800">
      {(['en', 'hu'] as const).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`rounded-md px-3 py-1 transition ${
            lang === l
              ? 'bg-brand-600 text-white'
              : 'text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-slate-700'
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
