import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface ButtomCustomContentProps {
    type: 'submit' | 'button'
    className: string;
    onClick?: () => void;
    children: ReactNode;
}
export default function ButtonCustomContent({ type, className, onClick, children }: ButtomCustomContentProps) {
    return (
        <Button
            type={type}
            variant="secondary"
            className={className}
            onClick={onClick}
        >
            {children}
        </Button>
    )
}