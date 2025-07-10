import { ReactNode } from "react"

interface HeaderRootProps {
    children: ReactNode;
}

export default function HeaderRoot({ children }: HeaderRootProps) {
    return(
        <header className="relative w-full h-[240px] bg-zinc-950">
            {children}
        </header>
    )
}