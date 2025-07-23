import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { ChevronsUpDown } from "lucide-react";

import { fragrances } from "@/constants/fragrances";

export const FraganceCombobox = () => {
    // const [fragOpen, setFragOpen] = useState<boolean>(false);
    // const [fragSelected, setFragSelected] = useState<string>("");
    const [open, setOpen] = useState<boolean>(false);
    const [selectedItem, setSelectedItem] = useState<string>("");

    const handleSelect = (itemName: string) => {
        setSelectedItem(itemName);
        setOpen(false);
    }

    return (
        <>
            <Popover open={open} onOpenChange={setOpen}>
                <PopoverTrigger asChild>
                    <Button
                        variant="outline"
                        role="combobox"
                        className="mt-4 w-[200px] justify-between"
                    >
                        {selectedItem || "Perfumaria"}

                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Buscar marcas ou tipos..." />
                        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

                        {fragrances.map((group) => (
                            <CommandGroup
                                key={group.title}
                                heading={group.title}
                            >
                                {group.items.map((item) => (
                                    <CommandItem
                                        key={item.id}
                                        onSelect={() => handleSelect(item.name)}
                                    >
                                        {item.name}
                                    </CommandItem>
                                ))}
                            </CommandGroup>
                        ))}
                    </Command>
                </PopoverContent>
            </Popover>
        </>
    )

    // return (
    //     <>
    //         {/* Perfumaria */}
    //         <Popover open={fragOpen} onOpenChange={setFragOpen}>
    //             <PopoverTrigger className="mt-4" asChild>
    //                 <Button
    //                     variant="outline"
    //                     role="combobox"
    //                     aria-expanded={fragOpen}
    //                     className="w-[200px] justify-between"
    //                 >
    //                     {fragSelected
    //                         ? fragrances.flatMap(f => f.items).find(frag => frag.name === fragSelected)?.name
    //                         : "Perfumaria"
    //                     }

    //                     <ChevronsUpDown className="opacity-50" />
    //                 </Button>

    //             </PopoverTrigger>
    //             <PopoverContent className="w-[200px] p-0">
    //                 <Command>
    //                     <CommandInput placeholder="Pesquisar..." className="h-9" />
    //                     <CommandList>
    //                         <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
    //                         <CommandGroup>
    //                             {fragrances.map((currFrag) =>
    //                                 currFrag.items.map((frag) => (
    //                                     <CommandItem
    //                                         key={frag.name}
    //                                         value={frag.name}
    //                                         onSelect={() => {
    //                                             setFragSelected(frag.name)
    //                                             setFragOpen(false)
    //                                         }}
    //                                     >

    //                                         {frag.name}
    //                                         <Check
    //                                             className={cn(
    //                                                 "ml-auto",
    //                                                 fragSelected === frag.name ? "opacity-100" : "opacity-0"
    //                                             )}
    //                                         />

    //                                     </CommandItem>
    //                                 ))
    //                             )}
    //                         </CommandGroup>
    //                     </CommandList>
    //                 </Command>
    //             </PopoverContent>
    //         </Popover>
    //     </>
    // )
}