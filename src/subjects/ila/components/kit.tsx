import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';
import renderMathInElement from 'katex/contrib/auto-render';

/** Render an HTML fragment that contains KaTeX `\(…\)` / `\[…\]`, exactly like the source pages. */
export function RichTex({ html, className, style }: { html: string; className?: string; style?: CSSProperties }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    try {
      renderMathInElement(ref.current, {
        delimiters: [
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false },
        ],
        throwOnError: false,
      });
    } catch {
      /* ignore */
    }
  }, [html]);
  return <div ref={ref} className={className} style={style} dangerouslySetInnerHTML={{ __html: html }} />;
}

type BoxKind = 'def' | 'thm' | 'ex' | 'info';
const LBL_CLASS: Record<BoxKind, string> = {
  def: 'lbl',
  thm: 'lbl lbl--thm',
  ex: 'lbl lbl--ex',
  info: 'lbl',
};
const BOX_CLASS: Record<BoxKind, string> = {
  def: 'def-box',
  thm: 'thm-box',
  ex: 'ex-box',
  info: 'info-box',
};

/** A labelled content box (def/thm/ex/info). Body is an HTML string (with KaTeX) or children. */
export function Box({
  kind,
  label,
  html,
  children,
}: {
  kind: BoxKind;
  label?: string;
  html?: string;
  children?: ReactNode;
}) {
  return (
    <div className={BOX_CLASS[kind]}>
      {label && <span className={LBL_CLASS[kind]}>{label}</span>}
      {html != null ? <RichTex className="box-body" html={html} /> : <div className="box-body">{children}</div>}
    </div>
  );
}

export interface Tab {
  id: string;
  label: string;
  content: ReactNode;
}

/** Tab navigation matching the original `.ila-nav-link` behaviour. */
export function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(0);
  return (
    <>
      <div className="ila__tabs" role="tablist">
        {tabs.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={i === active}
            className={`ila__tab${i === active ? ' is-active' : ''}`}
            onClick={() => setActive(i)}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div>{tabs[Math.min(active, tabs.length - 1)].content}</div>
    </>
  );
}

/** Two-column responsive layout (`7-5` widens the left column). */
export function Cols({ children, variant }: { children: ReactNode; variant?: '7-5' }) {
  return <div className={`ila__cols${variant === '7-5' ? ' ila__cols--7-5' : ''}`}>{children}</div>;
}

/** Algebraic proof: a list of {eq, why} steps (HTML with KaTeX). */
export function ProofSteps({ steps }: { steps: { eq: string; why?: string }[] }) {
  return (
    <>
      {steps.map((s, i) => (
        <div className="pf-step" key={i}>
          <RichTex className="pf-eq" html={s.eq} />
          {s.why != null ? <RichTex className="pf-why" html={s.why} /> : <div />}
        </div>
      ))}
    </>
  );
}

/** A grid of set/algebra identities: rows of [identity, property]. */
export function LawGrid({
  head,
  rows,
}: {
  head?: [string, string];
  rows: { l: string; r: string; hi?: boolean }[];
}) {
  return (
    <div className="info-box" style={{ padding: '0.4rem 0.5rem' }}>
      {head && (
        <div className="law-grid law-grid--head">
          <div>{head[0]}</div>
          <div>{head[1]}</div>
        </div>
      )}
      {rows.map((r, i) => (
        <div className={`law-grid${r.hi ? ' law-grid--hi' : ''}`} key={i}>
          <RichTex html={r.l} />
          <RichTex html={r.r} />
        </div>
      ))}
    </div>
  );
}
