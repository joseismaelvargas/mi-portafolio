import { Carrusel } from "../Carrusel"
import { Vision } from "../Vision"
import { Herramientas } from "../Herramientas"
export const Main=()=>{
    return(
        <>
        <main className="sm:row ">
       <Carrusel></Carrusel>
       <Vision></Vision>
       <Herramientas></Herramientas>
        </main>
        </>
    )
}