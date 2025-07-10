import ButtonCustom  from "@/components/ButtonCustom";
import Image from "next/image";
import { redirect } from "next/navigation";

export default function NotFound() {

  async function handleNotFound() {
    "use server"

    redirect("/");
  }

  return(
    <div className="flex flex-col justify-center items-center gap-8">
      <h1 className="mt-10 text-xl md:text-2xl font-bold text-zinc-900">
        Página não encontrada!
      </h1>

      <Image
        src="/not-found.jpg"
        alt="Página não encontrada."
        width={400}
        height={100}
      />

      <ButtonCustom
        type="button"
        className="bg-zinc-900 text-zinc-100 hover:bg-zinc-950 hover:duration-300"
        onClick={handleNotFound}
      >
        Voltar para Home
      </ButtonCustom>
    </div>
  )
}