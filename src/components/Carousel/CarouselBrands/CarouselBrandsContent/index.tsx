"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { logos } from "@/constants/logos"
import { useIsMobile } from "@/hooks/useIsMobile"
import { CarouselBrandsMobileTablets } from "../CarouselBrandsMobileTablets"

export const CarouselBrandsContent = () => {
    const isMobile = useIsMobile();

    return isMobile ? (
        // <>
        //     <CarouselContent className="flex gap-2 px-2 touch-pan-x">
        //         {logos.map((item) => (
        //             <div>
        //                 <CarouselItem
        //                 key={item.id}
        //                 className="px-2"
        //             >
        //                 <Card className="shadow-none border-none bg-transparent">
        //                     <CardContent className="p-0 flex justify-center">
        //                         <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border border-zinc-200">
        //                             <Image
        //                                 src={item.image}
        //                                 alt={item.name}
        //                                 fill
        //                                 className="object-cover cursor-pointer"
        //                             />
        //                         </div>
        //                     </CardContent>
        //                 </Card>
        //             </CarouselItem>
        //             </div>
        //         ))}
        //     </CarouselContent>

        //     {/* <CarouselPrevious className="flex absolute left-2 top-1/2 -translate-y-1/2 z-10" />
        //     <CarouselNext className="flex absolute right-2 top-1/2 -translate-y-1/2 z-10" /> */}

        // </>

        <>
            <CarouselBrandsMobileTablets />
        </>
    )
        : (
            <>
                <CarouselContent className="flex gap-8">
                    {logos.map((item) => (
                        <CarouselItem
                            key={item.id}
                            className="basis-auto px-1 inline-block"
                        >
                            <Card className="shadow-none border-none bg-transparent">
                                <CardContent className="p-0">
                                    <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border border-zinc-200">
                                        <Image
                                            src={item.image}
                                            alt={item.name}
                                            fill
                                            className="object-cover cursor-pointer"
                                        />
                                    </div>
                                </CardContent>
                            </Card>
                        </CarouselItem>
                    ))}
                </CarouselContent>

                <CarouselPrevious className="hidden lg:flex" />
                <CarouselNext className="hidden lg:flex" />
            </>
        )
}
