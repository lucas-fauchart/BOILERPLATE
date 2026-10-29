"use client"

//Importation
import { motion } from "framer-motion"

interface FlottementItemProps {
    children : React.ReactNode,
    delai ?: number,
    duree ?: number,
    yOffset ?: number,
    className ?: string
}

//Composant
export function FlottementItem({ children, delai = 0, duree = 0, yOffset = 15, className }: FlottementItemProps) {
    return(
        <motion.div 
            className={className} 
            animate={{ y: [-yOffset, yOffset, -yOffset ], rotate: [-2, 2, -2]}} 
            transition={{ duration: duree, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: delai}}
        >
            {children}
        </motion.div>
    )
}