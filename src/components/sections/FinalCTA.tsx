import { ArrowRight } from 'lucide-react'
import { SITE, IMAGES } from '../../data/content'
import { Button } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function FinalCTA() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.officePractice}
          alt="Young patient giving thumbs up at Dental Partners Vienna"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/95 via-sage-dark/85 to-sage/80" />
      </div>

      <div className="relative max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <p className="text-warm-light text-sm font-semibold tracking-[0.2em] uppercase mb-5">
            Experience Dentistry Differently
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-[1.1] mb-6">
            Join The Dental Partners Family
          </h2>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
            Your best smile starts with a single conversation. Schedule your visit today and discover what it feels like to have a dental team that truly cares.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Button href={SITE.scheduleUrl} variant="secondary" size="lg" external>
              Schedule Appointment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href={SITE.phoneHref} variant="white" size="lg">
              Call {SITE.phone}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
