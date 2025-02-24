import { useState } from "react"
import Filtro1 from "./subcomponents/Filtro1"
import Filtro2 from "./subcomponents/Filtro2"
import Filtro3 from "./subcomponents/Filtro3"
import"../components/css/Trabajo.css"
const Filtrar = () => {
    const[Filtro,setFiltro]=useState(1)
    console.log(Filtro)
    const components=Filtro==1?<Filtro1></Filtro1>:Filtro==2?<Filtro2></Filtro2>:Filtro==3?<Filtro3></Filtro3>:null
  return (
    <div>
          <div className="filtro-header">
            <button onClick={()=>setFiltro(1)}>Filtrar porTodo</button>
            <button onClick={()=>setFiltro(2)}>/Visualización de datos</button>
             <button onClick={()=>setFiltro(3)}>/Desarrollo web</button>
          </div>
          {components}
    </div>
  )
}

export default Filtrar
