import { notFound } from "next/navigation";
import { getProductBySlug, products } from "@/lib/data/products";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";
import { AnatomyHotspots } from "@/components/product/AnatomyHotspots";
import { ProductAccordions } from "@/components/product/ProductAccordions";
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-[10px] tracking-[0.15em] uppercase text-[#E8E3D9]/40 mb-10">
        <a href="/" className="hover:text-[#E8E3D9]/70 transition-colors">Home</a>
        <span>/</span>
        <a href="/collections" className="hover:text-[#E8E3D9]/70 transition-colors">Colección</a>
        <span>/</span>
        <span className="text-[#E8E3D9]/70">{product.name}</span>
      </nav>

      {/* Main product section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-16">
        <ProductGallery images={product.images} name={product.name} />
        <ProductInfo product={product} />
      </div>

      {/* Anatomy hotspots */}
      <div className="mb-12">
        <AnatomyHotspots
          image={product.images[0]}
          name={product.name}
          hotspots={product.hotspots}
        />
      </div>

      {/* Accordions */}
      <div className="mb-16 max-w-2xl">
        <ProductAccordions
          luxury={product.accordions.luxury}
          packaging={product.accordions.packaging}
          care={product.accordions.care}
          shipping={product.accordions.shipping}
        />
      </div>

      {/* Related products */}
      {related.length > 0 && (
        <div>
          <div className="mb-8">
            <p className="text-[10px] tracking-[0.3em] uppercase text-[#E8E3D9]/40 mb-2">
              ✦ Colección ORUM
            </p>
            <h2 className="font-display text-xl font-bold tracking-[0.08em] uppercase text-[#E8E3D9]">
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
