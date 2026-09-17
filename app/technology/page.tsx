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
    desc: "El frente de la Authority Cap lleva un parche de material sintético con textura de cuero, grabado con láser con el texto 'ORUM / Crownless Authority / EST. MMXXV'. Sin tinta. Sin bordado. Solo la marca permanente del láser sobre el material.",
    image: "https://images.unsplash.com/photo-1588850561407-ed78c282e89b?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "cross",
    number: "02",
    title: "Cruz Lateral",
    subtitle: "Bordado en Hilo Beige Crema",
    desc: "La cruz bordada en el panel lateral derecho es el símbolo central de CROWNLESS CULT. Ejecutada en hilo beige crema sobre el negro profundo — visible sin ser ostentosa. Para quienes saben leer los códigos.",
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
    desc: "El encintado interior lleva el logotipo ORUM repetido en patrón continuo. Un detalle que solo el portador conoce — la marca visible únicamente cuando te sacás la gorra.",
    image: "https://images.unsplash.com/photo-1608541737042-87a12275d313?q=80&w=900&auto=format&fit=crop",
  },
  {
    id: "packaging",
    number: "05",
    title: "Empaque Inflable",
    subtitle: "Columna de Aire Premium",
    desc: "Cada Authority Cap llega en una bolsa de columna de aire inflable diseñada para proteger la estructura de la gorra durante el tránsito. El primer unboxing CROWNLESS CULT ya es una experiencia.",
    image: "https://images.unsplash.com/photo-1578996953841-b187dbe4bc8a?q=80&w=900&auto=format&fit=crop",
  },
];

export default function TechnologyPage() {
  const [active, setActive] = useState(0);
  const hero = products[0];

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${hero.images[0]})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#0B0B0B]/75" />
        <div className="relative z-10 text-center px-4">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-[10px] tracking-[0.4em] uppercase text-[#E8E3D9]/50 mb-4"
          >
            ✦ INGENIERÍA DE LUJO ✦
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="font-display text-4xl sm:text-6xl md:text-7xl font-black tracking-[0.04em] uppercase text-[#E8E3D9] mb-6"
          >
            Anatomía
            <br />& Tecnología
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-sm text-[#E8E3D9]/60 max-w-md mx-auto"
          >
            ORUM Authority Cap — Disección completa de los 5 elementos que definen la gorra.
          </motion.p>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <motion.div
            className="w-px h-12 bg-[#E8E3D9]/20 mx-auto"
            animate={{ scaleY: [1, 0.3, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          />
        </div>
      </section>

      {/* Interactive sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-20">
        {/* Tab navigation */}
        <div className="flex gap-0 border border-[#2A2A2A] mb-12 overflow-x-auto">
          {sections.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex-1 min-w-max px-4 py-3 text-[10px] tracking-[0.15em] uppercase font-semibold transition-all border-r last:border-r-0 border-[#2A2A2A] ${
                active === i
                  ? "bg-[#E8E3D9] text-[#0B0B0B]"
                  : "text-[#E8E3D9]/50 hover:text-[#E8E3D9] hover:bg-[#1A1A1A]"
              }`}
            >
              {s.number}
            </button>
          ))}
        </div>

        {/* Active section */}
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="relative aspect-[4/3] bg-[#1A1A1A] overflow-hidden">
            <Image
              src={sections[active].image}
              alt={sections[active].title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B]/60 to-transparent" />
            <div className="absolute bottom-4 left-4">
              <span className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/50">
                {sections[active].number} / 05
              </span>
            </div>
          </div>
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-2">
              {sections[active].number} — {sections[active].subtitle}
            </p>
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.06em] uppercase text-[#E8E3D9] mb-6">
              {sections[active].title}
            </h2>
            <p className="text-sm text-[#E8E3D9]/70 leading-relaxed mb-8">
              {sections[active].desc}
            </p>
            <div className="flex gap-4 flex-wrap">
              {active < sections.length - 1 && (
                <button
                  onClick={() => setActive(active + 1)}
                  className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E3D9] border border-[#E8E3D9]/30 px-6 py-3 hover:bg-[#E8E3D9] hover:text-[#0B0B0B] transition-all"
                >
                  Siguiente →
                </button>
              )}
              <Link
                href="/products/orum-authority-cap"
                className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#E8E3D9]/60 hover:text-[#E8E3D9] py-3 transition-colors"
              >
                Ver Producto →
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Materials table */}
      <section className="bg-[#111111] border-y border-[#2A2A2A] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-2">
              ✦ Construcción
            </p>
            <h2 className="font-display text-2xl font-bold tracking-[0.08em] uppercase text-[#E8E3D9]">
              Materiales & Técnicas
            </h2>
          </div>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2A2A2A]">
                {["Componente", "Material", "Técnica"].map((h) => (
                  <th key={h} className="text-left pb-3 text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/40 font-normal">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[#2A2A2A]/50">
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
                  <td className="py-3 text-[#E8E3D9]/80">{comp}</td>
                  <td className="py-3 text-[#E8E3D9]/60">{mat}</td>
                  <td className="py-3 text-[#E8E3D9]/40">{tec}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 text-center">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-4">
          ✦ 40 Unidades. Sin Reposición.
        </p>
        <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-[0.06em] uppercase text-[#E8E3D9] mb-6">
          Ahora que ya sabes cómo está hecha
        </h2>
        <Link
          href="/products/orum-authority-cap"
          className="inline-block bg-[#E8E3D9] text-[#0B0B0B] px-12 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-colors"
        >
          Comprar Authority Cap
        </Link>
      </section>
    </div>
  );
}
