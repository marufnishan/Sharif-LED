import illuminatedSigns from '../assets/expertise/Illuminated_Signs.jpeg'
import largeFormatPrinting from '../assets/expertise/Large_Format_Printing.jpeg'
import vehicleBranding from '../assets/expertise/Vehicle_Branding.jpeg'
import letters3d from '../assets/expertise/3D_Letters.jpeg'
import customNeonLights from '../assets/expertise/Custom_LED_Neon_Lights.jpeg'
import dtfPrinting from '../assets/expertise/DTF_printing.jpeg'

const SERVICES = [
  {
    title: 'Enseignes Lumineuses',
    desc: 'Valorisez votre façade avec des enseignes LED, caissons lumineux et lettres boîtiers conçus pour attirer l’attention.',
    image: illuminatedSigns,
  },
  {
    title: 'Impression Grand Format',
    desc: 'Bâches, panneaux, affiches, adhésifs et supports publicitaires imprimés avec une qualité professionnelle.',
    image: largeFormatPrinting,
  },
  {
    title: 'Vitrophanie & Marquage Véhicules',
    desc: 'Films décoratifs pour vos vitrines et marquage adhésif durable pour vos véhicules, pour une communication cohérente sur tous vos supports.',
    image: vehicleBranding,
  },
  {
    title: 'Lettres Découpées & 3D',
    desc: 'Des lettres en relief et découpées sur mesure pour une signalétique moderne et haut de gamme.',
    image: letters3d,
  },
  {
    title: 'Néons LED Personnalisés',
    desc: 'Des créations lumineuses uniques pour commerces, bureaux, événements et décoration intérieure.',
    image: customNeonLights,
  },
  {
    title: 'Impression DTF',
    desc: 'Impression textile haute définition pour vêtements professionnels, entreprises et événements.',
    image: dtfPrinting,
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-14 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-neon-2">Nos expertises</p>
          <h2 className="mt-3 font-display text-3xl font-semibold text-white sm:text-4xl">
            Des solutions sur mesure pour donner de la visibilité à votre entreprise
          </h2>
          <p className="mt-4 text-slate-400">
            Chez Vector Sign, nous concevons, fabriquons et installons des solutions de
            communication visuelle qui renforcent votre image de marque. Chaque projet est réalisé
            avec précision, créativité et exigence de qualité.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group rounded-2xl border border-white/10 bg-surface transition-colors hover:border-neon/40"
            >
              <div className="h-52 overflow-hidden rounded-t-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <h3 className="font-display text-lg font-semibold text-white">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
