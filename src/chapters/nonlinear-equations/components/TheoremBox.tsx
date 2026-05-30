import type { ReactNode } from 'react';

type Kind = 'theorem' | 'corollary' | 'definition' | 'example' | 'algorithm' | 'proof';

interface Props {
  kind: Kind;
  number?: string;
  title?: string;
  children?: ReactNode;
}

const headings: Record<Kind, string> = {
  theorem: 'Theorem',
  corollary: 'Corollary',
  definition: 'Definition',
  example: 'Example',
  algorithm: 'Algorithm',
  proof: 'Proof',
};

/** React port of the original Astro TheoremBox (02/site/components/TheoremBox.astro). */
export function TheoremBox({ kind, number, title, children }: Props) {
  const heading = headings[kind];
  return (
    <aside
      className={`theorem-box theorem-${kind}`}
      role="note"
      aria-label={`${heading}${number ? ' ' + number : ''}`}
    >
      <div className="theorem-label">
        {heading}
        {number ? ` ${number}` : ''}
        {title ? ` — ${title}` : ''}
      </div>
      {children}
    </aside>
  );
}

export default TheoremBox;
