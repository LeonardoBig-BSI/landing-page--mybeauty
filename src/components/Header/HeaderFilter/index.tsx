import Input from "@/components/Input";
import { Search } from "lucide-react";

export default function HeaderFilter() {
    return (
        <>
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
        </>
    )
}