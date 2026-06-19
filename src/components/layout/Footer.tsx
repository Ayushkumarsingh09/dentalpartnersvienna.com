import { MapPin, Phone, Clock, ExternalLink } from 'lucide-react'
import { SITE, NAV_LINKS, IMAGES } from '../../data/content'

export function Footer() {
  return (
    <footer className="bg-sage-dark text-white pt-16 pb-28 lg:pb-12">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-14">
          <div className="lg:col-span-1">
            <img
              src={IMAGES.logoWhite}
              alt={SITE.name}
              className="h-10 w-auto mb-5"
            />
            <p className="text-white/70 leading-relaxed text-sm">
              Your trusted dental home in Vienna, Georgia. Exceptional care with a personal touch for the whole family.
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-5">Quick Links</h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/70 hover:text-warm-light transition-colors text-sm">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-5">Contact</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href={SITE.phoneHref} className="flex items-center gap-3 text-white/70 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 text-warm-light shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/70">
                <MapPin className="w-4 h-4 text-warm-light shrink-0 mt-0.5" />
                {SITE.address}
              </li>
              <li className="flex items-center gap-3 text-white/70">
                <Clock className="w-4 h-4 text-warm-light shrink-0" />
                {SITE.hours}
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-semibold mb-5">Patient Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={SITE.scheduleUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  Schedule Online <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href={SITE.payOnlineUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-white/70 hover:text-white transition-colors">
                  Pay Online <ExternalLink className="w-3 h-3" />
                </a>
              </li>
              <li>
                <a href="#new-patients" className="text-white/70 hover:text-white transition-colors">
                  New Patient Information
                </a>
              </li>
              <li>
                <a href="#insurance" className="text-white/70 hover:text-white transition-colors">
                  Insurance & Financing
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
          <p>&copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.</p>
          <p>Proudly serving Vienna, GA and surrounding communities.</p>
        </div>
      </div>
    </footer>
  )
}
