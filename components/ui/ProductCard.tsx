"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag } from "lucide-react";
import { Product, formatPrice } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cart";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [hovered, setHovered] = useState(false);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem(product);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <Link
      href={`/products/${product.slug}`}
      className="block group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image — melin-style portrait 3:4 */}
      <div className="relative overflow-hidden" style={{ paddingBottom: "133.33%" }}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover object-top transition-transform duration-500 ${hovered ? "scale-[1.04]" : "scale-100"}`}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
        />
        <div className="absolute bottom-0 left-0 right-0 border-b border-[#707070]" />

        {/* Edition badge */}
        {product.edition && (
          <div className="absolute top-2 left-2 bg-black text-white text-[10px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.8px] px-2 py-1">
            Limitada
          </div>
        )}

        {/* Quick add — hover only */}
        <div className={`absolute bottom-0 left-0 right-0 transition-all duration-200 ${hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}>
          <button
            onClick={handleAdd}
            className="w-full bg-black text-white font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[1.3px] h-[40px] flex items-center justify-center gap-2 hover:bg-black/80 transition-colors"
          >
            <ShoppingBag size={13} />
            {added ? "Agregado ✓" : "Agregar"}
          </button>
        </div>
      </div>

      {/* Meta — melin-style grid */}
      <div className="pt-[7px] pb-[10px]">
        <p className="text-[12px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-0.5">
          {product.collection}
        </p>
        <div className="flex items-start justify-between gap-2">
          <span className="text-[14px] font-bold text-black leading-[18px]">{product.name}</span>
        </div>
        {product.colors.length > 1 && (
          <p className="text-[12px] text-black/40 mt-1">{product.colors.join(" / ")}</p>
        )}
      </div>
    </Link>
  );
}
