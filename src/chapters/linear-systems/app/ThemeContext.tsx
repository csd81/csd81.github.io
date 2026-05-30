/**
 * Adapter over the shared ThemeProvider. Chapter 03 expects
 * { theme, toggleTheme, setTheme } and keys its CSS off `data-theme`.
 */
import { useTheme as useSharedTheme } from '../../../shared/providers/ThemeProvider';

export type Theme = 'light' | 'dark';

export function useTheme() {
  const { theme, toggle, setTheme } = useSharedTheme();
  return { theme: theme as Theme, toggleTheme: toggle, setTheme };
}
