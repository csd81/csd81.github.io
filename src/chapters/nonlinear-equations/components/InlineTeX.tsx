import { useMemo } from 'react';
import katex from 'katex';

function escapeHtml(s: string): string {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * Render a short string that may contain inline `$…$` math (titles, summaries,
 * card captions) with KaTeX, without the block wrapper MarkdownView adds. Plain
 * text segments are HTML-escaped; math segments are KaTeX-rendered inline.
 */
export function InlineTeX({ text }: { text: string }) {
  const html = useMemo(
    () =>
      text
        .split(/(\$[^$]+\$)/g)
        .map((part) =>
          part.length > 1 && part.startsWith('$') && part.endsWith('$')
            ? katex.renderToString(part.slice(1, -1), { throwOnError: false })
            : escapeHtml(part),
        )
        .join(''),
    [text],
  );
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
