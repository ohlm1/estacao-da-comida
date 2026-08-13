import { Utensils, Soup, HeartHandshake, type LucideIcon } from 'lucide-react'
import { experienceIntro } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

const iconMap: Record<string, LucideIcon> = {
  Utensils,
  Soup,
  HeartHandshake,
}

export function Experience() {
  return (
    <section id="restaurante" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={experienceIntro.eyebrow}
          title={experienceIntro.title}
          description={experienceIntro.description}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {experienceIntro.cards.map((card) => {
            const Icon = iconMap[card.icon]
            return (
              <article
                key={card.title}
                className="group rounded-2xl border border-border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg"
              >
                <span className="flex size-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  {Icon ? <Icon className="size-7" aria-hidden="true" /> : null}
                </span>
                <h3 className="mt-6 font-serif text-2xl font-semibold text-brown">{card.title}</h3>
                <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
                  {card.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
