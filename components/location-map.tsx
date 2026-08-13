import { restaurant } from '@/lib/data'

/**
 * Mapa isolado para facilitar a substituição.
 *
 * Para usar um mapa real, defina `restaurant.mapEmbedUrl` em lib/data.ts com a
 * URL de "Incorporar um mapa" do Google Maps. Caso a URL não esteja definida,
 * é exibido um placeholder visual.
 */
export function LocationMap() {
  const hasEmbed = Boolean(restaurant.mapEmbedUrl)

  return (
    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-border bg-muted shadow-sm lg:aspect-auto lg:h-full lg:min-h-[24rem]">
      {hasEmbed ? (
        <iframe
          title={`Mapa da ${restaurant.name}`}
          src={restaurant.mapEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center p-8 text-center text-sm text-muted-foreground">
          {'Espaço reservado para o mapa. Configure a URL do mapa em lib/data.ts.'}
        </div>
      )}
    </div>
  )
}
