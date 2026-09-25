"use client";

import Link from "next/link";

export function Footer() {
  const links = {
    "Tienda": [
      { label: "Todos los Productos", href: "/collections" },
      { label: "Cult Cap", href: "/products/cult-cap" },
      { label: "Crownless Trucker Cap", href: "/products/crownless-trucker-cap" },
      { label: "Crownless Pack", href: "/products/crownless-pack" },
    ],
    "Explorar": [
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
    <footer className="bg-black text-[#A5957F]">

      {/* ── Brand hero section (estilo melin) ── */}
      <div className="px-4 py-20 lg:py-28 flex flex-col items-center justify-center text-center border-b border-white/10">
        <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-black uppercase tracking-[0.35em] text-[#A5957F]/60 mb-5">
          Medellín, Colombia · EST. MMXXVI
        </p>
        <h2 className="font-[family-name:var(--font-montserrat)] text-[36px] sm:text-[48px] lg:text-[60px] font-black uppercase tracking-tight text-[#A5957F] leading-none mb-4">
          CROWNLESS CULT
        </h2>
        <p className="text-[13px] text-[#A5957F]/60 mb-8 max-w-[340px] leading-relaxed">
          Headwear de lujo urbano. Para quien entiende que la autoridad no necesita anunciarse.
        </p>
        <div className="flex gap-3">
          <Link
            href="/collections"
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.3px] px-8 py-3 bg-[#A5957F] text-black hover:opacity-80 transition-opacity"
          >
            Ver Colección
          </Link>
          <Link
            href="/cult-club"
            className="font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[1.3px] px-8 py-3 border border-[#A5957F]/50 text-[#A5957F] hover:border-[#A5957F] transition-colors"
          >
            CULT Club
          </Link>
        </div>
      </div>

      {/* ── Links grid ── */}
      <div className="max-w-[1100px] mx-auto px-4 lg:px-8 py-10 grid grid-cols-2 md:grid-cols-3 gap-8">
        {Object.entries(links).map(([group, items]) => (
          <div key={group}>
            <p className="font-[family-name:var(--font-montserrat)] text-[10px] font-black uppercase tracking-[0.18em] text-[#A5957F]/50 mb-4">
              {group}
            </p>
            <ul className="space-y-2.5">
              {items.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-[11px] text-[#A5957F]/70 hover:text-[#A5957F] transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* ── Credits ── */}
      <div className="border-t border-white/10 px-4 py-4">
        <div className="max-w-[1100px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-[10px] text-[#A5957F]/40">© 2026 CROWNLESS CULT. Todos los derechos reservados.</p>
          <div className="flex gap-5">
            {["Privacidad", "Términos"].map((t) => (
              <a key={t} href="#" className="text-[10px] text-[#A5957F]/40 hover:text-[#A5957F]/70 transition-colors">{t}</a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
}
