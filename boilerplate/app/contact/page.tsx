"use client"

//Importation
import { Contact } from "@/components/section/contact"
import { motion } from "framer-motion"

//Composant
export default function ContactPage() {
    return(
        <div className="w-full min-h-full bg-muted/10">
            <motion.div initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease: "easeOut" }}>
                <Contact/>
            </motion.div>
        </div>
    )
}