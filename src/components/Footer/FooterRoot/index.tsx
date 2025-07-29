import { ReactNode } from "react"

export const FooterRoot = ({ children }: { children: ReactNode }) => {
    return(
        <footer className="mt-80 md:mt-40 p-5 bg-black">
            {children}
        </footer>
    )
}