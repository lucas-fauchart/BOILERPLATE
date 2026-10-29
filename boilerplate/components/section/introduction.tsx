"use client"
 
//Importation
import { Button } from "@/components/ui/button"
import { ScrollRotation } from "@/components/motion/scrollRotation"
import { FlottementItem } from "@/components/motion/flottementItem"
import { ArrowRight, Sparkles } from "lucide-react"

export function Introduction() {
    return(
        <section className="relative min-h-[calc(100vh-64px)] w-full flex flex-col md:flex-row items-center justify-between px-6 md:px-48 py-12 overflow-hidden bg-gradient-to-b from-background to-muted/20">
           
            {/*Côté gauche*/}
            <div className="flex flex-col space-y-6 max-w-xl text-center md:text-left z-10">
                <div className="inline-flex items-center mx-auto md:mx-0 w-fit gap-2 px-3 py-1 rounded-full border bg-background/50 text-xs font-medium text-muted-foreground shadow-sm">
                    <Sparkles className="w-3.5 h-3.5 text-primary"/>
                    <span>Nouveau site disponible</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.1]">
                    Créer un site web <br/>
                    <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-tansparent">
                        unique et sur-mesure
                    </span>
                </h1>

                <p className="text-base md:text-lg text-muted-foreground max-w-md leading-relaxed">
                    Une structure robuste, responsive et ultra-rapide conçue de vos propres mains pour propulser l'activité de vos clients.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">
                    <Button size="lg" className="gap-2 h-12 px-6 text-base">
                        Commencer le projet <ArrowRight className="w-5 h-5"/>
                    </Button>
                    <Button size="lg" variant="outline" className="h-12 px-6 text-base">
                        Voir nos réalisations
                    </Button>
                </div>
            </div>

            {/*Côté droite*/}
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] flex items-center justify-center mt-16 md:mt-16">
                <ScrollRotation className="w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 z-10">
                    <img 
                        src="/images/image-scroll-rotation.png" 
                        alt="Bandes noires arrondies avec des chiffres." 
                        className="w-full h-wull object-contain drop-shadow-[0_0_35px_rgba(59, 130, 246, 0.3)]"
                    />
                </ScrollRotation>

                <FlottementItem duree={3.2} yOffset={14} className="absolute top-4 left-4 md:top-10 md:left-10 w-14 h-14 md:w-16 md:h-16 bg-background rounded-2xl flex items-center justify-center border shadow-md z-20 text-xl">
                    <img 
                        src="/images/egal.png" 
                        alt="Bandes noires arrondies avec des chiffres." 
                        className="w-full h-wull object-contain drop-shadow-md rotate-[15deg]"
                    />
                </FlottementItem>

                <FlottementItem duree={2} delai={0.4} yOffset={12} className="absolute bottom-6 right-6 md:bottom-12 md:right-12 w-12 h-12 md:w-14 md:h-14 bg-background rounded-full flex items-center justify-center border shadow-md z-20 text-lg">
                    <img 
                        src="/images/division.png" 
                        alt="Bandes noires arrondies avec des chiffres." 
                        className="w-full h-wull object-contain drop-shadow-md rotate-[15deg]"
                    />
                </FlottementItem>

                <FlottementItem duree={4} delai={0.8} yOffset={14} className="hidden md:flex absolute top-14 right-14 w-12 h-12 bg-background rounded-xl flex items-center justify-center border shadow-sm z-0 text-base">
                    <img 
                        src="/images/multiplication.png" 
                        alt="Bandes noires arrondies avec des chiffres." 
                        className="w-full h-wull object-contain drop-shadow-md rotate-[15deg]"
                    />
                </FlottementItem>

                <FlottementItem duree={2.6} delai={0.16} yOffset={14} className="hidden md:flex absolute bottom-16 left-12 w-12 h-12 bg-background rounded-xl flex items-center justify-center border shadow-sm z-0 text-lg">
                    <img 
                        src="/images/addition.png" 
                        alt="Bandes noires arrondies avec des chiffres." 
                        className="w-full h-wull object-contain drop-shadow-md rotate-[15deg]"
                    />
                </FlottementItem>
            </div>
        </section>
    )
}