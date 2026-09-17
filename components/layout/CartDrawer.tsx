"use client";

import { useEffect, useRef } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cart";
import { formatPrice } from "@/lib/data/products";

export function CartDrawer() {
  const { isOpen, closeCart, items, removeItem, updateQuantity, total, remainingForFreeShipping, freeShippingThreshold } =
    useCartStore();
  const drawerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const cartTotal = total();
  const remaining = remainingForFreeShipping();
  const progress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-50"
            onClick={closeCart}
          />

          {/* Drawer */}
          <motion.div
            ref={drawerRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
            className="fixed right-0 top-0 h-full w-full max-w-md bg-[#111111] z-50 flex flex-col shadow-2xl border-l border-[#2A2A2A]"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-[#2A2A2A]">
              <div className="flex items-center gap-3">
                <ShoppingBag size={18} strokeWidth={1.5} className="text-[#E8E3D9]/60" />
                <span className="font-display text-sm tracking-[0.15em] uppercase font-bold text-[#E8E3D9]">
                  Tu Carrito
                </span>
                {items.length > 0 && (
                  <span className="text-xs text-[#E8E3D9]/40">({items.length})</span>
                )}
              </div>
              <button
                onClick={closeCart}
                className="p-2 text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors"
              >
                <X size={18} strokeWidth={1.5} />
              </button>
            </div>

            {/* Free shipping progress */}
            {cartTotal > 0 && (
              <div className="px-6 py-4 bg-[#1A1A1A] border-b border-[#2A2A2A]">
                {remaining > 0 ? (
                  <p className="text-[11px] tracking-[0.12em] text-[#E8E3D9]/70 mb-2">
                    Te faltan{" "}
                    <span className="text-[#E8E3D9] font-semibold">{formatPrice(remaining)}</span>{" "}
                    para envío gratis
                  </p>
                ) : (
                  <p className="text-[11px] tracking-[0.12em] text-[#E8E3D9] font-semibold mb-2">
                    ✦ ¡Tienes envío gratis!
                  </p>
                )}
                <div className="h-0.5 bg-[#2A2A2A] rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-[#E8E3D9]"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
              </div>
            )}

            {/* Items */}
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
                  <ShoppingBag size={40} strokeWidth={1} className="text-[#E8E3D9]/20" />
                  <p className="text-sm text-[#E8E3D9]/40 tracking-[0.1em] uppercase">
                    Tu carrito está vacío
                  </p>
                  <Link
                    href="/collections"
                    onClick={closeCart}
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#E8E3D9] border border-[#E8E3D9]/30 px-6 py-3 hover:bg-[#E8E3D9] hover:text-[#0B0B0B] transition-all"
                  >
                    Ver Colección
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={`${item.product.slug}-${item.color}`}
                    className="flex gap-4 pb-4 border-b border-[#2A2A2A] last:border-0"
                  >
                    <div className="relative w-20 h-20 bg-[#1A1A1A] shrink-0 overflow-hidden">
                      <Image
                        src={item.product.images[0]}
                        alt={item.product.name}
                        fill
                        className="object-cover"
                        sizes="80px"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[10px] tracking-[0.15em] text-[#E8E3D9]/50 uppercase mb-0.5">
                        {item.product.collectionTag}
                      </p>
                      <p className="text-sm font-semibold text-[#E8E3D9] truncate">
                        {item.product.name}
                      </p>
                      <p className="text-[11px] text-[#E8E3D9]/50 mt-0.5">{item.color}</p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2 border border-[#2A2A2A]">
                          <button
                            onClick={() =>
                              updateQuantity(item.product.slug, item.color, item.quantity - 1)
                            }
                            className="p-1.5 text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors"
                          >
                            <Minus size={12} />
                          </button>
                          <span className="text-sm w-6 text-center">{item.quantity}</span>
                          <button
                            onClick={() =>
                              updateQuantity(item.product.slug, item.color, item.quantity + 1)
                            }
                            className="p-1.5 text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors"
                          >
                            <Plus size={12} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-semibold">
                            {formatPrice(item.product.price * item.quantity)}
                          </span>
                          <button
                            onClick={() => removeItem(item.product.slug, item.color)}
                            className="text-[#E8E3D9]/30 hover:text-[#E8E3D9]/80 transition-colors"
                          >
                            <Trash2 size={14} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="px-6 py-5 border-t border-[#2A2A2A] space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-sm tracking-[0.1em] uppercase text-[#E8E3D9]/60">
                    Subtotal
                  </span>
                  <span className="font-semibold text-[#E8E3D9]">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-[10px] text-[#E8E3D9]/40 tracking-[0.08em]">
                  Envío calculado al finalizar
                </p>
                <button className="w-full bg-[#E8E3D9] text-[#0B0B0B] py-4 text-[11px] font-bold tracking-[0.25em] uppercase hover:bg-white transition-colors">
                  Finalizar Compra
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
