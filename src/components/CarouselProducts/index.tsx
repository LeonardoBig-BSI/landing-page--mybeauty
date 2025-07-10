import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import ButtonCustom from "../ButtonCustom"

const products = [
  {
    name: "Hermès Barénia Eau De Parfum Feminino",
    priceOriginal: 'R$899,90',
    pricePromotion: 'R$299,90',
    image: "/card-hermes.webp",
  },
  {
    name: "Kit Sebastian Professional Dark Oil Shampoo 1000ml + Condicionador 1000ml + Potion 9 150ml",
    priceOriginal: 'R$449,90',
    pricePromotion: 'R$129,90',
    image: "/card-kitsebastian.webp",
  },
  {
    name: "Batom Vermelho Cremoso",
    priceOriginal: 'R$59,90',
    pricePromotion: 'R$29,90',
    image: "/card-batom.webp",
  },
  {
    name: "Boticario Paleta de Sombras",
    priceOriginal: 'R$99,90',
    pricePromotion: 'R$59,90',
    image: "/card-paleta-sombra.webp",
  },
]

export default function CarouselProducts() {
  return (
    <Carousel className="w-full max-w-xs">
      <CarouselContent>
        {products.map((currProduct, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex flex-col aspect-square items-center justify-center p-6">
                  <Image
                    src={currProduct.image}
                    alt={currProduct.name}
                    width={300}
                    height={300}
                    className="object-contain rounded-md"
                  />

                  <div className="flex flex-col justify-center items-center gap-4">
                    <h2 className="mt-2 text-center text-sm md:text-base lg:text-lg text-zinc-700">{currProduct.name}</h2>
                    <p className="mt-2 text-center text-sm md:text-base lg:text-lg text-zinc-700">
                      <del>{currProduct.priceOriginal}</del>
                      <span className="pl-2 font-bold">{currProduct.pricePromotion}</span>
                    </p>

                    <ButtonCustom
                      type="button"
                      className="bg-zinc-950 text-zinc-100 hover:bg-zinc-950"
                    >
                      Comprar
                    </ButtonCustom>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="ml-2 hidden sm:flex" />
      <CarouselNext className="ml-2 hidden sm:flex"/>
    </Carousel>
  )
}
