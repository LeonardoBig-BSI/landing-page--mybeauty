import { useState } from "react"
import { ChevronDown, ChevronUp } from "lucide-react";

import { body } from "@/constants/body";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const BodyDropbox = () => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isOpenGroup, setIsOpenGroup] = useState<string | null>(null);

    function handleOpenCDropbox() {
        setIsOpen((prev) => !prev);
    }

    return (
        <div className="mt-4 w-[340px] p-2 bg-white border border-white rounded-md">
            {/* Título */}
            <button
                className="w-full flex justify-between items-center"
                onClick={handleOpenCDropbox}
            >
                <span className="font-medium text-zinc-900">Corpo & Banho</span>
                {isOpen ? (<ChevronUp color="#000" />)
                    :
                    (<ChevronDown color="#000" />)
                }
            </button>

            <div
                className={cn(
                    "grid transition-all duration-300 ease-in-out overflow-hidden",
                    isOpen ? "grid-rows-[1fr] opacity-100 scale-100" : "grid-rows-[0fr] opacity-0 scale-95"
                )}
            >
                <div className="max-h-72 overflow-y-auto space-y-2">
                    {/* Subtítulos - Grupos */}
                    {body.map((group) => (
                        <div key={group.title}>
                            <button
                                className="mt-8 mb-8 w-full flex justify-between items-center p-2 bg-white border-b-2 border-b-zinc-400 rounded-md"
                                onClick={() => setIsOpenGroup((prev) =>
                                    (prev === group.title ? null : group.title))}
                            >
                                <span className="font-medium text-zinc-900">{group.title}</span>
                                {isOpenGroup === group.title ? 
                                    <ChevronUp size={16} color="#000" /> 
                                    : <ChevronDown size={16} color="#000" />}
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
                                                <span className="text-zinc-900">{item.name}</span>
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