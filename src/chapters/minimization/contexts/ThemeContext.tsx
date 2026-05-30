/**
 * Adapter over the shared ThemeProvider. Chapter 08 expects { theme, toggle,
 * setTheme } and keys its CSS off `data-theme` on <html>, both of which the
 * shared provider supplies.
 */
export { useTheme, ThemeProvider } from '../../../shared/providers/ThemeProvider';
export type { Theme } from '../../../shared/providers/ThemeProvider';
