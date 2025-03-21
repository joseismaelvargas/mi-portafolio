
import { motion } from "framer-motion";
import"./filtros.css"
import { Link } from "react-router-dom";
import proyecto1 from"/img/proyecto1.png"
import proyecto5 from"/img/proyecto5.png"
const Filtro2 = () => {
  return (
    <>
    <motion.div className="item"
    initial={{ opacity: 0, x: 100, scale: 0.1 }} 
    animate={{ opacity: 1, x: 0, scale: 1 }}     
    transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link to={"https://ecomertproject.netlify.app/"}> <img src={proyecto1} alt="img" className="img-filtro" /></Link> 
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div>
    <motion.div className="item"
    initial={{ opacity: 0, x: 100, scale: 0.1 }} 
    animate={{ opacity: 1, x: 0, scale: 1 }}     
    transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Link to={"https://ecomertproject.netlify.app/"}> <img src={proyecto5} alt="img" className="img-filtro" /></Link> 
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div>
    <motion.div className="item"
    initial={{ opacity: 0, x: 100, scale: 0.1 }} 
    animate={{ opacity: 1, x: 0, scale: 1 }}     
    transition={{ duration: 0.5, delay: 0.1 }}
    >
      <img src="https://tamalsen.dev/wp-content/uploads/2021/11/flighlocal-cover-image.jpg" alt="img" className="img-filtro" />
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div>
    
    </>
  )
}

export default Filtro2
