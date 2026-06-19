import { useState, useEffect, useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { REVIEWS } from '../../data/content'
import { SectionHeader } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function PatientStories() {
  const [active, setActive] = useState(0)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  const next = () => setActive((prev) => (prev + 1) % REVIEWS.length)
  const prev = () => setActive((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)

  useEffect(() => {
    intervalRef.current = setInterval(next, 6000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [])

  const review = REVIEWS[active]

  return (
    <section className="py-20 md:py-28 bg-sage-dark relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }} />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative">
        <Reveal>
          <SectionHeader
            eyebrow="Patient Stories"
            title="Hear From Our Dental Family"
            subtitle="Don't take our word for it — hear from the families who trust us with their smiles."
            light
          />
        </Reveal>

        <Reveal delay={0.15}>
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-white/8 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
              <Quote className="w-10 h-10 text-warm-light/40 mb-6" />

              <div className="min-h-[140px] md:min-h-[120px]">
                <p className="font-display text-2xl md:text-3xl text-white leading-snug italic mb-8">
                  "{review.story}"
                </p>
              </div>

              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="flex gap-1 mb-2">
                    {Array.from({ length: review.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-warm-light fill-warm-light" />
                    ))}
                  </div>
                  <p className="text-white font-semibold">{review.name}</p>
                  <p className="text-white/60 text-sm">{review.location}</p>
                </div>
                <span className="px-4 py-2 bg-warm/20 text-warm-light text-sm font-medium rounded-full">
                  {review.highlight}
                </span>
              </div>

              <div className="flex items-center gap-3 mt-8 pt-6 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => { prev(); if (intervalRef.current) clearInterval(intervalRef.current) }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <div className="flex gap-2 flex-1 justify-center">
                  {REVIEWS.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === active ? 'w-8 bg-warm-light' : 'w-2 bg-white/30 hover:bg-white/50'
                      }`}
                      aria-label={`Go to review ${i + 1}`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => { next(); if (intervalRef.current) clearInterval(intervalRef.current) }}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  aria-label="Next review"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="review-carousel flex gap-4 mt-8 overflow-x-auto pb-2 snap-x snap-mandatory md:hidden">
          {REVIEWS.map((r, i) => (
            <button
              key={r.name}
              type="button"
              onClick={() => setActive(i)}
              className={`snap-center shrink-0 w-[280px] text-left p-5 rounded-2xl border transition-all ${
                i === active ? 'bg-white/15 border-warm/40' : 'bg-white/5 border-white/10'
              }`}
            >
              <p className="text-white/80 text-sm line-clamp-3 italic mb-3">"{r.story}"</p>
              <p className="text-white font-medium text-sm">{r.name}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
