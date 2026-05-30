// Block renderer: turns section data into DOM, wires demos and quizzes.
import { sections, sectionIds } from '../content/sections.js';
import { quizzes } from '../content/quizzes.js';
import { t, UI } from '../state/i18n.js';
import { renderMath, renderMarkdownMath } from './katex.js';
import {
  completeSection,
  isComplete,
} from '../state/progress.js';
import { mountLineDemo } from '../demos/lineDemo.js';
import { mountPolynomialDemo } from '../demos/polynomialDemo.js';
import { mountNonlinearDemo } from '../demos/nonlinearDemo.js';

const demoMounters = {
  line: mountLineDemo,
  polynomial: mountPolynomialDemo,
  nonlinear: mountNonlinearDemo,
};

let demoTeardowns = [];

function el(tag, cls, html) {
  const e = document.createElement(tag);
  if (cls) e.className = cls;
  if (html != null) e.innerHTML = html;
  return e;
}

function renderTable(block) {
  const fig = el('figure', 'data-table');
  if (block.caption) {
    const cap = el('figcaption', null, t(block.caption));
    renderMath(cap);
    fig.appendChild(cap);
  }
  const table = el('table');
  const thead = el('thead');
  const htr = el('tr');
  block.headers.forEach((h) => htr.appendChild(el('th', null, h)));
  thead.appendChild(htr);
  table.appendChild(thead);
  const tbody = el('tbody');
  block.rows.forEach((row) => {
    const tr = el('tr');
    row.forEach((c) => tr.appendChild(el('td', null, c)));
    tbody.appendChild(tr);
  });
  if (block.totals) {
    const tr = el('tr', 'totals');
    block.totals.forEach((c) => tr.appendChild(el('td', null, c)));
    tbody.appendChild(tr);
  }
  table.appendChild(tbody);
  fig.appendChild(table);
  renderMath(fig);
  return fig;
}

function renderExercises(block) {
  const wrap = el('div', 'exercises');
  wrap.appendChild(el('h4', null, t(block.label)));
  const intro = el('p', null, t(block.intro));
  renderMath(intro);
  wrap.appendChild(intro);
  const grid = el('div', 'exercise-grid');
  block.items.forEach((item) => {
    const card = el('div', 'exercise-card');
    card.appendChild(el('div', 'exercise-tag', item.tag));
    // Build a small two-row table from item.cols (each col = [x, y]).
    const table = el('table', 'mini');
    const r1 = el('tr');
    const r2 = el('tr');
    r1.appendChild(el('th', null, item.headers[0]));
    r2.appendChild(el('th', null, item.headers[1]));
    item.cols.forEach(([x, y]) => {
      r1.appendChild(el('td', null, x));
      r2.appendChild(el('td', null, y));
    });
    table.appendChild(r1);
    table.appendChild(r2);
    card.appendChild(table);
    grid.appendChild(card);
  });
  wrap.appendChild(grid);
  renderMath(wrap);
  return wrap;
}

