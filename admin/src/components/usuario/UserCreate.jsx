import { useState } from "react";
import Config from "../../Config";
import { useParams } from "react-router-dom";

const UserCreate = () => {
    
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState(); 
    const [password, setPassword] = useState(); 
    const [password_confirmation, setPasswordConfirmation] = useState(); 
    
        const create = async (ev) => {
            ev.preventDefault();
            try{
                const data ={
                    name,
                    email,
                    password,
                    password_confirmation,

                };
                await Config.createUsers(data, id);
                window.location.reload();
                
            } catch (error) {
                console.log("error al crear el usuario", error);
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
                    Crear Usuario
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
                    <label htmlFor="">Gmail:</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)}/>
                    <label htmlFor="">Contraseña:</label>
                    <input type="text" value={password} onChange={(e) => setPassword(e.target.value)}/>
                    <label htmlFor="">Confirma la Contraseña:</label>
                    <input type="text" value={password_confirmation} onChange={(e) => setPasswordConfirmation(e.target.value)}/>
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
export default UserCreate;
