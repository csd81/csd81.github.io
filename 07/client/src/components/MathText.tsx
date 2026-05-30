import { useMemo } from 'react';
import katex from 'katex';

interface Props {
  tex: string;
  display?: boolean;
  className?: string;
}

/** Render a KaTeX string safely (used for inline labels and result formulas). */
export default function MathText({ tex, display = false, className }: Props) {
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

  return <span className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}
