import { ReactNode } from "react";

interface HeaderContentProps {
    children: ReactNode;
}

export default function HeaderContent({ children }: HeaderContentProps) {
    return(
        <div className="flex items-center justify-between gap-2">
            {children}
        </div>
    )
}