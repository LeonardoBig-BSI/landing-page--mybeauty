import { CarouselProductsOffer } from "@/components/Carousel/CarouselProducts"

export const SectionCarouselProductsOffer = () => {
  return (
    <section>
      <div className="mt-48 flex flex-col justify-center items-center gap-8">
        <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-center">
          Ofertas do dia
        </h1>
        
        <CarouselProductsOffer.Root>
          <CarouselProductsOffer.Content />
        </CarouselProductsOffer.Root>
      </div>
    </section>
  )
}