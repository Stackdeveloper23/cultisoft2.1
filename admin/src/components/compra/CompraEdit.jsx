import { useEffect, useState } from "react";
import Config from "../../Config";

const CompraEdit = ({ id }) => {
  const [compra, setCompra] = useState({
    nombre: '',
    apellidos: '',
    ciudad: '',
    barrio: '',
    direccion: '',
    movil: '',
    movil2: '',
    referencia: '',
  });
  useEffect(() => {
    const fetchCompra = async () => {
      try {
        const response = await Config.getComprasById(id);
        setCompra({
            nombre: response.data.nombre,
            apellidos: response.data.apellidos,
            ciudad: response.data.ciudad,
            barrio: response.data.barrio,
            direccion: response.data.direccion,
            movil: response.data.movil,
            movil2: response.data.movil2,
            referencia: response.data.referencia,
        });
      } catch (error) {
        console.error("Error fetching compras:", error);

      }
    };

    if (id) fetchCompra(); 
  }, [id]);

  const handleInputChange = (e) => {
    const { nombre, value } = e.target;
    setCompra({
      ...compra,
      [nombre]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.putCompras(compra, id);
      window.location.reload();
    } catch (error) {
      console.error("Error updating compra:", error);
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
                Editar Compra
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
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={compra.nombre}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="apellidos" className="form-label">
                      Apellido
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="apellidos"
                      name="apellidos"
                      value={compra.apellidos}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="departamento" className="form-label">
                    departamento
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="departamento"
                      name="departamento"
                      value={compra.departamento}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="ciudad" className="form-label">
                    ciudad
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="ciudad"
                      name="ciudad"
                      value={compra.ciudad}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="barrio" className="form-label">
                    barrio
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="barrio"
                      name="barrio"
                      value={compra.barrio}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="direccion" className="form-label">
                    direccion
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="direccion"
                      name="direccion"
                      value={compra.direccion}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="movil" className="form-label">
                    movil
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="movil"
                      name="movil"
                      value={compra.movil}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="movil2" className="form-label">
                    movil2
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="movil2"
                      name="movil2"
                      value={compra.movil2}
                      onChange={handleInputChange}
                      required
                    />
                  </div> <div className="mb-3">
                    <label htmlFor="referecia" className="form-label">
                    referecia
                    </label>
                    <input
                    type="text"
                      className="form-control"
                      id="referecia"
                      name="referecia"
                      value={compra.referencia}
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

export default CompraEdit;
