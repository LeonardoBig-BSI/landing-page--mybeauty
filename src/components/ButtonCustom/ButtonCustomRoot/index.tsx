import { ReactNode } from "react";

interface ButtomCustomRootProps {
    children: ReactNode;
}

export default function ButtonCustomRoot({ children }: ButtomCustomRootProps) {
    return(
        <>{children}</>
    )
}