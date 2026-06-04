// Maps a page pathname to its pre-generated OG image path, and back.
// Both the endpoint (getStaticPaths) and BaseHead rely on this so they never drift.

const TRAILING_SLASHES = /\/+$/
const LEADING_SLASH = /^\//

export function pathnameToOgKey(pathname: string): string {
  const clean = pathname.replace(TRAILING_SLASHES, '').replace(LEADING_SLASH, '')
  return clean === '' ? 'index' : clean
}

export function ogImagePath(pathname: string): string {
  return `/og/${pathnameToOgKey(pathname)}.png`
}
