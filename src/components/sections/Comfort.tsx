import { Check } from 'lucide-react'
import { COMFORT_FEATURES, IMAGES } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function Comfort() {
  return (
    <section id="comfort" className="py-20 md:py-28 bg-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] image-zoom shadow-2xl shadow-sage/10">
              <img
                src={IMAGES.comfort}
                alt="Modern, comfortable dental treatment room at Dental Partners Vienna"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/30 to-transparent" />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="text-sm font-semibold tracking-[0.2em] uppercase mb-4 text-sage">Comfort-First Dentistry</p>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-charcoal leading-[1.1] mb-5">
              Relax. You're In{' '}
              <span className="text-sage italic">Caring Hands</span>
            </h2>
            <p className="text-charcoal-light text-lg leading-relaxed mb-8">
              We understand dental anxiety is real. That's why every aspect of our practice — from our gentle approach to our warm, welcoming team — is designed to help you feel calm and confident.
            </p>

            <ul className="space-y-4 mb-8">
              {COMFORT_FEATURES.map((feature) => (
                <li key={feature} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-sage/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-sage" />
                  </div>
                  <span className="text-charcoal-light">{feature}</span>
                </li>
              ))}
            </ul>

            <p className="font-display text-xl text-sage italic">
              "You shouldn't have to dread the dentist. We're here to change that."
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
