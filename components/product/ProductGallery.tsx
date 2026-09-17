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

  const prev = () => setActive((p) => (p === 0 ? images.length - 1 : p - 1));
  const next = () => setActive((p) => (p === images.length - 1 ? 0 : p + 1));

  return (
    <div className="flex flex-col-reverse sm:flex-row gap-4">
      {/* Thumbnails */}
      <div className="flex sm:flex-col gap-2 overflow-x-auto sm:overflow-y-auto">
        {images.map((src, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`relative shrink-0 w-16 h-16 sm:w-20 sm:h-20 overflow-hidden border-2 transition-all ${
              active === i ? "border-[#E8E3D9]/60" : "border-transparent opacity-50 hover:opacity-80"
            }`}
          >
            <Image
              src={src}
              alt={`${name} vista ${i + 1}`}
              fill
              className="object-cover"
              sizes="80px"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="relative flex-1 aspect-square bg-[#1A1A1A] overflow-hidden group">
        <Image
          src={images[active]}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
          priority
        />

        {/* Nav arrows */}
        <button
          onClick={prev}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-[#0B0B0B]/60 text-[#E8E3D9] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0B0B0B]/80"
        >
          <ChevronLeft size={16} />
        </button>
        <button
          onClick={next}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-[#0B0B0B]/60 text-[#E8E3D9] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-[#0B0B0B]/80"
        >
          <ChevronRight size={16} />
        </button>

        {/* Counter */}
        <div className="absolute bottom-3 right-3 text-[10px] tracking-[0.15em] text-[#E8E3D9]/60 bg-[#0B0B0B]/50 px-2 py-1">
          {active + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}
