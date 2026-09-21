import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ProductCarousel />
      <NewsletterSection />
    </>
  );
}
