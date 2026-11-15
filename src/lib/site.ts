/** Informações da unidade AçaíGo Lisboa, em São José, SC. */

export const WHATSAPP_NUMBER = "5548991459574" as const;

export const WHATSAPP_MESSAGE =
  "Olá, vim pelo site da AçaíGo Lisboa e gostaria de fazer um pedido!" as const;

export const WHATSAPP_URL =
  "https://wa.me/5548991459574?text=Ol%C3%A1%2C+gostaria+de+fazer+um+pedido%21" as const;

export const IFOOD_URL =
  "https://www.ifood.com.br/delivery/sao-jose-sc/acaigolisboa-forquilhas/43d4b92d-6b04-4e5c-b681-06ab6ad83495?UTM_Medium=share" as const;

export const INSTAGRAM_URL = "https://www.instagram.com/acaigolisboa/" as const;
export const BRAND_INSTAGRAM_URL = "https://www.instagram.com/acaigooficial/" as const;
export const LINKTREE_URL = "https://linktr.ee/acaigoficial" as const;

export const ADDRESS = {
  street: "Av. Lisboa, 446",
  district: "Lisboa · São José, SC · CEP 88107-350",
} as const;

export const MAPS_URL =
  "https://www.google.com/maps/dir/?api=1&destination=" +
  encodeURIComponent("Av. Lisboa, 446, Lisboa, São José, SC, 88107-350");

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("AçaíGo Lisboa, Av. Lisboa 446, São José, SC");

export interface NavItem {
  readonly label: string;
  readonly href: string;
}

export const NAV_ITEMS: readonly NavItem[] = [
  { label: "Cardápio", href: "#cardapio" },
  { label: "A loja", href: "#sobre" },
  { label: "Avaliações", href: "#avaliacoes" },
  { label: "Como chegar", href: "#onde-estamos" },
] as const;

export interface Category {
  readonly id: string;
  readonly name: string;
  readonly text: string;
  readonly image: string;
  readonly alt: string;
}

export const CATEGORIES: readonly Category[] = [
  {
    id: "acai",
    name: "Açaí",
    text: "Monte do seu jeito, com as combinações que dão vontade de voltar.",
    image: "/images/acai-na-mao.webp",
    alt: "Copo de açaí AçaíGo com banana, granola e creme",
  },
  {
    id: "sorvetes",
    name: "Buffet de sorvetes",
    text: "Escolha os sabores e monte a sobremesa no seu ritmo.",
    image: "/images/acai-creme-morango.webp",
    alt: "Sobremesa gelada de açaí com morangos e creme",
  },
  {
    id: "milkshakes",
    name: "Milk shakes",
    text: "Cremosos, gelados e com cobertura generosa.",
    image: "/images/milkshake-interior.webp",
    alt: "Milk shake de chocolate com calda no copo",
  },
  {
    id: "crepes",
    name: "Crepes",
    text: "Uma pausa quentinha para equilibrar o passeio pelo cardápio.",
    image: "/images/crepe-salgado.webp",
    alt: "Crepe servido com morangos e chocolate",
  },
  {
    id: "barcas",
    name: "Barcas de açaí",
    text: "Para dividir à mesa ou transformar o encontro em ocasião.",
    image: "/images/barca-acai.webp",
    alt: "Barca de açaí com morangos, creme e confeitos coloridos",
  },
] as const;

export interface Review {
  readonly quote: string;
  readonly author: string;
}

export const REVIEWS: readonly Review[] = [
  {
    quote: "Ótimo lugar para um lanche, várias opções para quem gosta de açaí.",
    author: "Avaliação no Google",
  },
] as const;

export const RATING = { score: "4,0", count: "312 avaliações no Google" } as const;
