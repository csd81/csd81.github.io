import type { ReactNode } from 'react';

export function Panel({
  title,
  children,
  className = '',
}: {
  title?: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 ${className}`}
    >
      {title && <h3 className="mb-3 text-base font-bold text-slate-800 dark:text-slate-100">{title}</h3>}
      {children}
    </section>
  );
}

export function Stat({ label, value }: { label: ReactNode; value: ReactNode }) {
  return (
    <div className="rounded-lg bg-slate-50 px-3 py-2 dark:bg-slate-800">
      <div className="text-xs text-slate-500 dark:text-slate-400">{label}</div>
      <div className="font-mono text-sm font-semibold text-slate-800 dark:text-slate-100">{value}</div>
    </div>
  );
}

export function Verdict({ ok, okText, badText }: { ok: boolean; okText: string; badText: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-sm font-semibold ${
        ok
          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-500/20 dark:text-emerald-300'
          : 'bg-red-100 text-red-700 dark:bg-red-500/20 dark:text-red-300'
      }`}
    >
      <span>{ok ? '✓' : '✕'}</span>
      {ok ? okText : badText}
    </span>
  );
}

export function PageHeader({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold text-slate-900 dark:text-slate-50">{title}</h1>
      {lead && <p className="mt-1 max-w-3xl text-slate-600 dark:text-slate-300">{lead}</p>}
    </div>
  );
}
