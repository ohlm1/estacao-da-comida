import Image from 'next/image'
import { highlightsSection } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { cn } from '@/lib/utils'

export function Highlights() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={highlightsSection.eyebrow}
          title={highlightsSection.title}
          description={highlightsSection.description}
          align="left"
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {highlightsSection.items.map((item, i) => (
            <article
              key={item.title}
              className={cn(
                'group relative overflow-hidden rounded-3xl shadow-sm transition-all duration-300 hover:shadow-xl',
                // Destaque assimétrico: primeiro item ocupa mais espaço em telas grandes
                i === 0 ? 'lg:col-span-2 lg:row-span-2' : '',
              )}
            >
              <div className={cn('relative', i === 0 ? 'aspect-[4/3] lg:h-full lg:min-h-[26rem]' : 'aspect-[4/3]')}>
                <Image
                  src={item.image.src || '/placeholder.svg'}
                  alt={item.image.alt}
                  fill
                  sizes={i === 0 ? '(max-width: 1024px) 100vw, 50vw' : '(max-width: 768px) 100vw, 25vw'}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/90 via-brown/25 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6">
                <h3 className={cn('font-serif font-semibold text-cream', i === 0 ? 'text-3xl' : 'text-xl')}>
                  {item.title}
                </h3>
                <p className="mt-2 max-w-md text-pretty text-sm leading-relaxed text-cream/85">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
