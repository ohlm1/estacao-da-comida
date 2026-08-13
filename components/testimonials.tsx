import { Star, Quote } from 'lucide-react'
import { testimonialsSection } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function Testimonials() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={testimonialsSection.eyebrow}
          title={testimonialsSection.title}
          description={testimonialsSection.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonialsSection.items.map((item, i) => (
            <figure
              key={i}
              className="flex h-full flex-col rounded-2xl border border-border bg-card p-8 shadow-sm"
            >
              <Quote className="size-8 text-primary/30" aria-hidden="true" />
              <div className="mt-4 flex items-center gap-1" aria-label={`Avaliação: ${item.rating} de 5`}>
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    className={
                      s < item.rating ? 'size-4 fill-accent text-accent' : 'size-4 text-border'
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-foreground/90">
                {item.quote}
              </blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-brown">{item.name}</p>
                <p className="text-sm text-muted-foreground">{item.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>

        {testimonialsSection.isPlaceholder ? (
          <p className="mt-8 text-center text-xs text-muted-foreground">
            {'* Conteúdo demonstrativo. Substitua pelos depoimentos reais de clientes.'}
          </p>
        ) : null}
      </div>
    </section>
  )
}
