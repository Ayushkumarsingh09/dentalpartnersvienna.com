import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { DOCTORS } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function Team() {
  const [active, setActive] = useState(0)
  const doctor = DOCTORS[active]

  return (
    <section id="team" className="py-20 md:py-28 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-cream/50 hidden lg:block" style={{ clipPath: 'polygon(15% 0, 100% 0, 100% 100%, 0% 100%)' }} />

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <Reveal>
          <SectionHeader
            eyebrow="Meet The Doctors"
            title="The Faces Behind Your Smile"
            subtitle="Experienced, compassionate professionals who treat every patient like family."
            align="left"
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <Reveal className="relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[3/4] max-w-lg mx-auto lg:mx-0 image-zoom shadow-2xl shadow-sage/10">
              <AnimatePresence mode="wait">
                <motion.img
                  key={doctor.name}
                  src={doctor.image}
                  alt={doctor.name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="w-full h-full object-cover object-top"
                />
              </AnimatePresence>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-sage-dark/80 to-transparent p-8">
                <p className="text-warm-light text-sm font-semibold tracking-wider uppercase mb-1">{doctor.title}</p>
                <p className="font-display text-3xl text-white font-semibold">{doctor.name}</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -right-4 md:right-8 bg-warm text-white rounded-2xl p-5 shadow-xl max-w-[200px] hidden md:block animate-float">
              <p className="font-display text-3xl font-bold">30+</p>
              <p className="text-sm text-white/90">Years Combined Experience</p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <blockquote className="font-display text-2xl md:text-3xl text-sage italic leading-snug mb-8 border-l-4 border-warm pl-6">
              "{doctor.philosophy}"
            </blockquote>

            <p className="text-charcoal-light leading-relaxed mb-4">{doctor.bio}</p>
            <p className="text-charcoal-light leading-relaxed mb-8">{doctor.personal}</p>

            <div className="flex flex-wrap gap-2 mb-8">
              {doctor.expertise.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-sage/8 text-sage text-sm font-medium rounded-full border border-sage/15"
                >
                  {skill}
                </span>
              ))}
            </div>

            {DOCTORS.length > 1 && (
              <div className="flex gap-3">
                {DOCTORS.map((d, i) => (
                  <button
                    key={d.name}
                    type="button"
                    onClick={() => setActive(i)}
                    className={`w-16 h-16 rounded-full overflow-hidden border-2 transition-all ${
                      i === active ? 'border-sage scale-110' : 'border-transparent opacity-60 hover:opacity-100'
                    }`}
                  >
                    <img src={d.image} alt={d.name} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
