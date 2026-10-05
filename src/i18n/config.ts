// i18n infrastructure. Flip ID_ENABLED to true once /id/* pages exist —
// the nav switcher, auto-detect redirect and hreflang all key off this flag.
export const ID_ENABLED = true;

export type Locale = 'en' | 'id';
export const DEFAULT_LOCALE: Locale = 'en';

export function localeOf(pathname: string): Locale {
  return pathname === '/id' || pathname.startsWith('/id/') ? 'id' : 'en';
}

// Map any path to its counterpart in the target locale.
export function toCounterpart(pathname: string, target: Locale): string {
  const clean = pathname.split('?')[0].split('#')[0] || '/';
  if (target === 'id') {
    if (clean === '/') return '/id/';
    if (clean === '/id' || clean.startsWith('/id/')) return clean;
    return `/id${clean}`;
  }
  const stripped = clean.replace(/^\/id(?=\/|$)/, '');
  return stripped === '' ? '/' : stripped;
}
