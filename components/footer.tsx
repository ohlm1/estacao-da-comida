import { UtensilsCrossed, MapPin, Phone, Clock } from 'lucide-react'
import { InstagramIcon } from '@/components/instagram-icon'
import { restaurant, navLinks } from '@/lib/data'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-brown text-cream">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <span className="flex items-center gap-2 font-serif text-xl font-semibold text-cream">
              <span className="flex size-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <UtensilsCrossed className="size-4" aria-hidden="true" />
              </span>
              {restaurant.name}
            </span>
            <p className="mt-4 max-w-xs text-pretty leading-relaxed text-cream/70">
              {restaurant.tagline}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Contato</h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {restaurant.address.street}
                  <br />
                  {restaurant.address.city} — {restaurant.address.zip}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="size-4 shrink-0 text-accent" aria-hidden="true" />
                <a href={restaurant.phoneHref} className="transition-colors hover:text-cream">
                  {restaurant.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden="true" />
                <span>
                  {restaurant.hours.days}
                  <br />
                  {restaurant.hours.time}
                </span>
              </li>
            </ul>
          </div>

          <nav aria-label="Links rápidos">
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">
              Links rápidos
            </h3>
            <ul className="mt-4 space-y-3 text-sm text-cream/80">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition-colors hover:text-cream">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.15em] text-accent">Instagram</h3>
            <p className="mt-4 text-sm text-cream/70">
              Acompanhe as novidades e os pratos do dia.
            </p>
            <a
              href={restaurant.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-cream/30 px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-cream/10"
            >
              <InstagramIcon className="size-4" />
              {restaurant.instagramHandle}
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-cream/15 pt-8 text-sm text-cream/60 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {restaurant.name}. Todos os direitos reservados.
          </p>
          <p className="italic">{restaurant.tagline}</p>
        </div>
      </div>
    </footer>
  )
}
