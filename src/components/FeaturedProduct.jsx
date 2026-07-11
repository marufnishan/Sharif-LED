import { useState } from 'react'
import saloneDay from '../assets/salone_day.jpeg'
import saloneNight from '../assets/salone_night.jpeg'

const HIGHLIGHTS = [
  'Double face, visible des deux côtés de la rue',
  'Installation perpendiculaire à votre façade',
  'Idéale pour salons de coiffure, restaurants & boutiques',
  'Design épuré et ultra-lumineux, de jour comme de nuit',
]

export default function FeaturedProduct() {
  const [isNight, setIsNight] = useState(true)

  return (
    <section id="drapeau" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 rounded-3xl border border-white/10 bg-surface p-8 lg:grid-cols-2 lg:items-center lg:p-14">
          <div className="relative order-2 lg:order-1">
            <button
              type="button"
              translate="no"
              onClick={() => setIsNight((v) => !v)}
              className={`absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold shadow-lg backdrop-blur transition-colors duration-300 ${
                isNight
                  ? 'border-white/10 bg-surface-2/90 text-white'
                  : 'border-amber/40 bg-amber/15 text-amber'
              }`}
            >
              {isNight ? (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M16.5 12.5A7 7 0 018 4.6 7 7 0 1016.5 12.5z" />
                </svg>
              ) : (
                <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                  <path d="M10 4a1 1 0 011 1v1a1 1 0 11-2 0V5a1 1 0 011-1zm0 10a4 4 0 100-8 4 4 0 000 8zm7-4a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zm10.36-5.36a1 1 0 010 1.42l-.7.7a1 1 0 11-1.42-1.42l.7-.7a1 1 0 011.42 0zM6.76 13.54a1 1 0 010 1.42l-.7.7A1 1 0 114.64 14.24l.7-.7a1 1 0 011.42 0zm8.6 1.42a1 1 0 01-1.42 0l-.7-.7a1 1 0 111.42-1.42l.7.7a1 1 0 010 1.42zM6.06 6.06a1 1 0 01-1.42 0l-.7-.7A1 1 0 115.36 3.94l.7.7a1 1 0 010 1.42zM10 15a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" />
                </svg>
              )}
              {isNight ? 'Mode Nuit' : 'Mode Jour'}
            </button>

            <div className="neon-ring overflow-hidden rounded-3xl border border-white/10">
              <img
                src={isNight ? saloneNight : saloneDay}
                alt="Enseigne drapeau lumineuse ronde et double face"
                loading="lazy"
                width={757}
                height={1051}
                className="h-full w-full object-cover transition-opacity duration-300"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 hidden rounded-2xl border border-white/10 bg-surface-2/95 px-6 py-4 shadow-2xl backdrop-blur sm:block">
              <p className="font-display text-sm font-semibold text-white">360° de visibilité</p>
              <p className="text-xs text-slate-400">Lecture des deux côtés de la rue</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Produit phare</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Enseigne Drapeau <span className="text-gradient">Lumineuse</span>
            </h2>
            <p className="mt-5 text-slate-400">
              Maximisez la visibilité de votre commerce avec notre enseigne drapeau ronde double
              face. Idéale pour les salons de coiffure, restaurants, et boutiques, elle s&rsquo;installe
              perpendiculairement à votre façade pour capter le regard des passants des deux côtés
              de la rue. Un design épuré, moderne et ultra-lumineux pour valoriser votre image de
              marque, de jour comme de nuit.
            </p>

            <ul className="mt-8 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-2/15 text-neon-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-300">{item}</span>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="mt-10 inline-flex rounded-full bg-gradient-to-r from-neon to-neon-2 px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Demander un devis pour ce modèle
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
