import { TRANSFORMATIONS } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function Gallery() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Smile Transformations"
            title="Results That Speak For Themselves"
            subtitle="Real patient before-and-after results from Invisalign®, whitening, and cosmetic treatments."
          />
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {TRANSFORMATIONS.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.1}>
              <div className="card-hover bg-white rounded-3xl overflow-hidden border border-cream-dark/60">
                <div className="relative aspect-[2/1] overflow-hidden bg-cream-dark">
                  <img
                    src={item.image}
                    alt={`${item.title} before and after results`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 flex justify-between px-4 py-2 bg-gradient-to-t from-charcoal/60 to-transparent">
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">Before</span>
                    <span className="text-white text-xs font-semibold uppercase tracking-wider">After</span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{item.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="text-center text-charcoal-light text-sm mt-10 max-w-xl mx-auto">
            Individual results may vary. Schedule a consultation to discuss what's possible for your unique smile.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
