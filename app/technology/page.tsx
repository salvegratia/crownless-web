"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";
import { products } from "@/lib/data/products";

const sections = [
  {
    id: "patch",
    number: "01",
    title: "Parche Sintético / Cuero",
    subtitle: "Grabado Láser Premium",
    desc: "El frente de la Authority Cap lleva un parche de material sintético con textura de cuero, grabado con láser. Sin tinta. Sin bordado. Solo la marca permanente del láser sobre el material.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cross",
    number: "02",
    title: "Cruz Lateral",
    subtitle: "Bordado en Hilo Beige Crema",
    desc: "La cruz bordada en el panel lateral derecho es el símbolo central de CROWNLESS. Ejecutada en hilo beige crema sobre el negro profundo — visible sin ser ostentosa.",
    image: "https://images.unsplash.com/photo-1521369909029-2afed882baee?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "born",
    number: "03",
    title: "Born to Rule",
    subtitle: "Bordado Trasero Curvo",
    desc: '"Born to Rule" bordado en arco curvo sobre el broche snapback trasero. No un slogan. Una declaración. La última línea de la gorra — la que ven cuando te alejás.',
    image: "https://images.unsplash.com/photo-1556306535-0f09a537f0a3?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "lining",
    number: "04",
    title: "Encintado Interior",
    subtitle: "Logotipo ORUM Repetido",
    desc: "El encintado interior lleva el logotipo ORUM repetido en patrón continuo. Un detalle que solo el portador conoce.",
    image: "https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "packaging",
    number: "05",
    title: "Empaque Inflable",
    subtitle: "Columna de Aire Premium",
    desc: "Cada Authority Cap llega en una bolsa de columna de aire inflable diseñada para proteger la estructura durante el tránsito. El primer unboxing ya es una experiencia.",
    image: "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=900&auto=format&fit=crop",
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
