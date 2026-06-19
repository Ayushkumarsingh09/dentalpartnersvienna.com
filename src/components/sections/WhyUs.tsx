import { Heart, Armchair, Cpu, Home, UserCheck, MapPin } from 'lucide-react'
import { TRUST_CARDS } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

const iconMap = {
  heart: Heart,
  armchair: Armchair,
  cpu: Cpu,
  home: Home,
  'user-check': UserCheck,
  'map-pin': MapPin,
} as const

export function WhyUs() {
  return (
    <section id="why-us" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Why Patients Choose Us"
            title="Care You Can Feel From The First Hello"
            subtitle="We don't just treat teeth — we build relationships rooted in trust, comfort, and genuine compassion."
          />
        </Reveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {TRUST_CARDS.map((card, i) => {
            const Icon = iconMap[card.icon]
            return (
              <Reveal key={card.title} delay={i * 0.08}>
                <div className="group card-hover bg-white rounded-3xl p-7 md:p-8 h-full border border-cream-dark/60">
                  <div className="w-12 h-12 rounded-2xl bg-sage/10 flex items-center justify-center mb-5 group-hover:bg-sage group-hover:scale-110 transition-all duration-300">
                    <Icon className="w-6 h-6 text-sage group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-charcoal mb-3">{card.title}</h3>
                  <p className="text-charcoal-light leading-relaxed">{card.description}</p>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
