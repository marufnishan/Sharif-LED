const TESTIMONIALS = [
  {
    name: 'Camille Weber',
    role: 'Gérante, Boulangerie Les Blés d’Or',
    quote:
      'Une équipe réactive et à l’écoute. Notre nouvelle enseigne LED a changé la visibilité de la boutique dès la première semaine.',
    seed: 'client-1',
  },
  {
    name: 'Julien Meyer',
    role: 'Directeur, Garage Rhin Automobiles',
    quote:
      'Le totem publicitaire installé sur la route est parfaitement visible de nuit. Travail soigné et délais respectés.',
    seed: 'client-2',
  },
  {
    name: 'Sophie Klein',
    role: 'Fondatrice, Boutique Alsace Mode',
    quote:
      'Du devis à la pose, tout a été simple. Le rendu du néon flex en vitrine est exactement ce qu’on voulait.',
    seed: 'client-3',
  },
]

export default function Testimonials() {
  return (
    <section id="avis" className="bg-surface/40 py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Avis clients</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Ils font confiance à Vector Sign
          </h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <figure key={t.name} className="rounded-2xl border border-white/10 bg-surface p-7">
              <div className="flex gap-1 text-amber">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg key={i} viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path d="M10 1.5l2.6 5.4 5.9.8-4.3 4.2 1 5.9L10 15l-5.2 2.8 1-5.9L1.5 7.7l5.9-.8z" />
                  </svg>
                ))}
              </div>
              <blockquote className="mt-4 text-sm leading-relaxed text-slate-300">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${t.seed}/80/80`}
                  alt=""
                  width={80}
                  height={80}
                  loading="lazy"
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="font-display text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-slate-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
