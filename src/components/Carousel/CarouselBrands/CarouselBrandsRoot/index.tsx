import { Carousel } from "@/components/ui/carousel";
import { ReactNode } from "react";

export const CarouselBrandsRoot = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Carousel
                opts={{
                    align: "start",
                    // dragFree: true,
                    // skipSnaps: false,
                }}
                // className="w-full px-4 lg:max-w-5xl lg:mx-auto"
                className="w-full max-w-full lg:max-w-5xl"
            >
                {children}
            </Carousel>
        </>
    )
}