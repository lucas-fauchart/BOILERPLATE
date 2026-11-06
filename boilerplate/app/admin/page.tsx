"use client"

//Importation
import React, { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import Link from "next/link"

import { LayoutDashboard, Mail, ArrowLeft, MapPin, Trash2, CheckCircle2, Clock, ShieldAlert } from "lucide-react"
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog"
import { Button } from "@/components/ui/button"
import { cn } from "cn"

const fauxMessages = [
    {
        id: 1,
        nom: "Dupont",
        prenom: "Jean",
        email: "jean.dupont@email.fr",
        dateNaissance: new Date(1995, 4, 12),
        pays: "France",
        ville: "Paris",
        message: "Bonjour, j'aimerais un devis pour un site e-commerce de chaussures.",
        statut: "en_attente"
    },
    {
        id: 2,
        nom: "Vander",
        prenom: "Marie",
        email: "m.vander@email.be",
        dateNaissance: new Date(1988, 9, 24),
        pays: "Belgique",
        ville: "Bruxelles",
        message: "Hello ! Besoin d'une landing page ultra-rapide pour un lancement de produit.",
        statut: "en_attente"
    },
    {
        id: 3,
        nom: "Gisler",
        prenom: "Thomas",
        email: "thomas.gisler@email.ch",
        dateNaissance: new Date(2001, 1, 5),
        pays: "Suisse",
        ville: "Genève",
        message: "Bonjour, notre fiduciaire cherche un partenaire pour refondre complètement notre portail web actuel.",
        statut: "en_attente"
    },
    {
        id: 4,
        nom: "Martin",
        prenom: "Lucas",
        email: "lucas.martin@email.fr",
        dateNaissance: new Date(1993, 7, 18),
        pays: "France",
        ville: "Lyon",
        message: "Bonjour ! Serait-il possible d'organiser une visioconférence pour discuter d'une application web de gestion immobilière ?",
        statut: "en_attente"
    },
    {
        id: 5,
        nom: "Dubois",
        prenom: "Emma",
        email: "emma.dubois@email.be",
        dateNaissance: new Date(1997, 11, 30),
        pays: "Belgique",
        ville: "Liège",
        message: "Hello DeWeb, nous lançons notre marque de vêtements éco-responsables et avons besoin d'un site vitrine très épuré avec des animations fluides.",
        statut: "en_attente"
    },
]

export default function AdminPage() {

    //Variable
    const [alerteOuverte, setAlerteOuverte] = useState(false)
    const [messages, setMessages] = useState(fauxMessages)

    useEffect(() => {
        const minuteur = setTimeout(() => {
            setAlerteOuverte(true)
        }, 1500)
    
        return () => clearTimeout(minuteur)
    }, [])

    const handleSupprimer = (id: number) => {
        setMessages(messagesPrecedents => messagesPrecedents.filter(unMessage => unMessage.id !== id))
    } 

    const handleMarquerTraite = (id: number) => {
        setMessages(messagesPrecedents => messagesPrecedents.map(unMessage => {
            if (unMessage.id === id) {
                return {...unMessage, statut: unMessage.statut === "traite" ? "en_attente" : "traite" }
            }
            return unMessage
        }))
    }

    return(
        <div className="w-full min-h-[calc-(100vh-64px)] bg-muted/30 py-12 md:py-16 px-4 md:px-10">

            {/*Boite de dialog*/}
            <AlertDialog open={alerteOuverte} onOpenChange={setAlerteOuverte}>
                <AnimatePresence>
                    {alerteOuverte && (
                        <AlertDialogContent asChild className="rounded-2xl max-w-md border bg-card p-6 shadow-xl">
                            <motion.div initial={{ opacity: 0, scale: 0.90 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity : 0, scale: 0.90 }} transition={{ duration: 0.2, ease: "easeOut" }}>
                                <AlertDialogHeader className="space-y-3"> 
                                    <AlertDialogTitle className="text-lg font-bold tracking-tight flex items-center gap-2">
                                        <ShieldAlert className="w-5 h-5 text-primary shrink-0"/> Accès à l'Espace Admin
                                    </AlertDialogTitle>
                                    <div className="text-sm text-muted-foreground leading-relaxed space-y-2">
                                        <p>
                                            Puisqu'il s'agit d'un <span className="text-foreground font-semibold">site de démonstration</span>, l'accès au tableau de bord est direct et ne nécessite pas d'identifiants.
                                        </p>
                                        <p>
                                            Pour un <span className="text-foreground font-semibold">vrai client</span>, cette section sera entièrement verrouillée par une <span className="text-foreground font-semibold">interface de connexion sécurisée</span> (avec un nom d'utilisateur et/ou une adresse e-mail et un mot de passe chiffré) afin de protéger ses données.
                                        </p>
                                    </div>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                    <AlertDialogAction className="rounded-xl py-4 px-4 h-9 text-xs font-semibold bg-primary text-primary-foreground hover:bg-primary/90 cursor-pointer w-full sm:w-auto active:scale-95">
                                        Compris, voir le tableau de bord
                                    </AlertDialogAction>
                                </AlertDialogFooter>
                            </motion.div>
                        </AlertDialogContent>
                    )}
                </AnimatePresence>
            </AlertDialog>

            <div className="container mx-auto max-w-5xl space-y-8">

                {/* Bouton retour */}
                <motion.div initial={{ opacity : 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                    <Link href="/" className="inline-flex items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors">
                        <ArrowLeft className="w-3.5 h-3.5"/> Retour a l'accueil
                    </Link>
                </motion.div>

                {/* Titre */}
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }} className="flex items-center border-b pb-5">
                    <div className="space-y-1">
                        <h1 className="text-2xl font-extrabold tracking-tight flex items-center gap-2">
                            <LayoutDashboard className="hidden md:block w-6 h-6 text-primary"/>
                            Tableau de bord de l'agence
                        </h1>
                        
                        <p className="text-xs text-muted-foreground">Gestion des prospects et messages reçus en base de données.</p>
                    </div>
                </motion.div>

                <div className="space-y-4">
                    <motion.h2 initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="flex gap-2 items-center">
                        <Mail className="w-4 h-4"/> Message du Formulaire ({messages.length})
                    </motion.h2>

                    {/* Liste des messages */}
                    <div className="grid grid-cols-1 gap-4">
                        {messages.map((unMessage) => (
                            <motion.div key={unMessage.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.3 }} className="bg-card border rounded-xl p-5 shadow-sm space-y-4">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b pb-3">
                                    <div className="flex flex-wrap items-center gap-2 ">
                                        <span className="font-bold text-smtext-foreground">
                                            {unMessage.nom} {unMessage.prenom}
                                        </span>

                                        <span className="text-xs text-muted-foreground">
                                            {unMessage.email}
                                        </span>
                                    </div>

                                    <span className="text-[10px] font-bold uppercase bg-muted px-2 py-0.5 rounded text-muted-foreground flex items-center gap-1 w-fit">
                                        <MapPin className="w-3 h-3"/> {unMessage.ville}, {unMessage.pays}
                                    </span>
                                </div>

                                <p className="text-sm text-muted-foreground leading-relaxed italic bg-muted/10 p-3 rounded-lg border border-dashed">
                                    "{unMessage.message}"
                                </p>

                                <div className="flex items-center justify-center sm:justify-end gap-2 pt-1">
                                    <Button size="sm" variant="outline" onClick={() => handleMarquerTraite(unMessage.id)} className={cn("h-8 text-xs font-semibold px-3 rounded-xl gap-1.5 active:scale-95 transition-all duration-200", unMessage.statut === "traite" ? "text-amber-600 hover:bg-amber-50" : "text-emerald-600 hover:bg-emerald-50")}>
                                        {unMessage.statut === "traite" ? <Clock className="w-3.5 h-3.5"/> : <CheckCircle2 className="w-3.5 h-3.5"/>}
                                        {unMessage.statut === "traite" ? "Remettre en attente" : "Marquer comme traité"}
                                    </Button>

                                    <Button size="sm" variant="outline" onClick={() => handleSupprimer(unMessage.id)} className="h-8 text-xs font-semibold px-3 rounded-xl gap-1.5 text-destructive hover:bg-destructive/10 active:scale-95 transition-all duration-200">
                                        <Trash2 className="w-3.5 h-3.5"/>
                                        Supprimer
                                    </Button>
                                </div>
                            </motion.div>
                        ))}

                        {messages.length === 0 && (
                            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-16 border rounded-xl bg-card shadow-sm space-y-2">
                                <CheckCircle2 className="w-10 h-10 text-emerald-500 mx-auto"/>
                                <p className="text-sm font-bold">Zéro message en attente</p>
                                <p className="text-xs text-muted-foreground">Votre boîte de réception est parfaitement propre.</p>
                            </motion.div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}