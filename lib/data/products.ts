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
    subtitle: "CROWNLESS CULT",
    collection: "CULT Line",
    collectionTag: "CULT LINE",
    edition: "Edición Limitada 01/40",
    price: 210000,
    currency: "COP",
    colors: ["Negro Profundo"],
    images: [
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=900&auto=format&fit=crop",
    ],
    hotspots: [
      {
        id: "patch",
        x: 45,
        y: 33,
        label: "Parche Sintético",
        desc: "Grabado láser: ORUM / Crownless Authority / EST. MMXXV. Material sintético premium textura cuero.",
      },
      {
        id: "cross",
        x: 73,
        y: 47,
        label: "Cruz Lateral",
        desc: "Bordado en hilo beige crema — símbolo de autoridad CROWNLESS CULT en cada pieza.",
      },
      {
        id: "back",
        x: 82,
        y: 64,
        label: "Born to Rule",
        desc: '"Born to Rule" bordado en arco curvo sobre el broche snapback trasero.',
      },
      {
        id: "lining",
        x: 50,
        y: 78,
        label: "Encintado Interior",
        desc: "Encintado interior personalizado con logotipo ORUM repetido. Confort premium desde adentro.",
      },
      {
        id: "mesh",
        x: 22,
        y: 50,
        label: "Malla Técnica",
        desc: "5 paneles traseros en malla premium de alta ventilación. Construcción estructurada de frente.",
      },
    ],
    features: [
      "Drill pesado de alta densidad",
      "Parche sintético con grabado láser",
      "Bordado hilo beige crema",
      "Malla trasera técnica premium",
      "Broche snapback ajustable",
    ],
    accordions: {
      luxury: [
        "Frente estructurado de 5 paneles en drill pesado",
        "Parche sintético/cuero con grabado láser ORUM / Crownless Authority / EST. MMXXV",
        "Cruz lateral bordada en hilo beige crema",
        'Bordado trasero curvo "Born to Rule" sobre broche snapback',
        "Encintado interior personalizado con logo ORUM",
        "Malla trasera técnica de alta ventilación",
        "Numeración individual 01/40 — edición irrepetible",
      ],
      packaging:
        "Cada Authority Cap llega en una bolsa de columna de aire inflable de protección premium. Diseñada para preservar la estructura de la gorra durante el tránsito, este empaque técnico refleja el nivel de cuidado que CROWNLESS CULT pone en cada detalle.",
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
      "La ORUM Authority Cap es la pieza central del DROP 001. 40 unidades numeradas individualmente. Cada detalle — desde el parche de cuero grabado hasta el hilo beige crema de la cruz lateral — fue diseñado para quien entiende que la autoridad no necesita corona.",
    available: true,
    stock: 40,
  },
  {
    slug: "monogram-3d-cap",
    name: "Monogram 3D Cap",
    subtitle: "CROWNLESS CULT",
    collection: "DAILY Line",
    collectionTag: "DAILY LINE",
    price: 130000,
    currency: "COP",
    colors: ["Negro Mate", "Verde Militar"],
    images: [
      "https://images.unsplash.com/photo-1607873840912-de3c6d044bd6?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=900&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1594938298603-c8148c4b6a83?q=80&w=900&auto=format&fit=crop",
    ],
    hotspots: [
      {
        id: "embroidery",
        x: 48,
        y: 35,
        label: "Monograma 3D",
        desc: "Bordado en relieve 3D del monograma CROWNLESS CULT al frente. Hilo a tono con la gorra.",
      },
      {
        id: "cross-side",
        x: 72,
        y: 50,
        label: "Cruz Lateral",
        desc: "Cruz emblemática en hilo a tono — discreta, para quienes saben.",
      },
      {
        id: "snapback",
        x: 80,
        y: 65,
        label: "Cierre Snapback",
        desc: "Snapback clásico ajustable. Talla universal.",
      },
    ],
    features: [
      "Bordado en relieve 3D",
      "Cruz lateral a tono",
      "Horma trucker curva clásica",
      "Disponible en 2 colores",
      "Cierre snapback universal",
    ],
    accordions: {
      luxury: [
        "Horma snapback/trucker de perfil curvado clásico",
        "Bordado en relieve 3D del monograma al frente",
        "Cruz lateral bordada a tono con la gorra",
        "Disponible en Negro Mate y Verde Militar",
        "Cierre snapback con broche plástico ajustable",
      ],
      packaging:
        "La Monogram 3D Cap llega en embalaje de protección estándar CROWNLESS CULT. Cuidada hasta el último detalle.",
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
      "La entrada al CULT. Horma clásica trucker con el monograma CROWNLESS CULT en bordado 3D. Para el día a día del que ya sabe.",
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
