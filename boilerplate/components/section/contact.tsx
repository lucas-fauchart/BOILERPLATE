"use client"

//Importation
import { motion } from "framer-motion"
import React, { useState, SyntheticEvent, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Calendar } from "../ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select"
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const donneesGeographiques: Record<string, string[]> = {
    france: ["Paris", "Lyon", "Marseille", "Lille"],
    belgique: ["Bruxelle", "Anvers", "Liège", "Bruges"],
    suisse: ["Genève", "Zurich", "Lausanne", "Bâle"]
}

//Composant
export function Contact(){

    //Varible
    const [estEnvoye, setEstEnvoye] = useState(false)

    const [dateNaissance, setDateNaissance] = useState<Date>()
    const [paysSelectionnee, setPaysSelection] = useState<string>("")
    const [villeSelectionnee, setVilleSelectionne] = useState<string>("")
    const [dateDuJour, setDateDuJour] = useState<Date | undefined>(undefined);

    const handleChangePaysVille = (pays: string) => {
        setPaysSelection(pays)
        setVilleSelectionne("")
    }

    const handleEnvoyer = (evenement: SyntheticEvent<HTMLFormElement>) => {
        evenement.preventDefault()
        setEstEnvoye(true)
    }


    useEffect(() => {
        setDateDuJour(new Date());
    }, [])

    return(
        <section className="w-full pt-16 md:pt-20 pb-20 md:pb-24 px-8 md:px-28 bg-mited/20 border-t">
            <div className="container mx-auto max-w-5xl px-4">

                {/* Titre et description de la section */}
                <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{once: true}} transition={{ duration: 0.4 }} className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        Contactez-nous
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        Un projet en tête ou besoin d'information ? Remplissez le formulaire, notre équipe vous répond sous 24h.
                    </p>
                </motion.div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Coordonnées de l'agence */}
                <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="space-y-8">
                    <div className="space-y-3 text-left">
                        <h3 className="text-xl font-bold tracking-tight">Coordonnées de l'agence</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">Vous préférez un échange direct ? N'hésitez pas à nous appeler ou à passer nous voir dans nos locaux.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4 w-full flex sm:justify-center">

                        {/* Adresse */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <MapPin className="w-5 h-5"/>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Adresse</p>
                                <p className="text-sm font-medium">12 Rue du Code, 75000 Paris</p>
                            </div>
                        </div>

                        {/* Téléphone */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Phone className="w-5 h-5"/>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Téléphone</p>
                                <p className="text-sm font-medium">+33 1 23 45 68 40</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Mail className="w-5 h-5"/>
                            </div>
                            <div>
                                <p className="text-xs text-muted-foreground uppercase font-bold tracking-wider">Email</p>
                                <p className="text-sm font-medium">contact@devweb.fr</p>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* Champs du formulaire */}
                <motion.div initial={{ opacity:0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="bg-card border rounded-2xl p-6 md:p-8 shadow-sm relative overflow-hidden">
                    {estEnvoye ? (
                        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center justify-center text-center py-12 space-y-4">
                            {/* Message envoyé */}
                            <div className="w-14 h-14 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600">
                                <CheckCircle className="w-8 h-8"/>
                            </div>
                            <h3 className="text-xl font-bold tracking-tight">Message envoyé !</h3>
                            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">Merci pour votre demande. Notre équipe étudie votre projet et vous recontacte rapidement.</p>
                        </motion.div>
                    ):(
                        <form onSubmit={handleEnvoyer} className="space-y-5">
                            {/* Formulaire avec les champs */}
                            {/* Nom et prénom */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Nom</label>
                                    <Input type="text" placeholder="Dupont" required className="h-10 bg-background text-sm"/>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Prénom</label>
                                    <Input type="text" placeholder="Jean" required className="h-10 bg-background text-sm"/>
                                </div>
                            </div>

                            {/* Email et date naissance */}
                            <div className="grid grid-cols-1 min-[590px]:grid-cols-2 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                                    <Input type="email" placeholder="jean.dupont@email.com" required className="h-10 bg-background text-sm"/>
                                </div>

                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Date de naissance</label>
                                    <Popover>
                                        <PopoverTrigger asChild>
                                            <Button variant="outline" className={cn("w-full h-11 justify-start text-left font-normal rounded-full border border-transparent shadow-none !bg-background hover:!bg-background focus:!bg-background focus-visible:!bg-background data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50", !dateNaissance && "text-muted-foreground hover:text-muted-foreground")}>
                                                {!dateNaissance ? ( <span className="text-sm">Sélectionner une date</span> ) : ( dateNaissance.toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" }))} 
                                            </Button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-0 rounded-xl shadow-md" align="start">
                                            <Calendar mode="single" selected={dateNaissance} onSelect={setDateNaissance} captionLayout="dropdown" startMonth={new Date(1940, 0)} endMonth={new Date(2026, 11)}  disabled={dateDuJour ? { after: dateDuJour } : undefined}/>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>

                            {/* Pays et ville */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="space-y-1.5 flex-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Pays</label>
                                    <Select onValueChange={handleChangePaysVille} value={paysSelectionnee}>
                                        <SelectTrigger className="h-11 w-full py-5 bg-background text-sm rounded-full border border-transparent shadow-none hover:bg-background hover:text-foreground focus:bg-background focus-visible:bg-background data-[state=open]:bg-background data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50">
                                            <SelectValue placeholder="Choisir un pays"/>

                                        </SelectTrigger>
                                        <SelectContent position="popper" sideOffset={2} className="rounded-xl bg-background p-2">
                                            {Object.keys(donneesGeographiques).map((pays) => (
                                                <SelectItem key={pays} value={pays}>
                                                    {pays.charAt(0).toUpperCase() + pays.slice(1)}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div className="space-y-1.5 flex-1">
                                    <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Ville</label>
                                    <Select disabled={!paysSelectionnee} onValueChange={setVilleSelectionne} value={villeSelectionnee}>
                                        <SelectTrigger className="h-11 w-full  py-5 bg-background text-sm rounded-full border border-transparent shadow-none hover:bg-background hover:text-foreground focus:bg-background focus-visible:bg-background data-[state=open]:bg-background data-[state=open]:border-ring data-[state=open]:ring-[3px] data-[state=open]:ring-ring/30 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50">
                                            <SelectValue placeholder={paysSelectionnee ? "Choisir une ville" : "Sélectionnez un pays"}/>
                                        </SelectTrigger>
                                        <SelectContent position="popper" sideOffset={2} className="rounded-xl bg-background p-2">
                                            {paysSelectionnee && donneesGeographiques[paysSelectionnee].map((uneVille) => (
                                                <SelectItem key={uneVille} value={uneVille.toLowerCase()}>
                                                    {uneVille}
                                                </SelectItem>
                                            ))}
                                        </SelectContent>
                                    </Select>                                  
                                </div>                   
                            </div>

                            {/* Message */}
                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Votre message</label>
                                <Textarea placeholder="Décrivez votre projet web en quelque lignes..." required className="min-h-[60px] bg-background resize-none text-sm"/>
                            </div>

                            {/* Bouton */}
                            <Button type="submit" className="w-full h-11 gap-2 text-base group/btn active:scale-95 transition-all duration-200 shadow-sm mt-2">
                                <span>Envoyer le message</span>
                                <Send className="w-4 h-4 transition-transform duration-200 ease-out group-hover/btn:translate-x-1 group-hover/btn-translate-y-0.5"/> 
                            </Button>
                        </form>
                    )}
                </motion.div>
            </div>
        </section>
    )
}