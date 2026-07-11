import { useState } from 'react'
import g1 from '../assets/G1.jpeg'
import g2 from '../assets/G2.jpeg'
import g3 from '../assets/G3.jpeg'
import g4 from '../assets/G4.jpeg'
import g5 from '../assets/G5.jpeg'
import g6 from '../assets/G6.jpeg'
import g7 from '../assets/G7.jpeg'

const MODELS = [
  {
    code: 'G1',
    name: 'Blanc Satiné',
    desc: 'Face lumineuse blanche, finition satinée, pour un rendu épuré.',
    image: g1,
  },
  {
    code: 'G2',
    name: 'Cuivre Mat',
    desc: 'Finition cuivrée mate pour une enseigne chaleureuse et haut de gamme.',
    image: g2,
  },
  {
    code: 'G3',
    name: 'Jaune Vif',
    desc: 'Jaune éclatant avec tranche noire contrastée pour un impact maximal.',
    image: g3,
  },
  {
    code: 'G4',
    name: 'Halo Rouge',
    desc: 'Lettre noire mate avec rétro-éclairage halo rouge pour un effet signature.',
    image: g4,
  },
  {
    code: 'G5',
    name: 'Halo Blanc',
    desc: 'Laqué noir brillant avec halo blanc, élégant de jour comme de nuit.',
    image: g5,
  },
  {
    code: 'G6',
    name: 'Rouge & Halo Blanc',
    desc: 'Face rouge éclatante associée à un halo blanc pour une double lecture.',
    image: g6,
  },
  {
    code: 'G7',
    name: 'Jaune Chaleureux',
    desc: 'Éclairage jaune chaud et diffus pour une ambiance accueillante.',
    image: g7,
  },
]

export default function FlagshipModels() {
  const [isNight, setIsNight] = useState(true)

  return (
    <section id="modeles" className="py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Catalogue</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Nos Modèles <span className="text-gradient">Phares</span>
          </h2>
          <p className="mt-4 text-slate-400">
            Découvrez nos finitions de lettres les plus demandées. Passez en mode nuit pour voir
            l&rsquo;effet en action.
          </p>

          <button
            type="button"
            translate="no"
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
                <div className="h-36 overflow-hidden rounded-xl bg-[#1c1f27]">
                  <img
                    src={model.image}
                    alt={`Lettre lumineuse ${model.name}`}
                    className="h-full w-full object-contain transition-all duration-500"
                    style={{
                      filter: isNight ? 'none' : 'grayscale(0.9) brightness(0.55) contrast(0.9)',
                    }}
                  />
                </div>

                <h3 className="mt-4 font-display text-base font-semibold text-white">{model.name}</h3>
                <p className="mt-1 text-xs text-slate-400">{model.desc}</p>
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
