import { useMemo } from 'react';
import katex from 'katex';

interface MathProps {
  tex: string;
  display?: boolean;
  className?: string;
}

/** Render a TeX string with KaTeX (inline by default). */
export function Math({ tex, display = false, className }: MathProps) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
      });
    } catch {
      return tex;
    }
  }, [tex, display]);

  return (
    <span
      className={className}
      // KaTeX output is trusted (we generate it from our own TeX strings).
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
