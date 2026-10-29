"use client"

//Importation
import Link from "next/link"
import { useEffect, useState } from "react";

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "../ui/dialog"
import { FaInstagram, FaLinkedin, FaFacebook, FaYoutube, FaTiktok } from "react-icons/fa";

//Configaration du pied de page
const configurationPiedPage = {
    nomEntreprise: "DevWeb",
    description: "Création de sites internet uniques et sur-mesure pour booster votre activité.",

    reseauxSociaux: [
        {
            nom: "Instagram",
            url: "https://www.instagram.com/",
            Icone: FaInstagram,
        },
        {
            nom: "LinkedIn",
            url: "https://www.linkedin.com/",
            Icone: FaLinkedin,
        },
        {
            nom: "Facebook",
            url: "https://www.facebook.com/",
            Icone: FaFacebook,
        },
        {
            nom: "YouTube",
            url: "https://www.youtube.com/",
            Icone: FaYoutube,
        },
        {
            nom: "TikTok",
            url: "https://www.tiktok.com/",
            Icone: FaTiktok,
        },
    ],

    colonnes: [
        {
            titre: "Navigation",
            categories: [
                { label: "Accueil", href: "/" },
                { label: "Prestation", href: "#features" },
                { label: "À propos", href: "/a-propos" },
                { label: "Contact", href: "/contact" },
            ],
        },
    ],

    textesLegaux: {
        mentionsLegales:
            "Ce site est édité par la société [Nom]. Capital social de 1000€. Siège social : [Adresse]. Directeur de la publication : [Nom]. Hébergé par [Nom hébergeur], [Adresse hébergeur], [Ville hébergeur], [Code postal hébergeur], [Pays hébergeur].",

        confidentialite:
            "Nous collectons vos données uniquement via le formulaire de contact pour répondre à vos demandes. Vos données ne sont jamais vendues ni partagées à des tiers. Vous disposez d'un droit d'accès et de suppression sur simple demande par email.",
    },
};

//Composant
export function PiedPage() {

    const [anneeActuelle, setAnneeActuelle] = useState<number | null>(null);

    useEffect(() => {
        setAnneeActuelle(new Date().getFullYear());
    }, []);

    return(
        <footer className="w-full border-t bg-muted/30 pt-10 pb-6">
            <div className="container mx-auto px-4">

                <div className="flex flex-col md:flex-row jutify-between gap-10 pb-4">

                    <div  className="flex flex-col space-y-4 max-w-sm">
                        <span className="font-extrabold text-xl tracking-tight">
                            {configurationPiedPage.nomEntreprise}
                        </span>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                            {configurationPiedPage.description}
                        </p>

                       <div className="flex space-x-4 pt-1">
                            {configurationPiedPage.reseauxSociaux.map((unReseauSocial) =>
                                
                                unReseauSocial.url ? (
                                    <a
                                        key={unReseauSocial.nom}
                                        href={unReseauSocial.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label={unReseauSocial.nom}
                                        title={unReseauSocial.nom}
                                        className="text-muted-foreground transition-colors hover:text-primary"
                                    >
                                        <unReseauSocial.Icone className="h-5 w-5" />
                                    </a>
                                ) : null
                            )}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-10 md:gap-20">
                        {configurationPiedPage.colonnes.map((uneColonne) => (
                            <div key={uneColonne.titre}>
                                <h3 className="text-sm font+bold uppercase tracking-wider mb-4">{uneColonne.titre}</h3>
                                <ul className="space-y-2.5">
                                    {uneColonne.categories.map((uneCategorie) => (
                                        <li key={uneCategorie.label}>
                                            <Link href={uneCategorie.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                                                {uneCategorie.label}
                                            </Link>
                                        </li>
                                    ))}

                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className=" text-xs text-muted-foreground text-center sm:text-left">
                        © {anneeActuelle} {configurationPiedPage.nomEntreprise}. Tous droits réservés.
                    </p>

                    <div className="flex space-x-6">
                        <Dialog>
                            <DialogTrigger className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                Mentions Légales
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                    <DialogTitle className="text-xl font-bold mb-2">Mentions Légales</DialogTitle>
                                    <DialogDescription className="text-foreground leading-relaxed whitespace-pre-line text-sm">
                                        {configurationPiedPage.textesLegaux.mentionsLegales}
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>

                        <Dialog>
                            <DialogTrigger className="text-xs text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                                Confidentialité
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[500px]">
                                <DialogHeader>
                                    <DialogTitle className="text-xl font-bold mb-2">Confidentialité</DialogTitle>
                                    <DialogDescription className="text-foreground leading-relaxed whitespace-pre-line text-sm">
                                        {configurationPiedPage.textesLegaux.confidentialite}
                                    </DialogDescription>
                                </DialogHeader>
                            </DialogContent>
                        </Dialog>
                    </div>
                </div>
            </div>
        </footer>
    )
}