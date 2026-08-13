import Image from 'next/image'
import { Navigation, Phone } from 'lucide-react'
import { finalCta } from '@/lib/data'

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden py-24 lg:py-32">
      <Image
        src={finalCta.image.src || '/placeholder.svg'}
        alt={finalCta.image.alt}
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-brown/85" />

      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2 className="text-balance font-serif text-3xl font-semibold leading-tight text-cream sm:text-4xl lg:text-5xl">
          {finalCta.title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty text-lg leading-relaxed text-cream/85">
          {finalCta.description}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={finalCta.primaryCta.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg transition-all hover:bg-primary/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-brown sm:w-auto"
          >
            <Navigation className="size-4" aria-hidden="true" />
            {finalCta.primaryCta.label}
          </a>
          <a
            href={finalCta.secondaryCta.href}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-cream/40 bg-cream/10 px-8 py-4 text-sm font-semibold text-cream backdrop-blur-sm transition-colors hover:bg-cream/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2 focus-visible:ring-offset-brown sm:w-auto"
          >
            <Phone className="size-4" aria-hidden="true" />
            {finalCta.secondaryCta.label}
          </a>
        </div>
      </div>
    </section>
  )
}
