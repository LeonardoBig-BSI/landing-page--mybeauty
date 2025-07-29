
export const SectionMap = () => {
    return (
        <section className="mt-48 flex flex-col justify-center items-center gap-8">
            <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-center">
                Venha nos conhecer
            </h1>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3696.2651080436212!2d-51.41016502577427!3d-22.11586561008182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9493f43dcb839edf%3A0x4938875dc526bddd!2sPrudenshopping!5e0!3m2!1spt-BR!2sbr!4v1730301958147!5m2!1spt-BR!2sbr"
                // width="100%"
                // height="450"
                loading="lazy"
                className="md:ml-36 w-full h-[450px]"
            ></iframe>
        </section>
    )
}