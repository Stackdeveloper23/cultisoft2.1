import { useEffect, useState } from "react";
import Config from "../../Config";

const SoporteEdit = ({ id }) => {
  const [soporte, setSoporte] = useState({
                    tipo_solicitud:'',
                    nombre:'',
                    identificacion:'',
                    movil:'',
                    email:'',
                    asunto:'',
                    factura:'',
                    descripcion: '',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Config.getSoporteById(id);
        setSoporte({
            tipo_solicitud: response.data.tipo_solicitud,
            nombre: response.data.nombre,          
            identificacion: response.data.identificacion,
            movil: response.data.movil,
            email: response.data.email,
            asunto: response.data.asunto,
            factura: response.data.factura,
            descripcion: response.data.descripcion,
        });
      } catch (error) {
        console.error("Error fetching soporte:", error);
      }
    };

    if (id) fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSoporte({
      ...soporte,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.putSoporte(soporte, id);
      window.location.reload();
    } catch (error) {
      console.error("Error updating products:", error);
    }
  };


  return (
    <>
      {/* Botón para abrir el modal */}
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target={`#editModal-${id}`}
      >
       <span className="material-symbols-outlined">
edit
</span>
      </button>

      {/* Modal */}
      <div
        className="modal fade"
        id={`editModal-${id}`}
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby={`editModalLabel-${id}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id={`editModalLabel-${id}`}>
                Editar Usuario
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="container">
              <div className="modal-body">
                <form onSubmit={handleSubmit} className="d-flex flex-column">
                <div className="mb-3">
                    <label htmlFor="tipo_solicitud" className="form-label">
                      Tipo de solicitud
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="tipo_solicitud"
                      name="tipo_solicitud"
                      value={soporte.tipo_solicitud}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="nombre" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombre"
                      name="nombre"
                      value={soporte.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="identificacion" className="form-label">
                    identificacion
                    </label>
                    <input
                      className="form-control"
                      id="identificacion"
                      name="identificacion"
                      value={soporte.identificacion}
                      onChange={handleInputChange}
                      required
                    />
                  </div>  
                  <div className="mb-3">
                    <label htmlFor="movil" className="form-label">
                    movil
                    </label>
                    <input
                      className="form-control"
                      id="movil"
                      name="movil"
                      value={soporte.movil}
                      onChange={handleInputChange}
                      required
                    />
                  </div>  
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                    email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      name="email"
                      value={soporte.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="asunto" className="form-label">
                    asunto
                    </label>
                    <input
                      className="form-control"
                      id="asunto"
                      name="asunto"
                      value={soporte.asunto}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                   <div className="mb-3">
                    <label htmlFor="factura" className="form-label">
                    factura
                    </label>
                    <input
                      className="form-control"
                      id="factura"
                      name="factura"
                      value={soporte.factura}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="descripcion" className="form-label">
                    descripcion
                    </label>
                    <input
                      className="form-control"
                      id="descripcion"
                      name="descripcion"
                      value={soporte.descripcion}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="d-flex justify-content-center">
                  <button type="submit" className="btn btn-primary">
                    Actualizar
                  </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SoporteEdit;
