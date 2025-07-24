import { Carousel } from "@/components/ui/carousel";
import { ReactNode } from "react";

export const CarouselProductsOfferRoot = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                }}
                // className="w-full max-w-5xl mx-auto"
                className="w-full px-4 lg:max-w-5xl lg:mx-auto"
            >
                {children}
            </Carousel>
        </>
    )
}