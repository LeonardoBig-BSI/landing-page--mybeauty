import { Check, ChevronsUpDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Popover } from "../ui/popover";
import { useState } from "react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

import { fragrances } from "@/constants/fragrances";
import { body } from "@/constants/body";
import { gift } from "@/constants/gift";
import { hair } from "@/constants/hair";
import { make } from "@/constants/make";
import { male } from "@/constants/male";
import { skincare } from "@/constants/skincare";

export default function HamburguerMenu() {
  const [fragOpen, setFragOpen] = useState<boolean>(false);
  const [fragSelected, setFragSelected] = useState<string>("");

  // const [hairOpen, setHairOpen] = useState<boolean>(false);
  // const [hairSelected, setHairSelected] = useState<string>("");

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="ml-4 cursor-pointer text-zinc-100">
            <Menu />
          </button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Categorias</SheetTitle>
          <SheetDescription className="mb-8">
            Escolha os itens que mais te encanta!
          </SheetDescription>
        </SheetHeader>

        {/* Perfumaria */}
        <Popover open={fragOpen} onOpenChange={setFragOpen}>
          <PopoverTrigger className="mt-4" asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={fragOpen}
              className="w-[200px] justify-between"
            >
              {fragSelected
                ? fragrances.flatMap(f => f.items).find(frag => frag.name === fragSelected)?.name
                : "Perfumaria"
              }

              <ChevronsUpDown className="opacity-50" />
            </Button>

          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Pesquisar..." className="h-9" />
              <CommandList>
                <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                <CommandGroup>
                  {fragrances.map((currFrag) =>
                    currFrag.items.map((frag) => (
                      <CommandItem
                        key={frag.name}
                        value={frag.name}
                        onSelect={() => {
                          setFragSelected(frag.name)
                          setFragOpen(false)
                        }}
                      >

                        {frag.name}
                      <Check
                        className={cn(
                          "ml-auto",
                          fragSelected === frag.name ? "opacity-100" : "opacity-0"
                        )}
                      />

                      </CommandItem>
                    ))
                  )}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </SheetContent>
    </Sheet>
  )
}