"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ProductGalleryProps {
  images: string[];
  name: string;
}

export function ProductGallery({ images, name }: ProductGalleryProps) {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-3">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-[72px] h-[96px] overflow-hidden border-b transition-all ${active === i ? "border-black opacity-100" : "border-[#707070] opacity-40 hover:opacity-70"}`}
          >
            <Image src={src} alt={`${name} ${i + 1}`} fill className="object-cover object-top" sizes="72px" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 bg-[#f5f5f5] group overflow-hidden" style={{ paddingBottom: active !== undefined ? undefined : "133.33%" }}>
        <div className="relative aspect-[3/4]">
          <Image
            src={images[active]}
            alt={name}
            fill
            className="object-cover object-top"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 border-b border-[#707070]" />
        </div>

        {/* Arrows */}
        <button onClick={() => setActive(p => p === 0 ? images.length - 1 : p - 1)} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
          <ChevronLeft size={14} />
        </button>
        <button onClick={() => setActive(p => p === images.length - 1 ? 0 : p + 1)} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-white/80 opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white">
          <ChevronRight size={14} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 text-[11px] text-black/50 bg-white/70 px-2 py-0.5">
          {active + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
