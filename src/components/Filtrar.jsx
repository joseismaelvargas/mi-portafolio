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
    <div id="proyectos">
      {/* <h3 className="title-proyect">Mis Proyectos</h3> */}
          <div className="filtro-header">
            
            <button onClick={()=>setFiltro(1)} className={`${Filtro==1?"btn-filtro":""}`}>Filtrar porTodo</button>
            <p>/</p>
            <button onClick={()=>setFiltro(2)} className={`${Filtro==2?"btn-filtro":""}`}>Visualización de datos</button>
            <p>/</p>
             <button onClick={()=>setFiltro(3)} className={`${Filtro==3?"btn-filtro":""}`}>Desarrollo web</button>
          </div>
          <div className="div-filtro">
            {components}
          </div>
          
    </div>
  )
}

export default Filtrar
