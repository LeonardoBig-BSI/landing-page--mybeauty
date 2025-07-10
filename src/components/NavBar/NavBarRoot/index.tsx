import { ReactNode } from "react"

interface NavBarRootProps {
    children: ReactNode;
}

export default function NavBarRoot({ children }: NavBarRootProps) {
    return(
        <div className="relative w-full">
            {children}
        </div>
    )
}