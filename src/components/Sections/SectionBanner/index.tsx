import Image from "next/image"

export const SectionBanner = () => {
    return(
        <section className="mt-10 flex items-center justify-center p-4 rounded-md">
            <Image
                src="/banner-creme.webp"
                alt="Creme Acetinado Corporal Lily"
                width={700}
                height={100}
                className="object-cover cursor-pointer"
            />
        </section>
    )
}