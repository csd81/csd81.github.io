import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { LanguageProvider } from './shared/providers/LanguageProvider';
import { ThemeProvider } from './shared/providers/ThemeProvider';
import { AuthProvider } from './shared/providers/AuthProvider';
import { CodeLangProvider } from './shared/ui/CodeLangProvider';
import { ScrollyNavProvider } from './shared/scrolly/ScrollyNavContext';
import AppRoutes from './routes';
import './shared/styles/tailwind.css';
import './shared/styles/global.css';
import 'katex/dist/katex.min.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider>
      <LanguageProvider>
        <AuthProvider>
          <CodeLangProvider>
            <ScrollyNavProvider>
              <BrowserRouter>
                <AppRoutes />
              </BrowserRouter>
            </ScrollyNavProvider>
          </CodeLangProvider>
        </AuthProvider>
      </LanguageProvider>
    </ThemeProvider>
  </StrictMode>,
);
