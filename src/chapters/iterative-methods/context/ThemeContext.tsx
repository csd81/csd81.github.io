/**
 * Adapter over the shared ThemeProvider. Chapter 04 expects { theme, toggle }
 * and toggles the `.dark` class on <html>, both supplied by the shared provider.
 */
export { useTheme } from '../../../shared/providers/ThemeProvider';
export type { Theme } from '../../../shared/providers/ThemeProvider';
