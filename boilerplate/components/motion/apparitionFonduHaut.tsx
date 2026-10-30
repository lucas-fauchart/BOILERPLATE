"use client"

//Importation
import { motion } from "framer-motion"
import { ReactNode } from "react"

interface ApparitionFonduHautProps {
    children : ReactNode,
    delai ?: number
}

//Composant
export function ApparitionFonduHautProps({ children, delai = 0 }: ApparitionFonduHautProps) {
    return(
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px"}} transition={{ duration: 0.6, delay: delai, ease: "easeOut" }}>
            {children}
        </motion.div>
    )
}
