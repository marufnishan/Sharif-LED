const FOOTER_LINKS = [
  {
    title: 'Services',
    links: ['Enseignes LED', 'Lettres découpées', 'Néon flex', 'Totems', 'Signalétique'],
  },
  {
    title: 'Entreprise',
    links: ['À propos', 'Réalisations', 'Avis clients', 'Contact'],
  },
  {
    title: 'Légal',
    links: ['Mentions légales', 'Politique de confidentialité', 'CGV'],
  },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr]">
          <div>
            <a href="#accueil" className="flex items-center gap-2 font-display text-xl font-semibold text-white">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-neon to-neon-2 text-ink">
                N
              </span>
              Néon<span className="text-gradient">Craft</span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Fabricant d&rsquo;enseignes lumineuses et de signalétique sur mesure, basé à Strasbourg.
            </p>
          </div>

          {FOOTER_LINKS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-sm text-slate-400 hover:text-neon-2">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} NéonCraft. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500">12 Rue des Lumières, 67000 Strasbourg</p>
        </div>
      </div>
    </footer>
  )
}
