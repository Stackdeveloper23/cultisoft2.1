import { useEffect, useState } from "react";
import SoporteEdit from "./SoporteEdit";
import SoporteCreate from "./SoporteCreate";
import Config from "../../Config";

const SoporteTable = () => {
  const [soportes, setSoportes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [categoriesPerPage] = useState(5); 

  useEffect(() => {
    const Soporte = async () => {
      try {
        const response = await Config.getSoporte();
        console.log("Response completa:", response);

        if (Array.isArray(response.data)) {
            setSoportes(response.data);
        } else {
          console.error("La respuesta no es un array:", response);
          setSoportes([]);
        }
      } catch (error) {
        console.error("Error fetching soporte:", error);
        setSoportes([]);
      }
    };

    

    Soporte();
  }, []);

  const deleteSoporteById = async (id) => {
    const isDelete = window.confirm("Eliminar Registro?");
    if (isDelete) {
        try {
            await Config.deleteSoporte(id);
            window.location.reload();
          } catch (error) {
            console.error("Error deleting category:", error);
          }
    }
  };

  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentSoporte= soportes.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <h1 className="w-100 d-flex justify-content-center">Soporte Table</h1>
      <div className="container">
        <div>
          <SoporteCreate/>
        </div>
        <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>             
              <th scope="col">id</th>
              <th scope="col">Tipo de solicitud</th>
              <th scope="col">Nombre</th>
              <th scope="col">identificacion</th>
              <th scope="col">movil</th>
              <th scope="col">Email</th>
              <th scope="col">Asunto</th>
              <th scope="col">Factura</th>
              <th scope="col">Descripcion:</th>
              <th scope="col">Fecha de creacion:</th>
              <th scope="col">Accion:</th>
            </tr>
          </thead>
          <tbody>
            {currentSoporte.map((soporte, index) => (
              <tr key={soporte.id || index}>
                <th scope="row">{index + 1}</th>
                <td>{soporte.id || 'N/A'}</td>
                <td>{soporte.tipo_solicitud || "N/A"}</td>
                <td>{soporte.nombre || "N/A"}</td>
                <td>{soporte.identificacion || "N/A"}</td>
                <td>{soporte.movil || "N/A"}</td>   
                <td>{soporte.email || "N/A"}</td>  
                <td>{soporte.asunto || "N/A"}</td>
                <td>{soporte.factura || "N/A"}</td>  
                <td>{soporte.descripcion || "N/A"}</td>               
                <td>{new Date(soporte.created_at).toLocaleDateString("es-CO") || "N/A"}</td>
                <td>
                  <SoporteEdit id={soporte.id} />

                  <button
                    className="btn btn-danger d-flex w-30"
                    onClick={() => deleteSoporteById(soporte.id)}
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
              { length: Math.ceil(soportes.length / categoriesPerPage) },
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
                Math.ceil(soportes.length / categoriesPerPage)
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
      </div>
    </>
  );
};
export default SoporteTable;
