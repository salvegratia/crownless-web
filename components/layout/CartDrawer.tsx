"use client";

import { useEffect } from "react";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { useCartStore } from "@/lib/store/cart";

// ← Reemplaza con tu número real (código país + número, sin + ni espacios)
const WHATSAPP_NUMBER = "573000000000";

function buildWhatsAppUrl(items: ReturnType<typeof useCartStore.getState>["items"]): string {
  const lines = items.map(
    (item) => `• ${item.product.name} (${item.color}) x${item.quantity}`
  );
  const message = [
    "Hola! Quiero finalizar mi compra en CROWNLESS:",
    "",
    ...lines,
    "",
    "Por favor confirmarme disponibilidad. ¡Gracias!",
  ].join("\n");
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function CartDrawer() {
  const {
    isOpen, closeCart, items, removeItem, updateQuantity,
  } = useCartStore();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

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
                <p className="text-[11px] text-black/40">Envío calculado al finalizar</p>
                <a
                  href={buildWhatsAppUrl(items)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeCart}
                  className="flex items-center justify-center gap-2 w-full bg-black text-white font-[family-name:var(--font-montserrat)] text-[13px] font-black uppercase tracking-[1.3px] h-[52px] rounded-[3px] hover:opacity-70 transition-opacity"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Finalizar por WhatsApp
                </a>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
