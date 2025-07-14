import { Check, ChevronsUpDown, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Popover } from "../ui/popover";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "../ui/drawer";
import { ButtonCustom } from "../ButtonCustom";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command";
import { PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const teste = [
  {
    value: "backlog",
    label: "Backlog",
  },
  {
    value: "todo",
    label: "Todo",
  },
  {
    value: "in progress",
    label: "In Progress",
  },
]

export default function HamburguerMenu() {
  const [open, setOpen] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

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
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger className="mt-4" asChild>
            <Button
              variant="outline"
              role="combobox"
              aria-expanded={open}
              className="w-[200px] justify-between"
            >
              {value
                ? teste.find((currT) => currT.value === value)?.label
                : "Perfumaria"
              }

              <ChevronsUpDown className="opacity-50" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[200px] p-0">
            <Command>
              <CommandInput placeholder="Search ..." className="h-9" />
              <CommandList>
                <CommandEmpty>No teste found.</CommandEmpty>
                <CommandGroup>
                  {teste.map((currT) => (
                    <CommandItem
                      key={currT.value}
                      value={currT.value}
                      onSelect={(currentValue) => {
                        setValue(currentValue === value ? "" : currentValue)
                        setOpen(false)
                      }}
                    >
                      {currT.label}
                      <Check
                        className={cn(
                          "ml-auto",
                          value === currT.value ? "opacity-100" : "opacity-0"
                        )}
                      />
                    </CommandItem>
                  ))}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </SheetContent>
    </Sheet>
  )
}