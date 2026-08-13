import Image from 'next/image'
import { InstagramIcon } from '@/components/instagram-icon'
import { instagramSection } from '@/lib/data'

export function InstagramSection() {
  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            <InstagramIcon className="size-4" />
            {instagramSection.eyebrow}
          </span>
          <h2 className="mt-5 text-balance font-serif text-3xl font-semibold text-brown sm:text-4xl">
            {instagramSection.title}
          </h2>
          <a
            href={instagramSection.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 text-lg font-medium text-primary transition-colors hover:text-primary/80"
          >
            {instagramSection.handle}
          </a>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
          {instagramSection.images.map((img, i) => (
            <a
              key={i}
              href={instagramSection.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              aria-label={`Abrir o Instagram da Estação da Comida — ${img.alt}`}
            >
              <Image
                src={img.src || '/placeholder.svg'}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-brown/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <InstagramIcon className="size-8 text-cream" />
              </div>
            </a>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={instagramSection.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            <InstagramIcon className="size-4" />
            {instagramSection.ctaLabel}
          </a>
        </div>
      </div>
    </section>
  )
}
