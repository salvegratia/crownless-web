"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/lib/data/products";

export function ProductCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    scrollRef.current?.scrollBy({ left: dir === "right" ? 320 : -320, behavior: "smooth" });
  };

  return (
    <section className="py-6 lg:py-10">
      <div className="max-w-[1220px] mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="flex items-end justify-between mb-7">
          <h2 className="font-[family-name:var(--font-montserrat)] text-[22px] font-black uppercase tracking-tight">
            Gorras
          </h2>
          <div className="flex gap-1.5">
            <button onClick={() => scroll("left")} className="w-8 h-8 border border-[#e4e4e4] flex items-center justify-center text-black/50 hover:text-black hover:border-black transition-all">
              <ChevronLeft size={14} />
            </button>
            <button onClick={() => scroll("right")} className="w-8 h-8 border border-[#e4e4e4] flex items-center justify-center text-black/50 hover:text-black hover:border-black transition-all">
              <ChevronRight size={14} />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div
          ref={scrollRef}
          className="flex gap-[14px] overflow-x-auto snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((product) => (
            <div key={product.slug} className="snap-start shrink-0 w-[calc(100%-16px)] sm:w-[calc(50%-7px)] md:w-[calc(33.33%-10px)] lg:w-[calc(25%-11px)]">
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-8 text-center">
          <a href="/collections" className="inline-flex items-center justify-center border border-black text-black font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] h-[39px] px-8 rounded-[3px] hover:bg-black hover:text-[#A5957F] transition-all">
            Ver todos los productos
          </a>
        </div>
      </div>
    </section>
  );
}
