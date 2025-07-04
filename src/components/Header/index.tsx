import Image from "next/image"
import NavBar from "../NavBar"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { MenuIcon, Search } from "lucide-react"
import Input from "../Input"

export default function Header() {
  return (
    <header className="flex justify-center items-center relative w-full h-[400px] bg-zinc-950">
      <div className="md:ml-24 absolute top-2 left-5">
        <Input
          type="text"
          className="w-[80vw] md:w-[50vw] h-10 text-lg px-4 py-2 rounded-lg text-center bg-zinc-100 text-zinc-700"
          placeholder="O que você quer para hoje?"
        />
        <Search
          className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500"
          size={20}
        />
      </div>

      {/* Menubar para telas maiores */}
      <nav className="absolute top-2 right-2 hidden md:block lg:block xl:block">
        <NavBar />
      </nav>

      {/* Menu Hamburger para telas pequenas */}
      <div className="absolute top-2 right-2 block md:hidden lg:hidden xl:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="p-2 text-white">
              <MenuIcon size={24} />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="p-4 bg-zinc-950 text-white">
            <SheetHeader>
              <SheetTitle>Menu</SheetTitle>
            </SheetHeader>

            {/* NavBar só no mobile */}
            <NavBar isMobile />
          </SheetContent>
        </Sheet>
      </div>

      <Image
        src="/mybeauty.jpeg"
        alt="My Beauty"
        width={400}
        height={50}
        className="object-contain"
      />
    </header>
  )
}