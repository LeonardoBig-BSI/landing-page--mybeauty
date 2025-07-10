import { Button } from "@/components/ui/button"
import { ReactNode } from "react"

interface ButtonCustom {
  type: 'submit' | 'button'
  className: string;
  onClick?: () => void;
  children: ReactNode;
}

export default function ButtonCustom({ type, className, onClick, children }: ButtonCustom) {
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