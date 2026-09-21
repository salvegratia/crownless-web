import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { ProductCard } from "@/components/ui/ProductCard";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: `${product.name} — CROWNLESS CULT`,
    description: product.description,
  };
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = products.filter((p) => p.slug !== product.slug);

  return (
    <div className="max-w-[1220px] mx-auto px-4 lg:px-6 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[11px] tracking-[0.12em] uppercase text-black/35 mb-10">
        <a href="/" className="hover:text-black transition-colors">Home</a>
        <span>/</span>
        <a href="/collections" className="hover:text-black transition-colors">Colección</a>
        <span>/</span>
        <span className="text-black/60">{product.name}</span>
      </nav>

      {/* Main product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <div className="mb-8">
            <p className="text-[11px] text-[rgb(114,107,103)] tracking-[0.4px] capitalize mb-2">
              Colección ORUM
            </p>
            <h2 className="font-[family-name:var(--font-montserrat)] text-[20px] font-black uppercase tracking-tight text-black">
              También te puede interesar
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {related.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
