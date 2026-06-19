import { GENERATIONS } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function Generations() {
  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Dentistry For Every Generation"
            title="One Dental Home For Your Entire Family"
            subtitle="From first tooth to golden years — we're here for every milestone in your family's smile journey."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {GENERATIONS.map((gen, i) => (
            <Reveal key={gen.label} delay={i * 0.1}>
              <div className="group card-hover relative rounded-3xl overflow-hidden aspect-[3/4] cursor-default">
                <img
                  src={gen.image}
                  alt={`Dental care for ${gen.label}`}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/90 via-sage-dark/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-warm-light text-xs font-semibold tracking-wider uppercase mb-1">{gen.age}</p>
                  <h3 className="font-display text-3xl text-white font-semibold mb-2">{gen.label}</h3>
                  <p className="text-white/80 text-sm leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300 translate-y-2 group-hover:translate-y-0">
                    {gen.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
