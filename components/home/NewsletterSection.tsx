"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-24 px-4 bg-[#1A1A1A] relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `repeating-linear-gradient(0deg, #E8E3D9 0px, #E8E3D9 1px, transparent 1px, transparent 80px), repeating-linear-gradient(90deg, #E8E3D9 0px, #E8E3D9 1px, transparent 1px, transparent 80px)`,
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <p className="text-[10px] tracking-[0.4em] uppercase text-[#E8E3D9]/40 mb-4">
          ✦ CULT CLUB ✦
        </p>
        <h2 className="font-display text-3xl md:text-4xl font-black tracking-[0.06em] uppercase text-[#E8E3D9] mb-4">
          Únete al Culto
        </h2>
        <p className="text-sm text-[#E8E3D9]/60 mb-2 leading-relaxed">
          Acceso privado al DROP 001 antes que nadie.
        </p>
        <p className="text-xs text-[#E8E3D9]/40 mb-10 tracking-[0.1em] uppercase">
          40 unidades. Sin reposición. Si sabes, sabes.
        </p>

        {submitted ? (
          <div className="py-6">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/60 mb-2">
              ✦ Bienvenido al Culto
            </p>
            <p className="font-display text-xl font-bold text-[#E8E3D9]">
              Estás dentro.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-0 max-w-sm mx-auto">
            <input
              type="email"
              required
              placeholder="tu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-[#0B0B0B] border border-[#3A3A3A] border-r-0 px-4 py-4 text-sm text-[#E8E3D9] placeholder-[#E8E3D9]/30 focus:outline-none focus:border-[#E8E3D9]/40"
            />
            <button
              type="submit"
              className="bg-[#E8E3D9] text-[#0B0B0B] px-6 py-4 text-[10px] font-bold tracking-[0.25em] uppercase hover:bg-white transition-colors whitespace-nowrap"
            >
              Entrar
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
