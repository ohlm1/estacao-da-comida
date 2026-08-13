import Image from 'next/image'
import { occasionsSection } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Occasions() {
  return (
    <section id="experiencia" className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={occasionsSection.eyebrow}
          title={occasionsSection.title}
          description={occasionsSection.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-12">
          {occasionsSection.items.map((item, i) => {
            // Layout assimétrico em telas grandes: alterna larguras.
            const span = [
              'lg:col-span-7',
              'lg:col-span-5',
              'lg:col-span-5',
              'lg:col-span-7',
            ][i % 4]
            return (
              <article
                key={item.title}
                className={cn(
                  'group relative overflow-hidden rounded-3xl bg-brown shadow-sm transition-all duration-300 hover:shadow-xl',
                  span,
                )}
              >
                <div className="relative h-full w-full min-h-[20rem] sm:min-h-[22rem] lg:min-h-[26rem]">
                  <Image
                    src={item.image.src || '/placeholder.svg'}
                    alt={item.image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brown/95 via-brown/40 to-transparent" />
                </div>
                <div className="absolute inset-x-0 bottom-0 z-10 p-7">
                  <h3 className="font-serif text-2xl font-semibold text-cream">{item.title}</h3>
                  <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-cream/85">
                    {item.description}
                  </p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
