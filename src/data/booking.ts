/**
 * GoHighLevel (GHL) booking + form configuration.
 *
 * ============================================================================
 *  PASTE YOUR GOHIGHLEVEL EMBED URLS HERE. This is the only place to edit.
 * ============================================================================
 *
 * 1) GHL_BOOKING_SRC  -> the calendar / appointment widget iframe `src`.
 *    In GHL: Calendars > (your calendar) > share / embed, then copy the iframe
 *    `src`. It looks like:
 *      https://api.leadconnectorhq.com/widget/booking/XXXXXXXXXXXXXXXX
 *
 * 2) GHL_FORM_SRC     -> a GHL lead / contact form iframe `src` (optional second
 *    option below the calendar). In GHL: Sites > Forms > (your form) > Integrate
 *    > Embed, then copy the iframe `src`. It looks like:
 *      https://api.leadconnectorhq.com/widget/form/XXXXXXXXXXXXXXXX
 *
 * 3) GHL_CHAT_WIDGET_SRC -> optional GHL chat widget loader script `src`. Leave
 *    blank to disable the chat bubble. When set, it is loaded with `defer` only
 *    after the page is interactive (see ChatWidget.tsx).
 *
 * Until GHL_BOOKING_SRC is filled in, the booking section shows a clear "Call to
 * Book" fallback so the page is always usable.
 */

// 1) Calendar / appointment booking widget.
export const GHL_BOOKING_SRC = 'PASTE_GHL_CALENDAR_EMBED_URL_HERE'

// 2) Lead / contact form widget (optional second booking option).
export const GHL_FORM_SRC = 'PASTE_GHL_FORM_EMBED_URL_HERE'

// 3) Optional GHL chat widget loader script src (leave '' to disable).
export const GHL_CHAT_WIDGET_SRC = ''

/** GHL auto-resize helper script for embedded calendars and forms. */
export const GHL_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js'

/**
 * Optional endpoint for the native "Request an appointment" form. Set this to a
 * form backend that you control (for example a GoHighLevel inbound webhook,
 * Formspree, or your own handler) to capture submissions server-side, including
 * the SMS consent value. Leave '' to fall back to opening the guest's email app
 * with the message pre-filled to the salon's address.
 */
export const CONTACT_ENDPOINT = ''

/** Returns true once a real GHL url has replaced the placeholder. */
export function isConfigured(src: string): boolean {
  return Boolean(src) && !src.startsWith('PASTE_')
}
