import { useState } from "react";
import Config from "../../Config";
import { useParams } from "react-router-dom";

const CompraCreate = () => {
    
    const { id } = useParams();
    const [nombre, setNombre] = useState();
    const [apellidos, setApellidos] = useState(); 
    const [departamento, setDepartamento] = useState();
    const [ciudad, setCiudad] = useState();
    const [barrio, setBarrio] = useState();
    const [direccion, setDireccion] = useState();
    const [movil, setMovil] = useState();
    const [movil2, setMovil2] = useState();
    const [referencia, setReferencia] = useState();

    
        const create = async (ev) => {
            ev.preventDefault();
            try{
                const data ={
                    nombre,
                    apellidos,
                    departamento,
                    ciudad,
                    barrio,
                    direccion,
                    movil,
                    movil2,
                    referencia,
                };
                await Config.createCompra(data, id);
                window.location.reload();
                
            } catch (error) {
                console.log("error al crear la compra", error);
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
                    Crear Compra
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
                   <label htmlFor="">Nombre:</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)}/>
                    <label htmlFor="">apellidos:</label>
                    <input type="text" value={apellidos} onChange={(e) => setApellidos(e.target.value)}/> 
                    <label htmlFor="">departamento:</label>
                    <input type="text" value={departamento} onChange={(e) => setDepartamento(e.target.value)}/>
                   <label htmlFor="">ciudad:</label>
                    <input type="text" value={ciudad} onChange={(e) => setCiudad(e.target.value)}/>
                   <label htmlFor="">barrio:</label>
                    <input type="text" value={barrio} onChange={(e) => setBarrio(e.target.value)}/>
                   <label htmlFor="">direccion:</label>
                    <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)}/>
                   <label htmlFor="">movil:</label>
                    <input type="text" value={movil} onChange={(e) => setMovil(e.target.value)}/>
                   <label htmlFor="">movil2:</label>
                    <input type="text" value={movil2} onChange={(e) => setMovil2(e.target.value)}/>
                   <label htmlFor="">referencia:</label>
                    <input type="text" value={referencia} onChange={(e) => setReferencia(e.target.value)}/>
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
export default CompraCreate;
