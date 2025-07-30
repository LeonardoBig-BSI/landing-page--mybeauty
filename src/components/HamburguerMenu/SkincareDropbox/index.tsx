import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react";

import { skincare } from "@/constants/skincare";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const SkinCareDropbox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenGroup, setIsOpenGroup] = useState<string | null>(null);

    function handleOpenCombobox() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="mt-4 w-[280px] p-2 bg-zinc-50 border border-zinc-300 rounded-md">
            {/* Título */}
            <button
                className="w-full flex justify-between items-center"
                onClick={handleOpenCombobox}
            >
                <span className="font-medium">Skincare</span>
                {isOpen ? (<ChevronUp />)
                    :
                    (<ChevronDown />)
                }
            </button>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "grid-rows-[1fr] opacity-100 scale-100" : "grid-rows-[0fr] opacity-0 scale-95"
                )}
            >
                <div className="max-h-64 overflow-y-auto space-y-2">
                    {/* Subtítulos - Grupos */}
                    {skincare.map((group) => (
                        <div key={group.title}>
                            <button
                                className="mt-8 mb-8 w-full flex justify-between items-center p-2 bg-zinc-50 border-b-2 rounded-md"
                                onClick={() => setIsOpenGroup((prev) =>
                                    (prev === group.title ? null : group.title))}
                            >
                                <span className="font-medium">{group.title}</span>
                                {isOpenGroup === group.title ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                            </button>

                            {/* Itens do grupo */}
                            <div
                                className={cn(
                                    "mb-8 transition-all duration-300 ease-in-out overflow-hidden",
                                    isOpenGroup === group.title
                                        ? "max-h-40 opacity-100"
                                        : "max-h-0 opacity-0"
                                )}
                            >
                                <ul className="px-2 text-base space-y-1">
                                    {group.items.map((item) => (
                                        <li key={item.id}>
                                            <Link href={item.href} className="mb-4">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}