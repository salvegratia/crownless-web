"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fitStyles } from "@/lib/data/fitGuide";

export function FitGuideSection() {
  const [activeInput, setActiveInput] = useState("");

  const recommendedIdx = activeInput
    ? Number(activeInput) <= 57 ? 1 : Number(activeInput) >= 63 ? 2 : 0
    : null;

  return (
    <section className="py-12 lg:py-16 bg-[#f5f5f5]">
      <div className="max-w-[1220px] mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
            Encuentra tu fit perfecto
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[26px] font-black uppercase tracking-tight mb-4">
            Guía de Fits
          </h2>
          <p className="text-[14px] text-black/60 max-w-md mx-auto">
            Cada horma está diseñada para una experiencia específica.
          </p>
        </div>

        {/* Quick finder */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-10">
          <label className="text-[12px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] text-black/60">
            Circunferencia (cm):
          </label>
          <input
            type="number"
            min={50}
            max={70}
            placeholder="ej. 58"
            value={activeInput}
            onChange={(e) => setActiveInput(e.target.value)}
            className="w-20 border border-[#707070] bg-white text-center text-[14px] py-2 px-3 focus:outline-none focus:border-black"
          />
          {activeInput && recommendedIdx !== null && (
            <span className="text-[13px] text-black/70">
              → <strong>{fitStyles[recommendedIdx].name}</strong> recomendada
            </span>
          )}
        </div>

        {/* Style cards — 3 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[14px]">
          {fitStyles.map((fit, i) => (
            <div
              key={fit.id}
              className={`bg-white group overflow-hidden ${recommendedIdx === i ? "ring-2 ring-black" : ""}`}
            >
              {/* Image */}
              <div className="relative" style={{ paddingBottom: "100%" }}>
                {fit.image ? (
                  <Image
                    src={fit.image}
                    alt={fit.name}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-300"
                    sizes="(max-width: 640px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#111]" />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <p className="text-white text-[10px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] mb-1 opacity-70">
                    {fit.tag}
                  </p>
                  <h3 className="text-white font-[family-name:var(--font-montserrat)] text-[16px] font-black uppercase">
                    {fit.name}
                  </h3>
                  <Link
                    href="/fit-guide"
                    className="inline-block mt-3 bg-white text-black font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.3px] px-5 py-1.5 rounded-[3px] hover:bg-black hover:text-white transition-all w-4/5"
                  >
                    Ver detalles
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
