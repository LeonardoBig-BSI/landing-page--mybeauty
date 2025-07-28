import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import SectionApresentation from "@/components/Sections/SectionApresentation";
import { SectionBanner } from "@/components/Sections/SectionBanner";
import { SectionCarouselBrands } from "@/components/Sections/SectionCarousel/SectionCarouselBrands";
import { SectionCarouselProductsBestsellers } from "@/components/Sections/SectionCarousel/SectionCarouselProductsBestsellers";
import { SectionCarouselProductsOffer } from "@/components/Sections/SectionCarousel/SectionCarouselProductsOffer";
import SectionMap from "@/components/Sections/SectionMap";

export default function Home() {
  return (
    <>
      <Header.Root>
        <Header.Content />
      </Header.Root>

      <main className="container mb-32">
        <SectionCarouselProductsOffer />
        <SectionCarouselProductsBestsellers />

        <SectionBanner />

        <SectionCarouselBrands />

        <SectionApresentation />
        <SectionMap />
      </main>

      <Footer />
    </>
  );
}
