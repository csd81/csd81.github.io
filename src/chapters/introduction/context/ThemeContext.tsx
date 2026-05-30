/**
 * Adapter: re-expose the shared ThemeProvider under the API chapter 01 expects
 * ({ theme, toggle }). The shared provider already sets `data-theme` on <html>,
 * which this chapter's CSS keys off.
 */
import { useTheme as useSharedTheme } from '../../../shared/providers/ThemeProvider';

export function useTheme() {
  const { theme, toggle } = useSharedTheme();
  return { theme, toggle };
}
