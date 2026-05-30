import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import 'katex/dist/katex.min.css';
import './styles/global.css';
import App from './App';
import { ThemeProvider } from './app/ThemeContext';
import { LanguageProvider } from './app/LanguageContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <HashRouter>
          <App />
        </HashRouter>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
