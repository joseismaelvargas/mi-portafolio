import "./nav.css"
import { Link } from "react-router-dom"
export const Footer=()=>{
    return(
        <>
             <footer className="footer">
             <p className="copirigtn">&copy; 2025 ismaelvargas6084. Todos los derechos reservados.</p>  
             <Link className="list" to={"https://github.com/joseismaelvargas"} >Github</Link>
            <Link className="list" to={"https://www.linkedin.com/in/ismael-jose-vargas-221118351/"}>Linkedin</Link>
       
           <Link className="list" to={""}>Tiktok</Link> 
            <Link className="list" to={"https://www.youtube.com/@ismaelvargas6084"}>Youtube</Link>
              
       
            
             </footer>
        </>
    )
}