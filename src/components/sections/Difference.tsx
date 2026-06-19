import { DIFFERENCE_POINTS, IMAGES } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function Difference() {
  return (
    <section className="py-20 md:py-28 bg-sage relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <img src={IMAGES.community} alt="" className="w-full h-full object-cover" aria-hidden="true" loading="lazy" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <Reveal>
          <div className="max-w-3xl mb-14 md:mb-16">
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-warm-light">The Dental Partners Difference</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] font-semibold text-white mb-5">
              More Than Dentistry —{' '}
              <span className="italic text-warm-light">A Relationship</span>
            </h2>
            <p className="text-lg text-white/80 leading-relaxed">
              We believe the best dental care happens when you feel heard, respected, and genuinely cared for. That's the experience we create — every visit, every patient, every time.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6">
          {DIFFERENCE_POINTS.map((point, i) => (
            <Reveal key={point.title} delay={i * 0.1}>
              <div className="group bg-white/10 backdrop-blur-sm border border-white/15 rounded-3xl p-8 hover:bg-white/15 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-warm/30 flex items-center justify-center mb-5">
                  <span className="text-warm-light font-display text-xl font-bold">{i + 1}</span>
                </div>
                <h3 className="font-display text-2xl font-semibold text-white mb-3">{point.title}</h3>
                <p className="text-white/75 leading-relaxed">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
