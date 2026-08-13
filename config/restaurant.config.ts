/**
 * CONFIGURAÇÃO CENTRAL DO RESTAURANTE (Template Comercial)
 *
 * Para personalizar este site para um novo restaurante, altere as informações deste arquivo.
 * Todos os dados de identidade, contato, horários, SEO, textos e ativação de seções
 * são lidos a partir desta fonte única de verdade.
 */

export type NavLink = {
  label: string
  href: string
}

export type ExperienceCard = {
  icon: 'Utensils' | 'Soup' | 'HeartHandshake'
  title: string
  description: string
}

export type FoodCategory = {
  title: string
  description: string
  image: { src: string; alt: string }
}

export type Highlight = {
  title: string
  description: string
  image: { src: string; alt: string }
}

export type Occasion = {
  title: string
  description: string
  image: { src: string; alt: string }
}

export type Testimonial = {
  name: string
  role: string
  quote: string
  rating: number
}

export type RestaurantConfig = {
  // 1. Identidade & Contatos
  restaurant: {
    name: string
    tagline: string
    address: {
      street: string
      city: string
      zip: string
    }
    phoneDisplay: string
    phoneHref: string
    whatsapp?: {
      number: string // Formato: 5511999999999 (sem traços ou espaços)
      display?: string
      message?: string
    }
    hours: {
      days: string
      time: string
    }
    instagramHandle: string
    instagramUrl: string
    directionsUrl: string
    mapEmbedUrl: string
  }

  // 2. SEO & Metadados
  seo: {
    siteUrl: string
    title: string
    description: string
    keywords: string[]
    themeColor: string
    ogImage: string
    cuisine?: string
    priceRange?: string
  }

  // 3. Feature Flags (Ativação/Desativação de Seções)
  features: {
    showBuffet: boolean
    showExperience: boolean
    showOccasions: boolean
    showTestimonials: boolean
    showInstagram: boolean
    showWhatsappButton: boolean
  }

  // 4. Navegação
  navLinks: NavLink[]

  // 5. Conteúdos das Seções
  hero: {
    eyebrow: string
    title: string
    subtitle: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    badges: string[]
    image: { src: string; alt: string }
  }

  experienceIntro: {
    eyebrow: string
    title: string
    description: string
    cards: ExperienceCard[]
  }

  foodSection: {
    eyebrow: string
    title: string
    description: string
    ctaLabel: string
    ctaHref: string
    categories: FoodCategory[]
  }

  buffetSection: {
    eyebrow: string
    title: string
    description: string
    items: string[]
    ctaLabel: string
    ctaHref: string
    image: { src: string; alt: string }
  }

  highlightsSection: {
    eyebrow: string
    title: string
    description: string
    items: Highlight[]
  }

  occasionsSection: {
    eyebrow: string
    title: string
    description: string
    items: Occasion[]
  }

  testimonialsSection: {
    eyebrow: string
    title: string
    description: string
    isPlaceholder: boolean
    items: Testimonial[]
  }

  instagramSection: {
    eyebrow: string
    title: string
    handle: string
    url: string
    ctaLabel: string
    images: { src: string; alt: string }[]
  }

  finalCta: {
    title: string
    description: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
    image: { src: string; alt: string }
  }
}

