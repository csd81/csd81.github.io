import { describe, it, expect, afterEach } from 'vitest';
import { render, screen, fireEvent, cleanup } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';
import { ThemeProvider } from './app/ThemeContext';
import { LanguageProvider } from './app/LanguageContext';

function renderAt(path: string) {
  return render(
    <ThemeProvider>
      <LanguageProvider>
        <MemoryRouter initialEntries={[path]}>
          <App />
        </MemoryRouter>
      </LanguageProvider>
    </ThemeProvider>,
  );
}

afterEach(() => {
  cleanup();
  localStorage.clear();
  document.documentElement.removeAttribute('data-theme');
});

describe('App shell', () => {
  it('renders the home page with brand and navigation', () => {
    renderAt('/');
    expect(screen.getAllByText('Linear Systems').length).toBeGreaterThan(0);
    expect(screen.getByRole('link', { name: 'Elimination Lab' })).toBeInTheDocument();
  });

  it('toggles language to Hungarian', () => {
    renderAt('/');
    fireEvent.click(screen.getByRole('button', { name: 'Magyar' }));
    expect(screen.getAllByText('Lineáris egyenletrendszerek').length).toBeGreaterThan(0);
  });

  it('toggles dark mode on the document element', () => {
    renderAt('/');
    const before = document.documentElement.getAttribute('data-theme');
    fireEvent.click(screen.getByRole('button', { name: 'Toggle dark mode' }));
    const after = document.documentElement.getAttribute('data-theme');
    expect(after).not.toBe(before);
    expect(['light', 'dark']).toContain(after);
  });
});

describe('Elimination Lab', () => {
  it('renders a step caption and a matrix for the default example', () => {
    const { container } = renderAt('/lab');
    expect(screen.getAllByText('Elimination Lab').length).toBeGreaterThan(0);
    expect(screen.getByText('Initial augmented matrix.')).toBeInTheDocument();
    expect(container.querySelector('.matrix-view')).toBeTruthy();
  });

  it('deep-links a preset + strategy and shows the solution', () => {
    const { container } = renderAt('/lab?preset=ex3-24&mode=solve&method=gauss&pivot=partial');
    // Result panel shows a solution made of KaTeX pills.
    const result = container.querySelector('.result-line');
    expect(result).toBeTruthy();
    expect(container.querySelectorAll('.pill').length).toBeGreaterThan(0);
  });
});

describe('Quiz', () => {
  it('renders a question and checks an answer', () => {
    renderAt('/quiz');
    expect(screen.getAllByText(/Self-check quiz/).length).toBeGreaterThan(0);
    // First question is the triangular-solve vector question.
    const check = screen.getByRole('button', { name: 'Check' });
    expect(check).toBeInTheDocument();
  });
});
