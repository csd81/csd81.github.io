import { useState } from 'react';
import { useLang } from '../providers/LanguageProvider';
import { useCodeLang } from './CodeLangProvider';
import { CodeBlock, type CodeLang } from './CodeBlock';
import type { Bi } from '../providers/LanguageProvider';
import './code-tabs.css';

export interface CodeSnippets {
  matlab?: string;
  python?: string;
  cpp?: string;
  julia?: string;
  rust?: string;
  fortran?: string;
  wolfram?: string;
  javascript?: string;
  go?: string;
  r?: string;
}

const ORDER: CodeLang[] = ['matlab', 'python', 'cpp', 'julia', 'rust', 'fortran', 'wolfram', 'javascript', 'go', 'r'];
const LABEL: Record<CodeLang, string> = {
  matlab: 'MATLAB',
  python: 'Python',
  cpp: 'C++',
  julia: 'Julia',
  rust: 'Rust',
  fortran: 'Fortran',
  wolfram: 'Wolfram',
  javascript: 'JavaScript',
  go: 'Go',
  r: 'R',
};

/**
 * Language-switchable code box with syntax highlighting. Each box keeps its OWN
 * selected language (toggle box-by-box), initialized from the global default in
 * CodeLangProvider. Falls back to the first available language if the chosen one
 * is missing for this snippet.
 */
export function CodeTabs({ snippets, caption }: { snippets: CodeSnippets; caption?: Bi }) {
  const { t } = useLang();
  const { lang: defaultLang } = useCodeLang();
  const available = ORDER.filter((l) => snippets[l]?.trim());
  const [picked, setPicked] = useState<CodeLang | null>(null);
  const [copied, setCopied] = useState(false);
  if (!available.length) return null;

  const lang = picked ?? defaultLang;
  const active = snippets[lang]?.trim() ? lang : available[0];
  const code = snippets[active] ?? '';

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      /* ignore */
    }
  };

  return (
    <figure className="code-tabs">
      <div className="code-tabs__bar">
        <div className="code-tabs__langs" role="tablist">
          {available.map((l) => (
            <button
              key={l}
              role="tab"
              aria-selected={l === active}
              className={`code-tabs__lang${l === active ? ' is-active' : ''}`}
              onClick={() => setPicked(l)}
            >
              {LABEL[l]}
            </button>
          ))}
        </div>
        <button className="code-tabs__copy" onClick={copy}>
          {copied ? t({ en: 'Copied', hu: 'Másolva' }) : t({ en: 'Copy', hu: 'Másolás' })}
        </button>
      </div>
      <div className="code-tabs__body">
        <CodeBlock code={code} lang={active} />
      </div>
      {caption && <figcaption className="code-tabs__caption">{t(caption)}</figcaption>}
    </figure>
  );
}

export default CodeTabs;
