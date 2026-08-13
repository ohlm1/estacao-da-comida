import { cn } from '@/lib/utils'

type SectionHeadingProps = {
  eyebrow: string
  title: string
  description?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
  className?: string
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'center',
  tone = 'light',
  className,
}: SectionHeadingProps) {
  const isDark = tone === 'dark'
  return (
    <div
      className={cn(
        'flex flex-col',
        align === 'center' ? 'mx-auto max-w-2xl items-center text-center' : 'items-start text-left',
        className,
      )}
    >
      <span
        className={cn(
          'inline-flex items-center rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em]',
          isDark ? 'bg-accent/20 text-accent' : 'bg-primary/10 text-primary',
        )}
      >
        {eyebrow}
      </span>
      <h2
        className={cn(
          'mt-5 text-balance font-serif text-3xl font-semibold leading-tight sm:text-4xl lg:text-[2.75rem]',
          isDark ? 'text-cream' : 'text-brown',
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            'mt-4 text-pretty leading-relaxed',
            align === 'center' ? 'max-w-xl' : 'max-w-2xl',
            isDark ? 'text-cream/80' : 'text-muted-foreground',
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  )
}
