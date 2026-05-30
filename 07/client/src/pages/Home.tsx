import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import MathText from '../components/MathText';

const cards = [
  { to: '/lessons', key: 'lessons', icon: '📖' },
  { to: '/playground', key: 'playground', icon: '🎛️' },
  { to: '/quiz', key: 'quiz', icon: '🧠' },
] as const;

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="space-y-10">
      <section className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-600 via-brand-500 to-accent-500 p-8 text-white shadow-lg sm:p-12">
        <motion.div
          aria-hidden
          className="pointer-events-none absolute -right-8 -top-8 select-none text-[10rem] font-black opacity-10"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity }}
        >
          ∫
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl text-3xl font-extrabold sm:text-4xl"
        >
          {t('home.heading')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mt-4 max-w-2xl text-white/90"
        >
          {t('home.lead')}
        </motion.p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link to="/lessons" className="btn bg-white text-brand-700 hover:bg-brand-50">
            {t('home.cta_lessons')}
          </Link>
          <Link to="/playground" className="btn bg-white/15 text-white ring-1 ring-white/40 hover:bg-white/25">
            {t('home.cta_playground')}
          </Link>
        </div>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-white/90">
          <MathText tex="f'(x_0)\approx\frac{f(x_0+h)-f(x_0)}{h}" />
          <MathText tex="\int_a^b f\,dx\approx\frac{h}{3}\big(f_0+4f_1+f_2\big)" />
        </div>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {cards.map((c, i) => (
          <motion.div
            key={c.key}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * i }}
          >
            <Link to={c.to} className="card block h-full transition hover:-translate-y-1 hover:shadow-md">
              <div className="text-3xl">{c.icon}</div>
              <h2 className="mt-3 text-lg font-bold">{t(`home.card_${c.key}_title`)}</h2>
              <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                {t(`home.card_${c.key}_desc`)}
              </p>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
