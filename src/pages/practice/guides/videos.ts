/**
 * Per-subsection lecture videos.
 *
 * The source videos (~1.8 GB total, one is >100 MB) are far too large for the
 * GitHub Pages repo, so they must be hosted externally and referenced by URL.
 *
 * Map each subsection base (its folder name, e.g. '02_05_Newton_s_Method') to:
 *   - 'yt:<id>'          → embedded as a YouTube player, or
 *   - a direct video URL → played with a native <video> element.
 *
 * Leave a subsection out (or '') to hide its video block.
 */
export const SUBSECTION_VIDEOS: Record<string, string> = {
  // '02_05_Newton_s_Method': 'yt:dQw4w9WgXcQ',
  // '01_03_Error_Analysis': 'https://cdn.example.com/numeric/01_03.mp4',
};

export function videoFor(base: string): string | undefined {
  const v = SUBSECTION_VIDEOS[base];
  return v ? v : undefined;
}
