import { HeroBanner } from "@/components/home/HeroBanner";
import { ProductCarousel } from "@/components/home/ProductCarousel";
import { FitGuideSection } from "@/components/home/FitGuideSection";
import { AnatomySection } from "@/components/home/AnatomySection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <ProductCarousel />
      <FitGuideSection />
      <AnatomySection />
      <NewsletterSection />
    </>
  );
}
