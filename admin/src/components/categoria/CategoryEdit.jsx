import { useEffect, useState } from "react";
import Config from "../../Config";

const CategoryEdit = ({ id }) => {
  const [category, setCategory] = useState({
    name: '',
    description: '',
    imagen: '',
  });
  useEffect(() => {
    const fetchCategory = async () => {
      try {
        const response = await Config.getCategoryById(id);
        //console.log('respuesto categoria', response.data)
        setCategory({
          name: response.data.name,
          description: response.data.description,
          imagen: response.data.imagen,
        });
      } catch (error) {
        console.error("Error fetching category:", error);

      }
    };

    if (id) fetchCategory(); // Solo cargar datos si el id existe
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCategory({
      ...category,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.putCategories(category, id);
      window.location.reload();
    } catch (error) {
      console.error("Error updating category:", error);
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
                Editar Categoría
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
                      value={category.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Descripción
                    </label>
                    <textarea
                      className="form-control"
                      id="description"
                      name="description"
                      value={category.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">
                    imagen
                    </label>
                    <textarea
                      className="form-control"
                      id="imagen"
                      name="imagen"
                      value={category.imagen}
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

export default CategoryEdit;
