"use client";

const messages = [
  "CROWNLESS AUTHORITY",
  "CROWNLESS AUTHORITY",
  "CROWNLESS AUTHORITY",
  "CROWNLESS AUTHORITY",
];

export function AnnouncementBar() {
  return (
    <div className="bg-black text-white py-2 text-center text-[13px] tracking-[0.4px] font-sans font-normal overflow-hidden">
      <div
        className="flex whitespace-nowrap"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        {[...messages, ...messages].map((msg, i) => (
          <span key={i} className="px-10">
            {msg}
            <span className="mx-8 opacity-40">·</span>
          </span>
        ))}
      </div>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
