"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { fitStyles, recommendFit } from "@/lib/data/fitGuide";

export default function FitGuidePage() {
  const [cm, setCm] = useState("");
  const [active, setActive] = useState<number | null>(null);

  const recommended =
    cm && !isNaN(Number(cm)) ? fitStyles.indexOf(recommendFit(Number(cm))) : null;

  return (
    <div className="max-w-[1220px] mx-auto px-4 lg:px-6 py-14">
      {/* Header */}
      <div className="border-b border-[#707070] pb-8 mb-12">
        <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
          Encuentra tu fit perfecto
        </p>
        <h1 className="font-[family-name:var(--font-montserrat)] text-[32px] font-black uppercase tracking-tight text-black mb-4">
          Guía de Fits
        </h1>
        <p className="text-[14px] text-black/60 max-w-xl leading-relaxed">
          Cada gorra CROWNLESS CULT tiene una horma diseñada para una experiencia específica.
          Mide tu cabeza e ingresa tu circunferencia para obtener una recomendación personalizada.
        </p>
      </div>

      {/* How to measure */}
      <div className="bg-[#f5f5f5] p-8 mb-12 max-w-2xl">
        <h2 className="font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[0.15em] text-black mb-3">
          Cómo medir tu cabeza
        </h2>
        <p className="text-[14px] text-black/60 leading-relaxed mb-5">
          Enrolla una cinta métrica alrededor de tu cabeza, justo un dedo por encima de las orejas
          y las cejas. Esa es tu circunferencia en centímetros.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <label className="text-[12px] text-black/50 whitespace-nowrap">
            Mi circunferencia:
          </label>
          <input
            type="number"
            min={50}
            max={70}
            placeholder="ej. 58 cm"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            className="w-32 bg-white border border-[#707070] text-center text-[14px] text-black py-2.5 px-4 focus:outline-none focus:border-black"
          />
          {recommended !== null && (
            <p className="text-[14px] text-black">
              Recomendada:{" "}
              <span className="font-bold">{fitStyles[recommended].name}</span>
            </p>
          )}
        </div>
      </div>

      {/* Fit cards */}
      <div className="space-y-0 mb-14">
        {fitStyles.map((fit, i) => (
          <div
            key={fit.id}
            className={`border-b border-[#e4e4e4] transition-all overflow-hidden ${recommended === i ? "border-l-2 border-l-black" : ""}`}
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-0 text-left hover:bg-[#fafafa] transition-colors"
            >
              {/* Image */}
              <div className="relative h-44 md:h-auto overflow-hidden bg-[#f5f5f5]">
                <Image
                  src={fit.image}
                  alt={fit.name}
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {recommended === i && (
                  <span className="absolute top-3 left-3 text-[10px] tracking-[0.15em] uppercase bg-black text-white px-2 py-1 font-bold">
                    Recomendada
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="col-span-2 p-6 md:p-8">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <span className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize block mb-1">
                      {fit.tag}
                    </span>
                    <h3 className="font-[family-name:var(--font-montserrat)] text-[20px] font-black uppercase tracking-tight text-black">
                      {fit.name}
                    </h3>
                  </div>
                  <span className="text-black/40 text-lg mt-1 shrink-0 ml-4">
                    {active === i ? "−" : "+"}
                  </span>
                </div>
                <p className="text-[14px] text-black/60 leading-relaxed mb-1">
                  {fit.description}
                </p>
                <p className="text-[12px] text-black/40">{fit.bestFor}</p>

                {active === i && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-[13px] text-left">
                      <thead>
                        <tr className="border-b border-[#e4e4e4]">
                          <th className="pb-2 text-[11px] text-black/40 tracking-[0.12em] uppercase font-normal pr-6">Medida</th>
                          {["S", "Clásico", "XL"].map((s) => (
                            <th key={s} className="pb-2 text-[11px] text-black/40 tracking-[0.12em] uppercase font-normal pr-6">{s}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {fit.measurements.map((m) => (
                          <tr key={m.label} className="border-b border-[#f0f0f0]">
                            <td className="py-2.5 text-black/60 pr-6">{m.label}</td>
                            <td className="py-2.5 text-black pr-6">{m.small}</td>
                            <td className="py-2.5 text-black pr-6">{m.classic}</td>
                            <td className="py-2.5 text-black pr-6">{m.xl}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {fit.products[0] !== "Próximamente en DROP 002" && (
                      <div className="mt-5">
                        <Link
                          href="/collections"
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] bg-black text-white px-7 py-3 rounded-[3px] hover:opacity-70 transition-opacity"
                        >
                          Comprar {fit.name} →
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
