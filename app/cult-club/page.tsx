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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Hero */}
      <section className="flex-1 flex items-center justify-center py-20 px-4 bg-[#f5f5f5]">
        <div className="w-full max-w-[500px]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-4">
              Acceso Privado
            </p>
            <h1 className="font-[family-name:var(--font-montserrat)] text-[46px] sm:text-[54px] font-black uppercase tracking-tight text-black leading-none mb-5">
              CULT CLUB
            </h1>
            <div className="w-10 h-px bg-[#707070] mx-auto my-5" />
            <p className="text-[14px] text-black/60 mb-2 leading-relaxed">
              La Colección ORUM está a punto de salir.
            </p>
            <p className="text-[12px] text-black/40 tracking-[0.12em] uppercase">
              Si sabes, sabes.
            </p>
          </motion.div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-[#e4e4e4] p-10 text-center"
            >
              <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-3">
                Bienvenido al Culto
              </p>
              <h2 className="font-[family-name:var(--font-montserrat)] text-[24px] font-black uppercase tracking-tight text-black mb-3">
                Estás dentro.
              </h2>
              <p className="text-[14px] text-black/60">
                Te avisaremos antes que nadie cuando esté disponible.
              </p>
            </motion.div>
          ) : (
            <motion.form
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              onSubmit={handleSubmit}
              className="bg-white border border-[#e4e4e4] p-8 space-y-4"
            >
              <div>
                <label className="block text-[11px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] text-black/50 mb-2">
                  Nombre
                </label>
                <input
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.nombre}
                  onChange={(e) => setForm((f) => ({ ...f, nombre: e.target.value }))}
                  className="w-full bg-white border border-[#707070] px-4 py-3 text-[14px] text-black placeholder-black/30 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[11px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] text-black/50 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full bg-white border border-[#707070] px-4 py-3 text-[14px] text-black placeholder-black/30 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-[11px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] text-black/50 mb-2">
                  Ciudad{" "}
                  <span className="text-black/30 normal-case font-normal">(opcional)</span>
                </label>
                <input
                  type="text"
                  placeholder="Medellín, Bogotá..."
                  value={form.ciudad}
                  onChange={(e) => setForm((f) => ({ ...f, ciudad: e.target.value }))}
                  className="w-full bg-white border border-[#707070] px-4 py-3 text-[14px] text-black placeholder-black/30 focus:outline-none focus:border-black"
                />
              </div>
              <button
                type="submit"
                className="w-full font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] bg-black text-[#A5957F] py-4 rounded-[3px] hover:opacity-70 transition-opacity mt-2"
              >
                Unirme al Culto
              </button>
            </motion.form>
          )}

          <p className="text-[11px] text-black/25 mt-5 text-center tracking-[0.08em]">
            No spam. Solo acceso privado cuando el DROP esté listo.
          </p>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white border-t border-[#e4e4e4] py-16 px-4">
        <div className="max-w-[900px] mx-auto">
          <h2 className="font-[family-name:var(--font-montserrat)] text-[18px] font-black uppercase tracking-tight text-black text-center mb-12">
            ¿Qué reciben los miembros?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
            {[
              {
                num: "01",
                title: "Acceso Anticipado",
                desc: "Los miembros del CULT CLUB tienen 24 horas de ventaja antes del lanzamiento público.",
              },
              {
                num: "02",
                title: "Ediciones Exclusivas",
                desc: "Algunos drops solo estarán disponibles para los miembros. Sin excepción.",
              },
              {
                num: "03",
                title: "Detrás del Proceso",
                desc: "Acceso al proceso de creación: desde el brief hasta la gorra en mano.",
              },
            ].map((b) => (
              <div key={b.title} className="text-center">
                <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-black text-black/25 tracking-[0.2em] mb-3">{b.num}</p>
                <h3 className="font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[0.15em] text-black mb-3">
                  {b.title}
                </h3>
                <p className="text-[13px] text-black/50 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
