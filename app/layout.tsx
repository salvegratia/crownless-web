import type { Metadata } from "next";
import { DM_Sans, Montserrat } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/layout/CartDrawer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
  weight: ["400", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "CROWNLESS CULT — Born to Rule",
  description: "Headwear de lujo urbano desde Medellín. DROP 001 — Colección ORUM.",
  openGraph: {
    title: "CROWNLESS CULT — Born to Rule",
    description: "DROP 001 — Colección ORUM. 40 unidades. Sin reposición.",
    siteName: "CROWNLESS CULT",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${dmSans.variable} ${montserrat.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-white text-black">
        <Header />
        <CartDrawer />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
