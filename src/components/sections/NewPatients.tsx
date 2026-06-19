import { NEW_PATIENT_STEPS, SITE } from '../../data/content'
import { SectionHeader, Button } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function NewPatients() {
  return (
    <section id="new-patients" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="New Patient Experience"
            title="Your Journey To A Healthier Smile"
            subtitle="Getting started is simple. Here's exactly what to expect from your first visit."
          />
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-cream-dark" />

          <div className="grid lg:grid-cols-5 gap-6 lg:gap-4">
            {NEW_PATIENT_STEPS.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.1}>
                <div className="relative text-center lg:text-left group">
                  <div className="w-12 h-12 rounded-full bg-sage text-white font-display text-xl font-bold flex items-center justify-center mx-auto lg:mx-0 mb-5 relative z-10 group-hover:bg-warm transition-colors duration-300 shadow-lg shadow-sage/20">
                    {step.step}
                  </div>
                  <h3 className="font-display text-xl font-semibold text-charcoal mb-2">{step.title}</h3>
                  <p className="text-charcoal-light text-sm leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.4}>
          <div className="mt-14 text-center">
            <Button href={SITE.scheduleUrl} variant="primary" size="lg" external>
              Start Your Journey Today
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
