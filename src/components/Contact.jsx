import { useState } from 'react'
import { submitNetlifyForm } from '../lib/netlifyForms'

const CONTACT_INFO = [
  { label: 'Adresse', value: '27 Rue Saglio, 67100 Strasbourg' },
  { label: 'Téléphone', value: '+33 3 88 00 00 00' },
  { label: 'Email', value: 'contact@vectorsign.fr' },
  { label: 'Horaires', value: 'Lun–Ven · 8h30–18h00' },
]

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState(false)

  async function handleSubmit(e) {
    e.preventDefault()
    setSubmitting(true)
    setError(false)
    const fields = Object.fromEntries(new FormData(e.target))
    try {
      const res = await submitNetlifyForm('contact', fields)
      if (!res.ok) throw new Error('Request failed')
      setSent(true)
    } catch {
      setError(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 rounded-3xl border border-white/10 bg-surface p-8 lg:grid-cols-5 lg:p-14">
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Contact</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Un projet d&rsquo;enseigne&nbsp;? Parlons-en.
            </h2>
            <p className="mt-4 text-slate-400">
              Décrivez-nous votre projet, nous revenons vers vous sous 48h avec un devis détaillé.
            </p>

            <dl className="mt-10 space-y-5">
              {CONTACT_INFO.map((item) => (
                <div key={item.label}>
                  <dt className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                    {item.label}
                  </dt>
                  <dd className="mt-1 text-sm text-slate-300">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-neon-2/30 bg-neon-2/5 p-10 text-center">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-neon-2/15 text-neon-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6">
                    <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                  </svg>
                </span>
                <h3 className="mt-4 font-display text-lg font-semibold text-white">
                  Merci, votre demande a été envoyée&nbsp;!
                </h3>
                <p className="mt-2 text-sm text-slate-400">
                  Notre équipe vous recontactera sous 48h ouvrées.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="text-xs font-medium text-slate-400">
                    Nom complet
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Jean Dupont"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-neon-2"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="text-xs font-medium text-slate-400">
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="06 00 00 00 00"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-neon-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="email" className="text-xs font-medium text-slate-400">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="jean.dupont@email.com"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-neon-2"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label htmlFor="message" className="text-xs font-medium text-slate-400">
                    Votre projet
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    placeholder="Décrivez votre commerce et le type d'enseigne souhaité..."
                    className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-surface-2 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none focus:border-neon-2"
                  />
                </div>
                {error && (
                  <p className="text-sm text-red-400 sm:col-span-2">
                    Une erreur est survenue lors de l&rsquo;envoi. Merci de réessayer ou de nous
                    appeler directement.
                  </p>
                )}

                <div className="sm:col-span-2">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full rounded-xl bg-gradient-to-r from-neon to-neon-2 px-6 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.02] disabled:opacity-60 sm:w-auto"
                  >
                    {submitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
