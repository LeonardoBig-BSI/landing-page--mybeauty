import { Header } from "@/components/Header";
import { NavBar } from "@/components/NavBar";
import { SectionCarouselProductsOffer } from "@/components/Sections/SectionCarousel/SectionCarouselProductsOffer";

export default function Home() {
  return (
    <>
      <Header.Root>
        <Header.Content />
      </Header.Root>



      <main className="container mb-32">
        {/* <SectionApresentation /> */}

        <SectionCarouselProductsOffer />

        {/* <SectionMap /> */}
      </main>

      {/* <Footer /> */}
    </>
  );
}
