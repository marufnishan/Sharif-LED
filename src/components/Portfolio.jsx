import styleLetters from '../assets/style.jpeg'

const UNSPLASH = (id) => `https://images.unsplash.com/photo-${id}?fm=jpg&q=70&w=700&h=560&auto=format&fit=crop`

const PROJECTS = [
  {
    image: UNSPLASH('1757005550364-56b30eb64ee7'),
    name: 'Boulangerie Les Blés d’Or',
    tag: 'Enseigne lumineuse',
  },
  {
    image: styleLetters,
    name: 'Boutique Alsace Mode',
    tag: 'Lettres découpées',
  },
  {
    image: UNSPLASH('1748526239890-d73003c24d16'),
    name: 'Restaurant La Winstub',
    tag: 'Néon flex',
  },
  {
    image: UNSPLASH('1505545121909-2d48e22dede6'),
    name: 'Garage Rhin Automobiles',
    tag: 'Totem publicitaire',
  },
  {
    image: UNSPLASH('1543500810-0594d9731536'),
    name: 'Salon Coiffure Éclat',
    tag: 'Caisson lumineux',
  },
  {
    image: UNSPLASH('1638366170204-d5b084f93872'),
    name: 'Pharmacie du Marché',
    tag: 'Croix pharmacie LED',
  },
]

export default function Portfolio() {
  return (
    <section id="realisations" className="bg-surface/40 py-14 lg:py-20">
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
              key={project.name}
              className="group relative overflow-hidden rounded-2xl border border-white/10"
            >
              <img
                src={project.image}
                alt={`Réalisation Vector Sign : ${project.name}`}
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
