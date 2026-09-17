import { products } from "@/lib/data/products";
import { ProductCard } from "@/components/ui/ProductCard";

export const metadata = {
  title: "Colección DROP 001 — CROWNLESS CULT",
  description: "ORUM — Primera colección de gorras CROWNLESS CULT. 40 unidades limitadas.",
};

export default function CollectionsPage() {
  return (
    <div className="max-w-[1220px] mx-auto px-4 lg:px-6 py-14">
      {/* Header */}
      <div className="border-b border-[#707070] pb-8 mb-10">
        <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
          Drop 001
        </p>
        <h1 className="font-[family-name:var(--font-montserrat)] text-[32px] font-black uppercase tracking-tight text-black">
          Colección ORUM
        </h1>
      </div>

      {/* Filter bar */}
      <div className="flex items-center gap-6 mb-10">
        <span className="text-[12px] text-black/40">Filtrar:</span>
        {["Todos", "CULT Line", "DAILY Line"].map((f, i) => (
          <button
            key={f}
            className={`font-[family-name:var(--font-montserrat)] text-[11px] font-black uppercase tracking-[0.15em] transition-colors ${i === 0 ? "text-black" : "text-black/40 hover:text-black"}`}
          >
            {f}
          </button>
        ))}
        <span className="ml-auto text-[12px] text-black/40">
          {products.length} productos
        </span>
      </div>

      {/* Products grid */}
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
        {products.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
