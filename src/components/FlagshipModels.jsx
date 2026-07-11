import { useState } from 'react'

const MODELS = [
  {
    code: 'V01',
    name: 'Modèle V01',
    desc: 'Lettres boîtiers individuelles avec retour',
    features: ['Fabriqué en inox brossé', 'Éclairage face avant', 'Laquage possible sur les retours'],
    variant: 'ring',
    glow: '#f7941d',
  },
  {
    code: 'V05',
    name: 'Modèle V05',
    desc: 'Lettres boîtiers individuelles sans retour',
    features: ['Fabriqué en inox brossé', 'Éclairage face avant', 'Laquage possible sur les retours'],
    variant: 'ring',
    glow: '#1e88e5',
  },
  {
    code: 'V08',
    name: 'Modèle V08',
    desc: 'Lettres rétro-éclairées par la tranche',
    features: ['Face avant opaque en Dibond 3mm', 'Bandeau LED sur la tranche'],
    variant: 'halo',
    glow: '#e5252e',
  },
  {
    code: 'V14',
    name: 'Modèle V14',
    desc: 'Caisson ajouré, lumière diffusante',
    features: ['Matière PVC, Dibond, Plexiglas', 'Découpe laser des lettres', 'Éclairage face avant'],
    variant: 'matrix',
    glow: '#7b2cbf',
  },
]

function ModelGraphic({ variant, lit, glow }) {
  const stroke = lit ? glow : '#5b6272'
  const filter = lit ? `drop-shadow(0 0 10px ${glow}) drop-shadow(0 0 22px ${glow}66)` : 'none'

  if (variant === 'matrix') {
    const pattern = [
      1, 0, 1, 1, 0, 1,
      1, 1, 1, 0, 1, 1,
      1, 0, 1, 1, 0, 1,
      0, 1, 0, 1, 1, 0,
    ]
    return (
      <div className="grid grid-cols-6 gap-1.5" style={{ filter, transition: 'filter 500ms ease' }}>
        {pattern.map((on, i) => (
          <span
            key={i}
            className="h-2.5 w-2.5 rounded-[2px] transition-colors duration-500"
            style={{ background: on ? (lit ? glow : '#5b6272') : 'transparent' }}
          />
        ))}
      </div>
    )
  }

  if (variant === 'halo') {
    return (
      <svg viewBox="0 0 100 100" className="h-20 w-20" style={{ filter, transition: 'filter 500ms ease' }}>
        <circle cx="50" cy="50" r="34" fill="none" stroke={stroke} strokeWidth="10" style={{ transition: 'stroke 500ms ease' }} />
      </svg>
    )
  }

  return (
    <svg viewBox="0 0 100 100" className="h-20 w-20" style={{ filter, transition: 'filter 500ms ease' }}>
      <circle
        cx="50"
        cy="50"
        r="32"
        fill="none"
        stroke={stroke}
        strokeWidth="9"
        strokeDasharray="164 40"
        strokeLinecap="round"
        style={{ transition: 'stroke 500ms ease' }}
      />
    </svg>
  )
}

export default function FlagshipModels() {
  const [isNight, setIsNight] = useState(true)

  return (
    <section id="modeles" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Catalogue</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Nos Modèles <span className="text-gradient">Phares</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Découvrez nos enseignes lumineuses les plus demandées. Passez en mode nuit pour voir
            l&rsquo;effet en action.
          </p>

          <button
            type="button"
            onClick={() => setIsNight((v) => !v)}
            className={`mt-8 inline-flex items-center gap-2 rounded-full border px-5 py-2.5 text-sm font-semibold transition-colors duration-300 ${
              isNight
                ? 'border-white/10 bg-surface-2 text-white'
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
        </div>

        <div
          className={`mt-14 rounded-3xl border p-6 transition-colors duration-500 sm:p-10 ${
            isNight ? 'border-white/10 bg-surface' : 'border-slate-200/10 bg-surface-2'
          }`}
        >
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {MODELS.map((model) => (
              <div key={model.code} className="rounded-2xl border border-white/10 bg-ink/40 p-5">
                <span className="inline-flex rounded-md bg-amber px-2 py-0.5 text-xs font-bold text-ink">
                  {model.code}
                </span>

                <div
                  className="mt-4 flex h-32 items-center justify-center rounded-xl transition-colors duration-500"
                  style={{ background: isNight ? '#05060a' : '#1c1f27' }}
                >
                  <ModelGraphic variant={model.variant} lit={isNight} glow={model.glow} />
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-white">{model.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{model.desc}</p>

                <ul className="mt-3 space-y-1.5">
                  {model.features.map((f) => (
                    <li key={f} className="flex items-start gap-1.5 text-xs text-slate-400">
                      <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-amber" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col items-center gap-5 border-t border-white/10 pt-8 text-center">
            <p className="text-sm text-slate-400">
              Tous nos modèles sont personnalisables en taille, couleur et finition
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="rounded-full bg-gradient-to-r from-neon to-neon-2 px-6 py-3 text-sm font-semibold text-ink transition-transform hover:scale-105"
              >
                Je veux une enseigne
              </a>
              <a
                href="#realisations"
                className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/5"
              >
                Voir tous les modèles
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
