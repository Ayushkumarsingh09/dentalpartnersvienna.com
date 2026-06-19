import { useState } from 'react'
import { OFFICE_IMAGES } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function OfficeShowcase() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-20 md:py-28 bg-cream">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Office Experience"
            title="A Space Designed For Your Comfort"
            subtitle="Step inside our Vienna office — warm, modern, and welcoming from the moment you arrive."
          />
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative rounded-3xl overflow-hidden aspect-[16/9] md:aspect-[21/9] mb-4 image-zoom shadow-2xl shadow-sage/10">
            <img
              src={OFFICE_IMAGES[active].src}
              alt={OFFICE_IMAGES[active].alt}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/40 via-transparent to-transparent" />
          </div>
        </Reveal>

        <div className="grid grid-cols-4 gap-3 md:gap-4">
          {OFFICE_IMAGES.map((img, i) => (
            <Reveal key={img.src} delay={i * 0.08}>
              <button
                type="button"
                onClick={() => setActive(i)}
                className={`relative rounded-2xl overflow-hidden aspect-[4/3] transition-all duration-300 ${
                  i === active ? 'ring-3 ring-sage scale-[1.02]' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
