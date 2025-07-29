import { CarouselBrands } from "@/components/Carousel/CarouselBrands";

export const SectionCarouselBrands = () => {
    return (
        <section className="w-full px-4 lg:px-0 mt-20">
            <div className="flex flex-col items-center lg:justify-center gap-6">
                <h1 className="text-2xl md:text-3xl font-bold text-center lg:text-left whitespace-nowrap">
                    Algumas de nossas marcas
                </h1>

                <div className="mt-4 ml-10">
                    <CarouselBrands.Root>
                        <CarouselBrands.Content />
                    </CarouselBrands.Root>

                   
                </div>
            </div>
        </section>
    )
}
