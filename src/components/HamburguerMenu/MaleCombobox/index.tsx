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

import { male } from "@/constants/male";

export const MaleCombobox = () => {
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
                        {selectedItem || "Masculinos"}

                        <ChevronsUpDown className="opacity-50" />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-[300px] p-0">
                    <Command>
                        <CommandInput placeholder="Buscar marcas ou tipos..." />
                        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>

                        {male.map((group) => (
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
}