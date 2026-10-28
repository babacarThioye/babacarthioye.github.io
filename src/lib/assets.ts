/** Builds an asset URL that works both at the Pages root and project subpaths. */
export function publicAsset(path: string) {
  return `${import.meta.env.BASE_URL}${path.replace(/^\//, '')}`
}
