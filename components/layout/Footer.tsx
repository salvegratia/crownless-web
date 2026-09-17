"use client";

import Link from "next/link";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const links = {
    "Tienda": [
      { label: "Todos los Productos", href: "/collections" },
      { label: "ORUM Authority Cap", href: "/products/orum-authority-cap" },
      { label: "Monogram 3D Cap", href: "/products/monogram-3d-cap" },
      { label: "Próximamente", href: "#" },
    ],
    "Explorar": [
      { label: "Guía de Fits", href: "/fit-guide" },
      { label: "Anatomía & Tech", href: "/technology" },
      { label: "CULT Club", href: "/cult-club" },
      { label: "Sobre la Marca", href: "#" },
    ],
    "Ayuda": [
      { label: "Preguntas Frecuentes", href: "#" },
      { label: "Envíos", href: "#" },
      { label: "Devoluciones", href: "#" },
      { label: "Contacto", href: "#" },
    ],
  };

  return (
    <footer className="bg-black text-white">
      {/* Newsletter row */}
      <div className="border-b border-white/10 px-4 lg:px-8 py-10 lg:py-14">
        <div className="max-w-[1220px] mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div>
            <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[0.2em] text-white/60 mb-1">
              Únete al CULT Club
            </p>
            <p className="text-[15px] font-medium text-white/90">
              Acceso anticipado al DROP 001 — 40 unidades.
            </p>
          </div>
          {submitted ? (
            <p className="text-[13px] text-white/70">¡Estás dentro del Culto ✓</p>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex gap-0 w-full lg:w-auto lg:min-w-[340px]"
            >
              <input
                type="email"
                required
                placeholder="tu@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/10 border border-white/20 border-r-0 px-4 py-3 text-[14px] text-white placeholder-white/40 focus:outline-none focus:border-white/50"
              />
              <button
                type="submit"
                className="bg-white text-black font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.3px] px-5 py-3 hover:bg-white/90 transition-colors whitespace-nowrap rounded-r-[3px]"
              >
                Suscribirse
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Links grid */}
      <div className="max-w-[1220px] mx-auto px-4 lg:px-8 py-10 lg:py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <Link href="/" className="font-[family-name:var(--font-montserrat)] text-[15px] font-black uppercase tracking-[0.06em] text-white mb-3 block hover:opacity-70 transition-opacity">
            Crownless
          </Link>
          <p className="text-[13px] text-white/50 leading-relaxed">
            Headwear de lujo urbano.<br />Medellín, Colombia.<br />EST. MMXXVI
          </p>
          <a
            href="https://instagram.com/crownless.cult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 text-[12px] text-white/50 hover:text-white transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @crownless.cult
          </a>
        </div>

        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <p className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[0.18em] text-white/40 mb-4">
              {group}
            </p>
            <ul className="space-y-2.5">
              {items.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[13px] text-white/70 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Credits */}
      <div className="border-t border-white/10 px-4 lg:px-8 py-4">
        <div className="max-w-[1220px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[12px] text-white/30">© 2026 Crownless. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            {["Privacidad", "Términos"].map((t) => (
              <a key={t} href="#" className="text-[12px] text-white/30 hover:text-white/60 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
