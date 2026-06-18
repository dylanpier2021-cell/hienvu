import { SITE_URL, business } from '@/data/business'

/** Build an absolute URL for a route path. */
export function absUrl(path: string): string {
  if (path.startsWith('http')) return path
  return `${SITE_URL}${path.startsWith('/') ? path : `/${path}`}`
}

export const DEFAULT_OG_IMAGE = absUrl('/og-image.png')
/** Brand noun phrase used for og:site_name and meta. */
export const SITE_NAME = business.brand

export interface BreadcrumbItem {
  name: string
  path: string
}
