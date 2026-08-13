'use client'

import { useEffect, useState } from 'react'
import { Menu, X, MapPin, UtensilsCrossed, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { navLinks, restaurant } from '@/lib/data'

export function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled
          ? 'border-b border-border/70 bg-background/90 backdrop-blur-md shadow-sm'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-20 lg:px-8">
        <a
          href="#inicio"
          className={cn(
            'flex items-center gap-2 font-serif text-lg font-semibold tracking-tight transition-colors lg:text-xl',
            scrolled ? 'text-brown' : 'text-cream',
          )}
        >
          <span
            className={cn(
              'flex size-9 items-center justify-center rounded-full transition-colors',
              scrolled ? 'bg-primary text-primary-foreground' : 'bg-cream/15 text-cream ring-1 ring-cream/40',
            )}
          >
            <UtensilsCrossed className="size-4" aria-hidden="true" />
          </span>
          {restaurant.name}
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary',
                scrolled ? 'text-brown/80' : 'text-cream/90',
              )}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={restaurant.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary/90 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background lg:inline-flex"
          >
            <MapPin className="size-4" aria-hidden="true" />
            Como chegar
          </a>

          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className={cn(
              'inline-flex size-10 items-center justify-center rounded-full transition-colors lg:hidden',
              scrolled ? 'text-brown hover:bg-muted' : 'text-cream hover:bg-cream/15',
            )}
          >
            <Menu className="size-6" aria-hidden="true" />
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          'fixed inset-0 z-50 lg:hidden',
          open ? 'pointer-events-auto' : 'pointer-events-none',
        )}
        aria-hidden={!open}
      >
        <div
          onClick={() => setOpen(false)}
          className={cn(
            'absolute inset-0 z-10 bg-black/60 backdrop-blur-sm transition-opacity duration-300',
            open ? 'opacity-100' : 'opacity-0',
          )}
        />
        {/* Drawer Panel */}
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navegação"
          className={cn(
            'absolute right-0 top-0 z-20 flex h-full h-[100dvh] w-80 max-w-[85%] flex-col overflow-hidden border-l border-stone-200 bg-white text-stone-900 shadow-2xl transition-transform duration-300 ease-out',
            open ? 'translate-x-0' : 'translate-x-full',
          )}
          style={{ backgroundColor: '#ffffff', color: '#1c1917' }}
        >
          {/* Header do Drawer */}
          <div className="flex shrink-0 items-center justify-between border-b border-stone-200 px-6 py-4" style={{ borderColor: '#e7e5e4' }}>
            <span className="flex items-center gap-2 font-serif text-lg font-bold text-stone-900" style={{ color: '#1c1917' }}>
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-sm">
                <UtensilsCrossed className="size-4" aria-hidden="true" />
              </span>
              {restaurant.name}
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex size-10 items-center justify-center rounded-full text-stone-600 transition-colors hover:bg-stone-100 hover:text-stone-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <X className="size-5" aria-hidden="true" />
            </button>
          </div>

          {/* Links de navegação */}
          <nav aria-label="Navegação mobile" className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="group flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-bold text-stone-900 transition-colors hover:bg-stone-100 hover:text-primary active:bg-stone-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ color: '#1c1917', opacity: 1, visibility: 'visible', display: 'flex' }}
              >
                <span className="text-stone-900 transition-colors group-hover:text-primary" style={{ color: '#1c1917' }}>
                  {link.label}
                </span>
                <ChevronRight
                  className="size-4 text-stone-400 transition-transform group-hover:translate-x-0.5 group-hover:text-primary"
                  aria-hidden="true"
                />
              </a>
            ))}
          </nav>

          {/* Botão Como Chegar no Rodapé do Drawer */}
          <div className="shrink-0 border-t border-stone-200 px-6 py-4" style={{ borderColor: '#e7e5e4' }}>
            <a
              href={restaurant.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-5 py-3.5 text-sm font-bold text-primary-foreground shadow-md transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              style={{ opacity: 1, visibility: 'visible', display: 'inline-flex' }}
            >
              <MapPin className="size-4" aria-hidden="true" />
              Como chegar
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
