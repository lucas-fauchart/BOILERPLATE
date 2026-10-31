"use client"

//Importation
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Layout, Shield, Zap, ArrowRight } from "lucide-react"

//Configuration des prestations
const configurationPrestation = {
    titre: "Nos Prestations",
    sousTitre: "Des solutions web modernes, robustes et taillées sur-mesure pour propulser votre activité sur internet.",
    services: [
        {
            id: "1",
            titre: "Design Sur-Mesure",
            description: "Une interface unique dessinée selon vous envies et l'identité de votre marque, loin des template génériques.",
            icone: Layout
        },
        {
            id: "2",
            titre: "Performance Optimisée",
            description: "Des sites internet ultra-rapides qui chargent instantanément pour offrir la meilleure exérience à vos clients.",
            icone: Zap
        },
        {
            id: "3",
            titre: "Sécutité et Robustesse",
            description: "Une architecture moderne et sécurisée protégeant vos données et garantissant une disponibilité totale de votre site.",
            icone: Shield
        },
    ]
}

//Composant
export function Prestation(){
    return(
        <section id="prestation" className="w-full py-20 bg-background border-t">
            <div className="container mx-auto max-w-6xl px-4">

                {/* En tête de section */}
                <motion.div initial={{ opacity: 0, y: -10 }} whileInView={{ opacity: 1, y: -10 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.1 }} className="text-center max-w-2xl mx-auto mb-12 md:mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-foreground">
                        {configurationPrestation.titre}
                    </h2>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                        {configurationPrestation.sousTitre}
                    </p>
                </motion.div>

                {/* PC */}
                <div className="hidden md:grid grid-cols-3 gap-6">
                    {configurationPrestation.services.map((unService, index) => {
                        const Icone = unService.icone
                        return(
                            <motion.div key={unService.id} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}>
                                <Card className="group/card relative w-full flex flex-col justify-between border bg-card text-card-foreground shadow-sm hover:shadow-md transition-all duration-300 hover:border-primary/50 hover:-translate-y-1 overflow-hidden">
                                    <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-primary scale-x-0 group-hover/card:scale-x-100 transition-transform duration-300 origin-left"/>
                                    <CardHeader className="pt-6 px-6">
                                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover/card:bg-primary group-hover/card:text-primary-foreground transition-colors duration-300">
                                            <Icone className="w-6 h-6"/>
                                        </div>
                                        <CardTitle className="text-xl font-bold tracking-tight text-foreground">
                                            {unService.titre}
                                        </CardTitle>
                                    </CardHeader>

                                    <CardContent className="px-6 pb-6 flex-grow flex flex-col justify-between space-y-6">
                                        <CardDescription className="text-sm text-muted-foreground leading-relaxed">
                                            {unService.description}
                                        </CardDescription>
                                        <div className="inline-flex items-center text-xs font-semibold text-primary gap-1 cursos-pointer pt-2 w-fit">
                                            <span>En savoir plus</span>
                                            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/card:translate-x-1"/>
                                        </div>
                                    </CardContent>
                                </Card>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Mobile */}
                <div className="block md:hidden">
                    <Accordion type="single" collapsible className="w-full border-0 space-y-3">
                        {configurationPrestation.services.map((unService, index) => {
                            const Icone = unService.icone
                            return(
                                <motion.div key={unService.id} initial={{ opacity:0, y: -10}} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}>
                                    <AccordionItem value={unService.id} className="px-4 border rounded-3xl bg-card text-card-foreground shadow-sm overflow-hidden data-[state=open]:border-primary/50 transition-colors">
                                        <AccordionTrigger className="hover:no-underline py-4 flex items-center justify-between group">
                                            <div className="flex items-center gap-4 text-left">
                                                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-data-[state=open]:bg-primary group-data-[state=open]:text-primary-foreground transition-colors">
                                                    <Icone className="w-5 h-5"/>
                                                </div>
                                                <span className="font-bold text-base text-foreground tracking-tight">
                                                    {unService.titre}
                                                </span>
                                            </div>
                                        </AccordionTrigger>

                                        <AccordionContent className=" text-sm text-muted-foreground leading-relaxed border-t border-muted/100 pt-2">
                                            <p>{unService.description}</p>
                                            <div className="inline-flex items-center text-xs font-semibold text-primary gap-1 cursor-pointer pt-2 w-fit group/btn-more">
                                                <span>En savoir plus</span>
                                                <ArrowRight className="w-3.5 h-3.5"/>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </motion.div>
                            )
                        })}
                    </Accordion>
                </div>
            </div>
        </section>
    )
}