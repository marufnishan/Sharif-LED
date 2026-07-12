const ITEMS = [
  {
    label: 'Automatisation d’Entreprise',
    color: '#7b2cbf',
    icon: (
      <path d="M12 15a3 3 0 100-6 3 3 0 000 6zm8-3h-1.2m-13.6 0H4m13.3-5.3l-.9.9M7.6 16.4l-.9.9m0-10.6l.9.9m9.8 9.8l.9.9M12 4v1.2M12 18.8V20" />
    ),
  },
  {
    label: 'Création de Logo',
    color: '#e5252e',
    icon: <path d="M12 3l2.6 5.3 5.9.8-4.3 4.1 1 5.8L12 16.3l-5.2 2.7 1-5.8L3.5 9.1l5.9-.8z" />,
  },
  {
    label: 'Design Graphique',
    color: '#1e88e5',
    icon: <path d="M4 16l4-4 3 3 5-6 4 5M4 20h16" />,
  },
  {
    label: 'Développement Web',
    color: '#f7941d',
    icon: <path d="M9 8l-4 4 4 4m6-8l4 4-4 4M13 5l-2 14" />,
  },
]

function ItemCard({ item }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={item.color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0"
      >
        {item.icon}
      </svg>
      <span
        className="whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide"
        style={{ color: item.color }}
      >
        {item.label}
      </span>
    </div>
  )
}

export default function OtherServices() {
  return (
    <section className="border-y border-white/10 bg-surface/40 py-14">
      <p className="text-center font-display text-lg font-semibold text-white sm:text-xl">
        Également <span className="text-gradient">disponible</span>
      </p>

      <div className="marquee-pause-on-hover relative mt-9 w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...ITEMS, ...ITEMS, ...ITEMS].map((item, i) => (
            <ItemCard key={`${item.label}-${i}`} item={item} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  )
}
