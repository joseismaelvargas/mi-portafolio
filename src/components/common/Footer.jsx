import "./nav.css"
import { Link } from "react-router-dom"
export const Footer=()=>{
    return(
        <>
             <footer className="footer">
                {/* <h2 className="footer-title">Disponible para oportunidades independientes seleccionadas</h2>
                <p className="text-footer">¿Tienes un proyecto interesante con el que necesitas ayuda? ¡
                Envíame un correo electrónico o contáctame por mensaje instantáneo!</p>
               <h3 className="copiriht">i00934562@gmail.com</h3> */}
        
             <Link className="list" to={"https://github.com/joseismaelvargas"} >Github</Link>
            <Link className="list" to={"https://www.linkedin.com/in/ismael-jose-vargas-221118351/"}>Linkedin</Link>
       
           <Link className="list" to={""}>Tiktok</Link> 
            <Link className="list" to={"https://www.youtube.com/@ismaelvargas6084"}>Youtube</Link>
              
       
            
             </footer>
        </>
    )
}