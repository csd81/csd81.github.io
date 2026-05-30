import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useTheme } from '../hooks/useTheme';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();
  const { t } = useTranslation();
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={t('theme.toggle')}
      title={isDark ? t('theme.light') : t('theme.dark')}
      className="relative h-9 w-16 rounded-full bg-slate-200 p-1 transition-colors dark:bg-slate-700"
    >
      <motion.span
        layout
        transition={{ type: 'spring', stiffness: 500, damping: 30 }}
        className="flex h-7 w-7 items-center justify-center rounded-full bg-white text-sm shadow dark:bg-slate-900"
        style={{ marginLeft: isDark ? '1.75rem' : 0 }}
      >
        {isDark ? '🌙' : '☀️'}
      </motion.span>
    </button>
  );
}
