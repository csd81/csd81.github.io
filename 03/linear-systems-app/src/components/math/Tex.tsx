import { useMemo } from 'react';
import katex from 'katex';

interface TexProps {
  tex: string;
  block?: boolean;
}

/** Render a LaTeX string with KaTeX. Errors render in red rather than throwing. */
export function Tex({ tex, block = false }: TexProps) {
  const html = useMemo(
    () =>
      katex.renderToString(tex, {
        throwOnError: false,
        displayMode: block,
      }),
    [tex, block],
  );

  if (block) {
    return (
      <div
        className="tex-block"
        style={{ overflowX: 'auto', padding: '4px 0' }}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  }
  return <span dangerouslySetInnerHTML={{ __html: html }} />;
}
