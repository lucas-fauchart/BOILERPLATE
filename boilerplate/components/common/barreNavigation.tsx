"use client"

//Importation
import Link from "next/link"
import React from "react"
import { ArrowRight, Menu } from "lucide-react"
import { motion } from "framer-motion"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"

//Liste des catégories
const categories = [
    { label: "Accueil", href: "/" },
    { label: "Prestation", href:"#prestation" },
    { label: "A propos", href:"/a-propos" },
    { label: "Contact", href:"/contact" }
]

//Composant
export function BarreNavigation(){
    return(
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="flex items-center space-x-2 font-extrabold text-xl tracking-tight">
                    <span>DevWeb</span>
                </Link>

                {/* Navigation PC */}
                <NavigationMenu className="hidden md:flex">
                    <NavigationMenuList className="gap-1">
                        {categories.map((uneCategorie, index) => (
                            <motion.div key={uneCategorie.label} initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: index * 0.1, ease: "easeOut"}}> 
                                <NavigationMenuItem> 
                                    <NavigationMenuLink asChild className={`${navigationMenuTriggerStyle()} relative bg-transparent hover:bg-tranparent text-muted-foreground hover:text-foreground transition-colors cursor-pointer py-2 group/link`}>
                                        <Link href={uneCategorie.href}>
                                            {uneCategorie.label}
                                            <span className="absolute bottom-1 left-2 right-2 h-[2px] bg-primary scale-x-0 group-hover/link:scale-x-100 transition-transform duration-300 origin-center ease-out"/>
                                        </Link>
                                    </NavigationMenuLink>
                                </NavigationMenuItem>
                            </motion.div>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>

                {/* Bouton d'action PC */}
                <motion.div className="hidden md:flex items-center" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: 0.4}}>
                    <Button size="sm" className="gap-2 p-4 group/btn relative overflow-hidden transition-all duratio-300 horver:shadow-[0_0_20px_rgba(var(--primary), 0.30)] active:scale-95">
                        Demander un devis <ArrowRight className="w-4 h-4 transition-transform duration-300 ease-out group-hover/btn:translate-x-1"/>
                    </Button>
                </motion.div>

                {/* Navigation mobile */}
                <div className="flex md:hidden">
                    <Sheet>
                        <SheetTrigger asChild>
                            {/* Ouverture menu */}
                            <Button variant="ghost" size="icon" aria-label="Ouvrir le menu">
                                <Menu className="size-5"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-[300px]">
                            <SheetTitle className="text-left font-extrabold text-xl border-b py-4 pl-4">Menu</SheetTitle>
                            <nav className="flex flex-col space-y-3 mt-6">
                                {categories.map((uneCategorie, index ) => (
                                    <motion.div key={uneCategorie.label} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ type: "spring", stiffness: 260, damping: 22, delay: index * 0.10 }}>

                                    
                                        <Link href={uneCategorie.href} className="text-lg font-medium transition-colors hover:text-primary py-2 pl-4 block border-b border-muted/50 relative block w-fit group/mobile-link">
                                            {uneCategorie.label}
                                            <span className="absolute bottom-1 left-4 right-0 h-[2px] bg-primary scale-x-0 group-hover/mobile-link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                        </Link>
                                        
                                    </motion.div>
                                ))}
                                <motion.div className="pt-6 mx-auto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.5 }}>
                                    <Button className="w-full gap-2 px-6">
                                        Demander un devis <ArrowRight className="w-4 h-4"/>
                                    </Button>
                                </motion.div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}