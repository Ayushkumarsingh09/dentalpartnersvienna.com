import { CreditCard, Shield, FileText } from 'lucide-react'
import { INSURANCE_POINTS, SITE, IMAGES } from '../../data/content'
import { SectionHeader, Button } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

const iconMap = [Shield, CreditCard, FileText]

export function Insurance() {
  return (
    <section id="insurance" className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <Reveal>
            <SectionHeader
              eyebrow="Insurance & Payment"
              title="Quality Care Shouldn't Be Complicated"
              subtitle="We believe financial concerns shouldn't stand between you and the care you deserve. We make it simple."
              align="left"
            />

            <div className="space-y-5">
              {INSURANCE_POINTS.map((point, i) => {
                const Icon = iconMap[i]
                return (
                  <div key={point.title} className="flex gap-4 items-start">
                    <div className="w-11 h-11 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                      <Icon className="w-5 h-5 text-sage" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-charcoal mb-1">{point.title}</h3>
                      <p className="text-charcoal-light text-sm leading-relaxed">{point.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <Button href={SITE.payOnlineUrl} variant="outline" external>
                Pay Online
              </Button>
              <Button href={SITE.scheduleUrl} variant="primary" external>
                Check Your Options
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="relative">
              <div className="bg-white rounded-3xl p-8 md:p-10 border border-cream-dark/60 shadow-xl shadow-sage/5">
                <p className="text-sm font-semibold tracking-wider uppercase text-sage mb-3">Flexible Financing</p>
                <h3 className="font-display text-3xl font-semibold text-charcoal mb-4">
                  Smile Now, Pay Over Time
                </h3>
                <p className="text-charcoal-light leading-relaxed mb-6">
                  Sunbit offers patients a way to split their bill into manageable monthly payments — up to 72 months. CareCredit® financing is also available for qualified patients.
                </p>
                <div className="space-y-4">
                  <img
                    src={IMAGES.sunbit}
                    alt="Sunbit financing — pay over time for dental care"
                    className="w-full max-w-xs h-auto rounded-xl"
                    loading="lazy"
                  />
                  <div className="flex items-center gap-4 p-4 bg-cream rounded-2xl">
                    <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center shrink-0">
                      <CreditCard className="w-6 h-6 text-sage" />
                    </div>
                    <div>
                      <p className="font-semibold text-charcoal text-sm">Sunbit & CareCredit®</p>
                      <p className="text-charcoal-light text-xs">Flexible payment options — up to 72 months</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -z-10 -bottom-4 -right-4 w-full h-full bg-sage/5 rounded-3xl" />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
