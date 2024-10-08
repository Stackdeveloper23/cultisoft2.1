/*import { useEffect, useState } from "react";
import Config from "../../Config";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";

const ProductTable = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const Products = async () => {
      try {
        const response = await Config.getProducts();
        console.log("Response completa:", response);

        if (Array.isArray(response.data)) {
            setProducts(response.data);
        } else {
          console.error("La respuesta no es un array:", response);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    

    Products();
  }, []);

  const deleteProductById = async (id) => {
    const isDelete = window.confirm("Delete User?");
    if (isDelete) {
        try {
            await Config.deleteProducts(id);
            window.location.reload();
          } catch (error) {
            console.error("Error deleting category:", error);
          }
    }
  };

  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">Product Table</h1>
      <div className="">
        <div>
          <ProductCreate/>
        </div>
        <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>             
              <th scope="col">id</th>
              <th scope="col">Nombre</th>
              <th scope="col">Estado</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Precio</th>
              <th scope="col">Imagen:</th>
              <th scope="col">Cantidad:</th>
              <th scope="col">Categoria:</th>
              <th scope="col">Accion:</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, index) => (
              <tr key={product.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{product.id || 'N/A'}</td>
                <td>{product.name || "N/A"}</td>
                <td>{product.status || "N/A"}</td>
                <td>{product.description || "N/A"}</td>   
                <td>{product.price || "N/A"}</td>  
                <td>{product.image_path || "N/A"}</td>
                <td>{product.quantity || "N/A"}</td>
                <td>{product.category_id || "N/A"}</td>               
                <td>{new Date(product.created_at).toLocaleDateString("es-CO") || "N/A"}</td>
                <td>
                  <ProductEdit id={product.id} />

                  <button
                    className="btn btn-danger d-flex w-30"
                    onClick={() => deleteProductById(product.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      </div>
    </>
  );
};
export default ProductTable;*/


import { useEffect, useState } from "react";
import Config from "../../Config";
import ProductEdit from "./ProductEdit";
import ProductCreate from "./ProductCreate";

const ProductTable = () => {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(5); // Número de productos por página

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await Config.getProducts();
        console.log("Response completa:", response);

        if (Array.isArray(response.data)) {
          setProducts(response.data);
        } else {
          console.error("La respuesta no es un array:", response);
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      }
    };

    fetchProducts();
  }, []);

  const deleteProductById = async (id) => {
    const isDelete = window.confirm("Delete User?");
    if (isDelete) {
      try {
        await Config.deleteProducts(id);
        // Eliminar el producto del estado sin recargar la página
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } catch (error) {
        console.error("Error deleting product:", error);
      }
    }
  };

  // Calcular los productos actuales para la página
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Manejar el cambio de página
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">Product Table</h1>
      <div className="">
        <div>
          <ProductCreate />
        </div>
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">ID</th>
                <th scope="col">Nombre</th>
                <th scope="col">Estado</th>
                <th scope="col">Descripción</th>
                <th scope="col">Precio</th>
                <th scope="col">Imagen</th>
                <th scope="col">Categoría</th>
                <th scope="col">Acción</th>
              </tr>
            </thead>
            <tbody>
              {currentProducts.map((product, index) => (
                <tr key={product.id || index}>
                  <th scope="row">{indexOfFirstProduct + index + 1}</th>
                  <td>{product.id || "N/A"}</td>
                  <td>{product.name || "N/A"}</td>
                  <td>{product.status || "N/A"}</td>
                  <td>{product.description || "N/A"}</td>
                  <td>{product.price || "N/A"}</td>
                  <td>
              {product.image_path ? (
                <img
                  src={product.image_path}
                  alt={product.name}
                  style={{ width: '100px', height: 'auto' }} 
                    />
              ) : (
                "N/A"
              )}
            </td>
                  <td>{product.category_id || "N/A"}</td>
                  <td>
                    <ProductEdit id={product.id} />
                    <button
                      className="btn btn-danger d-flex w-30"
                      onClick={() => deleteProductById(product.id)}
                    >
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Paginación */}
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                className="page-link"
                onClick={() => paginate(currentPage - 1)}
              >
                Anterior
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(products.length / productsPerPage) },
              (_, index) => (
                <li
                  key={index + 1}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    className="page-link"
                    onClick={() => paginate(index + 1)}
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li
              className={`page-item ${
                currentPage === Math.ceil(products.length / productsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                className="page-link"
                onClick={() => paginate(currentPage + 1)}
              >
                Siguiente
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default ProductTable;
