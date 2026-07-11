const REASONS = [
  {
    label: 'Qualité premium',
    icon: <path d="M12 2l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 15.3 6.8 18l1-5.8L3.5 8l5.9-.8z" />,
  },
  {
    label: 'Créativité sans limites',
    icon: <path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.6 10.8c.6.5 1.1 1.2 1.2 2.2h4.8c.1-1 .6-1.7 1.2-2.2A6 6 0 0012 3z" />,
  },
  {
    label: 'Respect des délais',
    icon: <path d="M12 21a9 9 0 100-18 9 9 0 000 18zM12 7v5l3.5 2" />,
  },
  {
    label: 'Service personnalisé',
    icon: <path d="M8 12a3 3 0 100-6 3 3 0 000 6zm8 0a3 3 0 100-6 3 3 0 000 6zM2 20c0-3 2.7-5 6-5s6 2 6 5m2-5c3 0 6 2 6 5" />,
  },
  {
    label: 'Satisfaction client',
    icon: <path d="M20.8 8.6c0 4.7-6.4 8.6-8.8 10.7-2.4-2.1-8.8-6-8.8-10.7a4.6 4.6 0 018.8-1.9 4.6 4.6 0 018.8 1.9z" />,
  },
]

export default function WhyUs() {
  return (
    <section id="pourquoi-nous" className="py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
        <h2 className="font-display text-3xl font-semibold text-white sm:text-4xl">
          Pourquoi <span className="text-gradient">Vector Sign</span> ?
        </h2>
        <p className="mt-4 font-display text-lg font-medium text-white sm:text-xl">
          Parce que votre image est notre priorité.
        </p>
        <p className="mt-4 text-slate-400">
          De la conception à l&rsquo;installation, nous créons des solutions durables, élégantes et
          adaptées à votre activité.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {REASONS.map((reason) => (
            <div
              key={reason.label}
              className="flex flex-col items-center gap-3 rounded-2xl border border-white/10 bg-surface p-6 transition-colors hover:border-neon/40"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-neon/20 to-neon-2/20 text-neon-2">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  {reason.icon}
                </svg>
              </span>
              <span className="text-sm font-semibold text-white">{reason.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
