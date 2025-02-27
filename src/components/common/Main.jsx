import { Carrusel } from "../Carrusel"
import { Vision } from "../Vision"
import { Herramientas } from "../Herramientas"
import { Trabajo } from "../Trabajo"
import Filtrar from "../Filtrar"
import Formulario from "../Formulario"

export const Main=()=>{
    return(
        <>
        <main className="sm:row ">
       <Carrusel></Carrusel>
       <Vision></Vision>
       <Herramientas></Herramientas>
       
       <Trabajo></Trabajo>
       <Filtrar></Filtrar>
       <Formulario></Formulario>
      
        </main>
        </>
    )
}