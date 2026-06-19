import { MapPin, Heart } from 'lucide-react'
import { SITE, IMAGES } from '../../data/content'
import { Reveal } from '../ui/Reveal'

export function Community() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={IMAGES.community}
          alt="Vienna, Georgia community"
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-sage-dark/85" />
      </div>

      <div className="relative max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6">
              <MapPin className="w-4 h-4 text-warm-light" />
              <span className="text-white/90 text-sm font-medium">Proudly Serving Vienna, GA</span>
            </div>

            <h2 className="font-display text-4xl md:text-5xl lg:text-[3.25rem] font-semibold text-white leading-[1.1] mb-6">
              Rooted In Community,{' '}
              <span className="text-warm-light italic">Built On Trust</span>
            </h2>

            <p className="text-white/80 text-lg leading-relaxed mb-6">
              Vienna isn't just where we work — it's where we live, where our kids go to school, and where our neighbors become friends. For over {SITE.experience} years, we've been honored to care for the smiles of this community.
            </p>

            <p className="text-white/80 text-lg leading-relaxed mb-8">
              When you walk through our doors, you're not just a patient. You're a neighbor, a friend, and part of the Dental Partners family.
            </p>

            <div className="flex items-center gap-3 text-warm-light">
              <Heart className="w-5 h-5 fill-warm-light" />
              <span className="font-display text-xl italic">Your hometown dental home.</span>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-white mb-1">{SITE.experience}</p>
                <p className="text-white/70 text-sm">Years Serving Georgia</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center">
                <p className="font-display text-4xl font-bold text-white mb-1">4</p>
                <p className="text-white/70 text-sm">Generations of Care</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-2xl p-6 text-center col-span-2">
                <p className="font-display text-4xl font-bold text-white mb-1">1</p>
                <p className="text-white/70 text-sm">Trusted Dental Home for Your Whole Family</p>
              </div>
            </div>

            <div className="mt-6 rounded-2xl overflow-hidden border border-white/15 aspect-video">
              <iframe
                title="Dental Partners Vienna on Google Maps"
                src="https://maps.google.com/maps?q=1407+E+Union+St+Vienna+GA+31092&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
