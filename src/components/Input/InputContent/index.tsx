import { Search } from "lucide-react";

interface InputContentProps {
    type: string;
    className: string;
    placeholder: string;
}

export default function InputContent({ type, className, placeholder }: InputContentProps) {
    return (
        <>
            <input
                type={type}
                className={className}
                placeholder={placeholder}
            />
            <Search
                className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-500"
                size={20}
            />
        </>
    )
}