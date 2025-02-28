
import { useForm } from "react-hook-form"
// import"../components/css/Formulario.css"
import "../css/Formulario.css"
import { useRef } from "react";
import emailjs from "@emailjs/browser"
const ModalForm = () => {
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
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
  <div className="modal-header">
        <h1 className="modal-title fs-5 text-center" id="exampleModalLabel">Solicitad Informacion</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
    <div className="modal-content">
  
      
      <form ref={form} onSubmit={handleSubmit(Sendemail)}>
        <label htmlFor="">Nombre Completo</label><br />
        <input type="text"  {...register("nombre",
         {
          required:"Agregue Su nombre",
          minLength:{value:4,message:"Agregue un Nombre Valido"}
         }
        )} /><br  />
        {errors.nombre&&<p className="error"> {errors.nombre.message}</p>}
        <label htmlFor="">Correo Electronico</label><br />
        <input type="email"  {...register("correo",
         {
          required:"Agregue Su Correo Electronico",
          minLength:{value:6,message:"Agregue un Correo Valido"}
         }
        )}/><br />
         {errors.correo&&<p className="error"> {errors.correo.message}</p>}
        <label htmlFor="">Asunto</label><br />
        <input type="text"  {...register("asunto",
         {
          required:"Agregue Un Asunto",
          minLength:{value:7,message:"Agregue un Asunto Valido"}
         }
        )}/><br />
         {errors.asunto&&<p className="error"> {errors.asunto.message}</p>}
        <label htmlFor="">Mensaje</label><br />
        <textarea type="text"
         {...register("mensaje",
          {
           required:"Agregue Su Mensaje",
           minLength:{value:5,message:"Agregue mas Contexto al Mensaje"}
          }
         )}></textarea><br />
          {errors.mesaje&&<p className="error"> {errors.mensaje.message}</p>}
        
        <button type="submit" >Enviar Mensaje </button>
      </form>
    </div>
  </div>
</div>
  )
}

export default ModalForm
