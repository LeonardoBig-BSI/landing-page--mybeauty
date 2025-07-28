import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { logos } from "@/constants/logos"

export const CarouselBrandsContent = () => {
    return (
        <div className="relative w-full">
            <CarouselContent className="flex gap-8">
                {logos.map((item) => (
                    <CarouselItem
                        key={item.id}
                        className="shrink-0 basis-auto px-1"
                    >
                        <Card className="shadow-none border-none bg-transparent">
                            <CardContent className="p-0">
                                <div className="relative w-[100px] h-[100px] rounded-full overflow-hidden border border-zinc-200">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </CardContent>
                        </Card>
                    </CarouselItem>
                ))}
            </CarouselContent>

            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
        </div>
    )
}
