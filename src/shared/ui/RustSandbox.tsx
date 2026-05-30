import { useLang } from '../providers/LanguageProvider';
import { useTheme } from '../providers/ThemeProvider';

interface Props {
  /** chapter id understood by the egui app's hash router, e.g. "ch2" */
  chapter: string;
  height?: number;
}

/**
 * Embeds the Rust/egui "rmath sandbox" (WebAssembly) for a single chapter via an
 * iframe pointed at the static `/sandbox/` app with a deep-link hash
 * `#<chapter>/embed/<lang>/<theme>` (which hides the app's own tab bar and makes
 * it open in the site's current language + theme). The iframe `key` includes
 * lang+theme so it remounts (full reload — wasm is cached) when the site toggles
 * either; a hash-only src change would not reload the frame.
 */
export function RustSandbox({ chapter, height = 680 }: Props) {
  const { lang } = useLang();
  const { theme } = useTheme();
  const themeTok = theme === 'dark' ? 'dark' : 'light';
  const hash = `${chapter}/embed/${lang}/${themeTok}`;
  return (
    <section className="rust-embed">
      <div className="rust-embed__head">
        <h2 className="rust-embed__title">
          {lang === 'hu' ? '🦀 Interaktív homokozó · Rust/WASM' : '🦀 Interactive sandbox · Rust/WASM'}
        </h2>
        <a
          className="rust-embed__pop"
          href={`/sandbox/#${chapter}/${lang}/${themeTok}`}
          target="_blank"
          rel="noreferrer"
        >
          {lang === 'hu' ? 'Teljes alkalmazás megnyitása ↗' : 'Open full app ↗'}
        </a>
      </div>
      <p className="rust-embed__note muted">
        {lang === 'hu'
          ? 'Egy egymásból fordított (egui→WebAssembly) numerikus homokozó ehhez a fejezethez, beépített mátrixnyelv-REPL-lel.'
          : 'A Rust→WebAssembly numerics sandbox for this chapter, with a built-in matrix-language REPL.'}
      </p>
      <iframe
        key={`${chapter}-${lang}-${themeTok}`}
        className="rust-embed__frame"
        src={`/sandbox/#${hash}`}
        title={`Rust sandbox — ${chapter}`}
        loading="eager"
        style={{ height }}
      />
    </section>
  );
}

export default RustSandbox;
