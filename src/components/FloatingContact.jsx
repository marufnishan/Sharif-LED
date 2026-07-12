import { useState } from 'react'
import { submitNetlifyForm } from '../lib/netlifyForms'

const PHONE = '+33 3 88 00 00 00'
const PHONE_HREF = 'tel:+33388000000'
const EMAIL = 'contact@vectorsign.fr'

function IconPhone(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M4 5c0 8.284 6.716 15 15 15h1a1 1 0 001-1v-2.2a1 1 0 00-.76-.97l-3.35-.84a1 1 0 00-1 .27l-1.06 1.06a12.6 12.6 0 01-6.15-6.15l1.06-1.06a1 1 0 00.27-1L9.17 4.76A1 1 0 008.2 4H6a1 1 0 00-1 1z" />
    </svg>
  )
}

function IconMail(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="M3 7l9 6 9-6" />
    </svg>
  )
}

function IconClock(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 3" />
    </svg>
  )
}

function IconClose(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" {...props}>
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  )
}

function IconChevronUp(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M6 15l6-6 6 6" />
    </svg>
  )
}

export default function FloatingContact() {
  const [open, setOpen] = useState(false)
  const [view, setView] = useState('menu')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  function close() {
    setOpen(false)
    setTimeout(() => setView('menu'), 200)
  }

  async function handleCallbackSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    try {
      const res = await submitNetlifyForm('callback-request', { phone })
      if (!res.ok) throw new Error('Request failed')
      setView('sent')
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {open && (
        <div className="w-72 overflow-hidden rounded-2xl border border-white/10 bg-surface shadow-2xl">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
            <p className="font-display text-sm font-semibold text-white">
              {view === 'sent' ? 'Demande envoyée' : 'Besoin d’un renseignement ?'}
            </p>
            <button
              type="button"
              onClick={close}
              aria-label="Fermer"
              className="flex h-7 w-7 items-center justify-center rounded-full text-slate-400 hover:bg-white/5 hover:text-white"
            >
              <IconClose className="h-4 w-4" />
            </button>
          </div>

          {view === 'menu' && (
            <div className="p-2">
              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-3 rounded-xl px-3 py-3 transition-colors hover:bg-white/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon-2/15 text-neon-2">
                  <IconMail className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">Envoyer un email</span>
                  <span className="block text-xs text-slate-400">{EMAIL}</span>
                </span>
              </a>

              <button
                type="button"
                onClick={() => setView('callback')}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left transition-colors hover:bg-white/5"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-neon/15 text-neon">
                  <IconClock className="h-4 w-4" />
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">Être rappelé</span>
                  <span className="block text-xs text-slate-400">Un conseiller vous rappelle</span>
                </span>
              </button>
            </div>
          )}

          {view === 'callback' && (
            <form onSubmit={handleCallbackSubmit} className="p-4">
              <label htmlFor="fc-phone" className="text-xs font-medium text-slate-400">
                Votre numéro de téléphone
              </label>
              <input
                id="fc-phone"
                type="tel"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="06 00 00 00 00"
                className="mt-2 w-full rounded-xl border border-white/10 bg-surface-2 px-3 py-2.5 text-sm text-white placeholder:text-slate-500 outline-none focus:border-neon-2"
              />
              {error && (
                <p className="mt-2 text-xs text-red-400">
                  Une erreur est survenue. Merci de réessayer ou de nous appeler directement.
                </p>
              )}

              <div className="mt-3 flex gap-2">
                <button
                  type="button"
                  onClick={() => setView('menu')}
                  className="rounded-xl border border-white/10 px-3 py-2.5 text-xs font-semibold text-slate-300 hover:bg-white/5"
                >
                  Retour
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="flex-1 rounded-xl bg-gradient-to-r from-neon to-neon-2 px-3 py-2.5 text-xs font-semibold text-ink disabled:opacity-60"
                >
                  {submitting ? 'Envoi...' : 'Demander un rappel'}
                </button>
              </div>
            </form>
          )}

          {view === 'sent' && (
            <div className="p-5 text-center">
              <p className="text-sm text-slate-300">
                Merci&nbsp;! Un conseiller Vector Sign vous rappelle très prochainement au{' '}
                <span className="font-semibold text-white">{phone}</span>.
              </p>
            </div>
          )}
        </div>
      )}

      <div className="flex items-stretch overflow-hidden rounded-full bg-amber shadow-2xl shadow-amber/30">
        <a
          href={PHONE_HREF}
          className="flex items-center gap-1 px-2.5 py-1.5 text-ink transition-transform hover:scale-[1.02]"
        >
          <IconPhone className="h-3 w-3 shrink-0" />
          <span>
            <span className="block text-[11px] font-semibold leading-tight">Nous appeler</span>
            <span className="block text-[10px] font-medium leading-tight text-ink">{PHONE}</span>
          </span>
        </a>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Autres moyens de contact"
          className="flex items-center border-l border-ink/15 px-2 text-ink transition-colors hover:bg-black/5"
        >
          {open ? <IconClose className="h-3 w-3" /> : <IconChevronUp className="h-3 w-3" />}
        </button>
      </div>
    </div>
  )
}
