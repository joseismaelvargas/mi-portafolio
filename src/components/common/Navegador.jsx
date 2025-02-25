import { useState } from "react"
import { Link, NavLink } from "react-router-dom";
import "./nav.css"
export const Navegador=()=>{
const [menu,setMenu]=useState(false)

const Scroollid=(id)=>{
 const selector=document.querySelector(id)
 if(selector){
  selector.scrollIntoView({ behavior: "smooth" });
 }
}
return(
        <nav className="border-2 sm:border-2 ">
        <div className="mx-auto max-w-7xl  px-2 sm:px-6 lg:px-8 sm:py-5">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
          
              
         <button type="button"onClick={() =>setMenu((prev)=>!prev)} className="relative inline-flex items-center justify-center rounded-md p-2 sm:text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset  h-[60px]" aria-controls="mobile-menu" aria-expanded="false">
         <i className="burguer text-white bi bi-justify text-[70px] "></i>
        </button>
            </div>
             <div className="flex shrink-0 items-center mx-[20px]">
                   {/* <h4 className="sm:text-white h-8 w-auto ">Ismael Vargas</h4> */}
                </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
             
               <div className="hidden sm:ml-6 sm:block">
                <div className="divmobile  flex space-x-14">
                 
            
                <NavLink end to="/#inicio"className="rounded-md px-3 py-2 text-sm font-medium text-white" onClick={()=>Scroollid("#inicio")}> <a >Inicio</a></NavLink>
               
                <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-white " onClick={()=>Scroollid("#Conocimientos")}  end to="/#Conocimientos"><a >Conocimientos</a></NavLink> 
                <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-white"   onClick={()=>Scroollid("#proyectos")}  end to="/#proyectos"><a>Proyectos</a></NavLink>
                  <NavLink className="rounded-md px-3 py-2 text-sm font-medium text-white" onClick={()=>Scroollid("#quiensoy")}  end to="/#quiensoy"> <a >Quien soy</a></NavLink>
                 
                </div>
              </div>
            </div>
            <div className="divicon flex shrink-0 items-center mx-[10px]  sm:mx-[70px] ">
            <Link to={"https://github.com/joseismaelvargas"} ><i className="bi bi-github text-white w-[30px]" ></i></Link>
            <Link to={"https://www.linkedin.com/in/ismael-jose-vargas-221118351/"}><i className="bi bi-linkedin text-white hover:text-red-500"></i></Link>
       
           <Link to={""}><i className="bi bi-tiktok  text-white w-[30px]"></i></Link> 
            <Link to={"https://www.youtube.com/@ismaelvargas6084"}><i className="bi bi-youtube  text-white w-[30px]"></i></Link>
                </div>
          
          </div>
        </div>
      
            
        <div className={`${menu ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
           
          <div className="divmobile space-y-1 px-2 pt-2 pb-3 ">
          <NavLink end to="/#inicio"className="block rounded-md px-3 py-2 text-sm font-medium text-white" onClick={()=>Scroollid("#inicio")}> <a >Inicio</a></NavLink>
               
               <NavLink className="block rounded-md px-3 py-2 text-sm font-medium text-white " onClick={()=>Scroollid("#Conocimientos")}  end to="/#Conocimientos"><a >Conocimientos</a></NavLink> 
               <NavLink className="block rounded-md px-3 py-2 text-sm font-medium text-white"   onClick={()=>Scroollid("#proyectos")}  end to="/#proyectos"><a>Proyectos</a></NavLink>
                 <NavLink className="block rounded-md px-3 py-2 text-sm font-medium text-white" onClick={()=>Scroollid("#quiensoy")}  end to="/#quiensoy"> <a >Quien soy</a></NavLink>
        
           
          </div>
        </div>
      </nav>
      

    )
}