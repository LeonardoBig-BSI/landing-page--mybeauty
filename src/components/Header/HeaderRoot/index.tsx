import { ReactNode } from "react"

interface HeaderRootProps {
    children: ReactNode;
}

export default function HeaderRoot({ children }: HeaderRootProps) {
    return(
        <header className="relative w-full h-[260px] md:h-[260px] bg-zinc-950">
            {children}
        </header>
    )
}