"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { products } from "@/lib/data/products";

export function AnatomySection() {
  const [active, setActive] = useState<string | null>(null);
  const hero = products[0];
  const previewHotspots = hero.hotspots.slice(0, 4);

  return (
    <section className="py-12 lg:py-16">
      <div className="max-w-[1220px] mx-auto px-4 lg:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Image with interactive hotspots */}
          <div className="relative bg-[#f5f5f5] overflow-hidden" style={{ paddingBottom: "75%" }}>
            <Image
              src={hero.images[0]}
              alt="ORUM Authority Cap — Anatomía"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />

            {/* Hotspot dots */}
            {previewHotspots.map((spot, i) => (
              <button
                key={spot.id}
                onClick={() => setActive(active === spot.id ? null : spot.id)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2 z-10"
              >
                <span className={`flex items-center justify-center w-7 h-7 rounded-full border-2 text-[11px] font-bold transition-all ${active === spot.id ? "bg-black border-black text-white" : "bg-white border-black text-black hover:bg-black hover:text-white"}`}>
                  {i + 1}
                </span>
              </button>
            ))}

            {/* Active tooltip */}
            <AnimatePresence>
              {active && (
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="absolute bottom-3 left-3 right-3 bg-white/95 shadow-lg px-4 py-3"
                >
                  <p className="text-[11px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] mb-1">
                    {previewHotspots.find((h) => h.id === active)?.label}
                  </p>
                  <p className="text-[13px] text-black/70 leading-snug">
                    {previewHotspots.find((h) => h.id === active)?.desc}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Text */}
          <div>
            <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
              Ingeniería de Lujo
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[26px] lg:text-[32px] font-black uppercase tracking-tight leading-tight mb-5">
              Anatomía de la<br />Authority Cap
            </h2>
            <p className="text-[14px] text-black/60 leading-relaxed mb-7">
              Cada detalle tiene un propósito. Toca los puntos numerados para explorar los materiales y técnicas detrás de la ORUM Authority Cap.
            </p>

            <ul className="space-y-3 mb-8">
              {hero.features.map((feat, i) => (
                <li key={feat} className="flex items-center gap-3 text-[14px] text-black/70">
                  <span className="w-5 h-5 border border-black/20 flex items-center justify-center text-[10px] font-bold shrink-0">
                    {i + 1}
                  </span>
                  {feat}
                </li>
              ))}
            </ul>

            <div className="flex gap-3">
              <Link
                href="/technology"
                className="inline-flex items-center justify-center bg-black text-white font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] h-[39px] px-7 rounded-[3px] hover:opacity-70 transition-opacity"
              >
                Ver Anatomía Completa
              </Link>
              <Link
                href="/products/cult-cap"
                className="inline-flex items-center justify-center border border-black text-black font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] h-[39px] px-7 rounded-[3px] hover:bg-black hover:text-white transition-all"
              >
                Ver Producto
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
