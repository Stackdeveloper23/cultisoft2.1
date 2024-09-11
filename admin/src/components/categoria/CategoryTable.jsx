import { useEffect, useState } from "react";
import Config from "../../Config";
import CategoryEdit from "./CategoryEdit";
import CategoryCreate from "./CategoryCreate";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5); 

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await Config.getCategories();
        console.log("Response completa:", response);

        if (Array.isArray(response.data)) {
          setCategories(response.data);
        } else {
          console.error("La respuesta no es un array:", response);
          setCategories([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setCategories([]);
      }
    };

    fetchCategories();
  }, []);

  const deleteCategoryById = async (id) => {
    const isDelete = window.confirm("Delete category?");
    if (isDelete) {
      try {
        await Config.deleteCategories(id);
        setCategories((prevCategories) =>
          prevCategories.filter((category) => category.id !== id)
        );
      } catch (error) {
        console.error("Error deleting category:", error);
      }
    }
  };

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">Category Table</h1>
      <div className="container">
        <div>
          <CategoryCreate />
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">id Categoria</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Imagen</th>
              <th scope="col">Creado el:</th>
              <th scope="col">Accion:</th>
            </tr>
          </thead>
          <tbody>
            {currentCategories.map((category, index) => (
              <tr key={category.id || index}>
                <th scope="row">{indexOfFirstCategory + index + 1}</th>
                
                <td>{category.id || "N/A"}</td>
                <td>{category.name || "N/A"}</td>
                <td>{category.description || "N/A"}</td>
                <td>
              {category.imagen ? (
                <img
                  src={category.imagen}
                  alt={category.name}
                  style={{ width: '100px', height: 'auto' }} 
                    />
              ) : (
                "N/A"
              )}
            </td>
                <td>
                  {new Date(category.created_at).toLocaleDateString("es-CO") ||
                    "N/A"}
                </td>
              
                <td>
                  <CategoryEdit id={category.id} />
                  <button
                    className="btn btn-danger d-flex w-30"
                    onClick={() => deleteCategoryById(category.id)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
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
              { length: Math.ceil(categories.length / categoriesPerPage) },
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
                currentPage ===
                Math.ceil(categories.length / categoriesPerPage)
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

export default CategoryTable;

