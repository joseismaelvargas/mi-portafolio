
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import proyecto2 from"/img/proyecto2.png"
import proyecto1 from"/img/proyecto1.png"
import proyecto3 from"/img/proyecto3.png"
import proyecto4 from"/img/proyecto4.png"
import"./filtros.css"

const Filtro1 = () => {
  const proyectos = [
    {
        id: "001",
        nombre: "Proyecto Pixel",
        tipo: "Desarrollo Full-Stack",
        link: "https://app.netlify.com/sites/pixelxd/overview",
        img: proyecto2,},
    {
        id: "002",
        nombre: "Ecomert Carrito",
        tipo: "Desarrollo FullStack",
        link: "https://ecomertproject.netlify.app/",
        img: proyecto1, 
    },
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
  }
];
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
    {/* 
    <motion.div className="item" 
     initial={{ opacity: 0, x: 100, scale: 0.1 }} 
     animate={{ opacity: 1, x: 0, scale: 1 }}     
     transition={{ duration: 0.5, delay: 0.1 }}
   >
       <Link to={"https://www.google.com.ar/"}> <img src="https://tamalsen.dev/wp-content/uploads/2021/11/ailabgranada.com-poster.jpg" alt="img" className="img-filtro" /></Link> 
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div> */}
    </>
  )
}

export default Filtro1
