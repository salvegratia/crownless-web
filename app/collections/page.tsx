import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata = {
  title: "Colección DROP 001 — CROWNLESS CULT",
  description: "ORUM — Primera colección de gorras de lujo CROWNLESS CULT. 40 unidades limitadas.",
};

export default function CollectionsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-3">
          ✦ DROP 001
        </p>
        <h1 className="font-display text-3xl sm:text-4xl font-black tracking-[0.06em] uppercase text-[#E8E3D9] mb-4">
          Colección ORUM
        </h1>
        <p className="text-sm text-[#E8E3D9]/60 max-w-lg mx-auto leading-relaxed">
          Dos gorras. Una filosofía. CROWNLESS CULT — EST. MMXXVI.
        </p>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-4 mb-10 border-b border-[#2A2A2A] pb-6">
        <span className="text-[10px] tracking-[0.2em] uppercase text-[#E8E3D9]/40">Filtrar:</span>
        {["Todos", "CULT Line", "DAILY Line"].map((f) => (
          <button
            key={f}
            className="text-[10px] tracking-[0.15em] uppercase text-[#E8E3D9]/60 hover:text-[#E8E3D9] transition-colors first:text-[#E8E3D9]"
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-[10px] text-[#E8E3D9]/30">
          {products.length} productos
        </span>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
