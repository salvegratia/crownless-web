"use client";

import { useEffect, useRef } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cart";
import { formatPrice } from "@/lib/data/products";

export function CartDrawer() {
  const {
    isOpen, closeCart, items, removeItem, updateQuantity,
    total, remainingForFreeShipping, freeShippingThreshold,
  } = useCartStore();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const cartTotal = total();
  const remaining = remainingForFreeShipping();
  const progress = Math.min(100, (cartTotal / freeShippingThreshold) * 100);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/40 z-50"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.28, ease: [0.4, 0, 0.2, 1] as [number, number, number, number] }}
            className="fixed right-0 top-0 h-full w-full max-w-[420px] bg-white z-50 flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[0.2em]">
                  Carrito
                </span>
                {items.length > 0 && (
                  <span className="w-5 h-5 bg-black text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {items.reduce((s, i) => s + i.quantity, 0)}
                  </span>
                )}
              </div>
              <button onClick={closeCart} className="p-1 text-black/40 hover:text-black transition-colors">
                <X size={18} />
              </button>
            </div>

            {/* Free shipping bar */}
            {cartTotal > 0 && (
              <div className="px-6 py-3 bg-[#f5f5f5] border-b border-gray-200">
                {remaining > 0 ? (
                  <p className="text-[12px] text-black/70 mb-1.5">
                    Te faltan <strong className="text-black">{formatPrice(remaining)}</strong> para envío gratis
                  </p>
                ) : (
                  <p className="text-[12px] font-semibold text-black mb-1.5">¡Tienes envío gratis!</p>
                )}
                <div className="h-[2px] bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-black"
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
                <div className="flex flex-col items-center justify-center h-full gap-5 text-center">
                  <ShoppingBag size={40} strokeWidth={1} className="text-black/20" />
                  <p className="text-[13px] text-black/50 tracking-[0.05em]">Tu carrito está vacío</p>
                  <Link
                    href="/collections"
                    onClick={closeCart}
                    className="text-[12px] font-[family-name:var(--font-montserrat)] font-black uppercase tracking-[0.2em] bg-black text-white px-6 py-3 hover:opacity-70 transition-opacity rounded-[3px]"
                  >
                    Ver Colección
                  </Link>
                </div>
              ) : (
                items.map((item) => (
                  <div key={`${item.product.slug}-${item.color}`} className="flex gap-4 pb-4 border-b border-gray-100 last:border-0">
                    <div className="relative w-[72px] h-[96px] bg-[#f5f5f5] shrink-0 overflow-hidden border-b border-[#707070]">
                      <Image src={item.product.images[0]} alt={item.product.name} fill className="object-cover" sizes="72px" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-0.5">{item.product.collection}</p>
                      <p className="text-[14px] font-bold text-black leading-[18px] mb-0.5 truncate">{item.product.name}</p>
                      <p className="text-[12px] text-black/50 mb-3">{item.color}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-0 border border-[#e4e4e4]">
                          <button onClick={() => updateQuantity(item.product.slug, item.color, item.quantity - 1)} className="px-2.5 py-1 text-black/50 hover:text-black transition-colors text-sm">
                            <Minus size={11} />
                          </button>
                          <span className="text-[13px] w-6 text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.product.slug, item.color, item.quantity + 1)} className="px-2.5 py-1 text-black/50 hover:text-black transition-colors text-sm">
                            <Plus size={11} />
                          </button>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-[14px] tracking-[0.4px]">{formatPrice(item.product.price * item.quantity)}</span>
                          <button onClick={() => removeItem(item.product.slug, item.color)} className="text-black/30 hover:text-black/70 transition-colors">
                            <Trash2 size={13} />
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
              <div className="px-6 py-4 border-t border-gray-100 space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[13px] text-black/60">Subtotal</span>
                  <span className="text-[14px] font-semibold tracking-[0.4px]">{formatPrice(cartTotal)}</span>
                </div>
                <p className="text-[11px] text-black/40">Envío calculado al finalizar</p>
                <button className="w-full bg-black text-white font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] h-[52px] rounded-[3px] hover:opacity-70 transition-opacity">
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
