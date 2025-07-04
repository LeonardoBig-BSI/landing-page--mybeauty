import CarouselProducts from "@/components/CarouselProducts";

export default function SectionCarousel() {
  return (
    <section>
      <div className="mt-48 flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-center">
          Promoções de Hoje
        </h1>
        <CarouselProducts />
      </div>
    </section>
  )
}