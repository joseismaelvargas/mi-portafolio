import enfoque2 from"/img/enfoque2.png"
import"../components/css/Trabajo.css"
export const Trabajo=()=>{
    return(
        <>
       
        <section className="seccion3 " id="quiensoy">
            <div className="div-soy">
               <h1 className="title-soy">Quien Soy</h1>
               <p className="p-soy">Soy un Apasionado de la Programacion y el Diseño web Autodidacta Con un gran Interes en Crear Aplicaciones web eficientes y Faciles de usar utilizando React.js.Tengo Proyectos en Github donde Muestro Mis Proyectos y mis habilidades en el Desarollo Full-Stack
               </p>
            </div>  
            <img  className ="img-soy"src={enfoque2} alt="enfoque2" />
           
        </section>
        </>
    )
}