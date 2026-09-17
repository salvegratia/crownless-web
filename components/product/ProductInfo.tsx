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
    <div className="flex flex-col gap-5">
      {/* Collection + Edition */}
      <div>
        <p className="text-[12px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-1.5">
          {product.collection}
        </p>
        {product.edition && (
          <span className="inline-block text-[10px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.8px] bg-black text-white px-2 py-1">
            {product.edition}
          </span>
        )}
      </div>

      {/* Name */}
      <div>
        <h1 className="font-[family-name:var(--font-montserrat)] text-[28px] sm:text-[34px] font-black uppercase tracking-tight leading-tight text-black">
          {product.name}
        </h1>
      </div>

      {/* Price */}
      <p className="text-[22px] font-medium text-black tracking-[0.4px]">
        {formatPrice(product.price)}{" "}
        <span className="text-[14px] font-normal text-black/50">COP</span>
      </p>

      {/* Description */}
      <p className="text-[14px] text-black/60 leading-relaxed">{product.description}</p>

      {/* Colors */}
      <div>
        <p className="text-[12px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.15em] text-black/60 mb-2.5">
          Color: <span className="text-black">{selectedColor}</span>
        </p>
        <div className="flex gap-2">
          {product.colors.map((color) => (
            <button
              key={color}
              onClick={() => setSelectedColor(color)}
              className={`px-4 py-2 text-[12px] border transition-all ${selectedColor === color ? "border-black text-black bg-black/5" : "border-[#e4e4e4] text-black/50 hover:border-black/40"}`}
            >
              {color}
            </button>
          ))}
        </div>
      </div>

      {/* Features */}
      <ul className="space-y-2">
        {product.features.map((feat) => (
          <li key={feat} className="flex items-center gap-2 text-[13px] text-black/60">
            <span className="w-1 h-1 rounded-full bg-black/40 shrink-0" />
            {feat}
          </li>
        ))}
      </ul>

      {/* Add to cart */}
      <div className="space-y-2 pt-1">
        <button
          onClick={handleAdd}
          className={`w-full font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] h-[52px] flex items-center justify-center gap-2 rounded-[3px] transition-all ${added ? "bg-[#f5f5f5] text-black border border-black/20" : "bg-black text-white hover:opacity-70"}`}
        >
          {added ? (
            <><Check size={15} />Agregado al Carrito</>
          ) : (
            <><ShoppingBag size={15} />Agregar al Carrito</>
          )}
        </button>
        {product.stock && product.stock <= 10 && (
          <p className="text-center text-[12px] text-black/50">Solo quedan {product.stock} unidades</p>
        )}
      </div>
    </div>
  );
}
