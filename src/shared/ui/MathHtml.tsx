import { useEffect, useRef } from 'react';
import renderMathInElement from 'katex/contrib/auto-render';

/**
 * Render a trusted HTML fragment that may contain inline KaTeX (\(…\), \[…\],
 * $…$, $$…$$). Used for the chapter-card descriptions/tags ported from the
 * Flask `learn/*` templates.
 */
export function MathHtml({ html, className, as: Tag = 'span' }: { html: string; className?: string; as?: 'span' | 'div' }) {
  const ref = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    try {
      renderMathInElement(ref.current, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
          { left: '$', right: '$', display: false },
        ],
        throwOnError: false,
      });
    } catch { /* ignore */ }
  }, [html]);
  return <Tag ref={ref as never} className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default MathHtml;
