"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { products } from "@/lib/data/products";

const previewHotspots = [
  { id: "patch", x: 45, y: 33, label: "Parche Sintético", desc: "Grabado láser: ORUM / Crownless Authority / EST. MMXXV" },
  { id: "cross", x: 73, y: 47, label: "Cruz Lateral", desc: "Bordado en hilo beige crema — símbolo de autoridad" },
  { id: "back", x: 82, y: 64, label: "Born to Rule", desc: '"Born to Rule" bordado en arco curvo sobre el broche snapback' },
];

export function AnatomySection() {
  const [active, setActive] = useState<string | null>(null);
  const hero = products[0];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image with hotspots */}
          <div className="relative aspect-[4/3] bg-[#1A1A1A] overflow-hidden group">
            <Image
              src={hero.images[0]}
              alt="ORUM Authority Cap — Anatomía"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-[#0B0B0B]/30" />

            {/* Hotspots */}
            {previewHotspots.map((spot) => (
              <button
                key={spot.id}
                onClick={() => setActive(active === spot.id ? null : spot.id)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <span
                  className="block w-7 h-7 rounded-full border-2 border-[#E8E3D9] bg-[#0B0B0B]/60 hover:bg-[#E8E3D9]/20 transition-all"
                  style={
                    active !== spot.id
                      ? { animation: "pulse-ring 2s ease-out infinite" }
                      : { background: "rgba(232,227,217,0.3)" }
                  }
                >
                  <span className="block w-full h-full rounded-full flex items-center justify-center text-[#E8E3D9] text-[10px] font-bold">
                    +
                  </span>
                </span>
              </button>
            ))}

            {/* Active tooltip */}
            <AnimatePresence>
              {active && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-4 left-4 right-4 bg-[#0B0B0B]/90 backdrop-blur-sm border border-[#E8E3D9]/20 p-4"
                >
                  <p className="text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/50 mb-1">
                    {previewHotspots.find((h) => h.id === active)?.label}
                  </p>
                  <p className="text-xs text-[#E8E3D9]/90">
                    {previewHotspots.find((h) => h.id === active)?.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Corner label */}
            {!active && (
              <div className="absolute bottom-4 left-4 pointer-events-none">
                <p className="text-[10px] tracking-[0.15em] uppercase text-[#E8E3D9]/40">
                  Toca los puntos para explorar
                </p>
              </div>
            )}
          </div>

          {/* Text content */}
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-4">
              ✦ Ingeniería de Lujo
            </p>
            <h2 className="font-display text-2xl md:text-3xl lg:text-4xl font-bold tracking-[0.06em] uppercase text-[#E8E3D9] mb-6 leading-tight">
              Anatomía de la
              <br />
              Authority Cap
            </h2>
            <p className="text-sm text-[#E8E3D9]/60 leading-relaxed mb-8">
              Cada detalle de la ORUM Authority Cap fue diseñado con un propósito. Desde el parche
              de cuero grabado con láser hasta el hilo beige crema de la cruz lateral — esta es una
              gorra construida para quienes entienden que la autoridad no necesita corona.
            </p>

            <ul className="space-y-3 mb-8">
              {[
                "Parche sintético/cuero con grabado láser",
                "Cruz lateral en hilo beige crema",
                '"Born to Rule" bordado trasero curvo',
                "Encintado interior personalizado",
                "Empaque inflable de protección premium",
              ].map((feat) => (
                <li key={feat} className="flex items-start gap-3 text-xs text-[#E8E3D9]/70">
                  <span className="text-[#E8E3D9]/40 mt-0.5">✦</span>
                  {feat}
                </li>
              ))}
            </ul>

            <Link
              href="/technology"
              className="inline-block text-[11px] font-bold tracking-[0.25em] uppercase text-[#E8E3D9] border border-[#E8E3D9]/30 px-8 py-4 hover:bg-[#E8E3D9] hover:text-[#0B0B0B] hover:border-[#E8E3D9] transition-all"
            >
              Ver Anatomía Completa
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
