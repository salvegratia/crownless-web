"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/lib/data/products";

const sections = [
  {
    id: "puff",
    number: "01",
    title: "Bordado ORUM 3D",
    subtitle: "Puff Embroidery Negro sobre Negro",
    desc: "El frente de la Authority Cap lleva bordado puff en relieve 3D con la tipografía ORUM en serif clásica (referencia Trajan/Cinzel). Hilo negro tono sobre tono — invisible en penumbra, revelado en luz directa.",
    image: "/gorras/gorra1_frente.jpg",
  },
  {
    id: "cross",
    number: "02",
    title: "Cruz Templaria",
    subtitle: "Bordado Tono sobre Tono",
    desc: "Cruz patada bordada en hilo negro tono sobre tono sobre el panel lateral derecho. Plano, discreto — el símbolo central de CROWNLESS visible solo en luz directa.",
    image: "/gorras/gorra2_frente.jpg",
  },
  {
    id: "born",
    number: "03",
    title: "Crownless Authority",
    subtitle: "Bordado Trasero",
    desc: '"CROWNLESS AUTHORITY" bordado en la parte trasera de la gorra. Negro sobre negro — autoridad que no necesita anunciarse. La última línea que ven cuando te alejás.',
    image: "/gorras/gorra1_atras.jpg",
  },
  {
    id: "lining",
    number: "04",
    title: "Encintado Jacquard",
    subtitle: "Detalle Interior Premium",
    desc: "Cinta jacquard personalizada con texto 'ORUM' repetido en hilo gris sobre fondo negro. Cosida sobre las 6 costuras radiales del interior — un lujo callado visible solo al portador.",
    image: "/gorras/gorra1_interna.jpg",
  },
  {
    id: "packaging",
    number: "05",
    title: "Empaque Inflable",
    subtitle: "Columna de Aire Premium",
    desc: "Cada Authority Cap llega en una bolsa de columna de aire inflable diseñada para proteger la estructura durante el tránsito. El primer unboxing ya es una experiencia.",
    image: "/gorras/gorra2_mockup.jpg",
  },
];

export default function TechnologyPage() {
  const [active, setActive] = useState(0);
  const hero = products[0];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden bg-[#f5f5f5]">
        <div className="absolute inset-0">
          <Image
            src={hero.images[0]}
            alt="ORUM Authority Cap"
            fill
            className="object-cover object-top"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-white/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-3"
          >
            Ingeniería de lujo
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-[family-name:var(--font-montserrat)] text-[40px] sm:text-[56px] md:text-[68px] font-black uppercase tracking-tight text-black leading-none mb-6"
          >
            Anatomía
            <br />& Tecnología
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-[14px] text-black/60 max-w-md mx-auto"
          >
            ORUM Authority Cap — Disección completa de los 5 elementos que la definen.
          </motion.p>
        </div>
      </section>

      {/* Interactive sections */}
      <section className="max-w-[1220px] mx-auto px-4 lg:px-6 py-16">
        {/* Tab navigation */}
        <div className="flex gap-0 border-b border-[#e4e4e4] mb-12 overflow-x-auto">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`shrink-0 px-5 py-3 font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[0.15em] transition-all border-b-2 -mb-px ${
                active === i
                  ? "border-black text-black"
                  : "border-transparent text-black/40 hover:text-black"
              }`}
            >
              {s.number}
            </button>
          ))}
        </div>

        {/* Active section */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[4/3] bg-[#f5f5f5] overflow-hidden">
            <Image
              src={sections[active].image}
              alt={sections[active].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-4 left-4 text-[11px] text-black/40">
              {sections[active].number} / 05
            </div>
          </div>
          <div>
            <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
              {sections[active].number} — {sections[active].subtitle}
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[26px] sm:text-[32px] font-black uppercase tracking-tight text-black mb-5">
              {sections[active].title}
            </h2>
            <p className="text-[14px] text-black/60 leading-relaxed mb-8">
              {sections[active].desc}
            </p>
            <div className="flex gap-4 flex-wrap">
              {active < sections.length - 1 && (
                <button
                  onClick={() => setActive(active + 1)}
                  className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] bg-black text-white px-7 py-3 rounded-[3px] hover:opacity-70 transition-opacity"
                >
                  Siguiente →
                </button>
              )}
              <Link
                href="/products/orum-authority-cap"
                className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] text-black/50 hover:text-black py-3 transition-colors"
              >
                Ver Producto →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Materials table */}
      <section className="bg-[#f5f5f5] border-y border-[#e4e4e4] py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <div className="mb-8">
            <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
              Construcción
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[22px] font-black uppercase tracking-tight text-black">
              Materiales & Técnicas
            </h2>
          </div>
          <table className="w-full text-[14px]">
            <thead>
              <tr className="border-b border-[#707070]">
                {["Componente", "Material", "Técnica"].map((h) => (
                  <th key={h} className="text-left pb-3 text-[11px] tracking-[0.15em] uppercase text-black/40 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#e4e4e4]">
              {[
                ["Frente estructurado", "Drill pesado premium", "Construcción 5 paneles"],
                ["Parche frontal", "Sintético textura cuero", "Grabado láser"],
                ["Cruz lateral", "Hilo beige crema", "Bordado plano"],
                ['Texto "Born to Rule"', "Hilo a tono", "Bordado arco curvo"],
                ["Encintado interior", "Tela suave técnica", "Estampado logotipo"],
                ["Cierre", "Plástico premium", "Broche snapback"],
                ["Malla trasera", "Poliéster técnico", "5 paneles ventilados"],
              ].map(([comp, mat, tec]) => (
                <tr key={comp}>
                  <td className="py-3 text-black">{comp}</td>
                  <td className="py-3 text-black/60">{mat}</td>
                  <td className="py-3 text-black/40">{tec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-4">
          40 Unidades. Sin Reposición.
        </p>
        <h2 className="font-[family-name:var(--font-montserrat)] text-[26px] font-black uppercase tracking-tight text-black mb-7">
          Ahora que ya sabes cómo está hecha
        </h2>
        <Link
          href="/products/orum-authority-cap"
          className="inline-block font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] bg-black text-white px-10 py-4 rounded-[3px] hover:opacity-70 transition-opacity"
        >
          Comprar Authority Cap
        </Link>
      </section>
    </div>
  );
}
