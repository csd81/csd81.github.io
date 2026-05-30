import { useMemo } from 'react';
import katex from 'katex';

interface Props {
  tex: string;
  display?: boolean;
  className?: string;
}

/** Render a KaTeX string safely (inline labels, result formulas, display blocks). */
export function Math({ tex, display = false, className }: Props) {
  const html = useMemo(() => {
    try {
      return katex.renderToString(tex, {
        displayMode: display,
        throwOnError: false,
        trust: true,
      });
    } catch {
      return tex;
    }
  }, [tex, display]);

  const Tag = display ? 'div' : 'span';
  return <Tag className={className} dangerouslySetInnerHTML={{ __html: html }} />;
}

export default Math;
