/** MATLAB-Online–style playground: toolbar · file tree · editor · command window · figure · workspace · status bar. */
import { useEffect, useMemo, useRef, useState } from 'react';
import { useLang } from '../shared/providers/LanguageProvider';
import { FOLDERS, fileById, folderById, type MFile } from '../sandbox/library';
import { useSandbox } from '../sandbox/useSandbox';
import CommandWindow from '../sandbox/CommandWindow';
import FigurePane from '../sandbox/FigurePane';
import './sandbox.css';

const DEFAULT_FILE = FOLDERS.find((f) => f.id === 'course/01-fixed-point')?.files.find((x) => x.name === 'fixp')?.id
  ?? FOLDERS[0]?.files[0]?.id ?? '';

const clamp = (v: number, lo: number, hi: number) => Math.max(lo, Math.min(hi, v));

export default function Sandbox() {
  const { lang } = useLang();
  const t = (en: string, hu: string) => (lang === 'hu' ? hu : en);

  const [openId, setOpenId] = useState<string>(DEFAULT_FILE);
  const open: MFile | undefined = fileById(openId);
  const folderId = open?.folderId ?? FOLDERS[0]?.id ?? '';

  const [editor, setEditor] = useState<string>(open?.source ?? '');
  const [leftOpen, setLeftOpen] = useState(true);
  const [rightOpen, setRightOpen] = useState(true);
  const [leftW, setLeftW] = useState(220);
  const [rightW, setRightW] = useState(380);
  const [cursor, setCursor] = useState({ line: 1, col: 1 });
  const taRef = useRef<HTMLTextAreaElement>(null);

  const { lines, workspace, fig, busy, prompt, runSource, submit, clearConsole, resetSession } = useSandbox(folderId);

  useEffect(() => { setEditor(fileById(openId)?.source ?? ''); setCursor({ line: 1, col: 1 }); }, [openId]);

  const [collapsed, setCollapsed] = useState<Set<string>>(() => new Set());
  const toggleFolder = (id: string) =>
    setCollapsed((prev) => { const n = new Set(prev); n.has(id) ? n.delete(id) : n.add(id); return n; });

  const courseFolders = useMemo(() => FOLDERS.filter((f) => f.group === 'course'), []);
  const chapterFolders = useMemo(() => FOLDERS.filter((f) => f.group === 'chapter'), []);
  const wdLabel = folderById(folderId)?.label ?? '';

  const updateCursor = (ta: HTMLTextAreaElement) => {
    const pos = ta.selectionStart;
    const upto = ta.value.slice(0, pos);
    const nl = upto.lastIndexOf('\n');
    setCursor({ line: upto.split('\n').length, col: pos - nl });
  };

  const startDrag = (side: 'left' | 'right') => (e: React.PointerEvent) => {
    e.preventDefault();
    const startX = e.clientX, sL = leftW, sR = rightW;
    const onMove = (ev: PointerEvent) => {
      if (side === 'left') setLeftW(clamp(sL + (ev.clientX - startX), 150, 520));
      else setRightW(clamp(sR - (ev.clientX - startX), 180, 640));
    };
    const onUp = () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
      document.body.style.cursor = ''; document.body.style.userSelect = '';
    };
    window.addEventListener('pointermove', onMove);
    window.addEventListener('pointerup', onUp);
    document.body.style.cursor = 'col-resize'; document.body.style.userSelect = 'none';
  };

  const gridStyle = {
    '--left-w': (leftOpen ? leftW : 0) + 'px',
    '--right-w': (rightOpen ? rightW : 0) + 'px',
    '--gl': leftOpen ? '6px' : '0px',
    '--gr': rightOpen ? '6px' : '0px',
  } as React.CSSProperties;

  return (
    <div className="mlab">
      {/* Top toolbar */}
      <header className="mlab__topbar">
        <span className="mlab__brand">🧮 {t('MATLAB Sandbox', 'MATLAB homokozó')}</span>
        <div className="mlab__tgroup">
          <button className="mlab__tool mlab__tool--run" disabled={busy} onClick={() => runSource(editor)} title={t('Run the editor (Ctrl+Enter)', 'Futtatás (Ctrl+Enter)')}>▶ {t('Run', 'Futtatás')}</button>
          <button className="mlab__tool" onClick={resetSession} title={t('Clear workspace & restart', 'Munkaterület törlése, újraindítás')}>↻ {t('Reset', 'Újra')}</button>
          <button className="mlab__tool" onClick={clearConsole} title={t('Clear command window', 'Parancsablak törlése')}>⌫ {t('Clear', 'Törlés')}</button>
        </div>
        <span className="mlab__tspacer" />
        <div className="mlab__tgroup">
          <button className={'mlab__tool' + (leftOpen ? ' mlab__tool--on' : '')} onClick={() => setLeftOpen((v) => !v)} title={t('Toggle file tree', 'Fájlfa ki/be')}>▣ {t('Files', 'Fájlok')}</button>
          <button className={'mlab__tool' + (rightOpen ? ' mlab__tool--on' : '')} onClick={() => setRightOpen((v) => !v)} title={t('Toggle figure & workspace', 'Ábra és munkaterület ki/be')}>▥ {t('Figure', 'Ábra')}</button>
        </div>
      </header>

      {/* Workbench */}
      <div className="mlab__grid" style={gridStyle}>
        {/* File tree */}
        <aside className={'mlab__files' + (leftOpen ? '' : ' mlab__pane--hidden')}>
          <div className="mlab__pane-head"><span>{t('Current Folder', 'Aktuális mappa')}</span></div>
          <div className="mlab__tree">
            <FileGroup title={t('Course examples', 'Kurzus példák')} folders={courseFolders} openId={openId} setOpenId={setOpenId} collapsed={collapsed} toggle={toggleFolder} />
            <FileGroup title={t('Chapter algorithms', 'Fejezet-algoritmusok')} folders={chapterFolders} openId={openId} setOpenId={setOpenId} collapsed={collapsed} toggle={toggleFolder} />
          </div>
        </aside>

        {leftOpen && <div className="mlab__gutter" style={{ gridArea: 'gl' }} onPointerDown={startDrag('left')} title={t('Drag to resize', 'Húzd az átméretezéshez')} />}

        {/* Editor */}
        <section className="mlab__editor">
          <div className="mlab__pane-head">
            <span className="mlab__filetab">{open?.file ?? t('Editor', 'Szerkesztő')}</span>
            <span className="mlab__spacer" />
          </div>
          <textarea
            ref={taRef}
            className="mlab__code"
            value={editor}
            spellCheck={false}
            onChange={(e) => { setEditor(e.target.value); updateCursor(e.currentTarget); }}
            onKeyUp={(e) => updateCursor(e.currentTarget)}
            onClick={(e) => updateCursor(e.currentTarget)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) { e.preventDefault(); runSource(editor); }
              if (e.key === 'Tab') {
                e.preventDefault();
                const ta = e.currentTarget; const s = ta.selectionStart; const en = ta.selectionEnd;
                const v = editor.slice(0, s) + '  ' + editor.slice(en);
                setEditor(v);
                requestAnimationFrame(() => { ta.selectionStart = ta.selectionEnd = s + 2; updateCursor(ta); });
              }
            }}
          />
        </section>

        {rightOpen && <div className="mlab__gutter" style={{ gridArea: 'gr' }} onPointerDown={startDrag('right')} title={t('Drag to resize', 'Húzd az átméretezéshez')} />}

        {/* Figure */}
        <section className={'mlab__figure' + (rightOpen ? '' : ' mlab__pane--hidden')}>
          <div className="mlab__pane-head"><span>{t('Figure', 'Ábra')}</span></div>
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

      {/* Status bar */}
      <footer className="mlab__status">
        <span className={'mlab__stat-state' + (busy ? ' mlab__stat-state--busy' : '')}>{busy ? t('Busy', 'Dolgozik') : t('Ready', 'Kész')}</span>
        <span className="mlab__tspacer" />
        <span className="mlab__stat">📁 {wdLabel}</span>
        <span className="mlab__stat">{open?.file ?? '—'}</span>
        <span className="mlab__stat">UTF-8</span>
        <span className="mlab__stat">{t('Ln', 'Sor')} {cursor.line} {t('Col', 'Oszl')} {cursor.col}</span>
      </footer>
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
