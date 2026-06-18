import { useId, useState, type FormEvent } from 'react'
import { business } from '@/data/business'
import { CONTACT_ENDPOINT } from '@/data/booking'
import { cn } from '@/lib/cn'
import { CheckIcon } from './icons'

type Errors = Partial<Record<'name' | 'phone' | 'email' | 'message' | 'consent', string>>

/**
 * Native, accessible appointment request form.
 *
 * A2P 10DLC / SMS compliance:
 *  - The SMS consent checkbox is REQUIRED and UNCHECKED by default.
 *  - Consent is not a condition of any purchase.
 *  - STOP / HELP language is shown in the consent label.
 *  - Submitted data is only used to respond and schedule; it is never sold or
 *    shared for marketing (see the Privacy Policy and Terms).
 *
 * Submission: posts JSON to CONTACT_ENDPOINT when set; otherwise it opens the
 * guest's email app with the details pre-filled to the salon address.
 */
export function ContactForm() {
  const uid = useId()
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(data: {
    name: string
    phone: string
    email: string
    message: string
    consent: boolean
  }): Errors {
    const next: Errors = {}
    if (!data.name.trim()) next.name = 'Please enter your name.'
    const digits = data.phone.replace(/\D/g, '')
    if (!data.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (digits.length < 10) next.phone = 'Please enter a valid phone number.'
    if (data.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = 'Please enter a valid email address.'
    if (!data.message.trim()) next.message = 'Please let us know how we can help.'
    if (!data.consent) next.consent = 'Please check the box to agree to receive text messages.'
    return next
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      name: String(fd.get('name') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      email: String(fd.get('email') ?? ''),
      message: String(fd.get('message') ?? ''),
      consent: fd.get('consent') === 'on',
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      // Move focus to the first invalid field (errors render on the next tick,
      // so resolve the field from the validation result, not the DOM).
      const order = ['name', 'phone', 'email', 'message', 'consent'] as const
      const firstKey = order.find((k) => found[k])
      const field = firstKey && form.elements.namedItem(firstKey)
      if (field instanceof HTMLElement) field.focus()
      return
    }

    setSubmitting(true)
    try {
      if (CONTACT_ENDPOINT) {
        await fetch(CONTACT_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ ...data, smsConsent: data.consent, source: 'website' }),
        })
      } else {
        const body = [
          `Name: ${data.name}`,
          `Phone: ${data.phone}`,
          data.email ? `Email: ${data.email}` : null,
          '',
          data.message,
          '',
          `SMS consent: ${data.consent ? 'Yes' : 'No'}`,
        ]
          .filter((l) => l !== null)
          .join('\n')
        const mailto = `mailto:${business.email}?subject=${encodeURIComponent(
          'Appointment request from website',
        )}&body=${encodeURIComponent(body)}`
        window.location.href = mailto
      }
      form.reset()
      setSent(true)
    } finally {
      setSubmitting(false)
    }
  }

  if (sent) {
    return (
      <div
        role="status"
        className="flex flex-col items-center rounded-2xl border border-primary/40 bg-secondary p-8 text-center"
      >
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15 text-primary-dark">
          <CheckIcon className="h-6 w-6" />
        </span>
        <h3 className="mt-4 font-serif text-xl font-semibold text-charcoal">Thank you!</h3>
        <p className="mt-2 text-muted-foreground">
          Your request is on its way. We will reach out shortly to confirm your appointment. For
          anything urgent, call us at{' '}
          <a href={business.phoneHref} className="font-semibold text-primary-dark underline underline-offset-2">
            {business.phoneDisplay}
          </a>
          .
        </p>
      </div>
    )
  }

  const fieldId = (name: string) => `${uid}-${name}`
  const errId = (name: string) => `${uid}-${name}-err`

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div>
        <label htmlFor={fieldId('name')} className="mb-1 block text-sm font-medium text-charcoal">
          Name <span className="text-primary-dark">*</span>
        </label>
        <input
          id={fieldId('name')}
          name="name"
          type="text"
          autoComplete="name"
          required
          aria-required="true"
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? errId('name') : undefined}
          className={cn(inputClass, errors.name && inputErrorClass)}
        />
        {errors.name && (
          <p id={errId('name')} role="alert" className={errorTextClass}>
            {errors.name}
          </p>
        )}
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId('phone')} className="mb-1 block text-sm font-medium text-charcoal">
            Phone <span className="text-primary-dark">*</span>
          </label>
          <input
            id={fieldId('phone')}
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={errors.phone ? errId('phone') : undefined}
            className={cn(inputClass, errors.phone && inputErrorClass)}
          />
          {errors.phone && (
            <p id={errId('phone')} role="alert" className={errorTextClass}>
              {errors.phone}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId('email')} className="mb-1 block text-sm font-medium text-charcoal">
            Email <span className="text-muted-foreground">(optional)</span>
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? errId('email') : undefined}
            className={cn(inputClass, errors.email && inputErrorClass)}
          />
          {errors.email && (
            <p id={errId('email')} role="alert" className={errorTextClass}>
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor={fieldId('message')} className="mb-1 block text-sm font-medium text-charcoal">
          How can we help? <span className="text-primary-dark">*</span>
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={4}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? errId('message') : undefined}
          placeholder="Let us know the service you would like and your preferred day or time."
          className={cn(inputClass, 'resize-y', errors.message && inputErrorClass)}
        />
        {errors.message && (
          <p id={errId('message')} role="alert" className={errorTextClass}>
            {errors.message}
          </p>
        )}
      </div>

      {/* SMS consent: REQUIRED, unchecked by default, not a condition of purchase. */}
      <div>
        <div className="flex items-start gap-3">
          <input
            id={fieldId('consent')}
            name="consent"
            type="checkbox"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={errors.consent ? errId('consent') : undefined}
            className="mt-1 h-5 w-5 flex-none rounded border-border text-primary accent-[#CC9F33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-dark"
          />
          <label htmlFor={fieldId('consent')} className="text-sm leading-relaxed text-muted-foreground">
            By checking this box, I agree to receive appointment and promotional text messages from{' '}
            {business.name} at the number provided. Message and data rates may apply. Message frequency
            varies. Reply STOP to opt out, HELP for help.{' '}
            <span className="font-semibold text-destructive">(required)</span>
          </label>
        </div>
        {errors.consent && (
          <p id={errId('consent')} role="alert" className={cn(errorTextClass, 'ml-8')}>
            {errors.consent}
          </p>
        )}
        <p className="ml-8 mt-2 text-xs text-muted-foreground">
          You must be 18 years of age or older to use this SMS service.
        </p>
        <p className="ml-8 mt-1 text-xs text-muted-foreground">
          Your mobile information and SMS consent are never shared or sold to third parties or
          affiliates.
        </p>
      </div>

      <button type="submit" disabled={submitting} className="btn btn-primary w-full disabled:opacity-70">
        {submitting ? 'Sending...' : 'Request Appointment'}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        By submitting this form you agree to our{' '}
        <a href="/privacy" className="underline underline-offset-2 hover:text-primary-dark">
          Privacy Policy
        </a>{' '}
        and{' '}
        <a href="/terms" className="underline underline-offset-2 hover:text-primary-dark">
          Terms
        </a>
        .
      </p>
    </form>
  )
}

const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-dark'
const inputErrorClass = 'border-destructive focus-visible:outline-destructive'
const errorTextClass = 'mt-1 text-sm text-destructive'
