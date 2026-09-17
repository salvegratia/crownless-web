export interface FitStyle {
  id: string;
  name: string;
  tag: string;
  description: string;
  bestFor: string;
  image: string;
  products: string[];
  measurements: {
    label: string;
    small: string;
    classic: string;
    xl: string;
  }[];
  minCircumference: number;
  maxCircumference: number;
}

export const fitStyles: FitStyle[] = [
  {
    id: "5panel-trucker",
    name: "5-Panel Trucker",
    tag: "CULT LINE",
    description:
      "Frente estructurado rígido con visera plana o curva. El estándar del streetwear de lujo. Define tu silueta.",
    bestFor:
      "Cráneos de perfil medio-alto. Ideal si buscas presencia y estructura.",
    image:
      "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=700&auto=format&fit=crop",
    products: ["ORUM Authority Cap"],
    measurements: [
      { label: "Altura del frente", small: "16 cm", classic: "17 cm", xl: "18 cm" },
      { label: "Circunferencia", small: "54–57 cm", classic: "57–61 cm", xl: "61–64 cm" },
      { label: "Ancho de visera", small: "17 cm", classic: "18 cm", xl: "18.5 cm" },
    ],
    minCircumference: 54,
    maxCircumference: 64,
  },
  {
    id: "curved-snapback",
    name: "Curved Snapback",
    tag: "DAILY LINE",
    description:
      "Perfil curvado clásico. Versátil, cómodo, atemporal. La base del armario de quien sabe.",
    bestFor:
      "Funciona con casi cualquier tipo de cráneo. La elección más versátil.",
    image:
      "https://images.unsplash.com/photo-1607873840912-de3c6d044bd6?q=80&w=700&auto=format&fit=crop",
    products: ["Monogram 3D Cap"],
    measurements: [
      { label: "Altura del frente", small: "15 cm", classic: "16 cm", xl: "17 cm" },
      { label: "Circunferencia", small: "54–57 cm", classic: "57–61 cm", xl: "61–64 cm" },
      { label: "Ancho de visera", small: "17.5 cm", classic: "18 cm", xl: "18.5 cm" },
    ],
    minCircumference: 54,
    maxCircumference: 64,
  },
  {
    id: "deep-fit",
    name: "Deep Fit",
    tag: "PRÓXIMAMENTE",
    description:
      "Diseñado para cabezas de mayor circunferencia. Comodidad superior sin sacrificar estética.",
    bestFor:
      "Circunferencias mayores a 61 cm. Ajuste profundo y comodidad premium.",
    image:
      "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=700&auto=format&fit=crop",
    products: ["Próximamente en DROP 002"],
    measurements: [
      { label: "Altura del frente", small: "—", classic: "17 cm", xl: "18.5 cm" },
      { label: "Circunferencia", small: "—", classic: "59–63 cm", xl: "63–67 cm" },
      { label: "Ancho de visera", small: "—", classic: "18 cm", xl: "19 cm" },
    ],
    minCircumference: 59,
    maxCircumference: 67,
  },
];

export function recommendFit(circumference: number): FitStyle {
  if (circumference <= 57) return fitStyles[1];
  if (circumference >= 63) return fitStyles[2];
  return fitStyles[0];
}
