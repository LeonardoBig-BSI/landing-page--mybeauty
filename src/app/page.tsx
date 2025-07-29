"use client"

import { useEffect, useState } from "react";

import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

import { SectionCarouselProductsOffer } from "@/components/Sections/SectionCarousel/SectionCarouselProductsOffer";
import { SectionCarouselProductsBestsellers } from "@/components/Sections/SectionCarousel/SectionCarouselProductsBestsellers";
import { SectionCarouselBrands } from "@/components/Sections/SectionCarousel/SectionCarouselBrands";
import { SectionApresentation } from "@/components/Sections/SectionApresentation";
import { SectionBanner } from "@/components/Sections/SectionBanner";
import { SectionMap } from "@/components/Sections/SectionMap";

export default function Home() {
  const [hydrate, setHydrate] = useState<boolean>(false);

  useEffect(() => {
    setHydrate(true);
  }, []);

  return (
    <>
      {hydrate ? (
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

          <Footer.Root>
            <Footer.Content />
          </Footer.Root>
        </>
      ) : (<></>)}

    </>
  );
}
