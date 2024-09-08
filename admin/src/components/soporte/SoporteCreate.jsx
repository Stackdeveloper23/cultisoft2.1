import { useState } from "react";
import { useParams } from "react-router-dom";
import Config from "../../Config";


const SoporteCreate = () => {
    
    const { id } = useParams();
    const [tipo_solicitud, setTipo_solicitud] = useState();
    const [nombre, setNombre] = useState();
    const [identificacion, setIdentificacion] = useState();
    const [movil, setMovil] = useState(); 
    const [email, setEmail] = useState(); 
    const [asunto, setAsunto] = useState(); 
    const [factura, setFactura] = useState();
    const [descripcion, setDescripcion] = useState();
    
        const create = async (ev) => {
            ev.preventDefault();
            try{
                const data ={
                    tipo_solicitud,
                    nombre,
                    identificacion,
                    movil,
                    email,
                    asunto,
                    factura,
                    descripcion,
                };
                await Config.createSoporte(data, id);
                window.location.reload();
                
            } catch (error) {
                console.log("error al crear el soporte", error);
            }
        }

    

    return(
            <>
          {/* Botón para abrir el modal */}
          <button
            type="button"
            className="btn btn-primary"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
          >
            Crear
          </button>
    
          {/* Modal */}
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex="-1"
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h1 className="modal-title fs-5" id="staticBackdropLabel">
                    Crear Soporte
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="container">
                <div className="modal-body ">
                    <form onSubmit={create} className='d-flex flex-column'> 
                        <label htmlFor="">Tipo de solicitud:</label>
                    <input type="text" value={tipo_solicitud} onChange={(e) => setTipo_solicitud(e.target.value)}/>
                   <label htmlFor="">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <label htmlFor="">identificacion:</label>
                    <input type="text" value={identificacion} onChange={(e) => setIdentificacion(e.target.value)}/>
                    <label htmlFor="">movil:</label>
                    <input type="text" value={movil} onChange={(e) => setMovil(e.target.value)}/>
                    <label htmlFor="">email:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="">asunto:</label>
                    <input type="text" value={asunto} onChange={(e) => setAsunto(e.target.value)}/>
                    <label htmlFor="">factura:</label>
                    <input type="text" value={factura} onChange={(e) => setFactura(e.target.value)}/>
                    <label htmlFor="">descripcion:</label>
                    <input type="text" value={descripcion} onChange={(e) => setDescripcion(e.target.value)}/>
                  
                   <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-primary w-50">
                    Enviar
                  </button>
                  </div>
                    </form>
    
                </div>
                </div>
                <div className="d-flex justify-content-evenly">
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                 
                </div>
                </div>
              </div>
            </div>
          </div>
        </>
    )
}
export default SoporteCreate;
