import { useEffect, useState } from "react";
import Config from "../Config";
import CategoryEdit from "./CategoryEdit";
import CategoryCreate from "./CategoryCreate";

const CategoryTable = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const Products = async () => {
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

    

    Products();
  }, []);

  const deleteCategoryById = async (id) => {
    const isDelete = window.confirm("Delete category?");
    if (isDelete) {
        try {
            await Config.deleteCategories(id);
            window.location.reload();
          } catch (error) {
            console.error("Error deleting category:", error);
          }
    }
  };

  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">Category Table</h1>
      <div className="container">
        <div>
          <CategoryCreate/>
        </div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nombre</th>
              <th scope="col">Descripcion</th>
              <th scope="col">Creado el:</th>
              <th scope="col">Accion:</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, index) => (
              <tr key={category.id || index}>
                <th scope="row">{index + 1}</th>
                {/* <td>{product.id || 'N/A'}</td> */}
                <td>{category.name || "N/A"}</td>
                <td>{category.description || "N/A"}</td>
                <td>{category.created_at || "N/A"}</td>
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
      </div>
    </>
  );
};
export default CategoryTable;
