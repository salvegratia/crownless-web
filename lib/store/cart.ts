import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Product } from "@/lib/data/products";

export interface CartItem {
  product: Product;
  quantity: number;
  color: string;
}

interface CartStore {
  items: CartItem[];
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  addItem: (product: Product, color?: string) => void;
  removeItem: (slug: string, color: string) => void;
  updateQuantity: (slug: string, color: string, quantity: number) => void;
  clearCart: () => void;
  total: () => number;
  itemCount: () => number;
  freeShippingThreshold: number;
  remainingForFreeShipping: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      isOpen: false,
      freeShippingThreshold: 200000,

      openCart: () => set({ isOpen: true }),
      closeCart: () => set({ isOpen: false }),

      addItem: (product, color) => {
        const selectedColor = color ?? product.colors[0];
        set((state) => {
          const existing = state.items.find(
            (i) => i.product.slug === product.slug && i.color === selectedColor
          );
          if (existing) {
            return {
              items: state.items.map((i) =>
                i.product.slug === product.slug && i.color === selectedColor
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              ),
            };
          }
          return { items: [...state.items, { product, quantity: 1, color: selectedColor }] };
        });
      },

      removeItem: (slug, color) => {
        set((state) => ({
          items: state.items.filter(
            (i) => !(i.product.slug === slug && i.color === color)
          ),
        }));
      },

      updateQuantity: (slug, color, quantity) => {
        if (quantity <= 0) {
          get().removeItem(slug, color);
          return;
        }
        set((state) => ({
          items: state.items.map((i) =>
            i.product.slug === slug && i.color === color ? { ...i, quantity } : i
          ),
        }));
      },

      clearCart: () => set({ items: [] }),

      total: () => {
        return get().items.reduce(
          (sum, item) => sum + item.product.price * item.quantity,
          0
        );
      },

      itemCount: () => {
        return get().items.reduce((sum, item) => sum + item.quantity, 0);
      },

      remainingForFreeShipping: () => {
        const remaining = get().freeShippingThreshold - get().total();
        return Math.max(0, remaining);
      },
    }),
    { name: "crownless-cult-cart" }
  )
);
