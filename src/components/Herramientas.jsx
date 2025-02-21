import"../components/css/heramientas.css"
import { FaReact } from "react-icons/fa";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlinePhoneIphone } from "react-icons/md";
export const Herramientas=()=>{
    return(
        <>
        <br />
        <br />
        <section className="seccion-Herramientas">
            <h1 className="title-herramientas text-center">MIS CONOCIMIENTOS:</h1>

            <div className="sm:mx-[150px] sm:my-10 grid grid-cols-1 sm:grid-cols-3  md:gap-0">

              <div className="caj1">
                <div className="dev">
                     <i  className="icon-He"><FaLaptopCode className="text-gray-500"></FaLaptopCode></i>
              <h3 className="title-pc">Desarollo de Software</h3>
                
                </div>
          
                <p className="p-he">Experiencia tanto en programación funcional como orientada a objetos: Dart, Python, Java, JavaScript, TypeScript.</p>
                <p className="ps-he text-center">Lenguajes de Programacion:</p>
                 <ul className="lista text-white">
                    <li>.JavaScript</li>
                    <li>.HTMl</li>
                    <li>.Css</li>
                    <li>.TypeScript</li>
               

                 </ul>
              </div>
              <div className="caj1">
               
              <div className="dev">
                     <i  className="icon-He "><FaReact className="text-blue-400"></FaReact></i>
              <h3 className="title-he">Desarrollo de frontend
              React</h3>
                
                </div>
          
                <p className="p-he">Me gusta codificar cosas desde cero y disfruto dando vida a las ideas en el navegador..</p>
                <p className="ps-he text-center">Herramientas de desarrollo:</p>
                 <ul className="lista text-white">
                    <li>.React</li>
                    <li>.Git</li>
                    <li>.Github</li>
                    <li>.Node.js</li>
                    <li>.Librerias</li>
                   

                 </ul>
          
              </div>
              <div className="caj1">
                
             
              <div className="dev">
                     <i  className="icon-He "><MdOutlinePhoneIphone className="text-teal-600"></MdOutlinePhoneIphone></i>
              <h3 className="title-iphone">Diseño Responsivo</h3>
                
                </div>
          
                <p className="p-he">Valoro la estructura de contenido simple, los patrones de diseño limpios y las interacciones reflexivas, UI, Web, Aplicaciones, </p>
                <p className="ps-he text-center">Herramientas de diseño:</p>
                 <ul className="lista text-white">
                    
                    <li>.Talwind.css</li>
                    <li>.Boostrap 5</li>
                    <li>.Reacticon</li>
                    <li>.FrameMotion</li>
                   

                 </ul>
              </div>
            </div>
            <div className="fondo">
                  <img src="https://tamalsen.dev/wp-content/uploads/2021/12/hello-world-html-code-768x384.png" className="img" alt="" />
            </div>
         
            
        </section></>
    )
}