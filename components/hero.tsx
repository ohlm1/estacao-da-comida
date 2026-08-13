import Image from 'next/image'
import { MapPin, ArrowRight, UtensilsCrossed, Users, Salad } from 'lucide-react'
import { hero } from '@/lib/data'

const badgeIcons = [UtensilsCrossed, Users, Salad]

export function Hero() {
  return (
    <section id="inicio" className="relative isolate flex min-h-[92svh] items-end overflow-hidden lg:min-h-screen">
      <Image
        src={hero.image.src || '/placeholder.svg'}
        alt={hero.image.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />
      {/* Overlay para legibilidade */}
      <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/55 to-brown/25" />
      <div className="absolute inset-0 bg-gradient-to-r from-brown/70 via-transparent to-transparent" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-24">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex items-center rounded-full border border-accent/50 bg-accent/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {hero.eyebrow}
          </p>
          <h1 className="text-balance font-serif text-4xl font-semibold leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
            {hero.title}
          </h1>
          <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-cream/85 sm:text-lg">
            {hero.subtitle}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={hero.primaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
            <a
              href={hero.secondaryCta.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-7 py-3.5 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
            >
              <MapPin className="size-4" aria-hidden="true" />
              {hero.secondaryCta.label}
            </a>
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
            {hero.badges.map((badge, i) => {
              const Icon = badgeIcons[i % badgeIcons.length]
              return (
                <li key={badge} className="flex items-center gap-2 text-sm font-medium text-cream/90">
                  <span className="flex size-8 items-center justify-center rounded-full bg-cream/15 ring-1 ring-cream/30">
                    <Icon className="size-4 text-accent" aria-hidden="true" />
                  </span>
                  {badge}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
