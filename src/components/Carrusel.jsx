import"../components/css/carrusel.css"
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay ,Pagination} from 'swiper/modules'; 
import imgresponsive from"/img/responsive.png"
import enfoque from"/img/enfoque.png"
import enfoque2 from"/img/enfoque2.png"
import { useState } from "react";

export const Carrusel=()=>{
  // const ScroolSection=(id)=>{
  //  const scroll=document.querySelector(id)
  //  if(scroll){
  //   scroll.scrollIntoView({ behavior: "smooth" });
  //  }
  
const [animation,setAnimationKey]=useState(0)
 return(
    <>
<section className="seccion">
   <Swiper
    modules={[ Navigation,Autoplay,Pagination]}
    slidesPerView={1} 
    spaceBetween={30} 
    onSlideChange={() => setAnimationKey((prev) => prev + 1)}
    autoplay={{
      delay:5000
  }}
  pagination={{
    clickable: true,
  }}
  loop={true}>
      <SwiperSlide>
  <div className="container mx-auto text-center">
  <motion.h2
  key={`h2-${animation}`}
initial={{ opacity: 0, x: 100 }} 
animate={{ opacity: 1, x: 0 }}     
  transition={{ duration: 1.5,delay: 0.5}}
  className="title-name text-4xl font-bold text-white"
>
  Hola, Soy Ismael.
</motion.h2>

    <motion.p    key={`p-${animation}`}initial={{ opacity: 0, x:100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5 ,delay: 0.5}} className="subtitle text-lg text-gray-300 mt-2">
      Programador y desarrollador web de Argentina. Especializado en el área del Frontend.
    </motion.p>


  


  </div>


  <picture className="imagenes-container mt-6">
    <source 
      srcSet={enfoque2}
      media="(max-width:639px)" 
    />
    <source 
      srcSet={enfoque2}
      media="(min-width:640px)" 
    />
    <motion.img 
     key={`img-${animation}`}
     initial={{ opacity: 0, x:100 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.5,delay: 0.5}}
      className="img1 w-full max-w-sm mx-auto rounded-lg shadow-lg" 
      src={enfoque2} 
      alt="Imagen principal"
    />
  </picture>
  </SwiperSlide>
  {/* motion2 */}
  <SwiperSlide>
  <div className="container mx-auto text-center">
  <motion.h2
   key={`h2-${animation}`}
initial={{ opacity: 0, x: 100 }} 
animate={{ opacity: 1, x: 0 }}     
  transition={{ duration: 1.5,delay: 0.5}}l
  className="title-name text-4xl font-bold text-white"
>
  Aplicaciones A Medidas
</motion.h2>

    <motion.p 
     key={`p-${animation}`}  initial={{ opacity: 0, x:100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5,delay: 0.5 }} className="subtitle text-lg text-gray-300 mt-2">
        Sitios web responsivos para cualquier dispositivo, optimizados para una experiencia fluida y eficiente.
    </motion.p>


  


  </div>


  <picture className="imagenes-container mt-6">
    <source 
      srcSet={imgresponsive}
      media="(max-width:639px)" 
    />
    <source 
      srcSet={imgresponsive} 
      media="(min-width:640px)" 
    />
    <motion.img 
     key={`img-${animation}`}
     initial={{ opacity: 0, x:100 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.5,delay: 0.5}}
      className="img-main w-full max-w-sm mx-auto rounded-lg shadow-lg" 
      src={imgresponsive}
      alt="Imagen principal"
    />
  </picture>
  </SwiperSlide>
  <SwiperSlide>
  <div className="container mx-auto text-center">
  <motion.h2
   key={`h2-${animation}`}
initial={{ opacity: 0, x: 100 }} 
animate={{ opacity: 1, x: 0 }}     
  transition={{ duration: 1.5,delay: 0.5}}l
  className="title-name text-4xl font-bold text-white"
>
  Enfoque Creativo
</motion.h2>

    <motion.p 
     key={`p-${animation}`}  initial={{ opacity: 0, x:100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5,delay: 0.5 }} className="subtitle text-lg text-gray-300 mt-2">
        Diseños Unicos para cualquier proyecto, diseñados con pasión y precisión.
    </motion.p>

   <motion.button   key={`button-${animation}`}  initial={{ opacity: 0, x:100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1.5,delay: 0.5 }} className="btn-carrusel">Ver Proyectos</motion.button>
  


  </div>


  <picture className="imagenes-container mt-6">
    <source 
      srcSet={enfoque}
      media="(max-width:639px)" 
    />
    <source 
      srcSet={enfoque} 
      media="(min-width:640px)" 
    />
    <motion.img 
     key={`img-${animation}`}
     initial={{ opacity: 0, x:100 }}
     animate={{ opacity: 1, x: 0 }}
     transition={{ duration: 1.5,delay: 0.5}}
      className="img-main w-full max-w-sm mx-auto rounded-lg shadow-lg" 
      src={enfoque}
      alt="Imagen principal"
    />
  </picture>
  </SwiperSlide>
  </Swiper>
</section>
    </>
 )
}