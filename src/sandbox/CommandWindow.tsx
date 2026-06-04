/** The interactive command window (REPL scrollback + input line with history). */
import { Fragment, useEffect, useRef, useState } from 'react';
import type { ConsoleLine } from './useSandbox';
import { TEX_OPEN, TEX_CLOSE } from './matlab/format';
import { Math as Tex } from '../shared/ui/Math';

/** Turn http(s) URLs in console text into clickable links. */
function linkify(text: string, key: number) {
  const parts = text.split(/(https?:\/\/[^\s]+)/g);
  return parts.map((p, i) =>
    /^https?:\/\//.test(p)
      ? <a key={`${key}.${i}`} className="mlab__link" href={p} target="_blank" rel="noreferrer noopener">{p}</a>
      : <Fragment key={`${key}.${i}`}>{p}</Fragment>,
  );
}

// Symbolic output is wrapped in a sentinel pair carrying a LaTeX fragment; render
// those with KaTeX inline and leave the surrounding monospace text untouched.
const TEX_RE = new RegExp(`${TEX_OPEN}([\\s\\S]*?)${TEX_CLOSE}`, 'g');
function renderLine(text: string) {
  const segs = text.split(TEX_RE); // even indices = plain text, odd = LaTeX
  return segs.map((s, i) =>
    i % 2 === 1
      ? <Tex key={i} className="mlab__tex" tex={s} />
      : <Fragment key={i}>{linkify(s, i)}</Fragment>,
  );
}

export default function CommandWindow({
  lines, busy, prompt, onSubmit, onClear,
}: {
  lines: ConsoleLine[];
  busy: boolean;
  prompt: string | null;
  onSubmit: (text: string) => void;
  onClear: () => void;
}) {
  const [value, setValue] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [hIdx, setHIdx] = useState(-1);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight; }, [lines, prompt]);
  useEffect(() => { if (prompt !== null) inputRef.current?.focus(); }, [prompt]);

  const submit = () => {
    const v = value;
    if (prompt === null && v.trim() === '') return;
    if (prompt === null && v.trim()) { setHistory((h) => [...h, v]); }
    setHIdx(-1);
    setValue('');
    onSubmit(v);
  };

  const onKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') { e.preventDefault(); submit(); return; }
    if (prompt !== null) return;
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (!history.length) return;
      const ni = hIdx < 0 ? history.length - 1 : Math.max(0, hIdx - 1);
      setHIdx(ni); setValue(history[ni]);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (hIdx < 0) return;
      const ni = hIdx + 1;
      if (ni >= history.length) { setHIdx(-1); setValue(''); } else { setHIdx(ni); setValue(history[ni]); }
    }
  };

  return (
    <div className="mlab__term">
      <div className="mlab__pane-head">
        <span>Command Window</span>
        <button className="mlab__mini" onClick={onClear} title="Clear">clear</button>
      </div>
      <div className="mlab__scroll" ref={scrollRef} onClick={() => inputRef.current?.focus()}>
        {lines.map((l, i) => (
          <pre key={i} className={`mlab__line mlab__line--${l.kind}`}>{renderLine(l.kind === 'cmd' ? '>> ' + l.text : l.text)}</pre>
        ))}
        <div className="mlab__prompt-row">
          <span className="mlab__caret">{prompt !== null ? '' : '>>'}</span>
          <input
            ref={inputRef}
            className="mlab__input"
            value={value}
            spellCheck={false}
            autoCapitalize="off"
            autoCorrect="off"
            placeholder={busy ? 'running…' : prompt !== null ? 'enter a value…' : ''}
            onChange={(e) => setValue(e.target.value)}
            onKeyDown={onKey}
            onPaste={(e) => {
              // A single-line <input> would flatten pasted code; run multi-line
              // pastes as a block instead (only when not answering an input() prompt).
              const text = e.clipboardData.getData('text');
              if (prompt === null && /\n/.test(text)) {
                e.preventDefault();
                const block = text.replace(/\s+$/, '');
                if (block) { setHistory((h) => [...h, block]); setHIdx(-1); setValue(''); onSubmit(block); }
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
