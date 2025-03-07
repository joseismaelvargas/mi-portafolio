import { Carrusel } from "../Carrusel"
import { Vision } from "../Vision"
import { Herramientas } from "../Herramientas"
import { Trabajo } from "../Trabajo"
import Filtrar from "../Filtrar"
import Formulario from "../Formulario"
import ModalForm from "../subcomponents/ModalForm"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

import { children } from "react"
const AnimatedComponent=({children})=>{
    const{ref,inView}=useInView({triggerOnce:true,threshold:0.2})
    return(
        <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 50 }}
        animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 1 }}>
          {children}
        </motion.div>
    )
}
export const Main=()=>{
    return(
        <>
        <main className="sm:row ">
            <ModalForm></ModalForm>
           <Carrusel />
            <AnimatedComponent><Vision /></AnimatedComponent>
            <AnimatedComponent><Herramientas /></AnimatedComponent>
            <AnimatedComponent><Trabajo /></AnimatedComponent>
            <AnimatedComponent><Filtrar /></AnimatedComponent>
            <AnimatedComponent><Formulario /></AnimatedComponent>
      
        </main>
        </>
    )
}