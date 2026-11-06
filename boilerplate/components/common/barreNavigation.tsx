"use client"

//Importation
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"

import React, { useEffect, useState } from "react"
import { ArrowRight, Menu, ShieldAlert } from "lucide-react"
import { AnimatePresence, motion } from "framer-motion"
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetClose } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"

//Liste des catégories
const categories = [
    { label: "Accueil", href: "/" },
    { label: "Prestation", href:"/#prestation" },
    { label: "A propos", href:"/a-propos" },
    { label: "Contact", href:"/contact" }
]

//Composant
export function BarreNavigation(){
    //Variable
    const [alerteOuverte, setAlerteOuverte] = useState(false)
    const pathname = usePathname()
    const estSurPageAccueil = pathname === "/"
    const router = useRouter()

    useEffect(() => {
        const minuteur = setTimeout(() => {
            setAlerteOuverte(true)
        }, 1500)

        return () => clearTimeout(minuteur)
    }, [])

    const handleRedirectionDevis = () => {
        router.push("/contact")
    }

    return(
        <motion.header initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, ease: "easeOut" }} className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">

            {/*Boite de dialog*/}
            <AlertDialog open={alerteOuverte} onOpenChange={setAlerteOuverte}>
                <AnimatePresence>
                    {alerteOuverte && estSurPageAccueil && (
                        <AlertDialogContent asChild className="rounded-2xl max-w-md border bg-card p-6 shadow-xl">
                            <motion.div initial={{ opacity: 0, scale: 0.90 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity : 0, scale: 0.90 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                <AlertDialogHeader className="space-y-3"> 
                                    <AlertDialogTitle className="text-lg font-bold tracking-tight flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-primary shrink-0"/> Espace Admin
                                    </AlertDialogTitle>
                                    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                        <p> 
                                            Si vous souhaitez accéder à l'interface d'administration simulée, descendez tout en bas dans <span className="text-foreground font-semibold">le pied de page</span> et cliquez sur le lien <span className="text-foreground font-semibold">Espace Admin</span>, à côté des mentions légales en bas à gauche.
                                        </p>
                                    </div>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction className="rounded-xl py-4 px-4 h-9 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer w-full sm:w-auto active:scale-95">
                                        Compris, voir le site
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </motion.div>
                        </AlertDialogContent>
                    )}
                </AnimatePresence>
            </AlertDialog>

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
                    <Button size="sm" className="gap-2 p-4 group/btn relative overflow-hidden transition-all duration-300 horver:shadow-[0_0_20px_rgba(var(--primary), 0.30)] active:scale-95">
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
                                        <SheetClose asChild>
                                            <Link href={uneCategorie.href} className="text-lg font-medium transition-colors hover:text-primary py-2 pl-4 relative block w-fit group/mobile-link">
                                                {uneCategorie.label}
                                                <span className="absolute bottom-1 left-4 right-0 h-[2px] bg-primary scale-x-0 group-hover/mobile-link:scale-x-100 transition-transform duration-300 origin-left ease-out"/>
                                            </Link>
                                        </SheetClose>
                                    </motion.div>
                                ))}
                                <motion.div className="pt-6 mx-auto" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.2, delay: 0.5 }}>
                                    <SheetClose asChild>
                                        <Button onClick={handleRedirectionDevis} className="w-full gap-2 px-6 active:scale-95">
                                            Demander un devis <ArrowRight className="w-4 h-4"/>
                                        </Button>
                                    </SheetClose>
                                </motion.div>
                            </nav>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </motion.header>
    )
}