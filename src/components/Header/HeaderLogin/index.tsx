import { MapPin, ShoppingBag, User } from "lucide-react"

export default function HeaderLogin() {
    return (
        <>
            {/* Localização, Login, Sacola */}
            <div className="flex items-center text-zinc-100 px-6 gap-4 lg:gap-8">
                <button className="flex flex-row items-center hover:text-zinc-300 transition">
                    <MapPin size={20} />
                    <span className="pl-2 md:text-md hidden lg:inline">Localização</span>
                </button>
                <button className="flex flex-row items-center hover:text-zinc-300 transition">
                    <User size={20} />
                    <span className="pl-2 md:text-md hidden lg:inline">Entrar</span>
                </button>
                <button className="flex flex-row items-center hover:text-zinc-300 transition">
                    <ShoppingBag size={20} />
                    <span className="pl-2 md:text-md hidden lg:inline">Sacola</span>
                </button>
            </div>
        </>
    )
}