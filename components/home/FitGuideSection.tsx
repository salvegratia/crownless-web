"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fitStyles } from "@/lib/data/fitGuide";

export function FitGuideSection() {
  const [active, setActive] = useState(0);
  const [cm, setCm] = useState("");

  const recommended = cm
    ? Number(cm) <= 57
      ? 1
      : Number(cm) >= 63
      ? 2
      : 0
    : null;

  return (
    <section className="py-20 px-4 bg-[#111111]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-3">
            ✦ Elige tu horma
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-[0.08em] uppercase text-[#E8E3D9] mb-4">
            Guía de Fits
          </h2>
          <p className="text-sm text-[#E8E3D9]/60 max-w-xl mx-auto leading-relaxed">
            Cada gorra CROWNLESS CULT está diseñada para una experiencia específica.
            Encuentra tu horma perfecta.
          </p>
        </div>

        {/* Circumference input */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-12">
          <label className="text-[11px] tracking-[0.15em] uppercase text-[#E8E3D9]/60">
            Tu circunferencia (cm):
          </label>
          <input
            type="number"
            min={50}
            max={70}
            placeholder="ej. 58"
            value={cm}
            onChange={(e) => { setCm(e.target.value); setActive(Number(e.target.value) <= 57 ? 1 : Number(e.target.value) >= 63 ? 2 : 0); }}
            className="w-24 bg-transparent border border-[#3A3A3A] text-center text-sm text-[#E8E3D9] py-2 px-3 focus:outline-none focus:border-[#E8E3D9]/50"
          />
          {cm && recommended !== null && (
            <span className="text-xs text-[#E8E3D9]/70">
              → Recomendada:{" "}
              <span className="text-[#E8E3D9] font-semibold">{fitStyles[recommended].name}</span>
            </span>
          )}
        </div>

        {/* Fit cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {fitStyles.map((fit, i) => (
            <button
              key={fit.id}
              onClick={() => setActive(i)}
              className={`text-left bg-[#1A1A1A] border transition-all overflow-hidden group ${
                active === i || recommended === i
                  ? "border-[#E8E3D9]/40"
                  : "border-[#2A2A2A] hover:border-[#E8E3D9]/20"
              }`}
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={fit.image}
                  alt={fit.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent" />
                <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase bg-[#0B0B0B]/80 text-[#E8E3D9]/70 px-2 py-1">
                  {fit.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-sm font-bold tracking-[0.1em] uppercase text-[#E8E3D9] mb-2">
                  {fit.name}
                </h3>
                <p className="text-xs text-[#E8E3D9]/60 leading-relaxed mb-3">{fit.description}</p>
                <p className="text-[10px] text-[#E8E3D9]/40 tracking-[0.05em]">{fit.bestFor}</p>
              </div>
            </button>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/fit-guide"
            className="inline-block text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors border-b border-[#E8E3D9]/20 hover:border-[#E8E3D9]/50 pb-0.5"
          >
            Ver Guía Completa de Fits →
          </Link>
        </div>
      </div>
    </section>
  );
}
