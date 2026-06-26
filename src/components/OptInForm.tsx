import { useId, useState, type FormEvent } from 'react'
import { Link } from 'react-router-dom'
import { business } from '@/data/business'
import { CONTACT_ENDPOINT } from '@/data/booking'
import { cn } from '@/lib/cn'
import { CheckIcon } from './icons'

/**
 * The single SMS opt-in form for the whole site (Contact Us page).
 *
 * A2P 10DLC / carrier review requirements baked in here:
 *  - Two SEPARATE SMS consent checkboxes (transactional and marketing).
 *  - Both are OPTIONAL and unchecked by default. Consent is never a condition
 *    of submitting the form or of any purchase.
 *  - The exact consent wording is fixed (see CONSENT_TRANSACTIONAL / _MARKETING)
 *    and identifies the sender as "Hien Vu (DBA Hien Vu Nails)".
 *  - The Privacy Policy and Terms links sit BELOW the checkboxes, never inside
 *    the consent disclosures.
 *
 * This must be the only phone-collecting form on the site.
 */

// Exact carrier-approved consent language. Do not edit without re-approval.
const CONSENT_TRANSACTIONAL =
  'By checking this box, I consent to receive transactional messages related to my account, orders, or services I have requested from Hien Vu (DBA Hien Vu Nails). These messages may include reminders, order confirmations, and account notifications among others. Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.'

const CONSENT_MARKETING =
  'By checking this box, I consent to receive marketing and promotional messages, including special offers, discounts, and new product updates, among others, from Hien Vu (DBA Hien Vu Nails). Message frequency may vary. Message & Data rates may apply. Reply HELP for help or STOP to opt out.'

type Errors = Partial<Record<'firstName' | 'lastName' | 'phone' | 'email', string>>

