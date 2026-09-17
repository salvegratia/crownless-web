"use client";

import { useState } from "react";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  return (
    <section className="py-14 lg:py-20 bg-[#ededed]">
      <div className="max-w-[1220px] mx-auto px-4 lg:px-6">
        <div className="max-w-[640px] mx-auto text-center">
          <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-3">
            Sé el primero
          </p>
          <h2 className="font-[family-name:var(--font-montserrat)] text-[26px] lg:text-[32px] font-black uppercase tracking-tight mb-3">
            Únete al CULT Club
          </h2>
          <p className="text-[14px] text-black/60 mb-7">
            Acceso anticipado al DROP 001 — 40 unidades limitadas.
            <br />Sin spam. Solo lo esencial.
          </p>

          {done ? (
            <p className="text-[14px] font-semibold text-black">¡Estás dentro! Te avisamos primero. ✓</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setDone(true); }}
              className="flex gap-0 max-w-sm mx-auto"
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 border border-[#707070] border-r-0 bg-white px-4 py-3 text-[14px] focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                className="bg-black text-white font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] px-6 py-3 hover:opacity-70 transition-opacity whitespace-nowrap rounded-r-[3px]"
              >
                Suscribirse
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
