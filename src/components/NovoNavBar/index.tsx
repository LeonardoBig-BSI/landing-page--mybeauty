"use client"

import * as React from "react"
import Link from "next/link"
import { CircleCheckIcon, CircleHelpIcon, CircleIcon } from "lucide-react"

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

const fragrances = [
    {
        title: "Todos os Produtos",
        href: "/",
        items: [
            { id: "1", name: "Coco Chanel" },
            { id: "2", name: "Eau de Parfum" },
            { id: "3", name: "Dolce & Gabbana" },
            { id: "4", name: "Arbo" },
            { id: "5", name: "Malbec" },
            { id: "6", name: "Christian Dior" },
            { id: "7", name: "Yves Saint Laurent" },
            { id: "8", name: "Polo Verde" },
            { id: "9", name: "Carolina Herrera" },
        ],
    },
];

const hair = [
    {
        title: "Marcas",
        href: "/",
        items: [
            { id: "1", name: "Skala" },
            { id: "2", name: "Lola Cosmetics" },
            { id: "3", name: "Salon Line" },
            { id: "4", name: "Bio Extratus" },
            { id: "5", name: "Forever Liss" },
            { id: "6", name: "TRESemmé" },
            { id: "7", name: "Pantene" },
        ],
    },
    {
        title: "Tipos de Cabelos",
        href: "/",
        items: [
            { id: "1", name: "Oleosos" },
            { id: "2", name: "Mistos" },
            { id: "3", name: "Lisos" },
            { id: "4", name: "Cacheados" },
            { id: "5", name: "Ondulados" },
            { id: "6", name: "Danificados" },
            { id: "7", name: "Ressecados" },
            { id: "8", name: "Descoloridos" },
            { id: "9", name: "Ralos" },
            { id: "10", name: "Com caspas" },
            { id: "11", name: "Com quedas" },
        ],
    },
];

const body = [
    {
        title: "Produtos para Corpo",
        href: "/",
        items: [
            { id: "1", name: "Hidratante Corporal" },
            { id: "2", name: "Óleo Corporal" },
            { id: "3", name: "Body Splash" },
            { id: "4", name: "Creme para mãos" },
            { id: "5", name: "Creme para corpo" },
            { id: "6", name: "Desodorante" },
            { id: "7", name: "Protetor Solar" },
        ],
    },
    {
        title: "Produtos para Banho",
        href: "/",
        items: [
            { id: "1", name: "Esfoleantes" },
            { id: "2", name: "Sabonetes" },
            { id: "3", name: "Acessórios" },
        ],
    },
    {
        title: "Produtos Masculinos",
        href: "/",
        items: [
            { id: "1", name: "Pós-Barbas" },
            { id: "2", name: "Produtos para barbear" },
        ],
    },
];

const make = [
    {
        title: "Marcas",
        href: "/",
        items: [
            { id: "1", name: "Quem Disse, Berenice?" },
            { id: "2", name: "Dailus" },
            { id: "3", name: "Natura Una / Faces" },
            { id: "4", name: "Catharine Hill" },
            { id: "5", name: "O Boticário" },
            { id: "6", name: "Maybelline" },
            { id: "7", name: "Eudora" },
            { id: "8", name: "Vult" },
            { id: "9", name: "Mari Maria Makeup" },
            { id: "10", name: "Ruby Rose" },
        ],
    },
    {
        title: "Olhos",
        href: "/",
        items: [
            { id: "1", name: "Máscara de cílios" },
            { id: "2", name: "Sombras" },
            { id: "3", name: "Delineadores" },
            { id: "4", name: "Sombrancelhas" },
            { id: "5", name: "Lápis" },
        ],
    },
    {
        title: "Boca",
        href: "/",
        items: [
            { id: "1", name: "Batons" },
            { id: "2", name: "Batons Líquido" },
            { id: "3", name: "Brilho Labial" },
            { id: "4", name: "Gloss" },
        ],
    },
    {
        title: "Rosto",
        href: "/",
        items: [
            { id: "1", name: "Bases" },
            { id: "2", name: "Blush" },
            { id: "3", name: "Pó facial" },
            { id: "4", name: "Corretivos" },
            { id: "5", name: "Iluminadores" },
            { id: "6", name: "Fixadores" },
            { id: "7", name: "Demaquilantes" },
            { id: "8", name: "Cream" },
        ],
    },
];

