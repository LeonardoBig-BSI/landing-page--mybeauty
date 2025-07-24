import { CarouselProductsBestsellers } from "@/components/Carousel/CarouselProductsBestsellers"

export const SectionCarouselProductsBestsellers = () => {
    return (
        <section>
            <div className="mt-48 flex flex-col justify-center items-center gap-8">
                <h1 className="text-2xl md:text-4xl font-bold text-center">
                    Produtos mais vendidos
                </h1>

                <CarouselProductsBestsellers.Root>
                    <CarouselProductsBestsellers.Content />
                </CarouselProductsBestsellers.Root>
            </div>
        </section>
    )
}