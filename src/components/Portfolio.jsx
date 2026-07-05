const PROJECTS = [
  { seed: 'neoncraft-1', name: 'Boulangerie Les Blés d’Or', tag: 'Enseigne lumineuse' },
  { seed: 'neoncraft-2', name: 'Boutique Alsace Mode', tag: 'Lettres découpées' },
  { seed: 'neoncraft-3', name: 'Restaurant La Winstub', tag: 'Néon flex' },
  { seed: 'neoncraft-4', name: 'Garage Rhin Automobiles', tag: 'Totem publicitaire' },
  { seed: 'neoncraft-5', name: 'Salon Coiffure Éclat', tag: 'Caisson lumineux' },
  { seed: 'neoncraft-6', name: 'Pharmacie du Marché', tag: 'Croix pharmacie LED' },
]

export default function Portfolio() {
  return (
    <section id="realisations" className="bg-surface/40 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Réalisations</p>
            <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
              Quelques enseignes fabriquées par notre atelier
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-neon-2"
          >
            Discuter de mon projet
            <span aria-hidden>→</span>
          </a>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.seed}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={`https://picsum.photos/seed/${project.seed}/700/560`}
                alt={`Réalisation NéonCraft : ${project.name}`}
                loading="lazy"
                className="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-5">
                <p className="text-xs font-medium uppercase tracking-wider text-neon-2">{project.tag}</p>
                <p className="mt-1 font-display text-base font-semibold text-white">{project.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
