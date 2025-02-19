import"../components/css/carrusel.css"
export const Carrusel=()=>{
 return(
    <>
<section className="seccion">
  <div className="container mx-auto text-center">
    <h2 className="title-name text-4xl font-bold text-white">Hola, Soy Ismael.</h2>
    <p className="subtitle text-lg text-gray-300 mt-2">
      Programador y desarrollador web de Argentina. Especializado en el área del Frontend.
    </p>


    <button className="btn-learn mt-4 px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300">
      Learn more
    </button>


    <div className="logos-container flex justify-center gap-4 mt-6">
      <img src="logo1.png" alt="Logo 1" className="h-12 w-12" />
      <img src="logo2.png" alt="Logo 2" className="h-12 w-12" />
      <img src="logo3.png" alt="Logo 3" className="h-12 w-12" />
      <img src="logo4.png" alt="Logo 4" className="h-12 w-12" />
    </div>
  </div>


  <picture className="imagenes-container mt-6">
    <source 
      srcSet="https://tse4.mm.bing.net/th?id=OIP.NQvv9ODaTT8TWp3pI_d1WAHaHa&pid=Api&P=0&h=180" 
      media="(max-width:639px)" 
    />
    <source 
      srcSet="https://tse4.mm.bing.net/th?id=OIP.NQvv9ODaTT8TWp3pI_d1WAHaHa&pid=Api&P=0&h=180" 
      media="(min-width:640px)" 
    />
    <img 
      className="img-main w-full max-w-sm mx-auto rounded-lg shadow-lg" 
      src="https://tse4.mm.bing.net/th?id=OIP.NQvv9ODaTT8TWp3pI_d1WAHaHa&pid=Api&P=0&h=180" 
      alt="Imagen principal"
    />
  </picture>
</section>
    </>
 )
}