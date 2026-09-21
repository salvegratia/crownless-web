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
    details: string;
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
    name: "ORUM Cult Cap",
    subtitle: "CROWNLESS CULT",
    collection: "CULT Line",
    collectionTag: "CULT LINE",
    edition: undefined,
    price: 145000,
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
        desc: '"CROWNLESS CULT" bordado en la parte trasera. Negro sobre negro — autoridad que no necesita anunciarse.',
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
    features: [],
    accordions: {
      details:
        "La ORUM Cult Cap no ofrece contraste. Todo es negro: la tela, el bordado, el hilo. El puff embroidery ORUM en serif clásica aparece solo cuando la luz lo encuentra — tono sobre tono, invisible en penumbra. No hay decoración innecesaria, solo precisión aplicada donde importa: la cruz templaria lateral, el CROWNLESS CULT bordado en la trasera, el encintado jacquard interior que nadie más verá. Una pieza que no busca ser vista, sino reconocida.",
      care: [
        "Limpieza con paño húmedo suave",
        "No lavar a máquina ni en lavadora",
        "No usar secadora",
        "Guardar en posición vertical sobre superficie plana",
        "Evitar exposición prolongada al sol directo para preservar el color",
      ],
      shipping:
        "Envíos a todo Colombia entre 2 y 5 días hábiles. Recibirás tu número de guía para hacer seguimiento en todo momento.\n\nEntregas rápidas en Medellín.",
    },
    description:
      "La ORUM Cult Cap es la pieza central de la Colección ORUM. All-fabric negro absoluto — sin malla, sin color. Bordado puff ORUM tono sobre tono, cruz templaria lateral, encintado jacquard interior. Para quien entiende que la autoridad no necesita anunciarse.",
    available: true,
    stock: 40,
  },
  {
    slug: "monogram-3d-cap",
    name: "ORUM Trucker Cap",
    subtitle: "CROWNLESS CULT",
    collection: "DAILY Line",
    collectionTag: "DAILY LINE",
    price: 145000,
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
        desc: '"CROWNLESS CULT" repetido en hilo crema sobre fondo negro en el canto lateral de la visera.',
      },
      {
        id: "cross",
        x: 73,
        y: 47,
        label: "Cruz Templaria Crema",
        desc: "Cruz patada bordada en hilo crema sobre el panel lateral derecho de malla. Emblema de autoridad CROWNLESS CULT.",
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
    features: [],
    accordions: {
      details:
        "La ORUM Trucker Cap lleva la declaración en el frontal. El parche de cuero negro mate no es un accesorio, es el punto de partida: corte limpio, cosido al panel, con ORUM / Crownless Authority / EST. MMXXV bordados en hilo crema. El contraste entre el cuero y la malla trasera define la estructura — material industrial, construcción artesanal. La cruz templaria en crema sobre malla y el BORN TO RULE en gótico trasero completan una pieza que no pretende ser discreta. Para quien lleva la autoridad visible.",
      care: [
        "Limpieza con paño húmedo suave",
        "No lavar a máquina",
        "Guardar sobre superficie plana",
        "Evitar exposición prolongada al sol",
      ],
      shipping:
        "Envíos a todo Colombia entre 2 y 5 días hábiles. Recibirás tu número de guía para hacer seguimiento en todo momento.\n\nEntregas rápidas en Medellín.",
    },
    description:
      "La entrada al mundo CROWNLESS CULT. Trucker de frente estructurado negro y malla trasera premium. Parche de cuero negro mate con bordado crema: ORUM · Crownless Authority · EST. MMXXV. Cruz templaria lateral. 'BORN TO RULE' bordado en arco trasero. Para quien lleva la autoridad todos los días.",
    available: true,
    stock: 100,
  },
  {
    slug: "orum-pack-completo",
    name: "ORUM Pack Completo",
    subtitle: "CROWNLESS CULT",
    collection: "CULT Line",
    collectionTag: "BUNDLE",
    edition: undefined,
    price: 270000,
    currency: "COP",
    colors: ["Negro Absoluto"],
    images: [
      "/gorras/pack.png",
    ],
    hotspots: [],
    features: [],
    accordions: {
      details:
        "Dos aproximaciones al mismo código estético. La Cult Cap construida desde la ausencia: negro sobre negro, un bordado que aparece solo cuando la luz lo busca. La Trucker Cap construida desde la presencia: parche de cuero negro mate, hilo crema, estructura trucker para el uso diario. Juntas definen el vocabulario ORUM — autoridad que no se anuncia, y cuando lo hace, lo hace en los términos correctos.",
      care: [
        "Limpieza con paño húmedo suave en ambas piezas",
        "No lavar a máquina",
        "Guardar en posición vertical sobre superficie plana",
        "Evitar exposición prolongada al sol directo",
      ],
      shipping:
        "Envíos a todo Colombia entre 2 y 5 días hábiles. Recibirás tu número de guía para hacer seguimiento en todo momento.\n\nEntregas rápidas en Medellín.",
    },
    description:
      "Las dos piezas de la Colección ORUM en un solo movimiento. La ORUM Cult Cap — all-fabric negro absoluto, puff embroidery tono sobre tono — más la ORUM Trucker Cap — parche de cuero mate con bordado crema, BORN TO RULE en gótico trasero. Para quien no elige.",
    available: true,
    stock: 40,
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
