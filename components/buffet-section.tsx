import Image from 'next/image'
import { Check, ArrowRight } from 'lucide-react'
import { buffetSection } from '@/lib/data'

export function BuffetSection() {
  return (
    <section id="buffet" className="bg-brown py-20 text-cream lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl sm:aspect-[4/3] lg:aspect-[4/5]">
            <Image
              src={buffetSection.image.src || '/placeholder.svg'}
              alt={buffetSection.image.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div>
          <span className="inline-flex items-center rounded-full bg-accent/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            {buffetSection.eyebrow}
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]">
            {buffetSection.title}
          </h2>
          <p className="mt-4 max-w-lg text-pretty leading-relaxed text-cream/80">
            {buffetSection.description}
          </p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {buffetSection.items.map((item) => (
              <li key={item} className="flex items-center gap-3 text-cream/90">
                <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                  <Check className="size-4" aria-hidden="true" />
                </span>
                <span className="font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <a
              href={buffetSection.ctaHref}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:bg-accent/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brown"
            >
              {buffetSection.ctaLabel}
              <ArrowRight className="size-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
