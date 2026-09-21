"use client";

import Image from "next/image";
import Link from "next/link";

export function HeroBanner() {
  return (
    <section
      className="relative w-full flex flex-col items-center justify-center text-center overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #8A8D93 0%, #C8CAD0 40%, #E8EAED 100%)",
        minHeight: "40vh",
      }}
    >
      {/* Grain texture overlay — sin blend mode para no alterar colores del contenido */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
          opacity: 0.12,
          zIndex: 0,
        }}
      />

      <div className="relative z-10 flex flex-col items-center">
        <div
          className="w-[110px] sm:w-[140px] lg:w-[175px] mb-5"
          style={{ filter: "drop-shadow(0 -4px 10px rgba(0,0,0,0.45)) drop-shadow(0 8px 20px rgba(0,0,0,0.15))" }}
        >
          <Image
            src="/logo_transparent.png"
            alt="CROWNLESS CULT"
            width={160}
            height={160}
            className="w-full h-auto"
            priority
          />
        </div>
        <h1 className="font-[family-name:var(--font-montserrat)] text-[28px] sm:text-[40px] lg:text-[52px] xl:text-[58px] font-black uppercase tracking-tight text-black leading-none mb-6 whitespace-nowrap" style={{ textShadow: "0 6px 14px rgba(0,0,0,0.22), 0 2px 4px rgba(0,0,0,0.14)" }}>
          CROWNLESS CULT
        </h1>
        <Link
          href="/collections"
          className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.8px] px-8 py-3 border border-black text-black hover:bg-black hover:text-white transition-all shadow-[0_8px_20px_rgba(0,0,0,0.28),0_3px_6px_rgba(0,0,0,0.16)]"
        >
          Ver Colección
        </Link>
      </div>
    </section>
  );
}
