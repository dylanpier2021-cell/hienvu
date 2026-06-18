import { useEffect } from 'react'
import { GHL_CHAT_WIDGET_SRC } from '@/data/booking'

/**
 * Optional GoHighLevel chat widget.
 *
 * To enable: set GHL_CHAT_WIDGET_SRC in src/data/booking.ts to the loader script
 * `src` from your GHL chat widget snippet. If your snippet includes extra data
 * attributes (for example data-resources-url or data-widget-id), add them to the
 * `attrs` object below. The script is injected with `defer` and only after the
 * page is interactive, so it never blocks first paint. Leave the constant blank
 * to keep the chat bubble off.
 */
const attrs: Record<string, string> = {
  // 'data-widget-id': 'PASTE_WIDGET_ID_HERE',
}

export function ChatWidget() {
  useEffect(() => {
    if (!GHL_CHAT_WIDGET_SRC || typeof document === 'undefined') return
    if (document.querySelector(`script[src="${GHL_CHAT_WIDGET_SRC}"]`)) return

    let injected = false
    const inject = () => {
      if (injected) return
      injected = true
      const s = document.createElement('script')
      s.src = GHL_CHAT_WIDGET_SRC
      s.defer = true
      for (const [k, v] of Object.entries(attrs)) s.setAttribute(k, v)
      document.body.appendChild(s)
    }

    // Wait until the browser is idle so the widget never competes with first paint.
    const w = window as typeof window & { requestIdleCallback?: (cb: () => void) => number }
    if (typeof w.requestIdleCallback === 'function') {
      w.requestIdleCallback(inject)
    } else {
      const t = window.setTimeout(inject, 2500)
      return () => window.clearTimeout(t)
    }
  }, [])

  return null
}
