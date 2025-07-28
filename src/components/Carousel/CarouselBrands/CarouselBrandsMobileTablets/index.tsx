import Image from "next/image"

import { logos } from "@/constants/logos"

export const CarouselBrandsMobileTablets = () => {
    return (
        <div className="w-full overflow-x-auto">
            <div className="flex gap-4 px-4">
                {logos.map((item) => (
                    <div
                        key={item.id}
                        className="relative w-[100px] h-[100px] flex-none rounded-full overflow-hidden border border-zinc-200"
                    >
                        <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover cursor-pointer"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}