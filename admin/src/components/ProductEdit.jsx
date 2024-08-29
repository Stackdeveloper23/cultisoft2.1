import { useEffect, useState } from "react";
import Config from "../Config";

const ProductEdit = ({ id }) => {
  const [product, setProduct] = useState({
    name: '',
    status: '',
    description: '',
    price: '',
    image_path: '',
    quantity:'',
    category_id:'',
  });

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await Config.getProductsById(id);
        setProduct({
          name: response.data.name,
          status: response.data.status,          
          description: response.data.description,
          price: response.data.price,
          image_path: response.data.image_path,
          quantity: response.data.quantity,
          category_id: response.data.category_id,
        });
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    if (id) fetchUser();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProduct({
      ...product,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await Config.putProducts(product, id);
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
                    <label htmlFor="name" className="form-label">
                      Nombre
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={product.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="status" className="form-label">
                      Estado
                    </label>
                    <input
                      className="form-control"
                      id="status"
                      name="status"
                      value={product.status}
                      onChange={handleInputChange}
                      required
                    />
                  </div>  
                  <div className="mb-3">
                    <label htmlFor="description" className="form-label">
                      Description
                    </label>
                    <input
                      className="form-control"
                      id="description"
                      name="description"
                      value={product.description}
                      onChange={handleInputChange}
                      required
                    />
                  </div>  
                  <div className="mb-3">
                    <label htmlFor="price" className="form-label">
                      Estado
                    </label>
                    <input
                      className="form-control"
                      id="price"
                      name="price"
                      value={product.price}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="imagen" className="form-label">
                      Imagen
                    </label>
                    <input
                      className="form-control"
                      id="imagen"
                      name="imagen"
                      value={product.image_path}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                   <div className="mb-3">
                    <label htmlFor="quantity" className="form-label">
                      Estado
                    </label>
                    <input
                      className="form-control"
                      id="quantity"
                      name="quantity"
                      value={product.quantity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="category_id" className="form-label">
                      Estado
                    </label>
                    <input
                      className="form-control"
                      id="category_id"
                      name="category_id"
                      value={product.category_id}
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

export default ProductEdit;
