import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger
} from "../ui/sheet";

import { SkinCareDropbox } from "./SkincareDropbox";
import { BodyDropbox } from "./BodyDropbox";
import { FraganceDropbox } from "./FraganceDropbox";
import { GiftDropbox } from "./GiftDropbox";
import { HairDropbox } from "./HairDropbox";
import { MakeDropbox } from "./MakeDropbox";
import { MaleDropbox } from "./MaleDropbox";

export default function HamburguerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-4 cursor-pointer text-zinc-100">
          <Menu />
        </button>
      </SheetTrigger>

      <SheetContent side="left" className="w-[380px] max-h-screen overflow-y-auto overflow-visible pb-6 bg-zinc-200">
        <SheetHeader>
          <SheetTitle className="text-zinc-900">Categorias</SheetTitle>
          <SheetDescription className=" text-zinc-900">
            Escolha os itens que mais te encanta!
          </SheetDescription>
        </SheetHeader>

        <div className="mt-12">
          {/* Perfumaria */}
          <FraganceDropbox />

          {/* Cabelos */}
          <HairDropbox />

          {/* Corpo & Banho */}
          <BodyDropbox />

          {/* Maquiagem */}
          <MakeDropbox />

          {/* Skincare */}
          <SkinCareDropbox />

          {/* Masculinos */}
          <MaleDropbox />

          {/* Presentes */}
          <GiftDropbox />
        </div>

      </SheetContent>
    </Sheet>
  )
}