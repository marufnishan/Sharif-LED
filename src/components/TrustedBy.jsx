const CLIENTS = [
  {
    name: 'Rail Est',
    color: '#2563eb',
    icon: (
      <path d="M6 4h12a2 2 0 012 2v9a4 4 0 01-4 4H8a4 4 0 01-4-4V6a2 2 0 012-2zM4 19l-2 3m18-3l2 3M8 11h8M9 15h.01M15 15h.01" />
    ),
  },
  {
    name: 'Auto Rhénane',
    color: '#ea580c',
    icon: (
      <path d="M3 13l1.5-4.5A2 2 0 016.4 7h11.2a2 2 0 011.9 1.5L21 13m-18 0v5a1 1 0 001 1h1a1 1 0 001-1v-1h12v1a1 1 0 001 1h1a1 1 0 001-1v-5m-18 0h18M6.5 16a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm11 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
    ),
  },
  {
    name: 'Cigonia',
    color: '#0f172a',
    icon: (
      <path d="M12 3c2 2 2 4 1 6l4 8-3-1-2-4-3 5H7l3-6-3-2c-1-1-1-3 0-4 1.5-1.5 3.5-1 5 0z" />
    ),
  },
  {
    name: 'Métro Habitat',
    color: '#0d9488',
    icon: <path d="M4 21V10l8-6 8 6v11h-5v-6H9v6H4z" />,
  },
  {
    name: 'CGV Distribution',
    color: '#dc2626',
    icon: <path d="M3 7h13l3 4v6h-2m-14 0H2v-6l1-4zm4 10a2 2 0 100-4 2 2 0 000 4zm10 0a2 2 0 100-4 2 2 0 000 4zM3 7v6h13V7" />,
  },
  {
    name: 'Aréal Strasbourg',
    color: '#1d4ed8',
    icon: <path d="M2 17c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M2 12c1.5 1 3 1 4.5 0s3-1 4.5 0 3 1 4.5 0 3-1 4.5 0M8 4l4 5-3 2 5 6" />,
  },
  {
    name: 'Calitech',
    color: '#16a34a',
    icon: (
      <path d="M12 8a4 4 0 100 8 4 4 0 000-8zm0-5v2m0 14v2m9-9h-2M5 12H3m14.5-6.5l-1.4 1.4M6.9 17.1l-1.4 1.4m0-11l1.4 1.4m9.2 9.2l1.4 1.4" />
    ),
  },
  {
    name: 'Istimob',
    color: '#7c3aed',
    icon: <path d="M4 18v-4a3 3 0 013-3h10a3 3 0 013 3v4M4 18h16M4 18v2m16-2v2M6 11V8a2 2 0 012-2h8a2 2 0 012 2v3" />,
  },
  {
    name: 'Le Comptoir 5',
    color: '#111827',
    icon: <path d="M12 2l2.5 5 5.5.8-4 3.9.9 5.5L12 14.7 7.1 17.2 8 11.7 4 7.8l5.5-.8z" />,
  },
  {
    name: 'Garage Marco',
    color: '#475569',
    icon: (
      <path d="M14.7 6.3a4 4 0 01-5.4 5.4L4 17v3h3l5.3-5.3a4 4 0 015.4-5.4l-2.2 2.2-2-2z" />
    ),
  },
  {
    name: 'Black & White',
    color: '#1f2937',
    icon: <path d="M4 8h16l-1.5 8.5a2 2 0 01-2 1.5H7.5a2 2 0 01-2-1.5L4 8zm3-3a5 5 0 0110 0" />,
  },
]

function LogoCard({ client }) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-xl bg-white px-4 py-3 grayscale transition-all duration-300 hover:grayscale-0 hover:shadow-lg">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke={client.color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-5 w-5 shrink-0"
      >
        {client.icon}
      </svg>
      <span
        className="whitespace-nowrap font-display text-sm font-bold uppercase tracking-wide"
        style={{ color: client.color }}
      >
        {client.name}
      </span>
    </div>
  )
}

export default function TrustedBy() {
  return (
    <section className="border-y border-white/10 bg-surface/40 py-14">
      <p className="text-center font-display text-lg font-semibold text-white sm:text-xl">
        Ils nous font <span className="text-gradient">confiance</span>
      </p>

      <div className="marquee-pause-on-hover relative mt-9 w-full overflow-hidden">
        <div className="flex w-max animate-marquee gap-4">
          {[...CLIENTS, ...CLIENTS].map((client, i) => (
            <LogoCard key={`${client.name}-${i}`} client={client} />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent" />
      </div>
    </section>
  )
}
