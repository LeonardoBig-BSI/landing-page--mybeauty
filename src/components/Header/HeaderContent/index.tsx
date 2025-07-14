"use client"

import { ReactNode } from "react";
import { Header } from "..";
import { useIsMobile } from "@/hooks/useIsMobile";
import { NavBar } from "@/components/NavBar";
import HamburguerMenu from "@/components/HamburguerMenu";

export default function HeaderContent() {
    const isMobile = useIsMobile();

    return isMobile ? (
        <div className="flex flex-col items-center justify-between gap-2 lg:[1024px]">
            <div className="flex flex-row items-center justify-between w-full md:w-auto">
                <HamburguerMenu />                

                <Header.Image
                    src="/mybeauty.jpeg"
                    alt="My Beauty"
                    width={200}
                    height={20}
                    className="ml-4 object-contain"
                />
                <Header.Login />
            </div>

            <div className="flex justify-center w-full">
                <Header.Filter />
            </div>
        </div>
    ) : (
        <div className="flex flex-col items-center justify-between gap-2 lg:[1024px]">
            <div className=" flex flex-row items-center justify-between w-full md:w-auto">
                <Header.Image
                    src="/mybeauty.jpeg"
                    alt="My Beauty"
                    width={200}
                    height={20}
                    className="object-contain"
                />

                <Header.Filter />

                <Header.Login />
            </div>

            {/* NavBar */}
            <NavBar.Root>
                <NavBar.Content />
            </NavBar.Root>
        </div>
    )
}