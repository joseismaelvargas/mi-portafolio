
import { motion } from "framer-motion";
import"./filtros.css"
const Filtro1 = () => {
  return (
    <>
    <motion.div className="item" 
     initial={{ opacity: 0, x: 100, scale: 0.1 }} 
     animate={{ opacity: 1, x: 0, scale: 1 }}     
     transition={{ duration: 0.5, delay: 0.1 }}
   >
       <img src="https://tamalsen.dev/wp-content/uploads/2021/11/ailabgranada.com-poster.jpg" alt="img" className="img-filtro" />
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div>
    <motion.div className="item" 
     initial={{ opacity: 0, x: 100, scale: 0.1 }} 
     animate={{ opacity: 1, x: 0, scale: 1 }}     
     transition={{ duration: 0.5, delay: 0.1 }}
   >
       <img src="https://tamalsen.dev/wp-content/uploads/2021/11/ailabgranada.com-poster.jpg" alt="img" className="img-filtro" />
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div>
    <motion.div className="item" 
     initial={{ opacity: 0, x: 100, scale: 0.1 }} 
     animate={{ opacity: 1, x: 0, scale: 1 }}     
     transition={{ duration: 0.5, delay: 0.1 }}
   >
       <img src="https://tamalsen.dev/wp-content/uploads/2021/11/ailabgranada.com-poster.jpg" alt="img" className="img-filtro" />
      <h3>Flight Local (Solución de viajes B2B)</h3>
      <p>Desarollo web</p>
    </motion.div>
    </>
  )
}

export default Filtro1
