/**
 * Adapter over the shared ThemeProvider. Chapter 07 expects { theme, toggle,
 * setTheme } and toggles the `.dark` class on <html>, both supplied by shared.
 */
export { useTheme } from '../../../shared/providers/ThemeProvider';
export type { Theme } from '../../../shared/providers/ThemeProvider';
