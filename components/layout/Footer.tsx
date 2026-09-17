"use client";

import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#0B0B0B] border-t border-[#2A2A2A] mt-24">
      {/* Newsletter */}
      <div className="bg-[#1A1A1A] py-16 px-4">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/50 mb-3">
            ✦ CULT CLUB ✦
          </p>
          <h2 className="font-display text-2xl md:text-3xl font-bold tracking-[0.1em] uppercase text-[#E8E3D9] mb-4">
            Únete al Culto
          </h2>
          <p className="text-sm text-[#E8E3D9]/60 mb-8 leading-relaxed">
            Acceso privado al DROP 001 antes que nadie. 40 unidades. Sin reposición.
          </p>
          <form className="flex gap-0 max-w-sm mx-auto" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="tu@email.com"
              className="flex-1 bg-[#0B0B0B] border border-[#3A3A3A] border-r-0 px-4 py-3 text-sm text-[#E8E3D9] placeholder-[#E8E3D9]/30 focus:outline-none focus:border-[#E8E3D9]/50"
            />
            <button
              type="submit"
              className="bg-[#E8E3D9] text-[#0B0B0B] px-6 py-3 text-[10px] font-bold tracking-[0.2em] uppercase hover:bg-white transition-colors whitespace-nowrap"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>

      {/* Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E3D9]/40 mb-4">
            Tienda
          </p>
          <ul className="space-y-2.5">
            {[
              { label: "Colección DROP 001", href: "/collections" },
              { label: "ORUM Authority Cap", href: "/products/orum-authority-cap" },
              { label: "Monogram 3D Cap", href: "/products/monogram-3d-cap" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors tracking-[0.05em]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E3D9]/40 mb-4">
            Descubrir
          </p>
          <ul className="space-y-2.5">
            {[
              { label: "Guía de Fits", href: "/fit-guide" },
              { label: "Anatomía & Tech", href: "/technology" },
              { label: "CULT Club", href: "/cult-club" },
            ].map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-xs text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors tracking-[0.05em]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E3D9]/40 mb-4">
            Ayuda
          </p>
          <ul className="space-y-2.5">
            {[
              { label: "Preguntas Frecuentes", href: "#" },
              { label: "Envíos y Devoluciones", href: "#" },
              { label: "Guía de Tallas", href: "/fit-guide" },
              { label: "Contacto", href: "#" },
            ].map((l) => (
              <li key={l.label}>
                <Link
                  href={l.href}
                  className="text-xs text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors tracking-[0.05em]"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#E8E3D9]/40 mb-4">
            Marca
          </p>
          <p className="font-display text-lg font-bold tracking-[0.1em] uppercase text-[#E8E3D9] mb-2">
            CROWNLESS CULT
          </p>
          <p className="text-xs text-[#E8E3D9]/40 mb-4">
            EST. MMXXVI — Medellín, Colombia
          </p>
          <a
            href="https://instagram.com/crownless.cult"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            @crownless.cult
          </a>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-[#2A2A2A] px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-[10px] text-[#E8E3D9]/30 tracking-[0.1em]">
            © 2026 CROWNLESS CULT. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {["Política de Privacidad", "Términos de Servicio"].map((t) => (
              <a
                key={t}
                href="#"
                className="text-[10px] text-[#E8E3D9]/30 hover:text-[#E8E3D9]/60 transition-colors tracking-[0.08em]"
              >
                {t}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
