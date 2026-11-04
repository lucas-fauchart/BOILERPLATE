"use client"

//Importation
import React from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Eye, Target, Code2, Rocket, Award } from "lucide-react"

const infoAgence = {
    titre: "Propulser votre vision sur le web",
    description: "Fondée par des passionnées du code et du design, DevWeb est une agence à taille humaine. Notre mission est simple : concevoir des structures web robustes, esthétiques et ultra-rapides pour aider nos clients à se démarquer.",
    chiffres: [
        { valeur: "+ de 50", label: "Projets livrés", icon: Rocket },
        { valeur: "99%", label: "Des clients satisfaits", icon: Award },
        { valeur: "+ de 5 ans", label: "D'expertise", icon: Code2 }

    ],
    valeurs: [
        {
            titre: "Ecoute & Proximité",
            description: "Nous travaillons main dans la main avec vous. Pas de jargon technique inutile, de la tranparence du premier brief à la mise en ligne.",
            icon: Users
        },
        {
            titre: "Performance Pure",
            description: "Chaque milliseconde compte. Nous optimisons nos lignes de code pour garantir des vitesses de chargement instantannées sur tous les écrans.",
            icon: Target
        },
        {
            titre: "Design Unique",
            description: "Nous refusons les templates génériques copiés-collés. Votre entreprise et unique, son interface utilisateur doit l'être tout autant.",
            icon: Eye
        },
    ]
}

//Composant
export default function AProposPage() {
    return(
        <div className="w-full min-h-[calc(100vh-64px)] bg-background">

            <section className="py-14 md:py-20 px-4 border-b bg-gradient-to-b from-background to-muted/20">
                <div className="container mx-auto max-w-4xl text-center space-y-6">
                    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                        <span className="text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 px-3 py-1 rounded-full">
                            Notre Histoire
                        </span>
                    </motion.div>

                    <motion.h1 initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground leading-[1.1]">
                        {infoAgence.titre}
                    </motion.h1>
                    
                    <motion.p initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, delay: 0.2 }} className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                        {infoAgence.description}
                    </motion.p>
                </div>
            </section>

            <section className="py-16 px-8 sm:px-10 border-b bg-background">
                <div className="container mx-auto max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                        {infoAgence.chiffres.map((unChiffre, index) => {
                            const Icone = unChiffre.icon
                            return(
                                <motion.div key={unChiffre.label} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1 , y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }} className="flex flex-col items-center space-y-2 p-6 rounded-2xl bg-muted border-muted/50">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                                        <Icone className="w-5 h-5"/>
                                    </div>
                                    <span className="text-3xl font-black text-foreground tracking-tight">
                                        {unChiffre.valeur}
                                    </span>
                                    <span className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                                        {unChiffre.label}
                                    </span>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            <section className="py-16 md:py-20 px-4 sm:px-6 bg-background">
                <div className="container mx-auto max-w-5xl">
                    <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
                        <motion.h2 initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-3xl font-extrabold tracking-tight text-foreground">
                            Ce qui nous guide au quotidien
                        </motion.h2>
                        <motion.p initial={{ opacity: 0, y: -15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-sm text-muted-foregroundleading-relaxed">
                            Trois piliers fondamentaux inscrits dans l'ADN de notre agence pour chaque ligne de code écrite.
                        </motion.p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {infoAgence.valeurs.map((uneInfoAgence, index) => {
                            const Icone = uneInfoAgence.icon
                            return(
                                <motion.div key={uneInfoAgence.titre} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.2, ease: "easeOut" }} className="flex">
                                    <Card className="group relative w-full flex flex-col justifu-between border bg-card text-card-foreground shadow-none hover:shadow-sm transition-all duration-300 hover:border-primary/40 rounded-2xl overflow-hidden">
                                        <CardHeader className="pt-2 px-6 pb-2">
                                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 transition-colors group-hover:bg-primary group-hover:text-primary-foreground duration-300">
                                                <Icone className="w-5 h-5"/>
                                            </div>
                                            <CardTitle className="text-lg font-bold tracking-tight text-foreground">
                                                {uneInfoAgence.titre}
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent className="pb-2 px-6 text-smtext-muted-foreground leading-relaxed pt-2">
                                            {uneInfoAgence.description}
                                        </CardContent>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
        </div>
    )
}