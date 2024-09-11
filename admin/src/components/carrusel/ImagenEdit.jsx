import { useEffect, useState } from "react";
import Config from "../../Config";

const ImagenEdit = ({ id }) => {
  const [carrusel, setCarrusel] = useState({
    image_url: '',
  });
  useEffect(() => {
    const fetchCarrusel = async () => {
      try {
        const response = await Config.getCarruselById(id);
        //console.log('respuesto categoria', response.data)
        setCarrusel({
          image_url: response.data.image_url,
        });
      } catch (error) {
        console.error("Error fetching category:", error);

      }
    };

    if (id) fetchCarrusel(); // Solo cargar datos si el id existe
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCarrusel({
      ...carrusel,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.putCarrusel(carrusel, id);
      window.location.reload();
    } catch (error) {
      console.error("Error updating imagen:", error);
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
                Editar Imagen
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
                    <label htmlFor="image_url" className="form-label">
                      Url de la imagen
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="image_url"
                      name="image_url"
                      value={carrusel.image_url}
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

export default ImagenEdit;
