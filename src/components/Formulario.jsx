import { useForm } from "react-hook-form"
import"../components/css/Formulario.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser"
const Formulario = () => {
  const { register, handleSubmit ,formState:{errors},reset,setValue} = useForm();
  const form=useRef()
  const Sendemail=()=>{
    
     emailjs
      .sendForm('service_0hiib5a', 'template_ixeaf0s', form.current, {
        publicKey: 'YsSHDf_TbSF18GkGC',
      })
      .then(
        () => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Email Enviado",
            showConfirmButton: false,
            timer: 1500
          });
         console.log('SUCCESS!');
     reset()
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  }
  return (
    <>
     <h3 className="contactame">Contac <strong className="text-red-700">Me</strong></h3>
    <section className="section-form my-10" id="Contacto" >
          
      <div className="div-form-text">
        <div className="div-2">
     
             <h2 className="form-subtitle">Disponible para oportunidades independientes seleccionadas</h2>
                  <p className="text-form">¿Tienes un proyecto interesante con el que necesitas ayuda? ¡
                Envíame un correo electrónico o contáctame por mensaje instantáneo!</p>    
                   <h3 className="gmail">i00934562@gmail.com</h3>
        </div>
   
        
      </div>
   
    <div className="div-form">
       
         
      <form ref={form} onSubmit={handleSubmit(Sendemail)}>
       <div className="div-forminput">
          <label htmlFor="">Nombre Completo</label>
        <input type="text"  {...register("nombre",
         {
          required:"Agregue Su nombre",
          minLength:{value:4,message:"Agregue un Nombre Valido"}
         }
        )} />
       
        {errors.nombre&&<p className="error"> {errors.nombre.message}</p>}
       </div >
           <div className="div-forminput">
            <label htmlFor="">Correo Electronico</label>
               <input type="email"  {...register("correo",
         {
          required:"Agregue Su Correo Electronico",
          minLength:{value:6,message:"Agregue un Correo Valido"}
         }
        )}/>
      
         {errors.correo&&<p className="error"> {errors.correo.message}</p>}
           </div>
        
         <div className="div-forminput"> <label htmlFor="">Asunto</label>
        <input type="text"  {...register("asunto",
         {
          required:"Agregue Un Asunto",
          minLength:{value:7,message:"Agregue un Asunto Valido"}
         }
        )}/>
         {errors.asunto&&<p className="error"> {errors.asunto.message}</p>} </div>
         <div className="div-forminput"> <label htmlFor="">Numero de Telefono</label>
        <input type="number"  {...register("numero",
         {
          required:"Agregue Un Asunto",
          minLength:{value:3,message:"Agregue un numero Valido"}
         }
        )}/>
         {errors.numero&&<p className="error"> {errors.numero.message}</p>} </div>

        <div className="div-forminput">
 <label htmlFor="">Mensaje</label><br />
        <textarea type="text"
         {...register("mensaje",
          {
           required:"Agregue Su Mensaje",
           minLength:{value:5,message:"Agregue mas Contexto al Mensaje"}
          }
         )}></textarea>
          {errors.mesaje&&<p className="error"> {errors.mensaje.message}</p>}
        </div>
       
       
         
            <div className="div-forminput">
               <button type="submit">Enviar Mensaje </button> 
            </div>
   
   
      </form>
    </div>
    </section></>
  )
}

export default Formulario
