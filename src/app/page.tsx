import Footer from "@/components/Footer";
import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import SectionApresentation from "@/components/Sections/SectionApresentation";
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

        <SectionApresentation />
        <SectionMap />
      </main>

      <Footer />
    </>
  );
}
