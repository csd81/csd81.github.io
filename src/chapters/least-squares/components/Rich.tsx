import { useMemo } from 'react';
import katex from 'katex';

function esc(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/** Inline text that may contain `$…$` math, rendered with KaTeX (no block wrapper). */
export function Rich({ text }: { text: string }) {
  const html = useMemo(
    () =>
      (text || '')
        .split(/(\$[^$]+\$)/g)
        .map((p) =>
          p.length > 1 && p.startsWith('$') && p.endsWith('$')
            ? katex.renderToString(p.slice(1, -1), { throwOnError: false })
            : esc(p),
        )
        .join(''),
    [text],
  );
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
