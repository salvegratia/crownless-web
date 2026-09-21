"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const slides = [
  {
    src: "/banner_hero.jpg",
    alt: "CROWNLESS — Ambas gorras",
    objectPosition: "center",
    isLogo: false,
  },
  {
    src: "/logo.jpg",
    alt: "CROWNLESS Logo",
    objectPosition: "center",
    isLogo: true,
  },
];

export function HeroBanner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ── Desktop 2:1 ── */}
      <div className="hidden lg:block relative aspect-[2/1]">

        {/* Slides — crossfade */}
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slide.isLogo ? (
              /* Slide de logo: fondo negro, logo centrado + texto */
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  width={320}
                  height={320}
                  className="w-[28vw] max-w-[364px] h-auto"
                  priority
                />
              </div>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover"
                style={{ objectPosition: slide.objectPosition }}
                priority={current === 0}
                sizes="100vw"
              />
            )}
          </motion.div>
        </AnimatePresence>

        {/* Gradient izquierdo permanente para texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/20 to-transparent pointer-events-none" />

        {/* Texto — siempre visible */}
        <div className="absolute inset-0 flex items-center pointer-events-none">
          <div className="pl-[6%] max-w-lg pointer-events-auto">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[#A5957F] text-[11px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.3em] mb-3"
            >
              Colección ORUM
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="font-[family-name:var(--font-montserrat)] text-[#A5957F] text-[38px] xl:text-[46px] font-black uppercase leading-none tracking-tight mb-5 whitespace-nowrap"
            >
              CROWNLESS CULT
            </motion.h1>
            <Link
              href="/collections"
              className="inline-flex items-center justify-center bg-white text-black font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] h-[52px] px-10 rounded-[3px] hover:bg-white/90 transition-colors"
            >
              Comprar ahora
            </Link>
          </div>
        </div>

        {/* Dots indicadores */}
        <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? "w-5 h-1.5 bg-white"
                  : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ── Mobile 3:4 ── */}
      <div className="lg:hidden relative aspect-[3/4]">
        <AnimatePresence mode="sync">
          <motion.div
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0"
          >
            {slide.isLogo ? (
              <div className="absolute inset-0 bg-black flex items-center justify-center">
                <Image src={slide.src} alt={slide.alt} width={200} height={200} className="w-[71vw] h-auto" />
              </div>
            ) : (
              <Image
                src={slide.src}
                alt={slide.alt}
                fill
                className="object-cover object-center"
                priority={current === 0}
                sizes="100vw"
              />
            )}
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent pointer-events-none" />

        <div className="absolute bottom-0 left-0 right-0 p-6">
          <p className="text-[#A5957F] text-[10px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.25em] mb-2">
            Colección ORUM
          </p>
          <h1 className="font-[family-name:var(--font-montserrat)] text-[#A5957F] text-[28px] font-black uppercase leading-none tracking-tight mb-4 whitespace-nowrap">
            CROWNLESS CULT
          </h1>
          <Link
            href="/collections"
            className="inline-flex items-center justify-center bg-white text-black font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] h-[44px] px-7 rounded-[3px]"
          >
            Comprar ahora
          </Link>
        </div>

        {/* Dots mobile */}
        <div className="absolute bottom-[140px] left-1/2 -translate-x-1/2 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current ? "w-5 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
