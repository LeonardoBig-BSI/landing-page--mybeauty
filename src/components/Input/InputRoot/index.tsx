import { ReactNode } from "react"

interface InputRootProps {
    children: ReactNode;
}

export default function InputRoot({ children }: InputRootProps) {
    return(
        <div className="relative w-[80vw] md:w-[50vw]">
            {children}
        </div>
    )
}