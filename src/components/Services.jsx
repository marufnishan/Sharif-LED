const SERVICES = [
  {
    title: 'Enseignes Lumineuses',
    desc: 'Valorisez votre façade avec des enseignes LED, caissons lumineux et lettres boîtiers conçus pour attirer l’attention.',
    icon: <path d="M12 3v3m0 12v3m9-9h-3M6 12H3m14.5-6.5l-2 2m-9 9l-2 2m0-13l2 2m9 9l2 2" />,
  },
  {
    title: 'Impression Grand Format',
    desc: 'Bâches, panneaux, affiches, adhésifs et supports publicitaires imprimés avec une qualité professionnelle.',
    icon: (
      <>
        <rect x="6" y="3" width="12" height="8" rx="1" />
        <path d="M6 15h12M6 19h8" />
      </>
    ),
  },
  {
    title: 'Vitrophanie',
    desc: 'Habillez vos vitrines avec des films décoratifs, adhésifs personnalisés et solutions de communication élégantes.',
    icon: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="1" />
        <path d="M3 10h18M9 4v16" />
      </>
    ),
  },
  {
    title: 'Marquage de Véhicules',
    desc: 'Transformez vos véhicules en véritables supports publicitaires grâce à un marquage durable et impactant.',
    icon: (
      <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13m-18 0v5a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-5m-18 0h18M6.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
  {
    title: 'Lettres Découpées & 3D',
    desc: 'Des lettres en relief et découpées sur mesure pour une signalétique moderne et haut de gamme.',
    icon: <path d="M4 6h5v12H4zM11 6h4a3 3 0 010 6h-4m0 0h4a3 3 0 010 6h-4z" />,
  },
  {
    title: 'Néons LED Personnalisés',
    desc: 'Des créations lumineuses uniques pour commerces, bureaux, événements et décoration intérieure.',
    icon: <path d="M4 12c2-6 6-6 8 0s6 6 8 0" />,
  },
  {
    title: 'Impression DTF',
    desc: 'Impression textile haute définition pour vêtements professionnels, entreprises et événements.',
    icon: <path d="M8 4l4 2 4-2 3 3-2 3v10H7V10L5 7z" />,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Nos expertises</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Des solutions sur mesure pour donner de la visibilité à votre entreprise
          </h2>
          <p className="mt-4 text-slate-400">
            Chez Vector Sign, nous concevons, fabriquons et installons des solutions de
            communication visuelle qui renforcent votre image de marque. Chaque projet est réalisé
            avec précision, créativité et exigence de qualité.
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
