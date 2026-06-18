import type { ComponentType } from 'react'
import type { RouteRecord } from 'vite-react-ssg'
import App from './App'

type Importer = () => Promise<Record<string, unknown>>

/** Lazy route helper that maps a module export to a router Component + SSG entry. */
function page(importer: Importer, entry: string, pick = 'default') {
  return {
    lazy: () => importer().then((m) => ({ Component: m[pick] as ComponentType })),
    entry,
  }
}

export const routes: RouteRecord[] = [
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, ...page(() => import('./pages/Home'), 'src/pages/Home.tsx') },

      { path: 'privacy', ...page(() => import('./pages/Privacy'), 'src/pages/Privacy.tsx') },
      { path: 'terms', ...page(() => import('./pages/Terms'), 'src/pages/Terms.tsx') },

      // Pre-rendered custom 404 (the only noindex page).
      { path: '404', ...page(() => import('./pages/NotFound'), 'src/pages/NotFound.tsx') },

      // Client-side fallback for unknown routes (not pre-rendered).
      { path: '*', ...page(() => import('./pages/NotFound'), 'src/pages/NotFound.tsx') },
    ],
  },
]
