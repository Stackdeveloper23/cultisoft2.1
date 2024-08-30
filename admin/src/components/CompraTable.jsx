import { useEffect, useState } from "react";
import Config from "../Config";
import CompraCreate from "./CompraCreate";
import CompraEdit from "./CompraEdit";

const CompraTable = () => {
    const [compras, setCompras] = useState([]);

    useEffect(() => {
      const Compras = async () => {
        try {
          const response = await Config.getCompras();
          console.log("Response completa:", response);
  
          if (Array.isArray(response.data)) {
            setCompras(response.data);
          } else {
            console.error("La respuesta no es un array:", response);
            setCompras([]);
          }
        } catch (error) {
          console.error("Error fetching products:", error);
          setCompras([]);
        }
      };
  
      
  
      Compras();
    }, []);
  
    const deleteCompraById = async (id) => {
      const isDelete = window.confirm("Eliminar Compra?");
      if (isDelete) {
          try {
              await Config.deleteCompras(id);
              window.location.reload();
            } catch (error) {
              console.error("Error deleting category:", error);
            }
      }
    };
  
    return (
        <>
        <h1 className="w-100 d-flex justify-content-center">Compras Table</h1>
        <div className="container">
          <div>
            <CompraCreate/> 
          </div>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Nombre</th>
                <th scope="col">Apellidos</th>
                <th scope="col">Departamento</th>
                <th scope="col">Ciudad</th>
                <th scope="col">Barrio</th>
                <th scope="col">Direccion</th>
                <th scope="col">Movil</th>
                <th scope="col">Movil2</th>
                <th scope="col">Referencia</th>
                <th scope="col">Carrito</th>
                <th scope="col">Creado el:</th>
                <th scope="col">Accion:</th>
              </tr>
            </thead>
            <tbody>
              {compras.map((compra, index) => (
                <tr key={compra.id || index}>
                  <th scope="row">{index + 1}</th>
                  {/* <td>{product.id || 'N/A'}</td> */}
                  <td>{compra.nombre || "N/A"}</td>
                  <td>{compra.apellidos || "N/A"}</td>
                  <td>{compra.departamento || "N/A"}</td>
                  <td>{compra.ciudad || "N/A"}</td>
                  <td>{compra.barrio || "N/A"}</td>
                  <td>{compra.direccion || "N/A"}</td>
                  <td>{compra.movil || "N/A"}</td>
                  <td>{compra.movil2 || "N/A"}</td>
                  <td>{compra.referencias || "N/A"}</td>
                  <td>{compra.carts_id || "N/A"}</td>

                  <td>{new Date(compra.created_at).toLocaleDateString("es-CO") || "N/A"}</td>
                  <td>
                   <CompraEdit id={compra.id} /> 
                    <button
                      className="btn btn-danger d-flex w-30"
                      onClick={() => deleteCompraById(compra.id)}
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
    )
}
export default CompraTable;