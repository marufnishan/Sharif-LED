export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden pt-36 pb-24 lg:pt-48 lg:pb-32">
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[36rem] w-[36rem] -translate-x-1/2 rounded-full bg-neon/20 blur-[120px]" />
        <div className="absolute right-[-10%] top-[30%] h-[28rem] w-[28rem] rounded-full bg-neon-2/20 blur-[120px]" />
      </div>

      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:items-center lg:px-8">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-surface px-4 py-1.5 text-xs font-medium uppercase tracking-wider text-neon-2">
            Fabricant &middot; Strasbourg &amp; Grand Est
          </span>

          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
            Donnez de l&rsquo;éclat à votre commerce avec des
            <span className="text-gradient"> enseignes lumineuses</span> sur mesure
          </h1>

          <p className="mt-6 max-w-xl text-lg text-slate-400">
            NéonCraft conçoit, fabrique et installe vos enseignes LED, néons flex, lettres découpées
            et signalétique à Strasbourg et dans toute l&rsquo;Alsace. Étude, fabrication et pose
            assurées par notre atelier.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#contact"
              className="neon-ring rounded-full bg-gradient-to-r from-neon to-neon-2 px-7 py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-105"
            >
              Demander un devis gratuit
            </a>
            <a
              href="#realisations"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-white/5"
            >
              Voir nos réalisations
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 border-t border-white/10 pt-8">
            {[
              ['15+', "ans d'expérience"],
              ['320+', 'enseignes livrées'],
              ['48h', 'devis garanti'],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="font-display text-2xl font-semibold text-white sm:text-3xl">{value}</dt>
                <dd className="mt-1 text-xs text-slate-500 sm:text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative">
          <div className="neon-ring overflow-hidden rounded-3xl border border-white/10 bg-surface">
            <img
              src="https://picsum.photos/seed/neoncraft-hero/900/1000"
              alt="Enseigne lumineuse sur mesure installée sur une devanture"
              className="h-full w-full object-cover"
              loading="eager"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 hidden rounded-2xl border border-white/10 bg-surface-2/95 px-6 py-4 shadow-2xl backdrop-blur sm:block">
            <p className="font-display text-sm font-semibold text-white">Fabrication atelier</p>
            <p className="text-xs text-slate-400">100% conçu &amp; assemblé à Strasbourg</p>
          </div>
        </div>
      </div>
    </section>
  )
}
