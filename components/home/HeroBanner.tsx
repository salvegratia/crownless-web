"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroBanner() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Landscape hero (desktop) */}
      <div className="hidden lg:block relative aspect-[2/1]">
        <Image
          src="/gorras/gorra2_01.jpg"
          alt="CROWNLESS — DROP 001 · Gorra 2"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/20 to-transparent" />

        {/* Text overlay — left aligned */}
        <div className="absolute inset-0 flex items-center">
          <div className="pl-[8%] max-w-xl">
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/70 text-[11px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.3em] mb-3"
            >
              Drop 001 · Colección ORUM
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="font-[family-name:var(--font-montserrat)] text-white text-[56px] xl:text-[66px] font-black uppercase leading-none tracking-tight mb-5"
            >
              Crownless
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-white/80 text-[15px] mb-7 leading-relaxed"
            >
              Headwear de lujo urbano desde Medellín.<br />40 unidades. Sin reposición.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3"
            >
              <Link
                href="/collections"
                className="inline-flex items-center justify-center bg-white text-black font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] h-[52px] px-10 rounded-[3px] hover:bg-white/90 transition-colors"
              >
                Comprar ahora
              </Link>
              <Link
                href="/fit-guide"
                className="inline-flex items-center justify-center bg-transparent text-white font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] h-[52px] px-8 border-2 border-white rounded-[3px] hover:bg-white hover:text-black transition-all"
              >
                Guía de Fits
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Portrait hero (mobile) */}
      <div className="lg:hidden relative aspect-[3/4]">
        <Image
          src="/gorras/gorra2_01.jpg"
          alt="CROWNLESS"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-white/60 text-[10px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.25em] mb-2">
            Drop 001 · Colección ORUM
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-white text-[38px] font-black uppercase leading-none tracking-tight mb-4">
            Crownless<br />Cult
          </h1>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center bg-white text-black font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] h-[44px] px-7 rounded-[3px]"
          >
            Comprar ahora
          </Link>
        </div>
      </div>
    </section>
  );
}
