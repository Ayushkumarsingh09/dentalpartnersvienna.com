import { motion } from 'framer-motion'
import { Users, Sparkles, Shield, HeartPulse, ArrowRight, Star } from 'lucide-react'
import { HERO_SERVICES, SITE, IMAGES } from '../../data/content'
import { Button } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

const iconMap = {
  users: Users,
  sparkles: Sparkles,
  shield: Shield,
  'heart-pulse': HeartPulse,
} as const

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.hero}
          alt="Happy patient at Dental Partners Vienna"
          className="w-full h-full object-cover object-top"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-sage-dark/90 via-sage-dark/75 to-sage-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-sage-dark/60 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-8 pt-32 pb-24 w-full">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          >
            <Star className="w-4 h-4 text-warm-light fill-warm-light" />
            <span className="text-white/90 text-sm font-medium">{SITE.experience} Years of Combined Experience</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.05] mb-6"
          >
            Where Families Smile{' '}
            <span className="text-warm-light italic">With Confidence</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="text-lg md:text-xl text-white/85 leading-relaxed mb-10 max-w-xl"
          >
            Personalized, comfortable dentistry for every generation. Your trusted dental home in the heart of Vienna, Georgia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65 }}
            className="flex flex-wrap gap-4 mb-16"
          >
            <Button href={SITE.scheduleUrl} variant="secondary" size="lg" external>
              Schedule Appointment
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button href="#team" variant="outline" size="lg" className="border-white/40 text-white hover:bg-white hover:text-sage">
              Meet The Team
            </Button>
          </motion.div>
        </div>

        <Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {HERO_SERVICES.map((service, i) => {
              const Icon = iconMap[service.icon]
              return (
                <motion.a
                  key={service.label}
                  href="#services"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + i * 0.1 }}
                  className="group glass rounded-2xl p-4 md:p-5 border border-white/20 hover:border-warm/40 transition-all duration-300 hover:-translate-y-1"
                >
                  <Icon className="w-6 h-6 text-warm-light mb-3 group-hover:scale-110 transition-transform" />
                  <p className="text-white font-semibold text-sm md:text-base">{service.label}</p>
                </motion.a>
              )
            })}
          </div>
        </Reveal>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-16 bg-cream section-curve-bottom translate-y-1" />
    </section>
  )
}
