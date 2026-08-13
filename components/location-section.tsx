import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { restaurant } from '@/lib/data'
import { SectionHeading } from '@/components/section-heading'
import { LocationMap } from '@/components/location-map'

export function LocationSection() {
  return (
    <section id="localizacao" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Localização"
          title="Venha nos visitar"
          description="Estamos de portas abertas todos os dias para receber você com muito sabor."
          align="left"
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MapPin className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-brown">Endereço</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city}
                  <br />
                  {restaurant.address.zip}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Phone className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-brown">Telefone</h3>
                <a
                  href={restaurant.phoneHref}
                  className="mt-1 inline-block text-muted-foreground transition-colors hover:text-primary"
                >
                  {restaurant.phoneDisplay}
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Clock className="size-5" aria-hidden="true" />
              </span>
              <div>
                <h3 className="font-semibold text-brown">Horário</h3>
                <p className="mt-1 leading-relaxed text-muted-foreground">
                  {restaurant.hours.days}
                  <br />
                  {restaurant.hours.time}
                </p>
              </div>
            </div>

            <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href={restaurant.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Navigation className="size-4" aria-hidden="true" />
                Como chegar
              </a>
              <a
                href={restaurant.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-brown transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Phone className="size-4" aria-hidden="true" />
                Ligar
              </a>
              <a
                href={restaurant.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-brown transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <InstagramIcon className="size-4" />
                Instagram
              </a>
            </div>
          </div>

          <LocationMap />
        </div>
      </div>
    </section>
  )
}
