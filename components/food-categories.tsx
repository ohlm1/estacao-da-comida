import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { foodSection } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'

export function FoodCategories() {
  return (
    <section className="bg-muted/40 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={foodSection.eyebrow}
          title={foodSection.title}
          description={foodSection.description}
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {foodSection.categories.map((category) => (
            <article
              key={category.title}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.image.src || '/placeholder.svg'}
                  alt={category.image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brown/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-semibold text-brown">{category.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {category.description}
                </p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <a
            href={foodSection.ctaHref}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-primary/30 bg-card px-7 py-3.5 text-sm font-semibold text-primary shadow-sm transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            {foodSection.ctaLabel}
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  )
}
