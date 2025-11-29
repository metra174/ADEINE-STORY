import { Product, Testimonial, Feature } from './types';

export const WHATSAPP_NUMBER = "950124243";
export const WHATSAPP_LINK = `https://wa.me/244${WHATSAPP_NUMBER}`;
export const DELIVERY_PRICE = "2.000 Kz";

// Imagens de Stock de Alta Qualidade para Sapatos
const SHOE_IMAGES = [
  "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?q=80&w=800&auto=format&fit=crop", // Salto Azul/Royal
  "https://images.unsplash.com/photo-1562273138-f46be4ebdf33?q=80&w=800&auto=format&fit=crop", // Salto Vermelho Fundo Branco
  "https://images.unsplash.com/photo-1511556820780-d912e42b4980?q=80&w=800&auto=format&fit=crop", // Salto Branco Noiva
  "https://images.unsplash.com/photo-1608256246200-53e635b5b69f?q=80&w=800&auto=format&fit=crop", // Salto Rosa Brilhante
  "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=800&auto=format&fit=crop", // Tenis/Soca Fashion
  "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?q=80&w=800&auto=format&fit=crop", // Salto Bege Casual
  "https://images.unsplash.com/photo-1535043934128-cf0b28d52f95?q=80&w=800&auto=format&fit=crop", // Sandalia Roxa
  "https://images.unsplash.com/photo-1581100486609-1e34b5ef6383?q=80&w=800&auto=format&fit=crop", // Salto Preto Verniz
  "https://images.unsplash.com/photo-1515347619252-60a6bf4fffce?q=80&w=800&auto=format&fit=crop", // Sapatos Elegantes
  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?q=80&w=800&auto=format&fit=crop", // Sandalia Fashion
  "https://images.unsplash.com/photo-1620802051662-72c67677d248?q=80&w=800&auto=format&fit=crop", // Soca/Mule
  "https://images.unsplash.com/photo-1603126757656-78b0568eb2a3?q=80&w=800&auto=format&fit=crop", // Salto Alto Preto
];

