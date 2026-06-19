import type { ReactNode } from 'react'

interface SectionHeaderProps {
  eyebrow?: string
  title: string
  subtitle?: string
  light?: boolean
  align?: 'left' | 'center'
}

export function SectionHeader({ eyebrow, title, subtitle, light = false, align = 'center' }: SectionHeaderProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

  return (
    <div className={`max-w-3xl mb-14 md:mb-16 ${alignClass}`}>
      {eyebrow && (
        <p className={`text-sm font-semibold tracking-[0.2em] uppercase mb-4 ${light ? 'text-warm-light' : 'text-sage'}`}>
          {eyebrow}
        </p>
      )}
      <h2 className={`font-display text-4xl md:text-5xl lg:text-[3.25rem] leading-[1.1] font-semibold ${light ? 'text-white' : 'text-charcoal'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-5 text-lg md:text-xl leading-relaxed ${light ? 'text-white/80' : 'text-charcoal-light'}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}

interface ButtonProps {
  href: string
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'outline' | 'white'
  size?: 'md' | 'lg'
  className?: string
  external?: boolean
}

export function Button({
  href,
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  external = false,
}: ButtonProps) {
  const base = 'inline-flex items-center justify-center gap-2 font-semibold rounded-full transition-all duration-300'
  const sizes = {
    md: 'px-7 py-3.5 text-sm',
    lg: 'px-9 py-4 text-base',
  }
  const variants = {
    primary: 'bg-sage text-white hover:bg-sage-dark shadow-lg shadow-sage/20 hover:shadow-xl hover:shadow-sage/30 hover:-translate-y-0.5',
    secondary: 'bg-warm text-white hover:bg-warm-light shadow-lg shadow-warm/20 hover:-translate-y-0.5',
    outline: 'border-2 border-sage text-sage hover:bg-sage hover:text-white',
    white: 'bg-white text-sage hover:bg-cream shadow-lg hover:-translate-y-0.5',
  }

  return (
    <a
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      {children}
    </a>
  )
}