export function OptInForm() {
  const uid = useId()
  const [errors, setErrors] = useState<Errors>({})
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  function validate(data: { firstName: string; lastName: string; phone: string; email: string }): Errors {
    const next: Errors = {}
    if (!data.firstName.trim()) next.firstName = 'Please enter your first name.'
    if (!data.lastName.trim()) next.lastName = 'Please enter your last name.'
    const digits = data.phone.replace(/\D/g, '')
    if (!data.phone.trim()) next.phone = 'Please enter a phone number.'
    else if (digits.length < 10) next.phone = 'Please enter a valid phone number.'
    if (!data.email.trim()) next.email = 'Please enter an email address.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email))
      next.email = 'Please enter a valid email address.'
    return next
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const fd = new FormData(form)
    const data = {
      firstName: String(fd.get('firstName') ?? ''),
      lastName: String(fd.get('lastName') ?? ''),
      phone: String(fd.get('phone') ?? ''),
      email: String(fd.get('email') ?? ''),
      message: String(fd.get('message') ?? ''),
      transactionalConsent: fd.get('transactionalConsent') === 'on',
      marketingConsent: fd.get('marketingConsent') === 'on',
    }

    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) {
      const order = ['firstName', 'lastName', 'phone', 'email'] as const
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
          body: JSON.stringify({ ...data, source: 'website-contact' }),
        })
      } else {
        const body = [
          `Name: ${data.firstName} ${data.lastName}`,
          `Phone: ${data.phone}`,
          `Email: ${data.email}`,
          '',
          data.message || '(no message)',
          '',
          `Transactional SMS consent: ${data.transactionalConsent ? 'Yes' : 'No'}`,
          `Marketing SMS consent: ${data.marketingConsent ? 'Yes' : 'No'}`,
        ].join('\n')
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
    <form onSubmit={onSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId('firstName')} className={labelClass}>
            First Name <span className="text-primary-dark">*</span>
          </label>
          <input
            id={fieldId('firstName')}
            name="firstName"
            type="text"
            autoComplete="given-name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.firstName)}
            aria-describedby={errors.firstName ? errId('firstName') : undefined}
            className={cn(inputClass, errors.firstName && inputErrorClass)}
          />
          {errors.firstName && (
            <p id={errId('firstName')} role="alert" className={errorTextClass}>
              {errors.firstName}
            </p>
          )}
        </div>

        <div>
          <label htmlFor={fieldId('lastName')} className={labelClass}>
            Last Name <span className="text-primary-dark">*</span>
          </label>
          <input
            id={fieldId('lastName')}
            name="lastName"
            type="text"
            autoComplete="family-name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.lastName)}
            aria-describedby={errors.lastName ? errId('lastName') : undefined}
            className={cn(inputClass, errors.lastName && inputErrorClass)}
          />
          {errors.lastName && (
            <p id={errId('lastName')} role="alert" className={errorTextClass}>
              {errors.lastName}
            </p>
          )}
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor={fieldId('phone')} className={labelClass}>
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
          <label htmlFor={fieldId('email')} className={labelClass}>
            Email <span className="text-primary-dark">*</span>
          </label>
          <input
            id={fieldId('email')}
            name="email"
            type="email"
            autoComplete="email"
            inputMode="email"
            required
            aria-required="true"
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
        <label htmlFor={fieldId('message')} className={labelClass}>
          How can we help? <span className="text-muted-foreground">(optional)</span>
        </label>
        <textarea
          id={fieldId('message')}
          name="message"
          rows={4}
          placeholder="Let us know the service you would like and your preferred day or time."
          className={cn(inputClass, 'resize-y')}
        />
      </div>

      {/* Two SEPARATE SMS consent checkboxes. Both OPTIONAL, unchecked by default. */}
      <fieldset className="space-y-3 rounded-xl border border-border bg-secondary/40 p-4">
        <legend className="px-1 text-sm font-medium text-charcoal">
          SMS messaging (optional)
        </legend>

        <div className="flex items-start gap-3">
          <input
            id={fieldId('transactionalConsent')}
            name="transactionalConsent"
            type="checkbox"
            className={checkboxClass}
          />
          <label
            htmlFor={fieldId('transactionalConsent')}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {CONSENT_TRANSACTIONAL}
          </label>
        </div>

        <div className="flex items-start gap-3">
          <input
            id={fieldId('marketingConsent')}
            name="marketingConsent"
            type="checkbox"
            className={checkboxClass}
          />
          <label
            htmlFor={fieldId('marketingConsent')}
            className="text-sm leading-relaxed text-muted-foreground"
          >
            {CONSENT_MARKETING}
          </label>
        </div>
      </fieldset>

      {/* Policy links sit BELOW the checkboxes, never inside the consent text. */}
      <p className="text-sm text-muted-foreground">
        <Link to="/privacy" className="font-medium text-primary-dark underline underline-offset-2">
          Privacy Policy
        </Link>{' '}
        <span aria-hidden="true">|</span>{' '}
        <Link to="/terms" className="font-medium text-primary-dark underline underline-offset-2">
          Terms &amp; Conditions
        </Link>
      </p>

      <button type="submit" disabled={submitting} className="btn btn-primary w-full disabled:opacity-70">
        {submitting ? 'Sending...' : 'Request Appointment'}
      </button>

      <p className="text-center text-xs text-muted-foreground">
        You must be 18 years of age or older to use this SMS service.
      </p>
    </form>
  )
}

const labelClass = 'mb-1 block text-sm font-medium text-charcoal'
const inputClass =
  'w-full rounded-lg border border-border bg-background px-3.5 py-2.5 text-foreground placeholder:text-muted-foreground/70 focus-visible:border-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-dark'
const inputErrorClass = 'border-destructive focus-visible:outline-destructive'
const errorTextClass = 'mt-1 text-sm text-destructive'
const checkboxClass =
  'mt-1 h-5 w-5 flex-none rounded border-border text-primary accent-[#CC9F33] focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary-dark'
