import Image from "next/image";

interface HeaderImageProps {
    src: string;
    alt: string;
    width: number | `${number}` | undefined;
    height: number | `${number}` | undefined;
    className?: string;
}

export default function HeaderImage({ src, alt, width, height, className }: HeaderImageProps) {
    return (
        <>
            {/* Logo */}
            <Image
                src={src}
                alt={alt}
                width={width}
                height={height}
                className={className}
            />
        </>
    )
}