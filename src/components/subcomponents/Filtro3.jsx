import { motion } from "framer-motion";
import"./filtros.css"
import proyecto2 from"/img/proyecto2.png"
import proyecto1 from"/img/proyecto1.png"
import proyecto3 from"/img/proyecto3.png"
import proyecto4 from"/img/proyecto4.png"
import proyecto5 from"/img/proyecto5.png"
import proyecto6 from"/img/proyecto6.png"

import { Link } from "react-router-dom";
const Filtro3 = () => {
   const proyectos = [
      {
          id: "001",
          nombre: "Proyecto Pixel",
          tipo: "Desarrollo web",
          link: "https://app.netlify.com/sites/pixelxd/overview",
          img: proyecto2,},
    
      {
        id: "003",
        nombre: "Game Store",
        tipo: "Desarrollo web",
        link: "https://calm-semifreddo-973c11.netlify.app/",
        img: proyecto3, 
    },
    {
      id: "004",
        nombre: "Lista de Tareas",
        tipo: "Desarrollo web",
        link: "https://appnoted.netlify.app/",
        img: proyecto4,
    },
  
  
   
  
  ]
  return (
    
    <>
    {
    proyectos.map(object=>(
      <motion.div className="item" key={object.id}
     initial={{ opacity: 0, x: 100, scale: 0.1 }} 
     animate={{ opacity: 1, x: 0, scale: 1 }}     
     transition={{ duration: 0.5, delay: 0.1 }}
   >
     <Link to={object.link}> <img src={object.img} alt="img" className="img-filtro" /></Link> 
      <h3>{object.nombre}</h3>
      <p>{object.tipo}</p>
    </motion.div>
 
    ))
   }
    </>
  )
}

export default Filtro3
