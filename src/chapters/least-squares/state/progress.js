// Progress + XP store, persisted to localStorage. Light-touch gamification.

const KEY = 'lsq.progress';
const listeners = new Set();

const defaultState = () => ({ completed: {}, xp: 0 });

let state = (() => {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return { ...defaultState(), ...JSON.parse(raw) };
  } catch {}
  return defaultState();
})();

function persist() {
  try {
    localStorage.setItem(KEY, JSON.stringify(state));
  } catch {}
  listeners.forEach((fn) => fn(state));
}

export function onProgressChange(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

export function isComplete(sectionId) {
  return !!state.completed[sectionId];
}

export function getXP() {
  return state.xp;
}

/** Mark a section complete (idempotent). Awards XP only the first time. */
export function completeSection(sectionId, xp = 50) {
  if (state.completed[sectionId]) return;
  state.completed[sectionId] = true;
  state.xp += xp;
  persist();
}

/** Fraction [0,1] of sections completed, given the total count. */
export function completionRatio(totalSections) {
  if (!totalSections) return 0;
  const done = Object.keys(state.completed).filter((k) => state.completed[k]).length;
  return Math.min(1, done / totalSections);
}

export function allComplete(sectionIds) {
  return sectionIds.length > 0 && sectionIds.every((id) => state.completed[id]);
}

export function reset() {
  state = defaultState();
  persist();
}
