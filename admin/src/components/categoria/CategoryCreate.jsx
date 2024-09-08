import { useState } from "react";
import Config from "../../Config";
import { useParams } from "react-router-dom";

const CategoryCreate = () => {
    
    const { id } = useParams();
    const [name, setName] = useState();
    const [description, setDescription] = useState(); 
    const [imagen, setImagen] = useState(); 

    
        const create = async (ev) => {
            ev.preventDefault();
            try{
                const data ={
                    name,
                    description,
                    imagen,
                };
                await Config.createCategories(data, id);
                window.location.reload();
                
            } catch (error) {
                console.log("error al crear la categoria", error);
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
                    Crear Productos
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
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label htmlFor="">Descripcion:</label>
                    <input type="text" value={description} onChange={(e) => setDescription(e.target.value)}/>
                    <label htmlFor="">Imgen:</label>
                    <input type="text" value={imagen} onChange={(e) => setImagen(e.target.value)}/>
              
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
export default CategoryCreate;
