import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Config from "../../Config";

const ProductCreate = () => {
  const { id } = useParams();
  const [name, setName] = useState();
  const [status, setStatus] = useState();
  const [description, setDescription] = useState();
  const [price, setPrice] = useState();
  const [image_path, setImage_path] = useState();
  const [category_id, setCategory_id] = useState();

  const [categories, setCategories] = useState([]);

  const create = async (ev) => {
    ev.preventDefault();
    try {
      const data = {
        name,
        status,
        description,
        price,
        image_path,
        category_id,
      };
      await Config.createProducts(data, id);
      window.location.reload();
    } catch (error) {
      console.log("error al crear el producto", error);
    }
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Config.getCategories();
        console.log("categorias", response.data);
        setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  return (
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
                Crear Producto
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
                <form onSubmit={create} className="d-flex flex-column">
                  <label htmlFor="">Nombre:</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                  <label htmlFor="">Estado:</label>
                  <select value={status} onChange={(e) => setStatus(e.target.value)}>
  <option value="">Seleccione una opción</option> {/* Opción por defecto */}
  <option value="opcion1"> Disponible</option>
  <option value="opcion2">NO disponible</option>
</select>
                  <label htmlFor="">Descripcion:</label>
                  <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                  <label htmlFor="">Precio:</label>
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                  <label htmlFor="">Imagen:</label>
                  <input
                    type="text"
                    value={image_path}
                    onChange={(e) => setImage_path(e.target.value)}
                  />
                  <div className="form-group">
                    <label htmlFor="categorySelect">
                      Selecciona una categoria
                    </label>
                    <select
                      id="categorySelect"
                      className="form-control"
                      value={category_id}
                      onChange={(e) => setCategory_id(e.target.value)}
                    >
                      <option value="0">Choose a category</option>
                      {categories.length > 0 ? (
                        categories.map((category) => (
                          <option key={category.id} value={category.id}>
                            {category.name}
                          </option>
                        ))
                      ) : (
                        <option value="" disabled>
                          No categories available
                        </option>
                      )}
                    </select>
                  </div>
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
  );
};
export default ProductCreate;
