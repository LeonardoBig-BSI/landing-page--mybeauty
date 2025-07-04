import { text } from "stream/consumers";

interface InputProps {
    type: string;
    className: string;
    placeholder: string;
}

export default function Input({ type, className, placeholder }: InputProps) {
    return (
        <input
          type={type}
          className={className}
          placeholder={placeholder}
        />
    )
}