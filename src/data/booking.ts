/**
 * Booking + contact configuration. This is the only place to edit these values.
 *
 * SMS / A2P 10DLC COMPLIANCE NOTE
 * ------------------------------------------------------------------------
 * The Contact Us opt-in form (src/components/OptInForm.tsx) is the site's
 * single SMS opt-in source. There is no chat widget. Do NOT embed any second
 * form, calendar, or widget anywhere on the site that collects a phone number
 * or shows an SMS-consent checkbox, or carrier review will flag a duplicate
 * opt-in. Any phone-collecting form must reuse OptInForm and nothing else.
 */

/**
 * Optional backend for the Contact Us opt-in form. Point this at a handler you
 * control (a GoHighLevel inbound webhook, Formspree, or your own endpoint) to
 * capture submissions server-side, including the two SMS consent flags. Leave
 * '' to fall back to opening the guest's email app pre-filled to the salon.
 */
export const CONTACT_ENDPOINT = ''

/**
 * Optional GoHighLevel scheduling calendar iframe `src`. Currently unused (the
 * site books by phone and by the contact form). If you embed a calendar later,
 * keep it scheduling-only with no SMS-consent checkbox. Looks like:
 *   https://api.leadconnectorhq.com/widget/booking/XXXXXXXXXXXXXXXX
 */
export const GHL_BOOKING_SRC = 'PASTE_GHL_CALENDAR_EMBED_URL_HERE'

/** GHL auto-resize helper script, only needed if a calendar is embedded. */
export const GHL_EMBED_SCRIPT = 'https://link.msgsndr.com/js/form_embed.js'

/** Returns true once a real GHL url has replaced the placeholder. */
export function isConfigured(src: string): boolean {
  return Boolean(src) && !src.startsWith('PASTE_')
}
