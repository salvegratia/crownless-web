"use client";

import Link from "next/link";
import { ShoppingBag, Search, User, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store/cart";
import { AnnouncementBar } from "./AnnouncementBar";

const navLinks = [
  { label: "Colección", href: "/collections" },
  { label: "Guía de Fits", href: "/fit-guide" },
  { label: "CULT Club", href: "/cult-club" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [count, setCount] = useState(0);
  const { openCart } = useCartStore();

  useEffect(() => {
    setCount(useCartStore.getState().itemCount());
    return useCartStore.subscribe((state) => setCount(state.itemCount()));
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header
        className={`bg-white transition-shadow duration-200 ${
          scrolled ? "shadow-[0_2px_4px_0_rgba(0,0,0,0.1)]" : "border-b border-gray-100"
        }`}
      >
        <div className="max-w-[1220px] mx-auto px-4 lg:px-6 flex items-center justify-between h-[52px] lg:h-[60px]">
          {/* Logo */}
          <Link
            href="/"
            className="font-[family-name:var(--font-montserrat)] text-black text-[15px] font-black tracking-[0.06em] uppercase hover:opacity-70 transition-opacity"
          >
            Crownless
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[0.25em] text-black hover:opacity-50 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1">
            <button className="hidden lg:flex p-2 text-black/60 hover:text-black transition-colors">
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button className="hidden lg:flex p-2 text-black/60 hover:text-black transition-colors">
              <User size={18} strokeWidth={1.5} />
            </button>
            <button
              onClick={openCart}
              className="relative p-2 text-black/70 hover:text-black transition-colors"
              aria-label="Carrito"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-black text-white text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>
            <button
              className="lg:hidden p-2 text-black hover:opacity-60 transition-opacity"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block font-[family-name:var(--font-montserrat)] text-[12px] font-black uppercase tracking-[0.2em] text-black py-3 border-b border-gray-100 last:border-0 hover:opacity-60 transition-opacity"
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>
    </div>
  );
}
