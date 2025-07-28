import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

import { productsOffer } from "@/constants/productsOffer"
import { ButtonCustom } from "@/components/ButtonCustom"

export const CarouselProductsOfferContent = () => {
    return (
        <>
            <CarouselContent>
                {productsOffer.map((item, index) => (
                    <CarouselItem key={index} className="basis-3/4 md:basis-1/3 lg:basis-1/4">
                        <div className="p-2">
                            <Card className="h-[400px] w-full">
                                <CardContent className="flex flex-col items-center justify-between p-4 h-full">
                                    <Image
                                        src={item.image}
                                        alt={item.name}
                                        width={180}
                                        height={180}
                                        className="object-cover rounded-lg"
                                    />
                                    <div className="flex flex-col gap-1 min-h-[80px] text-center">
                                        <p className="font-semibold text-sm line-clamp-2">{item.name}</p>
                                        <del className="text-zinc-400 text-sm">{item.priceOriginal}</del>
                                        <p className="text-yellow-600 font-bold text-lg">{item.pricePromotion}</p>
                                    </div>

                                    <ButtonCustom.Root>
                                        <ButtonCustom.Content
                                            type="button"
                                            className="w-full px-6 py-2 rounded-md bg-white border border-yellow-600 font-bold hover:bg-yellow-600 hover:text-white duration-500"
                                        >
                                            Adicionar à Sacola
                                        </ButtonCustom.Content>
                                    </ButtonCustom.Root>
                                </CardContent>
                            </Card>
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="hidden lg:flex" />
            <CarouselNext className="hidden lg:flex" />
        </>
    )
}