const STEPS = [
  {
    n: '01',
    title: 'Étude & conseil',
    desc: 'Visite technique, prise de mesures et conseils sur les normes et démarches d’autorisation.',
  },
  {
    n: '02',
    title: 'Conception graphique',
    desc: 'Création de visuels et maquettes 3D pour valider le rendu avant fabrication.',
  },
  {
    n: '03',
    title: 'Fabrication atelier',
    desc: 'Découpe, assemblage et câblage LED réalisés dans notre atelier à Strasbourg.',
  },
  {
    n: '04',
    title: 'Pose & mise en service',
    desc: 'Installation par nos équipes qualifiées et raccordement électrique conforme.',
  },
]

export default function Process() {
  return (
    <section id="process" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Notre process</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              De l&rsquo;idée à l&rsquo;installation, un seul interlocuteur
            </h2>
            <p className="mt-4 text-slate-400">
              Basé à Strasbourg, notre atelier intervient dans toute l&rsquo;Alsace pour accompagner
              commerçants, artisans et entreprises dans leur projet de signalétique lumineuse, de
              l&rsquo;étude jusqu&rsquo;à la maintenance.
            </p>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                'Fabrication 100% française',
                'Garantie pièces & main d’œuvre 2 ans',
                'Devis gratuit sous 48h',
                'Intervention dans toute l’Alsace',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-neon-2/15 text-neon-2">
                    <svg viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
                      <path d="M16.7 5.3a1 1 0 010 1.4l-7.4 7.4a1 1 0 01-1.4 0L3.3 9.5a1 1 0 111.4-1.4l3.6 3.6 6.7-6.7a1 1 0 011.4 0z" />
                    </svg>
                  </span>
                  <span className="text-sm text-slate-300">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {STEPS.map((step) => (
              <div key={step.n} className="rounded-2xl border border-white/10 bg-surface p-6">
                <span className="font-display text-3xl font-semibold text-white/15">{step.n}</span>
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
