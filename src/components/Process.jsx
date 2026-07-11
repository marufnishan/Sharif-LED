const STEPS = [
  {
    n: '01',
    title: 'Étude & Conseil',
    desc: 'Nous analysons votre projet, prenons les mesures et vous conseillons la solution la plus adaptée à votre activité.',
  },
  {
    n: '02',
    title: 'Conception Graphique',
    desc: 'Nous réalisons une maquette sur mesure pour valider chaque détail avant la fabrication.',
  },
  {
    n: '03',
    title: 'Fabrication',
    desc: 'Toutes nos réalisations sont fabriquées avec des matériaux professionnels pour garantir qualité et durabilité.',
  },
  {
    n: '04',
    title: 'Installation',
    desc: 'Nos équipes assurent une installation soignée afin de garantir un résultat impeccable.',
  },
  {
    n: '05',
    title: 'Suivi & Service',
    desc: 'Nous restons à vos côtés après la pose pour vous accompagner si nécessaire.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Notre engagement</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Qualité. Créativité. Fiabilité.
          </h2>
          <p className="mt-4 text-slate-400">
            De l&rsquo;étude de votre projet jusqu&rsquo;à l&rsquo;installation, nous vous
            accompagnons avec un savoir-faire reconnu, des matériaux de qualité et une finition
            irréprochable.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
            {[
              'Fabrication 100% française',
              'Garantie pièces & main d’œuvre 2 ans',
              'Devis gratuit sous 48h',
              'Livraison partout en France',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-2/15 text-neon-2">
                  <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                    <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                  </svg>
                </span>
                <span className="text-sm text-slate-300">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16">
          <p className="text-center text-xs font-semibold uppercase tracking-wider text-neon-2">
            Les étapes
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/10 bg-surface p-6">
                <span className="font-display text-2xl font-semibold text-white/15">{step.n}</span>
                <h3 className="mt-3 font-display text-base font-semibold text-white">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
