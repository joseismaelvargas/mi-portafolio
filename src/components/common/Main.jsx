import { Carrusel } from "../Carrusel"
import { Vision } from "../Vision"
import { Herramientas } from "../Herramientas"
import { Trabajo } from "../Trabajo"
export const Main=()=>{
    return(
        <>
        <main className="sm:row ">
       <Carrusel></Carrusel>
       <Vision></Vision>
       <Herramientas></Herramientas>
       
       <Trabajo></Trabajo>
        </main>
        </>
    )
}