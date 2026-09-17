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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-3">
          ✦ Encuentra tu fit perfecto
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-black tracking-[0.06em] uppercase text-[#E8E3D9] mb-4">
          Guía de Fits
        </h1>
        <p className="text-sm text-[#E8E3D9]/60 max-w-xl mx-auto leading-relaxed">
          Cada gorra CROWNLESS CULT tiene una horma diseñada para una experiencia específica.
          Mide tu cabeza e ingresa tu circunferencia para obtener una recomendación personalizada.
        </p>
      </div>

      {/* How to measure */}
      <div className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 mb-12 max-w-2xl mx-auto">
        <h2 className="text-sm font-bold tracking-[0.2em] uppercase text-[#E8E3D9] mb-4">
          Cómo medir tu cabeza
        </h2>
        <p className="text-sm text-[#E8E3D9]/70 leading-relaxed mb-4">
          Enrolla una cinta métrica alrededor de tu cabeza, justo un dedo por encima de las orejas
          y las cejas. Esa es tu circunferencia de cabeza en centímetros.
        </p>

        {/* Finder */}
        <div className="flex flex-col sm:flex-row gap-3 items-start sm:items-center">
          <label className="text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/50 whitespace-nowrap">
            Mi circunferencia:
          </label>
          <input
            type="number"
            min={50}
            max={70}
            placeholder="ej. 58 cm"
            value={cm}
            onChange={(e) => setCm(e.target.value)}
            className="w-32 bg-[#0B0B0B] border border-[#3A3A3A] text-center text-sm text-[#E8E3D9] py-3 px-4 focus:outline-none focus:border-[#E8E3D9]/50"
          />
          {recommended !== null && (
            <p className="text-sm text-[#E8E3D9]">
              Recomendada:{" "}
              <span className="font-bold">{fitStyles[recommended].name}</span>
            </p>
          )}
        </div>
      </div>

      {/* Fit cards */}
      <div className="space-y-6 mb-16">
        {fitStyles.map((fit, i) => (
          <div
            key={fit.id}
            className={`border transition-all overflow-hidden ${
              recommended === i
                ? "border-[#E8E3D9]/40"
                : "border-[#2A2A2A]"
            }`}
          >
            <button
              onClick={() => setActive(active === i ? null : i)}
              className="w-full grid grid-cols-1 md:grid-cols-3 gap-0"
            >
              {/* Image */}
              <div className="relative h-48 md:h-auto">
                <Image
                  src={fit.image}
                  alt={fit.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0B0B]/80 md:bg-none" />
                {recommended === i && (
                  <span className="absolute top-3 left-3 text-[9px] tracking-[0.2em] uppercase bg-[#E8E3D9] text-[#0B0B0B] px-2 py-1 font-bold">
                    Recomendada
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="col-span-2 text-left p-6 md:p-8">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <span className="text-[9px] tracking-[0.2em] uppercase text-[#E8E3D9]/40 block mb-1">
                      {fit.tag}
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-[0.06em] uppercase text-[#E8E3D9]">
                      {fit.name}
                    </h3>
                  </div>
                  <span className="text-[#E8E3D9]/40 text-lg mt-1">
                    {active === i ? "−" : "+"}
                  </span>
                </div>
                <p className="text-sm text-[#E8E3D9]/60 leading-relaxed mb-2">
                  {fit.description}
                </p>
                <p className="text-xs text-[#E8E3D9]/40">{fit.bestFor}</p>

                {/* Measurement table */}
                {active === i && (
                  <div className="mt-6 overflow-x-auto">
                    <table className="w-full text-xs text-left">
                      <thead>
                        <tr className="border-b border-[#2A2A2A]">
                          <th className="pb-2 text-[#E8E3D9]/40 tracking-[0.15em] uppercase font-normal pr-6">
                            Medida
                          </th>
                          {["S", "Clásico", "XL"].map((s) => (
                            <th key={s} className="pb-2 text-[#E8E3D9]/40 tracking-[0.15em] uppercase font-normal pr-6">
                              {s}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {fit.measurements.map((m) => (
                          <tr key={m.label} className="border-b border-[#2A2A2A]/50">
                            <td className="py-2.5 text-[#E8E3D9]/70 pr-6">{m.label}</td>
                            <td className="py-2.5 text-[#E8E3D9] pr-6">{m.small}</td>
                            <td className="py-2.5 text-[#E8E3D9] pr-6">{m.classic}</td>
                            <td className="py-2.5 text-[#E8E3D9] pr-6">{m.xl}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>

                    {fit.products[0] !== "Próximamente en DROP 002" && (
                      <div className="mt-4">
                        <Link
                          href={`/collections`}
                          onClick={(e) => e.stopPropagation()}
                          className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#E8E3D9] border border-[#E8E3D9]/30 px-6 py-2.5 hover:bg-[#E8E3D9] hover:text-[#0B0B0B] transition-all"
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
