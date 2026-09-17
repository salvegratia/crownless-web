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
    id: "curved-snapback",
    name: "Curved Snapback",
    tag: "DAILY LINE",
    description:
      "Perfil curvado clásico. Versátil, cómodo, atemporal. La base del armario de quien sabe.",
    bestFor:
      "Funciona con casi cualquier tipo de cráneo. La elección más versátil.",
    image:
      "/gorras/gorra2_01.jpg",
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
      "/gorras/CAMISETA.jpg",
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
  if (circumference >= 63) return fitStyles[1];
  return fitStyles[0];
}
