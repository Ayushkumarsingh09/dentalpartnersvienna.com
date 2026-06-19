import { useState, type FormEvent } from 'react'
import { MapPin, Phone, Clock, Send } from 'lucide-react'
import { SITE } from '../../data/content'
import { SectionHeader, Button } from '../ui/SectionHeader'
import { Reveal } from '../ui/Reveal'

export function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', message: '' })

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const subject = encodeURIComponent('Appointment Request from Website')
    const body = encodeURIComponent(
      `Name: ${form.name}\nPhone: ${form.phone}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    )
    window.location.href = `mailto:info@dentalpartnersvienna.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 md:px-8">
        <Reveal>
          <SectionHeader
            eyebrow="Contact Us"
            title="We're Here When You Need Us"
            subtitle="Schedule an appointment, ask a question, or just say hello. We make it easy."
          />
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          <Reveal>
            <div className="space-y-5 mb-8">
              <a
                href={SITE.phoneHref}
                className="flex items-center gap-4 p-5 bg-cream rounded-2xl hover:bg-cream-dark transition-colors group"
              >
                <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center group-hover:bg-sage transition-colors">
                  <Phone className="w-5 h-5 text-sage group-hover:text-white transition-colors" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-light">Call Us Today</p>
                  <p className="font-semibold text-charcoal text-lg">{SITE.phone}</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-light">Office Location</p>
                  <p className="font-semibold text-charcoal">{SITE.address}</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 bg-cream rounded-2xl">
                <div className="w-12 h-12 rounded-xl bg-sage/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-sage" />
                </div>
                <div>
                  <p className="text-sm text-charcoal-light">Office Hours</p>
                  <p className="font-semibold text-charcoal">{SITE.hours}</p>
                </div>
              </div>
            </div>

            <Button href={SITE.scheduleUrl} variant="primary" size="lg" external className="mb-8">
              Schedule Online
            </Button>

            <div className="rounded-2xl overflow-hidden border border-cream-dark aspect-video">
              <iframe
                title="Dental Partners Vienna location"
                src="https://maps.google.com/maps?q=1407+E+Union+St+Vienna+GA+31092&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-cream rounded-3xl p-7 md:p-9">
              <h3 className="font-display text-2xl font-semibold text-charcoal mb-2">Request An Appointment</h3>
              <p className="text-charcoal-light text-sm mb-6">Fill out the form and we'll get back to you promptly.</p>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-charcoal mb-1.5">Full Name</label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-charcoal mb-1.5">Phone</label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                      placeholder="(229) 555-0123"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-1.5">Email</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all"
                      placeholder="you@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-charcoal mb-1.5">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-cream-dark bg-white text-charcoal focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-all resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-sage text-white font-semibold py-4 rounded-full hover:bg-sage-dark transition-all duration-300 shadow-lg shadow-sage/20 hover:-translate-y-0.5"
                >
                  <Send className="w-4 h-4" />
                  Send Request
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
