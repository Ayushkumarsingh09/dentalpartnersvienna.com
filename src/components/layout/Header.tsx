import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import { NAV_LINKS, SITE, IMAGES } from '../../data/content'
import { Button } from '../ui/SectionHeader'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass shadow-sm py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 md:px-8 flex items-center justify-between">
          <a href="#" className="relative z-10 shrink-0">
            <img
              src={scrolled ? IMAGES.logo : IMAGES.logoWhite}
              alt={SITE.name}
              className="h-10 md:h-12 w-auto transition-all duration-300"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-sage ${
                  scrolled ? 'text-charcoal' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-4">
            <a
              href={SITE.phoneHref}
              className={`flex items-center gap-2 text-sm font-semibold transition-colors ${
                scrolled ? 'text-sage' : 'text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              {SITE.phone}
            </a>
            <Button href={SITE.scheduleUrl} variant={scrolled ? 'primary' : 'white'} size="md" external>
              Schedule Appointment
            </Button>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden relative z-10 p-2 rounded-lg transition-colors ${
              scrolled || mobileOpen ? 'text-charcoal' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            <div className="absolute inset-0 bg-charcoal/40 backdrop-blur-sm" onClick={() => setMobileOpen(false)} />
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 280 }}
              className="absolute right-0 top-0 bottom-0 w-[min(100%,320px)] bg-cream p-8 pt-24 flex flex-col gap-2"
            >
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-lg font-medium text-charcoal py-3 border-b border-cream-dark hover:text-sage transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="mt-auto space-y-3 pt-6">
                <a href={SITE.phoneHref} className="flex items-center gap-2 text-sage font-semibold text-lg">
                  <Phone className="w-5 h-5" />
                  {SITE.phone}
                </a>
                <Button href={SITE.scheduleUrl} variant="primary" size="lg" className="w-full" external>
                  Schedule Appointment
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
