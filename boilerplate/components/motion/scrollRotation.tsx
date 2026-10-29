"use client"

//Importation
import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { cn } from "@/lib/utils"

//Composant
export function ScrollRotation({children, className}: { children: React.ReactNode; className?: string }) {

    //Variable
    const conteneurRef = useRef(null)

    const { scrollYProgress } = useScroll({
        target: conteneurRef,
        offset: ["start end", "end start"]
    })

    const rotation = useTransform(scrollYProgress, [0, 1], [0, 360])

    return (
        <div ref={conteneurRef} className={cn("w-full flex justify-center", className)} >
            <motion.div style={{ rotate: rotation }}>
                {children}
            </motion.div>
        </div>
    );

}