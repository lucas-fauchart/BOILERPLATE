"use client"

//Importation
import Link from "next/link"
import React, { useState } from "react"
import { ArrowRight, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

//Liste des catégories
const categories = [
    { label: "Accueil", href: "/" },
    { label: "Prestation", href:"#features" },
    { label: "A propos", href:"/a-propos" },
    { label: "Contact", href:"/contact" }
]

//Composant
export function BarreNavigation(){
    return(
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 font-extrabold text-xl tracking-tight">
                    <span>Logo</span>
                </Link>

                {/* Navigation PC */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-1">
                        {categories.map((uneCategorie) => (
                            <NavigationMenuItem key={uneCategorie.label}>
                                <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                                    <Link href={uneCategorie.href}>
                                        {uneCategorie.label}
                                    </Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Bouton d'action PC */}
                <div className="hidden md:flex items-center">
                    <Button size="sm" className="gap-2">
                        Demander un devis <ArrowRight className="w-4 h-4"/>
                    </Button>
                </div>

                {/* Navigation mobile */}
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            {/* Ouverture menu */}
                            <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                                <Menu className="size-5" />
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <SheetTitle className="text-left font-extrabold text-xl border-b py-4 pl-4">Menu</SheetTitle>
                            <nav className="flex flex-col space-y-3 mt-6">
                                {categories.map((uneCategorie) => (
                                    <Link key={uneCategorie.label} href={uneCategorie.href} className="text-lg font-medium transition-colors hover:text-primary py-2 pl-4 block border-b border-muted/50">
                                        {uneCategorie.label}
                                    </Link>
                                ))}
                                <div className="pt-6 mx-auto">
                                    <Button className="w-full gap-2 px-6">
                                        Demander un devis <ArrowRight className="w-4 h-4"/>
                                    </Button>
                                </div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    )
}