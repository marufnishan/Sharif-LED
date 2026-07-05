const SERVICES = [
  {
    title: 'Enseignes lumineuses LED',
    desc: 'Caissons lumineux, lettres boîtiers et enseignes drapeau fabriqués sur mesure pour votre façade.',
    icon: (
      <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2 2m-9 9l-2 2m0-13l2 2m9 9l2 2" />
    ),
  },
  {
    title: 'Lettres découpées & boîtiers',
    desc: 'Lettrages en PVC, aluminium ou plexi rétro-éclairé, découpés au format et à vos couleurs.',
    icon: <path d="M4 6h16M4 12h10M4 18h16" />,
  },
  {
    title: 'Néon flex sur mesure',
    desc: 'Effets néon flexible basse consommation pour vitrines, logos et ambiances intérieures.',
    icon: <path d="M4 12c2-6 6-6 8 0s6 6 8 0" />,
  },
  {
    title: 'Totems & drapeaux publicitaires',
    desc: 'Totems lumineux, mâts et enseignes drapeau pour une visibilité optimale depuis la route.',
    icon: <path d="M6 21V4a1 1 0 011-1h9l-2 4 2 4H8" />,
  },
  {
    title: 'Signalétique intérieure',
    desc: 'Plaques, pictogrammes, signalétique directionnelle et habillage pour bureaux et commerces.',
    icon: <path d="M4 4h16v16H4z M9 9h6v6H9z" />,
  },
  {
    title: 'Maintenance & dépannage',
    desc: 'Contrats d’entretien, remplacement de LED et intervention rapide sur toute la région.',
    icon: <path d="M12 8v4l3 3 M12 3a9 9 0 100 18 9 9 0 000-18z" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Nos savoir-faire</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Une offre complète pour votre communication lumineuse
          </h2>
          <p className="mt-4 text-slate-400">
            De l&rsquo;étude technique à la pose sur site, notre atelier gère chaque étape de fabrication
            de vos supports lumineux et signalétiques.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-surface p-7 transition-colors hover:border-neon/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon/20 to-neon-2/20 text-neon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  {service.icon}
                </svg>
              </div>
              <h3 className="mt-5 font-display text-lg font-semibold text-white">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
