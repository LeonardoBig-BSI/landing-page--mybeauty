"use client"

import { ReactNode } from "react"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { fragrances } from "@/constants/fragrances";
import { hair } from "@/constants/hair";
import { body } from "@/constants/body";
import { make } from "@/constants/make";
import { skincare } from "@/constants/skincare";
import { male } from "@/constants/male";
import { gift } from "@/constants/gift";
import Link from "next/link";

export default function NavBarContent() {
    return (
            <NavigationMenu className="mx-auto">
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Perfumaria</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="grid w-[500px] gap-2 p-4 md:w-[890px] md:h-[380px] md:grid-cols-2 rounded-md shadow-lg">
                                {fragrances.map((fragCategory) => (
                                    <ListItem
                                        key={fragCategory.title}
                                        title={fragCategory.title}
                                        href={fragCategory.href}
                                        className="pl-4"
                                    >
                                        {fragCategory.items
                                            .sort((fragA, fragB) => fragA.name.localeCompare(fragB.name))
                                            .map((currFrag) => (
                                                <div key={currFrag.id} className="mt-2">
                                                    <p className="hover:text-zinc-950 hover:font-bold">
                                                        {currFrag.name}
                                                    </p>
                                                </div>
                                            ))}

                                        <p className="mt-5 hover:text-zinc-950 hover:font-bold">
                                            Ver tudo +
                                        </p>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Cabelos</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="flex gap-12 w-[500px] md:w-[890px] md:h-[380px] p-4 rounded-md shadow-lg bg-white">
                                {hair.map((hairCategory) => (
                                    <ListItem
                                        key={hairCategory.title}
                                        title={hairCategory.title}
                                        href={hairCategory.href}
                                        className="!pl-0 !list-none w-[200px]"
                                    >
                                        <ul className="space-y-1">
                                            {hairCategory.items
                                                .sort((a, b) => a.name.localeCompare(b.name))
                                                .map((item) => (
                                                    <li
                                                        key={item.id}
                                                        className="text-sm text-muted-foreground hover:text-zinc-900 hover:font-semibold cursor-pointer"
                                                    >
                                                        {item.name}
                                                    </li>
                                                ))}
                                        </ul>

                                        <p className="mt-5 hover:text-zinc-950 hover:font-bold">
                                            Ver tudo +
                                        </p>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Corpo & Banho</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="flex gap-12 w-[500px] md:w-[890px] md:h-[380px] p-4 rounded-md shadow-lg bg-white">
                                {body.map((bodyCategory) => (
                                    <ListItem
                                        key={bodyCategory.title}
                                        title={bodyCategory.title}
                                        href={bodyCategory.href}
                                        className="!pl-0 !list-none w-[200px]"
                                    >
                                        <ul className="space-y-1">
                                            {bodyCategory.items
                                                .sort((bodyA, bodyB) => bodyA.name.localeCompare(bodyB.name))
                                                .map((currBody) => (
                                                    <li
                                                        key={currBody.id}
                                                        className="text-sm text-muted-foreground hover:text-zinc-900 hover:font-semibold cursor-pointer"
                                                    >
                                                        {currBody.name}
                                                    </li>
                                                ))}
                                        </ul>

                                        <p className="mt-5 hover:text-zinc-950 hover:font-bold">
                                            Ver tudo +
                                        </p>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Maquiagem</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="flex gap-12 w-[500px] md:w-[890px] md:h-[380px] p-4 rounded-md shadow-lg bg-white">
                                {make.map((makeCategory) => (
                                    <ListItem
                                        key={makeCategory.title}
                                        title={makeCategory.title}
                                        href={makeCategory.href}
                                        className="!pl-0 !list-none w-[200px]"
                                    >
                                        <ul className="space-y-1">
                                            {makeCategory.items
                                                .sort((makeA, makeB) => makeA.name.localeCompare(makeB.name))
                                                .map((currMake) => (
                                                    <li
                                                        key={currMake.id}
                                                        className="text-sm text-muted-foreground hover:text-zinc-900 hover:font-semibold cursor-pointer"
                                                    >
                                                        {currMake.name}
                                                    </li>
                                                ))}
                                        </ul>

                                        <p className="mt-5 hover:text-zinc-950 hover:font-bold">
                                            Ver tudo +
                                        </p>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Skincare</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="flex gap-12 w-[500px] md:w-[890px] md:h-[380px] p-4 rounded-md shadow-lg bg-white">
                                {skincare.map((skinCategory) => (
                                    <ListItem
                                        key={skinCategory.title}
                                        title={skinCategory.title}
                                        href={skinCategory.href}
                                        className="!pl-0 !list-none w-[200px]"
                                    >
                                        <ul className="space-y-1">
                                            {skinCategory.items
                                                .sort((skinA, skinB) => skinA.name.localeCompare(skinB.name))
                                                .map((currSkin) => (
                                                    <li
                                                        key={currSkin.id}
                                                        className="text-sm text-muted-foreground hover:text-zinc-900 hover:font-semibold cursor-pointer"
                                                    >
                                                        {currSkin.name}
                                                    </li>
                                                ))}
                                        </ul>

                                        <p className="mt-5 hover:text-zinc-950 hover:font-bold">
                                            Ver tudo +
                                        </p>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Masculinos</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="flex gap-12 w-[500px] md:w-[890px] md:h-[380px] p-4 rounded-md shadow-lg bg-white">
                                {male.map((maleCategory) => (
                                    <ListItem
                                        key={maleCategory.title}
                                        title={maleCategory.title}
                                        href={maleCategory.href}
                                        className="!pl-0 !list-none w-[200px]"
                                    >
                                        <ul className="space-y-1">
                                            {maleCategory.items
                                                .sort((maleA, maleB) => maleA.name.localeCompare(maleB.name))
                                                .map((currMale) => (
                                                    <li
                                                        key={currMale.id}
                                                        className="text-sm text-muted-foreground hover:text-zinc-900 hover:font-semibold cursor-pointer"
                                                    >
                                                        {currMale.name}
                                                    </li>
                                                ))}
                                        </ul>

                                        <p className="mt-5 hover:text-zinc-950 hover:font-bold">
                                            Ver tudo +
                                        </p>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Presentes</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="flex gap-12 w-[500px] md:w-[890px] md:h-[380px] p-4 rounded-md shadow-lg bg-white">
                                {gift.map((giftCategory) => (
                                    <ListItem
                                        key={giftCategory.title}
                                        title={giftCategory.title}
                                        href={giftCategory.href}
                                        className="!pl-0 !list-none w-[200px]"
                                    >
                                        <ul className="space-y-1">
                                            {giftCategory.items
                                                .map((currGift) => (
                                                    <li
                                                        key={currGift.id}
                                                        className="text-sm text-muted-foreground hover:text-zinc-900 hover:font-semibold cursor-pointer"
                                                    >
                                                        {currGift.name}
                                                    </li>
                                                ))}
                                        </ul>
                                    </ListItem>
                                ))}
                            </ul>
                        </NavigationMenuContent>
                    </NavigationMenuItem>

                </NavigationMenuList>
            </NavigationMenu>
    )
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <Link href={href}>
                    <div className="text-md leading-none font-bold">{title}</div>
                    <div className="mt-5 text-muted-foreground text-sm leading-snug">
                        {children}
                    </div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}