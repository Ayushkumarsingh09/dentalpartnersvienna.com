import { Phone, Calendar } from 'lucide-react'
import { SITE } from '../../data/content'

export function StickyMobile() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden glass border-t border-cream-dark shadow-[0_-4px_24px_rgba(0,0,0,0.08)]">
      <div className="grid grid-cols-2 divide-x divide-cream-dark">
        <a
          href={SITE.phoneHref}
          className="flex items-center justify-center gap-2 py-4 text-sage font-semibold text-sm active:bg-cream-dark transition-colors"
        >
          <Phone className="w-5 h-5" />
          Call Now
        </a>
        <a
          href={SITE.scheduleUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-4 bg-sage text-white font-semibold text-sm active:bg-sage-dark transition-colors"
        >
          <Calendar className="w-5 h-5" />
          Book Appointment
        </a>
      </div>
    </div>
  )
}
