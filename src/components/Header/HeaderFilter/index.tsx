// import Input from "@/components/Input";
// import { Search } from "lucide-react";

import { Input } from "@/components/Input";

export default function HeaderFilter() {
    return (
        <>
            {/* Filtro */}
            <Input.Root>
                <Input.Content
                    type="text"
                    className="w-full h-10 text-base md:text-md lg:text-lg px-4 py-2 rounded-lg text-center bg-zinc-100 text-zinc-700"
                    placeholder="O que você quer para hoje?"
                />
            </Input.Root>
        </>
    )
}