"use client";

const messages = [
  "CROWNLESS CULT — EST. 2026",
  "DROP 001 — COLECCIÓN ORUM",
  "40 UNIDADES. SIN REPOSICIÓN.",
  "ENVÍO GRATIS EN COMPRAS +$200.000 COP",
  "ÚNETE AL CULTO — ACCESO PRIVADO",
  "CROWNLESS AUTHORITY — BORN TO RULE",
];

const repeated = [...messages, ...messages];

export function AnnouncementBar() {
  return (
    <div className="bg-[#E8E3D9] text-[#0B0B0B] py-2 overflow-hidden relative">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 35s linear infinite" }}
      >
        {repeated.map((msg, i) => (
          <span
            key={i}
            className="text-[10px] font-sans font-semibold tracking-[0.2em] uppercase px-6"
          >
            {msg}
            <span className="mx-4 opacity-40">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
