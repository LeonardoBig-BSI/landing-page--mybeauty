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
import { ArrowDown, ArrowRight, ChevronDown, ChevronsUpDown } from "lucide-react";

import { skincare } from "@/constants/skincare";

// export const SkincareCombobox = () => {
//     const [open, setOpen] = useState<boolean>(false);
//     const [selectedItem, setSelectedItem] = useState<string>("");

//     const handleSelect = (itemName: string) => {
//         setSelectedItem(itemName);
//         setOpen(false);
//     }
//     return (
//         <>
//             <Popover open={open} onOpenChange={setOpen}>
//                 <PopoverTrigger asChild>
//                     <Button
//                         variant="outline"
//                         role="combobox"
//                         className="mt-4 w-[200px] justify-between"
//                     >
//                         {selectedItem || "Skincare"}

//                         <ChevronsUpDown className="opacity-50" />
//                     </Button>
//                 </PopoverTrigger>

//                 <PopoverContent
//                     className="w-[300px] p-0"
//                     avoidCollisions={false}
//                     portalled={false}
//                     forceMount
//                     side="bottom"
//                     align="start"
//                     sideOffset={4}
//                 >
//                     <div
//                         className="max-h-[240px] overflow-y-auto"
//                     >
//                         <Command>
//                             {/* <CommandInput placeholder="Buscar marcas ou tipos..." />
//                             <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty> */}

//                             {skincare.map((group) => (
//                                 <CommandGroup
//                                     key={group.title}
//                                     heading={group.title}
//                                 >
//                                     {group.items.map((item) => (
//                                         <CommandItem
//                                             key={item.id}
//                                             onSelect={() => handleSelect(item.name)}
//                                         >
//                                             {item.name}
//                                         </CommandItem>
//                                     ))}
//                                 </CommandGroup>
//                             ))}
//                         </Command>
//                     </div>
//                 </PopoverContent>

//             </Popover>
//         </>
//     )
// }

export const TesteSkinCareCombobox = () => {
    const [toggleCombobox, setToggleCombobox] = useState<boolean>(false);

    function handleToggleCombobox() {
        // setToggleCombobox((prev) => {
        //     return { ...prev }
        // });
        return;
    }
    
    return (
        <div className="mt-4 w-[280px] max-h-60 p-2 overflow-y-auto bg-white border border-zinc-200">
            <div className="flex justify-between">
                <h2>Skincare</h2>
                
                <button onClick={handleToggleCombobox}>
                    <ChevronDown />
                </button>

                {toggleCombobox ? (<>Clicou</>) : (<></>)}
            </div>
            {/* <ul>
                {skincare.flatMap(group =>
                    group.items.map(item => (
                        <li key={item.id} className="p-2 border-b last:border-b-0">
                            {item.name}
                        </li>
                    ))
                )}
            </ul> */}
        </div>
    )
}