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

  const handleAddToCart = (e: React.MouseEvent) => {
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
      {/* Image */}
      <div className="relative aspect-square bg-[#1A1A1A] overflow-hidden mb-4">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          className={`object-cover transition-all duration-500 ${
            hovered ? "scale-105" : "scale-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div
          className={`absolute inset-0 bg-[#0B0B0B]/50 transition-opacity duration-300 ${
            hovered ? "opacity-100" : "opacity-0"
          }`}
        />
        {/* Quick add */}
        <div
          className={`absolute bottom-4 left-4 right-4 transition-all duration-300 ${
            hovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button
            onClick={handleAddToCart}
            className="w-full bg-[#E8E3D9] text-[#0B0B0B] py-3 text-[10px] font-bold tracking-[0.25em] uppercase flex items-center justify-center gap-2 hover:bg-white transition-colors"
          >
            <ShoppingBag size={13} />
            {added ? "¡Agregado!" : "Agregar al Carrito"}
          </button>
        </div>
        {/* Edition badge */}
        {product.edition && (
          <div className="absolute top-3 left-3">
            <span className="text-[9px] tracking-[0.15em] uppercase bg-[#E8E3D9] text-[#0B0B0B] px-2 py-1 font-semibold">
              {product.edition}
            </span>
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="text-[9px] tracking-[0.25em] uppercase text-[#E8E3D9]/40 mb-1">
          {product.collectionTag}
        </p>
        <h3 className="text-sm font-semibold text-[#E8E3D9] group-hover:text-white transition-colors">
          {product.name}
        </h3>
        <p className="text-sm text-[#E8E3D9]/70 mt-1">{formatPrice(product.price)}</p>
        {product.colors.length > 1 && (
          <p className="text-[10px] text-[#E8E3D9]/40 mt-1">
            {product.colors.join(" · ")}
          </p>
        )}
      </div>
    </Link>
  );
}
