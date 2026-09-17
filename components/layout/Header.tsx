"use client";

import Link from "next/link";
import { ShoppingBag, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { useCartStore } from "@/lib/store/cart";
import { AnnouncementBar } from "./AnnouncementBar";

const navLinks = [
  { label: "Colección Gorras", href: "/collections" },
  { label: "Guía de Fits", href: "/fit-guide" },
  { label: "Anatomía & Tech", href: "/technology" },
  { label: "CULT Club", href: "/cult-club" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openCart, itemCount } = useCartStore();
  const count = itemCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="sticky top-0 z-50">
      <AnnouncementBar />
      <header
        className={`transition-all duration-300 border-b ${
          scrolled
            ? "bg-[#0B0B0B]/95 backdrop-blur-md border-[#2A2A2A]"
            : "bg-[#0B0B0B] border-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-[#E8E3D9] text-base font-bold tracking-[0.15em] uppercase hover:opacity-80 transition-opacity"
          >
            CROWNLESS CULT
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] font-sans font-semibold tracking-[0.18em] uppercase text-[#E8E3D9]/70 hover:text-[#E8E3D9] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={openCart}
              className="relative p-2 text-[#E8E3D9]/80 hover:text-[#E8E3D9] transition-colors"
              aria-label="Abrir carrito"
            >
              <ShoppingBag size={20} strokeWidth={1.5} />
              {count > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#E8E3D9] text-[#0B0B0B] text-[9px] font-bold rounded-full flex items-center justify-center">
                  {count}
                </span>
              )}
            </button>

            {/* Mobile menu toggle */}
            <button
              className="md:hidden p-2 text-[#E8E3D9]/80 hover:text-[#E8E3D9] transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={20} strokeWidth={1.5} /> : <Menu size={20} strokeWidth={1.5} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-[#0B0B0B] border-t border-[#2A2A2A] px-4 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-sm font-semibold tracking-[0.18em] uppercase text-[#E8E3D9]/80 hover:text-[#E8E3D9] py-2 border-b border-[#2A2A2A]"
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