function renderQuiz(ref, sectionId) {
  const items = quizzes[ref] || [];
  const wrap = el('div', 'quiz');
  const head = el('div', 'quiz-head');
  head.appendChild(el('span', 'quiz-icon', '🎯'));
  head.appendChild(el('strong', null, t({ hu: 'Kvíz', en: 'Quiz' })));
  wrap.appendChild(head);

  const body = el('div', 'quiz-body');
  wrap.appendChild(body);

  let idx = 0;
  let score = 0;

  function showQuestion() {
    body.innerHTML = '';
    if (idx >= items.length) {
      const done = el('div', 'quiz-done');
      const pct = Math.round((score / items.length) * 100);
      done.appendChild(el('p', null, `${t(UI.quizDone)} ${t(UI.quizScore)}: ${score}/${items.length} (${pct}%)`));
      if (score === items.length) {
        completeSection(sectionId);
        done.appendChild(el('p', 'quiz-pass', t(UI.sectionComplete) + ' ✓'));
      }
      const retry = el('button', 'btn', t(UI.retry));
      retry.addEventListener('click', () => { idx = 0; score = 0; showQuestion(); });
      done.appendChild(retry);
      body.appendChild(done);
      return;
    }

    const item = items[idx];
    const q = el('p', 'quiz-q', `${idx + 1}. ${t(item.q)}`);
    renderMath(q);
    body.appendChild(q);

    const opts = el('div', 'quiz-opts');
    let chosen = -1;
    item.options.forEach((opt, i) => {
      const b = el('button', 'quiz-opt', t(opt));
      renderMath(b);
      b.addEventListener('click', () => {
        chosen = i;
        opts.querySelectorAll('.quiz-opt').forEach((x) => x.classList.remove('selected'));
        b.classList.add('selected');
        feedback.textContent = '';
        feedback.className = 'quiz-feedback';
      });
      opts.appendChild(b);
    });
    body.appendChild(opts);

    const feedback = el('div', 'quiz-feedback');
    body.appendChild(feedback);

    const check = el('button', 'btn', t(UI.checkAnswer));
    check.addEventListener('click', () => {
      if (chosen < 0) return;
      const buttons = [...opts.querySelectorAll('.quiz-opt')];
      if (chosen === item.correct) {
        feedback.textContent = t(UI.correct);
        feedback.className = 'quiz-feedback ok';
        buttons[chosen].classList.add('right');
        score += 1;
        check.textContent = t(UI.next);
        check.replaceWith(check.cloneNode(true)); // strip listeners
        const next = body.querySelector('.btn');
        next.addEventListener('click', () => { idx += 1; showQuestion(); });
      } else {
        feedback.textContent = t(UI.incorrect);
        feedback.className = 'quiz-feedback bad';
        buttons[chosen].classList.add('wrong');
      }
    });
    body.appendChild(check);
  }

  showQuestion();
  return wrap;
}

function renderBlock(block, section) {
  switch (block.type) {
    case 'text': {
      const p = el('div', 'prose');
      renderMarkdownMath(p, t(block));
      return p;
    }
    case 'math': {
      const d = el('div', 'math-display');
      d.textContent = `$$${block.tex}$$`;
      renderMath(d);
      return d;
    }
    case 'callout': {
      const d = el('div', `callout ${block.variant || 'note'}`);
      renderMarkdownMath(d, t(block));
      return d;
    }
    case 'theorem':
    case 'example': {
      const d = el('div', `box ${block.type}`);
      d.appendChild(el('div', 'box-label', t(block.label)));
      const bd = el('div', 'box-body');
      renderMarkdownMath(bd, t(block));
      d.appendChild(bd);
      return d;
    }
    case 'table':
      return renderTable(block);
    case 'exercises':
      return renderExercises(block);
    case 'demo': {
      const fig = el('figure', 'demo-figure');
      const holder = el('div', 'demo-host');
      fig.appendChild(holder);
      if (block.caption) {
        const cap = el('figcaption', null, t(block.caption));
        renderMath(cap);
        fig.appendChild(cap);
      }
      const mounter = demoMounters[block.component];
      if (mounter) {
        const teardown = mounter(holder);
        if (typeof teardown === 'function') demoTeardowns.push(teardown);
      }
      return fig;
    }
    case 'quiz':
      return renderQuiz(block.ref, section.id);
    default:
      return el('div');
  }
}

/** Render every section into the content root. Returns a teardown function. */
export function renderContent(root) {
  // Clean up any previously mounted demos.
  demoTeardowns.forEach((fn) => { try { fn(); } catch {} });
  demoTeardowns = [];
  root.innerHTML = '';

  sections.forEach((section) => {
    const art = el('article', 'section');
    art.id = `sec-${section.id}`;
    const h = el('h2', 'section-title');
    h.textContent = t(section.title);
    if (isComplete(section.id)) h.appendChild(el('span', 'done-badge', '✓'));
    art.appendChild(h);
    section.blocks.forEach((b) => art.appendChild(renderBlock(b, section)));
    root.appendChild(art);
  });

  return () => {
    demoTeardowns.forEach((fn) => { try { fn(); } catch {} });
    demoTeardowns = [];
  };
}

export { sectionIds };
