import Header from "@/components/Header";
import SectionApresentation from "@/components/Sections/SectionApresentation";
import SectionCarousel from "@/components/Sections/SectionCarousel";
import SectionMap from "@/components/Sections/SectionMap";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <main className="container mb-32">
        <SectionApresentation />

        <SectionCarousel />

        <SectionMap />
      </main>

      <Footer />
    </div>
  );
}
