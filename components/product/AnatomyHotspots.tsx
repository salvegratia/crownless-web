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

  return (
    <div className="bg-[#f5f5f5] p-6 sm:p-8 lg:p-10">
      <div className="mb-6">
        <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-1">
          Anatomía & Tecnología
        </p>
        <h2 className="font-[family-name:var(--font-montserrat)] text-[22px] font-black uppercase tracking-tight">
          Disección: {name}
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image with hotspots */}
        <div className="relative bg-white aspect-[4/3] overflow-hidden">
          <Image src={image} alt={name} fill className="object-cover object-top" sizes="(max-width: 768px) 100vw, 40vw" />

          {hotspots.map((spot, i) => (
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
        </div>

        {/* List */}
        <div className="space-y-0">
          {hotspots.map((spot, i) => (
            <button
              key={spot.id}
              onClick={() => setActive(active === spot.id ? null : spot.id)}
              className={`w-full text-left p-4 border-b border-[#e4e4e4] transition-all hover:bg-white/50 ${active === spot.id ? "bg-white" : ""}`}
            >
              <div className="flex items-start gap-3">
                <span className={`shrink-0 w-6 h-6 flex items-center justify-center text-[10px] font-bold rounded-full border transition-all ${active === spot.id ? "bg-black border-black text-white" : "border-[#707070] text-black/50"}`}>
                  {i + 1}
                </span>
                <div>
                  <p className="text-[13px] font-bold text-black">{spot.label}</p>
                  <AnimatePresence>
                    {active === spot.id && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-[13px] text-black/60 leading-relaxed overflow-hidden mt-1"
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
