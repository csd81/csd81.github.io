import { useLang } from '../providers/LanguageProvider';

interface Props {
  /** chapter id understood by the egui app's hash router, e.g. "ch2" */
  chapter: string;
  height?: number;
}

/**
 * Embeds the Rust/egui "rmath sandbox" (WebAssembly) for a single chapter via an
 * iframe pointed at the static `/sandbox/` app with a deep-link hash
 * `#<chapter>/embed` (which hides the app's own tab bar). The app is a separate
 * static build under public/sandbox, so this is a full-page document in a frame,
 * isolated from the React router.
 */
export function RustSandbox({ chapter, height = 680 }: Props) {
  const { lang } = useLang();
  return (
    <section className="rust-embed">
      <div className="rust-embed__head">
        <h2 className="rust-embed__title">
          {lang === 'hu' ? '🦀 Interaktív homokozó · Rust/WASM' : '🦀 Interactive sandbox · Rust/WASM'}
        </h2>
        <a className="rust-embed__pop" href={`/sandbox/#${chapter}`} target="_blank" rel="noreferrer">
          {lang === 'hu' ? 'Teljes alkalmazás megnyitása ↗' : 'Open full app ↗'}
        </a>
      </div>
      <p className="rust-embed__note muted">
        {lang === 'hu'
          ? 'Egy egymásból fordított (egui→WebAssembly) numerikus homokozó ehhez a fejezethez, beépített mátrixnyelv-REPL-lel.'
          : 'A Rust→WebAssembly numerics sandbox for this chapter, with a built-in matrix-language REPL.'}
      </p>
      <iframe
        className="rust-embed__frame"
        src={`/sandbox/#${chapter}/embed`}
        title={`Rust sandbox — ${chapter}`}
        loading="eager"
        style={{ height }}
      />
    </section>
  );
}

export default RustSandbox;
