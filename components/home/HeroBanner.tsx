"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

export function HeroBanner() {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden bg-[#0B0B0B]">
      {/* Background texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1542361345-89e58247f2d5?q=20&w=1920&auto=format&fit=crop")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0B0B0B]/40 via-transparent to-[#0B0B0B]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-[10px] tracking-[0.4em] uppercase text-[#E8E3D9]/50 mb-6"
        >
          ✦ EST. MMXXVI — Medellín, Colombia ✦
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-display text-5xl sm:text-7xl md:text-8xl font-black tracking-[0.04em] uppercase leading-none text-[#E8E3D9] mb-4"
        >
          CROWNLESS
          <br />
          <span className="text-[#E8E3D9]/90">CULT</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-16 h-px bg-[#E8E3D9]/30 mx-auto my-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[11px] tracking-[0.35em] uppercase text-[#E8E3D9]/60 mb-10"
        >
          DROP 001 — COLECCIÓN ORUM — BORN TO RULE
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            href="/collections"
            className="inline-block bg-[#E8E3D9] text-[#0B0B0B] px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-colors"
          >
            Comprar Drop 001
          </Link>
          <Link
            href="/fit-guide"
            className="inline-block border border-[#E8E3D9]/40 text-[#E8E3D9] px-10 py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:border-[#E8E3D9] hover:bg-[#E8E3D9]/5 transition-all"
          >
            Guía de Fits
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          className="w-px h-10 bg-[#E8E3D9]/20"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        />
      </motion.div>
    </section>
  );
}
