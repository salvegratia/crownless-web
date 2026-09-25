"use client";

import Link from "next/link";

const GOLD = "#B5A48A";

export function HeroBanner() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{ background: "#000000", minHeight: "40vh" }}
    >
      <div className="relative z-10 flex flex-col items-center gap-4 px-4">
        <p
          className="font-[family-name:var(--font-montserrat)] text-[10px] font-black uppercase tracking-[0.35em]"
          style={{ color: `${GOLD}99` }}
        >
          Medellín, Colombia · EST. MMXXVI
        </p>
        <h1
          className="font-[family-name:var(--font-montserrat)] text-[32px] sm:text-[48px] lg:text-[64px] xl:text-[72px] font-black uppercase tracking-tight leading-none whitespace-nowrap"
          style={{ color: GOLD }}
        >
          CROWNLESS CULT
        </h1>
        <p
          className="text-[13px] max-w-[360px] leading-relaxed"
          style={{ color: `${GOLD}80` }}
        >
          Headwear de lujo urbano. Para quien entiende que la autoridad no necesita anunciarse.
        </p>
        <div className="flex gap-4 mt-2">
          <Link
            href="/collections"
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.8px] px-8 py-3 transition-all hover:opacity-80"
            style={{ background: GOLD, color: "#000000" }}
          >
            Ver Colección
          </Link>
          <Link
            href="/collections"
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.8px] px-8 py-3 transition-all hover:opacity-80"
            style={{ background: "#000000", color: GOLD, border: `1px solid ${GOLD}` }}
          >
            Cult Club
          </Link>
        </div>
      </div>
    </section>
  );
}
