"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Hotspot } from "@/lib/data/products";

interface AnatomyHotspotsProps {
  image: string;
  name: string;
  hotspots: Hotspot[];
}

export function AnatomyHotspots({ image, name, hotspots }: AnatomyHotspotsProps) {
  const [active, setActive] = useState<string | null>(null);

  const activeHotspot = hotspots.find((h) => h.id === active);

  return (
    <div className="bg-[#111111] border border-[#2A2A2A] p-6 sm:p-8">
      <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-2">
        ✦ Anatomía & Tecnología
      </p>
      <h2 className="font-display text-lg font-bold tracking-[0.08em] uppercase text-[#E8E3D9] mb-6">
        Disección de la {name}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image with hotspots */}
        <div className="relative aspect-[4/3] bg-[#1A1A1A] overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 40vw"
          />
          <div className="absolute inset-0 bg-[#0B0B0B]/20" />

          {hotspots.map((spot, i) => (
            <button
              key={spot.id}
              onClick={() => setActive(active === spot.id ? null : spot.id)}
              style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
            >
              <span
                className={`flex items-center justify-center w-8 h-8 rounded-full border-2 transition-all text-xs font-bold ${
                  active === spot.id
                    ? "bg-[#E8E3D9] border-[#E8E3D9] text-[#0B0B0B]"
                    : "bg-[#0B0B0B]/70 border-[#E8E3D9]/70 text-[#E8E3D9]"
                }`}
                style={
                  active !== spot.id
                    ? { animation: "pulse-ring 2s ease-out infinite" }
                    : {}
                }
              >
                {i + 1}
              </span>
            </button>
          ))}
        </div>

        {/* Hotspot list */}
        <div className="space-y-1">
          {hotspots.map((spot, i) => (
            <button
              key={spot.id}
              onClick={() => setActive(active === spot.id ? null : spot.id)}
              className={`w-full text-left p-4 border transition-all ${
                active === spot.id
                  ? "border-[#E8E3D9]/30 bg-[#E8E3D9]/5"
                  : "border-[#2A2A2A] hover:border-[#E8E3D9]/20"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`shrink-0 w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded-full border ${
                    active === spot.id
                      ? "bg-[#E8E3D9] border-[#E8E3D9] text-[#0B0B0B]"
                      : "border-[#3A3A3A] text-[#E8E3D9]/50"
                  }`}
                >
                  {i + 1}
                </span>
                <div>
                  <p className="text-xs font-semibold tracking-[0.1em] uppercase text-[#E8E3D9] mb-1">
                    {spot.label}
                  </p>
                  <AnimatePresence>
                    {active === spot.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-xs text-[#E8E3D9]/60 leading-relaxed overflow-hidden"
                      >
                        {spot.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
