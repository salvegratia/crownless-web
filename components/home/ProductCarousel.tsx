"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data/products";

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === "right" ? 360 : -360, behavior: "smooth" });
    }
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-2">
              ✦ DROP 001
            </p>
            <h2 className="font-display text-2xl md:text-3xl font-bold tracking-[0.08em] uppercase text-[#E8E3D9]">
              Colección ORUM
            </h2>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll("left")}
              className="p-2.5 border border-[#2A2A2A] text-[#E8E3D9]/50 hover:text-[#E8E3D9] hover:border-[#E8E3D9]/30 transition-all"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={() => scroll("right")}
              className="p-2.5 border border-[#2A2A2A] text-[#E8E3D9]/50 hover:text-[#E8E3D9] hover:border-[#E8E3D9]/30 transition-all"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.slug} className="snap-start shrink-0 w-72 sm:w-80">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
