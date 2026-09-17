export interface Hotspot {
  id: string;
  x: number;
  y: number;
  label: string;
  desc: string;
}

export interface Product {
  slug: string;
  name: string;
  subtitle: string;
  collection: string;
  collectionTag: string;
  edition?: string;
  price: number;
  currency: string;
  colors: string[];
  images: string[];
  hotspots: Hotspot[];
  features: string[];
  accordions: {
    luxury: string[];
    packaging: string;
    care: string[];
    shipping: string;
  };
  description: string;
  available: boolean;
  stock?: number;
}

export const products: Product[] = [
  {
    slug: "orum-authority-cap",
    name: "ORUM Authority Cap",
    subtitle: "CROWNLESS",
    collection: "CULT Line",
    collectionTag: "CULT LINE",
    edition: "Edición Limitada 01/40",
    price: 210000,
    currency: "COP",
    colors: ["Negro Absoluto"],
    images: [
      "/gorras/gorra1_frente.jpg",
      "/gorras/gorra1_atras.jpg",
      "/gorras/gorra1_interna.jpg",
    ],
    hotspots: [
      {
        id: "puff",
        x: 45,
        y: 33,
        label: "Bordado ORUM 3D",
        desc: "Puff embroidery en serif clásica (referencia Trajan). Hilo negro tono sobre tono — invisible en penumbra, revelado en luz directa.",
      },
      {
        id: "cross",
        x: 73,
        y: 47,
        label: "Cruz Templaria",
        desc: "Cruz patada bordada en hilo negro tono sobre tono sobre el panel lateral derecho. Plano, discreto — visible solo en luz directa.",
      },
      {
        id: "back-text",
        x: 82,
        y: 58,
        label: "Crownless Authority",
        desc: '"CROWNLESS AUTHORITY" bordado en la parte trasera. Negro sobre negro — autoridad que no necesita anunciarse.',
      },
      {
        id: "visor",
        x: 50,
        y: 82,
        label: "Pespunte de Visera",
        desc: "Líneas de pespunte paralelo (4–6 líneas) en hilo negro tono sobre tono. Textura y oficio artesanal sin romper la monocromía.",
      },
      {
        id: "interior",
        x: 22,
        y: 50,
        label: "Encintado Jacquard",
        desc: "Cinta jacquard personalizada con texto 'ORUM' repetido en hilo gris sobre fondo negro. Lujo callado — visible solo al portador.",
      },
    ],
    features: [
      "Puff embroidery ORUM 3D negro sobre negro",
      "Cruz templaria tono sobre tono",
      "Pespunte artesanal de visera (4–6 líneas)",
      "Encintado jacquard interior personalizado",
      "5 paneles · all-fabric · sin malla",
    ],
    accordions: {
      luxury: [
        "Horma cerrada 5 paneles · frente alto estructurado con buckram · sin malla",
        "Bordado frontal ORUM en puff 3D — serif clásica (ref. Trajan/Cinzel) negro sobre negro",
        "Cruz patada lateral bordada en hilo negro tono sobre tono — panel derecho",
        '"CROWNLESS AUTHORITY" bordado trasero negro sobre negro',
        "Pespunte paralelo de visera (4–6 líneas) — textura artesanal tono sobre tono",
        "Cinta jacquard interior 'ORUM' repetido en hilo gris sobre negro",
        "Drill/algodón medio negro absoluto en todos los paneles y visera",
        "Numeración individual 01/40 — edición irrepetible",
      ],
      packaging:
        "Cada Authority Cap llega en una bolsa de columna de aire inflable de protección premium. Diseñada para preservar la estructura de la gorra durante el tránsito, este empaque técnico refleja el nivel de cuidado que CROWNLESS pone en cada detalle.",
      care: [
        "Limpieza con paño húmedo suave",
        "No lavar a máquina ni en lavadora",
        "No usar secadora",
        "Guardar en posición vertical sobre superficie plana",
        "Evitar exposición prolongada al sol directo para preservar el color",
      ],
      shipping:
        "Envío nacional a toda Colombia en 3–5 días hábiles. Envío gratis en compras superiores a $200.000 COP. Empaque inflable de protección premium incluido.",
    },
    description:
      "La ORUM Authority Cap es la pieza central del DROP 001. 40 unidades numeradas individualmente. All-fabric negro absoluto — sin malla, sin color. Bordado puff ORUM tono sobre tono, cruz templaria lateral, encintado jacquard interior. Para quien entiende que la autoridad no necesita anunciarse.",
    available: true,
    stock: 40,
  },
  {
    slug: "monogram-3d-cap",
    name: "ORUM Trucker Cap",
    subtitle: "CROWNLESS",
    collection: "DAILY Line",
    collectionTag: "DAILY LINE",
    price: 130000,
    currency: "COP",
    colors: ["Negro Absoluto"],
    images: [
      "/gorras/gorra2_frente.jpg",
      "/gorras/gorra2_trasera.jpg",
      "/gorras/gorra2_interior.jpg",
      "/gorras/gorra2_mockup.jpg",
    ],
    hotspots: [
      {
        id: "patch",
        x: 45,
        y: 33,
        label: "Parche de Cuero Negro Mate",
        desc: "Cuero negro mate con bordado en hilo crema: ORUM (grande) · Crownless Authority (medio) · EST. MMXXV (pequeño). Cosido perimetral al panel frontal.",
      },
      {
        id: "visor-band",
        x: 50,
        y: 82,
        label: "Banda de Visera",
        desc: '"CROWNLESS AUTHORITY" repetido en hilo crema sobre fondo negro en el canto lateral de la visera.',
      },
      {
        id: "cross",
        x: 73,
        y: 47,
        label: "Cruz Templaria Crema",
        desc: "Cruz patada bordada en hilo crema sobre el panel lateral derecho de malla. Emblema de autoridad CROWNLESS.",
      },
      {
        id: "back",
        x: 82,
        y: 60,
        label: "Born to Rule",
        desc: '"BORN TO RULE" en gótico caligráfico, hilo crema, bordado en arco sobre el panel trasero de malla siguiendo la curva del strapback.',
      },
      {
        id: "interior",
        x: 22,
        y: 50,
        label: "Encintado Jacquard Crema",
        desc: "Cinta jacquard 'ORUM' repetido en hilo crema sobre fondo negro. Detalle premium visible solo al portador.",
      },
    ],
    features: [
      "Parche de cuero negro mate con bordado crema",
      "Trucker 6 paneles · malla trasera premium",
      '"Born to Rule" bordado trasero en gótico',
      "Cruz templaria en hilo crema",
      "Encintado jacquard crema personalizado",
    ],
    accordions: {
      luxury: [
        "Horma trucker estructurada 6 paneles · frente alto con buckram · malla negra trasera y lateral",
        "Parche cuero negro mate: ORUM / Crownless Authority / EST. MMXXV en gótico moderno, hilo crema",
        "Banda de visera: 'CROWNLESS AUTHORITY' repetido en hilo crema sobre negro",
        "Cruz patada lateral bordada en hilo crema sobre malla — panel derecho",
        '"BORN TO RULE" en gótico caligráfico hilo crema — bordado trasero en arco',
        "Cinta jacquard interior 'ORUM' repetido en hilo crema sobre negro",
        "Paneles frontales: drill pesado negro absoluto · Paneles traseros/laterales: malla premium negra",
      ],
      packaging:
        "La ORUM Trucker Cap llega en embalaje de protección estándar CROWNLESS. Cada detalle, cuidado.",
      care: [
        "Limpieza con paño húmedo suave",
        "No lavar a máquina",
        "Guardar sobre superficie plana",
        "Evitar exposición prolongada al sol",
      ],
      shipping:
        "Envío nacional a toda Colombia en 3–5 días hábiles. Envío gratis en compras superiores a $200.000 COP.",
    },
    description:
      "La entrada al mundo CROWNLESS. Trucker de 6 paneles, frente en drill pesado negro y malla trasera premium. Parche de cuero negro mate con bordado crema: ORUM · Crownless Authority · EST. MMXXV. Cruz templaria lateral. 'BORN TO RULE' bordado en arco trasero. Para quien lleva la autoridad todos los días.",
    available: true,
    stock: 100,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}
