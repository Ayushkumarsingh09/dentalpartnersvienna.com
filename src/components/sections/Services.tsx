import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Our Services"
            title="Outcomes That Matter To You"
            subtitle="We focus on what you actually want — a healthy, confident smile — not just procedures."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SERVICES.map((service, i) => (
            <Reveal key={service.title} delay={i * 0.08}>
              <div className={`group card-hover relative rounded-3xl overflow-hidden ${i === 0 ? 'md:col-span-2 lg:col-span-1 lg:row-span-1' : ''}`}>
                <div className="aspect-[4/3] image-zoom">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/95 via-sage-dark/40 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <p className="text-warm-light text-xs font-semibold tracking-[0.15em] uppercase mb-2">{service.outcome}</p>
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl text-white font-semibold mb-2">{service.title}</h3>
                      <p className="text-white/75 text-sm leading-relaxed max-w-xs">{service.description}</p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center shrink-0 group-hover:bg-warm transition-colors">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
