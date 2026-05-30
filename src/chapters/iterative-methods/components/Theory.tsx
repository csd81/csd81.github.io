import { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';
import remarkGfm from 'remark-gfm';

interface TheoryProps {
  markdown: string;
  /** Collapsed by default; the user expands to read full theory. */
  collapsible?: boolean;
  title?: string;
}

export function Theory({ markdown, collapsible = true, title = 'Theory' }: TheoryProps) {
  const [open, setOpen] = useState(!collapsible);

  return (
    <section className="rounded-xl border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      {collapsible && (
        <button
          onClick={() => setOpen((o) => !o)}
          className="flex w-full items-center justify-between px-4 py-3 text-left font-semibold text-brand-700 dark:text-brand-200"
        >
          <span>{title}</span>
          <span className="text-slate-400">{open ? '−' : '+'}</span>
        </button>
      )}
      {open && (
        <div className="prose-math max-w-none px-5 pb-5 pt-1">
          <ReactMarkdown remarkPlugins={[remarkMath, remarkGfm]} rehypePlugins={[rehypeKatex]}>
            {markdown}
          </ReactMarkdown>
        </div>
      )}
    </section>
  );
}
