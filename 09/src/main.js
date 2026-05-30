// App bootstrap: layout, render, and wiring of language/theme/progress signals.
import './styles/themes.css';
import './styles/main.css';
import { onLangChange } from './state/i18n.js';
import { onThemeChange } from './state/theme.js';
import { renderContent } from './ui/render.js';
import { renderHeader, renderSidebar, onProgressChange } from './ui/nav.js';

const app = document.getElementById('app');
app.innerHTML = `
  <div id="header"></div>
  <div class="layout">
    <aside id="sidebar"></aside>
    <main id="content" class="content"></main>
  </div>
`;

const headerEl = document.getElementById('header');
const sidebarEl = document.getElementById('sidebar');
const contentEl = document.getElementById('content');

let teardownContent = () => {};

function navigateTo(sectionId) {
  const target = document.getElementById(`sec-${sectionId}`);
  if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function renderAll() {
  teardownContent();
  renderHeader(headerEl);
  renderSidebar(sidebarEl, navigateTo);
  teardownContent = renderContent(contentEl);
}

renderAll();

// Language change → full re-render (content + chrome). Demos are remounted fresh.
onLangChange(() => renderAll());

// Theme change → header pill text/icon updates; demos repaint themselves.
onThemeChange(() => {
  renderHeader(headerEl);
  renderSidebar(sidebarEl, navigateTo);
});

// Progress change (quiz pass / reset) → refresh the header strip + sidebar only,
// so a freshly-finished quiz keeps its completion screen on screen.
onProgressChange(() => {
  renderHeader(headerEl);
  renderSidebar(sidebarEl, navigateTo);
});
