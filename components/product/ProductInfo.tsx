"use client";

import { useState } from "react";
import { ShoppingBag, Check } from "lucide-react";
import { Product, formatPrice } from "@/lib/data/products";
import { useCartStore } from "@/lib/store/cart";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [added, setAdded] = useState(false);
  const { addItem, openCart } = useCartStore();

  const handleAdd = () => {
    addItem(product, selectedColor);
    setAdded(true);
    openCart();
    setTimeout(() => setAdded(false), 2500);
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Collection + Edition */}
      <div className="space-y-1">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/50">
          {product.collectionTag}
        </p>
        {product.edition && (
          <span className="inline-block text-[9px] tracking-[0.15em] uppercase bg-[#E8E3D9] text-[#0B0B0B] px-2 py-1 font-semibold">
            {product.edition}
          </span>
        )}
      </div>

      {/* Name */}
      <div>
        <p className="text-[11px] tracking-[0.15em] uppercase text-[#E8E3D9]/40 mb-1">
          {product.subtitle}
        </p>
        <h1 className="font-display text-2xl sm:text-3xl font-black tracking-[0.04em] uppercase text-[#E8E3D9] leading-tight">
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <p className="text-2xl font-semibold text-[#E8E3D9]">
        {formatPrice(product.price)}{" "}
        <span className="text-base font-normal text-[#E8E3D9]/50">COP</span>
      </p>

      {/* Description */}
      <p className="text-sm text-[#E8E3D9]/70 leading-relaxed">{product.description}</p>

      {/* Color selector */}
      {product.colors.length > 0 && (
        <div>
          <p className="text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/50 mb-3">
            Color:{" "}
            <span className="text-[#E8E3D9]">{selectedColor}</span>
          </p>
          <div className="flex gap-2">
            {product.colors.map((color) => (
              <button
                key={color}
                onClick={() => setSelectedColor(color)}
                className={`px-4 py-2 text-[10px] tracking-[0.15em] uppercase border transition-all ${
                  selectedColor === color
                    ? "border-[#E8E3D9] text-[#E8E3D9] bg-[#E8E3D9]/10"
                    : "border-[#3A3A3A] text-[#E8E3D9]/60 hover:border-[#E8E3D9]/40"
                }`}
              >
                {color}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Features */}
      <ul className="space-y-2">
        {product.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-xs text-[#E8E3D9]/60">
            <span className="text-[#E8E3D9]/30">✦</span>
            {feat}
          </li>
        ))}
      </ul>

      {/* Add to cart */}
      <div className="space-y-3 pt-2">
        <button
          onClick={handleAdd}
          className={`w-full py-4 text-[11px] font-bold tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all ${
            added
              ? "bg-[#E8E3D9]/20 text-[#E8E3D9] border border-[#E8E3D9]/40"
              : "bg-[#E8E3D9] text-[#0B0B0B] hover:bg-white"
          }`}
        >
          {added ? (
            <>
              <Check size={15} />
              Agregado al Culto
            </>
          ) : (
            <>
              <ShoppingBag size={15} />
              Agregar al Carrito
            </>
          )}
        </button>
        {product.stock && product.stock <= 10 && (
          <p className="text-center text-[10px] tracking-[0.15em] uppercase text-[#E8E3D9]/50">
            ⚠ Solo quedan {product.stock} unidades
          </p>
        )}
      </div>
    </div>
  );
}
