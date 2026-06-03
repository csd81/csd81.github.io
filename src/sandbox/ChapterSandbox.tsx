/** Compact MATLAB runner embedded at the bottom of a chapter page. */
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLang } from '../shared/providers/LanguageProvider';
import { FOLDERS, type MFile } from './library';
import { useSandbox } from './useSandbox';
import CommandWindow from './CommandWindow';
import FigurePane from './FigurePane';
import '../pages/sandbox.css';

export default function ChapterSandbox({ slug }: { slug: string }) {
  const { lang } = useLang();
  const folderId = 'chapter/' + slug;
  const folder = FOLDERS.find((f) => f.id === folderId);
  const [open, setOpen] = useState(false);

  if (!folder || folder.files.length === 0) return null;
  return (
    <details className="mlab-embed" onToggle={(e) => setOpen((e.currentTarget as HTMLDetailsElement).open)}>
      <summary className="mlab-embed__summary">
        🧮 {lang === 'hu' ? 'Próbáld ki: MATLAB futtató (ez a fejezet)' : 'Try it: MATLAB runner (this chapter)'}
      </summary>
      {open && <ChapterRunner folderId={folderId} files={folder.files} />}
    </details>
  );
}

function ChapterRunner({ folderId, files }: { folderId: string; files: MFile[] }) {
  const { lang } = useLang();
  const [openId, setOpenId] = useState(files[0].id);
  const [editor, setEditor] = useState(files[0].source);
  const { lines, fig, busy, prompt, runSource, submit, clearConsole } = useSandbox(folderId);
  useEffect(() => { const f = files.find((x) => x.id === openId); if (f) setEditor(f.source); }, [openId, files]);
  const t = (en: string, hu: string) => (lang === 'hu' ? hu : en);

  return (
    <div className="mlab-embed__body">
      <div className="mlab-embed__bar">
        <select className="mlab-embed__select" value={openId} onChange={(e) => setOpenId(e.target.value)}>
          {files.map((f) => <option key={f.id} value={f.id}>{f.file}</option>)}
        </select>
        <button className="mlab__run" disabled={busy} onClick={() => runSource(editor)}>▶ {t('Run', 'Futtatás')}</button>
        <span className="mlab__spacer" />
        <Link className="mlab-embed__full" to="/sandbox">{t('Open full sandbox →', 'Teljes homokozó →')}</Link>
      </div>
      <div className="mlab-embed__cols">
        <textarea className="mlab__code mlab-embed__code" value={editor} spellCheck={false} onChange={(e) => setEditor(e.target.value)} />
        <div className="mlab-embed__fig"><FigurePane fig={fig} /></div>
      </div>
      <CommandWindow lines={lines} busy={busy} prompt={prompt} onSubmit={submit} onClear={clearConsole} />
    </div>
  );
}
