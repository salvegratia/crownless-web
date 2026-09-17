"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function CultClubPage() {
  const [form, setForm] = useState({ nombre: "", email: "", ciudad: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.nombre && form.email) setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center py-24 px-4 relative">
        {/* Grid background */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, #E8E3D9 0px, #E8E3D9 1px, transparent 1px, transparent 60px), repeating-linear-gradient(90deg, #E8E3D9 0px, #E8E3D9 1px, transparent 1px, transparent 60px)`,
          }}
        />

        <div className="relative z-10 max-w-lg mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-[10px] tracking-[0.5em] uppercase text-[#E8E3D9]/40 mb-6">
              ✦ Acceso Privado ✦
            </p>
            <h1 className="font-display text-4xl sm:text-5xl font-black tracking-[0.04em] uppercase text-[#E8E3D9] mb-4 leading-none">
              CULT CLUB
            </h1>
            <div className="w-12 h-px bg-[#E8E3D9]/30 mx-auto my-6" />
            <p className="text-sm text-[#E8E3D9]/60 mb-2 leading-relaxed">
              El DROP 001 — Colección ORUM está a punto de salir.
              <br />
              <strong className="text-[#E8E3D9]">40 unidades.</strong> Sin reposición.
            </p>
            <p className="text-xs text-[#E8E3D9]/40 tracking-[0.15em] uppercase mb-10">
              Si sabes, sabes.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#1A1A1A] border border-[#E8E3D9]/20 p-10"
            >
              <p className="text-[10px] tracking-[0.4em] uppercase text-[#E8E3D9]/40 mb-3">
                ✦ Bienvenido al Culto
              </p>
              <h2 className="font-display text-2xl font-bold tracking-[0.06em] uppercase text-[#E8E3D9] mb-3">
                Estás dentro.
              </h2>
              <p className="text-sm text-[#E8E3D9]/60">
                Te avisaremos antes que nadie cuando el DROP 001 esté disponible.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-[#1A1A1A] border border-[#2A2A2A] p-8 space-y-4 text-left"
            >
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/50 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-sm text-[#E8E3D9] placeholder-[#E8E3D9]/30 focus:outline-none focus:border-[#E8E3D9]/50"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-sm text-[#E8E3D9] placeholder-[#E8E3D9]/30 focus:outline-none focus:border-[#E8E3D9]/50"
                />
              </div>
              <div>
                <label className="block text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/50 mb-2">
                  Ciudad{" "}
                  <span className="text-[#E8E3D9]/30 normal-case">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Medellín, Bogotá..."
                  value={form.ciudad}
                  onChange={(e) => setForm((f) => ({ ...f, ciudad: e.target.value }))}
                  className="w-full bg-[#0B0B0B] border border-[#3A3A3A] px-4 py-3 text-sm text-[#E8E3D9] placeholder-[#E8E3D9]/30 focus:outline-none focus:border-[#E8E3D9]/50"
                />
              </div>
              <button
                type="submit"
                className="w-full bg-[#E8E3D9] text-[#0B0B0B] py-4 text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-white transition-colors mt-2"
              >
                Unirme al Culto
              </button>
            </motion.form>
          )}

          {/* Footer note */}
          <p className="text-[10px] text-[#E8E3D9]/25 mt-6 tracking-[0.08em]">
            No spam. Solo acceso privado cuando el DROP esté listo.
          </p>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-[#111111] border-t border-[#2A2A2A] py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-center font-display text-xl font-bold tracking-[0.1em] uppercase text-[#E8E3D9] mb-10">
            ¿Qué reciben los miembros?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {[
              {
                icon: "⚡",
                title: "Acceso Anticipado",
                desc: "Los miembros del CULT CLUB tienen 24 horas de ventaja antes del lanzamiento público.",
              },
              {
                icon: "✦",
                title: "Ediciones Exclusivas",
                desc: "Algunos drops solo estarán disponibles para los miembros. Sin excepción.",
              },
              {
                icon: "⬛",
                title: "Detrás del Proceso",
                desc: "Acceso al proceso de creación: desde el brief hasta la gorra en mano.",
              },
            ].map((b) => (
              <div key={b.title} className="text-center">
                <p className="text-2xl mb-3">{b.icon}</p>
                <h3 className="text-sm font-bold tracking-[0.15em] uppercase text-[#E8E3D9] mb-2">
                  {b.title}
                </h3>
                <p className="text-xs text-[#E8E3D9]/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
