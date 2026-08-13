import { restaurantConfig } from '@/config/restaurant.config'

export function WhatsAppButton() {
  const { features, restaurant } = restaurantConfig
  const whatsapp = restaurant.whatsapp

  if (!features.showWhatsappButton || !whatsapp?.number) {
    return null
  }

  const encodedMessage = encodeURIComponent(
    whatsapp.message || `Olá! Gostaria de mais informações sobre o ${restaurant.name}.`
  )
  const whatsappUrl = `https://wa.me/${whatsapp.number}?text=${encodedMessage}`

  return (
    <aside aria-label="Contato via WhatsApp">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com ${restaurant.name} pelo WhatsApp`}
        className="fixed bottom-6 right-6 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl transition-all duration-300 hover:scale-110 hover:bg-[#20bd5a] hover:shadow-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2"
      >
        <svg
          viewBox="0 0 24 24"
          className="size-7 fill-current"
          aria-hidden="true"
        >
          <path d="M12.031 2C6.495 2 2 6.495 2 12.031c0 1.908.534 3.69 1.458 5.216L2 22l4.908-1.423A9.99 9.99 0 0 0 12.031 22C17.567 22 22 17.505 22 12.031 22 6.495 17.567 2 12.031 2Zm-.003 18.25a8.21 8.21 0 0 1-4.226-1.168l-.303-.18-3.14.91.914-3.056-.197-.315a8.204 8.204 0 0 1-1.258-4.41C3.818 7.5 7.5 3.818 12.028 3.818c4.529 0 8.21 3.682 8.21 8.213 0 4.53-3.681 8.219-8.21 8.219Zm4.512-6.155c-.247-.124-1.464-.723-1.691-.806-.227-.083-.393-.124-.558.124-.165.247-.64 0.806-.785.971-.144.165-.289.186-.536.062-.247-.124-1.043-.385-1.987-1.227-.735-.656-1.232-1.466-1.376-1.713-.145-.247-.015-.381.108-.504.112-.111.248-.289.372-.434.124-.144.165-.247.247-.412.083-.165.042-.31-.02-.434-.063-.124-.558-1.345-.765-1.841-.202-.483-.407-.418-.558-.426l-.475-.008c-.165 0-.434.062-.661.31-.227.248-.868.85-.868 2.073 0 1.223.889 2.404 1.013 2.57.124.165 1.75 2.672 4.24 3.746.592.256 1.055.409 1.416.523.595.189 1.137.162 1.565.098.478-.072 1.464-.6 1.671-1.178.207-.579.207-1.074.145-1.178-.062-.103-.227-.165-.474-.289Z" />
        </svg>
      </a>
    </aside>
  )
}
