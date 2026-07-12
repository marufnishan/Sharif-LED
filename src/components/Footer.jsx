import logo from '../assets/logo-dark.png'

const FOOTER_LINKS = [
  {
    title: 'Services',
    links: ['Enseignes lumineuses', 'Lettres 3D', 'Néons LED', 'Vitrophanie', 'Impression grand format'],
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
            <a href="#accueil" className="inline-flex items-center">
              <img
                src={logo}
                alt="Vector Sign"
                className="h-12 w-auto"
                width={500}
                height={229}
                loading="lazy"
              />
            </a>
            <p className="mt-4 max-w-xs text-sm text-slate-400">
              Votre partenaire en communication visuelle : enseignes lumineuses, signalétique et
              impression grand format, partout en France.
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

        <div className="mt-14 flex flex-col items-center justify-center gap-3 border-t border-white/10 pt-8 text-center sm:flex-row sm:justify-between sm:text-left">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Vector Sign. Tous droits réservés.
          </p>
          <p className="text-xs text-slate-500">27 Rue Saglio, 67100 Strasbourg</p>
          <p className="text-xs text-slate-500">
            Design &amp; développé par{' '}
            <span className="font-medium text-slate-400">Junaina IT Solutions</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
