import { MapPin, Search, ShoppingBag, User } from "lucide-react";
import Image from "next/image";

import Input from "../Input";
import NavBar from "../NavBar";

export default function Header() {
    return (
        <header className="relative w-full h-[240px] bg-zinc-950">

            <div className="flex items-center justify-between gap-2">
                {/* Logo */}
                <Image
                    src="/mybeauty.jpeg"
                    alt="My Beauty"
                    width={200}
                    height={20}
                    className="ml-8 object-contain"
                />

                {/* Filtro */}
                <div className="relative w-[50vw]">
                    <Input
                        type="text"
                        className="w-full h-10 text-lg px-4 py-2 rounded-lg text-center bg-zinc-100 text-zinc-700"
                        placeholder="O que você quer para hoje?"
                    />
                    <Search
                        className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500"
                        size={20}
                    />
                </div>

                {/* Localização, Login, Sacola */}
                <div className="flex items-center text-zinc-100 px-6 gap-8">
                    <button className="flex flex-row items-center hover:text-zinc-300 transition">
                        <MapPin size={20} />
                        <span className="pl-2 text-md">Localização</span>
                    </button>
                    <button className="flex flex-row items-center hover:text-zinc-300 transition">
                        <User size={20} />
                        <span className="pl-2 text-md">Entrar</span>
                    </button>
                    <button className="flex flex-row items-center hover:text-zinc-300 transition">
                        <ShoppingBag size={20} />
                        <span className="pl-2 text-md">Sacola</span>
                    </button>
                </div>
            </div>

            <nav className="flex justify-between items-center gap-4 bg-zinc-950">
                <NavBar />
            </nav>
        </header>
    )
}