// Gerando 30 Produtos (Você pode substituir os dados individuais abaixo)
export const PRODUCTS: Product[] = [
  // --- LOTE 1 (Destaques) ---
  {
    id: 1,
    name: "Salto Royal Blue",
    category: "Saltos",
    price: "18.000 Kz",
    image: SHOE_IMAGES[0],
  },
  {
    id: 2,
    name: "Stiletto Vermelho Paixão",
    category: "Saltos",
    price: "22.000 Kz",
    image: SHOE_IMAGES[1],
  },
  {
    id: 3,
    name: "Soca Conforto Chic",
    category: "Socas",
    price: "16.500 Kz",
    image: SHOE_IMAGES[10],
  },
  {
    id: 4,
    name: "Sandália Noiva Crystal",
    category: "Sandálias",
    price: "25.000 Kz",
    image: SHOE_IMAGES[2],
  },
  {
    id: 5,
    name: "Salto Rosa Glitter",
    category: "Saltos",
    price: "20.000 Kz",
    image: SHOE_IMAGES[3],
  },
  {
    id: 6,
    name: "Sandália Verão Nude",
    category: "Sandálias",
    price: "15.000 Kz",
    image: SHOE_IMAGES[5],
  },

  // --- LOTE 2 ---
  {
    id: 7,
    name: "Soca Purple Rain",
    category: "Socas",
    price: "14.000 Kz",
    image: SHOE_IMAGES[6],
  },
  {
    id: 8,
    name: "Scarpin Preto Verniz",
    category: "Saltos",
    price: "19.000 Kz",
    image: SHOE_IMAGES[7],
  },
  {
    id: 9,
    name: "Sandália Gold Tiras",
    category: "Sandálias",
    price: "17.500 Kz",
    image: SHOE_IMAGES[8],
  },
  {
    id: 10,
    name: "Mule Elegance White",
    category: "Socas",
    price: "16.000 Kz",
    image: SHOE_IMAGES[10],
  },
  {
    id: 11,
    name: "Salto Agulha Noir",
    category: "Saltos",
    price: "21.000 Kz",
    image: SHOE_IMAGES[11],
  },
  {
    id: 12,
    name: "Sandália Festa Prata",
    category: "Sandálias",
    price: "18.500 Kz",
    image: SHOE_IMAGES[9],
  },

  // --- LOTE 3 (Espaços para Futuro - Imagens Repetidas para Demo) ---
  { id: 13, name: "Salto Clássico Bege", category: "Saltos", price: "18.000 Kz", image: SHOE_IMAGES[5] },
  { id: 14, name: "Soca Dia-a-Dia", category: "Socas", price: "12.000 Kz", image: SHOE_IMAGES[4] },
  { id: 15, name: "Sandália Tiras Finas", category: "Sandálias", price: "15.500 Kz", image: SHOE_IMAGES[6] },
  { id: 16, name: "Salto Bloco Preto", category: "Saltos", price: "17.000 Kz", image: SHOE_IMAGES[7] },
  { id: 17, name: "Soca Premium Gold", category: "Socas", price: "19.000 Kz", image: SHOE_IMAGES[8] },
  { id: 18, name: "Sandália Gladiadora", category: "Sandálias", price: "16.000 Kz", image: SHOE_IMAGES[9] },
  { id: 19, name: "Peep Toe Vermelho", category: "Saltos", price: "20.000 Kz", image: SHOE_IMAGES[1] },
  { id: 20, name: "Soca Flat Confort", category: "Socas", price: "11.000 Kz", image: SHOE_IMAGES[10] },
  { id: 21, name: "Salto Meia Pata", category: "Saltos", price: "23.000 Kz", image: SHOE_IMAGES[11] },
  { id: 22, name: "Sandália Anabela", category: "Sandálias", price: "14.500 Kz", image: SHOE_IMAGES[2] },
  { id: 23, name: "Soca Bico Fino", category: "Socas", price: "15.000 Kz", image: SHOE_IMAGES[4] },
  { id: 24, name: "Salto Grosso Office", category: "Saltos", price: "18.000 Kz", image: SHOE_IMAGES[0] },
  { id: 25, name: "Sandália Rasteira Chic", category: "Sandálias", price: "10.000 Kz", image: SHOE_IMAGES[5] },
  { id: 26, name: "Soca Metalizada", category: "Socas", price: "16.000 Kz", image: SHOE_IMAGES[3] },
  { id: 27, name: "Salto Fantasia", category: "Saltos", price: "25.000 Kz", image: SHOE_IMAGES[6] },
  { id: 28, name: "Sandália Festa Luxo", category: "Sandálias", price: "22.000 Kz", image: SHOE_IMAGES[8] },
  { id: 29, name: "Soca Plataforma", category: "Socas", price: "13.000 Kz", image: SHOE_IMAGES[4] },
  { id: 30, name: "Salto Exclusivo Adrine", category: "Saltos", price: "28.000 Kz", image: SHOE_IMAGES[1] },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    text: "Comprei dois saltos e a qualidade superou minhas expectativas. Recomendo!",
    author: "Maria A.",
  },
  {
    id: 2,
    text: "Entrega rápida e produtos bonitos. O atendimento foi excelente.",
    author: "Ana P.",
  },
  {
    id: 3,
    text: "As socas são super confortáveis para trabalhar. Amei!",
    author: "Cláudia M.",
  }
];

export const FEATURES: Feature[] = [
  {
    id: 1,
    title: "Qualidade Premium",
    description: "Produtos selecionados com alta qualidade e acabamento impecável.",
    icon: "award",
  },
  {
    id: 2,
    title: "Modelos Modernos",
    description: "Tendências atualizadas para manter você sempre elegante.",
    icon: "sparkles",
  },
  {
    id: 3,
    title: "Entrega Rápida",
    description: `Entrega imediata por apenas ${DELIVERY_PRICE} em Luanda.`,
    icon: "truck",
  },
  {
    id: 4,
    title: "Atendimento VIP",
    description: "Atendimento rápido e personalizado via WhatsApp.",
    icon: "message-circle",
  },
];