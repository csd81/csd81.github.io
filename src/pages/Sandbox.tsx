/** MATLAB-Online–style playground: file tree · editor · command window · figure · workspace. */
import { useEffect, useMemo, useState } from 'react';
import { useLang } from '../shared/providers/LanguageProvider';
import { FOLDERS, fileById, folderById, type MFile } from '../sandbox/library';
import { useSandbox } from '../sandbox/useSandbox';
import CommandWindow from '../sandbox/CommandWindow';
import FigurePane from '../sandbox/FigurePane';
import './sandbox.css';

const DEFAULT_FILE = FOLDERS.find((f) => f.id === 'course/01-fixed-point')?.files.find((x) => x.name === 'fixp')?.id
  ?? FOLDERS[0]?.files[0]?.id ?? '';

export default function Sandbox() {
  const { lang } = useLang();
  const [openId, setOpenId] = useState<string>(DEFAULT_FILE);
  const open: MFile | undefined = fileById(openId);
  const folderId = open?.folderId ?? FOLDERS[0]?.id ?? '';

  const [editor, setEditor] = useState<string>(open?.source ?? '');
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const { lines, workspace, fig, busy, prompt, runSource, submit, clearConsole, resetSession } = useSandbox(folderId);

  // Load file contents into the editor when the open file changes.
  useEffect(() => { setEditor(fileById(openId)?.source ?? ''); }, [openId]);

  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const toggleFolder = (id: string) =>
    setCollapsed((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const courseFolders = useMemo(() => FOLDERS.filter((f) => f.group === 'course'), []);
  const chapterFolders = useMemo(() => FOLDERS.filter((f) => f.group === 'chapter'), []);
  const wdLabel = folderById(folderId)?.label ?? '';

  const t = (en: string, hu: string) => (lang === 'hu' ? hu : en);

  return (
    <div className="mlab">
      <header className="mlab__hero">
        <h1>{t('MATLAB Sandbox', 'MATLAB homokozó')}</h1>
        <p className="mlab__lead">
          {t('A browser MATLAB/Octave runner. Pick a file, edit it, press Run — or type commands below. Plots render on the right.',
            'Böngészős MATLAB/Octave futtató. Válassz fájlt, szerkeszd, nyomd meg a Futtatás gombot — vagy írj parancsot lent. Az ábrák jobbra jelennek meg.')}
        </p>
      </header>

      <div className={'mlab__grid' + (leftOpen ? '' : ' mlab__grid--no-left') + (rightOpen ? '' : ' mlab__grid--no-right')}>
        {/* File tree */}
        <aside className={'mlab__files' + (leftOpen ? '' : ' mlab__pane--hidden')}>
          <div className="mlab__pane-head">
            <span>{t('Files', 'Fájlok')}</span>
            <span className="mlab__spacer" />
            <button className="mlab__mini" onClick={() => setLeftOpen(false)} title={t('Collapse', 'Összecsukás')} aria-label={t('Collapse file tree', 'Fájlfa összecsukása')}>⟨</button>
          </div>
          <div className="mlab__tree">
            <FileGroup title={t('Course examples', 'Kurzus példák')} folders={courseFolders} openId={openId} setOpenId={setOpenId} collapsed={collapsed} toggle={toggleFolder} />
            <FileGroup title={t('Chapter algorithms', 'Fejezet-algoritmusok')} folders={chapterFolders} openId={openId} setOpenId={setOpenId} collapsed={collapsed} toggle={toggleFolder} />
          </div>
        </aside>

        {/* Editor */}
        <section className="mlab__editor">
          <div className="mlab__pane-head">
            {!leftOpen && (
              <button className="mlab__mini" onClick={() => setLeftOpen(true)} title={t('Show files', 'Fájlok megjelenítése')}>⟨ {t('Files', 'Fájlok')}</button>
            )}
            <span className="mlab__filename">{open?.file ?? t('Editor', 'Szerkesztő')}</span>
            <span className="mlab__wd" title={t('Working directory', 'Munkakönyvtár')}>📁 {wdLabel}</span>
            <span className="mlab__spacer" />
            {!rightOpen && (
              <button className="mlab__mini" onClick={() => setRightOpen(true)} title={t('Show figure & workspace', 'Ábra és munkaterület')}>{t('Figure', 'Ábra')} ⟩</button>
            )}
            <button className="mlab__run" disabled={busy} onClick={() => runSource(editor)}>▶ {t('Run', 'Futtatás')}</button>
            <button className="mlab__mini" onClick={resetSession} title={t('Clear workspace & restart', 'Munkaterület törlése')}>{t('Reset', 'Újra')}</button>
          </div>
          <textarea
            className="mlab__code"
            value={editor}
            spellCheck={false}
            onChange={(e) => setEditor(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); runSource(editor); }
              if (e.key === 'Tab') {
                e.preventDefault();
                const ta = e.currentTarget; const s = ta.selectionStart; const en = ta.selectionEnd;
                const v = editor.slice(0, s) + '  ' + editor.slice(en);
                setEditor(v);
                requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; });
              }
            }}
          />
        </section>

        {/* Figure */}
        <section className={'mlab__figure' + (rightOpen ? '' : ' mlab__pane--hidden')}>
          <div className="mlab__pane-head">
            <span>{t('Figure', 'Ábra')}</span>
            <span className="mlab__spacer" />
            <button className="mlab__mini" onClick={() => setRightOpen(false)} title={t('Collapse', 'Összecsukás')} aria-label={t('Collapse figure & workspace', 'Ábra és munkaterület összecsukása')}>⟩</button>
          </div>
          <div className="mlab__fig-body"><FigurePane fig={fig} /></div>
        </section>

        {/* Command window */}
        <CommandWindow lines={lines} busy={busy} prompt={prompt} onSubmit={submit} onClear={clearConsole} />

        {/* Workspace */}
        <section className={'mlab__workspace' + (rightOpen ? '' : ' mlab__pane--hidden')}>
          <div className="mlab__pane-head"><span>{t('Workspace', 'Munkaterület')}</span></div>
          <div className="mlab__ws-body">
            {workspace.length === 0 ? (
              <div className="mlab__ws-empty">{t('No variables', 'Nincs változó')}</div>
            ) : (
              <table className="mlab__ws">
                <thead><tr><th>{t('Name', 'Név')}</th><th>{t('Size', 'Méret')}</th><th>{t('Value', 'Érték')}</th></tr></thead>
                <tbody>
                  {workspace.map((v) => (
                    <tr key={v.name}><td className="mlab__ws-name">{v.name}</td><td>{v.size}</td><td className="mlab__ws-val">{v.preview}</td></tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

function FileGroup({
  title, folders, openId, setOpenId, collapsed, toggle,
}: {
  title: string;
  folders: typeof FOLDERS;
  openId: string;
  setOpenId: (id: string) => void;
  collapsed: Set<string>;
  toggle: (id: string) => void;
}) {
  return (
    <div className="mlab__group">
      <div className="mlab__group-title">{title}</div>
      {folders.map((f) => {
        const isClosed = collapsed.has(f.id);
        return (
          <div key={f.id} className="mlab__folder">
            <button className="mlab__folder-head" onClick={() => toggle(f.id)}>
              <span className="mlab__chev">{isClosed ? '▸' : '▾'}</span> {f.label}
            </button>
            {!isClosed && (
              <ul className="mlab__filelist">
                {f.files.map((file) => (
                  <li key={file.id}>
                    <button
                      className={'mlab__file' + (file.id === openId ? ' mlab__file--active' : '')}
                      onClick={() => setOpenId(file.id)}
                    >{file.file}</button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
}
