const HIGHLIGHTS = [
  'Double face, visible des deux côtés de la rue',
  'Installation perpendiculaire à votre façade',
  'Idéale pour salons de coiffure, restaurants & boutiques',
  'Design épuré et ultra-lumineux, de jour comme de nuit',
]

export default function FeaturedProduct() {
  return (
    <section id="drapeau" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 rounded-3xl border border-white/10 bg-surface p-8 lg:grid-cols-2 lg:items-center lg:p-14">
          <div className="relative order-2 lg:order-1">
            <div className="neon-ring overflow-hidden rounded-3xl border border-white/10">
              <img
                src="https://picsum.photos/seed/neoncraft-drapeau/800/900"
                alt="Enseigne drapeau lumineuse ronde et double face"
                loading="lazy"
                className="h-full w-full object-cover"
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