const skincare = [
    {
        title: "Marcas",
        href: "/",
        items: [
            { id: "1", name: "Dermage" },
            { id: "2", name: "Natura" },
            { id: "3", name: "Principia" },
            { id: "4", name: "Ada Tina" },
            { id: "5", name: "O Boticário" },
            { id: "6", name: "Raavi Dermocosméticos" },
            { id: "7", name: "Luvo Skincare" },
            { id: "8", name: "Be Plus" },
            { id: "9", name: "Vult Skincare" },
            { id: "10", name: "Bruna Tavares Skin " },
        ],
    },
    {
        title: "Tipos de Pele",
        href: "/",
        items: [
            { id: "1", name: "Pele Mista" },
            { id: "2", name: "Pele Oleosa" },
            { id: "3", name: "Pele Madura" },
            { id: "4", name: "Pele Sensível" },
            { id: "5", name: "Pele Equilibrada" },
            { id: "6", name: "Pele Seca/Ressecada" },
        ],
    },
    {
        title: "Para rosto",
        href: "/",
        items: [
            { id: "1", name: "Clareador de manchas" },
            { id: "2", name: "Protetor solar facial" },
            { id: "3", name: "Anti-idade" },
            { id: "4", name: "Hidratante facial" },
            { id: "5", name: "Limpeza" },
            { id: "6", name: "Antiacne" },
            { id: "7", name: "Esfoliante" },
        ],
    },
];

const male = [
    {
        title: "Marcas",
        href: "/",
        items: [
            { id: "1", name: "Dior" },
            { id: "2", name: "Paco Rabanne" },
            { id: "3", name: "Yves Saint Laurent (YSL)" },
            { id: "4", name: "Calvin Klein" },
            { id: "5", name: "Versace" },
            { id: "6", name: "Giorgio Armani" },
            { id: "7", name: "Chanel" },
        ],
    },
    {
        title: "Categorias",
        href: "/",
        items: [
            { id: "1", name: "Perfumes" },
            { id: "2", name: "Cabelo" },
            { id: "3", name: "Barba" },
            { id: "4", name: "Corpo & Banho" },
        ],
    },
];

const gift = [
    {
        title: "Por Data",
        href: "/",
        items: [
            { id: "1", name: "Presentes de Aniversário" },
            { id: "2", name: "Dia da Mulher" },
            { id: "3", name: "Dia do Homem" },
            { id: "4", name: "Dia das Mães" },
            { id: "5", name: "Dia dos Pais" },
            { id: "6", name: "Dia dos Namorados" },
        ],
    },
    {
        title: "Por faixa de Preço",
        href: "/",
        items: [
            { id: "1", name: "Até R$20,00" },
            { id: "2", name: "Até R$50,00" },
            { id: "3", name: "Até R$80,00" },
            { id: "4", name: "Até R$100,00" },
            { id: "6", name: "Até R$150,00" },
            { id: "7", name: "Até R$200,00" },
            { id: "8", name: "Acima de R$200,00" },
        ],
    },
];

export default function NovoNavBar() {
    return (
        <div className="relative ml-24">
            <NavigationMenu>
                <NavigationMenuList>

                    <NavigationMenuItem>
                        <NavigationMenuTrigger className="bg-zinc-950 text-white">Perfumaria</NavigationMenuTrigger>
                        <NavigationMenuContent className="absolute left-0 mt-2">
                            <ul className="grid w-[500px] gap-2 p-4 md:w-[1140px] md:h-[350px] md:grid-cols-2 rounded-md shadow-lg">
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
                            <ul className="flex gap-12 w-[1140px] p-4 rounded-md shadow-lg bg-white">
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
                            <ul className="flex gap-12 w-[1140px] p-4 rounded-md shadow-lg bg-white">
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
                            <ul className="flex gap-12 w-[1140px] p-4 rounded-md shadow-lg bg-white">
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
                            <ul className="flex gap-12 w-[1140px] p-4 rounded-md shadow-lg bg-white">
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
                            <ul className="flex gap-12 w-[1140px] p-4 rounded-md shadow-lg bg-white">
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
                            <ul className="flex gap-12 w-[1140px] p-4 rounded-md shadow-lg bg-white">
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
        </div>
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