export const restaurantConfig: RestaurantConfig = {
  restaurant: {
    name: 'Estação da Comida',
    tagline: 'Feito para reunir pessoas em volta da boa comida.',
    address: {
      street: 'Av. Aricanduva, 4950',
      city: 'São Paulo - SP',
      zip: 'CEP 03490-000',
    },
    phoneDisplay: '(11) 2727-0077',
    phoneHref: 'tel:+551127270077',
    whatsapp: {
      number: '', // Preencha com o número (ex: '5511999999999') para ativar o WhatsApp
      display: '(11) 99999-9999',
      message: 'Olá! Gostaria de mais informações sobre o restaurante.',
    },
    hours: {
      days: 'Todos os dias',
      time: '11h às 23h',
    },
    instagramHandle: '@estacao_da_comida',
    instagramUrl: 'https://www.instagram.com/estacao_da_comida/',
    directionsUrl:
      'https://www.google.com/maps/dir/?api=1&destination=Av.+Aricanduva,+4950,+São+Paulo+-+SP',
    mapEmbedUrl:
      'https://www.google.com/maps?q=Av.+Aricanduva,+4950,+São+Paulo+-+SP&output=embed',
  },

  seo: {
    siteUrl: 'https://estacaodacomida.com.br',
    title: 'Estação da Comida | Restaurante em São Paulo',
    description:
      'Estação da Comida — restaurante em São Paulo com buffet, variedade de pratos e uma experiência acolhedora.',
    keywords: [
      'Estação da Comida',
      'restaurante em São Paulo',
      'restaurante',
      'comida brasileira',
      'buffet',
      'almoço',
      'jantar',
    ],
    themeColor: '#f6f0e4',
    ogImage: '/images/hero/hero.png',
    cuisine: 'Comida brasileira, Buffet',
    priceRange: '$$',
  },

  features: {
    showBuffet: true,
    showExperience: true,
    showOccasions: true,
    showTestimonials: true,
    showInstagram: true,
    showWhatsappButton: false, // Ative como true quando houver número no whatsapp.number
  },

  navLinks: [
    { label: 'Início', href: '#inicio' },
    { label: 'O Restaurante', href: '#restaurante' },
    { label: 'Buffet', href: '#buffet' },
    { label: 'Experiência', href: '#experiencia' },
    { label: 'Localização', href: '#localizacao' },
  ],

  hero: {
    eyebrow: 'Sabor que reúne',
    title: 'Uma estação de sabores para você aproveitar',
    subtitle:
      'Comida brasileira, variedade e aquele ambiente gostoso para reunir quem você ama.',
    primaryCta: { label: 'Quero conhecer', href: '#restaurante' },
    secondaryCta: {
      label: 'Como chegar',
      href: 'https://www.google.com/maps/dir/?api=1&destination=Av.+Aricanduva,+4950,+São+Paulo+-+SP',
    },
    badges: ['Comida brasileira', 'Ambiente familiar', 'Buffet variado'],
    image: {
      src: '/images/hero/hero.png',
      alt: 'Mesa farta com pratos de comida brasileira servidos na Estação da Comida',
    },
  },

  experienceIntro: {
    eyebrow: 'Uma experiência completa',
    title: 'Mais que uma refeição. Uma experiência.',
    description:
      'Na Estação da Comida a gente acredita que uma boa refeição vai além do prato. Reunimos variedade, sabor e um ambiente acolhedor para tornar cada almoço, jantar ou encontro um momento especial.',
    cards: [
      {
        icon: 'Soup',
        title: 'Variedade',
        description:
          'Opções para todos os gostos, do clássico brasileiro aos favoritos de sempre, para você montar a refeição do seu jeito.',
      },
      {
        icon: 'Utensils',
        title: 'Sabor',
        description:
          'Pratos preparados com capricho e aquele tempero de comida caseira que faz você querer repetir.',
      },
      {
        icon: 'HeartHandshake',
        title: 'Ambiente acolhedor',
        description:
          'Um espaço pensado para receber bem, com conforto e aquele clima gostoso para ficar à vontade.',
      },
    ],
  },

  foodSection: {
    eyebrow: 'O que servimos',
    title: 'Tem sabor para todo mundo',
    description:
      'Da comida brasileira de sempre às opções para quem quer variar, aqui cada visita rende uma nova descoberta.',
    ctaLabel: 'Ver opções',
    ctaHref: '#buffet',
    categories: [
      {
        title: 'Buffet',
        description: 'Monte seu prato com muita variedade e à vontade.',
        image: { src: '/images/food/buffet.png', alt: 'Buffet variado com pratos quentes' },
      },
      {
        title: 'Carnes',
        description: 'Cortes suculentos preparados na medida certa.',
        image: { src: '/images/food/carnes.png', alt: 'Seleção de carnes grelhadas' },
      },
      {
        title: 'Saladas',
        description: 'Opções fresquinhas e coloridas para todos os gostos.',
        image: { src: '/images/food/saladas.png', alt: 'Saladas frescas e coloridas' },
      },
      {
        title: 'Pizza',
        description: 'Massa saborosa e recheios generosos, quentinha.',
        image: { src: '/images/food/pizza.png', alt: 'Pizza recém-saída do forno' },
      },
      {
        title: 'Sobremesas',
        description: 'Um final doce para fechar a refeição com chave de ouro.',
        image: { src: '/images/food/sobremesas.png', alt: 'Variedade de sobremesas' },
      },
      {
        title: 'Comida brasileira',
        description: 'Os clássicos que têm gosto de comida de casa.',
        image: {
          src: '/images/food/comida-brasileira.png',
          alt: 'Prato de comida brasileira tradicional',
        },
      },
    ],
  },

  buffetSection: {
    eyebrow: 'Buffet',
    title: 'Um buffet para montar o prato do seu jeito',
    description:
      'Variedade para quem gosta de experimentar, repetir seus favoritos e aproveitar cada momento.',
    items: [
      'Opções quentes',
      'Saladas',
      'Carnes',
      'Acompanhamentos',
      'Sobremesas',
    ],
    ctaLabel: 'Conheça a Estação da Comida',
    ctaHref: '#localizacao',
    image: {
      src: '/images/buffet/buffet-grande.png',
      alt: 'Balcão de buffet com grande variedade de pratos',
    },
  },

  highlightsSection: {
    eyebrow: 'Destaques',
    title: 'Pratos que fazem sucesso',
    description:
      'Alguns favoritos que combinam com qualquer ocasião. O cardápio pode variar ao longo da semana.',
    items: [
      {
        title: 'Feijoada',
        description: 'O clássico brasileiro para reunir a mesa com aquele sabor de tradição.',
        image: { src: '/images/highlights/feijoada.png', alt: 'Feijoada servida na panela de barro' },
      },
      {
        title: 'Carnes',
        description: 'Cortes preparados na brasa, suculentos e cheios de sabor.',
        image: { src: '/images/highlights/churrasco.png', alt: 'Corte de carne grelhada fatiada' },
      },
      {
        title: 'Pizza',
        description: 'Massa quentinha e recheios generosos para dividir.',
        image: { src: '/images/food/pizza.png', alt: 'Pizza quente fatiada' },
      },
      {
        title: 'Sobremesas',
        description: 'Doces caseiros para adoçar o encontro.',
        image: { src: '/images/food/sobremesas.png', alt: 'Sobremesas variadas' },
      },
    ],
  },

  occasionsSection: {
    eyebrow: 'Experiência',
    title: 'Para cada momento, um bom motivo para vir',
    description:
      'Do almoço corrido do dia a dia às comemorações mais especiais, a Estação da Comida combina com o seu momento.',
    items: [
      {
        title: 'Almoço em família',
        description: 'Aquele encontro gostoso no meio do dia, com variedade para todos.',
        image: { src: '/images/experience/almoco-familia.png', alt: 'Mesa de almoço em família' },
      },
      {
        title: 'Jantar',
        description: 'Um jantar tranquilo em um ambiente acolhedor.',
        image: { src: '/images/experience/jantar.png', alt: 'Mesa preparada para o jantar' },
      },
      {
        title: 'Encontro com amigos',
        description: 'Boa comida e clima descontraído para colocar o papo em dia.',
        image: { src: '/images/experience/amigos.png', alt: 'Mesa de encontro com amigos' },
      },
      {
        title: 'Comemorações',
        description: 'O cenário perfeito para celebrar as datas que importam.',
        image: { src: '/images/experience/comemoracoes.png', alt: 'Mesa preparada para comemoração' },
      },
    ],
  },

  /**
   * PLACEHOLDER: avaliações demonstrativas.
   *
   * Estes depoimentos são exemplos de estrutura e NÃO representam avaliações
   * reais. Substitua pelos depoimentos verdadeiros de clientes antes de publicar.
   */
  testimonialsSection: {
    eyebrow: 'Avaliações',
    title: 'Quem conhece, recomenda',
    description:
      'Depoimentos abaixo são exemplos e serão substituídos por avaliações reais de clientes.',
    isPlaceholder: true,
    items: [
      {
        name: 'Cliente exemplo',
        role: 'Avaliação demonstrativa',
        quote:
          'Espaço reservado para uma avaliação real de cliente. Adicione aqui um depoimento verdadeiro.',
        rating: 5,
      },
      {
        name: 'Cliente exemplo',
        role: 'Avaliação demonstrativa',
        quote:
          'Espaço reservado para uma avaliação real de cliente. Adicione aqui um depoimento verdadeiro.',
        rating: 5,
      },
      {
        name: 'Cliente exemplo',
        role: 'Avaliação demonstrativa',
        quote:
          'Espaço reservado para uma avaliação real de cliente. Adicione aqui um depoimento verdadeiro.',
        rating: 5,
      },
    ],
  },

  instagramSection: {
    eyebrow: 'Instagram',
    title: 'Siga a Estação da Comida',
    handle: '@estacao_da_comida',
    url: 'https://www.instagram.com/estacao_da_comida/',
    ctaLabel: 'Ver Instagram',
    images: [
      { src: '/images/instagram/insta-1.png', alt: 'Prato de comida brasileira' },
      { src: '/images/instagram/insta-2.png', alt: 'Cesta de pão de queijo' },
      { src: '/images/instagram/insta-3.png', alt: 'Caipirinha na Estação da Comida' },
      { src: '/images/instagram/insta-4.png', alt: 'Fatia de bolo de chocolate' },
      { src: '/images/instagram/insta-5.png', alt: 'Mesa farta de churrasco' },
      { src: '/images/instagram/insta-6.png', alt: 'Ambiente aconchegante do restaurante' },
    ],
  },

  finalCta: {
    title: 'Seu próximo momento especial pode começar aqui.',
    description:
      'Venha conhecer a Estação da Comida e aproveite uma experiência cheia de sabor.',
    primaryCta: {
      label: 'Como chegar',
      href: 'https://www.google.com/maps/dir/?api=1&destination=Av.+Aricanduva,+4950,+São+Paulo+-+SP',
    },
    secondaryCta: { label: 'Falar com o restaurante', href: 'tel:+551127270077' },
    image: {
      src: '/images/restaurant/ambiente.png',
      alt: 'Ambiente acolhedor da Estação da Comida',
    },
  },
}

// Named exports para compatibilidade direta e conveniência
export const {
  restaurant,
  seo,
  features,
  navLinks,
  hero,
  experienceIntro,
  foodSection,
  buffetSection,
  highlightsSection,
  occasionsSection,
  testimonialsSection,
  instagramSection,
  finalCta,
} = restaurantConfig
