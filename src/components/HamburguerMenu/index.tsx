import { Menu } from "lucide-react";
import { 
    Sheet, 
    SheetContent, 
    SheetDescription, 
    SheetHeader, 
    SheetTitle, 
    SheetTrigger 
} from "../ui/sheet";

import { FraganceCombobox } from "./FraganceCombobox";
import { HairCombobox } from "./HairCombobox";
import { BodyCombobox } from "./BodyCombobox";
import { MakeCombobox } from "./MakeCombobox";
import { MaleCombobox } from "./MaleCombobox";
import { GiftCombobox } from "./GiftCombobox";
import { SkinCareDropbox } from "./SkincareDropbox";

export default function HamburguerMenu() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-4 cursor-pointer text-zinc-100">
            <Menu />
          </button>
      </SheetTrigger>

      <SheetContent side="left" className="max-h-screen overflow-y-auto overflow-visible pb-6">
        <SheetHeader>
          <SheetTitle>Categorias</SheetTitle>
          <SheetDescription className="mb-8">
            Escolha os itens que mais te encanta!
          </SheetDescription>
        </SheetHeader>

        {/* Perfumaria */}
        {/* <FraganceCombobox /> */}

        {/* Cabelos */}
        {/* <HairCombobox /> */}

        {/* Corpo & Banho */}
        {/* <BodyCombobox /> */}

        {/* Maquiagem */}
        {/* <MakeCombobox /> */}
        
        {/* Skincare */}
        <SkinCareDropbox />

        {/* Masculinos */}
        {/* <MaleCombobox /> */}

        {/* Presentes */}
        {/* <GiftCombobox /> */}

      </SheetContent>
    </Sheet>
  )
}