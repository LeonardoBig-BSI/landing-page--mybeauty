import Image from "next/image"

export default function SectionApresentation() {
  return (
    <section>
      <div className="mt-24 md:mt-72 lg:mt-72 xl:mt-72 flex flex-col justify-center items-center gap-8">

        <h1 className="text-2xl md:text-3xl lg:text-3xl xl:text-3xl font-bold text-center">Venha Conhecer</h1>
        <p className="text-center text-base md:text-base lg:text-xl xl:text-xl leading-relaxed max-w-3xl p-2 text-zinc-700">
          Na MyBeauty, acreditamos que a beleza vai muito além da aparência — ela é uma experiência que desperta confiança, bem-estar e autoestima. Nossa curadoria reúne perfumes, maquiagens e produtos de skincare cuidadosamente selecionados, com qualidade premium e marcas consagradas no mercado. 
         
          Descubra um universo de fragrâncias marcantes, texturas sofisticadas e novidades que vão transformar o seu ritual de autocuidado.

          Sinta, explore e apaixone-se pelo que a MyBeauty tem a oferecer. Você merece essa experiência única.
        </p>

        <Image
          src="/perfumes.jpg"
          alt="Perfumes"
          width={400}
          height={50}
          className="mt-8 md:ml-10 rounded-md"
        />
      </div>
    </section>
  )
}