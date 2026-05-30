import { useTranslation } from 'react-i18next';
import type { Lang } from '../i18n';

const FLAGS: Record<Lang, string> = { en: '🇬🇧', hu: '🇭🇺' };

export default function LanguageToggle() {
  const { i18n, t } = useTranslation();
  const current = (i18n.language as Lang) === 'hu' ? 'hu' : 'en';

  return (
    <div
      role="group"
      aria-label={t('lang.label')}
      className="flex items-center gap-1 rounded-full bg-slate-200 p-1 dark:bg-slate-700"
    >
      {(['en', 'hu'] as Lang[]).map((lng) => {
        const active = current === lng;
        return (
          <button
            key={lng}
            type="button"
            onClick={() => void i18n.changeLanguage(lng)}
            aria-pressed={active}
            className={`chip flex items-center gap-1 transition ${
              active
                ? 'bg-white text-brand-700 shadow dark:bg-slate-900 dark:text-brand-300'
                : 'text-slate-600 hover:text-slate-900 dark:text-slate-300'
            }`}
          >
            <span aria-hidden>{FLAGS[lng]}</span>
            {t(`lang.${lng}`)}
          </button>
        );
      })}
    </div>
  );
}
