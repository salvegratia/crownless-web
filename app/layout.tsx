import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Cinzel_Decorative } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cinzel = Cinzel_Decorative({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-cinzel",
  display: "swap",
});

export const metadata: Metadata = {
  title: "CROWNLESS CULT — Born to Rule",
  description:
    "Headwear de lujo urbano desde Medellín. DROP 001 — Colección ORUM. Autoridad sin corona.",
  keywords: ["gorras de lujo", "headwear colombia", "crownless cult", "ORUM", "streetwear medellin"],
  openGraph: {
    title: "CROWNLESS CULT — Born to Rule",
    description: "DROP 001 — Colección ORUM. 40 unidades. Sin reposición.",
    siteName: "CROWNLESS CULT",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} ${cinzel.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#0B0B0B] text-[#E8E3D9]">
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
